// fontSize.js
import selectorValue from "./data/settings_option_selector_data.json";

export function loadFontSizeOptions() {
  const fontSizeValues = selectorValue.fontSize;
  const fontSizeSelector = document.getElementById("font-size-selector");

  fontSizeSelector.innerHTML = "";

  fontSizeValues.forEach((fontSize) => {
    const option = document.createElement("option");
    option.value = fontSize;
    option.text = fontSize;

    fontSizeSelector.appendChild(option);
  });
}

export function setDefaultFontSize() {
  const defaultFontSize = "text-base";

  if (typeof Storage !== "undefined") {
    localStorage.setItem("fontSize", defaultFontSize);
    const selector = document.getElementById("font-size-selector");
    selector.value = defaultFontSize;
  } else {
    console.error(
      "localStorage is not available. Font size persistence may not work."
    );
  }
}
