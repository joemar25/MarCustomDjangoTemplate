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


/***/ }),

/***/ "./application/static/js/theme_options_controller.js":
/*!***********************************************************!*\
  !*** ./application/static/js/theme_options_controller.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDefaultButtonClickEvent: () => (/* binding */ addDefaultButtonClickEvent),
/* harmony export */   loadThemeOptions: () => (/* binding */ loadThemeOptions),
/* harmony export */   setDefaultTheme: () => (/* binding */ setDefaultTheme)
/* harmony export */ });
/* harmony import */ var theme_change__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-change */ "./node_modules/theme-change/index.js");
// theme_options_controller.js



// Function to load theme options
function loadThemeOptions() {
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

  const settingsThemeSelector = document.getElementById("theme-selector");

  if (typeof Storage !== "undefined") {
    const currentTheme = localStorage.getItem("theme");
    settingsThemeSelector.innerHTML = "";

    themeValues.forEach((theme) => {
      const option = document.createElement("option");
      option.value = theme;
      option.text = theme;

      if (theme === currentTheme) {
        option.selected = true;
      }

      settingsThemeSelector.appendChild(option);
    });

    const noneOption = document.createElement("option");
    noneOption.value = "none";
    noneOption.text = "Theme";

    if (!themeValues.includes(currentTheme)) {
      noneOption.selected = true;
    }
  } else {
    console.error(
      "localStorage is not available. Theme persistence may not work."
    );
  }
}

// Function to set the default theme
function setDefaultTheme() {
  const defaultTheme = "dark";

  if (typeof Storage !== "undefined") {
    localStorage.setItem("theme", defaultTheme);
    (0,theme_change__WEBPACK_IMPORTED_MODULE_0__.themeChange)(defaultTheme);
  } else {
    console.error(
      "localStorage is not available. Theme persistence may not work."
    );
  }
}

// Function to add click event listener to the default button
function addDefaultButtonClickEvent() {
  const defaultButton = document.getElementById("defaultButton");
  if (defaultButton) {
    defaultButton.addEventListener("click", function (event) {
      event.preventDefault();
      setDefaultTheme();
    });
  }
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
/* harmony import */ var _theme_options_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme_options_controller.js */ "./application/static/js/theme_options_controller.js");
// htmx_controller.js




// Function to handle htmx afterSwap event
function handleAfterSwap(event) {
  console.log("htmx:afterSwap event triggered");
  (0,theme_change__WEBPACK_IMPORTED_MODULE_0__.themeChange)();
  (0,_full_screen_controller_js__WEBPACK_IMPORTED_MODULE_1__.updateFullscreen)();
  setupHtmxEventListeners();
  (0,_theme_options_controller_js__WEBPACK_IMPORTED_MODULE_2__.loadThemeOptions)();
}

// Function to set up htmx event listeners
function setupHtmxEventListeners() {
  console.log("Setting up htmx event listeners");
  document.body.removeEventListener("htmx:afterSwap", handleAfterSwap);
  document.body.addEventListener("htmx:afterSwap", handleAfterSwap);
}

// Function to initialize the page
function initializePage() {
  console.log("Page loaded");
  (0,_full_screen_controller_js__WEBPACK_IMPORTED_MODULE_1__.initFullscreen)();
  setupHtmxEventListeners();
  (0,theme_change__WEBPACK_IMPORTED_MODULE_0__.themeChange)(false);
  (0,_theme_options_controller_js__WEBPACK_IMPORTED_MODULE_2__.loadThemeOptions)();
  (0,_theme_options_controller_js__WEBPACK_IMPORTED_MODULE_2__.addDefaultButtonClickEvent)();
}

// Initial page load
initializePage();

// Handle htmx navigation for subsequent page loads
document.body.addEventListener("htmx:load", initializePage);

