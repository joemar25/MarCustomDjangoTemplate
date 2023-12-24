// htmx controller.js

import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import { initDarkMode, applyDarkMode, updateThemeToggleIcons } from "./dark_mode_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  initFullscreen();
  initDarkMode();
  setupHtmxEventListeners();
});

function setupHtmxEventListeners() {
  // Add the click event listener to the "Save Changes" button
  const saveChangesBtn = document.getElementById("saveChangesBtn");
  saveChangesBtn.addEventListener("click", handleSaveChangesClick);

  // Add the htmx:afterSwap event listener
  document.body.removeEventListener("htmx:afterSwap", handleAfterSwap);
  document.body.addEventListener("htmx:afterSwap", handleAfterSwap);
}

function handleSaveChangesClick() {
  const selectedTheme = document.getElementById("theme").value;
  localStorage.setItem("color-theme", selectedTheme);
  applyDarkMode(selectedTheme);
}

function handleAfterSwap(event) {
  initDarkMode();
  applyDarkMode(localStorage.getItem("color-theme"));
  updateFullscreen();

  // Wait for a short delay before updating the icons
  setTimeout(() => {
    updateThemeToggleIcons(localStorage.getItem("color-theme") === "dark");
  }, 50);
}
