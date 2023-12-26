import { themeChange } from "theme-change";
import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import {
  loadThemeOptions,
  addDefaultButtonClickEvent,
  initializeContrastSliderEventListeners,
} from "./settings_controller.js";
import { removeSkeleton } from "./loader.js"; // Import the removeSkeleton function

// Function to handle htmx afterSwap event
function handleAfterSwap(event) {
  console.log("htmx:afterSwap event triggered");
  themeChange();
  updateFullscreen();
  loadThemeOptions();
  initializeContrastSliderEventListeners(); // Keep track of the sliders after each page swap
}

// Function to initialize the page with loader
function initializePageWithLoader() {
  console.log("Page loaded with loader");

  // Add loading class to start the animation
  document.body.classList.add("loading");

  // Call removeSkeleton from loader.js to remove the loader when content is loaded
  removeSkeleton();

  initFullscreen();
  themeChange(false);
  loadThemeOptions();
  addDefaultButtonClickEvent();
  initializeContrastSliderEventListeners(); // Initialize slider event listeners on page load
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
