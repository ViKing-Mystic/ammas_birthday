import React, { useState } from 'react';
import { Mail, Heart, Sparkles, RotateCcw } from 'lucide-react';
import { MOM_DATA } from '../config/momData';
import { EnlargeableImage } from './PhotoLightboxModal';

export default function LetterSection() {
  const [isOpen, setIsOpen] = useState(false);
  const { letter } = MOM_DATA;

  return (
    <section className="py-4 sm:py-6 px-3 sm:px-6 space-y-5 sm:space-y-6 animate-in fade-in duration-400 w-full max-w-3xl mx-auto">
      
      {/* Header */}
      <div className="text-center space-y-1.5 sm:space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rosegold-100 border border-rosegold-300 text-rosewood-900 text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-xs">
          <Mail className="w-3.5 h-3.5 text-rosegold-600" />
          <span>Written Just For Amma</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-4xl font-bold text-rosewood-950 break-words">
          {letter.title}
        </h2>
        <p className="text-xs sm:text-sm text-rosewood-800 font-medium max-w-md mx-auto leading-relaxed">
          {letter.subtitle}
        </p>
      </div>

      {/* Envelope & Parchment Letter */}
      <div className="relative flex flex-col items-center w-full">
        
        {!isOpen ? (
          /* Sealed Luxury Rose Gold Envelope */
          <div 
            onClick={() => setIsOpen(true)}
            className="cursor-pointer group relative w-full max-w-md min-h-[240px] sm:min-h-[280px] bg-gradient-to-br from-[#FFF5F4] via-[#FCEAE8] to-[#F5D5D8] rounded-3xl shadow-xl border-2 border-rosegold-300/80 p-5 sm:p-8 flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-rosegold-300/50"
          >
            {/* Envelope flap lines */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none opacity-30">
              <svg viewBox="0 0 400 300" className="w-full h-full fill-none stroke-rosewood-900 stroke-1">
                <line x1="0" y1="0" x2="200" y2="150" />
                <line x1="400" y1="0" x2="200" y2="150" />
                <line x1="0" y1="300" x2="160" y2="170" />
                <line x1="400" y1="300" x2="240" y2="170" />
              </svg>
            </div>

            <div className="text-center space-y-1 mb-4 z-10">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-rosegold-700 font-bold font-sans">
                Hand-Delivered by Kuttan & Ammini
              </span>
              <p className="font-script text-3xl sm:text-4xl md:text-5xl text-rosewood-950 font-bold break-words">
                To Our Beloved Amma 💌
              </p>
            </div>

            {/* 3D Rose Gold Wax Seal */}
            <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full wax-seal flex items-center justify-center cursor-pointer">
                <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-rose-100 fill-rose-100/90 drop-shadow-sm animate-pulse-soft" />
              </div>
              <div className="absolute -inset-1 rounded-full bg-rosegold-400/40 blur-sm pointer-events-none animate-ping" />
            </div>

            <div className="mt-4 sm:mt-5 z-10">
              <span className="text-xs font-bold text-rosewood-900 bg-white/95 px-4 py-1.5 rounded-full border border-rosegold-300 shadow-xs group-hover:bg-rosegold-500 group-hover:text-white transition-colors">
                Tap wax seal to unfold ✨
              </span>
            </div>
          </div>
        ) : (
          /* Unfolded Royal Parchment Letter with 1:1 Photo Holders */
          <div className="w-full space-y-4 sm:space-y-5 animate-in zoom-in-95 duration-400">
            <div className="bg-[#FFFDFB] p-5 sm:p-8 md:p-10 rounded-3xl shadow-xl border-2 border-rosegold-200/90 relative overflow-hidden">
              
              {/* Background ambient rose tint */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-rosegold-100/40 pointer-events-none blur-2xl" />
              <div className="absolute top-4 right-4 opacity-20 pointer-events-none">
                <Sparkles className="w-10 h-10 text-rosegold-600" />
              </div>

              <div className="relative z-10 space-y-4 sm:space-y-6">
                {/* Salutation */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-rosewood-950 border-b border-rosegold-200 pb-3">
                  {letter.salutation}
                </h3>

                {/* Paragraph 1 */}
                <p className="text-sm sm:text-base md:text-lg text-rosewood-900 leading-relaxed font-sans font-medium break-words">
                  {letter.paragraphs[0]}
                </p>

                {/* 1:1 Memory Photo Holder #1 inside the letter */}
                {letter.photos && letter.photos[0] && (
                  <div className="polaroid-frame p-2.5 sm:p-3.5 my-3 sm:my-4 max-w-[220px] sm:max-w-[260px] mx-auto border border-rosegold-200 transform -rotate-1">
                    <EnlargeableImage 
                      src={letter.photos[0].image} 
                      alt={letter.photos[0].caption}
                      caption={letter.photos[0].caption}
                      tag={letter.photos[0].tag}
                      className="rounded-xl shadow-inner border border-rosegold-100"
                    />
                    <p className="font-handwriting text-lg sm:text-2xl text-rosewood-900 text-center pt-2 font-bold leading-tight break-words">
                      "{letter.photos[0].caption}"
                    </p>
                  </div>
                )}

                {/* Paragraphs 2 and 3 */}
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-rosewood-900 leading-relaxed font-sans font-medium break-words">
                  <p>{letter.paragraphs[1]}</p>
                  <p>{letter.paragraphs[2]}</p>
                </div>

                {/* 1:1 Memory Photo Holder #2 */}
                {letter.photos && letter.photos[1] && (
                  <div className="polaroid-frame p-2.5 sm:p-3.5 my-3 sm:my-4 max-w-[220px] sm:max-w-[260px] mx-auto border border-rosegold-200 transform rotate-1">
                    <EnlargeableImage 
                      src={letter.photos[1].image} 
                      alt={letter.photos[1].caption}
                      caption={letter.photos[1].caption}
                      tag={letter.photos[1].tag}
                      className="rounded-xl shadow-inner border border-rosegold-100"
                    />
                    <p className="font-handwriting text-lg sm:text-2xl text-rosewood-900 text-center pt-2 font-bold leading-tight break-words">
                      "{letter.photos[1].caption}"
                    </p>
                  </div>
                )}

                {/* Paragraph 4 */}
                <p className="text-sm sm:text-base md:text-lg text-rosewood-900 leading-relaxed font-sans font-medium break-words">
                  {letter.paragraphs[3]}
                </p>

                {/* Closing & Signature */}
                <div className="pt-4 sm:pt-6 border-t border-rosegold-200 space-y-1.5 text-right">
                  <p className="text-xs sm:text-sm font-serif italic text-rosewood-700">
                    {letter.closing}
                  </p>
                  <p className="font-script text-3xl sm:text-4xl text-rosegold-600 font-bold">
                    {letter.signature}
                  </p>
                </div>
              </div>
            </div>

            {/* Fold back button */}
            <div className="text-center pt-1">
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-rosewood-800 hover:text-rosewood-950 bg-white hover:bg-rose-50 border border-rosegold-200 shadow-xs transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Fold back into envelope</span>
              </button>
            </div>
          </div>
        )}

      </div>

    </section>
  );
}
