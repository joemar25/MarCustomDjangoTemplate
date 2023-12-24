// htmx controller.js

import { themeBtn } from 'theme-change.js';
import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";

function handleAfterSwap(event) {
  updateFullscreen();
  themeBtn(true);
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
