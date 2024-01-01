/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/theme-change/index.js":
/*!********************************************!*\
  !*** ./node_modules/theme-change/index.js ***!
  \********************************************/
/***/ ((module) => {

function themeToggle(){var toggleEl=document.querySelector("[data-toggle-theme]");var dataKey=toggleEl?toggleEl.getAttribute("data-key"):null;(function(theme=localStorage.getItem(dataKey?dataKey:"theme")){if(localStorage.getItem(dataKey?dataKey:"theme")){document.documentElement.setAttribute("data-theme",theme);if(toggleEl){[...document.querySelectorAll("[data-toggle-theme]")].forEach(el=>{el.classList.add(toggleEl.getAttribute("data-act-class"))})}}})();if(toggleEl){[...document.querySelectorAll("[data-toggle-theme]")].forEach(el=>{el.addEventListener("click",function(){var themesList=el.getAttribute("data-toggle-theme");if(themesList){var themesArray=themesList.split(",");if(document.documentElement.getAttribute("data-theme")==themesArray[0]){if(themesArray.length==1){document.documentElement.removeAttribute("data-theme");localStorage.removeItem(dataKey?dataKey:"theme")}else{document.documentElement.setAttribute("data-theme",themesArray[1]);localStorage.setItem(dataKey?dataKey:"theme",themesArray[1])}}else{document.documentElement.setAttribute("data-theme",themesArray[0]);localStorage.setItem(dataKey?dataKey:"theme",themesArray[0])}}[...document.querySelectorAll("[data-toggle-theme]")].forEach(el=>{el.classList.toggle(this.getAttribute("data-act-class"))})})})}}function themeBtn(){var btnEl=document.querySelector("[data-set-theme='']");var dataKey=btnEl?btnEl.getAttribute("data-key"):null;(function(theme=localStorage.getItem(dataKey?dataKey:"theme")){if(theme!=undefined&&theme!=""){if(localStorage.getItem(dataKey?dataKey:"theme")&&localStorage.getItem(dataKey?dataKey:"theme")!=""){document.documentElement.setAttribute("data-theme",theme);var btnEl=document.querySelector("[data-set-theme='"+theme.toString()+"']");if(btnEl){[...document.querySelectorAll("[data-set-theme]")].forEach(el=>{el.classList.remove(el.getAttribute("data-act-class"))});if(btnEl.getAttribute("data-act-class")){btnEl.classList.add(btnEl.getAttribute("data-act-class"))}}}else{var btnEl=document.querySelector("[data-set-theme='']");if(btnEl.getAttribute("data-act-class")){btnEl.classList.add(btnEl.getAttribute("data-act-class"))}}}})();[...document.querySelectorAll("[data-set-theme]")].forEach(el=>{el.addEventListener("click",function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme"));localStorage.setItem(dataKey?dataKey:"theme",document.documentElement.getAttribute("data-theme"));[...document.querySelectorAll("[data-set-theme]")].forEach(el=>{el.classList.remove(el.getAttribute("data-act-class"))});if(el.getAttribute("data-act-class")){el.classList.add(el.getAttribute("data-act-class"))}})})}function themeSelect(){var selectEl=document.querySelector("select[data-choose-theme]");var dataKey=selectEl?selectEl.getAttribute("data-key"):null;(function(theme=localStorage.getItem(dataKey?dataKey:"theme")){if(localStorage.getItem(dataKey?dataKey:"theme")){document.documentElement.setAttribute("data-theme",theme);var optionToggler=document.querySelector("select[data-choose-theme] [value='"+theme.toString()+"']");if(optionToggler){[...document.querySelectorAll("select[data-choose-theme] [value='"+theme.toString()+"']")].forEach(el=>{el.selected=true})}}})();if(selectEl){[...document.querySelectorAll("select[data-choose-theme]")].forEach(el=>{el.addEventListener("change",function(){document.documentElement.setAttribute("data-theme",this.value);localStorage.setItem(dataKey?dataKey:"theme",document.documentElement.getAttribute("data-theme"));[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem(dataKey?dataKey:"theme")+"']")].forEach(el=>{el.selected=true})})})}}function themeChange(attach=true){if(attach===true){document.addEventListener("DOMContentLoaded",function(event){themeToggle();themeSelect();themeBtn()})}else{themeToggle();themeSelect();themeBtn()}}if(true){module.exports={themeChange:themeChange}}else{}

/***/ }),

/***/ "./application/static/js/utility_controller/full_screen_controller.js":
/*!****************************************************************************!*\
  !*** ./application/static/js/utility_controller/full_screen_controller.js ***!
  \****************************************************************************/
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

/***/ "./application/static/js/utility_controller/loader_controller.js":
/*!***********************************************************************!*\
  !*** ./application/static/js/utility_controller/loader_controller.js ***!
  \***********************************************************************/
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

/***/ "./application/static/js/utility_controller/settings_controller.js":
/*!*************************************************************************!*\
  !*** ./application/static/js/utility_controller/settings_controller.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultButtonClickEvent: () => (/* binding */ defaultButtonClickEvent),
/* harmony export */   loadContrastOptions: () => (/* reexport safe */ _settings_helpers_contrast_settings_js__WEBPACK_IMPORTED_MODULE_3__.loadContrastOptions),
/* harmony export */   loadFontSizeOptions: () => (/* reexport safe */ _settings_helpers_font_size_settings_js__WEBPACK_IMPORTED_MODULE_1__.loadFontSizeOptions),
/* harmony export */   loadFontTypeOptions: () => (/* reexport safe */ _settings_helpers_font_type_settings_js__WEBPACK_IMPORTED_MODULE_2__.loadFontTypeOptions),
/* harmony export */   loadThemeOptions: () => (/* reexport safe */ _settings_helpers_theme_settings_js__WEBPACK_IMPORTED_MODULE_0__.loadThemeOptions)
/* harmony export */ });
/* harmony import */ var _settings_helpers_theme_settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings_helpers/theme_settings.js */ "./application/static/js/utility_controller/settings_helpers/theme_settings.js");
/* harmony import */ var _settings_helpers_font_size_settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings_helpers/font_size_settings.js */ "./application/static/js/utility_controller/settings_helpers/font_size_settings.js");
/* harmony import */ var _settings_helpers_font_type_settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings_helpers/font_type_settings.js */ "./application/static/js/utility_controller/settings_helpers/font_type_settings.js");
/* harmony import */ var _settings_helpers_contrast_settings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings_helpers/contrast_settings.js */ "./application/static/js/utility_controller/settings_helpers/contrast_settings.js");
// settings_controller.js






