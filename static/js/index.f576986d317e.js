// this uses the ESM module syntax, you can use import instead of require

// https://www.youtube.com/watch?v=8P2xL4yWFNs for fullscreen mode of the webpage documentation
let myDocument = document.documentElement;
let btn = document.getElementById("btn");

btn.addEventListener("click", ()=> {
  if (btn.textContent == "Go Fullscreen") {
    btn.textContent = "Exit Fullscreen";
  } else {
    btn.textContent = "Go Fullscreen";
  }
});
