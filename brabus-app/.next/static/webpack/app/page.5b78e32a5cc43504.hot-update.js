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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// styles/HomeStyles.js\nconst homeStyles = {\n    container: {\n        height: '100vh',\n        backgroundImage: 'url(/car.png)',\n        backgroundSize: 'cover',\n        backgroundPosition: 'center',\n        display: 'flex',\n        justifyContent: 'left',\n        alignItems: 'center',\n        paddingLeft: '5%',\n        position: 'relative',\n        color: 'white',\n        textAlign: 'left'\n    },\n    textContainer: {\n        position: 'relative',\n        zIndex: 1,\n        marginTop: '20%'\n    },\n    headline: {\n        fontWeight: 'bold',\n        mb: 2\n    },\n    subheadline: {\n        mb: 4\n    },\n    button: {\n        color: 'white',\n        borderColor: 'white',\n        borderRadius: '50px',\n        '&:hover': {\n            backgroundColor: 'white',\n            color: 'black'\n        }\n    },\n    overlay: {\n        position: 'absolute',\n        top: 0,\n        left: 0,\n        right: 0,\n        bottom: 0,\n        backgroundColor: 'rgba(0, 0, 0, 0.3)',\n        zIndex: 0\n    },\n    fadeUp: {\n        position: 'absolute',\n        left: 0,\n        bottom: 0,\n        backgroundImage: 'url(/fade2.png)',\n        backgroundSize: 'cover',\n        height: '200px',\n        width: '1920px',\n        backgroundRepeat: 'no-repeat',\n        zIndex: 0\n    },\n    fadeDown: {\n        position: 'absolute',\n        top: 0,\n        left: 0,\n        right: 0,\n        bottom: 0,\n        backgroundImage: 'url(/fade.png)',\n        backgroundSize: 'cover',\n        height: '200px',\n        width: '100%',\n        backgroundRepeat: 'no-repeat',\n        zIndex: 0\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeStyles);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9Ib21lU3R5bGVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSx1QkFBdUI7QUFFdkIsTUFBTUEsYUFBYTtJQUNmQyxXQUFXO1FBQ1RDLFFBQVE7UUFDUkMsaUJBQWlCO1FBQ2pCQyxnQkFBZ0I7UUFDaEJDLG9CQUFvQjtRQUNwQkMsU0FBUztRQUNUQyxnQkFBZ0I7UUFDaEJDLFlBQVk7UUFDWkMsYUFBYTtRQUNiQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsV0FBVztJQUNiO0lBQ0FDLGVBQWU7UUFDYkgsVUFBVTtRQUNWSSxRQUFRO1FBQ1JDLFdBQVc7SUFDYjtJQUNBQyxVQUFVO1FBQ1JDLFlBQVk7UUFDWkMsSUFBSTtJQUNOO0lBQ0FDLGFBQWE7UUFDWEQsSUFBSTtJQUNOO0lBQ0FFLFFBQVE7UUFDTlQsT0FBTztRQUNQVSxhQUFhO1FBQ2JDLGNBQWM7UUFDZCxXQUFXO1lBQ1RDLGlCQUFpQjtZQUNqQlosT0FBTztRQUNUO0lBQ0Y7SUFDQWEsU0FBUztRQUNQZCxVQUFVO1FBQ1ZlLEtBQUs7UUFDTEMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkwsaUJBQWlCO1FBQ2pCVCxRQUFRO0lBQ1Y7SUFDQWUsUUFBUTtRQUNObkIsVUFBVTtRQUNWZ0IsTUFBTTtRQUNORSxRQUFRO1FBQ1J6QixpQkFBaUI7UUFDakJDLGdCQUFnQjtRQUNoQkYsUUFBUTtRQUNSNEIsT0FBTztRQUNQQyxrQkFBa0I7UUFDbEJqQixRQUFRO0lBQ1Y7SUFDQWtCLFVBQVU7UUFDUnRCLFVBQVU7UUFDVmUsS0FBSztRQUNMQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsUUFBUTtRQUNSekIsaUJBQWlCO1FBQ2pCQyxnQkFBZ0I7UUFDaEJGLFFBQVE7UUFDUjRCLE9BQU87UUFDUEMsa0JBQWtCO1FBQ2xCakIsUUFBUTtJQUNWO0FBQ0Y7QUFFQSxpRUFBZWQsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvSG9tZVN0eWxlcy5qcz84ODAzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHN0eWxlcy9Ib21lU3R5bGVzLmpzXHJcblxyXG5jb25zdCBob21lU3R5bGVzID0ge1xyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgIGhlaWdodDogJzEwMHZoJywgLy8g0LLRi9GB0L7RgtCwINC90LAg0LLRgdGOINGB0YLRgNCw0L3QuNGG0YNcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKC9jYXIucG5nKScsIC8vINC/0YPRgtGMINC6INC40LfQvtCx0YDQsNC20LXQvdC40Y4g0LzQsNGI0LjQvdGLXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLCAvLyDQuNC30L7QsdGA0LDQttC10L3QuNC1INC/0L7QutGA0YvQstCw0LXRgiDQstGB0Y4g0L7QsdC70LDRgdGC0YxcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2xlZnQnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJywgLy8g0LLRi9GA0LDQstC90LjQstCw0L3QuNC1INC/0L4g0LLQtdGA0YLQuNC60LDQu9C4ICjRgdC70LXQstCwKVxyXG4gICAgICBwYWRkaW5nTGVmdDogJzUlJywgLy8g0L7RgtGB0YLRg9C/INGB0LvQtdCy0LAg0LTQu9GPINGC0LXQutGB0YLQsFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIHRleHRBbGlnbjogJ2xlZnQnLCAvLyDRgtC10LrRgdGCINCy0YvRgNC+0LLQvdC10L0g0L/QviDQu9C10LLQvtC80YMg0LrRgNCw0Y5cclxuICAgIH0sXHJcbiAgICB0ZXh0Q29udGFpbmVyOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB6SW5kZXg6IDEsXHJcbiAgICAgIG1hcmdpblRvcDogJzIwJScsIC8vINC+0YLRgdGC0YPQvyDRgdCy0LXRgNGF0YMg0LTQu9GPINC/0L7Qt9C40YbQuNC+0L3QuNGA0L7QstCw0L3QuNGPINC/0L4g0LLQtdGA0YLQuNC60LDQu9C4XHJcbiAgICB9LFxyXG4gICAgaGVhZGxpbmU6IHtcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICBtYjogMixcclxuICAgIH0sXHJcbiAgICBzdWJoZWFkbGluZToge1xyXG4gICAgICBtYjogNCxcclxuICAgIH0sXHJcbiAgICBidXR0b246IHtcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MHB4JyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG92ZXJsYXk6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIGJvdHRvbTogMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjMpJyxcclxuICAgICAgekluZGV4OiAwLFxyXG4gICAgfSxcclxuICAgIGZhZGVVcDoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoL2ZhZGUyLnBuZyknLCAvLyDQo9Cx0LXQtNC40YLQtdGB0YwsINGH0YLQviDQv9GD0YLRjCDQuiDQuNC30L7QsdGA0LDQttC10L3QuNGOINC/0YDQsNCy0LjQu9GM0L3Ri9C5XHJcbiAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgICBoZWlnaHQ6ICcyMDBweCcsXHJcbiAgICAgIHdpZHRoOiAnMTkyMHB4JyxcclxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICAgIHpJbmRleDogMCxcclxuICAgIH0sXHJcbiAgICBmYWRlRG93bjoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoL2ZhZGUucG5nKScsIC8vINCj0LHQtdC00LjRgtC10YHRjCwg0YfRgtC+INC/0YPRgtGMINC6INC40LfQvtCx0YDQsNC20LXQvdC40Y4g0L/RgNCw0LLQuNC70YzQvdGL0LlcclxuICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICAgIGhlaWdodDogJzIwMHB4JyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICAgIHpJbmRleDogMCxcclxuICAgIH0sXHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBob21lU3R5bGVzO1xyXG4gICJdLCJuYW1lcyI6WyJob21lU3R5bGVzIiwiY29udGFpbmVyIiwiaGVpZ2h0IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicGFkZGluZ0xlZnQiLCJwb3NpdGlvbiIsImNvbG9yIiwidGV4dEFsaWduIiwidGV4dENvbnRhaW5lciIsInpJbmRleCIsIm1hcmdpblRvcCIsImhlYWRsaW5lIiwiZm9udFdlaWdodCIsIm1iIiwic3ViaGVhZGxpbmUiLCJidXR0b24iLCJib3JkZXJDb2xvciIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsIm92ZXJsYXkiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJmYWRlVXAiLCJ3aWR0aCIsImJhY2tncm91bmRSZXBlYXQiLCJmYWRlRG93biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/HomeStyles.js\n"));

/***/ })

});