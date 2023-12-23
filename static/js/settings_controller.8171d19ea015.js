// settings_controller.js

export function updateThemeSelection(callback) {
    const themeSelect = document.getElementById('theme');
    if (themeSelect) {
      themeSelect.value = localStorage.getItem('color-theme') || 'light';
      if (typeof callback === 'function') {
        callback();
      }
    }
  }
  