/**
 * DeLiora Essence by Patidar
 * Core Fragrance Catalog & Specifications (Updated with perfumes_images1 Assets)
 */

export const FRAGRANCES = [
  {
    id: 'mistique',
    name: 'MISTIQUE',
    subtitle: 'Extrait de Parfum',
    family: 'Aquatic Woody Floral',
    tagline: 'The whisper of sea mist and sacred cedarwood.',
    description: 'An ethereal oceanic universe opening with invigorating cypress and maritime myrtle, deepening into creamy Indian sandalwood, and resting upon a lingering trail of luminous amber and Brazilian rosewood.',
    price50: 4850,
    price100: 7450,
    priceFormatted50: '₹4,850',
    priceFormatted100: '₹7,450',
    theme: {
      key: 'aqua',
      bg: '#0a1d22',
      accent: '#a9d9d5',
      accentGlow: 'rgba(169, 217, 213, 0.25)',
      textPrimary: '#f0f9f8',
      textSecondary: '#a5c4c2',
      tagColor: '#5eb3ad'
    },
    images: {
      hero: '/perfumes_images1/mistique.png',
      poster: '/perfumes_images1/all_perfume_image.png',
      gallery: [
        '/perfumes_images1/mistique.png',
        '/perfumes_images1/all_perfume_image.png'
      ]
    },
    notes: {
      top: [
        { name: 'Italian Cypress', accord: 'Fresh Coniferous' },
        { name: 'Myrtle', accord: 'Herbal Aromatic' },
        { name: 'Rose Petals', accord: 'Delicate Floral' }
      ],
      heart: [
        { name: 'Mysore Sandalwood', accord: 'Warm Milky Woody' },
        { name: 'Atlas Cedar', accord: 'Dry Architectural Bark' }
      ],
      base: [
        { name: 'Golden Amber', accord: 'Resinous Warmth' },
        { name: 'White Musk', accord: 'Skin Velvet' },
        { name: 'Brazilian Rosewood', accord: 'Rare Noble Timber' }
      ]
    },
    craftStory: 'Inspired by early dawn over the Konkan coastline where sea mist grazes ancient coastal cypress groves.'
  },

  {
    id: 'blanc',
    name: 'BLANC',
    subtitle: 'Extrait de Parfum',
    family: 'Luminous Oriental Floral',
    tagline: 'The pure radiance of white alabaster and rare saffron.',
    description: 'A crystalline opening of Italian bergamot and sparkling pink pepper gives way to a decadent heart of Kashmiri saffron and blooming jasmine, settled on precious white oud and velvety Bourbon vanilla.',
    price50: 5250,
    price100: 7950,
    priceFormatted50: '₹5,250',
    priceFormatted100: '₹7,950',
    theme: {
      key: 'ivory',
      bg: '#171614',
      accent: '#e6ded3',
      accentGlow: 'rgba(230, 222, 211, 0.25)',
      textPrimary: '#faf8f5',
      textSecondary: '#c8bfb3',
      tagColor: '#bfae99'
    },
    images: {
      hero: '/perfumes_images1/blanc1.png',
      secondary: '/perfumes_images1/blanc2.png',
      gallery: [
        '/perfumes_images1/blanc1.png',
        '/perfumes_images1/blanc2.png',
        '/perfumes_images1/all_perfume_image.png'
      ]
    },
    notes: {
      top: [
        { name: 'Calabrian Bergamot', accord: 'Sparkling Citrus' },
        { name: 'Amalfi Lemon', accord: 'Zesty Radiance' },
        { name: 'Pink Pepper', accord: 'Spiced Effervescence' }
      ],
      heart: [
        { name: 'Damask Rose', accord: 'Velvety Crimson Petals' },
        { name: 'Sambac Jasmine', accord: 'Nocturnal White Bloom' },
        { name: 'Kashmiri Saffron', accord: 'Golden Leather Warmth' }
      ],
      base: [
        { name: 'Precious White Oud', accord: 'Clean Resinous Timber' },
        { name: 'Sandalwood', accord: 'Creamy Woodiness' },
        { name: 'Amber & Musk', accord: 'Sensual Cocoon' },
        { name: 'Bourbon Vanilla', accord: 'Gourmand Warmth' }
      ]
    },
    craftStory: 'Evoking the moonlit marble courtyards of Rajasthan, bathed in the soft glow of celestial white florals.'
  },

  {
    id: 'fleur',
    name: 'FLEUR',
    subtitle: 'Extrait de Parfum',
    family: 'Intoxicating White Floral',
    tagline: 'A delicate opening. A captivating heart. A trail that stays.',
    description: 'An unapologetic ode to sacred Indian florals. Sun-drenched jasmine buds unfurl into creamy, voluptuous tuberose, anchored by the enigmatic sweetness of red-blooming Rangoon creeper.',
    price50: 4950,
    price100: 7650,
    priceFormatted50: '₹4,950',
    priceFormatted100: '₹7,650',
    theme: {
      key: 'blush',
      bg: '#230b12',
      accent: '#d9a0a4',
      accentGlow: 'rgba(217, 160, 164, 0.28)',
      textPrimary: '#fdf4f5',
      textSecondary: '#ddb3b7',
      tagColor: '#cf7e85'
    },
    video: '/perfumes_images1/fleur3.mp4',
    videoSecondary: '/perfumes_images1/fleur2.mp4',
    images: {
      hero: '/perfumes_images1/all_perfume_image.png',
      gallery: [
        '/perfumes_images1/all_perfume_image.png'
      ]
    },
    notes: {
      top: [
        { name: 'Jasmine Bud', accord: 'Fresh Green Petal Opening' }
      ],
      heart: [
        { name: 'Madurai Tuberose', accord: 'Opulent Creamy Floral' }
      ],
      base: [
        { name: 'Rangoon Creeper', accord: 'Honeyed Powder Drydown' }
      ]
    },
    craftStory: 'Harvested at twilight in Tamil Nadu, capturing the exact breath of blossoming jasmine before sunrise.'
  },

  {
    id: 'alpha',
    name: 'ALPHA',
    subtitle: 'Extrait de Parfum',
    family: 'Smoky Woody Spicy',
    tagline: 'The commanding presence of charred cedar and warm spices.',
    description: 'A striking clash of zesty grapefruit, crushed mint, and vibrant spices giving way to a heart of fresh ginger and nutmeg, resting on a smoldering foundation of ceremonial incense, Haitian vetiver, and dark patchouli.',
    price50: 5450,
    price100: 8250,
    priceFormatted50: '₹5,450',
    priceFormatted100: '₹8,250',
    theme: {
      key: 'amber',
      bg: '#1e140d',
      accent: '#d48c46',
      accentGlow: 'rgba(212, 140, 70, 0.28)',
      textPrimary: '#fbf5ee',
      textSecondary: '#d8baa0',
      tagColor: '#b87532'
    },
    images: {
      hero: '/perfumes_images1/alpha1.png',
      gallery: [
        '/perfumes_images1/alpha1.png',
        '/perfumes_images1/all_perfume_image.png'
      ]
    },
    notes: {
      top: [
        { name: 'Ruby Grapefruit', accord: 'Bitter Citrus Spark' },
        { name: 'Crushed Peppermint', accord: 'Cool Electric Zing' },
        { name: 'Pink Peppercorn', accord: 'Dry Piquant Warmth' },
        { name: 'Calabrian Bergamot', accord: 'Luminous Elegance' }
      ],
      heart: [
        { name: 'Wild Cochin Ginger', accord: 'Fiery Fresh Spice' },
        { name: 'Indonesian Nutmeg', accord: 'Warm Sweet Spice' },
        { name: 'Nocturnal Jasmine', accord: 'Dark Floral Bridge' }
      ],
      base: [
        { name: 'Temple Incense', accord: 'Smoky Mystical Veil' },
        { name: 'Atlas Cedar & Sandalwood', accord: 'Architecture & Depth' },
        { name: 'Dark Patchouli & Vetiver', accord: 'Earthy Grounding Trail' },
        { name: 'Cistus Labdanum & White Musk', accord: 'Animalic Amber Warmth' }
      ]
    },
    craftStory: 'A salute to royal charisma — blending the ancient spice caravans of Malabar with modern sartorial tailoring.'
  },

  {
    id: 'velvet',
    name: 'VELVET',
    subtitle: 'Extrait de Parfum',
    family: 'Fruity Amber Gourmand',
    tagline: 'Deep emerald allure wrapped in wild berries and warm cashmere.',
    description: 'An intoxicating cascade of crushed dark berries, black currant, and sun-warmed citrus draped over powdery violet and white jasmine. The drydown unveils a luxurious cushion of cashmeran, oakmoss, amber, and Madagascar vanilla.',
    price50: 5150,
    price100: 7850,
    priceFormatted50: '₹5,150',
    priceFormatted100: '₹7,850',
    theme: {
      key: 'emerald',
      bg: '#0a1d17',
      accent: '#5eb396',
      accentGlow: 'rgba(94, 179, 150, 0.28)',
      textPrimary: '#f1fbf7',
      textSecondary: '#a5cfc0',
      tagColor: '#3d9477'
    },
    images: {
      hero: '/perfumes_images1/velvet1.png',
      gallery: [
        '/perfumes_images1/velvet1.png',
        '/perfumes_images1/all_perfume_image.png'
      ]
    },
    notes: {
      top: [
        { name: 'Wild Strawberry & Blackberry', accord: 'Lush Forest Nectar' },
        { name: 'Cassis Black Currant', accord: 'Tart Sophistication' },
        { name: 'Mandarin & Lemon Peel', accord: 'Sunburst Citrus' }
      ],
      heart: [
        { name: 'Powdery Parma Violet', accord: 'Velvety Aristocratic Floral' },
        { name: 'Night Jasmine', accord: 'Sensual Liqueur' }
      ],
      base: [
        { name: 'Cashmeran & Amber', accord: 'Opulent Tactile Warmth' },
        { name: 'Bourbon Vanilla & Oakmoss', accord: 'Deep Earthy Sweetness' },
        { name: 'Indonesian Patchouli', accord: 'Hypnotic Dark Trail' }
      ]
    },
    craftStory: 'Crafted to simulate the decadent weight of bespoke green velvet against bare skin on a gala evening.'
  }
];

export const BOUTIQUE_INFO = {
  name: 'House of DeLiora Flagship Atelier',
  address: 'Plot No. 12, Heritage Boulevard, Vijay Nagar, Indore, Madhya Pradesh 452010, India',
  hours: 'Monday – Sunday: 11:00 AM – 9:00 PM IST',
  phone: '+91 (0) 731 492 8800',
  conciergeEmail: 'concierge@delioraessence.com',
  services: [
    'Private Olfactory Consultation',
    'Custom Flacon Monogramming & Engraving',
    'Haute Parfumerie Bespoke Gifting',
    'VIP Bottle Sampling Bar'
  ],
  amazonStoreUrl: 'https://www.amazon.in/dp/B0DELIORA',
  flipkartStoreUrl: 'https://www.flipkart.com/deliora-essence'
};
