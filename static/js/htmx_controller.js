import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import { initDarkMode } from "./dark_mode_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  initFullscreen();
  initDarkMode();
});

document.body.addEventListener("htmx:afterSwap", function (event) {
  updateFullscreen();
});
