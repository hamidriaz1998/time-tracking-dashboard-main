/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: "jit",
  safelist: [
    "bg-primary-light_red_work",
    "bg-primary-soft_blue_play",
    "bg-primary-light_red_study",
    "bg-primary-lime_green_exercise",
    "bg-primary-violet_social",
    "bg-primary-soft_orange_self_care",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        primary: {
          blue: "#5747ea",
          light_red_work: "#ff8c65",
          soft_blue_play: "#56c1e5",
          light_red_study: "#ff5b7c",
          lime_green_exercise: "#49ce81",
          violet_social: "#7436d2",
          soft_orange_self_care: "#f0c65a",
        },
        neutral: {
          very_dark_blue: "#0e1324",
          dark_blue: "#1b1f4a",
          desaturated_blue: "#6e76c8",
          pale_blue: "#bcc1ff",
        },
      },
    },
  },
  plugins: [],
};
