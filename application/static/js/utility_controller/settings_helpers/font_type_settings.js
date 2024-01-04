// file: font_type_settings.js

import selectorValue from "./data/settings_option_selector_data.json";

const KEY = "fontType";
const DEFAULT_VALUE = "raleway";
const SELECTOR_ID = "font-type-selector";
const ERR_MSG = "localStorage is not available";

export function initFontTypeOptions() {
  // change the selector value type
  const typeValues = selectorValue.fontType;
  const typeSelector = document.getElementById(SELECTOR_ID);

  if (typeof Storage !== "undefined") {
    const currentType = localStorage.getItem(KEY);
    const bodyClasses = document.body.classList;

    // If the currentType is not in the body classes, add it
    if (
      !bodyClasses.contains(currentType) &&
      typeValues.includes(currentType)
    ) {
      document.body.classList.add(currentType);
    }

    typeSelector.innerHTML = "";

    typeValues.forEach((fontType) => {
      const option = document.createElement("option");
      option.value = fontType;
      option.text = fontType;

      if (fontType === currentType) {
        option.selected = true;
      }

      typeSelector.appendChild(option);
    });

    // Check if selectedType is not undefined before adding the event listener
    if (currentType !== undefined) {
      // Add an event listener to the font type selector
      typeSelector.addEventListener("change", function () {
        const selectedType = typeSelector.value;
        applyFontType(selectedType);
      });
    }

    // Ensure that applyFontType is called initially to set the font type during page load
    applyFontType(currentType);
  } else {
    console.error(ERR_MSG);
  }
}

export function setDefaultFontType() {
  const defaultValue = DEFAULT_VALUE;

  if (typeof Storage !== "undefined") {
    localStorage.setItem(KEY, defaultValue);
    applyFontType(defaultValue);
  } else {
    console.error(ERR_MSG);
  }
}

function applyFontType(selectedType) {
  const typeSelector = document.getElementById(SELECTOR_ID);

  // Get all available font types from selectorValue
  const allFontTypes = selectorValue.fontType;

  // Remove all font type classes from the body
  document.body.classList.remove(...allFontTypes);

  // Set the selected font type to the default value if it is falsy or "default"
  selectedType = selectedType || DEFAULT_VALUE;

  // Add the new font type class to the body
  document.body.classList.add(selectedType);

  // Save the selected font type to local storage for persistence
  if (typeof Storage !== "undefined") {
    localStorage.setItem(KEY, selectedType);
  } else {
    console.error(ERR_MSG);
  }

  // Set the selected font type in the selector
  typeSelector.value = selectedType;
}

export function updateFontType() {
  initFontTypeOptions();
}
