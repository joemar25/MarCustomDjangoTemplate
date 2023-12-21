// All of the js file here uses the ESM module syntax, you can use import instead of require.

import "./dark_mode";

/* 
This is the inpiration for the fullscreen function in the webpage:
https://www.youtube.com/watch?v=8P2xL4yWFNs for fullscreen mode of the webpage documentation.

note: I have fully created a new modification that suit for the new technology using the htmx library.
*/
document.addEventListener("DOMContentLoaded", function () {
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

  // Attach the click event listener to the button
  const attachFullscreenClickEvent = () => {
    const fullscreenBtn = document.getElementById("fullscreen-btn");
    if (fullscreenBtn) {
      fullscreenBtn.addEventListener("click", toggleFullscreen);
    }
  };

  // Initial binding
  attachFullscreenClickEvent();

  // Listen for htmx events to re-bind the click event after content updates
  document.body.addEventListener("htmx:afterSwap", function (event) {
    // Re-bind the click event after content updates
    attachFullscreenClickEvent();
  });
});
