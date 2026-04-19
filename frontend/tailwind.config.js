/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'Inter', 'sans-serif'],
        display: ['Syne', 'Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Advanced Dark Palette
        primary: {
          darker: '#0a0f1e',
          dark: '#0d1528',
          mid: '#111d35',
          light: '#162245',
        },
        // Health/Medical Accent (Indigo)
        medical: {
          400: '#818cf8',
          DEFAULT: '#6366f1',
          600: '#4f46e5',
        },
        // Clinical Orchid/Violet
        clinical: {
          400: '#d946ef',
          DEFAULT: '#a855f7',
          600: '#9333ea',
        },
        // Warning/Alert colors
        alert: {
          rose: '#e05c6f',
          amber: '#f5a623',
          emerald: '#10b981',
          crit: '#ff3d71',
        },
        // Legacy compatibility - now redirected to medical/clinical
        navy: {
          950: '#030712',
          900: '#070d1a',
          850: '#0a1221',
          800: '#0d1a2d',
          700: '#1e1b4b', // Deep indigo
          600: '#312e81',
        },
        // Vibrant Indigo/Violet accent (replacing Cyan)
        cyan: {
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
        },
        // Electric Violet
        violet: {
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },
        // Neon Green for health/normal indicator
        emerald: {
          400: '#34d399',
          500: '#10b981',
        },
        // Rose for critical/alerts
        rose: {
          400: '#fb7185',
          500: '#f43f5e',
        },
        // Amber for warning
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
        // Legacy compatibility
        vignan: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        healthcare: {
          50: '#f8f6fb',
          100: '#f0ebf6',
          200: '#ebdff4',
          300: '#d5bbed',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#52207a',
          900: '#451e63',
        },
        accent: {
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
        }
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        'radial-glow': 'radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'scan': 'scan 3s ease-in-out infinite',
        'orbit': 'orbit 8s linear infinite',
        'breath': 'breath 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(99,102,241,0.3), 0 0 30px rgba(99,102,241,0.1)' },
          '100%': { boxShadow: '0 0 30px rgba(99,102,241,0.6), 0 0 60px rgba(99,102,241,0.2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scan: {
          '0%, 100%': { transform: 'translateY(0%)', opacity: '0.8' },
          '50%': { transform: 'translateY(100%)', opacity: '0.2' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(60px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(60px) rotate(-360deg)' },
        },
        breath: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.08)', opacity: '1' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(99,102,241,0.4), 0 0 60px rgba(99,102,241,0.15)',
        'glow-violet': '0 0 20px rgba(139,92,246,0.4), 0 0 60px rgba(139,92,246,0.15)',
        'glow-emerald': '0 0 20px rgba(16,185,129,0.4), 0 0 60px rgba(16,185,129,0.15)',
        'glow-rose': '0 0 20px rgba(244,63,94,0.4), 0 0 60px rgba(244,63,94,0.15)',
        'inner-glow': 'inset 0 0 30px rgba(99,102,241,0.05)',
        'card': '0 4px 6px -1px rgba(0,0,0,0.5), 0 2px 4px -2px rgba(0,0,0,0.3)',
        'card-hover': '0 20px 40px -8px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,102,241,0.2)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
