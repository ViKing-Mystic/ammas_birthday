import React from 'react';
import { Heart, ArrowUp, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MOM_DATA } from '../config/momData';

export default function Footer({ currentPalette }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const popConfetti = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 30,
      spread: 70,
      origin: { x, y },
      colors: ['#F43F5E', '#FDA4AF', '#FBBF24']
    });
  };

  return (
    <footer className="pt-16 pb-12 px-4 border-t border-rose-100/60 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        
        {/* Heart icon button */}
        <button
          onClick={popConfetti}
          title="Click for a burst of love!"
          className="w-12 h-12 rounded-full mx-auto flex items-center justify-center transition-transform hover:scale-125 active:scale-95 shadow-md group"
          style={{ backgroundColor: `${currentPalette.primary}20` }}
        >
          <Heart 
            className="w-6 h-6 animate-pulse group-hover:scale-110 transition-transform"
            style={{ fill: currentPalette.primary, color: currentPalette.primary }}
          />
        </button>

        <div className="space-y-2">
          <p className="font-serif text-2xl font-bold text-gray-800">
            Happy Birthday, Amma! 🌸
          </p>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            May your smile never fade and may every single dream of yours come true.
          </p>
        </div>

        {/* Made with love credit */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1.5">
            Designed & coded with endless love by <span className="font-semibold text-gray-700">{MOM_DATA.sendersDetailed || MOM_DATA.senderName}</span>
          </span>
          <span className="hidden sm:inline">•</span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 hover:text-gray-700 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
