webpackHotUpdate("static/development/pages/posts/algorithm-recursive-newton-euler.js",{

/***/ "./pages/posts/algorithm-recursive-newton-euler.mdx":
/*!**********************************************************!*\
  !*** ./pages/posts/algorithm-recursive-newton-euler.mdx ***!
  \**********************************************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layouts_blog_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layouts/blog-post */ "./components/layouts/blog-post.js");


var _jsxFileName = "/Users/djjh/Projects/dylanholm.es/pages/posts/algorithm-recursive-newton-euler.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */



var meta = {
  published: true,
  publishedAt: '2020-02-22',
  title: 'recursive newton euler algorithm',
  // title: '[algorithm] recursive newton euler',
  summary: '',
  image: ''
};

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }));
  };
};

var Anchor = makeShortcode("Anchor");
var layoutProps = {
  meta: meta
};
var MDXLayout = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(function (_ref) {
  var children = _ref.children,
      router = _ref.router;
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_layouts_blog_post__WEBPACK_IMPORTED_MODULE_5__["default"], {
    path: router.pathname,
    meta: meta,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, children);
});
function MDXContent(_ref2) {
  var components = _ref2.components,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "overview"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "The recursive newton euler algorithm solves the inverse dynamics problem for a\nkinematic tree of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), "n")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.43056em",
      "verticalAlign": "0em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), "n"))))), " bodies in ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "O"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mrow"
  }, {
    "stretchy": "false"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "n"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mrow"
  }, {
    "stretchy": "false"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), ")")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), "O(n)")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "1em",
      "verticalAlign": "-0.25em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault",
    "style": {
      "marginRight": "0.02778em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), "O"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mopen"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), "n"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mclose"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), ")"))))), " time. This document is intended to act as\na concise reference to the already informed reader. For an introduction to the\ntopic or a deeper discussion, refer to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "#references-1"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), "[1]"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "history"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "The recursive newton euler algorithm was first described in\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "#references-2"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), "[2]"), ". Classical accerations were replaced with spatial\naccerations in ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "#references-3"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), "[3]"), ", with the addition of spatial accelerations.\nThe version presented in this document is the subsequent reformulation from\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "#references-1"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), "[1]"), ", which introduces the use of generalized coorderinates and\nspatial vector algebra."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "formulation"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "A rigid body system in any configuration is described as\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mrow"
  }, {
    "stretchy": "false"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mtext", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mrow"
  }, {
    "mathvariant": "italic"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }), "model"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mrow"
  }, {
    "separator": "true"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }), ","), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mtext", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mrow"
  }, {
    "mathvariant": "italic"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }), "state"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mrow"
  }, {
    "stretchy": "false"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), ")")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), "(\\textit{model},\\textit{state})")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "1em",
      "verticalAlign": "-0.25em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mopen"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord text"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord textit"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }), "model")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mpunct"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), ","), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.16666666666666666em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord text"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord textit"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }), "state")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mclose"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), ")"))))), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "For a kinematic tree, the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mtext", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mrow"
  }, {
    "mathvariant": "italic"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }), "model")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }), "\\textit{model}")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.69444em",
      "verticalAlign": "0em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord text"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord textit"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }), "model")))))), " is a set of parent body indices\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "\u03BB")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }), "\\lambda")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.69444em",
      "verticalAlign": "0em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }), "\u03BB"))))), ", joint types ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mtext", {
    parentName: "mrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, "jtype")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }), "\\text{jtype}")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.8623000000000001em",
      "verticalAlign": "-0.19444em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord text"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }), "jtype")))))), ", parent transforms ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("msub", {
    parentName: "mrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "msub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, "X"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "msub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, "T"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }), "X_T")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.83333em",
      "verticalAlign": "-0.15em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault",
    "style": {
      "marginRight": "0.07847em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }), "X"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "msupsub"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-t vlist-t2"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-r"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist",
    "style": {
      "height": "0.32833099999999993em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "style": {
      "top": "-2.5500000000000003em",
      "marginLeft": "-0.07847em",
      "marginRight": "0.05em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "pstrut",
    "style": {
      "height": "2.7em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "sizing reset-size6 size3 mtight"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault mtight",
    "style": {
      "marginRight": "0.13889em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }), "T")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-s"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }), "\u200B")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-r"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist",
    "style": {
      "height": "0.15em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", {
    parentName: "span",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  })))))))))), ", and inertias\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, "I")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }), "I")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.68333em",
      "verticalAlign": "0em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault",
    "style": {
      "marginRight": "0.07847em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }), "I"))))), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mtext", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mrow"
  }, {
    "mathvariant": "italic"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  }), "state")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349
    },
    __self: this
  }), "\\textit{state}")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.61508em",
      "verticalAlign": "0em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord text"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord textit"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: this
  }), "state")))))), " is a set of generalized positions ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mrow"
  }, {
    "mathvariant": "bold-italic"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }), "q")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: this
  }), "\\bm{q}")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.63888em",
      "verticalAlign": "-0.19444em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord boldsymbol",
    "style": {
      "marginRight": "0.03704em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }), "q"))))))), ", velocities\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mover", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mi"
  }, {
    "accent": "true"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mover"
  }, {
    "mathvariant": "bold-italic"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: this
  }), "q"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "\u02D9")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }), "\\bm{\\dot{q}}")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.90232em",
      "verticalAlign": "-0.19444em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord accent"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-t vlist-t2"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-r"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist",
    "style": {
      "height": "0.70788em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "style": {
      "top": "-3em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "pstrut",
    "style": {
      "height": "3em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord boldsymbol",
    "style": {
      "marginRight": "0.03704em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: this
  }), "q"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "style": {
      "top": "-3.01344em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "pstrut",
    "style": {
      "height": "3em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "accent-body",
    "style": {
      "left": "-0.15972em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathbf"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469
    },
    __self: this
  }), "\u02D9")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-s"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: this
  }), "\u200B")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-r"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist",
    "style": {
      "height": "0.19444em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", {
    parentName: "span",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480
    },
    __self: this
  }))))))))))), ", and accelerations ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mover", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mi"
  }, {
    "accent": "true"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mover"
  }, {
    "mathvariant": "bold-italic"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490
    },
    __self: this
  }), "q"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492
    },
    __self: this
  }, "\xA8")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492
    },
    __self: this
  }), "\\bm{\\ddot{q}}")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.90232em",
      "verticalAlign": "-0.19444em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord accent"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-t vlist-t2"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-r"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist",
    "style": {
      "height": "0.70788em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "style": {
      "top": "-3em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "pstrut",
    "style": {
      "height": "3em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord boldsymbol",
    "style": {
      "marginRight": "0.03704em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531
    },
    __self: this
  }), "q"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "style": {
      "top": "-3.01344em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "pstrut",
    "style": {
      "height": "3em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "accent-body",
    "style": {
      "left": "-0.2875em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathbf"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550
    },
    __self: this
  }), "\xA8")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-s"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552
    },
    __self: this
  }), "\u200B")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-r"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist",
    "style": {
      "height": "0.19444em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", {
    parentName: "span",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561
    },
    __self: this
  }))))))))))), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562
    },
    __self: this
  }, "Inverse dynamics is the problem of finding the forces of a rigid body system\ngiven its state."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "className": "math math-display"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "div"
  }, {
    "className": "katex-display"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mrow"
  }, {
    "mathvariant": "bold-italic"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574
    },
    __self: this
  }), "\u03C4"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576
    },
    __self: this
  }, "="), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mtext", {
    parentName: "mrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576
    },
    __self: this
  }, "ID"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mrow"
  }, {
    "stretchy": "false"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576
    },
    __self: this
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mtext", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mrow"
  }, {
    "mathvariant": "italic"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578
    },
    __self: this
  }), "model"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mrow"
  }, {
    "separator": "true"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580
    },
    __self: this
  }), ","), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mtext", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mrow"
  }, {
    "mathvariant": "italic"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582
    },
    __self: this
  }), "state"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mrow"
  }, {
    "stretchy": "false"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584
    },
    __self: this
  }), ")")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586
    },
    __self: this
  }), "\\bm{\\tau} = \\text{ID}(\\textit{model},\\textit{state})")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.44444em",
      "verticalAlign": "0em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord boldsymbol",
    "style": {
      "marginRight": "0.13472em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603
    },
    __self: this
  }), "\u03C4"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2777777777777778em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mrel"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613
    },
    __self: this
  }), "="), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2777777777777778em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615
    },
    __self: this
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 620
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "1em",
      "verticalAlign": "-0.25em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord text"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630
    },
    __self: this
  }), "ID")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mopen"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632
    },
    __self: this
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord text"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord textit"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636
    },
    __self: this
  }), "model")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mpunct"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638
    },
    __self: this
  }), ","), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.16666666666666666em"
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord text"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 645
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord textit"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 647
    },
    __self: this
  }), "state")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mclose"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649
    },
    __self: this
  }), ")")))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652
    },
    __self: this
  }, "The recursive newton euler algorithm solves the inverse dynamic problem by:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654
    },
    __self: this
  }, "Compute the velocity and acceleration of each body in the tree."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655
    },
    __self: this
  }, "Compute the forces required to produce these accelerations."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656
    },
    __self: this
  }, "Compute the forces transmitted across the joints from the forces acting on\nthe bodies.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 751
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 752
    },
    __self: this
  }, "implementation"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 753
    },
    __self: this
  }, "python"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 754
    },
    __self: this
  }, "references"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(Anchor, {
    id: "references-1",
    mdxType: "Anchor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 758
    },
    __self: this
  }, "[1]  R. Featherstone. Rigid Body Dynamics Algorithms. Springer, 2008."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(Anchor, {
    id: "references-2",
    mdxType: "Anchor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 761
    },
    __self: this
  }, "[2]  J. Luh, et al. Resolved-Acceleration Control of Mechanical Manipulators. IEEE Trans. On Auto. Control, Vol. AC-25, No. 3, pp. 468\u2013 474, June 1980."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(Anchor, {
    id: "references-3",
    mdxType: "Anchor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 764
    },
    __self: this
  }, "[3]  M. Brady, et al. Robot Motion: Planning and Control. The MIT Press, 1982."));
}
;
MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=algorithm-recursive-newton-euler.js.a88ffdf71164ee6969e6.hot-update.js.map