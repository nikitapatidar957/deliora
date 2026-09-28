/**
 * DeLiora Essence by Patidar
 * Luxury Quick-View Modal Dialog
 */

import { FRAGRANCES } from './productsData.js';

let activeFragrance = null;
let selectedSize = '50';

export function initQuickView() {
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

export function openQuickView(fragranceId) {
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

export function closeQuickView() {
  const modalOverlay = document.getElementById('quickview-modal');
  if (modalOverlay) {
    modalOverlay.classList.remove('is-active');
    document.body.style.overflow = '';
  }
}
