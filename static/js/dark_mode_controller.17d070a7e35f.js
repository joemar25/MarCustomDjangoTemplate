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

    // Listen for the htmx:afterSwap event
    document.body.addEventListener("htmx:afterSwap", updateThemeToggleIcon);
  }
}

// Handle dark mode toggle using event delegation
document.body.addEventListener("click", function (event) {
  const themeToggleButton = document.getElementById("theme-toggle");
  if (themeToggleButton && event.target === themeToggleButton) {
    toggleDarkMode();
  }
});

function toggleDarkMode() {
  const darkModeEnabled = document.documentElement.classList.toggle("dark");
  localStorage.setItem("color-theme", darkModeEnabled ? "dark" : "light");
  updateThemeToggleIcon();
}

export function updateThemeToggleIcon() {
  console.log("updateThemeToggleIcon");
  const darkModeEnabled = document.documentElement.classList.contains("dark");
  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const lightIcon = document.getElementById("theme-toggle-light-icon");

  if (darkIcon && lightIcon) {
    darkIcon.classList.toggle("hidden", !darkModeEnabled);
    lightIcon.classList.toggle("hidden", darkModeEnabled);
  }
}

// Remove event listener during "htmx:afterSwap"
export function removeDarkModeEventListener() {
  document.body.removeEventListener("click", handleDarkModeToggle);
}

// Add event listener during "htmx:afterSwap"
export function addDarkModeEventListener() {
  document.body.addEventListener("click", handleDarkModeToggle);
}
