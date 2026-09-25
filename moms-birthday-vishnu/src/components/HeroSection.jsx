import React, { useState } from 'react';
import { Heart, Sparkles, Gift, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MOM_DATA } from '../config/momData';

export default function HeroSection({ currentPalette }) {
  const [hugCount, setHugCount] = useState(0);
  const [hugMessage, setHugMessage] = useState("");

  const sendHug = (e) => {
    setHugCount(prev => prev + 1);
    setHugMessage("Big warm hug sent straight to Amma's heart from Kuttan & Ammini! 🤗❤️");

    // Burst heart-shaped confetti
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 25,
      spread: 60,
      origin: { x, y },
      colors: ['#F43F5E', '#FDA4AF', '#FBBF24', '#C084FC'],
      shapes: ['circle'],
      scalar: 1.2
    });

    setTimeout(() => {
      setHugMessage("");
    }, 3500);
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 py-16 overflow-hidden">
      {/* Decorative blurred background aura */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full filter blur-[120px] opacity-40 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: currentPalette.secondary }}
      />

      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        
        {/* Tender Greeting Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs sm:text-sm font-medium tracking-wide uppercase shadow-sm animate-float-slow">
          <Sparkles className="w-4 h-4 text-amber-500 animate-spin-slow" />
          <span style={{ color: currentPalette.primary }} className="font-semibold">
            {MOM_DATA.titlePrefix}
          </span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-600 dark:text-gray-300">Celebrating Your Light</span>
        </div>

        {/* Main Emotional Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight">
          Happy Birthday, <br />
          <span 
            className="font-script font-normal text-5xl sm:text-7xl md:text-8xl inline-block transition-colors duration-500 mt-2"
            style={{ color: currentPalette.primary }}
          >
            {MOM_DATA.recipientName || "Amma"}!
          </span>
        </h1>

        {/* Poetic Subtitle */}
        <p className="text-base sm:text-xl font-light text-gray-700 dark:text-gray-200 max-w-2xl mx-auto leading-relaxed font-sans">
          "{MOM_DATA.subtitle}"
        </p>

        {/* Action Buttons: Send a Hug & Scroll to Cake */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={sendHug}
            className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-medium text-white shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
            style={{ 
              backgroundColor: currentPalette.primary,
              boxShadow: `0 10px 25px -5px ${currentPalette.primary}66`
            }}
          >
            <Heart className="w-5 h-5 fill-current group-hover:scale-125 transition-transform" />
            <span>Send Amma a Hug</span>
            {hugCount > 0 && (
              <span className="ml-1 px-2 py-0.5 text-xs bg-white/30 rounded-full font-bold">
                {hugCount}
              </span>
            )}
          </button>

          <a
            href="#cake"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium glass-card text-gray-800 dark:text-gray-100 hover:bg-white transition-all shadow-sm"
          >
            <Gift className="w-4 h-4 text-amber-500" />
            <span>Make a Birthday Wish</span>
          </a>
        </div>

        {/* Interactive Hug Notification Toast */}
        {hugMessage && (
          <div className="pt-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <p className="inline-block px-4 py-1.5 rounded-full bg-rose-100 text-rose-800 text-xs sm:text-sm font-medium border border-rose-200 shadow-sm">
              {hugMessage}
            </p>
          </div>
        )}

      </div>

      {/* Downward Scroll Cue */}
      <a 
        href="#cake" 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Scroll to birthday cake"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll with love</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
