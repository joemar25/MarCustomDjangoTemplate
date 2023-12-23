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

    // Periodically update the selected theme
    setInterval(updateSelectedTheme, 1000); // Adjust the interval as needed
  }
}
