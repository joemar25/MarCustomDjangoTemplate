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
const DEFAULT_VALUE = "open-sans";
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
// file: theme_settings.js




const KEY = "theme";
const DEFAULT_VALUE = "dim";
const SELECTOR_ID = "theme-selector";
const ERR_MSG = "localStorage is not available";

function initThemeOptions() {
  const themeValues = _data_settings_option_selector_data_json__WEBPACK_IMPORTED_MODULE_1__.themes;
  const settingsThemeSelector = document.getElementById(SELECTOR_ID);

  if (typeof Storage !== "undefined") {
    const currentTheme = localStorage.getItem(KEY);
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
    console.error(ERR_MSG);
  }
}

function setDefaultTheme() {
  const defaultValue = DEFAULT_VALUE;

  if (typeof Storage !== "undefined") {
    localStorage.setItem(KEY, defaultValue);
    (0,theme_change__WEBPACK_IMPORTED_MODULE_0__.themeChange)(defaultValue);
  } else {
    console.error(ERR_MSG);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLEVBQUUseURBQVc7QUFDYixFQUFFLCtGQUFnQjtBQUNsQixFQUFFLDBGQUFjO0FBQ2hCLEVBQUUsMEZBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdGQUFjO0FBQ2hCLEVBQUUsNkZBQWM7QUFDaEIsRUFBRSx5REFBVztBQUNiLEVBQUUsNEZBQWdCO0FBQ2xCLEVBQUUsK0ZBQW1CO0FBQ3JCLEVBQUUsK0ZBQW1CO0FBQ3JCLEVBQUUsK0ZBQW1CO0FBQ3JCLEVBQUUsbUdBQXVCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSx5REFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3RoZW1lLWNoYW5nZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS8uL2FwcGxpY2F0aW9uL3N0YXRpYy9qcy91dGlsaXR5X2NvbnRyb2xsZXIvZnVsbF9zY3JlZW5fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS8uL2FwcGxpY2F0aW9uL3N0YXRpYy9qcy91dGlsaXR5X2NvbnRyb2xsZXIvbG9hZGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvLi9hcHBsaWNhdGlvbi9zdGF0aWMvanMvdXRpbGl0eV9jb250cm9sbGVyL3NldHRpbmdzX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvLi9hcHBsaWNhdGlvbi9zdGF0aWMvanMvdXRpbGl0eV9jb250cm9sbGVyL3NldHRpbmdzX2hlbHBlcnMvY29udHJhc3Rfc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvLi9hcHBsaWNhdGlvbi9zdGF0aWMvanMvdXRpbGl0eV9jb250cm9sbGVyL3NldHRpbmdzX2hlbHBlcnMvZm9udF9zaXplX3NldHRpbmdzLmpzIiwid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlLy4vYXBwbGljYXRpb24vc3RhdGljL2pzL3V0aWxpdHlfY29udHJvbGxlci9zZXR0aW5nc19oZWxwZXJzL2ZvbnRfdHlwZV9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS8uL2FwcGxpY2F0aW9uL3N0YXRpYy9qcy91dGlsaXR5X2NvbnRyb2xsZXIvc2V0dGluZ3NfaGVscGVycy90aGVtZV9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWFyLWN1c3RvbS1kamFuZ28tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tYXItY3VzdG9tLWRqYW5nby10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21hci1jdXN0b20tZGphbmdvLXRlbXBsYXRlLy4vYXBwbGljYXRpb24vc3RhdGljL2pzL2h0bXhfY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB0aGVtZVRvZ2dsZSgpe3ZhciB0b2dnbGVFbD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9nZ2xlLXRoZW1lXVwiKTt2YXIgZGF0YUtleT10b2dnbGVFbD90b2dnbGVFbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiKTpudWxsOyhmdW5jdGlvbih0aGVtZT1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKSl7aWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIikpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsdGhlbWUpO2lmKHRvZ2dsZUVsKXtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRvZ2dsZS10aGVtZV1cIildLmZvckVhY2goZWw9PntlbC5jbGFzc0xpc3QuYWRkKHRvZ2dsZUVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKX0pfX19KSgpO2lmKHRvZ2dsZUVsKXtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRvZ2dsZS10aGVtZV1cIildLmZvckVhY2goZWw9PntlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe3ZhciB0aGVtZXNMaXN0PWVsLmdldEF0dHJpYnV0ZShcImRhdGEtdG9nZ2xlLXRoZW1lXCIpO2lmKHRoZW1lc0xpc3Qpe3ZhciB0aGVtZXNBcnJheT10aGVtZXNMaXN0LnNwbGl0KFwiLFwiKTtpZihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiKT09dGhlbWVzQXJyYXlbMF0pe2lmKHRoZW1lc0FycmF5Lmxlbmd0aD09MSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIik7bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIil9ZWxzZXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLHRoZW1lc0FycmF5WzFdKTtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiLHRoZW1lc0FycmF5WzFdKX19ZWxzZXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLHRoZW1lc0FycmF5WzBdKTtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiLHRoZW1lc0FycmF5WzBdKX19Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10b2dnbGUtdGhlbWVdXCIpXS5mb3JFYWNoKGVsPT57ZWwuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKX0pfSl9KX19ZnVuY3Rpb24gdGhlbWVCdG4oKXt2YXIgYnRuRWw9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXNldC10aGVtZT0nJ11cIik7dmFyIGRhdGFLZXk9YnRuRWw/YnRuRWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1rZXlcIik6bnVsbDsoZnVuY3Rpb24odGhlbWU9bG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIikpe2lmKHRoZW1lIT11bmRlZmluZWQmJnRoZW1lIT1cIlwiKXtpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKSYmbG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIikhPVwiXCIpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsdGhlbWUpO3ZhciBidG5FbD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc2V0LXRoZW1lPSdcIit0aGVtZS50b1N0cmluZygpK1wiJ11cIik7aWYoYnRuRWwpe1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc2V0LXRoZW1lXVwiKV0uZm9yRWFjaChlbD0+e2VsLmNsYXNzTGlzdC5yZW1vdmUoZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpfSk7aWYoYnRuRWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpe2J0bkVsLmNsYXNzTGlzdC5hZGQoYnRuRWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpfX19ZWxzZXt2YXIgYnRuRWw9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXNldC10aGVtZT0nJ11cIik7aWYoYnRuRWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpe2J0bkVsLmNsYXNzTGlzdC5hZGQoYnRuRWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpfX19fSkoKTtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXNldC10aGVtZV1cIildLmZvckVhY2goZWw9PntlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNldC10aGVtZVwiKSk7bG9jYWxTdG9yYWdlLnNldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIixkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiKSk7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zZXQtdGhlbWVdXCIpXS5mb3JFYWNoKGVsPT57ZWwuY2xhc3NMaXN0LnJlbW92ZShlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl9KTtpZihlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl7ZWwuY2xhc3NMaXN0LmFkZChlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl9fSl9KX1mdW5jdGlvbiB0aGVtZVNlbGVjdCgpe3ZhciBzZWxlY3RFbD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0W2RhdGEtY2hvb3NlLXRoZW1lXVwiKTt2YXIgZGF0YUtleT1zZWxlY3RFbD9zZWxlY3RFbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiKTpudWxsOyhmdW5jdGlvbih0aGVtZT1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKSl7aWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIikpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsdGhlbWUpO3ZhciBvcHRpb25Ub2dnbGVyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RbZGF0YS1jaG9vc2UtdGhlbWVdIFt2YWx1ZT0nXCIrdGhlbWUudG9TdHJpbmcoKStcIiddXCIpO2lmKG9wdGlvblRvZ2dsZXIpe1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VsZWN0W2RhdGEtY2hvb3NlLXRoZW1lXSBbdmFsdWU9J1wiK3RoZW1lLnRvU3RyaW5nKCkrXCInXVwiKV0uZm9yRWFjaChlbD0+e2VsLnNlbGVjdGVkPXRydWV9KX19fSkoKTtpZihzZWxlY3RFbCl7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWxlY3RbZGF0YS1jaG9vc2UtdGhlbWVdXCIpXS5mb3JFYWNoKGVsPT57ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLGZ1bmN0aW9uKCl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIix0aGlzLnZhbHVlKTtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiLGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIpKTtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdFtkYXRhLWNob29zZS10aGVtZV0gW3ZhbHVlPSdcIitsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhS2V5P2RhdGFLZXk6XCJ0aGVtZVwiKStcIiddXCIpXS5mb3JFYWNoKGVsPT57ZWwuc2VsZWN0ZWQ9dHJ1ZX0pfSl9KX19ZnVuY3Rpb24gdGhlbWVDaGFuZ2UoYXR0YWNoPXRydWUpe2lmKGF0dGFjaD09PXRydWUpe2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZnVuY3Rpb24oZXZlbnQpe3RoZW1lVG9nZ2xlKCk7dGhlbWVTZWxlY3QoKTt0aGVtZUJ0bigpfSl9ZWxzZXt0aGVtZVRvZ2dsZSgpO3RoZW1lU2VsZWN0KCk7dGhlbWVCdG4oKX19aWYodHlwZW9mIGV4cG9ydHMhPVwidW5kZWZpbmVkXCIpe21vZHVsZS5leHBvcnRzPXt0aGVtZUNoYW5nZTp0aGVtZUNoYW5nZX19ZWxzZXt0aGVtZUNoYW5nZSgpfSIsIi8vIGZ1bGxzY3JlZW5fY29udHJvbGxlci5qc1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRGdWxsc2NyZWVuKCkge1xyXG4gIC8vIEF0dGFjaCB0aGUgY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGJ1dHRvblxyXG4gIGNvbnN0IGZ1bGxzY3JlZW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZ1bGxzY3JlZW4tYnRuXCIpO1xyXG4gIGlmIChmdWxsc2NyZWVuQnRuKSB7XHJcbiAgICBmdWxsc2NyZWVuQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVGdWxsc2NyZWVuKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUZ1bGxzY3JlZW4oKSB7XHJcbiAgY29uc3Qgc2NyZWVuID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG5cclxuICBpZiAoXHJcbiAgICAhZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgJiZcclxuICAgICFkb2N1bWVudC5tb3pGdWxsU2NyZWVuRWxlbWVudCAmJlxyXG4gICAgIWRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50ICYmXHJcbiAgICAhZG9jdW1lbnQubXNGdWxsc2NyZWVuRWxlbWVudFxyXG4gICkge1xyXG4gICAgaWYgKHNjcmVlbi5yZXF1ZXN0RnVsbHNjcmVlbikge1xyXG4gICAgICBzY3JlZW4ucmVxdWVzdEZ1bGxzY3JlZW4oKTtcclxuICAgIH0gZWxzZSBpZiAoc2NyZWVuLm1zUmVxdWVzdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgc2NyZWVuLm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTtcclxuICAgIH0gZWxzZSBpZiAoc2NyZWVuLm1velJlcXVlc3RGdWxsU2NyZWVuKSB7XHJcbiAgICAgIHNjcmVlbi5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xyXG4gICAgfSBlbHNlIGlmIChzY3JlZW4ud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgc2NyZWVuLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChkb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xyXG4gICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKSB7XHJcbiAgICAgIGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbikge1xyXG4gICAgICBkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKCk7XHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKSB7XHJcbiAgICAgIGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRnVsbHNjcmVlbigpIHtcclxuICAvLyBMb2dpYyB0byB1cGRhdGUgZnVsbHNjcmVlbiBhZnRlciBodG14IGNvbnRlbnQgdXBkYXRlc1xyXG4gIGluaXRGdWxsc2NyZWVuKCk7XHJcbn1cclxuIiwiLy8gbG9hZGVyLmpzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlU2tlbGV0b24oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHZhciBza2VsZXRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5za2VsZXRvbicpO1xyXG4gICAgc2tlbGV0b24uZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2tlbGV0b24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJlbW92ZSB0aGUgbG9hZGluZyBjbGFzcyB0byBzdG9wIHRoZSBhbmltYXRpb25cclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIik7XHJcbn1cclxuXHJcbi8vIEluaXRpYWwgbG9hZFxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCByZW1vdmVTa2VsZXRvbik7XHJcblxyXG4vLyBGYWxsYmFjayBmb3Igb25sb2FkXHJcbndpbmRvdy5vbmxvYWQgPSByZW1vdmVTa2VsZXRvbjtcclxuXHJcbi8vIEhhbmRsZSBodG14IG5hdmlnYXRpb25cclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiaHRteDpsb2FkXCIsIHJlbW92ZVNrZWxldG9uKTtcclxuIiwiLy8gc2V0dGluZ3NfY29udHJvbGxlci5qc1xyXG5cclxuaW1wb3J0IHtcclxuICBpbml0VGhlbWVPcHRpb25zLFxyXG4gIHNldERlZmF1bHRUaGVtZSxcclxufSBmcm9tIFwiLi9zZXR0aW5nc19oZWxwZXJzL3RoZW1lX3NldHRpbmdzLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgaW5pdEZvbnRTaXplT3B0aW9ucyxcclxuICBzZXREZWZhdWx0Rm9udFNpemUsXHJcbiAgdXBkYXRlRm9udFNpemUsXHJcbn0gZnJvbSBcIi4vc2V0dGluZ3NfaGVscGVycy9mb250X3NpemVfc2V0dGluZ3MuanNcIjtcclxuaW1wb3J0IHtcclxuICBpbml0Rm9udFR5cGVPcHRpb25zLFxyXG4gIHNldERlZmF1bHRGb250VHlwZSxcclxuICB1cGRhdGVGb250VHlwZSxcclxufSBmcm9tIFwiLi9zZXR0aW5nc19oZWxwZXJzL2ZvbnRfdHlwZV9zZXR0aW5ncy5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIGluaXRDb250cmFzdE9wdGlvbnMsXHJcbiAgc2V0RGVmYXVsdENvbnRyYXN0LFxyXG4gIHVwZGF0ZUNvbnRyYXN0LFxyXG59IGZyb20gXCIuL3NldHRpbmdzX2hlbHBlcnMvY29udHJhc3Rfc2V0dGluZ3MuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIGEgZGVmYXVsdCBzZXR0aW5ncyBmdW5jdGlvbiB0byBhZGQgY2xpY2sgZXZlbnQgbGlzdGVuZXJcclxuICogdG8gc2V0IHRoZSBkZWZhdWx0IHZhbHVlcyB0byB0aGUgc2V0dGluZ3MuXHJcbiAqICovXHJcblxyXG5mdW5jdGlvbiBkZWZhdWx0QnV0dG9uQ2xpY2tFdmVudCgpIHtcclxuICBjb25zdCBkZWZhdWx0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZhdWx0QnV0dG9uXCIpO1xyXG4gIGlmIChkZWZhdWx0QnV0dG9uKSB7XHJcbiAgICBkZWZhdWx0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgc2V0RGVmYXVsdFRoZW1lKCk7XHJcbiAgICAgIHNldERlZmF1bHRGb250U2l6ZSgpO1xyXG4gICAgICBzZXREZWZhdWx0Rm9udFR5cGUoKTtcclxuICAgICAgc2V0RGVmYXVsdENvbnRyYXN0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEV4cG9ydCB0aG9zZSBpbXBvcnQgd2hlbiBzZXR0aW5nc19jb250cm9sbGVyLmpzIGlzIGltcG9ydGVkXHJcbmV4cG9ydCB7XHJcbiAgaW5pdFRoZW1lT3B0aW9ucyxcclxuICBpbml0Rm9udFNpemVPcHRpb25zLFxyXG4gIGluaXRGb250VHlwZU9wdGlvbnMsXHJcbiAgaW5pdENvbnRyYXN0T3B0aW9ucyxcclxuICB1cGRhdGVGb250U2l6ZSxcclxuICB1cGRhdGVGb250VHlwZSxcclxuICB1cGRhdGVDb250cmFzdCxcclxuICBkZWZhdWx0QnV0dG9uQ2xpY2tFdmVudCxcclxufTtcclxuIiwiLy8gZmlsZTogY29udHJhc3Rfc2V0dGluZ3MuanNcclxuXHJcbmltcG9ydCBzZWxlY3RvclZhbHVlIGZyb20gXCIuL2RhdGEvc2V0dGluZ3Nfb3B0aW9uX3NlbGVjdG9yX2RhdGEuanNvblwiO1xyXG5cclxuY29uc3QgS0VZID0gXCJjb250cmFzdFwiO1xyXG5jb25zdCBERUZBVUxUX1ZBTFVFID0gXCJub3JtYWwtY29udHJhc3RcIjtcclxuY29uc3QgU0VMRUNUT1JfSUQgPSBcImNvbnRyYXN0LXNlbGVjdG9yXCI7XHJcbmNvbnN0IEVSUl9NU0cgPSBcImxvY2FsU3RvcmFnZSBpcyBub3QgYXZhaWxhYmxlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdENvbnRyYXN0T3B0aW9ucygpIHtcclxuICAvLyBjaGFuZ2UgdGhlIHNlbGVjdG9yIHZhbHVlIHR5cGVcclxuICBjb25zdCB0eXBlVmFsdWVzID0gc2VsZWN0b3JWYWx1ZS5jb250cmFzdDtcclxuICBjb25zdCB0eXBlU2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTRUxFQ1RPUl9JRCk7XHJcblxyXG4gIGlmICh0eXBlb2YgU3RvcmFnZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgY29uc3QgY3VycmVudFR5cGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShLRVkpO1xyXG4gICAgY29uc3QgYm9keUNsYXNzZXMgPSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdDtcclxuXHJcbiAgICAvLyBJZiB0aGUgY3VycmVudFR5cGUgaXMgbm90IGluIHRoZSBib2R5IGNsYXNzZXMsIGFkZCBpdFxyXG4gICAgaWYgKFxyXG4gICAgICAhYm9keUNsYXNzZXMuY29udGFpbnMoY3VycmVudFR5cGUpICYmXHJcbiAgICAgIHR5cGVWYWx1ZXMuaW5jbHVkZXMoY3VycmVudFR5cGUpXHJcbiAgICApIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGN1cnJlbnRUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICB0eXBlU2VsZWN0b3IuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICB0eXBlVmFsdWVzLmZvckVhY2goKGNvbnRyYXN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgIG9wdGlvbi52YWx1ZSA9IGNvbnRyYXN0O1xyXG4gICAgICBvcHRpb24udGV4dCA9IGNvbnRyYXN0O1xyXG5cclxuICAgICAgaWYgKGNvbnRyYXN0ID09PSBjdXJyZW50VHlwZSkge1xyXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHR5cGVTZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgc2VsZWN0ZWRUeXBlIGlzIG5vdCB1bmRlZmluZWQgYmVmb3JlIGFkZGluZyB0aGUgZXZlbnQgbGlzdGVuZXJcclxuICAgIGlmIChjdXJyZW50VHlwZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgZm9udCBzaXplIHNlbGVjdG9yXHJcbiAgICAgIHR5cGVTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZFR5cGUgPSB0eXBlU2VsZWN0b3IudmFsdWU7XHJcbiAgICAgICAgYXBwbHlGb250VHlwZShzZWxlY3RlZFR5cGUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFbnN1cmUgdGhhdCBhcHBseUZvbnRUeXBlIGlzIGNhbGxlZCBpbml0aWFsbHkgdG8gc2V0IHRoZSBmb250IHNpemUgZHVyaW5nIHBhZ2UgbG9hZFxyXG4gICAgYXBwbHlGb250VHlwZShjdXJyZW50VHlwZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoRVJSX01TRyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdENvbnRyYXN0KCkge1xyXG4gIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IERFRkFVTFRfVkFMVUU7XHJcblxyXG4gIGlmICh0eXBlb2YgU3RvcmFnZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oS0VZLCBkZWZhdWx0VmFsdWUpO1xyXG4gICAgYXBwbHlGb250VHlwZShkZWZhdWx0VmFsdWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKEVSUl9NU0cpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlGb250VHlwZShzZWxlY3RlZFR5cGUpIHtcclxuICBjb25zdCB0eXBlU2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTRUxFQ1RPUl9JRCk7XHJcblxyXG4gIC8vIEdldCBhbGwgYXZhaWxhYmxlIGZvbnQgc2l6ZXMgZnJvbSBzZWxlY3RvclZhbHVlXHJcbiAgY29uc3QgYWxsRm9udFR5cGVzID0gc2VsZWN0b3JWYWx1ZS5jb250cmFzdDtcclxuXHJcbiAgLy8gUmVtb3ZlIGFsbCBmb250IHNpemUgY2xhc3NlcyBmcm9tIHRoZSBib2R5XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKC4uLmFsbEZvbnRUeXBlcyk7XHJcblxyXG4gIC8vIFNldCB0aGUgc2VsZWN0ZWQgZm9udCBzaXplIHRvIHRoZSBkZWZhdWx0IHZhbHVlIGlmIGl0IGlzIGZhbHN5IG9yIFwiZGVmYXVsdFwiXHJcbiAgc2VsZWN0ZWRUeXBlID0gc2VsZWN0ZWRUeXBlIHx8IERFRkFVTFRfVkFMVUU7XHJcblxyXG4gIC8vIEFkZCB0aGUgbmV3IGZvbnQgc2l6ZSBjbGFzcyB0byB0aGUgYm9keVxyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChzZWxlY3RlZFR5cGUpO1xyXG5cclxuICAvLyBTYXZlIHRoZSBzZWxlY3RlZCBmb250IHNpemUgdG8gbG9jYWwgc3RvcmFnZSBmb3IgcGVyc2lzdGVuY2VcclxuICBpZiAodHlwZW9mIFN0b3JhZ2UgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEtFWSwgc2VsZWN0ZWRUeXBlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihFUlJfTVNHKTtcclxuICB9XHJcblxyXG4gIC8vIFNldCB0aGUgc2VsZWN0ZWQgZm9udCBzaXplIGluIHRoZSBzZWxlY3RvclxyXG4gIHR5cGVTZWxlY3Rvci52YWx1ZSA9IHNlbGVjdGVkVHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUZvbnRTaXplKCkge1xyXG4gIGluaXRDb250cmFzdE9wdGlvbnMoKTtcclxufVxyXG4iLCIvLyBmaWxlOiBmb250X3NpemVfc2V0dGluZ3MuanNcclxuXHJcbmltcG9ydCBzZWxlY3RvclZhbHVlIGZyb20gXCIuL2RhdGEvc2V0dGluZ3Nfb3B0aW9uX3NlbGVjdG9yX2RhdGEuanNvblwiO1xyXG5cclxuY29uc3QgS0VZID0gXCJmb250U2l6ZVwiO1xyXG5jb25zdCBERUZBVUxUX1ZBTFVFID0gXCJ0ZXh0LWJhc2VcIjtcclxuY29uc3QgU0VMRUNUT1JfSUQgPSBcImZvbnQtc2l6ZS1zZWxlY3RvclwiO1xyXG5jb25zdCBFUlJfTVNHID0gXCJsb2NhbFN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRGb250U2l6ZU9wdGlvbnMoKSB7XHJcbiAgLy8gY2hhbmdlIHRoZSBzZWxlY3RvciB2YWx1ZSB0eXBlXHJcbiAgY29uc3QgdHlwZVZhbHVlcyA9IHNlbGVjdG9yVmFsdWUuZm9udFNpemU7XHJcbiAgY29uc3QgdHlwZVNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoU0VMRUNUT1JfSUQpO1xyXG5cclxuICBpZiAodHlwZW9mIFN0b3JhZ2UgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRUeXBlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oS0VZKTtcclxuICAgIGNvbnN0IGJvZHlDbGFzc2VzID0gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3Q7XHJcblxyXG4gICAgLy8gSWYgdGhlIGN1cnJlbnRUeXBlIGlzIG5vdCBpbiB0aGUgYm9keSBjbGFzc2VzLCBhZGQgaXRcclxuICAgIGlmIChcclxuICAgICAgIWJvZHlDbGFzc2VzLmNvbnRhaW5zKGN1cnJlbnRUeXBlKSAmJlxyXG4gICAgICB0eXBlVmFsdWVzLmluY2x1ZGVzKGN1cnJlbnRUeXBlKVxyXG4gICAgKSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChjdXJyZW50VHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHlwZVNlbGVjdG9yLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgdHlwZVZhbHVlcy5mb3JFYWNoKChmb250U2l6ZSkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICBvcHRpb24udmFsdWUgPSBmb250U2l6ZTtcclxuICAgICAgb3B0aW9uLnRleHQgPSBmb250U2l6ZTtcclxuXHJcbiAgICAgIGlmIChmb250U2l6ZSA9PT0gY3VycmVudFR5cGUpIHtcclxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0eXBlU2VsZWN0b3IuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIHNlbGVjdGVkVHlwZSBpcyBub3QgdW5kZWZpbmVkIGJlZm9yZSBhZGRpbmcgdGhlIGV2ZW50IGxpc3RlbmVyXHJcbiAgICBpZiAoY3VycmVudFR5cGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAvLyBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGZvbnQgc2l6ZSBzZWxlY3RvclxyXG4gICAgICB0eXBlU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRUeXBlID0gdHlwZVNlbGVjdG9yLnZhbHVlO1xyXG4gICAgICAgIGFwcGx5Rm9udFR5cGUoc2VsZWN0ZWRUeXBlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRW5zdXJlIHRoYXQgYXBwbHlGb250VHlwZSBpcyBjYWxsZWQgaW5pdGlhbGx5IHRvIHNldCB0aGUgZm9udCBzaXplIGR1cmluZyBwYWdlIGxvYWRcclxuICAgIGFwcGx5Rm9udFR5cGUoY3VycmVudFR5cGUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKEVSUl9NU0cpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRGb250U2l6ZSgpIHtcclxuICBjb25zdCBkZWZhdWx0VmFsdWUgPSBERUZBVUxUX1ZBTFVFO1xyXG5cclxuICBpZiAodHlwZW9mIFN0b3JhZ2UgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEtFWSwgZGVmYXVsdFZhbHVlKTtcclxuICAgIGFwcGx5Rm9udFR5cGUoZGVmYXVsdFZhbHVlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihFUlJfTVNHKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5Rm9udFR5cGUoc2VsZWN0ZWRUeXBlKSB7XHJcbiAgY29uc3QgdHlwZVNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoU0VMRUNUT1JfSUQpO1xyXG5cclxuICAvLyBHZXQgYWxsIGF2YWlsYWJsZSBmb250IHNpemVzIGZyb20gc2VsZWN0b3JWYWx1ZVxyXG4gIGNvbnN0IGFsbEZvbnRUeXBlcyA9IHNlbGVjdG9yVmFsdWUuZm9udFNpemU7XHJcblxyXG4gIC8vIFJlbW92ZSBhbGwgZm9udCBzaXplIGNsYXNzZXMgZnJvbSB0aGUgYm9keVxyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSguLi5hbGxGb250VHlwZXMpO1xyXG5cclxuICAvLyBTZXQgdGhlIHNlbGVjdGVkIGZvbnQgc2l6ZSB0byB0aGUgZGVmYXVsdCB2YWx1ZSBpZiBpdCBpcyBmYWxzeSBvciBcImRlZmF1bHRcIlxyXG4gIHNlbGVjdGVkVHlwZSA9IHNlbGVjdGVkVHlwZSB8fCBERUZBVUxUX1ZBTFVFO1xyXG5cclxuICAvLyBBZGQgdGhlIG5ldyBmb250IHNpemUgY2xhc3MgdG8gdGhlIGJvZHlcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoc2VsZWN0ZWRUeXBlKTtcclxuXHJcbiAgLy8gU2F2ZSB0aGUgc2VsZWN0ZWQgZm9udCBzaXplIHRvIGxvY2FsIHN0b3JhZ2UgZm9yIHBlcnNpc3RlbmNlXHJcbiAgaWYgKHR5cGVvZiBTdG9yYWdlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShLRVksIHNlbGVjdGVkVHlwZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoRVJSX01TRyk7XHJcbiAgfVxyXG5cclxuICAvLyBTZXQgdGhlIHNlbGVjdGVkIGZvbnQgc2l6ZSBpbiB0aGUgc2VsZWN0b3JcclxuICB0eXBlU2VsZWN0b3IudmFsdWUgPSBzZWxlY3RlZFR5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVGb250U2l6ZSgpIHtcclxuICBpbml0Rm9udFNpemVPcHRpb25zKCk7XHJcbn1cclxuIiwiLy8gZmlsZTogZm9udF90eXBlX3NldHRpbmdzLmpzXHJcblxyXG5pbXBvcnQgc2VsZWN0b3JWYWx1ZSBmcm9tIFwiLi9kYXRhL3NldHRpbmdzX29wdGlvbl9zZWxlY3Rvcl9kYXRhLmpzb25cIjtcclxuXHJcbmNvbnN0IEtFWSA9IFwiZm9udFR5cGVcIjtcclxuY29uc3QgREVGQVVMVF9WQUxVRSA9IFwib3Blbi1zYW5zXCI7XHJcbmNvbnN0IFNFTEVDVE9SX0lEID0gXCJmb250LXR5cGUtc2VsZWN0b3JcIjtcclxuY29uc3QgRVJSX01TRyA9IFwibG9jYWxTdG9yYWdlIGlzIG5vdCBhdmFpbGFibGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0Rm9udFR5cGVPcHRpb25zKCkge1xyXG4gIC8vIGNoYW5nZSB0aGUgc2VsZWN0b3IgdmFsdWUgdHlwZVxyXG4gIGNvbnN0IHR5cGVWYWx1ZXMgPSBzZWxlY3RvclZhbHVlLmZvbnRUeXBlO1xyXG4gIGNvbnN0IHR5cGVTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNFTEVDVE9SX0lEKTtcclxuXHJcbiAgaWYgKHR5cGVvZiBTdG9yYWdlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VHlwZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEtFWSk7XHJcbiAgICBjb25zdCBib2R5Q2xhc3NlcyA9IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0O1xyXG5cclxuICAgIC8vIElmIHRoZSBjdXJyZW50VHlwZSBpcyBub3QgaW4gdGhlIGJvZHkgY2xhc3NlcywgYWRkIGl0XHJcbiAgICBpZiAoXHJcbiAgICAgICFib2R5Q2xhc3Nlcy5jb250YWlucyhjdXJyZW50VHlwZSkgJiZcclxuICAgICAgdHlwZVZhbHVlcy5pbmNsdWRlcyhjdXJyZW50VHlwZSlcclxuICAgICkge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoY3VycmVudFR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHR5cGVTZWxlY3Rvci5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIHR5cGVWYWx1ZXMuZm9yRWFjaCgoZm9udFR5cGUpID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgb3B0aW9uLnZhbHVlID0gZm9udFR5cGU7XHJcbiAgICAgIG9wdGlvbi50ZXh0ID0gZm9udFR5cGU7XHJcblxyXG4gICAgICBpZiAoZm9udFR5cGUgPT09IGN1cnJlbnRUeXBlKSB7XHJcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdHlwZVNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiBzZWxlY3RlZFR5cGUgaXMgbm90IHVuZGVmaW5lZCBiZWZvcmUgYWRkaW5nIHRoZSBldmVudCBsaXN0ZW5lclxyXG4gICAgaWYgKGN1cnJlbnRUeXBlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBmb250IHR5cGUgc2VsZWN0b3JcclxuICAgICAgdHlwZVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVHlwZSA9IHR5cGVTZWxlY3Rvci52YWx1ZTtcclxuICAgICAgICBhcHBseUZvbnRUeXBlKHNlbGVjdGVkVHlwZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEVuc3VyZSB0aGF0IGFwcGx5Rm9udFR5cGUgaXMgY2FsbGVkIGluaXRpYWxseSB0byBzZXQgdGhlIGZvbnQgdHlwZSBkdXJpbmcgcGFnZSBsb2FkXHJcbiAgICBhcHBseUZvbnRUeXBlKGN1cnJlbnRUeXBlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihFUlJfTVNHKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0Rm9udFR5cGUoKSB7XHJcbiAgY29uc3QgZGVmYXVsdFZhbHVlID0gREVGQVVMVF9WQUxVRTtcclxuXHJcbiAgaWYgKHR5cGVvZiBTdG9yYWdlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShLRVksIGRlZmF1bHRWYWx1ZSk7XHJcbiAgICBhcHBseUZvbnRUeXBlKGRlZmF1bHRWYWx1ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoRVJSX01TRyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseUZvbnRUeXBlKHNlbGVjdGVkVHlwZSkge1xyXG4gIGNvbnN0IHR5cGVTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNFTEVDVE9SX0lEKTtcclxuXHJcbiAgLy8gR2V0IGFsbCBhdmFpbGFibGUgZm9udCB0eXBlcyBmcm9tIHNlbGVjdG9yVmFsdWVcclxuICBjb25zdCBhbGxGb250VHlwZXMgPSBzZWxlY3RvclZhbHVlLmZvbnRUeXBlO1xyXG5cclxuICAvLyBSZW1vdmUgYWxsIGZvbnQgdHlwZSBjbGFzc2VzIGZyb20gdGhlIGJvZHlcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoLi4uYWxsRm9udFR5cGVzKTtcclxuXHJcbiAgLy8gU2V0IHRoZSBzZWxlY3RlZCBmb250IHR5cGUgdG8gdGhlIGRlZmF1bHQgdmFsdWUgaWYgaXQgaXMgZmFsc3kgb3IgXCJkZWZhdWx0XCJcclxuICBzZWxlY3RlZFR5cGUgPSBzZWxlY3RlZFR5cGUgfHwgREVGQVVMVF9WQUxVRTtcclxuXHJcbiAgLy8gQWRkIHRoZSBuZXcgZm9udCB0eXBlIGNsYXNzIHRvIHRoZSBib2R5XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHNlbGVjdGVkVHlwZSk7XHJcblxyXG4gIC8vIFNhdmUgdGhlIHNlbGVjdGVkIGZvbnQgdHlwZSB0byBsb2NhbCBzdG9yYWdlIGZvciBwZXJzaXN0ZW5jZVxyXG4gIGlmICh0eXBlb2YgU3RvcmFnZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oS0VZLCBzZWxlY3RlZFR5cGUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKEVSUl9NU0cpO1xyXG4gIH1cclxuXHJcbiAgLy8gU2V0IHRoZSBzZWxlY3RlZCBmb250IHR5cGUgaW4gdGhlIHNlbGVjdG9yXHJcbiAgdHlwZVNlbGVjdG9yLnZhbHVlID0gc2VsZWN0ZWRUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRm9udFR5cGUoKSB7XHJcbiAgaW5pdEZvbnRUeXBlT3B0aW9ucygpO1xyXG59XHJcbiIsIi8vIGZpbGU6IHRoZW1lX3NldHRpbmdzLmpzXHJcblxyXG5pbXBvcnQgeyB0aGVtZUNoYW5nZSB9IGZyb20gXCJ0aGVtZS1jaGFuZ2VcIjtcclxuaW1wb3J0IHNlbGVjdG9yVmFsdWUgZnJvbSBcIi4vZGF0YS9zZXR0aW5nc19vcHRpb25fc2VsZWN0b3JfZGF0YS5qc29uXCI7XHJcblxyXG5jb25zdCBLRVkgPSBcInRoZW1lXCI7XHJcbmNvbnN0IERFRkFVTFRfVkFMVUUgPSBcImRpbVwiO1xyXG5jb25zdCBTRUxFQ1RPUl9JRCA9IFwidGhlbWUtc2VsZWN0b3JcIjtcclxuY29uc3QgRVJSX01TRyA9IFwibG9jYWxTdG9yYWdlIGlzIG5vdCBhdmFpbGFibGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0VGhlbWVPcHRpb25zKCkge1xyXG4gIGNvbnN0IHRoZW1lVmFsdWVzID0gc2VsZWN0b3JWYWx1ZS50aGVtZXM7XHJcbiAgY29uc3Qgc2V0dGluZ3NUaGVtZVNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoU0VMRUNUT1JfSUQpO1xyXG5cclxuICBpZiAodHlwZW9mIFN0b3JhZ2UgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEtFWSk7XHJcbiAgICBzZXR0aW5nc1RoZW1lU2VsZWN0b3IuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICB0aGVtZVZhbHVlcy5mb3JFYWNoKCh0aGVtZSkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICBvcHRpb24udmFsdWUgPSB0aGVtZTtcclxuICAgICAgb3B0aW9uLnRleHQgPSB0aGVtZTtcclxuXHJcbiAgICAgIGlmICh0aGVtZSA9PT0gY3VycmVudFRoZW1lKSB7XHJcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0dGluZ3NUaGVtZVNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihFUlJfTVNHKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0VGhlbWUoKSB7XHJcbiAgY29uc3QgZGVmYXVsdFZhbHVlID0gREVGQVVMVF9WQUxVRTtcclxuXHJcbiAgaWYgKHR5cGVvZiBTdG9yYWdlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShLRVksIGRlZmF1bHRWYWx1ZSk7XHJcbiAgICB0aGVtZUNoYW5nZShkZWZhdWx0VmFsdWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKEVSUl9NU0cpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxyXG4gKiBNYWluIENvbnRyb2xsZXJcclxuICogZmlsZTogaHRteF9jb250cm9sbGVyLmpzXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgdGhlbWVDaGFuZ2UgfSBmcm9tIFwidGhlbWUtY2hhbmdlXCI7XHJcbmltcG9ydCB7IHJlbW92ZVNrZWxldG9uIH0gZnJvbSBcIi4vdXRpbGl0eV9jb250cm9sbGVyL2xvYWRlcl9jb250cm9sbGVyLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgaW5pdEZ1bGxzY3JlZW4sXHJcbiAgdXBkYXRlRnVsbHNjcmVlbixcclxufSBmcm9tIFwiLi91dGlsaXR5X2NvbnRyb2xsZXIvZnVsbF9zY3JlZW5fY29udHJvbGxlci5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIFxyXG4gIGluaXRUaGVtZU9wdGlvbnMsXHJcbiAgaW5pdEZvbnRTaXplT3B0aW9ucyxcclxuICBpbml0Rm9udFR5cGVPcHRpb25zLFxyXG4gIGluaXRDb250cmFzdE9wdGlvbnMsXHJcblxyXG4gIHVwZGF0ZUZvbnRTaXplLFxyXG4gIHVwZGF0ZUZvbnRUeXBlLFxyXG4gIFxyXG4gIGRlZmF1bHRCdXR0b25DbGlja0V2ZW50LFxyXG59IGZyb20gXCIuL3V0aWxpdHlfY29udHJvbGxlci9zZXR0aW5nc19jb250cm9sbGVyLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVBZnRlclN3YXAoZXZlbnQpIHtcclxuICBjb25zb2xlLmxvZyhcImh0bXg6YWZ0ZXJTd2FwIGV2ZW50IHRyaWdnZXJlZFwiKTtcclxuICB0aGVtZUNoYW5nZSgpO1xyXG4gIHVwZGF0ZUZ1bGxzY3JlZW4oKTtcclxuICB1cGRhdGVGb250U2l6ZSgpO1xyXG4gIHVwZGF0ZUZvbnRUeXBlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVQYWdlV2l0aExvYWRlcigpIHtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nXCIpO1xyXG4gIHJlbW92ZVNrZWxldG9uKCk7XHJcbiAgaW5pdEZ1bGxzY3JlZW4oKTtcclxuICB0aGVtZUNoYW5nZShmYWxzZSk7XHJcbiAgaW5pdFRoZW1lT3B0aW9ucygpO1xyXG4gIGluaXRGb250U2l6ZU9wdGlvbnMoKTtcclxuICBpbml0Rm9udFR5cGVPcHRpb25zKCk7XHJcbiAgaW5pdENvbnRyYXN0T3B0aW9ucygpO1xyXG4gIGRlZmF1bHRCdXR0b25DbGlja0V2ZW50KCk7XHJcbn1cclxuXHJcbi8vIEluaXRpYWwgcGFnZSBsb2FkIHdpdGggbG9hZGVyXHJcbmluaXRpYWxpemVQYWdlV2l0aExvYWRlcigpO1xyXG5cclxuLy8gSGFuZGxlIGh0bXggbmF2aWdhdGlvbiBmb3Igc3Vic2VxdWVudCBwYWdlIGxvYWRzXHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImh0bXg6bG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgaW5pdGlhbGl6ZVBhZ2VXaXRoTG9hZGVyKCk7XHJcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwiaHRteDphZnRlclN3YXBcIiwgaGFuZGxlQWZ0ZXJTd2FwKTtcclxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJodG14OmFmdGVyU3dhcFwiLCBoYW5kbGVBZnRlclN3YXApO1xyXG59KTtcclxuXHJcbi8vIEhhbmRsZSB0aGVtZSBjaGFuZ2UgZXZlbnRcclxudGhlbWVDaGFuZ2UoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9