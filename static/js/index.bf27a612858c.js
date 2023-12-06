// this uses the ESM module syntax, you can use import instead of require

// https://www.youtube.com/watch?v=8P2xL4yWFNs for fullscreen mode of the webpage documentation
document.addEventListener("DOMContentLoaded", function () {
  let screen = document.documentElement;
  let btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    if (btn.textContent == "Go Fullscreen") {
      if (screen.requestFullscreen) {
        screen.requestFullscreen();
      } else if (screen.msRequestFullscreen) {
        screen.msRequestFullscreen();
      } else if (screen.mozRequestFullScreen) {
        screen.mozRequestFullScreen();
      } else if (screen.webkitRequestFullscreen) {
        screen.webkitRequestFullscreen();
      }

      btn.textContent = "Exit Fullscreen";
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
      btn.textContent = "Go Fullscreen";
    }
  });
});
