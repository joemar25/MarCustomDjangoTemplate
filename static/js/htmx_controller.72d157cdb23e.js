import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import { initDarkMode, updateDarkMode } from "./dark_mode_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  // Initial dark mode and fullscreen setup
  initFullscreen();
  initDarkMode();
  console.log("Init fullscreen and dark mode is here");
});

document.body.addEventListener("htmx:afterSwap", function (event) {
  console.log("htmx:afterSwap event triggered");
  updateFullscreen();
  updateDarkMode();
});
