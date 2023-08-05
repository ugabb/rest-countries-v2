/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(209, 23%, 22%)",
        veryDarkBlueBg: "hsl(207, 26%, 17%)",
        veryDarkBlueBgLg: "hsl(200, 15%, 8%)",
        darkGray: "hsl(0, 0%, 52%)",
        veryLightGray: "hsl(0, 0%, 98%)",
 
      },
      fontFamily: {
        nunitoSans: ["Nunito Sans"],
      },
      dropShadow: {
        custom: "0px 10px 10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
