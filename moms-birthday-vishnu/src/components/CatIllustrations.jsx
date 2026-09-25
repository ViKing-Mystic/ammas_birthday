import React from 'react';

/**
 * Super cute animated vector cat illustrations for Amma's Birthday
 * Fully responsive, scalable SVG artwork designed with Rose Gold accents!
 */

// 1. Cat holding the sealed rose-gold envelope
export function CatHoldingEnvelope({ isOpened, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="relative flex flex-col items-center cursor-pointer group select-none transition-transform duration-300 hover:scale-[1.02] w-full max-w-[260px] sm:max-w-[280px] mx-auto"
    >
      <div className="relative w-full aspect-square flex items-center justify-center">
        {/* Soft background rose-gold aura */}
        <div className="absolute inset-0 bg-gradient-to-tr from-rose-200/40 via-rosegold-200/30 to-amber-100/40 rounded-full blur-2xl -z-10 group-hover:scale-110 transition-transform duration-500" />

        <svg viewBox="0 0 240 240" className="w-full h-full drop-shadow-xl overflow-visible">
          <defs>
            <linearGradient id="catBodyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFF9F5" />
              <stop offset="60%" stopColor="#FDEAE5" />
              <stop offset="100%" stopColor="#F5D0C5" />
            </linearGradient>
            <linearGradient id="envelopeGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FDF1F0" />
              <stop offset="50%" stopColor="#F5D0D5" />
              <stop offset="100%" stopColor="#B76E79" />
            </linearGradient>
            <linearGradient id="waxSealGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E08B97" />
              <stop offset="50%" stopColor="#B76E79" />
              <stop offset="100%" stopColor="#641D2D" />
            </linearGradient>
          </defs>

          {/* Cat Tail wagging */}
          <path 
            d="M 60 170 C 30 180, 20 130, 45 125 C 50 123, 45 150, 65 160 Z" 
            fill="#F5D0C5"
            className="animate-sway origin-bottom-right"
          />

          {/* Cat Body */}
          <ellipse cx="120" cy="155" rx="55" ry="50" fill="url(#catBodyGrad)" />

          {/* Cat Ears */}
          {/* Left Ear */}
          <path d="M 75 90 Q 60 40 95 65 Z" fill="#F5D0C5" />
          <path d="M 78 85 Q 68 50 90 68 Z" fill="#FBB6C2" />
          {/* Right Ear */}
          <path d="M 165 90 Q 180 40 145 65 Z" fill="#F5D0C5" />
          <path d="M 162 85 Q 172 50 150 68 Z" fill="#FBB6C2" />

          {/* Cat Head */}
          <circle cx="120" cy="98" r="48" fill="url(#catBodyGrad)" />

          {/* Forehead Calico patch */}
          <path d="M 110 52 Q 120 70 130 52 Q 135 65 120 72 Z" fill="#E6A89B" opacity="0.6" />

          {/* Cute Eyes (Sparkling Big Eyes) */}
          <g>
            {/* Left Eye */}
            <circle cx="102" cy="95" r="7.5" fill="#38101C" />
            <circle cx="100" cy="92.5" r="2.8" fill="#FFFFFF" />
            <circle cx="104.5" cy="96.5" r="1.4" fill="#FFFFFF" />
            {/* Right Eye */}
            <circle cx="138" cy="95" r="7.5" fill="#38101C" />
            <circle cx="136" cy="92.5" r="2.8" fill="#FFFFFF" />
            <circle cx="140.5" cy="96.5" r="1.4" fill="#FFFFFF" />
          </g>

          {/* Sweet Rosy Cheeks */}
          <ellipse cx="90" cy="105" rx="6.5" ry="4" fill="#FCA5A5" opacity="0.65" />
          <ellipse cx="150" cy="105" rx="6.5" ry="4" fill="#FCA5A5" opacity="0.65" />

          {/* Nose & Mouth */}
          <polygon points="120,103 116,99 124,99" fill="#B76E79" />
          <path d="M 115 106 Q 120 110 125 106" stroke="#38101C" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M 120 103 L 120 106" stroke="#38101C" strokeWidth="1.8" />

          {/* Whiskers */}
          <g stroke="#8A424E" strokeWidth="1.2" strokeLinecap="round" opacity="0.7">
            <line x1="82" y1="99" x2="60" y2="95" />
            <line x1="82" y1="104" x2="58" y2="106" />
            <line x1="158" y1="99" x2="180" y2="95" />
            <line x1="158" y1="104" x2="182" y2="106" />
          </g>

          {/* Little Party Hat on Cat! */}
          <polygon points="120,32 108,60 132,60" fill="#B76E79" />
          <polygon points="120,32 114,60 126,60" fill="#E6C280" opacity="0.8" />
          <circle cx="120" cy="30" r="4" fill="#FFF" />

          {/* Paws holding the envelope */}
          {/* Envelope Body */}
          <g className={`transition-all duration-500 origin-center ${isOpened ? 'scale-105' : 'group-hover:scale-105'}`}>
            <rect 
              x="72" 
              y="130" 
              width="96" 
              height="65" 
              rx="8" 
              fill="url(#envelopeGrad)" 
              stroke="#B76E79" 
              strokeWidth="2" 
              className="drop-shadow-md"
            />
            {/* Flap lines */}
            <path d="M 72 130 L 120 162 L 168 130" fill="none" stroke="#A45864" strokeWidth="1.5" />
            <path d="M 72 195 L 108 155" stroke="#A45864" strokeWidth="1.2" opacity="0.5" />
            <path d="M 168 195 L 132 155" stroke="#A45864" strokeWidth="1.2" opacity="0.5" />

            {/* Wax Seal with Heart */}
            <circle cx="120" cy="160" r="12" fill="url(#waxSealGrad)" className="drop-shadow-md animate-pulse-soft" />
            <path d="M 120 164 C 117 160 114 157 116 154 C 118 152 120 154 120 155 C 120 154 122 152 124 154 C 126 157 123 160 120 164 Z" fill="#FFFDF8" />

            {/* Floating Sparkles around envelope */}
            <path d="M 60 120 Q 64 124 68 124 Q 64 124 60 128 Q 60 124 56 124 Q 60 124 60 120 Z" fill="#E6C280" className="animate-ping" />
            <path d="M 180 125 Q 183 128 186 128 Q 183 128 180 131 Q 180 128 177 128 Q 180 128 180 125 Z" fill="#B76E79" className="animate-pulse" />
          </g>

          {/* Cat Paws Resting on Top of Envelope */}
          <ellipse cx="88" cy="136" rx="9" ry="7" fill="#FFF9F5" stroke="#E6A89B" strokeWidth="1.2" />
          <ellipse cx="152" cy="136" rx="9" ry="7" fill="#FFF9F5" stroke="#E6A89B" strokeWidth="1.2" />
          {/* Paw pads tiny lines */}
          <circle cx="88" cy="136" r="2.2" fill="#FCA5A5" />
          <circle cx="152" cy="136" r="2.2" fill="#FCA5A5" />
        </svg>
      </div>

      {/* Floating Badge below */}
      <div className="mt-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-rosegold-300 text-rosewood-900 text-xs font-bold shadow-md group-hover:bg-rosegold-500 group-hover:text-white transition-all text-center">
        <span>✉️ Tap envelope to open!</span>
      </div>
    </div>
  );
}

