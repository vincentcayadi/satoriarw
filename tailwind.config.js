module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
