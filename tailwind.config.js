/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      "hero-image": "url('/projects/jigsaw.svg')",
    },
    extend: {
      colors: {
        "blue-004892": "#3943B7",
        "orange-fdf300": "#f7df1e",
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
