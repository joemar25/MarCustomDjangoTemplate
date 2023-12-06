// this uses the ESM module syntax, you can use import instead of require

// https://www.youtube.com/watch?v=8P2xL4yWFNs for fullscreen mode of the webpage documentation
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
  const fullscreenBtn = document.getElementById("fullscreen-btn");
  fullscreenBtn.addEventListener("click", toggleFullscreen);

  // Listen for htmx events to re-bind the click event after content updates
  document.body.addEventListener("htmx:afterSwap", function (event) {
    // Check if the updated content contains the fullscreen button
    const updatedFullscreenBtn =
      event.detail.querySelectorAll("#fullscreen-btn");

    // If the button is found in the updated content, bind the click event
    if (updatedFullscreenBtn.length > 0) {
      updatedFullscreenBtn[0].addEventListener("click", toggleFullscreen);
    }
  });
});
