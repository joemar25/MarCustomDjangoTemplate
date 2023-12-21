// dark_mode_controller.js

export const initDarkMode = () => {
  const isDarkMode =
    localStorage.getItem("color-theme") === "dark" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  document.documentElement.classList.toggle("dark", isDarkMode);
};

export const updateDarkMode = () => {
  initDarkMode();
};

export const toggleDarkMode = () => {
  document.documentElement.classList.toggle("dark");

  const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("color-theme", currentTheme);

  document.body.dispatchEvent(new Event("htmx:afterSwap"));
};
