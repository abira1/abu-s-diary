export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'pulse': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '0.8' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'pulse': 'pulse 3s ease-in-out infinite'
      },
      transitionTimingFunction: {
        'bounce-custom': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
      }
    }
  },
  plugins: []
}