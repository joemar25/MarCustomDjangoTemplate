// htmx controller.js

import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import { initDarkMode, updateThemeToggleIcons } from "./dark_mode_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  initFullscreen();
  initDarkMode();
  setupHtmxEventListeners();
});

function setupHtmxEventListeners() {
  document.body.addEventListener("htmx:afterSwap", function (event) {
    updateFullscreen();

    // Manually update icons based on the current theme
    const darkModeEnabled = document.documentElement.classList.contains("dark");
    updateThemeToggleIcons(darkModeEnabled);
  });
}
