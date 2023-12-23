// controller.js

import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import {
  initDarkMode,
  updateThemeToggleIcons,
} from "./dark_mode_controller.js";
import { updateThemeSelection } from "./settings_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  initFullscreen();
  initDarkMode();
  setupHtmxEventListeners();
  updateThemeSelection(); // Add this line
});

function setupHtmxEventListeners() {
  document.body.addEventListener("htmx:afterSwap", function (event) {
    updateFullscreen();

    // Wait for a short delay before updating the icons
    setTimeout(() => {
      updateThemeToggleIcons(localStorage.getItem("color-theme") === "dark");

      // Trigger change event on the theme select element
      const themeSelect = document.getElementById('theme');
      if (themeSelect) {
        themeSelect.dispatchEvent(new Event('change'));
      }
    }, 50);

    // Additional logic if needed
  });
}
