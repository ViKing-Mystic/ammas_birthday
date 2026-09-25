/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        handwriting: ['"Caveat"', 'cursive'],
        script: ['"Dancing Script"', 'cursive'],
        sans: ['"Quicksand"', '"Inter"', 'sans-serif'],
      },
      colors: {
        // Core Rose Gold Palette
        rosegold: {
          50: '#FDF7F7',
          100: '#FBECEE',
          200: '#F6D5D8',
          300: '#EBB4B9',
          400: '#DC9098',
          500: '#B76E79', // Pure signature Rose Gold
          600: '#A45864',
          700: '#8A424E',
          800: '#733742',
          900: '#5F2F37',
        },
        // High contrast, ultra-readable typography colors (matching rose gold theme)
        rosewood: {
          50: '#FDF2F4',
          100: '#FCE7EB',
          200: '#FACFD7',
          300: '#F5A7B7',
          400: '#EE738E',
          500: '#B76E79',
          600: '#8A3D4D',
          700: '#641D2D',
          800: '#4A1525', // Rich dark berry/wine
          900: '#38101C', // Deepest high-contrast rosewood heading
          950: '#230810',
        },
        blush: {
          50: '#FFF9F8',
          100: '#FFF1EF',
          200: '#FDE2DD',
          300: '#F9C7BE',
          400: '#F3A69A',
          500: '#E88576',
        },
        champagne: {
          50: '#FAF8F5',
          100: '#F5EFE6',
          200: '#EBDDC9',
          300: '#DFC8A6',
          400: '#D4B483',
          500: '#C79D5E',
        },
        gold: {
          400: '#FACC15',
          500: '#EAB308',
          600: '#CA8A04',
        }
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'flicker': 'flicker 1.5s infinite alternate',
        'shimmer': 'shimmer 2.5s infinite linear',
        'sway': 'sway 5s ease-in-out infinite alternate',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'tear': 'tearDrop 2s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        flicker: {
          '0%': { transform: 'scale(1) rotate(-1deg)', opacity: '0.95' },
          '50%': { transform: 'scale(1.08) rotate(1deg)', opacity: '1' },
          '100%': { transform: 'scale(0.96) rotate(-1.5deg)', opacity: '0.88' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        sway: {
          '0%': { transform: 'rotate(-3deg)' },
          '100%': { transform: 'rotate(3deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        tearDrop: {
          '0%': { transform: 'translateY(0) scale(0.8)', opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '0.9' },
          '100%': { transform: 'translateY(24px) scale(1.1)', opacity: '0' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.18)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.12)' },
          '70%': { transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
