/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F2EE',
          100: '#CFE7DE',
          200: '#A8D3C5',
          300: '#6FB8A2',
          400: '#329878',
          500: '#0B7C5B',
          600: '#006A4E',
          700: '#00573F',
          800: '#004733',
          900: '#003A2A',
          950: '#00261B',
        },
        accent: {
          50: '#FDECEE',
          100: '#FBD8DD',
          200: '#F6AFB9',
          300: '#F3808F',
          400: '#F45568',
          500: '#F42A41',
          600: '#D81E34',
          700: '#B9182B',
          800: '#991424',
          900: '#7A101D',
          950: '#430810',
        },
        slate: {
          50: '#F7FAF8',
          100: '#EEF4F1',
          200: '#DCE8E1',
          300: '#BFD3C8',
          400: '#5F766A',
          500: '#4E6358',
          600: '#3B4F45',
          700: '#2B3C34',
          800: '#1B2B24',
          900: '#0F1F1A',
          950: '#08130F',
        },
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
