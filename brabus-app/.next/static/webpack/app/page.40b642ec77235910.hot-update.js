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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// styles/HomeStyles.js\nconst homeStyles = {\n    container: {\n        height: '100vh',\n        backgroundImage: 'url(/car.png)',\n        backgroundSize: 'cover',\n        backgroundPosition: 'center',\n        display: 'flex',\n        justifyContent: 'left',\n        alignItems: 'center',\n        paddingLeft: '5%',\n        position: 'relative',\n        color: 'white',\n        textAlign: 'left'\n    },\n    textContainer: {\n        position: 'relative',\n        zIndex: 1,\n        marginTop: '20%'\n    },\n    headline: {\n        fontWeight: 'bold',\n        whiteSpace: 'nowrap',\n        fontSize: {\n            xs: '2rem',\n            md: '3rem'\n        },\n        mb: 2\n    },\n    subheadline: {\n        mb: 4\n    },\n    button: {\n        color: 'white',\n        borderColor: 'white',\n        borderRadius: '50px',\n        '&:hover': {\n            backgroundColor: 'white',\n            color: 'black'\n        }\n    },\n    overlay: {\n        position: 'absolute',\n        top: 0,\n        left: 0,\n        right: 0,\n        bottom: 0,\n        backgroundColor: 'rgba(0, 0, 0, 0.3)',\n        zIndex: 0\n    },\n    fadeUp: {\n        position: 'absolute',\n        bottom: 0,\n        left: 0,\n        height: '30%',\n        width: '100%',\n        backgroundRepeat: 'no-repeat',\n        zIndex: 0\n    },\n    fadeDown: {\n        position: 'absolute',\n        top: -1,\n        left: 0,\n        height: '30%',\n        width: '100%',\n        backgroundRepeat: 'no-repeat',\n        zIndex: 0\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeStyles);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9Ib21lU3R5bGVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSx1QkFBdUI7QUFFdkIsTUFBTUEsYUFBYTtJQUNmQyxXQUFXO1FBQ1RDLFFBQVE7UUFDUkMsaUJBQWlCO1FBQ2pCQyxnQkFBZ0I7UUFDaEJDLG9CQUFvQjtRQUNwQkMsU0FBUztRQUNUQyxnQkFBZ0I7UUFDaEJDLFlBQVk7UUFDWkMsYUFBYTtRQUNiQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsV0FBVztJQUNiO0lBQ0FDLGVBQWU7UUFDYkgsVUFBVTtRQUNWSSxRQUFRO1FBQ1JDLFdBQVc7SUFDYjtJQUNBQyxVQUFVO1FBQ1JDLFlBQVk7UUFDWkMsWUFBWTtRQUNaQyxVQUFVO1lBQUVDLElBQUk7WUFBUUMsSUFBSTtRQUFPO1FBQ25DQyxJQUFJO0lBQ047SUFDQUMsYUFBYTtRQUNYRCxJQUFJO0lBQ047SUFDQUUsUUFBUTtRQUNOYixPQUFPO1FBQ1BjLGFBQWE7UUFDYkMsY0FBYztRQUNkLFdBQVc7WUFDVEMsaUJBQWlCO1lBQ2pCaEIsT0FBTztRQUNUO0lBQ0Y7SUFDQWlCLFNBQVM7UUFDUGxCLFVBQVU7UUFDVm1CLEtBQUs7UUFDTEMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkwsaUJBQWlCO1FBQ2pCYixRQUFRO0lBQ1Y7SUFDQW1CLFFBQVE7UUFDTnZCLFVBQVU7UUFDVnNCLFFBQVE7UUFDUkYsTUFBTTtRQUNONUIsUUFBUTtRQUNSZ0MsT0FBTztRQUNQQyxrQkFBa0I7UUFDbEJyQixRQUFRO0lBQ1Y7SUFDQXNCLFVBQVU7UUFFUjFCLFVBQVU7UUFDVm1CLEtBQUssQ0FBQztRQUNOQyxNQUFNO1FBQ041QixRQUFRO1FBQ1JnQyxPQUFPO1FBQ1BDLGtCQUFrQjtRQUNsQnJCLFFBQVE7SUFDVjtBQUNGO0FBRUEsaUVBQWVkLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0hvbWVTdHlsZXMuanM/ODgwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzdHlsZXMvSG9tZVN0eWxlcy5qc1xyXG5cclxuY29uc3QgaG9tZVN0eWxlcyA9IHtcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICBoZWlnaHQ6ICcxMDB2aCcsIC8vINCy0YvRgdC+0YLQsCDQvdCwINCy0YHRjiDRgdGC0YDQsNC90LjRhtGDXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybCgvY2FyLnBuZyknLCAvLyDQv9GD0YLRjCDQuiDQuNC30L7QsdGA0LDQttC10L3QuNGOINC80LDRiNC40L3Ri1xyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJywgLy8g0LjQt9C+0LHRgNCw0LbQtdC90LjQtSDQv9C+0LrRgNGL0LLQsNC10YIg0LLRgdGOINC+0LHQu9Cw0YHRgtGMXHJcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdsZWZ0JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsIC8vINCy0YvRgNCw0LLQvdC40LLQsNC90LjQtSDQv9C+INCy0LXRgNGC0LjQutCw0LvQuCAo0YHQu9C10LLQsClcclxuICAgICAgcGFkZGluZ0xlZnQ6ICc1JScsIC8vINC+0YLRgdGC0YPQvyDRgdC70LXQstCwINC00LvRjyDRgtC10LrRgdGC0LBcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0JywgLy8g0YLQtdC60YHRgiDQstGL0YDQvtCy0L3QtdC9INC/0L4g0LvQtdCy0L7QvNGDINC60YDQsNGOXHJcbiAgICB9LFxyXG4gICAgdGV4dENvbnRhaW5lcjoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgekluZGV4OiAxLFxyXG4gICAgICBtYXJnaW5Ub3A6ICcyMCUnLCAvLyDQvtGC0YHRgtGD0L8g0YHQstC10YDRhdGDINC00LvRjyDQv9C+0LfQuNGG0LjQvtC90LjRgNC+0LLQsNC90LjRjyDQv9C+INCy0LXRgNGC0LjQutCw0LvQuFxyXG4gICAgfSxcclxuICAgIGhlYWRsaW5lOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIGZvbnRTaXplOiB7IHhzOiAnMnJlbScsIG1kOiAnM3JlbScgfSxcclxuICAgICAgbWI6IDIsXHJcbiAgICB9LFxyXG4gICAgc3ViaGVhZGxpbmU6IHtcclxuICAgICAgbWI6IDQsXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBib3JkZXJDb2xvcjogJ3doaXRlJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTBweCcsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBvdmVybGF5OiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICBib3R0b206IDAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4zKScsXHJcbiAgICAgIHpJbmRleDogMCxcclxuICAgIH0sXHJcbiAgICBmYWRlVXA6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGJvdHRvbTogMCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgaGVpZ2h0OiAnMzAlJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICAgIHpJbmRleDogMCxcclxuICAgIH0sXHJcbiAgICBmYWRlRG93bjoge1xyXG4gICAgICBcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogLTEsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIGhlaWdodDogJzMwJScsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgICB6SW5kZXg6IDAsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgaG9tZVN0eWxlcztcclxuICAiXSwibmFtZXMiOlsiaG9tZVN0eWxlcyIsImNvbnRhaW5lciIsImhlaWdodCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInBhZGRpbmdMZWZ0IiwicG9zaXRpb24iLCJjb2xvciIsInRleHRBbGlnbiIsInRleHRDb250YWluZXIiLCJ6SW5kZXgiLCJtYXJnaW5Ub3AiLCJoZWFkbGluZSIsImZvbnRXZWlnaHQiLCJ3aGl0ZVNwYWNlIiwiZm9udFNpemUiLCJ4cyIsIm1kIiwibWIiLCJzdWJoZWFkbGluZSIsImJ1dHRvbiIsImJvcmRlckNvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwib3ZlcmxheSIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsImZhZGVVcCIsIndpZHRoIiwiYmFja2dyb3VuZFJlcGVhdCIsImZhZGVEb3duIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/HomeStyles.js\n"));

/***/ })

});