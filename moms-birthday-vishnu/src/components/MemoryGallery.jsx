import React, { useState } from 'react';
import { Camera, Heart, ZoomIn, Sparkles } from 'lucide-react';
import { MOM_DATA } from '../config/momData';
import { usePhotoLightbox, EnlargeableImage } from './PhotoLightboxModal';
import { useDeviceMode } from './PhoneContainer';

export default function MemoryGallery() {
  const { openLightbox } = usePhotoLightbox();
  const { deviceMode } = useDeviceMode();
  const isPhoneMode = deviceMode === 'phone';
  const [likes, setLikes] = useState(() => {
    const initial = {};
    MOM_DATA.memories.forEach(m => { initial[m.id] = m.likes || 100; });
    return initial;
  });

  const handleLike = (e, id) => {
    e.stopPropagation();
    setLikes(prev => ({ ...prev, [id]: prev[id] + 1 }));
  };

  return (
    <section className="py-4 sm:py-6 px-3 sm:px-6 space-y-5 sm:space-y-6 animate-in fade-in duration-400 w-full max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="text-center space-y-1.5 sm:space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rosegold-100 border border-rosegold-300 text-rosewood-900 text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-xs">
          <Camera className="w-3.5 h-3.5 text-rosegold-600" />
          <span>Amma's Memory Vault</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-4xl font-bold text-rosewood-950 break-words">
          A Snapshot of Love
        </h2>
        <p className="text-xs sm:text-sm text-rosewood-800 font-medium max-w-md mx-auto leading-relaxed">
          Every single moment with you is etched into our hearts forever, Amma.
        </p>
      </div>

      {/* 1:1 Photo Cards Grid - mx1 for phone, multi-column for tablet/desktop */}
      <div className={isPhoneMode ? "grid grid-cols-1 gap-4 pt-2" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-2"}>
        {MOM_DATA.memories.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => openLightbox({ image: item.image, caption: item.caption, tag: item.dateOrTag, note: item.note })}
            className="group cursor-pointer polaroid-frame p-3 sm:p-4 border-2 border-rosegold-200/80 hover:border-rosegold-400 relative flex flex-col justify-between"
          >
            {/* Cute Rose Gold Washi Tape on top */}
            <div className={`absolute -top-2 sm:-top-2.5 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-3.5 sm:h-4 bg-rosegold-200/90 border border-rosegold-300 rounded-xs transform ${idx % 2 === 0 ? '-rotate-3' : 'rotate-3'} shadow-xs pointer-events-none`} />

            {/* 1:1 Square Photo Container */}
            <EnlargeableImage
              src={item.image}
              alt={item.caption}
              caption={item.caption}
              tag={item.dateOrTag}
              note={item.note}
              className="rounded-xl shadow-inner border border-rosegold-100"
            />

            {/* Handwritten Caption & Tag */}
            <div className="pt-2.5 sm:pt-3 pb-1 text-center space-y-1">
              <p className="font-handwriting text-xl sm:text-2xl text-rosewood-950 font-bold leading-tight break-words">
                "{item.caption}"
              </p>
              <div className="flex items-center justify-between pt-1.5 px-0.5">
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-rosegold-700 bg-rosegold-50 px-2 py-0.5 rounded-full border border-rosegold-200">
                  {item.dateOrTag}
                </span>

                {/* Heart Like Button */}
                <button
                  onClick={(e) => handleLike(e, item.id)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-rosegold-600 hover:text-rosegold-700 bg-white/80 px-2 py-0.5 rounded-full border border-rosegold-200 hover:scale-105 active:scale-95 transition-all shadow-xs"
                  aria-label="Like memory"
                >
                  <Heart className="w-3.5 h-3.5 fill-rosegold-500 text-rosegold-500" />
                  <span>{likes[item.id]}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Helper Note for Kuttan & Ammini */}
      <div className="text-center pt-2 pb-2">
        <div className="inline-block p-3 rounded-2xl bg-white/80 border border-rosegold-200 shadow-xs max-w-sm text-center">
          <p className="text-[11px] text-rosewood-700 font-medium">
            💡 <span className="font-bold">Family Photos:</span> Kuttan & Ammini can easily swap photo URLs and captions in <code className="bg-rosegold-100 px-1 py-0.5 rounded font-mono text-rosegold-800 text-[10px]">src/config/momData.js</code>!
          </p>
        </div>
      </div>

    </section>
  );
}
