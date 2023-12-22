let darkModeInitialized = false;

export function initDarkMode() {
  if (!darkModeInitialized) {
    darkModeInitialized = true;

    // Check for saved theme preference
    const currentTheme = localStorage.getItem("color-theme");
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    }

    // Attach the click event listener to the body (event delegation)
    document.body.addEventListener("click", handleDarkModeToggle);

    // Listen for the htmx:afterSwap event
    document.body.addEventListener('htmx:afterSwap', updateThemeToggleIcon);

    // Update the theme toggle button icon after the theme is toggled
    updateThemeToggleIcon();
  }
}

function handleDarkModeToggle(event) {
  const themeToggleButton = document.getElementById("theme-toggle");
  if (themeToggleButton && event.target === themeToggleButton) {
    // Toggle theme only if the click is on the theme toggle button
    const darkModeEnabled = document.documentElement.classList.toggle("dark");
    localStorage.setItem("color-theme", darkModeEnabled ? "dark" : "light");

    // Update the theme toggle button icon after the theme is toggled
    updateThemeToggleIcon();
  }
}

function updateThemeToggleIcon() {
  const currentTheme = localStorage.getItem("color-theme");
  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const lightIcon = document.getElementById("theme-toggle-light-icon");

  if (currentTheme === "dark") {
    darkIcon.classList.add("hidden");
    lightIcon.classList.remove("hidden");
  } else {
    darkIcon.classList.remove("hidden");
    lightIcon.classList.add("hidden");
  }
}

// Call the function when the page loads
window.onload = initDarkMode;