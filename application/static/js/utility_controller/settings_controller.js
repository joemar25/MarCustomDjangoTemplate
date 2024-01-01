// settings_controller.js

import {
  loadThemeOptions,
  setDefaultTheme,
} from "./settings_helpers/theme_settings.js";
import {
  loadFontSizeOptions,
  setDefaultFontSize,
} from "./settings_helpers/font_size_settings.js";
import {
  loadFontTypeOptions,
  setDefaultFontType,
} from "./settings_helpers/font_type_settings.js";
import {
  loadContrastOptions,
  setDefaultContrast,
} from "./settings_helpers/contrast_settings.js";

/**
 * This is a default settings function to add click event listener
 * to set the default values to the settings.
 * */

function defaultButtonClickEvent() {
  const defaultButton = document.getElementById("defaultButton");
  if (defaultButton) {
    defaultButton.addEventListener("click", function (event) {
      event.preventDefault();
      setDefaultTheme();
      setDefaultFontSize();
      setDefaultFontType();
      setDefaultContrast();
    });
  }
}

// Export those import when settings_controller.js is imported
export {
  loadThemeOptions,
  loadFontSizeOptions,
  loadFontTypeOptions,
  loadContrastOptions,
  defaultButtonClickEvent,
};
