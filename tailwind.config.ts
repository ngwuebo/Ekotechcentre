import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#E2E8F0',
        royal: '#3B82F6',
        emerald: '#22C55E',
        soft: '#0b1229'
      },
      boxShadow: {
        soft: '0 25px 80px rgba(7, 26, 82, 0.12)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Geist', 'Inter', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(37,99,235,0.16), transparent 35%), radial-gradient(circle at 80% 20%, rgba(34,197,94,0.14), transparent 28%)'
      }
    }
  },
  plugins: []
};

export default config;