// 2. Cute Sad Pleading Cat (When "No" is clicked 1st time)
export function CuteSadCat() {
  return (
    <div className="relative flex flex-col items-center select-none animate-in fade-in zoom-in-95 duration-500 w-full max-w-[150px] sm:max-w-[190px] mx-auto">
      <div className="relative w-full aspect-square">
        {/* Soft sorrowful blush glow */}
        <div className="absolute inset-0 bg-rose-200/30 rounded-full blur-xl -z-10" />

        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md overflow-visible">
          {/* Cat Body */}
          <ellipse cx="100" cy="138" rx="48" ry="44" fill="#FDEAE5" />

          {/* Drooping Ears */}
          <path d="M 60 76 Q 40 45 78 58 Z" fill="#F5D0C5" className="animate-sway origin-bottom-left" />
          <path d="M 64 72 Q 48 52 74 62 Z" fill="#FBB6C2" />
          
          <path d="M 140 76 Q 160 45 122 58 Z" fill="#F5D0C5" className="animate-sway origin-bottom-right" />
          <path d="M 136 72 Q 152 52 126 62 Z" fill="#FBB6C2" />

          {/* Cat Head */}
          <circle cx="100" cy="88" r="42" fill="#FDEAE5" />

          {/* Big Ultra-Glossy Pleading Sad Eyes */}
          <g>
            {/* Left Eye */}
            <circle cx="84" cy="85" r="9" fill="#2A0812" />
            <circle cx="82" cy="81" r="4.2" fill="#FFFFFF" />
            <circle cx="88" cy="87" r="1.8" fill="#FFFFFF" />
            {/* Glisten in eye */}
            <path d="M 80 88 Q 84 92 88 88" stroke="#93C5FD" strokeWidth="1.5" fill="none" opacity="0.8" />

            {/* Right Eye */}
            <circle cx="116" cy="85" r="9" fill="#2A0812" />
            <circle cx="114" cy="81" r="4.2" fill="#FFFFFF" />
            <circle cx="120" cy="87" r="1.8" fill="#FFFFFF" />
            <path d="M 112 88 Q 116 92 120 88" stroke="#93C5FD" strokeWidth="1.5" fill="none" opacity="0.8" />
          </g>

          {/* Sad Eyebrows */}
          <path d="M 76 72 Q 84 76 90 73" stroke="#8A424E" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          <path d="M 124 72 Q 116 76 110 73" stroke="#8A424E" strokeWidth="1.6" strokeLinecap="round" fill="none" />

          {/* Cheeks */}
          <ellipse cx="74" cy="95" rx="5.5" ry="3.5" fill="#FCA5A5" opacity="0.6" />
          <ellipse cx="126" cy="95" rx="5.5" ry="3.5" fill="#FCA5A5" opacity="0.6" />

          {/* Quivering sad mouth */}
          <polygon points="100,94 97,91 103,91" fill="#B76E79" />
          <path d="M 96 98 Q 100 95 104 98" stroke="#38101C" strokeWidth="1.8" strokeLinecap="round" fill="none" />

          {/* Whiskers drooping */}
          <g stroke="#8A424E" strokeWidth="1" strokeLinecap="round" opacity="0.7">
            <line x1="68" y1="92" x2="48" y2="96" />
            <line x1="68" y1="96" x2="46" y2="103" />
            <line x1="132" y1="92" x2="152" y2="96" />
            <line x1="132" y1="96" x2="154" y2="103" />
          </g>

          {/* Paws pleading together */}
          <ellipse cx="93" cy="120" rx="7.5" ry="9" fill="#FFF9F5" stroke="#E6A89B" strokeWidth="1" transform="rotate(-10 93 120)" />
          <ellipse cx="107" cy="120" rx="7.5" ry="9" fill="#FFF9F5" stroke="#E6A89B" strokeWidth="1" transform="rotate(10 107 120)" />
          <circle cx="93" cy="120" r="2.5" fill="#FCA5A5" />
          <circle cx="107" cy="120" r="2.5" fill="#FCA5A5" />

          {/* Single tear glisten */}
          <path d="M 85 96 Q 83 103 85 105 Q 87 103 85 96 Z" fill="#60A5FA" opacity="0.85" className="animate-pulse" />
        </svg>
      </div>
      <p className="font-handwriting text-lg sm:text-2xl text-rosewood-900 font-bold tracking-wide -mt-1 text-center">
        "Say yes, Amma? 🥺"
      </p>
    </div>
  );
}

