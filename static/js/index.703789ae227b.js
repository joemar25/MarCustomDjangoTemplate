// All of the js file here uses the ESM module syntax, you can use import instead of require.
/* 
This is the inpiration for the fullscreen function in the webpage:
https://www.youtube.com/watch?v=8P2xL4yWFNs for fullscreen mode of the webpage documentation.

note: I have fully created a new modification that suit for the new technology using the htmx library.
*/
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

// Listen for htmx events to re-bind the click event after content updates
document.body.addEventListener("htmx:afterSwap", function (event) {
  // Re-bind the click event after content updates
  attachFullscreenClickEvent();
});

// Include dark mode script after content updates
const includeDarkModeScript = () => {
  const darkModeScript = document.createElement("script");
  darkModeScript.src = "{% static 'js/dark_mode.js' %}";
  document.body.appendChild(darkModeScript);
};

// Initial binding
attachFullscreenClickEvent();
includeDarkModeScript();
