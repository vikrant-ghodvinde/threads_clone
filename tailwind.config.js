/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1c1c1c",
        "nav-bg": "rgba(0, 0, 0, 0.85)",
        "modal-backdrop": "rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
