// settings_controller.js

import { updateLocalStorageTheme } from "./dark_mode_controller.js";

export function initSettings() {
  const saveButton = document.getElementById("save-button");

  if (saveButton) {
    saveButton.addEventListener("click", handleSaveChanges);
  }
}

function handleSaveChanges() {
  const themeSelect = document.getElementById("theme");

  if (themeSelect) {
    const selectedTheme = themeSelect.value;
    updateLocalStorageTheme(selectedTheme);
  }

}
