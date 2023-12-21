// dark_mode_controller.js

export function initDarkMode() {
  const isDarkMode =
    document.documentElement.classList.contains("dark") ||
    localStorage.getItem("color-theme") === "dark" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  document.documentElement.classList.toggle("dark", isDarkMode);
}

export function updateDarkMode() {
  initDarkMode();
}

export function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");

  const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("color-theme", currentTheme);

  document.body.dispatchEvent(new Event("htmx:afterSwap"));
}
