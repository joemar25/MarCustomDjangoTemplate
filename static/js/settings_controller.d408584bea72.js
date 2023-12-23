// settings_controller.js

document.addEventListener("DOMContentLoaded", function () {
  setupHtmxEventListeners();
  initSettings();
});

function setupHtmxEventListeners() {
  document.body.addEventListener("htmx:afterSwap", function (event) {
    // Update theme selection based on saved preference
    const savedTheme = localStorage.getItem("color-theme");
    const themeSelect = document.getElementById("theme");
    if (themeSelect) {
      themeSelect.value = savedTheme || "light";
    }
  });
}

export function initSettings() {
  // Initialize the settings modal
  const settingsModal = document.getElementById("settings_modal");
  if (settingsModal) {
    // Attach event listener to handle the save button click
    const saveButton = settingsModal.querySelector(".bg-blue-500");
    if (saveButton) {
      saveButton.addEventListener("click", saveChanges);
    }
  }
}

function saveChanges() {
  // Get the selected theme value
  const themeSelect = document.getElementById("theme");
  const selectedTheme = themeSelect ? themeSelect.value : "light";

  // Save the selected theme to localStorage
  localStorage.setItem("color-theme", selectedTheme);

  // Close the settings modal
  closeSettingsModal();
}

function closeSettingsModal() {
  const settingsModal = document.getElementById("settings_modal");
  if (settingsModal) {
    settingsModal.close();
  }
}
