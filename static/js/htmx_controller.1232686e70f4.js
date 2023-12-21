import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import { initDarkMode, updateDarkMode } from "./dark_mode_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  console.log("Init fullscreen and dark mode is here");
  initFullscreen();
  initDarkMode();
});

document.body.addEventListener("htmx:afterSwap", function (event) {
  console.log("htmx:afterSwap event triggered");
  updateFullscreen();
  updateDarkMode();
});
