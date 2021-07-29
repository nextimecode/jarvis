(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 326:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(426);
;// CONCATENATED MODULE: ./theme/colors.ts
const colors = {
  primary: '#4882F8',
  'primary-light': '#85d7ff',
  'primary-dark': '#2D426D'
};
/* harmony default export */ var theme_colors = (colors);
;// CONCATENATED MODULE: ./theme/config.ts
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false
};
/* harmony default export */ var theme_config = (config);
;// CONCATENATED MODULE: external "@chakra-ui/theme-tools"
var theme_tools_namespaceObject = require("@chakra-ui/theme-tools");;
;// CONCATENATED MODULE: ./theme/styles.ts

const styles = {
  global: props => ({
    body: {
      fontFamily: "body",
      color: (0,theme_tools_namespaceObject.mode)("#17171B", "whiteAlpha.900")(props),
      bg: (0,theme_tools_namespaceObject.mode)("white", "#17171B")(props),
      lineHeight: "base"
    }
  })
};
/* harmony default export */ var theme_styles = (styles);
;// CONCATENATED MODULE: ./theme/index.ts




const theme = (0,react_.extendTheme)({
  colors: theme_colors,
  config: theme_config,
  styles: theme_styles
});
/* harmony default export */ var theme_0 = (theme);
;// CONCATENATED MODULE: ./src/pages/_app.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(react_.ChakraProvider, {
    theme: theme_0,
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 426:
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(326));
module.exports = __webpack_exports__;

})();