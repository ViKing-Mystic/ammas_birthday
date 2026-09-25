import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, RefreshCw } from 'lucide-react';
import { CatHoldingEnvelope, CuteSadCat, CuteCryingCat } from './CatIllustrations';
import { MOM_DATA } from '../config/momData';
import { EnlargeableImage } from './PhotoLightboxModal';

export default function CatEnvelopeIntro({ onAccept }) {
  // Steps: 'closed' -> 'opened' -> 'sad_cat' -> 'crying_cat'
  const [step, setStep] = useState('closed');
  const [isOpeningEnvelope, setIsOpeningEnvelope] = useState(false);
  const [noCount, setNoCount] = useState(0);

  // Triggered when Amma clicks the envelope
  const handleEnvelopeClick = () => {
    if (step === 'closed') {
      setIsOpeningEnvelope(true);
      // Small confetti burst on opening envelope
      confetti({
        particleCount: 35,
        spread: 50,
        origin: { y: 0.6 },
        colors: ['#B76E79', '#F6D5D8', '#E6C280', '#FFF']
      });
      setTimeout(() => {
        setStep('opened');
        setIsOpeningEnvelope(false);
      }, 400);
    }
  };

  // When "No" is clicked
  const handleNoClick = () => {
    if (step === 'opened') {
      setStep('sad_cat');
      setNoCount(1);
    } else if (step === 'sad_cat') {
      setStep('crying_cat');
      setNoCount(2);
    } else if (step === 'crying_cat') {
      // Escalates or wiggles playfully
      setNoCount(prev => prev + 1);
    }
  };

  // When "Yes" is clicked
  const handleYesClick = () => {
    // Big joyous confetti blast!
    const count = 180;
    const defaults = { origin: { y: 0.65 } };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55, colors: ['#B76E79', '#FFD1DC', '#E6C280'] });
    fire(0.2, { spread: 60, colors: ['#F6D5D8', '#FFF', '#CA8A04'] });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92 });
    fire(0.1, { spread: 120, startVelocity: 45 });

    onAccept();
  };

  const { frontPage, sadCatStage, cryingCatStage } = MOM_DATA.introStory;

  return (
    <div className="min-h-[85vh] sm:min-h-[90vh] flex flex-col items-center justify-center p-3 sm:p-6 text-center select-none w-full max-w-lg mx-auto">
      
      {/* Decorative Rose Gold ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-rosegold-200/40 via-blush-200/30 to-champagne-200/30 blur-3xl pointer-events-none -z-10" />

      {/* STAGE 1: FRONT PAGE (Envelope Closed) */}
      {step === 'closed' && (
        <div className="w-full space-y-4 sm:space-y-6 animate-in fade-in zoom-in-95 duration-500 px-2">
          {/* Header pill */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-rosegold-300 shadow-sm text-[11px] sm:text-xs font-bold text-rosewood-900 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-rosegold-500 animate-spin-slow" />
            <span>From Kuttan & Ammini</span>
            <Sparkles className="w-3.5 h-3.5 text-rosegold-500 animate-spin-slow" />
          </div>

          <div className="space-y-2">
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-rosewood-950 leading-tight break-words">
              {frontPage.headline}
            </h1>
            <p className="text-xs sm:text-base text-rosewood-800 font-medium max-w-xs mx-auto leading-relaxed">
              {frontPage.subheadline}
            </p>
          </div>

          {/* The Cat holding envelope */}
          <div className="py-1 sm:py-2">
            <CatHoldingEnvelope 
              isOpened={isOpeningEnvelope} 
              onClick={handleEnvelopeClick} 
            />
          </div>

          <p className="text-xs sm:text-sm text-rosewood-700 font-semibold tracking-wide">
            👆 {frontPage.catHint}
          </p>
        </div>
      )}

      {/* STAGE 2: ENVELOPE OPENED -> Letter Revealed + Question */}
      {step === 'opened' && (
        <div className="w-full space-y-4 sm:space-y-5 animate-in zoom-in-90 fade-in duration-500 px-2">
          
          {/* Top tag */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rosegold-100 border border-rosegold-300 text-rosewood-900 text-xs font-bold shadow-xs">
            <Heart className="w-3.5 h-3.5 fill-rosegold-500 text-rosegold-500 animate-pulse" />
            <span>Special Invitation</span>
          </div>

          {/* Elegant Parchment Letter Card */}
          <div className="polaroid-frame p-4 sm:p-6 w-full max-w-[320px] sm:max-w-[360px] mx-auto border-2 border-rosegold-200 bg-gradient-to-br from-[#FFF8F7] to-white shadow-md space-y-3 text-center">
            <div className="w-12 h-12 rounded-full wax-seal flex items-center justify-center mx-auto shadow-md">
              <Heart className="w-6 h-6 text-rose-100 fill-rose-100/90" />
            </div>
            <div className="space-y-1 pt-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-rosegold-600 font-sans">
                A Royal Invitation
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-rosewood-950">
                To Dearest Amma 💌
              </h3>
              <p className="text-xs sm:text-sm text-rosewood-800 font-medium leading-relaxed pt-1">
                A lifetime of treasured memories, heartfelt words, and birthday surprises from your Kuttan & Ammini awaits you inside!
              </p>
            </div>
          </div>

          {/* Question Box */}
          <div className="pt-2 space-y-3 sm:space-y-4 w-full">
            <h2 className="font-serif text-lg sm:text-2xl md:text-3xl font-bold text-rosewood-950 leading-snug break-words px-2">
              {frontPage.question}
            </h2>

            {/* Yes / No Buttons (Responsive wrap on very small screens) */}
            <div className="flex flex-col xs:flex-row items-center justify-center gap-3 pt-1 max-w-xs mx-auto w-full">
              <button
                onClick={handleYesClick}
                className="w-full xs:w-auto xs:flex-1 py-3 px-5 rounded-full font-bold text-sm text-white shadow-lg shadow-rosegold-400/50 bg-gradient-to-r from-rosegold-500 to-rosegold-600 hover:from-rosegold-600 hover:to-rosegold-700 active:scale-95 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-1.5"
              >
                <span>{frontPage.yesButtonText}</span>
              </button>

              <button
                onClick={handleNoClick}
                className="w-full xs:w-auto xs:flex-1 py-2.5 px-4 rounded-full font-semibold text-sm text-rosewood-800 bg-white border border-rosegold-300 hover:bg-rose-50 active:scale-95 transition-all shadow-xs"
              >
                <span>{frontPage.noButtonText}</span>
              </button>
            </div>
          </div>

        </div>
      )}

      {/* STAGE 3: NO CLICKED ONCE -> Sad Cat */}
      {step === 'sad_cat' && (
        <div className="w-full space-y-4 sm:space-y-5 animate-in zoom-in-95 fade-in duration-400 px-2">
          
          <div className="space-y-1">
            <h2 className="font-serif text-xl sm:text-3xl font-bold text-rosewood-950 leading-snug break-words">
              {sadCatStage.pleaTitle}
            </h2>
            <p className="text-xs sm:text-sm text-rosewood-800 font-medium max-w-xs mx-auto leading-relaxed">
              {sadCatStage.pleaSubtitle}
            </p>
          </div>

          {/* Sad Cat Illustration */}
          <div className="flex items-center justify-center bg-white/80 p-5 sm:p-6 rounded-3xl border border-rosegold-200 shadow-lg max-w-xs mx-auto w-full">
            <CuteSadCat />
          </div>

          {/* Plea statement */}
          <div className="bg-rosegold-50/90 border border-rosegold-200 rounded-2xl py-2 px-4 shadow-xs max-w-xs mx-auto">
            <p className="text-xs sm:text-sm font-bold text-rosegold-700 animate-pulse">
              Please say yes, Amma... 🥺
            </p>
          </div>

          {/* Action Buttons: Yes or No */}
          <div className="flex flex-col xs:flex-row items-center justify-center gap-3 pt-1 max-w-xs mx-auto w-full">
            <button
              onClick={handleYesClick}
              className="w-full xs:w-auto xs:flex-1 py-3 px-5 rounded-full font-bold text-sm text-white shadow-lg shadow-rosegold-400/50 bg-gradient-to-r from-rosegold-500 to-rosegold-600 hover:from-rosegold-600 hover:to-rosegold-700 active:scale-95 transition-all transform hover:-translate-y-0.5 animate-pulse"
            >
              <span>{sadCatStage.yesButtonText}</span>
            </button>

            <button
              onClick={handleNoClick}
              className="w-full xs:w-auto xs:flex-1 py-2.5 px-4 rounded-full font-semibold text-xs sm:text-sm text-rosewood-700 bg-white border border-rosegold-300 hover:bg-rose-50 active:scale-95 transition-all"
            >
              <span>{sadCatStage.noButtonText}</span>
            </button>
          </div>

        </div>
      )}

      {/* STAGE 4: NO CLICKED TWICE -> Crying Cat */}
      {step === 'crying_cat' && (
        <div className="w-full space-y-4 sm:space-y-5 animate-in zoom-in-95 fade-in duration-400 px-2">
          
          <div className="space-y-1">
            <h2 className="font-serif text-xl sm:text-3xl font-bold text-rose-700 leading-snug break-words">
              {cryingCatStage.pleaTitle}
            </h2>
            <p className="text-xs sm:text-sm text-rosewood-800 font-medium max-w-xs mx-auto leading-relaxed">
              {cryingCatStage.pleaSubtitle}
            </p>
          </div>

          {/* Crying Cat Illustration */}
          <div className="flex items-center justify-center bg-white/90 p-5 sm:p-6 rounded-3xl border border-rose-300 shadow-xl max-w-xs mx-auto w-full">
            <CuteCryingCat />
          </div>

          {/* Plea statement */}
          <div className="bg-rose-100/90 border border-rose-300 rounded-2xl py-2 px-4 shadow-sm max-w-xs mx-auto">
            <p className="text-xs sm:text-sm font-extrabold text-rose-700 animate-bounce">
              Please say yes, Amma 😭💔
            </p>
          </div>

          {/* Action Buttons: Glowing Yes, and shrinking No */}
          <div className="flex flex-col xs:flex-row items-center justify-center gap-3 pt-1 max-w-xs mx-auto w-full">
            <button
              onClick={handleYesClick}
              className="w-full xs:w-auto xs:flex-1 py-3.5 px-6 rounded-full font-extrabold text-sm sm:text-base text-white shadow-xl shadow-rosegold-500/60 bg-gradient-to-r from-rosegold-500 via-rose-500 to-rosegold-600 hover:scale-105 active:scale-95 transition-all transform animate-heartbeat flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
              <span>{cryingCatStage.yesButtonText}</span>
            </button>

            <button
              onClick={handleNoClick}
              style={{
                transform: `scale(${Math.max(0.65, 1 - (noCount - 2) * 0.1)})`
              }}
              className="py-2 px-3 rounded-full font-medium text-xs text-rosewood-600 bg-white/90 border border-rose-200 hover:bg-rose-50 transition-all select-none hover:rotate-6"
            >
              <span>{noCount > 2 ? "Really no, Amma? 😿" : cryingCatStage.noButtonText}</span>
            </button>
          </div>

        </div>
      )}

      {/* Bottom helper reset if someone wants to replay intro */}
      {step !== 'closed' && (
        <button
          onClick={() => { setStep('closed'); setNoCount(0); }}
          className="mt-6 inline-flex items-center gap-1.5 text-xs text-rosewood-600 hover:text-rosewood-900 transition-colors font-semibold opacity-75 hover:opacity-100"
        >
          <RefreshCw className="w-3 h-3" />
          <span>Restart cat delivery</span>
        </button>
      )}

    </div>
  );
}
