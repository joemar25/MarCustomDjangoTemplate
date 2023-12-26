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

/***/ "./application/static/js/loader.js":
/*!*****************************************!*\
  !*** ./application/static/js/loader.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeSkeleton: () => (/* binding */ removeSkeleton)
/* harmony export */ });
// loader.js

function removeSkeleton() {
    document.querySelector('.loader').style.display = 'none';
    var skeleton = document.querySelectorAll('.skeleton');
    skeleton.forEach(function (element) {
        element.classList.remove('skeleton');
    });

    // Remove the loading class to stop the animation
    document.body.classList.remove("loading");
}

// Initial load
document.addEventListener("load", removeSkeleton);

// Fallback for onload
window.onload = removeSkeleton;

// Handle htmx navigation
document.body.addEventListener("htmx:load", removeSkeleton);


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
// settings_controller.js



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
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader.js */ "./application/static/js/loader.js");



 // Import the removeSkeleton function

// Function to handle htmx afterSwap event
function handleAfterSwap(event) {
  console.log("htmx:afterSwap event triggered");
  (0,theme_change__WEBPACK_IMPORTED_MODULE_0__.themeChange)();
  (0,_full_screen_controller_js__WEBPACK_IMPORTED_MODULE_1__.updateFullscreen)();
  (0,_settings_controller_js__WEBPACK_IMPORTED_MODULE_2__.loadThemeOptions)();
  (0,_settings_controller_js__WEBPACK_IMPORTED_MODULE_2__.initializeContrastSliderEventListeners)();
}

// Function to initialize the page with loader
function initializePageWithLoader() {
  console.log("Page loaded with loader");

  // Add loading class to start the animation
  document.body.classList.add("loading");

  // remove the loader when content is loaded
  (0,_loader_js__WEBPACK_IMPORTED_MODULE_3__.removeSkeleton)();

  (0,_full_screen_controller_js__WEBPACK_IMPORTED_MODULE_1__.initFullscreen)();
  (0,theme_change__WEBPACK_IMPORTED_MODULE_0__.themeChange)(false);
  (0,_settings_controller_js__WEBPACK_IMPORTED_MODULE_2__.loadThemeOptions)();
  (0,_settings_controller_js__WEBPACK_IMPORTED_MODULE_2__.addDefaultButtonClickEvent)();
  (0,_settings_controller_js__WEBPACK_IMPORTED_MODULE_2__.initializeContrastSliderEventListeners)();
}

// Initial page load with loader
initializePageWithLoader();

// Handle htmx navigation for subsequent page loads
document.body.addEventListener("htmx:load", function () {
  initializePageWithLoader();
  document.body.removeEventListener("htmx:afterSwap", handleAfterSwap);
  document.body.addEventListener("htmx:afterSwap", handleAfterSwap);
});

