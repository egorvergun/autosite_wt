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

/***/ "(app-pages-browser)/./styles/HomeStyles.js":
/*!******************************!*\
  !*** ./styles/HomeStyles.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// styles/HomeStyles.js\nconst homeStyles = {\n    container: {\n        height: '100vh',\n        backgroundImage: 'url(/car.png)',\n        backgroundSize: 'cover',\n        backgroundPosition: 'center',\n        display: 'flex',\n        justifyContent: 'left',\n        alignItems: 'center',\n        paddingLeft: '5%',\n        position: 'relative',\n        color: 'white',\n        textAlign: 'left'\n    },\n    textContainer: {\n        position: 'relative',\n        zIndex: 1,\n        marginTop: '20%'\n    },\n    headline: {\n        fontWeight: 'bold',\n        whiteSpace: 'nowrap',\n        fontSize: {\n            xs: '2rem',\n            md: '3rem'\n        },\n        mb: 2\n    },\n    subheadline: {\n        mb: 4\n    },\n    button: {\n        color: 'white',\n        borderColor: 'white',\n        borderRadius: '50px',\n        '&:hover': {\n            backgroundColor: 'white',\n            color: 'black'\n        }\n    },\n    overlay: {\n        position: 'absolute',\n        top: 0,\n        left: 0,\n        right: 0,\n        bottom: 0,\n        backgroundColor: 'rgba(0, 0, 0, 0.3)',\n        zIndex: 0\n    },\n    fadeUp: {\n        position: 'absolute',\n        bottom: 0,\n        left: 0,\n        height: '30%',\n        width: '100%',\n        backgroundRepeat: 'no-repeat',\n        zIndex: 4\n    },\n    fadeDown: {\n        position: 'absolute',\n        top: 0,\n        left: 0,\n        height: '30%',\n        width: '100%',\n        backgroundRepeat: 'no-repeat',\n        zIndex: 6\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeStyles);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9Ib21lU3R5bGVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSx1QkFBdUI7QUFFdkIsTUFBTUEsYUFBYTtJQUNmQyxXQUFXO1FBQ1RDLFFBQVE7UUFDUkMsaUJBQWlCO1FBQ2pCQyxnQkFBZ0I7UUFDaEJDLG9CQUFvQjtRQUNwQkMsU0FBUztRQUNUQyxnQkFBZ0I7UUFDaEJDLFlBQVk7UUFDWkMsYUFBYTtRQUNiQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsV0FBVztJQUNiO0lBQ0FDLGVBQWU7UUFDYkgsVUFBVTtRQUNWSSxRQUFRO1FBQ1JDLFdBQVc7SUFDYjtJQUNBQyxVQUFVO1FBQ1JDLFlBQVk7UUFDWkMsWUFBWTtRQUNaQyxVQUFVO1lBQUVDLElBQUk7WUFBUUMsSUFBSTtRQUFPO1FBQ25DQyxJQUFJO0lBQ047SUFDQUMsYUFBYTtRQUNYRCxJQUFJO0lBQ047SUFDQUUsUUFBUTtRQUNOYixPQUFPO1FBQ1BjLGFBQWE7UUFDYkMsY0FBYztRQUNkLFdBQVc7WUFDVEMsaUJBQWlCO1lBQ2pCaEIsT0FBTztRQUNUO0lBQ0Y7SUFDQWlCLFNBQVM7UUFDUGxCLFVBQVU7UUFDVm1CLEtBQUs7UUFDTEMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkwsaUJBQWlCO1FBQ2pCYixRQUFRO0lBQ1Y7SUFDQW1CLFFBQVE7UUFDTnZCLFVBQVU7UUFDVnNCLFFBQVE7UUFDUkYsTUFBTTtRQUNONUIsUUFBUTtRQUNSZ0MsT0FBTztRQUNQQyxrQkFBa0I7UUFDbEJyQixRQUFRO0lBQ1Y7SUFDQXNCLFVBQVU7UUFFUjFCLFVBQVU7UUFDVm1CLEtBQUs7UUFDTEMsTUFBTTtRQUNONUIsUUFBUTtRQUNSZ0MsT0FBTztRQUNQQyxrQkFBa0I7UUFDbEJyQixRQUFRO0lBQ1Y7QUFDRjtBQUVBLGlFQUFlZCxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9Ib21lU3R5bGVzLmpzPzg4MDMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3R5bGVzL0hvbWVTdHlsZXMuanNcclxuXHJcbmNvbnN0IGhvbWVTdHlsZXMgPSB7XHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgaGVpZ2h0OiAnMTAwdmgnLCAvLyDQstGL0YHQvtGC0LAg0L3QsCDQstGB0Y4g0YHRgtGA0LDQvdC40YbRg1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoL2Nhci5wbmcpJywgLy8g0L/Rg9GC0Ywg0Log0LjQt9C+0LHRgNCw0LbQtdC90LjRjiDQvNCw0YjQuNC90YtcclxuICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsIC8vINC40LfQvtCx0YDQsNC20LXQvdC40LUg0L/QvtC60YDRi9Cy0LDQtdGCINCy0YHRjiDQvtCx0LvQsNGB0YLRjFxyXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnbGVmdCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLCAvLyDQstGL0YDQsNCy0L3QuNCy0LDQvdC40LUg0L/QviDQstC10YDRgtC40LrQsNC70LggKNGB0LvQtdCy0LApXHJcbiAgICAgIHBhZGRpbmdMZWZ0OiAnNSUnLCAvLyDQvtGC0YHRgtGD0L8g0YHQu9C10LLQsCDQtNC70Y8g0YLQtdC60YHRgtCwXHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgdGV4dEFsaWduOiAnbGVmdCcsIC8vINGC0LXQutGB0YIg0LLRi9GA0L7QstC90LXQvSDQv9C+INC70LXQstC+0LzRgyDQutGA0LDRjlxyXG4gICAgfSxcclxuICAgIHRleHRDb250YWluZXI6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHpJbmRleDogMSxcclxuICAgICAgbWFyZ2luVG9wOiAnMjAlJywgLy8g0L7RgtGB0YLRg9C/INGB0LLQtdGA0YXRgyDQtNC70Y8g0L/QvtC30LjRhtC40L7QvdC40YDQvtCy0LDQvdC40Y8g0L/QviDQstC10YDRgtC40LrQsNC70LhcclxuICAgIH0sXHJcbiAgICBoZWFkbGluZToge1xyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICBmb250U2l6ZTogeyB4czogJzJyZW0nLCBtZDogJzNyZW0nIH0sXHJcbiAgICAgIG1iOiAyLFxyXG4gICAgfSxcclxuICAgIHN1YmhlYWRsaW5lOiB7XHJcbiAgICAgIG1iOiA0LFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgYm9yZGVyQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzUwcHgnLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgb3ZlcmxheToge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMyknLFxyXG4gICAgICB6SW5kZXg6IDAsXHJcbiAgICB9LFxyXG4gICAgZmFkZVVwOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBib3R0b206IDAsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIGhlaWdodDogJzMwJScsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgICB6SW5kZXg6IDQsXHJcbiAgICB9LFxyXG4gICAgZmFkZURvd246IHtcclxuICAgICAgXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIGhlaWdodDogJzMwJScsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgICB6SW5kZXg6IDYsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgaG9tZVN0eWxlcztcclxuICAiXSwibmFtZXMiOlsiaG9tZVN0eWxlcyIsImNvbnRhaW5lciIsImhlaWdodCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInBhZGRpbmdMZWZ0IiwicG9zaXRpb24iLCJjb2xvciIsInRleHRBbGlnbiIsInRleHRDb250YWluZXIiLCJ6SW5kZXgiLCJtYXJnaW5Ub3AiLCJoZWFkbGluZSIsImZvbnRXZWlnaHQiLCJ3aGl0ZVNwYWNlIiwiZm9udFNpemUiLCJ4cyIsIm1kIiwibWIiLCJzdWJoZWFkbGluZSIsImJ1dHRvbiIsImJvcmRlckNvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwib3ZlcmxheSIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsImZhZGVVcCIsIndpZHRoIiwiYmFja2dyb3VuZFJlcGVhdCIsImZhZGVEb3duIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/HomeStyles.js\n"));

/***/ })

});