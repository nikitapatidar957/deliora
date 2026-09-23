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
            Select Flacon Volume
          </div>
          <div class="shop-size-pills" style="justify-content: flex-start;">
            <button class="size-pill is-active modal-size-btn" data-size="50">50ml Extrait</button>
            <button class="size-pill modal-size-btn" data-size="100">100ml Extrait</button>
          </div>
        </div>

        <div style="display: flex; align-items: baseline; gap: 1.5rem; margin-bottom: 2rem;">
          <div style="font-family: var(--font-serif); font-size: 1.8rem; color: #FFFFFF;" id="modal-price-display">
            ${item.priceFormatted50}
          </div>
          <span style="font-size: 0.75rem; letter-spacing: var(--tracking-wide); color: var(--color-gold);">
            Complimentary Hand-Crafted Velvet Box Included
          </span>
        </div>

        <div style="display: flex; gap: 1rem;">
          <a href="#notes-pyramid" class="btn btn-gold-solid modal-explore-notes-btn" style="flex: 1; text-align: center;">
            <span>Explore Olfactory Notes</span>
          </a>
        </div>
      </div>
    </div>
  `;

  // Attach event listeners inside modal
  const sizeBtns = modalContainer.querySelectorAll('.modal-size-btn');
  const priceDisplay = modalContainer.querySelector('#modal-price-display');
  const closeBtn = modalContainer.querySelector('.modal-close-btn');
  const notesBtn = modalContainer.querySelector('.modal-explore-notes-btn');

  closeBtn?.addEventListener('click', closeQuickView);
  notesBtn?.addEventListener('click', closeQuickView);

  sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      selectedSize = btn.getAttribute('data-size');
      priceDisplay.textContent = selectedSize === '50' ? item.priceFormatted50 : item.priceFormatted100;
    });
  });

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
