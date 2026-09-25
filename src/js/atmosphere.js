/**
 * DeLiora Essence by Patidar
 * Atmospheric Shifting Engine (Burgundy → Ivory → Aqua → Blush → Emerald → Deep Brown → Burgundy)
 */

export function initAtmosphere() {
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
