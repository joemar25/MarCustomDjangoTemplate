// settings_controller.js

export function updateThemeSelection() {
    const themeSelect = document.getElementById('theme');
    if (themeSelect) {
      // Function to update the selected theme
      const updateSelectedTheme = () => {
        themeSelect.value = localStorage.getItem('color-theme') || 'light';
      };
  
      // Initial update
      updateSelectedTheme();
  
      // Periodically update the selected theme and theme icons
      setInterval(() => {
        updateSelectedTheme();
        updateThemeToggleIcons(localStorage.getItem("color-theme") === "dark");
      }, 1000); // Adjust the interval as needed
    }
  }
  