// dark_mode.js

export function initDarkMode() {
  var isDarkMode =
    document.documentElement.classList.contains("dark") ||
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  document.documentElement.classList.toggle("dark", isDarkMode);

  updateDarkModeIconVisibility(isDarkMode);

  var themeToggleBtn = document.getElementById("theme-toggle");

  themeToggleBtn.addEventListener("click", function () {
    // Toggle dark mode
    isDarkMode = !isDarkMode;
    document.documentElement.classList.toggle("dark", isDarkMode);

    // Update icon visibility after toggling dark mode
    updateDarkModeIconVisibility(isDarkMode);

    // Save the theme preference in local storage
    localStorage.setItem("color-theme", isDarkMode ? "dark" : "light");
  });
}

export function updateDarkMode() {
  // Update dark mode after htmx content updates
  initDarkMode();
}

function updateDarkModeIconVisibility(isDarkMode) {
  var darkIcon = document.getElementById("theme-toggle-dark-icon");
  var lightIcon = document.getElementById("theme-toggle-light-icon");

  // Update icon visibility based on the dark mode state
  darkIcon.classList.toggle("hidden", isDarkMode);
  lightIcon.classList.toggle("hidden", !isDarkMode);
}