/**
 * This is a default settings function to add click event listener
 * to set the default values to the settings.
 * */

function defaultButtonClickEvent() {
  const defaultButton = document.getElementById("defaultButton");
  if (defaultButton) {
    defaultButton.addEventListener("click", function (event) {
      event.preventDefault();
      (0,_settings_helpers_theme_settings_js__WEBPACK_IMPORTED_MODULE_0__.setDefaultTheme)();
      (0,_settings_helpers_font_size_settings_js__WEBPACK_IMPORTED_MODULE_1__.setDefaultFontSize)();
      (0,_settings_helpers_font_type_settings_js__WEBPACK_IMPORTED_MODULE_2__.setDefaultFontType)();
      (0,_settings_helpers_contrast_settings_js__WEBPACK_IMPORTED_MODULE_3__.setDefaultContrast)();
    });
  }
}

// Export those import when settings_controller.js is imported



/***/ }),

/***/ "./application/static/js/utility_controller/settings_helpers/contrast_settings.js":
/*!****************************************************************************************!*\
  !*** ./application/static/js/utility_controller/settings_helpers/contrast_settings.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadContrastOptions: () => (/* binding */ loadContrastOptions),
/* harmony export */   setDefaultContrast: () => (/* binding */ setDefaultContrast)
/* harmony export */ });
/* harmony import */ var _data_settings_option_selector_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/settings_option_selector_data.json */ "./application/static/js/utility_controller/settings_helpers/data/settings_option_selector_data.json");
// contrast.js


function loadContrastOptions() {
  const contrastValues = _data_settings_option_selector_data_json__WEBPACK_IMPORTED_MODULE_0__.contrast;
  const contrastSelector = document.getElementById("contrast-selector");

  contrastSelector.innerHTML = "";

  contrastValues.forEach((contrast) => {
    const option = document.createElement("option");
    option.value = contrast;
    option.text = contrast;

    contrastSelector.appendChild(option);
  });
}

function setDefaultContrast() {
  const defaultContrast = "normal";

  if (typeof Storage !== "undefined") {
    localStorage.setItem("contrast", defaultContrast);
    const selector = document.getElementById("contrast-selector");
    selector.value = defaultContrast;
  } else {
    console.error(
      "localStorage is not available. Contrast persistence may not work."
    );
  }
}


/***/ }),

/***/ "./application/static/js/utility_controller/settings_helpers/font_size_settings.js":
/*!*****************************************************************************************!*\
  !*** ./application/static/js/utility_controller/settings_helpers/font_size_settings.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadFontSizeOptions: () => (/* binding */ loadFontSizeOptions),
/* harmony export */   setDefaultFontSize: () => (/* binding */ setDefaultFontSize)
/* harmony export */ });
/* harmony import */ var _data_settings_option_selector_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/settings_option_selector_data.json */ "./application/static/js/utility_controller/settings_helpers/data/settings_option_selector_data.json");
// fontSize.js


function loadFontSizeOptions() {
  const fontSizeValues = _data_settings_option_selector_data_json__WEBPACK_IMPORTED_MODULE_0__.fontSize;
  const fontSizeSelector = document.getElementById("font-size-selector");

  fontSizeSelector.innerHTML = "";

  fontSizeValues.forEach((fontSize) => {
    const option = document.createElement("option");
    option.value = fontSize;
    option.text = fontSize;

    fontSizeSelector.appendChild(option);
  });
}

function setDefaultFontSize() {
  const defaultFontSize = "text-base";

  if (typeof Storage !== "undefined") {
    localStorage.setItem("fontSize", defaultFontSize);
    const selector = document.getElementById("font-size-selector");
    selector.value = defaultFontSize;
  } else {
    console.error(
      "localStorage is not available. Font size persistence may not work."
    );
  }
}


/***/ }),

/***/ "./application/static/js/utility_controller/settings_helpers/font_type_settings.js":
/*!*****************************************************************************************!*\
  !*** ./application/static/js/utility_controller/settings_helpers/font_type_settings.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadFontTypeOptions: () => (/* binding */ loadFontTypeOptions),
/* harmony export */   setDefaultFontType: () => (/* binding */ setDefaultFontType)
/* harmony export */ });
/* harmony import */ var _data_settings_option_selector_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/settings_option_selector_data.json */ "./application/static/js/utility_controller/settings_helpers/data/settings_option_selector_data.json");
// fontType.js


function loadFontTypeOptions() {
  const fontTypeValues = _data_settings_option_selector_data_json__WEBPACK_IMPORTED_MODULE_0__.fontType;
  const fontTypeSelector = document.getElementById("font-type-selector");

  fontTypeSelector.innerHTML = "";

  fontTypeValues.forEach((fontType) => {
    const option = document.createElement("option");
    option.value = fontType;
    option.text = fontType;

    fontTypeSelector.appendChild(option);
  });
}

