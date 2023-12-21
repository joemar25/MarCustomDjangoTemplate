// dark_mode.js

export function initDarkMode() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  var isDarkMode =
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  document.documentElement.classList.toggle("dark", isDarkMode);

  var themeToggleBtn = document.getElementById("theme-toggle");

  themeToggleBtn.addEventListener("click", function () {
    // Toggle dark mode
    isDarkMode = !isDarkMode;
    document.documentElement.classList.toggle("dark", isDarkMode);

    // Save the theme preference in local storage
    localStorage.setItem("color-theme", isDarkMode ? "dark" : "light");
  });
}

export function updateDarkMode() {
  // Update dark mode after htmx content updates
  initDarkMode();
}
