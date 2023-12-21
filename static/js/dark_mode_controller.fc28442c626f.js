// dark_mode_controller.js

export function initDarkMode() {
  const handleDarkModeToggle = () => {
    // Rename the local function
    const darkModeEnabled = document.documentElement.classList.contains("dark");

    document.documentElement.classList.toggle("dark", !darkModeEnabled);

    localStorage.setItem("color-theme", darkModeEnabled ? "light" : "dark");

    updateDarkMode();
  };

  const attachDarkModeClickEvent = () => {
    const themeToggleButton = document.getElementById("theme-toggle");
    if (themeToggleButton) {
      themeToggleButton.addEventListener("click", handleDarkModeToggle); // Use the renamed function
    }
  };

  // Initial binding
  attachDarkModeClickEvent();

  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  updateDarkMode();
}

export function updateDarkMode() {
  // Logic to update dark mode after htmx content updates
  initDarkMode();
}

export function toggleDarkMode() {
  // Function for direct use if needed outside the module
  handleDarkModeToggle();
}
