"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/utils/emoji-plugin.ts":
/*!***************************************!*\
  !*** ./src/app/utils/emoji-plugin.ts ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EmojiPlugin: () => (/* binding */ EmojiPlugin)\n/* harmony export */ });\n/* harmony import */ var _positions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positions */ \"(app-pages-browser)/./src/app/utils/positions.ts\");\n\nclass EmojiPaneRenderer {\n    draw(target) {\n        target.useBitmapCoordinateSpace((scope)=>{\n            const position = (0,_positions__WEBPACK_IMPORTED_MODULE_0__.positionsLine)(this._x, scope.horizontalPixelRatio);\n            const position_y = (0,_positions__WEBPACK_IMPORTED_MODULE_0__.positionsLine)(this._y, scope.horizontalPixelRatio);\n            const ctx = scope.context;\n            ctx.font = \"32px serif\";\n            ctx.fillText(this._emoji, position.position, position_y.position);\n        });\n    }\n    constructor(x, y, emoji){\n        this._x = x;\n        this._y = y;\n        this._emoji = emoji;\n    }\n}\nclass EmojiPaneView {\n    renderer() {\n        const timestamp = this._source.getTimestamp();\n        const timeScale = this._source.getChart().timeScale();\n        const x = timeScale.timeToCoordinate(timestamp);\n        const y = this._source.getPricescale();\n        const emoji = this._source.getEmoji();\n        if (x === null || y === null || emoji === null) return null;\n        return new EmojiPaneRenderer(x, y, emoji);\n    }\n    constructor(source){\n        this._source = source;\n    }\n}\nclass EmojiPlugin {\n    getChart() {\n        return this._chart;\n    }\n    getEmoji() {\n        return this._emoji;\n    }\n    getTimestamp() {\n        return this._timestamp;\n    }\n    getPricescale() {\n        return this._pricescale;\n    }\n    getSeries() {\n        return this._series;\n    }\n    paneViews() {\n        return this._paneViews;\n    }\n    constructor(chart, series, emoji, timestamp, pricescale){\n        this._chart = chart;\n        this._series = series;\n        this._emoji = emoji;\n        this._timestamp = timestamp;\n        this._pricescale = pricescale;\n        this._paneViews = [\n            new EmojiPaneView(this)\n        ];\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdXRpbHMvZW1vamktcGx1Z2luLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBVTJDO0FBRTNDLE1BQU1DO0lBU0xDLEtBQUtDLE1BQStCLEVBQVE7UUFDM0NBLE9BQU9DLHdCQUF3QixDQUFDLENBQUNDO1lBQ2hDLE1BQU1DLFdBQVdOLHlEQUFhQSxDQUFDLElBQUksQ0FBQ08sRUFBRSxFQUFFRixNQUFNRyxvQkFBb0I7WUFDbEUsTUFBTUMsYUFBYVQseURBQWFBLENBQUMsSUFBSSxDQUFDVSxFQUFFLEVBQUVMLE1BQU1HLG9CQUFvQjtZQUNwRSxNQUFNRyxNQUFNTixNQUFNTyxPQUFPO1lBQ3pCRCxJQUFJRSxJQUFJLEdBQUc7WUFDWEYsSUFBSUcsUUFBUSxDQUFDLElBQUksQ0FBQ0MsTUFBTSxFQUFFVCxTQUFTQSxRQUFRLEVBQUVHLFdBQVdILFFBQVE7UUFDakU7SUFDRDtJQWJBVSxZQUFZQyxDQUFTLEVBQUVDLENBQVMsRUFBRUMsS0FBYSxDQUFFO1FBQ2hELElBQUksQ0FBQ1osRUFBRSxHQUFHVTtRQUNWLElBQUksQ0FBQ1AsRUFBRSxHQUFHUTtRQUNWLElBQUksQ0FBQ0gsTUFBTSxHQUFHSTtJQUNmO0FBVUQ7QUFFQSxNQUFNQztJQU9MQyxXQUFnRDtRQUMvQyxNQUFNQyxZQUFZLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxZQUFZO1FBQzNDLE1BQU1DLFlBQVksSUFBSSxDQUFDRixPQUFPLENBQUNHLFFBQVEsR0FBR0QsU0FBUztRQUVuRCxNQUFNUixJQUFJUSxVQUFVRSxnQkFBZ0IsQ0FBQ0w7UUFDckMsTUFBTUosSUFBSSxJQUFJLENBQUNLLE9BQU8sQ0FBQ0ssYUFBYTtRQUNwQyxNQUFNVCxRQUFRLElBQUksQ0FBQ0ksT0FBTyxDQUFDTSxRQUFRO1FBQ25DLElBQUlaLE1BQU0sUUFBUUMsTUFBTSxRQUFRQyxVQUFVLE1BQU0sT0FBTztRQUN2RCxPQUFPLElBQUlsQixrQkFBa0JnQixHQUFHQyxHQUFHQztJQUNwQztJQWJBSCxZQUFZYyxNQUFtQixDQUFFO1FBQ2hDLElBQUksQ0FBQ1AsT0FBTyxHQUFHTztJQUNoQjtBQVlEO0FBRU8sTUFBTUM7SUF1QlpMLFdBQXNCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDTSxNQUFNO0lBQ25CO0lBRUFILFdBQW1CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDZCxNQUFNO0lBQ25CO0lBRUFTLGVBQXFCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDUyxVQUFVO0lBQ3ZCO0lBRUFMLGdCQUF3QjtRQUN2QixPQUFPLElBQUksQ0FBQ00sV0FBVztJQUN4QjtJQUVBQyxZQUFvQztRQUNuQyxPQUFPLElBQUksQ0FBQ0MsT0FBTztJQUNwQjtJQUVBQyxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUNDLFVBQVU7SUFDdkI7SUFyQ0F0QixZQUNDdUIsS0FBZ0IsRUFDaEJDLE1BQThCLEVBQzlCckIsS0FBYSxFQUNiRyxTQUFlLEVBQ2ZtQixVQUFrQixDQUNqQjtRQUNELElBQUksQ0FBQ1QsTUFBTSxHQUFHTztRQUNkLElBQUksQ0FBQ0gsT0FBTyxHQUFHSTtRQUNmLElBQUksQ0FBQ3pCLE1BQU0sR0FBR0k7UUFDZCxJQUFJLENBQUNjLFVBQVUsR0FBR1g7UUFDbEIsSUFBSSxDQUFDWSxXQUFXLEdBQUdPO1FBQ25CLElBQUksQ0FBQ0gsVUFBVSxHQUFHO1lBQUMsSUFBSWxCLGNBQWMsSUFBSTtTQUFFO0lBQzVDO0FBeUJEIiwic291cmNlcyI6WyIvVXNlcnMvYWxhbi9Qcm9ncmFtbWluZy90YWtlaG9tZS9mcm9udGVuZC9zcmMvYXBwL3V0aWxzL2Vtb2ppLXBsdWdpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRJQ2hhcnRBcGksXG5cdElTZXJpZXNBcGksXG5cdElTZXJpZXNQcmltaXRpdmUsXG5cdElTZXJpZXNQcmltaXRpdmVQYW5lUmVuZGVyZXIsXG5cdElTZXJpZXNQcmltaXRpdmVQYW5lVmlldyxcblx0U2VyaWVzVHlwZSxcblx0VGltZSxcbn0gZnJvbSBcImxpZ2h0d2VpZ2h0LWNoYXJ0c1wiXG5pbXBvcnQgeyBDYW52YXNSZW5kZXJpbmdUYXJnZXQyRCB9IGZyb20gXCJmYW5jeS1jYW52YXNcIlxuaW1wb3J0IHsgcG9zaXRpb25zTGluZSB9IGZyb20gXCIuL3Bvc2l0aW9uc1wiXG5cbmNsYXNzIEVtb2ppUGFuZVJlbmRlcmVyIGltcGxlbWVudHMgSVNlcmllc1ByaW1pdGl2ZVBhbmVSZW5kZXJlciB7XG5cdF94OiBudW1iZXJcblx0X3k6IG51bWJlclxuXHRfZW1vamk6IHN0cmluZ1xuXHRjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgZW1vamk6IHN0cmluZykge1xuXHRcdHRoaXMuX3ggPSB4XG5cdFx0dGhpcy5feSA9IHlcblx0XHR0aGlzLl9lbW9qaSA9IGVtb2ppXG5cdH1cblx0ZHJhdyh0YXJnZXQ6IENhbnZhc1JlbmRlcmluZ1RhcmdldDJEKTogdm9pZCB7XG5cdFx0dGFyZ2V0LnVzZUJpdG1hcENvb3JkaW5hdGVTcGFjZSgoc2NvcGUpID0+IHtcblx0XHRcdGNvbnN0IHBvc2l0aW9uID0gcG9zaXRpb25zTGluZSh0aGlzLl94LCBzY29wZS5ob3Jpem9udGFsUGl4ZWxSYXRpbylcblx0XHRcdGNvbnN0IHBvc2l0aW9uX3kgPSBwb3NpdGlvbnNMaW5lKHRoaXMuX3ksIHNjb3BlLmhvcml6b250YWxQaXhlbFJhdGlvKVxuXHRcdFx0Y29uc3QgY3R4ID0gc2NvcGUuY29udGV4dFxuXHRcdFx0Y3R4LmZvbnQgPSBcIjMycHggc2VyaWZcIlxuXHRcdFx0Y3R4LmZpbGxUZXh0KHRoaXMuX2Vtb2ppLCBwb3NpdGlvbi5wb3NpdGlvbiwgcG9zaXRpb25feS5wb3NpdGlvbilcblx0XHR9KVxuXHR9XG59XG5cbmNsYXNzIEVtb2ppUGFuZVZpZXcgaW1wbGVtZW50cyBJU2VyaWVzUHJpbWl0aXZlUGFuZVZpZXcge1xuXHRfc291cmNlOiBFbW9qaVBsdWdpblxuXG5cdGNvbnN0cnVjdG9yKHNvdXJjZTogRW1vamlQbHVnaW4pIHtcblx0XHR0aGlzLl9zb3VyY2UgPSBzb3VyY2Vcblx0fVxuXG5cdHJlbmRlcmVyKCk6IElTZXJpZXNQcmltaXRpdmVQYW5lUmVuZGVyZXIgfCBudWxsIHtcblx0XHRjb25zdCB0aW1lc3RhbXAgPSB0aGlzLl9zb3VyY2UuZ2V0VGltZXN0YW1wKClcblx0XHRjb25zdCB0aW1lU2NhbGUgPSB0aGlzLl9zb3VyY2UuZ2V0Q2hhcnQoKS50aW1lU2NhbGUoKVxuXG5cdFx0Y29uc3QgeCA9IHRpbWVTY2FsZS50aW1lVG9Db29yZGluYXRlKHRpbWVzdGFtcClcblx0XHRjb25zdCB5ID0gdGhpcy5fc291cmNlLmdldFByaWNlc2NhbGUoKVxuXHRcdGNvbnN0IGVtb2ppID0gdGhpcy5fc291cmNlLmdldEVtb2ppKClcblx0XHRpZiAoeCA9PT0gbnVsbCB8fCB5ID09PSBudWxsIHx8IGVtb2ppID09PSBudWxsKSByZXR1cm4gbnVsbFxuXHRcdHJldHVybiBuZXcgRW1vamlQYW5lUmVuZGVyZXIoeCwgeSwgZW1vamkpXG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEVtb2ppUGx1Z2luIGltcGxlbWVudHMgSVNlcmllc1ByaW1pdGl2ZTxUaW1lPiB7XG5cdF9jaGFydDogSUNoYXJ0QXBpXG5cdF9zZXJpZXM6IElTZXJpZXNBcGk8U2VyaWVzVHlwZT5cblx0X3BhbmVWaWV3czogRW1vamlQYW5lVmlld1tdXG5cdF9lbW9qaTogc3RyaW5nXG5cdF90aW1lc3RhbXA6IFRpbWVcblx0X3ByaWNlc2NhbGU6IG51bWJlclxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdGNoYXJ0OiBJQ2hhcnRBcGksXG5cdFx0c2VyaWVzOiBJU2VyaWVzQXBpPFNlcmllc1R5cGU+LFxuXHRcdGVtb2ppOiBzdHJpbmcsXG5cdFx0dGltZXN0YW1wOiBUaW1lLFxuXHRcdHByaWNlc2NhbGU6IG51bWJlclxuXHQpIHtcblx0XHR0aGlzLl9jaGFydCA9IGNoYXJ0XG5cdFx0dGhpcy5fc2VyaWVzID0gc2VyaWVzXG5cdFx0dGhpcy5fZW1vamkgPSBlbW9qaVxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcFxuXHRcdHRoaXMuX3ByaWNlc2NhbGUgPSBwcmljZXNjYWxlXG5cdFx0dGhpcy5fcGFuZVZpZXdzID0gW25ldyBFbW9qaVBhbmVWaWV3KHRoaXMpXVxuXHR9XG5cblx0Z2V0Q2hhcnQoKTogSUNoYXJ0QXBpIHtcblx0XHRyZXR1cm4gdGhpcy5fY2hhcnRcblx0fVxuXG5cdGdldEVtb2ppKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuX2Vtb2ppXG5cdH1cblxuXHRnZXRUaW1lc3RhbXAoKTogVGltZSB7XG5cdFx0cmV0dXJuIHRoaXMuX3RpbWVzdGFtcFxuXHR9XG5cblx0Z2V0UHJpY2VzY2FsZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLl9wcmljZXNjYWxlXG5cdH1cblxuXHRnZXRTZXJpZXMoKTogSVNlcmllc0FwaTxTZXJpZXNUeXBlPiB7XG5cdFx0cmV0dXJuIHRoaXMuX3Nlcmllc1xuXHR9XG5cblx0cGFuZVZpZXdzKCkge1xuXHRcdHJldHVybiB0aGlzLl9wYW5lVmlld3Ncblx0fVxufVxuIl0sIm5hbWVzIjpbInBvc2l0aW9uc0xpbmUiLCJFbW9qaVBhbmVSZW5kZXJlciIsImRyYXciLCJ0YXJnZXQiLCJ1c2VCaXRtYXBDb29yZGluYXRlU3BhY2UiLCJzY29wZSIsInBvc2l0aW9uIiwiX3giLCJob3Jpem9udGFsUGl4ZWxSYXRpbyIsInBvc2l0aW9uX3kiLCJfeSIsImN0eCIsImNvbnRleHQiLCJmb250IiwiZmlsbFRleHQiLCJfZW1vamkiLCJjb25zdHJ1Y3RvciIsIngiLCJ5IiwiZW1vamkiLCJFbW9qaVBhbmVWaWV3IiwicmVuZGVyZXIiLCJ0aW1lc3RhbXAiLCJfc291cmNlIiwiZ2V0VGltZXN0YW1wIiwidGltZVNjYWxlIiwiZ2V0Q2hhcnQiLCJ0aW1lVG9Db29yZGluYXRlIiwiZ2V0UHJpY2VzY2FsZSIsImdldEVtb2ppIiwic291cmNlIiwiRW1vamlQbHVnaW4iLCJfY2hhcnQiLCJfdGltZXN0YW1wIiwiX3ByaWNlc2NhbGUiLCJnZXRTZXJpZXMiLCJfc2VyaWVzIiwicGFuZVZpZXdzIiwiX3BhbmVWaWV3cyIsImNoYXJ0Iiwic2VyaWVzIiwicHJpY2VzY2FsZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/utils/emoji-plugin.ts\n"));

/***/ })

});