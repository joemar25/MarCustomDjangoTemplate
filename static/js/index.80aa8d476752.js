/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/theme-change/index.js":
/*!********************************************!*\
  !*** ./node_modules/theme-change/index.js ***!
  \********************************************/
/***/ ((module) => {

function themeToggle(){var toggleEl=document.querySelector("[data-toggle-theme]");var dataKey=toggleEl?toggleEl.getAttribute("data-key"):null;(function(theme=localStorage.getItem(dataKey?dataKey:"theme")){if(localStorage.getItem(dataKey?dataKey:"theme")){document.documentElement.setAttribute("data-theme",theme);if(toggleEl){[...document.querySelectorAll("[data-toggle-theme]")].forEach(el=>{el.classList.add(toggleEl.getAttribute("data-act-class"))})}}})();if(toggleEl){[...document.querySelectorAll("[data-toggle-theme]")].forEach(el=>{el.addEventListener("click",function(){var themesList=el.getAttribute("data-toggle-theme");if(themesList){var themesArray=themesList.split(",");if(document.documentElement.getAttribute("data-theme")==themesArray[0]){if(themesArray.length==1){document.documentElement.removeAttribute("data-theme");localStorage.removeItem(dataKey?dataKey:"theme")}else{document.documentElement.setAttribute("data-theme",themesArray[1]);localStorage.setItem(dataKey?dataKey:"theme",themesArray[1])}}else{document.documentElement.setAttribute("data-theme",themesArray[0]);localStorage.setItem(dataKey?dataKey:"theme",themesArray[0])}}[...document.querySelectorAll("[data-toggle-theme]")].forEach(el=>{el.classList.toggle(this.getAttribute("data-act-class"))})})})}}function themeBtn(){var btnEl=document.querySelector("[data-set-theme='']");var dataKey=btnEl?btnEl.getAttribute("data-key"):null;(function(theme=localStorage.getItem(dataKey?dataKey:"theme")){if(theme!=undefined&&theme!=""){if(localStorage.getItem(dataKey?dataKey:"theme")&&localStorage.getItem(dataKey?dataKey:"theme")!=""){document.documentElement.setAttribute("data-theme",theme);var btnEl=document.querySelector("[data-set-theme='"+theme.toString()+"']");if(btnEl){[...document.querySelectorAll("[data-set-theme]")].forEach(el=>{el.classList.remove(el.getAttribute("data-act-class"))});if(btnEl.getAttribute("data-act-class")){btnEl.classList.add(btnEl.getAttribute("data-act-class"))}}}else{var btnEl=document.querySelector("[data-set-theme='']");if(btnEl.getAttribute("data-act-class")){btnEl.classList.add(btnEl.getAttribute("data-act-class"))}}}})();[...document.querySelectorAll("[data-set-theme]")].forEach(el=>{el.addEventListener("click",function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme"));localStorage.setItem(dataKey?dataKey:"theme",document.documentElement.getAttribute("data-theme"));[...document.querySelectorAll("[data-set-theme]")].forEach(el=>{el.classList.remove(el.getAttribute("data-act-class"))});if(el.getAttribute("data-act-class")){el.classList.add(el.getAttribute("data-act-class"))}})})}function themeSelect(){var selectEl=document.querySelector("select[data-choose-theme]");var dataKey=selectEl?selectEl.getAttribute("data-key"):null;(function(theme=localStorage.getItem(dataKey?dataKey:"theme")){if(localStorage.getItem(dataKey?dataKey:"theme")){document.documentElement.setAttribute("data-theme",theme);var optionToggler=document.querySelector("select[data-choose-theme] [value='"+theme.toString()+"']");if(optionToggler){[...document.querySelectorAll("select[data-choose-theme] [value='"+theme.toString()+"']")].forEach(el=>{el.selected=true})}}})();if(selectEl){[...document.querySelectorAll("select[data-choose-theme]")].forEach(el=>{el.addEventListener("change",function(){document.documentElement.setAttribute("data-theme",this.value);localStorage.setItem(dataKey?dataKey:"theme",document.documentElement.getAttribute("data-theme"));[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem(dataKey?dataKey:"theme")+"']")].forEach(el=>{el.selected=true})})})}}function themeChange(attach=true){if(attach===true){document.addEventListener("DOMContentLoaded",function(event){themeToggle();themeSelect();themeBtn()})}else{themeToggle();themeSelect();themeBtn()}}if(true){module.exports={themeChange:themeChange}}else{}

/***/ }),

/***/ "./application/static/js/full_screen_controller.js":
/*!*********************************************************!*\
  !*** ./application/static/js/full_screen_controller.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initFullscreen: () => (/* binding */ initFullscreen),
/* harmony export */   updateFullscreen: () => (/* binding */ updateFullscreen)
/* harmony export */ });
// fullscreen_controller.js

function initFullscreen() {
  // Attach the click event listener to the button
  const fullscreenBtn = document.getElementById("fullscreen-btn");
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", toggleFullscreen);
  }
}

