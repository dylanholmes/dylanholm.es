webpackHotUpdate("static/development/pages/posts/2020_02_22_unity_setup.js",{

/***/ "./components/foo.js":
/*!***************************!*\
  !*** ./components/foo.js ***!
  \***************************/
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





var _jsxFileName = "/Users/djjh/Projects/dylanholm.es/components/foo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


var Foo =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Foo, _React$Component);

  function Foo(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Foo);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Foo).call(this, props)); // this.unityContent = new UnityContent(
    //   "/static/WebGLBuild.json",
    //   "/static/UnityLoader.js"
    // );
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Foo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("Mounted!");
      console.log(this);
      this.unityContent = new react_unity_webgl__WEBPACK_IMPORTED_MODULE_6__["UnityContent"]("/static/WebGLBuild.json", "/static/UnityLoader.js");
    }
  }, {
    key: "render",
    value: function render() {
      if (this.unityContent === undefined) {
        return null;
      }

      return __jsx(react_unity_webgl__WEBPACK_IMPORTED_MODULE_6___default.a, {
        unityContent: this.unityContent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      });
    }
  }]);

  return Foo;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Foo);

/***/ })

})
//# sourceMappingURL=2020_02_22_unity_setup.js.89864c1e2dd48810d19b.hot-update.js.map