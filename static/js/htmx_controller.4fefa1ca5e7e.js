import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import {
  initDarkMode,
  updateThemeToggleIcons,
  applyDarkMode,
} from "./dark_mode_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  initFullscreen();
  initDarkMode();
  applyDarkMode(localStorage.getItem("color-theme"));
  setupHtmxEventListeners();
});

document.body.addEventListener("htmx:afterSwap", function (event) {
  updateFullscreen();

  // Update the icons immediately after content is swapped
  updateThemeToggleIcons(localStorage.getItem("color-theme") === "dark");
});

function setupHtmxEventListeners() {
  document.body.addEventListener("htmx:afterSwap", function (event) {
    updateFullscreen();
    
    // Update the icons immediately after content is swapped
    updateThemeToggleIcons(localStorage.getItem("color-theme") === "dark");
  });
}
