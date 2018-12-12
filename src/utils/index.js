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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sortAlphabetically = _interopRequireDefault(__webpack_require__(14));

var _debounce = _interopRequireDefault(__webpack_require__(15));

var _emitEvent = _interopRequireDefault(__webpack_require__(16));

var _domHelpers = _interopRequireDefault(__webpack_require__(17));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  sortAlphabetically: _sortAlphabetically.default,
  debounce: _debounce.default,
  emitEvent: _emitEvent.default,
  domHelpers: _domHelpers.default
};
exports.default = _default;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var sortAlphabetically = function sortAlphabetically(arr) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'name';
  var asc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return arr.sort(function (a, b) {
    return asc ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key]);
  });
};

var _default = sortAlphabetically;
exports.default = _default;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// From undescore.js via https://davidwalsh.name/javascript-debounce-function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

;
var _default = debounce;
exports.default = _default;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var emitEvent = function emitEvent(eventName) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (typeof window.CustomEvent === "function") {
    var event = new CustomEvent(eventName, {
      detail: {
        value: value
      }
    });
  } else {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, true, true, {
      value: value
    });
  }

  document.dispatchEvent(event);
};

var _default = emitEvent;
exports.default = _default;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getAllDataFromElement = exports.removeClass = exports.domReady = exports.forEachSelector = exports.getDomDataFromId = exports.getParsedDomDataFromId = void 0;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getParsedDomDataFromId = function getParsedDomDataFromId(id, dataAtrr) {
  var attrData = getDomDataFromId(id, dataAtrr);
  var parsed = JSON.parse(attrData);
  return parsed;
};

exports.getParsedDomDataFromId = getParsedDomDataFromId;

var getDomDataFromId = function getDomDataFromId(id, dataAtrr) {
  var element = document.getElementById(id);

  if (!element) {
    return null;
  }

  var attrData = element.getAttribute(dataAtrr);
  return attrData;
};

exports.getDomDataFromId = getDomDataFromId;

var forEachSelector = function forEachSelector(selector, callback) {
  var elements = document.querySelectorAll(selector);
  Array.prototype.forEach.call(elements, callback);
};

exports.forEachSelector = forEachSelector;

var domReady = function domReady(callback) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
};

exports.domReady = domReady;

var removeClass = function removeClass(target, className) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var el = document.querySelectorAll(target);

  if (el.length === 0) {
    console.warn('Trying to remove class from non-existing element:', target);
    return null;
  }

  el = el[index];

  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
};

exports.removeClass = removeClass;

var getAllDataFromElement = function getAllDataFromElement(element) {
  var attributes = _toConsumableArray(element.attributes);

  var data = {};
  attributes.forEach(function (a, i) {
    if (a.nodeName.substr(0, 4) === 'data') {
      var value = a.nodeValue;
      var name = a.nodeName.replace('data-', '');

      if (value.substr(0, 1) === '{' || value.substr(0, 1) === '[') {
        value = JSON.parse(value);
      }

      data[convertCamelCase(name)] = value;
    }
  });
  return data;
};

exports.getAllDataFromElement = getAllDataFromElement;

var convertCamelCase = function convertCamelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '').replace(/-/g, '');
};

var _default = {
  getParsedDomDataFromId: getParsedDomDataFromId,
  getDomDataFromId: getDomDataFromId,
  forEachSelector: forEachSelector,
  domReady: domReady,
  removeClass: removeClass,
  getAllDataFromElement: getAllDataFromElement
};
exports.default = _default;

/***/ })
/******/ ]);