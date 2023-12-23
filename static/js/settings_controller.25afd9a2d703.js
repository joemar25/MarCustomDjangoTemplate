// settings_controller.js

export function initSettings() {
    const saveButton = document.getElementById("save-button");
  
    if (saveButton) {
      saveButton.addEventListener("click", saveChanges);
    }
  
    const themeSelect = document.getElementById("theme");
  
    if (themeSelect) {
      // Add event listener to the theme select
      themeSelect.addEventListener("change", function () {
        // Update the theme in real-time when the user changes the option
        updateTheme(themeSelect.value);
      });
    }
  }
  
  export function saveChanges() {
    console.log("Changes saved!");
  }
  
  export function updateTheme(selectedTheme) {
    // Implement your logic to apply the selected theme
    console.log("Theme updated to:", selectedTheme);
  
    // You can further extend this function to apply the theme to your application
    // For example, you might want to update the class of the body element
    // document.body.classList.toggle("dark", selectedTheme === "dark");
  }
  