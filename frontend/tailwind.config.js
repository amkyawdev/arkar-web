/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Cyberpunk Neon Palette
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          950: '#082f49',
        },
        slate: {
          950: '#020617',
        },
        // Accent colors for cyberpunk feel
        neon: {
          cyan: '#00f5ff',
          purple: '#b800e6',
          pink: '#ff0080',
        },
      },
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // Glassmorphism patterns
        'glass-light': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'glass-dark': 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
        'neon-cyan': '0 0 20px rgba(34, 211, 238, 0.4)',
        'neon-purple': '0 0 20px rgba(184, 0, 230, 0.4)',
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
        pulse-slow: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        slide-up: 'slideUp 0.6s ease-out',
        fade-in: 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    // Custom glassmorphism utilities
    function ({ addComponents }) {
      addComponents({
        '.glass': {
          '@apply backdrop-blur-md border border-white/20 bg-white/10': {},
        },
        '.glass-dark': {
          '@apply backdrop-blur-md border border-white/10 bg-slate-800/20': {},
        },
        '.glass-cyan': {
          '@apply backdrop-blur-md border border-cyan-500/20 bg-cyan-950/10 hover:border-cyan-400 hover:bg-cyan-950/20 transition-all': {},
        },
        '.glass-blue': {
          '@apply backdrop-blur-md border border-blue-400/20 bg-blue-50/10 hover:border-blue-400 hover:bg-blue-50/20 transition-all': {},
        },
      });
    },
  ],
};
