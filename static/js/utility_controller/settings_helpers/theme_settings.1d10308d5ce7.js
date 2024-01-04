// file: theme_settings.js

import { themeChange } from "theme-change";
import selectorValue from "./data/settings_option_selector_data.json";

const KEY = "theme";
const DEFAULT_VALUE = "dim";
const SELECTOR_ID = "theme-selector";
const ERR_MSG = "localStorage is not available";

export function initThemeOptions() {
  const themeValues = selectorValue.themes;
  const settingsThemeSelector = document.getElementById(SELECTOR_ID);

  if (typeof Storage !== "undefined") {
    const currentTheme = localStorage.getItem(KEY);
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
    console.error(ERR_MSG);
  }
}

export function setDefaultTheme() {
  const defaultValue = DEFAULT_VALUE;

  if (typeof Storage !== "undefined") {
    localStorage.setItem(KEY, defaultValue);
    themeChange(defaultValue);
  } else {
    console.error(ERR_MSG);
  }
}
