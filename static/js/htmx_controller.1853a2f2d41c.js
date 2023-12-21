import { initDarkMode, updateDarkMode } from "./dark_mode_controller.js";
import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  // Initial dark mode and fullscreen setup
  initDarkMode();
  initFullscreen();
});

document.body.addEventListener("htmx:afterSwap", function (event) {
  // Update dark mode and fullscreen after htmx content updates
  updateDarkMode();
  updateFullscreen();
});
