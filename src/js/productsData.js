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
    price50: 1499,
    priceFormatted50: '₹1,499',
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
      hero: '/perfumes_images1/mistique_frame2.jpeg',
      poster: '/perfumes_images1/all_perfume_image.png',
      gallery: [
        '/perfumes_images1/mistique_frame1.jpeg',
        '/perfumes_images1/mistique_frame2.jpeg',
        '/perfumes_images1/mistique_frame3.jpeg'
      ]
    },
    notes: {
      top: [
        { name: 'Italian Cypress', accord: 'Fresh Coniferous' },
        { name: 'Myrtle', accord: 'Herbal Aromatic' },
        { name: 'Rose', accord: 'Delicate Floral' }
      ],
      heart: [
        { name: 'Sandalwood', accord: 'Warm Milky Woody' },
        { name: 'Cedar', accord: 'Dry Architectural Bark' }
      ],
      base: [
        { name: 'Amber', accord: 'Resinous Warmth' },
        { name: 'White Musk', accord: 'Skin Velvet' },
        { name: 'Brazilian Rosewood', accord: 'Rare Noble Timber' }
      ]
    },
    craftStory: 'Inspired by early dawn over the Konkan coastline where sea mist grazes coastal cypress and rosewood groves.'
  },

  {
    id: 'blanc',
    name: 'BLANC',
    subtitle: 'Extrait de Parfum',
    family: 'Luminous Oriental Floral',
    tagline: 'The pure radiance of white alabaster and rare saffron.',
    description: 'A luminous opening of bergamot, lemon, and pink pepper gives way to an opulent heart of rose, blooming jasmine, and saffron, settled on precious white oud, sandalwood, amber, musk, and velvety vanilla.',
    price50: 1499,
    priceFormatted50: '₹1,499',
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
        { name: 'Bergamot', accord: 'Sparkling Citrus' },
        { name: 'Lemon', accord: 'Bright Zesty' },
        { name: 'Pink Pepper', accord: 'Spiced Effervescence' }
      ],
      heart: [
        { name: 'Rose', accord: 'Velvety Petals' },
        { name: 'Jasmine', accord: 'Opulent White Bloom' },
        { name: 'Saffron', accord: 'Golden Leather Warmth' }
      ],
      base: [
        { name: 'White Oud (Soft Oud Accord)', accord: 'Smooth Noble Wood' },
        { name: 'Sandalwood', accord: 'Creamy Woodiness' },
        { name: 'Amber', accord: 'Warm Glow' },
        { name: 'Musk', accord: 'Sensual Velvet' },
        { name: 'Vanilla', accord: 'Gourmand Warmth' }
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
    description: 'An intoxicating ode to pure white florals. Fresh jasmine buds unfurl into creamy, voluptuous tuberose, anchored by the hypnotic, powdery floral trail of Rangoon creeper.',
    price50: 1499,
    priceFormatted50: '₹1,499',
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
        { name: 'Tuberose', accord: 'Voluptuous Creamy Floral' }
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
    description: 'A commanding surge of grapefruit, lemon, mint, pink pepper, and bergamot gives way to an invigorating heart of ginger, nutmeg, and jasmine, grounded in a smoldering aura of incense, cedar, sandalwood, patchouli, vetiver, labdanum, and white musk.',
    price50: 1499,
    priceFormatted50: '₹1,499',
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
        { name: 'Grapefruit', accord: 'Crisp Citrus Spark' },
        { name: 'Lemon', accord: 'Bright Zest' },
        { name: 'Mint', accord: 'Cool Herbal Zing' },
        { name: 'Pink Pepper', accord: 'Dry Piquant Warmth' },
        { name: 'Bergamot', accord: 'Luminous Elegance' }
      ],
      heart: [
        { name: 'Ginger', accord: 'Fiery Fresh Spice' },
        { name: 'Nutmeg', accord: 'Warm Sweet Spice' },
        { name: 'Jasmine', accord: 'Subtle White Floral Bridge' }
      ],
      base: [
        { name: 'Incense', accord: 'Smoky Mystical Veil' },
        { name: 'Cedar', accord: 'Architectural Timber' },
        { name: 'Sandalwood', accord: 'Creamy Depth' },
        { name: 'Patchouli', accord: 'Earthy Grounding Trail' },
        { name: 'Vetiver', accord: 'Smoky Roots' },
        { name: 'Labdanum', accord: 'Amber Leather' },
        { name: 'White Musk', accord: 'Second Skin Velvet' }
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
    description: 'An intoxicating cascade of strawberry, raspberry, blackberry, cherry, black currant, mandarin orange, and lemon draped over powdery violet and blooming jasmine, resting upon a velvety cushion of musk, vanilla, cashmeran, oakmoss, amber, and patchouli.',
    price50: 1499,
    priceFormatted50: '₹1,499',
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
        { name: 'Strawberry', accord: 'Lush Forest Sweetness' },
        { name: 'Raspberry', accord: 'Tart Vibrant Berry' },
        { name: 'Blackberry', accord: 'Rich Juicy Dark' },
        { name: 'Cherry', accord: 'Deep Sweet Nectar' },
        { name: 'Black Currant', accord: 'Crisp Cassis' },
        { name: 'Mandarin Orange', accord: 'Golden Citrus Sparkle' },
        { name: 'Lemon', accord: 'Zesty Freshness' }
      ],
      heart: [
        { name: 'Violet', accord: 'Powdery Aristocratic Floral' },
        { name: 'Jasmine', accord: 'Nocturnal White Bloom' }
      ],
      base: [
        { name: 'Musk', accord: 'Intimate Skin Velvet' },
        { name: 'Vanilla', accord: 'Bourbon Sweet Warmth' },
        { name: 'Cashmeran', accord: 'Tactile Cashmere Wool' },
        { name: 'Oakmoss', accord: 'Earthy Forest Floor' },
        { name: 'Amber', accord: 'Golden Opulent Glow' },
        { name: 'Patchouli', accord: 'Hypnotic Dark Trail' }
      ]
    },
    craftStory: 'Crafted to simulate the decadent weight of bespoke green velvet against bare skin on a gala evening.'
  }
];

export const BOUTIQUE_INFO = {
  name: 'DeLiora Essence by Patidar',
  address: '3, Satam Park Colony, Mushakhedi Ring Road Square, Indore, Madhya Pradesh',
  phone: '+91 7771033947',
  email: 'DELIORAESSENCE2026@gmail.com',
  amazonStoreUrl: 'https://www.amazon.in/dp/B0DELIORA',
  flipkartStoreUrl: 'https://www.flipkart.com/deliora-essence'
};
