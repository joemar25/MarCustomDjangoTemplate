import { initDarkMode, updateDarkMode } from "./dark_mode.js";
import { initFullscreen, updateFullscreen } from "./fullscreen.js";

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
