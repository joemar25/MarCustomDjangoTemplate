let darkModeInitialized = false;

export function initDarkMode() {
  console.log("Init Dark mode");
  if (!darkModeInitialized) {
    darkModeInitialized = true;

    const currentTheme = localStorage.getItem("color-theme");
    const darkModeEnabled =
      currentTheme === "dark" ||
      (!currentTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    toggleDarkMode(darkModeEnabled);

    document
      .getElementById("theme-toggle")
      .addEventListener("click", handleDarkModeToggle);
  }
}

function toggleDarkMode(enabled) {
  document.documentElement.classList.toggle("dark", enabled);

  const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  const themeToggleLightIcon = document.getElementById(
    "theme-toggle-light-icon"
  );

  themeToggleDarkIcon.classList.toggle("hidden", enabled);
  themeToggleLightIcon.classList.toggle("hidden", !enabled);
}

function handleDarkModeToggle() {
  const darkModeEnabled = document.documentElement.classList.contains("dark");
  toggleDarkMode(!darkModeEnabled);
  localStorage.setItem("color-theme", darkModeEnabled ? "light" : "dark");
}
