/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        ibm: ["IBM Plex Sans", "sans-serif"],
      },
      colors: {
        mgray: "#161616",
        mlgray: "#262626",
      },
    },
  },
  plugins: [],
};
