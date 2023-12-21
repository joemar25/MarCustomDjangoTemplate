// dark_mode_controller.js

export const initDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  document.documentElement.classList.toggle("dark", prefersDarkMode);
};

export const updateDarkMode = () => {
  initDarkMode();
};

export const toggleDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  // Toggle dark mode on button click
  document.documentElement.classList.toggle("dark", !prefersDarkMode);

  document.body.dispatchEvent(new Event("htmx:afterSwap"));
};
