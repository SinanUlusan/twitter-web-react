"use strict";
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
exports.id = "pages/api/tweet";
exports.ids = ["pages/api/tweet"];
exports.modules = {

/***/ "twit":
/*!***********************!*\
  !*** external "twit" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("twit");

/***/ }),

/***/ "(api)/./lib/twit.js":
/*!*********************!*\
  !*** ./lib/twit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var twit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! twit */ \"twit\");\n/* harmony import */ var twit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(twit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst T = new (twit__WEBPACK_IMPORTED_MODULE_0___default())({\n    consumer_key: process.env.TWITTER_CONSUMER_KEY,\n    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,\n    access_token: process.env.TWITTER_ACCESS_TOKEN,\n    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (T);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvdHdpdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0I7QUFFeEIsTUFBTUMsQ0FBQyxHQUFHLElBQUlELDZDQUFJLENBQUM7SUFDakJFLFlBQVksRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLG9CQUFvQjtJQUM5Q0MsZUFBZSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csdUJBQXVCO0lBQ3BEQyxZQUFZLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxvQkFBb0I7SUFDOUNDLG1CQUFtQixFQUFFUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ08sMkJBQTJCO0NBQzdELENBQUM7QUFFRixpRUFBZVYsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtdHdpdHRlci1jbG9uZS8uL2xpYi90d2l0LmpzPzBiMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR3aXQgZnJvbSBcInR3aXRcIjtcclxuXHJcbmNvbnN0IFQgPSBuZXcgVHdpdCh7XHJcbiAgY29uc3VtZXJfa2V5OiBwcm9jZXNzLmVudi5UV0lUVEVSX0NPTlNVTUVSX0tFWSxcclxuICBjb25zdW1lcl9zZWNyZXQ6IHByb2Nlc3MuZW52LlRXSVRURVJfQ09OU1VNRVJfU0VDUkVULFxyXG4gIGFjY2Vzc190b2tlbjogcHJvY2Vzcy5lbnYuVFdJVFRFUl9BQ0NFU1NfVE9LRU4sXHJcbiAgYWNjZXNzX3Rva2VuX3NlY3JldDogcHJvY2Vzcy5lbnYuVFdJVFRFUl9BQ0NFU1NfVE9LRU5fU0VDUkVULFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFQ7XHJcbiJdLCJuYW1lcyI6WyJUd2l0IiwiVCIsImNvbnN1bWVyX2tleSIsInByb2Nlc3MiLCJlbnYiLCJUV0lUVEVSX0NPTlNVTUVSX0tFWSIsImNvbnN1bWVyX3NlY3JldCIsIlRXSVRURVJfQ09OU1VNRVJfU0VDUkVUIiwiYWNjZXNzX3Rva2VuIiwiVFdJVFRFUl9BQ0NFU1NfVE9LRU4iLCJhY2Nlc3NfdG9rZW5fc2VjcmV0IiwiVFdJVFRFUl9BQ0NFU1NfVE9LRU5fU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/twit.js\n");

/***/ }),

/***/ "(api)/./pages/api/tweet.js":
/*!****************************!*\
  !*** ./pages/api/tweet.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_twit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/twit */ \"(api)/./lib/twit.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{\n    _lib_twit__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"search/tweets\", {\n        from: \"sinanisscott\",\n        count: 100\n    }, function(err, data, response) {\n        if (err) {\n            return res.status(400).json(data);\n        }\n        res.status(200).json(data);\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHdlZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0M7QUFFbEMsaUVBQWUsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDM0JGLHFEQUFRLENBQ04sZUFBZSxFQUNmO1FBQUVJLElBQUksRUFBRSxjQUFjO1FBQUVDLEtBQUssRUFBRSxHQUFHO0tBQUUsRUFDcEMsU0FBVUMsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRTtRQUM3QixJQUFJRixHQUFHLEVBQUU7WUFDUCxPQUFPSixHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSCxJQUFJLENBQUMsQ0FBQztTQUNuQztRQUVETCxHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSCxJQUFJLENBQUMsQ0FBQztLQUM1QixDQUNGLENBQUM7Q0FDSCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtdHdpdHRlci1jbG9uZS8uL3BhZ2VzL2FwaS90d2VldC5qcz9lZDk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2l0IGZyb20gXCIuLi8uLi9saWIvdHdpdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiB7XHJcbiAgVHdpdC5nZXQoXHJcbiAgICBcInNlYXJjaC90d2VldHNcIixcclxuICAgIHsgZnJvbTogXCJzaW5hbmlzc2NvdHRcIiwgY291bnQ6IDEwMCB9LFxyXG4gICAgZnVuY3Rpb24gKGVyciwgZGF0YSwgcmVzcG9uc2UpIHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihkYXRhKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XHJcbiAgICB9XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIlR3aXQiLCJyZXEiLCJyZXMiLCJnZXQiLCJmcm9tIiwiY291bnQiLCJlcnIiLCJkYXRhIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/tweet.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/tweet.js"));
module.exports = __webpack_exports__;

})();