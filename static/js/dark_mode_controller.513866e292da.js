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

  // updateDarkModeIcons();
}

export function toggleDarkMode() {
  const darkModeEnabled = document.documentElement.classList.contains("dark");

  // updateDarkModeIcons();

  // toggle dark mode class on the document element
  document.documentElement.classList.toggle("dark", !darkModeEnabled);

  // update local storage
  localStorage.setItem("color-theme", darkModeEnabled ? "light" : "dark");

  // update button text
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

// function updateDarkModeIcons() {
//   const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
//   const themeToggleLightIcon = document.getElementById(
//     "theme-toggle-light-icon"
//   );
//   const darkModeEnabled = document.documentElement.classList.contains("dark");
//   // Change the icons inside the button based on current dark mode setting
//   if (darkModeEnabled) {
//     themeToggleLightIcon.classList.remove("hidden");
//     themeToggleDarkIcon.classList.add("hidden");
//   } else {
//     themeToggleDarkIcon.classList.remove("hidden");
//     themeToggleLightIcon.classList.add("hidden");
//   }
// }
