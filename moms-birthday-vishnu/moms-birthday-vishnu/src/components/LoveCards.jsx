import React, { useState } from 'react';
import { 
  Heart, 
  Sparkles, 
  Gift, 
  Shield, 
  Eye, 
  Search, 
  Coffee, 
  Crown
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
  const [activeJarNote, setActiveJarNote] = useState(null);
  const [jarIndex, setJarIndex] = useState(0);

  const drawNote = () => {
    const nextIndex = (jarIndex + 1) % MOM_DATA.loveJarQuotes.length;
    setJarIndex(nextIndex);
    setActiveJarNote(MOM_DATA.loveJarQuotes[nextIndex]);
  };

  return (
    <section className="py-4 sm:py-6 px-3 sm:px-6 space-y-5 sm:space-y-6 animate-in fade-in duration-400 w-full max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="text-center space-y-1.5 sm:space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rosegold-100 border border-rosegold-300 text-rosewood-900 text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-xs">
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
      <div className="p-4 sm:p-6 rounded-3xl bg-white border-2 border-rosegold-200 shadow-md space-y-3.5">
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

      {/* 1:1 Photo Reason Cards */}
      <div className="space-y-3 sm:space-y-4 pt-2">
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-rosewood-950 text-center break-words">
          Treasured Reasons We Love You, Amma
        </h3>

        {/* 1:1 Photo Reason Cards - mx1 for phone, 2-col matrix for tablet/desktop */}
        <div className={isPhoneMode ? "grid grid-cols-1 gap-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"}>
          {MOM_DATA.reasons.map((reason) => (
            <div
              key={reason.id}
              className="p-3.5 sm:p-4 rounded-3xl bg-white border border-rosegold-200 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
            >
              {/* 1:1 Photo Frame for Reason */}
              <div className="polaroid-frame p-2 sm:p-2.5 border border-rosegold-200">
                <EnlargeableImage
                  src={reason.image}
                  alt={reason.title}
                  caption={reason.caption || reason.title}
                  tag={reason.tag}
                  className="rounded-xl shadow-inner border border-rosegold-100"
                />
                {reason.caption && (
                  <p className="font-handwriting text-base sm:text-xl text-rosewood-900 text-center pt-2 font-bold leading-tight break-words">
                    {reason.caption}
                  </p>
                )}
              </div>

              {/* Text Description */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-rosegold-700 bg-rosegold-50 px-2.5 py-0.5 rounded-full border border-rosegold-200">
                    {reason.tag}
                  </span>
                  <Heart className="w-3.5 h-3.5 text-rosegold-500 fill-rosegold-400" />
                </div>
                <h4 className="font-serif text-base sm:text-lg font-bold text-rosewood-950 break-words">
                  {reason.title}
                </h4>
                <p className="text-xs sm:text-sm text-rosewood-800 leading-relaxed font-medium break-words">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
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
