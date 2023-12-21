import { initFullscreen, updateFullscreen } from "./fullscreen_controller.js";

document.addEventListener("DOMContentLoaded", () => {
  initFullscreen();

  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Check for saved theme preference and apply it
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
  }

  // Toggle theme function with more descriptive variable names
  const toggleTheme = () => {
    const isDarkModeActive = body.classList.contains("dark");
    if (isDarkModeActive) {
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  themeToggle.addEventListener("click", toggleTheme);

  // Update dark mode after Htmx content updates (if applicable)
  document.body.addEventListener("htmx:afterSwap", () => {
    updateFullscreen(); // Ensure fullscreen state is maintained
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      body.classList.add(currentTheme); // Reapply dark mode if needed
    }
  });
});
