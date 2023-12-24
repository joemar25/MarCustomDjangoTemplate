// htmx controller.js

import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import {
  initDarkMode,
  updateThemeToggleIcons,
  applyDarkMode,
} from "./dark_mode_controller.js";

function applyPreviousThemeSettings(savedTheme) {
  if (savedTheme) {
    applyDarkMode(savedTheme);
  } else {
    applyDarkMode(); // Apply based on system preference or default to dark
  }
}

saveChangesBtn.addEventListener("click", handleSaveChangesClick);

function handleSaveChangesClick() {
  const selectedTheme = document.getElementById("theme").value;
  localStorage.setItem("color-theme", selectedTheme);
  applyDarkMode(selectedTheme);
}

document.addEventListener("DOMContentLoaded", function () {
  initFullscreen();
  initDarkMode();
  applyDarkMode(localStorage.getItem("color-theme"));
  setupHtmxEventListeners();
});

document.body.addEventListener("htmx:afterSwap", function (event) {
  updateFullscreen();

  // Wait for a short delay before updating the icons
  setTimeout(() => {
    updateThemeToggleIcons(localStorage.getItem("color-theme") === "dark");
  }, 50);
});

function setupHtmxEventListeners() {
  document.body.addEventListener("htmx:afterSwap", function (event) {
    updateFullscreen();

    // Wait for a short delay before updating the icons
    setTimeout(() => {
      updateThemeToggleIcons(localStorage.getItem("color-theme") === "dark");
    }, 50);
  });
}