function setDefaultFontType() {
  const defaultFontType = "raleway";

  if (typeof Storage !== "undefined") {
    localStorage.setItem("fontType", defaultFontType);
    const selector = document.getElementById("font-type-selector");
    selector.value = defaultFontType;
  } else {
    console.error(
      "localStorage is not available. Font type persistence may not work."
    );
  }
}


/***/ }),

/***/ "./application/static/js/utility_controller/settings_helpers/theme_settings.js":
/*!*************************************************************************************!*\
  !*** ./application/static/js/utility_controller/settings_helpers/theme_settings.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadThemeOptions: () => (/* binding */ loadThemeOptions),
/* harmony export */   setDefaultTheme: () => (/* binding */ setDefaultTheme)
/* harmony export */ });
/* harmony import */ var theme_change__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-change */ "./node_modules/theme-change/index.js");
/* harmony import */ var _data_settings_option_selector_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/settings_option_selector_data.json */ "./application/static/js/utility_controller/settings_helpers/data/settings_option_selector_data.json");
// theme.js



function loadThemeOptions() {
  const themeValues = _data_settings_option_selector_data_json__WEBPACK_IMPORTED_MODULE_1__.themes;
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
}

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


/***/ }),

/***/ "./application/static/js/utility_controller/settings_helpers/data/settings_option_selector_data.json":
/*!***********************************************************************************************************!*\
  !*** ./application/static/js/utility_controller/settings_helpers/data/settings_option_selector_data.json ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"themes":["dark","light","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter","dim","nord","sunset"],"fontSize":["text-base","text-sm","text-lg","text-xl","text-2xl"],"fontType":["raleway","roboto","montserrat","open sans"],"contrast":["normal","high","low"]}');

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
/* harmony import */ var _utility_controller_loader_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility_controller/loader_controller.js */ "./application/static/js/utility_controller/loader_controller.js");
/* harmony import */ var _utility_controller_full_screen_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility_controller/full_screen_controller.js */ "./application/static/js/utility_controller/full_screen_controller.js");
/* harmony import */ var _utility_controller_settings_controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility_controller/settings_controller.js */ "./application/static/js/utility_controller/settings_controller.js");
/**
 * Main Controller
 * file: htmx_controller.js
 */






// Function to handle htmx afterSwap event
function handleAfterSwap(event) {
  console.log("htmx:afterSwap event triggered");
  (0,theme_change__WEBPACK_IMPORTED_MODULE_0__.themeChange)();
  (0,_utility_controller_full_screen_controller_js__WEBPACK_IMPORTED_MODULE_2__.updateFullscreen)();
  (0,_utility_controller_settings_controller_js__WEBPACK_IMPORTED_MODULE_3__.loadThemeOptions)();
  (0,_utility_controller_settings_controller_js__WEBPACK_IMPORTED_MODULE_3__.loadFontSizeOptions)();
  (0,_utility_controller_settings_controller_js__WEBPACK_IMPORTED_MODULE_3__.loadFontTypeOptions)();
  (0,_utility_controller_settings_controller_js__WEBPACK_IMPORTED_MODULE_3__.loadContrastOptions)();
}

