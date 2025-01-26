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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_hooks_useWebsocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/hooks/useWebsocket */ \"(app-pages-browser)/./src/app/hooks/useWebsocket.tsx\");\n/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dnd-kit/core */ \"(app-pages-browser)/./node_modules/@dnd-kit/core/dist/core.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Chart = ()=>{\n    var _hoveredData, _hoveredData1, _hoveredData2, _hoveredData3;\n    _s();\n    const chartContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const seriesRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const [intervalTradingData, setIntervalTradingData] = useState();\n    const [isReady, liveTradingData] = (0,_app_hooks_useWebsocket__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const { setNodeRef } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.useDroppable)({\n        id: \"trading-chart\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"Chart.useEffect\": ()=>{\n            async function fetchIntervalTradingData() {\n                const res = await fetch(\"https://server-mmdev.vest.exchange/v2/klines?symbol=ETH-PERP&interval=1m&limit=300\");\n                const rawData = await res.json();\n                const formattedData = transformIntervalChartData(rawData);\n                setIntervalTradingData(formattedData);\n            }\n            fetchIntervalTradingData();\n        }\n    }[\"Chart.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"Chart.useEffect\": ()=>{\n            if (!intervalTradingData || !chartContainerRef.current) {\n                setIsLoading(true);\n                return;\n            }\n            chartRef.current = createChart(chartContainerRef.current, {\n                layout: {\n                    background: {\n                        type: ColorType.Solid,\n                        color: \"#161514\"\n                    },\n                    textColor: \"#d1d4dc\"\n                },\n                grid: {\n                    vertLines: {\n                        color: \"#424242\"\n                    },\n                    horzLines: {\n                        color: \"#424242\"\n                    }\n                },\n                rightPriceScale: {\n                    borderColor: \"#2c2c2c\"\n                },\n                timeScale: {\n                    borderColor: \"#2c2c2c\"\n                }\n            });\n            seriesRef.current = chartRef.current.addCandlestickSeries({\n                upColor: \"#26a69a\",\n                downColor: \"#ef5350\",\n                borderVisible: false,\n                wickUpColor: \"#26a69a\",\n                wickDownColor: \"#ef5350\"\n            });\n            seriesRef.current.setData(intervalTradingData);\n            const handleResize = {\n                \"Chart.useEffect.handleResize\": ()=>{\n                    if (chartRef.current && chartContainerRef.current) {\n                        chartRef.current.applyOptions({\n                            width: chartContainerRef.current.clientWidth,\n                            height: chartContainerRef.current.clientHeight\n                        });\n                    }\n                }\n            }[\"Chart.useEffect.handleResize\"];\n            window.addEventListener(\"resize\", handleResize);\n            setIsLoading(false);\n            setTimeout(handleResize, 1);\n            const emojiPrimitive = new EmojiPlugin(chartRef.current, seriesRef.current, 1737792600);\n            seriesRef.current.attachPrimitive(emojiPrimitive);\n            const handler = chartRef.current.subscribeCrosshairMove({\n                \"Chart.useEffect.handler\": (param)=>{\n                    const candleData = param.seriesData.get(seriesRef.current);\n                    setHoveredData(candleData);\n                }\n            }[\"Chart.useEffect.handler\"]);\n            return ({\n                \"Chart.useEffect\": ()=>{\n                    var _chartRef_current, _chartRef_current1;\n                    window.removeEventListener(\"resize\", handleResize);\n                    (_chartRef_current = chartRef.current) === null || _chartRef_current === void 0 ? void 0 : _chartRef_current.remove();\n                    (_chartRef_current1 = chartRef.current) === null || _chartRef_current1 === void 0 ? void 0 : _chartRef_current1.unsubscribeCrosshairMove(handler);\n                    chartRef.current = null;\n                    seriesRef.current = null;\n                }\n            })[\"Chart.useEffect\"];\n        }\n    }[\"Chart.useEffect\"], [\n        intervalTradingData\n    ]);\n    // TODO: use prev trading data while the new one is loading in\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"Chart.useEffect\": ()=>{\n            if (liveTradingData && seriesRef.current) {\n                setHoveredData(liveTradingData);\n                seriesRef.current.update(liveTradingData);\n            }\n        }\n    }[\"Chart.useEffect\"], [\n        liveTradingData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-[600px] w-full\",\n            ref: setNodeRef,\n            children: [\n                isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkeletonLoadingChart, {}, void 0, false, {\n                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 19\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: chartContainerRef,\n                    className: \"z-0 relative h-full \".concat(isLoading ? \"hidden\" : \"\"),\n                    onDragOver: (e)=>e.preventDefault(),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-8 left-2 z-10 p-2 font-mono text-sm pointer-events-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-4 text-[#26a69a]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: \"O\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                            lineNumber: 124,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        \" \",\n                                        (_hoveredData = hoveredData) === null || _hoveredData === void 0 ? void 0 : _hoveredData.open.toFixed(2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 8\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: \"H\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                            lineNumber: 128,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        \" \",\n                                        (_hoveredData1 = hoveredData) === null || _hoveredData1 === void 0 ? void 0 : _hoveredData1.high.toFixed(2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                    lineNumber: 127,\n                                    columnNumber: 8\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: \"L\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                            lineNumber: 132,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        \" \",\n                                        (_hoveredData2 = hoveredData) === null || _hoveredData2 === void 0 ? void 0 : _hoveredData2.low.toFixed(2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                    lineNumber: 131,\n                                    columnNumber: 8\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: \"C\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                            lineNumber: 136,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        \" \",\n                                        (_hoveredData3 = hoveredData) === null || _hoveredData3 === void 0 ? void 0 : _hoveredData3.close.toFixed(2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                    lineNumber: 135,\n                                    columnNumber: 8\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n            lineNumber: 109,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false);\n};\n_s(Chart, \"wA+atJOu/OzP/urKDS/wvc5rBb4=\", false, function() {\n    return [\n        _app_hooks_useWebsocket__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        _dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.useDroppable\n    ];\n});\n_c = Chart;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chart);\nvar _c;\n$RefreshReg$(_c, \"Chart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UcmFkaW5nQ2hhcnQvQ2hhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1A7QUFFSDtBQUV6QyxNQUFNSSxRQUFRO1FBdUhMQyxjQUlBQSxlQUlBQSxlQUlBQTs7SUFsSVIsTUFBTUMsb0JBQW9CSCw2Q0FBTUEsQ0FBaUI7SUFDakQsTUFBTUksV0FBV0osNkNBQU1BLENBQW1CO0lBQzFDLE1BQU1LLFlBQVlMLDZDQUFNQSxDQUFtQztJQUMzRCxNQUFNLENBQUNNLHFCQUFxQkMsdUJBQXVCLEdBQUdDO0lBSXRELE1BQU0sQ0FBQ0MsU0FBU0MsZ0JBQWdCLEdBQUdiLG1FQUFZQTtJQUUvQyxNQUFNLEVBQUVjLFVBQVUsRUFBRSxHQUFHYiwyREFBWUEsQ0FBQztRQUNuQ2MsSUFBSTtJQUNMO0lBRUFiLGdEQUFTQTsyQkFBQztZQUNULGVBQWVjO2dCQUNkLE1BQU1DLE1BQU0sTUFBTUMsTUFDakI7Z0JBRUQsTUFBTUMsVUFBVSxNQUFNRixJQUFJRyxJQUFJO2dCQUM5QixNQUFNQyxnQkFBZ0JDLDJCQUEyQkg7Z0JBQ2pEVCx1QkFBdUJXO1lBQ3hCO1lBRUFMO1FBQ0Q7MEJBQUcsRUFBRTtJQUVMZCxnREFBU0E7MkJBQUM7WUFDVCxJQUFJLENBQUNPLHVCQUF1QixDQUFDSCxrQkFBa0JpQixPQUFPLEVBQUU7Z0JBQ3ZEQyxhQUFhO2dCQUNiO1lBQ0Q7WUFDQWpCLFNBQVNnQixPQUFPLEdBQUdFLFlBQVluQixrQkFBa0JpQixPQUFPLEVBQUU7Z0JBQ3pERyxRQUFRO29CQUNQQyxZQUFZO3dCQUFFQyxNQUFNQyxVQUFVQyxLQUFLO3dCQUFFQyxPQUFPO29CQUFVO29CQUN0REMsV0FBVztnQkFDWjtnQkFDQUMsTUFBTTtvQkFDTEMsV0FBVzt3QkFBRUgsT0FBTztvQkFBVTtvQkFDOUJJLFdBQVc7d0JBQUVKLE9BQU87b0JBQVU7Z0JBQy9CO2dCQUNBSyxpQkFBaUI7b0JBQ2hC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QUFBLG9DQUFBQSxjQUFhOEUsS0FBSyxDQUFDSCxPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFwQztHQTNJTTVFOztRQVE4QkosK0RBQVlBO1FBRXhCQyx1REFBWUE7OztLQVY5Qkc7QUE2SU4saUVBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGFuL1Byb2dyYW1taW5nL3Rha2Vob21lL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9UcmFkaW5nQ2hhcnQvQ2hhcnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VXZWJzb2NrZXQgZnJvbSBcIkAvYXBwL2hvb2tzL3VzZVdlYnNvY2tldFwiXG5pbXBvcnQgeyB1c2VEcm9wcGFibGUgfSBmcm9tIFwiQGRuZC1raXQvY29yZVwiXG5pbXBvcnQgeyBJQ2hhcnRBcGksIElTZXJpZXNBcGkgfSBmcm9tIFwibGlnaHR3ZWlnaHQtY2hhcnRzXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCJcblxuY29uc3QgQ2hhcnQgPSAoKSA9PiB7XG5cdGNvbnN0IGNoYXJ0Q29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuXHRjb25zdCBjaGFydFJlZiA9IHVzZVJlZjxJQ2hhcnRBcGkgfCBudWxsPihudWxsKVxuXHRjb25zdCBzZXJpZXNSZWYgPSB1c2VSZWY8SVNlcmllc0FwaTxcIkNhbmRsZXN0aWNrXCI+IHwgbnVsbD4obnVsbClcblx0Y29uc3QgW2ludGVydmFsVHJhZGluZ0RhdGEsIHNldEludGVydmFsVHJhZGluZ0RhdGFdID0gdXNlU3RhdGU8XG5cdFx0VHJhZGluZ0RhdGFbXSB8IG51bGxcblx0PigpXG5cblx0Y29uc3QgW2lzUmVhZHksIGxpdmVUcmFkaW5nRGF0YV0gPSB1c2VXZWJzb2NrZXQoKVxuXG5cdGNvbnN0IHsgc2V0Tm9kZVJlZiB9ID0gdXNlRHJvcHBhYmxlKHtcblx0XHRpZDogXCJ0cmFkaW5nLWNoYXJ0XCIsXG5cdH0pXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRhc3luYyBmdW5jdGlvbiBmZXRjaEludGVydmFsVHJhZGluZ0RhdGEoKSB7XG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcblx0XHRcdFx0XCJodHRwczovL3NlcnZlci1tbWRldi52ZXN0LmV4Y2hhbmdlL3YyL2tsaW5lcz9zeW1ib2w9RVRILVBFUlAmaW50ZXJ2YWw9MW0mbGltaXQ9MzAwXCJcblx0XHRcdClcblx0XHRcdGNvbnN0IHJhd0RhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cdFx0XHRjb25zdCBmb3JtYXR0ZWREYXRhID0gdHJhbnNmb3JtSW50ZXJ2YWxDaGFydERhdGEocmF3RGF0YSlcblx0XHRcdHNldEludGVydmFsVHJhZGluZ0RhdGEoZm9ybWF0dGVkRGF0YSlcblx0XHR9XG5cblx0XHRmZXRjaEludGVydmFsVHJhZGluZ0RhdGEoKVxuXHR9LCBbXSlcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmICghaW50ZXJ2YWxUcmFkaW5nRGF0YSB8fCAhY2hhcnRDb250YWluZXJSZWYuY3VycmVudCkge1xuXHRcdFx0c2V0SXNMb2FkaW5nKHRydWUpXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0Y2hhcnRSZWYuY3VycmVudCA9IGNyZWF0ZUNoYXJ0KGNoYXJ0Q29udGFpbmVyUmVmLmN1cnJlbnQsIHtcblx0XHRcdGxheW91dDoge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiB7IHR5cGU6IENvbG9yVHlwZS5Tb2xpZCwgY29sb3I6IFwiIzE2MTUxNFwiIH0sXG5cdFx0XHRcdHRleHRDb2xvcjogXCIjZDFkNGRjXCIsXG5cdFx0XHR9LFxuXHRcdFx0Z3JpZDoge1xuXHRcdFx0XHR2ZXJ0TGluZXM6IHsgY29sb3I6IFwiIzQyNDI0MlwiIH0sXG5cdFx0XHRcdGhvcnpMaW5lczogeyBjb2xvcjogXCIjNDI0MjQyXCIgfSxcblx0XHRcdH0sXG5cdFx0XHRyaWdodFByaWNlU2NhbGU6IHtcblx0XHRcdFx0Ym9yZGVyQ29sb3I6IFwiIzJjMmMyY1wiLFxuXHRcdFx0fSxcblx0XHRcdHRpbWVTY2FsZToge1xuXHRcdFx0XHRib3JkZXJDb2xvcjogXCIjMmMyYzJjXCIsXG5cdFx0XHR9LFxuXHRcdH0pXG5cblx0XHRzZXJpZXNSZWYuY3VycmVudCA9IGNoYXJ0UmVmLmN1cnJlbnQuYWRkQ2FuZGxlc3RpY2tTZXJpZXMoe1xuXHRcdFx0dXBDb2xvcjogXCIjMjZhNjlhXCIsXG5cdFx0XHRkb3duQ29sb3I6IFwiI2VmNTM1MFwiLFxuXHRcdFx0Ym9yZGVyVmlzaWJsZTogZmFsc2UsXG5cdFx0XHR3aWNrVXBDb2xvcjogXCIjMjZhNjlhXCIsXG5cdFx0XHR3aWNrRG93bkNvbG9yOiBcIiNlZjUzNTBcIixcblx0XHR9KVxuXG5cdFx0c2VyaWVzUmVmLmN1cnJlbnQuc2V0RGF0YShpbnRlcnZhbFRyYWRpbmdEYXRhKVxuXG5cdFx0Y29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuXHRcdFx0aWYgKGNoYXJ0UmVmLmN1cnJlbnQgJiYgY2hhcnRDb250YWluZXJSZWYuY3VycmVudCkge1xuXHRcdFx0XHRjaGFydFJlZi5jdXJyZW50LmFwcGx5T3B0aW9ucyh7XG5cdFx0XHRcdFx0d2lkdGg6IGNoYXJ0Q29udGFpbmVyUmVmLmN1cnJlbnQuY2xpZW50V2lkdGgsXG5cdFx0XHRcdFx0aGVpZ2h0OiBjaGFydENvbnRhaW5lclJlZi5jdXJyZW50LmNsaWVudEhlaWdodCxcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpXG5cdFx0c2V0SXNMb2FkaW5nKGZhbHNlKVxuXG5cdFx0c2V0VGltZW91dChoYW5kbGVSZXNpemUsIDEpXG5cblx0XHRjb25zdCBlbW9qaVByaW1pdGl2ZSA9IG5ldyBFbW9qaVBsdWdpbihcblx0XHRcdGNoYXJ0UmVmLmN1cnJlbnQsXG5cdFx0XHRzZXJpZXNSZWYuY3VycmVudCxcblx0XHRcdDE3Mzc3OTI2MDAgYXMgVVRDVGltZXN0YW1wXG5cdFx0KVxuXHRcdHNlcmllc1JlZi5jdXJyZW50LmF0dGFjaFByaW1pdGl2ZShlbW9qaVByaW1pdGl2ZSlcblxuXHRcdGNvbnN0IGhhbmRsZXIgPSBjaGFydFJlZi5jdXJyZW50LnN1YnNjcmliZUNyb3NzaGFpck1vdmUoKHBhcmFtKSA9PiB7XG5cdFx0XHRjb25zdCBjYW5kbGVEYXRhID0gcGFyYW0uc2VyaWVzRGF0YS5nZXQoc2VyaWVzUmVmLmN1cnJlbnQpIGFzIE9ITENEYXRhXG5cdFx0XHRzZXRIb3ZlcmVkRGF0YShjYW5kbGVEYXRhKVxuXHRcdH0pXG5cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKVxuXHRcdFx0Y2hhcnRSZWYuY3VycmVudD8ucmVtb3ZlKClcblx0XHRcdGNoYXJ0UmVmLmN1cnJlbnQ/LnVuc3Vic2NyaWJlQ3Jvc3NoYWlyTW92ZShoYW5kbGVyKVxuXHRcdFx0Y2hhcnRSZWYuY3VycmVudCA9IG51bGxcblx0XHRcdHNlcmllc1JlZi5jdXJyZW50ID0gbnVsbFxuXHRcdH1cblx0fSwgW2ludGVydmFsVHJhZGluZ0RhdGFdKVxuXG5cdC8vIFRPRE86IHVzZSBwcmV2IHRyYWRpbmcgZGF0YSB3aGlsZSB0aGUgbmV3IG9uZSBpcyBsb2FkaW5nIGluXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGxpdmVUcmFkaW5nRGF0YSAmJiBzZXJpZXNSZWYuY3VycmVudCkge1xuXHRcdFx0c2V0SG92ZXJlZERhdGEobGl2ZVRyYWRpbmdEYXRhKVxuXHRcdFx0c2VyaWVzUmVmLmN1cnJlbnQudXBkYXRlKGxpdmVUcmFkaW5nRGF0YSlcblx0XHR9XG5cdH0sIFtsaXZlVHJhZGluZ0RhdGFdKVxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT1cImgtWzYwMHB4XSB3LWZ1bGxcIlxuXHRcdFx0XHRyZWY9e3NldE5vZGVSZWZ9XG5cdFx0XHQ+XG5cdFx0XHRcdHtpc0xvYWRpbmcgJiYgPFNrZWxldG9uTG9hZGluZ0NoYXJ0IC8+fVxuXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRyZWY9e2NoYXJ0Q29udGFpbmVyUmVmfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YHotMCByZWxhdGl2ZSBoLWZ1bGwgJHtpc0xvYWRpbmcgPyBcImhpZGRlblwiIDogXCJcIn1gfVxuXHRcdFx0XHRcdG9uRHJhZ092ZXI9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7LyogVE9ETzogbWFrZSBhY2N1cmF0ZSB0byBmaWdtYSAoaW5jbHVkZSB0aXRsZSAmIHZvbHVtZSkgKi99XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtOCBsZWZ0LTIgei0xMCBwLTIgZm9udC1tb25vIHRleHQtc20gcG9pbnRlci1ldmVudHMtbm9uZVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00IHRleHQtWyMyNmE2OWFdXCI+XG5cdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5PPC9zcGFuPntcIiBcIn1cblx0XHRcdFx0XHRcdFx0XHR7aG92ZXJlZERhdGE/Lm9wZW4udG9GaXhlZCgyKX1cblx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+SDwvc3Bhbj57XCIgXCJ9XG5cdFx0XHRcdFx0XHRcdFx0e2hvdmVyZWREYXRhPy5oaWdoLnRvRml4ZWQoMil9XG5cdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkw8L3NwYW4+e1wiIFwifVxuXHRcdFx0XHRcdFx0XHRcdHtob3ZlcmVkRGF0YT8ubG93LnRvRml4ZWQoMil9XG5cdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkM8L3NwYW4+e1wiIFwifVxuXHRcdFx0XHRcdFx0XHRcdHtob3ZlcmVkRGF0YT8uY2xvc2UudG9GaXhlZCgyKX1cblx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnRcbiJdLCJuYW1lcyI6WyJ1c2VXZWJzb2NrZXQiLCJ1c2VEcm9wcGFibGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJDaGFydCIsImhvdmVyZWREYXRhIiwiY2hhcnRDb250YWluZXJSZWYiLCJjaGFydFJlZiIsInNlcmllc1JlZiIsImludGVydmFsVHJhZGluZ0RhdGEiLCJzZXRJbnRlcnZhbFRyYWRpbmdEYXRhIiwidXNlU3RhdGUiLCJpc1JlYWR5IiwibGl2ZVRyYWRpbmdEYXRhIiwic2V0Tm9kZVJlZiIsImlkIiwiZmV0Y2hJbnRlcnZhbFRyYWRpbmdEYXRhIiwicmVzIiwiZmV0Y2giLCJyYXdEYXRhIiwianNvbiIsImZvcm1hdHRlZERhdGEiLCJ0cmFuc2Zvcm1JbnRlcnZhbENoYXJ0RGF0YSIsImN1cnJlbnQiLCJzZXRJc0xvYWRpbmciLCJjcmVhdGVDaGFydCIsImxheW91dCIsImJhY2tncm91bmQiLCJ0eXBlIiwiQ29sb3JUeXBlIiwiU29saWQiLCJjb2xvciIsInRleHRDb2xvciIsImdyaWQiLCJ2ZXJ0TGluZXMiLCJob3J6TGluZXMiLCJyaWdodFByaWNlU2NhbGUiLCJib3JkZXJDb2xvciIsInRpbWVTY2FsZSIsImFkZENhbmRsZXN0aWNrU2VyaWVzIiwidXBDb2xvciIsImRvd25Db2xvciIsImJvcmRlclZpc2libGUiLCJ3aWNrVXBDb2xvciIsIndpY2tEb3duQ29sb3IiLCJzZXREYXRhIiwiaGFuZGxlUmVzaXplIiwiYXBwbHlPcHRpb25zIiwid2lkdGgiLCJjbGllbnRXaWR0aCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiZW1vamlQcmltaXRpdmUiLCJFbW9qaVBsdWdpbiIsImF0dGFjaFByaW1pdGl2ZSIsImhhbmRsZXIiLCJzdWJzY3JpYmVDcm9zc2hhaXJNb3ZlIiwicGFyYW0iLCJjYW5kbGVEYXRhIiwic2VyaWVzRGF0YSIsImdldCIsInNldEhvdmVyZWREYXRhIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsInVuc3Vic2NyaWJlQ3Jvc3NoYWlyTW92ZSIsInVwZGF0ZSIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsImlzTG9hZGluZyIsIlNrZWxldG9uTG9hZGluZ0NoYXJ0Iiwib25EcmFnT3ZlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInAiLCJzcGFuIiwib3BlbiIsInRvRml4ZWQiLCJoaWdoIiwibG93IiwiY2xvc2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TradingChart/Chart.tsx\n"));

/***/ })

});