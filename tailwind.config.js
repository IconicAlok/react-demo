/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", //
  ],
  theme: {
    extend: {
      frontFamily: {
        sans: ["robato", "sans-serif"],
      },
      gridTemplateColumns: {
        "70/30": "70%/28%",
      },
    },
  },
  plugins: [],
};
