/**
 * DeLiora Essence by Patidar
 * Standalone Application Bundle (Classic JavaScript - No Server or Node required)
 */
(function() {
  'use strict';

  // -------------------------------------------------------------
  // 1. Core Fragrance Data & Catalog
  // -------------------------------------------------------------
/**
 * DeLiora Essence by Patidar
 * Core Fragrance Catalog & Specifications (Updated with perfumes_images1 Assets)
 */

const DISCOUNT_PERCENT = Number(40) || 40;
const BASE_PERFUME_PRICE = 1499;
const DISCOUNTED_PERFUME_PRICE = Math.round(BASE_PERFUME_PRICE * (1 - DISCOUNT_PERCENT / 100));

const FRAGRANCES = [
  {
    id: 'mistique',
    name: 'MISTIQUE',
    subtitle: 'Extrait de Parfum',
    family: 'Aquatic Woody Floral',
    tagline: 'The whisper of sea mist and sacred cedarwood.',
    description: 'An ethereal oceanic universe opening with invigorating cypress and maritime myrtle, deepening into creamy Indian sandalwood, and resting upon a lingering trail of luminous amber and Brazilian rosewood.',
    price50: DISCOUNTED_PERFUME_PRICE,
    priceFormatted50: `₹${DISCOUNTED_PERFUME_PRICE.toLocaleString('en-IN')}`,
    originalPrice50: BASE_PERFUME_PRICE,
    originalPriceFormatted50: `₹${BASE_PERFUME_PRICE.toLocaleString('en-IN')}`,
    discountPercent: DISCOUNT_PERCENT,
    amazonUrl: 'https://amzn.in/d/0bNjknZJ',
    amazonQuestionsUrl: 'https://amzn.in/d/01A2txHh',
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
      hero: './perfumes_images1/mistique_frame2.jpeg',
      poster: './perfumes_images1/all_perfume_image.png',
      gallery: [
        './perfumes_images1/mistique_frame1.jpeg',
        './perfumes_images1/mistique_frame2.jpeg',
        './perfumes_images1/mistique_frame3.jpeg'
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
    price50: DISCOUNTED_PERFUME_PRICE,
    priceFormatted50: `₹${DISCOUNTED_PERFUME_PRICE.toLocaleString('en-IN')}`,
    originalPrice50: BASE_PERFUME_PRICE,
    originalPriceFormatted50: `₹${BASE_PERFUME_PRICE.toLocaleString('en-IN')}`,
    discountPercent: DISCOUNT_PERCENT,
    amazonUrl: 'https://amzn.in/d/00sse0Tl',
    amazonQuestionsUrl: 'https://amzn.in/d/0fCVIiQ4',
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
      hero: './perfumes_images1/blanc1.png',
      secondary: './perfumes_images1/blanc2.png',
      gallery: [
        './perfumes_images1/blanc1.png',
        './perfumes_images1/blanc2.png',
        './perfumes_images1/all_perfume_image.png'
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
    price50: DISCOUNTED_PERFUME_PRICE,
    priceFormatted50: `₹${DISCOUNTED_PERFUME_PRICE.toLocaleString('en-IN')}`,
    originalPrice50: BASE_PERFUME_PRICE,
    originalPriceFormatted50: `₹${BASE_PERFUME_PRICE.toLocaleString('en-IN')}`,
    discountPercent: DISCOUNT_PERCENT,
    amazonUrl: 'https://amzn.in/d/0iDDxwBJ',
    amazonQuestionsUrl: 'https://amzn.in/d/04tHRArB',
    theme: {
      key: 'blush',
      bg: '#230b12',
      accent: '#d9a0a4',
      accentGlow: 'rgba(217, 160, 164, 0.28)',
      textPrimary: '#fdf4f5',
      textSecondary: '#ddb3b7',
      tagColor: '#cf7e85'
    },
    video: './perfumes_images1/fleur3.mp4',
    videoSecondary: './perfumes_images1/fleur2.mp4',
    images: {
      hero: './perfumes_images1/all_perfume_image.png',
      gallery: [
        './perfumes_images1/all_perfume_image.png'
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
    price50: DISCOUNTED_PERFUME_PRICE,
    priceFormatted50: `₹${DISCOUNTED_PERFUME_PRICE.toLocaleString('en-IN')}`,
    originalPrice50: BASE_PERFUME_PRICE,
    originalPriceFormatted50: `₹${BASE_PERFUME_PRICE.toLocaleString('en-IN')}`,
    discountPercent: DISCOUNT_PERCENT,
    amazonUrl: 'https://amzn.in/d/05OjtDw3',
    amazonQuestionsUrl: 'https://amzn.in/d/03KPRNXS',
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
      hero: './perfumes_images1/alpha1.png',
      gallery: [
        './perfumes_images1/alpha1.png',
        './perfumes_images1/all_perfume_image.png'
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
    price50: DISCOUNTED_PERFUME_PRICE,
    priceFormatted50: `₹${DISCOUNTED_PERFUME_PRICE.toLocaleString('en-IN')}`,
    originalPrice50: BASE_PERFUME_PRICE,
    originalPriceFormatted50: `₹${BASE_PERFUME_PRICE.toLocaleString('en-IN')}`,
    discountPercent: DISCOUNT_PERCENT,
    amazonUrl: 'https://amzn.in/d/0f7diE5J',
    amazonQuestionsUrl: 'https://amzn.in/d/08EfMqV6',
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
      hero: './perfumes_images1/velvet1.png',
      gallery: [
        './perfumes_images1/velvet1.png',
        './perfumes_images1/all_perfume_image.png'
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

const BOUTIQUE_INFO = {
  name: 'DeLiora Essence by Patidar',
  address: '3, Satam Park Colony, Mushakhedi Ring Road Square, Indore, Madhya Pradesh',
  phone: '+91 7771033947',
  email: 'DELIORAESSENCE2026@gmail.com',
  amazonStoreUrl: 'https://www.amazon.in/dp/B0DELIORA',
  flipkartStoreUrl: 'https://www.flipkart.com/deliora-essence'
};


  // -------------------------------------------------------------
  // 2. Ambient Fragrance Mist & Particle Simulation
  // -------------------------------------------------------------
/**
 * DeLiora Essence by Patidar
 * Ambient Fragrance Mist & Golden Particle Physics Simulation
 */

function initMistCanvas() {
  const canvas = document.getElementById('mist-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Particle pool
  const particles = [];
  const PARTICLE_COUNT = 45;

  class MistParticle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + Math.random() * 50;
      this.radius = Math.random() * 80 + 30; // wide soft puff
      this.vx = (Math.random() - 0.48) * 0.4;
      this.vy = -(Math.random() * 0.35 + 0.15);
      this.maxAlpha = Math.random() * 0.05 + 0.015;
      this.alpha = 0;
      this.growth = Math.random() * 0.0008 + 0.0003;
      this.state = 'fade-in';
      // Golden dust vs mist color
      this.isDust = Math.random() > 0.65;
      if (this.isDust) {
        this.radius = Math.random() * 1.8 + 0.6;
        this.maxAlpha = Math.random() * 0.4 + 0.15;
        this.vy = -(Math.random() * 0.45 + 0.1);
      }
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.state === 'fade-in') {
        this.alpha += this.growth * 5;
        if (this.alpha >= this.maxAlpha) {
          this.alpha = this.maxAlpha;
          this.state = 'drift';
        }
      } else if (this.state === 'drift') {
        if (this.y < height * 0.15) {
          this.state = 'fade-out';
        }
      } else if (this.state === 'fade-out') {
        this.alpha -= this.growth * 3;
        if (this.alpha <= 0) {
          this.reset();
        }
      }

      if (this.x < -100 || this.x > width + 100 || this.y < -100) {
        this.reset();
      }
    }

    draw() {
      if (this.alpha <= 0) return;

      ctx.save();
      if (this.isDust) {
        // Sparkling golden dust particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 103, ${this.alpha})`;
        ctx.shadowColor = 'rgba(212, 175, 103, 0.6)';
        ctx.shadowBlur = 6;
        ctx.fill();
      } else {
        // Soft billowing fragrance cloud
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        );
        gradient.addColorStop(0, `rgba(245, 240, 232, ${this.alpha})`);
        gradient.addColorStop(0.5, `rgba(217, 160, 164, ${this.alpha * 0.4})`);
        gradient.addColorStop(1, 'rgba(43, 15, 18, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new MistParticle());
  }

  let animationFrameId;
  function render() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    animationFrameId = requestAnimationFrame(render);
  }

  render();

  return () => cancelAnimationFrame(animationFrameId);
}


  // -------------------------------------------------------------
  // 3. Atmospheric Shifting Engine
  // -------------------------------------------------------------
/**
 * DeLiora Essence by Patidar
 * Atmospheric Shifting Engine (Burgundy → Ivory → Aqua → Blush → Emerald → Deep Brown → Burgundy)
 */

function initAtmosphere() {
  const sections = document.querySelectorAll('[data-atmosphere-target]');
  if (!sections.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -40% 0px',
    threshold: 0.2
  };

  const atmosphereObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const atmosphere = entry.target.getAttribute('data-atmosphere-target');
        if (atmosphere) {
          document.body.setAttribute('data-atmosphere', atmosphere);
        }
      }
    });
  }, observerOptions);

  sections.forEach((sec) => atmosphereObserver.observe(sec));

  // Also support manual hover/focus atmospheric previews on fragrance cards
  const fragranceCards = document.querySelectorAll('[data-card-atmosphere]');
  fragranceCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      const cardAtmosphere = card.getAttribute('data-card-atmosphere');
      if (cardAtmosphere) {
        document.body.setAttribute('data-atmosphere', cardAtmosphere);
      }
    });

    card.addEventListener('mouseleave', () => {
      // Revert to active section atmosphere
      const activeSection = getCurrentlyActiveSection();
      if (activeSection) {
        const defaultAtmosphere = activeSection.getAttribute('data-atmosphere-target') || 'burgundy';
        document.body.setAttribute('data-atmosphere', defaultAtmosphere);
      }
    });
  });

  function getCurrentlyActiveSection() {
    const scrollMid = window.scrollY + window.innerHeight / 2;
    for (const sec of sections) {
      const rect = sec.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const bottom = top + rect.height;
      if (scrollMid >= top && scrollMid <= bottom) {
        return sec;
      }
    }
    return sections[0];
  }
}


  // -------------------------------------------------------------
  // 4. Ambient Luxury Soundscape Synthesizer
  // -------------------------------------------------------------
