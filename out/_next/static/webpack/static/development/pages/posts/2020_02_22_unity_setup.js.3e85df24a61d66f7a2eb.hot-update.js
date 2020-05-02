webpackHotUpdate("static/development/pages/posts/2020_02_22_unity_setup.js",{

/***/ "./components/shortcodes/unity.js":
/*!****************************************!*\
  !*** ./components/shortcodes/unity.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_unity_webgl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-unity-webgl */ "./node_modules/react-unity-webgl/distribution/Exports.js");
/* harmony import */ var react_unity_webgl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_unity_webgl__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/djjh/Projects/dylanholm.es/components/shortcodes/unity.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


var Unity =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Unity, _React$Component);

  function Unity() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Unity);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Unity).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Unity, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('Mounted!');
      var unityContent = new react_unity_webgl__WEBPACK_IMPORTED_MODULE_6__["UnityContent"]("/static/WebGLBuild.json", "/static/UnityLoader.js");
      this.setState(function (state, props) {
        return {
          unityContent: unityContent
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this);

      if (this.state === null || this.state.unityContent === undefined) {
        console.log('returning null');
        return null;
      }

      console.log('returning unity content');
      return __jsx(react_unity_webgl__WEBPACK_IMPORTED_MODULE_6___default.a, {
        unityContent: this.state.unityContent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      });
    }
  }]);

  return Unity;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Unity);

/***/ })

})
//# sourceMappingURL=2020_02_22_unity_setup.js.3e85df24a61d66f7a2eb.hot-update.js.map