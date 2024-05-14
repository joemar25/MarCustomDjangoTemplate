/**
 * Main Controller
 * file: controller.js
 */

import { themeChange } from "theme-change";
import { removeSkeleton } from "./utility_controller/loader_controller.js";
import {
  initFullscreen,
  updateFullscreen,
} from "./utility_controller/full_screen_controller.js";
import {
  initThemeOptions,
  initFontSizeOptions,
  initFontTypeOptions,
  initContrastOptions,
  updateFontSize,
  updateFontType,
  defaultButtonClickEvent,
} from "./utility_controller/settings_controller.js";

function handleAfterSwap(event) {
  themeChange();
  updateFullscreen();
  updateFontSize();
  updateFontType();
}

function initializePageWithLoader() {
  document.body.classList.add("loading");
  removeSkeleton();
  initFullscreen();
  themeChange(false);
  initThemeOptions();
  initFontSizeOptions();
  initFontTypeOptions();
  initContrastOptions();
  defaultButtonClickEvent();
}

// Initial page load with loader
initializePageWithLoader();

// Handle theme change event
themeChange();
