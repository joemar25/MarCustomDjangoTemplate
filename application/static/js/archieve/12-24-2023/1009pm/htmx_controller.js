// htmx_controller.js
import { themeChange } from "theme-change";
import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";

// Function to handle htmx afterSwap event
function handleAfterSwap(event) {
  console.log("htmx:afterSwap event triggered");
  // Assuming themeChange has a function to toggle themes
  themeChange(); // Adjust this based on the actual API of theme-change
  updateFullscreen();
  setupHtmxEventListeners();

  // Load theme options after htmx page load
  loadThemeOptions();
}

// Function to set up htmx event listeners
function setupHtmxEventListeners() {
  console.log("Setting up htmx event listeners");
  // Remove existing event listeners before adding new ones
  document.body.removeEventListener("htmx:afterSwap", handleAfterSwap);
  document.body.addEventListener("htmx:afterSwap", handleAfterSwap);

  // Add your dynamic content initialization here if needed
}

// Function to load theme options
function loadThemeOptions() {
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

  const settingsThemeSelector = document.getElementById("theme-selector");
  // const navigationThemeSelector = document.getElementById("nav-theme-selector");

  // Check if localStorage is available and accessible
  if (typeof Storage !== "undefined") {
    // Retrieve the current theme from localStorage
    const currentTheme = localStorage.getItem("theme");

    // Clear existing options
    settingsThemeSelector.innerHTML = "";
    // navigationThemeSelector.innerHTML = "";

    // Add theme options
    themeValues.forEach((theme) => {
      const option = document.createElement("option");
      option.value = theme;
      option.text = theme;

      // Set the selected attribute if it's the current theme
      if (theme === currentTheme) {
        option.selected = true;
      }

      settingsThemeSelector.appendChild(option);
      // navigationThemeSelector.appendChild(option.cloneNode(true)); // Clone the option for the navigation selector
    });

    // Add a "none" option to the navigation theme selector
    const noneOption = document.createElement("option");
    noneOption.value = "none";
    noneOption.text = "Theme";

    // Set the selected attribute if the current theme is not in the list
    if (!themeValues.includes(currentTheme)) {
      noneOption.selected = true;
    }

    // navigationThemeSelector.appendChild(noneOption);
  } else {
    console.error(
      "localStorage is not available. Theme persistence may not work."
    );
  }
}

// Function to initialize the page
function initializePage() {
  console.log("Page loaded");
  initFullscreen();
  setupHtmxEventListeners();
  themeChange(false); // Initialize the theme-change

  // Load theme options on the initial page load
  loadThemeOptions();
}

// Initial page load
initializePage();

// Handle htmx navigation for subsequent page loads
document.body.addEventListener("htmx:load", function () {
  initializePage();
});

// Handle theme change event (if the library provides a callback)
themeChange(); // Replace with the actual function or event provided by theme-change
