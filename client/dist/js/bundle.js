/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/src/boot/index.js":
/*!**********************************!*\
  !*** ./client/src/boot/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {



var _registerComponents = _interopRequireDefault(__webpack_require__(/*! boot/registerComponents */ "./client/src/boot/registerComponents.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
window.document.addEventListener('DOMContentLoaded', () => {
  (0, _registerComponents.default)();
});

/***/ }),

/***/ "./client/src/boot/registerComponents.js":
/*!***********************************************!*\
  !*** ./client/src/boot/registerComponents.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _Injector = _interopRequireDefault(__webpack_require__(/*! lib/Injector */ "lib/Injector"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = () => {
  _Injector.default.component.registerMany({});
};
exports["default"] = _default;

/***/ }),

/***/ "./client/src/entwine/entwine.js":
/*!***************************************!*\
  !*** ./client/src/entwine/entwine.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {



var _Injector = _interopRequireWildcard(__webpack_require__(/*! lib/Injector */ "lib/Injector"));
var _jquery = _interopRequireDefault(__webpack_require__(/*! jquery */ "jquery"));
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "react-dom"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(function ($) {
  $(document).ready(() => {
    $('[data-react-component]').entwine({
      onmatch() {
        const componentName = this.data('react-component');
        const Component = (0, _Injector.loadComponent)(componentName);
        const schemaState = this.data('state');
        if (!Component) {
          console.error(`No component found for ${componentName}`);
          return;
        }
        const setValue = (fieldName, value) => {
          const input = document.querySelector(`input[name="${fieldName}"]`);
          if (!input) {
            console.log('No input field found for field', fieldName);
            return;
          }
          console.log('Setting value for field', fieldName, value);
          input.value = value;
        };
        _reactDom.default.render(_react.default.createElement(Component, _extends({}, schemaState, {
          onAutofill: setValue
        })), this[0]);
      },
      onunmatch() {
        _reactDom.default.unmountComponentAtNode(this[0]);
      }
    });
  });
})(_jquery.default);

/***/ }),

/***/ "lib/Injector":
/*!***************************!*\
  !*** external "Injector" ***!
  \***************************/
/***/ (function(module) {

module.exports = Injector;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDom" ***!
  \***************************/
/***/ (function(module) {

module.exports = ReactDom;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ (function(module) {

module.exports = jQuery;

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
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./client/src/bundles/bundle.js ***!
  \**************************************/


__webpack_require__(/*! entwine/entwine */ "./client/src/entwine/entwine.js");
__webpack_require__(/*! boot */ "./client/src/boot/index.js");
/******/ })()
;
//# sourceMappingURL=bundle.js.map