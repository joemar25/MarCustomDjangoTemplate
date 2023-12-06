// this uses the ESM module syntax, you can use import instead of require

// https://www.youtube.com/watch?v=8P2xL4yWFNs for fullscreen mode of the webpage documentation
document.addEventListener("DOMContentLoaded", function () {
  let screen = document.documentElement;
  let fullscreenBtn = document.getElementById("fullscreen-btn");

  fullscreenBtn.addEventListener("click", () => {
    if (fullscreenBtn.textContent == "Go Fullscreen") {
      if (screen.requestFullscreen) {
        screen.requestFullscreen();
      } else if (screen.msRequestFullscreen) {
        screen.msRequestFullscreen();
      } else if (screen.mozRequestFullScreen) {
        screen.mozRequestFullScreen();
      } else if (screen.webkitRequestFullscreen) {
        screen.webkitRequestFullscreen();
      }

      fullscreenBtn.textContent = "Exit Fullscreen";
    } else {
      if (screen.exitFullscreen) {
        screen.exitFullscreen();
      } else if (screen.msexitFullscreen) {
        screen.msexitFullscreen();
      } else if (screen.mozexitFullScreen) {
        screen.mozexitFullScreen();
      } else if (screen.webkitexitFullscreen) {
        screen.webkitexitFullscreen();
      }
      fullscreenBtn.textContent = "Go Fullscreen";
    }
  });
});
