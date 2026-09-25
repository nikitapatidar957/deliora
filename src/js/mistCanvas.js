/**
 * DeLiora Essence by Patidar
 * Ambient Fragrance Mist & Golden Particle Physics Simulation
 */

export function initMistCanvas() {
  const canvas = document.getElementById('mist-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Particle pool
  const particles = [];
  const PARTICLE_COUNT = 45;

  class MistParticle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + Math.random() * 50;
      this.radius = Math.random() * 80 + 30; // wide soft puff
      this.vx = (Math.random() - 0.48) * 0.4;
      this.vy = -(Math.random() * 0.35 + 0.15);
      this.maxAlpha = Math.random() * 0.05 + 0.015;
      this.alpha = 0;
      this.growth = Math.random() * 0.0008 + 0.0003;
      this.state = 'fade-in';
      // Golden dust vs mist color
      this.isDust = Math.random() > 0.65;
      if (this.isDust) {
        this.radius = Math.random() * 1.8 + 0.6;
        this.maxAlpha = Math.random() * 0.4 + 0.15;
        this.vy = -(Math.random() * 0.45 + 0.1);
      }
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.state === 'fade-in') {
        this.alpha += this.growth * 5;
        if (this.alpha >= this.maxAlpha) {
          this.alpha = this.maxAlpha;
          this.state = 'drift';
        }
      } else if (this.state === 'drift') {
        if (this.y < height * 0.15) {
          this.state = 'fade-out';
        }
      } else if (this.state === 'fade-out') {
        this.alpha -= this.growth * 3;
        if (this.alpha <= 0) {
          this.reset();
        }
      }

      if (this.x < -100 || this.x > width + 100 || this.y < -100) {
        this.reset();
      }
    }

    draw() {
      if (this.alpha <= 0) return;

      ctx.save();
      if (this.isDust) {
        // Sparkling golden dust particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 103, ${this.alpha})`;
        ctx.shadowColor = 'rgba(212, 175, 103, 0.6)';
        ctx.shadowBlur = 6;
        ctx.fill();
      } else {
        // Soft billowing fragrance cloud
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        );
        gradient.addColorStop(0, `rgba(245, 240, 232, ${this.alpha})`);
        gradient.addColorStop(0.5, `rgba(217, 160, 164, ${this.alpha * 0.4})`);
        gradient.addColorStop(1, 'rgba(43, 15, 18, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new MistParticle());
  }

  let animationFrameId;
  function render() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    animationFrameId = requestAnimationFrame(render);
  }

  render();

  return () => cancelAnimationFrame(animationFrameId);
}
