/**
 * DeLiora Essence by Patidar
 * "Choose Your Mood" Interactive Fragrance Discovery Experience
 */

import { MOODS, FRAGRANCES } from './productsData.js';
import { openQuickView } from './quickView.js';

export function initMoodSelector() {
  const navContainer = document.getElementById('mood-nav');
  const displayContainer = document.getElementById('mood-display');
  if (!navContainer || !displayContainer) return;

  // Render mood buttons
  navContainer.innerHTML = MOODS.map((mood, idx) => `
    <button class="mood-tab-btn ${idx === 0 ? 'is-active' : ''}" 
            data-mood="${mood.id}" 
            style="--mood-accent: ${mood.color}">
      ${mood.title}
    </button>
  `).join('');

  // Handle click on tabs
  const tabButtons = navContainer.querySelectorAll('.mood-tab-btn');
  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const moodId = btn.getAttribute('data-mood');
      renderMoodContent(moodId);
    });
  });

  // Render initial active mood
  renderMoodContent(MOODS[0].id);

  function renderMoodContent(moodId) {
    const selectedMood = MOODS.find(m => m.id === moodId) || MOODS[0];
    const matchingFragrances = FRAGRANCES.filter(f => selectedMood.fragranceIds.includes(f.id));

    displayContainer.style.opacity = '0';
    displayContainer.style.transform = 'translateY(15px)';

    setTimeout(() => {
      displayContainer.innerHTML = `
        <div class="mood-active-meta">
          <div class="eyebrow" style="color: ${selectedMood.color}">${selectedMood.atmosphere}</div>
          <h3 class="mood-atmosphere-title" style="color: #FFFFFF">Fragrances of the ${selectedMood.title} Spirit</h3>
          <p class="mood-atmosphere-desc">${selectedMood.description}</p>
        </div>

        <div class="mood-perfumes-row">
          ${matchingFragrances.map(f => `
            <div class="fragrance-card" 
                 data-card-atmosphere="${f.theme.key}"
                 style="--card-accent: ${f.theme.accent}; --card-glow: ${f.theme.accentGlow};">
              <div class="card-top-meta">
                <span class="card-family-tag">${f.family}</span>
                <span class="card-price-tag">${f.priceFormatted50}</span>
              </div>
              <div class="card-image-box">
                <img src="${f.images.hero}" alt="DeLiora ${f.name} Flacon" class="card-bottle-img" loading="lazy" />
              </div>
              <div class="card-details">
                <h4 class="card-perfume-name">${f.name}</h4>
                <div class="card-perfume-sub">${f.subtitle}</div>
                <p class="card-notes-preview">${f.tagline}</p>
                <div class="card-actions">
                  <button class="btn btn-primary quick-view-trigger" data-id="${f.id}" style="width: 100%;">
                    <span>Discover ${f.name}</span>
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;

      // Wire quick view buttons in mood section
      displayContainer.querySelectorAll('.quick-view-trigger').forEach(b => {
        b.addEventListener('click', () => openQuickView(b.getAttribute('data-id')));
      });

      displayContainer.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      displayContainer.style.opacity = '1';
      displayContainer.style.transform = 'translateY(0)';
    }, 200);
  }
}
