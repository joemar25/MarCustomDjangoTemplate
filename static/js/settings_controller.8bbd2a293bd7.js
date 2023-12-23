// settings_controller.js

export function updateThemeSelection() {
    const themeSelect = document.getElementById('theme');
    if (themeSelect) {
      // Function to update the selected theme and theme icons
      const updateThemeSelectionAndIcons = () => {
        themeSelect.value = localStorage.getItem('color-theme') || 'light';
        updateThemeToggleIcons(localStorage.getItem("color-theme") === "dark");
      };
  
      // Initial update
      updateThemeSelectionAndIcons();
  
      // Listen for the htmx:afterSettle event to update the selected theme and theme icons
      document.body.addEventListener("htmx:afterSettle", function (event) {
        updateThemeSelectionAndIcons();
      });
    }
  }
  