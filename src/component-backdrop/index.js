module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

__webpack_require__(8);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

window.openCoopBackdrops = 0;

var Backdrop =
/*#__PURE__*/
function (_Component) {
  _inherits(Backdrop, _Component);

  function Backdrop(props) {
    var _this;

    _classCallCheck(this, Backdrop);

    _this = _possibleConstructorReturn(this, (Backdrop.__proto__ || Object.getPrototypeOf(Backdrop)).call(this, props));
    _this.state = {
      initialLoad: false
    };
    _this.scrollPosition = 0;
    _this.lockDocument = _this.lockDocument.bind(_assertThisInitialized(_this));
    _this.releaseDocument = _this.releaseDocument.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Backdrop, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        initialLoad: true
      });
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return this.props.visible !== nextProps.visible;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var visible = this.props.visible;

      if (visible) {
        this.lockDocument();
      } else {
        this.releaseDocument();
      }
    }
  }, {
    key: "lockDocument",
    value: function lockDocument() {
      // Note that execution order is important to get the right dom-behaviour
      this.scrollPosition = window.pageYOffset;
      document.body.style.paddingRight = "".concat(this.getScrollBarWidth(), "px");
      document.body.classList.add("coop-backdrop-body--overlay-open");
      document.body.style.top = "-".concat(this.scrollPosition, "px");
      window.openCoopBackdrops = window.openCoopBackdrops + 1;
    }
  }, {
    key: "releaseDocument",
    value: function releaseDocument() {
      if (window.openCoopBackdrops === 1) {
        document.body.classList.remove("coop-backdrop-body--overlay-open");
        window.scrollTo(0, this.scrollPosition);
        document.body.style.top = "0px";
        document.body.style.paddingRight = "0px";
      }

      window.openCoopBackdrops = window.openCoopBackdrops - 1;
    }
  }, {
    key: "getScrollBarWidth",
    value: function getScrollBarWidth() {
      return window.innerWidth - document.body.clientWidth;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          visible = _props.visible,
          onClose = _props.onClose,
          _props$zIndex = _props.zIndex,
          zIndex = _props$zIndex === void 0 ? 100000 : _props$zIndex;
      var invisibleClass = !visible && this.state.initialLoad ? 'coop-backdrop--invisible' : '';
      var visibilityClass = visible ? 'coop-backdrop--visible' : invisibleClass;
      return _react.default.createElement("div", {
        style: {
          zIndex: zIndex
        },
        className: "coop-backdrop ".concat(visibilityClass),
        onClick: onClose
      });
    }
  }]);

  return Backdrop;
}(_react.Component);

var _default = Backdrop;
exports.default = _default;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });