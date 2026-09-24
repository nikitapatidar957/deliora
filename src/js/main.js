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

document.addEventListener('DOMContentLoaded', () => {
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
});

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

  visualFrames.forEach((frame) => {
    // Mobile / Touch toggle support
    frame.addEventListener('click', (e) => {
      // If clicking inside on a specific link or action, don't toggle frame
      if (e.target.closest('a, button')) return;

      const isAlreadyActive = frame.classList.contains('is-hovered');

      // Close all other visual frames first
      visualFrames.forEach(otherFrame => {
        if (otherFrame !== frame) otherFrame.classList.remove('is-hovered');
      });

      // Toggle this frame
      frame.classList.toggle('is-hovered', !isAlreadyActive);
    });

    // Keyboard accessibility support (Tab focus / Enter)
    frame.addEventListener('focus', () => {
      frame.classList.add('is-hovered');
    });

    frame.addEventListener('blur', () => {
      frame.classList.remove('is-hovered');
    });
  });

  // Close open galleries when tapping outside on touch devices
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.universe-visual-frame')) {
      visualFrames.forEach(frame => frame.classList.remove('is-hovered'));
    }
  });
}

