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
exports.id = "pages/api/new";
exports.ids = ["pages/api/new"];
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

/***/ "(api)/./pages/api/new.js":
/*!**************************!*\
  !*** ./pages/api/new.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_twit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/twit */ \"(api)/./lib/twit.js\");\n\nfunction handler(req, res) {\n    const { tweet  } = req.body;\n    if (!tweet) return res.status(400).json({\n        message: \"Tweet bo\\u015F olamaz!\"\n    });\n    _lib_twit__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"statuses/update\", {\n        status: \"TEST\" + tweet\n    }, function(err, data, response) {\n        if (err) {\n            return res.status(400).json(data);\n        }\n        res.status(200).json(data);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtDO0FBRW5CLFNBQVNDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeEMsTUFBTSxFQUFFQyxLQUFLLEdBQUUsR0FBR0YsR0FBRyxDQUFDRyxJQUFJO0lBRTFCLElBQUksQ0FBQ0QsS0FBSyxFQUFFLE9BQU9ELEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsT0FBTyxFQUFFLHdCQUFtQjtLQUFFLENBQUMsQ0FBQztJQUUxRVIsc0RBQVMsQ0FDUCxpQkFBaUIsRUFDakI7UUFBRU0sTUFBTSxFQUFFLE1BQU0sR0FBR0YsS0FBSztLQUFFLEVBQzFCLFNBQVVNLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUU7UUFDN0IsSUFBSUYsR0FBRyxFQUFFO1lBQ1AsT0FBT1AsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0ksSUFBSSxDQUFDLENBQUM7U0FDbkM7UUFDRFIsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0ksSUFBSSxDQUFDLENBQUM7S0FDNUIsQ0FDRixDQUFDO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC10d2l0dGVyLWNsb25lLy4vcGFnZXMvYXBpL25ldy5qcz9hOWYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2l0IGZyb20gXCIuLi8uLi9saWIvdHdpdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgdHdlZXQgfSA9IHJlcS5ib2R5O1xyXG5cclxuICBpZiAoIXR3ZWV0KSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBcIlR3ZWV0IGJvxZ8gb2xhbWF6IVwiIH0pO1xyXG5cclxuICBUd2l0LnBvc3QoXHJcbiAgICBcInN0YXR1c2VzL3VwZGF0ZVwiLFxyXG4gICAgeyBzdGF0dXM6IFwiVEVTVFwiICsgdHdlZXQgfSxcclxuICAgIGZ1bmN0aW9uIChlcnIsIGRhdGEsIHJlc3BvbnNlKSB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XHJcbiAgICB9XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiVHdpdCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ0d2VldCIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInBvc3QiLCJlcnIiLCJkYXRhIiwicmVzcG9uc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/new.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new.js"));
module.exports = __webpack_exports__;

})();