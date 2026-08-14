/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0A0A0A',
        secondary: '#111111',
        surface: '#171717',
        edge: 'rgba(255,255,255,0.08)',
        edge2: 'rgba(255,255,255,0.12)',
        silver: {
          DEFAULT: '#D4D4D4',
          muted: '#B8B8B8',
          dim: '#8A8A8A',
          faint: '#5A5A5A',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        tighter: '-0.035em',
        tight: '-0.02em',
      },
      fontSize: {
        'display': ['clamp(2.75rem, 6.5vw, 5rem)', { lineHeight: '1.0', letterSpacing: '-0.045em' }],
        'display-sm': ['clamp(1.875rem, 4.5vw, 3.25rem)', { lineHeight: '1.05', letterSpacing: '-0.035em' }],
        'display-xs': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'smooth-2': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'cursor-blink': {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in': 'fade-in 1.2s ease forwards',
        'scale-in': 'scale-in 0.8s cubic-bezier(0.22,1,0.36,1) forwards',
        'marquee': 'marquee 40s linear infinite',
        'cursor-blink': 'cursor-blink 1.1s steps(1) infinite',
      },
    },
  },
  plugins: [],
};
