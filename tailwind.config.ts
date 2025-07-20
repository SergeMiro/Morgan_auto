import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'morgan-navy': '#0B1426',
        'morgan-orange': '#FF4D00',
        'morgan-white': '#FFFFFF',
        'morgan-light-gray': '#F8FAFC',
        'morgan-medium-gray': '#64748B',
        'morgan-dark-gray': '#1E293B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config