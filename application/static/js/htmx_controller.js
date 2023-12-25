// htmx_controller.js

import { themeChange } from "theme-change";
import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import { loadThemeOptions, addDefaultButtonClickEvent } from "./theme_options_controller.js";

// Function to handle htmx afterSwap event
function handleAfterSwap(event) {
  console.log("htmx:afterSwap event triggered");
  themeChange();
  updateFullscreen();
  loadThemeOptions();
}

// Function to initialize the page
function initializePage() {
  console.log("Page loaded");
  initFullscreen();
  themeChange(false);
  loadThemeOptions();
  addDefaultButtonClickEvent();
}

// Initial page load
initializePage();

// Handle htmx navigation for subsequent page loads
document.body.addEventListener("htmx:load", function () {
  initializePage();
  document.body.removeEventListener("htmx:afterSwap", handleAfterSwap);
  document.body.addEventListener("htmx:afterSwap", handleAfterSwap);
});

// Handle theme change event
themeChange();
