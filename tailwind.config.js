export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: '#39ff14',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(57, 255, 20, 0.2)' },
          '100%': { boxShadow: '0 0 25px rgba(57, 255, 20, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}