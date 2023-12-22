// fullscreen_controller.js

export function initFullscreen() {
  const toggleFullscreen = () => {
    const screen = document.documentElement;

    if (!document.fullscreenElement) {
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
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", toggleFullscreen);
  }
}

export function updateFullscreen() {
  // Directly toggle fullscreen mode
  toggleFullscreen();
}
