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
      return __jsx(react_unity_webgl__WEBPACK_IMPORTED_MODULE_6___default.a, {
        unityContent: this.unityContent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      });
    }
  }]);

  return Foo;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Foo);

/***/ }),

/***/ "./components/layouts/blog-post.js":
/*!*****************************************!*\
  !*** ./components/layouts/blog-post.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blog_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blog.config */ "./blog.config.js");
/* harmony import */ var _blog_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blog_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default */ "./components/layouts/default.js");
/* harmony import */ var _syntax_highlight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../syntax-highlight */ "./components/syntax-highlight.js");
/* harmony import */ var _utils_published_at__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/published-at */ "./components/utils/published-at.js");
/* harmony import */ var _posts_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../posts/index */ "./posts/index.js");
/* harmony import */ var _posts_index__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_posts_index__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _next_prev_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../next-prev-post */ "./components/next-prev-post.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var _components_foo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/foo */ "./components/foo.js");
var _jsxFileName = "/Users/djjh/Projects/dylanholm.es/components/layouts/blog-post.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var shortcodes = {
  Foo: _components_foo__WEBPACK_IMPORTED_MODULE_10__["default"]
};

function BlogPost(_ref) {
  var path = _ref.path,
      meta = _ref.meta,
      children = _ref.children;
  var currentPostIndex = _posts_index__WEBPACK_IMPORTED_MODULE_7___default.a.map(function (_ref2) {
    var title = _ref2.title;
    return title;
  }).indexOf(meta.title);
  var previousPost = _posts_index__WEBPACK_IMPORTED_MODULE_7___default.a[currentPostIndex + 1];
  var nextPost = _posts_index__WEBPACK_IMPORTED_MODULE_7___default.a[currentPostIndex - 1];
  return __jsx(_default__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pageTitle: meta.title,
    ogImage: meta.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_syntax_highlight__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("article", {
    className: "jsx-1238384267" + " " + "h-entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("header", {
    className: "jsx-1238384267",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1238384267" + " " + "p-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, meta.title), __jsx("div", {
    className: "jsx-1238384267",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_utils_published_at__WEBPACK_IMPORTED_MODULE_6__["default"], {
    date: meta.publishedAt,
    link: path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-1238384267" + " " + "e-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__["MDXProvider"], {
    components: shortcodes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, children)), __jsx("footer", {
    className: "jsx-1238384267",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, (previousPost || nextPost) && __jsx("div", {
    className: "jsx-1238384267" + " " + "post-pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, previousPost && __jsx(_next_prev_post__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: previousPost.title,
    path: previousPost.path,
    position: "previous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), nextPost && __jsx(_next_prev_post__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: nextPost.title,
    path: nextPost.path,
    position: "next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1238384267",
    __self: this
  }, "header.jsx-1238384267{margin-bottom:2em;}[rel='author'].jsx-1238384267{margin-left:1em;}article.jsx-1238384267{margin-bottom:2em;}footer.jsx-1238384267{margin-top:2em;}.post-pagination.jsx-1238384267{display:grid;grid-template-columns:1fr 1fr;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kampoL1Byb2plY3RzL2R5bGFuaG9sbS5lcy9jb21wb25lbnRzL2xheW91dHMvYmxvZy1wb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEa0IsQUFHNkIsQUFJRixBQUlFLEFBSUgsQUFJRixhQUNpQixFQUpoQyxDQVJBLEVBSkEsQUFRQSx5QkFTQSIsImZpbGUiOiIvVXNlcnMvZGpqaC9Qcm9qZWN0cy9keWxhbmhvbG0uZXMvY29tcG9uZW50cy9sYXlvdXRzL2Jsb2ctcG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHNpdGVNZXRhIH0gZnJvbSAnLi4vLi4vYmxvZy5jb25maWcnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vZGVmYXVsdCdcbmltcG9ydCBTeW50YXhIaWdobGlnaHQgZnJvbSAnLi4vc3ludGF4LWhpZ2hsaWdodCdcbmltcG9ydCBQdWJsaXNoZWRBdCBmcm9tICcuLi91dGlscy9wdWJsaXNoZWQtYXQnXG5pbXBvcnQgYmxvZ3Bvc3RzIGZyb20gJy4uLy4uL3Bvc3RzL2luZGV4J1xuaW1wb3J0IE5leHRQcmV2UG9zdCBmcm9tICcuLi9uZXh0LXByZXYtcG9zdCdcblxuaW1wb3J0IHtNRFhQcm92aWRlcn0gZnJvbSAnQG1keC1qcy9yZWFjdCdcbmltcG9ydCBGb28gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb28nXG5jb25zdCBzaG9ydGNvZGVzID0ge0Zvb31cblxuZnVuY3Rpb24gQmxvZ1Bvc3QoeyBwYXRoLCBtZXRhLCBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IGN1cnJlbnRQb3N0SW5kZXggPSBibG9ncG9zdHNcbiAgICAubWFwKCh7IHRpdGxlIH0pID0+IHRpdGxlKVxuICAgIC5pbmRleE9mKG1ldGEudGl0bGUpXG4gIGNvbnN0IHByZXZpb3VzUG9zdCA9IGJsb2dwb3N0c1tjdXJyZW50UG9zdEluZGV4ICsgMV1cbiAgY29uc3QgbmV4dFBvc3QgPSBibG9ncG9zdHNbY3VycmVudFBvc3RJbmRleCAtIDFdXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHBhZ2VUaXRsZT17bWV0YS50aXRsZX0gb2dJbWFnZT17bWV0YS5pbWFnZX0+XG4gICAgICA8U3ludGF4SGlnaGxpZ2h0IC8+XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJoLWVudHJ5XCI+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInAtbmFtZVwiPnttZXRhLnRpdGxlfTwvaDE+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFB1Ymxpc2hlZEF0IGRhdGU9e21ldGEucHVibGlzaGVkQXR9IGxpbms9e3BhdGh9IC8+XG5cbiAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY29sb3I9XCIjYWFhXCJcbiAgICAgICAgICAgICAgICByZWw9XCJhdXRob3JcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtYXV0aG9yIGgtY2FyZFwiXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9hYm91dFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c2l0ZU1ldGEuYXV0aG9yfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlLWNvbnRlbnRcIj48TURYUHJvdmlkZXIgY29tcG9uZW50cz17c2hvcnRjb2Rlc30+e2NoaWxkcmVufTwvTURYUHJvdmlkZXI+PC9kaXY+XG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgeyhwcmV2aW91c1Bvc3QgfHwgbmV4dFBvc3QpICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1wYWdpbmF0aW9uXCI+XG4gICAgICAgICAgICAgIHtwcmV2aW91c1Bvc3QgJiYgKFxuICAgICAgICAgICAgICAgIDxOZXh0UHJldlBvc3RcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtwcmV2aW91c1Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICBwYXRoPXtwcmV2aW91c1Bvc3QucGF0aH1cbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwicHJldmlvdXNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtuZXh0UG9zdCAmJiAoXG4gICAgICAgICAgICAgICAgPE5leHRQcmV2UG9zdFxuICAgICAgICAgICAgICAgICAgdGl0bGU9e25leHRQb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgcGF0aD17bmV4dFBvc3QucGF0aH1cbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwibmV4dFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtyZWw9J2F1dGhvciddIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJ0aWNsZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdC1wYWdpbmF0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dQb3N0XG4iXX0= */\n/*@ sourceURL=/Users/djjh/Projects/dylanholm.es/components/layouts/blog-post.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (BlogPost);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/react-unity-webgl/distribution/Exports.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-unity-webgl/distribution/Exports.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Unity_1 = __importDefault(__webpack_require__(/*! ./components/Unity */ "./node_modules/react-unity-webgl/distribution/components/Unity.js"));
var UnityContent_1 = __importDefault(__webpack_require__(/*! ./UnityContent */ "./node_modules/react-unity-webgl/distribution/UnityContent.js"));
exports.UnityContent = UnityContent_1.default;
exports.default = Unity_1.default;
//# sourceMappingURL=Exports.js.map

/***/ }),

/***/ "./node_modules/react-unity-webgl/distribution/UnityContent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-unity-webgl/distribution/UnityContent.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./declarations/UnityLoader */ "./node_modules/react-unity-webgl/distribution/declarations/UnityLoader.js");
__webpack_require__(/*! ./declarations/UnityInstance */ "./node_modules/react-unity-webgl/distribution/declarations/UnityInstance.js");
__webpack_require__(/*! ./declarations/ReactUnityWebgl */ "./node_modules/react-unity-webgl/distribution/declarations/ReactUnityWebgl.js");
var LoggingService_1 = __webpack_require__(/*! ./services/LoggingService */ "./node_modules/react-unity-webgl/distribution/services/LoggingService.js");
var UnityContent = /** @class */ (function () {
    /**
     * Creates a new Unity content object. This object can be used
     * @param {string} buildJsonPath the relative path to the build json file generated by Unity.
     * @param {string} unityLoaderJsPath the relative path to the unity loader javascript file.
     * @param {IUnityConfig} unityConfig the Unity configuration that will be used to start the player.
     */
    function UnityContent(buildJsonPath, unityLoaderJsPath, unityConfig) {
        var _unityConfig = unityConfig || {};
        this.buildJsonPath = buildJsonPath;
        this.unityLoaderJsPath = unityLoaderJsPath;
        this.uniqueID = ++UnityContent.uniqueID;
        this.unityEvents = [];
        this.unityConfig = {
            modules: _unityConfig.modules || {},
            unityVersion: _unityConfig.unityVersion || "undefined",
            adjustOnWindowResize: _unityConfig.adjustOnWindowResize,
            id: _unityConfig.id || "nill"
        };
        if (typeof window.ReactUnityWebGL === "undefined")
            window.ReactUnityWebGL = {};
    }
    /**
     * Binds a unity component to this content.
     * @param unityComponentInstance the unity component that will be binded to this content.
     * @public
     */
    UnityContent.prototype.setComponentInstance = function (unityComponentInstance) {
        this.unityComponent = unityComponentInstance;
    };
    /**
     * Binds a unity player to this content.
     * @param unityPlayerInstance the unity component that will be binded to this content.
     * @public
     */
    UnityContent.prototype.setUnityInstance = function (unityInstance) {
        this.unityInstance = unityInstance;
    };
    /**
     * Sets the unity players fullscreen mode.
     * @param {boolean} fullscreen
     * @public
     */
    UnityContent.prototype.setFullscreen = function (fullscreen) {
        if (this.unityInstance != null) {
            this.unityInstance.SetFullscreen(fullscreen === true ? 1 : 0);
        }
    };
    /**
     * Quits the Unity Instance and removes it from memory.
     */
    UnityContent.prototype.remove = function () {
        var _this = this;
        if (typeof this.unityInstance !== "undefined" &&
            typeof this.unityInstance.Quit === "function")
            return this.unityInstance.Quit(function () {
                _this.triggerUnityEvent("quitted");
                _this.unityInstance = undefined;
            });
        return LoggingService_1.loggingService.warnUnityContentRemoveNotAvailable();
    };
    /**
     * Sends an event to the Unity player that will trigger a function.
     * @param {string} gameObjectName the name of the game object in your Unity scene.
     * @param {string} methodName the name of the public method on the game object.
     * @param {any} parameter an optional parameter to pass along to the method.
     * @public
     */
    UnityContent.prototype.send = function (gameObjectName, methodName, parameter) {
        if (this.unityInstance != null) {
            if (typeof parameter === "undefined") {
                this.unityInstance.SendMessage(gameObjectName, methodName);
            }
            else {
                this.unityInstance.SendMessage(gameObjectName, methodName, parameter);
            }
        }
    };
    /**
     * Registers an event listener for the Unity player. These can be
     * system events like when the player is initialized or loader and
     * your custom events from Unity.
     * @param {string} eventName the event name
     * @param {Function} eventCallback the event function
     * @returns {any} The Function
     * @public
     */
    UnityContent.prototype.on = function (eventName, eventCallback) {
        this.unityEvents.push({
            eventName: eventName,
            eventCallback: eventCallback
        });
        window.ReactUnityWebGL[eventName] = function (parameter) {
            return eventCallback(parameter);
        };
    };
    /**
     * Triggers an event that has been registered by the on
     * function.
     * @param {string} eventName the event name
     * @param {Function} eventValue the event value
     * @public
     */
    UnityContent.prototype.triggerUnityEvent = function (eventName, eventValue) {
        for (var _i = 0; _i < this.unityEvents.length; _i++)
            if (this.unityEvents[_i].eventName === eventName)
                this.unityEvents[_i].eventCallback(eventValue);
    };
    /**
     * the statis unique ID keeps track of the
     * unique ID's made by other instances.
     * @type {number}
     * @static
     * @public
     */
    UnityContent.uniqueID = 0;
    return UnityContent;
}());
exports.default = UnityContent;
//# sourceMappingURL=UnityContent.js.map

/***/ }),

/***/ "./node_modules/react-unity-webgl/distribution/components/Unity.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-unity-webgl/distribution/components/Unity.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var UnityLoaderService_1 = __importDefault(__webpack_require__(/*! ../services/UnityLoaderService */ "./node_modules/react-unity-webgl/distribution/services/UnityLoaderService.js"));
__webpack_require__(/*! ../declarations/UnityLoader */ "./node_modules/react-unity-webgl/distribution/declarations/UnityLoader.js");
__webpack_require__(/*! ../declarations/UnityInstance */ "./node_modules/react-unity-webgl/distribution/declarations/UnityInstance.js");
__webpack_require__(/*! ../declarations/ReactUnityWebgl */ "./node_modules/react-unity-webgl/distribution/declarations/ReactUnityWebgl.js");
var Unity = /** @class */ (function (_super) {
    __extends(Unity, _super);
    /**
     * Initialized the component.
     * @param {IUnityProps} props
     */
    function Unity(props) {
        var _this = _super.call(this, props) || this;
        /**
         * The component state.
         * @type {IUnityState}
         * @public
         */
        _this.state = {};
        _this.unityLoaderService = new UnityLoaderService_1.default();
        _this.onWindowResizeBinding = _this.onWindowResize.bind(_this);
        _this.unityContent = _this.props.unityContent;
        _this.unityContent.setComponentInstance(_this);
        return _this;
    }
    /**
     * An event that is triggered by the Unity player. This tracks
     * the loading progression of the player. It will send '1' when
     * the loading is completed.
     * @param {UnityInstance} unityInstance
     * @param {number} progression
     * @private
     */
    Unity.prototype.onProgress = function (unityInstance, progression) {
        this.unityContent.triggerUnityEvent("progress", progression);
        if (progression === 1)
            this.unityContent.triggerUnityEvent("loaded");
    };
    /**
     * When the window is resized.
     */
    Unity.prototype.onWindowResize = function () {
        if (this.unityContent.unityConfig.adjustOnWindowResize === true) {
            this.unityContent.triggerUnityEvent("resized");
            this.adjustCanvasToContainer();
        }
    };
    /**
     * Since the Unity canvas itself does not respond to the resizing
     * of it's container we have to manually do this. A width and height
     * of 100% does not seem to work, so we have to fetch it's parent's
     * size to adject the canvas.
     * @private
     */
    Unity.prototype.adjustCanvasToContainer = function () {
        if (typeof this.htmlElement !== "undefined") {
            var _width = this.htmlElement.offsetWidth;
            var _height = this.htmlElement.offsetHeight;
            var _canvas = this.htmlElement.getElementsByTagName("canvas")[0];
            if (typeof _canvas !== "undefined" && _canvas.height !== _height)
                _canvas.height = _height;
            if (typeof _canvas !== "undefined" && _canvas.width !== _width)
                _canvas.width = _width;
        }
    };
    /**
     * Initialzied the Unity player when the component is mounted.
     * @public
     */
    Unity.prototype.componentDidMount = function () {
        var _this = this;
        window.addEventListener("resize", this.onWindowResizeBinding);
        // prettier-ignore
        this.unityLoaderService.append(this.props.unityContent.unityLoaderJsPath, function () {
            UnityLoader.Error.handler = function (_message) {
                _this.unityContent.triggerUnityEvent("error", _message);
                console.error("React Unity WebGL", _message);
            };
            _this.unityContent.setUnityInstance(UnityLoader.instantiate("__ReactUnityWebGL_" + _this.props.unityContent.uniqueID + "__", _this.props.unityContent.buildJsonPath, {
                onProgress: _this.onProgress.bind(_this),
                Module: _this.props.unityContent.unityConfig.modules,
                width: "100%",
                height: "100%"
            }));
        });
    };
    /**
     * Will remove event listeners and clean up systems when the
     * component is about to unmount.
     * @public
     */
    Unity.prototype.componentWillUnmount = function () {
        this.unityContent.remove();
        window.removeEventListener("resize", this.onWindowResizeBinding);
    };
    /**
     * Renders the unity wrapper and player.
     * @returns {React.ReactNode} element
     * @public
     */
    Unity.prototype.render = function () {
        var _this = this;
        return React.createElement("div", {
            className: this.props.className || "",
            ref: function (ref) { return (_this.htmlElement = ref); },
            id: "__ReactUnityWebGL_" + this.props.unityContent.uniqueID + "__",
            style: {
                width: this.props.width || "800px",
                height: this.props.height || "600px"
            }
        });
    };
    return Unity;
}(React.Component));
exports.default = Unity;
//# sourceMappingURL=Unity.js.map

/***/ }),

/***/ "./node_modules/react-unity-webgl/distribution/declarations/ReactUnityWebgl.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-unity-webgl/distribution/declarations/ReactUnityWebgl.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=ReactUnityWebgl.js.map

/***/ }),

