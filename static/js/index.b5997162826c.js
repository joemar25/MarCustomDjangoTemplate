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
/* harmony export */   initializeContrastSliderEventListeners: () => (/* binding */ initializeContrastSliderEventListeners),
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

    settingsThemeSelector.appendChild(noneOption);
  } else {
    console.error("localStorage is not available. Theme persistence may not work.");
  }

  initializeContrastSliderEventListeners();
}

// Function to update color contrast
function updateColorContrast(value) {
  const contrastClassName = `contrast-[.${value}]`;
  console.log(contrastClassName);
  document.body.className =
    document.body.className.replace(/contrast-\[\.\d+\]/, "") +
    " " +
    contrastClassName;
}

// Function to update slider value in the object
function updateSliderValue(sliderId, value) {
  localStorage.setItem(sliderId, value);
}

// Function to set the default theme
function setDefaultTheme() {
  const defaultTheme = "dark";

  if (typeof Storage !== "undefined") {
    localStorage.setItem("theme", defaultTheme);
    (0,theme_change__WEBPACK_IMPORTED_MODULE_0__.themeChange)(defaultTheme);

    // Reset the contrast value to 0
    const defaultValue = 0;
    updateColorContrast(defaultValue);
    updateSliderValue("color-contrast-slider", defaultValue);

    // Also update the slider element directly
    const settingsColorContrastSlider = document.getElementById("color-contrast-slider");
    if (settingsColorContrastSlider) {
      settingsColorContrastSlider.value = defaultValue;

      // Trigger the input event to ensure the value is updated in the HTML
      const inputEvent = new Event("input", { bubbles: true, cancelable: true });
      settingsColorContrastSlider.dispatchEvent(inputEvent);
    }
  } else {
    console.error("localStorage is not available. Theme persistence may not work.");
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

// Function to initialize contrast slider event listeners
function initializeContrastSliderEventListeners() {
  const settingsColorContrastSlider = document.getElementById("color-contrast-slider");

  if (settingsColorContrastSlider) {
    // Save the initial value to the sliderValues object
    const savedValue = localStorage.getItem(settingsColorContrastSlider.id);
    settingsColorContrastSlider.value = savedValue || 0;

    settingsColorContrastSlider.addEventListener("input", function () {
      const contrastValue = this.value;
      updateColorContrast(contrastValue);
      updateSliderValue(this.id, contrastValue);
    });

    // Trigger the input event to ensure the value is updated in the HTML
    const inputEvent = new Event("input", { bubbles: true, cancelable: true });
    settingsColorContrastSlider.dispatchEvent(inputEvent);
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
  (0,_theme_options_controller_js__WEBPACK_IMPORTED_MODULE_2__.loadThemeOptions)();
  (0,_theme_options_controller_js__WEBPACK_IMPORTED_MODULE_2__.initializeContrastSliderEventListeners)(); // Keep track of the sliders after each page swap
}

// Function to initialize the page
function initializePage() {
  console.log("Page loaded");
  (0,_full_screen_controller_js__WEBPACK_IMPORTED_MODULE_1__.initFullscreen)();
  (0,theme_change__WEBPACK_IMPORTED_MODULE_0__.themeChange)(false);
  (0,_theme_options_controller_js__WEBPACK_IMPORTED_MODULE_2__.loadThemeOptions)();
  (0,_theme_options_controller_js__WEBPACK_IMPORTED_MODULE_2__.addDefaultButtonClickEvent)();
  (0,_theme_options_controller_js__WEBPACK_IMPORTED_MODULE_2__.initializeContrastSliderEventListeners)(); // Initialize slider event listeners on page load
}

// Initial page load
initializePage();

// Handle htmx navigation for subsequent page loads
document.body.addEventListener("htmx:load", function () {
  initializePage();
  document.body.removeEventListener("htmx:afterSwap", handleAfterSwap);
  document.body.addEventListener("htmx:afterSwap", handleAfterSwap);
});

// Handle theme change event
(0,theme_change__WEBPACK_IMPORTED_MODULE_0__.themeChange)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRTJDO0FBQ29DO0FBS3hDOztBQUV2QztBQUNBO0FBQ0E7QUFDQSxFQUFFLHlEQUFXO0FBQ2IsRUFBRSw0RUFBZ0I7QUFDbEIsRUFBRSw4RUFBZ0I7QUFDbEIsRUFBRSxvR0FBc0MsSUFBSTtBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDBFQUFjO0FBQ2hCLEVBQUUseURBQVc7QUFDYixFQUFFLDhFQUFnQjtBQUNsQixFQUFFLHdGQUEwQjtBQUM1QixFQUFFLG9HQUFzQyxJQUFJO0FBQzVDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSx5REFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3RoZW1lLWNoYW5nZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS8uL2FwcGxpY2F0aW9uL3N0YXRpYy9qcy9mdWxsX3NjcmVlbl9jb250cm9sbGVyLmpzIiwid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlLy4vYXBwbGljYXRpb24vc3RhdGljL2pzL3RoZW1lX29wdGlvbnNfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlLy4vYXBwbGljYXRpb24vc3RhdGljL2pzL2h0bXhfY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB0aGVtZVRvZ2dsZSgpe3ZhciB0b2dnbGVFbD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9nZ2xlLXRoZW1lXVwiKTt2YXIgZGF0YUtleT10b2dnbGVFbD90b2dnbGVFbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiKTpudWxsOyhmdW5jdGlvbih0aGVtZT1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKSl7aWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIikpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsdGhlbWUpO2lmKHRvZ2dsZUVsKXtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRvZ2dsZS10aGVtZV1cIildLmZvckVhY2goZWw9PntlbC5jbGFzc0xpc3QuYWRkKHRvZ2dsZUVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKX0pfX19KSgpO2lmKHRvZ2dsZUVsKXtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRvZ2dsZS10aGVtZV1cIildLmZvckVhY2goZWw9PntlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe3ZhciB0aGVtZXNMaXN0PWVsLmdldEF0dHJpYnV0ZShcImRhdGEtdG9nZ2xlLXRoZW1lXCIpO2lmKHRoZW1lc0xpc3Qpe3ZhciB0aGVtZXNBcnJheT10aGVtZXNMaXN0LnNwbGl0KFwiLFwiKTtpZihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiKT09dGhlbWVzQXJyYXlbMF0pe2lmKHRoZW1lc0FycmF5Lmxlbmd0aD09MSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIik7bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIil9ZWxzZXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLHRoZW1lc0FycmF5WzFdKTtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiLHRoZW1lc0FycmF5WzFdKX19ZWxzZXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLHRoZW1lc0FycmF5WzBdKTtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiLHRoZW1lc0FycmF5WzBdKX19Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10b2dnbGUtdGhlbWVdXCIpXS5mb3JFYWNoKGVsPT57ZWwuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKX0pfSl9KX19ZnVuY3Rpb24gdGhlbWVCdG4oKXt2YXIgYnRuRWw9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXNldC10aGVtZT0nJ11cIik7dmFyIGRhdGFLZXk9YnRuRWw/YnRuRWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1rZXlcIik6bnVsbDsoZnVuY3Rpb24odGhlbWU9bG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIikpe2lmKHRoZW1lIT11bmRlZmluZWQmJnRoZW1lIT1cIlwiKXtpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKSYmbG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIikhPVwiXCIpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsdGhlbWUpO3ZhciBidG5FbD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc2V0LXRoZW1lPSdcIit0aGVtZS50b1N0cmluZygpK1wiJ11cIik7aWYoYnRuRWwpe1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc2V0LXRoZW1lXVwiKV0uZm9yRWFjaChlbD0+e2VsLmNsYXNzTGlzdC5yZW1vdmUoZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpfSk7aWYoYnRuRWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpe2J0bkVsLmNsYXNzTGlzdC5hZGQoYnRuRWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpfX19ZWxzZXt2YXIgYnRuRWw9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXNldC10aGVtZT0nJ11cIik7aWYoYnRuRWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpe2J0bkVsLmNsYXNzTGlzdC5hZGQoYnRuRWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpfX19fSkoKTtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXNldC10aGVtZV1cIildLmZvckVhY2goZWw9PntlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNldC10aGVtZVwiKSk7bG9jYWxTdG9yYWdlLnNldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIixkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiKSk7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zZXQtdGhlbWVdXCIpXS5mb3JFYWNoKGVsPT57ZWwuY2xhc3NMaXN0LnJlbW92ZShlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl9KTtpZihlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl7ZWwuY2xhc3NMaXN0LmFkZChlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl9fSl9KX1mdW5jdGlvbiB0aGVtZVNlbGVjdCgpe3ZhciBzZWxlY3RFbD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0W2RhdGEtY2hvb3NlLXRoZW1lXVwiKTt2YXIgZGF0YUtleT1zZWxlY3RFbD9zZWxlY3RFbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiKTpudWxsOyhmdW5jdGlvbih0aGVtZT1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKSl7aWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIikpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsdGhlbWUpO3ZhciBvcHRpb25Ub2dnbGVyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RbZGF0YS1jaG9vc2UtdGhlbWVdIFt2YWx1ZT0nXCIrdGhlbWUudG9TdHJpbmcoKStcIiddXCIpO2lmKG9wdGlvblRvZ2dsZXIpe1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VsZWN0W2RhdGEtY2hvb3NlLXRoZW1lXSBbdmFsdWU9J1wiK3RoZW1lLnRvU3RyaW5nKCkrXCInXVwiKV0uZm9yRWFjaChlbD0+e2VsLnNlbGVjdGVkPXRydWV9KX19fSkoKTtpZihzZWxlY3RFbCl7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWxlY3RbZGF0YS1jaG9vc2UtdGhlbWVdXCIpXS5mb3JFYWNoKGVsPT57ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLGZ1bmN0aW9uKCl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIix0aGlzLnZhbHVlKTtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiLGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIpKTtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdFtkYXRhLWNob29zZS10aGVtZV0gW3ZhbHVlPSdcIitsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKStcIiddXCIpXS5mb3JFYWNoKGVsPT57ZWwuc2VsZWN0ZWQ9dHJ1ZX0pfSl9KX19ZnVuY3Rpb24gdGhlbWVDaGFuZ2UoYXR0YWNoPXRydWUpe2lmKGF0dGFjaD09PXRydWUpe2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZnVuY3Rpb24oZXZlbnQpe3RoZW1lVG9nZ2xlKCk7dGhlbWVTZWxlY3QoKTt0aGVtZUJ0bigpfSl9ZWxzZXt0aGVtZVRvZ2dsZSgpO3RoZW1lU2VsZWN0KCk7dGhlbWVCdG4oKX19aWYodHlwZW9mIGV4cG9ydHMhPVwidW5kZWZpbmVkXCIpe21vZHVsZS5leHBvcnRzPXt0aGVtZUNoYW5nZTp0aGVtZUNoYW5nZX19ZWxzZXt0aGVtZUNoYW5nZSgpfSIsIi8vIGZ1bGxzY3JlZW5fY29udHJvbGxlci5qc1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEZ1bGxzY3JlZW4oKSB7XG4gIC8vIEF0dGFjaCB0aGUgY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGJ1dHRvblxuICBjb25zdCBmdWxsc2NyZWVuQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmdWxsc2NyZWVuLWJ0blwiKTtcbiAgaWYgKGZ1bGxzY3JlZW5CdG4pIHtcbiAgICBmdWxsc2NyZWVuQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVGdWxsc2NyZWVuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVGdWxsc2NyZWVuKCkge1xuICBjb25zdCBzY3JlZW4gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgaWYgKFxuICAgICFkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCAmJlxuICAgICFkb2N1bWVudC5tb3pGdWxsU2NyZWVuRWxlbWVudCAmJlxuICAgICFkb2N1bWVudC53ZWJraXRGdWxsc2NyZWVuRWxlbWVudCAmJlxuICAgICFkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50XG4gICkge1xuICAgIGlmIChzY3JlZW4ucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgIHNjcmVlbi5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgIH0gZWxzZSBpZiAoc2NyZWVuLm1zUmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgIHNjcmVlbi5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgfSBlbHNlIGlmIChzY3JlZW4ubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHtcbiAgICAgIHNjcmVlbi5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xuICAgIH0gZWxzZSBpZiAoc2NyZWVuLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICBzY3JlZW4ud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbikge1xuICAgICAgZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbigpO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbikge1xuICAgICAgZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgIGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVGdWxsc2NyZWVuKCkge1xuICAvLyBMb2dpYyB0byB1cGRhdGUgZnVsbHNjcmVlbiBhZnRlciBodG14IGNvbnRlbnQgdXBkYXRlc1xuICBpbml0RnVsbHNjcmVlbigpO1xufVxuIiwiLy8gdGhlbWVfb3B0aW9uc19jb250cm9sbGVyLmpzXG5cbmltcG9ydCB7IHRoZW1lQ2hhbmdlIH0gZnJvbSBcInRoZW1lLWNoYW5nZVwiO1xuXG4vLyBGdW5jdGlvbiB0byBsb2FkIHRoZW1lIG9wdGlvbnNcbmV4cG9ydCBmdW5jdGlvbiBsb2FkVGhlbWVPcHRpb25zKCkge1xuICBjb25zdCB0aGVtZVZhbHVlcyA9IFtcbiAgICBcImRhcmtcIixcbiAgICBcImxpZ2h0XCIsXG4gICAgXCJjdXBjYWtlXCIsXG4gICAgXCJidW1ibGViZWVcIixcbiAgICBcImVtZXJhbGRcIixcbiAgICBcImNvcnBvcmF0ZVwiLFxuICAgIFwic3ludGh3YXZlXCIsXG4gICAgXCJyZXRyb1wiLFxuICAgIFwiY3liZXJwdW5rXCIsXG4gIF07XG5cbiAgY29uc3Qgc2V0dGluZ3NUaGVtZVNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGVtZS1zZWxlY3RvclwiKTtcblxuICBpZiAodHlwZW9mIFN0b3JhZ2UgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjb25zdCBjdXJyZW50VGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpO1xuICAgIHNldHRpbmdzVGhlbWVTZWxlY3Rvci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgdGhlbWVWYWx1ZXMuZm9yRWFjaCgodGhlbWUpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb24udmFsdWUgPSB0aGVtZTtcbiAgICAgIG9wdGlvbi50ZXh0ID0gdGhlbWU7XG5cbiAgICAgIGlmICh0aGVtZSA9PT0gY3VycmVudFRoZW1lKSB7XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHNldHRpbmdzVGhlbWVTZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgbm9uZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbm9uZU9wdGlvbi52YWx1ZSA9IFwibm9uZVwiO1xuICAgIG5vbmVPcHRpb24udGV4dCA9IFwiVGhlbWVcIjtcblxuICAgIGlmICghdGhlbWVWYWx1ZXMuaW5jbHVkZXMoY3VycmVudFRoZW1lKSkge1xuICAgICAgbm9uZU9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgc2V0dGluZ3NUaGVtZVNlbGVjdG9yLmFwcGVuZENoaWxkKG5vbmVPcHRpb24pO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJsb2NhbFN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZS4gVGhlbWUgcGVyc2lzdGVuY2UgbWF5IG5vdCB3b3JrLlwiKTtcbiAgfVxuXG4gIGluaXRpYWxpemVDb250cmFzdFNsaWRlckV2ZW50TGlzdGVuZXJzKCk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSBjb2xvciBjb250cmFzdFxuZnVuY3Rpb24gdXBkYXRlQ29sb3JDb250cmFzdCh2YWx1ZSkge1xuICBjb25zdCBjb250cmFzdENsYXNzTmFtZSA9IGBjb250cmFzdC1bLiR7dmFsdWV9XWA7XG4gIGNvbnNvbGUubG9nKGNvbnRyYXN0Q2xhc3NOYW1lKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPVxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoL2NvbnRyYXN0LVxcW1xcLlxcZCtcXF0vLCBcIlwiKSArXG4gICAgXCIgXCIgK1xuICAgIGNvbnRyYXN0Q2xhc3NOYW1lO1xufVxuXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgc2xpZGVyIHZhbHVlIGluIHRoZSBvYmplY3RcbmZ1bmN0aW9uIHVwZGF0ZVNsaWRlclZhbHVlKHNsaWRlcklkLCB2YWx1ZSkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzbGlkZXJJZCwgdmFsdWUpO1xufVxuXG4vLyBGdW5jdGlvbiB0byBzZXQgdGhlIGRlZmF1bHQgdGhlbWVcbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0VGhlbWUoKSB7XG4gIGNvbnN0IGRlZmF1bHRUaGVtZSA9IFwiZGFya1wiO1xuXG4gIGlmICh0eXBlb2YgU3RvcmFnZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgZGVmYXVsdFRoZW1lKTtcbiAgICB0aGVtZUNoYW5nZShkZWZhdWx0VGhlbWUpO1xuXG4gICAgLy8gUmVzZXQgdGhlIGNvbnRyYXN0IHZhbHVlIHRvIDBcbiAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSAwO1xuICAgIHVwZGF0ZUNvbG9yQ29udHJhc3QoZGVmYXVsdFZhbHVlKTtcbiAgICB1cGRhdGVTbGlkZXJWYWx1ZShcImNvbG9yLWNvbnRyYXN0LXNsaWRlclwiLCBkZWZhdWx0VmFsdWUpO1xuXG4gICAgLy8gQWxzbyB1cGRhdGUgdGhlIHNsaWRlciBlbGVtZW50IGRpcmVjdGx5XG4gICAgY29uc3Qgc2V0dGluZ3NDb2xvckNvbnRyYXN0U2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xvci1jb250cmFzdC1zbGlkZXJcIik7XG4gICAgaWYgKHNldHRpbmdzQ29sb3JDb250cmFzdFNsaWRlcikge1xuICAgICAgc2V0dGluZ3NDb2xvckNvbnRyYXN0U2xpZGVyLnZhbHVlID0gZGVmYXVsdFZhbHVlO1xuXG4gICAgICAvLyBUcmlnZ2VyIHRoZSBpbnB1dCBldmVudCB0byBlbnN1cmUgdGhlIHZhbHVlIGlzIHVwZGF0ZWQgaW4gdGhlIEhUTUxcbiAgICAgIGNvbnN0IGlucHV0RXZlbnQgPSBuZXcgRXZlbnQoXCJpbnB1dFwiLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUgfSk7XG4gICAgICBzZXR0aW5nc0NvbG9yQ29udHJhc3RTbGlkZXIuZGlzcGF0Y2hFdmVudChpbnB1dEV2ZW50KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcihcImxvY2FsU3RvcmFnZSBpcyBub3QgYXZhaWxhYmxlLiBUaGVtZSBwZXJzaXN0ZW5jZSBtYXkgbm90IHdvcmsuXCIpO1xuICB9XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGFkZCBjbGljayBldmVudCBsaXN0ZW5lciB0byB0aGUgZGVmYXVsdCBidXR0b25cbmV4cG9ydCBmdW5jdGlvbiBhZGREZWZhdWx0QnV0dG9uQ2xpY2tFdmVudCgpIHtcbiAgY29uc3QgZGVmYXVsdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmYXVsdEJ1dHRvblwiKTtcbiAgaWYgKGRlZmF1bHRCdXR0b24pIHtcbiAgICBkZWZhdWx0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBzZXREZWZhdWx0VGhlbWUoKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBGdW5jdGlvbiB0byBpbml0aWFsaXplIGNvbnRyYXN0IHNsaWRlciBldmVudCBsaXN0ZW5lcnNcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQ29udHJhc3RTbGlkZXJFdmVudExpc3RlbmVycygpIHtcbiAgY29uc3Qgc2V0dGluZ3NDb2xvckNvbnRyYXN0U2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xvci1jb250cmFzdC1zbGlkZXJcIik7XG5cbiAgaWYgKHNldHRpbmdzQ29sb3JDb250cmFzdFNsaWRlcikge1xuICAgIC8vIFNhdmUgdGhlIGluaXRpYWwgdmFsdWUgdG8gdGhlIHNsaWRlclZhbHVlcyBvYmplY3RcbiAgICBjb25zdCBzYXZlZFZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc2V0dGluZ3NDb2xvckNvbnRyYXN0U2xpZGVyLmlkKTtcbiAgICBzZXR0aW5nc0NvbG9yQ29udHJhc3RTbGlkZXIudmFsdWUgPSBzYXZlZFZhbHVlIHx8IDA7XG5cbiAgICBzZXR0aW5nc0NvbG9yQ29udHJhc3RTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGNvbnRyYXN0VmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgdXBkYXRlQ29sb3JDb250cmFzdChjb250cmFzdFZhbHVlKTtcbiAgICAgIHVwZGF0ZVNsaWRlclZhbHVlKHRoaXMuaWQsIGNvbnRyYXN0VmFsdWUpO1xuICAgIH0pO1xuXG4gICAgLy8gVHJpZ2dlciB0aGUgaW5wdXQgZXZlbnQgdG8gZW5zdXJlIHRoZSB2YWx1ZSBpcyB1cGRhdGVkIGluIHRoZSBIVE1MXG4gICAgY29uc3QgaW5wdXRFdmVudCA9IG5ldyBFdmVudChcImlucHV0XCIsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KTtcbiAgICBzZXR0aW5nc0NvbG9yQ29udHJhc3RTbGlkZXIuZGlzcGF0Y2hFdmVudChpbnB1dEV2ZW50KTtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaHRteF9jb250cm9sbGVyLmpzXG5cbmltcG9ydCB7IHRoZW1lQ2hhbmdlIH0gZnJvbSBcInRoZW1lLWNoYW5nZVwiO1xuaW1wb3J0IHsgaW5pdEZ1bGxzY3JlZW4sIHVwZGF0ZUZ1bGxzY3JlZW4gfSBmcm9tIFwiLi9mdWxsX3NjcmVlbl9jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQge1xuICBsb2FkVGhlbWVPcHRpb25zLFxuICBhZGREZWZhdWx0QnV0dG9uQ2xpY2tFdmVudCxcbiAgaW5pdGlhbGl6ZUNvbnRyYXN0U2xpZGVyRXZlbnRMaXN0ZW5lcnMsXG59IGZyb20gXCIuL3RoZW1lX29wdGlvbnNfY29udHJvbGxlci5qc1wiO1xuXG4vLyBGdW5jdGlvbiB0byBoYW5kbGUgaHRteCBhZnRlclN3YXAgZXZlbnRcbmZ1bmN0aW9uIGhhbmRsZUFmdGVyU3dhcChldmVudCkge1xuICBjb25zb2xlLmxvZyhcImh0bXg6YWZ0ZXJTd2FwIGV2ZW50IHRyaWdnZXJlZFwiKTtcbiAgdGhlbWVDaGFuZ2UoKTtcbiAgdXBkYXRlRnVsbHNjcmVlbigpO1xuICBsb2FkVGhlbWVPcHRpb25zKCk7XG4gIGluaXRpYWxpemVDb250cmFzdFNsaWRlckV2ZW50TGlzdGVuZXJzKCk7IC8vIEtlZXAgdHJhY2sgb2YgdGhlIHNsaWRlcnMgYWZ0ZXIgZWFjaCBwYWdlIHN3YXBcbn1cblxuLy8gRnVuY3Rpb24gdG8gaW5pdGlhbGl6ZSB0aGUgcGFnZVxuZnVuY3Rpb24gaW5pdGlhbGl6ZVBhZ2UoKSB7XG4gIGNvbnNvbGUubG9nKFwiUGFnZSBsb2FkZWRcIik7XG4gIGluaXRGdWxsc2NyZWVuKCk7XG4gIHRoZW1lQ2hhbmdlKGZhbHNlKTtcbiAgbG9hZFRoZW1lT3B0aW9ucygpO1xuICBhZGREZWZhdWx0QnV0dG9uQ2xpY2tFdmVudCgpO1xuICBpbml0aWFsaXplQ29udHJhc3RTbGlkZXJFdmVudExpc3RlbmVycygpOyAvLyBJbml0aWFsaXplIHNsaWRlciBldmVudCBsaXN0ZW5lcnMgb24gcGFnZSBsb2FkXG59XG5cbi8vIEluaXRpYWwgcGFnZSBsb2FkXG5pbml0aWFsaXplUGFnZSgpO1xuXG4vLyBIYW5kbGUgaHRteCBuYXZpZ2F0aW9uIGZvciBzdWJzZXF1ZW50IHBhZ2UgbG9hZHNcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImh0bXg6bG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGluaXRpYWxpemVQYWdlKCk7XG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImh0bXg6YWZ0ZXJTd2FwXCIsIGhhbmRsZUFmdGVyU3dhcCk7XG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImh0bXg6YWZ0ZXJTd2FwXCIsIGhhbmRsZUFmdGVyU3dhcCk7XG59KTtcblxuLy8gSGFuZGxlIHRoZW1lIGNoYW5nZSBldmVudFxudGhlbWVDaGFuZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==