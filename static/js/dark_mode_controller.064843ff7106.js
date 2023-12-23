// dark_mode_controller.js

export function updateThemeToggleIcons(darkModeEnabled) {
  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const lightIcon = document.getElementById("theme-toggle-light-icon");

  // Set initial visibility of icons based on the current theme
  darkIcon.style.display = darkModeEnabled ? "none" : "inline-block";
  lightIcon.style.display = darkModeEnabled ? "inline-block" : "none";

  // Get the select element for theme in the settings modal
  const themeSelect = document.getElementById("theme");

  // Set the selected option based on the current theme
  themeSelect.value = darkModeEnabled ? "dark" : "light";

  // Add click event listeners to the icons
  darkIcon.addEventListener("click", () => {
    document.documentElement.classList.add("dark");
    updateLocalStorageTheme(true);
    updateThemeToggleIcons(true); // Update icons
    updateThemeSelect("dark"); // Update theme select in settings modal
  });

  lightIcon.addEventListener("click", () => {
    document.documentElement.classList.remove("dark");
    updateLocalStorageTheme(false);
    updateThemeToggleIcons(false); // Update icons
    updateThemeSelect("light"); // Update theme select in settings modal
  });
}

function updateThemeSelect(theme) {
  // Get the select element for theme in the settings modal
  const themeSelect = document.getElementById("theme");

  // Set the selected option based on the specified theme
  themeSelect.value = theme;
}
