/**
 * DeLiora Essence by Patidar
 * Live Olfactory & Fragrance Search Overlay
 */

import { FRAGRANCES } from './productsData.js';
import { openQuickView } from './quickView.js';

export function initSearchModal() {
  const overlay = document.getElementById('search-modal');
  const openTrigger = document.getElementById('search-open-btn');
  const closeBtn = document.getElementById('search-close-btn');
  const searchInput = document.getElementById('search-input');
  const resultsContainer = document.getElementById('search-results');

  if (!overlay || !searchInput) return;

  function openSearch() {
    overlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput.focus(), 100);
    renderResults(searchInput.value.trim());
  }

  function closeSearch() {
    overlay.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  openTrigger?.addEventListener('click', openSearch);
  closeBtn?.addEventListener('click', closeSearch);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeSearch();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-active')) {
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
