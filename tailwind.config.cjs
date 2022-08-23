/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "floral-white": "#fbf8f3",
        nero: "#232323",
      },
    },
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
      mono: ["Fira Code", "monospace"],
    },
  },
  plugins: [],
};
