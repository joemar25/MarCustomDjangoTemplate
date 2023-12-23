// settings_controller.js

export function updateSelectionOptionTheme() {
    const themeSelect = document.getElementById('theme');
    if (themeSelect) {
      // Function to update the selected theme and theme icons
      const updateThemeSelectionAndIcons = () => {
        themeSelect.value = localStorage.getItem('color-theme') || 'light';
        updateThemeToggleIcons(localStorage.getItem("color-theme") === "dark");
      };
  
      // Initial update
      updateThemeSelectionAndIcons();
  
      // Listen for the htmx:afterSwap event to update the selected theme and theme icons
      document.body.addEventListener("htmx:afterSwap", function (event) {
        updateThemeSelectionAndIcons();
      });
    }
  }
  