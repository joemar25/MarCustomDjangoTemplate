// fullscreen.js
export function initFullscreen() {
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
}

export function updateFullscreen() {
  // Logic to update fullscreen after htmx content updates
  initFullscreen();
}
