export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-dark': '#0A0A0A',
        'electric-blue': '#00D9FF',
        'vibrant-magenta': '#FF1493',
        'soft-white': '#E8E8F0',
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-flow': 'gradient-flow 8s ease infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', textShadow: '0 0 20px rgba(0, 217, 255, 0.5)' },
          '50%': { opacity: '0.7', textShadow: '0 0 40px rgba(255, 20, 147, 0.8)' },
        },
        'gradient-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        md: '12px',
      },
    },
  },
  plugins: [],
}
