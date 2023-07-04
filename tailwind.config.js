/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'greenBtn': "#00c46a",
        'dark':'#2d3439',
        'strongDark':'#242a2e',
        'lightDark':'#42484d',
        'veryLightDark':'#d6dee0',
      },
    },
  },
  plugins: [],
};
