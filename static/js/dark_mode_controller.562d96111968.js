export function initDarkMode() {
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  updateDarkMode();
}

export function toggleDarkMode() {
  const darkModeEnabled = document.documentElement.classList.contains("dark");

  document.documentElement.classList.toggle("dark", !darkModeEnabled);

  localStorage.setItem("color-theme", darkModeEnabled ? "light" : "dark");

  updateDarkMode();
}

export function updateDarkMode() {
  const themeToggleButton = document.getElementById("theme-toggle");
  const darkModeEnabled = document.documentElement.classList.contains("dark");

  if (themeToggleButton) {
    themeToggleButton.textContent = darkModeEnabled
      ? "Toggle Light Mode"
      : "Toggle Dark Mode";
  } else {
    console.warn("Element not found: #theme-toggle");
  }
}
