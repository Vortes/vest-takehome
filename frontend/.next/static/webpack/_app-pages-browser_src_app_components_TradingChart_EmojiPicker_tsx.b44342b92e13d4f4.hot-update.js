"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_src_app_components_TradingChart_EmojiPicker_tsx",{

/***/ "(app-pages-browser)/./src/app/components/TradingChart/EmojiPicker.tsx":
/*!*********************************************************!*\
  !*** ./src/app/components/TradingChart/EmojiPicker.tsx ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dnd-kit/core */ \"(app-pages-browser)/./node_modules/@dnd-kit/core/dist/core.esm.js\");\n/* harmony import */ var _DraggableEmojis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DraggableEmojis */ \"(app-pages-browser)/./src/app/components/TradingChart/DraggableEmojis.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst EMOJIS = [\n    \"🚀\",\n    \"😍\",\n    \"😡\",\n    \"😭\",\n    \"😱\",\n    \"👎\"\n];\nconst EmojiPicker = (param)=>{\n    let { dragStarted } = param;\n    _s();\n    const { attributes, listeners, setNodeRef, transform } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.useDraggable)({\n        id: \"emoji\"\n    });\n    const style = transform ? {\n        transform: \"translate3d(\".concat(transform.x, \"px, \").concat(transform.y, \"px, 0)\")\n    } : undefined;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex py-2 px-4 gap-x-4 bg-[#252525] w-fit rounded-full \".concat(dragStarted && \"pointer-events-none\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: setNodeRef,\n                ...listeners,\n                ...attributes,\n                style: style,\n                children: \"\\uD83D\\uDE80\"\n            }, void 0, false, {\n                fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/EmojiPicker.tsx\",\n                lineNumber: 26,\n                columnNumber: 4\n            }, undefined),\n            EMOJIS.map((emoji, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DraggableEmojis__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    emoji: emoji\n                }, key, false, {\n                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/EmojiPicker.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 5\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/EmojiPicker.tsx\",\n        lineNumber: 21,\n        columnNumber: 3\n    }, undefined);\n};\n_s(EmojiPicker, \"KToSDLllTTEzOm4MO+FGxu29k4s=\", false, function() {\n    return [\n        _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.useDraggable\n    ];\n});\n_c = EmojiPicker;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmojiPicker);\nvar _c;\n$RefreshReg$(_c, \"EmojiPicker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UcmFkaW5nQ2hhcnQvRW1vamlQaWNrZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUM0QztBQUVHO0FBSy9DLE1BQU1FLFNBQVM7SUFBQztJQUFNO0lBQU07SUFBTTtJQUFNO0lBQU07Q0FBSztBQUVuRCxNQUFNQyxjQUFvQztRQUFDLEVBQUVDLFdBQVcsRUFBRTs7SUFDekQsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxTQUFTLEVBQUUsR0FBR1IsMkRBQVlBLENBQUM7UUFDckVTLElBQUk7SUFDTDtJQUNBLE1BQU1DLFFBQVFGLFlBQ1g7UUFDQUEsV0FBVyxlQUFpQ0EsT0FBbEJBLFVBQVVHLENBQUMsRUFBQyxRQUFrQixPQUFaSCxVQUFVSSxDQUFDLEVBQUM7SUFDeEQsSUFDQUM7SUFDSCxxQkFDQyw4REFBQ0M7UUFDQUMsV0FBVywwREFFVixPQURBWCxlQUFlOzswQkFHaEIsOERBQUNVO2dCQUNBRSxLQUFLVDtnQkFDSixHQUFHRCxTQUFTO2dCQUNaLEdBQUdELFVBQVU7Z0JBQ2RLLE9BQU9BOzBCQUNQOzs7Ozs7WUFJQVIsT0FBT2UsR0FBRyxDQUFDLENBQUNDLE9BQU9DLG9CQUNuQiw4REFBQ2xCLHdEQUFlQTtvQkFDZmlCLE9BQU9BO21CQUNGQzs7Ozs7Ozs7Ozs7QUFLVjtHQWhDTWhCOztRQUNvREgsdURBQVlBOzs7S0FEaEVHO0FBa0NOLGlFQUFlQSxXQUFXQSxFQUFBIiwic291cmNlcyI6WyIvVXNlcnMvYWxhbi9Qcm9ncmFtbWluZy90YWtlaG9tZS9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvVHJhZGluZ0NoYXJ0L0Vtb2ppUGlja2VyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgdXNlRHJhZ2dhYmxlIH0gZnJvbSBcIkBkbmQta2l0L2NvcmVcIlxuaW1wb3J0IHsgRkMgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IERyYWdnYWJsZUVtb2ppcyBmcm9tIFwiLi9EcmFnZ2FibGVFbW9qaXNcIlxuXG5pbnRlcmZhY2UgRW1vamlQaWNrZXJQcm9wcyB7XG5cdGRyYWdTdGFydGVkOiBib29sZWFuXG59XG5jb25zdCBFTU9KSVMgPSBbXCLwn5qAXCIsIFwi8J+YjVwiLCBcIvCfmKFcIiwgXCLwn5itXCIsIFwi8J+YsVwiLCBcIvCfkY5cIl1cblxuY29uc3QgRW1vamlQaWNrZXI6IEZDPEVtb2ppUGlja2VyUHJvcHM+ID0gKHsgZHJhZ1N0YXJ0ZWQgfSkgPT4ge1xuXHRjb25zdCB7IGF0dHJpYnV0ZXMsIGxpc3RlbmVycywgc2V0Tm9kZVJlZiwgdHJhbnNmb3JtIH0gPSB1c2VEcmFnZ2FibGUoe1xuXHRcdGlkOiBcImVtb2ppXCIsXG5cdH0pXG5cdGNvbnN0IHN0eWxlID0gdHJhbnNmb3JtXG5cdFx0PyB7XG5cdFx0XHRcdHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7dHJhbnNmb3JtLnh9cHgsICR7dHJhbnNmb3JtLnl9cHgsIDApYCxcblx0XHQgIH1cblx0XHQ6IHVuZGVmaW5lZFxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT17YGZsZXggcHktMiBweC00IGdhcC14LTQgYmctWyMyNTI1MjVdIHctZml0IHJvdW5kZWQtZnVsbCAke1xuXHRcdFx0XHRkcmFnU3RhcnRlZCAmJiBcInBvaW50ZXItZXZlbnRzLW5vbmVcIlxuXHRcdFx0fWB9XG5cdFx0PlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRyZWY9e3NldE5vZGVSZWZ9XG5cdFx0XHRcdHsuLi5saXN0ZW5lcnN9XG5cdFx0XHRcdHsuLi5hdHRyaWJ1dGVzfVxuXHRcdFx0XHRzdHlsZT17c3R5bGV9XG5cdFx0XHQ+XG5cdFx0XHRcdPCfmoBcblx0XHRcdDwvZGl2PlxuXG5cdFx0XHR7RU1PSklTLm1hcCgoZW1vamksIGtleSkgPT4gKFxuXHRcdFx0XHQ8RHJhZ2dhYmxlRW1vamlzXG5cdFx0XHRcdFx0ZW1vamk9e2Vtb2ppfVxuXHRcdFx0XHRcdGtleT17a2V5fVxuXHRcdFx0XHQvPlxuXHRcdFx0KSl9XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRW1vamlQaWNrZXJcbiJdLCJuYW1lcyI6WyJ1c2VEcmFnZ2FibGUiLCJEcmFnZ2FibGVFbW9qaXMiLCJFTU9KSVMiLCJFbW9qaVBpY2tlciIsImRyYWdTdGFydGVkIiwiYXR0cmlidXRlcyIsImxpc3RlbmVycyIsInNldE5vZGVSZWYiLCJ0cmFuc2Zvcm0iLCJpZCIsInN0eWxlIiwieCIsInkiLCJ1bmRlZmluZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJtYXAiLCJlbW9qaSIsImtleSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TradingChart/EmojiPicker.tsx\n"));

/***/ })

});