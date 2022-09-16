/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const Heading = __webpack_require__(/*! ./scripts/heading */ \"./src/scripts/heading.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const root = document.getElementById('root');\n  const heading = new Heading('Hey Programmers!!');\n  console.log(heading.heading);\n  root.innerHTML = heading.heading;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLG1EQUFELENBQXZCOztBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2hELE1BQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLE1BQXhCLENBQWI7RUFDQSxNQUFNQyxPQUFPLEdBQUcsSUFBSU4sT0FBSixDQUFZLG1CQUFaLENBQWhCO0VBQ0FPLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFPLENBQUNBLE9BQXBCO0VBQ0FGLElBQUksQ0FBQ0ssU0FBTCxHQUFpQkgsT0FBTyxDQUFDQSxPQUF6QjtBQUNILENBTEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXB0YWluLW5lbW8tYW5kLXRoZS1zZWFyY2gtZm9yLW1vcmUtZm9vZC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEhlYWRpbmcgPSByZXF1aXJlKCcuL3NjcmlwdHMvaGVhZGluZycpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBuZXcgSGVhZGluZygnSGV5IFByb2dyYW1tZXJzISEnKTtcbiAgICBjb25zb2xlLmxvZyhoZWFkaW5nLmhlYWRpbmcpO1xuICAgIHJvb3QuaW5uZXJIVE1MID0gaGVhZGluZy5oZWFkaW5nO1xufSkiXSwibmFtZXMiOlsiSGVhZGluZyIsInJlcXVpcmUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyb290IiwiZ2V0RWxlbWVudEJ5SWQiLCJoZWFkaW5nIiwiY29uc29sZSIsImxvZyIsImlubmVySFRNTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/heading.js":
/*!********************************!*\
  !*** ./src/scripts/heading.js ***!
  \********************************/
/***/ (function(module) {

eval("function Heading(text) {\n  this.text = text;\n  this.heading = `<h2>${this.text}</h2>`;\n}\n\nmodule.exports = Heading;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9oZWFkaW5nLmpzLmpzIiwibmFtZXMiOlsiSGVhZGluZyIsInRleHQiLCJoZWFkaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FwdGFpbi1uZW1vLWFuZC10aGUtc2VhcmNoLWZvci1tb3JlLWZvb2QvLi9zcmMvc2NyaXB0cy9oZWFkaW5nLmpzPzgxNGMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gSGVhZGluZyh0ZXh0KSB7XG4gICAgdGhpcy50ZXh0ID0gdGV4dFxuICAgIHRoaXMuaGVhZGluZyA9IGA8aDI+JHt0aGlzLnRleHR9PC9oMj5gXG59XG5cbm1vZHVsZS5leHBvcnRzID0gSGVhZGluZzsiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCO0VBQ25CLEtBQUtBLElBQUwsR0FBWUEsSUFBWjtFQUNBLEtBQUtDLE9BQUwsR0FBZ0IsT0FBTSxLQUFLRCxJQUFLLE9BQWhDO0FBQ0g7O0FBRURFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkosT0FBakIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/heading.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXB0YWluLW5lbW8tYW5kLXRoZS1zZWFyY2gtZm9yLW1vcmUtZm9vZC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;