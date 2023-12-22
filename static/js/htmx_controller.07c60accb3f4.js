// htmx controller.js

import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import {
  initDarkMode,
  updateThemeToggleIcons,
} from "./dark_mode_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  initFullscreen();
  initDarkMode();
  updateThemeToggleIcons(localStorage.getItem("color-theme") === "dark");
});

document.body.addEventListener("htmx:beforeSwap", function (event) {
  // Capture the current theme before any HTMX swaps occur
  const currentTheme = localStorage.getItem("color-theme");
  event.detail.currentTheme = currentTheme;
});

document.body.addEventListener("htmx:afterSwap", function (event) {
  updateFullscreen();

  // Retrieve the current theme from the event detail or fallback to localStorage
  const currentTheme = event.detail.currentTheme || localStorage.getItem("color-theme");

  updateThemeToggleIcons(currentTheme === "dark");
});
