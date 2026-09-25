/**
 * Web Audio Lullaby / Ambient Chime Synthesizer
 * Plays a gentle, peaceful melody using synthesized warm sine/triangle bells.
 * Zero external audio file download required, works offline and instantaneously!
 */

class AmbientMusicEngine {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.currentStep = 0;
    this.timerId = null;
    // Gentle lullaby melody frequencies (F, A, C, E chord tones & pentatonic warmth)
    this.notes = [
      261.63, 329.63, 392.00, 523.25, // C4, E4, G4, C5
      293.66, 349.23, 440.00, 587.33, // D4, F4, A4, D5
      261.63, 329.63, 392.00, 659.25, // C4, E4, G4, E5
      349.23, 440.00, 523.25, 698.46, // F4, A4, C5, F5
      392.00, 493.88, 587.33, 783.99, // G4, B4, D5, G5
      440.00, 523.25, 659.25, 880.00, // A4, C5, E5, A5
      349.23, 440.00, 523.25, 659.25, // F4, A4, C5, E5
      261.63, 329.63, 392.00, 523.25  // C4, E4, G4, C5
    ];
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playNote(freq, timeOffset = 0, duration = 2.5) {
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime + timeOffset;

    // Main oscillator (warm sine)
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    // Harmonics oscillator (gentle bell shimmer)
    const osc2 = this.audioCtx.createOscillator();
    const gain2 = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 2, now);

    // Envelope for warm music box sound
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    gain2.gain.setValueAtTime(0, now);
    gain2.gain.linearRampToValueAtTime(0.02, now + 0.04);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.8);

    osc.connect(gain);
    osc2.connect(gain2);
    gain.connect(this.audioCtx.destination);
    gain2.connect(this.audioCtx.destination);

    osc.start(now);
    osc2.start(now);
    osc.stop(now + duration);
    osc2.stop(now + duration);
  }

  start() {
    this.init();
    if (this.isPlaying) return;
    this.isPlaying = true;

    const playLoop = () => {
      if (!this.isPlaying) return;
      const freq = this.notes[this.currentStep % this.notes.length];
      this.playNote(freq, 0, 2.8);

      // Occasionally add a soft harmony note
      if (this.currentStep % 4 === 0) {
        this.playNote(freq * 0.5, 0, 3.2); // Soft bass note
      }

      this.currentStep++;
      this.timerId = setTimeout(playLoop, 750);
    };

    playLoop();
  }

  stop() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

export const ambientMusic = new AmbientMusicEngine();
