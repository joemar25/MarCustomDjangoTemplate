// htmx controller.js

import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import { initDarkMode, applyDarkMode, updateThemeToggleIcons } from "./dark_mode_controller.js";

function applyPreviousThemeSettings(savedTheme) {
  if (savedTheme) {
    applyDarkMode(savedTheme);
  } else {
    applyDarkMode(); // Apply based on system preference or default to dark
  }
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

document.addEventListener("DOMContentLoaded", function () {
  initFullscreen();
  initDarkMode();
  applyDarkMode(localStorage.getItem("color-theme"));
  setupHtmxEventListeners();
});

function setupHtmxEventListeners() {
  // Remove existing event listeners before adding new ones
  document.body.removeEventListener("htmx:afterSwap", handleAfterSwap);
  document.body.addEventListener("htmx:afterSwap", handleAfterSwap);

  // Add the click event listener to the "Save Changes" button
  const saveChangesBtn = document.getElementById("saveChangesBtn");
  saveChangesBtn.addEventListener("click", handleSaveChangesClick);
}
