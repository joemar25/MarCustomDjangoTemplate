// main.js

const toggleFullscreen = () => {
  const screen = document.documentElement;

  if (
    !document.fullscreenElement &&
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement
  ) {
    if (screen.requestFullscreen) {
      screen.requestFullscreen();
    } else if (screen.msRequestFullscreen) {
      screen.msRequestFullscreen();
    } else if (screen.mozRequestFullScreen) {
      screen.mozRequestFullScreen();
    } else if (screen.webkitRequestFullscreen) {
      screen.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
};

const attachFullscreenClickEvent = () => {
  const fullscreenBtn = document.getElementById("fullscreen-btn");
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", toggleFullscreen);
  }
};

// Function to load dark mode script
const loadDarkModeScript = () => {
  const darkModeScript = document.createElement("script");
  darkModeScript.src = "{% static 'js/dark_mode.js' %}";
  document.body.appendChild(darkModeScript);
};

// Listen for htmx events to re-bind the click event and load dark mode script after content updates
document.body.addEventListener("htmx:afterSwap", function (event) {
  // Re-bind the click event after content updates
  attachFullscreenClickEvent();
  // Load dark mode script after content updates
  loadDarkModeScript();
});

// Initial binding
attachFullscreenClickEvent();
