"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/more",{

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation.module.css */ \"./components/navigation.module.css\");\n/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_navigation_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* harmony import */ var _navigation_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation-button */ \"./components/navigation-button.js\");\n/* harmony import */ var _text_title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./text-title */ \"./components/text-title.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Navigation(param) {\n    var _flat = param.flat, flat = _flat === void 0 ? false : _flat;\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().nav),\n        children: _constants__WEBPACK_IMPORTED_MODULE_4__.MENU.map(function(menu) {\n            var showTitle = !flat && menu.title.length > 0;\n            var selected = router.pathname === menu.path;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                notify: menu.notify,\n                selected: selected,\n                href: menu.path,\n                className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().navButton),\n                children: [\n                    selected ? menu.iconSelected : menu.icon,\n                    showTitle && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_text_title__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        children: menu.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sinan\\\\Desktop\\\\react-twitter-clone\\\\components\\\\navigation.js\",\n                        lineNumber: 27,\n                        columnNumber: 27\n                    }, _this)\n                ]\n            }, menu.key, true, {\n                fileName: \"C:\\\\Users\\\\sinan\\\\Desktop\\\\react-twitter-clone\\\\components\\\\navigation.js\",\n                lineNumber: 19,\n                columnNumber: 11\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sinan\\\\Desktop\\\\react-twitter-clone\\\\components\\\\navigation.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(Navigation, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmlnYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNjO0FBQ1o7QUFFaUI7QUFDVDtBQUVRO0FBQ1A7O0FBRXJDLFNBQVNPLFVBQVUsQ0FBQyxLQUFnQixFQUFFO2dCQUFsQixLQUFnQixDQUFkQyxJQUFJLEVBQUpBLElBQUksc0JBQUcsS0FBSzs7O0lBQ2hDLElBQU1DLE1BQU0sR0FBR1Isc0RBQVMsRUFBRTtJQUMxQixxQkFDRSw4REFBQ1MsS0FBRztRQUFDQyxTQUFTLEVBQUVSLG1FQUFVO2tCQUN2QkMsZ0RBQVEsQ0FBQyxTQUFDUyxJQUFJLEVBQUs7WUFDbEIsSUFBTUMsU0FBUyxHQUFHLENBQUNOLElBQUksSUFBSUssSUFBSSxDQUFDRSxLQUFLLENBQUNDLE1BQU0sR0FBRyxDQUFDO1lBQ2hELElBQU1DLFFBQVEsR0FBR1IsTUFBTSxDQUFDUyxRQUFRLEtBQUtMLElBQUksQ0FBQ00sSUFBSTtZQUM5QyxxQkFDRSw4REFBQ2QsMERBQVM7Z0JBRVJlLE1BQU0sRUFBRVAsSUFBSSxDQUFDTyxNQUFNO2dCQUNuQkgsUUFBUSxFQUFFQSxRQUFRO2dCQUNsQkksSUFBSSxFQUFFUixJQUFJLENBQUNNLElBQUk7Z0JBQ2ZSLFNBQVMsRUFBRVIseUVBQWdCOztvQkFFMUJjLFFBQVEsR0FBR0osSUFBSSxDQUFDVSxZQUFZLEdBQUdWLElBQUksQ0FBQ1csSUFBSTtvQkFDeENWLFNBQVMsa0JBQUksOERBQUNSLG1EQUFTO2tDQUFFTyxJQUFJLENBQUNFLEtBQUs7Ozs7OzZCQUFhOztlQVA1Q0YsSUFBSSxDQUFDWSxHQUFHOzs7O3FCQVFILENBQ1o7U0FDSCxDQUFDOzs7OztZQUNFLENBQ047Q0FDSDtHQXRCUWxCLFVBQVU7O1FBQ0ZOLGtEQUFTOzs7QUFEakJNLEtBQUFBLFVBQVU7QUF3Qm5CLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzPzA4NDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL25hdmlnYXRpb24ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBNRU5VIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuaW1wb3J0IE5hdkJ1dHRvbiBmcm9tIFwiLi9uYXZpZ2F0aW9uLWJ1dHRvblwiO1xyXG5pbXBvcnQgVGV4dFRpdGxlIGZyb20gXCIuL3RleHQtdGl0bGVcIjtcclxuXHJcbmZ1bmN0aW9uIE5hdmlnYXRpb24oeyBmbGF0ID0gZmFsc2UgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XHJcbiAgICAgIHtNRU5VLm1hcCgobWVudSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNob3dUaXRsZSA9ICFmbGF0ICYmIG1lbnUudGl0bGUubGVuZ3RoID4gMDtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHJvdXRlci5wYXRobmFtZSA9PT0gbWVudS5wYXRoO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8TmF2QnV0dG9uXHJcbiAgICAgICAgICAgIGtleT17bWVudS5rZXl9XHJcbiAgICAgICAgICAgIG5vdGlmeT17bWVudS5ub3RpZnl9XHJcbiAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cclxuICAgICAgICAgICAgaHJlZj17bWVudS5wYXRofVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uYXZCdXR0b259XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtzZWxlY3RlZCA/IG1lbnUuaWNvblNlbGVjdGVkIDogbWVudS5pY29ufVxyXG4gICAgICAgICAgICB7c2hvd1RpdGxlICYmIDxUZXh0VGl0bGU+e21lbnUudGl0bGV9PC9UZXh0VGl0bGU+fVxyXG4gICAgICAgICAgPC9OYXZCdXR0b24+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJjbiIsInN0eWxlcyIsIk1FTlUiLCJOYXZCdXR0b24iLCJUZXh0VGl0bGUiLCJOYXZpZ2F0aW9uIiwiZmxhdCIsInJvdXRlciIsIm5hdiIsImNsYXNzTmFtZSIsIm1hcCIsIm1lbnUiLCJzaG93VGl0bGUiLCJ0aXRsZSIsImxlbmd0aCIsInNlbGVjdGVkIiwicGF0aG5hbWUiLCJwYXRoIiwibm90aWZ5IiwiaHJlZiIsIm5hdkJ1dHRvbiIsImljb25TZWxlY3RlZCIsImljb24iLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navigation.js\n");

/***/ })

});