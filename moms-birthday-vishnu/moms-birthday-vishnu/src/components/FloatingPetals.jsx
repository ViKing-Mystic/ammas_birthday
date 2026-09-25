import React, { useMemo } from 'react';

export default function FloatingPetals({ count = 18 }) {
  // Generate random petals with varying sizes, speeds, and positions
  const petals = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${(i * 5.5 + Math.random() * 5) % 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${10 + Math.random() * 12}s`,
      size: 14 + Math.random() * 16,
      opacity: 0.25 + Math.random() * 0.45,
      rotate: Math.floor(Math.random() * 360),
      isSparkle: i % 4 === 0,
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute select-none"
          style={{
            left: petal.left,
            top: '-40px',
            animation: `fallAndSway ${petal.duration} linear infinite`,
            animationDelay: petal.delay,
            opacity: petal.opacity,
          }}
        >
          {petal.isSparkle ? (
            <span
              style={{ fontSize: `${petal.size * 0.8}px` }}
              className="text-amber-300 drop-shadow-sm inline-block animate-pulse"
            >
              ✨
            </span>
          ) : (
            <svg
              width={petal.size}
              height={petal.size}
              viewBox="0 0 24 24"
              fill="none"
              style={{ transform: `rotate(${petal.rotate}deg)` }}
              className="drop-shadow-sm transition-transform"
            >
              <path
                d="M12 2C8 6 3 10 3 15C3 19 7 22 12 22C17 22 21 19 21 15C21 10 16 6 12 2Z"
                fill="url(#petalGradient)"
                opacity="0.8"
              />
              <defs>
                <linearGradient id="petalGradient" x1="12" y1="2" x2="12" y2="22">
                  <stop stopColor="#F6D5D8" />
                  <stop offset="1" stopColor="#B76E79" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </div>
      ))}
      <style>{`
        @keyframes fallAndSway {
          0% {
            transform: translateY(-20px) translateX(0) rotate(0deg);
          }
          50% {
            transform: translateY(50vh) translateX(35px) rotate(180deg);
          }
          100% {
            transform: translateY(105vh) translateX(-20px) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
