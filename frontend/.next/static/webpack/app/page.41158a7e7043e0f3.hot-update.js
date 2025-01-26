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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_hooks_useWebsocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/hooks/useWebsocket */ \"(app-pages-browser)/./src/app/hooks/useWebsocket.tsx\");\n/* harmony import */ var _app_utils_emoji_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/utils/emoji-plugin */ \"(app-pages-browser)/./src/app/utils/emoji-plugin.ts\");\n/* harmony import */ var _app_utils_transform_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/utils/transform-chart */ \"(app-pages-browser)/./src/app/utils/transform-chart.ts\");\n/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dnd-kit/core */ \"(app-pages-browser)/./node_modules/@dnd-kit/core/dist/core.esm.js\");\n/* harmony import */ var lightweight_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lightweight-charts */ \"(app-pages-browser)/./node_modules/lightweight-charts/dist/lightweight-charts.development.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _SkeletonLoadingChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SkeletonLoadingChart */ \"(app-pages-browser)/./src/app/components/SkeletonLoadingChart.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Chart = (param)=>{\n    let { hoveredData, setHoveredData, emojiTimestamp } = param;\n    _s();\n    const chartContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);\n    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);\n    const seriesRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);\n    const [intervalTradingData, setIntervalTradingData] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);\n    const [isReady, liveTradingData] = (0,_app_hooks_useWebsocket__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const { setNodeRef } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.useDroppable)({\n        id: \"trading-chart\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)({\n        \"Chart.useEffect\": ()=>{\n            async function fetchIntervalTradingData() {\n                const res = await fetch(\"https://server-mmdev.vest.exchange/v2/klines?symbol=ETH-PERP&interval=1m&limit=300\");\n                const rawData = await res.json();\n                const formattedData = (0,_app_utils_transform_chart__WEBPACK_IMPORTED_MODULE_3__.transformIntervalChartData)(rawData);\n                setIntervalTradingData(formattedData);\n            }\n            fetchIntervalTradingData();\n        }\n    }[\"Chart.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)({\n        \"Chart.useEffect\": ()=>{\n            if (!intervalTradingData || !chartContainerRef.current) {\n                setIsLoading(true);\n                return;\n            }\n            chartRef.current = (0,lightweight_charts__WEBPACK_IMPORTED_MODULE_5__.createChart)(chartContainerRef.current, {\n                layout: {\n                    background: {\n                        type: lightweight_charts__WEBPACK_IMPORTED_MODULE_5__.ColorType.Solid,\n                        color: \"#161514\"\n                    },\n                    textColor: \"#d1d4dc\"\n                },\n                grid: {\n                    vertLines: {\n                        color: \"#424242\"\n                    },\n                    horzLines: {\n                        color: \"#424242\"\n                    }\n                },\n                rightPriceScale: {\n                    borderColor: \"#2c2c2c\"\n                },\n                timeScale: {\n                    borderColor: \"#2c2c2c\"\n                }\n            });\n            seriesRef.current = chartRef.current.addCandlestickSeries({\n                upColor: \"#26a69a\",\n                downColor: \"#ef5350\",\n                borderVisible: false,\n                wickUpColor: \"#26a69a\",\n                wickDownColor: \"#ef5350\"\n            });\n            seriesRef.current.setData(intervalTradingData);\n            const handleResize = {\n                \"Chart.useEffect.handleResize\": ()=>{\n                    if (chartRef.current && chartContainerRef.current) {\n                        chartRef.current.applyOptions({\n                            width: chartContainerRef.current.clientWidth,\n                            height: chartContainerRef.current.clientHeight\n                        });\n                    }\n                }\n            }[\"Chart.useEffect.handleResize\"];\n            window.addEventListener(\"resize\", handleResize);\n            setIsLoading(false);\n            setTimeout(handleResize, 1);\n            const handler = chartRef.current.subscribeCrosshairMove({\n                \"Chart.useEffect.handler\": (param)=>{\n                    const candleData = param.seriesData.get(seriesRef.current);\n                    setHoveredData(candleData);\n                }\n            }[\"Chart.useEffect.handler\"]);\n            return ({\n                \"Chart.useEffect\": ()=>{\n                    var _chartRef_current, _chartRef_current1;\n                    window.removeEventListener(\"resize\", handleResize);\n                    (_chartRef_current = chartRef.current) === null || _chartRef_current === void 0 ? void 0 : _chartRef_current.remove();\n                    (_chartRef_current1 = chartRef.current) === null || _chartRef_current1 === void 0 ? void 0 : _chartRef_current1.unsubscribeCrosshairMove(handler);\n                    chartRef.current = null;\n                    seriesRef.current = null;\n                }\n            })[\"Chart.useEffect\"];\n        }\n    }[\"Chart.useEffect\"], [\n        intervalTradingData,\n        setHoveredData\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)({\n        \"Chart.useEffect\": ()=>{\n            const emojiPrimitive = new _app_utils_emoji_plugin__WEBPACK_IMPORTED_MODULE_2__.EmojiPlugin(chartRef.current, seriesRef.current, emojiTimestamp);\n            seriesRef.current.attachPrimitive(emojiPrimitive);\n        }\n    }[\"Chart.useEffect\"]);\n    // TODO: use prev trading data while the new one is loading in\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)({\n        \"Chart.useEffect\": ()=>{\n            if (liveTradingData && seriesRef.current) {\n                setHoveredData(liveTradingData);\n                seriesRef.current.update(liveTradingData);\n            }\n        }\n    }[\"Chart.useEffect\"], [\n        liveTradingData,\n        setHoveredData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-[600px] w-full\",\n            ref: setNodeRef,\n            children: [\n                isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SkeletonLoadingChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                    lineNumber: 147,\n                    columnNumber: 19\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: chartContainerRef,\n                    className: \"z-0 relative h-full \".concat(isLoading ? \"hidden\" : \"\"),\n                    onDragOver: (e)=>e.preventDefault(),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-8 left-2 z-10 p-2 font-mono text-sm pointer-events-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-4 text-[#26a69a]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: \"O\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                            lineNumber: 158,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        \" \",\n                                        hoveredData === null || hoveredData === void 0 ? void 0 : hoveredData.open.toFixed(2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                    lineNumber: 157,\n                                    columnNumber: 8\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: \"H\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                            lineNumber: 162,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        \" \",\n                                        hoveredData === null || hoveredData === void 0 ? void 0 : hoveredData.high.toFixed(2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                    lineNumber: 161,\n                                    columnNumber: 8\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: \"L\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                            lineNumber: 166,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        \" \",\n                                        hoveredData === null || hoveredData === void 0 ? void 0 : hoveredData.low.toFixed(2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                    lineNumber: 165,\n                                    columnNumber: 8\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: \"C\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                            lineNumber: 170,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        \" \",\n                                        hoveredData === null || hoveredData === void 0 ? void 0 : hoveredData.close.toFixed(2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                                    lineNumber: 169,\n                                    columnNumber: 8\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                            lineNumber: 156,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                        lineNumber: 155,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n                    lineNumber: 149,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alan/Programming/takehome/frontend/src/app/components/TradingChart/Chart.tsx\",\n            lineNumber: 143,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false);\n};\n_s(Chart, \"jS+YSu82WTORtOiaD7SpGhforIg=\", false, function() {\n    return [\n        _app_hooks_useWebsocket__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        _dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.useDroppable\n    ];\n});\n_c = Chart;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chart);\nvar _c;\n$RefreshReg$(_c, \"Chart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UcmFkaW5nQ2hhcnQvQ2hhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNHO0FBSWxCO0FBQ1E7QUFPakI7QUFRYjtBQUM0QztBQVMxRCxNQUFNVSxRQUF3QjtRQUFDLEVBQzlCQyxXQUFXLEVBQ1hDLGNBQWMsRUFDZEMsY0FBYyxFQUNkOztJQUNBLE1BQU1DLG9CQUFvQlAsNkNBQU1BLENBQWlCO0lBQ2pELE1BQU1RLFdBQVdSLDZDQUFNQSxDQUFtQjtJQUMxQyxNQUFNUyxZQUFZVCw2Q0FBTUEsQ0FBbUM7SUFFM0QsTUFBTSxDQUFDVSxxQkFBcUJDLHVCQUF1QixHQUFHViwrQ0FBUUE7SUFHOUQsTUFBTSxDQUFDVyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU0sQ0FBQ2EsU0FBU0MsZ0JBQWdCLEdBQUd0QixtRUFBWUE7SUFFL0MsTUFBTSxFQUFFdUIsVUFBVSxFQUFFLEdBQUdwQiwyREFBWUEsQ0FBQztRQUNuQ3FCLElBQUk7SUFDTDtJQUVBbEIsZ0RBQVNBOzJCQUFDO1lBQ1QsZUFBZW1CO2dCQUNkLE1BQU1DLE1BQU0sTUFBTUMsTUFDakI7Z0JBRUQsTUFBTUMsVUFBVSxNQUFNRixJQUFJRyxJQUFJO2dCQUM5QixNQUFNQyxnQkFBZ0I1QixzRkFBMEJBLENBQUMwQjtnQkFDakRWLHVCQUF1Qlk7WUFDeEI7WUFFQUw7UUFDRDswQkFBRyxFQUFFO0lBRUxuQixnREFBU0E7MkJBQUM7WUFDVCxJQUFJLENBQUNXLHVCQUF1QixDQUFDSCxrQkFBa0JpQixPQUFPLEVBQUU7Z0JBQ3ZEWCxhQUFhO2dCQUNiO1lBQ0Q7WUFDQUwsU0FBU2dCLE9BQU8sR0FBRzFCLCtEQUFXQSxDQUFDUyxrQkFBa0JpQixPQUFPLEVBQUU7Z0JBQ3pEQyxRQUFRO29CQUNQQyxZQUFZO3dCQUFFQyxNQUFNOUIseURBQVNBLENBQUMrQixLQUFLO3dCQUFFQyxP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QUFDQzs0Q0FBS04sV0FBVTtzREFBYTs7Ozs7O3dDQUFTO3dDQUNyQzlELHdCQUFBQSxrQ0FBQUEsWUFBYXdFLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDOzs7Ozs7OzhDQUUzQiw4REFBQ0g7O3NEQUNBLDhEQUFDQzs0Q0FBS04sV0FBVTtzREFBYTs7Ozs7O3dDQUFTO3dDQUNyQzlELHdCQUFBQSxrQ0FBQUEsWUFBYXlFLEtBQUssQ0FBQ0gsT0FBTyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRcEM7R0FuSk12RTs7UUFjOEJWLCtEQUFZQTtRQUV4QkcsdURBQVlBOzs7S0FoQjlCTztBQXFKTixpRUFBZUEsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL2FsYW4vUHJvZ3JhbW1pbmcvdGFrZWhvbWUvZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL1RyYWRpbmdDaGFydC9DaGFydC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVdlYnNvY2tldCBmcm9tIFwiQC9hcHAvaG9va3MvdXNlV2Vic29ja2V0XCJcbmltcG9ydCB7IEVtb2ppUGx1Z2luIH0gZnJvbSBcIkAvYXBwL3V0aWxzL2Vtb2ppLXBsdWdpblwiXG5pbXBvcnQge1xuXHRUcmFkaW5nRGF0YSxcblx0dHJhbnNmb3JtSW50ZXJ2YWxDaGFydERhdGEsXG59IGZyb20gXCJAL2FwcC91dGlscy90cmFuc2Zvcm0tY2hhcnRcIlxuaW1wb3J0IHsgdXNlRHJvcHBhYmxlIH0gZnJvbSBcIkBkbmQta2l0L2NvcmVcIlxuaW1wb3J0IHtcblx0Q29sb3JUeXBlLFxuXHRjcmVhdGVDaGFydCxcblx0SUNoYXJ0QXBpLFxuXHRJU2VyaWVzQXBpLFxuXHRVVENUaW1lc3RhbXAsXG59IGZyb20gXCJsaWdodHdlaWdodC1jaGFydHNcIlxuaW1wb3J0IHtcblx0RGlzcGF0Y2gsXG5cdEZDLFxuXHRTZXRTdGF0ZUFjdGlvbixcblx0dXNlRWZmZWN0LFxuXHR1c2VSZWYsXG5cdHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFNrZWxldG9uTG9hZGluZ0NoYXJ0IGZyb20gXCIuLi9Ta2VsZXRvbkxvYWRpbmdDaGFydFwiXG5pbXBvcnQgeyBPSExDRGF0YSB9IGZyb20gXCIuXCJcblxuaW50ZXJmYWNlIENoYXJ0UHJvcHMge1xuXHRob3ZlcmVkRGF0YTogT0hMQ0RhdGEgfCB1bmRlZmluZWRcblx0c2V0SG92ZXJlZERhdGE6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPE9ITENEYXRhIHwgdW5kZWZpbmVkPj5cblx0ZW1vamlUaW1lc3RhbXA6IG51bWJlciB8IG51bGxcbn1cblxuY29uc3QgQ2hhcnQ6IEZDPENoYXJ0UHJvcHM+ID0gKHtcblx0aG92ZXJlZERhdGEsXG5cdHNldEhvdmVyZWREYXRhLFxuXHRlbW9qaVRpbWVzdGFtcCxcbn0pID0+IHtcblx0Y29uc3QgY2hhcnRDb250YWluZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG5cdGNvbnN0IGNoYXJ0UmVmID0gdXNlUmVmPElDaGFydEFwaSB8IG51bGw+KG51bGwpXG5cdGNvbnN0IHNlcmllc1JlZiA9IHVzZVJlZjxJU2VyaWVzQXBpPFwiQ2FuZGxlc3RpY2tcIj4gfCBudWxsPihudWxsKVxuXG5cdGNvbnN0IFtpbnRlcnZhbFRyYWRpbmdEYXRhLCBzZXRJbnRlcnZhbFRyYWRpbmdEYXRhXSA9IHVzZVN0YXRlPFxuXHRcdFRyYWRpbmdEYXRhW10gfCBudWxsXG5cdD4oKVxuXHRjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblxuXHRjb25zdCBbaXNSZWFkeSwgbGl2ZVRyYWRpbmdEYXRhXSA9IHVzZVdlYnNvY2tldCgpXG5cblx0Y29uc3QgeyBzZXROb2RlUmVmIH0gPSB1c2VEcm9wcGFibGUoe1xuXHRcdGlkOiBcInRyYWRpbmctY2hhcnRcIixcblx0fSlcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGFzeW5jIGZ1bmN0aW9uIGZldGNoSW50ZXJ2YWxUcmFkaW5nRGF0YSgpIHtcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuXHRcdFx0XHRcImh0dHBzOi8vc2VydmVyLW1tZGV2LnZlc3QuZXhjaGFuZ2UvdjIva2xpbmVzP3N5bWJvbD1FVEgtUEVSUCZpbnRlcnZhbD0xbSZsaW1pdD0zMDBcIlxuXHRcdFx0KVxuXHRcdFx0Y29uc3QgcmF3RGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblx0XHRcdGNvbnN0IGZvcm1hdHRlZERhdGEgPSB0cmFuc2Zvcm1JbnRlcnZhbENoYXJ0RGF0YShyYXdEYXRhKVxuXHRcdFx0c2V0SW50ZXJ2YWxUcmFkaW5nRGF0YShmb3JtYXR0ZWREYXRhKVxuXHRcdH1cblxuXHRcdGZldGNoSW50ZXJ2YWxUcmFkaW5nRGF0YSgpXG5cdH0sIFtdKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKCFpbnRlcnZhbFRyYWRpbmdEYXRhIHx8ICFjaGFydENvbnRhaW5lclJlZi5jdXJyZW50KSB7XG5cdFx0XHRzZXRJc0xvYWRpbmcodHJ1ZSlcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRjaGFydFJlZi5jdXJyZW50ID0gY3JlYXRlQ2hhcnQoY2hhcnRDb250YWluZXJSZWYuY3VycmVudCwge1xuXHRcdFx0bGF5b3V0OiB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHsgdHlwZTogQ29sb3JUeXBlLlNvbGlkLCBjb2xvcjogXCIjMTYxNTE0XCIgfSxcblx0XHRcdFx0dGV4dENvbG9yOiBcIiNkMWQ0ZGNcIixcblx0XHRcdH0sXG5cdFx0XHRncmlkOiB7XG5cdFx0XHRcdHZlcnRMaW5lczogeyBjb2xvcjogXCIjNDI0MjQyXCIgfSxcblx0XHRcdFx0aG9yekxpbmVzOiB7IGNvbG9yOiBcIiM0MjQyNDJcIiB9LFxuXHRcdFx0fSxcblx0XHRcdHJpZ2h0UHJpY2VTY2FsZToge1xuXHRcdFx0XHRib3JkZXJDb2xvcjogXCIjMmMyYzJjXCIsXG5cdFx0XHR9LFxuXHRcdFx0dGltZVNjYWxlOiB7XG5cdFx0XHRcdGJvcmRlckNvbG9yOiBcIiMyYzJjMmNcIixcblx0XHRcdH0sXG5cdFx0fSlcblxuXHRcdHNlcmllc1JlZi5jdXJyZW50ID0gY2hhcnRSZWYuY3VycmVudC5hZGRDYW5kbGVzdGlja1Nlcmllcyh7XG5cdFx0XHR1cENvbG9yOiBcIiMyNmE2OWFcIixcblx0XHRcdGRvd25Db2xvcjogXCIjZWY1MzUwXCIsXG5cdFx0XHRib3JkZXJWaXNpYmxlOiBmYWxzZSxcblx0XHRcdHdpY2tVcENvbG9yOiBcIiMyNmE2OWFcIixcblx0XHRcdHdpY2tEb3duQ29sb3I6IFwiI2VmNTM1MFwiLFxuXHRcdH0pXG5cblx0XHRzZXJpZXNSZWYuY3VycmVudC5zZXREYXRhKGludGVydmFsVHJhZGluZ0RhdGEpXG5cblx0XHRjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG5cdFx0XHRpZiAoY2hhcnRSZWYuY3VycmVudCAmJiBjaGFydENvbnRhaW5lclJlZi5jdXJyZW50KSB7XG5cdFx0XHRcdGNoYXJ0UmVmLmN1cnJlbnQuYXBwbHlPcHRpb25zKHtcblx0XHRcdFx0XHR3aWR0aDogY2hhcnRDb250YWluZXJSZWYuY3VycmVudC5jbGllbnRXaWR0aCxcblx0XHRcdFx0XHRoZWlnaHQ6IGNoYXJ0Q29udGFpbmVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0LFxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSlcblx0XHRzZXRJc0xvYWRpbmcoZmFsc2UpXG5cblx0XHRzZXRUaW1lb3V0KGhhbmRsZVJlc2l6ZSwgMSlcblxuXHRcdGNvbnN0IGhhbmRsZXIgPSBjaGFydFJlZi5jdXJyZW50LnN1YnNjcmliZUNyb3NzaGFpck1vdmUoKHBhcmFtKSA9PiB7XG5cdFx0XHRjb25zdCBjYW5kbGVEYXRhID0gcGFyYW0uc2VyaWVzRGF0YS5nZXQoc2VyaWVzUmVmLmN1cnJlbnQpIGFzIE9ITENEYXRhXG5cdFx0XHRzZXRIb3ZlcmVkRGF0YShjYW5kbGVEYXRhKVxuXHRcdH0pXG5cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKVxuXHRcdFx0Y2hhcnRSZWYuY3VycmVudD8ucmVtb3ZlKClcblx0XHRcdGNoYXJ0UmVmLmN1cnJlbnQ/LnVuc3Vic2NyaWJlQ3Jvc3NoYWlyTW92ZShoYW5kbGVyKVxuXHRcdFx0Y2hhcnRSZWYuY3VycmVudCA9IG51bGxcblx0XHRcdHNlcmllc1JlZi5jdXJyZW50ID0gbnVsbFxuXHRcdH1cblx0fSwgW2ludGVydmFsVHJhZGluZ0RhdGEsIHNldEhvdmVyZWREYXRhXSlcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGVtb2ppUHJpbWl0aXZlID0gbmV3IEVtb2ppUGx1Z2luKFxuXHRcdFx0Y2hhcnRSZWYuY3VycmVudCxcblx0XHRcdHNlcmllc1JlZi5jdXJyZW50LFxuXHRcdFx0ZW1vamlUaW1lc3RhbXAgYXMgVVRDVGltZXN0YW1wXG5cdFx0KVxuXHRcdHNlcmllc1JlZi5jdXJyZW50LmF0dGFjaFByaW1pdGl2ZShlbW9qaVByaW1pdGl2ZSlcblx0fSlcblxuXHQvLyBUT0RPOiB1c2UgcHJldiB0cmFkaW5nIGRhdGEgd2hpbGUgdGhlIG5ldyBvbmUgaXMgbG9hZGluZyBpblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChsaXZlVHJhZGluZ0RhdGEgJiYgc2VyaWVzUmVmLmN1cnJlbnQpIHtcblx0XHRcdHNldEhvdmVyZWREYXRhKGxpdmVUcmFkaW5nRGF0YSlcblx0XHRcdHNlcmllc1JlZi5jdXJyZW50LnVwZGF0ZShsaXZlVHJhZGluZ0RhdGEpXG5cdFx0fVxuXHR9LCBbbGl2ZVRyYWRpbmdEYXRhLCBzZXRIb3ZlcmVkRGF0YV0pXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPVwiaC1bNjAwcHhdIHctZnVsbFwiXG5cdFx0XHRcdHJlZj17c2V0Tm9kZVJlZn1cblx0XHRcdD5cblx0XHRcdFx0e2lzTG9hZGluZyAmJiA8U2tlbGV0b25Mb2FkaW5nQ2hhcnQgLz59XG5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdHJlZj17Y2hhcnRDb250YWluZXJSZWZ9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtgei0wIHJlbGF0aXZlIGgtZnVsbCAke2lzTG9hZGluZyA/IFwiaGlkZGVuXCIgOiBcIlwifWB9XG5cdFx0XHRcdFx0b25EcmFnT3Zlcj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsvKiBUT0RPOiBtYWtlIGFjY3VyYXRlIHRvIGZpZ21hIChpbmNsdWRlIHRpdGxlICYgdm9sdW1lKSAqL31cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC04IGxlZnQtMiB6LTEwIHAtMiBmb250LW1vbm8gdGV4dC1zbSBwb2ludGVyLWV2ZW50cy1ub25lXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgdGV4dC1bIzI2YTY5YV1cIj5cblx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPk88L3NwYW4+e1wiIFwifVxuXHRcdFx0XHRcdFx0XHRcdHtob3ZlcmVkRGF0YT8ub3Blbi50b0ZpeGVkKDIpfVxuXHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5IPC9zcGFuPntcIiBcIn1cblx0XHRcdFx0XHRcdFx0XHR7aG92ZXJlZERhdGE/LmhpZ2gudG9GaXhlZCgyKX1cblx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+TDwvc3Bhbj57XCIgXCJ9XG5cdFx0XHRcdFx0XHRcdFx0e2hvdmVyZWREYXRhPy5sb3cudG9GaXhlZCgyKX1cblx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+Qzwvc3Bhbj57XCIgXCJ9XG5cdFx0XHRcdFx0XHRcdFx0e2hvdmVyZWREYXRhPy5jbG9zZS50b0ZpeGVkKDIpfVxuXHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFydFxuIl0sIm5hbWVzIjpbInVzZVdlYnNvY2tldCIsIkVtb2ppUGx1Z2luIiwidHJhbnNmb3JtSW50ZXJ2YWxDaGFydERhdGEiLCJ1c2VEcm9wcGFibGUiLCJDb2xvclR5cGUiLCJjcmVhdGVDaGFydCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiU2tlbGV0b25Mb2FkaW5nQ2hhcnQiLCJDaGFydCIsImhvdmVyZWREYXRhIiwic2V0SG92ZXJlZERhdGEiLCJlbW9qaVRpbWVzdGFtcCIsImNoYXJ0Q29udGFpbmVyUmVmIiwiY2hhcnRSZWYiLCJzZXJpZXNSZWYiLCJpbnRlcnZhbFRyYWRpbmdEYXRhIiwic2V0SW50ZXJ2YWxUcmFkaW5nRGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImlzUmVhZHkiLCJsaXZlVHJhZGluZ0RhdGEiLCJzZXROb2RlUmVmIiwiaWQiLCJmZXRjaEludGVydmFsVHJhZGluZ0RhdGEiLCJyZXMiLCJmZXRjaCIsInJhd0RhdGEiLCJqc29uIiwiZm9ybWF0dGVkRGF0YSIsImN1cnJlbnQiLCJsYXlvdXQiLCJiYWNrZ3JvdW5kIiwidHlwZSIsIlNvbGlkIiwiY29sb3IiLCJ0ZXh0Q29sb3IiLCJncmlkIiwidmVydExpbmVzIiwiaG9yekxpbmVzIiwicmlnaHRQcmljZVNjYWxlIiwiYm9yZGVyQ29sb3IiLCJ0aW1lU2NhbGUiLCJhZGRDYW5kbGVzdGlja1NlcmllcyIsInVwQ29sb3IiLCJkb3duQ29sb3IiLCJib3JkZXJWaXNpYmxlIiwid2lja1VwQ29sb3IiLCJ3aWNrRG93bkNvbG9yIiwic2V0RGF0YSIsImhhbmRsZVJlc2l6ZSIsImFwcGx5T3B0aW9ucyIsIndpZHRoIiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsImhhbmRsZXIiLCJzdWJzY3JpYmVDcm9zc2hhaXJNb3ZlIiwicGFyYW0iLCJjYW5kbGVEYXRhIiwic2VyaWVzRGF0YSIsImdldCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJ1bnN1YnNjcmliZUNyb3NzaGFpck1vdmUiLCJlbW9qaVByaW1pdGl2ZSIsImF0dGFjaFByaW1pdGl2ZSIsInVwZGF0ZSIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsIm9uRHJhZ092ZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJwIiwic3BhbiIsIm9wZW4iLCJ0b0ZpeGVkIiwiaGlnaCIsImxvdyIsImNsb3NlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TradingChart/Chart.tsx\n"));

/***/ })

});