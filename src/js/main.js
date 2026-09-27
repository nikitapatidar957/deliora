/**
 * DeLiora Essence by Patidar
 * Main Application Orchestrator
 */

import { initMistCanvas } from './mistCanvas.js';
import { initAtmosphere } from './atmosphere.js';
import { initQuickView } from './quickView.js';
import { initSearchModal } from './searchModal.js';
import { initAudioAmbiance } from './audioAmbiance.js';
import { initCinematicHero } from './cinematicHero.js';

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
  const drawerPanel = drawer?.querySelector('.cart-drawer');
  const closeBtn = document.getElementById('mobile-close-btn');
  const links = drawer?.querySelectorAll('a');

  if (!toggleBtn || !drawer) return;

  function openNav(e) {
    e?.preventDefault();
    e?.stopPropagation();
    drawer.classList.add('is-active');
    drawerPanel?.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    drawer.classList.remove('is-active');
    drawerPanel?.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openNav);
  closeBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeNav();
  });

  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) closeNav();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-active')) {
      closeNav();
    }
  });

  links?.forEach(link => link.addEventListener('click', closeNav));
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

