/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          light: '#fde047',
          DEFAULT: '#fbbf24',
          dark: '#a16207',
        },
        secondary: {
          light: '#bef264',
          DEFAULT: '#84cc16',
          dark: '#4d7c0f',
        },
        text: {
          primary: '#333333',
          secondary: '#4b5563',
          disabled: '#6b7280',
          hint: '#9ca3af',
        },
      },
    },
  },
  plugins: [],
}
