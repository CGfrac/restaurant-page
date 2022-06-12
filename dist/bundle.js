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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\n    const mainDiv = document.createElement('div');\n\n    const title = document.createElement('h1');\n    title.textContent = 'Want to tell us something?';\n\n    const para = document.createElement('p');\n    para.textContent = 'You can find us on Twitter!';\n\n    mainDiv.append(title, para);\n\n    return mainDiv;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.jpg */ \"./src/home.jpg\");\n\n\nfunction createHome() {\n    const mainDiv = document.createElement('div');\n\n    const title = document.createElement('h1');\n    title.textContent = 'Super cool restaurant';\n\n    const image = new Image();\n    image.src = _home_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    image.alt = 'Table with dishes';\n\n    const para = document.createElement('p');\n    para.textContent = 'Our restaurant is so cool everyone eats there!';\n\n    mainDiv.append(title, image, para);\n\n    return mainDiv;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\nconst displayController = (() => {\n    const content = document.getElementById('content');\n\n    const _clearPage = () => {\n        const nav = document.querySelector('nav');\n        while (content.lastElementChild !== nav) {\n            content.removeChild(content.lastElementChild);\n        }\n    };\n\n    const _updateNav = button => {\n        const className = 'active-tab';\n        const previousButton = document.querySelector('.active-tab');\n        previousButton.classList.remove(className);\n        button.classList.add(className);\n    };\n\n    const _updatePage = e => {\n        const button = e.target;\n\n        _clearPage();\n\n        const tabName = button.textContent;\n\n        let page;\n        switch(tabName) {\n            case 'Home':\n                page = _home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n                break;\n            case 'Menu':\n                page = _menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n                break;\n            case 'Contact':\n                page = _contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n        }\n\n        content.appendChild(page());\n        _updateNav(button);\n    };\n\n    const _createListElement = content => {\n        const listElement = document.createElement('li');\n        listElement.textContent = content;\n        return listElement;\n    }\n\n    const generatePage = () => {\n        const nav = document.createElement('nav');\n        const list = document.createElement('ul');\n        const tabNames = ['Home', 'Menu', 'Contact'];\n\n        for (const tabName of tabNames) {\n            const listElement = _createListElement(tabName);\n            if (tabName === 'Home') {\n                listElement.classList.add('active-tab');\n            } else if (tabName === 'Menu') {\n                listElement.classList.add('middle-tab');\n            }\n            listElement.addEventListener('click', _updatePage);\n            list.appendChild(listElement);\n        }\n\n        nav.appendChild(list);\n        content.appendChild(nav);\n\n        content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    };\n\n    return {\n        generatePage,\n    };\n})();\n\ndisplayController.generatePage();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menu_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.json */ \"./src/menu.json\");\n\n\nfunction createMenu() {\n    const mainDiv = document.createElement('div');\n\n    const title = document.createElement('h1');\n    title.textContent = 'Our stuff';\n    mainDiv.appendChild(title);\n\n    for (const type in _menu_json__WEBPACK_IMPORTED_MODULE_0__) {\n        const typeTitle = document.createElement('h2');\n        typeTitle.textContent = type;\n        mainDiv.appendChild(typeTitle);\n\n        for (const item of _menu_json__WEBPACK_IMPORTED_MODULE_0__[type]) {\n            const name = document.createElement('h3');\n            name.textContent = item.name;\n\n            const description = document.createElement('p');\n            description.textContent = item.description;\n\n            mainDiv.append(name, description);\n        }\n    }\n\n    return mainDiv;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/home.jpg":
/*!**********************!*\
  !*** ./src/home.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d69c5fdf81d716f31911.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/home.jpg?");

/***/ }),

/***/ "./src/menu.json":
/*!***********************!*\
  !*** ./src/menu.json ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"Beverages\":[{\"name\":\"Soda\",\"description\":\"It tickles when you drink it!\"},{\"name\":\"Beer\",\"description\":\"Recommended to dwarves.\"}],\"Plates\":[{\"name\":\"Pizza\",\"description\":\"The mutant turtle ninja\\'s favorite dish!\"},{\"name\":\"Cheezburger\",\"description\":\"You can has it.\"}],\"Desserts\":[{\"name\":\"Pistachio icecream\",\"description\":\"I just like it so you should have some too.\"}]}');\n\n//# sourceURL=webpack://restaurant-page/./src/menu.json?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;