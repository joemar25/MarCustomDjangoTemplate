// settings_controller.js

export function saveSettings() {
    // Retrieve the selected theme from the select element
    const themeSelect = document.getElementById('theme');
    const selectedTheme = themeSelect ? themeSelect.value : 'light';
  
    // Save the selected theme to localStorage
    localStorage.setItem('color-theme', selectedTheme);
  
    // Optionally, you can trigger additional actions based on the saved settings
    // For example, update the theme toggle icons
    updateThemeToggleIcons(selectedTheme === 'dark');
  }
  