let darkModeInitialized = false;

export function initDarkMode() {
  if (!darkModeInitialized) {
    darkModeInitialized = true;

    // Check for saved theme preference
    const currentTheme = localStorage.getItem("color-theme");
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    }

    // Attach the click event listener to the theme toggle button
    const themeToggleButton = document.getElementById("theme-toggle");
    if (themeToggleButton) {
      themeToggleButton.addEventListener("click", handleDarkModeToggle);
    }
  }
}

function handleDarkModeToggle() {
  // Toggle theme
  const darkModeEnabled = document.documentElement.classList.toggle("dark");
  localStorage.setItem("color-theme", darkModeEnabled ? "dark" : "light");

  // Toggle the visibility of the icons
  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const lightIcon = document.getElementById("theme-toggle-light-icon");
  if (darkIcon && lightIcon) {
    darkIcon.classList.toggle("hidden", darkModeEnabled);
    lightIcon.classList.toggle("hidden", !darkModeEnabled);
  }
}