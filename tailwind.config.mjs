import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Geist Sans', 'system-ui', 'sans-serif'],
        mono:    ['Geist Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('sleek', '[data-theme="sleek"] &')
      addVariant('neo',   '[data-theme="neo-brutalism"] &')
      addVariant('hc',    '[data-theme="high-contrast"] &')
    }),
  ],
}
