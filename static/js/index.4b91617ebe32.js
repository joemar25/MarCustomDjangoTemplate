/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./application/static/js/dark_mode_controller.js":
/*!*******************************************************!*\
  !*** ./application/static/js/dark_mode_controller.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initDarkMode: () => (/* binding */ initDarkMode)\n/* harmony export */ });\nlet darkModeInitialized = false;\r\n\r\nfunction initDarkMode() {\r\n  if (!darkModeInitialized) {\r\n    darkModeInitialized = true;\r\n\r\n    // Check for saved theme preference\r\n    const currentTheme = localStorage.getItem(\"color-theme\");\r\n    if (currentTheme === \"dark\") {\r\n      document.documentElement.classList.add(\"dark\");\r\n    }\r\n\r\n    // Attach the click event listener to the body (event delegation)\r\n    document.body.addEventListener(\"click\", handleDarkModeToggle);\r\n  }\r\n}\r\n\r\nfunction handleDarkModeToggle(event) {\r\n  const themeToggleButton = document.getElementById(\"theme-toggle\");\r\n  if (themeToggleButton && event.target === themeToggleButton) {\r\n    // Toggle theme only if the click is on the theme toggle button\r\n    const darkModeEnabled = document.documentElement.classList.contains(\"dark\");\r\n    document.documentElement.classList.toggle(\"dark\", !darkModeEnabled);\r\n    localStorage.setItem(\"color-theme\", darkModeEnabled ? \"light\" : \"dark\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://mar-custom-django-template/./application/static/js/dark_mode_controller.js?");

/***/ }),

/***/ "./application/static/js/full_screen_controller.js":
/*!*********************************************************!*\
  !*** ./application/static/js/full_screen_controller.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initFullscreen: () => (/* binding */ initFullscreen),\n/* harmony export */   updateFullscreen: () => (/* binding */ updateFullscreen)\n/* harmony export */ });\nfunction initFullscreen() {\r\n  const toggleFullscreen = () => {\r\n    const screen = document.documentElement;\r\n\r\n    if (\r\n      !document.fullscreenElement &&\r\n      !document.mozFullScreenElement &&\r\n      !document.webkitFullscreenElement &&\r\n      !document.msFullscreenElement\r\n    ) {\r\n      if (screen.requestFullscreen) {\r\n        screen.requestFullscreen();\r\n      } else if (screen.msRequestFullscreen) {\r\n        screen.msRequestFullscreen();\r\n      } else if (screen.mozRequestFullScreen) {\r\n        screen.mozRequestFullScreen();\r\n      } else if (screen.webkitRequestFullscreen) {\r\n        screen.webkitRequestFullscreen();\r\n      }\r\n    } else {\r\n      if (document.exitFullscreen) {\r\n        document.exitFullscreen();\r\n      } else if (document.msExitFullscreen) {\r\n        document.msExitFullscreen();\r\n      } else if (document.mozCancelFullScreen) {\r\n        document.mozCancelFullScreen();\r\n      } else if (document.webkitExitFullscreen) {\r\n        document.webkitExitFullscreen();\r\n      }\r\n    }\r\n  };\r\n\r\n  // Attach the click event listener to the button\r\n  const attachFullscreenClickEvent = () => {\r\n    const fullscreenBtn = document.getElementById(\"fullscreen-btn\");\r\n    if (fullscreenBtn) {\r\n      fullscreenBtn.addEventListener(\"click\", toggleFullscreen);\r\n    }\r\n  };\r\n\r\n  // Initial binding\r\n  attachFullscreenClickEvent();\r\n}\r\n\r\nfunction updateFullscreen() {\r\n  // Logic to update fullscreen after htmx content updates\r\n  initFullscreen();\r\n}\r\n\n\n//# sourceURL=webpack://mar-custom-django-template/./application/static/js/full_screen_controller.js?");

/***/ }),

/***/ "./application/static/js/htmx_controller.js":
/*!**************************************************!*\
  !*** ./application/static/js/htmx_controller.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _full_screen_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./full_screen_controller.js */ \"./application/static/js/full_screen_controller.js\");\n/* harmony import */ var _dark_mode_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dark_mode_controller.js */ \"./application/static/js/dark_mode_controller.js\");\n// htmx controller.js\r\n\r\nconsole.log(\"i hate\");\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n  (0,_full_screen_controller_js__WEBPACK_IMPORTED_MODULE_0__.initFullscreen)();\r\n  (0,_dark_mode_controller_js__WEBPACK_IMPORTED_MODULE_1__.initDarkMode)();\r\n});\r\n\r\ndocument.body.addEventListener(\"htmx:afterSwap\", function (event) {\r\n  (0,_full_screen_controller_js__WEBPACK_IMPORTED_MODULE_0__.updateFullscreen)();\r\n});\r\n\n\n//# sourceURL=webpack://mar-custom-django-template/./application/static/js/htmx_controller.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./application/static/js/htmx_controller.js");
/******/ 	
/******/ })()
;