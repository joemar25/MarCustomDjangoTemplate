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
/* harmony export */   initContrastOptions: () => (/* reexport safe */ _settings_helpers_contrast_settings_js__WEBPACK_IMPORTED_MODULE_3__.initContrastOptions),
/* harmony export */   initFontSizeOptions: () => (/* reexport safe */ _settings_helpers_font_size_settings_js__WEBPACK_IMPORTED_MODULE_1__.initFontSizeOptions),
/* harmony export */   initFontTypeOptions: () => (/* reexport safe */ _settings_helpers_font_type_settings_js__WEBPACK_IMPORTED_MODULE_2__.initFontTypeOptions),
/* harmony export */   initThemeOptions: () => (/* reexport safe */ _settings_helpers_theme_settings_js__WEBPACK_IMPORTED_MODULE_0__.initThemeOptions),
/* harmony export */   updateContrast: () => (/* reexport safe */ _settings_helpers_contrast_settings_js__WEBPACK_IMPORTED_MODULE_3__.updateContrast),
/* harmony export */   updateFontSize: () => (/* reexport safe */ _settings_helpers_font_size_settings_js__WEBPACK_IMPORTED_MODULE_1__.updateFontSize),
/* harmony export */   updateFontType: () => (/* reexport safe */ _settings_helpers_font_type_settings_js__WEBPACK_IMPORTED_MODULE_2__.updateFontType)
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
/* harmony export */   initContrastOptions: () => (/* binding */ initContrastOptions),
/* harmony export */   setDefaultContrast: () => (/* binding */ setDefaultContrast),
/* harmony export */   updateFontSize: () => (/* binding */ updateFontSize)
/* harmony export */ });
/* harmony import */ var _data_settings_option_selector_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/settings_option_selector_data.json */ "./application/static/js/utility_controller/settings_helpers/data/settings_option_selector_data.json");
// file: contrast_settings.js



const KEY = "contrast";
const DEFAULT_VALUE = "normal-contrast";
const SELECTOR_ID = "contrast-selector";
const ERR_MSG = "localStorage is not available";

function initContrastOptions() {
  // change the selector value type
  const typeValues = _data_settings_option_selector_data_json__WEBPACK_IMPORTED_MODULE_0__.contrast;
  const typeSelector = document.getElementById(SELECTOR_ID);

  if (typeof Storage !== "undefined") {
    const currentType = localStorage.getItem(KEY);
    const bodyClasses = document.body.classList;

    // If the currentType is not in the body classes, add it
    if (
      !bodyClasses.contains(currentType) &&
      typeValues.includes(currentType)
    ) {
      document.body.classList.add(currentType);
    }

    typeSelector.innerHTML = "";

    typeValues.forEach((contrast) => {
      const option = document.createElement("option");
      option.value = contrast;
      option.text = contrast;

      if (contrast === currentType) {
        option.selected = true;
      }

      typeSelector.appendChild(option);
    });

    // Check if selectedType is not undefined before adding the event listener
    if (currentType !== undefined) {
      // Add an event listener to the font size selector
      typeSelector.addEventListener("change", function () {
        const selectedType = typeSelector.value;
        applyFontType(selectedType);
      });
    }

    // Ensure that applyFontType is called initially to set the font size during page load
    applyFontType(currentType);
  } else {
    console.error(ERR_MSG);
  }
}

function setDefaultContrast() {
  const defaultValue = DEFAULT_VALUE;

  if (typeof Storage !== "undefined") {
    localStorage.setItem(KEY, defaultValue);
    applyFontType(defaultValue);
  } else {
    console.error(ERR_MSG);
  }
}

function applyFontType(selectedType) {
  const typeSelector = document.getElementById(SELECTOR_ID);

  // Get all available font sizes from selectorValue
  const allFontTypes = _data_settings_option_selector_data_json__WEBPACK_IMPORTED_MODULE_0__.contrast;

  // Remove all font size classes from the body
  document.body.classList.remove(...allFontTypes);

  // Set the selected font size to the default value if it is falsy or "default"
  selectedType = selectedType || DEFAULT_VALUE;

  // Add the new font size class to the body
  document.body.classList.add(selectedType);

  // Save the selected font size to local storage for persistence
  if (typeof Storage !== "undefined") {
    localStorage.setItem(KEY, selectedType);
  } else {
    console.error(ERR_MSG);
  }

  // Set the selected font size in the selector
  typeSelector.value = selectedType;
}

function updateFontSize() {
  initContrastOptions();
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
/* harmony export */   initFontSizeOptions: () => (/* binding */ initFontSizeOptions),
/* harmony export */   setDefaultFontSize: () => (/* binding */ setDefaultFontSize),
/* harmony export */   updateFontSize: () => (/* binding */ updateFontSize)
/* harmony export */ });
/* harmony import */ var _data_settings_option_selector_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/settings_option_selector_data.json */ "./application/static/js/utility_controller/settings_helpers/data/settings_option_selector_data.json");
// file: font_size_settings.js



const KEY = "fontSize";
const DEFAULT_VALUE = "text-base";
const SELECTOR_ID = "font-size-selector";
const ERR_MSG = "localStorage is not available";

function initFontSizeOptions() {
  // change the selector value type
  const typeValues = _data_settings_option_selector_data_json__WEBPACK_IMPORTED_MODULE_0__.fontSize;
  const typeSelector = document.getElementById(SELECTOR_ID);

  if (typeof Storage !== "undefined") {
    const currentType = localStorage.getItem(KEY);
    const bodyClasses = document.body.classList;

    // If the currentType is not in the body classes, add it
    if (
      !bodyClasses.contains(currentType) &&
      typeValues.includes(currentType)
    ) {
      document.body.classList.add(currentType);
    }

    typeSelector.innerHTML = "";

    typeValues.forEach((fontSize) => {
      const option = document.createElement("option");
      option.value = fontSize;
      option.text = fontSize;

      if (fontSize === currentType) {
        option.selected = true;
      }

      typeSelector.appendChild(option);
    });

    // Check if selectedType is not undefined before adding the event listener
    if (currentType !== undefined) {
      // Add an event listener to the font size selector
      typeSelector.addEventListener("change", function () {
        const selectedType = typeSelector.value;
        applyFontType(selectedType);
      });
    }

    // Ensure that applyFontType is called initially to set the font size during page load
    applyFontType(currentType);
  } else {
    console.error(ERR_MSG);
  }
}

function setDefaultFontSize() {
  const defaultValue = DEFAULT_VALUE;

  if (typeof Storage !== "undefined") {
    localStorage.setItem(KEY, defaultValue);
    applyFontType(defaultValue);
  } else {
    console.error(ERR_MSG);
  }
}

