/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "300px",
        // => @media (min-width: 640px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      boxShadow: {
        "header-shadow": "0 2px 8px 0px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        primary: "#F9C802",
        secondary: "#202A36",
        textColor: "#222222",
        gray: "#878787",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      width: {
        120: "120px",
        140: "140px",
        300: "300px",
        360: "360px",
      },
      height: {
        12.5: "50px",
        46: "46px",
        50: "60px",
        100: "100px",
        120: "120px",
        260: "260px",
        340: "340px",
        360: "360px",
      },
      // boxShadow: {
      //   'custom': ' 1px 1px 4px 0px rgba(0, 0, 0, 0.1), -1px -1px 4px 0px rgba(0, 0, 0, 0.1);',
      // },
      gap: {
        15: "60px",
        100: "100px",
        120: "120px",
        260: "260px",
      },
    },
  },
  plugins: [],
};
