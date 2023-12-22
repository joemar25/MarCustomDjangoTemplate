// htmx controller.js

import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import { initDarkMode, updateThemeToggleIcon, removeDarkModeEventListeners } from "./dark_mode_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  initFullscreen();
  initDarkMode();
});

document.body.addEventListener("htmx:afterSwap", function (event) {
  removeDarkModeEventListeners(); // Remove existing event listeners
  updateFullscreen();
  initDarkMode(); // Reinitialize dark mode to add event listeners for the new content
  updateThemeToggleIcon();
});
