import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'builder-dark': '#111e26',
        'builder-elevated': '#2d4055',
        'builder-coral': '#e76f51',
        'builder-text': '#f5f0e8',
      },
    },
  },
  plugins: [],
} satisfies Config

