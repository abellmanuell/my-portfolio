/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "amethyst-50": "#f4f4f9",
        "amethyst-100": "#ebebf4",
        "amethyst-200": "#dbdbea",
        "amethyst-300": "#c5c5dc",
        "amethyst-400": "#afaccd",
        "amethyst-500": "#9d97bd",
        "amethyst-600": "#9086af",
        "amethyst-700": "#776d95",
        "amethyst-800": "#625a79",
        "amethyst-900": "#514c63",
      },
      fontFamily: {
        "be-vietnam-pro": ["Be Vietnam Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
