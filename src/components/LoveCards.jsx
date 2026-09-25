import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Heart, 
  Sparkles, 
  Gift, 
  Shield, 
  Eye, 
  Search, 
  Coffee, 
  Crown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { MOM_DATA } from '../config/momData';
import { EnlargeableImage } from './PhotoLightboxModal';
import { useDeviceMode } from './PhoneContainer';

// Map icon strings
const iconMap = {
  Heart,
  Eye,
  Search,
  Coffee,
  Shield,
  Crown
};

export default function LoveCards() {
  const { deviceMode } = useDeviceMode();
  const isPhoneMode = deviceMode === 'phone';
  
  // Virtual / Circular Index for Coverflow
  const [activeIndex, setActiveIndex] = useState(0);
  const reasons = MOM_DATA.reasons;
  const totalCards = reasons.length;

  // Interactive Likes state for Love Cards
  const [likes, setLikes] = useState(() => {
    const initial = {};
    MOM_DATA.reasons.forEach((r, idx) => {
      initial[r.id] = 160 + ((idx * 17) % 75);
    });
    return initial;
  });

  const handleLike = (e, id) => {
    e.stopPropagation();
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 160) + 1
    }));
  };

  // Touch handling for mobile swipe
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Love Jar state
  const [activeJarNote, setActiveJarNote] = useState(null);
  const [jarIndex, setJarIndex] = useState(0);

  const drawNote = () => {
    const nextIndex = (jarIndex + 1) % MOM_DATA.loveJarQuotes.length;
    setJarIndex(nextIndex);
    setActiveJarNote(MOM_DATA.loveJarQuotes[nextIndex]);
  };

  // Next and Previous navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalCards);
  }, [totalCards]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
  }, [totalCards]);

  const goToIndex = (index) => {
    setActiveIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="py-4 sm:py-6 px-2 sm:px-6 space-y-6 sm:space-y-8 animate-in fade-in duration-400 w-full max-w-4xl mx-auto overflow-hidden">
      
      {/* Header */}
      <div className="text-center space-y-1.5 sm:space-y-2 px-2">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rosegold-100 border border-rosegold-300 text-rosewood-900 text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-xs">
          <Heart className="w-3.5 h-3.5 fill-rosegold-500 text-rosegold-500" />
          <span>Gratitude & Superpowers</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-4xl font-bold text-rosewood-950 break-words">
          Why You Are Our Whole World
        </h2>
        <p className="text-xs sm:text-sm text-rosewood-800 font-medium max-w-md mx-auto leading-relaxed">
          From Kuttan & Ammini — just a handful of the countless reasons why having you as Amma is life's greatest gift.
        </p>
      </div>

      {/* Amma's Superpower Stats Card */}
      <div className="p-4 sm:p-6 rounded-3xl bg-white border-2 border-rosegold-200 shadow-md space-y-3.5 mx-2">
        <div className="flex items-center gap-2 border-b border-rosegold-100 pb-2">
          <Sparkles className="w-4 h-4 text-rosegold-500" />
          <h3 className="font-serif text-base sm:text-xl font-bold text-rosewood-950">
            Amma's Verified Superpowers
          </h3>
        </div>

        <div className="space-y-3 sm:space-y-3.5">
          {MOM_DATA.superpowers.map((power, idx) => {
            const IconComponent = iconMap[power.icon] || Heart;
            return (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2 min-w-0 pr-2">
                    <span className="p-1 rounded-lg bg-rosegold-100 text-rosegold-700 shrink-0">
                      <IconComponent className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-bold text-rosewood-950 truncate">{power.name}</span>
                  </div>
                  <span className="font-mono font-bold text-rosegold-600 shrink-0">
                    {power.level === 100 ? "100%" : `${power.level}%`}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 sm:h-2.5 bg-rosegold-50 rounded-full overflow-hidden border border-rosegold-200">
                  <div 
                    className="h-full bg-gradient-to-r from-rosegold-400 to-rosegold-600 rounded-full transition-all duration-1000"
                    style={{ width: `${power.level}%` }}
                  />
                </div>
                <p className="text-[10px] sm:text-xs text-rosewood-700 italic break-words">
                  {power.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3D INFINITE COVERFLOW CAROUSEL SECTION */}
      <div className="space-y-3 sm:space-y-4 pt-2">
        
        {/* Section Heading */}
        <div className="text-center space-y-1">
          <h3 className="font-serif text-xl sm:text-3xl font-bold text-rosewood-950 break-words">
            Treasured Reasons We Love You, Amma
          </h3>
        </div>

        {/* Coverflow 3D Stage Container */}
        <div 
          className="relative w-full overflow-hidden py-4 select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            perspective: '1200px',
            minHeight: isPhoneMode ? '460px' : '500px'
          }}
        >
          {/* Ambient Glow behind center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-rosegold-200/50 via-blush-200/40 to-champagne-200/30 blur-3xl pointer-events-none -z-10" />

          {/* Cards Stage */}
          <div className="relative w-full h-[440px] sm:h-[480px] flex items-center justify-center">
            {reasons.map((reason, idx) => {
              // Calculate circular offset relative to activeIndex in range [-totalCards/2, totalCards/2]
              let offset = (idx - activeIndex) % totalCards;
              if (offset > totalCards / 2) offset -= totalCards;
              if (offset < -totalCards / 2) offset += totalCards;

              const isCenter = offset === 0;
              const isImmediate = Math.abs(offset) === 1;
              const isVisible = Math.abs(offset) <= 2;

              // Compute 3D Coverflow positioning parameters
              let translateX = 0;
              let scale = 1;
              let rotateY = 0;
              let opacity = 0;
              let zIndex = 0;
              let filter = 'none';

              if (isCenter) {
                translateX = 0;
                scale = 1;
                rotateY = 0;
                opacity = 1;
                zIndex = 30;
                filter = 'drop-shadow(0 15px 25px rgba(183, 110, 121, 0.25))';
              } else if (isImmediate) {
                const dir = offset > 0 ? 1 : -1;
                translateX = isPhoneMode ? dir * 145 : dir * 215;
                scale = isPhoneMode ? 0.84 : 0.86;
                rotateY = dir * -22;
                opacity = isPhoneMode ? 0.65 : 0.75;
                zIndex = 20;
                filter = 'brightness(0.92) drop-shadow(0 8px 16px rgba(183, 110, 121, 0.15))';
              } else if (Math.abs(offset) === 2) {
                const dir = offset > 0 ? 1 : -1;
                translateX = isPhoneMode ? dir * 240 : dir * 350;
                scale = isPhoneMode ? 0.70 : 0.72;
                rotateY = dir * -35;
                opacity = isPhoneMode ? 0.2 : 0.35;
                zIndex = 10;
                filter = 'brightness(0.85)';
              } else {
                const dir = offset > 0 ? 1 : -1;
                translateX = dir * 450;
                scale = 0.5;
                rotateY = dir * -45;
                opacity = 0;
                zIndex = 0;
              }

              return (
                <div
                  key={reason.id}
                  onClick={() => !isCenter && goToIndex(idx)}
                  className={`absolute top-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-between p-3 sm:p-4 rounded-3xl bg-white border-2 border-rosegold-200/90 shadow-md ${
                    isCenter ? 'cursor-default ring-2 ring-rosegold-400/40' : 'cursor-pointer hover:border-rosegold-400'
                  }`}
                  style={{
                    width: isPhoneMode ? '275px' : '330px',
                    height: isPhoneMode ? '425px' : '465px',
                    transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                    opacity: opacity,
                    zIndex: zIndex,
                    filter: filter,
                    pointerEvents: isVisible ? 'auto' : 'none',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    willChange: 'transform, opacity, filter'
                  }}
                >
                  {/* Photo Container in Polaroid Frame at Top */}
                  <div className="polaroid-frame p-2 sm:p-2.5 border border-rosegold-200 shrink-0">
                    <EnlargeableImage
                      src={reason.image}
                      alt={reason.caption || reason.tag}
                      caption={reason.caption}
                      tag={reason.tag}
                      className="rounded-xl shadow-inner border border-rosegold-100 w-full aspect-square object-cover"
                    />
                  </div>

                  {/* Middle Bar: Tag Pill + Likes Counter Button (Below Image, Above Caption) */}
                  <div className="flex items-center justify-between pt-2.5 pb-1 px-1 shrink-0">
                    <span className="text-[10px] sm:text-[11px] font-bold text-rosegold-700 bg-rosegold-50 px-2.5 py-0.5 rounded-full border border-rosegold-200 shadow-2xs">
                      {reason.tag}
                    </span>

                    <button
                      onClick={(e) => handleLike(e, reason.id)}
                      className="group inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-50 hover:bg-rose-100 border border-rosegold-200 active:scale-95 transition-all cursor-pointer"
                      title="Send love to this photo"
                    >
                      <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 group-hover:scale-110 transition-transform" />
                      <span className="text-[11px] font-mono font-bold text-rosewood-900">
                        {likes[reason.id] || 160}
                      </span>
                    </button>
                  </div>

                  {/* Full Caption Text - Below Tag & Likes */}
                  <div className="flex-1 flex items-center justify-center pt-1 pb-1 px-1 text-center">
                    <p className="font-handwriting text-sm sm:text-base md:text-lg text-rosewood-900 leading-snug font-bold break-words">
                      "{reason.caption}"
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls: Left and Right Arrows */}
          <div className="absolute inset-y-0 left-1 right-1 flex items-center justify-between pointer-events-none z-40 px-1 sm:px-4">
            <button
              onClick={handlePrev}
              aria-label="Previous photo"
              className="pointer-events-auto p-2.5 sm:p-3 rounded-full bg-white/90 hover:bg-white text-rosewood-900 border-2 border-rosegold-300 shadow-lg shadow-rosegold-400/30 backdrop-blur-md active:scale-90 transition-all hover:scale-110 hover:border-rosegold-500"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-rosegold-700" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next photo"
              className="pointer-events-auto p-2.5 sm:p-3 rounded-full bg-white/90 hover:bg-white text-rosewood-900 border-2 border-rosegold-300 shadow-lg shadow-rosegold-400/30 backdrop-blur-md active:scale-90 transition-all hover:scale-110 hover:border-rosegold-500"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-rosegold-700" />
            </button>
          </div>

        </div>

        {/* Carousel Progress Bar & Indicator Badge */}
        <div className="flex flex-col items-center gap-2 pt-1">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/95 border border-rosegold-300 shadow-xs text-xs font-bold text-rosewood-900">
            <span className="font-mono text-rosegold-600">{activeIndex + 1}</span>
            <span className="text-rosegold-300">/</span>
            <span className="font-mono text-rosewood-700">{totalCards}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rosegold-400" />
            <span className="truncate max-w-[160px] sm:max-w-[240px] text-rosewood-800">
              {reasons[activeIndex].tag}
            </span>
          </div>

          {/* Mini Dot Track for direct jumping */}
          <div className="flex items-center gap-1 overflow-x-auto max-w-full px-2 py-1 no-scrollbar">
            {reasons.map((_, i) => (
              <button
                key={i}
                onClick={() => goToIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === activeIndex 
                    ? 'w-5 h-2 bg-rosegold-500' 
                    : 'w-2 h-2 bg-rosegold-200 hover:bg-rosegold-300'
                }`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Interactive Virtual Love Note Jar */}
      <div className="p-4 sm:p-6 rounded-3xl bg-gradient-to-br from-rosegold-50 via-white to-blush-100 border-2 border-rosegold-300 shadow-md text-center space-y-3 max-w-lg mx-auto">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-rosegold-500 text-white mx-auto flex items-center justify-center shadow-md shadow-rosegold-300">
          <Gift className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        
        <div className="space-y-1">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-rosewood-950">
            Amma's Jar of Endless Compliments
          </h3>
          <p className="text-xs sm:text-sm text-rosewood-800 font-medium">
            Tap below whenever you want a reminder of how deeply cherished you are by Kuttan & Ammini!
          </p>
        </div>

        <button
          onClick={drawNote}
          className="inline-flex items-center gap-1.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold text-white shadow-md bg-gradient-to-r from-rosegold-500 to-rosegold-600 hover:from-rosegold-600 hover:to-rosegold-700 active:scale-95 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Draw a Love Note ✨</span>
        </button>

        {activeJarNote && (
          <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-rosegold-200 shadow-sm animate-in zoom-in-95 duration-200">
            <p className="font-handwriting text-xl sm:text-2xl text-rosewood-950 font-bold leading-snug break-words">
              "{activeJarNote}"
            </p>
          </div>
        )}
      </div>

    </section>
  );
}
