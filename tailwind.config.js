/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      primary: ['DMSerifText-Regular', 'serif'],
      secondary: ['Montserrat-Regular', 'sans-serif'],
    },
    backgroundImage: {
      hero: 'url(src/assets/images/hero_img.jpg)',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#292f36',
          hover: '#343e4a',
        },
        secondary: '#4d5053',
        accent: {
          DEFAULT: '#cda274',
          secondary: '#f4f0ec',
          hover: '#b88c5d',
        },
      },
    },
  },
  plugins: [],
};
