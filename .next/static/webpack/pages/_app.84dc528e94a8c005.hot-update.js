"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"./store/index.js\");\n/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/app.css */ \"./styles/app.css\");\n/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function() {\n        try {\n            return localStorage.getItem(\"THEME\");\n        } catch (e) {\n            return \"light\";\n        }\n    }), theme1 = ref[0], themeSet = ref[1];\n    var changeTheme = function(theme) {\n        themeSet(theme);\n        localStorage.setItem(\"THEME\", theme);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var $html = document.querySelector(\"html\");\n        $html.classList.remove(\"light\");\n        $html.classList.remove(\"dim\");\n        $html.classList.remove(\"dark\");\n        $html.classList.add(theme1);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: {\n            theme: theme1,\n            changeTheme: changeTheme\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n            fileName: \"C:\\\\Users\\\\sinan\\\\Desktop\\\\react-twitter-clone\\\\pages\\\\_app.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sinan\\\\Desktop\\\\react-twitter-clone\\\\pages\\\\_app.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n};\n_s(MyApp, \"HyxkGslYeO/BtRFRewEDIno1wcI=\");\n_c = MyApp;\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBRWY7QUFDVDs7QUFFWixTQUFTSSxLQUFLLENBQUMsS0FBd0IsRUFBRTtRQUF4QkMsU0FBUyxHQUFYLEtBQXdCLENBQXRCQSxTQUFTLEVBQUVDLFNBQVMsR0FBdEIsS0FBd0IsQ0FBWEEsU0FBUzs7SUFDbEQsSUFBMEJKLEdBTXhCLEdBTndCQSwrQ0FBUSxDQUFDLFdBQU07UUFDdkMsSUFBSTtZQUNGLE9BQU9LLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3RDLENBQUMsT0FBT0MsQ0FBQyxFQUFFO1lBQ1YsT0FBTyxPQUFPLENBQUM7U0FDaEI7S0FDRixDQUFDLEVBWkosTUFNYyxHQUFjUCxHQU14QixHQU5VLEVBTmQsUUFNd0IsR0FBSUEsR0FNeEIsR0FOb0I7SUFPdEIsSUFBTVUsV0FBVyxHQUFHLFNBQUNGLEtBQUssRUFBSztRQUM3QkMsUUFBUSxDQUFDRCxLQUFLLENBQUMsQ0FBQztRQUNoQkgsWUFBWSxDQUFDTSxPQUFPLENBQUMsT0FBTyxFQUFFSCxLQUFLLENBQUMsQ0FBQztLQUN0QztJQUVEVCxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFNYSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUM1Q0YsS0FBSyxDQUFDRyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQ0osS0FBSyxDQUFDRyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QkosS0FBSyxDQUFDRyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQkosS0FBSyxDQUFDRyxTQUFTLENBQUNFLEdBQUcsQ0FBQ1QsTUFBSyxDQUFDLENBQUM7S0FDNUIsQ0FBQyxDQUFDO0lBRUgscUJBQ0UsOERBQUNQLHVEQUFxQjtRQUFDa0IsS0FBSyxFQUFFO1lBQUVYLEtBQUssRUFBTEEsTUFBSztZQUFFRSxXQUFXLEVBQVhBLFdBQVc7U0FBRTtrQkFDbEQsNEVBQUNQLFNBQVMsb0JBQUtDLFNBQVM7Ozs7Z0JBQUk7Ozs7O1lBQ04sQ0FDeEI7Q0FDSDtHQTFCdUJGLEtBQUs7QUFBTEEsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBTdG9yZUNvbnRleHQgZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9hcHAuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCBbdGhlbWUsIHRoZW1lU2V0XSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRIRU1FXCIpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gXCJsaWdodFwiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IGNoYW5nZVRoZW1lID0gKHRoZW1lKSA9PiB7XHJcbiAgICB0aGVtZVNldCh0aGVtZSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlRIRU1FXCIsIHRoZW1lKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgJGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKTtcclxuICAgICRodG1sLmNsYXNzTGlzdC5yZW1vdmUoXCJsaWdodFwiKTtcclxuICAgICRodG1sLmNsYXNzTGlzdC5yZW1vdmUoXCJkaW1cIik7XHJcbiAgICAkaHRtbC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKTtcclxuICAgICRodG1sLmNsYXNzTGlzdC5hZGQodGhlbWUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0b3JlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB0aGVtZSwgY2hhbmdlVGhlbWUgfX0+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvU3RvcmVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTdG9yZUNvbnRleHQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlIiwidGhlbWUiLCJ0aGVtZVNldCIsImNoYW5nZVRoZW1lIiwic2V0SXRlbSIsIiRodG1sIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});