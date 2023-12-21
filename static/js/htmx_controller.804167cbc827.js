// htmx_controller.js
import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import {
  initDarkMode,
  toggleDarkMode,
  updateDarkMode,
} from "./dark_mode_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  console.log("Init fullscreen and dark mode is here");
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
  console.log("htmx:afterSwap event triggered");
  updateFullscreen();
  updateDarkMode(); // Ensure dark mode is updated after content swap
});
