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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dnd-kit/core */ \"(app-pages-browser)/./node_modules/@dnd-kit/core/dist/core.esm.js\");\n/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Chart */ \"(app-pages-browser)/./src/app/components/TradingChart/Chart.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst EmojiPicker = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_src_app_components_TradingChart_EmojiPicker_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./EmojiPicker */ \"(app-pages-browser)/./src/app/components/TradingChart/EmojiPicker.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"app/components/TradingChart/index.tsx -> \" + \"./EmojiPicker\"\n        ]\n    },\n    ssr: false\n});\n_c = EmojiPicker;\n\nconst TradingChart = ()=>{\n    _s();\n    const [hoveredData, setHoveredData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [isDropped, setIsDropped] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [dragStarted, setDragStarted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleDragStart = (e)=>{\n        setDragStarted(true);\n    };\n    const handleDragEnd = (e)=>{\n        console.log(e.over);\n        if (e.over && e.over.id === \"trading-chart\") {\n            console.log(\"here\");\n            const { active, over } = e;\n            const scrollOffset = window.scrollY;\n            const chartTopPosition = over.rect.top + scrollOffset;\n            console.log(active.rect.current.translated.top + scrollOffset - chartTopPosition, \" \", active.rect.current.translated.left - over.rect.left);\n            console.log(hoveredData === null || hoveredData === void 0 ? void 0 : hoveredData.time);\n            setDragStarted(false);\n            setIsDropped(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.DndContext, {\n        onDragStart: handleDragStart,\n        onDragEnd: handleDragEnd,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-y-4 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/index.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EmojiPicker, {\n                    dragStarted: dragStarted\n                }, void 0, false, {\n                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/index.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/index.tsx\",\n            lineNumber: 65,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/index.tsx\",\n        lineNumber: 61,\n        columnNumber: 3\n    }, undefined);\n};\n_s(TradingChart, \"IYhJVKR1YhBZ+d8DYHfyqeg9OH4=\");\n_c1 = TradingChart;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TradingChart);\nvar _c, _c1;\n$RefreshReg$(_c, \"EmojiPicker\");\n$RefreshReg$(_c1, \"TradingChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UcmFkaW5nQ2hhcnQvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVtRDtBQUNqQjtBQWFzQjtBQUV4RCxNQUFNRyxjQUFjRix3REFBT0EsQ0FBQyxJQUFNLDZQQUF1Qjs7Ozs7O0lBQUlHLEtBQUs7O0tBQTVERDtBQUVxQjtBQVUzQixNQUFNRyxlQUFlOztJQUNwQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBO0lBQzlDLE1BQU0sQ0FBQ1MsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNXLFdBQVdDLGFBQWEsR0FBR1osK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDYSxhQUFhQyxlQUFlLEdBQUdkLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1lLGtCQUFrQixDQUFDQztRQUN4QkYsZUFBZTtJQUNoQjtJQUVBLE1BQU1HLGdCQUFnQixDQUFDRDtRQUN0QkUsUUFBUUMsR0FBRyxDQUFDSCxFQUFFSSxJQUFJO1FBQ2xCLElBQUlKLEVBQUVJLElBQUksSUFBSUosRUFBRUksSUFBSSxDQUFDQyxFQUFFLEtBQUssaUJBQWlCO1lBQzVDSCxRQUFRQyxHQUFHLENBQUM7WUFDWixNQUFNLEVBQUVHLE1BQU0sRUFBRUYsSUFBSSxFQUFFLEdBQUdKO1lBRXpCLE1BQU1PLGVBQWVDLE9BQU9DLE9BQU87WUFDbkMsTUFBTUMsbUJBQW1CTixLQUFLTyxJQUFJLENBQUNDLEdBQUcsR0FBR0w7WUFDekNMLFFBQVFDLEdBQUcsQ0FDVkcsT0FBT0ssSUFBSSxDQUFDRSxPQUFPLENBQUNDLFVBQVUsQ0FBQ0YsR0FBRyxHQUFHTCxlQUFlRyxrQkFDcEQsS0FDQUosT0FBT0ssSUFBSSxDQUFDRSxPQUFPLENBQUNDLFVBQVUsQ0FBQ0MsSUFBSSxHQUFHWCxLQUFLTyxJQUFJLENBQUNJLElBQUk7WUFFckRiLFFBQVFDLEdBQUcsQ0FBQ1osd0JBQUFBLGtDQUFBQSxZQUFheUIsSUFBSTtZQUM3QmxCLGVBQWU7WUFDZkYsYUFBYTtRQUNkO0lBQ0Q7SUFFQSxxQkFDQyw4REFBQ1YscURBQVVBO1FBQ1YrQixhQUFhbEI7UUFDYm1CLFdBQVdqQjtrQkFFWCw0RUFBQ2tCO1lBQUlDLFdBQVU7OzhCQUNkLDhEQUFDRDs4QkFDQSw0RUFBQzlCLDhDQUFLQTs7Ozs7Ozs7Ozs4QkFFUCw4REFBQ0Y7b0JBQVlVLGFBQWFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk5QjtHQTFDTVA7TUFBQUE7QUE0Q04saUVBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGFuL1Byb2dyYW1taW5nL3Rha2Vob21lL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9UcmFkaW5nQ2hhcnQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCJcbmltcG9ydCB7XG5cdGNyZWF0ZUNoYXJ0LFxuXHRDb2xvclR5cGUsXG5cdElDaGFydEFwaSxcblx0SVNlcmllc0FwaSxcblx0VVRDVGltZXN0YW1wLFxufSBmcm9tIFwibGlnaHR3ZWlnaHQtY2hhcnRzXCJcbmltcG9ydCB7XG5cdFRyYWRpbmdEYXRhLFxuXHR0cmFuc2Zvcm1JbnRlcnZhbENoYXJ0RGF0YSxcbn0gZnJvbSBcIi4uLy4uL3V0aWxzL3RyYW5zZm9ybS1jaGFydFwiXG5pbXBvcnQgdXNlV2Vic29ja2V0IGZyb20gXCJAL2FwcC9ob29rcy91c2VXZWJzb2NrZXRcIlxuaW1wb3J0IHsgRG5kQ29udGV4dCwgdXNlRHJvcHBhYmxlIH0gZnJvbSBcIkBkbmQta2l0L2NvcmVcIlxuaW1wb3J0IHsgRW1vamlQbHVnaW4gfSBmcm9tIFwiQC9hcHAvdXRpbHMvZW1vamktcGx1Z2luXCJcbmNvbnN0IEVtb2ppUGlja2VyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuL0Vtb2ppUGlja2VyXCIpLCB7IHNzcjogZmFsc2UgfSlcbmltcG9ydCBTa2VsZXRvbkxvYWRpbmdDaGFydCBmcm9tIFwiLi4vU2tlbGV0b25Mb2FkaW5nQ2hhcnRcIlxuaW1wb3J0IENoYXJ0IGZyb20gXCIuL0NoYXJ0XCJcblxuaW50ZXJmYWNlIE9ITENEYXRhIGV4dGVuZHMgVHJhZGluZ0RhdGEge1xuXHR0aW1lOiBudW1iZXJcblx0b3BlbjogbnVtYmVyXG5cdGhpZ2g6IG51bWJlclxuXHRsb3c6IG51bWJlclxuXHRjbG9zZTogbnVtYmVyXG59XG5cbmNvbnN0IFRyYWRpbmdDaGFydCA9ICgpID0+IHtcblx0Y29uc3QgW2hvdmVyZWREYXRhLCBzZXRIb3ZlcmVkRGF0YV0gPSB1c2VTdGF0ZTxPSExDRGF0YT4oKVxuXHRjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblx0Y29uc3QgW2lzRHJvcHBlZCwgc2V0SXNEcm9wcGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCBbZHJhZ1N0YXJ0ZWQsIHNldERyYWdTdGFydGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cdGNvbnN0IGhhbmRsZURyYWdTdGFydCA9IChlKSA9PiB7XG5cdFx0c2V0RHJhZ1N0YXJ0ZWQodHJ1ZSlcblx0fVxuXG5cdGNvbnN0IGhhbmRsZURyYWdFbmQgPSAoZSkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKGUub3Zlcilcblx0XHRpZiAoZS5vdmVyICYmIGUub3Zlci5pZCA9PT0gXCJ0cmFkaW5nLWNoYXJ0XCIpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiaGVyZVwiKVxuXHRcdFx0Y29uc3QgeyBhY3RpdmUsIG92ZXIgfSA9IGVcblxuXHRcdFx0Y29uc3Qgc2Nyb2xsT2Zmc2V0ID0gd2luZG93LnNjcm9sbFlcblx0XHRcdGNvbnN0IGNoYXJ0VG9wUG9zaXRpb24gPSBvdmVyLnJlY3QudG9wICsgc2Nyb2xsT2Zmc2V0XG5cdFx0XHRjb25zb2xlLmxvZyhcblx0XHRcdFx0YWN0aXZlLnJlY3QuY3VycmVudC50cmFuc2xhdGVkLnRvcCArIHNjcm9sbE9mZnNldCAtIGNoYXJ0VG9wUG9zaXRpb24sXG5cdFx0XHRcdFwiIFwiLFxuXHRcdFx0XHRhY3RpdmUucmVjdC5jdXJyZW50LnRyYW5zbGF0ZWQubGVmdCAtIG92ZXIucmVjdC5sZWZ0XG5cdFx0XHQpXG5cdFx0XHRjb25zb2xlLmxvZyhob3ZlcmVkRGF0YT8udGltZSlcblx0XHRcdHNldERyYWdTdGFydGVkKGZhbHNlKVxuXHRcdFx0c2V0SXNEcm9wcGVkKHRydWUpXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8RG5kQ29udGV4dFxuXHRcdFx0b25EcmFnU3RhcnQ9e2hhbmRsZURyYWdTdGFydH1cblx0XHRcdG9uRHJhZ0VuZD17aGFuZGxlRHJhZ0VuZH1cblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLXktNCBcIj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8Q2hhcnQgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxFbW9qaVBpY2tlciBkcmFnU3RhcnRlZD17ZHJhZ1N0YXJ0ZWR9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0RuZENvbnRleHQ+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhZGluZ0NoYXJ0XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJkeW5hbWljIiwiRG5kQ29udGV4dCIsIkVtb2ppUGlja2VyIiwic3NyIiwiQ2hhcnQiLCJUcmFkaW5nQ2hhcnQiLCJob3ZlcmVkRGF0YSIsInNldEhvdmVyZWREYXRhIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaXNEcm9wcGVkIiwic2V0SXNEcm9wcGVkIiwiZHJhZ1N0YXJ0ZWQiLCJzZXREcmFnU3RhcnRlZCIsImhhbmRsZURyYWdTdGFydCIsImUiLCJoYW5kbGVEcmFnRW5kIiwiY29uc29sZSIsImxvZyIsIm92ZXIiLCJpZCIsImFjdGl2ZSIsInNjcm9sbE9mZnNldCIsIndpbmRvdyIsInNjcm9sbFkiLCJjaGFydFRvcFBvc2l0aW9uIiwicmVjdCIsInRvcCIsImN1cnJlbnQiLCJ0cmFuc2xhdGVkIiwibGVmdCIsInRpbWUiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ0VuZCIsImRpdiIsImNsYXNzTmFtZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TradingChart/index.tsx\n"));

/***/ })

});