/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {},
    //HERE
    fontFamily: {
      body: ["Roboto"],
    },
  },
  plugins: [],
};
