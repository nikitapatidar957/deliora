"""
Database migration: Apply 40% discount from .env to perfume products
"""
import os
import ssl
import certifi
from datetime import datetime, timezone
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

uri = os.getenv("MONGODB_URI")
discount_str = os.getenv("DISCOUNT_PERCENT", "40")
try:
    discount_percent = float(discount_str)
except ValueError:
    discount_percent = 40.0

client = MongoClient(
    uri,
    tls=True,
    tlsCAFile=certifi.where(),
    serverSelectionTimeoutMS=10000,
)

def apply_discount_to_products():
    db = client["deliora"]
    products_col = db["products"]

    print(f"Connecting to MongoDB Atlas. Applying {discount_percent}% discount to products...")

    products = list(products_col.find())
    if not products:
        print("No products found in 'products' collection.")
        return

    for p in products:
        # Base original price is 1499.0 if not already stored
        original_price = float(p.get("original_price") or p.get("price") or 1499.0)
        discount_amount = round(original_price * (discount_percent / 100.0))
        discounted_price = float(round(original_price - discount_amount))

        update_fields = {
            "original_price": original_price,
            "discount_percent": discount_percent,
            "discount_amount": discount_amount,
            "discounted_price": discounted_price,
            "price": discounted_price,  # Minus the actual perfume price in the database
            "updated_at": datetime.now(timezone.utc).isoformat()
        }

        products_col.update_one(
            {"_id": p["_id"]},
            {"$set": update_fields}
        )
        print(f"Product {p.get('name')}: Original: ₹{original_price} -> Discounted ({discount_percent}% off): ₹{discounted_price}")

    print("\nUpdated all products in database successfully.")

if __name__ == "__main__":
    try:
        apply_discount_to_products()
    except Exception as e:
        print("Migration failed:", repr(e))
    finally:
        client.close()
