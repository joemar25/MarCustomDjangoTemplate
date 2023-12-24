// htmx controller.js
import { themeChange } from "/theme-change";
import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";

function handleAfterSwap(event) {
  themeChange();
  updateFullscreen();
  setupHtmxEventListeners();
}

document.addEventListener("DOMContentLoaded", function () {
  themeChange();
  initFullscreen();
  setupHtmxEventListeners();
});

function setupHtmxEventListeners() {
  // Remove existing event listeners before adding new ones
  document.body.removeEventListener("htmx:afterSwap", handleAfterSwap);
  document.body.addEventListener("htmx:afterSwap", handleAfterSwap);
}
