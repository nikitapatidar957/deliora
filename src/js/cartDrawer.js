/**
 * DeLiora Essence by Patidar
 * Luxury Shopping Bag Slide-Out Drawer & State Management
 */

import { FRAGRANCES } from './productsData.js';

let cartItems = [];

export function initCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  const drawer = document.getElementById('cart-drawer');
  const openTriggers = document.querySelectorAll('.cart-open-trigger');
  const closeBtn = document.getElementById('cart-close-btn');
  const itemsContainer = document.getElementById('cart-items-container');
  const countBadge = document.getElementById('cart-badge-count');
  const subtotalEl = document.getElementById('cart-subtotal-val');

  if (!drawer || !overlay) return;

  function openCart() {
    overlay.classList.add('is-active');
    drawer.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    overlay.classList.remove('is-active');
    drawer.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  openTriggers.forEach(trigger => trigger.addEventListener('click', openCart));
  closeBtn?.addEventListener('click', closeCart);
  overlay.addEventListener('click', closeCart);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-active')) {
      closeCart();
    }
  });

  // Listen for 'cart:add'
  window.addEventListener('cart:add', (e) => {
    const { id, size } = e.detail;
    addToCart(id, size || '50');
    openCart();
  });

  function addToCart(fragranceId, size) {
    const fragrance = FRAGRANCES.find(f => f.id === fragranceId);
    if (!fragrance) return;

    const existingIndex = cartItems.findIndex(item => item.id === fragranceId && item.size === size);
    if (existingIndex > -1) {
      cartItems[existingIndex].quantity += 1;
    } else {
      const price = fragrance.price50 || 1499;
      cartItems.push({
        id: fragrance.id,
        name: fragrance.name,
        size: size,
        price: price,
        img: fragrance.images.hero,
        quantity: 1
      });
    }

    renderCart();
  }

  function renderCart() {
    const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (countBadge) countBadge.textContent = totalCount;
    if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;

    if (!itemsContainer) return;

    if (cartItems.length === 0) {
      itemsContainer.innerHTML = `
        <div class="cart-empty-state">
          <p style="font-family: var(--font-serif); font-size: 1.3rem; color: #FFFFFF; margin-bottom: 0.6rem;">
            Your Shopping Bag is Empty
          </p>
          <p style="font-size: 0.85rem; color: var(--color-ivory-muted);">
            Explore the DeLiora quintet to discover your signature scent.
          </p>
        </div>
      `;
      return;
    }

    itemsContainer.innerHTML = cartItems.map((item, idx) => `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}" class="cart-item-img" />
        <div>
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-size">${item.size}ml Extrait de Parfum</div>
          <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</div>
          <div class="cart-quantity-controls">
            <button class="qty-btn" data-action="dec" data-index="${idx}">−</button>
            <span class="qty-num">${item.quantity}</span>
            <button class="qty-btn" data-action="inc" data-index="${idx}">+</button>
          </div>
        </div>
        <button class="cart-item-remove" data-index="${idx}" aria-label="Remove item">&times;</button>
      </div>
    `).join('');

    // Wire quantity changes
    itemsContainer.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'));
        const action = btn.getAttribute('data-action');
        if (action === 'inc') {
          cartItems[idx].quantity += 1;
        } else if (action === 'dec') {
          if (cartItems[idx].quantity > 1) {
            cartItems[idx].quantity -= 1;
          } else {
            cartItems.splice(idx, 1);
          }
        }
        renderCart();
      });
    });

    itemsContainer.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'));
        cartItems.splice(idx, 1);
        renderCart();
      });
    });
  }

  // Initial render
  renderCart();
}
