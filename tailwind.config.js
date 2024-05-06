/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "voip-blue": "#196BDD",
        "voip-blue-hover": "#1C77F6",
        "voip-gray": "#D1D1D1",
      },
    },
  },
  plugins: [],
};
