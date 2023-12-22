function handleDarkModeToggle(event) {
  const themeToggleButton = document.getElementById("theme-toggle");
  if (themeToggleButton && event.target === themeToggleButton) {
    // Check if dark mode is currently enabled
    const darkModeEnabled = document.documentElement.classList.contains("dark");

    // Toggle theme
    if (darkModeEnabled) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }

    // Update the theme toggle button icon after the theme is toggled
    updateThemeToggleIcon();
  }
}

function updateThemeToggleIcon() {
  const darkModeEnabled = document.documentElement.classList.contains("dark");
  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const lightIcon = document.getElementById("theme-toggle-light-icon");

  if (darkIcon && lightIcon) {
    if (darkModeEnabled) {
      darkIcon.classList.add("hidden");
      lightIcon.classList.remove("hidden");
    } else {
      darkIcon.classList.remove("hidden");
      lightIcon.classList.add("hidden");
    }
  }
}