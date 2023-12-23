// htmx_controller.js

import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import {
  initDarkMode,
  updateThemeToggleIcons,
  updateThemeSelect,
} from "./dark_mode_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  initFullscreen();
  initDarkMode();
  setupHtmxEventListeners();
});

document.body.addEventListener("htmx:afterSwap", function (event) {
  // Update fullscreen and theme icons after content swap
  updateFullscreen();
  updateThemeIcons();
});

function setupHtmxEventListeners() {
  document.body.addEventListener("htmx:afterSwap", function (event) {
    // Update fullscreen and theme icons after content swap
    updateFullscreen();
    updateThemeIcons();
  });
}

function updateThemeIcons() {
  // Wait for a short delay before updating the icons
  setTimeout(() => {
    const darkModeEnabled = localStorage.getItem("color-theme") === "dark";
    updateThemeToggleIcons(darkModeEnabled);
    updateThemeSelect(darkModeEnabled ? "dark" : "light");
  }, 50);
}
