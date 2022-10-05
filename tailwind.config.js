/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'ss': "320px",
      'xs': "376px",
      'sm': "426px",
      'md': "769px",
      'lg': "1025px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter, sans-serif"],
        roboto: ["Roboto, sans-serif"],
      },
      fontSize: {
        sm: ["14px", "20px"],
        base: ["20px", "28px"],
        lg: ["26px", "19px"],
        xl: ["38px", "40px"],
        xxl: ["68px", "79px"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      colors: {
        white: "#fff",
        blue: "#376FFF",
        darkblue: "#393A56",
        insigniawhite: "#EDF4FA",
        blankstare: "#8B9BAB",
        bluedepths: "#242A56",
        seadrive: "#C1D3DE",
      },
    },
  },
  plugins: [],
};
