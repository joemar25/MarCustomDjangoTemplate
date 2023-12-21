// htmx_controller.js

import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import { initDarkMode } from "./dark_mode_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  console.log("Init fullscreen and dark mode is here");
  initFullscreen();
  initDarkMode();
});

document.body.addEventListener("htmx:afterSwap", function (event) {
  updateFullscreen();
});
