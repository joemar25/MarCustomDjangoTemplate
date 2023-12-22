// htmx controller.js

import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import {
  initDarkMode,
  updateThemeToggleIcons,
} from "./dark_mode_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  initFullscreen();
  initDarkMode();
});

document.body.addEventListener("htmx:configRequest", function (event) {
  const theme = localStorage.getItem("color-theme") || "light";
  event.detail.parameters = {
    ...event.detail.parameters,
    currentTheme: theme,
  };
});

document.body.addEventListener("htmx:afterSwap", function (event) {
  updateFullscreen();

  // Use the response data to determine the current theme
  const response = event.detail.xhr.response;
  const currentTheme = response.currentTheme || "light";

  // Update the icon based on the current theme
  updateThemeToggleIcons(currentTheme === "dark");
});
