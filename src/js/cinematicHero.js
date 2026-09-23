/**
 * DeLiora Essence by Patidar
 * Cinematic Scroll-Driven Hero Module
 * 
 * Features:
 * - Horizontal Campaign Image -> 9:16 Vertical Reel Morph
 * - Fixed Center Clip (center_clip.mp4) with Final 1s Luxury Overlay
 * - Two Emerging Side Reels with Randomized Clip Selection (fleur, blanc, velvet, alpha)
 * - 100% Scrubbable & Reversible Animation Timeline (60fps GPU)
 */

const FIXED_CENTER_CLIP = {
  id: 'center',
  name: 'DeLiora Signature',
  subtitle: 'Extrait de Parfum',
  src: '/perfumes_images1/center_clip.mp4'
};

const SIDE_CLIPS_POOL = [
  { id: 'fleur', name: 'Fleur', subtitle: 'Blush Floral', src: '/perfumes_images1/fleur_clip1.mp4' },
  { id: 'blanc', name: 'Blanc', subtitle: 'Alabaster White', src: '/perfumes_images1/blanc_clip3.mp4' },
  { id: 'velvet', name: 'Velvet', subtitle: 'Emerald Berries', src: '/perfumes_images1/velvet_clip4.mp4' },
  { id: 'alpha', name: 'Alpha', subtitle: 'Smoky Amber', src: '/perfumes_images1/alpha_clip5.mp4' }
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

  // 1. Assign Randomized Side Clips
  assignRandomSideClips();

  function assignRandomSideClips() {
    const shuffled = [...SIDE_CLIPS_POOL].sort(() => 0.5 - Math.random());
    const leftClip = shuffled[0];
    const rightClip = shuffled[1];

    if (videoLeft && leftClip) {
      videoLeft.src = leftClip.src;
      videoLeft.load();
      if (badgeLeft) badgeLeft.textContent = `${leftClip.name} · ${leftClip.subtitle}`;
    }

    if (videoRight && rightClip) {
      videoRight.src = rightClip.src;
      videoRight.load();
      if (badgeRight) badgeRight.textContent = `${rightClip.name} · ${rightClip.subtitle}`;
    }
  }

  // 2. Setup Center Video End-Frame Overlay Listener
  videoCenter.addEventListener('timeupdate', () => {
    if (!videoCenter.duration) return;
    const remaining = videoCenter.duration - videoCenter.currentTime;

    // Trigger overlay in the final ~1.1s of the clip when user is near bottom of hero
    if (remaining <= 1.2 && remaining > 0.05 && currentProgress >= 0.70) {
      overlay?.classList.add('is-active');
    } else if (remaining > 1.3 && videoCenter.currentTime < 1.0) {
      // Loop restarted: smooth fade out for the next cycle
      overlay?.classList.remove('is-active');
    }
  });

  // 3. Easing Functions for Organic Motion
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
    // Smooth interpolation for 60fps cinematic fluidity
    currentProgress += (targetProgress - currentProgress) * 0.18;
    const p = currentProgress;

    const isMobile = window.innerWidth <= 768;

    // Dimensions
    const targetH = isMobile
      ? Math.min(window.innerHeight * 0.68, 480)
      : Math.min(window.innerHeight * 0.74, 620);
    const targetW = Math.round(targetH * (9 / 16));

    const initW = isMobile
      ? Math.min(window.innerWidth * 0.94, 420)
      : Math.min(window.innerWidth * 0.88, 1300);
    const initH = isMobile
      ? Math.min(window.innerHeight * 0.45, 300)
      : Math.min(window.innerHeight * 0.76, 680);

    const gap = isMobile ? 16 : 28;

    // Stage 1: Morphing width & height (p: 0 -> 0.52)
    const morphT = Math.min(p / 0.52, 1);
    const easedMorph = easeInOutCubic(morphT);

    const w = initW + (targetW - initW) * easedMorph;
    const h = initH + (targetH - initH) * easedMorph;
    const radius = 8 + (16 - 8) * easedMorph;

    reelCenter.style.width = `${Math.round(w)}px`;
    reelCenter.style.height = `${Math.round(h)}px`;
    reelCenter.style.borderRadius = `${Math.round(radius)}px`;

    // Crossfade horizontal image -> center video
    if (p < 0.35) {
      if (heroImg) heroImg.style.opacity = '1';
      videoCenter.style.opacity = '0';
    } else if (p >= 0.35 && p <= 0.55) {
      const fade = (p - 0.35) / 0.20;
      if (heroImg) heroImg.style.opacity = (1 - fade).toFixed(3);
      videoCenter.style.opacity = fade.toFixed(3);
    } else {
      if (heroImg) heroImg.style.opacity = '0';
      videoCenter.style.opacity = '1';
    }

    // Video Playback Control
    if (p >= 0.42) {
      if (videoCenter.paused) {
        videoCenter.play().catch(() => {});
      }
    } else {
      if (!videoCenter.paused) {
        videoCenter.pause();
      }
    }

    // Stage 2: Left & Right Reels Emerge (p: 0.38 -> 0.92)
    if (!isMobile && reelLeft && reelRight) {
      reelLeft.style.width = `${targetW}px`;
      reelLeft.style.height = `${targetH}px`;
      reelLeft.style.left = `calc(50% - ${Math.round(targetW * 1.5 + gap)}px)`;
      reelLeft.style.top = `calc(50% - ${Math.round(targetH * 0.5)}px)`;

      reelRight.style.width = `${targetW}px`;
      reelRight.style.height = `${targetH}px`;
      reelRight.style.left = `calc(50% + ${Math.round(targetW * 0.5 + gap)}px)`;
      reelRight.style.top = `calc(50% - ${Math.round(targetH * 0.5)}px)`;

      if (p < 0.38) {
        reelLeft.style.transform = 'translate3d(0, 110vh, 0)';
        reelLeft.style.opacity = '0';
        reelRight.style.transform = 'translate3d(0, 110vh, 0)';
        reelRight.style.opacity = '0';

        if (videoLeft && !videoLeft.paused) videoLeft.pause();
        if (videoRight && !videoRight.paused) videoRight.pause();
      } else {
        const riseT = Math.min(Math.max((p - 0.38) / 0.54, 0), 1);
        const easedRise = easeOutCubic(riseT);
        const yOffset = (1 - easedRise) * 110;
        const opacity = Math.min(riseT * 1.25, 1) * 0.92;

        reelLeft.style.transform = `translate3d(0, ${yOffset.toFixed(2)}vh, 0)`;
        reelLeft.style.opacity = opacity.toFixed(3);

        reelRight.style.transform = `translate3d(0, ${yOffset.toFixed(2)}vh, 0)`;
        reelRight.style.opacity = opacity.toFixed(3);

        if (p >= 0.65) {
          if (videoLeft && videoLeft.paused) videoLeft.play().catch(() => {});
          if (videoRight && videoRight.paused) videoRight.play().catch(() => {});
        } else {
          if (videoLeft && !videoLeft.paused) videoLeft.pause();
          if (videoRight && !videoRight.paused) videoRight.pause();
        }
      }
    }

    // Stage 3: Overlay dismiss on upward scrub
    if (p < 0.70) {
      overlay?.classList.remove('is-active');
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
