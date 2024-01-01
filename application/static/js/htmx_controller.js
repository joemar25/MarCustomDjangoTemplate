/**
 * Main Controller
 * file: htmx_controller.js
 */

import { themeChange } from "theme-change";
import { removeSkeleton } from "./utility_controller/loader_controller.js";
import { initFullscreen, updateFullscreen } from "./utility_controller/full_screen_controller.js";
import { loadThemeOptions, loadFontSizeOptions, loadFontTypeOptions, loadContrastOptions, defaultButtonClickEvent } from "./utility_controller/settings_controller.js";

// Function to handle htmx afterSwap event
function handleAfterSwap(event) {
  console.log("htmx:afterSwap event triggered");
  themeChange();
  updateFullscreen();
  loadThemeOptions();
  loadFontSizeOptions();
  loadFontTypeOptions();
  loadContrastOptions();
}

// Function to initialize the page with loader
function initializePageWithLoader() {
  
  // Add loading class to start the animation
  document.body.classList.add("loading");

  // remove the loader when content is loaded
  removeSkeleton();

  initFullscreen();
  themeChange(false);
  loadThemeOptions();
  loadFontSizeOptions();
  loadFontTypeOptions();
  loadContrastOptions();
  defaultButtonClickEvent();
}

// Initial page load with loader
initializePageWithLoader();

// Handle htmx navigation for subsequent page loads
document.body.addEventListener("htmx:load", function () {
  initializePageWithLoader();
  document.body.removeEventListener("htmx:afterSwap", handleAfterSwap);
  document.body.addEventListener("htmx:afterSwap", handleAfterSwap);
});

// Handle theme change event
themeChange();
