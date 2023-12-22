import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
import {
  initDarkMode,
  updateThemeToggleIcons,
} from "./dark_mode_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  initFullscreen();
  initDarkMode();
});

document.body.addEventListener("htmx:afterSwap", function (event) {
  // Detach event listeners
  const themeToggleButton = document.getElementById("theme-toggle");
  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const lightIcon = document.getElementById("theme-toggle-light-icon");

  themeToggleButton.removeEventListener("click", handleDarkModeToggle);
  darkIcon.removeEventListener("click", handleDarkIconClick);
  lightIcon.removeEventListener("click", handleLightIconClick);

  // Reattach event listeners
  themeToggleButton.addEventListener("click", handleDarkModeToggle);
  darkIcon.addEventListener("click", handleDarkIconClick);
  lightIcon.addEventListener("click", handleLightIconClick);

  // Update icons based on the current theme
  updateThemeToggleIcons(localStorage.getItem("color-theme") === "dark");
});

function handleDarkModeToggle(event) {
  const themeToggleButton = document.getElementById("theme-toggle");
  const darkModeEnabled = document.documentElement.classList.contains("dark");
  document.documentElement.classList.toggle("dark", !darkModeEnabled);
  updateThemeToggleIcons(!darkModeEnabled);
  updateLocalStorageTheme(!darkModeEnabled);
}

function handleDarkIconClick() {
  document.documentElement.classList.add("dark");
  updateLocalStorageTheme(true);
  updateThemeToggleIcons(true);
}

function handleLightIconClick() {
  document.documentElement.classList.remove("dark");
  updateLocalStorageTheme(false);
  updateThemeToggleIcons(false);
}