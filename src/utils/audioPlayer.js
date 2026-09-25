import { MOM_DATA } from '../config/momData';

/**
 * Background Audio Player
 * Plays background audio track with smooth looping and responsive toggle controls.
 */
class BackgroundMusicEngine {
  constructor() {
    this.audio = null;
    this.isPlaying = false;
    this.audioSrc = MOM_DATA?.audio?.url || '/bg-music.mp3';
  }

  init() {
    if (!this.audio && typeof window !== 'undefined') {
      this.audio = new Audio(this.audioSrc);
      this.audio.loop = true;
      this.audio.volume = 0.75;
      this.audio.preload = 'auto';

      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
      });
      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
      });
      this.audio.addEventListener('ended', () => {
        this.isPlaying = false;
      });
      this.audio.addEventListener('error', (e) => {
        console.error('Audio playback error:', e);
      });
    }
  }

  start() {
    this.init();
    if (!this.audio) return;

    // Set src if changed
    const currentSrc = MOM_DATA?.audio?.url || '/bg-music.mp3';
    if (this.audio.src !== currentSrc && !this.audio.src.endsWith(currentSrc)) {
      this.audio.src = currentSrc;
    }

    const playPromise = this.audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isPlaying = true;
        })
        .catch((err) => {
          console.warn('Audio play request blocked or waiting for user gesture:', err);
          this.isPlaying = false;
        });
    }
  }

  stop() {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  toggle() {
    this.init();
    if (this.audio && !this.audio.paused) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

export const ambientMusic = new BackgroundMusicEngine();
