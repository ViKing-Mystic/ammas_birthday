import React, { useState } from 'react';
import PhoneContainer from './components/PhoneContainer';
import MobileNavigation from './components/MobileNavigation';
import CatEnvelopeIntro from './components/CatEnvelopeIntro';
import LetterSection from './components/LetterSection';
import MemoryGallery from './components/MemoryGallery';
import BirthdayCake from './components/BirthdayCake';
import LoveCards from './components/LoveCards';
import FloatingPetals from './components/FloatingPetals';
import { ambientMusic } from './utils/audioPlayer';
import { MOM_DATA } from './config/momData';
import { Heart } from 'lucide-react';
import { PhotoLightboxProvider } from './components/PhotoLightboxModal';

export default function App() {
  // Intro acceptance state: start with cat holding envelope
  const [hasAcceptedIntro, setHasAcceptedIntro] = useState(false);
  const [activeTab, setActiveTab] = useState('letter'); // 'letter' | 'memories' | 'cake' | 'love'
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // Toggle ambient synthesizer melody
  const toggleMusic = () => {
    const active = ambientMusic.toggle();
    setIsPlayingMusic(active);
  };

  // Called when Amma clicks "Yes" in the Cat Envelope journey
  const handleAcceptIntro = () => {
    setHasAcceptedIntro(true);
    setActiveTab('letter');

    // Auto-start ambient melody gently on user interaction
    if (!isPlayingMusic) {
      const active = ambientMusic.toggle();
      setIsPlayingMusic(active);
    }
  };

  // Replay intro flow
  const handleReplayIntro = () => {
    setHasAcceptedIntro(false);
  };

  return (
    <PhotoLightboxProvider>
      <div className="min-h-screen w-full bg-[#FDF0EE] text-rosewood-950 font-sans selection:bg-rosegold-200 selection:text-rosewood-950 overflow-x-hidden">
        
        {/* Soft Floating Rose Gold Petals Background */}
        <FloatingPetals count={14} />

        {/* Fully Responsive Mobile-First / Wide Container */}
        <PhoneContainer>
          {!hasAcceptedIntro ? (
            /* 1. The Cat & Envelope Front Page + Pleading Flow */
            <CatEnvelopeIntro onAccept={handleAcceptIntro} />
          ) : (
            /* 2. Unlocked Full Birthday Celebration Multi-Page Web App */
            <div className="flex-1 w-full flex flex-col animate-in fade-in duration-500">
              {/* Top Bar & Bottom Dock Navigation */}
              <MobileNavigation
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                isPlayingMusic={isPlayingMusic}
                toggleMusic={toggleMusic}
                onReplayIntro={handleReplayIntro}
              />

              {/* Active Page View (Fully flexible up to max-w-4xl on desktop, full width on phones) */}
              <main className="flex-1 w-full max-w-4xl mx-auto px-1 sm:px-2 pb-6">
                {activeTab === 'letter' && <LetterSection />}
                {activeTab === 'memories' && <MemoryGallery />}
                {activeTab === 'cake' && <BirthdayCake />}
                {activeTab === 'love' && <LoveCards />}
              </main>

              {/* Subtle Footer with Love from Kuttan & Ammini */}
              <footer className="text-center py-4 px-3 border-t border-rosegold-200/60 mt-auto">
                <p className="text-[11px] sm:text-xs text-rosewood-700 font-semibold flex items-center justify-center gap-1.5 flex-wrap">
                  <span>Handcrafted with all our love for Amma</span>
                  <Heart className="w-3.5 h-3.5 fill-rosegold-500 text-rosegold-500 animate-pulse" />
                  <span>• From {MOM_DATA.senderName}</span>
                </p>
              </footer>
            </div>
          )}
        </PhoneContainer>

      </div>
    </PhotoLightboxProvider>
  );
}
