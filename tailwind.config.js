/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FBC205",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill,minmax(300px,1fr))",
      },
    },
  },
  plugins: [],
};
