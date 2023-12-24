import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import {
  initDarkMode,
  applyDarkMode,
  updateThemeToggleIcons,
} from "./dark_mode_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  initFullscreen();
  initDarkMode();
  applyDarkMode(localStorage.getItem("color-theme"));
  setupEventListeners(); // Call the setup function on initial load
});

document.body.addEventListener("htmx:afterSwap", function (event) {
  updateFullscreen();

  // Wait for a short delay before updating the icons
  setTimeout(() => {
    applyDarkMode(localStorage.getItem("color-theme"));
    updateThemeToggleIcons(localStorage.getItem("color-theme") === "dark");
  }, 50);

  setupEventListeners(); // Reattach event listeners after htmx swap
});

function setupEventListeners() {
  // Attach event listeners
  saveChangesBtn.addEventListener("click", handleSaveChangesClick);
  document.body.addEventListener("click", handleDarkModeToggle);
}
