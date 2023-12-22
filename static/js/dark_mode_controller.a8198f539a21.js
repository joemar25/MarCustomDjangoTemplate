// This function updates the theme of the website and the local storage
function updateTheme(darkModeEnabled) {
  // Update the theme of the website
  document.documentElement.classList.toggle("dark", darkModeEnabled);

  // Update the local storage based on the new theme
  localStorage.setItem("color-theme", darkModeEnabled ? "dark" : "light");
}

// This function updates the visibility of the theme toggle icons
function updateThemeToggleIcons(darkModeEnabled) {
  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const lightIcon = document.getElementById("theme-toggle-light-icon");

  // Show the light icon and hide the dark icon if dark mode is enabled, and vice versa
  darkIcon.style.display = darkModeEnabled ? "none" : "block";
  lightIcon.style.display = darkModeEnabled ? "block" : "none";
}

// This function handles the click event on the theme toggle button
function handleDarkModeToggle(event) {
  const themeToggleButton = document.getElementById("theme-toggle");
  if (themeToggleButton && event.target === themeToggleButton) {
    // Toggle the theme
    const darkModeEnabled = document.documentElement.classList.contains("dark");
    updateTheme(!darkModeEnabled);

    // Update the icons
    updateThemeToggleIcons(!darkModeEnabled);
  }
}

// This function initializes the theme
export function initTheme() {
  // Check for saved theme preference or use the system preference
  const darkModeEnabled =
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  // Update the theme and the icons
  updateTheme(darkModeEnabled);
  updateThemeToggleIcons(darkModeEnabled);

  // Attach the click event listener to the body (event delegation)
  document.body.addEventListener("click", handleDarkModeToggle);
}

// Initialize the theme when the document is loaded
document.addEventListener("DOMContentLoaded", initTheme);