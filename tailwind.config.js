/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent:       '#7BAFC4',
        'accent-hover': '#96C4D6',
        'accent-text':  '#48BCDA',
        cyan:    '#00D9FF',
        lime:    '#BFFF00',
        'bg-primary':   '#0A0A0A',
        'bg-secondary': '#111111',
        'bg-card':      '#141414',
        muted:   '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-dot':     'pulse-dot 2s infinite',
        'float':         'float 6s ease-in-out infinite',
        'blink':         'blink 0.7s infinite',
        'typing-bounce': 'typing-bounce 0.9s infinite',
      },
      keyframes: {
        'pulse-dot': {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%':     { opacity: '0.5', transform: 'scale(0.7)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
        'typing-bounce': {
          '0%,60%,100%': { transform: 'translateY(0)' },
          '30%':         { transform: 'translateY(-6px)' },
        },
      },
      boxShadow: {
        'glow-accent': '0 0 28px rgba(123,175,196,0.35)',
        'glow-sm':     '0 0 16px rgba(123,175,196,0.2)',
      },
    },
  },
  plugins: [],
}
