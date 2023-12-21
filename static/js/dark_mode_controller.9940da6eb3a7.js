// dark_mode_controller.js

let darkModeInitialized = false;

export function initDarkMode() {
  if (!darkModeInitialized) {
    const handleDarkModeToggle = () => {
      const darkModeEnabled =
        document.documentElement.classList.contains("dark");

      document.documentElement.classList.toggle("dark", !darkModeEnabled);

      localStorage.setItem("color-theme", darkModeEnabled ? "light" : "dark");

      updateDarkMode();
    };

    // Check if the event listener is already attached to avoid duplicates
    const themeToggleButton = document.getElementById("theme-toggle");
    if (themeToggleButton) {
      themeToggleButton.addEventListener("click", handleDarkModeToggle);
    }

    darkModeInitialized = true;
  }
}

export function updateDarkMode() {
  // Logic to update dark mode after htmx content updates
  // (Do not call initDarkMode here to avoid unnecessary reinitialization)
}
