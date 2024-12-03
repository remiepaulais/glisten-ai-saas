/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-space-grotesk)', ...fontFamily.sans]
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
