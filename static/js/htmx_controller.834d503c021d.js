import { initFullscreen, updateFullscreen } from "./full_screen_controller.js";
document.addEventListener("DOMContentLoaded", function () {
  // Initial dark mode and fullscreen setup
  initFullscreen();

  // Theme controller
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Check for saved theme preference
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    body.classList.add(currentTheme);
  }

  // Toggle theme function
  function toggleTheme() {
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  // Event listener for theme toggle button
  themeToggle.addEventListener("click", toggleTheme);
});

document.body.addEventListener("htmx:afterSwap", function (event) {
  updateFullscreen();
});
