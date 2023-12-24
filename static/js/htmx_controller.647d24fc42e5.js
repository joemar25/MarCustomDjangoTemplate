// htmx controller.js

import themeChange from 'theme-change';
import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";

function handleAfterSwap(event) {
  updateFullscreen();
  themeChange(true);
  setupHtmxEventListeners();
}

document.addEventListener("DOMContentLoaded", function () {
  initFullscreen();
  setupHtmxEventListeners();
});

function setupHtmxEventListeners() {
  // Remove existing event listeners before adding new ones
  document.body.removeEventListener("htmx:afterSwap", handleAfterSwap);
  document.body.addEventListener("htmx:afterSwap", handleAfterSwap);
}
