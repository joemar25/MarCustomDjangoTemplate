document.addEventListener("DOMContentLoaded", function () {
  const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

  const toggleDarkMode = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', prefersDarkMode);

    if (prefersDarkMode) {
      themeToggleLightIcon.classList.add('hidden');
      themeToggleDarkIcon.classList.remove('hidden');
    } else {
      themeToggleDarkIcon.classList.add('hidden');
      themeToggleLightIcon.classList.remove('hidden');
    }
  };

  // Initial visibility setup based on the current theme
  toggleDarkMode();

  // Listen for htmx events to update dark mode after content updates
  document.body.addEventListener('htmx:afterSwap', function (event) {
    // Update dark mode after content updates
    toggleDarkMode();
  });
});