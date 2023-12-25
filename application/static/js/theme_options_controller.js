// theme_options_controller.js

import { themeChange } from "theme-change";

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
    console.error("localStorage is not available. Theme persistence may not work.");
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
  localStorage.setItem(sliderId, value);
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

      // Trigger the input event to ensure the value is updated in the HTML
      const inputEvent = new Event("input", { bubbles: true, cancelable: true });
      settingsColorContrastSlider.dispatchEvent(inputEvent);
    }
  } else {
    console.error("localStorage is not available. Theme persistence may not work.");
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
export function initializeContrastSliderEventListeners() {
  const settingsColorContrastSlider = document.getElementById("color-contrast-slider");

  if (settingsColorContrastSlider) {
    // Save the initial value to the sliderValues object
    const savedValue = localStorage.getItem(settingsColorContrastSlider.id);
    settingsColorContrastSlider.value = savedValue || 0;

    settingsColorContrastSlider.addEventListener("input", function () {
      const contrastValue = this.value;
      updateColorContrast(contrastValue);
      updateSliderValue(this.id, contrastValue);
    });

    // Trigger the input event to ensure the value is updated in the HTML
    const inputEvent = new Event("input", { bubbles: true, cancelable: true });
    settingsColorContrastSlider.dispatchEvent(inputEvent);
  }
}