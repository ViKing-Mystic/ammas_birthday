import React from 'react';
import { Mail, Camera, Cake, Heart, Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function MobileNavigation({ 
  activeTab, 
  setActiveTab, 
  isPlayingMusic, 
  toggleMusic,
  onReplayIntro 
}) {
  const tabs = [
    { id: 'letter', label: 'Letter', icon: Mail },
    { id: 'memories', label: 'Moments', icon: Camera },
    { id: 'cake', label: 'Cake', icon: Cake },
    { id: 'love', label: 'Love', icon: Heart },
  ];

  return (
    <>
      {/* Floating Top Bar: Audio Toggle & Replay Intro */}
      <header className="sticky top-0 z-40 w-full px-2.5 sm:px-4 py-2 sm:py-2.5 backdrop-blur-md bg-white/85 border-b border-rosegold-200/70 shadow-xs flex items-center justify-between gap-2">
        <button
          onClick={onReplayIntro}
          className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-rosegold-50 border border-rosegold-200 text-[11px] sm:text-xs font-bold text-rosewood-900 hover:bg-rosegold-100 transition-colors shadow-xs shrink-0"
          title="Replay Cat & Envelope Delivery"
        >
          <span>🐱 Intro</span>
        </button>

        <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
          <Sparkles className="w-3.5 h-3.5 text-rosegold-500 animate-spin-slow shrink-0" />
          <span className="font-serif text-xs sm:text-sm font-bold text-rosewood-900 truncate">
            For Dearest Amma ❤️
          </span>
        </div>

        {/* Ambient Melody Button */}
        <button
          onClick={toggleMusic}
          className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold transition-all shadow-xs shrink-0 ${
            isPlayingMusic
              ? 'bg-rosegold-500 text-white shadow-rosegold-300 animate-pulse'
              : 'bg-white border border-rosegold-200 text-rosewood-800 hover:bg-rose-50'
          }`}
          aria-label={isPlayingMusic ? "Mute Background Music" : "Play Melody"}
        >
          {isPlayingMusic ? (
            <>
              <Volume2 className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Playing 🎶</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Melody</span>
            </>
          )}
        </button>
      </header>

      {/* Fixed Bottom Dock Navigation (iOS style) */}
      <nav className="fixed bottom-0 inset-x-0 z-50 flex justify-center pb-3 pt-1 pointer-events-none px-3">
        <div className="pointer-events-auto bg-white/95 backdrop-blur-xl border border-rosegold-300/80 shadow-[0_10px_35px_-5px_rgba(183,110,121,0.35)] rounded-full px-2 py-1.5 grid grid-cols-4 gap-1 max-w-[380px] w-full">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex flex-col items-center justify-center py-1.5 px-2 rounded-full transition-all duration-300 w-full ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-rosewood-700 hover:text-rosegold-600 font-semibold'
                }`}
              >
                {/* Active indicator pill background */}
                {isActive && (
                  <span className="absolute inset-0 bg-gradient-to-r from-rosegold-500 to-rosegold-600 rounded-full shadow-md shadow-rosegold-300/60 -z-10 animate-in zoom-in-75 duration-200" />
                )}

                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${isActive ? 'scale-110' : ''}`} />
                <span className={`text-[10px] sm:text-xs tracking-tight mt-0.5 truncate ${isActive ? 'text-white' : 'text-rosewood-800'}`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
