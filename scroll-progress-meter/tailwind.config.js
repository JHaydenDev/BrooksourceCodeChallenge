/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "link-blue": "#004fff",
        "bold-text": "#282828",
        "light-grey": "#dadada",
        "caption-text": "#9b9b9b",
      },
    },
  },
  plugins: [],
};
