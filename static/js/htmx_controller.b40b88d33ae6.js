import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import { initDarkMode, toggleDarkMode } from "./dark_mode_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  // Initial dark mode and fullscreen setup
  initFullscreen();
  initDarkMode();

  // Theme controller
  const themeToggle = document.getElementById("theme-toggle");

  // Event listener for theme toggle button
  themeToggle.addEventListener("click", function () {
    // Toggle dark mode
    toggleDarkMode();
  });
});

document.body.addEventListener("htmx:afterSwap", function (event) {
  updateFullscreen();
  toggleDarkMode();
});
