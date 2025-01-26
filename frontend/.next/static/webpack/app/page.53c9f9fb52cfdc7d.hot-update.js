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

/***/ "(app-pages-browser)/./src/app/components/TradingChart/Chart.tsx":
/*!***************************************************!*\
  !*** ./src/app/components/TradingChart/Chart.tsx ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_hooks_useWebsocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/hooks/useWebsocket */ \"(app-pages-browser)/./src/app/hooks/useWebsocket.tsx\");\n/* harmony import */ var _app_utils_emoji_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/utils/emoji-plugin */ \"(app-pages-browser)/./src/app/utils/emoji-plugin.ts\");\n/* harmony import */ var _app_utils_transform_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/utils/transform-chart */ \"(app-pages-browser)/./src/app/utils/transform-chart.ts\");\n/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dnd-kit/core */ \"(app-pages-browser)/./node_modules/@dnd-kit/core/dist/core.esm.js\");\n/* harmony import */ var lightweight_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lightweight-charts */ \"(app-pages-browser)/./node_modules/lightweight-charts/dist/lightweight-charts.development.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Chart = (param)=>{\n    let { setHoveredData } = param;\n    var _hoveredData, _hoveredData1, _hoveredData2, _hoveredData3;\n    _s();\n    const chartContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);\n    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);\n    const seriesRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);\n    const [intervalTradingData, setIntervalTradingData] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);\n    const [isReady, liveTradingData] = (0,_app_hooks_useWebsocket__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const { setNodeRef } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.useDroppable)({\n        id: \"trading-chart\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)({\n        \"Chart.useEffect\": ()=>{\n            async function fetchIntervalTradingData() {\n                const res = await fetch(\"https://server-mmdev.vest.exchange/v2/klines?symbol=ETH-PERP&interval=1m&limit=300\");\n                const rawData = await res.json();\n                const formattedData = (0,_app_utils_transform_chart__WEBPACK_IMPORTED_MODULE_3__.transformIntervalChartData)(rawData);\n                setIntervalTradingData(formattedData);\n            }\n            fetchIntervalTradingData();\n        }\n    }[\"Chart.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)({\n        \"Chart.useEffect\": ()=>{\n            if (!intervalTradingData || !chartContainerRef.current) {\n                setIsLoading(true);\n                return;\n            }\n            chartRef.current = (0,lightweight_charts__WEBPACK_IMPORTED_MODULE_5__.createChart)(chartContainerRef.current, {\n                layout: {\n                    background: {\n                        type: ColorType.Solid,\n                        color: \"#161514\"\n                    },\n                    textColor: \"#d1d4dc\"\n                },\n                grid: {\n                    vertLines: {\n                        color: \"#424242\"\n                    },\n                    horzLines: {\n                        color: \"#424242\"\n                    }\n                },\n                rightPriceScale: {\n                    borderColor: \"#2c2c2c\"\n                },\n                timeScale: {\n                    borderColor: \"#2c2c2c\"\n                }\n            });\n            seriesRef.current = chartRef.current.addCandlestickSeries({\n                upColor: \"#26a69a\",\n                downColor: \"#ef5350\",\n                borderVisible: false,\n                wickUpColor: \"#26a69a\",\n                wickDownColor: \"#ef5350\"\n            });\n            seriesRef.current.setData(intervalTradingData);\n            const handleResize = {\n                \"Chart.useEffect.handleResize\": ()=>{\n                    if (chartRef.current && chartContainerRef.current) {\n                        chartRef.current.applyOptions({\n                            width: chartContainerRef.current.clientWidth,\n                            height: chartContainerRef.current.clientHeight\n                        });\n                    }\n                }\n            }[\"Chart.useEffect.handleResize\"];\n            window.addEventListener(\"resize\", handleResize);\n            setIsLoading(false);\n            setTimeout(handleResize, 1);\n            const emojiPrimitive = new _app_utils_emoji_plugin__WEBPACK_IMPORTED_MODULE_2__.EmojiPlugin(chartRef.current, seriesRef.current, 1737792600);\n            seriesRef.current.attachPrimitive(emojiPrimitive);\n            const handler = chartRef.current.subscribeCrosshairMove({\n                \"Chart.useEffect.handler\": (param)=>{\n                    const candleData = param.seriesData.get(seriesRef.current);\n                    setHoveredData(candleData);\n                }\n            }[\"Chart.useEffect.handler\"]);\n            return ({\n                \"Chart.useEffect\": ()=>{\n                    var _chartRef_current, _chartRef_current1;\n                    window.removeEventListener(\"resize\", handleResize);\n                    (_chartRef_current = chartRef.current) === null || _chartRef_current === void 0 ? void 0 : _chartRef_current.remove();\n                    (_chartRef_current1 = chartRef.current) === null || _chartRef_current1 === void 0 ? void 0 : _chartRef_current1.unsubscribeCrosshairMove(handler);\n                    chartRef.current = null;\n                    seriesRef.current = null;\n                }\n            })[\"Chart.useEffect\"];\n        }\n    }[\"Chart.useEffect\"], [\n        intervalTradingData\n    ]);\n    // TODO: use prev trading data while the new one is loading in\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)({\n        \"Chart.useEffect\": ()=>{\n            if (liveTradingData && seriesRef.current) {\n                setHoveredData(liveTradingData);\n                seriesRef.current.update(liveTradingData);\n            }\n        }\n    }[\"Chart.useEffect\"], [\n        liveTradingData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-[600px] w-full\",\n            ref: setNodeRef,\n            children: [\n                isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkeletonLoadingChart, {}, void 0, false, {\n                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                    lineNumber: 129,\n                    columnNumber: 19\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: chartContainerRef,\n                    className: \"z-0 relative h-full \".concat(isLoading ? \"hidden\" : \"\"),\n                    onDragOver: (e)=>e.preventDefault(),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-8 left-2 z-10 p-2 font-mono text-sm pointer-events-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-4 text-[#26a69a]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: \"O\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                            lineNumber: 140,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        \" \",\n                                        (_hoveredData = hoveredData) === null || _hoveredData === void 0 ? void 0 : _hoveredData.open.toFixed(2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                    lineNumber: 139,\n                                    columnNumber: 8\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: \"H\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                            lineNumber: 144,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        \" \",\n                                        (_hoveredData1 = hoveredData) === null || _hoveredData1 === void 0 ? void 0 : _hoveredData1.high.toFixed(2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                    lineNumber: 143,\n                                    columnNumber: 8\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: \"L\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                            lineNumber: 148,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        \" \",\n                                        (_hoveredData2 = hoveredData) === null || _hoveredData2 === void 0 ? void 0 : _hoveredData2.low.toFixed(2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                    lineNumber: 147,\n                                    columnNumber: 8\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: \"C\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                            lineNumber: 152,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        \" \",\n                                        (_hoveredData3 = hoveredData) === null || _hoveredData3 === void 0 ? void 0 : _hoveredData3.close.toFixed(2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                    lineNumber: 151,\n                                    columnNumber: 8\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                            lineNumber: 138,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                        lineNumber: 137,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                    lineNumber: 131,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n            lineNumber: 125,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false);\n};\n_s(Chart, \"je3fySrOOHSEPx3gS/L/YP4p+mc=\", false, function() {\n    return [\n        _app_hooks_useWebsocket__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        _dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.useDroppable\n    ];\n});\n_c = Chart;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chart);\nvar _c;\n$RefreshReg$(_c, \"Chart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UcmFkaW5nQ2hhcnQvQ2hhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ0c7QUFJbEI7QUFDUTtBQU1qQjtBQUN3QjtBQU1uRCxNQUFNUSxRQUF3QjtRQUFDLEVBQUVDLGNBQWMsRUFBRTtRQXlIeENDLGNBSUFBLGVBSUFBLGVBSUFBOztJQXBJUixNQUFNQyxvQkFBb0JMLDZDQUFNQSxDQUFpQjtJQUNqRCxNQUFNTSxXQUFXTiw2Q0FBTUEsQ0FBbUI7SUFDMUMsTUFBTU8sWUFBWVAsNkNBQU1BLENBQW1DO0lBRTNELE1BQU0sQ0FBQ1EscUJBQXFCQyx1QkFBdUIsR0FBR1IsK0NBQVFBO0lBRzlELE1BQU0sQ0FBQ1MsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNLENBQUNXLFNBQVNDLGdCQUFnQixHQUFHbkIsbUVBQVlBO0lBRS9DLE1BQU0sRUFBRW9CLFVBQVUsRUFBRSxHQUFHakIsMkRBQVlBLENBQUM7UUFDbkNrQixJQUFJO0lBQ0w7SUFFQWhCLGdEQUFTQTsyQkFBQztZQUNULGVBQWVpQjtnQkFDZCxNQUFNQyxNQUFNLE1BQU1DLE1BQ2pCO2dCQUVELE1BQU1DLFVBQVUsTUFBTUYsSUFBSUcsSUFBSTtnQkFDOUIsTUFBTUMsZ0JBQWdCekIsc0ZBQTBCQSxDQUFDdUI7Z0JBQ2pEVix1QkFBdUJZO1lBQ3hCO1lBRUFMO1FBQ0Q7MEJBQUcsRUFBRTtJQUVMakIsZ0RBQVNBOzJCQUFDO1lBQ1QsSUFBSSxDQUFDUyx1QkFBdUIsQ0FBQ0gsa0JBQWtCaUIsT0FBTyxFQUFFO2dCQUN2RFgsYUFBYTtnQkFDYjtZQUNEO1lBQ0FMLFNBQVNnQixPQUFPLEdBQUd4QiwrREFBV0EsQ0FBQ08sa0JBQWtCaUIsT0FBTyxFQUFFO2dCQUN6REMsUUFBUTtvQkFDUEMsWUFBWTt3QkFBRUMsTUFBTUMsVUFBVUMsS0FBSzt3QkFBRUMsT0FBTztvQkFBVTtv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QSx5QkFBQUEsb0NBQUFBLGNBQWF3RSxHQUFHLENBQUNGLE9BQU8sQ0FBQzs7Ozs7Ozs4Q0FFM0IsOERBQUNIOztzREFDQSw4REFBQ0M7NENBQUtQLFdBQVU7c0RBQWE7Ozs7Ozt3Q0FBUzt5Q0FDckM3RCxnQkFBQUEseUJBQUFBLG9DQUFBQSxjQUFheUUsS0FBSyxDQUFDSCxPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFwQztHQTdJTXhFOztRQVU4QlIsK0RBQVlBO1FBRXhCRyx1REFBWUE7OztLQVo5Qks7QUErSU4saUVBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGFuL1Byb2dyYW1taW5nL3Rha2Vob21lL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9UcmFkaW5nQ2hhcnQvQ2hhcnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VXZWJzb2NrZXQgZnJvbSBcIkAvYXBwL2hvb2tzL3VzZVdlYnNvY2tldFwiXG5pbXBvcnQgeyBFbW9qaVBsdWdpbiB9IGZyb20gXCJAL2FwcC91dGlscy9lbW9qaS1wbHVnaW5cIlxuaW1wb3J0IHtcblx0VHJhZGluZ0RhdGEsXG5cdHRyYW5zZm9ybUludGVydmFsQ2hhcnREYXRhLFxufSBmcm9tIFwiQC9hcHAvdXRpbHMvdHJhbnNmb3JtLWNoYXJ0XCJcbmltcG9ydCB7IHVzZURyb3BwYWJsZSB9IGZyb20gXCJAZG5kLWtpdC9jb3JlXCJcbmltcG9ydCB7XG5cdGNyZWF0ZUNoYXJ0LFxuXHRJQ2hhcnRBcGksXG5cdElTZXJpZXNBcGksXG5cdFVUQ1RpbWVzdGFtcCxcbn0gZnJvbSBcImxpZ2h0d2VpZ2h0LWNoYXJ0c1wiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5pbnRlcmZhY2UgQ2hhcnRQcm9wcyB7XG5cdHNldEhvdmVyZWREYXRhOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxPSExDRGF0YSB8IHVuZGVmaW5lZD4+XG59XG5cbmNvbnN0IENoYXJ0OiBGQzxDaGFydFByb3BzPiA9ICh7IHNldEhvdmVyZWREYXRhIH0pID0+IHtcblx0Y29uc3QgY2hhcnRDb250YWluZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG5cdGNvbnN0IGNoYXJ0UmVmID0gdXNlUmVmPElDaGFydEFwaSB8IG51bGw+KG51bGwpXG5cdGNvbnN0IHNlcmllc1JlZiA9IHVzZVJlZjxJU2VyaWVzQXBpPFwiQ2FuZGxlc3RpY2tcIj4gfCBudWxsPihudWxsKVxuXG5cdGNvbnN0IFtpbnRlcnZhbFRyYWRpbmdEYXRhLCBzZXRJbnRlcnZhbFRyYWRpbmdEYXRhXSA9IHVzZVN0YXRlPFxuXHRcdFRyYWRpbmdEYXRhW10gfCBudWxsXG5cdD4oKVxuXHRjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblxuXHRjb25zdCBbaXNSZWFkeSwgbGl2ZVRyYWRpbmdEYXRhXSA9IHVzZVdlYnNvY2tldCgpXG5cblx0Y29uc3QgeyBzZXROb2RlUmVmIH0gPSB1c2VEcm9wcGFibGUoe1xuXHRcdGlkOiBcInRyYWRpbmctY2hhcnRcIixcblx0fSlcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGFzeW5jIGZ1bmN0aW9uIGZldGNoSW50ZXJ2YWxUcmFkaW5nRGF0YSgpIHtcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuXHRcdFx0XHRcImh0dHBzOi8vc2VydmVyLW1tZGV2LnZlc3QuZXhjaGFuZ2UvdjIva2xpbmVzP3N5bWJvbD1FVEgtUEVSUCZpbnRlcnZhbD0xbSZsaW1pdD0zMDBcIlxuXHRcdFx0KVxuXHRcdFx0Y29uc3QgcmF3RGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblx0XHRcdGNvbnN0IGZvcm1hdHRlZERhdGEgPSB0cmFuc2Zvcm1JbnRlcnZhbENoYXJ0RGF0YShyYXdEYXRhKVxuXHRcdFx0c2V0SW50ZXJ2YWxUcmFkaW5nRGF0YShmb3JtYXR0ZWREYXRhKVxuXHRcdH1cblxuXHRcdGZldGNoSW50ZXJ2YWxUcmFkaW5nRGF0YSgpXG5cdH0sIFtdKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKCFpbnRlcnZhbFRyYWRpbmdEYXRhIHx8ICFjaGFydENvbnRhaW5lclJlZi5jdXJyZW50KSB7XG5cdFx0XHRzZXRJc0xvYWRpbmcodHJ1ZSlcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRjaGFydFJlZi5jdXJyZW50ID0gY3JlYXRlQ2hhcnQoY2hhcnRDb250YWluZXJSZWYuY3VycmVudCwge1xuXHRcdFx0bGF5b3V0OiB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHsgdHlwZTogQ29sb3JUeXBlLlNvbGlkLCBjb2xvcjogXCIjMTYxNTE0XCIgfSxcblx0XHRcdFx0dGV4dENvbG9yOiBcIiNkMWQ0ZGNcIixcblx0XHRcdH0sXG5cdFx0XHRncmlkOiB7XG5cdFx0XHRcdHZlcnRMaW5lczogeyBjb2xvcjogXCIjNDI0MjQyXCIgfSxcblx0XHRcdFx0aG9yekxpbmVzOiB7IGNvbG9yOiBcIiM0MjQyNDJcIiB9LFxuXHRcdFx0fSxcblx0XHRcdHJpZ2h0UHJpY2VTY2FsZToge1xuXHRcdFx0XHRib3JkZXJDb2xvcjogXCIjMmMyYzJjXCIsXG5cdFx0XHR9LFxuXHRcdFx0dGltZVNjYWxlOiB7XG5cdFx0XHRcdGJvcmRlckNvbG9yOiBcIiMyYzJjMmNcIixcblx0XHRcdH0sXG5cdFx0fSlcblxuXHRcdHNlcmllc1JlZi5jdXJyZW50ID0gY2hhcnRSZWYuY3VycmVudC5hZGRDYW5kbGVzdGlja1Nlcmllcyh7XG5cdFx0XHR1cENvbG9yOiBcIiMyNmE2OWFcIixcblx0XHRcdGRvd25Db2xvcjogXCIjZWY1MzUwXCIsXG5cdFx0XHRib3JkZXJWaXNpYmxlOiBmYWxzZSxcblx0XHRcdHdpY2tVcENvbG9yOiBcIiMyNmE2OWFcIixcblx0XHRcdHdpY2tEb3duQ29sb3I6IFwiI2VmNTM1MFwiLFxuXHRcdH0pXG5cblx0XHRzZXJpZXNSZWYuY3VycmVudC5zZXREYXRhKGludGVydmFsVHJhZGluZ0RhdGEpXG5cblx0XHRjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG5cdFx0XHRpZiAoY2hhcnRSZWYuY3VycmVudCAmJiBjaGFydENvbnRhaW5lclJlZi5jdXJyZW50KSB7XG5cdFx0XHRcdGNoYXJ0UmVmLmN1cnJlbnQuYXBwbHlPcHRpb25zKHtcblx0XHRcdFx0XHR3aWR0aDogY2hhcnRDb250YWluZXJSZWYuY3VycmVudC5jbGllbnRXaWR0aCxcblx0XHRcdFx0XHRoZWlnaHQ6IGNoYXJ0Q29udGFpbmVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0LFxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSlcblx0XHRzZXRJc0xvYWRpbmcoZmFsc2UpXG5cblx0XHRzZXRUaW1lb3V0KGhhbmRsZVJlc2l6ZSwgMSlcblxuXHRcdGNvbnN0IGVtb2ppUHJpbWl0aXZlID0gbmV3IEVtb2ppUGx1Z2luKFxuXHRcdFx0Y2hhcnRSZWYuY3VycmVudCxcblx0XHRcdHNlcmllc1JlZi5jdXJyZW50LFxuXHRcdFx0MTczNzc5MjYwMCBhcyBVVENUaW1lc3RhbXBcblx0XHQpXG5cdFx0c2VyaWVzUmVmLmN1cnJlbnQuYXR0YWNoUHJpbWl0aXZlKGVtb2ppUHJpbWl0aXZlKVxuXG5cdFx0Y29uc3QgaGFuZGxlciA9IGNoYXJ0UmVmLmN1cnJlbnQuc3Vic2NyaWJlQ3Jvc3NoYWlyTW92ZSgocGFyYW0pID0+IHtcblx0XHRcdGNvbnN0IGNhbmRsZURhdGEgPSBwYXJhbS5zZXJpZXNEYXRhLmdldChzZXJpZXNSZWYuY3VycmVudCkgYXMgT0hMQ0RhdGFcblx0XHRcdHNldEhvdmVyZWREYXRhKGNhbmRsZURhdGEpXG5cdFx0fSlcblxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpXG5cdFx0XHRjaGFydFJlZi5jdXJyZW50Py5yZW1vdmUoKVxuXHRcdFx0Y2hhcnRSZWYuY3VycmVudD8udW5zdWJzY3JpYmVDcm9zc2hhaXJNb3ZlKGhhbmRsZXIpXG5cdFx0XHRjaGFydFJlZi5jdXJyZW50ID0gbnVsbFxuXHRcdFx0c2VyaWVzUmVmLmN1cnJlbnQgPSBudWxsXG5cdFx0fVxuXHR9LCBbaW50ZXJ2YWxUcmFkaW5nRGF0YV0pXG5cblx0Ly8gVE9ETzogdXNlIHByZXYgdHJhZGluZyBkYXRhIHdoaWxlIHRoZSBuZXcgb25lIGlzIGxvYWRpbmcgaW5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAobGl2ZVRyYWRpbmdEYXRhICYmIHNlcmllc1JlZi5jdXJyZW50KSB7XG5cdFx0XHRzZXRIb3ZlcmVkRGF0YShsaXZlVHJhZGluZ0RhdGEpXG5cdFx0XHRzZXJpZXNSZWYuY3VycmVudC51cGRhdGUobGl2ZVRyYWRpbmdEYXRhKVxuXHRcdH1cblx0fSwgW2xpdmVUcmFkaW5nRGF0YV0pXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPVwiaC1bNjAwcHhdIHctZnVsbFwiXG5cdFx0XHRcdHJlZj17c2V0Tm9kZVJlZn1cblx0XHRcdD5cblx0XHRcdFx0e2lzTG9hZGluZyAmJiA8U2tlbGV0b25Mb2FkaW5nQ2hhcnQgLz59XG5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdHJlZj17Y2hhcnRDb250YWluZXJSZWZ9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtgei0wIHJlbGF0aXZlIGgtZnVsbCAke2lzTG9hZGluZyA/IFwiaGlkZGVuXCIgOiBcIlwifWB9XG5cdFx0XHRcdFx0b25EcmFnT3Zlcj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsvKiBUT0RPOiBtYWtlIGFjY3VyYXRlIHRvIGZpZ21hIChpbmNsdWRlIHRpdGxlICYgdm9sdW1lKSAqL31cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC04IGxlZnQtMiB6LTEwIHAtMiBmb250LW1vbm8gdGV4dC1zbSBwb2ludGVyLWV2ZW50cy1ub25lXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgdGV4dC1bIzI2YTY5YV1cIj5cblx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPk88L3NwYW4+e1wiIFwifVxuXHRcdFx0XHRcdFx0XHRcdHtob3ZlcmVkRGF0YT8ub3Blbi50b0ZpeGVkKDIpfVxuXHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5IPC9zcGFuPntcIiBcIn1cblx0XHRcdFx0XHRcdFx0XHR7aG92ZXJlZERhdGE/LmhpZ2gudG9GaXhlZCgyKX1cblx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+TDwvc3Bhbj57XCIgXCJ9XG5cdFx0XHRcdFx0XHRcdFx0e2hvdmVyZWREYXRhPy5sb3cudG9GaXhlZCgyKX1cblx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+Qzwvc3Bhbj57XCIgXCJ9XG5cdFx0XHRcdFx0XHRcdFx0e2hvdmVyZWREYXRhPy5jbG9zZS50b0ZpeGVkKDIpfVxuXHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFydFxuIl0sIm5hbWVzIjpbInVzZVdlYnNvY2tldCIsIkVtb2ppUGx1Z2luIiwidHJhbnNmb3JtSW50ZXJ2YWxDaGFydERhdGEiLCJ1c2VEcm9wcGFibGUiLCJjcmVhdGVDaGFydCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQ2hhcnQiLCJzZXRIb3ZlcmVkRGF0YSIsImhvdmVyZWREYXRhIiwiY2hhcnRDb250YWluZXJSZWYiLCJjaGFydFJlZiIsInNlcmllc1JlZiIsImludGVydmFsVHJhZGluZ0RhdGEiLCJzZXRJbnRlcnZhbFRyYWRpbmdEYXRhIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaXNSZWFkeSIsImxpdmVUcmFkaW5nRGF0YSIsInNldE5vZGVSZWYiLCJpZCIsImZldGNoSW50ZXJ2YWxUcmFkaW5nRGF0YSIsInJlcyIsImZldGNoIiwicmF3RGF0YSIsImpzb24iLCJmb3JtYXR0ZWREYXRhIiwiY3VycmVudCIsImxheW91dCIsImJhY2tncm91bmQiLCJ0eXBlIiwiQ29sb3JUeXBlIiwiU29saWQiLCJjb2xvciIsInRleHRDb2xvciIsImdyaWQiLCJ2ZXJ0TGluZXMiLCJob3J6TGluZXMiLCJyaWdodFByaWNlU2NhbGUiLCJib3JkZXJDb2xvciIsInRpbWVTY2FsZSIsImFkZENhbmRsZXN0aWNrU2VyaWVzIiwidXBDb2xvciIsImRvd25Db2xvciIsImJvcmRlclZpc2libGUiLCJ3aWNrVXBDb2xvciIsIndpY2tEb3duQ29sb3IiLCJzZXREYXRhIiwiaGFuZGxlUmVzaXplIiwiYXBwbHlPcHRpb25zIiwid2lkdGgiLCJjbGllbnRXaWR0aCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiZW1vamlQcmltaXRpdmUiLCJhdHRhY2hQcmltaXRpdmUiLCJoYW5kbGVyIiwic3Vic2NyaWJlQ3Jvc3NoYWlyTW92ZSIsInBhcmFtIiwiY2FuZGxlRGF0YSIsInNlcmllc0RhdGEiLCJnZXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwidW5zdWJzY3JpYmVDcm9zc2hhaXJNb3ZlIiwidXBkYXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwiU2tlbGV0b25Mb2FkaW5nQ2hhcnQiLCJvbkRyYWdPdmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicCIsInNwYW4iLCJvcGVuIiwidG9GaXhlZCIsImhpZ2giLCJsb3ciLCJjbG9zZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TradingChart/Chart.tsx\n"));

/***/ })

});