/***/ "./node_modules/react-unity-webgl/distribution/declarations/UnityInstance.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-unity-webgl/distribution/declarations/UnityInstance.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=UnityInstance.js.map

/***/ }),

/***/ "./node_modules/react-unity-webgl/distribution/declarations/UnityLoader.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-unity-webgl/distribution/declarations/UnityLoader.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=UnityLoader.js.map

/***/ }),

/***/ "./node_modules/react-unity-webgl/distribution/services/LoggingService.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-unity-webgl/distribution/services/LoggingService.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LoggingService = /** @class */ (function () {
    function LoggingService() {
    }
    LoggingService.prototype.warnUnityContentRemoveNotAvailable = function (additionalDetials) {
        this.warn("Your version of Unity does not support unloading the WebGL Player.", "This preverts ReactUnityWebGL from unmounting this component properly.", "Please consider updating to Unity 2019.1 or newer, or reload the page", "to free the WebGL Player from the memory. See the follow link for more details:", "https://github.com/elraccoone/react-unity-webgl/issues/22", additionalDetials);
    };
    LoggingService.prototype.errorUnityLoaderNotFound = function (additionalDetials) {
        this.error("Unable to use the Unity Loader, please make sure you've imported", "the Unity Loader the correct way. You might have entered an incorrect", "path to the UnityLoader.js. The path is not relative to your bundle,", "but to your index html file. See the follow link for more details: ", "https://github.com/elraccoone/react-unity-webgl/issues/31", additionalDetials);
    };
    LoggingService.prototype.warn = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        console.warn(messages.filter(function (_) { return typeof _ !== "undefined"; }).join(" "));
    };
    LoggingService.prototype.error = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        console.error(messages.filter(function (_) { return typeof _ !== "undefined"; }).join(" "));
    };
    return LoggingService;
}());
exports.loggingService = new LoggingService();
//# sourceMappingURL=LoggingService.js.map

