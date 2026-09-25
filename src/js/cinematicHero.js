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

import fleurClip from '../../perfumes_images1/fleur_clip1.mp4';
import mistiqueClip from '../../perfumes_images1/mistique_clip2.mp4';
import blancClip from '../../perfumes_images1/blanc_clip3.mp4';
import velvetClip from '../../perfumes_images1/velvet_clip4.mp4';
import alphaClip from '../../perfumes_images1/alpha_clip5.mp4';

const PERFUME_CLIPS = [
  { index: 1, id: 'fleur', name: 'Fleur', subtitle: 'Blush Floral', src: fleurClip },
  { index: 2, id: 'mistique', name: 'Mistique', subtitle: 'Aqua Oceanic', src: mistiqueClip },
  { index: 3, id: 'blanc', name: 'Blanc', subtitle: 'Alabaster White', src: blancClip },
  { index: 4, id: 'velvet', name: 'Velvet', subtitle: 'Emerald Berries', src: velvetClip },
  { index: 5, id: 'alpha', name: 'Alpha', subtitle: 'Smoky Amber', src: alphaClip }
];

export function initCinematicHero() {
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
  const scrollPrompt = document.getElementById('cinematic-scroll-prompt');

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
      videoEl.play().catch(() => {});
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
      videoCenter.play().catch(() => {});
    } else {
      // Replay second run
      videoCenter.currentTime = 0;
      videoCenter.play().catch(() => {});
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

    // Target 9:16 dimensions
    const targetH = isMobile
      ? Math.min(window.innerHeight * 0.58, 380)
      : Math.min(window.innerHeight * 0.73, 610);
    const targetW = Math.round(targetH * (9 / 16));

    // Dynamic initial geometry: Place image and ambient aura JUST BELOW "DELIORA ESSENCE By Patidar"
    const headerRect = header ? header.getBoundingClientRect() : null;
    const headerBottom = (headerRect && headerRect.height > 0)
      ? (headerRect.top + headerRect.height)
      : (window.innerHeight * (isMobile ? 0.16 : 0.22));

    const gapBelowHeader = isMobile ? 8 : 20;
    const topPadding = headerBottom + gapBelowHeader;
    const bottomPadding = isMobile ? 18 : 42;
    const availableH = window.innerHeight - topPadding - bottomPadding;

    const initH = isMobile
      ? Math.min(availableH, 270)
      : Math.min(availableH, 610);
    const initW = isMobile
      ? Math.min(window.innerWidth * 0.92, 380)
      : Math.min(window.innerWidth * 0.88, 1280);

    // Initial Center Y puts top of image exactly at headerBottom + gapBelowHeader
    const initCenterY = topPadding + (initH / 2);
    const targetCenterY = window.innerHeight * 0.5;

    const gap = isMobile ? 16 : 28;

    // Stage 1: Morphing width, height & vertical translation (p: 0 -> 0.52)
    const morphT = Math.min(p / 0.50, 1);
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

    // Crossfade horizontal image -> center video (0.1s faster start)
    if (p < 0.24) {
      if (heroImg) heroImg.style.opacity = '1';
      videoCenter.style.opacity = '0';
    } else if (p >= 0.24 && p <= 0.44) {
      const fade = (p - 0.24) / 0.20;
      if (heroImg) heroImg.style.opacity = (1 - fade).toFixed(3);
      videoCenter.style.opacity = fade.toFixed(3);
    } else {
      if (heroImg) heroImg.style.opacity = '0';
      videoCenter.style.opacity = '1';
    }

    // Video Playback Control (starts 0.1s earlier so it's already running smoothly)
    if (p >= 0.26) {
      if (videoCenter.paused) {
        videoCenter.play().catch(() => {});
      }
    } else {
      if (!videoCenter.paused) {
        videoCenter.pause();
      }
    }

    // Stage 2: Left & Right Reels Emerge (smooth rise starting at p >= 0.28)
    if (reelLeft && reelRight) {
      if (isMobile) {
        const mTargetW = Math.round(targetW * 0.84);
        const mTargetH = Math.round(targetH * 0.84);
        reelLeft.style.width = `${mTargetW}px`;
        reelLeft.style.height = `${mTargetH}px`;
        reelLeft.style.left = `calc(50% - ${Math.round(targetW * 0.74)}px)`;
        reelLeft.style.top = `calc(50% - ${Math.round(mTargetH * 0.5)}px)`;
        reelLeft.style.zIndex = '9';

        reelRight.style.width = `${mTargetW}px`;
        reelRight.style.height = `${mTargetH}px`;
        reelRight.style.left = `calc(50% + ${Math.round(targetW * 0.74 - mTargetW)}px)`;
        reelRight.style.top = `calc(50% - ${Math.round(mTargetH * 0.5)}px)`;
        reelRight.style.zIndex = '9';
      } else {
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
      }

      if (p < 0.28) {
        reelLeft.style.transform = isMobile ? 'translate3d(0, 110vh, 0) scale(0.85)' : 'translate3d(0, 110vh, 0)';
        reelLeft.style.opacity = '0';
        reelRight.style.transform = isMobile ? 'translate3d(0, 110vh, 0) scale(0.85)' : 'translate3d(0, 110vh, 0)';
        reelRight.style.opacity = '0';

        if (videoLeft && !videoLeft.paused) videoLeft.pause();
        if (videoRight && !videoRight.paused) videoRight.pause();
      } else {
        const riseT = Math.min(Math.max((p - 0.28) / 0.52, 0), 1);
        const easedRise = easeOutCubic(riseT);
        const yOffset = (1 - easedRise) * 110;
        const opacity = Math.min(riseT * 1.35, 1) * (isMobile ? 0.85 : 0.94);

        reelLeft.style.transform = isMobile
          ? `translate3d(0, ${yOffset.toFixed(2)}vh, 0) scale(0.85)`
          : `translate3d(0, ${yOffset.toFixed(2)}vh, 0)`;
        reelLeft.style.opacity = opacity.toFixed(3);

        reelRight.style.transform = isMobile
          ? `translate3d(0, ${yOffset.toFixed(2)}vh, 0) scale(0.85)`
          : `translate3d(0, ${yOffset.toFixed(2)}vh, 0)`;
        reelRight.style.opacity = opacity.toFixed(3);

        if (p >= 0.40) {
          if (videoLeft && videoLeft.paused) videoLeft.play().catch(() => {});
          if (videoRight && videoRight.paused) videoRight.play().catch(() => {});
        } else {
          if (videoLeft && !videoLeft.paused) videoLeft.pause();
          if (videoRight && !videoRight.paused) videoRight.pause();
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

    if (scrollPrompt) {
      const promptFade = Math.max(0, 1 - p / 0.14);
      scrollPrompt.style.opacity = promptFade.toFixed(3);
      scrollPrompt.style.transform = `translateX(-50%) translateY(${-p * 30}px)`;
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

  // Initial render on mount
  targetProgress = calculateProgress();
  currentProgress = targetProgress;
  updateLayout();
}
