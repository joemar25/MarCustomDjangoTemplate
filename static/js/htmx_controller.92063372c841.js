// htmx controller.js

import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import { initDarkMode, updateThemeToggleIcon } from "./dark_mode_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  initFullscreen();
});

document.body.addEventListener("htmx:afterSwap", function (event) {
  updateFullscreen();
  updateThemeToggleIcon();
});