function toggleFullscreen() {
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
}

function updateFullscreen() {
  // Logic to update fullscreen after htmx content updates
  initFullscreen();
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************************************!*\
  !*** ./application/static/js/htmx_controller.js ***!
  \**************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var theme_change__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-change */ "./node_modules/theme-change/index.js");
/* harmony import */ var _full_screen_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./full_screen_controller.js */ "./application/static/js/full_screen_controller.js");
// htmx_controller.js



window.onload = function () {
  const themeValues = [
    "dark",
    "light",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  const themeSelector = document.getElementById("theme-selector");

  themeValues.forEach((theme) => {
    const option = document.createElement("option");
    option.value = theme;
    option.text = theme;
    themeSelector.appendChild(option);
  });
};

// Function to handle htmx afterSwap event
function handleAfterSwap(event) {
  console.log("htmx:afterSwap event triggered");
  // Assuming themeChange has a function to toggle themes
  theme_change__WEBPACK_IMPORTED_MODULE_0__.themeChange.toggleTheme(); // Adjust this based on the actual API of theme-change
  (0,_full_screen_controller_js__WEBPACK_IMPORTED_MODULE_1__.updateFullscreen)();
  setupHtmxEventListeners();
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded event triggered");
  (0,_full_screen_controller_js__WEBPACK_IMPORTED_MODULE_1__.initFullscreen)();
  setupHtmxEventListeners();

  // Check if themeChange has an init function
  (0,theme_change__WEBPACK_IMPORTED_MODULE_0__.themeChange)(); // Initialize the theme-change
});

