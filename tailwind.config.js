/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      "hero-image": "url('/projects/jigsaw.svg')",
    },
    extend: {
      colors: {
        primary: "#d03171",
        secondary: "#f8d2e6",
        "tw-gray": "#645a5a",
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