// 3. Dramatically Cute Crying Cat (When "No" is clicked 2nd time)
export function CuteCryingCat() {
  return (
    <div className="relative flex flex-col items-center select-none animate-in fade-in zoom-in-95 duration-500 w-full max-w-[150px] sm:max-w-[190px] mx-auto">
      <div className="relative w-full aspect-square">
        {/* Soft blue/rose water glow */}
        <div className="absolute inset-0 bg-blue-100/40 rounded-full blur-xl -z-10" />

        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md overflow-visible">
          {/* Cat Body shivering */}
          <ellipse cx="100" cy="140" rx="46" ry="42" fill="#FDEAE5" className="animate-wiggle" />

          {/* Ears pinned down */}
          <path d="M 58 80 Q 30 65 74 65 Z" fill="#F5D0C5" />
          <path d="M 62 76 Q 38 67 72 67 Z" fill="#FBB6C2" />
          <path d="M 142 80 Q 170 65 126 65 Z" fill="#F5D0C5" />
          <path d="M 138 76 Q 162 67 128 67 Z" fill="#FBB6C2" />

          {/* Cat Head */}
          <circle cx="100" cy="90" r="42" fill="#FDEAE5" />

          {/* Dramatic Tightly Closed Crying Eyes (> <) */}
          <path d="M 75 82 L 88 88 L 75 94" stroke="#38101C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M 125 82 L 112 88 L 125 94" stroke="#38101C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

          {/* Big Dramatic Water Fountains / Tears Streaming! */}
          {/* Left Tear stream */}
          <path 
            d="M 85 90 C 70 95, 60 120, 65 150 C 68 160, 55 155, 60 168" 
            stroke="#60A5FA" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            fill="none" 
            opacity="0.85"
            className="animate-pulse"
          />
          {/* Falling tear drops */}
          <circle cx="58" cy="130" r="3.5" fill="#3B82F6" className="animate-tear" />
          <circle cx="62" cy="155" r="4" fill="#60A5FA" className="animate-tear" />

          {/* Right Tear stream */}
          <path 
            d="M 115 90 C 130 95, 140 120, 135 150 C 132 160, 145 155, 140 168" 
            stroke="#60A5FA" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            fill="none" 
            opacity="0.85"
            className="animate-pulse"
          />
          <circle cx="142" cy="130" r="3.5" fill="#3B82F6" className="animate-tear" />
          <circle cx="138" cy="155" r="4" fill="#60A5FA" className="animate-tear" />

          {/* Crying mouth open */}
          <path d="M 94 97 Q 100 95 106 97 Q 100 114 94 97 Z" fill="#EF4444" stroke="#38101C" strokeWidth="1.5" />
          <ellipse cx="100" cy="107" rx="3.5" ry="2" fill="#FCA5A5" />

          {/* Sniffing Nose */}
          <polygon points="100,95 97,92 103,92" fill="#B76E79" />

          {/* Little paws wiping face */}
          <ellipse cx="80" cy="110" rx="8" ry="7" fill="#FFF9F5" stroke="#E6A89B" strokeWidth="1" className="animate-wiggle" />
          <ellipse cx="120" cy="110" rx="8" ry="7" fill="#FFF9F5" stroke="#E6A89B" strokeWidth="1" className="animate-wiggle" />

          {/* Broken Heart Float */}
          <g transform="translate(145, 50) scale(0.65)" className="animate-bounce-soft">
            <path d="M 20 5 C 10 -5 0 5 0 15 C 0 25 15 35 20 40 C 25 35 40 25 40 15 C 40 5 30 -5 20 5 Z" fill="#F43F5E" />
            <path d="M 20 5 L 18 18 L 22 25 L 19 38" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
          </g>
        </svg>
      </div>

      <p className="font-handwriting text-lg sm:text-2xl text-rosewood-900 font-bold tracking-wide -mt-1 text-center">
        "WAHHH! Please say yes, Amma! 😭💔"
      </p>
    </div>
  );
}
