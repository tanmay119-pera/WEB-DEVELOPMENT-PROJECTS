/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        obsidian: '#050508',
        starlight: '#f5f6fa',
        stellarGold: '#e8c37d',
        cosmicCyan: '#3df2d4'
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace']
      }
    }
  },
  plugins: []
};
