/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-004892": "#3943B7",
        "orange-fdf300": "#FFD23F",
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
