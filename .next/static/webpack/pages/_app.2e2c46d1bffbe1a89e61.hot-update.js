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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_pedroduarte_Documents_dev_jarvis_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/pedroduarte/Documents/dev/jarvis/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_pedroduarte_Documents_dev_jarvis_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar colors = {\n  primary: {\n    light: '#85d7ff',\n    DEFAULT: '#4882F8',\n    dark: '#2D426D'\n  }\n};\nvar config = {\n  initialColorMode: \"dark\",\n  useSystemColorMode: false\n};\nvar styles = {\n  global: function global(props) {\n    return {\n      body: {\n        fontFamily: \"body\",\n        color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_3__.mode)(\"gray.800\", \"whiteAlpha.900\")(props),\n        bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_3__.mode)(\"white\", \"gray.800\")(props),\n        lineHeight: \"base\"\n      }\n    };\n  }\n};\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.extendTheme)({\n  colors: colors,\n  config: config,\n  styles: styles\n});\n\nfunction MyApp(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ChakraProvider, {\n    theme: theme,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, this);\n}\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/NzIxNiJdLCJuYW1lcyI6WyJjb2xvcnMiLCJwcmltYXJ5IiwibGlnaHQiLCJERUZBVUxUIiwiZGFyayIsImNvbmZpZyIsImluaXRpYWxDb2xvck1vZGUiLCJ1c2VTeXN0ZW1Db2xvck1vZGUiLCJzdHlsZXMiLCJnbG9iYWwiLCJwcm9wcyIsImJvZHkiLCJmb250RmFtaWx5IiwiY29sb3IiLCJtb2RlIiwiYmciLCJsaW5lSGVpZ2h0IiwidGhlbWUiLCJleHRlbmRUaGVtZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUdBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxTQUFPLEVBQUU7QUFDUEMsU0FBSyxFQUFFLFNBREE7QUFFUEMsV0FBTyxFQUFFLFNBRkY7QUFHUEMsUUFBSSxFQUFFO0FBSEM7QUFESSxDQUFmO0FBUUEsSUFBTUMsTUFBb0IsR0FBRztBQUMzQkMsa0JBQWdCLEVBQUUsTUFEUztBQUUzQkMsb0JBQWtCLEVBQUU7QUFGTyxDQUE3QjtBQUtBLElBQU1DLE1BQU0sR0FBRztBQUNiQyxRQUFNLEVBQUUsZ0JBQUNDLEtBQUQ7QUFBQSxXQUF1QjtBQUM3QkMsVUFBSSxFQUFFO0FBQ0pDLGtCQUFVLEVBQUUsTUFEUjtBQUVKQyxhQUFLLEVBQUVDLDREQUFJLENBQUMsVUFBRCxFQUFhLGdCQUFiLENBQUosQ0FBbUNKLEtBQW5DLENBRkg7QUFHSkssVUFBRSxFQUFFRCw0REFBSSxDQUFDLE9BQUQsRUFBVSxVQUFWLENBQUosQ0FBMEJKLEtBQTFCLENBSEE7QUFJSk0sa0JBQVUsRUFBRTtBQUpSO0FBRHVCLEtBQXZCO0FBQUE7QUFESyxDQUFmO0FBV0EsSUFBTUMsS0FBSyxHQUFHQyw2REFBVyxDQUFDO0FBQUVsQixRQUFNLEVBQU5BLE1BQUY7QUFBVUssUUFBTSxFQUFOQSxNQUFWO0FBQWtCRyxRQUFNLEVBQU5BO0FBQWxCLENBQUQsQ0FBekI7O0FBRUEsU0FBU1csS0FBVCxPQUFtRDtBQUFBLE1BQWxDQyxTQUFrQyxRQUFsQ0EsU0FBa0M7QUFBQSxNQUF2QkMsU0FBdUIsUUFBdkJBLFNBQXVCO0FBQ2pELHNCQUNFLDhEQUFDLDREQUFEO0FBQWdCLFNBQUssRUFBRUosS0FBdkI7QUFBQSwyQkFDRSw4REFBQyxTQUFELG9CQUFlSSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7S0FOUUYsSztBQU9ULCtEQUFlQSxLQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyLCBleHRlbmRUaGVtZSwgVGhlbWVDb25maWcgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXG5pbXBvcnQgeyBtb2RlIH0gZnJvbSBcIkBjaGFrcmEtdWkvdGhlbWUtdG9vbHNcIlxuaW1wb3J0IHsgRGljdCB9IGZyb20gJ0BjaGFrcmEtdWkvdXRpbHMnXG5cbmNvbnN0IGNvbG9ycyA9IHtcbiAgcHJpbWFyeToge1xuICAgIGxpZ2h0OiAnIzg1ZDdmZicsXG4gICAgREVGQVVMVDogJyM0ODgyRjgnLFxuICAgIGRhcms6ICcjMkQ0MjZEJyxcbiAgfSxcbn1cblxuY29uc3QgY29uZmlnIDogVGhlbWVDb25maWcgPSB7XG4gIGluaXRpYWxDb2xvck1vZGU6IFwiZGFya1wiLFxuICB1c2VTeXN0ZW1Db2xvck1vZGU6IGZhbHNlLFxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGdsb2JhbDogKHByb3BzOiBEaWN0PGFueT4pID0+ICh7XG4gICAgYm9keToge1xuICAgICAgZm9udEZhbWlseTogXCJib2R5XCIsXG4gICAgICBjb2xvcjogbW9kZShcImdyYXkuODAwXCIsIFwid2hpdGVBbHBoYS45MDBcIikocHJvcHMpLFxuICAgICAgYmc6IG1vZGUoXCJ3aGl0ZVwiLCBcImdyYXkuODAwXCIpKHByb3BzKSxcbiAgICAgIGxpbmVIZWlnaHQ6IFwiYmFzZVwiLFxuICAgIH0sXG4gIH0pLFxufVxuXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHsgY29sb3JzLCBjb25maWcsIHN0eWxlcyB9KVxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

});