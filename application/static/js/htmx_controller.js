// htmx_controller.js
import { themeChange } from "theme-change";
import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import {
  loadThemeOptions,
  setDefaultTheme,
  addDefaultButtonClickEvent,
} from "./theme_options_controller.js";

// Function to handle htmx afterSwap event
function handleAfterSwap(event) {
  console.log("htmx:afterSwap event triggered");
  themeChange();
  updateFullscreen();
  setupHtmxEventListeners();
  loadThemeOptions();
}

// Function to set up htmx event listeners
function setupHtmxEventListeners() {
  console.log("Setting up htmx event listeners");
  document.body.removeEventListener("htmx:afterSwap", handleAfterSwap);
  document.body.addEventListener("htmx:afterSwap", handleAfterSwap);
}

// Function to initialize the page
function initializePage() {
  console.log("Page loaded");
  initFullscreen();
  setupHtmxEventListeners();
  themeChange(false);
  loadThemeOptions();
  addDefaultButtonClickEvent();
}

// Initial page load
initializePage();

// Handle htmx navigation for subsequent page loads
document.body.addEventListener("htmx:load", initializePage);

// Handle theme change event
themeChange();
