// dark_mode.js

export function initDarkMode() {
  var isDarkMode =
    document.documentElement.classList.contains("dark") ||
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  document.documentElement.classList.toggle("dark", isDarkMode);
}

export function updateDarkMode() {
  // Update dark mode after htmx content updates
  initDarkMode();
}

document.addEventListener("DOMContentLoaded", function () {
  // Initialize dark mode on page load
  initDarkMode();

  var themeToggleBtn = document.getElementById("theme-toggle");

  themeToggleBtn.addEventListener("click", function () {
    // Toggle dark mode on button click
    document.documentElement.classList.toggle("dark");

    // Save the theme preference in local storage
    localStorage.setItem(
      "color-theme",
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );

    // Trigger the htmx event to update content after dark mode change
    document.body.dispatchEvent(new Event("htmx:afterSwap"));
  });
});

document.body.addEventListener("htmx:afterSwap", function (event) {
  // Update dark mode after htmx content updates
  updateDarkMode();
});
