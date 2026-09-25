import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Palette, Heart, Sparkles, Menu, X } from 'lucide-react';
import { ambientMusic } from '../utils/audioPlayer';
import { MOM_DATA } from '../config/momData';

export default function Navbar({ currentPalette, setPaletteKey }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPaletteMenu, setShowPaletteMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMusic = () => {
    const active = ambientMusic.toggle();
    setIsPlaying(active);
  };

  // Close palette menu on outside click
  useEffect(() => {
    const handleGlobalClick = (e) => {
      if (!e.target.closest('#palette-dropdown-btn') && !e.target.closest('#palette-dropdown-menu')) {
        setShowPaletteMenu(false);
      }
    };
    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  const navLinks = [
    { label: "Make a Wish", href: "#cake" },
    { label: "Reasons We Love You", href: "#reasons" },
    { label: "Memories", href: "#memories" },
    { label: "Superpowers", href: "#superpowers" },
    { label: "Letter", href: "#letter" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-8 py-3 transition-colors duration-500 backdrop-blur-md bg-white/75 dark:bg-slate-900/80 border-b border-rose-100/60 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo / Heartfelt Title */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="p-2 rounded-full bg-rose-100 text-rose-600 group-hover:scale-110 transition-transform shadow-sm">
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500 animate-pulse" />
          </span>
          <span className="font-serif font-bold text-lg sm:text-xl tracking-tight text-gray-800 dark:text-gray-100">
            For Amma <span className="text-rose-500 font-script font-normal text-xl">with love</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-rose-600 dark:text-gray-300 dark:hover:text-rose-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls: Music + Palette Switcher */}
        <div className="flex items-center gap-2.5">
          {/* Music Toggle */}
          <button
            onClick={toggleMusic}
            aria-label={isPlaying ? "Mute Background Music" : "Play Gentle Background Music"}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all shadow-sm ${
              isPlaying
                ? 'bg-rose-500 text-white shadow-rose-200 animate-pulse'
                : 'bg-rose-100 text-rose-700 hover:bg-rose-200'
            }`}
          >
            {isPlaying ? (
              <>
                <Volume2 className="w-4 h-4 animate-spin-slow" />
                <span className="hidden sm:inline">Melody Playing 🎶</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4" />
                <span className="hidden sm:inline">Play Melody</span>
              </>
            )}
          </button>

          {/* Color Palette Switcher Dropdown */}
          <div className="relative">
            <button
              id="palette-dropdown-btn"
              onClick={() => setShowPaletteMenu(!showPaletteMenu)}
              aria-label="Change Color Theme"
              className="p-2 rounded-full bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200/60 shadow-sm transition-all flex items-center gap-1.5 text-xs font-medium"
            >
              <Palette className="w-4 h-4 text-amber-600" />
              <span className="hidden lg:inline">Theme</span>
            </button>

            {showPaletteMenu && (
              <div
                id="palette-dropdown-menu"
                className="absolute right-0 mt-2 w-56 p-2 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-gray-100 dark:border-slate-800 z-50 animate-in fade-in zoom-in-95 duration-150"
              >
                <p className="px-3 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Color Themes
                </p>
                <div className="space-y-1">
                  {Object.entries(MOM_DATA.palettes).map(([key, pal]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setPaletteKey(key);
                        setShowPaletteMenu(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                        currentPalette.id === key
                          ? 'bg-rose-50 text-rose-700 font-semibold'
                          : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className="w-3.5 h-3.5 rounded-full shadow-inner border border-white"
                          style={{ backgroundColor: pal.primary }}
                        />
                        {pal.name}
                      </span>
                      {currentPalette.id === key && <Sparkles className="w-3.5 h-3.5 text-rose-500" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile nav drawer */}
      {mobileMenuOpen && (
        <nav className="md:hidden pt-3 pb-2 border-t border-rose-100 mt-2 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-rose-50 hover:text-rose-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
