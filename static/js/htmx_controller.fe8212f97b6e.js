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
});

document.body.addEventListener("htmx:afterSwap", function (event) {
  // Update fullscreen and theme toggle icons
  updateFullscreen();
  updateThemeToggleIcons(localStorage.getItem("color-theme") === "dark");
});

function setupHtmxEventListeners() {
  document.body.addEventListener("htmx:afterSettle", function (event) {
    // Trigger theme selection update after htmx has settled
    updateThemeSelection();
  });
}
