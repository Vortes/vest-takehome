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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_hooks_useWebsocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/hooks/useWebsocket */ \"(app-pages-browser)/./src/app/hooks/useWebsocket.tsx\");\n/* harmony import */ var _app_utils_emoji_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/utils/emoji-plugin */ \"(app-pages-browser)/./src/app/utils/emoji-plugin.ts\");\n/* harmony import */ var _app_utils_transform_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/utils/transform-chart */ \"(app-pages-browser)/./src/app/utils/transform-chart.ts\");\n/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dnd-kit/core */ \"(app-pages-browser)/./node_modules/@dnd-kit/core/dist/core.esm.js\");\n/* harmony import */ var lightweight_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lightweight-charts */ \"(app-pages-browser)/./node_modules/lightweight-charts/dist/lightweight-charts.development.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _SkeletonLoadingChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SkeletonLoadingChart */ \"(app-pages-browser)/./src/app/components/SkeletonLoadingChart.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Chart = (param)=>{\n    let { hoveredData, setHoveredData, emojiTimestamp } = param;\n    _s();\n    const chartContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);\n    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);\n    const seriesRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);\n    const [intervalTradingData, setIntervalTradingData] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);\n    const [isReady, liveTradingData] = (0,_app_hooks_useWebsocket__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const { setNodeRef } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.useDroppable)({\n        id: \"trading-chart\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)({\n        \"Chart.useEffect\": ()=>{\n            async function fetchIntervalTradingData() {\n                const res = await fetch(\"https://server-mmdev.vest.exchange/v2/klines?symbol=ETH-PERP&interval=1m&limit=300\");\n                const rawData = await res.json();\n                const formattedData = (0,_app_utils_transform_chart__WEBPACK_IMPORTED_MODULE_3__.transformIntervalChartData)(rawData);\n                setIntervalTradingData(formattedData);\n            }\n            fetchIntervalTradingData();\n        }\n    }[\"Chart.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)({\n        \"Chart.useEffect\": ()=>{\n            if (!intervalTradingData || !chartContainerRef.current) {\n                setIsLoading(true);\n                return;\n            }\n            chartRef.current = (0,lightweight_charts__WEBPACK_IMPORTED_MODULE_5__.createChart)(chartContainerRef.current, {\n                layout: {\n                    background: {\n                        type: lightweight_charts__WEBPACK_IMPORTED_MODULE_5__.ColorType.Solid,\n                        color: \"#161514\"\n                    },\n                    textColor: \"#d1d4dc\"\n                },\n                grid: {\n                    vertLines: {\n                        color: \"#424242\"\n                    },\n                    horzLines: {\n                        color: \"#424242\"\n                    }\n                },\n                rightPriceScale: {\n                    borderColor: \"#2c2c2c\"\n                },\n                timeScale: {\n                    borderColor: \"#2c2c2c\"\n                }\n            });\n            seriesRef.current = chartRef.current.addCandlestickSeries({\n                upColor: \"#26a69a\",\n                downColor: \"#ef5350\",\n                borderVisible: false,\n                wickUpColor: \"#26a69a\",\n                wickDownColor: \"#ef5350\"\n            });\n            seriesRef.current.setData(intervalTradingData);\n            const handleResize = {\n                \"Chart.useEffect.handleResize\": ()=>{\n                    if (chartRef.current && chartContainerRef.current) {\n                        chartRef.current.applyOptions({\n                            width: chartContainerRef.current.clientWidth,\n                            height: chartContainerRef.current.clientHeight\n                        });\n                    }\n                }\n            }[\"Chart.useEffect.handleResize\"];\n            window.addEventListener(\"resize\", handleResize);\n            setIsLoading(false);\n            setTimeout(handleResize, 1);\n            const handler = chartRef.current.subscribeCrosshairMove({\n                \"Chart.useEffect.handler\": (param)=>{\n                    const candleData = param.seriesData.get(seriesRef.current);\n                    setHoveredData(candleData);\n                }\n            }[\"Chart.useEffect.handler\"]);\n            return ({\n                \"Chart.useEffect\": ()=>{\n                    var _chartRef_current, _chartRef_current1;\n                    window.removeEventListener(\"resize\", handleResize);\n                    (_chartRef_current = chartRef.current) === null || _chartRef_current === void 0 ? void 0 : _chartRef_current.remove();\n                    (_chartRef_current1 = chartRef.current) === null || _chartRef_current1 === void 0 ? void 0 : _chartRef_current1.unsubscribeCrosshairMove(handler);\n                    chartRef.current = null;\n                    seriesRef.current = null;\n                }\n            })[\"Chart.useEffect\"];\n        }\n    }[\"Chart.useEffect\"], [\n        intervalTradingData,\n        setHoveredData\n    ]);\n    //TODO: find out a more efficient way to do this lol\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)({\n        \"Chart.useEffect\": ()=>{\n            if (!chartContainerRef.current || !seriesRef.current || !chartRef.current) return;\n            const emojiPrimitive = new _app_utils_emoji_plugin__WEBPACK_IMPORTED_MODULE_2__.EmojiPlugin(chartRef.current, seriesRef.current, emojiTimestamp);\n            seriesRef.current.attachPrimitive(emojiPrimitive);\n        }\n    }[\"Chart.useEffect\"], [\n        emojiTimestamp\n    ]);\n    // TODO: use prev trading data while the new one is loading in\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)({\n        \"Chart.useEffect\": ()=>{\n            if (liveTradingData && seriesRef.current) {\n                setHoveredData(liveTradingData);\n                seriesRef.current.update(liveTradingData);\n            }\n        }\n    }[\"Chart.useEffect\"], [\n        liveTradingData,\n        setHoveredData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-[600px] w-full\",\n            ref: setNodeRef,\n            children: [\n                isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SkeletonLoadingChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                    lineNumber: 150,\n                    columnNumber: 19\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: chartContainerRef,\n                    className: \"z-0 relative h-full \".concat(isLoading ? \"hidden\" : \"\"),\n                    onDragOver: (e)=>e.preventDefault(),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-8 left-2 z-10 p-2 font-mono text-sm pointer-events-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-4 text-[#26a69a]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: \"O\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                            lineNumber: 161,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        \" \",\n                                        hoveredData === null || hoveredData === void 0 ? void 0 : hoveredData.open.toFixed(2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                    lineNumber: 160,\n                                    columnNumber: 8\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: \"H\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                            lineNumber: 165,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        \" \",\n                                        hoveredData === null || hoveredData === void 0 ? void 0 : hoveredData.high.toFixed(2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                    lineNumber: 164,\n                                    columnNumber: 8\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: \"L\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                            lineNumber: 169,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        \" \",\n                                        hoveredData === null || hoveredData === void 0 ? void 0 : hoveredData.low.toFixed(2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                    lineNumber: 168,\n                                    columnNumber: 8\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: \"C\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                            lineNumber: 173,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        \" \",\n                                        hoveredData === null || hoveredData === void 0 ? void 0 : hoveredData.close.toFixed(2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                    lineNumber: 172,\n                                    columnNumber: 8\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                            lineNumber: 159,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                        lineNumber: 158,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                    lineNumber: 152,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n            lineNumber: 146,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false);\n};\n_s(Chart, \"jS+YSu82WTORtOiaD7SpGhforIg=\", false, function() {\n    return [\n        _app_hooks_useWebsocket__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        _dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.useDroppable\n    ];\n});\n_c = Chart;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chart);\nvar _c;\n$RefreshReg$(_c, \"Chart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UcmFkaW5nQ2hhcnQvQ2hhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNHO0FBSWxCO0FBQ1E7QUFPakI7QUFRYjtBQUM0QztBQVMxRCxNQUFNVSxRQUF3QjtRQUFDLEVBQzlCQyxXQUFXLEVBQ1hDLGNBQWMsRUFDZEMsY0FBYyxFQUNkOztJQUNBLE1BQU1DLG9CQUFvQlAsNkNBQU1BLENBQWlCO0lBQ2pELE1BQU1RLFdBQVdSLDZDQUFNQSxDQUFtQjtJQUMxQyxNQUFNUyxZQUFZVCw2Q0FBTUEsQ0FBbUM7SUFFM0QsTUFBTSxDQUFDVSxxQkFBcUJDLHVCQUF1QixHQUFHViwrQ0FBUUE7SUFHOUQsTUFBTSxDQUFDVyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU0sQ0FBQ2EsU0FBU0MsZ0JBQWdCLEdBQUd0QixtRUFBWUE7SUFFL0MsTUFBTSxFQUFFdUIsVUFBVSxFQUFFLEdBQUdwQiwyREFBWUEsQ0FBQztRQUNuQ3FCLElBQUk7SUFDTDtJQUVBbEIsZ0RBQVNBOzJCQUFDO1lBQ1QsZUFBZW1CO2dCQUNkLE1BQU1DLE1BQU0sTUFBTUMsTUFDakI7Z0JBRUQsTUFBTUMsVUFBVSxNQUFNRixJQUFJRyxJQUFJO2dCQUM5QixNQUFNQyxnQkFBZ0I1QixzRkFBMEJBLENBQUMwQjtnQkFDakRWLHVCQUF1Qlk7WUFDeEI7WUFFQUw7UUFDRDswQkFBRyxFQUFFO0lBRUxuQixnREFBU0E7MkJBQUM7WUFDVCxJQUFJLENBQUNXLHVCQUF1QixDQUFDSCxrQkFBa0JpQixPQUFPLEVBQUU7Z0JBQ3ZEWCxhQUFhO2dCQUNiO1lBQ0Q7WUFDQUwsU0FBU2dCLE9BQU8sR0FBRzFCLCtEQUFXQSxDQUFDUyxrQkFBa0JpQixPQUFPLEVBQUU7Z0JBQ3pEQyxRQUFRO29CQUNQQyxZQUFZO3dCQUFFQyxNQUFNOUIseURBQVNBLENBQUMrQixLQUFLO3dCQUFFQyxP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Q0M7NENBQUtOLFdBQVU7c0RBQWE7Ozs7Ozt3Q0FBUzt3Q0FDckM5RCx3QkFBQUEsa0NBQUFBLFlBQWF1RSxJQUFJLENBQUNELE9BQU8sQ0FBQzs7Ozs7Ozs4Q0FFNUIsOERBQUNIOztzREFDQSw4REFBQ0M7NENBQUtOLFdBQVU7c0RBQWE7Ozs7Ozt3Q0FBUzt3Q0FDckM5RCx3QkFBQUEsa0NBQUFBLFlBQWF3RSxHQUFHLENBQUNGLE9BQU8sQ0FBQzs7Ozs7Ozs4Q0FFM0IsOERBQUNIOztzREFDQSw4REFBQ0M7NENBQUtOLFdBQVU7c0RBQWE7Ozs7Ozt3Q0FBUzt3Q0FDckM5RCx3QkFBQUEsa0NBQUFBLFlBQWF5RSxLQUFLLENBQUNILE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXBDO0dBdEpNdkU7O1FBYzhCViwrREFBWUE7UUFFeEJHLHVEQUFZQTs7O0tBaEI5Qk87QUF3Sk4saUVBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGFuL1Byb2dyYW1taW5nL3Rha2Vob21lL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9UcmFkaW5nQ2hhcnQvQ2hhcnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VXZWJzb2NrZXQgZnJvbSBcIkAvYXBwL2hvb2tzL3VzZVdlYnNvY2tldFwiXG5pbXBvcnQgeyBFbW9qaVBsdWdpbiB9IGZyb20gXCJAL2FwcC91dGlscy9lbW9qaS1wbHVnaW5cIlxuaW1wb3J0IHtcblx0VHJhZGluZ0RhdGEsXG5cdHRyYW5zZm9ybUludGVydmFsQ2hhcnREYXRhLFxufSBmcm9tIFwiQC9hcHAvdXRpbHMvdHJhbnNmb3JtLWNoYXJ0XCJcbmltcG9ydCB7IHVzZURyb3BwYWJsZSB9IGZyb20gXCJAZG5kLWtpdC9jb3JlXCJcbmltcG9ydCB7XG5cdENvbG9yVHlwZSxcblx0Y3JlYXRlQ2hhcnQsXG5cdElDaGFydEFwaSxcblx0SVNlcmllc0FwaSxcblx0VVRDVGltZXN0YW1wLFxufSBmcm9tIFwibGlnaHR3ZWlnaHQtY2hhcnRzXCJcbmltcG9ydCB7XG5cdERpc3BhdGNoLFxuXHRGQyxcblx0U2V0U3RhdGVBY3Rpb24sXG5cdHVzZUVmZmVjdCxcblx0dXNlUmVmLFxuXHR1c2VTdGF0ZSxcbn0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBTa2VsZXRvbkxvYWRpbmdDaGFydCBmcm9tIFwiLi4vU2tlbGV0b25Mb2FkaW5nQ2hhcnRcIlxuaW1wb3J0IHsgT0hMQ0RhdGEgfSBmcm9tIFwiLlwiXG5cbmludGVyZmFjZSBDaGFydFByb3BzIHtcblx0aG92ZXJlZERhdGE6IE9ITENEYXRhIHwgdW5kZWZpbmVkXG5cdHNldEhvdmVyZWREYXRhOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxPSExDRGF0YSB8IHVuZGVmaW5lZD4+XG5cdGVtb2ppVGltZXN0YW1wOiBudW1iZXIgfCBudWxsXG59XG5cbmNvbnN0IENoYXJ0OiBGQzxDaGFydFByb3BzPiA9ICh7XG5cdGhvdmVyZWREYXRhLFxuXHRzZXRIb3ZlcmVkRGF0YSxcblx0ZW1vamlUaW1lc3RhbXAsXG59KSA9PiB7XG5cdGNvbnN0IGNoYXJ0Q29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuXHRjb25zdCBjaGFydFJlZiA9IHVzZVJlZjxJQ2hhcnRBcGkgfCBudWxsPihudWxsKVxuXHRjb25zdCBzZXJpZXNSZWYgPSB1c2VSZWY8SVNlcmllc0FwaTxcIkNhbmRsZXN0aWNrXCI+IHwgbnVsbD4obnVsbClcblxuXHRjb25zdCBbaW50ZXJ2YWxUcmFkaW5nRGF0YSwgc2V0SW50ZXJ2YWxUcmFkaW5nRGF0YV0gPSB1c2VTdGF0ZTxcblx0XHRUcmFkaW5nRGF0YVtdIHwgbnVsbFxuXHQ+KClcblx0Y29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cblx0Y29uc3QgW2lzUmVhZHksIGxpdmVUcmFkaW5nRGF0YV0gPSB1c2VXZWJzb2NrZXQoKVxuXG5cdGNvbnN0IHsgc2V0Tm9kZVJlZiB9ID0gdXNlRHJvcHBhYmxlKHtcblx0XHRpZDogXCJ0cmFkaW5nLWNoYXJ0XCIsXG5cdH0pXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRhc3luYyBmdW5jdGlvbiBmZXRjaEludGVydmFsVHJhZGluZ0RhdGEoKSB7XG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcblx0XHRcdFx0XCJodHRwczovL3NlcnZlci1tbWRldi52ZXN0LmV4Y2hhbmdlL3YyL2tsaW5lcz9zeW1ib2w9RVRILVBFUlAmaW50ZXJ2YWw9MW0mbGltaXQ9MzAwXCJcblx0XHRcdClcblx0XHRcdGNvbnN0IHJhd0RhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cdFx0XHRjb25zdCBmb3JtYXR0ZWREYXRhID0gdHJhbnNmb3JtSW50ZXJ2YWxDaGFydERhdGEocmF3RGF0YSlcblx0XHRcdHNldEludGVydmFsVHJhZGluZ0RhdGEoZm9ybWF0dGVkRGF0YSlcblx0XHR9XG5cblx0XHRmZXRjaEludGVydmFsVHJhZGluZ0RhdGEoKVxuXHR9LCBbXSlcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmICghaW50ZXJ2YWxUcmFkaW5nRGF0YSB8fCAhY2hhcnRDb250YWluZXJSZWYuY3VycmVudCkge1xuXHRcdFx0c2V0SXNMb2FkaW5nKHRydWUpXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0Y2hhcnRSZWYuY3VycmVudCA9IGNyZWF0ZUNoYXJ0KGNoYXJ0Q29udGFpbmVyUmVmLmN1cnJlbnQsIHtcblx0XHRcdGxheW91dDoge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiB7IHR5cGU6IENvbG9yVHlwZS5Tb2xpZCwgY29sb3I6IFwiIzE2MTUxNFwiIH0sXG5cdFx0XHRcdHRleHRDb2xvcjogXCIjZDFkNGRjXCIsXG5cdFx0XHR9LFxuXHRcdFx0Z3JpZDoge1xuXHRcdFx0XHR2ZXJ0TGluZXM6IHsgY29sb3I6IFwiIzQyNDI0MlwiIH0sXG5cdFx0XHRcdGhvcnpMaW5lczogeyBjb2xvcjogXCIjNDI0MjQyXCIgfSxcblx0XHRcdH0sXG5cdFx0XHRyaWdodFByaWNlU2NhbGU6IHtcblx0XHRcdFx0Ym9yZGVyQ29sb3I6IFwiIzJjMmMyY1wiLFxuXHRcdFx0fSxcblx0XHRcdHRpbWVTY2FsZToge1xuXHRcdFx0XHRib3JkZXJDb2xvcjogXCIjMmMyYzJjXCIsXG5cdFx0XHR9LFxuXHRcdH0pXG5cblx0XHRzZXJpZXNSZWYuY3VycmVudCA9IGNoYXJ0UmVmLmN1cnJlbnQuYWRkQ2FuZGxlc3RpY2tTZXJpZXMoe1xuXHRcdFx0dXBDb2xvcjogXCIjMjZhNjlhXCIsXG5cdFx0XHRkb3duQ29sb3I6IFwiI2VmNTM1MFwiLFxuXHRcdFx0Ym9yZGVyVmlzaWJsZTogZmFsc2UsXG5cdFx0XHR3aWNrVXBDb2xvcjogXCIjMjZhNjlhXCIsXG5cdFx0XHR3aWNrRG93bkNvbG9yOiBcIiNlZjUzNTBcIixcblx0XHR9KVxuXG5cdFx0c2VyaWVzUmVmLmN1cnJlbnQuc2V0RGF0YShpbnRlcnZhbFRyYWRpbmdEYXRhKVxuXG5cdFx0Y29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuXHRcdFx0aWYgKGNoYXJ0UmVmLmN1cnJlbnQgJiYgY2hhcnRDb250YWluZXJSZWYuY3VycmVudCkge1xuXHRcdFx0XHRjaGFydFJlZi5jdXJyZW50LmFwcGx5T3B0aW9ucyh7XG5cdFx0XHRcdFx0d2lkdGg6IGNoYXJ0Q29udGFpbmVyUmVmLmN1cnJlbnQuY2xpZW50V2lkdGgsXG5cdFx0XHRcdFx0aGVpZ2h0OiBjaGFydENvbnRhaW5lclJlZi5jdXJyZW50LmNsaWVudEhlaWdodCxcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpXG5cdFx0c2V0SXNMb2FkaW5nKGZhbHNlKVxuXG5cdFx0c2V0VGltZW91dChoYW5kbGVSZXNpemUsIDEpXG5cblx0XHRjb25zdCBoYW5kbGVyID0gY2hhcnRSZWYuY3VycmVudC5zdWJzY3JpYmVDcm9zc2hhaXJNb3ZlKChwYXJhbSkgPT4ge1xuXHRcdFx0Y29uc3QgY2FuZGxlRGF0YSA9IHBhcmFtLnNlcmllc0RhdGEuZ2V0KHNlcmllc1JlZi5jdXJyZW50KSBhcyBPSExDRGF0YVxuXHRcdFx0c2V0SG92ZXJlZERhdGEoY2FuZGxlRGF0YSlcblx0XHR9KVxuXG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSlcblx0XHRcdGNoYXJ0UmVmLmN1cnJlbnQ/LnJlbW92ZSgpXG5cdFx0XHRjaGFydFJlZi5jdXJyZW50Py51bnN1YnNjcmliZUNyb3NzaGFpck1vdmUoaGFuZGxlcilcblx0XHRcdGNoYXJ0UmVmLmN1cnJlbnQgPSBudWxsXG5cdFx0XHRzZXJpZXNSZWYuY3VycmVudCA9IG51bGxcblx0XHR9XG5cdH0sIFtpbnRlcnZhbFRyYWRpbmdEYXRhLCBzZXRIb3ZlcmVkRGF0YV0pXG5cblx0Ly9UT0RPOiBmaW5kIG91dCBhIG1vcmUgZWZmaWNpZW50IHdheSB0byBkbyB0aGlzIGxvbFxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmICghY2hhcnRDb250YWluZXJSZWYuY3VycmVudCB8fCAhc2VyaWVzUmVmLmN1cnJlbnQgfHwgIWNoYXJ0UmVmLmN1cnJlbnQpXG5cdFx0XHRyZXR1cm5cblx0XHRjb25zdCBlbW9qaVByaW1pdGl2ZSA9IG5ldyBFbW9qaVBsdWdpbihcblx0XHRcdGNoYXJ0UmVmLmN1cnJlbnQsXG5cdFx0XHRzZXJpZXNSZWYuY3VycmVudCxcblx0XHRcdGVtb2ppVGltZXN0YW1wIGFzIFVUQ1RpbWVzdGFtcFxuXHRcdClcblx0XHRzZXJpZXNSZWYuY3VycmVudC5hdHRhY2hQcmltaXRpdmUoZW1vamlQcmltaXRpdmUpXG5cdH0sIFtlbW9qaVRpbWVzdGFtcF0pXG5cblx0Ly8gVE9ETzogdXNlIHByZXYgdHJhZGluZyBkYXRhIHdoaWxlIHRoZSBuZXcgb25lIGlzIGxvYWRpbmcgaW5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAobGl2ZVRyYWRpbmdEYXRhICYmIHNlcmllc1JlZi5jdXJyZW50KSB7XG5cdFx0XHRzZXRIb3ZlcmVkRGF0YShsaXZlVHJhZGluZ0RhdGEpXG5cdFx0XHRzZXJpZXNSZWYuY3VycmVudC51cGRhdGUobGl2ZVRyYWRpbmdEYXRhKVxuXHRcdH1cblx0fSwgW2xpdmVUcmFkaW5nRGF0YSwgc2V0SG92ZXJlZERhdGFdKVxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT1cImgtWzYwMHB4XSB3LWZ1bGxcIlxuXHRcdFx0XHRyZWY9e3NldE5vZGVSZWZ9XG5cdFx0XHQ+XG5cdFx0XHRcdHtpc0xvYWRpbmcgJiYgPFNrZWxldG9uTG9hZGluZ0NoYXJ0IC8+fVxuXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRyZWY9e2NoYXJ0Q29udGFpbmVyUmVmfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YHotMCByZWxhdGl2ZSBoLWZ1bGwgJHtpc0xvYWRpbmcgPyBcImhpZGRlblwiIDogXCJcIn1gfVxuXHRcdFx0XHRcdG9uRHJhZ092ZXI9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7LyogVE9ETzogbWFrZSBhY2N1cmF0ZSB0byBmaWdtYSAoaW5jbHVkZSB0aXRsZSAmIHZvbHVtZSkgKi99XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtOCBsZWZ0LTIgei0xMCBwLTIgZm9udC1tb25vIHRleHQtc20gcG9pbnRlci1ldmVudHMtbm9uZVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00IHRleHQtWyMyNmE2OWFdXCI+XG5cdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5PPC9zcGFuPntcIiBcIn1cblx0XHRcdFx0XHRcdFx0XHR7aG92ZXJlZERhdGE/Lm9wZW4udG9GaXhlZCgyKX1cblx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+SDwvc3Bhbj57XCIgXCJ9XG5cdFx0XHRcdFx0XHRcdFx0e2hvdmVyZWREYXRhPy5oaWdoLnRvRml4ZWQoMil9XG5cdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkw8L3NwYW4+e1wiIFwifVxuXHRcdFx0XHRcdFx0XHRcdHtob3ZlcmVkRGF0YT8ubG93LnRvRml4ZWQoMil9XG5cdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkM8L3NwYW4+e1wiIFwifVxuXHRcdFx0XHRcdFx0XHRcdHtob3ZlcmVkRGF0YT8uY2xvc2UudG9GaXhlZCgyKX1cblx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnRcbiJdLCJuYW1lcyI6WyJ1c2VXZWJzb2NrZXQiLCJFbW9qaVBsdWdpbiIsInRyYW5zZm9ybUludGVydmFsQ2hhcnREYXRhIiwidXNlRHJvcHBhYmxlIiwiQ29sb3JUeXBlIiwiY3JlYXRlQ2hhcnQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlNrZWxldG9uTG9hZGluZ0NoYXJ0IiwiQ2hhcnQiLCJob3ZlcmVkRGF0YSIsInNldEhvdmVyZWREYXRhIiwiZW1vamlUaW1lc3RhbXAiLCJjaGFydENvbnRhaW5lclJlZiIsImNoYXJ0UmVmIiwic2VyaWVzUmVmIiwiaW50ZXJ2YWxUcmFkaW5nRGF0YSIsInNldEludGVydmFsVHJhZGluZ0RhdGEiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc1JlYWR5IiwibGl2ZVRyYWRpbmdEYXRhIiwic2V0Tm9kZVJlZiIsImlkIiwiZmV0Y2hJbnRlcnZhbFRyYWRpbmdEYXRhIiwicmVzIiwiZmV0Y2giLCJyYXdEYXRhIiwianNvbiIsImZvcm1hdHRlZERhdGEiLCJjdXJyZW50IiwibGF5b3V0IiwiYmFja2dyb3VuZCIsInR5cGUiLCJTb2xpZCIsImNvbG9yIiwidGV4dENvbG9yIiwiZ3JpZCIsInZlcnRMaW5lcyIsImhvcnpMaW5lcyIsInJpZ2h0UHJpY2VTY2FsZSIsImJvcmRlckNvbG9yIiwidGltZVNjYWxlIiwiYWRkQ2FuZGxlc3RpY2tTZXJpZXMiLCJ1cENvbG9yIiwiZG93bkNvbG9yIiwiYm9yZGVyVmlzaWJsZSIsIndpY2tVcENvbG9yIiwid2lja0Rvd25Db2xvciIsInNldERhdGEiLCJoYW5kbGVSZXNpemUiLCJhcHBseU9wdGlvbnMiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJoYW5kbGVyIiwic3Vic2NyaWJlQ3Jvc3NoYWlyTW92ZSIsInBhcmFtIiwiY2FuZGxlRGF0YSIsInNlcmllc0RhdGEiLCJnZXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwidW5zdWJzY3JpYmVDcm9zc2hhaXJNb3ZlIiwiZW1vamlQcmltaXRpdmUiLCJhdHRhY2hQcmltaXRpdmUiLCJ1cGRhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJvbkRyYWdPdmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicCIsInNwYW4iLCJvcGVuIiwidG9GaXhlZCIsImhpZ2giLCJsb3ciLCJjbG9zZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TradingChart/Chart.tsx\n"));

/***/ })

});