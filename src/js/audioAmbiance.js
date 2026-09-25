/**
 * DeLiora Essence by Patidar
 * Ambient Luxury Acoustic Soundscape Synthesizer (Web Audio API)
 */

export function initAudioAmbiance() {
  const toggleBtn = document.getElementById('ambiance-audio-toggle');
  if (!toggleBtn) return;

  let audioCtx = null;
  let isPlaying = false;
  let gainNode = null;
  let osc1 = null;
  let osc2 = null;

  function createSoundscape() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
    gainNode.connect(audioCtx.destination);

    // Warm resonant drone (55Hz A1 root & 165Hz E3 harmonic)
    osc1 = audioCtx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(55, audioCtx.currentTime);

    osc2 = audioCtx.createOscillator();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(164.81, audioCtx.currentTime);

    const subGain = audioCtx.createGain();
    subGain.gain.setValueAtTime(0.04, audioCtx.currentTime);

    osc1.connect(subGain);
    osc2.connect(subGain);
    subGain.connect(gainNode);

    osc1.start();
    osc2.start();
  }

  toggleBtn.addEventListener('click', () => {
    if (!isPlaying) {
      if (!audioCtx) createSoundscape();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      
      gainNode.gain.setTargetAtTime(0.06, audioCtx.currentTime, 1.5);
      isPlaying = true;
      toggleBtn.classList.add('is-active');
      toggleBtn.setAttribute('title', 'Soundscape Playing · Click to Mute');
      toggleBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      `;
    } else {
      if (gainNode) {
        gainNode.gain.setTargetAtTime(0.001, audioCtx.currentTime, 0.8);
      }
      isPlaying = false;
      toggleBtn.classList.remove('is-active');
      toggleBtn.setAttribute('title', 'Enable Quiet Luxury Soundscape');
      toggleBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        </svg>
      `;
    }
  });
}
