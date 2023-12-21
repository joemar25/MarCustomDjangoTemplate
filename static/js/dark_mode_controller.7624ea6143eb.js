// dark_mode.js

function setDarkModeIconVisibility(isDarkMode) {
  var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

  // Update icon visibility based on the dark mode state
  themeToggleDarkIcon.classList.toggle('hidden', isDarkMode);
  themeToggleLightIcon.classList.toggle('hidden', !isDarkMode);
}

export function initDarkMode() {
  // Retrieve the initial dark mode state from the button's attribute
  var initialDarkMode = document.getElementById('theme-toggle').getAttribute('data-initial-dark-mode') === 'true';

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  var isDarkMode =
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches) ||
    initialDarkMode;

  document.documentElement.classList.toggle('dark', isDarkMode);

  setDarkModeIconVisibility(isDarkMode);

  var themeToggleBtn = document.getElementById('theme-toggle');

  themeToggleBtn.addEventListener('click', function () {
    // Toggle dark mode and update the variable
    isDarkMode = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', isDarkMode);

    // Update icon visibility after toggling dark mode
    setDarkModeIconVisibility(isDarkMode);

    // Save the theme preference in local storage
    localStorage.setItem('color-theme', isDarkMode ? 'dark' : 'light');
  });
}

export function updateDarkMode() {
  // Update dark mode after htmx content updates
  initDarkMode();
}
