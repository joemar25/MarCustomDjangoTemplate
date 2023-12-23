// settings_controller.js

export function initSettings() {
  const saveButton = document.getElementById("save-button");

  if (saveButton) {
    saveButton.addEventListener("click", saveChanges);
  }
}

export function saveChanges() {
  console.log("Changes saved!");
}
