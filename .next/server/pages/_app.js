/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"./store/index.js\");\n/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/app.css */ \"./styles/app.css\");\n/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const { 0: theme1 , 1: themeSet  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const theme = localStorage.getItem(\"THEME\") || \"light\";\n        themeSet(theme);\n    }, []);\n    const changeTheme = (theme)=>{\n        themeSet(theme);\n        localStorage.setItem(\"THEME\", theme);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!theme1) return;\n        const $html = document.querySelector(\"html\");\n        $html.classList.remove(\"light\");\n        $html.classList.remove(\"dim\");\n        $html.classList.remove(\"dark\");\n        $html.classList.add(theme1.toString());\n    }, [\n        theme1\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: {\n            theme: theme1,\n            changeTheme\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\sinan\\\\Desktop\\\\react-twitter-clone\\\\pages\\\\_app.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sinan\\\\Desktop\\\\react-twitter-clone\\\\pages\\\\_app.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBbUQ7QUFFZjtBQUNUO0FBRVosU0FBU0ksS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDdEQsTUFBTSxFQU5SLEdBTVNDLE1BQUssR0FOZCxHQU1nQkMsUUFBUSxNQUFJTiwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUV4Q0QsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsTUFBTU0sS0FBSyxHQUFHRSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPO1FBQ3RERixRQUFRLENBQUNELEtBQUssQ0FBQyxDQUFDO0tBQ2pCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxNQUFNSSxXQUFXLEdBQUcsQ0FBQ0osS0FBSyxHQUFLO1FBQzdCQyxRQUFRLENBQUNELEtBQUssQ0FBQyxDQUFDO1FBQ2hCRSxZQUFZLENBQUNHLE9BQU8sQ0FBQyxPQUFPLEVBQUVMLEtBQUssQ0FBQyxDQUFDO0tBQ3RDO0lBRUROLGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUksQ0FBQ00sTUFBSyxFQUFFLE9BQU87UUFDbkIsTUFBTU0sS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDNUNGLEtBQUssQ0FBQ0csU0FBUyxDQUFDQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaENKLEtBQUssQ0FBQ0csU0FBUyxDQUFDQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUJKLEtBQUssQ0FBQ0csU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0JKLEtBQUssQ0FBQ0csU0FBUyxDQUFDRSxHQUFHLENBQUNYLE1BQUssQ0FBQ1ksUUFBUSxFQUFFLENBQUMsQ0FBQztLQUN2QyxFQUFFO1FBQUNaLE1BQUs7S0FBQyxDQUFDLENBQUM7SUFFWixxQkFDRSw4REFBQ0osdURBQXFCO1FBQUNrQixLQUFLLEVBQUU7WUFBRWQsS0FBSyxFQUFMQSxNQUFLO1lBQUVJLFdBQVc7U0FBRTtrQkFDbEQsNEVBQUNOLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztnQkFBSTs7Ozs7WUFDTixDQUN4QjtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtdHdpdHRlci1jbG9uZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IFN0b3JlQ29udGV4dCBmcm9tIFwiLi4vc3RvcmVcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2FwcC5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGNvbnN0IFt0aGVtZSwgdGhlbWVTZXRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVEhFTUVcIikgfHwgXCJsaWdodFwiO1xyXG4gICAgdGhlbWVTZXQodGhlbWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlVGhlbWUgPSAodGhlbWUpID0+IHtcclxuICAgIHRoZW1lU2V0KHRoZW1lKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVEhFTUVcIiwgdGhlbWUpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXRoZW1lKSByZXR1cm47XHJcbiAgICBjb25zdCAkaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xyXG4gICAgJGh0bWwuY2xhc3NMaXN0LnJlbW92ZShcImxpZ2h0XCIpO1xyXG4gICAgJGh0bWwuY2xhc3NMaXN0LnJlbW92ZShcImRpbVwiKTtcclxuICAgICRodG1sLmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpO1xyXG4gICAgJGh0bWwuY2xhc3NMaXN0LmFkZCh0aGVtZS50b1N0cmluZygpKTtcclxuICB9LCBbdGhlbWVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdG9yZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdGhlbWUsIGNoYW5nZVRoZW1lIH19PlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L1N0b3JlQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3RvcmVDb250ZXh0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsInRoZW1lU2V0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNoYW5nZVRoZW1lIiwic2V0SXRlbSIsIiRodG1sIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwidG9TdHJpbmciLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst StoreContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoreContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsTUFBTUMsWUFBWSxpQkFBR0Qsb0RBQWEsQ0FBQyxJQUFJLENBQUM7QUFFeEMsaUVBQWVDLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXR3aXR0ZXItY2xvbmUvLi9zdG9yZS9pbmRleC5qcz81NmE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFN0b3JlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yZUNvbnRleHQ7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwiU3RvcmVDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/index.js\n");

/***/ }),

/***/ "./styles/app.css":
/*!************************!*\
  !*** ./styles/app.css ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();