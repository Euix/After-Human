/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#050505',
        'brand-gray': '#D3D3D3',
        'brand-copper': '#B87333',
        'brand-red': '#8A3324',
      },
      fontFamily: {
        mono: ['"Fira Code"', '"Space Mono"', '"VT323"', 'monospace'],
      },
    },
  },
  plugins: [],
}
