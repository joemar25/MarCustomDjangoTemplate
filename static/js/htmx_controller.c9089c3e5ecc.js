// htmx controller.js

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
    }, 50);

    // Call updateThemeSelection after modal swap
    if (event.target.id === 'settings_modal') {
      updateThemeSelection();
    }
  });
}