function applyFontType(selectedType) {
  const typeSelector = document.getElementById(SELECTOR_ID);

  // Get all available font sizes from selectorValue
  const allFontTypes = _data_settings_option_selector_data_json__WEBPACK_IMPORTED_MODULE_0__.fontSize;

  // Remove all font size classes from the body
  document.body.classList.remove(...allFontTypes);

  // Set the selected font size to the default value if it is falsy or "default"
  selectedType = selectedType || DEFAULT_VALUE;

  // Add the new font size class to the body
  document.body.classList.add(selectedType);

  // Save the selected font size to local storage for persistence
  if (typeof Storage !== "undefined") {
    localStorage.setItem(KEY, selectedType);
  } else {
    console.error(ERR_MSG);
  }

  // Set the selected font size in the selector
  typeSelector.value = selectedType;
}

function updateFontSize() {
  initFontSizeOptions();
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
/* harmony export */   initFontTypeOptions: () => (/* binding */ initFontTypeOptions),
/* harmony export */   setDefaultFontType: () => (/* binding */ setDefaultFontType),
/* harmony export */   updateFontType: () => (/* binding */ updateFontType)
/* harmony export */ });
/* harmony import */ var _data_settings_option_selector_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/settings_option_selector_data.json */ "./application/static/js/utility_controller/settings_helpers/data/settings_option_selector_data.json");
// file: font_type_settings.js



const KEY = "fontType";
const DEFAULT_VALUE = "raleway";
const SELECTOR_ID = "font-type-selector";
const ERR_MSG = "localStorage is not available";

function initFontTypeOptions() {
  // change the selector value type
  const typeValues = _data_settings_option_selector_data_json__WEBPACK_IMPORTED_MODULE_0__.fontType;
  const typeSelector = document.getElementById(SELECTOR_ID);

  if (typeof Storage !== "undefined") {
    const currentType = localStorage.getItem(KEY);
    const bodyClasses = document.body.classList;

    // If the currentType is not in the body classes, add it
    if (
      !bodyClasses.contains(currentType) &&
      typeValues.includes(currentType)
    ) {
      document.body.classList.add(currentType);
    }

    typeSelector.innerHTML = "";

    typeValues.forEach((fontType) => {
      const option = document.createElement("option");
      option.value = fontType;
      option.text = fontType;

      if (fontType === currentType) {
        option.selected = true;
      }

      typeSelector.appendChild(option);
    });

    // Check if selectedType is not undefined before adding the event listener
    if (currentType !== undefined) {
      // Add an event listener to the font type selector
      typeSelector.addEventListener("change", function () {
        const selectedType = typeSelector.value;
        applyFontType(selectedType);
      });
    }

    // Ensure that applyFontType is called initially to set the font type during page load
    applyFontType(currentType);
  } else {
    console.error(ERR_MSG);
  }
}

function setDefaultFontType() {
  const defaultValue = DEFAULT_VALUE;

  if (typeof Storage !== "undefined") {
    localStorage.setItem(KEY, defaultValue);
    applyFontType(defaultValue);
  } else {
    console.error(ERR_MSG);
  }
}

function applyFontType(selectedType) {
  const typeSelector = document.getElementById(SELECTOR_ID);

  // Get all available font types from selectorValue
  const allFontTypes = _data_settings_option_selector_data_json__WEBPACK_IMPORTED_MODULE_0__.fontType;

  // Remove all font type classes from the body
  document.body.classList.remove(...allFontTypes);

  // Set the selected font type to the default value if it is falsy or "default"
  selectedType = selectedType || DEFAULT_VALUE;

  // Add the new font type class to the body
  document.body.classList.add(selectedType);

  // Save the selected font type to local storage for persistence
  if (typeof Storage !== "undefined") {
    localStorage.setItem(KEY, selectedType);
  } else {
    console.error(ERR_MSG);
  }

  // Set the selected font type in the selector
  typeSelector.value = selectedType;
}

function updateFontType() {
  initFontTypeOptions();
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
/* harmony export */   initThemeOptions: () => (/* binding */ initThemeOptions),
/* harmony export */   setDefaultTheme: () => (/* binding */ setDefaultTheme)
/* harmony export */ });
/* harmony import */ var theme_change__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-change */ "./node_modules/theme-change/index.js");
/* harmony import */ var _data_settings_option_selector_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/settings_option_selector_data.json */ "./application/static/js/utility_controller/settings_helpers/data/settings_option_selector_data.json");
// theme.js