// Handle theme change event
(0,theme_change__WEBPACK_IMPORTED_MODULE_0__.themeChange)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDBFQUFjO0FBQ2hCO0FBQ0EsRUFBRSx5REFBVztBQUNiLEVBQUUsOEVBQWdCO0FBQ2xCLEVBQUUsd0ZBQTBCO0FBQzVCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvdGhlbWUtY2hhbmdlL2luZGV4LmpzIiwid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlLy4vYXBwbGljYXRpb24vc3RhdGljL2pzL2Z1bGxfc2NyZWVuX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvLi9hcHBsaWNhdGlvbi9zdGF0aWMvanMvdGhlbWVfb3B0aW9uc19jb250cm9sbGVyLmpzIiwid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvLi9hcHBsaWNhdGlvbi9zdGF0aWMvanMvaHRteF9jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHRoZW1lVG9nZ2xlKCl7dmFyIHRvZ2dsZUVsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2dnbGUtdGhlbWVdXCIpO3ZhciBkYXRhS2V5PXRvZ2dsZUVsP3RvZ2dsZUVsLmdldEF0dHJpYnV0ZShcImRhdGEta2V5XCIpOm51bGw7KGZ1bmN0aW9uKHRoZW1lPWxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpKXtpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIix0aGVtZSk7aWYodG9nZ2xlRWwpe1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdG9nZ2xlLXRoZW1lXVwiKV0uZm9yRWFjaChlbD0+e2VsLmNsYXNzTGlzdC5hZGQodG9nZ2xlRWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpfSl9fX0pKCk7aWYodG9nZ2xlRWwpe1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdG9nZ2xlLXRoZW1lXVwiKV0uZm9yRWFjaChlbD0+e2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7dmFyIHRoZW1lc0xpc3Q9ZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS10b2dnbGUtdGhlbWVcIik7aWYodGhlbWVzTGlzdCl7dmFyIHRoZW1lc0FycmF5PXRoZW1lc0xpc3Quc3BsaXQoXCIsXCIpO2lmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIpPT10aGVtZXNBcnJheVswXSl7aWYodGhlbWVzQXJyYXkubGVuZ3RoPT0xKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS10aGVtZVwiKTtsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKX1lbHNle2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsdGhlbWVzQXJyYXlbMV0pO2xvY2FsU3RvcmFnZS5zZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIsdGhlbWVzQXJyYXlbMV0pfX1lbHNle2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsdGhlbWVzQXJyYXlbMF0pO2xvY2FsU3RvcmFnZS5zZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIsdGhlbWVzQXJyYXlbMF0pfX1bLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRvZ2dsZS10aGVtZV1cIildLmZvckVhY2goZWw9PntlbC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpfSl9KX0pfX1mdW5jdGlvbiB0aGVtZUJ0bigpe3ZhciBidG5FbD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc2V0LXRoZW1lPScnXVwiKTt2YXIgZGF0YUtleT1idG5FbD9idG5FbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiKTpudWxsOyhmdW5jdGlvbih0aGVtZT1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKSl7aWYodGhlbWUhPXVuZGVmaW5lZCYmdGhlbWUhPVwiXCIpe2lmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpJiZsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKSE9XCJcIil7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIix0aGVtZSk7dmFyIGJ0bkVsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zZXQtdGhlbWU9J1wiK3RoZW1lLnRvU3RyaW5nKCkrXCInXVwiKTtpZihidG5FbCl7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zZXQtdGhlbWVdXCIpXS5mb3JFYWNoKGVsPT57ZWwuY2xhc3NMaXN0LnJlbW92ZShlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl9KTtpZihidG5FbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl7YnRuRWwuY2xhc3NMaXN0LmFkZChidG5FbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl9fX1lbHNle3ZhciBidG5FbD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc2V0LXRoZW1lPScnXVwiKTtpZihidG5FbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl7YnRuRWwuY2xhc3NMaXN0LmFkZChidG5FbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl9fX19KSgpO1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc2V0LXRoZW1lXVwiKV0uZm9yRWFjaChlbD0+e2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIix0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtc2V0LXRoZW1lXCIpKTtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiLGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIpKTtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXNldC10aGVtZV1cIildLmZvckVhY2goZWw9PntlbC5jbGFzc0xpc3QucmVtb3ZlKGVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKX0pO2lmKGVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKXtlbC5jbGFzc0xpc3QuYWRkKGVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKX19KX0pfWZ1bmN0aW9uIHRoZW1lU2VsZWN0KCl7dmFyIHNlbGVjdEVsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RbZGF0YS1jaG9vc2UtdGhlbWVdXCIpO3ZhciBkYXRhS2V5PXNlbGVjdEVsP3NlbGVjdEVsLmdldEF0dHJpYnV0ZShcImRhdGEta2V5XCIpOm51bGw7KGZ1bmN0aW9uKHRoZW1lPWxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpKXtpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIix0aGVtZSk7dmFyIG9wdGlvblRvZ2dsZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdFtkYXRhLWNob29zZS10aGVtZV0gW3ZhbHVlPSdcIit0aGVtZS50b1N0cmluZygpK1wiJ11cIik7aWYob3B0aW9uVG9nZ2xlcil7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWxlY3RbZGF0YS1jaG9vc2UtdGhlbWVdIFt2YWx1ZT0nXCIrdGhlbWUudG9TdHJpbmcoKStcIiddXCIpXS5mb3JFYWNoKGVsPT57ZWwuc2VsZWN0ZWQ9dHJ1ZX0pfX19KSgpO2lmKHNlbGVjdEVsKXtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdFtkYXRhLWNob29zZS10aGVtZV1cIildLmZvckVhY2goZWw9PntlbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsZnVuY3Rpb24oKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLHRoaXMudmFsdWUpO2xvY2FsU3RvcmFnZS5zZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIikpO1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VsZWN0W2RhdGEtY2hvb3NlLXRoZW1lXSBbdmFsdWU9J1wiK2xvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpK1wiJ11cIildLmZvckVhY2goZWw9PntlbC5zZWxlY3RlZD10cnVlfSl9KX0pfX1mdW5jdGlvbiB0aGVtZUNoYW5nZShhdHRhY2g9dHJ1ZSl7aWYoYXR0YWNoPT09dHJ1ZSl7ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixmdW5jdGlvbihldmVudCl7dGhlbWVUb2dnbGUoKTt0aGVtZVNlbGVjdCgpO3RoZW1lQnRuKCl9KX1lbHNle3RoZW1lVG9nZ2xlKCk7dGhlbWVTZWxlY3QoKTt0aGVtZUJ0bigpfX1pZih0eXBlb2YgZXhwb3J0cyE9XCJ1bmRlZmluZWRcIil7bW9kdWxlLmV4cG9ydHM9e3RoZW1lQ2hhbmdlOnRoZW1lQ2hhbmdlfX1lbHNle3RoZW1lQ2hhbmdlKCl9IiwiLy8gZnVsbHNjcmVlbl9jb250cm9sbGVyLmpzXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RnVsbHNjcmVlbigpIHtcbiAgLy8gQXR0YWNoIHRoZSBjbGljayBldmVudCBsaXN0ZW5lciB0byB0aGUgYnV0dG9uXG4gIGNvbnN0IGZ1bGxzY3JlZW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZ1bGxzY3JlZW4tYnRuXCIpO1xuICBpZiAoZnVsbHNjcmVlbkJ0bikge1xuICAgIGZ1bGxzY3JlZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUZ1bGxzY3JlZW4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUZ1bGxzY3JlZW4oKSB7XG4gIGNvbnN0IHNjcmVlbiA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICBpZiAoXG4gICAgIWRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ICYmXG4gICAgIWRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbGVtZW50ICYmXG4gICAgIWRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50ICYmXG4gICAgIWRvY3VtZW50Lm1zRnVsbHNjcmVlbkVsZW1lbnRcbiAgKSB7XG4gICAgaWYgKHNjcmVlbi5yZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgc2NyZWVuLnJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgfSBlbHNlIGlmIChzY3JlZW4ubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgc2NyZWVuLm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKHNjcmVlbi5tb3pSZXF1ZXN0RnVsbFNjcmVlbikge1xuICAgICAgc2NyZWVuLm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XG4gICAgfSBlbHNlIGlmIChzY3JlZW4ud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgIHNjcmVlbi53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKSB7XG4gICAgICBkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKCk7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKSB7XG4gICAgICBkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKCk7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbikge1xuICAgICAgZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUZ1bGxzY3JlZW4oKSB7XG4gIC8vIExvZ2ljIHRvIHVwZGF0ZSBmdWxsc2NyZWVuIGFmdGVyIGh0bXggY29udGVudCB1cGRhdGVzXG4gIGluaXRGdWxsc2NyZWVuKCk7XG59XG4iLCIvLyB0aGVtZV9vcHRpb25zX2NvbnRyb2xsZXIuanNcblxuaW1wb3J0IHsgdGhlbWVDaGFuZ2UgfSBmcm9tIFwidGhlbWUtY2hhbmdlXCI7XG5cbi8vIEZ1bmN0aW9uIHRvIGxvYWQgdGhlbWUgb3B0aW9uc1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRUaGVtZU9wdGlvbnMoKSB7XG4gIGNvbnN0IHRoZW1lVmFsdWVzID0gW1xuICAgIFwiZGFya1wiLFxuICAgIFwibGlnaHRcIixcbiAgICBcImN1cGNha2VcIixcbiAgICBcImJ1bWJsZWJlZVwiLFxuICAgIFwiZW1lcmFsZFwiLFxuICAgIFwiY29ycG9yYXRlXCIsXG4gICAgXCJzeW50aHdhdmVcIixcbiAgICBcInJldHJvXCIsXG4gICAgXCJjeWJlcnB1bmtcIixcbiAgICBcInZhbGVudGluZVwiLFxuICAgIFwiaGFsbG93ZWVuXCIsXG4gICAgXCJnYXJkZW5cIixcbiAgICBcImZvcmVzdFwiLFxuICAgIFwiYXF1YVwiLFxuICAgIFwibG9maVwiLFxuICAgIFwicGFzdGVsXCIsXG4gICAgXCJmYW50YXN5XCIsXG4gICAgXCJ3aXJlZnJhbWVcIixcbiAgICBcImJsYWNrXCIsXG4gICAgXCJsdXh1cnlcIixcbiAgICBcImRyYWN1bGFcIixcbiAgICBcImNteWtcIixcbiAgICBcImF1dHVtblwiLFxuICAgIFwiYnVzaW5lc3NcIixcbiAgICBcImFjaWRcIixcbiAgICBcImxlbW9uYWRlXCIsXG4gICAgXCJuaWdodFwiLFxuICAgIFwiY29mZmVlXCIsXG4gICAgXCJ3aW50ZXJcIixcbiAgICBcImRpbVwiLFxuICAgIFwibm9yZFwiLFxuICAgIFwic3Vuc2V0XCIsXG4gIF07XG5cbiAgY29uc3Qgc2V0dGluZ3NUaGVtZVNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGVtZS1zZWxlY3RvclwiKTtcblxuICBpZiAodHlwZW9mIFN0b3JhZ2UgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjb25zdCBjdXJyZW50VGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpO1xuICAgIHNldHRpbmdzVGhlbWVTZWxlY3Rvci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgdGhlbWVWYWx1ZXMuZm9yRWFjaCgodGhlbWUpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb24udmFsdWUgPSB0aGVtZTtcbiAgICAgIG9wdGlvbi50ZXh0ID0gdGhlbWU7XG5cbiAgICAgIGlmICh0aGVtZSA9PT0gY3VycmVudFRoZW1lKSB7XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHNldHRpbmdzVGhlbWVTZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgbm9uZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbm9uZU9wdGlvbi52YWx1ZSA9IFwibm9uZVwiO1xuICAgIG5vbmVPcHRpb24udGV4dCA9IFwiVGhlbWVcIjtcblxuICAgIGlmICghdGhlbWVWYWx1ZXMuaW5jbHVkZXMoY3VycmVudFRoZW1lKSkge1xuICAgICAgbm9uZU9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcImxvY2FsU3RvcmFnZSBpcyBub3QgYXZhaWxhYmxlLiBUaGVtZSBwZXJzaXN0ZW5jZSBtYXkgbm90IHdvcmsuXCJcbiAgICApO1xuICB9XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHNldCB0aGUgZGVmYXVsdCB0aGVtZVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRUaGVtZSgpIHtcbiAgY29uc3QgZGVmYXVsdFRoZW1lID0gXCJkYXJrXCI7XG5cbiAgaWYgKHR5cGVvZiBTdG9yYWdlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBkZWZhdWx0VGhlbWUpO1xuICAgIHRoZW1lQ2hhbmdlKGRlZmF1bHRUaGVtZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwibG9jYWxTdG9yYWdlIGlzIG5vdCBhdmFpbGFibGUuIFRoZW1lIHBlcnNpc3RlbmNlIG1heSBub3Qgd29yay5cIlxuICAgICk7XG4gIH1cbn1cblxuLy8gRnVuY3Rpb24gdG8gYWRkIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBkZWZhdWx0IGJ1dHRvblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERlZmF1bHRCdXR0b25DbGlja0V2ZW50KCkge1xuICBjb25zdCBkZWZhdWx0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZhdWx0QnV0dG9uXCIpO1xuICBpZiAoZGVmYXVsdEJ1dHRvbikge1xuICAgIGRlZmF1bHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNldERlZmF1bHRUaGVtZSgpO1xuICAgIH0pO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGh0bXhfY29udHJvbGxlci5qc1xuaW1wb3J0IHsgdGhlbWVDaGFuZ2UgfSBmcm9tIFwidGhlbWUtY2hhbmdlXCI7XG5pbXBvcnQgeyBpbml0RnVsbHNjcmVlbiwgdXBkYXRlRnVsbHNjcmVlbiB9IGZyb20gXCIuL2Z1bGxfc2NyZWVuX2NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCB7XG4gIGxvYWRUaGVtZU9wdGlvbnMsXG4gIHNldERlZmF1bHRUaGVtZSxcbiAgYWRkRGVmYXVsdEJ1dHRvbkNsaWNrRXZlbnQsXG59IGZyb20gXCIuL3RoZW1lX29wdGlvbnNfY29udHJvbGxlci5qc1wiO1xuXG4vLyBGdW5jdGlvbiB0byBoYW5kbGUgaHRteCBhZnRlclN3YXAgZXZlbnRcbmZ1bmN0aW9uIGhhbmRsZUFmdGVyU3dhcChldmVudCkge1xuICBjb25zb2xlLmxvZyhcImh0bXg6YWZ0ZXJTd2FwIGV2ZW50IHRyaWdnZXJlZFwiKTtcbiAgdGhlbWVDaGFuZ2UoKTtcbiAgdXBkYXRlRnVsbHNjcmVlbigpO1xuICBzZXR1cEh0bXhFdmVudExpc3RlbmVycygpO1xuICBsb2FkVGhlbWVPcHRpb25zKCk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHNldCB1cCBodG14IGV2ZW50IGxpc3RlbmVyc1xuZnVuY3Rpb24gc2V0dXBIdG14RXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGNvbnNvbGUubG9nKFwiU2V0dGluZyB1cCBodG14IGV2ZW50IGxpc3RlbmVyc1wiKTtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwiaHRteDphZnRlclN3YXBcIiwgaGFuZGxlQWZ0ZXJTd2FwKTtcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiaHRteDphZnRlclN3YXBcIiwgaGFuZGxlQWZ0ZXJTd2FwKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gaW5pdGlhbGl6ZSB0aGUgcGFnZVxuZnVuY3Rpb24gaW5pdGlhbGl6ZVBhZ2UoKSB7XG4gIGNvbnNvbGUubG9nKFwiUGFnZSBsb2FkZWRcIik7XG4gIGluaXRGdWxsc2NyZWVuKCk7XG4gIHNldHVwSHRteEV2ZW50TGlzdGVuZXJzKCk7XG4gIHRoZW1lQ2hhbmdlKGZhbHNlKTtcbiAgbG9hZFRoZW1lT3B0aW9ucygpO1xuICBhZGREZWZhdWx0QnV0dG9uQ2xpY2tFdmVudCgpO1xufVxuXG4vLyBJbml0aWFsIHBhZ2UgbG9hZFxuaW5pdGlhbGl6ZVBhZ2UoKTtcblxuLy8gSGFuZGxlIGh0bXggbmF2aWdhdGlvbiBmb3Igc3Vic2VxdWVudCBwYWdlIGxvYWRzXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJodG14OmxvYWRcIiwgaW5pdGlhbGl6ZVBhZ2UpO1xuXG4vLyBIYW5kbGUgdGhlbWUgY2hhbmdlIGV2ZW50XG50aGVtZUNoYW5nZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9