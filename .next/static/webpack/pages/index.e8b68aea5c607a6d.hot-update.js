"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/tweet/index.js":
/*!***********************************!*\
  !*** ./components/tweet/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var date_fns_formatDistanceToNowStrict__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/formatDistanceToNowStrict */ \"./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js\");\n/* harmony import */ var _photo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../photo */ \"./components/photo.js\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.module.css */ \"./components/tweet/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon */ \"./components/icon.js\");\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons */ \"./components/icons/index.js\");\n\n\n\n\n\n\n\nfunction Tweet(param) {\n    var name = param.name, slug = param.slug, datetime = param.datetime, text = param.text;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().tweet),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().avatar),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_photo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sinan\\\\Desktop\\\\react-twitter-clone\\\\components\\\\tweet\\\\index.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sinan\\\\Desktop\\\\react-twitter-clone\\\\components\\\\tweet\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().body),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().name),\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sinan\\\\Desktop\\\\react-twitter-clone\\\\components\\\\tweet\\\\index.js\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \" @\",\n                                    slug\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\sinan\\\\Desktop\\\\react-twitter-clone\\\\components\\\\tweet\\\\index.js\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            }, this),\n                            \" \\xb7\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: (0,date_fns_formatDistanceToNowStrict__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(datetime)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sinan\\\\Desktop\\\\react-twitter-clone\\\\components\\\\tweet\\\\index.js\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sinan\\\\Desktop\\\\react-twitter-clone\\\\components\\\\tweet\\\\index.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().content),\n                        children: text\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sinan\\\\Desktop\\\\react-twitter-clone\\\\components\\\\tweet\\\\index.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().footer),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().footerButton),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_4__.Reply, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sinan\\\\Desktop\\\\react-twitter-clone\\\\components\\\\tweet\\\\index.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_4__.Retweet, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sinan\\\\Desktop\\\\react-twitter-clone\\\\components\\\\tweet\\\\index.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_4__.Like, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sinan\\\\Desktop\\\\react-twitter-clone\\\\components\\\\tweet\\\\index.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_4__.Share, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sinan\\\\Desktop\\\\react-twitter-clone\\\\components\\\\tweet\\\\index.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\sinan\\\\Desktop\\\\react-twitter-clone\\\\components\\\\tweet\\\\index.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sinan\\\\Desktop\\\\react-twitter-clone\\\\components\\\\tweet\\\\index.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sinan\\\\Desktop\\\\react-twitter-clone\\\\components\\\\tweet\\\\index.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sinan\\\\Desktop\\\\react-twitter-clone\\\\components\\\\tweet\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sinan\\\\Desktop\\\\react-twitter-clone\\\\components\\\\tweet\\\\index.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = Tweet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tweet);\nvar _c;\n$RefreshReg$(_c, \"Tweet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3R3ZWV0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDaUQ7QUFFOUM7QUFDVztBQUNQO0FBQ0E7QUFFakMsU0FBU00sS0FBSyxDQUFDLEtBQThCLEVBQUU7UUFBOUJDLElBQUksR0FBTixLQUE4QixDQUE1QkEsSUFBSSxFQUFFQyxJQUFJLEdBQVosS0FBOEIsQ0FBdEJBLElBQUksRUFBRUMsUUFBUSxHQUF0QixLQUE4QixDQUFoQkEsUUFBUSxFQUFFQyxJQUFJLEdBQTVCLEtBQThCLENBQU5BLElBQUk7SUFDekMscUJBQ0UsOERBQUNDLFNBQU87UUFBQ0MsU0FBUyxFQUFFVCxnRUFBWTs7MEJBRTlCLDhEQUFDVyxLQUFHO2dCQUFDRixTQUFTLEVBQUVULGlFQUFhOzBCQUMzQiw0RUFBQ0QsOENBQUs7Ozs7d0JBQUc7Ozs7O29CQUNMOzBCQUdOLDhEQUFDWSxLQUFHO2dCQUFDRixTQUFTLEVBQUVULCtEQUFXOztrQ0FDekIsOERBQUNjLFFBQU07d0JBQUNMLFNBQVMsRUFBRVQsaUVBQWE7OzBDQUM5Qiw4REFBQ2UsTUFBSTtnQ0FBQ04sU0FBUyxFQUFFVCwrREFBVzswQ0FBR0ksSUFBSTs7Ozs7b0NBQVE7MENBQzNDLDhEQUFDVyxNQUFJOztvQ0FBQyxJQUFFO29DQUFDVixJQUFJOzs7Ozs7b0NBQVE7NEJBQUEsT0FBRTs0QkFBQyxHQUFHOzBDQUMzQiw4REFBQ1UsTUFBSTswQ0FBRWpCLDhFQUF5QixDQUFDUSxRQUFRLENBQUM7Ozs7O29DQUFROzs7Ozs7NEJBQzNDO2tDQUVULDhEQUFDSyxLQUFHO3dCQUFDRixTQUFTLEVBQUVULGtFQUFjO2tDQUFHTyxJQUFJOzs7Ozs0QkFBTztrQ0FFNUMsOERBQUNVLFFBQU07d0JBQUNSLFNBQVMsRUFBRVQsaUVBQWE7a0NBQzlCLDRFQUFDVyxLQUFHOzRCQUFDRixTQUFTLEVBQUVULHVFQUFtQjtzQ0FDakMsNEVBQUNDLDZDQUFVOztrREFDVCw4REFBQ0MseUNBQVU7Ozs7NENBQUc7a0RBQ2QsOERBQUNBLDJDQUFZOzs7OzRDQUFHO2tEQUNoQiw4REFBQ0Esd0NBQVM7Ozs7NENBQUc7a0RBQ2IsOERBQUNBLHlDQUFVOzs7OzRDQUFHOzs7Ozs7b0NBQ0g7Ozs7O2dDQUNUOzs7Ozs0QkFDQzs7Ozs7O29CQUNMOzs7Ozs7WUFDRSxDQUNWO0NBQ0g7QUEvQlFDLEtBQUFBLEtBQUs7QUFpQ2QsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3R3ZWV0L2luZGV4LmpzP2QwZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdCBmcm9tIFwiZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdFwiO1xyXG5cclxuaW1wb3J0IFBob3RvIGZyb20gXCIuLi9waG90b1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIi4uL2ljb25cIjtcclxuaW1wb3J0ICogYXMgSWNvbiBmcm9tIFwiLi4vaWNvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIFR3ZWV0KHsgbmFtZSwgc2x1ZywgZGF0ZXRpbWUsIHRleHQgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy50d2VldH0+XHJcbiAgICAgIHsvKmF2YXRhciovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgPFBob3RvIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIGJvZHkgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+IEB7c2x1Z308L3NwYW4+IMK3e1wiIFwifVxyXG4gICAgICAgICAgPHNwYW4+e2Zvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QoZGF0ZXRpbWUpfTwvc3Bhbj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT57dGV4dH08L2Rpdj5cclxuXHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJCdXR0b259PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8SWNvbi5SZXBseSAvPlxyXG4gICAgICAgICAgICAgIDxJY29uLlJldHdlZXQgLz5cclxuICAgICAgICAgICAgICA8SWNvbi5MaWtlIC8+XHJcbiAgICAgICAgICAgICAgPEljb24uU2hhcmUgLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFR3ZWV0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0IiwiUGhvdG8iLCJzdHlsZXMiLCJJY29uQnV0dG9uIiwiSWNvbiIsIlR3ZWV0IiwibmFtZSIsInNsdWciLCJkYXRldGltZSIsInRleHQiLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwidHdlZXQiLCJkaXYiLCJhdmF0YXIiLCJib2R5IiwiaGVhZGVyIiwic3BhbiIsImNvbnRlbnQiLCJmb290ZXIiLCJmb290ZXJCdXR0b24iLCJSZXBseSIsIlJldHdlZXQiLCJMaWtlIiwiU2hhcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/tweet/index.js\n");

/***/ })

});