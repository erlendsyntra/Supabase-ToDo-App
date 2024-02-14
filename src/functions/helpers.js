export const toggleDarkMode = (mode) => {
  const el = document.getElementsByTagName("html")[0];
  mode ? el.classList.add("dark") : el.classList.remove("dark");
};
