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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_hooks_useWebsocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/hooks/useWebsocket */ \"(app-pages-browser)/./src/app/hooks/useWebsocket.tsx\");\n/* harmony import */ var _app_utils_emoji_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/utils/emoji-plugin */ \"(app-pages-browser)/./src/app/utils/emoji-plugin.ts\");\n/* harmony import */ var _app_utils_transform_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/utils/transform-chart */ \"(app-pages-browser)/./src/app/utils/transform-chart.ts\");\n/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dnd-kit/core */ \"(app-pages-browser)/./node_modules/@dnd-kit/core/dist/core.esm.js\");\n/* harmony import */ var lightweight_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lightweight-charts */ \"(app-pages-browser)/./node_modules/lightweight-charts/dist/lightweight-charts.development.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _SkeletonLoadingChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SkeletonLoadingChart */ \"(app-pages-browser)/./src/app/components/SkeletonLoadingChart.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Chart = (param)=>{\n    let { hoveredData, setHoveredData, emojiTimestamp, emojiTopPosition, selectedEmoji } = param;\n    _s();\n    const chartContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);\n    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);\n    const seriesRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);\n    const [intervalTradingData, setIntervalTradingData] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);\n    const [isReady, liveTradingData] = (0,_app_hooks_useWebsocket__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const { setNodeRef } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.useDroppable)({\n        id: \"trading-chart\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)({\n        \"Chart.useEffect\": ()=>{\n            async function fetchIntervalTradingData() {\n                const res = await fetch(\"https://server-mmdev.vest.exchange/v2/klines?symbol=ETH-PERP&interval=1m&limit=300\");\n                const rawData = await res.json();\n                const formattedData = (0,_app_utils_transform_chart__WEBPACK_IMPORTED_MODULE_3__.transformIntervalChartData)(rawData);\n                setIntervalTradingData(formattedData);\n            }\n            fetchIntervalTradingData();\n        }\n    }[\"Chart.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)({\n        \"Chart.useEffect\": ()=>{\n            if (!intervalTradingData || !chartContainerRef.current) {\n                setIsLoading(true);\n                return;\n            }\n            chartRef.current = (0,lightweight_charts__WEBPACK_IMPORTED_MODULE_5__.createChart)(chartContainerRef.current, {\n                layout: {\n                    background: {\n                        type: lightweight_charts__WEBPACK_IMPORTED_MODULE_5__.ColorType.Solid,\n                        color: \"#161514\"\n                    },\n                    textColor: \"#d1d4dc\"\n                },\n                grid: {\n                    vertLines: {\n                        color: \"#424242\"\n                    },\n                    horzLines: {\n                        color: \"#424242\"\n                    }\n                },\n                rightPriceScale: {\n                    borderColor: \"#2c2c2c\"\n                },\n                timeScale: {\n                    borderColor: \"#2c2c2c\"\n                }\n            });\n            seriesRef.current = chartRef.current.addCandlestickSeries({\n                upColor: \"#26a69a\",\n                downColor: \"#ef5350\",\n                borderVisible: false,\n                wickUpColor: \"#26a69a\",\n                wickDownColor: \"#ef5350\"\n            });\n            seriesRef.current.setData(intervalTradingData);\n            const handleResize = {\n                \"Chart.useEffect.handleResize\": ()=>{\n                    if (chartRef.current && chartContainerRef.current) {\n                        chartRef.current.applyOptions({\n                            width: chartContainerRef.current.clientWidth,\n                            height: chartContainerRef.current.clientHeight\n                        });\n                    }\n                }\n            }[\"Chart.useEffect.handleResize\"];\n            window.addEventListener(\"resize\", handleResize);\n            setIsLoading(false);\n            setTimeout(handleResize, 1);\n            const handler = chartRef.current.subscribeCrosshairMove({\n                \"Chart.useEffect.handler\": (param)=>{\n                    const candleData = param.seriesData.get(seriesRef.current);\n                    setHoveredData(candleData);\n                }\n            }[\"Chart.useEffect.handler\"]);\n            return ({\n                \"Chart.useEffect\": ()=>{\n                    var _chartRef_current, _chartRef_current1;\n                    window.removeEventListener(\"resize\", handleResize);\n                    (_chartRef_current = chartRef.current) === null || _chartRef_current === void 0 ? void 0 : _chartRef_current.remove();\n                    (_chartRef_current1 = chartRef.current) === null || _chartRef_current1 === void 0 ? void 0 : _chartRef_current1.unsubscribeCrosshairMove(handler);\n                    chartRef.current = null;\n                    seriesRef.current = null;\n                }\n            })[\"Chart.useEffect\"];\n        }\n    }[\"Chart.useEffect\"], [\n        intervalTradingData,\n        setHoveredData\n    ]);\n    //TODO: find out a more efficient way to do this lol\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)({\n        \"Chart.useEffect\": ()=>{\n            if (!chartContainerRef.current || !seriesRef.current || !chartRef.current || !emojiTopPosition) return;\n            const emojiPrimitive = new _app_utils_emoji_plugin__WEBPACK_IMPORTED_MODULE_2__.EmojiPlugin(chartRef.current, seriesRef.current, selectedEmoji, emojiTimestamp, emojiTopPosition);\n            seriesRef.current.attachPrimitive(emojiPrimitive);\n        }\n    }[\"Chart.useEffect\"], [\n        emojiTimestamp,\n        emojiTopPosition\n    ]);\n    // TODO: use prev trading data while the new one is loading in\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)({\n        \"Chart.useEffect\": ()=>{\n            if (liveTradingData && seriesRef.current) {\n                setHoveredData(liveTradingData);\n                seriesRef.current.update(liveTradingData);\n            }\n        }\n    }[\"Chart.useEffect\"], [\n        liveTradingData,\n        setHoveredData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-[600px] w-full\",\n            ref: setNodeRef,\n            children: [\n                isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SkeletonLoadingChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                    lineNumber: 161,\n                    columnNumber: 19\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: chartContainerRef,\n                    className: \"z-0 relative h-full \".concat(isLoading ? \"hidden\" : \"\"),\n                    onDragOver: (e)=>e.preventDefault(),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-8 left-2 z-10 p-2 font-mono text-sm pointer-events-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-4 text-[#26a69a]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: \"O\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                            lineNumber: 172,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        \" \",\n                                        hoveredData === null || hoveredData === void 0 ? void 0 : hoveredData.open.toFixed(2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                    lineNumber: 171,\n                                    columnNumber: 8\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: \"H\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                            lineNumber: 176,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        \" \",\n                                        hoveredData === null || hoveredData === void 0 ? void 0 : hoveredData.high.toFixed(2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                    lineNumber: 175,\n                                    columnNumber: 8\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: \"L\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                            lineNumber: 180,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        \" \",\n                                        hoveredData === null || hoveredData === void 0 ? void 0 : hoveredData.low.toFixed(2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                    lineNumber: 179,\n                                    columnNumber: 8\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: \"C\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                            lineNumber: 184,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        \" \",\n                                        hoveredData === null || hoveredData === void 0 ? void 0 : hoveredData.close.toFixed(2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                    lineNumber: 183,\n                                    columnNumber: 8\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                            lineNumber: 170,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                        lineNumber: 169,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                    lineNumber: 163,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n            lineNumber: 157,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false);\n};\n_s(Chart, \"jS+YSu82WTORtOiaD7SpGhforIg=\", false, function() {\n    return [\n        _app_hooks_useWebsocket__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        _dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.useDroppable\n    ];\n});\n_c = Chart;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chart);\nvar _c;\n$RefreshReg$(_c, \"Chart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UcmFkaW5nQ2hhcnQvQ2hhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNHO0FBSWxCO0FBQ1E7QUFPakI7QUFRYjtBQUM0QztBQVcxRCxNQUFNVSxRQUF3QjtRQUFDLEVBQzlCQyxXQUFXLEVBQ1hDLGNBQWMsRUFDZEMsY0FBYyxFQUNkQyxnQkFBZ0IsRUFDaEJDLGFBQWEsRUFDYjs7SUFDQSxNQUFNQyxvQkFBb0JULDZDQUFNQSxDQUFpQjtJQUNqRCxNQUFNVSxXQUFXViw2Q0FBTUEsQ0FBbUI7SUFDMUMsTUFBTVcsWUFBWVgsNkNBQU1BLENBQW1DO0lBRTNELE1BQU0sQ0FBQ1kscUJBQXFCQyx1QkFBdUIsR0FBR1osK0NBQVFBO0lBRzlELE1BQU0sQ0FBQ2EsV0FBV0MsYUFBYSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNLENBQUNlLFNBQVNDLGdCQUFnQixHQUFHeEIsbUVBQVlBO0lBRS9DLE1BQU0sRUFBRXlCLFVBQVUsRUFBRSxHQUFHdEIsMkRBQVlBLENBQUM7UUFDbkN1QixJQUFJO0lBQ0w7SUFFQXBCLGdEQUFTQTsyQkFBQztZQUNULGVBQWVxQjtnQkFDZCxNQUFNQyxNQUFNLE1BQU1DLE1BQ2pCO2dCQUVELE1BQU1DLFVBQVUsTUFBTUYsSUFBSUcsSUFBSTtnQkFDOUIsTUFBTUMsZ0JBQWdCOUIsc0ZBQTBCQSxDQUFDNEI7Z0JBQ2pEVix1QkFBdUJZO1lBQ3hCO1lBRUFMO1FBQ0Q7MEJBQUcsRUFBRTtJQUVMckIsZ0RBQVNBOzJCQUFDO1lBQ1QsSUFBSSxDQUFDYSx1QkFBdUIsQ0FBQ0gsa0JBQWtCaUIsT0FBTyxFQUFFO2dCQUN2RFgsYUFBYTtnQkFDYjtZQUNEO1lBQ0FMLFNBQVNnQixPQUFPLEdBQUc1QiwrREFBV0EsQ0FBQ1csa0JBQWtCaUIsT0FBTyxFQUFFO2dCQUN6REMsUUFBUTtvQkFDUEMsWUFBWTt3QkFBRUMsTUFBTWhDLHlE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QUEsWUFBYXVFLElBQUksQ0FBQ0MsT0FBTyxDQUFDOzs7Ozs7OzhDQUU1Qiw4REFBQ0g7O3NEQUNBLDhEQUFDQzs0Q0FBS04sV0FBVTtzREFBYTs7Ozs7O3dDQUFTO3dDQUNyQ2hFLHdCQUFBQSxrQ0FBQUEsWUFBYXlFLElBQUksQ0FBQ0QsT0FBTyxDQUFDOzs7Ozs7OzhDQUU1Qiw4REFBQ0g7O3NEQUNBLDhEQUFDQzs0Q0FBS04sV0FBVTtzREFBYTs7Ozs7O3dDQUFTO3dDQUNyQ2hFLHdCQUFBQSxrQ0FBQUEsWUFBYTBFLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDOzs7Ozs7OzhDQUUzQiw4REFBQ0g7O3NEQUNBLDhEQUFDQzs0Q0FBS04sV0FBVTtzREFBYTs7Ozs7O3dDQUFTO3dDQUNyQ2hFLHdCQUFBQSxrQ0FBQUEsWUFBYTJFLEtBQUssQ0FBQ0gsT0FBTyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRcEM7R0EvSk16RTs7UUFnQjhCViwrREFBWUE7UUFFeEJHLHVEQUFZQTs7O0tBbEI5Qk87QUFpS04saUVBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGFuL1Byb2dyYW1taW5nL3Rha2Vob21lL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9UcmFkaW5nQ2hhcnQvQ2hhcnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VXZWJzb2NrZXQgZnJvbSBcIkAvYXBwL2hvb2tzL3VzZVdlYnNvY2tldFwiXG5pbXBvcnQgeyBFbW9qaVBsdWdpbiB9IGZyb20gXCJAL2FwcC91dGlscy9lbW9qaS1wbHVnaW5cIlxuaW1wb3J0IHtcblx0VHJhZGluZ0RhdGEsXG5cdHRyYW5zZm9ybUludGVydmFsQ2hhcnREYXRhLFxufSBmcm9tIFwiQC9hcHAvdXRpbHMvdHJhbnNmb3JtLWNoYXJ0XCJcbmltcG9ydCB7IHVzZURyb3BwYWJsZSB9IGZyb20gXCJAZG5kLWtpdC9jb3JlXCJcbmltcG9ydCB7XG5cdENvbG9yVHlwZSxcblx0Y3JlYXRlQ2hhcnQsXG5cdElDaGFydEFwaSxcblx0SVNlcmllc0FwaSxcblx0VVRDVGltZXN0YW1wLFxufSBmcm9tIFwibGlnaHR3ZWlnaHQtY2hhcnRzXCJcbmltcG9ydCB7XG5cdERpc3BhdGNoLFxuXHRGQyxcblx0U2V0U3RhdGVBY3Rpb24sXG5cdHVzZUVmZmVjdCxcblx0dXNlUmVmLFxuXHR1c2VTdGF0ZSxcbn0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBTa2VsZXRvbkxvYWRpbmdDaGFydCBmcm9tIFwiLi4vU2tlbGV0b25Mb2FkaW5nQ2hhcnRcIlxuaW1wb3J0IHsgT0hMQ0RhdGEgfSBmcm9tIFwiLlwiXG5cbmludGVyZmFjZSBDaGFydFByb3BzIHtcblx0aG92ZXJlZERhdGE6IE9ITENEYXRhIHwgdW5kZWZpbmVkXG5cdHNldEhvdmVyZWREYXRhOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxPSExDRGF0YSB8IHVuZGVmaW5lZD4+XG5cdGVtb2ppVGltZXN0YW1wOiBudW1iZXIgfCBudWxsXG5cdGVtb2ppVG9wUG9zaXRpb246IG51bWJlciB8IG51bGxcblx0c2VsZWN0ZWRFbW9qaTogc3RyaW5nIHwgbnVsbFxufVxuXG5jb25zdCBDaGFydDogRkM8Q2hhcnRQcm9wcz4gPSAoe1xuXHRob3ZlcmVkRGF0YSxcblx0c2V0SG92ZXJlZERhdGEsXG5cdGVtb2ppVGltZXN0YW1wLFxuXHRlbW9qaVRvcFBvc2l0aW9uLFxuXHRzZWxlY3RlZEVtb2ppLFxufSkgPT4ge1xuXHRjb25zdCBjaGFydENvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcblx0Y29uc3QgY2hhcnRSZWYgPSB1c2VSZWY8SUNoYXJ0QXBpIHwgbnVsbD4obnVsbClcblx0Y29uc3Qgc2VyaWVzUmVmID0gdXNlUmVmPElTZXJpZXNBcGk8XCJDYW5kbGVzdGlja1wiPiB8IG51bGw+KG51bGwpXG5cblx0Y29uc3QgW2ludGVydmFsVHJhZGluZ0RhdGEsIHNldEludGVydmFsVHJhZGluZ0RhdGFdID0gdXNlU3RhdGU8XG5cdFx0VHJhZGluZ0RhdGFbXSB8IG51bGxcblx0PigpXG5cdGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXG5cdGNvbnN0IFtpc1JlYWR5LCBsaXZlVHJhZGluZ0RhdGFdID0gdXNlV2Vic29ja2V0KClcblxuXHRjb25zdCB7IHNldE5vZGVSZWYgfSA9IHVzZURyb3BwYWJsZSh7XG5cdFx0aWQ6IFwidHJhZGluZy1jaGFydFwiLFxuXHR9KVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0YXN5bmMgZnVuY3Rpb24gZmV0Y2hJbnRlcnZhbFRyYWRpbmdEYXRhKCkge1xuXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG5cdFx0XHRcdFwiaHR0cHM6Ly9zZXJ2ZXItbW1kZXYudmVzdC5leGNoYW5nZS92Mi9rbGluZXM/c3ltYm9sPUVUSC1QRVJQJmludGVydmFsPTFtJmxpbWl0PTMwMFwiXG5cdFx0XHQpXG5cdFx0XHRjb25zdCByYXdEYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXHRcdFx0Y29uc3QgZm9ybWF0dGVkRGF0YSA9IHRyYW5zZm9ybUludGVydmFsQ2hhcnREYXRhKHJhd0RhdGEpXG5cdFx0XHRzZXRJbnRlcnZhbFRyYWRpbmdEYXRhKGZvcm1hdHRlZERhdGEpXG5cdFx0fVxuXG5cdFx0ZmV0Y2hJbnRlcnZhbFRyYWRpbmdEYXRhKClcblx0fSwgW10pXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoIWludGVydmFsVHJhZGluZ0RhdGEgfHwgIWNoYXJ0Q29udGFpbmVyUmVmLmN1cnJlbnQpIHtcblx0XHRcdHNldElzTG9hZGluZyh0cnVlKVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGNoYXJ0UmVmLmN1cnJlbnQgPSBjcmVhdGVDaGFydChjaGFydENvbnRhaW5lclJlZi5jdXJyZW50LCB7XG5cdFx0XHRsYXlvdXQ6IHtcblx0XHRcdFx0YmFja2dyb3VuZDogeyB0eXBlOiBDb2xvclR5cGUuU29saWQsIGNvbG9yOiBcIiMxNjE1MTRcIiB9LFxuXHRcdFx0XHR0ZXh0Q29sb3I6IFwiI2QxZDRkY1wiLFxuXHRcdFx0fSxcblx0XHRcdGdyaWQ6IHtcblx0XHRcdFx0dmVydExpbmVzOiB7IGNvbG9yOiBcIiM0MjQyNDJcIiB9LFxuXHRcdFx0XHRob3J6TGluZXM6IHsgY29sb3I6IFwiIzQyNDI0MlwiIH0sXG5cdFx0XHR9LFxuXHRcdFx0cmlnaHRQcmljZVNjYWxlOiB7XG5cdFx0XHRcdGJvcmRlckNvbG9yOiBcIiMyYzJjMmNcIixcblx0XHRcdH0sXG5cdFx0XHR0aW1lU2NhbGU6IHtcblx0XHRcdFx0Ym9yZGVyQ29sb3I6IFwiIzJjMmMyY1wiLFxuXHRcdFx0fSxcblx0XHR9KVxuXG5cdFx0c2VyaWVzUmVmLmN1cnJlbnQgPSBjaGFydFJlZi5jdXJyZW50LmFkZENhbmRsZXN0aWNrU2VyaWVzKHtcblx0XHRcdHVwQ29sb3I6IFwiIzI2YTY5YVwiLFxuXHRcdFx0ZG93bkNvbG9yOiBcIiNlZjUzNTBcIixcblx0XHRcdGJvcmRlclZpc2libGU6IGZhbHNlLFxuXHRcdFx0d2lja1VwQ29sb3I6IFwiIzI2YTY5YVwiLFxuXHRcdFx0d2lja0Rvd25Db2xvcjogXCIjZWY1MzUwXCIsXG5cdFx0fSlcblxuXHRcdHNlcmllc1JlZi5jdXJyZW50LnNldERhdGEoaW50ZXJ2YWxUcmFkaW5nRGF0YSlcblxuXHRcdGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcblx0XHRcdGlmIChjaGFydFJlZi5jdXJyZW50ICYmIGNoYXJ0Q29udGFpbmVyUmVmLmN1cnJlbnQpIHtcblx0XHRcdFx0Y2hhcnRSZWYuY3VycmVudC5hcHBseU9wdGlvbnMoe1xuXHRcdFx0XHRcdHdpZHRoOiBjaGFydENvbnRhaW5lclJlZi5jdXJyZW50LmNsaWVudFdpZHRoLFxuXHRcdFx0XHRcdGhlaWdodDogY2hhcnRDb250YWluZXJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQsXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKVxuXHRcdHNldElzTG9hZGluZyhmYWxzZSlcblxuXHRcdHNldFRpbWVvdXQoaGFuZGxlUmVzaXplLCAxKVxuXG5cdFx0Y29uc3QgaGFuZGxlciA9IGNoYXJ0UmVmLmN1cnJlbnQuc3Vic2NyaWJlQ3Jvc3NoYWlyTW92ZSgocGFyYW0pID0+IHtcblx0XHRcdGNvbnN0IGNhbmRsZURhdGEgPSBwYXJhbS5zZXJpZXNEYXRhLmdldChzZXJpZXNSZWYuY3VycmVudCkgYXMgT0hMQ0RhdGFcblx0XHRcdHNldEhvdmVyZWREYXRhKGNhbmRsZURhdGEpXG5cdFx0fSlcblxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpXG5cdFx0XHRjaGFydFJlZi5jdXJyZW50Py5yZW1vdmUoKVxuXHRcdFx0Y2hhcnRSZWYuY3VycmVudD8udW5zdWJzY3JpYmVDcm9zc2hhaXJNb3ZlKGhhbmRsZXIpXG5cdFx0XHRjaGFydFJlZi5jdXJyZW50ID0gbnVsbFxuXHRcdFx0c2VyaWVzUmVmLmN1cnJlbnQgPSBudWxsXG5cdFx0fVxuXHR9LCBbaW50ZXJ2YWxUcmFkaW5nRGF0YSwgc2V0SG92ZXJlZERhdGFdKVxuXG5cdC8vVE9ETzogZmluZCBvdXQgYSBtb3JlIGVmZmljaWVudCB3YXkgdG8gZG8gdGhpcyBsb2xcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoXG5cdFx0XHQhY2hhcnRDb250YWluZXJSZWYuY3VycmVudCB8fFxuXHRcdFx0IXNlcmllc1JlZi5jdXJyZW50IHx8XG5cdFx0XHQhY2hhcnRSZWYuY3VycmVudCB8fFxuXHRcdFx0IWVtb2ppVG9wUG9zaXRpb25cblx0XHQpXG5cdFx0XHRyZXR1cm5cblx0XHRjb25zdCBlbW9qaVByaW1pdGl2ZSA9IG5ldyBFbW9qaVBsdWdpbihcblx0XHRcdGNoYXJ0UmVmLmN1cnJlbnQsXG5cdFx0XHRzZXJpZXNSZWYuY3VycmVudCxcblx0XHRcdHNlbGVjdGVkRW1vamksXG5cdFx0XHRlbW9qaVRpbWVzdGFtcCBhcyBVVENUaW1lc3RhbXAsXG5cdFx0XHRlbW9qaVRvcFBvc2l0aW9uXG5cdFx0KVxuXHRcdHNlcmllc1JlZi5jdXJyZW50LmF0dGFjaFByaW1pdGl2ZShlbW9qaVByaW1pdGl2ZSlcblx0fSwgW2Vtb2ppVGltZXN0YW1wLCBlbW9qaVRvcFBvc2l0aW9uXSlcblxuXHQvLyBUT0RPOiB1c2UgcHJldiB0cmFkaW5nIGRhdGEgd2hpbGUgdGhlIG5ldyBvbmUgaXMgbG9hZGluZyBpblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChsaXZlVHJhZGluZ0RhdGEgJiYgc2VyaWVzUmVmLmN1cnJlbnQpIHtcblx0XHRcdHNldEhvdmVyZWREYXRhKGxpdmVUcmFkaW5nRGF0YSlcblx0XHRcdHNlcmllc1JlZi5jdXJyZW50LnVwZGF0ZShsaXZlVHJhZGluZ0RhdGEpXG5cdFx0fVxuXHR9LCBbbGl2ZVRyYWRpbmdEYXRhLCBzZXRIb3ZlcmVkRGF0YV0pXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPVwiaC1bNjAwcHhdIHctZnVsbFwiXG5cdFx0XHRcdHJlZj17c2V0Tm9kZVJlZn1cblx0XHRcdD5cblx0XHRcdFx0e2lzTG9hZGluZyAmJiA8U2tlbGV0b25Mb2FkaW5nQ2hhcnQgLz59XG5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdHJlZj17Y2hhcnRDb250YWluZXJSZWZ9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtgei0wIHJlbGF0aXZlIGgtZnVsbCAke2lzTG9hZGluZyA/IFwiaGlkZGVuXCIgOiBcIlwifWB9XG5cdFx0XHRcdFx0b25EcmFnT3Zlcj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsvKiBUT0RPOiBtYWtlIGFjY3VyYXRlIHRvIGZpZ21hIChpbmNsdWRlIHRpdGxlICYgdm9sdW1lKSAqL31cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC04IGxlZnQtMiB6LTEwIHAtMiBmb250LW1vbm8gdGV4dC1zbSBwb2ludGVyLWV2ZW50cy1ub25lXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgdGV4dC1bIzI2YTY5YV1cIj5cblx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPk88L3NwYW4+e1wiIFwifVxuXHRcdFx0XHRcdFx0XHRcdHtob3ZlcmVkRGF0YT8ub3Blbi50b0ZpeGVkKDIpfVxuXHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5IPC9zcGFuPntcIiBcIn1cblx0XHRcdFx0XHRcdFx0XHR7aG92ZXJlZERhdGE/LmhpZ2gudG9GaXhlZCgyKX1cblx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+TDwvc3Bhbj57XCIgXCJ9XG5cdFx0XHRcdFx0XHRcdFx0e2hvdmVyZWREYXRhPy5sb3cudG9GaXhlZCgyKX1cblx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+Qzwvc3Bhbj57XCIgXCJ9XG5cdFx0XHRcdFx0XHRcdFx0e2hvdmVyZWREYXRhPy5jbG9zZS50b0ZpeGVkKDIpfVxuXHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFydFxuIl0sIm5hbWVzIjpbInVzZVdlYnNvY2tldCIsIkVtb2ppUGx1Z2luIiwidHJhbnNmb3JtSW50ZXJ2YWxDaGFydERhdGEiLCJ1c2VEcm9wcGFibGUiLCJDb2xvclR5cGUiLCJjcmVhdGVDaGFydCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiU2tlbGV0b25Mb2FkaW5nQ2hhcnQiLCJDaGFydCIsImhvdmVyZWREYXRhIiwic2V0SG92ZXJlZERhdGEiLCJlbW9qaVRpbWVzdGFtcCIsImVtb2ppVG9wUG9zaXRpb24iLCJzZWxlY3RlZEVtb2ppIiwiY2hhcnRDb250YWluZXJSZWYiLCJjaGFydFJlZiIsInNlcmllc1JlZiIsImludGVydmFsVHJhZGluZ0RhdGEiLCJzZXRJbnRlcnZhbFRyYWRpbmdEYXRhIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaXNSZWFkeSIsImxpdmVUcmFkaW5nRGF0YSIsInNldE5vZGVSZWYiLCJpZCIsImZldGNoSW50ZXJ2YWxUcmFkaW5nRGF0YSIsInJlcyIsImZldGNoIiwicmF3RGF0YSIsImpzb24iLCJmb3JtYXR0ZWREYXRhIiwiY3VycmVudCIsImxheW91dCIsImJhY2tncm91bmQiLCJ0eXBlIiwiU29saWQiLCJjb2xvciIsInRleHRDb2xvciIsImdyaWQiLCJ2ZXJ0TGluZXMiLCJob3J6TGluZXMiLCJyaWdodFByaWNlU2NhbGUiLCJib3JkZXJDb2xvciIsInRpbWVTY2FsZSIsImFkZENhbmRsZXN0aWNrU2VyaWVzIiwidXBDb2xvciIsImRvd25Db2xvciIsImJvcmRlclZpc2libGUiLCJ3aWNrVXBDb2xvciIsIndpY2tEb3duQ29sb3IiLCJzZXREYXRhIiwiaGFuZGxlUmVzaXplIiwiYXBwbHlPcHRpb25zIiwid2lkdGgiLCJjbGllbnRXaWR0aCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiaGFuZGxlciIsInN1YnNjcmliZUNyb3NzaGFpck1vdmUiLCJwYXJhbSIsImNhbmRsZURhdGEiLCJzZXJpZXNEYXRhIiwiZ2V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsInVuc3Vic2NyaWJlQ3Jvc3NoYWlyTW92ZSIsImVtb2ppUHJpbWl0aXZlIiwiYXR0YWNoUHJpbWl0aXZlIiwidXBkYXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwib25EcmFnT3ZlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInAiLCJzcGFuIiwib3BlbiIsInRvRml4ZWQiLCJoaWdoIiwibG93IiwiY2xvc2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TradingChart/Chart.tsx\n"));

/***/ })

});