/**
 * DeLiora Essence by Patidar
 * Ambient Luxury Acoustic Soundscape Synthesizer (Web Audio API)
 */

function initAudioAmbiance() {
  const toggleBtn = document.getElementById('ambiance-audio-toggle');
  if (!toggleBtn) return;

  let audioCtx = null;
  let isPlaying = false;
  let gainNode = null;
  let osc1 = null;
  let osc2 = null;

  function createSoundscape() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
    gainNode.connect(audioCtx.destination);

    // Warm resonant drone (55Hz A1 root & 165Hz E3 harmonic)
    osc1 = audioCtx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(55, audioCtx.currentTime);

    osc2 = audioCtx.createOscillator();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(164.81, audioCtx.currentTime);

    const subGain = audioCtx.createGain();
    subGain.gain.setValueAtTime(0.04, audioCtx.currentTime);

    osc1.connect(subGain);
    osc2.connect(subGain);
    subGain.connect(gainNode);

    osc1.start();
    osc2.start();
  }

  toggleBtn.addEventListener('click', () => {
    if (!isPlaying) {
      if (!audioCtx) createSoundscape();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      
      gainNode.gain.setTargetAtTime(0.06, audioCtx.currentTime, 1.5);
      isPlaying = true;
      toggleBtn.classList.add('is-active');
      toggleBtn.setAttribute('title', 'Soundscape Playing · Click to Mute');
      toggleBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      `;
    } else {
      if (gainNode) {
        gainNode.gain.setTargetAtTime(0.001, audioCtx.currentTime, 0.8);
      }
      isPlaying = false;
      toggleBtn.classList.remove('is-active');
      toggleBtn.setAttribute('title', 'Enable Quiet Luxury Soundscape');
      toggleBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        </svg>
      `;
    }
  });
}


  // -------------------------------------------------------------
  // 5. Luxury Quick-View Modal Dialog
  // -------------------------------------------------------------
