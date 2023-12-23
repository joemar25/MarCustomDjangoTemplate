// dark_mode_controller.js

let darkModeInitialized = false;

export function initDarkMode() {
  if (!darkModeInitialized) {
    darkModeInitialized = true;

    // Check for saved theme preference or use the system preference
    const savedTheme = localStorage.getItem("color-theme");
    const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Determine the initial theme based on saved preference, system preference, or default to dark
    const darkModeEnabled = savedTheme === "dark" || (!savedTheme && systemDarkMode);

    // Update the icon visibility and class based on the theme
    updateThemeToggleIcons(darkModeEnabled);

    // Apply the previous theme settings
    applyPreviousThemeSettings(savedTheme, darkModeEnabled);

    // Attach the click event listener to the body (event delegation)
    document.body.addEventListener("click", handleDarkModeToggle);
  }
}

function applyPreviousThemeSettings(savedTheme, darkModeEnabled) {
  // if set via local storage previously
  if (savedTheme) {
    document.documentElement.classList.toggle("dark", darkModeEnabled);
    localStorage.setItem("color-theme", darkModeEnabled ? "dark" : "light");
  } else {
    // if NOT set via local storage previously
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
}

function handleDarkModeToggle(event) {
  const themeToggleButton = document.getElementById("theme-toggle");

  if (themeToggleButton && event.target === themeToggleButton) {
    // Toggle theme only if the click is on the theme toggle button
    const darkModeEnabled = document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", !darkModeEnabled);

    // Update the icon visibility and class based on the new theme
    updateThemeToggleIcons(!darkModeEnabled);

    // Update the local storage based on the new theme
    updateLocalStorageTheme(!darkModeEnabled);

    // Update the theme selection in the settings modal
    updateThemeSelect(!darkModeEnabled ? "dark" : "light");
  }
}

function updateLocalStorageTheme(darkModeEnabled) {
  // Update the local storage based on the new theme
  localStorage.setItem("color-theme", darkModeEnabled ? "dark" : "light");
}

export function updateThemeToggleIcons(darkModeEnabled) {
  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const lightIcon = document.getElementById("theme-toggle-light-icon");

  // Remove existing click event listeners
  darkIcon.removeEventListener("click", handleDarkIconClick);
  lightIcon.removeEventListener("click", handleLightIconClick);

  // Set initial visibility of icons based on the current theme
  darkIcon.style.display = darkModeEnabled ? "none" : "inline-block";
  lightIcon.style.display = darkModeEnabled ? "inline-block" : "none";

  // Add new click event listeners
  darkIcon.addEventListener("click", handleDarkIconClick);
  lightIcon.addEventListener("click", handleLightIconClick);
}

function handleDarkIconClick() {
  document.documentElement.classList.add("dark");
  updateLocalStorageTheme(true);
  updateThemeToggleIcons(true); // Update icons
  updateThemeSelect("dark"); // Update theme select in settings modal
}

function handleLightIconClick() {
  document.documentElement.classList.remove("dark");
  updateLocalStorageTheme(false);
  updateThemeToggleIcons(false); // Update icons
  updateThemeSelect("light"); // Update theme select in settings modal
}

function updateThemeSelect(theme) {
  // Get the select element for theme in the settings modal
  const themeSelect = document.getElementById("theme");

  // Set the selected option based on the specified theme
  themeSelect.value = theme;

  // Trigger a change event to update the displayed value in the modal
  themeSelect.dispatchEvent(new Event("change"));
}

export function updateTheme(selectedTheme) {
  // Implement your logic to apply the selected theme
  console.log("Theme updated to:", selectedTheme);

  // You can further extend this function to apply the theme to your application
  document.body.classList.toggle("dark", selectedTheme === "dark");

  // Update the icon visibility and class based on the theme
  updateThemeToggleIcons(selectedTheme === "dark");

  // Update the local storage based on the new theme
  updateLocalStorageTheme(selectedTheme === "dark");

  // Update the theme selection in the settings modal
  updateThemeSelect(selectedTheme);
}
