// settings_controller.js

export function updateThemeSelection() {
  document.body.addEventListener("htmx:afterSwap", function () {
    var currentTheme = localStorage.getItem("color-theme");
    var themeSelect = document.getElementById("theme");
    themeSelect.value = currentTheme;
  });
}
