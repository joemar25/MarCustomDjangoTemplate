// dark_mode.js

// Function to set the dark mode based on the stored preference
const setDarkMode = () => {
  const isDarkMode =
    localStorage.getItem("color-theme") === "dark" ||
    (!localStorage.getItem("color-theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  document.documentElement.classList.toggle("dark", isDarkMode);
};

// Function to toggle dark mode
const toggleDarkMode = () => {
  const isDarkMode = document.documentElement.classList.contains("dark");
  document.documentElement.classList.toggle("dark", !isDarkMode);

  // Store the preference in localStorage
  localStorage.setItem("color-theme", isDarkMode ? "light" : "dark");
};

// Set the dark mode on page load
setDarkMode();

// Attach event listener to the theme toggle button
const themeToggleBtn = document.getElementById("theme-toggle");
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", toggleDarkMode);
}
