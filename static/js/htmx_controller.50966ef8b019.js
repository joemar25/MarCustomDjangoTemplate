// htmx controller.js

import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import { initDarkMode, updateThemeToggleIcon } from "./dark_mode_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  initFullscreen();
  initDarkMode();
});

document.body.addEventListener("htmx:afterSwap", function (event) {
  updateFullscreen();

  // Initialize dark mode and update the theme toggle icon after each content swap
  initDarkMode();
  updateThemeToggleIcon();
});
