/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0B',
        bone: '#EDEAE1',
        gold: '#C89B3C',
        muted: '#6E6A5E',
        line: '#2A2822'
      },
      fontFamily: {
        display: ['"Archivo Expanded"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      }
    }
  },
  plugins: []
}
