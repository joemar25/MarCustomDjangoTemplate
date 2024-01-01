// fontType.js
import selectorValue from "./data/settings_option_selector_data.json";

export function loadFontTypeOptions() {
  const fontTypeValues = selectorValue.fontType;
  const fontTypeSelector = document.getElementById("font-type-selector");

  fontTypeSelector.innerHTML = "";

  fontTypeValues.forEach((fontType) => {
    const option = document.createElement("option");
    option.value = fontType;
    option.text = fontType;

    fontTypeSelector.appendChild(option);
  });
}

export function setDefaultFontType() {
  const defaultFontType = "raleway";

  if (typeof Storage !== "undefined") {
    localStorage.setItem("fontType", defaultFontType);
    const selector = document.getElementById("font-type-selector");
    selector.value = defaultFontType;
  } else {
    console.error(
      "localStorage is not available. Font type persistence may not work."
    );
  }
}
