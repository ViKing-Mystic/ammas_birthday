import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, RotateCcw, Heart } from 'lucide-react';
import { MOM_DATA } from '../config/momData';

export default function BirthdayCake() {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [isBlowing, setIsBlowing] = useState(false);
  const [hugCount, setHugCount] = useState(0);
  const [hugToast, setHugToast] = useState("");

  const { cake, senderName } = MOM_DATA;

  // Blow out candles
  const blowCandles = () => {
    if (candlesBlown) return;
    setIsBlowing(true);

    setTimeout(() => {
      setCandlesBlown(true);
      setIsBlowing(false);

      // Huge celebratory confetti shower!
      const count = 220;
      const defaults = { origin: { y: 0.65 } };

      function fire(particleRatio, opts) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio)
        });
      }

      fire(0.25, { spread: 30, startVelocity: 60, colors: ['#B76E79', '#F6D5D8', '#E6C280', '#FF1493'] });
      fire(0.2, { spread: 65, colors: ['#FFB6C1', '#FFF', '#CA8A04'] });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.9 });
      fire(0.1, { spread: 120, startVelocity: 30, decay: 0.92 });
      fire(0.1, { spread: 130, startVelocity: 50 });
    }, 500);
  };

  // Send Amma a Hug
  const sendHug = (e) => {
    setHugCount(prev => prev + 1);
    setHugToast(cake.hugToast);

    // Heart-shaped confetti burst
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 28,
      spread: 60,
      origin: { x, y },
      colors: ['#B76E79', '#F43F5E', '#FDA4AF', '#E6C280'],
      shapes: ['circle'],
      scalar: 1.2
    });

    setTimeout(() => {
      setHugToast("");
    }, 3200);
  };

  return (
    <section className="py-4 sm:py-6 px-3 sm:px-6 space-y-5 sm:space-y-6 animate-in fade-in duration-400 w-full max-w-2xl mx-auto">
      
      {/* Header */}
      <div className="text-center space-y-1.5 sm:space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rosegold-100 border border-rosegold-300 text-rosewood-900 text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-rosegold-600 animate-spin-slow" />
          <span>Celebration Moment</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-4xl font-bold text-rosewood-950 break-words">
          {cake.title}
        </h2>
        <p className="text-xs sm:text-sm text-rosewood-800 font-medium max-w-md mx-auto leading-relaxed">
          {cake.instruction}
        </p>
      </div>

      {/* The 3D Rose Gold Birthday Cake */}
      <div className="relative flex flex-col items-center justify-center pt-3 pb-2 w-full max-w-xs sm:max-w-sm mx-auto">
        
        {/* Candles Container */}
        <div className="flex justify-center items-end gap-5 sm:gap-7 -mb-1 z-10">
          {[0, 1, 2].map((idx) => (
            <div 
              key={idx} 
              onClick={blowCandles}
              className="flex flex-col items-center cursor-pointer group select-none"
            >
              {/* Flame or Smoke Puff */}
              {!candlesBlown ? (
                <div className="relative">
                  <div className="absolute -inset-2 bg-amber-300 rounded-full blur-xs opacity-70 animate-pulse" />
                  <div className="relative w-4 sm:w-5 h-6 sm:h-7 transition-all duration-300 transform group-hover:scale-125 animate-flicker">
                    <svg viewBox="0 0 24 32" className="w-full h-full drop-shadow-md">
                      <path
                        d="M12 0C12 0 4 10 4 18C4 24 7.5 30 12 30C16.5 30 20 24 20 18C20 10 12 0 12 0Z"
                        fill="url(#candleFlame)"
                      />
                      <path
                        d="M12 8C12 8 8 14 8 19C8 23 10 26 12 26C14 26 16 23 16 19C16 14 12 8 12 8Z"
                        fill="#FFFBF5"
                      />
                      <defs>
                        <linearGradient id="candleFlame" x1="12" y1="0" x2="12" y2="30">
                          <stop stopColor="#FEF08A" />
                          <stop offset="0.6" stopColor="#F59E0B" />
                          <stop offset="1" stopColor="#EF4444" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              ) : (
                <div className="h-6 sm:h-7 flex items-center justify-center">
                  <span className="text-gray-400 text-xs animate-fade-out font-script">puff~</span>
                </div>
              )}

              {/* Candle Wick */}
              <div className="w-0.5 h-2 bg-gray-700 mt-0.5" />

              {/* Candle Pillar (Rose Gold Striped) */}
              <div 
                className="w-3.5 sm:w-4 h-10 sm:h-12 rounded-t-sm shadow-inner relative overflow-hidden border border-rosegold-300"
                style={{
                  background: 'repeating-linear-gradient(45deg, #FBECEE, #FBECEE 5px, #B76E79 5px, #B76E79 10px)'
                }}
              />
            </div>
          ))}
        </div>

        {/* Responsive Cake Tiers */}
        <div className="relative flex flex-col items-center w-full">
          
          {/* Top Tier */}
          <div className="w-36 sm:w-44 h-14 sm:h-16 bg-gradient-to-b from-rosegold-100 to-rosegold-200 rounded-t-2xl shadow-md relative border border-rosegold-300 flex items-center justify-center">
            {/* Frosting Drips */}
            <div className="absolute -top-1 inset-x-0 flex justify-around">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-4 sm:w-5 h-3 sm:h-3.5 bg-white rounded-b-full shadow-xs" />
              ))}
            </div>
            <div className="flex items-center gap-1.5 pt-1.5">
              <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rosegold-600 fill-rosegold-400 animate-pulse" />
              <span className="font-script text-rosewood-950 text-sm sm:text-base font-bold">Queen Amma</span>
              <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rosegold-600 fill-rosegold-400 animate-pulse" />
            </div>
          </div>

          {/* Bottom Tier */}
          <div className="w-48 sm:w-60 h-16 sm:h-20 bg-gradient-to-b from-champagne-100 to-rosegold-100 rounded-t-xl shadow-lg relative border border-rosegold-200 flex items-center justify-center">
            <div className="absolute -top-1.5 inset-x-0 flex justify-around">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="w-4 sm:w-5 h-2.5 sm:h-3 bg-white rounded-b-full shadow-inner" />
              ))}
            </div>
            <span className="font-serif italic text-rosewood-900 font-semibold text-[11px] sm:text-xs tracking-widest uppercase pt-2">
              Forever Cherished ✨
            </span>
          </div>

          {/* Cake Stand (Metallic Rose Gold Platter) */}
          <div className="w-56 sm:w-68 h-3 sm:h-3.5 bg-gradient-to-r from-rosegold-300 via-white to-rosegold-300 rounded-full shadow-xl border border-rosegold-400" />
          <div className="w-24 sm:w-28 h-4 sm:h-5 bg-gradient-to-b from-rosegold-300 to-rosegold-400 rounded-b-lg shadow-md" />
          <div className="w-32 sm:w-40 h-2 sm:h-2.5 bg-gradient-to-r from-rosegold-400 via-rosegold-200 to-rosegold-400 rounded-full shadow-inner -mt-0.5" />
        </div>

      </div>

      {/* Button to blow or Wish reveal */}
      <div className="space-y-4 text-center w-full">
        {!candlesBlown ? (
          <button
            onClick={blowCandles}
            disabled={isBlowing}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm text-white shadow-lg shadow-rosegold-400/50 bg-gradient-to-r from-rosegold-500 to-rosegold-600 hover:from-rosegold-600 hover:to-rosegold-700 active:scale-95 transition-all transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            <span>{isBlowing ? "Making a Wish..." : cake.buttonText}</span>
          </button>
        ) : (
          <div className="space-y-3 sm:space-y-4 animate-in zoom-in-95 duration-400">
            {/* Wish Revealed Card */}
            <div className="max-w-md mx-auto p-4 sm:p-6 rounded-3xl bg-white border-2 border-rosegold-300 shadow-xl space-y-2.5 sm:space-y-3">
              <div className="w-10 h-10 rounded-full bg-rosegold-100 text-rosegold-600 mx-auto flex items-center justify-center shadow-inner">
                <Heart className="w-5 h-5 fill-rosegold-500" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-rosewood-950">
                Wish Sent to the Stars! ✨
              </h3>
              <p className="font-sans text-xs sm:text-sm text-rosewood-900 leading-relaxed font-medium break-words">
                {cake.wishRevealed}
              </p>
              <p className="font-script text-2xl sm:text-3xl text-rosegold-600 font-bold">
                With all our love, {senderName} ❤️
              </p>
            </div>

            {/* Relight button */}
            <div>
              <button
                onClick={() => setCandlesBlown(false)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-rosewood-700 hover:text-rosewood-900 bg-white border border-rosegold-200 shadow-xs"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Relight Candles</span>
              </button>
            </div>
          </div>
        )}

        {/* Live Hug Counter Button */}
        <div className="pt-2">
          <button
            onClick={sendHug}
            className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm text-rosewood-900 bg-white border-2 border-rosegold-300 hover:bg-rosegold-50 active:scale-95 transition-all shadow-md group"
          >
            <Heart className="w-4 h-4 text-rosegold-500 fill-rosegold-400 group-hover:scale-125 transition-transform" />
            <span>{cake.hugButtonText}</span>
            {hugCount > 0 && (
              <span className="ml-1 px-2 py-0.5 text-xs bg-rosegold-500 text-white rounded-full font-extrabold">
                {hugCount}
              </span>
            )}
          </button>

          {/* Hug Toast Notification */}
          {hugToast && (
            <div className="pt-2 animate-in fade-in slide-in-from-bottom-2 duration-300 px-2">
              <p className="inline-block px-3.5 py-1.5 rounded-full bg-rosegold-100 text-rosewood-950 text-xs font-bold border border-rosegold-300 shadow-xs break-words">
                {hugToast}
              </p>
            </div>
          )}
        </div>

      </div>

    </section>
  );
}
