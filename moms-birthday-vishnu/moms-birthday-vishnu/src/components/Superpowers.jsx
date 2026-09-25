import React from 'react';
import { Heart, Eye, Search, Coffee, Shield, Sparkles } from 'lucide-react';
import { MOM_DATA } from '../config/momData';

const iconMap = {
  Heart,
  Eye,
  Search,
  Coffee,
  Shield
};

export default function Superpowers({ currentPalette }) {
  return (
    <section id="superpowers" className="py-20 px-4 scroll-mt-16">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-100/80 text-rose-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Not All Heroes Wear Capes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-800 dark:text-gray-100">
            Amma's Superpower Stats
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto text-sm sm:text-base">
            Verified everyday miracles and superpowers that make you truly superhuman.
          </p>
        </div>

        {/* Superpowers Card Container */}
        <div className="p-6 sm:p-10 rounded-3xl glass-card border border-rose-100 shadow-xl space-y-6">
          {MOM_DATA.superpowers.map((power, idx) => {
            const Icon = iconMap[power.icon] || Heart;
            return (
              <div key={idx} className="space-y-2 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span 
                      className="p-2 rounded-xl text-rose-600 bg-rose-50 group-hover:scale-110 transition-transform"
                      style={{ color: currentPalette.primary }}
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                        {power.name}
                      </h4>
                      <p className="text-xs text-gray-500 font-normal">
                        {power.detail}
                      </p>
                    </div>
                  </div>
                  <span 
                    className="font-mono text-sm font-bold"
                    style={{ color: currentPalette.primary }}
                  >
                    {power.level === 100 ? "100%" : `${power.level}%`}
                  </span>
                </div>

                {/* Animated Progress Bar */}
                <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${power.level}%`,
                      backgroundColor: currentPalette.primary,
                      backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent)'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
