// htmx controller.js

import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import {
  initTheme,
  updateThemeToggleIcons,
} from "./dark_mode_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  initFullscreen();
  initTheme();
  updateThemeToggleIcons(localStorage.getItem("color-theme") === "dark");
});

document.body.addEventListener("htmx:afterSwap", function (event) {
  updateFullscreen();
  updateThemeToggleIcons(localStorage.getItem("color-theme") === "dark");
});
