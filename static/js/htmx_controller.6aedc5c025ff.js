// htmx_controller.js
import { themeChange } from "theme-change";
import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";

window.onload = function () {
  const themeValues = [
    "dark",
    "light",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  const themeSelector = document.getElementById("theme-selector");

  themeValues.forEach((theme) => {
    const option = document.createElement("option");
    option.value = theme;
    option.text = theme;
    themeSelector.appendChild(option);
  });
};

// Function to handle htmx afterSwap event
function handleAfterSwap(event) {
  console.log("htmx:afterSwap event triggered");
  // Assuming themeChange has a function to toggle themes
  themeChange.toggleTheme(); // Adjust this based on the actual API of theme-change
  updateFullscreen();
  setupHtmxEventListeners();
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded event triggered");
  initFullscreen();
  setupHtmxEventListeners();

  // Check if themeChange has an init function
  themeChange(); // Initialize the theme-change
});

// Function to set up htmx event listeners
function setupHtmxEventListeners() {
  console.log("Setting up htmx event listeners");
  // Remove existing event listeners before adding new ones
  document.body.removeEventListener("htmx:afterSwap", handleAfterSwap);
  document.body.addEventListener("htmx:afterSwap", handleAfterSwap);
}
