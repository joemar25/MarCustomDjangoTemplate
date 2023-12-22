// dark_mode_controller.js

let darkModeInitialized = false;

export function initDarkMode() {
  if (!darkModeInitialized) {
    darkModeInitialized = true;

    // Check for saved theme preference
    const currentTheme = localStorage.getItem("color-theme");
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    }

    // Event listener for body click
    document.body.addEventListener("click", handleDarkModeToggle);

    // Listen for the htmx:afterSwap event
    document.body.addEventListener("htmx:afterSwap", updateThemeToggleIcon);

    // Update the theme toggle button icon after the theme is toggled
    updateThemeToggleIcon();
  }
}

export function toggleDarkMode() {
  const darkModeEnabled = document.documentElement.classList.toggle("dark");
  localStorage.setItem("color-theme", darkModeEnabled ? "dark" : "light");
  updateThemeToggleIcon();
}

function handleDarkModeToggle(event) {
  const themeToggleButton = document.getElementById("theme-toggle");
  if (themeToggleButton && event.target === themeToggleButton) {
    toggleDarkMode();
  }
}

export function updateThemeToggleIcon() {
  const darkModeEnabled = document.documentElement.classList.contains("dark");
  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const lightIcon = document.getElementById("theme-toggle-light-icon");

  if (darkIcon && lightIcon) {
    darkIcon.classList.toggle("hidden", !darkModeEnabled);
    lightIcon.classList.toggle("hidden", darkModeEnabled);
  }
}