// Function to initialize the page with loader
function initializePageWithLoader() {
  
  // Add loading class to start the animation
  document.body.classList.add("loading");

  // remove the loader when content is loaded
  (0,_utility_controller_loader_controller_js__WEBPACK_IMPORTED_MODULE_1__.removeSkeleton)();

  (0,_utility_controller_full_screen_controller_js__WEBPACK_IMPORTED_MODULE_2__.initFullscreen)();
  (0,theme_change__WEBPACK_IMPORTED_MODULE_0__.themeChange)(false);
  (0,_utility_controller_settings_controller_js__WEBPACK_IMPORTED_MODULE_3__.loadThemeOptions)();
  (0,_utility_controller_settings_controller_js__WEBPACK_IMPORTED_MODULE_3__.loadFontSizeOptions)();
  (0,_utility_controller_settings_controller_js__WEBPACK_IMPORTED_MODULE_3__.loadFontTypeOptions)();
  (0,_utility_controller_settings_controller_js__WEBPACK_IMPORTED_MODULE_3__.loadContrastOptions)();
  (0,_utility_controller_settings_controller_js__WEBPACK_IMPORTED_MODULE_3__.defaultButtonClickEvent)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUJBQXVCLDJEQUEyRCw0REFBNEQsK0RBQStELGtEQUFrRCwwREFBMEQsYUFBYSxtRUFBbUUsMERBQTBELElBQUksSUFBSSxhQUFhLG1FQUFtRSx1Q0FBdUMsb0RBQW9ELGVBQWUsc0NBQXNDLHdFQUF3RSwwQkFBMEIsdURBQXVELGlEQUFpRCxLQUFLLG1FQUFtRSw4REFBOEQsS0FBSyxtRUFBbUUsOERBQThELG1FQUFtRSx5REFBeUQsRUFBRSxFQUFFLEdBQUcsb0JBQW9CLHdEQUF3RCxzREFBc0QsK0RBQStELGdDQUFnQyxxR0FBcUcsMERBQTBELDRFQUE0RSxVQUFVLGdFQUFnRSx1REFBdUQsRUFBRSx5Q0FBeUMsNERBQTRELEtBQUssd0RBQXdELHlDQUF5Qyw2REFBNkQsSUFBSSxnRUFBZ0UsdUNBQXVDLHdGQUF3RixrR0FBa0csZ0VBQWdFLHVEQUF1RCxFQUFFLHNDQUFzQyxxREFBcUQsRUFBRSxFQUFFLHVCQUF1QixpRUFBaUUsNERBQTRELCtEQUErRCxrREFBa0QsMERBQTBELHFHQUFxRyxrQkFBa0Isd0dBQXdHLGlCQUFpQixJQUFJLElBQUksYUFBYSx5RUFBeUUsd0NBQXdDLCtEQUErRCxrR0FBa0cscUlBQXFJLGlCQUFpQixFQUFFLEVBQUUsR0FBRyxrQ0FBa0Msa0JBQWtCLDZEQUE2RCxjQUFjLGNBQWMsV0FBVyxFQUFFLEtBQUssY0FBYyxjQUFjLFlBQVksR0FBRyxJQUEyQixFQUFFLGdCQUFnQix5QkFBeUIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQ0EvMUg7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBSThDO0FBSUk7QUFJQTtBQUlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG9GQUFlO0FBQ3JCLE1BQU0sMkZBQWtCO0FBQ3hCLE1BQU0sMkZBQWtCO0FBQ3hCLE1BQU0sMEZBQWtCO0FBQ3hCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQU9FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0Y7QUFDc0U7QUFDdEU7QUFDTztBQUNQLHlCQUF5Qiw4RUFBc0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNzRTtBQUN0RTtBQUNPO0FBQ1AseUJBQXlCLDhFQUFzQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ3NFO0FBQ3RFO0FBQ087QUFDUCx5QkFBeUIsOEVBQXNCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQzJDO0FBQzJCO0FBQ3RFO0FBQ087QUFDUCxzQkFBc0IsNEVBQW9CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFXO0FBQ2YsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25EQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMkM7QUFDZ0M7QUFDdUI7QUFDcUU7QUFDdks7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHlEQUFXO0FBQ2IsRUFBRSwrRkFBZ0I7QUFDbEIsRUFBRSw0RkFBZ0I7QUFDbEIsRUFBRSwrRkFBbUI7QUFDckIsRUFBRSwrRkFBbUI7QUFDckIsRUFBRSwrRkFBbUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3RkFBYztBQUNoQjtBQUNBLEVBQUUsNkZBQWM7QUFDaEIsRUFBRSx5REFBVztBQUNiLEVBQUUsNEZBQWdCO0FBQ2xCLEVBQUUsK0ZBQW1CO0FBQ3JCLEVBQUUsK0ZBQW1CO0FBQ3JCLEVBQUUsK0ZBQW1CO0FBQ3JCLEVBQUUsbUdBQXVCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSx5REFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3RoZW1lLWNoYW5nZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS8uL2FwcGxpY2F0aW9uL3N0YXRpYy9qcy91dGlsaXR5X2NvbnRyb2xsZXIvZnVsbF9zY3JlZW5fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS8uL2FwcGxpY2F0aW9uL3N0YXRpYy9qcy91dGlsaXR5X2NvbnRyb2xsZXIvbG9hZGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvLi9hcHBsaWNhdGlvbi9zdGF0aWMvanMvdXRpbGl0eV9jb250cm9sbGVyL3NldHRpbmdzX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvLi9hcHBsaWNhdGlvbi9zdGF0aWMvanMvdXRpbGl0eV9jb250cm9sbGVyL3NldHRpbmdzX2hlbHBlcnMvY29udHJhc3Rfc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvLi9hcHBsaWNhdGlvbi9zdGF0aWMvanMvdXRpbGl0eV9jb250cm9sbGVyL3NldHRpbmdzX2hlbHBlcnMvZm9udF9zaXplX3NldHRpbmdzLmpzIiwid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlLy4vYXBwbGljYXRpb24vc3RhdGljL2pzL3V0aWxpdHlfY29udHJvbGxlci9zZXR0aW5nc19oZWxwZXJzL2ZvbnRfdHlwZV9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS8uL2FwcGxpY2F0aW9uL3N0YXRpYy9qcy91dGlsaXR5X2NvbnRyb2xsZXIvc2V0dGluZ3NfaGVscGVycy90aGVtZV9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlLy4vYXBwbGljYXRpb24vc3RhdGljL2pzL2h0bXhfY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB0aGVtZVRvZ2dsZSgpe3ZhciB0b2dnbGVFbD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9nZ2xlLXRoZW1lXVwiKTt2YXIgZGF0YUtleT10b2dnbGVFbD90b2dnbGVFbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiKTpudWxsOyhmdW5jdGlvbih0aGVtZT1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKSl7aWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIikpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsdGhlbWUpO2lmKHRvZ2dsZUVsKXtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRvZ2dsZS10aGVtZV1cIildLmZvckVhY2goZWw9PntlbC5jbGFzc0xpc3QuYWRkKHRvZ2dsZUVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKX0pfX19KSgpO2lmKHRvZ2dsZUVsKXtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRvZ2dsZS10aGVtZV1cIildLmZvckVhY2goZWw9PntlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe3ZhciB0aGVtZXNMaXN0PWVsLmdldEF0dHJpYnV0ZShcImRhdGEtdG9nZ2xlLXRoZW1lXCIpO2lmKHRoZW1lc0xpc3Qpe3ZhciB0aGVtZXNBcnJheT10aGVtZXNMaXN0LnNwbGl0KFwiLFwiKTtpZihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiKT09dGhlbWVzQXJyYXlbMF0pe2lmKHRoZW1lc0FycmF5Lmxlbmd0aD09MSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIik7bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIil9ZWxzZXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLHRoZW1lc0FycmF5WzFdKTtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiLHRoZW1lc0FycmF5WzFdKX19ZWxzZXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLHRoZW1lc0FycmF5WzBdKTtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiLHRoZW1lc0FycmF5WzBdKX19Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10b2dnbGUtdGhlbWVdXCIpXS5mb3JFYWNoKGVsPT57ZWwuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKX0pfSl9KX19ZnVuY3Rpb24gdGhlbWVCdG4oKXt2YXIgYnRuRWw9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXNldC10aGVtZT0nJ11cIik7dmFyIGRhdGFLZXk9YnRuRWw/YnRuRWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1rZXlcIik6bnVsbDsoZnVuY3Rpb24odGhlbWU9bG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIikpe2lmKHRoZW1lIT11bmRlZmluZWQmJnRoZW1lIT1cIlwiKXtpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKSYmbG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIikhPVwiXCIpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsdGhlbWUpO3ZhciBidG5FbD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc2V0LXRoZW1lPSdcIit0aGVtZS50b1N0cmluZygpK1wiJ11cIik7aWYoYnRuRWwpe1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc2V0LXRoZW1lXVwiKV0uZm9yRWFjaChlbD0+e2VsLmNsYXNzTGlzdC5yZW1vdmUoZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpfSk7aWYoYnRuRWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpe2J0bkVsLmNsYXNzTGlzdC5hZGQoYnRuRWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpfX19ZWxzZXt2YXIgYnRuRWw9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXNldC10aGVtZT0nJ11cIik7aWYoYnRuRWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpe2J0bkVsLmNsYXNzTGlzdC5hZGQoYnRuRWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpfX19fSkoKTtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXNldC10aGVtZV1cIildLmZvckVhY2goZWw9PntlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNldC10aGVtZVwiKSk7bG9jYWxTdG9yYWdlLnNldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIixkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiKSk7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zZXQtdGhlbWVdXCIpXS5mb3JFYWNoKGVsPT57ZWwuY2xhc3NMaXN0LnJlbW92ZShlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl9KTtpZihlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl7ZWwuY2xhc3NMaXN0LmFkZChlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl9fSl9KX1mdW5jdGlvbiB0aGVtZVNlbGVjdCgpe3ZhciBzZWxlY3RFbD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0W2RhdGEtY2hvb3NlLXRoZW1lXVwiKTt2YXIgZGF0YUtleT1zZWxlY3RFbD9zZWxlY3RFbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiKTpudWxsOyhmdW5jdGlvbih0aGVtZT1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKSl7aWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIikpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsdGhlbWUpO3ZhciBvcHRpb25Ub2dnbGVyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RbZGF0YS1jaG9vc2UtdGhlbWVdIFt2YWx1ZT0nXCIrdGhlbWUudG9TdHJpbmcoKStcIiddXCIpO2lmKG9wdGlvblRvZ2dsZXIpe1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VsZWN0W2RhdGEtY2hvb3NlLXRoZW1lXSBbdmFsdWU9J1wiK3RoZW1lLnRvU3RyaW5nKCkrXCInXVwiKV0uZm9yRWFjaChlbD0+e2VsLnNlbGVjdGVkPXRydWV9KX19fSkoKTtpZihzZWxlY3RFbCl7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWxlY3RbZGF0YS1jaG9vc2UtdGhlbWVdXCIpXS5mb3JFYWNoKGVsPT57ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLGZ1bmN0aW9uKCl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIix0aGlzLnZhbHVlKTtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiLGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIpKTtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdFtkYXRhLWNob29zZS10aGVtZV0gW3ZhbHVlPSdcIitsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKStcIiddXCIpXS5mb3JFYWNoKGVsPT57ZWwuc2VsZWN0ZWQ9dHJ1ZX0pfSl9KX19ZnVuY3Rpb24gdGhlbWVDaGFuZ2UoYXR0YWNoPXRydWUpe2lmKGF0dGFjaD09PXRydWUpe2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZnVuY3Rpb24oZXZlbnQpe3RoZW1lVG9nZ2xlKCk7dGhlbWVTZWxlY3QoKTt0aGVtZUJ0bigpfSl9ZWxzZXt0aGVtZVRvZ2dsZSgpO3RoZW1lU2VsZWN0KCk7dGhlbWVCdG4oKX19aWYodHlwZW9mIGV4cG9ydHMhPVwidW5kZWZpbmVkXCIpe21vZHVsZS5leHBvcnRzPXt0aGVtZUNoYW5nZTp0aGVtZUNoYW5nZX19ZWxzZXt0aGVtZUNoYW5nZSgpfSIsIi8vIGZ1bGxzY3JlZW5fY29udHJvbGxlci5qc1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRGdWxsc2NyZWVuKCkge1xyXG4gIC8vIEF0dGFjaCB0aGUgY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGJ1dHRvblxyXG4gIGNvbnN0IGZ1bGxzY3JlZW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZ1bGxzY3JlZW4tYnRuXCIpO1xyXG4gIGlmIChmdWxsc2NyZWVuQnRuKSB7XHJcbiAgICBmdWxsc2NyZWVuQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVGdWxsc2NyZWVuKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUZ1bGxzY3JlZW4oKSB7XHJcbiAgY29uc3Qgc2NyZWVuID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG5cclxuICBpZiAoXHJcbiAgICAhZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgJiZcclxuICAgICFkb2N1bWVudC5tb3pGdWxsU2NyZWVuRWxlbWVudCAmJlxyXG4gICAgIWRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50ICYmXHJcbiAgICAhZG9jdW1lbnQubXNGdWxsc2NyZWVuRWxlbWVudFxyXG4gICkge1xyXG4gICAgaWYgKHNjcmVlbi5yZXF1ZXN0RnVsbHNjcmVlbikge1xyXG4gICAgICBzY3JlZW4ucmVxdWVzdEZ1bGxzY3JlZW4oKTtcclxuICAgIH0gZWxzZSBpZiAoc2NyZWVuLm1zUmVxdWVzdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgc2NyZWVuLm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTtcclxuICAgIH0gZWxzZSBpZiAoc2NyZWVuLm1velJlcXVlc3RGdWxsU2NyZWVuKSB7XHJcbiAgICAgIHNjcmVlbi5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xyXG4gICAgfSBlbHNlIGlmIChzY3JlZW4ud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgc2NyZWVuLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChkb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xyXG4gICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKSB7XHJcbiAgICAgIGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbikge1xyXG4gICAgICBkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKCk7XHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKSB7XHJcbiAgICAgIGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRnVsbHNjcmVlbigpIHtcclxuICAvLyBMb2dpYyB0byB1cGRhdGUgZnVsbHNjcmVlbiBhZnRlciBodG14IGNvbnRlbnQgdXBkYXRlc1xyXG4gIGluaXRGdWxsc2NyZWVuKCk7XHJcbn1cclxuIiwiLy8gbG9hZGVyLmpzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlU2tlbGV0b24oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHZhciBza2VsZXRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5za2VsZXRvbicpO1xyXG4gICAgc2tlbGV0b24uZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2tlbGV0b24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJlbW92ZSB0aGUgbG9hZGluZyBjbGFzcyB0byBzdG9wIHRoZSBhbmltYXRpb25cclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIik7XHJcbn1cclxuXHJcbi8vIEluaXRpYWwgbG9hZFxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCByZW1vdmVTa2VsZXRvbik7XHJcblxyXG4vLyBGYWxsYmFjayBmb3Igb25sb2FkXHJcbndpbmRvdy5vbmxvYWQgPSByZW1vdmVTa2VsZXRvbjtcclxuXHJcbi8vIEhhbmRsZSBodG14IG5hdmlnYXRpb25cclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiaHRteDpsb2FkXCIsIHJlbW92ZVNrZWxldG9uKTtcclxuIiwiLy8gc2V0dGluZ3NfY29udHJvbGxlci5qc1xyXG5cclxuaW1wb3J0IHtcclxuICBsb2FkVGhlbWVPcHRpb25zLFxyXG4gIHNldERlZmF1bHRUaGVtZSxcclxufSBmcm9tIFwiLi9zZXR0aW5nc19oZWxwZXJzL3RoZW1lX3NldHRpbmdzLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgbG9hZEZvbnRTaXplT3B0aW9ucyxcclxuICBzZXREZWZhdWx0Rm9udFNpemUsXHJcbn0gZnJvbSBcIi4vc2V0dGluZ3NfaGVscGVycy9mb250X3NpemVfc2V0dGluZ3MuanNcIjtcclxuaW1wb3J0IHtcclxuICBsb2FkRm9udFR5cGVPcHRpb25zLFxyXG4gIHNldERlZmF1bHRGb250VHlwZSxcclxufSBmcm9tIFwiLi9zZXR0aW5nc19oZWxwZXJzL2ZvbnRfdHlwZV9zZXR0aW5ncy5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIGxvYWRDb250cmFzdE9wdGlvbnMsXHJcbiAgc2V0RGVmYXVsdENvbnRyYXN0LFxyXG59IGZyb20gXCIuL3NldHRpbmdzX2hlbHBlcnMvY29udHJhc3Rfc2V0dGluZ3MuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIGEgZGVmYXVsdCBzZXR0aW5ncyBmdW5jdGlvbiB0byBhZGQgY2xpY2sgZXZlbnQgbGlzdGVuZXJcclxuICogdG8gc2V0IHRoZSBkZWZhdWx0IHZhbHVlcyB0byB0aGUgc2V0dGluZ3MuXHJcbiAqICovXHJcblxyXG5mdW5jdGlvbiBkZWZhdWx0QnV0dG9uQ2xpY2tFdmVudCgpIHtcclxuICBjb25zdCBkZWZhdWx0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZhdWx0QnV0dG9uXCIpO1xyXG4gIGlmIChkZWZhdWx0QnV0dG9uKSB7XHJcbiAgICBkZWZhdWx0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgc2V0RGVmYXVsdFRoZW1lKCk7XHJcbiAgICAgIHNldERlZmF1bHRGb250U2l6ZSgpO1xyXG4gICAgICBzZXREZWZhdWx0Rm9udFR5cGUoKTtcclxuICAgICAgc2V0RGVmYXVsdENvbnRyYXN0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEV4cG9ydCB0aG9zZSBpbXBvcnQgd2hlbiBzZXR0aW5nc19jb250cm9sbGVyLmpzIGlzIGltcG9ydGVkXHJcbmV4cG9ydCB7XHJcbiAgbG9hZFRoZW1lT3B0aW9ucyxcclxuICBsb2FkRm9udFNpemVPcHRpb25zLFxyXG4gIGxvYWRGb250VHlwZU9wdGlvbnMsXHJcbiAgbG9hZENvbnRyYXN0T3B0aW9ucyxcclxuICBkZWZhdWx0QnV0dG9uQ2xpY2tFdmVudCxcclxufTtcclxuIiwiLy8gY29udHJhc3QuanNcclxuaW1wb3J0IHNlbGVjdG9yVmFsdWUgZnJvbSBcIi4vZGF0YS9zZXR0aW5nc19vcHRpb25fc2VsZWN0b3JfZGF0YS5qc29uXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZENvbnRyYXN0T3B0aW9ucygpIHtcclxuICBjb25zdCBjb250cmFzdFZhbHVlcyA9IHNlbGVjdG9yVmFsdWUuY29udHJhc3Q7XHJcbiAgY29uc3QgY29udHJhc3RTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udHJhc3Qtc2VsZWN0b3JcIik7XHJcblxyXG4gIGNvbnRyYXN0U2VsZWN0b3IuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgY29udHJhc3RWYWx1ZXMuZm9yRWFjaCgoY29udHJhc3QpID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBvcHRpb24udmFsdWUgPSBjb250cmFzdDtcclxuICAgIG9wdGlvbi50ZXh0ID0gY29udHJhc3Q7XHJcblxyXG4gICAgY29udHJhc3RTZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdENvbnRyYXN0KCkge1xyXG4gIGNvbnN0IGRlZmF1bHRDb250cmFzdCA9IFwibm9ybWFsXCI7XHJcblxyXG4gIGlmICh0eXBlb2YgU3RvcmFnZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb250cmFzdFwiLCBkZWZhdWx0Q29udHJhc3QpO1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRyYXN0LXNlbGVjdG9yXCIpO1xyXG4gICAgc2VsZWN0b3IudmFsdWUgPSBkZWZhdWx0Q29udHJhc3Q7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgIFwibG9jYWxTdG9yYWdlIGlzIG5vdCBhdmFpbGFibGUuIENvbnRyYXN0IHBlcnNpc3RlbmNlIG1heSBub3Qgd29yay5cIlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiLy8gZm9udFNpemUuanNcclxuaW1wb3J0IHNlbGVjdG9yVmFsdWUgZnJvbSBcIi4vZGF0YS9zZXR0aW5nc19vcHRpb25fc2VsZWN0b3JfZGF0YS5qc29uXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZvbnRTaXplT3B0aW9ucygpIHtcclxuICBjb25zdCBmb250U2l6ZVZhbHVlcyA9IHNlbGVjdG9yVmFsdWUuZm9udFNpemU7XHJcbiAgY29uc3QgZm9udFNpemVTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9udC1zaXplLXNlbGVjdG9yXCIpO1xyXG5cclxuICBmb250U2l6ZVNlbGVjdG9yLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gIGZvbnRTaXplVmFsdWVzLmZvckVhY2goKGZvbnRTaXplKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uLnZhbHVlID0gZm9udFNpemU7XHJcbiAgICBvcHRpb24udGV4dCA9IGZvbnRTaXplO1xyXG5cclxuICAgIGZvbnRTaXplU2VsZWN0b3IuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRGb250U2l6ZSgpIHtcclxuICBjb25zdCBkZWZhdWx0Rm9udFNpemUgPSBcInRleHQtYmFzZVwiO1xyXG5cclxuICBpZiAodHlwZW9mIFN0b3JhZ2UgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZm9udFNpemVcIiwgZGVmYXVsdEZvbnRTaXplKTtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb250LXNpemUtc2VsZWN0b3JcIik7XHJcbiAgICBzZWxlY3Rvci52YWx1ZSA9IGRlZmF1bHRGb250U2l6ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgXCJsb2NhbFN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZS4gRm9udCBzaXplIHBlcnNpc3RlbmNlIG1heSBub3Qgd29yay5cIlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiLy8gZm9udFR5cGUuanNcclxuaW1wb3J0IHNlbGVjdG9yVmFsdWUgZnJvbSBcIi4vZGF0YS9zZXR0aW5nc19vcHRpb25fc2VsZWN0b3JfZGF0YS5qc29uXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZvbnRUeXBlT3B0aW9ucygpIHtcclxuICBjb25zdCBmb250VHlwZVZhbHVlcyA9IHNlbGVjdG9yVmFsdWUuZm9udFR5cGU7XHJcbiAgY29uc3QgZm9udFR5cGVTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9udC10eXBlLXNlbGVjdG9yXCIpO1xyXG5cclxuICBmb250VHlwZVNlbGVjdG9yLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gIGZvbnRUeXBlVmFsdWVzLmZvckVhY2goKGZvbnRUeXBlKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uLnZhbHVlID0gZm9udFR5cGU7XHJcbiAgICBvcHRpb24udGV4dCA9IGZvbnRUeXBlO1xyXG5cclxuICAgIGZvbnRUeXBlU2VsZWN0b3IuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRGb250VHlwZSgpIHtcclxuICBjb25zdCBkZWZhdWx0Rm9udFR5cGUgPSBcInJhbGV3YXlcIjtcclxuXHJcbiAgaWYgKHR5cGVvZiBTdG9yYWdlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZvbnRUeXBlXCIsIGRlZmF1bHRGb250VHlwZSk7XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9udC10eXBlLXNlbGVjdG9yXCIpO1xyXG4gICAgc2VsZWN0b3IudmFsdWUgPSBkZWZhdWx0Rm9udFR5cGU7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgIFwibG9jYWxTdG9yYWdlIGlzIG5vdCBhdmFpbGFibGUuIEZvbnQgdHlwZSBwZXJzaXN0ZW5jZSBtYXkgbm90IHdvcmsuXCJcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIHRoZW1lLmpzXHJcbmltcG9ydCB7IHRoZW1lQ2hhbmdlIH0gZnJvbSBcInRoZW1lLWNoYW5nZVwiO1xyXG5pbXBvcnQgc2VsZWN0b3JWYWx1ZSBmcm9tIFwiLi9kYXRhL3NldHRpbmdzX29wdGlvbl9zZWxlY3Rvcl9kYXRhLmpzb25cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkVGhlbWVPcHRpb25zKCkge1xyXG4gIGNvbnN0IHRoZW1lVmFsdWVzID0gc2VsZWN0b3JWYWx1ZS50aGVtZXM7XHJcbiAgY29uc3Qgc2V0dGluZ3NUaGVtZVNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGVtZS1zZWxlY3RvclwiKTtcclxuXHJcbiAgaWYgKHR5cGVvZiBTdG9yYWdlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpO1xyXG4gICAgc2V0dGluZ3NUaGVtZVNlbGVjdG9yLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgdGhlbWVWYWx1ZXMuZm9yRWFjaCgodGhlbWUpID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgb3B0aW9uLnZhbHVlID0gdGhlbWU7XHJcbiAgICAgIG9wdGlvbi50ZXh0ID0gdGhlbWU7XHJcblxyXG4gICAgICBpZiAodGhlbWUgPT09IGN1cnJlbnRUaGVtZSkge1xyXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldHRpbmdzVGhlbWVTZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgbm9uZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBub25lT3B0aW9uLnZhbHVlID0gXCJub25lXCI7XHJcbiAgICBub25lT3B0aW9uLnRleHQgPSBcIlRoZW1lXCI7XHJcblxyXG4gICAgaWYgKCF0aGVtZVZhbHVlcy5pbmNsdWRlcyhjdXJyZW50VGhlbWUpKSB7XHJcbiAgICAgIG5vbmVPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHRpbmdzVGhlbWVTZWxlY3Rvci5hcHBlbmRDaGlsZChub25lT3B0aW9uKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgXCJsb2NhbFN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZS4gVGhlbWUgcGVyc2lzdGVuY2UgbWF5IG5vdCB3b3JrLlwiXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRUaGVtZSgpIHtcclxuICBjb25zdCBkZWZhdWx0VGhlbWUgPSBcImRhcmtcIjtcclxuXHJcbiAgaWYgKHR5cGVvZiBTdG9yYWdlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIGRlZmF1bHRUaGVtZSk7XHJcbiAgICB0aGVtZUNoYW5nZShkZWZhdWx0VGhlbWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICBcImxvY2FsU3RvcmFnZSBpcyBub3QgYXZhaWxhYmxlLiBUaGVtZSBwZXJzaXN0ZW5jZSBtYXkgbm90IHdvcmsuXCJcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXHJcbiAqIE1haW4gQ29udHJvbGxlclxyXG4gKiBmaWxlOiBodG14X2NvbnRyb2xsZXIuanNcclxuICovXHJcblxyXG5pbXBvcnQgeyB0aGVtZUNoYW5nZSB9IGZyb20gXCJ0aGVtZS1jaGFuZ2VcIjtcclxuaW1wb3J0IHsgcmVtb3ZlU2tlbGV0b24gfSBmcm9tIFwiLi91dGlsaXR5X2NvbnRyb2xsZXIvbG9hZGVyX2NvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IHsgaW5pdEZ1bGxzY3JlZW4sIHVwZGF0ZUZ1bGxzY3JlZW4gfSBmcm9tIFwiLi91dGlsaXR5X2NvbnRyb2xsZXIvZnVsbF9zY3JlZW5fY29udHJvbGxlci5qc1wiO1xyXG5pbXBvcnQgeyBsb2FkVGhlbWVPcHRpb25zLCBsb2FkRm9udFNpemVPcHRpb25zLCBsb2FkRm9udFR5cGVPcHRpb25zLCBsb2FkQ29udHJhc3RPcHRpb25zLCBkZWZhdWx0QnV0dG9uQ2xpY2tFdmVudCB9IGZyb20gXCIuL3V0aWxpdHlfY29udHJvbGxlci9zZXR0aW5nc19jb250cm9sbGVyLmpzXCI7XHJcblxyXG4vLyBGdW5jdGlvbiB0byBoYW5kbGUgaHRteCBhZnRlclN3YXAgZXZlbnRcclxuZnVuY3Rpb24gaGFuZGxlQWZ0ZXJTd2FwKGV2ZW50KSB7XHJcbiAgY29uc29sZS5sb2coXCJodG14OmFmdGVyU3dhcCBldmVudCB0cmlnZ2VyZWRcIik7XHJcbiAgdGhlbWVDaGFuZ2UoKTtcclxuICB1cGRhdGVGdWxsc2NyZWVuKCk7XHJcbiAgbG9hZFRoZW1lT3B0aW9ucygpO1xyXG4gIGxvYWRGb250U2l6ZU9wdGlvbnMoKTtcclxuICBsb2FkRm9udFR5cGVPcHRpb25zKCk7XHJcbiAgbG9hZENvbnRyYXN0T3B0aW9ucygpO1xyXG59XHJcblxyXG4vLyBGdW5jdGlvbiB0byBpbml0aWFsaXplIHRoZSBwYWdlIHdpdGggbG9hZGVyXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVQYWdlV2l0aExvYWRlcigpIHtcclxuICBcclxuICAvLyBBZGQgbG9hZGluZyBjbGFzcyB0byBzdGFydCB0aGUgYW5pbWF0aW9uXHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9hZGluZ1wiKTtcclxuXHJcbiAgLy8gcmVtb3ZlIHRoZSBsb2FkZXIgd2hlbiBjb250ZW50IGlzIGxvYWRlZFxyXG4gIHJlbW92ZVNrZWxldG9uKCk7XHJcblxyXG4gIGluaXRGdWxsc2NyZWVuKCk7XHJcbiAgdGhlbWVDaGFuZ2UoZmFsc2UpO1xyXG4gIGxvYWRUaGVtZU9wdGlvbnMoKTtcclxuICBsb2FkRm9udFNpemVPcHRpb25zKCk7XHJcbiAgbG9hZEZvbnRUeXBlT3B0aW9ucygpO1xyXG4gIGxvYWRDb250cmFzdE9wdGlvbnMoKTtcclxuICBkZWZhdWx0QnV0dG9uQ2xpY2tFdmVudCgpO1xyXG59XHJcblxyXG4vLyBJbml0aWFsIHBhZ2UgbG9hZCB3aXRoIGxvYWRlclxyXG5pbml0aWFsaXplUGFnZVdpdGhMb2FkZXIoKTtcclxuXHJcbi8vIEhhbmRsZSBodG14IG5hdmlnYXRpb24gZm9yIHN1YnNlcXVlbnQgcGFnZSBsb2Fkc1xyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJodG14OmxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIGluaXRpYWxpemVQYWdlV2l0aExvYWRlcigpO1xyXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImh0bXg6YWZ0ZXJTd2FwXCIsIGhhbmRsZUFmdGVyU3dhcCk7XHJcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiaHRteDphZnRlclN3YXBcIiwgaGFuZGxlQWZ0ZXJTd2FwKTtcclxufSk7XHJcblxyXG4vLyBIYW5kbGUgdGhlbWUgY2hhbmdlIGV2ZW50XHJcbnRoZW1lQ2hhbmdlKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==