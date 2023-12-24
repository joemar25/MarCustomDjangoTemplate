// htmx controller.js
import themeChange from "theme-change";
import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";

function handleAfterSwap(event) {
  updateFullscreen();
  setupHtmxEventListeners();
}

document.addEventListener("DOMContentLoaded", function () {
  initFullscreen();
  setupHtmxEventListeners();
  themeChange(); // Initialize the theme-change
});

function setupHtmxEventListeners() {
  // Remove existing event listeners before adding new ones
  document.body.removeEventListener("htmx:afterSwap", handleAfterSwap);
}