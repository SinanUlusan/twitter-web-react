/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./components/tweet-modal/style.module.css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./components/tweet-modal/style.module.css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".style_overlay___hz_W {\\r\\n  position: fixed;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  top: 0;\\r\\n  bottom: 0;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  background-color: rgba(255, 255, 255, 0.3);\\r\\n}\\r\\n\\r\\n  html.light .style_overlay___hz_W {\\r\\n    background-color: rgba(0, 0, 0, 0.3);\\r\\n  }\\r\\n\\r\\n.style_modal__oX2s7 {\\r\\n  display: grid;\\r\\n  grid-template-areas: \\\"avatar body\\\";\\r\\n  grid-template-columns: 50px 1fr;\\r\\n  grid-gap: 15px;\\r\\n  width: 100%;\\r\\n  max-width: 600px;\\r\\n  padding: 30px !important;\\r\\n  border-bottom: 1px solid var(--c-border-color);\\r\\n  background-color: var(--c-primary);\\r\\n  border-radius: 20px;\\r\\n}\\r\\n\\r\\n.style_avatar__d82jN {\\r\\n  grid-area: avatar;\\r\\n}\\r\\n\\r\\n.style_body__q5IS7 {\\r\\n  grid-area: body;\\r\\n}\\r\\n\\r\\n.style_textarea__TXk2X {\\r\\n  resize: none;\\r\\n  background-color: transparent;\\r\\n  outline: 0;\\r\\n  color: var(--c-text-color);\\r\\n  font-size: 1.375rem;\\r\\n  display: block;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.style_footer__SicTl {\\r\\n  justify-content: flex-end;\\r\\n}\\r\\n\\r\\n.style_close__OhDsj {\\r\\n  color: var(-c--gray);\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://components/tweet-modal/style.module.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,eAAe;EACf,OAAO;EACP,QAAQ;EACR,MAAM;EACN,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,0CAA0C;AAK5C;;EAHE;IACE,oCAAoC;EACtC;;AAGF;EACE,aAAa;EACb,kCAAkC;EAClC,+BAA+B;EAC/B,cAAc;EACd,WAAW;EACX,gBAAgB;EAChB,wBAAwB;EACxB,8CAA8C;EAC9C,kCAAkC;EAClC,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,6BAA6B;EAC7B,UAAU;EACV,0BAA0B;EAC1B,mBAAmB;EACnB,cAAc;EACd,WAAW;AACb;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oBAAoB;AACtB\",\"sourcesContent\":[\".overlay {\\r\\n  position: fixed;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  top: 0;\\r\\n  bottom: 0;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  background-color: rgba(255, 255, 255, 0.3);\\r\\n\\r\\n  :global(html.light) & {\\r\\n    background-color: rgba(0, 0, 0, 0.3);\\r\\n  }\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  display: grid;\\r\\n  grid-template-areas: \\\"avatar body\\\";\\r\\n  grid-template-columns: 50px 1fr;\\r\\n  grid-gap: 15px;\\r\\n  width: 100%;\\r\\n  max-width: 600px;\\r\\n  padding: 30px !important;\\r\\n  border-bottom: 1px solid var(--c-border-color);\\r\\n  background-color: var(--c-primary);\\r\\n  border-radius: 20px;\\r\\n}\\r\\n\\r\\n.avatar {\\r\\n  grid-area: avatar;\\r\\n}\\r\\n\\r\\n.body {\\r\\n  grid-area: body;\\r\\n}\\r\\n\\r\\n.textarea {\\r\\n  resize: none;\\r\\n  background-color: transparent;\\r\\n  outline: 0;\\r\\n  color: var(--c-text-color);\\r\\n  font-size: 1.375rem;\\r\\n  display: block;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  justify-content: flex-end;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  color: var(-c--gray);\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"overlay\": \"style_overlay___hz_W\",\n\t\"modal\": \"style_modal__oX2s7\",\n\t\"avatar\": \"style_avatar__d82jN\",\n\t\"body\": \"style_body__q5IS7\",\n\t\"textarea\": \"style_textarea__TXk2X\",\n\t\"footer\": \"style_footer__SicTl\",\n\t\"close\": \"style_close__OhDsj\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls0XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNF0udXNlWzJdIS4vY29tcG9uZW50cy90d2VldC1tb2RhbC9zdHlsZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsc0tBQWtGO0FBQzVIO0FBQ0E7QUFDQSxpRUFBaUUsc0JBQXNCLGNBQWMsZUFBZSxhQUFhLGdCQUFnQixvQkFBb0IsMEJBQTBCLDhCQUE4QixpREFBaUQsS0FBSyw0Q0FBNEMsNkNBQTZDLE9BQU8sNkJBQTZCLG9CQUFvQiwyQ0FBMkMsc0NBQXNDLHFCQUFxQixrQkFBa0IsdUJBQXVCLCtCQUErQixxREFBcUQseUNBQXlDLDBCQUEwQixLQUFLLDhCQUE4Qix3QkFBd0IsS0FBSyw0QkFBNEIsc0JBQXNCLEtBQUssZ0NBQWdDLG1CQUFtQixvQ0FBb0MsaUJBQWlCLGlDQUFpQywwQkFBMEIscUJBQXFCLGtCQUFrQixLQUFLLDhCQUE4QixnQ0FBZ0MsS0FBSyw2QkFBNkIsMkJBQTJCLEtBQUssV0FBVyx3R0FBd0csVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksb0NBQW9DLHNCQUFzQixjQUFjLGVBQWUsYUFBYSxnQkFBZ0Isb0JBQW9CLDBCQUEwQiw4QkFBOEIsaURBQWlELGlDQUFpQyw2Q0FBNkMsT0FBTyxLQUFLLGdCQUFnQixvQkFBb0IsMkNBQTJDLHNDQUFzQyxxQkFBcUIsa0JBQWtCLHVCQUF1QiwrQkFBK0IscURBQXFELHlDQUF5QywwQkFBMEIsS0FBSyxpQkFBaUIsd0JBQXdCLEtBQUssZUFBZSxzQkFBc0IsS0FBSyxtQkFBbUIsbUJBQW1CLG9DQUFvQyxpQkFBaUIsaUNBQWlDLDBCQUEwQixxQkFBcUIsa0JBQWtCLEtBQUssaUJBQWlCLGdDQUFnQyxLQUFLLGdCQUFnQiwyQkFBMkIsS0FBSyx1QkFBdUI7QUFDMXVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90d2VldC1tb2RhbC9zdHlsZS5tb2R1bGUuY3NzPzFhYjkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zdHlsZV9vdmVybGF5X19faHpfVyB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4gIGh0bWwubGlnaHQgLnN0eWxlX292ZXJsYXlfX19oel9XIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgfVxcclxcblxcclxcbi5zdHlsZV9tb2RhbF9fb1gyczcge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJhdmF0YXIgYm9keVxcXCI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMWZyO1xcclxcbiAgZ3JpZC1nYXA6IDE1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogNjAwcHg7XFxyXFxuICBwYWRkaW5nOiAzMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYy1ib3JkZXItY29sb3IpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy1wcmltYXJ5KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdHlsZV9hdmF0YXJfX2Q4MmpOIHtcXHJcXG4gIGdyaWQtYXJlYTogYXZhdGFyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3R5bGVfYm9keV9fcTVJUzcge1xcclxcbiAgZ3JpZC1hcmVhOiBib2R5O1xcclxcbn1cXHJcXG5cXHJcXG4uc3R5bGVfdGV4dGFyZWFfX1RYazJYIHtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jLXRleHQtY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiAxLjM3NXJlbTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5zdHlsZV9mb290ZXJfX1NpY1RsIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5zdHlsZV9jbG9zZV9fT2hEc2oge1xcclxcbiAgY29sb3I6IHZhcigtYy0tZ3JheSk7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL3R3ZWV0LW1vZGFsL3N0eWxlLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0VBQ04sU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDBDQUEwQztBQUs1Qzs7RUFIRTtJQUNFLG9DQUFvQztFQUN0Qzs7QUFHRjtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsK0JBQStCO0VBQy9CLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4Qiw4Q0FBOEM7RUFDOUMsa0NBQWtDO0VBQ2xDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm92ZXJsYXkge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXHJcXG5cXHJcXG4gIDpnbG9iYWwoaHRtbC5saWdodCkgJiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiYXZhdGFyIGJvZHlcXFwiO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDFmcjtcXHJcXG4gIGdyaWQtZ2FwOiAxNXB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgcGFkZGluZzogMzBweCAhaW1wb3J0YW50O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWMtYm9yZGVyLWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWMtcHJpbWFyeSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXZhdGFyIHtcXHJcXG4gIGdyaWQtYXJlYTogYXZhdGFyO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9keSB7XFxyXFxuICBncmlkLWFyZWE6IGJvZHk7XFxyXFxufVxcclxcblxcclxcbi50ZXh0YXJlYSB7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBjb2xvcjogdmFyKC0tYy10ZXh0LWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zNzVyZW07XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZSB7XFxyXFxuICBjb2xvcjogdmFyKC1jLS1ncmF5KTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwib3ZlcmxheVwiOiBcInN0eWxlX292ZXJsYXlfX19oel9XXCIsXG5cdFwibW9kYWxcIjogXCJzdHlsZV9tb2RhbF9fb1gyczdcIixcblx0XCJhdmF0YXJcIjogXCJzdHlsZV9hdmF0YXJfX2Q4MmpOXCIsXG5cdFwiYm9keVwiOiBcInN0eWxlX2JvZHlfX3E1SVM3XCIsXG5cdFwidGV4dGFyZWFcIjogXCJzdHlsZV90ZXh0YXJlYV9fVFhrMlhcIixcblx0XCJmb290ZXJcIjogXCJzdHlsZV9mb290ZXJfX1NpY1RsXCIsXG5cdFwiY2xvc2VcIjogXCJzdHlsZV9jbG9zZV9fT2hEc2pcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./components/tweet-modal/style.module.css\n");

/***/ })

});