// settings_controller.js

export function updateSelectionOptionTheme() {
  const themeSelect = document.getElementById("theme");
  if (themeSelect) {
    // Function to update the selected theme and theme icons
    const updateThemeInfo = () => {
      const isDarkTheme = localStorage.getItem("color-theme") === "dark";
      themeSelect.value = isDarkTheme ? "dark" : "light";
      updateThemeToggleIcons(isDarkTheme);
    };

    // Initial update
    updateThemeInfo();

    // Periodically update the selected theme and theme icons
    setInterval(updateThemeInfo, 1000); // Adjust the interval as needed
  }
}
