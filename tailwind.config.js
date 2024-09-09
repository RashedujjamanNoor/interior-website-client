/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FBC205",
      },
      gridTemplateColumns: {
        auto: "auto-fill,minmax(200,1fr)",
      },
    },
  },
  plugins: [],
};
