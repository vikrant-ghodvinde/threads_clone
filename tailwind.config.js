/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1c1c1c"
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
