let darkModeInitialized = false;

export function initDarkMode() {
  console.log("initDarkMode");
  if (!darkModeInitialized) {
    darkModeInitialized = true;

    // Check for saved theme preference
    const currentTheme = localStorage.getItem("color-theme");
    if (currentTheme === "dark") {
      enableDarkMode();
    }

    // Attach the click event listener to the theme toggle button
    const themeToggleButton = document.getElementById("theme-toggle");
    if (themeToggleButton) {
      themeToggleButton.addEventListener("click", handleDarkModeToggle);
    }

    // Listen for the htmx:afterSwap event
    document.body.addEventListener("htmx:afterSwap", updateDarkMode);

    // Update the theme toggle button icon after the theme is toggled
    updateThemeToggleIcon();
  }
}

function enableDarkMode() {
  document.documentElement.classList.add("dark");
}

function disableDarkMode() {
  document.documentElement.classList.remove("dark");
}

function handleDarkModeToggle(event) {
  console.log("handleDarkModeToggle");
  const themeToggleButton = document.getElementById("theme-toggle");
  if (themeToggleButton && event.target === themeToggleButton) {
    const darkModeEnabled = document.documentElement.classList.toggle("dark");
    localStorage.setItem("color-theme", darkModeEnabled ? "dark" : "light");
    updateThemeToggleIcon();
  }
}

function updateDarkMode() {
  const currentTheme = localStorage.getItem("color-theme");
  if (currentTheme === "dark") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}

function updateThemeToggleIcon() {
  console.log("updateThemeToggleIcon");
  const darkModeEnabled = document.documentElement.classList.contains("dark");
  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const lightIcon = document.getElementById("theme-toggle-light-icon");

  if (darkIcon && lightIcon) {
    darkIcon.classList.toggle("hidden", !darkModeEnabled);
    lightIcon.classList.toggle("hidden", darkModeEnabled);
  }
}
