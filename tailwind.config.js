/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Poppins", // Define the 'font-primary' utility
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "30px",
          lg: "0",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      colors: {
        primary: "#222222", // Define the 'text-primary' utility
        secondary: "#F5E6E0",
      },
      backgroundImage: {
        hero: "url('./img/bg_hero.svg')",
      },
    },
  },
  plugins: [],
};
