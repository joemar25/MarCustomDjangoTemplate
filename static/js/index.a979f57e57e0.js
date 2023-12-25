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
      option.classList.add("a");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBZ0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEVBQWM7QUFDaEI7QUFDQSxFQUFFLHlEQUFXO0FBQ2IsRUFBRSw4RUFBZ0I7QUFDbEIsRUFBRSx3RkFBMEI7QUFDNUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EseURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy90aGVtZS1jaGFuZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvLi9hcHBsaWNhdGlvbi9zdGF0aWMvanMvZnVsbF9zY3JlZW5fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS8uL2FwcGxpY2F0aW9uL3N0YXRpYy9qcy90aGVtZV9vcHRpb25zX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS8uL2FwcGxpY2F0aW9uL3N0YXRpYy9qcy9odG14X2NvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdGhlbWVUb2dnbGUoKXt2YXIgdG9nZ2xlRWw9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZ2dsZS10aGVtZV1cIik7dmFyIGRhdGFLZXk9dG9nZ2xlRWw/dG9nZ2xlRWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1rZXlcIik6bnVsbDsoZnVuY3Rpb24odGhlbWU9bG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIikpe2lmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLHRoZW1lKTtpZih0b2dnbGVFbCl7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10b2dnbGUtdGhlbWVdXCIpXS5mb3JFYWNoKGVsPT57ZWwuY2xhc3NMaXN0LmFkZCh0b2dnbGVFbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl9KX19fSkoKTtpZih0b2dnbGVFbCl7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10b2dnbGUtdGhlbWVdXCIpXS5mb3JFYWNoKGVsPT57ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXt2YXIgdGhlbWVzTGlzdD1lbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZ2dsZS10aGVtZVwiKTtpZih0aGVtZXNMaXN0KXt2YXIgdGhlbWVzQXJyYXk9dGhlbWVzTGlzdC5zcGxpdChcIixcIik7aWYoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIik9PXRoZW1lc0FycmF5WzBdKXtpZih0aGVtZXNBcnJheS5sZW5ndGg9PTEpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIpO2xvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpfWVsc2V7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIix0aGVtZXNBcnJheVsxXSk7bG9jYWxTdG9yYWdlLnNldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIix0aGVtZXNBcnJheVsxXSl9fWVsc2V7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIix0aGVtZXNBcnJheVswXSk7bG9jYWxTdG9yYWdlLnNldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIix0aGVtZXNBcnJheVswXSl9fVsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdG9nZ2xlLXRoZW1lXVwiKV0uZm9yRWFjaChlbD0+e2VsLmNsYXNzTGlzdC50b2dnbGUodGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl9KX0pfSl9fWZ1bmN0aW9uIHRoZW1lQnRuKCl7dmFyIGJ0bkVsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zZXQtdGhlbWU9JyddXCIpO3ZhciBkYXRhS2V5PWJ0bkVsP2J0bkVsLmdldEF0dHJpYnV0ZShcImRhdGEta2V5XCIpOm51bGw7KGZ1bmN0aW9uKHRoZW1lPWxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpKXtpZih0aGVtZSE9dW5kZWZpbmVkJiZ0aGVtZSE9XCJcIil7aWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIikmJmxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpIT1cIlwiKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLHRoZW1lKTt2YXIgYnRuRWw9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXNldC10aGVtZT0nXCIrdGhlbWUudG9TdHJpbmcoKStcIiddXCIpO2lmKGJ0bkVsKXtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXNldC10aGVtZV1cIildLmZvckVhY2goZWw9PntlbC5jbGFzc0xpc3QucmVtb3ZlKGVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKX0pO2lmKGJ0bkVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKXtidG5FbC5jbGFzc0xpc3QuYWRkKGJ0bkVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKX19fWVsc2V7dmFyIGJ0bkVsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zZXQtdGhlbWU9JyddXCIpO2lmKGJ0bkVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKXtidG5FbC5jbGFzc0xpc3QuYWRkKGJ0bkVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKX19fX0pKCk7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zZXQtdGhlbWVdXCIpXS5mb3JFYWNoKGVsPT57ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1zZXQtdGhlbWVcIikpO2xvY2FsU3RvcmFnZS5zZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIikpO1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc2V0LXRoZW1lXVwiKV0uZm9yRWFjaChlbD0+e2VsLmNsYXNzTGlzdC5yZW1vdmUoZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpfSk7aWYoZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpe2VsLmNsYXNzTGlzdC5hZGQoZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpfX0pfSl9ZnVuY3Rpb24gdGhlbWVTZWxlY3QoKXt2YXIgc2VsZWN0RWw9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdFtkYXRhLWNob29zZS10aGVtZV1cIik7dmFyIGRhdGFLZXk9c2VsZWN0RWw/c2VsZWN0RWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1rZXlcIik6bnVsbDsoZnVuY3Rpb24odGhlbWU9bG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIikpe2lmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLHRoZW1lKTt2YXIgb3B0aW9uVG9nZ2xlcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0W2RhdGEtY2hvb3NlLXRoZW1lXSBbdmFsdWU9J1wiK3RoZW1lLnRvU3RyaW5nKCkrXCInXVwiKTtpZihvcHRpb25Ub2dnbGVyKXtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdFtkYXRhLWNob29zZS10aGVtZV0gW3ZhbHVlPSdcIit0aGVtZS50b1N0cmluZygpK1wiJ11cIildLmZvckVhY2goZWw9PntlbC5zZWxlY3RlZD10cnVlfSl9fX0pKCk7aWYoc2VsZWN0RWwpe1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VsZWN0W2RhdGEtY2hvb3NlLXRoZW1lXVwiKV0uZm9yRWFjaChlbD0+e2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIixmdW5jdGlvbigpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsdGhpcy52YWx1ZSk7bG9jYWxTdG9yYWdlLnNldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIixkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiKSk7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWxlY3RbZGF0YS1jaG9vc2UtdGhlbWVdIFt2YWx1ZT0nXCIrbG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIikrXCInXVwiKV0uZm9yRWFjaChlbD0+e2VsLnNlbGVjdGVkPXRydWV9KX0pfSl9fWZ1bmN0aW9uIHRoZW1lQ2hhbmdlKGF0dGFjaD10cnVlKXtpZihhdHRhY2g9PT10cnVlKXtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGZ1bmN0aW9uKGV2ZW50KXt0aGVtZVRvZ2dsZSgpO3RoZW1lU2VsZWN0KCk7dGhlbWVCdG4oKX0pfWVsc2V7dGhlbWVUb2dnbGUoKTt0aGVtZVNlbGVjdCgpO3RoZW1lQnRuKCl9fWlmKHR5cGVvZiBleHBvcnRzIT1cInVuZGVmaW5lZFwiKXttb2R1bGUuZXhwb3J0cz17dGhlbWVDaGFuZ2U6dGhlbWVDaGFuZ2V9fWVsc2V7dGhlbWVDaGFuZ2UoKX0iLCIvLyBmdWxsc2NyZWVuX2NvbnRyb2xsZXIuanNcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRGdWxsc2NyZWVuKCkge1xuICAvLyBBdHRhY2ggdGhlIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBidXR0b25cbiAgY29uc3QgZnVsbHNjcmVlbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnVsbHNjcmVlbi1idG5cIik7XG4gIGlmIChmdWxsc2NyZWVuQnRuKSB7XG4gICAgZnVsbHNjcmVlbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlRnVsbHNjcmVlbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlRnVsbHNjcmVlbigpIHtcbiAgY29uc3Qgc2NyZWVuID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gIGlmIChcbiAgICAhZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgJiZcbiAgICAhZG9jdW1lbnQubW96RnVsbFNjcmVlbkVsZW1lbnQgJiZcbiAgICAhZG9jdW1lbnQud2Via2l0RnVsbHNjcmVlbkVsZW1lbnQgJiZcbiAgICAhZG9jdW1lbnQubXNGdWxsc2NyZWVuRWxlbWVudFxuICApIHtcbiAgICBpZiAoc2NyZWVuLnJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICBzY3JlZW4ucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKHNjcmVlbi5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICBzY3JlZW4ubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgIH0gZWxzZSBpZiAoc2NyZWVuLm1velJlcXVlc3RGdWxsU2NyZWVuKSB7XG4gICAgICBzY3JlZW4ubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKHNjcmVlbi53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgc2NyZWVuLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChkb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xuICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgIGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4pIHtcbiAgICAgIGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICBkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRnVsbHNjcmVlbigpIHtcbiAgLy8gTG9naWMgdG8gdXBkYXRlIGZ1bGxzY3JlZW4gYWZ0ZXIgaHRteCBjb250ZW50IHVwZGF0ZXNcbiAgaW5pdEZ1bGxzY3JlZW4oKTtcbn1cbiIsIi8vIHRoZW1lX29wdGlvbnNfY29udHJvbGxlci5qc1xuXG5pbXBvcnQgeyB0aGVtZUNoYW5nZSB9IGZyb20gXCJ0aGVtZS1jaGFuZ2VcIjtcblxuLy8gRnVuY3Rpb24gdG8gbG9hZCB0aGVtZSBvcHRpb25zXG5leHBvcnQgZnVuY3Rpb24gbG9hZFRoZW1lT3B0aW9ucygpIHtcbiAgY29uc3QgdGhlbWVWYWx1ZXMgPSBbXG4gICAgXCJkYXJrXCIsXG4gICAgXCJsaWdodFwiLFxuICAgIFwiY3VwY2FrZVwiLFxuICAgIFwiYnVtYmxlYmVlXCIsXG4gICAgXCJlbWVyYWxkXCIsXG4gICAgXCJjb3Jwb3JhdGVcIixcbiAgICBcInN5bnRod2F2ZVwiLFxuICAgIFwicmV0cm9cIixcbiAgICBcImN5YmVycHVua1wiLFxuICAgIFwidmFsZW50aW5lXCIsXG4gICAgXCJoYWxsb3dlZW5cIixcbiAgICBcImdhcmRlblwiLFxuICAgIFwiZm9yZXN0XCIsXG4gICAgXCJhcXVhXCIsXG4gICAgXCJsb2ZpXCIsXG4gICAgXCJwYXN0ZWxcIixcbiAgICBcImZhbnRhc3lcIixcbiAgICBcIndpcmVmcmFtZVwiLFxuICAgIFwiYmxhY2tcIixcbiAgICBcImx1eHVyeVwiLFxuICAgIFwiZHJhY3VsYVwiLFxuICAgIFwiY215a1wiLFxuICAgIFwiYXV0dW1uXCIsXG4gICAgXCJidXNpbmVzc1wiLFxuICAgIFwiYWNpZFwiLFxuICAgIFwibGVtb25hZGVcIixcbiAgICBcIm5pZ2h0XCIsXG4gICAgXCJjb2ZmZWVcIixcbiAgICBcIndpbnRlclwiLFxuICAgIFwiZGltXCIsXG4gICAgXCJub3JkXCIsXG4gICAgXCJzdW5zZXRcIixcbiAgXTtcblxuICBjb25zdCBzZXR0aW5nc1RoZW1lU2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoZW1lLXNlbGVjdG9yXCIpO1xuXG4gIGlmICh0eXBlb2YgU3RvcmFnZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNvbnN0IGN1cnJlbnRUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIik7XG4gICAgc2V0dGluZ3NUaGVtZVNlbGVjdG9yLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICB0aGVtZVZhbHVlcy5mb3JFYWNoKCh0aGVtZSkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIG9wdGlvbi52YWx1ZSA9IHRoZW1lO1xuICAgICAgb3B0aW9uLnRleHQgPSB0aGVtZTtcbiAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKFwiYVwiKTtcblxuICAgICAgaWYgKHRoZW1lID09PSBjdXJyZW50VGhlbWUpIHtcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgc2V0dGluZ3NUaGVtZVNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBub25lT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBub25lT3B0aW9uLnZhbHVlID0gXCJub25lXCI7XG4gICAgbm9uZU9wdGlvbi50ZXh0ID0gXCJUaGVtZVwiO1xuXG4gICAgaWYgKCF0aGVtZVZhbHVlcy5pbmNsdWRlcyhjdXJyZW50VGhlbWUpKSB7XG4gICAgICBub25lT3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwibG9jYWxTdG9yYWdlIGlzIG5vdCBhdmFpbGFibGUuIFRoZW1lIHBlcnNpc3RlbmNlIG1heSBub3Qgd29yay5cIlxuICAgICk7XG4gIH1cbn1cblxuLy8gRnVuY3Rpb24gdG8gc2V0IHRoZSBkZWZhdWx0IHRoZW1lXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdFRoZW1lKCkge1xuICBjb25zdCBkZWZhdWx0VGhlbWUgPSBcImRhcmtcIjtcblxuICBpZiAodHlwZW9mIFN0b3JhZ2UgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIGRlZmF1bHRUaGVtZSk7XG4gICAgdGhlbWVDaGFuZ2UoZGVmYXVsdFRoZW1lKTsgXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwibG9jYWxTdG9yYWdlIGlzIG5vdCBhdmFpbGFibGUuIFRoZW1lIHBlcnNpc3RlbmNlIG1heSBub3Qgd29yay5cIlxuICAgICk7XG4gIH1cbn1cblxuLy8gRnVuY3Rpb24gdG8gYWRkIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBkZWZhdWx0IGJ1dHRvblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERlZmF1bHRCdXR0b25DbGlja0V2ZW50KCkge1xuICBjb25zdCBkZWZhdWx0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZhdWx0QnV0dG9uXCIpO1xuICBpZiAoZGVmYXVsdEJ1dHRvbikge1xuICAgIGRlZmF1bHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNldERlZmF1bHRUaGVtZSgpO1xuICAgIH0pO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGh0bXhfY29udHJvbGxlci5qc1xuaW1wb3J0IHsgdGhlbWVDaGFuZ2UgfSBmcm9tIFwidGhlbWUtY2hhbmdlXCI7XG5pbXBvcnQgeyBpbml0RnVsbHNjcmVlbiwgdXBkYXRlRnVsbHNjcmVlbiB9IGZyb20gXCIuL2Z1bGxfc2NyZWVuX2NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCB7XG4gIGxvYWRUaGVtZU9wdGlvbnMsXG4gIHNldERlZmF1bHRUaGVtZSxcbiAgYWRkRGVmYXVsdEJ1dHRvbkNsaWNrRXZlbnQsXG59IGZyb20gXCIuL3RoZW1lX29wdGlvbnNfY29udHJvbGxlci5qc1wiO1xuXG4vLyBGdW5jdGlvbiB0byBoYW5kbGUgaHRteCBhZnRlclN3YXAgZXZlbnRcbmZ1bmN0aW9uIGhhbmRsZUFmdGVyU3dhcChldmVudCkge1xuICBjb25zb2xlLmxvZyhcImh0bXg6YWZ0ZXJTd2FwIGV2ZW50IHRyaWdnZXJlZFwiKTtcbiAgdGhlbWVDaGFuZ2UoKTtcbiAgdXBkYXRlRnVsbHNjcmVlbigpO1xuICBzZXR1cEh0bXhFdmVudExpc3RlbmVycygpO1xuICBsb2FkVGhlbWVPcHRpb25zKCk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHNldCB1cCBodG14IGV2ZW50IGxpc3RlbmVyc1xuZnVuY3Rpb24gc2V0dXBIdG14RXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGNvbnNvbGUubG9nKFwiU2V0dGluZyB1cCBodG14IGV2ZW50IGxpc3RlbmVyc1wiKTtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwiaHRteDphZnRlclN3YXBcIiwgaGFuZGxlQWZ0ZXJTd2FwKTtcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiaHRteDphZnRlclN3YXBcIiwgaGFuZGxlQWZ0ZXJTd2FwKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gaW5pdGlhbGl6ZSB0aGUgcGFnZVxuZnVuY3Rpb24gaW5pdGlhbGl6ZVBhZ2UoKSB7XG4gIGNvbnNvbGUubG9nKFwiUGFnZSBsb2FkZWRcIik7XG4gIGluaXRGdWxsc2NyZWVuKCk7XG4gIHNldHVwSHRteEV2ZW50TGlzdGVuZXJzKCk7XG4gIHRoZW1lQ2hhbmdlKGZhbHNlKTtcbiAgbG9hZFRoZW1lT3B0aW9ucygpO1xuICBhZGREZWZhdWx0QnV0dG9uQ2xpY2tFdmVudCgpO1xufVxuXG4vLyBJbml0aWFsIHBhZ2UgbG9hZFxuaW5pdGlhbGl6ZVBhZ2UoKTtcblxuLy8gSGFuZGxlIGh0bXggbmF2aWdhdGlvbiBmb3Igc3Vic2VxdWVudCBwYWdlIGxvYWRzXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJodG14OmxvYWRcIiwgaW5pdGlhbGl6ZVBhZ2UpO1xuXG4vLyBIYW5kbGUgdGhlbWUgY2hhbmdlIGV2ZW50XG50aGVtZUNoYW5nZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9