// dark_mode_controller.js

// Function to initialize dark mode
export function initDarkMode() {
  // Determine initial dark mode state
  const isDarkMode =
    document.documentElement.classList.contains("dark") ||
    localStorage.getItem("color-theme") === "dark" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Apply dark mode to the document element
  document.documentElement.classList.toggle("dark", isDarkMode);
}

// Function to update dark mode after htmx content updates
export function updateDarkMode() {
  initDarkMode();
}

// Function to toggle dark mode
export function toggleDarkMode() {
  // Toggle dark mode on button click
  document.documentElement.classList.toggle("dark");

  // Save the theme preference in local storage
  localStorage.setItem(
    "color-theme",
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  // Trigger the htmx event to update content after dark mode change
  document.body.dispatchEvent(new Event("htmx:afterSwap"));
}
