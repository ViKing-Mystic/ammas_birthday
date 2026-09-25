import React, { createContext, useContext, useState, useEffect } from 'react';
import { X, ZoomIn, Heart, Sparkles } from 'lucide-react';

const PhotoLightboxContext = createContext({
  openLightbox: () => {},
  closeLightbox: () => {}
});

export const usePhotoLightbox = () => useContext(PhotoLightboxContext);

export function PhotoLightboxProvider({ children }) {
  const [photo, setPhoto] = useState(null);

  const openLightbox = (photoData) => {
    setPhoto(photoData);
  };

  const closeLightbox = () => {
    setPhoto(null);
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (photo) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo]);

  return (
    <PhotoLightboxContext.Provider value={{ openLightbox, closeLightbox }}>
      {children}

      {/* Global Image Lightbox Modal */}
      {photo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-rosewood-950/80 backdrop-blur-md animate-in fade-in duration-200 select-none"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative max-w-sm sm:max-w-md w-full max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border-2 border-rosegold-300 animate-in zoom-in-95 duration-200 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-rosegold-100 hover:bg-rosegold-200 text-rosewood-900 transition-colors z-20 shadow-xs"
              aria-label="Close enlarged photo"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* 1:1 Aspect Ratio Photo Container */}
            <div className="aspect-square w-full rounded-2xl overflow-hidden bg-rose-50 shadow-inner relative border border-rosegold-200">
              <img
                src={photo.image}
                alt={photo.caption || "Enlarged photo"}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none" />
            </div>

            {/* Caption & Metadata */}
            <div className="pt-4 pb-2 text-center space-y-2 w-full">
              {photo.caption && (
                <p className="font-handwriting text-2xl sm:text-3xl text-rosewood-950 font-bold leading-tight break-words px-2">
                  "{photo.caption}"
                </p>
              )}

              {/* Tag / Note Badge */}
              <div className="flex items-center justify-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rosegold-50 border border-rosegold-200 text-xs font-bold text-rosegold-700">
                  <Sparkles className="w-3.5 h-3.5 text-rosegold-500" />
                  <span>{photo.tag || photo.note || "Treasured Forever"}</span>
                  <Heart className="w-3 h-3 fill-rosegold-400 text-rosegold-500" />
                </span>
              </div>

              <p className="text-[10px] text-rosewood-600 font-medium pt-1">
                Tap anywhere outside to close ✨
              </p>
            </div>
          </div>
        </div>
      )}
    </PhotoLightboxContext.Provider>
  );
}

/**
 * Reusable Photo Clickable Wrapper
 * Adds hover zoom effect, zoom icon overlay, and click handler
 */
export function EnlargeableImage({ 
  src, 
  alt = "", 
  caption = "", 
  tag = "", 
  note = "", 
  className = "",
  aspectRatio = "aspect-square" 
}) {
  const { openLightbox } = usePhotoLightbox();

  const handleClick = (e) => {
    e.stopPropagation();
    openLightbox({ image: src, caption, tag, note });
  };

  return (
    <div 
      onClick={handleClick}
      className={`relative group cursor-zoom-in overflow-hidden ${aspectRatio} ${className}`}
      title="Click to enlarge"
    >
      <img
        src={src}
        alt={alt || caption}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      {/* Hover Zoom Overlay Pill */}
      <div className="absolute inset-0 bg-rosewood-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
        <span className="p-2 sm:p-2.5 rounded-full bg-white/95 text-rosewood-950 shadow-md transform scale-90 group-hover:scale-100 transition-transform">
          <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-rosegold-600" />
        </span>
      </div>
    </div>
  );
}
