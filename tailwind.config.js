/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        "green-light": "#65c4ae",
        "green-dark": "#19ba99",
      },
      spacing: {
        107: "26.875rem", //max width
      },
    },
    plugins: ["prettier-plugin-tailwindcss"],
  },
};
