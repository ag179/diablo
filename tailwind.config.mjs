/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand: slate blue base + safety orange accent
        brand: {
          50: '#f4f6f9',
          100: '#e6ebf2',
          200: '#c9d5e4',
          300: '#9db2ce',
          400: '#6a88b2',
          500: '#486a99',
          600: '#38537d',
          700: '#2f4466',
          800: '#2a3a55',
          900: '#111d2e',
          950: '#0b1420',
        },
        accent: {
          50: '#fff6ed',
          100: '#ffead4',
          200: '#ffd1a8',
          300: '#ffb071',
          400: '#ff8438',
          500: '#f96a12',
          600: '#ea5108',
          700: '#c23c09',
          800: '#9a3110',
          900: '#7c2b10',
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
