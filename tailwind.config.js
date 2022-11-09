/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./ui/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["cupcake", "halloween"],
    darkTheme: "halloween",
    logs: false,
  },
  // eslint-disable-next-line global-require
  plugins: [require("daisyui")],
};
