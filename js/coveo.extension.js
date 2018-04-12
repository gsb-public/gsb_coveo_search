(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Coveo"));
	else if(typeof define === 'function' && define.amd)
		define(["Coveo"], factory);
	else if(typeof exports === 'object')
		exports["CoveoExtension"] = factory(require("Coveo"));
	else
		root["CoveoExtension"] = factory(root["Coveo"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var coveo_search_ui_1 = __webpack_require__(2);
var HelloWorld = /** @class */ (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld(element, options, bindings) {
        var _this = _super.call(this, element, HelloWorld.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = coveo_search_ui_1.ComponentOptions.initComponentOptions(element, HelloWorld, options);
        coveo_search_ui_1.$$(_this.element).text(_this.options.dummyOptionText);
        _this.bind.onRootElement(coveo_search_ui_1.QueryEvents.buildingQuery, function (args) { return _this.handleBuildingQuery(args); });
        return _this;
    }
    HelloWorld.prototype.handleBuildingQuery = function (args) {
        args.queryBuilder.advancedExpression.add(this.options.dummyOptionQuery);
    };
    HelloWorld.ID = 'HelloWorld';
    HelloWorld.options = {
        dummyOptionText: coveo_search_ui_1.ComponentOptions.buildStringOption({
            defaultValue: 'Hello world'
        }),
        dummyOptionQuery: coveo_search_ui_1.ComponentOptions.buildStringOption({
            defaultValue: '@uri'
        })
    };
    return HelloWorld;
}(coveo_search_ui_1.Component));
exports.HelloWorld = HelloWorld;
coveo_search_ui_1.Initialization.registerAutoCreateComponent(HelloWorld);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This entry point defines all the component that should be included in your extension.
Object.defineProperty(exports, "__esModule", { value: true });
var HelloWorld_1 = __webpack_require__(0);
exports.HelloWorld = HelloWorld_1.HelloWorld;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=coveo.extension.js.map