/**
 * DeLiora Essence by Patidar
 * Luxury Quick-View Modal Dialog
 */


let activeFragrance = null;
let selectedSize = '50';

function initQuickView() {
  const modalOverlay = document.getElementById('quickview-modal');
  if (!modalOverlay) return;

  const closeBtn = modalOverlay.querySelector('.modal-close-btn');
  closeBtn?.addEventListener('click', closeQuickView);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeQuickView();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('is-active')) {
      closeQuickView();
    }
  });

  // Global listeners for .quick-view-trigger
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.quick-view-trigger');
    if (trigger) {
      const id = trigger.getAttribute('data-id');
      if (id) openQuickView(id);
    }
  });
}

function openQuickView(fragranceId) {
  const modalOverlay = document.getElementById('quickview-modal');
  const modalContainer = document.getElementById('quickview-container');
  if (!modalOverlay || !modalContainer) return;

  const item = FRAGRANCES.find(f => f.id === fragranceId);
  if (!item) return;

  activeFragrance = item;
  selectedSize = '50';

  modalContainer.innerHTML = `
    <div class="modal-card" style="border-color: ${item.theme.accent};">
      <button class="modal-close-btn" aria-label="Close dialog">&times;</button>
      
      <div class="modal-image-col">
        <img src="${item.images.hero}" alt="${item.name} Flacon" class="modal-main-img" id="modal-active-img" />
      </div>

      <div class="modal-content-col">
        <div class="eyebrow" style="color: ${item.theme.accent}">${item.family}</div>
        <h2 style="font-family: var(--font-display); font-size: 2.2rem; letter-spacing: var(--tracking-widest); color: #FFFFFF; margin-bottom: 0.3rem;">
          ${item.name}
        </h2>
        <div style="font-family: var(--font-script); font-size: 1.5rem; color: ${item.theme.accent}; margin-bottom: 1.2rem;">
          ${item.subtitle}
        </div>
        
        <p style="font-size: 0.95rem; line-height: 1.8; color: var(--color-ivory-muted); margin-bottom: 1.5rem;">
          ${item.description}
        </p>

        <div style="margin-bottom: 1.8rem;">
          <div style="font-size: 0.72rem; letter-spacing: var(--tracking-wider); text-transform: uppercase; color: var(--color-gold); margin-bottom: 0.8rem;">
            Flacon Volume
          </div>
          <div class="shop-size-pills" style="justify-content: flex-start;">
            <button class="size-pill is-active modal-size-btn" data-size="50">50ml Extrait de Parfum</button>
          </div>
        </div>

        <div style="display: flex; align-items: baseline; flex-wrap: wrap; gap: 0.9rem; margin-bottom: 2rem;">
          <div style="font-family: var(--font-serif); font-size: 1.8rem; color: #FFFFFF;" id="modal-price-display">
            ${item.priceFormatted50}
          </div>
          <span style="font-family: var(--font-serif); font-size: 1.2rem; color: rgba(245, 240, 232, 0.45); text-decoration: line-through;">
            ${item.originalPriceFormatted50 || '₹1,499'}
          </span>
          <span style="font-size: 0.7rem; font-weight: 600; color: #1a080c; background: var(--color-gold); padding: 0.15rem 0.45rem; border-radius: 2px; text-transform: uppercase;">
            ${item.discountPercent || 40}% OFF
          </span>
          <span style="font-size: 0.75rem; letter-spacing: var(--tracking-wide); color: var(--color-gold); width: 100%; margin-top: 0.2rem;">
            Complimentary Hand-Crafted Velvet Box Included
          </span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.8rem;">
          <div style="display: flex; gap: 0.8rem; width: 100%;">
            <a href="${item.amazonUrl || 'https://www.amazon.in/dp/B0DELIORA'}" target="_blank" rel="noopener noreferrer" class="btn-marketplace btn-amazon" style="flex: 1; justify-content: center; text-decoration: none;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.42 15.02c-2.73 2.06-6.72 3.16-10.15 3.16-4.8 0-9.1-1.8-12.27-4.81-.25-.24-.03-.56.27-.38 3.42 2.01 7.6 3.22 11.96 3.22 3.03 0 6.57-.74 9.8-2.31.48-.24.87.35.39.72z"></path>
              </svg>
              <span>Buy on Amazon</span>
            </a>
            <a href="#notes-pyramid" class="btn btn-gold-solid modal-explore-notes-btn" style="flex: 1; text-align: center;">
              <span>Explore Notes</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach event listeners inside modal
  const priceDisplay = modalContainer.querySelector('#modal-price-display');
  const closeBtn = modalContainer.querySelector('.modal-close-btn');
  const notesBtn = modalContainer.querySelector('.modal-explore-notes-btn');

  closeBtn?.addEventListener('click', closeQuickView);
  notesBtn?.addEventListener('click', closeQuickView);

  modalOverlay.classList.add('is-active');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  const modalOverlay = document.getElementById('quickview-modal');
  if (modalOverlay) {
    modalOverlay.classList.remove('is-active');
    document.body.style.overflow = '';
  }
}


  // -------------------------------------------------------------
  // 6. Live Fragrance Search Modal
  // -------------------------------------------------------------
/**
 * DeLiora Essence by Patidar
 * Live Olfactory & Fragrance Search Overlay
 */


function initSearchModal() {
  const overlay = document.getElementById('search-modal');
  const openTrigger = document.getElementById('search-open-btn');
  const closeBtn = document.getElementById('search-close-btn');
  const searchInput = document.getElementById('search-input');
  const resultsContainer = document.getElementById('search-results');

  if (!overlay || !searchInput) return;

  function openSearch() {
    if (window.bootstrap?.Modal) {
      const bsModal = window.bootstrap.Modal.getOrCreateInstance(overlay);
      bsModal.show();
    } else {
      overlay.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }
    setTimeout(() => searchInput.focus(), 150);
    renderResults(searchInput.value.trim());
  }

  function closeSearch() {
    if (window.bootstrap?.Modal) {
      const bsModal = window.bootstrap.Modal.getInstance(overlay);
      bsModal?.hide();
    } else {
      overlay.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  }

  openTrigger?.addEventListener('click', openSearch);
  closeBtn?.addEventListener('click', closeSearch);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeSearch();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && (overlay.classList.contains('is-active') || overlay.classList.contains('show'))) {
      closeSearch();
    }
  });

  searchInput.addEventListener('input', (e) => {
    renderResults(e.target.value.trim());
  });

  function renderResults(query) {
    if (!resultsContainer) return;

    const lowerQuery = query.toLowerCase();
    const matches = FRAGRANCES.filter(f => {
      if (!lowerQuery) return true;
      const matchName = f.name.toLowerCase().includes(lowerQuery);
      const matchFamily = f.family.toLowerCase().includes(lowerQuery);
      const matchMood = f.moods.some(m => m.toLowerCase().includes(lowerQuery));
      const allNotes = [
        ...f.notes.top.map(n => n.name),
        ...f.notes.heart.map(n => n.name),
        ...f.notes.base.map(n => n.name)
      ].join(' ').toLowerCase();
      const matchNotes = allNotes.includes(lowerQuery);
      return matchName || matchFamily || matchMood || matchNotes;
    });

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--color-ivory-muted);">
          No fragrance found for "${query}". Try searching for <em>Jasmine</em>, <em>Sandalwood</em>, <em>Aqua</em>, or <em>Oud</em>.
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = matches.map(f => `
      <div class="search-result-card" data-id="${f.id}">
        <img src="${f.images.hero}" alt="${f.name}" style="height: 140px; width: 100%; object-fit: contain; margin-bottom: 0.8rem;" />
        <div style="font-family: var(--font-display); font-size: 1.1rem; color: #FFFFFF; letter-spacing: var(--tracking-wide);">
          ${f.name}
        </div>
        <div style="font-size: 0.72rem; color: var(--color-gold); text-transform: uppercase; margin-bottom: 0.4rem;">
          ${f.family}
        </div>
        <div style="font-family: var(--font-serif); font-size: 0.95rem; color: var(--color-ivory);">
          ${f.priceFormatted50}
        </div>
      </div>
    `).join('');

    resultsContainer.querySelectorAll('.search-result-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        closeSearch();
        openQuickView(id);
      });
    });
  }
}


  // -------------------------------------------------------------
  // 7. Cinematic Scroll-Driven Hero Module
  // -------------------------------------------------------------
/**
 * DeLiora Essence by Patidar
 * Cinematic Scroll-Driven Hero Module
 * 
 * Features:
 * - Horizontal Campaign Image sits cleanly JUST BELOW "DELIORA ESSENCE By Patidar" with ambient aura
 * - Smooth scroll morph from horizontal campaign to 9:16 Center Reel
 * - Left Reel: Infinite loop of Clips 1, 2, 3, 4, 5 in ASCENDING order (1 -> 2 -> 3 -> 4 -> 5 -> 1...)
 * - Right Reel: Infinite loop of Clips 1, 2, 3, 4, 5 in DESCENDING order (5 -> 4 -> 3 -> 2 -> 1 -> 5...)
 * - Center Reel: After running 2 times, the logo pop appears and stays FIXED permanently
 * - 100% Scrubbable & Reversible Animation Timeline (60fps GPU)
 */

const PERFUME_CLIPS = [
  { index: 1, id: 'fleur', name: 'Fleur', subtitle: 'Blush Floral', src: './perfumes_images1/fleur_clip.mp4' },
  { index: 2, id: 'mistique', name: 'Mistique', subtitle: 'Aqua Oceanic', src: './perfumes_images1/mistique_clip.mp4' },
  { index: 3, id: 'blanc', name: 'Blanc', subtitle: 'Alabaster White', src: './perfumes_images1/blanc_clip.mp4' },
  { index: 4, id: 'velvet', name: 'Velvet', subtitle: 'Emerald Berries', src: './perfumes_images1/velvet_clip.mp4' },
  { index: 5, id: 'alpha', name: 'Alpha', subtitle: 'Smoky Amber', src: './perfumes_images1/alpha_clip.mp4' }
];

function initCinematicHero() {
  const track = document.getElementById('cinematic-hero');
  const reelCenter = document.getElementById('reel-center');
  const heroImg = document.getElementById('hero-horizontal-img');
  const videoCenter = document.getElementById('video-center');
  const reelLeft = document.getElementById('reel-left');
  const videoLeft = document.getElementById('video-left');
  const badgeLeft = document.getElementById('badge-left');
  const reelRight = document.getElementById('reel-right');
  const videoRight = document.getElementById('video-right');
  const badgeRight = document.getElementById('badge-right');
  const overlay = document.getElementById('center-luxury-overlay');
  const header = document.getElementById('cinematic-hero-header');
  const posterBadge = document.getElementById('hero-poster-discount-badge');

  if (!track || !reelCenter || !videoCenter) return;

  // --------------------------------------------------------------------------
  // 1. LEFT & RIGHT REELS — INFINITE ASCENDING & DESCENDING LOOPS
  // --------------------------------------------------------------------------
  let leftIndex = 0; // Starts at Clip 1 (index 0)
  let rightIndex = 4; // Starts at Clip 5 (index 4)

  function setupSideReels() {
    if (videoLeft) {
      videoLeft.muted = true;
      videoLeft.defaultMuted = true;
      videoLeft.playsInline = true;
      videoLeft.setAttribute('muted', '');
      videoLeft.setAttribute('playsinline', '');
      videoLeft.setAttribute('webkit-playsinline', 'true');
      videoLeft.loop = false;
      videoLeft.src = PERFUME_CLIPS[leftIndex].src;
      videoLeft.load();
      if (badgeLeft) badgeLeft.textContent = PERFUME_CLIPS[leftIndex].name;
    }

    if (videoRight) {
      videoRight.muted = true;
      videoRight.defaultMuted = true;
      videoRight.playsInline = true;
      videoRight.setAttribute('muted', '');
      videoRight.setAttribute('playsinline', '');
      videoRight.setAttribute('webkit-playsinline', 'true');
      videoRight.loop = false;
      videoRight.src = PERFUME_CLIPS[rightIndex].src;
      videoRight.load();
      if (badgeRight) badgeRight.textContent = PERFUME_CLIPS[rightIndex].name;
    }

    // Left Reel: Ascending Infinite Loop (1 -> 2 -> 3 -> 4 -> 5 -> 1...)
    videoLeft?.addEventListener('ended', () => {
      leftIndex = (leftIndex + 1) % PERFUME_CLIPS.length;
      switchClip(videoLeft, badgeLeft, PERFUME_CLIPS[leftIndex]);
    });

    // Right Reel: Descending Infinite Loop (5 -> 4 -> 3 -> 2 -> 1 -> 5...)
    videoRight?.addEventListener('ended', () => {
      rightIndex = (rightIndex - 1 + PERFUME_CLIPS.length) % PERFUME_CLIPS.length;
      switchClip(videoRight, badgeRight, PERFUME_CLIPS[rightIndex]);
    });
  }

  function switchClip(videoEl, badgeEl, clip) {
    if (!videoEl || !clip) return;
    // 0.1s faster transition for instant response
    videoEl.style.transition = 'opacity 0.12s ease-out';
    videoEl.style.opacity = '0.5';

    setTimeout(() => {
      videoEl.src = clip.src;
      videoEl.load();
      videoEl.play().catch(() => { });
      if (badgeEl) badgeEl.textContent = clip.name;
      setTimeout(() => {
        videoEl.style.opacity = '1';
      }, 40);
    }, 30);
  }

  setupSideReels();

  // --------------------------------------------------------------------------
  // 2. CENTER REEL — AFTER RUNNING 2 TIMES, FIX THE LOGO POP
  // --------------------------------------------------------------------------
  let centerRunCount = 0;
  let isLogoFixed = false;
  videoCenter.loop = false;

  videoCenter.addEventListener('ended', () => {
    centerRunCount++;
    if (centerRunCount >= 2) {
      // After 2 runs, lock logo pop permanently
      isLogoFixed = true;
      overlay?.classList.add('is-active', 'is-fixed');
      videoCenter.loop = true; // Continuous loop under the fixed glass card
      videoCenter.play().catch(() => { });
    } else {
      // Replay second run
      videoCenter.currentTime = 0;
      videoCenter.play().catch(() => { });
    }
  });

  videoCenter.addEventListener('timeupdate', () => {
    if (isLogoFixed) {
      overlay?.classList.add('is-active', 'is-fixed');
      return;
    }

    // Near the end of the 2nd run, smoothly trigger the fixed pop!
    if (centerRunCount === 1 && videoCenter.duration) {
      const remaining = videoCenter.duration - videoCenter.currentTime;
      if (remaining <= 1.2 && currentProgress >= 0.65) {
        isLogoFixed = true;
        overlay?.classList.add('is-active', 'is-fixed');
      }
    }
  });

  // --------------------------------------------------------------------------
  // 3. SCROLL TIMELINE & MATHEMATICAL POSITIONING
  // --------------------------------------------------------------------------
  function easeInOutCubic(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }

  function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
  }

  let currentProgress = 0;
  let targetProgress = 0;
  let rafId = null;

  function calculateProgress() {
    const rect = track.getBoundingClientRect();
    const totalScroll = track.offsetHeight - window.innerHeight;
    if (totalScroll <= 0) return 0;
    const currentScroll = -rect.top;
    return Math.min(Math.max(currentScroll / totalScroll, 0), 1);
  }

  function updateLayout() {
    // Snappier 0.1s faster response to user scroll
    currentProgress += (targetProgress - currentProgress) * 0.28;
    const p = currentProgress;

    const isMobile = window.innerWidth <= 768;

    // Target 9:16 dimensions (center video box increased by 10% on mobile)
    const targetH = isMobile
      ? Math.min(window.innerHeight * 0.60, 480)
      : Math.min(window.innerHeight * 0.73, 610);
    const targetW = isMobile
      ? Math.round(targetH * (9 / 16) * 1.20)
      : Math.round(targetH * (9 / 16));

    // Dynamic initial geometry: Place image cleanly below "DELIORA ESSENCE By Patidar"
    const headerRect = header ? header.getBoundingClientRect() : null;
    const headerBottom = (headerRect && headerRect.height > 0)
      ? (headerRect.top + headerRect.height)
      : (window.innerHeight * (isMobile ? 0.14 : 0.20));

    const gapBelowHeader = isMobile ? 40 : 60;
    const topPadding = headerBottom + gapBelowHeader;
    const bottomPadding = isMobile ? 20 : 28;
    const availableH = Math.max(window.innerHeight - topPadding - bottomPadding, 220);

    const initH = isMobile
      ? Math.min(availableH, Math.round(window.innerHeight * 0.50), 400)
      : Math.min(availableH, Math.round(window.innerHeight * 0.66), 660);

    // Initial width of hero image increased by 10%
    const initW = isMobile
      ? Math.min(window.innerWidth * 0.98, 460)
      : Math.min(window.innerWidth * 0.98, Math.round(initH * 1.65), 1500);

    // Initial Center Y puts top of image exactly at headerBottom + gapBelowHeader
    const initCenterY = topPadding + (initH / 2);
    const targetCenterY = window.innerHeight * 0.5;

    const gap = isMobile ? 16 : 28;

    // Stage 1: Morphing width, height & vertical translation (p: 0 -> 0.44)
    const morphT = Math.min(p / 0.44, 1);
    const easedMorph = easeInOutCubic(morphT);

    const w = initW + (targetW - initW) * easedMorph;
    const h = initH + (targetH - initH) * easedMorph;
    const currentCenterY = initCenterY + (targetCenterY - initCenterY) * easedMorph;
    const radius = 8 + (16 - 8) * easedMorph;

    reelCenter.style.width = `${Math.round(w)}px`;
    reelCenter.style.height = `${Math.round(h)}px`;
    reelCenter.style.top = `${Math.round(currentCenterY)}px`;
    reelCenter.style.left = '50%';
    reelCenter.style.transform = 'translate(-50%, -50%)';
    reelCenter.style.borderRadius = `${Math.round(radius)}px`;

    // Crossfade horizontal image -> center video (instant responsiveness)
    if (p < 0.18) {
      if (heroImg) heroImg.style.opacity = '1';
      if (posterBadge) posterBadge.style.opacity = '1';
      videoCenter.style.opacity = '0';
    } else if (p >= 0.18 && p <= 0.38) {
      const fade = (p - 0.18) / 0.20;
      const currentOpacity = (1 - fade).toFixed(3);
      if (heroImg) heroImg.style.opacity = currentOpacity;
      if (posterBadge) posterBadge.style.opacity = currentOpacity;
      videoCenter.style.opacity = fade.toFixed(3);
    } else {
      if (heroImg) heroImg.style.opacity = '0';
      if (posterBadge) posterBadge.style.opacity = '0';
      videoCenter.style.opacity = '1';
    }

    // Video Playback Control
    if (p >= 0.20) {
      if (videoCenter.paused) {
        videoCenter.play().catch(() => { });
      }
    } else {
      if (!videoCenter.paused) {
        videoCenter.pause();
      }
    }

    // Stage 2: Left & Right Reels Emerge (Only on laptop/desktop screens; removed on mobile)
    if (reelLeft && reelRight) {
      if (isMobile) {
        reelLeft.style.display = 'none';
        reelRight.style.display = 'none';
        if (videoLeft && !videoLeft.paused) videoLeft.pause();
        if (videoRight && !videoRight.paused) videoRight.pause();
      } else {
        reelLeft.style.display = 'block';
        reelRight.style.display = 'block';

        reelLeft.style.width = `${targetW}px`;
        reelLeft.style.height = `${targetH}px`;
        reelLeft.style.left = `calc(50% - ${Math.round(targetW * 1.5 + gap)}px)`;
        reelLeft.style.top = `calc(50% - ${Math.round(targetH * 0.5)}px)`;
        reelLeft.style.zIndex = '11';

        reelRight.style.width = `${targetW}px`;
        reelRight.style.height = `${targetH}px`;
        reelRight.style.left = `calc(50% + ${Math.round(targetW * 0.5 + gap)}px)`;
        reelRight.style.top = `calc(50% - ${Math.round(targetH * 0.5)}px)`;
        reelRight.style.zIndex = '11';

        if (p < 0.28) {
          reelLeft.style.transform = 'translate3d(0, 110vh, 0)';
          reelLeft.style.opacity = '0';
          reelRight.style.transform = 'translate3d(0, 110vh, 0)';
          reelRight.style.opacity = '0';

          if (videoLeft && !videoLeft.paused) videoLeft.pause();
          if (videoRight && !videoRight.paused) videoRight.pause();
        } else {
          const riseT = Math.min(Math.max((p - 0.28) / 0.52, 0), 1);
          const easedRise = easeOutCubic(riseT);
          const yOffset = (1 - easedRise) * 110;
          const opacity = Math.min(riseT * 1.35, 1) * 0.94;

          reelLeft.style.transform = `translate3d(0, ${yOffset.toFixed(2)}vh, 0)`;
          reelLeft.style.opacity = opacity.toFixed(3);

          reelRight.style.transform = `translate3d(0, ${yOffset.toFixed(2)}vh, 0)`;
          reelRight.style.opacity = opacity.toFixed(3);

          if (p >= 0.40) {
            if (videoLeft && videoLeft.paused) videoLeft.play().catch(() => { });
            if (videoRight && videoRight.paused) videoRight.play().catch(() => { });
          } else {
            if (videoLeft && !videoLeft.paused) videoLeft.pause();
            if (videoRight && !videoRight.paused) videoRight.pause();
          }
        }
      }
    }

    // Stage 3: Reset on upward scrub towards initial hero
    if (p < 0.35) {
      if (overlay) {
        overlay.classList.remove('is-active', 'is-fixed');
      }
      isLogoFixed = false;
      centerRunCount = 0;
      videoCenter.loop = false;
    }

    // Header & Scroll prompt fades
    if (header) {
      const headerFade = Math.max(0, 1 - p / 0.18);
      header.style.opacity = headerFade.toFixed(3);
      header.style.transform = `translateY(${-p * 45}px)`;
    }

    // Continue loop if not settled
    if (Math.abs(targetProgress - currentProgress) > 0.001) {
      rafId = requestAnimationFrame(updateLayout);
    } else {
      rafId = null;
    }
  }

  function onScroll() {
    targetProgress = calculateProgress();
    if (!rafId) {
      rafId = requestAnimationFrame(updateLayout);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    targetProgress = calculateProgress();
    if (!rafId) rafId = requestAnimationFrame(updateLayout);
  });

  // Initial render on mount with multi-stage paint confirmations
  function forceInitialHeroState() {
    targetProgress = calculateProgress();
    currentProgress = targetProgress;
    updateLayout();
    if (currentProgress < 0.18) {
      if (heroImg) {
        heroImg.style.opacity = '1';
        heroImg.style.display = 'block';
      }
      if (posterBadge) posterBadge.style.opacity = '1';
      if (videoCenter) videoCenter.style.opacity = '0';
    }
  }

  forceInitialHeroState();
  requestAnimationFrame(forceInitialHeroState);
  setTimeout(forceInitialHeroState, 60);
  setTimeout(forceInitialHeroState, 240);

  if (heroImg) {
    if (!heroImg.complete) {
      heroImg.addEventListener('load', forceInitialHeroState, { once: true });
    }
  }

  window.addEventListener('load', forceInitialHeroState, { passive: true });
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(forceInitialHeroState).catch(() => {});
  }
}


  // -------------------------------------------------------------
  // 8. Main Application Orchestrator & UI Event Listeners
  // -------------------------------------------------------------
/**
 * DeLiora Essence by Patidar
 * Main Application Orchestrator
 */



function initAll() {
  // 1. Initialize Canvas Mist & Ambient Particles
  initMistCanvas();

  // 2. Initialize Cinematic Scroll-Driven Hero (Horizontal -> 9:16 Vertical Reels)
  initCinematicHero();

  // 3. Initialize Core Interactive Modules
  initAtmosphere();
  initQuickView();
  initSearchModal();
  initAudioAmbiance();

  // 3. Collection Film Cinema Player
  setupFilmPlayer();

  // 4. Fragrance Dropdown Menu
  setupFragranceDropdown();

  // 5. Header Scroll Observer
  setupHeaderScroll();

  // 6. Scroll Reveal Observer
  setupScrollReveals();

  // 7. Mobile Navigation Drawer
  setupMobileNav();

  // 8. Fragrance Visual Frames Gallery Hover & Touch Toggle
  setupGalleryHoverToggles();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

function setupFilmPlayer() {
  const container = document.getElementById('film-player-box');
  const video = document.getElementById('campaign-video');
  const playBtn = document.getElementById('film-play-toggle');
  const playIcon = document.getElementById('play-icon');

  if (!container || !video) return;

  function togglePlay() {
    if (video.paused) {
      video.play().then(() => {
        container.classList.add('is-playing');
        if (playIcon) playIcon.textContent = '❚❚';
      }).catch(err => {
        console.log('Video autoplay prevented', err);
      });
    } else {
      video.pause();
      container.classList.remove('is-playing');
      if (playIcon) playIcon.textContent = '▶';
    }
  }

  playBtn?.addEventListener('click', togglePlay);
  video.addEventListener('click', togglePlay);

  video.addEventListener('ended', () => {
    container.classList.remove('is-playing');
    if (playIcon) playIcon.textContent = '▶';
  });
}

function setupFragranceDropdown() {
  const dropdownToggle = document.getElementById('fragrances-nav-btn');
  const dropdownParent = dropdownToggle?.closest('.nav-item-dropdown');
  const dropdownLinks = dropdownParent?.querySelectorAll('.nav-dropdown-link');

  // If Bootstrap Dropdown is active, allow Bootstrap to manage toggle
  if (window.bootstrap?.Dropdown) {
    dropdownLinks?.forEach(link => {
      link.addEventListener('click', () => {
        const bsDropdown = window.bootstrap.Dropdown.getInstance(dropdownToggle);
        bsDropdown?.hide();
      });
    });
    return;
  }

  dropdownToggle?.addEventListener('click', (e) => {
    if (window.innerWidth <= 991 || 'ontouchstart' in window) {
      e.preventDefault();
      dropdownParent?.classList.toggle('is-open');
    }
  });

  dropdownLinks?.forEach(link => {
    link.addEventListener('click', () => {
      dropdownParent?.classList.remove('is-open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!dropdownParent?.contains(e.target)) {
      dropdownParent?.classList.remove('is-open');
    }
  });
}

function setupHeaderScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }, { passive: true });
}

function setupScrollReveals() {
  const revealItems = document.querySelectorAll('.reveal-item');
  if (!revealItems.length) return;

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(item => revealObserver.observe(item));
}

function setupMobileNav() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('mobile-close-btn');
  const links = drawer?.querySelectorAll('a');

  if (!toggleBtn || !drawer) return;

  function closeDrawer() {
    if (window.bootstrap?.Offcanvas) {
      try {
        const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(drawer);
        if (bsOffcanvas) {
          bsOffcanvas.hide();
          return;
        }
      } catch (e) {}
    }
    drawer.classList.remove('show', 'is-active');
    document.body.style.overflow = '';
    const backdrop = document.querySelector('.offcanvas-backdrop');
    backdrop?.remove();
  }

  function openDrawer() {
    if (window.bootstrap?.Offcanvas) {
      try {
        const bsOffcanvas = window.bootstrap.Offcanvas.getOrCreateInstance(drawer);
        bsOffcanvas.show();
        return;
      } catch (e) {}
    }
    drawer.classList.add('show', 'is-active');
    document.body.style.overflow = 'hidden';
    let backdrop = document.querySelector('.offcanvas-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'offcanvas-backdrop fade show';
      document.body.appendChild(backdrop);
      backdrop.addEventListener('click', closeDrawer);
    }
  }

  toggleBtn.addEventListener('click', (e) => {
    // If Bootstrap Offcanvas is available, let Bootstrap's data-bs-toggle handle it.
    // If Bootstrap is not loaded, use vanilla fallback:
    if (!window.bootstrap?.Offcanvas) {
      e.preventDefault();
      if (drawer.classList.contains('show') || drawer.classList.contains('is-active')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    }
  });

  closeBtn?.addEventListener('click', (e) => {
    if (!window.bootstrap?.Offcanvas) {
      e.preventDefault();
      closeDrawer();
    }
  });

  links?.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  drawer.addEventListener('click', (e) => {
    if (e.target === drawer && !window.bootstrap?.Offcanvas) closeDrawer();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && (drawer.classList.contains('show') || drawer.classList.contains('is-active'))) {
      closeDrawer();
    }
  });
}

function setupGalleryHoverToggles() {
  const visualFrames = document.querySelectorAll('.universe-visual-frame');
  if (!visualFrames.length) return;

  let activeFrame = null;
  let revertTimer = null;

  function activateFrame(frame) {
    if (!frame) return;
    if (revertTimer) {
      clearTimeout(revertTimer);
      revertTimer = null;
    }
    if (activeFrame === frame && frame.classList.contains('is-hovered')) {
      return;
    }
    visualFrames.forEach((f) => {
      if (f !== frame) f.classList.remove('is-hovered');
    });
    frame.classList.add('is-hovered');
    activeFrame = frame;
  }

  function scheduleRevert(delay = 1200) {
    if (revertTimer) clearTimeout(revertTimer);
    revertTimer = setTimeout(() => {
      if (activeFrame) {
        activeFrame.classList.remove('is-hovered');
        activeFrame = null;
      }
    }, delay);
  }

  function getFrameAtTouch(touch) {
    if (!touch) return null;
    const x = touch.clientX;
    const y = touch.clientY;

    // Fast element lookup under finger
    const el = document.elementFromPoint(x, y);
    if (el) {
      const match = el.closest('.universe-visual-frame');
      if (match) return match;
    }

    // Fallback bounding rect check
    for (let i = 0; i < visualFrames.length; i++) {
      const rect = visualFrames[i].getBoundingClientRect();
      if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        return visualFrames[i];
      }
    }
    return null;
  }

  // --------------------------------------------------------------------------
  // Mobile / Touchscreen Support: Natural transformation on touch & scroll
  // (Passive listeners guarantee zero interference with vertical page scrolling)
  // --------------------------------------------------------------------------
  const isTouchCapable = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (isTouchCapable) {
    // 1. When user touches or presses finger over perfume image, transform immediately
    window.addEventListener(
      'touchstart',
      (e) => {
        if (!e.touches || !e.touches.length) return;
        const touchedFrame = getFrameAtTouch(e.touches[0]);
        if (touchedFrame) {
          activateFrame(touchedFrame);
        }
      },
      { passive: true }
    );

    // 2. When user moves their finger over perfume image while scrolling, transform naturally
    window.addEventListener(
      'touchmove',
      (e) => {
        if (!e.touches || !e.touches.length) return;
        const currentTouch = e.touches[0];
        const currentFrame = getFrameAtTouch(currentTouch);

        if (currentFrame) {
          activateFrame(currentFrame);
        } else if (activeFrame) {
          // Finger moved off the active image area during scrolling
          scheduleRevert(600);
        }
      },
      { passive: true }
    );

    // 3. Graceful viewing period after lifting finger
    window.addEventListener(
      'touchend',
      () => {
        if (activeFrame) {
          scheduleRevert(1400);
        }
      },
      { passive: true }
    );

    window.addEventListener(
      'touchcancel',
      () => {
        if (activeFrame) {
          scheduleRevert(400);
        }
      },
      { passive: true }
    );
  }

  // --------------------------------------------------------------------------
  // Desktop Hover (Pure CSS :hover handles desktop natively) & Tap/Click fallback
  // --------------------------------------------------------------------------
  visualFrames.forEach((frame) => {
    // Click toggle on mobile/desktop without intercepting interactive child links/buttons
    frame.addEventListener('click', (e) => {
      if (e.target.closest('a, button')) return;

      const isAlreadyActive = frame.classList.contains('is-hovered');

      visualFrames.forEach((otherFrame) => {
        if (otherFrame !== frame) otherFrame.classList.remove('is-hovered');
      });

      if (isAlreadyActive) {
        frame.classList.remove('is-hovered');
        activeFrame = null;
      } else {
        frame.classList.add('is-hovered');
        activeFrame = frame;
      }
    });

    // Keyboard accessibility support (Tab focus / Enter)
    frame.addEventListener('focus', () => {
      activateFrame(frame);
    });

    frame.addEventListener('blur', () => {
      frame.classList.remove('is-hovered');
      if (activeFrame === frame) activeFrame = null;
    });
  });

  // Close open galleries when tapping outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.universe-visual-frame')) {
      visualFrames.forEach((frame) => frame.classList.remove('is-hovered'));
      activeFrame = null;
    }
  });
}



})();