// Handle theme change event
(0,theme_change__WEBPACK_IMPORTED_MODULE_0__.themeChange)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUJBQXVCLDJEQUEyRCw0REFBNEQsK0RBQStELGtEQUFrRCwwREFBMEQsYUFBYSxtRUFBbUUsMERBQTBELElBQUksSUFBSSxhQUFhLG1FQUFtRSx1Q0FBdUMsb0RBQW9ELGVBQWUsc0NBQXNDLHdFQUF3RSwwQkFBMEIsdURBQXVELGlEQUFpRCxLQUFLLG1FQUFtRSw4REFBOEQsS0FBSyxtRUFBbUUsOERBQThELG1FQUFtRSx5REFBeUQsRUFBRSxFQUFFLEdBQUcsb0JBQW9CLHdEQUF3RCxzREFBc0QsK0RBQStELGdDQUFnQyxxR0FBcUcsMERBQTBELDRFQUE0RSxVQUFVLGdFQUFnRSx1REFBdUQsRUFBRSx5Q0FBeUMsNERBQTRELEtBQUssd0RBQXdELHlDQUF5Qyw2REFBNkQsSUFBSSxnRUFBZ0UsdUNBQXVDLHdGQUF3RixrR0FBa0csZ0VBQWdFLHVEQUF1RCxFQUFFLHNDQUFzQyxxREFBcUQsRUFBRSxFQUFFLHVCQUF1QixpRUFBaUUsNERBQTRELCtEQUErRCxrREFBa0QsMERBQTBELHFHQUFxRyxrQkFBa0Isd0dBQXdHLGlCQUFpQixJQUFJLElBQUksYUFBYSx5RUFBeUUsd0NBQXdDLCtEQUErRCxrR0FBa0cscUlBQXFJLGlCQUFpQixFQUFFLEVBQUUsR0FBRyxrQ0FBa0Msa0JBQWtCLDZEQUE2RCxjQUFjLGNBQWMsV0FBVyxFQUFFLEtBQUssY0FBYyxjQUFjLFlBQVksR0FBRyxJQUEyQixFQUFFLGdCQUFnQix5QkFBeUIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQ0EvMUg7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBOztBQUUyQzs7QUFFM0M7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsTUFBTSxJQUFJO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHlEQUFXOztBQUVmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDRDQUE0QyxpQ0FBaUM7QUFDN0U7QUFDQTtBQUNBOzs7Ozs7O1VDeEpBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjJDO0FBQ29DO0FBSzdDO0FBQ1csQ0FBQzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0EsRUFBRSx5REFBVztBQUNiLEVBQUUsNEVBQWdCO0FBQ2xCLEVBQUUseUVBQWdCO0FBQ2xCLEVBQUUsK0ZBQXNDO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSwwREFBYzs7QUFFaEIsRUFBRSwwRUFBYztBQUNoQixFQUFFLHlEQUFXO0FBQ2IsRUFBRSx5RUFBZ0I7QUFDbEIsRUFBRSxtRkFBMEI7QUFDNUIsRUFBRSwrRkFBc0M7QUFDeEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHlEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvdGhlbWUtY2hhbmdlL2luZGV4LmpzIiwid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlLy4vYXBwbGljYXRpb24vc3RhdGljL2pzL2Z1bGxfc2NyZWVuX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvLi9hcHBsaWNhdGlvbi9zdGF0aWMvanMvbG9hZGVyLmpzIiwid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlLy4vYXBwbGljYXRpb24vc3RhdGljL2pzL3NldHRpbmdzX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS8uL2FwcGxpY2F0aW9uL3N0YXRpYy9qcy9odG14X2NvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdGhlbWVUb2dnbGUoKXt2YXIgdG9nZ2xlRWw9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZ2dsZS10aGVtZV1cIik7dmFyIGRhdGFLZXk9dG9nZ2xlRWw/dG9nZ2xlRWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1rZXlcIik6bnVsbDsoZnVuY3Rpb24odGhlbWU9bG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIikpe2lmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLHRoZW1lKTtpZih0b2dnbGVFbCl7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10b2dnbGUtdGhlbWVdXCIpXS5mb3JFYWNoKGVsPT57ZWwuY2xhc3NMaXN0LmFkZCh0b2dnbGVFbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl9KX19fSkoKTtpZih0b2dnbGVFbCl7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10b2dnbGUtdGhlbWVdXCIpXS5mb3JFYWNoKGVsPT57ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXt2YXIgdGhlbWVzTGlzdD1lbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZ2dsZS10aGVtZVwiKTtpZih0aGVtZXNMaXN0KXt2YXIgdGhlbWVzQXJyYXk9dGhlbWVzTGlzdC5zcGxpdChcIixcIik7aWYoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIik9PXRoZW1lc0FycmF5WzBdKXtpZih0aGVtZXNBcnJheS5sZW5ndGg9PTEpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIpO2xvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpfWVsc2V7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIix0aGVtZXNBcnJheVsxXSk7bG9jYWxTdG9yYWdlLnNldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIix0aGVtZXNBcnJheVsxXSl9fWVsc2V7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIix0aGVtZXNBcnJheVswXSk7bG9jYWxTdG9yYWdlLnNldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIix0aGVtZXNBcnJheVswXSl9fVsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdG9nZ2xlLXRoZW1lXVwiKV0uZm9yRWFjaChlbD0+e2VsLmNsYXNzTGlzdC50b2dnbGUodGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl9KX0pfSl9fWZ1bmN0aW9uIHRoZW1lQnRuKCl7dmFyIGJ0bkVsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zZXQtdGhlbWU9JyddXCIpO3ZhciBkYXRhS2V5PWJ0bkVsP2J0bkVsLmdldEF0dHJpYnV0ZShcImRhdGEta2V5XCIpOm51bGw7KGZ1bmN0aW9uKHRoZW1lPWxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpKXtpZih0aGVtZSE9dW5kZWZpbmVkJiZ0aGVtZSE9XCJcIil7aWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIikmJmxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpIT1cIlwiKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLHRoZW1lKTt2YXIgYnRuRWw9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXNldC10aGVtZT0nXCIrdGhlbWUudG9TdHJpbmcoKStcIiddXCIpO2lmKGJ0bkVsKXtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXNldC10aGVtZV1cIildLmZvckVhY2goZWw9PntlbC5jbGFzc0xpc3QucmVtb3ZlKGVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKX0pO2lmKGJ0bkVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKXtidG5FbC5jbGFzc0xpc3QuYWRkKGJ0bkVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKX19fWVsc2V7dmFyIGJ0bkVsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zZXQtdGhlbWU9JyddXCIpO2lmKGJ0bkVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKXtidG5FbC5jbGFzc0xpc3QuYWRkKGJ0bkVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKX19fX0pKCk7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zZXQtdGhlbWVdXCIpXS5mb3JFYWNoKGVsPT57ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1zZXQtdGhlbWVcIikpO2xvY2FsU3RvcmFnZS5zZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIikpO1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc2V0LXRoZW1lXVwiKV0uZm9yRWFjaChlbD0+e2VsLmNsYXNzTGlzdC5yZW1vdmUoZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpfSk7aWYoZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpe2VsLmNsYXNzTGlzdC5hZGQoZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpfX0pfSl9ZnVuY3Rpb24gdGhlbWVTZWxlY3QoKXt2YXIgc2VsZWN0RWw9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdFtkYXRhLWNob29zZS10aGVtZV1cIik7dmFyIGRhdGFLZXk9c2VsZWN0RWw/c2VsZWN0RWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1rZXlcIik6bnVsbDsoZnVuY3Rpb24odGhlbWU9bG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIikpe2lmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLHRoZW1lKTt2YXIgb3B0aW9uVG9nZ2xlcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0W2RhdGEtY2hvb3NlLXRoZW1lXSBbdmFsdWU9J1wiK3RoZW1lLnRvU3RyaW5nKCkrXCInXVwiKTtpZihvcHRpb25Ub2dnbGVyKXtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdFtkYXRhLWNob29zZS10aGVtZV0gW3ZhbHVlPSdcIit0aGVtZS50b1N0cmluZygpK1wiJ11cIildLmZvckVhY2goZWw9PntlbC5zZWxlY3RlZD10cnVlfSl9fX0pKCk7aWYoc2VsZWN0RWwpe1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VsZWN0W2RhdGEtY2hvb3NlLXRoZW1lXVwiKV0uZm9yRWFjaChlbD0+e2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIixmdW5jdGlvbigpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsdGhpcy52YWx1ZSk7bG9jYWxTdG9yYWdlLnNldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIixkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiKSk7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWxlY3RbZGF0YS1jaG9vc2UtdGhlbWVdIFt2YWx1ZT0nXCIrbG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIikrXCInXVwiKV0uZm9yRWFjaChlbD0+e2VsLnNlbGVjdGVkPXRydWV9KX0pfSl9fWZ1bmN0aW9uIHRoZW1lQ2hhbmdlKGF0dGFjaD10cnVlKXtpZihhdHRhY2g9PT10cnVlKXtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGZ1bmN0aW9uKGV2ZW50KXt0aGVtZVRvZ2dsZSgpO3RoZW1lU2VsZWN0KCk7dGhlbWVCdG4oKX0pfWVsc2V7dGhlbWVUb2dnbGUoKTt0aGVtZVNlbGVjdCgpO3RoZW1lQnRuKCl9fWlmKHR5cGVvZiBleHBvcnRzIT1cInVuZGVmaW5lZFwiKXttb2R1bGUuZXhwb3J0cz17dGhlbWVDaGFuZ2U6dGhlbWVDaGFuZ2V9fWVsc2V7dGhlbWVDaGFuZ2UoKX0iLCIvLyBmdWxsc2NyZWVuX2NvbnRyb2xsZXIuanNcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRGdWxsc2NyZWVuKCkge1xuICAvLyBBdHRhY2ggdGhlIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBidXR0b25cbiAgY29uc3QgZnVsbHNjcmVlbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnVsbHNjcmVlbi1idG5cIik7XG4gIGlmIChmdWxsc2NyZWVuQnRuKSB7XG4gICAgZnVsbHNjcmVlbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlRnVsbHNjcmVlbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlRnVsbHNjcmVlbigpIHtcbiAgY29uc3Qgc2NyZWVuID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gIGlmIChcbiAgICAhZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgJiZcbiAgICAhZG9jdW1lbnQubW96RnVsbFNjcmVlbkVsZW1lbnQgJiZcbiAgICAhZG9jdW1lbnQud2Via2l0RnVsbHNjcmVlbkVsZW1lbnQgJiZcbiAgICAhZG9jdW1lbnQubXNGdWxsc2NyZWVuRWxlbWVudFxuICApIHtcbiAgICBpZiAoc2NyZWVuLnJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICBzY3JlZW4ucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKHNjcmVlbi5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICBzY3JlZW4ubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgIH0gZWxzZSBpZiAoc2NyZWVuLm1velJlcXVlc3RGdWxsU2NyZWVuKSB7XG4gICAgICBzY3JlZW4ubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKHNjcmVlbi53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgc2NyZWVuLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChkb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xuICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgIGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4pIHtcbiAgICAgIGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICBkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRnVsbHNjcmVlbigpIHtcbiAgLy8gTG9naWMgdG8gdXBkYXRlIGZ1bGxzY3JlZW4gYWZ0ZXIgaHRteCBjb250ZW50IHVwZGF0ZXNcbiAgaW5pdEZ1bGxzY3JlZW4oKTtcbn1cbiIsIi8vIGxvYWRlci5qc1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlU2tlbGV0b24oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdmFyIHNrZWxldG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNrZWxldG9uJyk7XG4gICAgc2tlbGV0b24uZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NrZWxldG9uJyk7XG4gICAgfSk7XG5cbiAgICAvLyBSZW1vdmUgdGhlIGxvYWRpbmcgY2xhc3MgdG8gc3RvcCB0aGUgYW5pbWF0aW9uXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKTtcbn1cblxuLy8gSW5pdGlhbCBsb2FkXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCByZW1vdmVTa2VsZXRvbik7XG5cbi8vIEZhbGxiYWNrIGZvciBvbmxvYWRcbndpbmRvdy5vbmxvYWQgPSByZW1vdmVTa2VsZXRvbjtcblxuLy8gSGFuZGxlIGh0bXggbmF2aWdhdGlvblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiaHRteDpsb2FkXCIsIHJlbW92ZVNrZWxldG9uKTtcbiIsIi8vIHNldHRpbmdzX2NvbnRyb2xsZXIuanNcblxuaW1wb3J0IHsgdGhlbWVDaGFuZ2UgfSBmcm9tIFwidGhlbWUtY2hhbmdlXCI7XG5cbi8vIEZ1bmN0aW9uIHRvIGxvYWQgdGhlbWUgb3B0aW9uc1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRUaGVtZU9wdGlvbnMoKSB7XG4gIGNvbnN0IHRoZW1lVmFsdWVzID0gW1xuICAgIFwiZGFya1wiLFxuICAgIFwibGlnaHRcIixcbiAgICBcImN1cGNha2VcIixcbiAgICBcImJ1bWJsZWJlZVwiLFxuICAgIFwiZW1lcmFsZFwiLFxuICAgIFwiY29ycG9yYXRlXCIsXG4gICAgXCJzeW50aHdhdmVcIixcbiAgICBcInJldHJvXCIsXG4gICAgXCJjeWJlcnB1bmtcIixcbiAgXTtcblxuICBjb25zdCBzZXR0aW5nc1RoZW1lU2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoZW1lLXNlbGVjdG9yXCIpO1xuXG4gIGlmICh0eXBlb2YgU3RvcmFnZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNvbnN0IGN1cnJlbnRUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIik7XG4gICAgc2V0dGluZ3NUaGVtZVNlbGVjdG9yLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICB0aGVtZVZhbHVlcy5mb3JFYWNoKCh0aGVtZSkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIG9wdGlvbi52YWx1ZSA9IHRoZW1lO1xuICAgICAgb3B0aW9uLnRleHQgPSB0aGVtZTtcblxuICAgICAgaWYgKHRoZW1lID09PSBjdXJyZW50VGhlbWUpIHtcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgc2V0dGluZ3NUaGVtZVNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBub25lT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBub25lT3B0aW9uLnZhbHVlID0gXCJub25lXCI7XG4gICAgbm9uZU9wdGlvbi50ZXh0ID0gXCJUaGVtZVwiO1xuXG4gICAgaWYgKCF0aGVtZVZhbHVlcy5pbmNsdWRlcyhjdXJyZW50VGhlbWUpKSB7XG4gICAgICBub25lT3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXR0aW5nc1RoZW1lU2VsZWN0b3IuYXBwZW5kQ2hpbGQobm9uZU9wdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwibG9jYWxTdG9yYWdlIGlzIG5vdCBhdmFpbGFibGUuIFRoZW1lIHBlcnNpc3RlbmNlIG1heSBub3Qgd29yay5cIlxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXplQ29udHJhc3RTbGlkZXJFdmVudExpc3RlbmVycygpO1xufVxuXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgY29sb3IgY29udHJhc3RcbmZ1bmN0aW9uIHVwZGF0ZUNvbG9yQ29udHJhc3QodmFsdWUpIHtcbiAgY29uc3QgY29udHJhc3RDbGFzc05hbWUgPSBgY29udHJhc3QtWy4ke3ZhbHVlfV1gOyAvLyBDb3JyZWN0ZWQgZm9ybWF0XG4gIGNvbnNvbGUubG9nKGNvbnRyYXN0Q2xhc3NOYW1lKTtcblxuICAvLyBHZXQgdGhlIGNoaWxkIGVsZW1lbnRzIG9mIHRoZSBlbGVtZW50cyB3aXRoIHRoZSBJRHMgJ25hdmlnYXRpb24nIGFuZCAnY29udGVudCdcbiAgY29uc3QgbmF2aWdhdGlvbkNoaWxkcmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNuYXZpZ2F0aW9uID4gKlwiKTtcbiAgY29uc3QgY29udGVudENoaWxkcmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNjb250ZW50ID4gKlwiKTtcbiAgY29uc3Qgc2V0dGluZ3NDaGlsZHJlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjc2V0dGluZ3NfbW9kYWwgPiAqXCIpO1xuXG4gIC8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSBjbGFzcyBuYW1lcyBmb3IgdGhlc2UgZWxlbWVudHNcbiAgY29uc3QgdXBkYXRlQ2xhc3NOYW1lID0gKGNoaWxkKSA9PiB7XG4gICAgLy8gUmVtb3ZlIGV4aXN0aW5nIGNvbnRyYXN0IGNsYXNzXG4gICAgY2hpbGQuY2xhc3NOYW1lID0gY2hpbGQuY2xhc3NOYW1lXG4gICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAuZmlsdGVyKChuYW1lKSA9PiAhbmFtZS5zdGFydHNXaXRoKFwiY29udHJhc3QtXCIpKVxuICAgICAgLmpvaW4oXCIgXCIpO1xuICAgIC8vIEFkZCBuZXcgY29udHJhc3QgY2xhc3NcbiAgICBjaGlsZC5jbGFzc05hbWUgKz0gXCIgXCIgKyBjb250cmFzdENsYXNzTmFtZTtcbiAgfTtcblxuICAvLyBVcGRhdGUgdGhlIGNsYXNzIG5hbWVzIGZvciB0aGVzZSBlbGVtZW50c1xuICBuYXZpZ2F0aW9uQ2hpbGRyZW4uZm9yRWFjaCh1cGRhdGVDbGFzc05hbWUpO1xuICBjb250ZW50Q2hpbGRyZW4uZm9yRWFjaCh1cGRhdGVDbGFzc05hbWUpO1xuICBzZXR0aW5nc0NoaWxkcmVuLmZvckVhY2godXBkYXRlQ2xhc3NOYW1lKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gdXBkYXRlIHNsaWRlciB2YWx1ZSBpbiB0aGUgb2JqZWN0XG5mdW5jdGlvbiB1cGRhdGVTbGlkZXJWYWx1ZShzbGlkZXJJZCwgdmFsdWUpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc2xpZGVySWQsIHZhbHVlKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gc2V0IHRoZSBkZWZhdWx0IHRoZW1lXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdFRoZW1lKCkge1xuICBjb25zdCBkZWZhdWx0VGhlbWUgPSBcImRhcmtcIjtcblxuICBpZiAodHlwZW9mIFN0b3JhZ2UgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIGRlZmF1bHRUaGVtZSk7XG4gICAgdGhlbWVDaGFuZ2UoZGVmYXVsdFRoZW1lKTtcblxuICAgIC8vIFJlc2V0IHRoZSBjb250cmFzdCB2YWx1ZSB0byAwXG4gICAgY29uc3QgZGVmYXVsdFZhbHVlID0gMDtcbiAgICB1cGRhdGVDb2xvckNvbnRyYXN0KGRlZmF1bHRWYWx1ZSk7XG4gICAgdXBkYXRlU2xpZGVyVmFsdWUoXCJjb2xvci1jb250cmFzdC1zbGlkZXJcIiwgZGVmYXVsdFZhbHVlKTtcblxuICAgIC8vIEFsc28gdXBkYXRlIHRoZSBzbGlkZXIgZWxlbWVudCBkaXJlY3RseVxuICAgIGNvbnN0IHNldHRpbmdzQ29sb3JDb250cmFzdFNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJjb2xvci1jb250cmFzdC1zbGlkZXJcIlxuICAgICk7XG4gICAgaWYgKHNldHRpbmdzQ29sb3JDb250cmFzdFNsaWRlcikge1xuICAgICAgc2V0dGluZ3NDb2xvckNvbnRyYXN0U2xpZGVyLnZhbHVlID0gZGVmYXVsdFZhbHVlO1xuXG4gICAgICAvLyBUcmlnZ2VyIHRoZSBpbnB1dCBldmVudCB0byBlbnN1cmUgdGhlIHZhbHVlIGlzIHVwZGF0ZWQgaW4gdGhlIEhUTUxcbiAgICAgIGNvbnN0IGlucHV0RXZlbnQgPSBuZXcgRXZlbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHNldHRpbmdzQ29sb3JDb250cmFzdFNsaWRlci5kaXNwYXRjaEV2ZW50KGlucHV0RXZlbnQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCJsb2NhbFN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZS4gVGhlbWUgcGVyc2lzdGVuY2UgbWF5IG5vdCB3b3JrLlwiXG4gICAgKTtcbiAgfVxufVxuXG4vLyBGdW5jdGlvbiB0byBhZGQgY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGRlZmF1bHQgYnV0dG9uXG5leHBvcnQgZnVuY3Rpb24gYWRkRGVmYXVsdEJ1dHRvbkNsaWNrRXZlbnQoKSB7XG4gIGNvbnN0IGRlZmF1bHRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmF1bHRCdXR0b25cIik7XG4gIGlmIChkZWZhdWx0QnV0dG9uKSB7XG4gICAgZGVmYXVsdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2V0RGVmYXVsdFRoZW1lKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gRnVuY3Rpb24gdG8gaW5pdGlhbGl6ZSBjb250cmFzdCBzbGlkZXIgZXZlbnQgbGlzdGVuZXJzXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUNvbnRyYXN0U2xpZGVyRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IHNldHRpbmdzQ29sb3JDb250cmFzdFNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwiY29sb3ItY29udHJhc3Qtc2xpZGVyXCJcbiAgKTtcblxuICBpZiAoc2V0dGluZ3NDb2xvckNvbnRyYXN0U2xpZGVyKSB7XG4gICAgLy8gU2F2ZSB0aGUgaW5pdGlhbCB2YWx1ZSB0byB0aGUgc2xpZGVyVmFsdWVzIG9iamVjdFxuICAgIGNvbnN0IHNhdmVkVmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzZXR0aW5nc0NvbG9yQ29udHJhc3RTbGlkZXIuaWQpO1xuICAgIHNldHRpbmdzQ29sb3JDb250cmFzdFNsaWRlci52YWx1ZSA9IHNhdmVkVmFsdWUgfHwgMDtcblxuICAgIHNldHRpbmdzQ29sb3JDb250cmFzdFNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgY29udHJhc3RWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICB1cGRhdGVDb2xvckNvbnRyYXN0KGNvbnRyYXN0VmFsdWUpO1xuICAgICAgdXBkYXRlU2xpZGVyVmFsdWUodGhpcy5pZCwgY29udHJhc3RWYWx1ZSk7XG4gICAgfSk7XG5cbiAgICAvLyBUcmlnZ2VyIHRoZSBpbnB1dCBldmVudCB0byBlbnN1cmUgdGhlIHZhbHVlIGlzIHVwZGF0ZWQgaW4gdGhlIEhUTUxcbiAgICBjb25zdCBpbnB1dEV2ZW50ID0gbmV3IEV2ZW50KFwiaW5wdXRcIiwgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH0pO1xuICAgIHNldHRpbmdzQ29sb3JDb250cmFzdFNsaWRlci5kaXNwYXRjaEV2ZW50KGlucHV0RXZlbnQpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRoZW1lQ2hhbmdlIH0gZnJvbSBcInRoZW1lLWNoYW5nZVwiO1xuaW1wb3J0IHsgaW5pdEZ1bGxzY3JlZW4sIHVwZGF0ZUZ1bGxzY3JlZW4gfSBmcm9tIFwiLi9mdWxsX3NjcmVlbl9jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQge1xuICBsb2FkVGhlbWVPcHRpb25zLFxuICBhZGREZWZhdWx0QnV0dG9uQ2xpY2tFdmVudCxcbiAgaW5pdGlhbGl6ZUNvbnRyYXN0U2xpZGVyRXZlbnRMaXN0ZW5lcnMsXG59IGZyb20gXCIuL3NldHRpbmdzX2NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCB7IHJlbW92ZVNrZWxldG9uIH0gZnJvbSBcIi4vbG9hZGVyLmpzXCI7IC8vIEltcG9ydCB0aGUgcmVtb3ZlU2tlbGV0b24gZnVuY3Rpb25cblxuLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGh0bXggYWZ0ZXJTd2FwIGV2ZW50XG5mdW5jdGlvbiBoYW5kbGVBZnRlclN3YXAoZXZlbnQpIHtcbiAgY29uc29sZS5sb2coXCJodG14OmFmdGVyU3dhcCBldmVudCB0cmlnZ2VyZWRcIik7XG4gIHRoZW1lQ2hhbmdlKCk7XG4gIHVwZGF0ZUZ1bGxzY3JlZW4oKTtcbiAgbG9hZFRoZW1lT3B0aW9ucygpO1xuICBpbml0aWFsaXplQ29udHJhc3RTbGlkZXJFdmVudExpc3RlbmVycygpO1xufVxuXG4vLyBGdW5jdGlvbiB0byBpbml0aWFsaXplIHRoZSBwYWdlIHdpdGggbG9hZGVyXG5mdW5jdGlvbiBpbml0aWFsaXplUGFnZVdpdGhMb2FkZXIoKSB7XG4gIGNvbnNvbGUubG9nKFwiUGFnZSBsb2FkZWQgd2l0aCBsb2FkZXJcIik7XG5cbiAgLy8gQWRkIGxvYWRpbmcgY2xhc3MgdG8gc3RhcnQgdGhlIGFuaW1hdGlvblxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nXCIpO1xuXG4gIC8vIHJlbW92ZSB0aGUgbG9hZGVyIHdoZW4gY29udGVudCBpcyBsb2FkZWRcbiAgcmVtb3ZlU2tlbGV0b24oKTtcblxuICBpbml0RnVsbHNjcmVlbigpO1xuICB0aGVtZUNoYW5nZShmYWxzZSk7XG4gIGxvYWRUaGVtZU9wdGlvbnMoKTtcbiAgYWRkRGVmYXVsdEJ1dHRvbkNsaWNrRXZlbnQoKTtcbiAgaW5pdGlhbGl6ZUNvbnRyYXN0U2xpZGVyRXZlbnRMaXN0ZW5lcnMoKTtcbn1cblxuLy8gSW5pdGlhbCBwYWdlIGxvYWQgd2l0aCBsb2FkZXJcbmluaXRpYWxpemVQYWdlV2l0aExvYWRlcigpO1xuXG4vLyBIYW5kbGUgaHRteCBuYXZpZ2F0aW9uIGZvciBzdWJzZXF1ZW50IHBhZ2UgbG9hZHNcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImh0bXg6bG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGluaXRpYWxpemVQYWdlV2l0aExvYWRlcigpO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJodG14OmFmdGVyU3dhcFwiLCBoYW5kbGVBZnRlclN3YXApO1xuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJodG14OmFmdGVyU3dhcFwiLCBoYW5kbGVBZnRlclN3YXApO1xufSk7XG5cbi8vIEhhbmRsZSB0aGVtZSBjaGFuZ2UgZXZlbnRcbnRoZW1lQ2hhbmdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=