function initThemeOptions() {
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
module.exports = JSON.parse('{"themes":["dark","light","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter","dim","nord","sunset"],"fontSize":["text-base","text-sm","text-lg","text-xl","text-2xl"],"fontType":["raleway","roboto","montserrat","open-sans"],"contrast":["normal-contrast","high-contrast","low-contrast"]}');

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






function handleAfterSwap(event) {
  console.log("htmx:afterSwap event triggered");
  (0,theme_change__WEBPACK_IMPORTED_MODULE_0__.themeChange)();
  (0,_utility_controller_full_screen_controller_js__WEBPACK_IMPORTED_MODULE_2__.updateFullscreen)();
  (0,_utility_controller_settings_controller_js__WEBPACK_IMPORTED_MODULE_3__.updateFontSize)();
  (0,_utility_controller_settings_controller_js__WEBPACK_IMPORTED_MODULE_3__.updateFontType)();
}

function initializePageWithLoader() {
  document.body.classList.add("loading");
  (0,_utility_controller_loader_controller_js__WEBPACK_IMPORTED_MODULE_1__.removeSkeleton)();
  (0,_utility_controller_full_screen_controller_js__WEBPACK_IMPORTED_MODULE_2__.initFullscreen)();
  (0,theme_change__WEBPACK_IMPORTED_MODULE_0__.themeChange)(false);
  (0,_utility_controller_settings_controller_js__WEBPACK_IMPORTED_MODULE_3__.initThemeOptions)();
  (0,_utility_controller_settings_controller_js__WEBPACK_IMPORTED_MODULE_3__.initFontSizeOptions)();
  (0,_utility_controller_settings_controller_js__WEBPACK_IMPORTED_MODULE_3__.initFontTypeOptions)();
  (0,_utility_controller_settings_controller_js__WEBPACK_IMPORTED_MODULE_3__.initContrastOptions)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUJBQXVCLDJEQUEyRCw0REFBNEQsK0RBQStELGtEQUFrRCwwREFBMEQsYUFBYSxtRUFBbUUsMERBQTBELElBQUksSUFBSSxhQUFhLG1FQUFtRSx1Q0FBdUMsb0RBQW9ELGVBQWUsc0NBQXNDLHdFQUF3RSwwQkFBMEIsdURBQXVELGlEQUFpRCxLQUFLLG1FQUFtRSw4REFBOEQsS0FBSyxtRUFBbUUsOERBQThELG1FQUFtRSx5REFBeUQsRUFBRSxFQUFFLEdBQUcsb0JBQW9CLHdEQUF3RCxzREFBc0QsK0RBQStELGdDQUFnQyxxR0FBcUcsMERBQTBELDRFQUE0RSxVQUFVLGdFQUFnRSx1REFBdUQsRUFBRSx5Q0FBeUMsNERBQTRELEtBQUssd0RBQXdELHlDQUF5Qyw2REFBNkQsSUFBSSxnRUFBZ0UsdUNBQXVDLHdGQUF3RixrR0FBa0csZ0VBQWdFLHVEQUF1RCxFQUFFLHNDQUFzQyxxREFBcUQsRUFBRSxFQUFFLHVCQUF1QixpRUFBaUUsNERBQTRELCtEQUErRCxrREFBa0QsMERBQTBELHFHQUFxRyxrQkFBa0Isd0dBQXdHLGlCQUFpQixJQUFJLElBQUksYUFBYSx5RUFBeUUsd0NBQXdDLCtEQUErRCxrR0FBa0cscUlBQXFJLGlCQUFpQixFQUFFLEVBQUUsR0FBRyxrQ0FBa0Msa0JBQWtCLDZEQUE2RCxjQUFjLGNBQWMsV0FBVyxFQUFFLEtBQUssY0FBYyxjQUFjLFlBQVksR0FBRyxJQUEyQixFQUFFLGdCQUFnQix5QkFBeUIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQ0EvMUg7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBSThDO0FBS0k7QUFLQTtBQUtEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG9GQUFlO0FBQ3JCLE1BQU0sMkZBQWtCO0FBQ3hCLE1BQU0sMkZBQWtCO0FBQ3hCLE1BQU0sMEZBQWtCO0FBQ3hCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQVVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERGO0FBQ0E7QUFDc0U7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLHFCQUFxQiw4RUFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDhFQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9GQTtBQUNBO0FBQ3NFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxxQkFBcUIsOEVBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw4RUFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRkE7QUFDQTtBQUNzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EscUJBQXFCLDhFQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsOEVBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0ZBO0FBQzJDO0FBQzJCO0FBQ3RFO0FBQ087QUFDUCxzQkFBc0IsNEVBQW9CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBVztBQUNmLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJDO0FBQ2dDO0FBSW5CO0FBWUg7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsRUFBRSx5REFBVztBQUNiLEVBQUUsK0ZBQWdCO0FBQ2xCLEVBQUUsMEZBQWM7QUFDaEIsRUFBRSwwRkFBYztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0ZBQWM7QUFDaEIsRUFBRSw2RkFBYztBQUNoQixFQUFFLHlEQUFXO0FBQ2IsRUFBRSw0RkFBZ0I7QUFDbEIsRUFBRSwrRkFBbUI7QUFDckIsRUFBRSwrRkFBbUI7QUFDckIsRUFBRSwrRkFBbUI7QUFDckIsRUFBRSxtR0FBdUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLHlEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvdGhlbWUtY2hhbmdlL2luZGV4LmpzIiwid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlLy4vYXBwbGljYXRpb24vc3RhdGljL2pzL3V0aWxpdHlfY29udHJvbGxlci9mdWxsX3NjcmVlbl9jb250cm9sbGVyLmpzIiwid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlLy4vYXBwbGljYXRpb24vc3RhdGljL2pzL3V0aWxpdHlfY29udHJvbGxlci9sb2FkZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS8uL2FwcGxpY2F0aW9uL3N0YXRpYy9qcy91dGlsaXR5X2NvbnRyb2xsZXIvc2V0dGluZ3NfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS8uL2FwcGxpY2F0aW9uL3N0YXRpYy9qcy91dGlsaXR5X2NvbnRyb2xsZXIvc2V0dGluZ3NfaGVscGVycy9jb250cmFzdF9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS8uL2FwcGxpY2F0aW9uL3N0YXRpYy9qcy91dGlsaXR5X2NvbnRyb2xsZXIvc2V0dGluZ3NfaGVscGVycy9mb250X3NpemVfc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvLi9hcHBsaWNhdGlvbi9zdGF0aWMvanMvdXRpbGl0eV9jb250cm9sbGVyL3NldHRpbmdzX2hlbHBlcnMvZm9udF90eXBlX3NldHRpbmdzLmpzIiwid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlLy4vYXBwbGljYXRpb24vc3RhdGljL2pzL3V0aWxpdHlfY29udHJvbGxlci9zZXR0aW5nc19oZWxwZXJzL3RoZW1lX3NldHRpbmdzLmpzIiwid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvLi9hcHBsaWNhdGlvbi9zdGF0aWMvanMvaHRteF9jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHRoZW1lVG9nZ2xlKCl7dmFyIHRvZ2dsZUVsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2dnbGUtdGhlbWVdXCIpO3ZhciBkYXRhS2V5PXRvZ2dsZUVsP3RvZ2dsZUVsLmdldEF0dHJpYnV0ZShcImRhdGEta2V5XCIpOm51bGw7KGZ1bmN0aW9uKHRoZW1lPWxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpKXtpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIix0aGVtZSk7aWYodG9nZ2xlRWwpe1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdG9nZ2xlLXRoZW1lXVwiKV0uZm9yRWFjaChlbD0+e2VsLmNsYXNzTGlzdC5hZGQodG9nZ2xlRWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpfSl9fX0pKCk7aWYodG9nZ2xlRWwpe1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdG9nZ2xlLXRoZW1lXVwiKV0uZm9yRWFjaChlbD0+e2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7dmFyIHRoZW1lc0xpc3Q9ZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS10b2dnbGUtdGhlbWVcIik7aWYodGhlbWVzTGlzdCl7dmFyIHRoZW1lc0FycmF5PXRoZW1lc0xpc3Quc3BsaXQoXCIsXCIpO2lmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIpPT10aGVtZXNBcnJheVswXSl7aWYodGhlbWVzQXJyYXkubGVuZ3RoPT0xKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS10aGVtZVwiKTtsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKX1lbHNle2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsdGhlbWVzQXJyYXlbMV0pO2xvY2FsU3RvcmFnZS5zZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIsdGhlbWVzQXJyYXlbMV0pfX1lbHNle2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsdGhlbWVzQXJyYXlbMF0pO2xvY2FsU3RvcmFnZS5zZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIsdGhlbWVzQXJyYXlbMF0pfX1bLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRvZ2dsZS10aGVtZV1cIildLmZvckVhY2goZWw9PntlbC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpfSl9KX0pfX1mdW5jdGlvbiB0aGVtZUJ0bigpe3ZhciBidG5FbD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc2V0LXRoZW1lPScnXVwiKTt2YXIgZGF0YUtleT1idG5FbD9idG5FbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiKTpudWxsOyhmdW5jdGlvbih0aGVtZT1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKSl7aWYodGhlbWUhPXVuZGVmaW5lZCYmdGhlbWUhPVwiXCIpe2lmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpJiZsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKSE9XCJcIil7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIix0aGVtZSk7dmFyIGJ0bkVsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zZXQtdGhlbWU9J1wiK3RoZW1lLnRvU3RyaW5nKCkrXCInXVwiKTtpZihidG5FbCl7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zZXQtdGhlbWVdXCIpXS5mb3JFYWNoKGVsPT57ZWwuY2xhc3NMaXN0LnJlbW92ZShlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl9KTtpZihidG5FbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl7YnRuRWwuY2xhc3NMaXN0LmFkZChidG5FbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl9fX1lbHNle3ZhciBidG5FbD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc2V0LXRoZW1lPScnXVwiKTtpZihidG5FbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl7YnRuRWwuY2xhc3NMaXN0LmFkZChidG5FbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl9fX19KSgpO1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc2V0LXRoZW1lXVwiKV0uZm9yRWFjaChlbD0+e2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIix0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtc2V0LXRoZW1lXCIpKTtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiLGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIpKTtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXNldC10aGVtZV1cIildLmZvckVhY2goZWw9PntlbC5jbGFzc0xpc3QucmVtb3ZlKGVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKX0pO2lmKGVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKXtlbC5jbGFzc0xpc3QuYWRkKGVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKX19KX0pfWZ1bmN0aW9uIHRoZW1lU2VsZWN0KCl7dmFyIHNlbGVjdEVsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RbZGF0YS1jaG9vc2UtdGhlbWVdXCIpO3ZhciBkYXRhS2V5PXNlbGVjdEVsP3NlbGVjdEVsLmdldEF0dHJpYnV0ZShcImRhdGEta2V5XCIpOm51bGw7KGZ1bmN0aW9uKHRoZW1lPWxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpKXtpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIix0aGVtZSk7dmFyIG9wdGlvblRvZ2dsZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdFtkYXRhLWNob29zZS10aGVtZV0gW3ZhbHVlPSdcIit0aGVtZS50b1N0cmluZygpK1wiJ11cIik7aWYob3B0aW9uVG9nZ2xlcil7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWxlY3RbZGF0YS1jaG9vc2UtdGhlbWVdIFt2YWx1ZT0nXCIrdGhlbWUudG9TdHJpbmcoKStcIiddXCIpXS5mb3JFYWNoKGVsPT57ZWwuc2VsZWN0ZWQ9dHJ1ZX0pfX19KSgpO2lmKHNlbGVjdEVsKXtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdFtkYXRhLWNob29zZS10aGVtZV1cIildLmZvckVhY2goZWw9PntlbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsZnVuY3Rpb24oKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLHRoaXMudmFsdWUpO2xvY2FsU3RvcmFnZS5zZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIikpO1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VsZWN0W2RhdGEtY2hvb3NlLXRoZW1lXSBbdmFsdWU9J1wiK2xvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpK1wiJ11cIildLmZvckVhY2goZWw9PntlbC5zZWxlY3RlZD10cnVlfSl9KX0pfX1mdW5jdGlvbiB0aGVtZUNoYW5nZShhdHRhY2g9dHJ1ZSl7aWYoYXR0YWNoPT09dHJ1ZSl7ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixmdW5jdGlvbihldmVudCl7dGhlbWVUb2dnbGUoKTt0aGVtZVNlbGVjdCgpO3RoZW1lQnRuKCl9KX1lbHNle3RoZW1lVG9nZ2xlKCk7dGhlbWVTZWxlY3QoKTt0aGVtZUJ0bigpfX1pZih0eXBlb2YgZXhwb3J0cyE9XCJ1bmRlZmluZWRcIil7bW9kdWxlLmV4cG9ydHM9e3RoZW1lQ2hhbmdlOnRoZW1lQ2hhbmdlfX1lbHNle3RoZW1lQ2hhbmdlKCl9IiwiLy8gZnVsbHNjcmVlbl9jb250cm9sbGVyLmpzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEZ1bGxzY3JlZW4oKSB7XHJcbiAgLy8gQXR0YWNoIHRoZSBjbGljayBldmVudCBsaXN0ZW5lciB0byB0aGUgYnV0dG9uXHJcbiAgY29uc3QgZnVsbHNjcmVlbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnVsbHNjcmVlbi1idG5cIik7XHJcbiAgaWYgKGZ1bGxzY3JlZW5CdG4pIHtcclxuICAgIGZ1bGxzY3JlZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUZ1bGxzY3JlZW4pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlRnVsbHNjcmVlbigpIHtcclxuICBjb25zdCBzY3JlZW4gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG4gIGlmIChcclxuICAgICFkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCAmJlxyXG4gICAgIWRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbGVtZW50ICYmXHJcbiAgICAhZG9jdW1lbnQud2Via2l0RnVsbHNjcmVlbkVsZW1lbnQgJiZcclxuICAgICFkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50XHJcbiAgKSB7XHJcbiAgICBpZiAoc2NyZWVuLnJlcXVlc3RGdWxsc2NyZWVuKSB7XHJcbiAgICAgIHNjcmVlbi5yZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgfSBlbHNlIGlmIChzY3JlZW4ubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xyXG4gICAgICBzY3JlZW4ubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgfSBlbHNlIGlmIChzY3JlZW4ubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHtcclxuICAgICAgc2NyZWVuLm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XHJcbiAgICB9IGVsc2UgaWYgKHNjcmVlbi53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xyXG4gICAgICBzY3JlZW4ud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKSB7XHJcbiAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbigpO1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKSB7XHJcbiAgICAgIGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4oKTtcclxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVGdWxsc2NyZWVuKCkge1xyXG4gIC8vIExvZ2ljIHRvIHVwZGF0ZSBmdWxsc2NyZWVuIGFmdGVyIGh0bXggY29udGVudCB1cGRhdGVzXHJcbiAgaW5pdEZ1bGxzY3JlZW4oKTtcclxufVxyXG4iLCIvLyBsb2FkZXIuanNcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTa2VsZXRvbigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgdmFyIHNrZWxldG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNrZWxldG9uJyk7XHJcbiAgICBza2VsZXRvbi5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdza2VsZXRvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUmVtb3ZlIHRoZSBsb2FkaW5nIGNsYXNzIHRvIHN0b3AgdGhlIGFuaW1hdGlvblxyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKTtcclxufVxyXG5cclxuLy8gSW5pdGlhbCBsb2FkXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHJlbW92ZVNrZWxldG9uKTtcclxuXHJcbi8vIEZhbGxiYWNrIGZvciBvbmxvYWRcclxud2luZG93Lm9ubG9hZCA9IHJlbW92ZVNrZWxldG9uO1xyXG5cclxuLy8gSGFuZGxlIGh0bXggbmF2aWdhdGlvblxyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJodG14OmxvYWRcIiwgcmVtb3ZlU2tlbGV0b24pO1xyXG4iLCIvLyBzZXR0aW5nc19jb250cm9sbGVyLmpzXHJcblxyXG5pbXBvcnQge1xyXG4gIGluaXRUaGVtZU9wdGlvbnMsXHJcbiAgc2V0RGVmYXVsdFRoZW1lLFxyXG59IGZyb20gXCIuL3NldHRpbmdzX2hlbHBlcnMvdGhlbWVfc2V0dGluZ3MuanNcIjtcclxuaW1wb3J0IHtcclxuICBpbml0Rm9udFNpemVPcHRpb25zLFxyXG4gIHNldERlZmF1bHRGb250U2l6ZSxcclxuICB1cGRhdGVGb250U2l6ZSxcclxufSBmcm9tIFwiLi9zZXR0aW5nc19oZWxwZXJzL2ZvbnRfc2l6ZV9zZXR0aW5ncy5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIGluaXRGb250VHlwZU9wdGlvbnMsXHJcbiAgc2V0RGVmYXVsdEZvbnRUeXBlLFxyXG4gIHVwZGF0ZUZvbnRUeXBlLFxyXG59IGZyb20gXCIuL3NldHRpbmdzX2hlbHBlcnMvZm9udF90eXBlX3NldHRpbmdzLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgaW5pdENvbnRyYXN0T3B0aW9ucyxcclxuICBzZXREZWZhdWx0Q29udHJhc3QsXHJcbiAgdXBkYXRlQ29udHJhc3QsXHJcbn0gZnJvbSBcIi4vc2V0dGluZ3NfaGVscGVycy9jb250cmFzdF9zZXR0aW5ncy5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgaXMgYSBkZWZhdWx0IHNldHRpbmdzIGZ1bmN0aW9uIHRvIGFkZCBjbGljayBldmVudCBsaXN0ZW5lclxyXG4gKiB0byBzZXQgdGhlIGRlZmF1bHQgdmFsdWVzIHRvIHRoZSBzZXR0aW5ncy5cclxuICogKi9cclxuXHJcbmZ1bmN0aW9uIGRlZmF1bHRCdXR0b25DbGlja0V2ZW50KCkge1xyXG4gIGNvbnN0IGRlZmF1bHRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmF1bHRCdXR0b25cIik7XHJcbiAgaWYgKGRlZmF1bHRCdXR0b24pIHtcclxuICAgIGRlZmF1bHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBzZXREZWZhdWx0VGhlbWUoKTtcclxuICAgICAgc2V0RGVmYXVsdEZvbnRTaXplKCk7XHJcbiAgICAgIHNldERlZmF1bHRGb250VHlwZSgpO1xyXG4gICAgICBzZXREZWZhdWx0Q29udHJhc3QoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRXhwb3J0IHRob3NlIGltcG9ydCB3aGVuIHNldHRpbmdzX2NvbnRyb2xsZXIuanMgaXMgaW1wb3J0ZWRcclxuZXhwb3J0IHtcclxuICBpbml0VGhlbWVPcHRpb25zLFxyXG4gIGluaXRGb250U2l6ZU9wdGlvbnMsXHJcbiAgaW5pdEZvbnRUeXBlT3B0aW9ucyxcclxuICBpbml0Q29udHJhc3RPcHRpb25zLFxyXG4gIHVwZGF0ZUZvbnRTaXplLFxyXG4gIHVwZGF0ZUZvbnRUeXBlLFxyXG4gIHVwZGF0ZUNvbnRyYXN0LFxyXG4gIGRlZmF1bHRCdXR0b25DbGlja0V2ZW50LFxyXG59O1xyXG4iLCIvLyBmaWxlOiBjb250cmFzdF9zZXR0aW5ncy5qc1xyXG5cclxuaW1wb3J0IHNlbGVjdG9yVmFsdWUgZnJvbSBcIi4vZGF0YS9zZXR0aW5nc19vcHRpb25fc2VsZWN0b3JfZGF0YS5qc29uXCI7XHJcblxyXG5jb25zdCBLRVkgPSBcImNvbnRyYXN0XCI7XHJcbmNvbnN0IERFRkFVTFRfVkFMVUUgPSBcIm5vcm1hbC1jb250cmFzdFwiO1xyXG5jb25zdCBTRUxFQ1RPUl9JRCA9IFwiY29udHJhc3Qtc2VsZWN0b3JcIjtcclxuY29uc3QgRVJSX01TRyA9IFwibG9jYWxTdG9yYWdlIGlzIG5vdCBhdmFpbGFibGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0Q29udHJhc3RPcHRpb25zKCkge1xyXG4gIC8vIGNoYW5nZSB0aGUgc2VsZWN0b3IgdmFsdWUgdHlwZVxyXG4gIGNvbnN0IHR5cGVWYWx1ZXMgPSBzZWxlY3RvclZhbHVlLmNvbnRyYXN0O1xyXG4gIGNvbnN0IHR5cGVTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNFTEVDVE9SX0lEKTtcclxuXHJcbiAgaWYgKHR5cGVvZiBTdG9yYWdlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VHlwZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEtFWSk7XHJcbiAgICBjb25zdCBib2R5Q2xhc3NlcyA9IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0O1xyXG5cclxuICAgIC8vIElmIHRoZSBjdXJyZW50VHlwZSBpcyBub3QgaW4gdGhlIGJvZHkgY2xhc3NlcywgYWRkIGl0XHJcbiAgICBpZiAoXHJcbiAgICAgICFib2R5Q2xhc3Nlcy5jb250YWlucyhjdXJyZW50VHlwZSkgJiZcclxuICAgICAgdHlwZVZhbHVlcy5pbmNsdWRlcyhjdXJyZW50VHlwZSlcclxuICAgICkge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoY3VycmVudFR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHR5cGVTZWxlY3Rvci5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIHR5cGVWYWx1ZXMuZm9yRWFjaCgoY29udHJhc3QpID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgb3B0aW9uLnZhbHVlID0gY29udHJhc3Q7XHJcbiAgICAgIG9wdGlvbi50ZXh0ID0gY29udHJhc3Q7XHJcblxyXG4gICAgICBpZiAoY29udHJhc3QgPT09IGN1cnJlbnRUeXBlKSB7XHJcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdHlwZVNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiBzZWxlY3RlZFR5cGUgaXMgbm90IHVuZGVmaW5lZCBiZWZvcmUgYWRkaW5nIHRoZSBldmVudCBsaXN0ZW5lclxyXG4gICAgaWYgKGN1cnJlbnRUeXBlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBmb250IHNpemUgc2VsZWN0b3JcclxuICAgICAgdHlwZVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVHlwZSA9IHR5cGVTZWxlY3Rvci52YWx1ZTtcclxuICAgICAgICBhcHBseUZvbnRUeXBlKHNlbGVjdGVkVHlwZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEVuc3VyZSB0aGF0IGFwcGx5Rm9udFR5cGUgaXMgY2FsbGVkIGluaXRpYWxseSB0byBzZXQgdGhlIGZvbnQgc2l6ZSBkdXJpbmcgcGFnZSBsb2FkXHJcbiAgICBhcHBseUZvbnRUeXBlKGN1cnJlbnRUeXBlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihFUlJfTVNHKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0Q29udHJhc3QoKSB7XHJcbiAgY29uc3QgZGVmYXVsdFZhbHVlID0gREVGQVVMVF9WQUxVRTtcclxuXHJcbiAgaWYgKHR5cGVvZiBTdG9yYWdlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShLRVksIGRlZmF1bHRWYWx1ZSk7XHJcbiAgICBhcHBseUZvbnRUeXBlKGRlZmF1bHRWYWx1ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoRVJSX01TRyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseUZvbnRUeXBlKHNlbGVjdGVkVHlwZSkge1xyXG4gIGNvbnN0IHR5cGVTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNFTEVDVE9SX0lEKTtcclxuXHJcbiAgLy8gR2V0IGFsbCBhdmFpbGFibGUgZm9udCBzaXplcyBmcm9tIHNlbGVjdG9yVmFsdWVcclxuICBjb25zdCBhbGxGb250VHlwZXMgPSBzZWxlY3RvclZhbHVlLmNvbnRyYXN0O1xyXG5cclxuICAvLyBSZW1vdmUgYWxsIGZvbnQgc2l6ZSBjbGFzc2VzIGZyb20gdGhlIGJvZHlcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoLi4uYWxsRm9udFR5cGVzKTtcclxuXHJcbiAgLy8gU2V0IHRoZSBzZWxlY3RlZCBmb250IHNpemUgdG8gdGhlIGRlZmF1bHQgdmFsdWUgaWYgaXQgaXMgZmFsc3kgb3IgXCJkZWZhdWx0XCJcclxuICBzZWxlY3RlZFR5cGUgPSBzZWxlY3RlZFR5cGUgfHwgREVGQVVMVF9WQUxVRTtcclxuXHJcbiAgLy8gQWRkIHRoZSBuZXcgZm9udCBzaXplIGNsYXNzIHRvIHRoZSBib2R5XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHNlbGVjdGVkVHlwZSk7XHJcblxyXG4gIC8vIFNhdmUgdGhlIHNlbGVjdGVkIGZvbnQgc2l6ZSB0byBsb2NhbCBzdG9yYWdlIGZvciBwZXJzaXN0ZW5jZVxyXG4gIGlmICh0eXBlb2YgU3RvcmFnZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oS0VZLCBzZWxlY3RlZFR5cGUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKEVSUl9NU0cpO1xyXG4gIH1cclxuXHJcbiAgLy8gU2V0IHRoZSBzZWxlY3RlZCBmb250IHNpemUgaW4gdGhlIHNlbGVjdG9yXHJcbiAgdHlwZVNlbGVjdG9yLnZhbHVlID0gc2VsZWN0ZWRUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRm9udFNpemUoKSB7XHJcbiAgaW5pdENvbnRyYXN0T3B0aW9ucygpO1xyXG59XHJcbiIsIi8vIGZpbGU6IGZvbnRfc2l6ZV9zZXR0aW5ncy5qc1xyXG5cclxuaW1wb3J0IHNlbGVjdG9yVmFsdWUgZnJvbSBcIi4vZGF0YS9zZXR0aW5nc19vcHRpb25fc2VsZWN0b3JfZGF0YS5qc29uXCI7XHJcblxyXG5jb25zdCBLRVkgPSBcImZvbnRTaXplXCI7XHJcbmNvbnN0IERFRkFVTFRfVkFMVUUgPSBcInRleHQtYmFzZVwiO1xyXG5jb25zdCBTRUxFQ1RPUl9JRCA9IFwiZm9udC1zaXplLXNlbGVjdG9yXCI7XHJcbmNvbnN0IEVSUl9NU0cgPSBcImxvY2FsU3RvcmFnZSBpcyBub3QgYXZhaWxhYmxlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEZvbnRTaXplT3B0aW9ucygpIHtcclxuICAvLyBjaGFuZ2UgdGhlIHNlbGVjdG9yIHZhbHVlIHR5cGVcclxuICBjb25zdCB0eXBlVmFsdWVzID0gc2VsZWN0b3JWYWx1ZS5mb250U2l6ZTtcclxuICBjb25zdCB0eXBlU2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTRUxFQ1RPUl9JRCk7XHJcblxyXG4gIGlmICh0eXBlb2YgU3RvcmFnZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgY29uc3QgY3VycmVudFR5cGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShLRVkpO1xyXG4gICAgY29uc3QgYm9keUNsYXNzZXMgPSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdDtcclxuXHJcbiAgICAvLyBJZiB0aGUgY3VycmVudFR5cGUgaXMgbm90IGluIHRoZSBib2R5IGNsYXNzZXMsIGFkZCBpdFxyXG4gICAgaWYgKFxyXG4gICAgICAhYm9keUNsYXNzZXMuY29udGFpbnMoY3VycmVudFR5cGUpICYmXHJcbiAgICAgIHR5cGVWYWx1ZXMuaW5jbHVkZXMoY3VycmVudFR5cGUpXHJcbiAgICApIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGN1cnJlbnRUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICB0eXBlU2VsZWN0b3IuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICB0eXBlVmFsdWVzLmZvckVhY2goKGZvbnRTaXplKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgIG9wdGlvbi52YWx1ZSA9IGZvbnRTaXplO1xyXG4gICAgICBvcHRpb24udGV4dCA9IGZvbnRTaXplO1xyXG5cclxuICAgICAgaWYgKGZvbnRTaXplID09PSBjdXJyZW50VHlwZSkge1xyXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHR5cGVTZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgc2VsZWN0ZWRUeXBlIGlzIG5vdCB1bmRlZmluZWQgYmVmb3JlIGFkZGluZyB0aGUgZXZlbnQgbGlzdGVuZXJcclxuICAgIGlmIChjdXJyZW50VHlwZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgZm9udCBzaXplIHNlbGVjdG9yXHJcbiAgICAgIHR5cGVTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZFR5cGUgPSB0eXBlU2VsZWN0b3IudmFsdWU7XHJcbiAgICAgICAgYXBwbHlGb250VHlwZShzZWxlY3RlZFR5cGUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFbnN1cmUgdGhhdCBhcHBseUZvbnRUeXBlIGlzIGNhbGxlZCBpbml0aWFsbHkgdG8gc2V0IHRoZSBmb250IHNpemUgZHVyaW5nIHBhZ2UgbG9hZFxyXG4gICAgYXBwbHlGb250VHlwZShjdXJyZW50VHlwZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoRVJSX01TRyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdEZvbnRTaXplKCkge1xyXG4gIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IERFRkFVTFRfVkFMVUU7XHJcblxyXG4gIGlmICh0eXBlb2YgU3RvcmFnZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oS0VZLCBkZWZhdWx0VmFsdWUpO1xyXG4gICAgYXBwbHlGb250VHlwZShkZWZhdWx0VmFsdWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKEVSUl9NU0cpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlGb250VHlwZShzZWxlY3RlZFR5cGUpIHtcclxuICBjb25zdCB0eXBlU2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTRUxFQ1RPUl9JRCk7XHJcblxyXG4gIC8vIEdldCBhbGwgYXZhaWxhYmxlIGZvbnQgc2l6ZXMgZnJvbSBzZWxlY3RvclZhbHVlXHJcbiAgY29uc3QgYWxsRm9udFR5cGVzID0gc2VsZWN0b3JWYWx1ZS5mb250U2l6ZTtcclxuXHJcbiAgLy8gUmVtb3ZlIGFsbCBmb250IHNpemUgY2xhc3NlcyBmcm9tIHRoZSBib2R5XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKC4uLmFsbEZvbnRUeXBlcyk7XHJcblxyXG4gIC8vIFNldCB0aGUgc2VsZWN0ZWQgZm9udCBzaXplIHRvIHRoZSBkZWZhdWx0IHZhbHVlIGlmIGl0IGlzIGZhbHN5IG9yIFwiZGVmYXVsdFwiXHJcbiAgc2VsZWN0ZWRUeXBlID0gc2VsZWN0ZWRUeXBlIHx8IERFRkFVTFRfVkFMVUU7XHJcblxyXG4gIC8vIEFkZCB0aGUgbmV3IGZvbnQgc2l6ZSBjbGFzcyB0byB0aGUgYm9keVxyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChzZWxlY3RlZFR5cGUpO1xyXG5cclxuICAvLyBTYXZlIHRoZSBzZWxlY3RlZCBmb250IHNpemUgdG8gbG9jYWwgc3RvcmFnZSBmb3IgcGVyc2lzdGVuY2VcclxuICBpZiAodHlwZW9mIFN0b3JhZ2UgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEtFWSwgc2VsZWN0ZWRUeXBlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihFUlJfTVNHKTtcclxuICB9XHJcblxyXG4gIC8vIFNldCB0aGUgc2VsZWN0ZWQgZm9udCBzaXplIGluIHRoZSBzZWxlY3RvclxyXG4gIHR5cGVTZWxlY3Rvci52YWx1ZSA9IHNlbGVjdGVkVHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUZvbnRTaXplKCkge1xyXG4gIGluaXRGb250U2l6ZU9wdGlvbnMoKTtcclxufVxyXG4iLCIvLyBmaWxlOiBmb250X3R5cGVfc2V0dGluZ3MuanNcclxuXHJcbmltcG9ydCBzZWxlY3RvclZhbHVlIGZyb20gXCIuL2RhdGEvc2V0dGluZ3Nfb3B0aW9uX3NlbGVjdG9yX2RhdGEuanNvblwiO1xyXG5cclxuY29uc3QgS0VZID0gXCJmb250VHlwZVwiO1xyXG5jb25zdCBERUZBVUxUX1ZBTFVFID0gXCJyYWxld2F5XCI7XHJcbmNvbnN0IFNFTEVDVE9SX0lEID0gXCJmb250LXR5cGUtc2VsZWN0b3JcIjtcclxuY29uc3QgRVJSX01TRyA9IFwibG9jYWxTdG9yYWdlIGlzIG5vdCBhdmFpbGFibGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0Rm9udFR5cGVPcHRpb25zKCkge1xyXG4gIC8vIGNoYW5nZSB0aGUgc2VsZWN0b3IgdmFsdWUgdHlwZVxyXG4gIGNvbnN0IHR5cGVWYWx1ZXMgPSBzZWxlY3RvclZhbHVlLmZvbnRUeXBlO1xyXG4gIGNvbnN0IHR5cGVTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNFTEVDVE9SX0lEKTtcclxuXHJcbiAgaWYgKHR5cGVvZiBTdG9yYWdlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VHlwZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEtFWSk7XHJcbiAgICBjb25zdCBib2R5Q2xhc3NlcyA9IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0O1xyXG5cclxuICAgIC8vIElmIHRoZSBjdXJyZW50VHlwZSBpcyBub3QgaW4gdGhlIGJvZHkgY2xhc3NlcywgYWRkIGl0XHJcbiAgICBpZiAoXHJcbiAgICAgICFib2R5Q2xhc3Nlcy5jb250YWlucyhjdXJyZW50VHlwZSkgJiZcclxuICAgICAgdHlwZVZhbHVlcy5pbmNsdWRlcyhjdXJyZW50VHlwZSlcclxuICAgICkge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoY3VycmVudFR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHR5cGVTZWxlY3Rvci5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIHR5cGVWYWx1ZXMuZm9yRWFjaCgoZm9udFR5cGUpID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgb3B0aW9uLnZhbHVlID0gZm9udFR5cGU7XHJcbiAgICAgIG9wdGlvbi50ZXh0ID0gZm9udFR5cGU7XHJcblxyXG4gICAgICBpZiAoZm9udFR5cGUgPT09IGN1cnJlbnRUeXBlKSB7XHJcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdHlwZVNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiBzZWxlY3RlZFR5cGUgaXMgbm90IHVuZGVmaW5lZCBiZWZvcmUgYWRkaW5nIHRoZSBldmVudCBsaXN0ZW5lclxyXG4gICAgaWYgKGN1cnJlbnRUeXBlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBmb250IHR5cGUgc2VsZWN0b3JcclxuICAgICAgdHlwZVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVHlwZSA9IHR5cGVTZWxlY3Rvci52YWx1ZTtcclxuICAgICAgICBhcHBseUZvbnRUeXBlKHNlbGVjdGVkVHlwZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEVuc3VyZSB0aGF0IGFwcGx5Rm9udFR5cGUgaXMgY2FsbGVkIGluaXRpYWxseSB0byBzZXQgdGhlIGZvbnQgdHlwZSBkdXJpbmcgcGFnZSBsb2FkXHJcbiAgICBhcHBseUZvbnRUeXBlKGN1cnJlbnRUeXBlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihFUlJfTVNHKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0Rm9udFR5cGUoKSB7XHJcbiAgY29uc3QgZGVmYXVsdFZhbHVlID0gREVGQVVMVF9WQUxVRTtcclxuXHJcbiAgaWYgKHR5cGVvZiBTdG9yYWdlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShLRVksIGRlZmF1bHRWYWx1ZSk7XHJcbiAgICBhcHBseUZvbnRUeXBlKGRlZmF1bHRWYWx1ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoRVJSX01TRyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseUZvbnRUeXBlKHNlbGVjdGVkVHlwZSkge1xyXG4gIGNvbnN0IHR5cGVTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNFTEVDVE9SX0lEKTtcclxuXHJcbiAgLy8gR2V0IGFsbCBhdmFpbGFibGUgZm9udCB0eXBlcyBmcm9tIHNlbGVjdG9yVmFsdWVcclxuICBjb25zdCBhbGxGb250VHlwZXMgPSBzZWxlY3RvclZhbHVlLmZvbnRUeXBlO1xyXG5cclxuICAvLyBSZW1vdmUgYWxsIGZvbnQgdHlwZSBjbGFzc2VzIGZyb20gdGhlIGJvZHlcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoLi4uYWxsRm9udFR5cGVzKTtcclxuXHJcbiAgLy8gU2V0IHRoZSBzZWxlY3RlZCBmb250IHR5cGUgdG8gdGhlIGRlZmF1bHQgdmFsdWUgaWYgaXQgaXMgZmFsc3kgb3IgXCJkZWZhdWx0XCJcclxuICBzZWxlY3RlZFR5cGUgPSBzZWxlY3RlZFR5cGUgfHwgREVGQVVMVF9WQUxVRTtcclxuXHJcbiAgLy8gQWRkIHRoZSBuZXcgZm9udCB0eXBlIGNsYXNzIHRvIHRoZSBib2R5XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHNlbGVjdGVkVHlwZSk7XHJcblxyXG4gIC8vIFNhdmUgdGhlIHNlbGVjdGVkIGZvbnQgdHlwZSB0byBsb2NhbCBzdG9yYWdlIGZvciBwZXJzaXN0ZW5jZVxyXG4gIGlmICh0eXBlb2YgU3RvcmFnZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oS0VZLCBzZWxlY3RlZFR5cGUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKEVSUl9NU0cpO1xyXG4gIH1cclxuXHJcbiAgLy8gU2V0IHRoZSBzZWxlY3RlZCBmb250IHR5cGUgaW4gdGhlIHNlbGVjdG9yXHJcbiAgdHlwZVNlbGVjdG9yLnZhbHVlID0gc2VsZWN0ZWRUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRm9udFR5cGUoKSB7XHJcbiAgaW5pdEZvbnRUeXBlT3B0aW9ucygpO1xyXG59XHJcbiIsIi8vIHRoZW1lLmpzXHJcbmltcG9ydCB7IHRoZW1lQ2hhbmdlIH0gZnJvbSBcInRoZW1lLWNoYW5nZVwiO1xyXG5pbXBvcnQgc2VsZWN0b3JWYWx1ZSBmcm9tIFwiLi9kYXRhL3NldHRpbmdzX29wdGlvbl9zZWxlY3Rvcl9kYXRhLmpzb25cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0VGhlbWVPcHRpb25zKCkge1xyXG4gIGNvbnN0IHRoZW1lVmFsdWVzID0gc2VsZWN0b3JWYWx1ZS50aGVtZXM7XHJcbiAgY29uc3Qgc2V0dGluZ3NUaGVtZVNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGVtZS1zZWxlY3RvclwiKTtcclxuXHJcbiAgaWYgKHR5cGVvZiBTdG9yYWdlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpO1xyXG4gICAgc2V0dGluZ3NUaGVtZVNlbGVjdG9yLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgdGhlbWVWYWx1ZXMuZm9yRWFjaCgodGhlbWUpID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgb3B0aW9uLnZhbHVlID0gdGhlbWU7XHJcbiAgICAgIG9wdGlvbi50ZXh0ID0gdGhlbWU7XHJcblxyXG4gICAgICBpZiAodGhlbWUgPT09IGN1cnJlbnRUaGVtZSkge1xyXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldHRpbmdzVGhlbWVTZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgIFwibG9jYWxTdG9yYWdlIGlzIG5vdCBhdmFpbGFibGUuIFRoZW1lIHBlcnNpc3RlbmNlIG1heSBub3Qgd29yay5cIlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0VGhlbWUoKSB7XHJcbiAgY29uc3QgZGVmYXVsdFRoZW1lID0gXCJkYXJrXCI7XHJcblxyXG4gIGlmICh0eXBlb2YgU3RvcmFnZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBkZWZhdWx0VGhlbWUpO1xyXG4gICAgdGhlbWVDaGFuZ2UoZGVmYXVsdFRoZW1lKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgXCJsb2NhbFN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZS4gVGhlbWUgcGVyc2lzdGVuY2UgbWF5IG5vdCB3b3JrLlwiXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxyXG4gKiBNYWluIENvbnRyb2xsZXJcclxuICogZmlsZTogaHRteF9jb250cm9sbGVyLmpzXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgdGhlbWVDaGFuZ2UgfSBmcm9tIFwidGhlbWUtY2hhbmdlXCI7XHJcbmltcG9ydCB7IHJlbW92ZVNrZWxldG9uIH0gZnJvbSBcIi4vdXRpbGl0eV9jb250cm9sbGVyL2xvYWRlcl9jb250cm9sbGVyLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgaW5pdEZ1bGxzY3JlZW4sXHJcbiAgdXBkYXRlRnVsbHNjcmVlbixcclxufSBmcm9tIFwiLi91dGlsaXR5X2NvbnRyb2xsZXIvZnVsbF9zY3JlZW5fY29udHJvbGxlci5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIFxyXG4gIGluaXRUaGVtZU9wdGlvbnMsXHJcbiAgaW5pdEZvbnRTaXplT3B0aW9ucyxcclxuICBpbml0Rm9udFR5cGVPcHRpb25zLFxyXG4gIGluaXRDb250cmFzdE9wdGlvbnMsXHJcblxyXG4gIHVwZGF0ZUZvbnRTaXplLFxyXG4gIHVwZGF0ZUZvbnRUeXBlLFxyXG4gIFxyXG4gIGRlZmF1bHRCdXR0b25DbGlja0V2ZW50LFxyXG59IGZyb20gXCIuL3V0aWxpdHlfY29udHJvbGxlci9zZXR0aW5nc19jb250cm9sbGVyLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVBZnRlclN3YXAoZXZlbnQpIHtcclxuICBjb25zb2xlLmxvZyhcImh0bXg6YWZ0ZXJTd2FwIGV2ZW50IHRyaWdnZXJlZFwiKTtcclxuICB0aGVtZUNoYW5nZSgpO1xyXG4gIHVwZGF0ZUZ1bGxzY3JlZW4oKTtcclxuICB1cGRhdGVGb250U2l6ZSgpO1xyXG4gIHVwZGF0ZUZvbnRUeXBlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVQYWdlV2l0aExvYWRlcigpIHtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nXCIpO1xyXG4gIHJlbW92ZVNrZWxldG9uKCk7XHJcbiAgaW5pdEZ1bGxzY3JlZW4oKTtcclxuICB0aGVtZUNoYW5nZShmYWxzZSk7XHJcbiAgaW5pdFRoZW1lT3B0aW9ucygpO1xyXG4gIGluaXRGb250U2l6ZU9wdGlvbnMoKTtcclxuICBpbml0Rm9udFR5cGVPcHRpb25zKCk7XHJcbiAgaW5pdENvbnRyYXN0T3B0aW9ucygpO1xyXG4gIGRlZmF1bHRCdXR0b25DbGlja0V2ZW50KCk7XHJcbn1cclxuXHJcbi8vIEluaXRpYWwgcGFnZSBsb2FkIHdpdGggbG9hZGVyXHJcbmluaXRpYWxpemVQYWdlV2l0aExvYWRlcigpO1xyXG5cclxuLy8gSGFuZGxlIGh0bXggbmF2aWdhdGlvbiBmb3Igc3Vic2VxdWVudCBwYWdlIGxvYWRzXHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImh0bXg6bG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgaW5pdGlhbGl6ZVBhZ2VXaXRoTG9hZGVyKCk7XHJcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwiaHRteDphZnRlclN3YXBcIiwgaGFuZGxlQWZ0ZXJTd2FwKTtcclxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJodG14OmFmdGVyU3dhcFwiLCBoYW5kbGVBZnRlclN3YXApO1xyXG59KTtcclxuXHJcbi8vIEhhbmRsZSB0aGVtZSBjaGFuZ2UgZXZlbnRcclxudGhlbWVDaGFuZ2UoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9