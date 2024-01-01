// contrast.js
import selectorValue from "./data/settings_option_selector_data.json";

export function loadContrastOptions() {
  const contrastValues = selectorValue.contrast;
  const contrastSelector = document.getElementById("contrast-selector");

  contrastSelector.innerHTML = "";

  contrastValues.forEach((contrast) => {
    const option = document.createElement("option");
    option.value = contrast;
    option.text = contrast;

    contrastSelector.appendChild(option);
  });
}

export function setDefaultContrast() {
  const defaultContrast = "normal";

  if (typeof Storage !== "undefined") {
    localStorage.setItem("contrast", defaultContrast);
    const selector = document.getElementById("contrast-selector");
    selector.value = defaultContrast;
  } else {
    console.error(
      "localStorage is not available. Contrast persistence may not work."
    );
  }
}
