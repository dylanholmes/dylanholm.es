webpackHotUpdate("static/development/pages/posts/2020_02_22_unity_setup.js",{

/***/ "./components/foo.js":
false,

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
/* harmony import */ var _shortcodes_unity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shortcodes/unity */ "./components/shortcodes/unity.js");
var _jsxFileName = "/Users/djjh/Projects/dylanholm.es/components/layouts/blog-post.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var shortcodes = {
  Unity: _shortcodes_unity__WEBPACK_IMPORTED_MODULE_10__["default"]
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
  }, "header.jsx-1238384267{margin-bottom:2em;}[rel='author'].jsx-1238384267{margin-left:1em;}article.jsx-1238384267{margin-bottom:2em;}footer.jsx-1238384267{margin-top:2em;}.post-pagination.jsx-1238384267{display:grid;grid-template-columns:1fr 1fr;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kampoL1Byb2plY3RzL2R5bGFuaG9sbS5lcy9jb21wb25lbnRzL2xheW91dHMvYmxvZy1wb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEa0IsQUFHNkIsQUFJRixBQUlFLEFBSUgsQUFJRixhQUNpQixFQUpoQyxDQVJBLEVBSkEsQUFRQSx5QkFTQSIsImZpbGUiOiIvVXNlcnMvZGpqaC9Qcm9qZWN0cy9keWxhbmhvbG0uZXMvY29tcG9uZW50cy9sYXlvdXRzL2Jsb2ctcG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHNpdGVNZXRhIH0gZnJvbSAnLi4vLi4vYmxvZy5jb25maWcnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vZGVmYXVsdCdcbmltcG9ydCBTeW50YXhIaWdobGlnaHQgZnJvbSAnLi4vc3ludGF4LWhpZ2hsaWdodCdcbmltcG9ydCBQdWJsaXNoZWRBdCBmcm9tICcuLi91dGlscy9wdWJsaXNoZWQtYXQnXG5pbXBvcnQgYmxvZ3Bvc3RzIGZyb20gJy4uLy4uL3Bvc3RzL2luZGV4J1xuaW1wb3J0IE5leHRQcmV2UG9zdCBmcm9tICcuLi9uZXh0LXByZXYtcG9zdCdcblxuaW1wb3J0IHtNRFhQcm92aWRlcn0gZnJvbSAnQG1keC1qcy9yZWFjdCdcbmltcG9ydCBVbml0eSBmcm9tICcuLi9zaG9ydGNvZGVzL3VuaXR5J1xuY29uc3Qgc2hvcnRjb2RlcyA9IHtVbml0eX1cblxuZnVuY3Rpb24gQmxvZ1Bvc3QoeyBwYXRoLCBtZXRhLCBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IGN1cnJlbnRQb3N0SW5kZXggPSBibG9ncG9zdHNcbiAgICAubWFwKCh7IHRpdGxlIH0pID0+IHRpdGxlKVxuICAgIC5pbmRleE9mKG1ldGEudGl0bGUpXG4gIGNvbnN0IHByZXZpb3VzUG9zdCA9IGJsb2dwb3N0c1tjdXJyZW50UG9zdEluZGV4ICsgMV1cbiAgY29uc3QgbmV4dFBvc3QgPSBibG9ncG9zdHNbY3VycmVudFBvc3RJbmRleCAtIDFdXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHBhZ2VUaXRsZT17bWV0YS50aXRsZX0gb2dJbWFnZT17bWV0YS5pbWFnZX0+XG4gICAgICA8U3ludGF4SGlnaGxpZ2h0IC8+XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJoLWVudHJ5XCI+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInAtbmFtZVwiPnttZXRhLnRpdGxlfTwvaDE+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFB1Ymxpc2hlZEF0IGRhdGU9e21ldGEucHVibGlzaGVkQXR9IGxpbms9e3BhdGh9IC8+XG5cbiAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY29sb3I9XCIjYWFhXCJcbiAgICAgICAgICAgICAgICByZWw9XCJhdXRob3JcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtYXV0aG9yIGgtY2FyZFwiXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9hYm91dFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c2l0ZU1ldGEuYXV0aG9yfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlLWNvbnRlbnRcIj48TURYUHJvdmlkZXIgY29tcG9uZW50cz17c2hvcnRjb2Rlc30+e2NoaWxkcmVufTwvTURYUHJvdmlkZXI+PC9kaXY+XG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgeyhwcmV2aW91c1Bvc3QgfHwgbmV4dFBvc3QpICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1wYWdpbmF0aW9uXCI+XG4gICAgICAgICAgICAgIHtwcmV2aW91c1Bvc3QgJiYgKFxuICAgICAgICAgICAgICAgIDxOZXh0UHJldlBvc3RcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtwcmV2aW91c1Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICBwYXRoPXtwcmV2aW91c1Bvc3QucGF0aH1cbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwicHJldmlvdXNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtuZXh0UG9zdCAmJiAoXG4gICAgICAgICAgICAgICAgPE5leHRQcmV2UG9zdFxuICAgICAgICAgICAgICAgICAgdGl0bGU9e25leHRQb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgcGF0aD17bmV4dFBvc3QucGF0aH1cbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwibmV4dFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtyZWw9J2F1dGhvciddIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJ0aWNsZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdC1wYWdpbmF0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dQb3N0XG4iXX0= */\n/*@ sourceURL=/Users/djjh/Projects/dylanholm.es/components/layouts/blog-post.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (BlogPost);

/***/ }),

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
      var unityContent = new UnityContent("/static/WebGLBuild.json", "/static/UnityLoader.js");
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

/* harmony default export */ __webpack_exports__["default"] = (Foo);

/***/ }),

/***/ "./pages/posts/2020_02_22_unity_setup.mdx":
/*!************************************************!*\
  !*** ./pages/posts/2020_02_22_unity_setup.mdx ***!
  \************************************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layouts_blog_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layouts/blog-post */ "./components/layouts/blog-post.js");


var _jsxFileName = "/Users/djjh/Projects/dylanholm.es/pages/posts/2020_02_22_unity_setup.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */


 // import Foo from '../../components/foo'
// import dynamic from 'next/dynamic'
// const DynamicFoo = dynamic(() => import('../../components/foo'), { ssr: false })

var meta = {
  published: true,
  publishedAt: '2020-02-22',
  title: 'Prototyping Physics Demos',
  summary: '-',
  image: ''
};

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }));
  };
};

var Unity = makeShortcode("Unity");
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
      lineNumber: 27
    },
    __self: this
  }, children);
});
function MDXContent(_ref2) {
  var components = _ref2.components,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Problem"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "You want to quickly demo, develop, or benchmark a rigid body physics engine with great graphics, and you don't want to write your own renderer."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Let's take a look at how we can "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Solution 1: Physics Engine Plugin using Unity"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(Unity, {
    mdxType: "Unity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Solution 2: Physics Engine Plugin using Unreal."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Let's get started with unity."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-bash"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), "$ ./some-shell-script.sh\n")));
}
;
MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=2020_02_22_unity_setup.js.ec6f3a19d2b2462a4062.hot-update.js.map