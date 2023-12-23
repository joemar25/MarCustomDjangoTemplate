// settings_controller.js

export function updateThemeSelection() {
    const themeSelect = document.getElementById('theme');
    if (themeSelect) {
      themeSelect.value = localStorage.getItem('color-theme') || 'light';
    }
  }
  