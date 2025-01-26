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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dnd-kit/core */ \"(app-pages-browser)/./node_modules/@dnd-kit/core/dist/core.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Chart = ()=>{\n    var _hoveredData, _hoveredData1, _hoveredData2, _hoveredData3;\n    _s();\n    const chartContainerRef = useRef(null);\n    const chartRef = useRef(null);\n    const seriesRef = useRef(null);\n    const { setNodeRef } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.useDroppable)({\n        id: \"trading-chart\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Chart.useEffect\": ()=>{\n            async function fetchIntervalTradingData() {\n                const res = await fetch(\"https://server-mmdev.vest.exchange/v2/klines?symbol=ETH-PERP&interval=1m&limit=300\");\n                const rawData = await res.json();\n                const formattedData = transformIntervalChartData(rawData);\n                setIntervalTradingData(formattedData);\n            }\n            fetchIntervalTradingData();\n        }\n    }[\"Chart.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Chart.useEffect\": ()=>{\n            if (!intervalTradingData || !chartContainerRef.current) {\n                setIsLoading(true);\n                return;\n            }\n            chartRef.current = createChart(chartContainerRef.current, {\n                layout: {\n                    background: {\n                        type: ColorType.Solid,\n                        color: \"#161514\"\n                    },\n                    textColor: \"#d1d4dc\"\n                },\n                grid: {\n                    vertLines: {\n                        color: \"#424242\"\n                    },\n                    horzLines: {\n                        color: \"#424242\"\n                    }\n                },\n                rightPriceScale: {\n                    borderColor: \"#2c2c2c\"\n                },\n                timeScale: {\n                    borderColor: \"#2c2c2c\"\n                }\n            });\n            seriesRef.current = chartRef.current.addCandlestickSeries({\n                upColor: \"#26a69a\",\n                downColor: \"#ef5350\",\n                borderVisible: false,\n                wickUpColor: \"#26a69a\",\n                wickDownColor: \"#ef5350\"\n            });\n            seriesRef.current.setData(intervalTradingData);\n            const handleResize = {\n                \"Chart.useEffect.handleResize\": ()=>{\n                    if (chartRef.current && chartContainerRef.current) {\n                        chartRef.current.applyOptions({\n                            width: chartContainerRef.current.clientWidth,\n                            height: chartContainerRef.current.clientHeight\n                        });\n                    }\n                }\n            }[\"Chart.useEffect.handleResize\"];\n            window.addEventListener(\"resize\", handleResize);\n            setIsLoading(false);\n            setTimeout(handleResize, 1);\n            const emojiPrimitive = new EmojiPlugin(chartRef.current, seriesRef.current, 1737792600);\n            seriesRef.current.attachPrimitive(emojiPrimitive);\n            const handler = chartRef.current.subscribeCrosshairMove({\n                \"Chart.useEffect.handler\": (param)=>{\n                    const candleData = param.seriesData.get(seriesRef.current);\n                    setHoveredData(candleData);\n                }\n            }[\"Chart.useEffect.handler\"]);\n            return ({\n                \"Chart.useEffect\": ()=>{\n                    var _chartRef_current, _chartRef_current1;\n                    window.removeEventListener(\"resize\", handleResize);\n                    (_chartRef_current = chartRef.current) === null || _chartRef_current === void 0 ? void 0 : _chartRef_current.remove();\n                    (_chartRef_current1 = chartRef.current) === null || _chartRef_current1 === void 0 ? void 0 : _chartRef_current1.unsubscribeCrosshairMove(handler);\n                    chartRef.current = null;\n                    seriesRef.current = null;\n                }\n            })[\"Chart.useEffect\"];\n        }\n    }[\"Chart.useEffect\"], [\n        intervalTradingData\n    ]);\n    // TODO: use prev trading data while the new one is loading in\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Chart.useEffect\": ()=>{\n            if (liveTradingData && seriesRef.current) {\n                setHoveredData(liveTradingData);\n                seriesRef.current.update(liveTradingData);\n            }\n        }\n    }[\"Chart.useEffect\"], [\n        liveTradingData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-[600px] w-full\",\n        ref: setNodeRef,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: chartContainerRef,\n            className: \"z-0 relative h-full \".concat(isLoading ? \"hidden\" : \"\"),\n            onDragOver: (e)=>e.preventDefault(),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-8 left-2 z-10 p-2 font-mono text-sm pointer-events-none\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-4 text-[#26a69a]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-white\",\n                                    children: \"O\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 8\n                                }, undefined),\n                                \" \",\n                                (_hoveredData = hoveredData) === null || _hoveredData === void 0 ? void 0 : _hoveredData.open.toFixed(2)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-white\",\n                                    children: \"H\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 8\n                                }, undefined),\n                                \" \",\n                                (_hoveredData1 = hoveredData) === null || _hoveredData1 === void 0 ? void 0 : _hoveredData1.high.toFixed(2)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-white\",\n                                    children: \"L\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 8\n                                }, undefined),\n                                \" \",\n                                (_hoveredData2 = hoveredData) === null || _hoveredData2 === void 0 ? void 0 : _hoveredData2.low.toFixed(2)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-white\",\n                                    children: \"C\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                    lineNumber: 126,\n                                    columnNumber: 8\n                                }, undefined),\n                                \" \",\n                                (_hoveredData3 = hoveredData) === null || _hoveredData3 === void 0 ? void 0 : _hoveredData3.close.toFixed(2)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 7\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 6\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                lineNumber: 111,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n            lineNumber: 105,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n        lineNumber: 101,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Chart, \"PJL3hOgqXd0dkMmCMVfRzTNEr4U=\", false, function() {\n    return [\n        _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.useDroppable\n    ];\n});\n_c = Chart;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chart);\nvar _c;\n$RefreshReg$(_c, \"Chart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UcmFkaW5nQ2hhcnQvQ2hhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNEM7QUFDWDtBQUVqQyxNQUFNRSxRQUFRO1FBK0dOQyxjQUlBQSxlQUlBQSxlQUlBQTs7SUExSFAsTUFBTUMsb0JBQW9CQyxPQUF1QjtJQUNqRCxNQUFNQyxXQUFXRCxPQUF5QjtJQUMxQyxNQUFNRSxZQUFZRixPQUF5QztJQUUzRCxNQUFNLEVBQUVHLFVBQVUsRUFBRSxHQUFHUiwyREFBWUEsQ0FBQztRQUNuQ1MsSUFBSTtJQUNMO0lBRUFSLGdEQUFTQTsyQkFBQztZQUNULGVBQWVTO2dCQUNkLE1BQU1DLE1BQU0sTUFBTUMsTUFDakI7Z0JBRUQsTUFBTUMsVUFBVSxNQUFNRixJQUFJRyxJQUFJO2dCQUM5QixNQUFNQyxnQkFBZ0JDLDJCQUEyQkg7Z0JBQ2pESSx1QkFBdUJGO1lBQ3hCO1lBRUFMO1FBQ0Q7MEJBQUcsRUFBRTtJQUVMVCxnREFBU0E7MkJBQUM7WUFDVCxJQUFJLENBQUNpQix1QkFBdUIsQ0FBQ2Qsa0JBQWtCZSxPQUFPLEVBQUU7Z0JBQ3ZEQyxhQUFhO2dCQUNiO1lBQ0Q7WUFDQWQsU0FBU2EsT0FBTyxHQUFHRSxZQUFZakIsa0JBQWtCZSxPQUFPLEVBQUU7Z0JBQ3pERyxRQUFRO29CQUNQQyxZQUFZO3dCQUFFQyxNQUFNQyxVQUFVQyxLQUFLO3dCQUFFQyxPQUFPO29CQUFVO29CQUN0REMsV0FBVztnQkFDWjtnQkFDQUMsTUFBTTtvQkFDTEMsV0FBVzt3QkFBRUgsT0FBTztvQkFBVTtvQkFDOUJJLFdBQVc7d0JBQUVKLE9BQU87b0JBQVU7Z0JBQy9CO2dCQUNBSyxpQkFBaUI7b0JBQ2hCQyxhQUFhO2dCQUNkO2dCQUNBQyxXQUFXO29CQUNWRCxhQUFhO2dCQUNkO1lBQ0Q7WUFFQTFCLFVBQVVZLE9BQU8sR0FBR2IsU0FBU2EsT0FBTyxDQUFDZ0Isb0JBQW9CLENBQUM7Z0JBQ3pEQyxTQUFTO2dCQUNUQyxXQUFXO2dCQUNYQyxlQUFlO2dCQUNmQyxhQUFhO2dCQUNiQyxlQUFlO1lBQ2hCO1lBRUFqQyxVQUFVWSxPQUFPLENBQUNzQixPQUFPLENBQUN2QjtZQUUxQixNQUFNd0I7Z0RBQWU7b0JBQ3BCLElBQUlwQyxTQUFTYSxPQUFPLElBQUlmLGtCQUFrQmUsT0FBTyxFQUFFO3dCQUNsRGIsU0FBU2EsT0FBTyxDQUFDd0IsWUFBWSxDQUFDOzRCQUM3QkMsT0FBT3hDLGtCQUFrQmUsT0FBTyxDQUFDMEIsV0FBVzs0QkFDNUNDLFFBQVExQyxrQkFBa0JlLE9BQU8sQ0FBQzRCLFlBQVk7d0JBQy9DO29CQUNEO2dCQUNEOztZQUVBQyxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVUDtZQUNsQ3RCLGFBQWE7WUFFYjhCLFdBQVdSLGNBQWM7WUFFekIsTUFBTVMsaUJBQWlCLElBQUlDLFlBQzFCOUMsU0FBU2EsT0FBTyxFQUNoQlosVUFBVVksT0FBTyxFQUNqQjtZQUVEWixVQUFVWSxPQUFPLENBQUNrQyxlQUFlLENBQUNGO1lBRWxDLE1BQU1HLFVBQVVoRCxTQUFTYSxPQUFPLENBQUNvQyxzQkFBc0I7MkNBQUMsQ0FBQ0M7b0JBQ3hELE1BQU1DLGFBQWFELE1BQU1FLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDcEQsVUFBVVksT0FBTztvQkFDekR5QyxlQUFlSDtnQkFDaEI7O1lBRUE7bUNBQU87d0JBRU5uRCxtQkFDQUE7b0JBRkEwQyxPQUFPYSxtQkFBbUIsQ0FBQyxVQUFVbkI7cUJBQ3JDcEMsb0JBQUFBLFNBQVNhLE9BQU8sY0FBaEJiLHdDQUFBQSxrQkFBa0J3RCxNQUFNO3FCQUN4QnhELHFCQUFBQSxTQUFTYSxPQUFPLGNBQWhCYix5Q0FBQUEsbUJBQWtCeUQsd0JBQXdCLENBQUNUO29CQUMzQ2hELFNBQVNhLE9BQU8sR0FBRztvQkFDbkJaLFVBQVVZLE9BQU8sR0FBRztnQkFDckI7O1FBQ0Q7MEJBQUc7UUFBQ0Q7S0FBb0I7SUFFeEIsOERBQThEO0lBQzlEakIsZ0RBQVNBOzJCQUFDO1lBQ1QsSUFBSStELG1CQUFtQnpELFVBQVVZLE9BQU8sRUFBRTtnQkFDekN5QyxlQUFlSTtnQkFDZnpELFVBQVVZLE9BQU8sQ0FBQzhDLE1BQU0sQ0FBQ0Q7WUFDMUI7UUFDRDswQkFBRztRQUFDQTtLQUFnQjtJQUNwQixxQkFDQyw4REFBQ0U7UUFDQUMsV0FBVTtRQUNWQyxLQUFLNUQ7a0JBRUwsNEVBQUMwRDtZQUNBRSxLQUFLaEU7WUFDTCtELFdBQVcsdUJBQWlELE9BQTFCRSxZQUFZLFdBQVc7WUFDekRDLFlBQVksQ0FBQ0MsSUFBTUEsRUFBRUMsY0FBYztzQkFHbkMsNEVBQUNOO2dCQUFJQyxXQUFVOzBCQUNkLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2QsOERBQUNNOzs4Q0FDQSw4REFBQ0M7b0NBQUtQLFdBQVU7OENBQWE7Ozs7OztnQ0FBUztpQ0FDckNoRSxlQUFBQSx5QkFBQUEsbUNBQUFBLGFBQWF3RSxJQUFJLENBQUNDLE9BQU8sQ0FBQzs7Ozs7OztzQ0FFNUIsOERBQUNIOzs4Q0FDQSw4REFBQ0M7b0NBQUtQLFdBQVU7OENBQWE7Ozs7OztnQ0FBUztpQ0FDckNoRSxnQkFBQUEseUJBQUFBLG9DQUFBQSxjQUFhMEUsSUFBSSxDQUFDRCxPQUFPLENBQUM7Ozs7Ozs7c0NBRTVCLDhEQUFDSDs7OENBQ0EsOERBQUNDO29DQUFLUCxXQUFVOzhDQUFhOzs7Ozs7Z0NBQVM7aUNBQ3JDaEUsZ0JBQUFBLHlCQUFBQSxvQ0FBQUEsY0FBYTJFLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDOzs7Ozs7O3NDQUUzQiw4REFBQ0g7OzhDQUNBLDhEQUFDQztvQ0FBS1AsV0FBVTs4Q0FBYTs7Ozs7O2dDQUFTO2lDQUNyQ2hFLGdCQUFBQSx5QkFBQUEsb0NBQUFBLGNBQWE0RSxLQUFLLENBQUNILE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9uQztHQWxJTTFFOztRQUtrQkYsdURBQVlBOzs7S0FMOUJFO0FBb0lOLGlFQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyIvVXNlcnMvYWxhbi9Qcm9ncmFtbWluZy90YWtlaG9tZS9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvVHJhZGluZ0NoYXJ0L0NoYXJ0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VEcm9wcGFibGUgfSBmcm9tIFwiQGRuZC1raXQvY29yZVwiXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBDaGFydCA9ICgpID0+IHtcblx0Y29uc3QgY2hhcnRDb250YWluZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG5cdGNvbnN0IGNoYXJ0UmVmID0gdXNlUmVmPElDaGFydEFwaSB8IG51bGw+KG51bGwpXG5cdGNvbnN0IHNlcmllc1JlZiA9IHVzZVJlZjxJU2VyaWVzQXBpPFwiQ2FuZGxlc3RpY2tcIj4gfCBudWxsPihudWxsKVxuXG5cdGNvbnN0IHsgc2V0Tm9kZVJlZiB9ID0gdXNlRHJvcHBhYmxlKHtcblx0XHRpZDogXCJ0cmFkaW5nLWNoYXJ0XCIsXG5cdH0pXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRhc3luYyBmdW5jdGlvbiBmZXRjaEludGVydmFsVHJhZGluZ0RhdGEoKSB7XG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcblx0XHRcdFx0XCJodHRwczovL3NlcnZlci1tbWRldi52ZXN0LmV4Y2hhbmdlL3YyL2tsaW5lcz9zeW1ib2w9RVRILVBFUlAmaW50ZXJ2YWw9MW0mbGltaXQ9MzAwXCJcblx0XHRcdClcblx0XHRcdGNvbnN0IHJhd0RhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cdFx0XHRjb25zdCBmb3JtYXR0ZWREYXRhID0gdHJhbnNmb3JtSW50ZXJ2YWxDaGFydERhdGEocmF3RGF0YSlcblx0XHRcdHNldEludGVydmFsVHJhZGluZ0RhdGEoZm9ybWF0dGVkRGF0YSlcblx0XHR9XG5cblx0XHRmZXRjaEludGVydmFsVHJhZGluZ0RhdGEoKVxuXHR9LCBbXSlcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmICghaW50ZXJ2YWxUcmFkaW5nRGF0YSB8fCAhY2hhcnRDb250YWluZXJSZWYuY3VycmVudCkge1xuXHRcdFx0c2V0SXNMb2FkaW5nKHRydWUpXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0Y2hhcnRSZWYuY3VycmVudCA9IGNyZWF0ZUNoYXJ0KGNoYXJ0Q29udGFpbmVyUmVmLmN1cnJlbnQsIHtcblx0XHRcdGxheW91dDoge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiB7IHR5cGU6IENvbG9yVHlwZS5Tb2xpZCwgY29sb3I6IFwiIzE2MTUxNFwiIH0sXG5cdFx0XHRcdHRleHRDb2xvcjogXCIjZDFkNGRjXCIsXG5cdFx0XHR9LFxuXHRcdFx0Z3JpZDoge1xuXHRcdFx0XHR2ZXJ0TGluZXM6IHsgY29sb3I6IFwiIzQyNDI0MlwiIH0sXG5cdFx0XHRcdGhvcnpMaW5lczogeyBjb2xvcjogXCIjNDI0MjQyXCIgfSxcblx0XHRcdH0sXG5cdFx0XHRyaWdodFByaWNlU2NhbGU6IHtcblx0XHRcdFx0Ym9yZGVyQ29sb3I6IFwiIzJjMmMyY1wiLFxuXHRcdFx0fSxcblx0XHRcdHRpbWVTY2FsZToge1xuXHRcdFx0XHRib3JkZXJDb2xvcjogXCIjMmMyYzJjXCIsXG5cdFx0XHR9LFxuXHRcdH0pXG5cblx0XHRzZXJpZXNSZWYuY3VycmVudCA9IGNoYXJ0UmVmLmN1cnJlbnQuYWRkQ2FuZGxlc3RpY2tTZXJpZXMoe1xuXHRcdFx0dXBDb2xvcjogXCIjMjZhNjlhXCIsXG5cdFx0XHRkb3duQ29sb3I6IFwiI2VmNTM1MFwiLFxuXHRcdFx0Ym9yZGVyVmlzaWJsZTogZmFsc2UsXG5cdFx0XHR3aWNrVXBDb2xvcjogXCIjMjZhNjlhXCIsXG5cdFx0XHR3aWNrRG93bkNvbG9yOiBcIiNlZjUzNTBcIixcblx0XHR9KVxuXG5cdFx0c2VyaWVzUmVmLmN1cnJlbnQuc2V0RGF0YShpbnRlcnZhbFRyYWRpbmdEYXRhKVxuXG5cdFx0Y29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuXHRcdFx0aWYgKGNoYXJ0UmVmLmN1cnJlbnQgJiYgY2hhcnRDb250YWluZXJSZWYuY3VycmVudCkge1xuXHRcdFx0XHRjaGFydFJlZi5jdXJyZW50LmFwcGx5T3B0aW9ucyh7XG5cdFx0XHRcdFx0d2lkdGg6IGNoYXJ0Q29udGFpbmVyUmVmLmN1cnJlbnQuY2xpZW50V2lkdGgsXG5cdFx0XHRcdFx0aGVpZ2h0OiBjaGFydENvbnRhaW5lclJlZi5jdXJyZW50LmNsaWVudEhlaWdodCxcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpXG5cdFx0c2V0SXNMb2FkaW5nKGZhbHNlKVxuXG5cdFx0c2V0VGltZW91dChoYW5kbGVSZXNpemUsIDEpXG5cblx0XHRjb25zdCBlbW9qaVByaW1pdGl2ZSA9IG5ldyBFbW9qaVBsdWdpbihcblx0XHRcdGNoYXJ0UmVmLmN1cnJlbnQsXG5cdFx0XHRzZXJpZXNSZWYuY3VycmVudCxcblx0XHRcdDE3Mzc3OTI2MDAgYXMgVVRDVGltZXN0YW1wXG5cdFx0KVxuXHRcdHNlcmllc1JlZi5jdXJyZW50LmF0dGFjaFByaW1pdGl2ZShlbW9qaVByaW1pdGl2ZSlcblxuXHRcdGNvbnN0IGhhbmRsZXIgPSBjaGFydFJlZi5jdXJyZW50LnN1YnNjcmliZUNyb3NzaGFpck1vdmUoKHBhcmFtKSA9PiB7XG5cdFx0XHRjb25zdCBjYW5kbGVEYXRhID0gcGFyYW0uc2VyaWVzRGF0YS5nZXQoc2VyaWVzUmVmLmN1cnJlbnQpIGFzIE9ITENEYXRhXG5cdFx0XHRzZXRIb3ZlcmVkRGF0YShjYW5kbGVEYXRhKVxuXHRcdH0pXG5cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKVxuXHRcdFx0Y2hhcnRSZWYuY3VycmVudD8ucmVtb3ZlKClcblx0XHRcdGNoYXJ0UmVmLmN1cnJlbnQ/LnVuc3Vic2NyaWJlQ3Jvc3NoYWlyTW92ZShoYW5kbGVyKVxuXHRcdFx0Y2hhcnRSZWYuY3VycmVudCA9IG51bGxcblx0XHRcdHNlcmllc1JlZi5jdXJyZW50ID0gbnVsbFxuXHRcdH1cblx0fSwgW2ludGVydmFsVHJhZGluZ0RhdGFdKVxuXG5cdC8vIFRPRE86IHVzZSBwcmV2IHRyYWRpbmcgZGF0YSB3aGlsZSB0aGUgbmV3IG9uZSBpcyBsb2FkaW5nIGluXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGxpdmVUcmFkaW5nRGF0YSAmJiBzZXJpZXNSZWYuY3VycmVudCkge1xuXHRcdFx0c2V0SG92ZXJlZERhdGEobGl2ZVRyYWRpbmdEYXRhKVxuXHRcdFx0c2VyaWVzUmVmLmN1cnJlbnQudXBkYXRlKGxpdmVUcmFkaW5nRGF0YSlcblx0XHR9XG5cdH0sIFtsaXZlVHJhZGluZ0RhdGFdKVxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT1cImgtWzYwMHB4XSB3LWZ1bGxcIlxuXHRcdFx0cmVmPXtzZXROb2RlUmVmfVxuXHRcdD5cblx0XHRcdDxkaXZcblx0XHRcdFx0cmVmPXtjaGFydENvbnRhaW5lclJlZn1cblx0XHRcdFx0Y2xhc3NOYW1lPXtgei0wIHJlbGF0aXZlIGgtZnVsbCAke2lzTG9hZGluZyA/IFwiaGlkZGVuXCIgOiBcIlwifWB9XG5cdFx0XHRcdG9uRHJhZ092ZXI9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XG5cdFx0XHQ+XG5cdFx0XHRcdHsvKiBUT0RPOiBtYWtlIGFjY3VyYXRlIHRvIGZpZ21hIChpbmNsdWRlIHRpdGxlICYgdm9sdW1lKSAqL31cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtOCBsZWZ0LTIgei0xMCBwLTIgZm9udC1tb25vIHRleHQtc20gcG9pbnRlci1ldmVudHMtbm9uZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNCB0ZXh0LVsjMjZhNjlhXVwiPlxuXHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5PPC9zcGFuPntcIiBcIn1cblx0XHRcdFx0XHRcdFx0e2hvdmVyZWREYXRhPy5vcGVuLnRvRml4ZWQoMil9XG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkg8L3NwYW4+e1wiIFwifVxuXHRcdFx0XHRcdFx0XHR7aG92ZXJlZERhdGE/LmhpZ2gudG9GaXhlZCgyKX1cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+TDwvc3Bhbj57XCIgXCJ9XG5cdFx0XHRcdFx0XHRcdHtob3ZlcmVkRGF0YT8ubG93LnRvRml4ZWQoMil9XG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkM8L3NwYW4+e1wiIFwifVxuXHRcdFx0XHRcdFx0XHR7aG92ZXJlZERhdGE/LmNsb3NlLnRvRml4ZWQoMil9XG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnRcbiJdLCJuYW1lcyI6WyJ1c2VEcm9wcGFibGUiLCJ1c2VFZmZlY3QiLCJDaGFydCIsImhvdmVyZWREYXRhIiwiY2hhcnRDb250YWluZXJSZWYiLCJ1c2VSZWYiLCJjaGFydFJlZiIsInNlcmllc1JlZiIsInNldE5vZGVSZWYiLCJpZCIsImZldGNoSW50ZXJ2YWxUcmFkaW5nRGF0YSIsInJlcyIsImZldGNoIiwicmF3RGF0YSIsImpzb24iLCJmb3JtYXR0ZWREYXRhIiwidHJhbnNmb3JtSW50ZXJ2YWxDaGFydERhdGEiLCJzZXRJbnRlcnZhbFRyYWRpbmdEYXRhIiwiaW50ZXJ2YWxUcmFkaW5nRGF0YSIsImN1cnJlbnQiLCJzZXRJc0xvYWRpbmciLCJjcmVhdGVDaGFydCIsImxheW91dCIsImJhY2tncm91bmQiLCJ0eXBlIiwiQ29sb3JUeXBlIiwiU29saWQiLCJjb2xvciIsInRleHRDb2xvciIsImdyaWQiLCJ2ZXJ0TGluZXMiLCJob3J6TGluZXMiLCJyaWdodFByaWNlU2NhbGUiLCJib3JkZXJDb2xvciIsInRpbWVTY2FsZSIsImFkZENhbmRsZXN0aWNrU2VyaWVzIiwidXBDb2xvciIsImRvd25Db2xvciIsImJvcmRlclZpc2libGUiLCJ3aWNrVXBDb2xvciIsIndpY2tEb3duQ29sb3IiLCJzZXREYXRhIiwiaGFuZGxlUmVzaXplIiwiYXBwbHlPcHRpb25zIiwid2lkdGgiLCJjbGllbnRXaWR0aCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiZW1vamlQcmltaXRpdmUiLCJFbW9qaVBsdWdpbiIsImF0dGFjaFByaW1pdGl2ZSIsImhhbmRsZXIiLCJzdWJzY3JpYmVDcm9zc2hhaXJNb3ZlIiwicGFyYW0iLCJjYW5kbGVEYXRhIiwic2VyaWVzRGF0YSIsImdldCIsInNldEhvdmVyZWREYXRhIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsInVuc3Vic2NyaWJlQ3Jvc3NoYWlyTW92ZSIsImxpdmVUcmFkaW5nRGF0YSIsInVwZGF0ZSIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsImlzTG9hZGluZyIsIm9uRHJhZ092ZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJwIiwic3BhbiIsIm9wZW4iLCJ0b0ZpeGVkIiwiaGlnaCIsImxvdyIsImNsb3NlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TradingChart/Chart.tsx\n"));

/***/ })

});