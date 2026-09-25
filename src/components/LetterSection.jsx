import React, { useState } from 'react';
import { Mail, Heart, Sparkles, RotateCcw, Quote } from 'lucide-react';
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
          /* Unfolded Royal Parchment Letter with Narrative Sections */
          <div className="w-full space-y-4 sm:space-y-5 animate-in zoom-in-95 duration-400">
            <div className="bg-[#FFFDFB] p-5 sm:p-8 md:p-10 rounded-3xl shadow-xl border-2 border-rosegold-200/90 relative overflow-hidden">
              
              {/* Background ambient rose tint */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-rosegold-100/40 pointer-events-none blur-2xl" />
              <div className="absolute top-4 right-4 opacity-20 pointer-events-none">
                <Sparkles className="w-10 h-10 text-rosegold-600" />
              </div>

              <div className="relative z-10 space-y-6 sm:space-y-8">
                {/* Salutation */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-rosewood-950 border-b border-rosegold-200 pb-3">
                  {letter.salutation}
                </h3>

                {/* Section 1: Childhood Memories */}
                {letter.sections && letter.sections[0] && (
                  <div className="space-y-4">
                    <div className="space-y-3 text-sm sm:text-base md:text-lg text-rosewood-900 leading-relaxed font-sans font-medium break-words">
                      {letter.sections[0].paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>

                    {letter.sections[0].photo && (
                      <div className="polaroid-frame p-2.5 sm:p-3.5 my-4 sm:my-5 max-w-[220px] sm:max-w-[260px] mx-auto border border-rosegold-200 transform -rotate-1 shadow-md hover:rotate-0 transition-transform duration-300">
                        <EnlargeableImage 
                          src={letter.sections[0].photo.image} 
                          alt={letter.sections[0].photo.caption}
                          caption={letter.sections[0].photo.caption}
                          tag={letter.sections[0].photo.tag}
                          className="rounded-xl shadow-inner border border-rosegold-100"
                        />
                        <p className="font-handwriting text-base sm:text-xl text-rosewood-900 text-center pt-2 font-bold leading-tight break-words">
                          "{letter.sections[0].photo.caption}"
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Section 2: Amma's Giving & Accomplishments */}
                {letter.sections && letter.sections[1] && (
                  <div className="space-y-4 pt-2 border-t border-rosegold-100/80">
                    <div className="space-y-3 text-sm sm:text-base md:text-lg text-rosewood-900 leading-relaxed font-sans font-medium break-words">
                      {letter.sections[1].paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>

                    {letter.sections[1].photo && (
                      <div className="polaroid-frame p-2.5 sm:p-3.5 my-4 sm:my-5 max-w-[220px] sm:max-w-[260px] mx-auto border border-rosegold-200 transform rotate-1 shadow-md hover:rotate-0 transition-transform duration-300">
                        <EnlargeableImage 
                          src={letter.sections[1].photo.image} 
                          alt={letter.sections[1].photo.caption}
                          caption={letter.sections[1].photo.caption}
                          tag={letter.sections[1].photo.tag}
                          className="rounded-xl shadow-inner border border-rosegold-100"
                        />
                        <p className="font-handwriting text-base sm:text-xl text-rosewood-900 text-center pt-2 font-bold leading-tight break-words">
                          "{letter.sections[1].photo.caption}"
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Section 3: Growing Up & Stepping Out */}
                {letter.sections && letter.sections[2] && (
                  <div className="space-y-4 pt-2 border-t border-rosegold-100/80">
                    <div className="space-y-3 text-sm sm:text-base md:text-lg text-rosewood-900 leading-relaxed font-sans font-medium break-words">
                      {letter.sections[2].paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>

                    {/* Malayalam Emotional Callout */}
                    {letter.sections[2].specialCallout && (
                      <div className="my-5 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-rosegold-50 via-blush-50 to-rosegold-100/70 border border-rosegold-300 shadow-inner text-center space-y-1.5">
                        <div className="flex justify-center mb-1">
                          <Quote className="w-5 h-5 text-rosegold-500 opacity-60" />
                        </div>
                        {letter.sections[2].specialCallout.malayalam.map((line, idx) => (
                          <p key={idx} className="font-serif text-lg sm:text-xl font-bold text-rosewood-950">
                            {line}
                          </p>
                        ))}
                        <p className="font-sans text-sm sm:text-base text-rosegold-800 font-semibold italic pt-1">
                          "{letter.sections[2].specialCallout.english}"
                        </p>
                      </div>
                    )}

                    {letter.sections[2].afterCallout && (
                      <div className="space-y-3 text-sm sm:text-base md:text-lg text-rosewood-900 leading-relaxed font-sans font-medium break-words">
                        {letter.sections[2].afterCallout.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    )}

                    {letter.sections[2].photo && (
                      <div className="polaroid-frame p-2.5 sm:p-3.5 my-4 sm:my-5 max-w-[220px] sm:max-w-[260px] mx-auto border border-rosegold-200 transform -rotate-1 shadow-md hover:rotate-0 transition-transform duration-300">
                        <EnlargeableImage 
                          src={letter.sections[2].photo.image} 
                          alt={letter.sections[2].photo.caption}
                          caption={letter.sections[2].photo.caption}
                          tag={letter.sections[2].photo.tag}
                          className="rounded-xl shadow-inner border border-rosegold-100"
                        />
                        <p className="font-handwriting text-base sm:text-xl text-rosewood-900 text-center pt-2 font-bold leading-tight break-words">
                          "{letter.sections[2].photo.caption}"
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Section 4: Safe Harbor & Unchanging Love */}
                {letter.sections && letter.sections[3] && (
                  <div className="space-y-4 pt-2 border-t border-rosegold-100/80">
                    <div className="space-y-3 text-sm sm:text-base md:text-lg text-rosewood-900 leading-relaxed font-sans font-medium break-words">
                      {letter.sections[3].paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>

                    {/* Virtues List */}
                    {letter.sections[3].virtues && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-2 text-center">
                        {letter.sections[3].virtues.map((v, i) => (
                          <div key={i} className="p-2.5 rounded-xl bg-rosegold-50 border border-rosegold-200 shadow-2xs">
                            <span className="font-serif text-sm sm:text-base font-bold text-rosewood-950">
                              {v}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {letter.sections[3].finalParagraphs && (
                      <div className="space-y-3 text-sm sm:text-base md:text-lg text-rosewood-900 leading-relaxed font-sans font-medium break-words">
                        {letter.sections[3].finalParagraphs.map((p, i) => (
                          <p key={i} className={i >= letter.sections[3].finalParagraphs.length - 2 ? "font-bold text-rosewood-950" : ""}>
                            {p}
                          </p>
                        ))}
                      </div>
                    )}

                    {letter.sections[3].photo && (
                      <div className="polaroid-frame p-2.5 sm:p-3.5 my-4 sm:my-5 max-w-[220px] sm:max-w-[260px] mx-auto border border-rosegold-200 transform rotate-1 shadow-md hover:rotate-0 transition-transform duration-300">
                        <EnlargeableImage 
                          src={letter.sections[3].photo.image} 
                          alt={letter.sections[3].photo.caption}
                          caption={letter.sections[3].photo.caption}
                          tag={letter.sections[3].photo.tag}
                          className="rounded-xl shadow-inner border border-rosegold-100"
                        />
                        <p className="font-handwriting text-base sm:text-xl text-rosewood-900 text-center pt-2 font-bold leading-tight break-words">
                          "{letter.sections[3].photo.caption}"
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Closing & Signature */}
                <div className="pt-6 sm:pt-8 border-t-2 border-rosegold-200 space-y-2 text-right">
                  <p className="font-script text-2xl sm:text-3xl text-rosegold-600 font-bold">
                    {letter.closingQuote}
                  </p>
                  <p className="font-serif text-base sm:text-lg font-bold text-rosewood-900">
                    — Your {letter.signature}
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

