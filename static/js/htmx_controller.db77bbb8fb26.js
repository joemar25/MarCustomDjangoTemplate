// htmx controller.js

import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import { initDarkMode, updateThemeToggleIcon, removeDarkModeEventListener, addDarkModeEventListener } from "./dark_mode_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  initFullscreen();
  initDarkMode();
});

document.body.addEventListener("htmx:afterSwap", function (event) {
  removeDarkModeEventListener(); // Remove existing event listener
  updateFullscreen();
  initDarkMode(); // Reinitialize dark mode to add event listener for the new content
  addDarkModeEventListener(); // Add new event listener
  updateThemeToggleIcon();
});
