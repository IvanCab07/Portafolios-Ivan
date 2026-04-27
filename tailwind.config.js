/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        mono:  ['"Share Tech Mono"', 'monospace'],
      },
      colors: {
        bg:      '#1a1a1a',
        surface: '#252525',
        card:    '#2e2e2e',
        border:  '#3a3a3a',
        muted:   '#888888',
        accent:  '#c8ff00',
        accent2: '#00e5ff',
      },
    },
  },
  plugins: [],
}
