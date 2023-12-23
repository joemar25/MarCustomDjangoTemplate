// htmx controller.js

import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import { initSettings } from "./settings_controller.js";
import {
  initDarkMode,
  updateThemeToggleIcons,
} from "./dark_mode_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  initSettings();
  initDarkMode();
  initFullscreen();
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
