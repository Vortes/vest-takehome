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

/***/ "(app-pages-browser)/./src/app/components/index.tsx":
/*!**************************************!*\
  !*** ./src/app/components/index.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _OrderDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderDetails */ \"(app-pages-browser)/./src/app/components/OrderDetails/index.tsx\");\n/* harmony import */ var _CoinDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CoinDetails */ \"(app-pages-browser)/./src/app/components/CoinDetails/index.tsx\");\n/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar/Navbar */ \"(app-pages-browser)/./src/app/components/Navbar/Navbar.tsx\");\n/* harmony import */ var _TradingChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TradingChart */ \"(app-pages-browser)/./src/app/components/TradingChart/index.tsx\");\n/* harmony import */ var _PriceFundingToggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PriceFundingToggle */ \"(app-pages-browser)/./src/app/components/PriceFundingToggle/index.tsx\");\n/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @dnd-kit/core */ \"(app-pages-browser)/./node_modules/@dnd-kit/core/dist/core.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst EmojiPicker = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_c = ()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_src_app_components_TradingChart_EmojiPicker_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./TradingChart/EmojiPicker */ \"(app-pages-browser)/./src/app/components/TradingChart/EmojiPicker.tsx\")), {\n    ssr: false\n});\n_c1 = EmojiPicker;\n\nconst App = ()=>{\n    _s();\n    const [isDropped, setIsDropped] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);\n    const [dragStarted, setDragStarted] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);\n    const handleDragStart = (e)=>{\n        setDragStarted(true);\n    };\n    const { setNodeRef } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_6__.useDroppable)({\n        id: \"trading-chart\"\n    });\n    const handleDragEnd = (e)=>{\n        console.log(e.over);\n        if (e.over && e.over.id === \"trading-chart\") {\n            console.log(\"here\");\n            const { active, over } = e;\n            const scrollOffset = window.scrollY;\n            const chartTopPosition = over.rect.top + scrollOffset;\n            console.log(active.rect.current.translated.top + scrollOffset - chartTopPosition, \" \", active.rect.current.translated.left - over.rect.left);\n            // console.log(hoveredData?.time)\n            setDragStarted(false);\n            setIsDropped(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-y-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/index.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col gap-y-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CoinDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/index.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PriceFundingToggle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/index.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-4 gap-x-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TradingChart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/index.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 8\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/index.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_OrderDetails__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/index.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 7\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/index.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/index.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/index.tsx\",\n            lineNumber: 49,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false);\n};\n_s(App, \"L/TmYDS3iwLwM4hQsmPZgKfqgXw=\", false, function() {\n    return [\n        _dnd_kit_core__WEBPACK_IMPORTED_MODULE_6__.useDroppable\n    ];\n});\n_c2 = App;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"EmojiPicker$dynamic\");\n$RefreshReg$(_c1, \"EmojiPicker\");\n$RefreshReg$(_c2, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUN3QztBQUNEO0FBQ0g7QUFDSztBQUNZO0FBQ0c7QUFDeEI7QUFDaEMsTUFBTU8sY0FBY0Msd0RBQU9BLE1BQUMsSUFBTSwwUUFBb0MsRUFBRTtJQUN2RUMsS0FBSztBQUNOOztBQUNrQztBQUVsQyxNQUFNQyxNQUFnQjs7SUFDckIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ08sYUFBYUMsZUFBZSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNUyxrQkFBa0IsQ0FBQ0M7UUFDeEJGLGVBQWU7SUFDaEI7SUFDQSxNQUFNLEVBQUVHLFVBQVUsRUFBRSxHQUFHWiwyREFBWUEsQ0FBQztRQUNuQ2EsSUFBSTtJQUNMO0lBRUEsTUFBTUMsZ0JBQWdCLENBQUNIO1FBQ3RCSSxRQUFRQyxHQUFHLENBQUNMLEVBQUVNLElBQUk7UUFDbEIsSUFBSU4sRUFBRU0sSUFBSSxJQUFJTixFQUFFTSxJQUFJLENBQUNKLEVBQUUsS0FBSyxpQkFBaUI7WUFDNUNFLFFBQVFDLEdBQUcsQ0FBQztZQUNaLE1BQU0sRUFBRUUsTUFBTSxFQUFFRCxJQUFJLEVBQUUsR0FBR047WUFFekIsTUFBTVEsZUFBZUMsT0FBT0MsT0FBTztZQUNuQyxNQUFNQyxtQkFBbUJMLEtBQUtNLElBQUksQ0FBQ0MsR0FBRyxHQUFHTDtZQUN6Q0osUUFBUUMsR0FBRyxDQUNWRSxPQUFPSyxJQUFJLENBQUNFLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDRixHQUFHLEdBQUdMLGVBQWVHLGtCQUNwRCxLQUNBSixPQUFPSyxJQUFJLENBQUNFLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDQyxJQUFJLEdBQUdWLEtBQUtNLElBQUksQ0FBQ0ksSUFBSTtZQUVyRCxpQ0FBaUM7WUFDakNsQixlQUFlO1lBQ2ZGLGFBQWE7UUFDZDtJQUNEO0lBQ0EscUJBQ0M7a0JBS0MsNEVBQUNxQjtZQUFJQyxXQUFVOzs4QkFDZCw4REFBQ2hDLHNEQUFNQTs7Ozs7OEJBQ1AsOERBQUMrQjtvQkFBSUMsV0FBVTs7c0NBQ2QsOERBQUNqQyxvREFBV0E7Ozs7O3NDQUNaLDhEQUFDRywyREFBa0JBOzs7OztzQ0FFbkIsOERBQUM2Qjs0QkFBSUMsV0FBVTs7OENBQ2QsOERBQUNEO29DQUFJQyxXQUFVOzhDQUNkLDRFQUFDL0IscURBQVlBOzs7Ozs7Ozs7OzhDQUdkLDhEQUFDSCxxREFBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9sQjtHQXJETVU7O1FBT2tCTCx1REFBWUE7OztNQVA5Qks7QUF1RE4saUVBQWVBLEdBQUdBLEVBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGFuL1Byb2dyYW1taW5nL3Rha2Vob21lL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBEZXRhaWxQYW5lbCBmcm9tIFwiLi9PcmRlckRldGFpbHNcIlxuaW1wb3J0IENvaW5EZXRhaWxzIGZyb20gXCIuL0NvaW5EZXRhaWxzXCJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyL05hdmJhclwiXG5pbXBvcnQgVHJhZGluZ0NoYXJ0IGZyb20gXCIuL1RyYWRpbmdDaGFydFwiXG5pbXBvcnQgRnVuZGluZ1ByaWNlVG9nZ2xlIGZyb20gXCIuL1ByaWNlRnVuZGluZ1RvZ2dsZVwiXG5pbXBvcnQgeyBEbmRDb250ZXh0LCB1c2VEcm9wcGFibGUgfSBmcm9tIFwiQGRuZC1raXQvY29yZVwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5jb25zdCBFbW9qaVBpY2tlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi9UcmFkaW5nQ2hhcnQvRW1vamlQaWNrZXJcIiksIHtcblx0c3NyOiBmYWxzZSxcbn0pXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCJcblxuY29uc3QgQXBwOiBSZWFjdC5GQyA9ICgpID0+IHtcblx0Y29uc3QgW2lzRHJvcHBlZCwgc2V0SXNEcm9wcGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCBbZHJhZ1N0YXJ0ZWQsIHNldERyYWdTdGFydGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cdGNvbnN0IGhhbmRsZURyYWdTdGFydCA9IChlKSA9PiB7XG5cdFx0c2V0RHJhZ1N0YXJ0ZWQodHJ1ZSlcblx0fVxuXHRjb25zdCB7IHNldE5vZGVSZWYgfSA9IHVzZURyb3BwYWJsZSh7XG5cdFx0aWQ6IFwidHJhZGluZy1jaGFydFwiLFxuXHR9KVxuXG5cdGNvbnN0IGhhbmRsZURyYWdFbmQgPSAoZSkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKGUub3Zlcilcblx0XHRpZiAoZS5vdmVyICYmIGUub3Zlci5pZCA9PT0gXCJ0cmFkaW5nLWNoYXJ0XCIpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiaGVyZVwiKVxuXHRcdFx0Y29uc3QgeyBhY3RpdmUsIG92ZXIgfSA9IGVcblxuXHRcdFx0Y29uc3Qgc2Nyb2xsT2Zmc2V0ID0gd2luZG93LnNjcm9sbFlcblx0XHRcdGNvbnN0IGNoYXJ0VG9wUG9zaXRpb24gPSBvdmVyLnJlY3QudG9wICsgc2Nyb2xsT2Zmc2V0XG5cdFx0XHRjb25zb2xlLmxvZyhcblx0XHRcdFx0YWN0aXZlLnJlY3QuY3VycmVudC50cmFuc2xhdGVkLnRvcCArIHNjcm9sbE9mZnNldCAtIGNoYXJ0VG9wUG9zaXRpb24sXG5cdFx0XHRcdFwiIFwiLFxuXHRcdFx0XHRhY3RpdmUucmVjdC5jdXJyZW50LnRyYW5zbGF0ZWQubGVmdCAtIG92ZXIucmVjdC5sZWZ0XG5cdFx0XHQpXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhob3ZlcmVkRGF0YT8udGltZSlcblx0XHRcdHNldERyYWdTdGFydGVkKGZhbHNlKVxuXHRcdFx0c2V0SXNEcm9wcGVkKHRydWUpXG5cdFx0fVxuXHR9XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdHsvKiA8RG5kQ29udGV4dFxuXHRcdFx0XHRvbkRyYWdTdGFydD17aGFuZGxlRHJhZ1N0YXJ0fVxuXHRcdFx0XHRvbkRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9XG5cdFx0XHQ+ICovfVxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC15LTZcIj5cblx0XHRcdFx0PE5hdmJhciAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLXktNFwiPlxuXHRcdFx0XHRcdDxDb2luRGV0YWlscyAvPlxuXHRcdFx0XHRcdDxGdW5kaW5nUHJpY2VUb2dnbGUgLz5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAteC00XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTNcIj5cblx0XHRcdFx0XHRcdFx0PFRyYWRpbmdDaGFydCAvPlxuXHRcdFx0XHRcdFx0XHR7LyogPEVtb2ppUGlja2VyIGRyYWdTdGFydGVkPXtkcmFnU3RhcnRlZH0gLz4gKi99XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxEZXRhaWxQYW5lbCAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0ey8qIDwvRG5kQ29udGV4dD4gKi99XG5cdFx0PC8+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iXSwibmFtZXMiOlsiRGV0YWlsUGFuZWwiLCJDb2luRGV0YWlscyIsIk5hdmJhciIsIlRyYWRpbmdDaGFydCIsIkZ1bmRpbmdQcmljZVRvZ2dsZSIsInVzZURyb3BwYWJsZSIsInVzZVN0YXRlIiwiRW1vamlQaWNrZXIiLCJkeW5hbWljIiwic3NyIiwiQXBwIiwiaXNEcm9wcGVkIiwic2V0SXNEcm9wcGVkIiwiZHJhZ1N0YXJ0ZWQiLCJzZXREcmFnU3RhcnRlZCIsImhhbmRsZURyYWdTdGFydCIsImUiLCJzZXROb2RlUmVmIiwiaWQiLCJoYW5kbGVEcmFnRW5kIiwiY29uc29sZSIsImxvZyIsIm92ZXIiLCJhY3RpdmUiLCJzY3JvbGxPZmZzZXQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiY2hhcnRUb3BQb3NpdGlvbiIsInJlY3QiLCJ0b3AiLCJjdXJyZW50IiwidHJhbnNsYXRlZCIsImxlZnQiLCJkaXYiLCJjbGFzc05hbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/index.tsx\n"));

/***/ })

});