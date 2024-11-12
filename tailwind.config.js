/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#568C8A",
        secondlyColor: "#E4F2EF",
        mainColor: "#ffffff",
        darkColor: "#151515",
      },
      borderRadius: {
        SmallRounded: "5px",
        MediumRounded: "20px",
        bigRounded: "30px",
      },
      Width: {
        mini: "500px",
        small: "2000px",
      },
      height: {
        line: "1px",
      },
      screens: {
        "2.5xl": "1800px",
        // => @media (min-width: 1800px) { ... }
        "3xl": "2000px",
        // => @media (min-width: 2000px) { ... }
        "3.5xl": "2200px",
        // => @media (min-width: 2000px) { ... }
        "4xl": "2500px",
        // => @media (min-width: 1700px) { ... }
      },
    },
  },
  plugins: [],
};
