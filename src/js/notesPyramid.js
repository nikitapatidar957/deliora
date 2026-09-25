/**
 * DeLiora Essence by Patidar
 * Art-Directed Olfactory Pyramid Architecture & Notes Composition
 */

import { FRAGRANCES } from './productsData.js';

export function initNotesPyramid() {
  const navContainer = document.getElementById('pyramid-nav');
  const architectureContainer = document.getElementById('pyramid-architecture');
  if (!navContainer || !architectureContainer) return;

  // Render navigation pills for the 5 fragrances
  navContainer.innerHTML = FRAGRANCES.filter(f => f.id !== 'coffret').map((f, idx) => `
    <button class="pyramid-nav-pill ${idx === 0 ? 'is-active' : ''}" data-id="${f.id}">
      ${f.name}
    </button>
  `).join('');

  const pills = navContainer.querySelectorAll('.pyramid-nav-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('is-active'));
      pill.classList.add('is-active');
      renderPyramid(pill.getAttribute('data-id'));
    });
  });

  // Render initial fragrance notes
  renderPyramid(FRAGRANCES[0].id);

  function renderPyramid(fragranceId) {
    const fragrance = FRAGRANCES.find(f => f.id === fragranceId) || FRAGRANCES[0];

    architectureContainer.style.opacity = '0';
    architectureContainer.style.transform = 'translateY(15px)';

    setTimeout(() => {
      architectureContainer.innerHTML = `
        <div style="text-align: center; margin-bottom: 3rem;">
          <div class="eyebrow" style="color: ${fragrance.theme.accent}">${fragrance.name} · OLFACTORY PYRAMID</div>
          <p style="max-width: 600px; margin: 0 auto; font-style: italic;">
            ${fragrance.craftStory}
          </p>
        </div>

        <!-- TOP NOTES -->
        <div class="pyramid-level">
          <div class="pyramid-level-tag">
            <span>TOP NOTES</span>
            <span class="pyramid-level-timing">· 0 to 15 min opening</span>
          </div>
          <div class="pyramid-notes-grid">
            ${fragrance.notes.top.map(n => `
              <div class="pyramid-note-pill">
                <div class="note-name">${n.name}</div>
                <div class="note-accord">${n.accord}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="pyramid-connector"></div>

        <!-- HEART NOTES -->
        <div class="pyramid-level">
          <div class="pyramid-level-tag">
            <span>HEART NOTES</span>
            <span class="pyramid-level-timing">· 15 min to 4 hours core</span>
          </div>
          <div class="pyramid-notes-grid">
            ${fragrance.notes.heart.map(n => `
              <div class="pyramid-note-pill">
                <div class="note-name">${n.name}</div>
                <div class="note-accord">${n.accord}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="pyramid-connector"></div>

        <!-- BASE NOTES -->
        <div class="pyramid-level">
          <div class="pyramid-level-tag">
            <span>BASE NOTES</span>
            <span class="pyramid-level-timing">· 4 to 24+ hours sillage</span>
          </div>
          <div class="pyramid-notes-grid">
            ${fragrance.notes.base.map(n => `
              <div class="pyramid-note-pill">
                <div class="note-name">${n.name}</div>
                <div class="note-accord">${n.accord}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;

      architectureContainer.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      architectureContainer.style.opacity = '1';
      architectureContainer.style.transform = 'translateY(0)';
    }, 200);
  }
}
