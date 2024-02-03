/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      spacing: {
        107: "26.875rem", //max width
      },
    },
    plugins: ["prettier-plugin-tailwindcss"],
  },
};
