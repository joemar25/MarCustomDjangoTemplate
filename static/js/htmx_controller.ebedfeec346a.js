// htmx controller.js

import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import {
  initDarkMode,
  updateThemeToggleIcons,
} from "./dark_mode_controller.js";
import { initSettings, saveChanges } from "./settings_controller.js"; // Import the necessary functions from settings_controller.js

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
    updateSettingsTheme(); // Update the theme in the settings modal
  }, 50);
});

function setupHtmxEventListeners() {
  document.body.addEventListener("htmx:afterSwap", function (event) {
    updateFullscreen();

    // Wait for a short delay before updating the icons
    setTimeout(() => {
      updateThemeToggleIcons(localStorage.getItem("color-theme") === "dark");
      updateSettingsTheme(); // Update the theme in the settings modal
    }, 50);
  });
}

// Additional function to update the theme in the settings modal
function updateSettingsTheme() {
  const settingsThemeSelect = document.getElementById("theme");
  if (settingsThemeSelect) {
    settingsThemeSelect.value = localStorage.getItem("color-theme") || "light";
  }
}
