module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
