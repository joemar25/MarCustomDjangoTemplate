// dark_mode.js

function setDarkModeIconVisibility() {
  var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

  // Change the icons inside the button based on current settings
  if (
    document.documentElement.classList.contains('dark') ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    themeToggleDarkIcon.classList.add('hidden');
    themeToggleLightIcon.classList.remove('hidden');
  } else {
    themeToggleDarkIcon.classList.remove('hidden');
    themeToggleLightIcon.classList.add('hidden');
  }
}

export function initDarkMode() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  setDarkModeIconVisibility();

  var themeToggleBtn = document.getElementById('theme-toggle');

  themeToggleBtn.addEventListener('click', function () {
    // toggle icons inside button
    document.documentElement.classList.toggle('dark');

    // Update icon visibility after toggling dark mode
    setDarkModeIconVisibility();

    // Save the theme preference in local storage
    localStorage.setItem(
      'color-theme',
      document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );
  });
}

export function updateDarkMode() {
  // Update dark mode after htmx content updates
  initDarkMode();
}
