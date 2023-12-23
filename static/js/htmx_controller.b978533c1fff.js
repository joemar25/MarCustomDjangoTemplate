// htmx controller.js

import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import {
  initDarkMode,
  updateThemeToggleIcons,
} from "./dark_mode_controller.js";
import { initSettings } from "./settings_controller.js"; // Import the new settings controller

document.addEventListener("DOMContentLoaded", function () {
  initFullscreen();
  initDarkMode();
  initSettings(); // Initialize the settings controller
  setupHtmxEventListeners();
});

document.body.addEventListener("htmx:afterSwap", function (event) {
  updateFullscreen();

  // Wait for a short delay before updating the icons
  setTimeout(() => {
    updateThemeToggleIcons(localStorage.getItem("color-theme") === "dark");
  }, 50);
});

function setupHtmxEventListeners() {
  document.body.addEventListener("htmx:afterSwap", function (event) {
    updateFullscreen();

    // Wait for a short delay before updating the icons
    setTimeout(() => {
      updateThemeToggleIcons(localStorage.getItem("color-theme") === "dark");
    }, 50);
  });
}
