// htmx controller.js

import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import {
  initDarkMode,
  updateThemeToggleIcons,
} from "./dark_mode_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  initFullscreen();
  initDarkMode();
});

document.body.addEventListener("htmx:afterSwap", function (event) {
  updateFullscreen();

  // Determine the current theme and update the icon accordingly
  const darkModeEnabled = localStorage.getItem("color-theme") === "dark";
  updateThemeToggleIcons(darkModeEnabled);
});
