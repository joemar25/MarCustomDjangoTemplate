// theme_options_controller.js

import { themeChange } from "theme-change";

// Object to store slider values
const sliderValues = {};

// Function to load theme options
export function loadThemeOptions() {
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
  ];

  const settingsThemeSelector = document.getElementById("theme-selector");

  if (typeof Storage !== "undefined") {
    const currentTheme = localStorage.getItem("theme");
    settingsThemeSelector.innerHTML = "";

    themeValues.forEach((theme) => {
      const option = document.createElement("option");
      option.value = theme;
      option.text = theme;

      if (theme === currentTheme) {
        option.selected = true;
      }

      settingsThemeSelector.appendChild(option);
    });

    const noneOption = document.createElement("option");
    noneOption.value = "none";
    noneOption.text = "Theme";

    if (!themeValues.includes(currentTheme)) {
      noneOption.selected = true;
    }

    settingsThemeSelector.appendChild(noneOption);
  } else {
    console.error(
      "localStorage is not available. Theme persistence may not work."
    );
  }

  initializeContrastSliderEventListeners();
}

// Function to update color contrast
function updateColorContrast(value) {
  const contrastClassName = `contrast-[.${value}]`;
  console.log(contrastClassName);
  document.body.className =
    document.body.className.replace(/contrast-\[\.\d+\]/, "") +
    " " +
    contrastClassName;
}

// Function to update slider value in the object
function updateSliderValue(sliderId, value) {
  sliderValues[sliderId] = value;
}

// Function to set the default theme
export function setDefaultTheme() {
  const defaultTheme = "dark";

  if (typeof Storage !== "undefined") {
    localStorage.setItem("theme", defaultTheme);
    themeChange(defaultTheme);

    // Reset the contrast value to 0
    const defaultValue = 0;
    updateColorContrast(defaultValue);
    updateSliderValue("color-contrast-slider", defaultValue);

    // Also update the slider element directly
    const settingsColorContrastSlider = document.getElementById("color-contrast-slider");
    if (settingsColorContrastSlider) {
      settingsColorContrastSlider.value = defaultValue;
    }
  } else {
    console.error(
      "localStorage is not available. Theme persistence may not work."
    );
  }
}

// Function to add click event listener to the default button
export function addDefaultButtonClickEvent() {
  const defaultButton = document.getElementById("defaultButton");
  if (defaultButton) {
    defaultButton.addEventListener("click", function (event) {
      event.preventDefault();
      setDefaultTheme();
    });
  }
}

// Function to initialize contrast slider event listeners
function initializeContrastSliderEventListeners() {
  const settingsColorContrastSlider = document.getElementById(
    "color-contrast-slider"
  );

  if (settingsColorContrastSlider) {
    // Save the initial value to the sliderValues object
    const savedValue = sliderValues[settingsColorContrastSlider.id];
    settingsColorContrastSlider.value = savedValue || 0;

    settingsColorContrastSlider.addEventListener("input", function () {
      const contrastValue = this.value;
      updateColorContrast(contrastValue);
      updateSliderValue(this.id, contrastValue);
    });
  }
}

// Function to handle htmx afterSwap event for contrast
function handleAfterSwapForContrast(event) {
  initializeContrastSliderEventListeners();
}

// Set up the listener for htmx:afterSwap for contrast
document.body.addEventListener("htmx:afterSwap", handleAfterSwapForContrast);

// Initialize the page
loadThemeOptions();
setDefaultTheme();
addDefaultButtonClickEvent();
