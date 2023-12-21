// dark_mode.js

export function initDarkMode() {
  var isDarkMode =
    document.documentElement.classList.contains("dark") ||
    localStorage.getItem("color-theme") === "dark" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  document.documentElement.classList.toggle("dark", isDarkMode);
}

export function updateDarkMode() {
  initDarkMode();
}

function toggleDarkMode() {
  // Toggle dark mode on button click
  document.documentElement.classList.toggle("dark");

  // Save the theme preference in local storage
  localStorage.setItem(
    "color-theme",
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  // Trigger the htmx event to update content after dark mode change
  document.body.dispatchEvent(new Event("htmx:afterSwap"));
}

document.addEventListener("DOMContentLoaded", function () {
  // Initialize dark mode on page load
  initDarkMode();

  // Event listener for dark mode toggle button click
  var themeToggleBtn = document.getElementById("theme-toggle");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleDarkMode);
  }
});

document.body.addEventListener("htmx:afterSwap", function () {
  // Update dark mode after htmx content updates
  updateDarkMode();
});
