/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const canvasElement = document.querySelector('canvas');\n  canvasElement.width = _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].WIDTH;\n  canvasElement.height = _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].HEIGTH;\n  const game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvasElement);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUdBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2hELE1BQU1DLGFBQWEsR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLFFBQXZCLENBQXRCO0VBQ0FELGFBQWEsQ0FBQ0UsS0FBZCxHQUFzQkwsMkRBQXRCO0VBQ0FHLGFBQWEsQ0FBQ0ksTUFBZCxHQUF1QlAsNERBQXZCO0VBQ0EsTUFBTVMsSUFBSSxHQUFHLElBQUlULHFEQUFKLENBQVNHLGFBQVQsQ0FBYjtBQUNILENBTEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXB0YWluLW5lbW8tYW5kLXRoZS1zZWFyY2gtZm9yLW1vcmUtZm9vZC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xuICAgIGNhbnZhc0VsZW1lbnQud2lkdGggPSBHYW1lLldJRFRIO1xuICAgIGNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gR2FtZS5IRUlHVEg7XG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhc0VsZW1lbnQpO1xufSkiXSwibmFtZXMiOlsiR2FtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc0VsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2lkdGgiLCJXSURUSCIsImhlaWdodCIsIkhFSUdUSCIsImdhbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/cat.js":
/*!****************************!*\
  !*** ./src/scripts/cat.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst CONSTANTS = {\n  GRAVITY: 0.4,\n  JUMP_SPEED: 8,\n  TERMINAL_VELOCITY: 12,\n  CAT_WIDTH: 25,\n  CAT_HEIGHT: 50\n};\n\nclass Cat {\n  constructor(dimension) {\n    this.dimensions = dimension;\n    this.x = this.dimensions.width - 400;\n    this.y = this.dimensions.height - 50;\n    this.velocity = 0;\n  }\n\n  animate(context) {\n    // this.moveCat();\n    this.drawCat(context);\n  }\n\n  drawCat(context) {\n    context.fillStyle = 'lightgray';\n    context.fillRect(this.x, this.y, CONSTANTS.CAT_WIDTH, CONSTANTS.CAT_HEIGHT);\n  }\n\n  moveCat() {\n    this.y += 3; // this.velocity += CONSTANTS.GRAVITY;\n    // if (Math.abs(this.velocity) > CONSTANTS.TERMINAL_VELOCITY) {\n    //     if (this.velocity > 0) {\n    //         this.velocity = CONSTANTS.TERMINAL_VELOCITY;\n    //     } else {\n    //         this.velocity = CONSTANTS.TERMINAL_VELOCITY * -1;\n    //     }\n    // }\n  }\n\n  bounds() {\n    return {\n      left: this.x,\n      right: this.x + CONSTANTS.CAT_WIDTH,\n      top: this.y,\n      bottom: this.y + CONSTANTS.CAT_HEIGHT\n    };\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cat);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYXQuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFNBQVMsR0FBRztFQUNkQyxPQUFPLEVBQUUsR0FESztFQUVkQyxVQUFVLEVBQUUsQ0FGRTtFQUdkQyxpQkFBaUIsRUFBRSxFQUhMO0VBSWRDLFNBQVMsRUFBRSxFQUpHO0VBS2RDLFVBQVUsRUFBRTtBQUxFLENBQWxCOztBQVNBLE1BQU1DLEdBQU4sQ0FBVTtFQUNOQyxXQUFXLENBQUNDLFNBQUQsRUFBWTtJQUNuQixLQUFLQyxVQUFMLEdBQWtCRCxTQUFsQjtJQUNBLEtBQUtFLENBQUwsR0FBUyxLQUFLRCxVQUFMLENBQWdCRSxLQUFoQixHQUF3QixHQUFqQztJQUNBLEtBQUtDLENBQUwsR0FBUyxLQUFLSCxVQUFMLENBQWdCSSxNQUFoQixHQUF5QixFQUFsQztJQUNBLEtBQUtDLFFBQUwsR0FBZ0IsQ0FBaEI7RUFDSDs7RUFFREMsT0FBTyxDQUFDQyxPQUFELEVBQVU7SUFDYjtJQUNBLEtBQUtDLE9BQUwsQ0FBYUQsT0FBYjtFQUNIOztFQUVEQyxPQUFPLENBQUNELE9BQUQsRUFBVTtJQUNiQSxPQUFPLENBQUNFLFNBQVIsR0FBb0IsV0FBcEI7SUFDQUYsT0FBTyxDQUFDRyxRQUFSLENBQWlCLEtBQUtULENBQXRCLEVBQXlCLEtBQUtFLENBQTlCLEVBQWlDWixTQUFTLENBQUNJLFNBQTNDLEVBQXNESixTQUFTLENBQUNLLFVBQWhFO0VBQ0g7O0VBRURlLE9BQU8sR0FBRztJQUNOLEtBQUtSLENBQUwsSUFBVSxDQUFWLENBRE0sQ0FFTjtJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0g7O0VBRURTLE1BQU0sR0FBRztJQUNMLE9BQU87TUFDSEMsSUFBSSxFQUFFLEtBQUtaLENBRFI7TUFFSGEsS0FBSyxFQUFFLEtBQUtiLENBQUwsR0FBU1YsU0FBUyxDQUFDSSxTQUZ2QjtNQUdIb0IsR0FBRyxFQUFFLEtBQUtaLENBSFA7TUFJSGEsTUFBTSxFQUFFLEtBQUtiLENBQUwsR0FBU1osU0FBUyxDQUFDSztJQUp4QixDQUFQO0VBTUg7O0FBdENLOztBQXlDViwrREFBZUMsR0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcHRhaW4tbmVtby1hbmQtdGhlLXNlYXJjaC1mb3ItbW9yZS1mb29kLy4vc3JjL3NjcmlwdHMvY2F0LmpzPzQ4MGEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIEdSQVZJVFk6IDAuNCxcbiAgICBKVU1QX1NQRUVEOiA4LFxuICAgIFRFUk1JTkFMX1ZFTE9DSVRZOiAxMixcbiAgICBDQVRfV0lEVEg6IDI1LFxuICAgIENBVF9IRUlHSFQ6IDUwXG59XG5cblxuY2xhc3MgQ2F0IHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb24pIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uO1xuICAgICAgICB0aGlzLnggPSB0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA0MDA7XG4gICAgICAgIHRoaXMueSA9IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLSA1MDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IDA7XG4gICAgfVxuXG4gICAgYW5pbWF0ZShjb250ZXh0KSB7XG4gICAgICAgIC8vIHRoaXMubW92ZUNhdCgpO1xuICAgICAgICB0aGlzLmRyYXdDYXQoY29udGV4dCk7XG4gICAgfVxuXG4gICAgZHJhd0NhdChjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ2xpZ2h0Z3JheSc7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIENPTlNUQU5UUy5DQVRfV0lEVEgsIENPTlNUQU5UUy5DQVRfSEVJR0hUKVxuICAgIH1cblxuICAgIG1vdmVDYXQoKSB7XG4gICAgICAgIHRoaXMueSArPSAzO1xuICAgICAgICAvLyB0aGlzLnZlbG9jaXR5ICs9IENPTlNUQU5UUy5HUkFWSVRZO1xuXG4gICAgICAgIC8vIGlmIChNYXRoLmFicyh0aGlzLnZlbG9jaXR5KSA+IENPTlNUQU5UUy5URVJNSU5BTF9WRUxPQ0lUWSkge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMudmVsb2NpdHkgPiAwKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IENPTlNUQU5UUy5URVJNSU5BTF9WRUxPQ0lUWTtcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IENPTlNUQU5UUy5URVJNSU5BTF9WRUxPQ0lUWSAqIC0xO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgYm91bmRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogdGhpcy54LFxuICAgICAgICAgICAgcmlnaHQ6IHRoaXMueCArIENPTlNUQU5UUy5DQVRfV0lEVEgsXG4gICAgICAgICAgICB0b3A6IHRoaXMueSxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy55ICsgQ09OU1RBTlRTLkNBVF9IRUlHSFRcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2F0OyJdLCJuYW1lcyI6WyJDT05TVEFOVFMiLCJHUkFWSVRZIiwiSlVNUF9TUEVFRCIsIlRFUk1JTkFMX1ZFTE9DSVRZIiwiQ0FUX1dJRFRIIiwiQ0FUX0hFSUdIVCIsIkNhdCIsImNvbnN0cnVjdG9yIiwiZGltZW5zaW9uIiwiZGltZW5zaW9ucyIsIngiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJ2ZWxvY2l0eSIsImFuaW1hdGUiLCJjb250ZXh0IiwiZHJhd0NhdCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwibW92ZUNhdCIsImJvdW5kcyIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/cat.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cat */ \"./src/scripts/cat.js\");\n\n\nclass Game {\n  constructor(canvas) {\n    this.context = canvas.getContext('2d');\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.rightPressed = false;\n    this.leftPressed = false;\n    this.restart();\n  }\n\n  play() {\n    this.running = true;\n    this.animate();\n  }\n\n  restart() {\n    this.running = false;\n    this.cat = new _cat__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\n    this.animate();\n  }\n\n  animate() {\n    this.cat.animate(this.context); // if (this.running) {\n\n    requestAnimationFrame(this.animate.bind(this)); // }\n  }\n\n  keyDown(e) {\n    if (e.key == 'Right' || e.key == 'ArrowRight') {\n      this.rightPressed = true;\n    } else if (e.key == 'Left' || e.key == 'ArrowLeft') {\n      this.leftPressed = true;\n    }\n  }\n\n  keyUp(e) {\n    if (e.key == 'Right' || e.key == 'ArrowRight') {\n      this.rightPressed = false;\n    } else if (e.key == 'Left' || e.key == 'ArrowLeft') {\n      this.leftPressed = false;\n    }\n  }\n\n}\n\nGame.WIDTH = 780;\nGame.HEIGTH = 520;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsTUFBTUMsSUFBTixDQUFXO0VBQ1BDLFdBQVcsQ0FBQ0MsTUFBRCxFQUFTO0lBQ2hCLEtBQUtDLE9BQUwsR0FBZUQsTUFBTSxDQUFDRSxVQUFQLENBQWtCLElBQWxCLENBQWY7SUFDQSxLQUFLQyxVQUFMLEdBQWtCO01BQ2RDLEtBQUssRUFBRUosTUFBTSxDQUFDSSxLQURBO01BRWRDLE1BQU0sRUFBRUwsTUFBTSxDQUFDSztJQUZELENBQWxCO0lBSUEsS0FBS0MsWUFBTCxHQUFvQixLQUFwQjtJQUNBLEtBQUtDLFdBQUwsR0FBbUIsS0FBbkI7SUFDQSxLQUFLQyxPQUFMO0VBQ0g7O0VBRURDLElBQUksR0FBRztJQUNILEtBQUtDLE9BQUwsR0FBZSxJQUFmO0lBQ0EsS0FBS0MsT0FBTDtFQUNIOztFQUVESCxPQUFPLEdBQUc7SUFDTixLQUFLRSxPQUFMLEdBQWUsS0FBZjtJQUNBLEtBQUtFLEdBQUwsR0FBVyxJQUFJZiw0Q0FBSixDQUFRLEtBQUtNLFVBQWIsQ0FBWDtJQUVBLEtBQUtRLE9BQUw7RUFDSDs7RUFFREEsT0FBTyxHQUFHO0lBQ04sS0FBS0MsR0FBTCxDQUFTRCxPQUFULENBQWlCLEtBQUtWLE9BQXRCLEVBRE0sQ0FFTjs7SUFDSVkscUJBQXFCLENBQUMsS0FBS0YsT0FBTCxDQUFhRyxJQUFiLENBQWtCLElBQWxCLENBQUQsQ0FBckIsQ0FIRSxDQUlOO0VBQ0g7O0VBR0RDLE9BQU8sQ0FBQ0MsQ0FBRCxFQUFJO0lBQ1IsSUFBSUEsQ0FBQyxDQUFDQyxHQUFGLElBQVMsT0FBVCxJQUFvQkQsQ0FBQyxDQUFDQyxHQUFGLElBQVMsWUFBakMsRUFBK0M7TUFDMUMsS0FBS1gsWUFBTCxHQUFvQixJQUFwQjtJQUNKLENBRkQsTUFFTyxJQUFJVSxDQUFDLENBQUNDLEdBQUYsSUFBUyxNQUFULElBQW1CRCxDQUFDLENBQUNDLEdBQUYsSUFBUyxXQUFoQyxFQUE2QztNQUMvQyxLQUFLVixXQUFMLEdBQW1CLElBQW5CO0lBQ0o7RUFDSDs7RUFFRFcsS0FBSyxDQUFDRixDQUFELEVBQUk7SUFDTixJQUFJQSxDQUFDLENBQUNDLEdBQUYsSUFBUyxPQUFULElBQW9CRCxDQUFDLENBQUNDLEdBQUYsSUFBUyxZQUFqQyxFQUErQztNQUMxQyxLQUFLWCxZQUFMLEdBQW9CLEtBQXBCO0lBQ0osQ0FGRCxNQUVPLElBQUlVLENBQUMsQ0FBQ0MsR0FBRixJQUFTLE1BQVQsSUFBbUJELENBQUMsQ0FBQ0MsR0FBRixJQUFTLFdBQWhDLEVBQTZDO01BQy9DLEtBQUtWLFdBQUwsR0FBbUIsS0FBbkI7SUFDSjtFQUNIOztBQTlDTTs7QUFpRFhULElBQUksQ0FBQ3FCLEtBQUwsR0FBYSxHQUFiO0FBQ0FyQixJQUFJLENBQUNzQixNQUFMLEdBQWMsR0FBZDtBQUVBLCtEQUFldEIsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcHRhaW4tbmVtby1hbmQtdGhlLXNlYXJjaC1mb3ItbW9yZS1mb29kLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXQgZnJvbSAnLi9jYXQnXG5cbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7XG4gICAgICAgICAgICB3aWR0aDogY2FudmFzLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yaWdodFByZXNzZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLmxlZnRQcmVzc2VkID0gZmFsc2VcbiAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcGxheSgpIHtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2F0ID0gbmV3IENhdCh0aGlzLmRpbWVuc2lvbnMpO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuY2F0LmFuaW1hdGUodGhpcy5jb250ZXh0KVxuICAgICAgICAvLyBpZiAodGhpcy5ydW5uaW5nKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG5cbiAgICBrZXlEb3duKGUpIHtcbiAgICAgICBpZiAoZS5rZXkgPT0gJ1JpZ2h0JyB8fCBlLmtleSA9PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRQcmVzc2VkID0gdHJ1ZVxuICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT0gJ0xlZnQnIHx8IGUua2V5ID09ICdBcnJvd0xlZnQnKSB7XG4gICAgICAgICAgICB0aGlzLmxlZnRQcmVzc2VkID0gdHJ1ZVxuICAgICAgIH0gXG4gICAgfVxuXG4gICAga2V5VXAoZSkge1xuICAgICAgIGlmIChlLmtleSA9PSAnUmlnaHQnIHx8IGUua2V5ID09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICAgICAgdGhpcy5yaWdodFByZXNzZWQgPSBmYWxzZVxuICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT0gJ0xlZnQnIHx8IGUua2V5ID09ICdBcnJvd0xlZnQnKSB7XG4gICAgICAgICAgICB0aGlzLmxlZnRQcmVzc2VkID0gZmFsc2VcbiAgICAgICB9IFxuICAgIH1cbn1cblxuR2FtZS5XSURUSCA9IDc4MFxuR2FtZS5IRUlHVEggPSA1MjBcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiXSwibmFtZXMiOlsiQ2F0IiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwiY29udGV4dCIsImdldENvbnRleHQiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJyaWdodFByZXNzZWQiLCJsZWZ0UHJlc3NlZCIsInJlc3RhcnQiLCJwbGF5IiwicnVubmluZyIsImFuaW1hdGUiLCJjYXQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwia2V5RG93biIsImUiLCJrZXkiLCJrZXlVcCIsIldJRFRIIiwiSEVJR1RIIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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