// Function to set up htmx event listeners
function setupHtmxEventListeners() {
  console.log("Setting up htmx event listeners");
  // Remove existing event listeners before adding new ones
  document.body.removeEventListener("htmx:afterSwap", handleAfterSwap);
  document.body.addEventListener("htmx:afterSwap", handleAfterSwap);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUJBQXVCLDJEQUEyRCw0REFBNEQsK0RBQStELGtEQUFrRCwwREFBMEQsYUFBYSxtRUFBbUUsMERBQTBELElBQUksSUFBSSxhQUFhLG1FQUFtRSx1Q0FBdUMsb0RBQW9ELGVBQWUsc0NBQXNDLHdFQUF3RSwwQkFBMEIsdURBQXVELGlEQUFpRCxLQUFLLG1FQUFtRSw4REFBOEQsS0FBSyxtRUFBbUUsOERBQThELG1FQUFtRSx5REFBeUQsRUFBRSxFQUFFLEdBQUcsb0JBQW9CLHdEQUF3RCxzREFBc0QsK0RBQStELGdDQUFnQyxxR0FBcUcsMERBQTBELDRFQUE0RSxVQUFVLGdFQUFnRSx1REFBdUQsRUFBRSx5Q0FBeUMsNERBQTRELEtBQUssd0RBQXdELHlDQUF5Qyw2REFBNkQsSUFBSSxnRUFBZ0UsdUNBQXVDLHdGQUF3RixrR0FBa0csZ0VBQWdFLHVEQUF1RCxFQUFFLHNDQUFzQyxxREFBcUQsRUFBRSxFQUFFLHVCQUF1QixpRUFBaUUsNERBQTRELCtEQUErRCxrREFBa0QsMERBQTBELHFHQUFxRyxrQkFBa0Isd0dBQXdHLGlCQUFpQixJQUFJLElBQUksYUFBYSx5RUFBeUUsd0NBQXdDLCtEQUErRCxrR0FBa0cscUlBQXFJLGlCQUFpQixFQUFFLEVBQUUsR0FBRyxrQ0FBa0Msa0JBQWtCLDZEQUE2RCxjQUFjLGNBQWMsV0FBVyxFQUFFLEtBQUssY0FBYyxjQUFjLFlBQVksR0FBRyxJQUEyQixFQUFFLGdCQUFnQix5QkFBeUIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQ0EvMUg7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7VUM1Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDMkM7QUFDb0M7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFEQUFXLGdCQUFnQjtBQUM3QixFQUFFLDRFQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDBFQUFjO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLEVBQUUseURBQVcsSUFBSTtBQUNqQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3RoZW1lLWNoYW5nZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS8uL2FwcGxpY2F0aW9uL3N0YXRpYy9qcy9mdWxsX3NjcmVlbl9jb250cm9sbGVyLmpzIiwid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvLi9hcHBsaWNhdGlvbi9zdGF0aWMvanMvaHRteF9jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHRoZW1lVG9nZ2xlKCl7dmFyIHRvZ2dsZUVsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2dnbGUtdGhlbWVdXCIpO3ZhciBkYXRhS2V5PXRvZ2dsZUVsP3RvZ2dsZUVsLmdldEF0dHJpYnV0ZShcImRhdGEta2V5XCIpOm51bGw7KGZ1bmN0aW9uKHRoZW1lPWxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpKXtpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIix0aGVtZSk7aWYodG9nZ2xlRWwpe1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdG9nZ2xlLXRoZW1lXVwiKV0uZm9yRWFjaChlbD0+e2VsLmNsYXNzTGlzdC5hZGQodG9nZ2xlRWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpfSl9fX0pKCk7aWYodG9nZ2xlRWwpe1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdG9nZ2xlLXRoZW1lXVwiKV0uZm9yRWFjaChlbD0+e2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7dmFyIHRoZW1lc0xpc3Q9ZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS10b2dnbGUtdGhlbWVcIik7aWYodGhlbWVzTGlzdCl7dmFyIHRoZW1lc0FycmF5PXRoZW1lc0xpc3Quc3BsaXQoXCIsXCIpO2lmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIpPT10aGVtZXNBcnJheVswXSl7aWYodGhlbWVzQXJyYXkubGVuZ3RoPT0xKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS10aGVtZVwiKTtsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKX1lbHNle2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsdGhlbWVzQXJyYXlbMV0pO2xvY2FsU3RvcmFnZS5zZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIsdGhlbWVzQXJyYXlbMV0pfX1lbHNle2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsdGhlbWVzQXJyYXlbMF0pO2xvY2FsU3RvcmFnZS5zZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIsdGhlbWVzQXJyYXlbMF0pfX1bLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRvZ2dsZS10aGVtZV1cIildLmZvckVhY2goZWw9PntlbC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpfSl9KX0pfX1mdW5jdGlvbiB0aGVtZUJ0bigpe3ZhciBidG5FbD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc2V0LXRoZW1lPScnXVwiKTt2YXIgZGF0YUtleT1idG5FbD9idG5FbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiKTpudWxsOyhmdW5jdGlvbih0aGVtZT1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKSl7aWYodGhlbWUhPXVuZGVmaW5lZCYmdGhlbWUhPVwiXCIpe2lmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpJiZsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKSE9XCJcIil7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIix0aGVtZSk7dmFyIGJ0bkVsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zZXQtdGhlbWU9J1wiK3RoZW1lLnRvU3RyaW5nKCkrXCInXVwiKTtpZihidG5FbCl7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zZXQtdGhlbWVdXCIpXS5mb3JFYWNoKGVsPT57ZWwuY2xhc3NMaXN0LnJlbW92ZShlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl9KTtpZihidG5FbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl7YnRuRWwuY2xhc3NMaXN0LmFkZChidG5FbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl9fX1lbHNle3ZhciBidG5FbD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc2V0LXRoZW1lPScnXVwiKTtpZihidG5FbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl7YnRuRWwuY2xhc3NMaXN0LmFkZChidG5FbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl9fX19KSgpO1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc2V0LXRoZW1lXVwiKV0uZm9yRWFjaChlbD0+e2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIix0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtc2V0LXRoZW1lXCIpKTtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiLGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIpKTtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXNldC10aGVtZV1cIildLmZvckVhY2goZWw9PntlbC5jbGFzc0xpc3QucmVtb3ZlKGVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKX0pO2lmKGVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKXtlbC5jbGFzc0xpc3QuYWRkKGVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKX19KX0pfWZ1bmN0aW9uIHRoZW1lU2VsZWN0KCl7dmFyIHNlbGVjdEVsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RbZGF0YS1jaG9vc2UtdGhlbWVdXCIpO3ZhciBkYXRhS2V5PXNlbGVjdEVsP3NlbGVjdEVsLmdldEF0dHJpYnV0ZShcImRhdGEta2V5XCIpOm51bGw7KGZ1bmN0aW9uKHRoZW1lPWxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpKXtpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIix0aGVtZSk7dmFyIG9wdGlvblRvZ2dsZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdFtkYXRhLWNob29zZS10aGVtZV0gW3ZhbHVlPSdcIit0aGVtZS50b1N0cmluZygpK1wiJ11cIik7aWYob3B0aW9uVG9nZ2xlcil7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWxlY3RbZGF0YS1jaG9vc2UtdGhlbWVdIFt2YWx1ZT0nXCIrdGhlbWUudG9TdHJpbmcoKStcIiddXCIpXS5mb3JFYWNoKGVsPT57ZWwuc2VsZWN0ZWQ9dHJ1ZX0pfX19KSgpO2lmKHNlbGVjdEVsKXtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdFtkYXRhLWNob29zZS10aGVtZV1cIildLmZvckVhY2goZWw9PntlbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsZnVuY3Rpb24oKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLHRoaXMudmFsdWUpO2xvY2FsU3RvcmFnZS5zZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIikpO1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VsZWN0W2RhdGEtY2hvb3NlLXRoZW1lXSBbdmFsdWU9J1wiK2xvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpK1wiJ11cIildLmZvckVhY2goZWw9PntlbC5zZWxlY3RlZD10cnVlfSl9KX0pfX1mdW5jdGlvbiB0aGVtZUNoYW5nZShhdHRhY2g9dHJ1ZSl7aWYoYXR0YWNoPT09dHJ1ZSl7ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixmdW5jdGlvbihldmVudCl7dGhlbWVUb2dnbGUoKTt0aGVtZVNlbGVjdCgpO3RoZW1lQnRuKCl9KX1lbHNle3RoZW1lVG9nZ2xlKCk7dGhlbWVTZWxlY3QoKTt0aGVtZUJ0bigpfX1pZih0eXBlb2YgZXhwb3J0cyE9XCJ1bmRlZmluZWRcIil7bW9kdWxlLmV4cG9ydHM9e3RoZW1lQ2hhbmdlOnRoZW1lQ2hhbmdlfX1lbHNle3RoZW1lQ2hhbmdlKCl9IiwiLy8gZnVsbHNjcmVlbl9jb250cm9sbGVyLmpzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEZ1bGxzY3JlZW4oKSB7XHJcbiAgLy8gQXR0YWNoIHRoZSBjbGljayBldmVudCBsaXN0ZW5lciB0byB0aGUgYnV0dG9uXHJcbiAgY29uc3QgZnVsbHNjcmVlbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnVsbHNjcmVlbi1idG5cIik7XHJcbiAgaWYgKGZ1bGxzY3JlZW5CdG4pIHtcclxuICAgIGZ1bGxzY3JlZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUZ1bGxzY3JlZW4pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlRnVsbHNjcmVlbigpIHtcclxuICBjb25zdCBzY3JlZW4gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG4gIGlmIChcclxuICAgICFkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCAmJlxyXG4gICAgIWRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbGVtZW50ICYmXHJcbiAgICAhZG9jdW1lbnQud2Via2l0RnVsbHNjcmVlbkVsZW1lbnQgJiZcclxuICAgICFkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50XHJcbiAgKSB7XHJcbiAgICBpZiAoc2NyZWVuLnJlcXVlc3RGdWxsc2NyZWVuKSB7XHJcbiAgICAgIHNjcmVlbi5yZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgfSBlbHNlIGlmIChzY3JlZW4ubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xyXG4gICAgICBzY3JlZW4ubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgfSBlbHNlIGlmIChzY3JlZW4ubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHtcclxuICAgICAgc2NyZWVuLm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XHJcbiAgICB9IGVsc2UgaWYgKHNjcmVlbi53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xyXG4gICAgICBzY3JlZW4ud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKSB7XHJcbiAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbigpO1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKSB7XHJcbiAgICAgIGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4oKTtcclxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVGdWxsc2NyZWVuKCkge1xyXG4gIC8vIExvZ2ljIHRvIHVwZGF0ZSBmdWxsc2NyZWVuIGFmdGVyIGh0bXggY29udGVudCB1cGRhdGVzXHJcbiAgaW5pdEZ1bGxzY3JlZW4oKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGh0bXhfY29udHJvbGxlci5qc1xyXG5pbXBvcnQgeyB0aGVtZUNoYW5nZSB9IGZyb20gXCJ0aGVtZS1jaGFuZ2VcIjtcclxuaW1wb3J0IHsgaW5pdEZ1bGxzY3JlZW4sIHVwZGF0ZUZ1bGxzY3JlZW4gfSBmcm9tIFwiLi9mdWxsX3NjcmVlbl9jb250cm9sbGVyLmpzXCI7XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHRoZW1lVmFsdWVzID0gW1xyXG4gICAgXCJkYXJrXCIsXHJcbiAgICBcImxpZ2h0XCIsXHJcbiAgICBcImN1cGNha2VcIixcclxuICAgIFwiYnVtYmxlYmVlXCIsXHJcbiAgICBcImVtZXJhbGRcIixcclxuICAgIFwiY29ycG9yYXRlXCIsXHJcbiAgICBcInN5bnRod2F2ZVwiLFxyXG4gICAgXCJyZXRyb1wiLFxyXG4gICAgXCJjeWJlcnB1bmtcIixcclxuICAgIFwidmFsZW50aW5lXCIsXHJcbiAgICBcImhhbGxvd2VlblwiLFxyXG4gICAgXCJnYXJkZW5cIixcclxuICAgIFwiZm9yZXN0XCIsXHJcbiAgICBcImFxdWFcIixcclxuICAgIFwibG9maVwiLFxyXG4gICAgXCJwYXN0ZWxcIixcclxuICAgIFwiZmFudGFzeVwiLFxyXG4gICAgXCJ3aXJlZnJhbWVcIixcclxuICAgIFwiYmxhY2tcIixcclxuICAgIFwibHV4dXJ5XCIsXHJcbiAgICBcImRyYWN1bGFcIixcclxuICAgIFwiY215a1wiLFxyXG4gICAgXCJhdXR1bW5cIixcclxuICAgIFwiYnVzaW5lc3NcIixcclxuICAgIFwiYWNpZFwiLFxyXG4gICAgXCJsZW1vbmFkZVwiLFxyXG4gICAgXCJuaWdodFwiLFxyXG4gICAgXCJjb2ZmZWVcIixcclxuICAgIFwid2ludGVyXCIsXHJcbiAgICBcImRpbVwiLFxyXG4gICAgXCJub3JkXCIsXHJcbiAgICBcInN1bnNldFwiLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHRoZW1lU2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoZW1lLXNlbGVjdG9yXCIpO1xyXG5cclxuICB0aGVtZVZhbHVlcy5mb3JFYWNoKCh0aGVtZSkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG9wdGlvbi52YWx1ZSA9IHRoZW1lO1xyXG4gICAgb3B0aW9uLnRleHQgPSB0aGVtZTtcclxuICAgIHRoZW1lU2VsZWN0b3IuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICB9KTtcclxufTtcclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBodG14IGFmdGVyU3dhcCBldmVudFxyXG5mdW5jdGlvbiBoYW5kbGVBZnRlclN3YXAoZXZlbnQpIHtcclxuICBjb25zb2xlLmxvZyhcImh0bXg6YWZ0ZXJTd2FwIGV2ZW50IHRyaWdnZXJlZFwiKTtcclxuICAvLyBBc3N1bWluZyB0aGVtZUNoYW5nZSBoYXMgYSBmdW5jdGlvbiB0byB0b2dnbGUgdGhlbWVzXHJcbiAgdGhlbWVDaGFuZ2UudG9nZ2xlVGhlbWUoKTsgLy8gQWRqdXN0IHRoaXMgYmFzZWQgb24gdGhlIGFjdHVhbCBBUEkgb2YgdGhlbWUtY2hhbmdlXHJcbiAgdXBkYXRlRnVsbHNjcmVlbigpO1xyXG4gIHNldHVwSHRteEV2ZW50TGlzdGVuZXJzKCk7XHJcbn1cclxuXHJcbi8vIEluaXRpYWxpemUgZXZlcnl0aGluZyB3aGVuIERPTSBpcyBsb2FkZWRcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnNvbGUubG9nKFwiRE9NQ29udGVudExvYWRlZCBldmVudCB0cmlnZ2VyZWRcIik7XHJcbiAgaW5pdEZ1bGxzY3JlZW4oKTtcclxuICBzZXR1cEh0bXhFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAvLyBDaGVjayBpZiB0aGVtZUNoYW5nZSBoYXMgYW4gaW5pdCBmdW5jdGlvblxyXG4gIHRoZW1lQ2hhbmdlKCk7IC8vIEluaXRpYWxpemUgdGhlIHRoZW1lLWNoYW5nZVxyXG59KTtcclxuXHJcbi8vIEZ1bmN0aW9uIHRvIHNldCB1cCBodG14IGV2ZW50IGxpc3RlbmVyc1xyXG5mdW5jdGlvbiBzZXR1cEh0bXhFdmVudExpc3RlbmVycygpIHtcclxuICBjb25zb2xlLmxvZyhcIlNldHRpbmcgdXAgaHRteCBldmVudCBsaXN0ZW5lcnNcIik7XHJcbiAgLy8gUmVtb3ZlIGV4aXN0aW5nIGV2ZW50IGxpc3RlbmVycyBiZWZvcmUgYWRkaW5nIG5ldyBvbmVzXHJcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwiaHRteDphZnRlclN3YXBcIiwgaGFuZGxlQWZ0ZXJTd2FwKTtcclxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJodG14OmFmdGVyU3dhcFwiLCBoYW5kbGVBZnRlclN3YXApO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==