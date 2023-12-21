import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  // Initial dark mode and fullscreen setup
  initFullscreen();

  // Event listener for theme toggle button
  themeToggle.addEventListener("click", toggleTheme);
});

document.body.addEventListener("htmx:afterSwap", function (event) {
  updateFullscreen();
});
