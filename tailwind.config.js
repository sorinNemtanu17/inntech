/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // screens: {
    //   // sm: '783px',
    //   // md: '930px',
    // },
    extend: {
      colors: {
        primary: '#f89a76',
      },
      backgroundImage: {
        bottomBg: "url('./images/BG(1).svg')",
        footerBg: "url('./images/BG.svg')",
        howToBg: "url('./images/Path 238.svg')",
        headerBg: "url('./images/Path 237.svg')",
      },
    },
  },
  plugins: [],
};
