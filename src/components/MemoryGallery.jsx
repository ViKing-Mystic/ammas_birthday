import React, { useState } from 'react';
import { Camera, Heart, Sparkles, Filter, Users, User, HeartHandshake } from 'lucide-react';
import { MOM_DATA } from '../config/momData';
import { usePhotoLightbox, EnlargeableImage } from './PhotoLightboxModal';
import { useDeviceMode } from './PhoneContainer';

const CATEGORIES = [
  { key: 'all', label: 'All Moments', icon: Sparkles },
  { key: 'family', label: 'Whole Family', icon: Users },
  { key: 'kuttan', label: 'With Kuttan 👦', icon: User },
  { key: 'ammini', label: 'With Ammini 👧', icon: Heart },
  { key: 'couple', label: 'Amma & Achan 💑', icon: HeartHandshake },
  { key: 'solo', label: 'Solo 🌸', icon: Camera }
];

export default function MemoryGallery() {
  const { openLightbox } = usePhotoLightbox();
  const { deviceMode } = useDeviceMode();
  const isPhoneMode = deviceMode === 'phone';
  const [activeCategory, setActiveCategory] = useState('all');

  const [likes, setLikes] = useState(() => {
    const initial = {};
    MOM_DATA.memories.forEach(m => { initial[m.id] = m.likes || 120; });
    return initial;
  });

  const handleLike = (e, id) => {
    e.stopPropagation();
    setLikes(prev => ({ ...prev, [id]: prev[id] + 1 }));
  };

  // Filter memories
  const filteredMemories = MOM_DATA.memories.filter(item => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'family') {
      return item.category === 'family' || item.caption.toLowerCase().includes('family') || item.caption.toLowerCase().includes('all four');
    }
    if (activeCategory === 'kuttan') {
      return item.category === 'kuttan' || item.caption.toLowerCase().includes('kuttan');
    }
    if (activeCategory === 'ammini') {
      return item.category === 'ammini' || item.caption.toLowerCase().includes('ammini');
    }
    if (activeCategory === 'couple') {
      return item.category === 'couple' || item.caption.toLowerCase().includes('achan');
    }
    if (activeCategory === 'solo') {
      return item.category === 'solo';
    }
    return true;
  });

  return (
    <section className="py-4 sm:py-6 px-3 sm:px-6 space-y-5 sm:space-y-6 animate-in fade-in duration-400 w-full max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="text-center space-y-1.5 sm:space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rosegold-100 border border-rosegold-300 text-rosewood-900 text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-xs">
          <Camera className="w-3.5 h-3.5 text-rosegold-600" />
          <span>Amma's Memory Vault ({MOM_DATA.memories.length} Cherished Photos)</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-4xl font-bold text-rosewood-950 break-words">
          A Lifetime of Love & Smiles
        </h2>
        <p className="text-xs sm:text-sm text-rosewood-800 font-medium max-w-lg mx-auto leading-relaxed">
          From little childhood days to graduation milestones — every smile shared with you is Kuttan & Ammini's greatest treasure.
        </p>
      </div>

      {/* Interactive Category Filter Pills */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 px-1 no-scrollbar text-xs font-semibold">
        {CATEGORIES.map(cat => {
          const isActive = activeCategory === cat.key;
          const count = cat.key === 'all' 
            ? MOM_DATA.memories.length 
            : MOM_DATA.memories.filter(m => {
                if (cat.key === 'family') return m.category === 'family' || m.caption.toLowerCase().includes('family');
                if (cat.key === 'kuttan') return m.category === 'kuttan' || m.caption.toLowerCase().includes('kuttan');
                if (cat.key === 'ammini') return m.category === 'ammini' || m.caption.toLowerCase().includes('ammini');
                if (cat.key === 'couple') return m.category === 'couple' || m.caption.toLowerCase().includes('achan');
                if (cat.key === 'solo') return m.category === 'solo';
                return true;
              }).length;

          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-full border transition-all flex items-center gap-1.5 shadow-xs shrink-0 ${
                isActive
                  ? 'bg-rosegold-500 text-white border-rosegold-600 shadow-rosegold-300/60 scale-105 font-bold'
                  : 'bg-white/90 text-rosewood-800 border-rosegold-200 hover:bg-rosegold-50 hover:border-rosegold-300'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/30 text-white' : 'bg-rosegold-100 text-rosewood-900 font-bold'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 1:1 Photo Cards Grid */}
      <div className={isPhoneMode ? "grid grid-cols-1 gap-4 pt-1" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-1"}>
        {filteredMemories.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => openLightbox({ image: item.image, caption: item.caption, tag: item.dateOrTag, note: item.note })}
            className="group cursor-pointer polaroid-frame p-3 sm:p-4 border-2 border-rosegold-200/80 hover:border-rosegold-400 relative flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Cute Rose Gold Washi Tape on top */}
            <div className={`absolute -top-2 sm:-top-2.5 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-3.5 sm:h-4 bg-rosegold-200/90 border border-rosegold-300 rounded-xs transform ${idx % 2 === 0 ? '-rotate-2' : 'rotate-2'} shadow-xs pointer-events-none z-10`} />

            {/* Photo Container */}
            <EnlargeableImage
              src={item.image}
              alt={item.caption}
              caption={item.caption}
              tag={item.dateOrTag}
              note={item.note}
              className="rounded-xl shadow-inner border border-rosegold-100 object-cover aspect-square w-full"
            />

            {/* Handwritten Caption & Tag */}
            <div className="pt-2.5 sm:pt-3 pb-1 text-center space-y-1.5 flex-1 flex flex-col justify-between">
              <p className="font-handwriting text-lg sm:text-xl text-rosewood-950 font-bold leading-snug break-words">
                "{item.caption}"
              </p>
              
              <div className="flex items-center justify-between pt-1 px-0.5 mt-auto">
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-rosegold-700 bg-rosegold-50 px-2.5 py-0.5 rounded-full border border-rosegold-200">
                  {item.dateOrTag}
                </span>

                {/* Heart Like Button */}
                <button
                  onClick={(e) => handleLike(e, item.id)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-rosegold-600 hover:text-rosegold-700 bg-white/90 px-2.5 py-0.5 rounded-full border border-rosegold-200 hover:scale-105 active:scale-95 transition-all shadow-xs"
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

      {/* Bottom Love Badge */}
      <div className="text-center pt-4 pb-2">
        <div className="inline-flex items-center gap-2 p-3 rounded-2xl bg-white/90 border border-rosegold-200 shadow-xs max-w-md text-center">
          <Heart className="w-4 h-4 fill-rosegold-500 text-rosegold-500 animate-pulse shrink-0" />
          <p className="text-xs text-rosewood-800 font-semibold">
            Every photo is a timeless memory with our superhero Amma — Lovingly assembled by Kuttan & Ammini ❤️
          </p>
        </div>
      </div>

    </section>
  );
}
