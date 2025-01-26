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

/***/ "(app-pages-browser)/./src/app/components/TradingChart/index.tsx":
/*!***************************************************!*\
  !*** ./src/app/components/TradingChart/index.tsx ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dnd-kit/core */ \"(app-pages-browser)/./node_modules/@dnd-kit/core/dist/core.esm.js\");\n/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Chart */ \"(app-pages-browser)/./src/app/components/TradingChart/Chart.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst EmojiPicker = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_src_app_components_TradingChart_EmojiPicker_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./EmojiPicker */ \"(app-pages-browser)/./src/app/components/TradingChart/EmojiPicker.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"app/components/TradingChart/index.tsx -> \" + \"./EmojiPicker\"\n        ]\n    },\n    ssr: false\n});\n_c = EmojiPicker;\n\n\nconst TradingChart = ()=>{\n    _s();\n    const [hoveredData, setHoveredData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [dragStarted, setDragStarted] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [emojiTimestamp, setEmojiTimestamp] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const [emojiTopPosition, setEmojiTopPosition] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const handleDragStart = (e)=>{\n        setDragStarted(true);\n    };\n    const handleDragEnd = (e)=>{\n        if (e.over && e.over.id === \"trading-chart\") {\n            const { active, over } = e;\n            if (hoveredData === null || hoveredData === void 0 ? void 0 : hoveredData.time) {\n                setEmojiTimestamp(hoveredData === null || hoveredData === void 0 ? void 0 : hoveredData.time);\n            }\n            const scrollOffset = window.scrollY;\n            const chartTopPosition = over.rect.top + scrollOffset;\n            setEmojiTopPosition(active.rect.current.translated.top + scrollOffset - chartTopPosition);\n            setDragStarted(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.DndContext, {\n        onDragStart: handleDragStart,\n        onDragEnd: handleDragEnd,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-y-4 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    hoveredData: hoveredData,\n                    setHoveredData: setHoveredData,\n                    emojiTimestamp: emojiTimestamp\n                }, void 0, false, {\n                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/index.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EmojiPicker, {\n                    dragStarted: dragStarted\n                }, void 0, false, {\n                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/index.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/index.tsx\",\n            lineNumber: 50,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/index.tsx\",\n        lineNumber: 46,\n        columnNumber: 3\n    }, undefined);\n};\n_s(TradingChart, \"HTJ8ZbP0WkmiijYAyrGRCxLVpdI=\");\n_c1 = TradingChart;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TradingChart);\nvar _c, _c1;\n$RefreshReg$(_c, \"EmojiPicker\");\n$RefreshReg$(_c1, \"TradingChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UcmFkaW5nQ2hhcnQvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVrQztBQUNRO0FBQzFDLE1BQU1FLGNBQWNGLHdEQUFPQSxDQUFDLElBQU0sNlBBQXVCOzs7Ozs7SUFBSUcsS0FBSzs7S0FBNUREO0FBQ3FCO0FBQ0s7QUFXaEMsTUFBTUksZUFBZTs7SUFDcEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdILCtDQUFRQTtJQUM5QyxNQUFNLENBQUNJLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDTSxnQkFBZ0JDLGtCQUFrQixHQUFHUCwrQ0FBUUEsQ0FBZ0I7SUFDcEUsTUFBTSxDQUFDUSxrQkFBa0JDLG9CQUFvQixHQUFHVCwrQ0FBUUEsQ0FBZ0I7SUFFeEUsTUFBTVUsa0JBQWtCLENBQUNDO1FBQ3hCTixlQUFlO0lBQ2hCO0lBRUEsTUFBTU8sZ0JBQWdCLENBQUNEO1FBQ3RCLElBQUlBLEVBQUVFLElBQUksSUFBSUYsRUFBRUUsSUFBSSxDQUFDQyxFQUFFLEtBQUssaUJBQWlCO1lBQzVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFRixJQUFJLEVBQUUsR0FBR0Y7WUFFekIsSUFBSVQsd0JBQUFBLGtDQUFBQSxZQUFhYyxJQUFJLEVBQUU7Z0JBQ3RCVCxrQkFBa0JMLHdCQUFBQSxrQ0FBQUEsWUFBYWMsSUFBSTtZQUNwQztZQUVBLE1BQU1DLGVBQWVDLE9BQU9DLE9BQU87WUFDbkMsTUFBTUMsbUJBQW1CUCxLQUFLUSxJQUFJLENBQUNDLEdBQUcsR0FBR0w7WUFDekNSLG9CQUNDTSxPQUFPTSxJQUFJLENBQUNFLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDRixHQUFHLEdBQUdMLGVBQWVHO1lBRXJEZixlQUFlO1FBQ2hCO0lBQ0Q7SUFFQSxxQkFDQyw4REFBQ1QscURBQVVBO1FBQ1Y2QixhQUFhZjtRQUNiZ0IsV0FBV2Q7a0JBRVgsNEVBQUNlO1lBQUlDLFdBQVU7OzhCQUNkLDhEQUFDN0IsOENBQUtBO29CQUNMRyxhQUFhQTtvQkFDYkMsZ0JBQWdCQTtvQkFDaEJHLGdCQUFnQkE7Ozs7Ozs4QkFFakIsOERBQUNUO29CQUFZTyxhQUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUI7R0ExQ01IO01BQUFBO0FBNENOLGlFQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyIvVXNlcnMvYWxhbi9Qcm9ncmFtbWluZy90YWtlaG9tZS9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvVHJhZGluZ0NoYXJ0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCJcbmltcG9ydCB7IERuZENvbnRleHQgfSBmcm9tIFwiQGRuZC1raXQvY29yZVwiXG5jb25zdCBFbW9qaVBpY2tlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi9FbW9qaVBpY2tlclwiKSwgeyBzc3I6IGZhbHNlIH0pXG5pbXBvcnQgQ2hhcnQgZnJvbSBcIi4vQ2hhcnRcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVHJhZGluZ0RhdGEgfSBmcm9tIFwiQC9hcHAvdXRpbHMvdHJhbnNmb3JtLWNoYXJ0XCJcblxuZXhwb3J0IGludGVyZmFjZSBPSExDRGF0YSBleHRlbmRzIFRyYWRpbmdEYXRhIHtcblx0dGltZTogbnVtYmVyXG5cdG9wZW46IG51bWJlclxuXHRoaWdoOiBudW1iZXJcblx0bG93OiBudW1iZXJcblx0Y2xvc2U6IG51bWJlclxufVxuXG5jb25zdCBUcmFkaW5nQ2hhcnQgPSAoKSA9PiB7XG5cdGNvbnN0IFtob3ZlcmVkRGF0YSwgc2V0SG92ZXJlZERhdGFdID0gdXNlU3RhdGU8T0hMQ0RhdGE+KClcblx0Y29uc3QgW2RyYWdTdGFydGVkLCBzZXREcmFnU3RhcnRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblx0Y29uc3QgW2Vtb2ppVGltZXN0YW1wLCBzZXRFbW9qaVRpbWVzdGFtcF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKVxuXHRjb25zdCBbZW1vamlUb3BQb3NpdGlvbiwgc2V0RW1vamlUb3BQb3NpdGlvbl0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKVxuXG5cdGNvbnN0IGhhbmRsZURyYWdTdGFydCA9IChlKSA9PiB7XG5cdFx0c2V0RHJhZ1N0YXJ0ZWQodHJ1ZSlcblx0fVxuXG5cdGNvbnN0IGhhbmRsZURyYWdFbmQgPSAoZSkgPT4ge1xuXHRcdGlmIChlLm92ZXIgJiYgZS5vdmVyLmlkID09PSBcInRyYWRpbmctY2hhcnRcIikge1xuXHRcdFx0Y29uc3QgeyBhY3RpdmUsIG92ZXIgfSA9IGVcblxuXHRcdFx0aWYgKGhvdmVyZWREYXRhPy50aW1lKSB7XG5cdFx0XHRcdHNldEVtb2ppVGltZXN0YW1wKGhvdmVyZWREYXRhPy50aW1lKVxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzY3JvbGxPZmZzZXQgPSB3aW5kb3cuc2Nyb2xsWVxuXHRcdFx0Y29uc3QgY2hhcnRUb3BQb3NpdGlvbiA9IG92ZXIucmVjdC50b3AgKyBzY3JvbGxPZmZzZXRcblx0XHRcdHNldEVtb2ppVG9wUG9zaXRpb24oXG5cdFx0XHRcdGFjdGl2ZS5yZWN0LmN1cnJlbnQudHJhbnNsYXRlZC50b3AgKyBzY3JvbGxPZmZzZXQgLSBjaGFydFRvcFBvc2l0aW9uXG5cdFx0XHQpXG5cdFx0XHRzZXREcmFnU3RhcnRlZChmYWxzZSlcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxEbmRDb250ZXh0XG5cdFx0XHRvbkRyYWdTdGFydD17aGFuZGxlRHJhZ1N0YXJ0fVxuXHRcdFx0b25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfVxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAteS00IFwiPlxuXHRcdFx0XHQ8Q2hhcnRcblx0XHRcdFx0XHRob3ZlcmVkRGF0YT17aG92ZXJlZERhdGF9XG5cdFx0XHRcdFx0c2V0SG92ZXJlZERhdGE9e3NldEhvdmVyZWREYXRhfVxuXHRcdFx0XHRcdGVtb2ppVGltZXN0YW1wPXtlbW9qaVRpbWVzdGFtcH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PEVtb2ppUGlja2VyIGRyYWdTdGFydGVkPXtkcmFnU3RhcnRlZH0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvRG5kQ29udGV4dD5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFkaW5nQ2hhcnRcbiJdLCJuYW1lcyI6WyJkeW5hbWljIiwiRG5kQ29udGV4dCIsIkVtb2ppUGlja2VyIiwic3NyIiwiQ2hhcnQiLCJ1c2VTdGF0ZSIsIlRyYWRpbmdDaGFydCIsImhvdmVyZWREYXRhIiwic2V0SG92ZXJlZERhdGEiLCJkcmFnU3RhcnRlZCIsInNldERyYWdTdGFydGVkIiwiZW1vamlUaW1lc3RhbXAiLCJzZXRFbW9qaVRpbWVzdGFtcCIsImVtb2ppVG9wUG9zaXRpb24iLCJzZXRFbW9qaVRvcFBvc2l0aW9uIiwiaGFuZGxlRHJhZ1N0YXJ0IiwiZSIsImhhbmRsZURyYWdFbmQiLCJvdmVyIiwiaWQiLCJhY3RpdmUiLCJ0aW1lIiwic2Nyb2xsT2Zmc2V0Iiwid2luZG93Iiwic2Nyb2xsWSIsImNoYXJ0VG9wUG9zaXRpb24iLCJyZWN0IiwidG9wIiwiY3VycmVudCIsInRyYW5zbGF0ZWQiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ0VuZCIsImRpdiIsImNsYXNzTmFtZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TradingChart/index.tsx\n"));

/***/ })

});