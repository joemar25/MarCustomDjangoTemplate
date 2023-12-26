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

/***/ "./application/static/js/settings_controller.js":
/*!******************************************************!*\
  !*** ./application/static/js/settings_controller.js ***!
  \******************************************************/
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
    console.error(
      "localStorage is not available. Theme persistence may not work."
    );
  }

  initializeContrastSliderEventListeners();
}

// Function to update color contrast
function updateColorContrast(value) {
  const contrastClassName = `contrast-[.${value}]`; // Corrected format
  console.log(contrastClassName);

  // Get the child elements of the elements with the IDs 'navigation' and 'content'
  const navigationChildren = document.querySelectorAll("#navigation > *");
  const contentChildren = document.querySelectorAll("#content > *");
  const settingsChildren = document.querySelectorAll("#settings_modal > *");

  // Function to update class names for these elements
  const updateClassName = (child) => {
    // Remove existing contrast class
    child.className = child.className
      .split(" ")
      .filter((name) => !name.startsWith("contrast-"))
      .join(" ");
    // Add new contrast class
    child.className += " " + contrastClassName;
  };

  // Update the class names for these elements
  navigationChildren.forEach(updateClassName);
  contentChildren.forEach(updateClassName);
  settingsChildren.forEach(updateClassName);
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
    const settingsColorContrastSlider = document.getElementById(
      "color-contrast-slider"
    );
    if (settingsColorContrastSlider) {
      settingsColorContrastSlider.value = defaultValue;

      // Trigger the input event to ensure the value is updated in the HTML
      const inputEvent = new Event("input", {
        bubbles: true,
        cancelable: true,
      });
      settingsColorContrastSlider.dispatchEvent(inputEvent);
    }
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

// Function to initialize contrast slider event listeners
function initializeContrastSliderEventListeners() {
  const settingsColorContrastSlider = document.getElementById(
    "color-contrast-slider"
  );

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
/* harmony import */ var _settings_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings_controller.js */ "./application/static/js/settings_controller.js");
// htmx_controller.js





// Function to handle htmx afterSwap event
function handleAfterSwap(event) {
  console.log("htmx:afterSwap event triggered");
  (0,theme_change__WEBPACK_IMPORTED_MODULE_0__.themeChange)();
  (0,_full_screen_controller_js__WEBPACK_IMPORTED_MODULE_1__.updateFullscreen)();
  (0,_settings_controller_js__WEBPACK_IMPORTED_MODULE_2__.loadThemeOptions)();
  (0,_settings_controller_js__WEBPACK_IMPORTED_MODULE_2__.initializeContrastSliderEventListeners)(); // Keep track of the sliders after each page swap
}

// Function to initialize the page
function initializePage() {
  console.log("Page loaded");
  (0,_full_screen_controller_js__WEBPACK_IMPORTED_MODULE_1__.initFullscreen)();
  (0,theme_change__WEBPACK_IMPORTED_MODULE_0__.themeChange)(false);
  (0,_settings_controller_js__WEBPACK_IMPORTED_MODULE_2__.loadThemeOptions)();
  (0,_settings_controller_js__WEBPACK_IMPORTED_MODULE_2__.addDefaultButtonClickEvent)();
  (0,_settings_controller_js__WEBPACK_IMPORTED_MODULE_2__.initializeContrastSliderEventListeners)(); // Initialize slider event listeners on page load
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05BOztBQUUyQztBQUNvQztBQUs3Qzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0EsRUFBRSx5REFBVztBQUNiLEVBQUUsNEVBQWdCO0FBQ2xCLEVBQUUseUVBQWdCO0FBQ2xCLEVBQUUsK0ZBQXNDLElBQUk7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSwwRUFBYztBQUNoQixFQUFFLHlEQUFXO0FBQ2IsRUFBRSx5RUFBZ0I7QUFDbEIsRUFBRSxtRkFBMEI7QUFDNUIsRUFBRSwrRkFBc0MsSUFBSTtBQUM1Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EseURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy90aGVtZS1jaGFuZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvLi9hcHBsaWNhdGlvbi9zdGF0aWMvanMvZnVsbF9zY3JlZW5fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS8uL2FwcGxpY2F0aW9uL3N0YXRpYy9qcy9zZXR0aW5nc19jb250cm9sbGVyLmpzIiwid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvLi9hcHBsaWNhdGlvbi9zdGF0aWMvanMvaHRteF9jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHRoZW1lVG9nZ2xlKCl7dmFyIHRvZ2dsZUVsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2dnbGUtdGhlbWVdXCIpO3ZhciBkYXRhS2V5PXRvZ2dsZUVsP3RvZ2dsZUVsLmdldEF0dHJpYnV0ZShcImRhdGEta2V5XCIpOm51bGw7KGZ1bmN0aW9uKHRoZW1lPWxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpKXtpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIix0aGVtZSk7aWYodG9nZ2xlRWwpe1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdG9nZ2xlLXRoZW1lXVwiKV0uZm9yRWFjaChlbD0+e2VsLmNsYXNzTGlzdC5hZGQodG9nZ2xlRWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpfSl9fX0pKCk7aWYodG9nZ2xlRWwpe1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdG9nZ2xlLXRoZW1lXVwiKV0uZm9yRWFjaChlbD0+e2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7dmFyIHRoZW1lc0xpc3Q9ZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS10b2dnbGUtdGhlbWVcIik7aWYodGhlbWVzTGlzdCl7dmFyIHRoZW1lc0FycmF5PXRoZW1lc0xpc3Quc3BsaXQoXCIsXCIpO2lmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIpPT10aGVtZXNBcnJheVswXSl7aWYodGhlbWVzQXJyYXkubGVuZ3RoPT0xKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS10aGVtZVwiKTtsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKX1lbHNle2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsdGhlbWVzQXJyYXlbMV0pO2xvY2FsU3RvcmFnZS5zZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIsdGhlbWVzQXJyYXlbMV0pfX1lbHNle2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsdGhlbWVzQXJyYXlbMF0pO2xvY2FsU3RvcmFnZS5zZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIsdGhlbWVzQXJyYXlbMF0pfX1bLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRvZ2dsZS10aGVtZV1cIildLmZvckVhY2goZWw9PntlbC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpfSl9KX0pfX1mdW5jdGlvbiB0aGVtZUJ0bigpe3ZhciBidG5FbD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc2V0LXRoZW1lPScnXVwiKTt2YXIgZGF0YUtleT1idG5FbD9idG5FbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiKTpudWxsOyhmdW5jdGlvbih0aGVtZT1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKSl7aWYodGhlbWUhPXVuZGVmaW5lZCYmdGhlbWUhPVwiXCIpe2lmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpJiZsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKSE9XCJcIil7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIix0aGVtZSk7dmFyIGJ0bkVsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zZXQtdGhlbWU9J1wiK3RoZW1lLnRvU3RyaW5nKCkrXCInXVwiKTtpZihidG5FbCl7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zZXQtdGhlbWVdXCIpXS5mb3JFYWNoKGVsPT57ZWwuY2xhc3NMaXN0LnJlbW92ZShlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl9KTtpZihidG5FbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl7YnRuRWwuY2xhc3NMaXN0LmFkZChidG5FbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl9fX1lbHNle3ZhciBidG5FbD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc2V0LXRoZW1lPScnXVwiKTtpZihidG5FbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl7YnRuRWwuY2xhc3NMaXN0LmFkZChidG5FbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl9fX19KSgpO1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc2V0LXRoZW1lXVwiKV0uZm9yRWFjaChlbD0+e2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIix0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtc2V0LXRoZW1lXCIpKTtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiLGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIpKTtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXNldC10aGVtZV1cIildLmZvckVhY2goZWw9PntlbC5jbGFzc0xpc3QucmVtb3ZlKGVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKX0pO2lmKGVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKXtlbC5jbGFzc0xpc3QuYWRkKGVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKX19KX0pfWZ1bmN0aW9uIHRoZW1lU2VsZWN0KCl7dmFyIHNlbGVjdEVsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RbZGF0YS1jaG9vc2UtdGhlbWVdXCIpO3ZhciBkYXRhS2V5PXNlbGVjdEVsP3NlbGVjdEVsLmdldEF0dHJpYnV0ZShcImRhdGEta2V5XCIpOm51bGw7KGZ1bmN0aW9uKHRoZW1lPWxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpKXtpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIix0aGVtZSk7dmFyIG9wdGlvblRvZ2dsZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdFtkYXRhLWNob29zZS10aGVtZV0gW3ZhbHVlPSdcIit0aGVtZS50b1N0cmluZygpK1wiJ11cIik7aWYob3B0aW9uVG9nZ2xlcil7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWxlY3RbZGF0YS1jaG9vc2UtdGhlbWVdIFt2YWx1ZT0nXCIrdGhlbWUudG9TdHJpbmcoKStcIiddXCIpXS5mb3JFYWNoKGVsPT57ZWwuc2VsZWN0ZWQ9dHJ1ZX0pfX19KSgpO2lmKHNlbGVjdEVsKXtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdFtkYXRhLWNob29zZS10aGVtZV1cIildLmZvckVhY2goZWw9PntlbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsZnVuY3Rpb24oKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLHRoaXMudmFsdWUpO2xvY2FsU3RvcmFnZS5zZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIikpO1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VsZWN0W2RhdGEtY2hvb3NlLXRoZW1lXSBbdmFsdWU9J1wiK2xvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpK1wiJ11cIildLmZvckVhY2goZWw9PntlbC5zZWxlY3RlZD10cnVlfSl9KX0pfX1mdW5jdGlvbiB0aGVtZUNoYW5nZShhdHRhY2g9dHJ1ZSl7aWYoYXR0YWNoPT09dHJ1ZSl7ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixmdW5jdGlvbihldmVudCl7dGhlbWVUb2dnbGUoKTt0aGVtZVNlbGVjdCgpO3RoZW1lQnRuKCl9KX1lbHNle3RoZW1lVG9nZ2xlKCk7dGhlbWVTZWxlY3QoKTt0aGVtZUJ0bigpfX1pZih0eXBlb2YgZXhwb3J0cyE9XCJ1bmRlZmluZWRcIil7bW9kdWxlLmV4cG9ydHM9e3RoZW1lQ2hhbmdlOnRoZW1lQ2hhbmdlfX1lbHNle3RoZW1lQ2hhbmdlKCl9IiwiLy8gZnVsbHNjcmVlbl9jb250cm9sbGVyLmpzXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RnVsbHNjcmVlbigpIHtcbiAgLy8gQXR0YWNoIHRoZSBjbGljayBldmVudCBsaXN0ZW5lciB0byB0aGUgYnV0dG9uXG4gIGNvbnN0IGZ1bGxzY3JlZW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZ1bGxzY3JlZW4tYnRuXCIpO1xuICBpZiAoZnVsbHNjcmVlbkJ0bikge1xuICAgIGZ1bGxzY3JlZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUZ1bGxzY3JlZW4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUZ1bGxzY3JlZW4oKSB7XG4gIGNvbnN0IHNjcmVlbiA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICBpZiAoXG4gICAgIWRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ICYmXG4gICAgIWRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbGVtZW50ICYmXG4gICAgIWRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50ICYmXG4gICAgIWRvY3VtZW50Lm1zRnVsbHNjcmVlbkVsZW1lbnRcbiAgKSB7XG4gICAgaWYgKHNjcmVlbi5yZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgc2NyZWVuLnJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgfSBlbHNlIGlmIChzY3JlZW4ubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgc2NyZWVuLm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKHNjcmVlbi5tb3pSZXF1ZXN0RnVsbFNjcmVlbikge1xuICAgICAgc2NyZWVuLm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XG4gICAgfSBlbHNlIGlmIChzY3JlZW4ud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgIHNjcmVlbi53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKSB7XG4gICAgICBkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKCk7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKSB7XG4gICAgICBkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKCk7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbikge1xuICAgICAgZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUZ1bGxzY3JlZW4oKSB7XG4gIC8vIExvZ2ljIHRvIHVwZGF0ZSBmdWxsc2NyZWVuIGFmdGVyIGh0bXggY29udGVudCB1cGRhdGVzXG4gIGluaXRGdWxsc2NyZWVuKCk7XG59XG4iLCIvLyB0aGVtZV9vcHRpb25zX2NvbnRyb2xsZXIuanNcblxuaW1wb3J0IHsgdGhlbWVDaGFuZ2UgfSBmcm9tIFwidGhlbWUtY2hhbmdlXCI7XG5cbi8vIEZ1bmN0aW9uIHRvIGxvYWQgdGhlbWUgb3B0aW9uc1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRUaGVtZU9wdGlvbnMoKSB7XG4gIGNvbnN0IHRoZW1lVmFsdWVzID0gW1xuICAgIFwiZGFya1wiLFxuICAgIFwibGlnaHRcIixcbiAgICBcImN1cGNha2VcIixcbiAgICBcImJ1bWJsZWJlZVwiLFxuICAgIFwiZW1lcmFsZFwiLFxuICAgIFwiY29ycG9yYXRlXCIsXG4gICAgXCJzeW50aHdhdmVcIixcbiAgICBcInJldHJvXCIsXG4gICAgXCJjeWJlcnB1bmtcIixcbiAgXTtcblxuICBjb25zdCBzZXR0aW5nc1RoZW1lU2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoZW1lLXNlbGVjdG9yXCIpO1xuXG4gIGlmICh0eXBlb2YgU3RvcmFnZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNvbnN0IGN1cnJlbnRUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIik7XG4gICAgc2V0dGluZ3NUaGVtZVNlbGVjdG9yLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICB0aGVtZVZhbHVlcy5mb3JFYWNoKCh0aGVtZSkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIG9wdGlvbi52YWx1ZSA9IHRoZW1lO1xuICAgICAgb3B0aW9uLnRleHQgPSB0aGVtZTtcblxuICAgICAgaWYgKHRoZW1lID09PSBjdXJyZW50VGhlbWUpIHtcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgc2V0dGluZ3NUaGVtZVNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBub25lT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBub25lT3B0aW9uLnZhbHVlID0gXCJub25lXCI7XG4gICAgbm9uZU9wdGlvbi50ZXh0ID0gXCJUaGVtZVwiO1xuXG4gICAgaWYgKCF0aGVtZVZhbHVlcy5pbmNsdWRlcyhjdXJyZW50VGhlbWUpKSB7XG4gICAgICBub25lT3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXR0aW5nc1RoZW1lU2VsZWN0b3IuYXBwZW5kQ2hpbGQobm9uZU9wdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwibG9jYWxTdG9yYWdlIGlzIG5vdCBhdmFpbGFibGUuIFRoZW1lIHBlcnNpc3RlbmNlIG1heSBub3Qgd29yay5cIlxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXplQ29udHJhc3RTbGlkZXJFdmVudExpc3RlbmVycygpO1xufVxuXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgY29sb3IgY29udHJhc3RcbmZ1bmN0aW9uIHVwZGF0ZUNvbG9yQ29udHJhc3QodmFsdWUpIHtcbiAgY29uc3QgY29udHJhc3RDbGFzc05hbWUgPSBgY29udHJhc3QtWy4ke3ZhbHVlfV1gOyAvLyBDb3JyZWN0ZWQgZm9ybWF0XG4gIGNvbnNvbGUubG9nKGNvbnRyYXN0Q2xhc3NOYW1lKTtcblxuICAvLyBHZXQgdGhlIGNoaWxkIGVsZW1lbnRzIG9mIHRoZSBlbGVtZW50cyB3aXRoIHRoZSBJRHMgJ25hdmlnYXRpb24nIGFuZCAnY29udGVudCdcbiAgY29uc3QgbmF2aWdhdGlvbkNoaWxkcmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNuYXZpZ2F0aW9uID4gKlwiKTtcbiAgY29uc3QgY29udGVudENoaWxkcmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNjb250ZW50ID4gKlwiKTtcbiAgY29uc3Qgc2V0dGluZ3NDaGlsZHJlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjc2V0dGluZ3NfbW9kYWwgPiAqXCIpO1xuXG4gIC8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSBjbGFzcyBuYW1lcyBmb3IgdGhlc2UgZWxlbWVudHNcbiAgY29uc3QgdXBkYXRlQ2xhc3NOYW1lID0gKGNoaWxkKSA9PiB7XG4gICAgLy8gUmVtb3ZlIGV4aXN0aW5nIGNvbnRyYXN0IGNsYXNzXG4gICAgY2hpbGQuY2xhc3NOYW1lID0gY2hpbGQuY2xhc3NOYW1lXG4gICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAuZmlsdGVyKChuYW1lKSA9PiAhbmFtZS5zdGFydHNXaXRoKFwiY29udHJhc3QtXCIpKVxuICAgICAgLmpvaW4oXCIgXCIpO1xuICAgIC8vIEFkZCBuZXcgY29udHJhc3QgY2xhc3NcbiAgICBjaGlsZC5jbGFzc05hbWUgKz0gXCIgXCIgKyBjb250cmFzdENsYXNzTmFtZTtcbiAgfTtcblxuICAvLyBVcGRhdGUgdGhlIGNsYXNzIG5hbWVzIGZvciB0aGVzZSBlbGVtZW50c1xuICBuYXZpZ2F0aW9uQ2hpbGRyZW4uZm9yRWFjaCh1cGRhdGVDbGFzc05hbWUpO1xuICBjb250ZW50Q2hpbGRyZW4uZm9yRWFjaCh1cGRhdGVDbGFzc05hbWUpO1xuICBzZXR0aW5nc0NoaWxkcmVuLmZvckVhY2godXBkYXRlQ2xhc3NOYW1lKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gdXBkYXRlIHNsaWRlciB2YWx1ZSBpbiB0aGUgb2JqZWN0XG5mdW5jdGlvbiB1cGRhdGVTbGlkZXJWYWx1ZShzbGlkZXJJZCwgdmFsdWUpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc2xpZGVySWQsIHZhbHVlKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gc2V0IHRoZSBkZWZhdWx0IHRoZW1lXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdFRoZW1lKCkge1xuICBjb25zdCBkZWZhdWx0VGhlbWUgPSBcImRhcmtcIjtcblxuICBpZiAodHlwZW9mIFN0b3JhZ2UgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIGRlZmF1bHRUaGVtZSk7XG4gICAgdGhlbWVDaGFuZ2UoZGVmYXVsdFRoZW1lKTtcblxuICAgIC8vIFJlc2V0IHRoZSBjb250cmFzdCB2YWx1ZSB0byAwXG4gICAgY29uc3QgZGVmYXVsdFZhbHVlID0gMDtcbiAgICB1cGRhdGVDb2xvckNvbnRyYXN0KGRlZmF1bHRWYWx1ZSk7XG4gICAgdXBkYXRlU2xpZGVyVmFsdWUoXCJjb2xvci1jb250cmFzdC1zbGlkZXJcIiwgZGVmYXVsdFZhbHVlKTtcblxuICAgIC8vIEFsc28gdXBkYXRlIHRoZSBzbGlkZXIgZWxlbWVudCBkaXJlY3RseVxuICAgIGNvbnN0IHNldHRpbmdzQ29sb3JDb250cmFzdFNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJjb2xvci1jb250cmFzdC1zbGlkZXJcIlxuICAgICk7XG4gICAgaWYgKHNldHRpbmdzQ29sb3JDb250cmFzdFNsaWRlcikge1xuICAgICAgc2V0dGluZ3NDb2xvckNvbnRyYXN0U2xpZGVyLnZhbHVlID0gZGVmYXVsdFZhbHVlO1xuXG4gICAgICAvLyBUcmlnZ2VyIHRoZSBpbnB1dCBldmVudCB0byBlbnN1cmUgdGhlIHZhbHVlIGlzIHVwZGF0ZWQgaW4gdGhlIEhUTUxcbiAgICAgIGNvbnN0IGlucHV0RXZlbnQgPSBuZXcgRXZlbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHNldHRpbmdzQ29sb3JDb250cmFzdFNsaWRlci5kaXNwYXRjaEV2ZW50KGlucHV0RXZlbnQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCJsb2NhbFN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZS4gVGhlbWUgcGVyc2lzdGVuY2UgbWF5IG5vdCB3b3JrLlwiXG4gICAgKTtcbiAgfVxufVxuXG4vLyBGdW5jdGlvbiB0byBhZGQgY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGRlZmF1bHQgYnV0dG9uXG5leHBvcnQgZnVuY3Rpb24gYWRkRGVmYXVsdEJ1dHRvbkNsaWNrRXZlbnQoKSB7XG4gIGNvbnN0IGRlZmF1bHRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmF1bHRCdXR0b25cIik7XG4gIGlmIChkZWZhdWx0QnV0dG9uKSB7XG4gICAgZGVmYXVsdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2V0RGVmYXVsdFRoZW1lKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gRnVuY3Rpb24gdG8gaW5pdGlhbGl6ZSBjb250cmFzdCBzbGlkZXIgZXZlbnQgbGlzdGVuZXJzXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUNvbnRyYXN0U2xpZGVyRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IHNldHRpbmdzQ29sb3JDb250cmFzdFNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwiY29sb3ItY29udHJhc3Qtc2xpZGVyXCJcbiAgKTtcblxuICBpZiAoc2V0dGluZ3NDb2xvckNvbnRyYXN0U2xpZGVyKSB7XG4gICAgLy8gU2F2ZSB0aGUgaW5pdGlhbCB2YWx1ZSB0byB0aGUgc2xpZGVyVmFsdWVzIG9iamVjdFxuICAgIGNvbnN0IHNhdmVkVmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzZXR0aW5nc0NvbG9yQ29udHJhc3RTbGlkZXIuaWQpO1xuICAgIHNldHRpbmdzQ29sb3JDb250cmFzdFNsaWRlci52YWx1ZSA9IHNhdmVkVmFsdWUgfHwgMDtcblxuICAgIHNldHRpbmdzQ29sb3JDb250cmFzdFNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgY29udHJhc3RWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICB1cGRhdGVDb2xvckNvbnRyYXN0KGNvbnRyYXN0VmFsdWUpO1xuICAgICAgdXBkYXRlU2xpZGVyVmFsdWUodGhpcy5pZCwgY29udHJhc3RWYWx1ZSk7XG4gICAgfSk7XG5cbiAgICAvLyBUcmlnZ2VyIHRoZSBpbnB1dCBldmVudCB0byBlbnN1cmUgdGhlIHZhbHVlIGlzIHVwZGF0ZWQgaW4gdGhlIEhUTUxcbiAgICBjb25zdCBpbnB1dEV2ZW50ID0gbmV3IEV2ZW50KFwiaW5wdXRcIiwgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH0pO1xuICAgIHNldHRpbmdzQ29sb3JDb250cmFzdFNsaWRlci5kaXNwYXRjaEV2ZW50KGlucHV0RXZlbnQpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGh0bXhfY29udHJvbGxlci5qc1xuXG5pbXBvcnQgeyB0aGVtZUNoYW5nZSB9IGZyb20gXCJ0aGVtZS1jaGFuZ2VcIjtcbmltcG9ydCB7IGluaXRGdWxsc2NyZWVuLCB1cGRhdGVGdWxsc2NyZWVuIH0gZnJvbSBcIi4vZnVsbF9zY3JlZW5fY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHtcbiAgbG9hZFRoZW1lT3B0aW9ucyxcbiAgYWRkRGVmYXVsdEJ1dHRvbkNsaWNrRXZlbnQsXG4gIGluaXRpYWxpemVDb250cmFzdFNsaWRlckV2ZW50TGlzdGVuZXJzLFxufSBmcm9tIFwiLi9zZXR0aW5nc19jb250cm9sbGVyLmpzXCI7XG5cbi8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBodG14IGFmdGVyU3dhcCBldmVudFxuZnVuY3Rpb24gaGFuZGxlQWZ0ZXJTd2FwKGV2ZW50KSB7XG4gIGNvbnNvbGUubG9nKFwiaHRteDphZnRlclN3YXAgZXZlbnQgdHJpZ2dlcmVkXCIpO1xuICB0aGVtZUNoYW5nZSgpO1xuICB1cGRhdGVGdWxsc2NyZWVuKCk7XG4gIGxvYWRUaGVtZU9wdGlvbnMoKTtcbiAgaW5pdGlhbGl6ZUNvbnRyYXN0U2xpZGVyRXZlbnRMaXN0ZW5lcnMoKTsgLy8gS2VlcCB0cmFjayBvZiB0aGUgc2xpZGVycyBhZnRlciBlYWNoIHBhZ2Ugc3dhcFxufVxuXG4vLyBGdW5jdGlvbiB0byBpbml0aWFsaXplIHRoZSBwYWdlXG5mdW5jdGlvbiBpbml0aWFsaXplUGFnZSgpIHtcbiAgY29uc29sZS5sb2coXCJQYWdlIGxvYWRlZFwiKTtcbiAgaW5pdEZ1bGxzY3JlZW4oKTtcbiAgdGhlbWVDaGFuZ2UoZmFsc2UpO1xuICBsb2FkVGhlbWVPcHRpb25zKCk7XG4gIGFkZERlZmF1bHRCdXR0b25DbGlja0V2ZW50KCk7XG4gIGluaXRpYWxpemVDb250cmFzdFNsaWRlckV2ZW50TGlzdGVuZXJzKCk7IC8vIEluaXRpYWxpemUgc2xpZGVyIGV2ZW50IGxpc3RlbmVycyBvbiBwYWdlIGxvYWRcbn1cblxuLy8gSW5pdGlhbCBwYWdlIGxvYWRcbmluaXRpYWxpemVQYWdlKCk7XG5cbi8vIEhhbmRsZSBodG14IG5hdmlnYXRpb24gZm9yIHN1YnNlcXVlbnQgcGFnZSBsb2Fkc1xuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiaHRteDpsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgaW5pdGlhbGl6ZVBhZ2UoKTtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwiaHRteDphZnRlclN3YXBcIiwgaGFuZGxlQWZ0ZXJTd2FwKTtcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiaHRteDphZnRlclN3YXBcIiwgaGFuZGxlQWZ0ZXJTd2FwKTtcbn0pO1xuXG4vLyBIYW5kbGUgdGhlbWUgY2hhbmdlIGV2ZW50XG50aGVtZUNoYW5nZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9