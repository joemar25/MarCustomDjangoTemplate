// htmx controller.js

import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import {
  initDarkMode,
  updateThemeToggleIcons,
} from "./dark_mode_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  initFullscreen();
  initDarkMode();
  setupHtmxEventListeners();
});

function setupHtmxEventListeners() {
  let darkModeInitialized = false;

  document.body.addEventListener("htmx:afterSwap", function (event) {
    updateFullscreen();
    if (!darkModeInitialized) {
      initDarkMode(); // Initialize dark mode only once
      darkModeInitialized = true;
    }
    updateThemeToggleIcons(localStorage.getItem("color-theme") === "dark");
  });
}
