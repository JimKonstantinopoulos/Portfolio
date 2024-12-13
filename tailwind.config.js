/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      x_small: "450px",
      small: "580px",
      tablet: "640px",
      tablet_w: "768px",
      laptop: "1024px",
      desktop: "1280px",
      desktop_w: "1536px",
    },
    extend: {
      colors:{
        "background": "#0C0457"
      },
      height: {
        svh: "100svh",
      },
    },
  },
  plugins: [],
};
