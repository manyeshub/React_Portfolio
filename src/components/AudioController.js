// ============================================================
// AudioController.js — Web Audio API sound synthesis (0KB assets)
// ============================================================

class AudioController {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.initialized = true;
    } catch (e) {
      console.warn("Web Audio API not supported:", e);
    }
  }

  _play(frequency, type, duration, volume = 0.08, detune = 0) {
    if (!this.ctx || this.muted) return;
    if (this.ctx.state === "suspended") this.ctx.resume();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, now);
    if (detune) osc.detune.setValueAtTime(detune, now);

    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + duration);
  }

  // UI click / selection
  blip() {
    this._play(880, "sine", 0.08, 0.06);
    this._play(1320, "sine", 0.06, 0.03);
  }

  // Tab switch / navigation
  navigate() {
    const now = this.ctx?.currentTime || 0;
    if (!this.ctx || this.muted) return;
    if (this.ctx.state === "suspended") this.ctx.resume();

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = "sine";
    osc1.frequency.setValueAtTime(440, now);
    osc1.frequency.linearRampToValueAtTime(880, now + 0.1);

    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(660, now + 0.05);
    osc2.frequency.linearRampToValueAtTime(1100, now + 0.12);

    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.ctx.destination);

    osc1.start(now);
    osc2.start(now + 0.03);
    osc1.stop(now + 0.15);
    osc2.stop(now + 0.15);
  }

  // Hover effect
  hover() {
    this._play(1200, "sine", 0.04, 0.03);
  }

  // Success / unlock
  unlock() {
    this._play(523, "sine", 0.12, 0.07);
    setTimeout(() => this._play(659, "sine", 0.12, 0.07), 80);
    setTimeout(() => this._play(784, "sine", 0.18, 0.07), 160);
  }

  // Error
  error() {
    this._play(200, "sawtooth", 0.15, 0.05);
    setTimeout(() => this._play(180, "sawtooth", 0.2, 0.04), 100);
  }

  // Form submit whoosh
  whoosh() {
    if (!this.ctx || this.muted) return;
    if (this.ctx.state === "suspended") this.ctx.resume();
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(2000, now + 0.25);

    gain.gain.setValueAtTime(0.04, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.3);
  }

  toggle() {
    this.muted = !this.muted;
    return this.muted;
  }
}

const audio = new AudioController();
export default audio;
