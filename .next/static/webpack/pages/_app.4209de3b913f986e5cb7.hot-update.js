/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_pedroduarte_Documents_dev_jarvis_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/pedroduarte/Documents/dev/jarvis/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_pedroduarte_Documents_dev_jarvis_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar colors = {\n  primary: {\n    light: '#85d7ff',\n    DEFAULT: '#4882F8',\n    dark: '#2D426D'\n  }\n};\nvar config = {\n  initialColorMode: \"dark\",\n  useSystemColorMode: false\n};\nvar styles = {\n  global: {\n    body: {\n      bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_3__.mode)(\"#17171B\", \"whiteAlpha.500\"),\n      color: \"white\"\n    },\n    a: {\n      color: \"teal.500\",\n      _hover: {\n        textDecoration: \"underline\"\n      }\n    }\n  }\n};\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.extendTheme)({\n  colors: colors,\n  config: config,\n  styles: styles\n});\n\nfunction MyApp(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ChakraProvider, {\n    theme: theme,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, this);\n}\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/NzIxNiJdLCJuYW1lcyI6WyJjb2xvcnMiLCJwcmltYXJ5IiwibGlnaHQiLCJERUZBVUxUIiwiZGFyayIsImNvbmZpZyIsImluaXRpYWxDb2xvck1vZGUiLCJ1c2VTeXN0ZW1Db2xvck1vZGUiLCJzdHlsZXMiLCJnbG9iYWwiLCJib2R5IiwiYmciLCJtb2RlIiwiY29sb3IiLCJhIiwiX2hvdmVyIiwidGV4dERlY29yYXRpb24iLCJ0aGVtZSIsImV4dGVuZFRoZW1lIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLFNBQU8sRUFBRTtBQUNQQyxTQUFLLEVBQUUsU0FEQTtBQUVQQyxXQUFPLEVBQUUsU0FGRjtBQUdQQyxRQUFJLEVBQUU7QUFIQztBQURJLENBQWY7QUFRQSxJQUFNQyxNQUFvQixHQUFHO0FBQzNCQyxrQkFBZ0IsRUFBRSxNQURTO0FBRTNCQyxvQkFBa0IsRUFBRTtBQUZPLENBQTdCO0FBS0EsSUFBTUMsTUFBTSxHQUFHO0FBQ2JDLFFBQU0sRUFBRTtBQUNOQyxRQUFJLEVBQUU7QUFDSkMsUUFBRSxFQUFFQyw0REFBSSxDQUFDLFNBQUQsRUFBWSxnQkFBWixDQURKO0FBRUpDLFdBQUssRUFBRTtBQUZILEtBREE7QUFLTkMsS0FBQyxFQUFFO0FBQ0RELFdBQUssRUFBRSxVQUROO0FBRURFLFlBQU0sRUFBRTtBQUNOQyxzQkFBYyxFQUFFO0FBRFY7QUFGUDtBQUxHO0FBREssQ0FBZjtBQWVBLElBQU1DLEtBQUssR0FBR0MsNkRBQVcsQ0FBQztBQUFFbEIsUUFBTSxFQUFOQSxNQUFGO0FBQVVLLFFBQU0sRUFBTkEsTUFBVjtBQUFrQkcsUUFBTSxFQUFOQTtBQUFsQixDQUFELENBQXpCOztBQUVBLFNBQVNXLEtBQVQsT0FBbUQ7QUFBQSxNQUFsQ0MsU0FBa0MsUUFBbENBLFNBQWtDO0FBQUEsTUFBdkJDLFNBQXVCLFFBQXZCQSxTQUF1QjtBQUNqRCxzQkFDRSw4REFBQyw0REFBRDtBQUFnQixTQUFLLEVBQUVKLEtBQXZCO0FBQUEsMkJBQ0UsOERBQUMsU0FBRCxvQkFBZUksU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0tBTlFGLEs7QUFPVCwrREFBZUEsS0FBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciwgZXh0ZW5kVGhlbWUsIFRoZW1lQ29uZmlnIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuaW1wb3J0IHsgbW9kZSB9IGZyb20gXCJAY2hha3JhLXVpL3RoZW1lLXRvb2xzXCJcblxuY29uc3QgY29sb3JzID0ge1xuICBwcmltYXJ5OiB7XG4gICAgbGlnaHQ6ICcjODVkN2ZmJyxcbiAgICBERUZBVUxUOiAnIzQ4ODJGOCcsXG4gICAgZGFyazogJyMyRDQyNkQnLFxuICB9LFxufVxuXG5jb25zdCBjb25maWcgOiBUaGVtZUNvbmZpZyA9IHtcbiAgaW5pdGlhbENvbG9yTW9kZTogXCJkYXJrXCIsXG4gIHVzZVN5c3RlbUNvbG9yTW9kZTogZmFsc2UsXG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZ2xvYmFsOiB7XG4gICAgYm9keToge1xuICAgICAgYmc6IG1vZGUoXCIjMTcxNzFCXCIsIFwid2hpdGVBbHBoYS41MDBcIiksXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIH0sXG4gICAgYToge1xuICAgICAgY29sb3I6IFwidGVhbC41MDBcIixcbiAgICAgIF9ob3Zlcjoge1xuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn1cblxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7IGNvbG9ycywgY29uZmlnLCBzdHlsZXMgfSlcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxDaGFrcmFQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

});