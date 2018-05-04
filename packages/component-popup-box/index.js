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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Template = _interopRequireDefault(__webpack_require__(4));

var _reactDom = _interopRequireDefault(__webpack_require__(6));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var namespace = "react-custom-popup-box";

var popupBox = function popupBox() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (!document.getElementById(namespace)) {
    var container = document.createElement("div");
    container.id = namespace;
    document.body.insertBefore(container, document.body.firstChild);
  }

  _reactDom.default.render(_react.default.createElement(_Template.default, {
    remove: remove,
    options: options
  }), document.getElementById(namespace));
};

var remove = function remove() {
  var reactTarget = document.getElementById(namespace);

  _reactDom.default.unmountComponentAtNode(reactTarget);
};

var _default = popupBox;
exports.default = _default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

__webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var PopupBox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PopupBox, _React$Component);

  function PopupBox(props) {
    var _this;

    _classCallCheck(this, PopupBox);

    _this = _possibleConstructorReturn(this, (PopupBox.__proto__ || Object.getPrototypeOf(PopupBox)).call(this, props));
    _this.state = {
      closing: false
    };
    _this.buttonClick = _this.buttonClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PopupBox, [{
    key: "buttonClick",
    value: function buttonClick(event) {
      var _this2 = this;

      if (!this.state.closing) {
        var index = event.target.dataset.index;
        var action = this.props.options.actions[index];
        action && action.callback && action.callback();
        this.setState({
          closing: true
        });
        setTimeout(function () {
          _this2.props.remove();
        }, 400);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var options = this.props.options;
      return _react.default.createElement("div", {
        className: "coop-popup-box__wrap ".concat(this.state.closing ? 'coop-popup-box__wrap--closing' : '')
      }, _react.default.createElement("div", {
        className: "coop-popup-box__inner"
      }, _react.default.createElement("h3", {
        className: "coop-popup-box__title"
      }, options.title ? options.title : ''), _react.default.createElement("p", {
        className: "coop-popup-box__text"
      }, options.text ? options.text : ''), options.actions.map(function (a, i) {
        return _react.default.createElement("div", {
          className: "coop-popup-box__button ".concat(a.secondary ? 'coop-popup-box__button--secondary' : ''),
          onClick: _this3.buttonClick,
          "data-index": i,
          key: i
        }, a.text);
      })));
    }
  }]);

  return PopupBox;
}(_react.default.Component);

var _default = PopupBox;
exports.default = _default;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ })
/******/ ]);