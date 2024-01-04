// theme.js
import { themeChange } from "theme-change";
import selectorValue from "./data/settings_option_selector_data.json";

export function initThemeOptions() {
  const themeValues = selectorValue.themes;
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
  } else {
    console.error(
      "localStorage is not available. Theme persistence may not work."
    );
  }
}

export function setDefaultTheme() {
  const defaultTheme = "dark";

  if (typeof Storage !== "undefined") {
    localStorage.setItem("theme", defaultTheme);
    themeChange(defaultTheme);
  } else {
    console.error(
      "localStorage is not available. Theme persistence may not work."
    );
  }
}