/***/ }),

/***/ "./node_modules/react-unity-webgl/distribution/services/UnityLoaderService.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-unity-webgl/distribution/services/UnityLoaderService.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LoggingService_1 = __webpack_require__(/*! ./LoggingService */ "./node_modules/react-unity-webgl/distribution/services/LoggingService.js");
var UnityLoaderService = /** @class */ (function () {
    function UnityLoaderService() {
        /**
         * Reference to the document head.
         * @type {HTMLHeadElement}
         * @private
         */
        this.documentHead = document.getElementsByTagName("head")[0];
    }
    /**
     * Appends the Unity loader script to the window. When it's loaded a callback will
     * be triggered. NOTE: This can't be a promisse due to JavaScript compatibilty.
     * @param {string} source the path to the Unity loader file
     * @param {Function} onLoad when the script is loaded
     * @public
     */
    UnityLoaderService.prototype.append = function (source, onLoad) {
        var _this = this;
        if (typeof this.unityLoaderScript !== "undefined")
            if (source === this.unityLoaderScript.src) {
                return onLoad();
            }
            else {
                this.unityLoaderScript.remove();
            }
        window
            .fetch(source)
            .then(function (_response) {
            if (_response.status >= 400)
                return LoggingService_1.loggingService.errorUnityLoaderNotFound(_response.status);
            _response
                .text()
                .then(function (_text) {
                if (_text.trim().charAt(0) === "<")
                    return LoggingService_1.loggingService.errorUnityLoaderNotFound("error doc");
                _this.unityLoaderScript = document.createElement("script");
                _this.unityLoaderScript.type = "text/javascript";
                _this.unityLoaderScript.async = true;
                _this.unityLoaderScript.src = source;
                _this.unityLoaderScript.onload = function () {
                    if (typeof window.UnityLoader === "undefined")
                        return LoggingService_1.loggingService.errorUnityLoaderNotFound();
                    onLoad();
                };
                _this.documentHead.appendChild(_this.unityLoaderScript);
            })
                .catch(function (_reason) { return LoggingService_1.loggingService.errorUnityLoaderNotFound(_reason); });
        })
            .catch(function (_reason) { return LoggingService_1.loggingService.errorUnityLoaderNotFound(_reason); });
    };
    return UnityLoaderService;
}());
exports.default = UnityLoaderService;
//# sourceMappingURL=UnityLoaderService.js.map

/***/ })

})
//# sourceMappingURL=2020_02_22_unity_setup.js.734cc75e54093f71f2ad.hot-update.js.map