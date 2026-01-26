/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#33E1FF',
          500: '#00D9FF',
          600: '#00B8D9',
          700: '#0097B2',
        },
        secondary: {
          400: '#33D96E',
          500: '#00C853',
          600: '#00A844',
          700: '#008836',
        },
        accent: {
          400: '#FFE033',
          500: '#FFD700',
          600: '#FFC107',
        },
        teamA: {
          DEFAULT: '#FF6B6B',
          light: '#FF8A8A',
          dark: '#E55555',
        },
        teamB: {
          DEFAULT: '#4ECDC4',
          light: '#6ED7D0',
          dark: '#3DBDB4',
        },
        dark: {
          bg: '#0A0A0F',
          card: '#12121A',
          elevated: '#1A1A25',
        }
      },
      fontFamily: {
        arabic: ['Tajawal', 'Cairo', 'sans-serif'],
        display: ['Cairo', 'sans-serif'],
        mono: ['Orbitron', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'shake': 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 217, 255, 0.5), 0 0 10px rgba(0, 217, 255, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.8), 0 0 30px rgba(0, 217, 255, 0.5)' },
        },
        shake: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
        },
      },
    },
  },
  plugins: [],
}
