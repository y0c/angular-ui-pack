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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
// var angular = require("angular");


var app = angular.module("SpGrid", [ ]);

app.constant("SpGridConstant", __webpack_require__(6));

app.run( ['$templateCache', 'SpGridConstant', function( $templateCache, SpGridConstant ){

    $templateCache.put( SpGridConstant.template.SP_GRID, __webpack_require__( 7));

    /**
     * Grid Header
     */
    $templateCache.put( SpGridConstant.template.SP_GRID_HEADER          , __webpack_require__( 8 ));
    $templateCache.put( SpGridConstant.template.SP_GRID_HEADER_ROW      , __webpack_require__( 9));
    $templateCache.put( SpGridConstant.template.SP_GRID_HEADER_COLUMN   , __webpack_require__(10));


    /**
     * Grid Body
     */
    $templateCache.put( SpGridConstant.template.SP_GRID_BODY        , __webpack_require__(11));
    $templateCache.put( SpGridConstant.template.SP_GRID_DATA_ROW    , __webpack_require__(12));
    $templateCache.put( SpGridConstant.template.SP_GRID_DATA_COLUMN , __webpack_require__(13));
    $templateCache.put( SpGridConstant.template.SP_GRID_DATA_ROW_BTN_GROUP, __webpack_require__(14));


    $templateCache.put( SpGridConstant.template.SP_GRID_FOOTER        , __webpack_require__(15));
    $templateCache.put( SpGridConstant.template.SP_GRID_FOOTER_ROW    , __webpack_require__(16));
    $templateCache.put( SpGridConstant.template.SP_GRID_FOOTER_COLUMN , __webpack_require__(17));

    /**
     * Grid Util
     */
    $templateCache.put( SpGridConstant.template.EDIT_INPUT  , __webpack_require__(18));
    $templateCache.put( SpGridConstant.template.EDIT_TEXTAREA  , __webpack_require__(41));
    $templateCache.put( SpGridConstant.template.EDIT_CHECKBOX, __webpack_require__(19));
    $templateCache.put( SpGridConstant.template.EDIT_SELECTBOX, __webpack_require__(20));
    $templateCache.put( SpGridConstant.template.CONTEXT_MENU, __webpack_require__(21));
    $templateCache.put( SpGridConstant.template.DATA_VIEW   , __webpack_require__(22));

    $templateCache.put( SpGridConstant.template.SP_GRID_PAGING, __webpack_require__(23));

}]);

    __webpack_require__(24)(app);
    __webpack_require__(25)(app)
    __webpack_require__(26)(app);
    __webpack_require__(27)(app);
    __webpack_require__(28)(app);

    __webpack_require__(29)(app);
    __webpack_require__(30)(app);
    __webpack_require__(31)(app);
    __webpack_require__(32)(app);
    __webpack_require__(33)(app);
    __webpack_require__(34)(app);
    __webpack_require__(35)(app);
    __webpack_require__(36)(app);
    __webpack_require__(37)(app);
    // require("./directives/spGridDataContextMenu")(app);
    __webpack_require__(38)(app);
    __webpack_require__(39)(app);
    __webpack_require__(40)(app);




/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./SpGrid.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./SpGrid.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".sp-grid-wrap {\n  width: 100%;\n  overflow-x: auto;\n}\n.sp-grid-wrap .sp-grid .sp-grid-body {\n  position: relative;\n  overflow-x: hidden;\n}\n.sp-grid-wrap .sp-grid .sp-grid-body .sp-grid-notice-message {\n  height: 150px;\n  text-align: center;\n  vertical-align: bottom;\n  padding-top: 60px;\n  border-bottom: 1px solid #f2f2f2;\n  font-size: 13px;\n}\n.sp-grid-wrap .sp-grid .sp-grid-body .sp-grid-data .nb-inputText {\n  padding: 0;\n}\n.sp-grid-wrap .sp-grid .sp-grid-body .sp-grid-data .nb-inputText input[type=text] {\n  height: 30px;\n}\n.sp-grid-wrap .sp-grid .sp-grid-body .sp-grid-data .nb-select label {\n  height: 30px;\n}\n.sp-grid-wrap .sp-grid .sp-grid-body .sp-grid-data .nb-checkbox i {\n  top: -2px;\n  left: 2px;\n}\n.sp-grid-wrap .sp-grid .sp-grid-body .sp-grid-data .nb-textarea textarea {\n  min-height: 90px !important;\n}\n.sp-grid-wrap .sp-grid .sp-grid-data-context-menu-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.sp-grid-wrap .sp-grid .sp-grid-data-context-menu-wrap {\n  position: absolute;\n}\n.sp-grid-wrap .sp-grid .sp-grid-data-context-menu-wrap > .sp-grid-data-context-menu {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.sp-grid-wrap .sp-grid .sp-grid-data-context-menu-wrap > .sp-grid-data-context-menu > li {\n  padding: 5px 20px;\n  border: 1px solid #4b4b4b;\n  box-sizing: border-box;\n  background: -webkit-linear-gradient(#fff, #fefefe);\n  background: -o-linear-gradient(#fff, #fefefe);\n  background: -moz-linear-gradient(#fff, #fefefe);\n  background: linear-gradient(#fff, #fefefe);\n  box-shadow: 1px 1px 1px #4b4b4b;\n}\n.sp-grid-wrap .sp-grid .sp-grid-header-column {\n  position: relative;\n}\n.sp-grid-wrap .sp-grid [class^=sp-grid-order] {\n  position: absolute;\n  right: -4px;\n  font-size: 10px;\n  cursor: pointer;\n}\n.sp-grid-wrap .sp-grid .sp-grid-order-wrap {\n  position: relative;\n  visibility: hidden;\n}\n.sp-grid-wrap .sp-grid .sp-grid-header-column:hover .sp-grid-order-wrap {\n  visibility: visible;\n}\n.sp-grid-wrap .sp-grid .sp-grid-order-asc {\n  top: -5px;\n}\n.sp-grid-wrap .sp-grid .sp-grid-order-desc {\n  bottom: -1px;\n}\n.sp-grid-wrap .sp-grid .sp-grid-data-active {\n  background: #fbfbfb;\n}\n.sp-grid.selectable .sp-grid-data-row:hover {\n  background: #fbfbfb;\n  cursor: pointer;\n}\n.sp-grid.selectable .sp-grid-data-select {\n  background: #fbfbfb;\n}\n@media (min-width: 501px) {\n  .sp-grid {\n    width: 100%;\n    display: table;\n  }\n  .sp-grid > .sp-grid-body {\n    overflow-y: auto;\n  }\n  .sp-grid > .sp-grid-body .sp-grid-data-row {\n    display: table-row;\n  }\n  .sp-grid > .sp-grid-body .sp-grid-data-row .sp-grid-data-column {\n    border-bottom: 1px solid #f2f2f2;\n    box-sizing: border-box;\n    color: #808080;\n    text-align: center;\n    display: table-cell;\n    vertical-align: middle;\n    font-weight: lighter;\n    font-size: 13px;\n    padding: 5px;\n    height: 51px;\n  }\n  .sp-grid > .sp-grid-body .sp-grid-data-row .sp-grid-data-column .sp-grid-data-header {\n    display: none;\n  }\n  .sp-grid > .sp-grid-body .sp-grid-data-row .sp-grid-data-column .sp-grid-data {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    word-break: break-all;\n    box-sizing: border-box;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n  .sp-grid > .sp-grid-body .sp-grid-data-row .sp-grid-data-column .sp-grid-data .nb-buttons {\n    vertical-align: middle;\n  }\n  .sp-grid > .sp-grid-body .sp-grid-data-row .sp-grid-data-column .sp-grid-data .nb-buttons button {\n    padding: 0 10px;\n  }\n  .sp-grid .sp-grid-footer .sp-grid-footer-column {\n    border-top: 1px solid #333333;\n    border-bottom: 1px solid #333333;\n    text-align: center;\n    display: table-cell;\n    vertical-align: middle;\n    background: #f8f8f8;\n    color: #4c4c4c;\n    font-size: 13px;\n    font-weight: lighter;\n    padding: 10px;\n    height: 51px;\n  }\n  .sp-grid .sp-grid-header > .sp-grid-header-row {\n    display: table-row;\n  }\n  .sp-grid .sp-grid-header > .sp-grid-header-row .sp-grid-header-column {\n    border-top: 1px solid #333333;\n    border-bottom: 1px solid #f2f2f2;\n    text-align: center;\n    display: table-cell;\n    vertical-align: middle;\n    background: #f8f8f8;\n    color: #4c4c4c;\n    font-size: 13px;\n    font-weight: lighter;\n    padding: 10px;\n    height: 51px;\n  }\n}\n@media (max-width: 500px) {\n  .sp-grid-wrap {\n    width: 100% !important;\n    overflow: hidden;\n  }\n  .sp-grid-wrap > .sp-grid {\n    width: 100%;\n    border: 1px solid #ababab;\n    display: block;\n  }\n  .sp-grid-wrap > .sp-grid > .sp-grid-header {\n    display: none;\n  }\n  .sp-grid-wrap > .sp-grid > .sp-grid-body {\n    overflow-y: auto;\n    padding: 10px;\n  }\n  .sp-grid-wrap > .sp-grid > .sp-grid-body > .sp-grid-data-row {\n    display: block;\n    height: auto;\n    margin-bottom: 30px;\n    border-top: 1px solid #f2f2f2;\n  }\n  .sp-grid-wrap > .sp-grid > .sp-grid-body > .sp-grid-data-row .sp-grid-data-column {\n    padding: 10px;\n    border-left: 1px solid #f2f2f2;\n    border-right: 1px solid #f2f2f2;\n    border-bottom: 1px solid #f2f2f2;\n    text-align: center;\n    display: block;\n    vertical-align: middle;\n    min-width: 100% !important;\n    max-width: 100% !important;\n    box-sizing: border-box;\n    font-size: 13px;\n  }\n  .sp-grid-wrap > .sp-grid > .sp-grid-body > .sp-grid-data-row .sp-grid-data-column .sp-grid-data-header,\n  .sp-grid-wrap > .sp-grid > .sp-grid-body > .sp-grid-data-row .sp-grid-data-column .sp-grid-data {\n    display: inline-block;\n    overflow: hidden;\n    word-break: break-all;\n    box-sizing: border-box;\n  }\n  .sp-grid-wrap > .sp-grid > .sp-grid-body > .sp-grid-data-row .sp-grid-data-column .sp-grid-data-header {\n    width: 20%;\n    vertical-align: top;\n  }\n  .sp-grid-wrap > .sp-grid > .sp-grid-body > .sp-grid-data-row .sp-grid-data-column .sp-grid-data {\n    width: 79%;\n  }\n  .sp-grid-wrap > .sp-grid > .sp-grid-body > .sp-grid-data-row .sp-grid-data-column .sp-grid-data .nb-buttons {\n    vertical-align: middle;\n  }\n  .sp-grid-wrap > .sp-grid > .sp-grid-body > .sp-grid-data-row .sp-grid-data-column .sp-grid-data .nb-buttons button {\n    padding: 0 10px;\n  }\n}\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
    CREATE_FLAG : "C",
    UPDATE_FLAG : "U",
    DELETE_FLAG : "D",
    ROW_ACTIVE_CLASS : "sp-grid-data-active",
    ROW_SELECT_CLASS : "sp-grid-data-select",
    template : {
        EDIT_INPUT            : "SpGridEditInput.tmpl.html",
        EDIT_TEXTAREA         : "SpGridEditTextArea.tmpl.html",
        EDIT_CHECKBOX         : "SpGridEditCheckBox.tmpl.html",
        EDIT_SELECTBOX        : "SpGridEditSelectBox.tmpl.html",
        CONTEXT_MENU          : "SpGridDataContextMenu.tmpl.html",
        DATA_VIEW             : "SpGridDataView.tmpl.html",
        SP_GRID               : "SpGrid.tmpl.html",
        SP_GRID_HEADER        : "SpGridHeader.tmpl.html",
        SP_GRID_HEADER_ROW    : "SpGridHeaderRow.tmpl.html",
        SP_GRID_HEADER_COLUMN : "SpGridHeaderColumn.tmpl.html",
        SP_GRID_BODY          : "SpGridBody.tmpl.html",
        SP_GRID_DATA_ROW      : "SpGridDataRow.tmpl.html",
        SP_GRID_DATA_ROW_BTN_GROUP : "SpGridDataRowBtnGroup.tmpl.html",
        SP_GRID_DATA_COLUMN   : "SpGridDataColumn.tmpl.html",
        SP_GRID_PAGING        : "SpGridPaging.tmpl.html",
        SP_GRID_FOOTER        : "SpGridFooter.tmpl.html",
        SP_GRID_FOOTER_ROW    : "SpGridFooterRow.tmpl.html",
        SP_GRID_FOOTER_COLUMN : "SpGridFooterColumn.tmpl.html"
    }
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<div class=sp-grid-wrap ng-style=\"{ 'width' : gridObject.getSize().width }\"> <div class=sp-grid ng-class=\"gridObject.isSelectable() ? 'selectable' : ''\"> <sp-grid-header></sp-grid-header> <sp-grid-body></sp-grid-body> <sp-grid-footer ng-if=gridObject.isUseFooterSummary()></sp-grid-footer> </div> </div>";

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<div class=sp-grid-header> <sp-grid-header-row></sp-grid-header-row> </div>";

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<div class=sp-grid-header-row> <sp-grid-header-column ng-repeat=\"column in headerColumns track by $index\"> </sp-grid-header-column> </div>";

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<div class=sp-grid-header-column ng-style=\"{ 'min-width' : getWidth(), 'max-width' : getWidth() }\"> <div> <span ng-bind-html=\"column.name | to_trusted\"></span> <span class=sp-grid-order-wrap> <span class=sp-grid-order-desc ng-show=\"column.type=='data'\" ng-click=\"orderChange(column.id,'desc')\"> <i class=\"fa fa-caret-down\" aria-hidden=true></i> </span> <span class=sp-grid-order-asc ng-show=\"column.type=='data'\" ng-click=\"orderChange(column.id,'asc')\"> <i class=\"fa fa-caret-up\" aria-hidden=true></i> </span> </span> </div> </div>";

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<div class=sp-grid-body ng-style=\"{ 'height' : gridObject.getSize().height }\"> <sp-grid-data-row ng-repeat=\"row in gridObject.getCreateData()\"></sp-grid-data-row> <sp-grid-data-row ng-repeat=\"row in range(start,start+pageSize)\"></sp-grid-data-row> <div class=sp-grid-notice-message ng-if=\"range(start,start+pageSize).length == 0 && gridObject.getCreateData().length == 0\"> 현재 조회된 데이터가 없습니다. </div> </div>";

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<div class=sp-grid-data-row ng-click=onGridDataRowClick(row) ng-hide=isRowDeleted() ng-class=getRowClass()> <form class=sp-grid-row-form novalidate name=rowForm> <sp-grid-data-column ng-repeat=\"headerColumn in gridObject.getColumnDef() track by $index\"></sp-grid-data-column> </form> </div>";

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "<div class=sp-grid-data-column ng-style=\"{ 'max-width' : columnWidth , 'min-width' : columnWidth }\"> <div class=sp-grid-data-header>{{columnHeader}}</div> <div class=sp-grid-data ng-class=\"'text-{{headerColumn.align}}'\"> <span class=sp-grid-data-view> <span ng-if=isTypeRowno()>{{ getRowno() }}</span> <span ng-if=isTypeData()> {{ headerColumn.resultFormatter(row[headerColumn.id],row)}}</span> </span> <div class=sp-grid-data-html ng-show=isTypeHtml()></div> </div> </div>";

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = " <div class=\"nb-buttons left nb-inline\"> <div class=nb-btn-save ng-show=\"!isRowActive() && gridObject.isEditable()\" ng-click=rowEdit();> <button><i class=\"fa fa-pencil-square-o\" aria-hidden=true></i></button> </div> <div class=nb-btn-save ng-show=isRowActive() ng-click=row.__validate()> <button><i class=\"fa fa-check\" aria-hidden=true></i></button></div> <div class=nb-btn-delete ng-show=isRowActive() ng-click=rowRevert()> <button><i class=\"fa fa-close\" aria-hidden=true></i></button></div> <div class=nb-btn-delete ng-show=\"!isRowActive() && gridObject.isDeleteable()\" ng-click=rowDelete()> <button><i class=\"fa fa-trash\" aria-hidden=true></i></button></div> </div>";

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<div class=sp-grid-footer> <sp-grid-footer-row></sp-grid-footer-row> </div>";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<div class=sp-grid-footer-row> <sp-grid-footer-column ng-repeat=\"headerColumn in gridObject.getColumnDef() track by $index\"></sp-grid-footer-column> </div>";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<div class=sp-grid-footer-column ng-style=\"{ 'max-width' : columnWidth , 'min-width' : columnWidth }\"> {{summary}} </div>";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "<div class=\"nb-inputText nb-2m sp-grid-data-edit\"> <label> <div> <input type=text ng-model=row[headerColumn.id] value={{row[headerColumn.id]}} name=row[headerColumn.id]> <i></i> </div> </label> </div>";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "<div class=\"nb-checkbox sp-grid-data-edit\"> <div> <label> <input type=checkbox ng-true-value=\"'{{checkbox.trueValue}}'\" ng-false-value=\"'{{checkbox.falseValue}}'\" ng-checked=\"row[headerColumn.id] == '{{checkbox.trueValue}}'\" ng-model=row[headerColumn.id]> <span> <i></i> <em>{{label}}</em> </span> </label> </div> </div>";

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<div class=\"nb-select nb-2m sp-grid-data-edit\"> <label> <select ng-model=row[headerColumn.id]> <option ng-repeat=\"item in selectbox.dataset\" value={{item[selectbox.keyField]}}>{{item[selectbox.valueField]}}</option> </select> <i></i> </label> </div>";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "<div class=sp-grid-data-context-menu-backdrop ng-show=isContextMenuShow ng-click=\"isContextMenuShow = !isContextMenuShow\"> <div class=sp-grid-data-context-menu-wrap ng-style=\"{ 'top' : rightClickPosition.currentY , 'left' : rightClickPosition.currentX }\"> <ul class=sp-grid-data-context-menu> <li ng-show=\"gridObject.isEditable() && !rowManager.isRowEditting()\" ng-click=rowManager.rowEdit()>Edit</li> <li ng-show=\"gridObject.isEditable() && rowManager.isRowEditting()\" ng-click=rowManager.rowRevert()>Revert</li> <li ng-click=rowManager.rowDelete()>Delete</li> </ul> </div> </div>";

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "<span class=sp-grid-data-view>{{headerColumn.resultFormatter(row[headerColumn.id],row)}}</span>";

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "<section class=nb-paging> <div class=nb-paging-wrap> <div class=nb-paging-first><button ng-click=gotoPage(1)>처음</button></div> <div class=nb-paging-prev><button ng-click=prevPage()>이전</button></div> <ul class=nb-paging-blocks> <li ng-repeat=\"page in getPageBlock()\"><a href=javascript:void(0); ng-class=\"currentPage == page ? 'on' : ''\" ng-click=gotoPage(page)>{{page}}</a></li> </ul> <div class=nb-paging-next><button ng-click=nextPage()>다음</button></div> <div class=nb-paging-last><button ng-click=gotoPage(totalPage)>마지막</button></div> <div class=nb-paging-info> {{currentPage}} / {{totalPage}} Page Total Record : {{totalRecordCount}} </div> </div> </section>";

/***/ }),
/* 24 */
/***/ (function(module, exports) {

function SpGrid( SpGridConstant, $templateCache ){

    function SpGrid( gridOptions ){
        var _self = this;

        this._defaultOptions = {
            editable  : false,
            deleteable : false,
            selectable : false,
            columnDef : [],
            dataset   : [],
            createDataset : [],
            registerFunction : {},
            useFooterSummary : false,
            enablePaging : false,
            /**
             * 그리드 사이즈 옵션
             */
            gridSize : {
                width  : "auto",
                height : "auto"
            },
            /**
             * 필터 옵션
             */
            filterOptions : {
                query : ""
            },
            /**
             * 페이징 옵션
             */
            pagingOptions : {
                currentPage : 1,
                pageSize    : 10,
                pageBlockSize : 10
            },
            /**
             * Grid Action 이벤트 콜백
             */
            gridAction : {
                onRowClick : function(){

                },
                onRowDeleteBefore : function(){
                    return true;
                },
                onRowDeleteAfter : function(){

                },
                onRowEditBefore : function(){
                    return true;
                },
                onRowEditAfter : function(){

                },
                onRowCreateBefore : function(){
                    return true;
                },
                onRowCreateAfter : function(){

                }

            },
            validateCallback : function( message ){
                alert(message);
            }

        };

        this.defaultColumnOptions = {
            type : "data",
            align : "center",
            resultFormatter : function( columnValue ){
                return columnValue;
            }
        };

        if( gridOptions.hasOwnProperty("gridAction") ){
            gridOptions.gridAction = angular.extend(this._defaultOptions.gridAction, gridOptions.gridAction);
        }

        this._gridOptions     = angular.extend( this._defaultOptions, gridOptions );

        this._originalDataset = angular.copy( this._gridOptions.dataset );

        this.pageDataset      = angular.copy( this._gridOptions.dataset);

        this.status = "";

        this.selectedRow = null;

        this.init();
    }

    SpGrid.prototype.getCreateData = function(){
        return this._gridOptions.createDataset;
    };

    SpGrid.prototype.getValidateCallback = function( ){
        return this._gridOptions.validateCallback;
    };

    SpGrid.prototype.setValidateCallback = function( callback ){
        this._gridOptions.validateCallback = callback;
        return this;
    };


    SpGrid.prototype.setStatus = function( status ){
        this.status = status;
        return this;
    };

    SpGrid.prototype.getStatus = function(){
        return this.status;
    };

    SpGrid.prototype.isStatusChanged = function(){
        return this.status == "edit" || this.status == "create";
    };

    /**
     * Grid Footer Summary 사용여부
     * @param useFooterSummary
     * @returns {*}
     */
    SpGrid.prototype.isUseFooterSummary = function(){
        return this._gridOptions.useFooterSummary;
    };
    /**
     * Grid 선택된 로우 지정
     * @param row
     * @returns {SpGrid}
     */
    SpGrid.prototype.setSelectedRow = function( row ){
        row.__isSelected = true;
        return this;
    };

    /**
     * Grid 현재 선택된 로우 리턴
     * @returns {null}
     */
    SpGrid.prototype.getSelectedRow = function(){
        var _dataset = this.getData();
        for( var i = 0 ; i < _dataset.length ; i ++ ){
            if( _dataset[i].hasOwnProperty("__isSelected")
                && _dataset[i].__isSelected ){
                return _dataset[i];
            }
        }
    };

    /**
     *
     */
    SpGrid.prototype.selectCancelAll = function(){
        angular.forEach( this.getData() , function( row ){
            if( row.hasOwnProperty("__isSelected") ){
                delete row.__isSelected;
            }
        })
    };


    SpGrid.prototype.init = function(){
        var _self    = this;
        var _columns = this.getColumnDef();


        if( this.isEditable() || this.isDeleteable()){
            _columns.push({
                type : "html",
                name: "",
                width: "150px",
                bindHtml : $templateCache.get(SpGridConstant.template.SP_GRID_DATA_ROW_BTN_GROUP)
            });
        }



        // if( this.getData() && this.getData.length > 0 ){
        //     this.generateIdx( this.getData());
        // }

        //Column Type 초기화
        if( _columns && _columns.length > 0 ){
            for( var i = 0 ; i < _columns.length ; i ++ ){
                _columns[i] = angular.extend( {}, this.defaultColumnOptions, _columns[i]);
            }
        }

    };

    // SpGrid.prototype.generateIdx = function( dataset){
    //     for( var i = 0 ; i < dataset.length ; i ++ ){
    //         dataset[i].__idx = i+1;
    //     }
    // };

    SpGrid.prototype.getFilterOptions = function(){
        return this._gridOptions.filterOptions;
    };

    SpGrid.prototype.getPageSize = function(){
        return this._gridOptions.pagingOptions.pageSize;
    };

    SpGrid.prototype.getCurrentPage = function(){
        return this._gridOptions.pagingOptions.currentPage;
    };

    SpGrid.prototype.getTotalRecordCount = function(){
        return this.getData().length;
    };

    SpGrid.prototype.getGridAction = function(){
        return this._gridOptions.gridAction;
    };

    /**
     *
     * @returns {boolean}
     */
    SpGrid.prototype.isEnablePaging = function(){
        return this._gridOptions.enablePaging;
    };
    /**
     *
     * @returns {SpGrid._defaultOptions.pagingOptions|{currentPage, pageSize}}
     */
    SpGrid.prototype.getPagingOptions = function(){
        return this._gridOptions.pagingOptions;
    };
    /**
     * 등록할 Function List
     * @returns {Array}
     */
    SpGrid.prototype.getRegisterFunction = function(){
        return this._gridOptions.registerFunction;
    };
    /**
     * Grid 컬럼 Define 목록 리턴
     * @returns {Array}
     */
    SpGrid.prototype.getColumnDef = function(){
        return this._gridOptions.columnDef;
    };

    /**
     * Original Dataset 리턴
     * @returns {*}
     */
    SpGrid.prototype.getOriginalData = function(){
        return this._originalDataset;
    };

    /**
     * Grid Dataset 리턴
     * @returns {DOMStringMap|Array|*}
     */
    SpGrid.prototype.getData = function(){
        return this._gridOptions.dataset;
    };

    /**
     * Grid Dataset 설정
     * @param dataset
     * @returns {SpGrid}
     */
    SpGrid.prototype.setData = function( dataset ){
        // this.generateIdx( dataset );
        angular.copy(dataset,this._gridOptions.dataset);
        angular.copy(this._gridOptions.dataset,this._originalDataset );

        if( this._gridOptions.enablePaging ){
            this._gridOptions.pagingOptions.totalRecordCount = dataset.length;
        }
        // this._gridOptions.dataset = dataset;
        // this._originalDataset = angular.copy( this._gridOptions.dataset );
        return this;
    };

    /**
     * Grid 사이즈(너비,높이) 리턴
     * @returns {SpGrid._defaultOptions.gridSize|{width, height}|*}
     */
    SpGrid.prototype.getSize = function(){
        return this._gridOptions.gridSize;
    };

    /**
     * Grid 사이즈(너비,높이) 설정
     * @param size
     * @returns {SpGrid}
     */
    SpGrid.prototype.setSize = function( size ){
        this._gridOptions.gridSize = size;
        return this;
    };

    /**
     * Grid Editable 리턴
     * @returns {boolean|*}
     */
    SpGrid.prototype.isEditable = function(){
        return this._gridOptions.editable;
    };

    /**
     * Grid Editable 설정
     * @param editMode
     * @returns {SpGrid}
     */
    SpGrid.prototype.setEditable = function( editable ){
        this._gridOptions.editable = editable;
        return this;
    };

    /**
     * Grid Selectable 리턴
     * @param selectable
     * @returns {boolean}
     */
    SpGrid.prototype.isSelectable = function( ){
        return this._gridOptions.selectable;
    };


    /**
     * Grid selectable 설정
     * @param selectable
     * @returns {SpGrid}
     */
    SpGrid.prototype.setSelectable = function( selectable ){
        this._gridOptions.selectable = selectable;
        return this;
    };


    /**
     * Grid Deleteable 설정
     * @returns {boolean|*}
     */
    SpGrid.prototype.isDeleteable = function(){
        return this._gridOptions.deleteable;
    };

    /**
     * Grid Deleteable 설정
     * @param deleteable
     * @returns {SpGrid}
     */
    SpGrid.prototype.setDeleteable = function( deleteable){
        this._gridOptions.deleteable = deleteable;
        return this;
    };

    /**
     * Grid 로우 추가
     */
    SpGrid.prototype.addEmptyRow = function( ){
        var _columns = this.getColumnDef();
        var _row     = {};

        if ( !this.getGridAction().onRowCreateBefore() ){
            return ;
        }
        if( this.isStatusChanged() ){
            return;
        }

        for( var i = 0 ; i < _columns.length ; i ++ ){
            //컬럼타입이 데이터인 애들만 추가해줌
            if( _columns[i].type == "data" ){
                _row[_columns[i].id] = "";
            }

        }
        _row.cudFlag = SpGridConstant.CREATE_FLAG;
        _row.__isTempSave = false;
        _row.__valid      = false;
        this.setStatus("create");
        this.getCreateData().push(_row);
    };

    /**
     * UI를 통한 insert가 아닌 직접적인 로우 삽입
     * @param row
     */
    SpGrid.prototype.addRow = function( row ){
        row.cudFlag = SpGridConstant.CREATE_FLAG;
        row.__isTempSave = true;
        row.__valid      = true;
        this.getData().push(row);
    };

    /**
     * Grid 변경된 로우 리턴
     * @returns {Array}
     */
    SpGrid.prototype.getChangedRow = function(){
        var _result = [];
        var _dataset = this.getData();
        for( var i = 0 ; i < _dataset.length ; i ++ ){
            if( _dataset[i] && _dataset[i].hasOwnProperty("cudFlag")
                && _dataset[i].cudFlag != "" && _dataset[i].__valid ){
                _result.push(_dataset[i]);
            }
        }
        return _result;
    };




    return SpGrid;
}

module.exports = function(app){
    app.factory("SpGrid", SpGrid);
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

function SpGridUtil(){
    return  {
        /**
         * 배열안에 객체를 탐색해서 원하는 필드값을 리턴
         * @param array - 배열
         * @param key - 키값
         * @param sourceField - 소스필드
         * @param targetField - 타겟필드
         * @returns targetValue
         */
        getMapData : function( array, key, sourceField, targetField ){
            for( var i = 0 ; i < array.length ; i ++ ){
                if( array[i][sourceField] == key ){
                    return array[i][targetField];
                }
            }
        },
        getFunctionName : function( func )
        {
            // Match:
            // - ^          the beginning of the string
            // - function   the word 'function'
            // - \s+        at least some white space
            // - ([\w\$]+)  capture one or more valid JavaScript identifier characters
            // - \s*        optionally followed by white space (in theory there won't be any here,
            //              so if performance is an issue this can be omitted[1]
            // - \(         followed by an opening brace
            //
            var result = /^function\s+([\w\$]+)\s*\(/.exec( func.toString() )

            return  result  ?  result[ 1 ]  :  '' // for an anonymous function there won't be a match
        },
        getValidateObject : function(){
            var _validateObject =
                {
                    required : function( value ){
                        return value != "" && value != null && value !== undefined
                    },
                    minLength : function( data, obj ){
                        if( obj.value == "" || obj.value == null || obj.value === undefined ){
                            throw new Error(["MinLength 조건은 value값을 넣어주셔야 합니다."]);
                        }
                        return data.length > obj.value;
                    },
                    maxLength : function( data, obj ){
                        if( obj.value == "" || obj.value == null || obj.value === undefined ){
                            throw new Error(["MaxLength 조건은 value값을 넣어주셔야 합니다."]);
                        }
                        return data.length < obj.value;
                    }
                };

            return _validateObject;
        },
        dirtyCheck : function( sourceObj, targetObj ){
            var dirty = true;
            angular.forEach( sourceObj, function( value, key ){
                if( key.indexOf("_validate") == -1 ){
                    if( sourceObj[key] != targetObj[key] ){
                        dirty = false;
                    }
                }
            });
            return dirty;
        },
        rowCopy : function( sourceObj, targetObj ){
            var excludeKeys = ['__isSelected', '__isTempSave', '_originalRow'];
            angular.forEach( sourceObj, function(value, key){
                if( excludeKeys.indexOf(key) == -1 ){
                    targetObj[key] = sourceObj[key];
                }
            });
        }
    }
}

module.exports = function( app ){
    app.factory("SpGridUtil", SpGridUtil );
};



/***/ }),
/* 26 */
/***/ (function(module, exports) {


function spGridController( $scope, SpGridUtil ){
    var _gridObject  = $scope.gridObject;
    var _gridColumns = _gridObject.getColumnDef();

    var _gridColumnIds = getGridColumnIds();


    $scope.init = init;

    $scope.filterDataColumn = filterDataColumn;

    $scope.getColumnData = getColumnData;




    function init(){
        registerFunction();
    }
    /**
     * Header Column 의 아이디 값만 배열로 리턴
     * @returns {Array}
     */
    function getGridColumnIds(){
        var result = [];
        angular.forEach( _gridColumns, function( col ){
            if( col.hasOwnProperty("id"))
                result.push(col.id);
        });
        return result;
    }

    /**
     * header Column에 있는 애들만 display 함
     * @param data
     * @returns {{}} - filter Object
     */
    function filterDataColumn( data ){
        var result      = {};
        var _columns    = this.getColumnDef();

        angular.forEach( data, function( value, key ){
            if( _gridColumnIds.indexOf(key) != -1 ){
                result[key] = value;
            }
        });

        return result;
    }


    /**
     * id 값으로 컬럼 너비를 구해옴
     * @param id
     * @param targetField
     * @returns {*|targetValue}
     */
    function getColumnData( id, targetField ){
        return SpGridUtil.getMapData( _gridColumns, id, 'id', targetField );
    }


    function registerFunction(){
        var _functions = _gridObject.getRegisterFunction();

        angular.forEach( _functions, function( fn, key ){
            $scope[key] = fn;
        });
    }




    init();
}


module.exports = function( app ){
    app.controller("spGridController", spGridController);
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

function spGridBodyController( $scope ){

}

module.exports = function(app){
    app.controller("spGridBodyController",spGridBodyController);
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

function spGridFooterController(){

}

module.exports = function( app ){
    app.controller("spGridFooterController", spGridFooterController);
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

/**
 * Grid 전체 영역 Directive
 */

function spGrid( $compile, SpGridConstant, orderByFilter ){
    return {
        restrict : "E",
        scope : {
            "gridObject" : "="
        },
        controller : "spGridController",
        templateUrl : SpGridConstant.template.SP_GRID,
        link : function( scope, element, attrs, ctrls, transclude ){

            // scope.orderColumn = "";
            // scope.orderReverse = true;


            scope.orderChange = orderChange;

            function orderChange( columnId, orderBy ){
                if( orderBy == "asc" ){
                    // scope.orderColumn = "-" + columnId;
                    // scope.orderReverse = true;
                    scope.gridObject.setData(orderByFilter(scope.gridObject.getData(),"-" + columnId, true));
                } else if ( orderBy == "desc" ){
                    // scope.orderColumn = "-" + columnId;
                    // scope.orderReverse = false;
                    scope.gridObject.setData(orderByFilter(scope.gridObject.getData(),"-" + columnId, false));
                }
            }




        }
    }
}


module.exports = function(app){
    app.directive("spGrid", spGrid);
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

/**
 * Grid Header Wrap Directive
 */
function spGridHeader( $compile, SpGridConstant){
    return {
        restrict : "E",
        controller : "spGridController",
        require : "^spGrid",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_HEADER,
        link : function( scope, element, attrs, ctrls, transclude ){
            calculateWidth();


            function calculateWidth(){
                var _headerWidth = getWidth();

                var _useageWidth = 0;

                var _headerColumns = scope.gridObject.getColumnDef();
                var _wildCardColumn = null;

                angular.forEach( _headerColumns, function( column ){
                    if( column.hasOwnProperty("width") ){
                        if( column.hasOwnProperty("fillRemainWidth")
                            && column.fillRemainWidth ){
                            _wildCardColumn = column;
                        } else {
                            _useageWidth += parseInt(column.width);
                        }
                    } else {
                        throw new Error([ column.name + "컬럼의 너비를 지정해주세요"])
                    }
                });

                var _gapWidth = (_headerWidth - _useageWidth)-5;

                if( _wildCardColumn == null ){
                    if( _gapWidth > 0 ){
                        var _usePercentage = 0;
                        angular.forEach( _headerColumns, function( column ){
                            _usePercentage = parseInt(column.width) / _useageWidth;
                            column.width = (parseInt(column.width) + parseFloat(( _usePercentage * _gapWidth ).toFixed(1))) + "px";
                            console.log(parseFloat(( _usePercentage * _gapWidth ).toFixed(1)));
                        });
                    }
                } else {
                    if( _gapWidth > 0 ){
                        _wildCardColumn.width = (_gapWidth+5) + "px";
                    }
                }

            }

            function getWidth(){
                var _resultWidth = 0;
                element.css({ position :"absolute", visibility : "hidden", display : "block", width: "100%"});
                _resultWidth = element.width();
                element.css({ position : "", visibility : "", display : "" });
                return _resultWidth;
            }




        }
    }
}

module.exports = function(app){
    app.directive("spGridHeader", spGridHeader);
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

/**
 * Grid Header Row Directive
 */
function spGridHeaderRow( $compile, SpGridConstant ){
    return {
        restrict : "E",
        controller : "spGridController",
        require : "^spGridHeader",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_HEADER_ROW,
        link : function( scope, element, attrs ){

            var _headerColumns = scope.gridObject.getColumnDef();
            scope.headerColumns = getColumns();


            scope.$watch("gridObject.getColumnDef()", function(){
                scope.headerColumns = getColumns();
            },true );

            function getColumns(){
                var _columns = [];
                var _colSpan       = 0;
                var colGroupIdxArr = getColGroup();

                angular.copy( _headerColumns, _columns );
                for( var i = colGroupIdxArr.length - 1 ; i > -1; i -- ){
                    _colSpan = _columns[colGroupIdxArr[i]].colSpan;
                    _columns.splice( colGroupIdxArr[i]+1, _colSpan-1 );
                }

                return _columns;
            }

            function getColGroup(){
                var _column        = null;
                var _spanWidth     = 0;
                var colGroup       = [];
                for( var i = 0 ; i < _headerColumns.length ; i ++ ){
                    _column = _headerColumns[i];
                    if( _column.hasOwnProperty("colSpan") ){

                        colGroup.push(i);
                        _spanWidth = 0;

                        for( var j = i ; j < i + _column.colSpan ; j ++ ){
                            _spanWidth += parseInt(_headerColumns[j].width);

                        }
                        _column.spanWidth = _spanWidth;
                    }
                }
                return colGroup;
            }
        }
    }
}

module.exports = function(app){
    app.directive("spGridHeaderRow", spGridHeaderRow);
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

/**
 * Grid Header Column Directive
 */
function spGridHeaderColumn( SpGridConstant){
    return {
        restrict : "E",
        controller : "spGridController",
        require : "^spGridHeaderRow",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_HEADER_COLUMN,
        link : function( scope, element, attr){

            scope.getWidth = getWidth;


            function getWidth(){
                if( scope.column.hasOwnProperty("spanWidth") ){
                    return scope.column.spanWidth;
                }
                return scope.column.width;
            }
        }
    }
}

module.exports = function(app){
    app.directive("spGridHeaderColumn", spGridHeaderColumn);
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

/**
 * Grid Body Wrap Directive
 */

function spGridBody($compile, SpGridConstant, $templateCache ){
    return {
        restrict : "E",
        controller : "spGridBodyController",
        require : "^spGrid",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_BODY,
        link : function( scope, element, attr ){
            scope.isContextMenuShow   = false;
            scope.rightClickPosition = {};

            scope.openContextMenu     = openContextMenu;

            scope.scrollTop = scrollTop;

            scope.range  = range;

            scope.$rows = null;

            scope.$watch("gridObject.getPagingOptions()", function(){
                var _currentPage = scope.gridObject.getCurrentPage() || 1;
                var _pageSize    = scope.gridObject.getPageSize();
                scope.start    = (_currentPage-1) * _pageSize;
                scope.pageSize = _pageSize;
                // scope.$rows               = range( scope.gridObject.getData(), scope.start, scope.start + scope.pageSize );
                scope.$parent.$broadcast("pageChange");
            }, true);



            function openContextMenu( event, index, rowManager ){
                scope.rowManager = rowManager;
                scope.rightClickPosition.currentX = event.pageX + 'px';
                scope.rightClickPosition.currentY = event.pageY + 'px';
                scope.isContextMenuShow = true;
            }

            function range( start, end ){
                if( scope.gridObject.isEnablePaging() ){
                    return scope.gridObject.getData().slice( start, end );
                }
                return scope.gridObject.getData();
            }

            function scrollTop(){
                element.scrollTop(0);
            }
        }
    }
}

module.exports = function(app){
    app.directive("spGridBody", spGridBody);
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

function spGridFooter( SpGridConstant ){
    return {
        restrict : "E",
        controller : "spGridFooterController",
        require : "^spGrid",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_FOOTER,
        link : function ( scope, element, attrs ){

        }
    }
}

module.exports = function( app ){
    app.directive("spGridFooter", spGridFooter );
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

function spGridFooterColumn( SpGridConstant ){
    return {
        restrict : "E",
        controller : "spGridFooterController",
        require : "^spGrid",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_FOOTER_COLUMN,
        link : function ( scope, element, attrs ){

            var _headerColumn = scope.headerColumn;
            scope.columnWidth = _headerColumn.width;
            scope.columnHeader= _headerColumn.name;


            var summaryType = {
                sum : function( dataset, columnId ){
                    var result = 0;
                    angular.forEach( dataset, function( row ){
                        if( row.hasOwnProperty(columnId) ){
                            //임시삭제도 합계에서 배제한다.
                            if( row.hasOwnProperty("cudFlag") && row.cudFlag == SpGridConstant.DELETE_FLAG ){

                            } else {
                                result += parseFloat(row[columnId]);
                            }
                        }
                    });
                    return result;
                },
                avg : function( dataset, columnId ){
                    var sum = summaryType.sum(dataset,columnId);
                    return sum / dataset.length;
                }
            };

            scope.$watchCollection("gridObject.getData()",function( dataset ){
                calculateSummary();
            });


            scope.$on("rowDelete", calculateSummary);
            scope.$on("pageChange", calculateSummary);

            function calculateSummary( ){
                var _currentPage = scope.gridObject.getCurrentPage() || 1;
                var _pageSize    = scope.gridObject.getPageSize();
                var _headerColumn = scope.headerColumn;
                var _pageDataset = null;
                var _resultFormatter = {
                    resultFormatter : function( result ){
                        return result;
                    }
                };

                if( scope.gridObject.isEnablePaging() ){
                    _pageDataset = scope.gridObject.getData().slice( (_currentPage-1)*_pageSize , ((_currentPage-1)*_pageSize) + _pageSize );
                } else {
                    _pageDataset = scope.gridObject.getData();
                }

                if( _headerColumn.hasOwnProperty("summary") ){
                    if( _headerColumn.summary){
                        _headerColumn.summary = angular.extend({}, _resultFormatter,  _headerColumn.summary );
                        if( typeof _headerColumn.summary.type  == "string"){
                            scope.summary =
                                _headerColumn.summary.resultFormatter
                                (summaryType[_headerColumn.summary.type]( _pageDataset, _headerColumn.id ));
                        } else if( typeof _headerColumn.summary.type == "function"){
                            scope.summary = _headerColumn.summary.resultFormatter(
                                _headerColumn.summary.type( _pageDataset, _headerColumn.id )
                            );
                        } else {
                            throw new Error(["summary 타입은 string 혹은 function 이어야합니다"]);
                        }

                    }

                }
            }

        }
    }
}

module.exports = function( app ){
    app.directive("spGridFooterColumn", spGridFooterColumn );
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

function spGridFooterRow( SpGridConstant ){
    return {
        restrict : "E",
        controller : "spGridFooterController",
        require : "^spGridFooter",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_FOOTER_ROW,
        link : function ( scope, element, attrs ){

        }
    }
}

module.exports = function( app ){
    app.directive("spGridFooterRow", spGridFooterRow );
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

/**
 * Grid Data Row Directive
 */
function spGridDataRow( SpGridConstant, SpGridUtil ){
    return {
        restrict : "E",
        controller : "spGridBodyController",
        require : "^spGridBody",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_DATA_ROW,
        link : function( scope, element, attr){
            scope.rightClickPosition = {};

            scope.onGridDataRowClick = onGridDataRowClick;

            scope.checkRowValid      = checkRowValid;

            scope.isTempSave         = isTempSave;

            /**
             * Grid Data Row 클릭시 기본 Action 과 커스텀 Action 동작
             */
            function onGridDataRowClick( row ){
                scope.gridObject.selectCancelAll();
                scope.gridObject.setSelectedRow( row );
                scope.gridObject.getGridAction().onRowClick( row );
            }

            function checkRowValid(){
                return scope.row.hasOwnProperty("__valid") && scope.row.__valid;
            }

            function isTempSave(){
                return scope.row.hasOwnProperty("__isTempSave") && scope.row.__isTempSave;
            }

            /**
             * Grid Data Row EditMode 변경
             */
            scope.rowEdit = function() {
                if( scope.gridObject.isStatusChanged() ){
                    return ;
                }

                if( !scope.gridObject.getGridAction().onRowEditBefore() ){
                    return ;
                }


                //Deep Copy
                if( !scope.row.hasOwnProperty("_originalRow") ){
                    var _temp = {};
                    SpGridUtil.rowCopy(scope.row, _temp);
                    scope.row["_originalRow"] = _temp;
                }



                if( !scope.row.hasOwnProperty("cudFlag")  ){

                    scope.row.cudFlag      = SpGridConstant.UPDATE_FLAG;
                }

                scope.row.__valid      = false;
                scope.row.__isTempSave = false;
                scope.gridObject.setStatus("edit");
                scope.$broadcast("changeMode");
            };

            /**
             * Grid Data Row ViewMode 변경
             */
            scope.rowRevert = function(){
                //Deep Copy

                //로우생성후 바로 캔슬시에는 로우 삭제
                if( scope.row.cudFlag == SpGridConstant.CREATE_FLAG
                && scope.gridObject.getCreateData().length > 0 ){
                    scope.gridObject.getCreateData().splice(0,1);
                } else {
                    //임시저장후 캔슬시에는 원복한후 임시저장
                    angular.copy(scope.row._originalRow, scope.row);
                    scope.row.__isTempSave = true;
                    scope.$broadcast("changeMode");
                }
                scope.gridObject.setStatus("");
            };

            /**
             * Grid Data Row Delete
             */
            scope.rowDelete =  function(){
                if( scope.gridObject.isStatusChanged() ){
                    return ;
                }

                if( !scope.gridObject.getGridAction().onRowDeleteBefore( scope.row ) ){
                   return ;
                }

                // Row Delete시 생성된데이터는 배열에서 완전삭제
                if( scope.row.cudFlag != SpGridConstant.CREATE_FLAG ){
                    scope.row.cudFlag = SpGridConstant.DELETE_FLAG;
                    scope.row.__valid = true;
                } else {
                    scope.gridObject.getData().splice(scope.$index, 1 );
                }
                scope.$parent.$broadcast("rowDelete");
                scope.gridObject.getGridAction().onRowDeleteAfter( scope.row );
            };

            /**
             * Gird Row가 수정중 일 경우
             * @returns {boolean}
             */
            scope.isRowEditting = function(){
                if( scope.row.hasOwnProperty("cudFlag")
                    && scope.row.cudFlag == SpGridConstant.UPDATE_FLAG
                    && !scope.isTempSave()){
                    return true;
                }
                return false;
            };

            /**
             * Grid Row가 추가 중 일 경우
             * @returns {boolean}
             */
            scope.isRowAdding = function(){
                if( scope.row.hasOwnProperty("cudFlag")
                    && scope.row.cudFlag == SpGridConstant.CREATE_FLAG
                    && !scope.isTempSave()){
                    return true;
                }
                return false;
            };

            scope.isRowActive = function(){
                return ( scope.isRowEditting() || scope.isRowAdding() );
            };

            /**
             * Grid Data Row 삭제된 로우인지 체크
             * @returns {boolean}
             */
            scope.isRowDeleted = function(){
                if( scope.row.hasOwnProperty("cudFlag") ){
                    return scope.row.cudFlag == SpGridConstant.DELETE_FLAG;
                }
                return false;
            };

            /**
             * Grid Row 클래스 결정
             * @returns {*}
             */
            scope.getRowClass = function(){
              if( scope.isRowActive() ){
                  return SpGridConstant.ROW_ACTIVE_CLASS;
              }

              if( scope.gridObject.isSelectable() && scope.row.hasOwnProperty("__isSelected") && scope.row.__isSelected ){
                  return SpGridConstant.ROW_SELECT_CLASS;
              }

              return ""
            };
            /**
             *
             * @returns {boolean}
             */
            scope.row.__validate = function(){
                var _headerColumns   = scope.gridObject.getColumnDef();
                var _validateObject  = SpGridUtil.getValidateObject();
                var _invalidArray  = [];
                //미리정의된 유효성검사 함수
                var _defineValidateFn = null;
                //사용자정의 유효성검사 함수
                var _customValidateFn = null;

                angular.forEach( _headerColumns, function( _column){
                    if( _column.hasOwnProperty("validate") && _column.type == "data" ){
                        angular.forEach( _column.validate, function( obj, key ){
                            _defineValidateFn = _validateObject[key];

                            if( !_defineValidateFn ){
                                if( !obj.hasOwnProperty("fn") ){
                                    throw new Error(["사용자 정의 유효성검사 형식이 어긋납니다. fn을 선언해주세요"]);
                                } else {
                                    _customValidateFn = obj.fn;

                                    if( !_customValidateFn( scope.row[_column.id], scope.row)){
                                        _invalidArray.push(obj.message);
                                    }
                                }
                            } else {
                                if( !_defineValidateFn( scope.row[_column.id], obj) ){
                                    _invalidArray.push(obj.message);
                                }
                            }


                        });
                    }
                });

                if( scope.row.cudFlag == SpGridConstant.UPDATE_FLAG ){
                    if( SpGridUtil.dirtyCheck( scope.row._originalRow, scope.row ) ){
                        scope.gridObject.getValidateCallback()("변경된 내용이 없습니다.");
                        return false;
                    }
                }


                if( _invalidArray.length > 0 ){
                    scope.gridObject.getValidateCallback()(_invalidArray[0]);
                    return false;
                } else {
                    if( scope.row.hasOwnProperty("cudFlag") &&
                        scope.row.cudFlag == SpGridConstant.CREATE_FLAG ){
                        //처음 생성한 로우의 경우 배열을 옮겨줌
                        if( scope.gridObject.getCreateData().length > 0 ){
                            scope.gridObject.getData().unshift(
                                scope.gridObject.getCreateData().splice(0,1)[0]
                            );
                        }
                        scope.gridObject.getGridAction().onRowCreateAfter( scope.row );
                    }

                    if( scope.row.hasOwnProperty("cudFlag") &&
                        scope.row.cudFlag == SpGridConstant.UPDATE_FLAG ){
                        scope.gridObject.getGridAction().onRowEditAfter( scope.row );
                    }
                    scope.row.__valid      = true;
                    scope.row.__isTempSave = true;
                }



                scope.gridObject.setStatus("");
                scope.$broadcast("changeMode");

                return true;
            };

        }
    }
}


module.exports = function(app){
    app.directive("spGridDataRow", spGridDataRow);
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

/**
 * Grid Data Column Directive
 */
function spGridDataColumn( $compile, SpGridConstant, $templateCache, $timeout ){
    return {
        restrict : "E",
        controller : "spGridController",
        require : "^spGridDataRow",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_DATA_COLUMN,
        link : function( scope, element, attr ){
            var _headerColumn = scope.headerColumn;
            scope.columnWidth = _headerColumn.width;
            scope.columnHeader= _headerColumn.name;
            scope.type        = _headerColumn.type || "data";

            scope.isTypeHtml = isTypeHtml;

            scope.isTypeData = isTypeData;

            scope.isTypeRowno = isTypeRowno;

            scope.getRowno    = getRowno;



            if( scope.isTypeHtml() ) {
                scope.bindHtml    = _headerColumn.bindHtml;
                element.find(".sp-grid-data-html").append(
                    $compile(scope.bindHtml)(scope)
                );
            }

            changeModeByCudFlag();



            function isTypeRowno(){
                return scope.type == 'rowno';
            }

            function isTypeData(){
                return scope.type == "data";
            }

            function isTypeHtml(){
                return scope.type == "html";
            }


            function changeModeByCudFlag(){
                if( !scope.row ){
                    return ;
                }

                //생성 후 미검증 & 임시저장 X 상태
                var isCreate = scope.row.cudFlag == SpGridConstant.CREATE_FLAG
                                        && !scope.isTempSave() && !scope.row.__valid;
                //수정 & 임시저장 X상태
                var isUpdate = scope.row.cudFlag == SpGridConstant.UPDATE_FLAG &&
                                _headerColumn.hasOwnProperty("editType") && !scope.isTempSave();

                if( scope.row.hasOwnProperty("cudFlag") && scope.type == "data"){
                    if( isCreate || isUpdate ){
                        // if( isCreate ){
                        //     scope.scrollTop();
                        // }
                        editMode();
                        return ;
                    }

                }
                viewMode();
            }

            function getRowno(){
                var _pageSize = scope.gridObject.getPageSize();
                var _currentPage = scope.gridObject.getCurrentPage() || 1;

                return  (_pageSize * (_currentPage-1)) + (scope.$parent.$index + 1);
            }


            function editMode(){
                var _gridDataView    = null;
                var _typeMap = {
                    "text"      : $templateCache.get(SpGridConstant.template.EDIT_INPUT),
                    "checkbox"  : $templateCache.get(SpGridConstant.template.EDIT_CHECKBOX),
                    "selectbox" : $templateCache.get(SpGridConstant.template.EDIT_SELECTBOX),
                    "textarea"  : $templateCache.get(SpGridConstant.template.EDIT_TEXTAREA)
                };
                var _typeName = null;
                var _editType = null;

                _gridDataView = element.find(".sp-grid-data-view");
                if ( _headerColumn.hasOwnProperty("editType") ){
                    _editType = _headerColumn.editType;
                    if( typeof _editType == "string" ){
                        _typeName = _editType;
                    } else if ( typeof _editType == "object" ){

                        _typeName = _editType.name;

                        if( _typeName == "checkbox" ){

                            scope.checkbox = {
                                defaultValue : "",
                                label        : ""
                            };

                            scope.checkbox = angular.extend({}, scope.checkbox, _editType );

                            // CheckBox 일 경우
                            if( !scope.row[_headerColumn.id] ) {
                                scope.row[_headerColumn.id] = scope.checkbox.defaultValue;
                            }
                            // Edit Type CheckBox
                        } else if( _typeName == "selectbox" ){

                            scope.selectbox = {
                                dataset : [],
                                keyField : "key",
                                valueField : "value",
                                defaultText : null,
                                defaultValue : null,
                                defaultIndex : null
                            };

                            scope.selectbox = angular.extend({}, scope.selectbox, _editType );

                            //Promise 객체일경우 비동기로 한번셋팅후 그후로는 배열로 사용
                            if( typeof _editType.dataset == "function"){
                                scope.selectbox.dataset = [];
                                _editType.dataset().then(function( dataset ){
                                    scope.selectbox.dataset = dataset;
                                    _editType.dataset       = dataset;
                                });
                            }

                            // Edit Type SelectBox
                            if( scope.selectbox.defaultText != null &&
                                scope.selectbox.defaultValue != null ){
                                var _defaultObject = {};
                                _defaultObject[scope.selectbox.keyField]   = scope.selectbox.defaultText;
                                _defaultObject[scope.selectbox.valueField] = scope.selectbox.defaultValue;

                                scope.selectbox.dataset.unshift(_defaultObject);
                            }

                            // Create 일 경우
                            if( !scope.row[_headerColumn.id] ) {

                                //값이 비어있을경우 defaultIndex, defaultValue 우선순위로 기본값이 정해짐
                                if( scope.selectbox.defaultValue != null ){
                                    scope.row[_headerColumn.id] = scope.selectbox.defaultValue;
                                }
                                if( scope.selectbox.defaultIndex != null){
                                    scope.row[_headerColumn.id] = scope.selectbox.dataset[scope.selectbox.defaultIndex][scope.selectbox.keyField];
                                }

                            }
                        }
                    }

                    _gridDataView.replaceWith(
                        $compile(_typeMap[_typeName] )(scope)
                    );

                    // element.focus();
                }

            }

            function viewMode(){
                var _gridEditElement = null;
                _gridEditElement = element.find(".sp-grid-data-edit");
                _gridEditElement.replaceWith(
                    $compile( $templateCache.get(SpGridConstant.template.DATA_VIEW))(scope)
                );
            }

            scope.$on("changeMode", changeModeByCudFlag );
        }
    }
};


module.exports = function( app ){
    app.directive("spGridDataColumn", spGridDataColumn);
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

function ngRightClick($parse) {
    return function(scope, element, attrs) {
        var fn = $parse(attrs.ngRightClick);
        element.bind('contextmenu', function(event) {
            scope.$apply(function() {
                event.preventDefault();
                fn(scope, {$event:event});
            });
        });
    };
}


module.exports = function(app){
    app.directive("ngRightClick", ngRightClick);
    app.filter("to_trusted", ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);

    app.filter('startFrom', function () {
        return function (input, start) {
            if (input) {
                start = +start;
                return input.slice(start);
            }
            return [];
        };
    });
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

function spGridPaging( SpGridConstant ){
    return {
        restrict : "E",
        scope : {
            pagingOptions : "=",
            onPageClick    : "&"
        },
        templateUrl : SpGridConstant.template.SP_GRID_PAGING,
        link : function( scope, element, attrs ){
            scope.currentPage = scope.pagingOptions.currentPage || 1;
            scope.pageSize    = scope.pagingOptions.pageSize;
            scope.pageBlockSize = scope.pagingOptions.pageBlockSize;

            scope.$watch("pagingOptions", function( newObj ){
                scope.totalRecordCount =  newObj.totalRecordCount;
                scope.totalPage        = Math.ceil( scope.totalRecordCount / newObj.pageSize );
            },true);


            scope.totalPgaeBlock   = Math.floor( scope.totalRecordCount / scope.pageBlockSize );
            calculateCurrentPageBlock();

            scope.getPageBlock = getPageBlock;
            scope.nextPage     = nextPage;
            scope.prevPage     = prevPage;
            scope.gotoPage     = gotoPage;
            // scope.pageBlock    = getPageBlock();

            function getPageBlock(){
                var _pageBlock = [];
                var _minPage   = (scope.currentPageBlock-1) * scope.pageBlockSize;
                var _maxPage   = _minPage + scope.pageBlockSize;

                for( var i = _minPage ; i < _maxPage ; i ++ ){
                    if( i < scope.totalPage ){
                        _pageBlock.push(i+1);
                    }
                }
                return _pageBlock;
            }

            function nextPage(){
                if( scope.currentPage < scope.totalPage ){
                    gotoPage(scope.currentPage+1);
                }
            }

            function prevPage(){
                if( scope.currentPage > 1 ){

                    gotoPage(scope.currentPage-1);
                }
            }

            function gotoPage( page ){
                var _minPage, _maxPage;
                scope.currentPage = page;
                scope.pagingOptions.currentPage = page;
                calculateCurrentPageBlock();
                _minPage   = (scope.currentPageBlock-1) * scope.pageBlockSize;
                _maxPage   = _minPage + scope.pageBlockSize;
                scope.onPageClick( _minPage, _maxPage );
            }

            function calculateCurrentPageBlock(){
                scope.currentPageBlock = Math.ceil( scope.currentPage / scope.pageBlockSize);
            }

        }
    }
}

module.exports = function( app ){
    app.directive("spGridPaging", spGridPaging );
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<div class=\"nb-textarea nb-2m sp-grid-data-edit\"> <label> <textarea ng-model=row[headerColumn.id]>{{row[headerColumn.id]}}</textarea> <i></i> </label> </div> ";

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzM1MWRiYzI3MjUwODAwYTgzZDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbGVzcy9TcEdyaWQubGVzcz9jODQzIiwid2VicGFjazovLy8uL3B1YmxpYy9sZXNzL1NwR3JpZC5sZXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU3BHcmlkQ29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlL1NwR3JpZC50bXBsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlL1NwR3JpZEhlYWRlci50bXBsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlL1NwR3JpZEhlYWRlclJvdy50bXBsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlL1NwR3JpZEhlYWRlckNvbHVtbi50bXBsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlL1NwR3JpZEJvZHkudG1wbC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZS9TcEdyaWREYXRhUm93LnRtcGwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGUvU3BHcmlkRGF0YUNvbHVtbi50bXBsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlL1NwR3JpZERhdGFSb3dCdG5Hcm91cC50bXAuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGUvU3BHcmlkRm9vdGVyLnRtcGwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGUvU3BHcmlkRm9vdGVyUm93LnRtcGwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGUvU3BHcmlkRm9vdGVyQ29sdW1uLnRtcGwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGUvU3BHcmlkRWRpdElucHV0LnRtcGwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGUvU3BHcmlkRWRpdENoZWNrQm94LnRtcGwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGUvU3BHcmlkRWRpdFNlbGVjdEJveC50bXBsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlL1NwR3JpZERhdGFDb250ZXh0TWVudS50bXBsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlL1NwR3JpZERhdGFWaWV3LnRtcGwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGUvU3BHcmlkUGFnaW5nLnRtcGwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvZmFjdG9yaWVzL1NwR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmFjdG9yaWVzL1NwR3JpZFV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL3NwR3JpZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL3NwR3JpZEJvZHlDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9zcEdyaWRGb290ZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL3NwR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9zcEdyaWRIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvc3BHcmlkSGVhZGVyUm93LmpzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL3NwR3JpZEhlYWRlckNvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9zcEdyaWRCb2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL3NwR3JpZEZvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9zcEdyaWRGb290ZXJDb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvc3BHcmlkRm9vdGVyUm93LmpzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL3NwR3JpZERhdGFSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvc3BHcmlkRGF0YUNvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy91dGlsL3NwVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9zcEdyaWRQYWdpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlL1NwR3JpZEVkaXRUZXh0QXJlYS50bXBsLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7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QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLHlCQUF5QjtBQUN6QjtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDNVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhEQUE4RDs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrREFBK0Q7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEU7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOzs7QUFHYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLGVBQWU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7OztBQzFFQSx3SEFBd0gsc0JBQXNCLHNDIiwiZmlsZSI6IlNwR3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGMzNTFkYmMyNzI1MDgwMGE4M2Q3IiwicmVxdWlyZShcIi4uL3B1YmxpYy9sZXNzL1NwR3JpZC5sZXNzXCIpO1xyXG4vLyB2YXIgYW5ndWxhciA9IHJlcXVpcmUoXCJhbmd1bGFyXCIpO1xyXG5cclxuXHJcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZShcIlNwR3JpZFwiLCBbIF0pO1xyXG5cclxuYXBwLmNvbnN0YW50KFwiU3BHcmlkQ29uc3RhbnRcIiwgcmVxdWlyZShcIi4vU3BHcmlkQ29uc3RhbnRcIikpO1xyXG5cclxuYXBwLnJ1biggWyckdGVtcGxhdGVDYWNoZScsICdTcEdyaWRDb25zdGFudCcsIGZ1bmN0aW9uKCAkdGVtcGxhdGVDYWNoZSwgU3BHcmlkQ29uc3RhbnQgKXtcclxuXHJcbiAgICAkdGVtcGxhdGVDYWNoZS5wdXQoIFNwR3JpZENvbnN0YW50LnRlbXBsYXRlLlNQX0dSSUQsIHJlcXVpcmUoIFwiLi90ZW1wbGF0ZS9TcEdyaWQudG1wbC5odG1sXCIpKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdyaWQgSGVhZGVyXHJcbiAgICAgKi9cclxuICAgICR0ZW1wbGF0ZUNhY2hlLnB1dCggU3BHcmlkQ29uc3RhbnQudGVtcGxhdGUuU1BfR1JJRF9IRUFERVIgICAgICAgICAgLCByZXF1aXJlKCBcIi4vdGVtcGxhdGUvU3BHcmlkSGVhZGVyLnRtcGwuaHRtbFwiICkpO1xyXG4gICAgJHRlbXBsYXRlQ2FjaGUucHV0KCBTcEdyaWRDb25zdGFudC50ZW1wbGF0ZS5TUF9HUklEX0hFQURFUl9ST1cgICAgICAsIHJlcXVpcmUoIFwiLi90ZW1wbGF0ZS9TcEdyaWRIZWFkZXJSb3cudG1wbC5odG1sXCIpKTtcclxuICAgICR0ZW1wbGF0ZUNhY2hlLnB1dCggU3BHcmlkQ29uc3RhbnQudGVtcGxhdGUuU1BfR1JJRF9IRUFERVJfQ09MVU1OICAgLCByZXF1aXJlKFwiLi90ZW1wbGF0ZS9TcEdyaWRIZWFkZXJDb2x1bW4udG1wbC5odG1sXCIpKTtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHcmlkIEJvZHlcclxuICAgICAqL1xyXG4gICAgJHRlbXBsYXRlQ2FjaGUucHV0KCBTcEdyaWRDb25zdGFudC50ZW1wbGF0ZS5TUF9HUklEX0JPRFkgICAgICAgICwgcmVxdWlyZShcIi4vdGVtcGxhdGUvU3BHcmlkQm9keS50bXBsLmh0bWxcIikpO1xyXG4gICAgJHRlbXBsYXRlQ2FjaGUucHV0KCBTcEdyaWRDb25zdGFudC50ZW1wbGF0ZS5TUF9HUklEX0RBVEFfUk9XICAgICwgcmVxdWlyZShcIi4vdGVtcGxhdGUvU3BHcmlkRGF0YVJvdy50bXBsLmh0bWxcIikpO1xyXG4gICAgJHRlbXBsYXRlQ2FjaGUucHV0KCBTcEdyaWRDb25zdGFudC50ZW1wbGF0ZS5TUF9HUklEX0RBVEFfQ09MVU1OICwgcmVxdWlyZShcIi4vdGVtcGxhdGUvU3BHcmlkRGF0YUNvbHVtbi50bXBsLmh0bWxcIikpO1xyXG4gICAgJHRlbXBsYXRlQ2FjaGUucHV0KCBTcEdyaWRDb25zdGFudC50ZW1wbGF0ZS5TUF9HUklEX0RBVEFfUk9XX0JUTl9HUk9VUCwgcmVxdWlyZShcIi4vdGVtcGxhdGUvU3BHcmlkRGF0YVJvd0J0bkdyb3VwLnRtcC5odG1sXCIpKTtcclxuXHJcblxyXG4gICAgJHRlbXBsYXRlQ2FjaGUucHV0KCBTcEdyaWRDb25zdGFudC50ZW1wbGF0ZS5TUF9HUklEX0ZPT1RFUiAgICAgICAgLCByZXF1aXJlKFwiLi90ZW1wbGF0ZS9TcEdyaWRGb290ZXIudG1wbC5odG1sXCIpKTtcclxuICAgICR0ZW1wbGF0ZUNhY2hlLnB1dCggU3BHcmlkQ29uc3RhbnQudGVtcGxhdGUuU1BfR1JJRF9GT09URVJfUk9XICAgICwgcmVxdWlyZShcIi4vdGVtcGxhdGUvU3BHcmlkRm9vdGVyUm93LnRtcGwuaHRtbFwiKSk7XHJcbiAgICAkdGVtcGxhdGVDYWNoZS5wdXQoIFNwR3JpZENvbnN0YW50LnRlbXBsYXRlLlNQX0dSSURfRk9PVEVSX0NPTFVNTiAsIHJlcXVpcmUoXCIuL3RlbXBsYXRlL1NwR3JpZEZvb3RlckNvbHVtbi50bXBsLmh0bWxcIikpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR3JpZCBVdGlsXHJcbiAgICAgKi9cclxuICAgICR0ZW1wbGF0ZUNhY2hlLnB1dCggU3BHcmlkQ29uc3RhbnQudGVtcGxhdGUuRURJVF9JTlBVVCAgLCByZXF1aXJlKFwiLi90ZW1wbGF0ZS9TcEdyaWRFZGl0SW5wdXQudG1wbC5odG1sXCIpKTtcclxuICAgICR0ZW1wbGF0ZUNhY2hlLnB1dCggU3BHcmlkQ29uc3RhbnQudGVtcGxhdGUuRURJVF9URVhUQVJFQSAgLCByZXF1aXJlKFwiLi90ZW1wbGF0ZS9TcEdyaWRFZGl0VGV4dEFyZWEudG1wbC5odG1sXCIpKTtcclxuICAgICR0ZW1wbGF0ZUNhY2hlLnB1dCggU3BHcmlkQ29uc3RhbnQudGVtcGxhdGUuRURJVF9DSEVDS0JPWCwgcmVxdWlyZShcIi4vdGVtcGxhdGUvU3BHcmlkRWRpdENoZWNrQm94LnRtcGwuaHRtbFwiKSk7XHJcbiAgICAkdGVtcGxhdGVDYWNoZS5wdXQoIFNwR3JpZENvbnN0YW50LnRlbXBsYXRlLkVESVRfU0VMRUNUQk9YLCByZXF1aXJlKFwiLi90ZW1wbGF0ZS9TcEdyaWRFZGl0U2VsZWN0Qm94LnRtcGwuaHRtbFwiKSk7XHJcbiAgICAkdGVtcGxhdGVDYWNoZS5wdXQoIFNwR3JpZENvbnN0YW50LnRlbXBsYXRlLkNPTlRFWFRfTUVOVSwgcmVxdWlyZShcIi4vdGVtcGxhdGUvU3BHcmlkRGF0YUNvbnRleHRNZW51LnRtcGwuaHRtbFwiKSk7XHJcbiAgICAkdGVtcGxhdGVDYWNoZS5wdXQoIFNwR3JpZENvbnN0YW50LnRlbXBsYXRlLkRBVEFfVklFVyAgICwgcmVxdWlyZShcIi4vdGVtcGxhdGUvU3BHcmlkRGF0YVZpZXcudG1wbC5odG1sXCIpKTtcclxuXHJcbiAgICAkdGVtcGxhdGVDYWNoZS5wdXQoIFNwR3JpZENvbnN0YW50LnRlbXBsYXRlLlNQX0dSSURfUEFHSU5HLCByZXF1aXJlKFwiLi90ZW1wbGF0ZS9TcEdyaWRQYWdpbmcudG1wbC5odG1sXCIpKTtcclxuXHJcbn1dKTtcclxuXHJcbiAgICByZXF1aXJlKFwiLi9mYWN0b3JpZXMvU3BHcmlkXCIpKGFwcCk7XHJcbiAgICByZXF1aXJlKFwiLi9mYWN0b3JpZXMvU3BHcmlkVXRpbFwiKShhcHApXHJcbiAgICByZXF1aXJlKFwiLi9jb250cm9sbGVycy9zcEdyaWRDb250cm9sbGVyXCIpKGFwcCk7XHJcbiAgICByZXF1aXJlKFwiLi9jb250cm9sbGVycy9zcEdyaWRCb2R5Q29udHJvbGxlclwiKShhcHApO1xyXG4gICAgcmVxdWlyZShcIi4vY29udHJvbGxlcnMvc3BHcmlkRm9vdGVyQ29udHJvbGxlclwiKShhcHApO1xyXG5cclxuICAgIHJlcXVpcmUoXCIuL2RpcmVjdGl2ZXMvc3BHcmlkXCIpKGFwcCk7XHJcbiAgICByZXF1aXJlKFwiLi9kaXJlY3RpdmVzL3NwR3JpZEhlYWRlclwiKShhcHApO1xyXG4gICAgcmVxdWlyZShcIi4vZGlyZWN0aXZlcy9zcEdyaWRIZWFkZXJSb3dcIikoYXBwKTtcclxuICAgIHJlcXVpcmUoXCIuL2RpcmVjdGl2ZXMvc3BHcmlkSGVhZGVyQ29sdW1uXCIpKGFwcCk7XHJcbiAgICByZXF1aXJlKFwiLi9kaXJlY3RpdmVzL3NwR3JpZEJvZHlcIikoYXBwKTtcclxuICAgIHJlcXVpcmUoXCIuL2RpcmVjdGl2ZXMvc3BHcmlkRm9vdGVyXCIpKGFwcCk7XHJcbiAgICByZXF1aXJlKFwiLi9kaXJlY3RpdmVzL3NwR3JpZEZvb3RlckNvbHVtblwiKShhcHApO1xyXG4gICAgcmVxdWlyZShcIi4vZGlyZWN0aXZlcy9zcEdyaWRGb290ZXJSb3dcIikoYXBwKTtcclxuICAgIHJlcXVpcmUoXCIuL2RpcmVjdGl2ZXMvc3BHcmlkRGF0YVJvd1wiKShhcHApO1xyXG4gICAgLy8gcmVxdWlyZShcIi4vZGlyZWN0aXZlcy9zcEdyaWREYXRhQ29udGV4dE1lbnVcIikoYXBwKTtcclxuICAgIHJlcXVpcmUoXCIuL2RpcmVjdGl2ZXMvc3BHcmlkRGF0YUNvbHVtblwiKShhcHApO1xyXG4gICAgcmVxdWlyZShcIi4vZGlyZWN0aXZlcy91dGlsL3NwVXRpbFwiKShhcHApO1xyXG4gICAgcmVxdWlyZShcIi4vZGlyZWN0aXZlcy9zcEdyaWRQYWdpbmdcIikoYXBwKTtcclxuXHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NwR3JpZC5sZXNzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TcEdyaWQubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3BHcmlkLmxlc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2xlc3MvU3BHcmlkLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNwLWdyaWQtd3JhcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxufVxcbi5zcC1ncmlkLXdyYXAgLnNwLWdyaWQgLnNwLWdyaWQtYm9keSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbi5zcC1ncmlkLXdyYXAgLnNwLWdyaWQgLnNwLWdyaWQtYm9keSAuc3AtZ3JpZC1ub3RpY2UtbWVzc2FnZSB7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMmYyZjI7XFxuICBmb250LXNpemU6IDEzcHg7XFxufVxcbi5zcC1ncmlkLXdyYXAgLnNwLWdyaWQgLnNwLWdyaWQtYm9keSAuc3AtZ3JpZC1kYXRhIC5uYi1pbnB1dFRleHQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuLnNwLWdyaWQtd3JhcCAuc3AtZ3JpZCAuc3AtZ3JpZC1ib2R5IC5zcC1ncmlkLWRhdGEgLm5iLWlucHV0VGV4dCBpbnB1dFt0eXBlPXRleHRdIHtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuLnNwLWdyaWQtd3JhcCAuc3AtZ3JpZCAuc3AtZ3JpZC1ib2R5IC5zcC1ncmlkLWRhdGEgLm5iLXNlbGVjdCBsYWJlbCB7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcbi5zcC1ncmlkLXdyYXAgLnNwLWdyaWQgLnNwLWdyaWQtYm9keSAuc3AtZ3JpZC1kYXRhIC5uYi1jaGVja2JveCBpIHtcXG4gIHRvcDogLTJweDtcXG4gIGxlZnQ6IDJweDtcXG59XFxuLnNwLWdyaWQtd3JhcCAuc3AtZ3JpZCAuc3AtZ3JpZC1ib2R5IC5zcC1ncmlkLWRhdGEgLm5iLXRleHRhcmVhIHRleHRhcmVhIHtcXG4gIG1pbi1oZWlnaHQ6IDkwcHggIWltcG9ydGFudDtcXG59XFxuLnNwLWdyaWQtd3JhcCAuc3AtZ3JpZCAuc3AtZ3JpZC1kYXRhLWNvbnRleHQtbWVudS1iYWNrZHJvcCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxufVxcbi5zcC1ncmlkLXdyYXAgLnNwLWdyaWQgLnNwLWdyaWQtZGF0YS1jb250ZXh0LW1lbnUtd3JhcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5zcC1ncmlkLXdyYXAgLnNwLWdyaWQgLnNwLWdyaWQtZGF0YS1jb250ZXh0LW1lbnUtd3JhcCA+IC5zcC1ncmlkLWRhdGEtY29udGV4dC1tZW51IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4uc3AtZ3JpZC13cmFwIC5zcC1ncmlkIC5zcC1ncmlkLWRhdGEtY29udGV4dC1tZW51LXdyYXAgPiAuc3AtZ3JpZC1kYXRhLWNvbnRleHQtbWVudSA+IGxpIHtcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzRiNGI0YjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjZmZmLCAjZmVmZWZlKTtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgjZmZmLCAjZmVmZWZlKTtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCNmZmYsICNmZWZlZmUpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmYsICNmZWZlZmUpO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzRiNGI0YjtcXG59XFxuLnNwLWdyaWQtd3JhcCAuc3AtZ3JpZCAuc3AtZ3JpZC1oZWFkZXItY29sdW1uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnNwLWdyaWQtd3JhcCAuc3AtZ3JpZCBbY2xhc3NePXNwLWdyaWQtb3JkZXJdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtNHB4O1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc3AtZ3JpZC13cmFwIC5zcC1ncmlkIC5zcC1ncmlkLW9yZGVyLXdyYXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uc3AtZ3JpZC13cmFwIC5zcC1ncmlkIC5zcC1ncmlkLWhlYWRlci1jb2x1bW46aG92ZXIgLnNwLWdyaWQtb3JkZXItd3JhcCB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4uc3AtZ3JpZC13cmFwIC5zcC1ncmlkIC5zcC1ncmlkLW9yZGVyLWFzYyB7XFxuICB0b3A6IC01cHg7XFxufVxcbi5zcC1ncmlkLXdyYXAgLnNwLWdyaWQgLnNwLWdyaWQtb3JkZXItZGVzYyB7XFxuICBib3R0b206IC0xcHg7XFxufVxcbi5zcC1ncmlkLXdyYXAgLnNwLWdyaWQgLnNwLWdyaWQtZGF0YS1hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcXG59XFxuLnNwLWdyaWQuc2VsZWN0YWJsZSAuc3AtZ3JpZC1kYXRhLXJvdzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc3AtZ3JpZC5zZWxlY3RhYmxlIC5zcC1ncmlkLWRhdGEtc2VsZWN0IHtcXG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA1MDFweCkge1xcbiAgLnNwLWdyaWQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICB9XFxuICAuc3AtZ3JpZCA+IC5zcC1ncmlkLWJvZHkge1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgfVxcbiAgLnNwLWdyaWQgPiAuc3AtZ3JpZC1ib2R5IC5zcC1ncmlkLWRhdGEtcm93IHtcXG4gICAgZGlzcGxheTogdGFibGUtcm93O1xcbiAgfVxcbiAgLnNwLWdyaWQgPiAuc3AtZ3JpZC1ib2R5IC5zcC1ncmlkLWRhdGEtcm93IC5zcC1ncmlkLWRhdGEtY29sdW1uIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMmYyZjI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGNvbG9yOiAjODA4MDgwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgaGVpZ2h0OiA1MXB4O1xcbiAgfVxcbiAgLnNwLWdyaWQgPiAuc3AtZ3JpZC1ib2R5IC5zcC1ncmlkLWRhdGEtcm93IC5zcC1ncmlkLWRhdGEtY29sdW1uIC5zcC1ncmlkLWRhdGEtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5zcC1ncmlkID4gLnNwLWdyaWQtYm9keSAuc3AtZ3JpZC1kYXRhLXJvdyAuc3AtZ3JpZC1kYXRhLWNvbHVtbiAuc3AtZ3JpZC1kYXRhIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gIH1cXG4gIC5zcC1ncmlkID4gLnNwLWdyaWQtYm9keSAuc3AtZ3JpZC1kYXRhLXJvdyAuc3AtZ3JpZC1kYXRhLWNvbHVtbiAuc3AtZ3JpZC1kYXRhIC5uYi1idXR0b25zIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIH1cXG4gIC5zcC1ncmlkID4gLnNwLWdyaWQtYm9keSAuc3AtZ3JpZC1kYXRhLXJvdyAuc3AtZ3JpZC1kYXRhLWNvbHVtbiAuc3AtZ3JpZC1kYXRhIC5uYi1idXR0b25zIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gIH1cXG4gIC5zcC1ncmlkIC5zcC1ncmlkLWZvb3RlciAuc3AtZ3JpZC1mb290ZXItY29sdW1uIHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMzMzMzM7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzMzMzO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XFxuICAgIGNvbG9yOiAjNGM0YzRjO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDUxcHg7XFxuICB9XFxuICAuc3AtZ3JpZCAuc3AtZ3JpZC1oZWFkZXIgPiAuc3AtZ3JpZC1oZWFkZXItcm93IHtcXG4gICAgZGlzcGxheTogdGFibGUtcm93O1xcbiAgfVxcbiAgLnNwLWdyaWQgLnNwLWdyaWQtaGVhZGVyID4gLnNwLWdyaWQtaGVhZGVyLXJvdyAuc3AtZ3JpZC1oZWFkZXItY29sdW1uIHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMzMzMzM7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmMmYyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XFxuICAgIGNvbG9yOiAjNGM0YzRjO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDUxcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgLnNwLWdyaWQtd3JhcCB7XFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuICAuc3AtZ3JpZC13cmFwID4gLnNwLWdyaWQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FiYWJhYjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICAuc3AtZ3JpZC13cmFwID4gLnNwLWdyaWQgPiAuc3AtZ3JpZC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLnNwLWdyaWQtd3JhcCA+IC5zcC1ncmlkID4gLnNwLWdyaWQtYm9keSB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuICAuc3AtZ3JpZC13cmFwID4gLnNwLWdyaWQgPiAuc3AtZ3JpZC1ib2R5ID4gLnNwLWdyaWQtZGF0YS1yb3cge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YyZjJmMjtcXG4gIH1cXG4gIC5zcC1ncmlkLXdyYXAgPiAuc3AtZ3JpZCA+IC5zcC1ncmlkLWJvZHkgPiAuc3AtZ3JpZC1kYXRhLXJvdyAuc3AtZ3JpZC1kYXRhLWNvbHVtbiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YyZjJmMjtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YyZjJmMjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMmYyZjI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgfVxcbiAgLnNwLWdyaWQtd3JhcCA+IC5zcC1ncmlkID4gLnNwLWdyaWQtYm9keSA+IC5zcC1ncmlkLWRhdGEtcm93IC5zcC1ncmlkLWRhdGEtY29sdW1uIC5zcC1ncmlkLWRhdGEtaGVhZGVyLFxcbiAgLnNwLWdyaWQtd3JhcCA+IC5zcC1ncmlkID4gLnNwLWdyaWQtYm9keSA+IC5zcC1ncmlkLWRhdGEtcm93IC5zcC1ncmlkLWRhdGEtY29sdW1uIC5zcC1ncmlkLWRhdGEge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG4gIC5zcC1ncmlkLXdyYXAgPiAuc3AtZ3JpZCA+IC5zcC1ncmlkLWJvZHkgPiAuc3AtZ3JpZC1kYXRhLXJvdyAuc3AtZ3JpZC1kYXRhLWNvbHVtbiAuc3AtZ3JpZC1kYXRhLWhlYWRlciB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICB9XFxuICAuc3AtZ3JpZC13cmFwID4gLnNwLWdyaWQgPiAuc3AtZ3JpZC1ib2R5ID4gLnNwLWdyaWQtZGF0YS1yb3cgLnNwLWdyaWQtZGF0YS1jb2x1bW4gLnNwLWdyaWQtZGF0YSB7XFxuICAgIHdpZHRoOiA3OSU7XFxuICB9XFxuICAuc3AtZ3JpZC13cmFwID4gLnNwLWdyaWQgPiAuc3AtZ3JpZC1ib2R5ID4gLnNwLWdyaWQtZGF0YS1yb3cgLnNwLWdyaWQtZGF0YS1jb2x1bW4gLnNwLWdyaWQtZGF0YSAubmItYnV0dG9ucyB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB9XFxuICAuc3AtZ3JpZC13cmFwID4gLnNwLWdyaWQgPiAuc3AtZ3JpZC1ib2R5ID4gLnNwLWdyaWQtZGF0YS1yb3cgLnNwLWdyaWQtZGF0YS1jb2x1bW4gLnNwLWdyaWQtZGF0YSAubmItYnV0dG9ucyBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wdWJsaWMvbGVzcy9TcEdyaWQubGVzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24pIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgQ1JFQVRFX0ZMQUcgOiBcIkNcIixcclxuICAgIFVQREFURV9GTEFHIDogXCJVXCIsXHJcbiAgICBERUxFVEVfRkxBRyA6IFwiRFwiLFxyXG4gICAgUk9XX0FDVElWRV9DTEFTUyA6IFwic3AtZ3JpZC1kYXRhLWFjdGl2ZVwiLFxyXG4gICAgUk9XX1NFTEVDVF9DTEFTUyA6IFwic3AtZ3JpZC1kYXRhLXNlbGVjdFwiLFxyXG4gICAgdGVtcGxhdGUgOiB7XHJcbiAgICAgICAgRURJVF9JTlBVVCAgICAgICAgICAgIDogXCJTcEdyaWRFZGl0SW5wdXQudG1wbC5odG1sXCIsXHJcbiAgICAgICAgRURJVF9URVhUQVJFQSAgICAgICAgIDogXCJTcEdyaWRFZGl0VGV4dEFyZWEudG1wbC5odG1sXCIsXHJcbiAgICAgICAgRURJVF9DSEVDS0JPWCAgICAgICAgIDogXCJTcEdyaWRFZGl0Q2hlY2tCb3gudG1wbC5odG1sXCIsXHJcbiAgICAgICAgRURJVF9TRUxFQ1RCT1ggICAgICAgIDogXCJTcEdyaWRFZGl0U2VsZWN0Qm94LnRtcGwuaHRtbFwiLFxyXG4gICAgICAgIENPTlRFWFRfTUVOVSAgICAgICAgICA6IFwiU3BHcmlkRGF0YUNvbnRleHRNZW51LnRtcGwuaHRtbFwiLFxyXG4gICAgICAgIERBVEFfVklFVyAgICAgICAgICAgICA6IFwiU3BHcmlkRGF0YVZpZXcudG1wbC5odG1sXCIsXHJcbiAgICAgICAgU1BfR1JJRCAgICAgICAgICAgICAgIDogXCJTcEdyaWQudG1wbC5odG1sXCIsXHJcbiAgICAgICAgU1BfR1JJRF9IRUFERVIgICAgICAgIDogXCJTcEdyaWRIZWFkZXIudG1wbC5odG1sXCIsXHJcbiAgICAgICAgU1BfR1JJRF9IRUFERVJfUk9XICAgIDogXCJTcEdyaWRIZWFkZXJSb3cudG1wbC5odG1sXCIsXHJcbiAgICAgICAgU1BfR1JJRF9IRUFERVJfQ09MVU1OIDogXCJTcEdyaWRIZWFkZXJDb2x1bW4udG1wbC5odG1sXCIsXHJcbiAgICAgICAgU1BfR1JJRF9CT0RZICAgICAgICAgIDogXCJTcEdyaWRCb2R5LnRtcGwuaHRtbFwiLFxyXG4gICAgICAgIFNQX0dSSURfREFUQV9ST1cgICAgICA6IFwiU3BHcmlkRGF0YVJvdy50bXBsLmh0bWxcIixcclxuICAgICAgICBTUF9HUklEX0RBVEFfUk9XX0JUTl9HUk9VUCA6IFwiU3BHcmlkRGF0YVJvd0J0bkdyb3VwLnRtcGwuaHRtbFwiLFxyXG4gICAgICAgIFNQX0dSSURfREFUQV9DT0xVTU4gICA6IFwiU3BHcmlkRGF0YUNvbHVtbi50bXBsLmh0bWxcIixcclxuICAgICAgICBTUF9HUklEX1BBR0lORyAgICAgICAgOiBcIlNwR3JpZFBhZ2luZy50bXBsLmh0bWxcIixcclxuICAgICAgICBTUF9HUklEX0ZPT1RFUiAgICAgICAgOiBcIlNwR3JpZEZvb3Rlci50bXBsLmh0bWxcIixcclxuICAgICAgICBTUF9HUklEX0ZPT1RFUl9ST1cgICAgOiBcIlNwR3JpZEZvb3RlclJvdy50bXBsLmh0bWxcIixcclxuICAgICAgICBTUF9HUklEX0ZPT1RFUl9DT0xVTU4gOiBcIlNwR3JpZEZvb3RlckNvbHVtbi50bXBsLmh0bWxcIlxyXG4gICAgfVxyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9TcEdyaWRDb25zdGFudC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1zcC1ncmlkLXdyYXAgbmctc3R5bGU9XFxcInsgJ3dpZHRoJyA6IGdyaWRPYmplY3QuZ2V0U2l6ZSgpLndpZHRoIH1cXFwiPiA8ZGl2IGNsYXNzPXNwLWdyaWQgbmctY2xhc3M9XFxcImdyaWRPYmplY3QuaXNTZWxlY3RhYmxlKCkgPyAnc2VsZWN0YWJsZScgOiAnJ1xcXCI+IDxzcC1ncmlkLWhlYWRlcj48L3NwLWdyaWQtaGVhZGVyPiA8c3AtZ3JpZC1ib2R5Pjwvc3AtZ3JpZC1ib2R5PiA8c3AtZ3JpZC1mb290ZXIgbmctaWY9Z3JpZE9iamVjdC5pc1VzZUZvb3RlclN1bW1hcnkoKT48L3NwLWdyaWQtZm9vdGVyPiA8L2Rpdj4gPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGUvU3BHcmlkLnRtcGwuaHRtbFxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1zcC1ncmlkLWhlYWRlcj4gPHNwLWdyaWQtaGVhZGVyLXJvdz48L3NwLWdyaWQtaGVhZGVyLXJvdz4gPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGUvU3BHcmlkSGVhZGVyLnRtcGwuaHRtbFxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1zcC1ncmlkLWhlYWRlci1yb3c+IDxzcC1ncmlkLWhlYWRlci1jb2x1bW4gbmctcmVwZWF0PVxcXCJjb2x1bW4gaW4gaGVhZGVyQ29sdW1ucyB0cmFjayBieSAkaW5kZXhcXFwiPiA8L3NwLWdyaWQtaGVhZGVyLWNvbHVtbj4gPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGUvU3BHcmlkSGVhZGVyUm93LnRtcGwuaHRtbFxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1zcC1ncmlkLWhlYWRlci1jb2x1bW4gbmctc3R5bGU9XFxcInsgJ21pbi13aWR0aCcgOiBnZXRXaWR0aCgpLCAnbWF4LXdpZHRoJyA6IGdldFdpZHRoKCkgfVxcXCI+IDxkaXY+IDxzcGFuIG5nLWJpbmQtaHRtbD1cXFwiY29sdW1uLm5hbWUgfCB0b190cnVzdGVkXFxcIj48L3NwYW4+IDxzcGFuIGNsYXNzPXNwLWdyaWQtb3JkZXItd3JhcD4gPHNwYW4gY2xhc3M9c3AtZ3JpZC1vcmRlci1kZXNjIG5nLXNob3c9XFxcImNvbHVtbi50eXBlPT0nZGF0YSdcXFwiIG5nLWNsaWNrPVxcXCJvcmRlckNoYW5nZShjb2x1bW4uaWQsJ2Rlc2MnKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1jYXJldC1kb3duXFxcIiBhcmlhLWhpZGRlbj10cnVlPjwvaT4gPC9zcGFuPiA8c3BhbiBjbGFzcz1zcC1ncmlkLW9yZGVyLWFzYyBuZy1zaG93PVxcXCJjb2x1bW4udHlwZT09J2RhdGEnXFxcIiBuZy1jbGljaz1cXFwib3JkZXJDaGFuZ2UoY29sdW1uLmlkLCdhc2MnKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1jYXJldC11cFxcXCIgYXJpYS1oaWRkZW49dHJ1ZT48L2k+IDwvc3Bhbj4gPC9zcGFuPiA8L2Rpdj4gPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGUvU3BHcmlkSGVhZGVyQ29sdW1uLnRtcGwuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9c3AtZ3JpZC1ib2R5IG5nLXN0eWxlPVxcXCJ7ICdoZWlnaHQnIDogZ3JpZE9iamVjdC5nZXRTaXplKCkuaGVpZ2h0IH1cXFwiPiA8c3AtZ3JpZC1kYXRhLXJvdyBuZy1yZXBlYXQ9XFxcInJvdyBpbiBncmlkT2JqZWN0LmdldENyZWF0ZURhdGEoKVxcXCI+PC9zcC1ncmlkLWRhdGEtcm93PiA8c3AtZ3JpZC1kYXRhLXJvdyBuZy1yZXBlYXQ9XFxcInJvdyBpbiByYW5nZShzdGFydCxzdGFydCtwYWdlU2l6ZSlcXFwiPjwvc3AtZ3JpZC1kYXRhLXJvdz4gPGRpdiBjbGFzcz1zcC1ncmlkLW5vdGljZS1tZXNzYWdlIG5nLWlmPVxcXCJyYW5nZShzdGFydCxzdGFydCtwYWdlU2l6ZSkubGVuZ3RoID09IDAgJiYgZ3JpZE9iamVjdC5nZXRDcmVhdGVEYXRhKCkubGVuZ3RoID09IDBcXFwiPiDtmITsnqwg7KGw7ZqM65CcIOuNsOydtO2EsOqwgCDsl4bsirXri4jri6QuIDwvZGl2PiA8L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZS9TcEdyaWRCb2R5LnRtcGwuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9c3AtZ3JpZC1kYXRhLXJvdyBuZy1jbGljaz1vbkdyaWREYXRhUm93Q2xpY2socm93KSBuZy1oaWRlPWlzUm93RGVsZXRlZCgpIG5nLWNsYXNzPWdldFJvd0NsYXNzKCk+IDxmb3JtIGNsYXNzPXNwLWdyaWQtcm93LWZvcm0gbm92YWxpZGF0ZSBuYW1lPXJvd0Zvcm0+IDxzcC1ncmlkLWRhdGEtY29sdW1uIG5nLXJlcGVhdD1cXFwiaGVhZGVyQ29sdW1uIGluIGdyaWRPYmplY3QuZ2V0Q29sdW1uRGVmKCkgdHJhY2sgYnkgJGluZGV4XFxcIj48L3NwLWdyaWQtZGF0YS1jb2x1bW4+IDwvZm9ybT4gPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGUvU3BHcmlkRGF0YVJvdy50bXBsLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPXNwLWdyaWQtZGF0YS1jb2x1bW4gbmctc3R5bGU9XFxcInsgJ21heC13aWR0aCcgOiBjb2x1bW5XaWR0aCAsICdtaW4td2lkdGgnIDogY29sdW1uV2lkdGggfVxcXCI+IDxkaXYgY2xhc3M9c3AtZ3JpZC1kYXRhLWhlYWRlcj57e2NvbHVtbkhlYWRlcn19PC9kaXY+IDxkaXYgY2xhc3M9c3AtZ3JpZC1kYXRhIG5nLWNsYXNzPVxcXCIndGV4dC17e2hlYWRlckNvbHVtbi5hbGlnbn19J1xcXCI+IDxzcGFuIGNsYXNzPXNwLWdyaWQtZGF0YS12aWV3PiA8c3BhbiBuZy1pZj1pc1R5cGVSb3dubygpPnt7IGdldFJvd25vKCkgfX08L3NwYW4+IDxzcGFuIG5nLWlmPWlzVHlwZURhdGEoKT4ge3sgaGVhZGVyQ29sdW1uLnJlc3VsdEZvcm1hdHRlcihyb3dbaGVhZGVyQ29sdW1uLmlkXSxyb3cpfX08L3NwYW4+IDwvc3Bhbj4gPGRpdiBjbGFzcz1zcC1ncmlkLWRhdGEtaHRtbCBuZy1zaG93PWlzVHlwZUh0bWwoKT48L2Rpdj4gPC9kaXY+IDwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlL1NwR3JpZERhdGFDb2x1bW4udG1wbC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiIDxkaXYgY2xhc3M9XFxcIm5iLWJ1dHRvbnMgbGVmdCBuYi1pbmxpbmVcXFwiPiA8ZGl2IGNsYXNzPW5iLWJ0bi1zYXZlIG5nLXNob3c9XFxcIiFpc1Jvd0FjdGl2ZSgpICYmIGdyaWRPYmplY3QuaXNFZGl0YWJsZSgpXFxcIiBuZy1jbGljaz1yb3dFZGl0KCk7PiA8YnV0dG9uPjxpIGNsYXNzPVxcXCJmYSBmYS1wZW5jaWwtc3F1YXJlLW9cXFwiIGFyaWEtaGlkZGVuPXRydWU+PC9pPjwvYnV0dG9uPiA8L2Rpdj4gPGRpdiBjbGFzcz1uYi1idG4tc2F2ZSBuZy1zaG93PWlzUm93QWN0aXZlKCkgbmctY2xpY2s9cm93Ll9fdmFsaWRhdGUoKT4gPGJ1dHRvbj48aSBjbGFzcz1cXFwiZmEgZmEtY2hlY2tcXFwiIGFyaWEtaGlkZGVuPXRydWU+PC9pPjwvYnV0dG9uPjwvZGl2PiA8ZGl2IGNsYXNzPW5iLWJ0bi1kZWxldGUgbmctc2hvdz1pc1Jvd0FjdGl2ZSgpIG5nLWNsaWNrPXJvd1JldmVydCgpPiA8YnV0dG9uPjxpIGNsYXNzPVxcXCJmYSBmYS1jbG9zZVxcXCIgYXJpYS1oaWRkZW49dHJ1ZT48L2k+PC9idXR0b24+PC9kaXY+IDxkaXYgY2xhc3M9bmItYnRuLWRlbGV0ZSBuZy1zaG93PVxcXCIhaXNSb3dBY3RpdmUoKSAmJiBncmlkT2JqZWN0LmlzRGVsZXRlYWJsZSgpXFxcIiBuZy1jbGljaz1yb3dEZWxldGUoKT4gPGJ1dHRvbj48aSBjbGFzcz1cXFwiZmEgZmEtdHJhc2hcXFwiIGFyaWEtaGlkZGVuPXRydWU+PC9pPjwvYnV0dG9uPjwvZGl2PiA8L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZS9TcEdyaWREYXRhUm93QnRuR3JvdXAudG1wLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPXNwLWdyaWQtZm9vdGVyPiA8c3AtZ3JpZC1mb290ZXItcm93Pjwvc3AtZ3JpZC1mb290ZXItcm93PiA8L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZS9TcEdyaWRGb290ZXIudG1wbC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1zcC1ncmlkLWZvb3Rlci1yb3c+IDxzcC1ncmlkLWZvb3Rlci1jb2x1bW4gbmctcmVwZWF0PVxcXCJoZWFkZXJDb2x1bW4gaW4gZ3JpZE9iamVjdC5nZXRDb2x1bW5EZWYoKSB0cmFjayBieSAkaW5kZXhcXFwiPjwvc3AtZ3JpZC1mb290ZXItY29sdW1uPiA8L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZS9TcEdyaWRGb290ZXJSb3cudG1wbC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1zcC1ncmlkLWZvb3Rlci1jb2x1bW4gbmctc3R5bGU9XFxcInsgJ21heC13aWR0aCcgOiBjb2x1bW5XaWR0aCAsICdtaW4td2lkdGgnIDogY29sdW1uV2lkdGggfVxcXCI+IHt7c3VtbWFyeX19IDwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlL1NwR3JpZEZvb3RlckNvbHVtbi50bXBsLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJuYi1pbnB1dFRleHQgbmItMm0gc3AtZ3JpZC1kYXRhLWVkaXRcXFwiPiA8bGFiZWw+IDxkaXY+IDxpbnB1dCB0eXBlPXRleHQgbmctbW9kZWw9cm93W2hlYWRlckNvbHVtbi5pZF0gdmFsdWU9e3tyb3dbaGVhZGVyQ29sdW1uLmlkXX19IG5hbWU9cm93W2hlYWRlckNvbHVtbi5pZF0+IDxpPjwvaT4gPC9kaXY+IDwvbGFiZWw+IDwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlL1NwR3JpZEVkaXRJbnB1dC50bXBsLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJuYi1jaGVja2JveCBzcC1ncmlkLWRhdGEtZWRpdFxcXCI+IDxkaXY+IDxsYWJlbD4gPGlucHV0IHR5cGU9Y2hlY2tib3ggbmctdHJ1ZS12YWx1ZT1cXFwiJ3t7Y2hlY2tib3gudHJ1ZVZhbHVlfX0nXFxcIiBuZy1mYWxzZS12YWx1ZT1cXFwiJ3t7Y2hlY2tib3guZmFsc2VWYWx1ZX19J1xcXCIgbmctY2hlY2tlZD1cXFwicm93W2hlYWRlckNvbHVtbi5pZF0gPT0gJ3t7Y2hlY2tib3gudHJ1ZVZhbHVlfX0nXFxcIiBuZy1tb2RlbD1yb3dbaGVhZGVyQ29sdW1uLmlkXT4gPHNwYW4+IDxpPjwvaT4gPGVtPnt7bGFiZWx9fTwvZW0+IDwvc3Bhbj4gPC9sYWJlbD4gPC9kaXY+IDwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlL1NwR3JpZEVkaXRDaGVja0JveC50bXBsLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJuYi1zZWxlY3QgbmItMm0gc3AtZ3JpZC1kYXRhLWVkaXRcXFwiPiA8bGFiZWw+IDxzZWxlY3QgbmctbW9kZWw9cm93W2hlYWRlckNvbHVtbi5pZF0+IDxvcHRpb24gbmctcmVwZWF0PVxcXCJpdGVtIGluIHNlbGVjdGJveC5kYXRhc2V0XFxcIiB2YWx1ZT17e2l0ZW1bc2VsZWN0Ym94LmtleUZpZWxkXX19Pnt7aXRlbVtzZWxlY3Rib3gudmFsdWVGaWVsZF19fTwvb3B0aW9uPiA8L3NlbGVjdD4gPGk+PC9pPiA8L2xhYmVsPiA8L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZS9TcEdyaWRFZGl0U2VsZWN0Qm94LnRtcGwuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9c3AtZ3JpZC1kYXRhLWNvbnRleHQtbWVudS1iYWNrZHJvcCBuZy1zaG93PWlzQ29udGV4dE1lbnVTaG93IG5nLWNsaWNrPVxcXCJpc0NvbnRleHRNZW51U2hvdyA9ICFpc0NvbnRleHRNZW51U2hvd1xcXCI+IDxkaXYgY2xhc3M9c3AtZ3JpZC1kYXRhLWNvbnRleHQtbWVudS13cmFwIG5nLXN0eWxlPVxcXCJ7ICd0b3AnIDogcmlnaHRDbGlja1Bvc2l0aW9uLmN1cnJlbnRZICwgJ2xlZnQnIDogcmlnaHRDbGlja1Bvc2l0aW9uLmN1cnJlbnRYIH1cXFwiPiA8dWwgY2xhc3M9c3AtZ3JpZC1kYXRhLWNvbnRleHQtbWVudT4gPGxpIG5nLXNob3c9XFxcImdyaWRPYmplY3QuaXNFZGl0YWJsZSgpICYmICFyb3dNYW5hZ2VyLmlzUm93RWRpdHRpbmcoKVxcXCIgbmctY2xpY2s9cm93TWFuYWdlci5yb3dFZGl0KCk+RWRpdDwvbGk+IDxsaSBuZy1zaG93PVxcXCJncmlkT2JqZWN0LmlzRWRpdGFibGUoKSAmJiByb3dNYW5hZ2VyLmlzUm93RWRpdHRpbmcoKVxcXCIgbmctY2xpY2s9cm93TWFuYWdlci5yb3dSZXZlcnQoKT5SZXZlcnQ8L2xpPiA8bGkgbmctY2xpY2s9cm93TWFuYWdlci5yb3dEZWxldGUoKT5EZWxldGU8L2xpPiA8L3VsPiA8L2Rpdj4gPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGUvU3BHcmlkRGF0YUNvbnRleHRNZW51LnRtcGwuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzcGFuIGNsYXNzPXNwLWdyaWQtZGF0YS12aWV3Pnt7aGVhZGVyQ29sdW1uLnJlc3VsdEZvcm1hdHRlcihyb3dbaGVhZGVyQ29sdW1uLmlkXSxyb3cpfX08L3NwYW4+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGUvU3BHcmlkRGF0YVZpZXcudG1wbC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNlY3Rpb24gY2xhc3M9bmItcGFnaW5nPiA8ZGl2IGNsYXNzPW5iLXBhZ2luZy13cmFwPiA8ZGl2IGNsYXNzPW5iLXBhZ2luZy1maXJzdD48YnV0dG9uIG5nLWNsaWNrPWdvdG9QYWdlKDEpPuyymOydjDwvYnV0dG9uPjwvZGl2PiA8ZGl2IGNsYXNzPW5iLXBhZ2luZy1wcmV2PjxidXR0b24gbmctY2xpY2s9cHJldlBhZ2UoKT7snbTsoIQ8L2J1dHRvbj48L2Rpdj4gPHVsIGNsYXNzPW5iLXBhZ2luZy1ibG9ja3M+IDxsaSBuZy1yZXBlYXQ9XFxcInBhZ2UgaW4gZ2V0UGFnZUJsb2NrKClcXFwiPjxhIGhyZWY9amF2YXNjcmlwdDp2b2lkKDApOyBuZy1jbGFzcz1cXFwiY3VycmVudFBhZ2UgPT0gcGFnZSA/ICdvbicgOiAnJ1xcXCIgbmctY2xpY2s9Z290b1BhZ2UocGFnZSk+e3twYWdlfX08L2E+PC9saT4gPC91bD4gPGRpdiBjbGFzcz1uYi1wYWdpbmctbmV4dD48YnV0dG9uIG5nLWNsaWNrPW5leHRQYWdlKCk+64uk7J2MPC9idXR0b24+PC9kaXY+IDxkaXYgY2xhc3M9bmItcGFnaW5nLWxhc3Q+PGJ1dHRvbiBuZy1jbGljaz1nb3RvUGFnZSh0b3RhbFBhZ2UpPuuniOyngOuniTwvYnV0dG9uPjwvZGl2PiA8ZGl2IGNsYXNzPW5iLXBhZ2luZy1pbmZvPiB7e2N1cnJlbnRQYWdlfX0gLyB7e3RvdGFsUGFnZX19IFBhZ2UgVG90YWwgUmVjb3JkIDoge3t0b3RhbFJlY29yZENvdW50fX0gPC9kaXY+IDwvZGl2PiA8L3NlY3Rpb24+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGUvU3BHcmlkUGFnaW5nLnRtcGwuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gU3BHcmlkKCBTcEdyaWRDb25zdGFudCwgJHRlbXBsYXRlQ2FjaGUgKXtcclxuXHJcbiAgICBmdW5jdGlvbiBTcEdyaWQoIGdyaWRPcHRpb25zICl7XHJcbiAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5fZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGVkaXRhYmxlICA6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZWxldGVhYmxlIDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNlbGVjdGFibGUgOiBmYWxzZSxcclxuICAgICAgICAgICAgY29sdW1uRGVmIDogW10sXHJcbiAgICAgICAgICAgIGRhdGFzZXQgICA6IFtdLFxyXG4gICAgICAgICAgICBjcmVhdGVEYXRhc2V0IDogW10sXHJcbiAgICAgICAgICAgIHJlZ2lzdGVyRnVuY3Rpb24gOiB7fSxcclxuICAgICAgICAgICAgdXNlRm9vdGVyU3VtbWFyeSA6IGZhbHNlLFxyXG4gICAgICAgICAgICBlbmFibGVQYWdpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOq3uOumrOuTnCDsgqzsnbTspogg7Ji17IWYXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBncmlkU2l6ZSA6IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoICA6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0IDogXCJhdXRvXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIO2VhO2EsCDsmLXshZhcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGZpbHRlck9wdGlvbnMgOiB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeSA6IFwiXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIO2OmOydtOynlSDsmLXshZhcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHBhZ2luZ09wdGlvbnMgOiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZSA6IDEsXHJcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZSAgICA6IDEwLFxyXG4gICAgICAgICAgICAgICAgcGFnZUJsb2NrU2l6ZSA6IDEwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBHcmlkIEFjdGlvbiDsnbTrsqTtirgg7L2c67CxXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBncmlkQWN0aW9uIDoge1xyXG4gICAgICAgICAgICAgICAgb25Sb3dDbGljayA6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uUm93RGVsZXRlQmVmb3JlIDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblJvd0RlbGV0ZUFmdGVyIDogZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25Sb3dFZGl0QmVmb3JlIDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblJvd0VkaXRBZnRlciA6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uUm93Q3JlYXRlQmVmb3JlIDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblJvd0NyZWF0ZUFmdGVyIDogZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2YWxpZGF0ZUNhbGxiYWNrIDogZnVuY3Rpb24oIG1lc3NhZ2UgKXtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZGVmYXVsdENvbHVtbk9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHR5cGUgOiBcImRhdGFcIixcclxuICAgICAgICAgICAgYWxpZ24gOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICByZXN1bHRGb3JtYXR0ZXIgOiBmdW5jdGlvbiggY29sdW1uVmFsdWUgKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb2x1bW5WYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmKCBncmlkT3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShcImdyaWRBY3Rpb25cIikgKXtcclxuICAgICAgICAgICAgZ3JpZE9wdGlvbnMuZ3JpZEFjdGlvbiA9IGFuZ3VsYXIuZXh0ZW5kKHRoaXMuX2RlZmF1bHRPcHRpb25zLmdyaWRBY3Rpb24sIGdyaWRPcHRpb25zLmdyaWRBY3Rpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZ3JpZE9wdGlvbnMgICAgID0gYW5ndWxhci5leHRlbmQoIHRoaXMuX2RlZmF1bHRPcHRpb25zLCBncmlkT3B0aW9ucyApO1xyXG5cclxuICAgICAgICB0aGlzLl9vcmlnaW5hbERhdGFzZXQgPSBhbmd1bGFyLmNvcHkoIHRoaXMuX2dyaWRPcHRpb25zLmRhdGFzZXQgKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYWdlRGF0YXNldCAgICAgID0gYW5ndWxhci5jb3B5KCB0aGlzLl9ncmlkT3B0aW9ucy5kYXRhc2V0KTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBcIlwiO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkUm93ID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgU3BHcmlkLnByb3RvdHlwZS5nZXRDcmVhdGVEYXRhID0gZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ3JpZE9wdGlvbnMuY3JlYXRlRGF0YXNldDtcclxuICAgIH07XHJcblxyXG4gICAgU3BHcmlkLnByb3RvdHlwZS5nZXRWYWxpZGF0ZUNhbGxiYWNrID0gZnVuY3Rpb24oICl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyaWRPcHRpb25zLnZhbGlkYXRlQ2FsbGJhY2s7XHJcbiAgICB9O1xyXG5cclxuICAgIFNwR3JpZC5wcm90b3R5cGUuc2V0VmFsaWRhdGVDYWxsYmFjayA9IGZ1bmN0aW9uKCBjYWxsYmFjayApe1xyXG4gICAgICAgIHRoaXMuX2dyaWRPcHRpb25zLnZhbGlkYXRlQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG5cclxuICAgIFNwR3JpZC5wcm90b3R5cGUuc2V0U3RhdHVzID0gZnVuY3Rpb24oIHN0YXR1cyApe1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICBTcEdyaWQucHJvdG90eXBlLmdldFN0YXR1cyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xyXG4gICAgfTtcclxuXHJcbiAgICBTcEdyaWQucHJvdG90eXBlLmlzU3RhdHVzQ2hhbmdlZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzID09IFwiZWRpdFwiIHx8IHRoaXMuc3RhdHVzID09IFwiY3JlYXRlXCI7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR3JpZCBGb290ZXIgU3VtbWFyeSDsgqzsmqnsl6zrtoBcclxuICAgICAqIEBwYXJhbSB1c2VGb290ZXJTdW1tYXJ5XHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG4gICAgU3BHcmlkLnByb3RvdHlwZS5pc1VzZUZvb3RlclN1bW1hcnkgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ncmlkT3B0aW9ucy51c2VGb290ZXJTdW1tYXJ5O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogR3JpZCDshKDtg53rkJwg66Gc7JqwIOyngOyglVxyXG4gICAgICogQHBhcmFtIHJvd1xyXG4gICAgICogQHJldHVybnMge1NwR3JpZH1cclxuICAgICAqL1xyXG4gICAgU3BHcmlkLnByb3RvdHlwZS5zZXRTZWxlY3RlZFJvdyA9IGZ1bmN0aW9uKCByb3cgKXtcclxuICAgICAgICByb3cuX19pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHcmlkIO2YhOyerCDshKDtg53rkJwg66Gc7JqwIOumrO2EtFxyXG4gICAgICogQHJldHVybnMge251bGx9XHJcbiAgICAgKi9cclxuICAgIFNwR3JpZC5wcm90b3R5cGUuZ2V0U2VsZWN0ZWRSb3cgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBfZGF0YXNldCA9IHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgICAgIGZvciggdmFyIGkgPSAwIDsgaSA8IF9kYXRhc2V0Lmxlbmd0aCA7IGkgKysgKXtcclxuICAgICAgICAgICAgaWYoIF9kYXRhc2V0W2ldLmhhc093blByb3BlcnR5KFwiX19pc1NlbGVjdGVkXCIpXHJcbiAgICAgICAgICAgICAgICAmJiBfZGF0YXNldFtpXS5fX2lzU2VsZWN0ZWQgKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfZGF0YXNldFtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBTcEdyaWQucHJvdG90eXBlLnNlbGVjdENhbmNlbEFsbCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKCB0aGlzLmdldERhdGEoKSAsIGZ1bmN0aW9uKCByb3cgKXtcclxuICAgICAgICAgICAgaWYoIHJvdy5oYXNPd25Qcm9wZXJ0eShcIl9faXNTZWxlY3RlZFwiKSApe1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHJvdy5fX2lzU2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgU3BHcmlkLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgX3NlbGYgICAgPSB0aGlzO1xyXG4gICAgICAgIHZhciBfY29sdW1ucyA9IHRoaXMuZ2V0Q29sdW1uRGVmKCk7XHJcblxyXG5cclxuICAgICAgICBpZiggdGhpcy5pc0VkaXRhYmxlKCkgfHwgdGhpcy5pc0RlbGV0ZWFibGUoKSl7XHJcbiAgICAgICAgICAgIF9jb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZSA6IFwiaHRtbFwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE1MHB4XCIsXHJcbiAgICAgICAgICAgICAgICBiaW5kSHRtbCA6ICR0ZW1wbGF0ZUNhY2hlLmdldChTcEdyaWRDb25zdGFudC50ZW1wbGF0ZS5TUF9HUklEX0RBVEFfUk9XX0JUTl9HUk9VUClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIGlmKCB0aGlzLmdldERhdGEoKSAmJiB0aGlzLmdldERhdGEubGVuZ3RoID4gMCApe1xyXG4gICAgICAgIC8vICAgICB0aGlzLmdlbmVyYXRlSWR4KCB0aGlzLmdldERhdGEoKSk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvL0NvbHVtbiBUeXBlIOy0iOq4sO2ZlFxyXG4gICAgICAgIGlmKCBfY29sdW1ucyAmJiBfY29sdW1ucy5sZW5ndGggPiAwICl7XHJcbiAgICAgICAgICAgIGZvciggdmFyIGkgPSAwIDsgaSA8IF9jb2x1bW5zLmxlbmd0aCA7IGkgKysgKXtcclxuICAgICAgICAgICAgICAgIF9jb2x1bW5zW2ldID0gYW5ndWxhci5leHRlbmQoIHt9LCB0aGlzLmRlZmF1bHRDb2x1bW5PcHRpb25zLCBfY29sdW1uc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTcEdyaWQucHJvdG90eXBlLmdlbmVyYXRlSWR4ID0gZnVuY3Rpb24oIGRhdGFzZXQpe1xyXG4gICAgLy8gICAgIGZvciggdmFyIGkgPSAwIDsgaSA8IGRhdGFzZXQubGVuZ3RoIDsgaSArKyApe1xyXG4gICAgLy8gICAgICAgICBkYXRhc2V0W2ldLl9faWR4ID0gaSsxO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH07XHJcblxyXG4gICAgU3BHcmlkLnByb3RvdHlwZS5nZXRGaWx0ZXJPcHRpb25zID0gZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ3JpZE9wdGlvbnMuZmlsdGVyT3B0aW9ucztcclxuICAgIH07XHJcblxyXG4gICAgU3BHcmlkLnByb3RvdHlwZS5nZXRQYWdlU2l6ZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyaWRPcHRpb25zLnBhZ2luZ09wdGlvbnMucGFnZVNpemU7XHJcbiAgICB9O1xyXG5cclxuICAgIFNwR3JpZC5wcm90b3R5cGUuZ2V0Q3VycmVudFBhZ2UgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ncmlkT3B0aW9ucy5wYWdpbmdPcHRpb25zLmN1cnJlbnRQYWdlO1xyXG4gICAgfTtcclxuXHJcbiAgICBTcEdyaWQucHJvdG90eXBlLmdldFRvdGFsUmVjb3JkQ291bnQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGEoKS5sZW5ndGg7XHJcbiAgICB9O1xyXG5cclxuICAgIFNwR3JpZC5wcm90b3R5cGUuZ2V0R3JpZEFjdGlvbiA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyaWRPcHRpb25zLmdyaWRBY3Rpb247XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBTcEdyaWQucHJvdG90eXBlLmlzRW5hYmxlUGFnaW5nID0gZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ3JpZE9wdGlvbnMuZW5hYmxlUGFnaW5nO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtTcEdyaWQuX2RlZmF1bHRPcHRpb25zLnBhZ2luZ09wdGlvbnN8e2N1cnJlbnRQYWdlLCBwYWdlU2l6ZX19XHJcbiAgICAgKi9cclxuICAgIFNwR3JpZC5wcm90b3R5cGUuZ2V0UGFnaW5nT3B0aW9ucyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyaWRPcHRpb25zLnBhZ2luZ09wdGlvbnM7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDrk7HroZ3tlaAgRnVuY3Rpb24gTGlzdFxyXG4gICAgICogQHJldHVybnMge0FycmF5fVxyXG4gICAgICovXHJcbiAgICBTcEdyaWQucHJvdG90eXBlLmdldFJlZ2lzdGVyRnVuY3Rpb24gPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ncmlkT3B0aW9ucy5yZWdpc3RlckZ1bmN0aW9uO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogR3JpZCDsu6zrn7wgRGVmaW5lIOuqqeuhnSDrpqzthLRcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cclxuICAgICAqL1xyXG4gICAgU3BHcmlkLnByb3RvdHlwZS5nZXRDb2x1bW5EZWYgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ncmlkT3B0aW9ucy5jb2x1bW5EZWY7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3JpZ2luYWwgRGF0YXNldCDrpqzthLRcclxuICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICovXHJcbiAgICBTcEdyaWQucHJvdG90eXBlLmdldE9yaWdpbmFsRGF0YSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29yaWdpbmFsRGF0YXNldDtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHcmlkIERhdGFzZXQg66as7YS0XHJcbiAgICAgKiBAcmV0dXJucyB7RE9NU3RyaW5nTWFwfEFycmF5fCp9XHJcbiAgICAgKi9cclxuICAgIFNwR3JpZC5wcm90b3R5cGUuZ2V0RGF0YSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyaWRPcHRpb25zLmRhdGFzZXQ7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR3JpZCBEYXRhc2V0IOyEpOyglVxyXG4gICAgICogQHBhcmFtIGRhdGFzZXRcclxuICAgICAqIEByZXR1cm5zIHtTcEdyaWR9XHJcbiAgICAgKi9cclxuICAgIFNwR3JpZC5wcm90b3R5cGUuc2V0RGF0YSA9IGZ1bmN0aW9uKCBkYXRhc2V0ICl7XHJcbiAgICAgICAgLy8gdGhpcy5nZW5lcmF0ZUlkeCggZGF0YXNldCApO1xyXG4gICAgICAgIGFuZ3VsYXIuY29weShkYXRhc2V0LHRoaXMuX2dyaWRPcHRpb25zLmRhdGFzZXQpO1xyXG4gICAgICAgIGFuZ3VsYXIuY29weSh0aGlzLl9ncmlkT3B0aW9ucy5kYXRhc2V0LHRoaXMuX29yaWdpbmFsRGF0YXNldCApO1xyXG5cclxuICAgICAgICBpZiggdGhpcy5fZ3JpZE9wdGlvbnMuZW5hYmxlUGFnaW5nICl7XHJcbiAgICAgICAgICAgIHRoaXMuX2dyaWRPcHRpb25zLnBhZ2luZ09wdGlvbnMudG90YWxSZWNvcmRDb3VudCA9IGRhdGFzZXQubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLl9ncmlkT3B0aW9ucy5kYXRhc2V0ID0gZGF0YXNldDtcclxuICAgICAgICAvLyB0aGlzLl9vcmlnaW5hbERhdGFzZXQgPSBhbmd1bGFyLmNvcHkoIHRoaXMuX2dyaWRPcHRpb25zLmRhdGFzZXQgKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHcmlkIOyCrOydtOymiCjrhIjruYQs64aS7J20KSDrpqzthLRcclxuICAgICAqIEByZXR1cm5zIHtTcEdyaWQuX2RlZmF1bHRPcHRpb25zLmdyaWRTaXplfHt3aWR0aCwgaGVpZ2h0fXwqfVxyXG4gICAgICovXHJcbiAgICBTcEdyaWQucHJvdG90eXBlLmdldFNpemUgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ncmlkT3B0aW9ucy5ncmlkU2l6ZTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHcmlkIOyCrOydtOymiCjrhIjruYQs64aS7J20KSDshKTsoJVcclxuICAgICAqIEBwYXJhbSBzaXplXHJcbiAgICAgKiBAcmV0dXJucyB7U3BHcmlkfVxyXG4gICAgICovXHJcbiAgICBTcEdyaWQucHJvdG90eXBlLnNldFNpemUgPSBmdW5jdGlvbiggc2l6ZSApe1xyXG4gICAgICAgIHRoaXMuX2dyaWRPcHRpb25zLmdyaWRTaXplID0gc2l6ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHcmlkIEVkaXRhYmxlIOumrO2EtFxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW58Kn1cclxuICAgICAqL1xyXG4gICAgU3BHcmlkLnByb3RvdHlwZS5pc0VkaXRhYmxlID0gZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ3JpZE9wdGlvbnMuZWRpdGFibGU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR3JpZCBFZGl0YWJsZSDshKTsoJVcclxuICAgICAqIEBwYXJhbSBlZGl0TW9kZVxyXG4gICAgICogQHJldHVybnMge1NwR3JpZH1cclxuICAgICAqL1xyXG4gICAgU3BHcmlkLnByb3RvdHlwZS5zZXRFZGl0YWJsZSA9IGZ1bmN0aW9uKCBlZGl0YWJsZSApe1xyXG4gICAgICAgIHRoaXMuX2dyaWRPcHRpb25zLmVkaXRhYmxlID0gZWRpdGFibGU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR3JpZCBTZWxlY3RhYmxlIOumrO2EtFxyXG4gICAgICogQHBhcmFtIHNlbGVjdGFibGVcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBTcEdyaWQucHJvdG90eXBlLmlzU2VsZWN0YWJsZSA9IGZ1bmN0aW9uKCApe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ncmlkT3B0aW9ucy5zZWxlY3RhYmxlO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHcmlkIHNlbGVjdGFibGUg7ISk7KCVXHJcbiAgICAgKiBAcGFyYW0gc2VsZWN0YWJsZVxyXG4gICAgICogQHJldHVybnMge1NwR3JpZH1cclxuICAgICAqL1xyXG4gICAgU3BHcmlkLnByb3RvdHlwZS5zZXRTZWxlY3RhYmxlID0gZnVuY3Rpb24oIHNlbGVjdGFibGUgKXtcclxuICAgICAgICB0aGlzLl9ncmlkT3B0aW9ucy5zZWxlY3RhYmxlID0gc2VsZWN0YWJsZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR3JpZCBEZWxldGVhYmxlIOyEpOyglVxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW58Kn1cclxuICAgICAqL1xyXG4gICAgU3BHcmlkLnByb3RvdHlwZS5pc0RlbGV0ZWFibGUgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ncmlkT3B0aW9ucy5kZWxldGVhYmxlO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdyaWQgRGVsZXRlYWJsZSDshKTsoJVcclxuICAgICAqIEBwYXJhbSBkZWxldGVhYmxlXHJcbiAgICAgKiBAcmV0dXJucyB7U3BHcmlkfVxyXG4gICAgICovXHJcbiAgICBTcEdyaWQucHJvdG90eXBlLnNldERlbGV0ZWFibGUgPSBmdW5jdGlvbiggZGVsZXRlYWJsZSl7XHJcbiAgICAgICAgdGhpcy5fZ3JpZE9wdGlvbnMuZGVsZXRlYWJsZSA9IGRlbGV0ZWFibGU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR3JpZCDroZzsmrAg7LaU6rCAXHJcbiAgICAgKi9cclxuICAgIFNwR3JpZC5wcm90b3R5cGUuYWRkRW1wdHlSb3cgPSBmdW5jdGlvbiggKXtcclxuICAgICAgICB2YXIgX2NvbHVtbnMgPSB0aGlzLmdldENvbHVtbkRlZigpO1xyXG4gICAgICAgIHZhciBfcm93ICAgICA9IHt9O1xyXG5cclxuICAgICAgICBpZiAoICF0aGlzLmdldEdyaWRBY3Rpb24oKS5vblJvd0NyZWF0ZUJlZm9yZSgpICl7XHJcbiAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCB0aGlzLmlzU3RhdHVzQ2hhbmdlZCgpICl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciggdmFyIGkgPSAwIDsgaSA8IF9jb2x1bW5zLmxlbmd0aCA7IGkgKysgKXtcclxuICAgICAgICAgICAgLy/su6zrn7ztg4DsnoXsnbQg642w7J207YSw7J24IOyVoOuTpOunjCDstpTqsIDtlbTspIxcclxuICAgICAgICAgICAgaWYoIF9jb2x1bW5zW2ldLnR5cGUgPT0gXCJkYXRhXCIgKXtcclxuICAgICAgICAgICAgICAgIF9yb3dbX2NvbHVtbnNbaV0uaWRdID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgX3Jvdy5jdWRGbGFnID0gU3BHcmlkQ29uc3RhbnQuQ1JFQVRFX0ZMQUc7XHJcbiAgICAgICAgX3Jvdy5fX2lzVGVtcFNhdmUgPSBmYWxzZTtcclxuICAgICAgICBfcm93Ll9fdmFsaWQgICAgICA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwiY3JlYXRlXCIpO1xyXG4gICAgICAgIHRoaXMuZ2V0Q3JlYXRlRGF0YSgpLnB1c2goX3Jvdyk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVUnrpbwg7Ya17ZWcIGluc2VydOqwgCDslYTri4wg7KeB7KCR7KCB7J24IOuhnOyasCDsgr3snoVcclxuICAgICAqIEBwYXJhbSByb3dcclxuICAgICAqL1xyXG4gICAgU3BHcmlkLnByb3RvdHlwZS5hZGRSb3cgPSBmdW5jdGlvbiggcm93ICl7XHJcbiAgICAgICAgcm93LmN1ZEZsYWcgPSBTcEdyaWRDb25zdGFudC5DUkVBVEVfRkxBRztcclxuICAgICAgICByb3cuX19pc1RlbXBTYXZlID0gdHJ1ZTtcclxuICAgICAgICByb3cuX192YWxpZCAgICAgID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdldERhdGEoKS5wdXNoKHJvdyk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR3JpZCDrs4Dqsr3rkJwg66Gc7JqwIOumrO2EtFxyXG4gICAgICogQHJldHVybnMge0FycmF5fVxyXG4gICAgICovXHJcbiAgICBTcEdyaWQucHJvdG90eXBlLmdldENoYW5nZWRSb3cgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBfcmVzdWx0ID0gW107XHJcbiAgICAgICAgdmFyIF9kYXRhc2V0ID0gdGhpcy5nZXREYXRhKCk7XHJcbiAgICAgICAgZm9yKCB2YXIgaSA9IDAgOyBpIDwgX2RhdGFzZXQubGVuZ3RoIDsgaSArKyApe1xyXG4gICAgICAgICAgICBpZiggX2RhdGFzZXRbaV0gJiYgX2RhdGFzZXRbaV0uaGFzT3duUHJvcGVydHkoXCJjdWRGbGFnXCIpXHJcbiAgICAgICAgICAgICAgICAmJiBfZGF0YXNldFtpXS5jdWRGbGFnICE9IFwiXCIgJiYgX2RhdGFzZXRbaV0uX192YWxpZCApe1xyXG4gICAgICAgICAgICAgICAgX3Jlc3VsdC5wdXNoKF9kYXRhc2V0W2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3Jlc3VsdDtcclxuICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIFNwR3JpZDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcHApe1xyXG4gICAgYXBwLmZhY3RvcnkoXCJTcEdyaWRcIiwgU3BHcmlkKTtcclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mYWN0b3JpZXMvU3BHcmlkLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBTcEdyaWRVdGlsKCl7XHJcbiAgICByZXR1cm4gIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDrsLDsl7TslYjsl5Ag6rCd7LK066W8IO2DkOyDie2VtOyEnCDsm5DtlZjripQg7ZWE65Oc6rCS7J2EIOumrO2EtFxyXG4gICAgICAgICAqIEBwYXJhbSBhcnJheSAtIOuwsOyXtFxyXG4gICAgICAgICAqIEBwYXJhbSBrZXkgLSDtgqTqsJJcclxuICAgICAgICAgKiBAcGFyYW0gc291cmNlRmllbGQgLSDshozsiqTtlYTrk5xcclxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0RmllbGQgLSDtg4Dqsp/tlYTrk5xcclxuICAgICAgICAgKiBAcmV0dXJucyB0YXJnZXRWYWx1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldE1hcERhdGEgOiBmdW5jdGlvbiggYXJyYXksIGtleSwgc291cmNlRmllbGQsIHRhcmdldEZpZWxkICl7XHJcbiAgICAgICAgICAgIGZvciggdmFyIGkgPSAwIDsgaSA8IGFycmF5Lmxlbmd0aCA7IGkgKysgKXtcclxuICAgICAgICAgICAgICAgIGlmKCBhcnJheVtpXVtzb3VyY2VGaWVsZF0gPT0ga2V5ICl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5W2ldW3RhcmdldEZpZWxkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0RnVuY3Rpb25OYW1lIDogZnVuY3Rpb24oIGZ1bmMgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gTWF0Y2g6XHJcbiAgICAgICAgICAgIC8vIC0gXiAgICAgICAgICB0aGUgYmVnaW5uaW5nIG9mIHRoZSBzdHJpbmdcclxuICAgICAgICAgICAgLy8gLSBmdW5jdGlvbiAgIHRoZSB3b3JkICdmdW5jdGlvbidcclxuICAgICAgICAgICAgLy8gLSBcXHMrICAgICAgICBhdCBsZWFzdCBzb21lIHdoaXRlIHNwYWNlXHJcbiAgICAgICAgICAgIC8vIC0gKFtcXHdcXCRdKykgIGNhcHR1cmUgb25lIG9yIG1vcmUgdmFsaWQgSmF2YVNjcmlwdCBpZGVudGlmaWVyIGNoYXJhY3RlcnNcclxuICAgICAgICAgICAgLy8gLSBcXHMqICAgICAgICBvcHRpb25hbGx5IGZvbGxvd2VkIGJ5IHdoaXRlIHNwYWNlIChpbiB0aGVvcnkgdGhlcmUgd29uJ3QgYmUgYW55IGhlcmUsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICBzbyBpZiBwZXJmb3JtYW5jZSBpcyBhbiBpc3N1ZSB0aGlzIGNhbiBiZSBvbWl0dGVkWzFdXHJcbiAgICAgICAgICAgIC8vIC0gXFwoICAgICAgICAgZm9sbG93ZWQgYnkgYW4gb3BlbmluZyBicmFjZVxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gL15mdW5jdGlvblxccysoW1xcd1xcJF0rKVxccypcXCgvLmV4ZWMoIGZ1bmMudG9TdHJpbmcoKSApXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gIHJlc3VsdCAgPyAgcmVzdWx0WyAxIF0gIDogICcnIC8vIGZvciBhbiBhbm9ueW1vdXMgZnVuY3Rpb24gdGhlcmUgd29uJ3QgYmUgYSBtYXRjaFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VmFsaWRhdGVPYmplY3QgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgX3ZhbGlkYXRlT2JqZWN0ID1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCA6IGZ1bmN0aW9uKCB2YWx1ZSApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgIT0gXCJcIiAmJiB2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aCA6IGZ1bmN0aW9uKCBkYXRhLCBvYmogKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIG9iai52YWx1ZSA9PSBcIlwiIHx8IG9iai52YWx1ZSA9PSBudWxsIHx8IG9iai52YWx1ZSA9PT0gdW5kZWZpbmVkICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoW1wiTWluTGVuZ3RoIOyhsOqxtOydgCB2YWx1ZeqwkuydhCDrhKPslrTso7zshZTslbwg7ZWp64uI64ukLlwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEubGVuZ3RoID4gb2JqLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoIDogZnVuY3Rpb24oIGRhdGEsIG9iaiApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggb2JqLnZhbHVlID09IFwiXCIgfHwgb2JqLnZhbHVlID09IG51bGwgfHwgb2JqLnZhbHVlID09PSB1bmRlZmluZWQgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihbXCJNYXhMZW5ndGgg7KGw6rG07J2AIHZhbHVl6rCS7J2EIOuEo+yWtOyjvOyFlOyVvCDtlanri4jri6QuXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5sZW5ndGggPCBvYmoudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBfdmFsaWRhdGVPYmplY3Q7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaXJ0eUNoZWNrIDogZnVuY3Rpb24oIHNvdXJjZU9iaiwgdGFyZ2V0T2JqICl7XHJcbiAgICAgICAgICAgIHZhciBkaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCggc291cmNlT2JqLCBmdW5jdGlvbiggdmFsdWUsIGtleSApe1xyXG4gICAgICAgICAgICAgICAgaWYoIGtleS5pbmRleE9mKFwiX3ZhbGlkYXRlXCIpID09IC0xICl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIHNvdXJjZU9ialtrZXldICE9IHRhcmdldE9ialtrZXldICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGRpcnR5O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm93Q29weSA6IGZ1bmN0aW9uKCBzb3VyY2VPYmosIHRhcmdldE9iaiApe1xyXG4gICAgICAgICAgICB2YXIgZXhjbHVkZUtleXMgPSBbJ19faXNTZWxlY3RlZCcsICdfX2lzVGVtcFNhdmUnLCAnX29yaWdpbmFsUm93J107XHJcbiAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCggc291cmNlT2JqLCBmdW5jdGlvbih2YWx1ZSwga2V5KXtcclxuICAgICAgICAgICAgICAgIGlmKCBleGNsdWRlS2V5cy5pbmRleE9mKGtleSkgPT0gLTEgKXtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRPYmpba2V5XSA9IHNvdXJjZU9ialtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oIGFwcCApe1xyXG4gICAgYXBwLmZhY3RvcnkoXCJTcEdyaWRVdGlsXCIsIFNwR3JpZFV0aWwgKTtcclxufTtcclxuXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ZhY3Rvcmllcy9TcEdyaWRVdGlsLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcclxuZnVuY3Rpb24gc3BHcmlkQ29udHJvbGxlciggJHNjb3BlLCBTcEdyaWRVdGlsICl7XHJcbiAgICB2YXIgX2dyaWRPYmplY3QgID0gJHNjb3BlLmdyaWRPYmplY3Q7XHJcbiAgICB2YXIgX2dyaWRDb2x1bW5zID0gX2dyaWRPYmplY3QuZ2V0Q29sdW1uRGVmKCk7XHJcblxyXG4gICAgdmFyIF9ncmlkQ29sdW1uSWRzID0gZ2V0R3JpZENvbHVtbklkcygpO1xyXG5cclxuXHJcbiAgICAkc2NvcGUuaW5pdCA9IGluaXQ7XHJcblxyXG4gICAgJHNjb3BlLmZpbHRlckRhdGFDb2x1bW4gPSBmaWx0ZXJEYXRhQ29sdW1uO1xyXG5cclxuICAgICRzY29wZS5nZXRDb2x1bW5EYXRhID0gZ2V0Q29sdW1uRGF0YTtcclxuXHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAgICAgcmVnaXN0ZXJGdW5jdGlvbigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBIZWFkZXIgQ29sdW1uIOydmCDslYTsnbTrlJQg6rCS66eMIOuwsOyXtOuhnCDrpqzthLRcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0R3JpZENvbHVtbklkcygpe1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgICAgICBhbmd1bGFyLmZvckVhY2goIF9ncmlkQ29sdW1ucywgZnVuY3Rpb24oIGNvbCApe1xyXG4gICAgICAgICAgICBpZiggY29sLmhhc093blByb3BlcnR5KFwiaWRcIikpXHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjb2wuaWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBoZWFkZXIgQ29sdW1u7JeQIOyeiOuKlCDslaDrk6Trp4wgZGlzcGxheSDtlahcclxuICAgICAqIEBwYXJhbSBkYXRhXHJcbiAgICAgKiBAcmV0dXJucyB7e319IC0gZmlsdGVyIE9iamVjdFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBmaWx0ZXJEYXRhQ29sdW1uKCBkYXRhICl7XHJcbiAgICAgICAgdmFyIHJlc3VsdCAgICAgID0ge307XHJcbiAgICAgICAgdmFyIF9jb2x1bW5zICAgID0gdGhpcy5nZXRDb2x1bW5EZWYoKTtcclxuXHJcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKCBkYXRhLCBmdW5jdGlvbiggdmFsdWUsIGtleSApe1xyXG4gICAgICAgICAgICBpZiggX2dyaWRDb2x1bW5JZHMuaW5kZXhPZihrZXkpICE9IC0xICl7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaWQg6rCS7Jy866GcIOy7rOufvCDrhIjruYTrpbwg6rWs7ZW07Ji0XHJcbiAgICAgKiBAcGFyYW0gaWRcclxuICAgICAqIEBwYXJhbSB0YXJnZXRGaWVsZFxyXG4gICAgICogQHJldHVybnMgeyp8dGFyZ2V0VmFsdWV9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldENvbHVtbkRhdGEoIGlkLCB0YXJnZXRGaWVsZCApe1xyXG4gICAgICAgIHJldHVybiBTcEdyaWRVdGlsLmdldE1hcERhdGEoIF9ncmlkQ29sdW1ucywgaWQsICdpZCcsIHRhcmdldEZpZWxkICk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyRnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgX2Z1bmN0aW9ucyA9IF9ncmlkT2JqZWN0LmdldFJlZ2lzdGVyRnVuY3Rpb24oKTtcclxuXHJcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKCBfZnVuY3Rpb25zLCBmdW5jdGlvbiggZm4sIGtleSApe1xyXG4gICAgICAgICAgICAkc2NvcGVba2V5XSA9IGZuO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIGluaXQoKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oIGFwcCApe1xyXG4gICAgYXBwLmNvbnRyb2xsZXIoXCJzcEdyaWRDb250cm9sbGVyXCIsIHNwR3JpZENvbnRyb2xsZXIpO1xyXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRyb2xsZXJzL3NwR3JpZENvbnRyb2xsZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIHNwR3JpZEJvZHlDb250cm9sbGVyKCAkc2NvcGUgKXtcclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXBwKXtcclxuICAgIGFwcC5jb250cm9sbGVyKFwic3BHcmlkQm9keUNvbnRyb2xsZXJcIixzcEdyaWRCb2R5Q29udHJvbGxlcik7XHJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29udHJvbGxlcnMvc3BHcmlkQm9keUNvbnRyb2xsZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIHNwR3JpZEZvb3RlckNvbnRyb2xsZXIoKXtcclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oIGFwcCApe1xyXG4gICAgYXBwLmNvbnRyb2xsZXIoXCJzcEdyaWRGb290ZXJDb250cm9sbGVyXCIsIHNwR3JpZEZvb3RlckNvbnRyb2xsZXIpO1xyXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRyb2xsZXJzL3NwR3JpZEZvb3RlckNvbnRyb2xsZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiBHcmlkIOyghOyytCDsmIHsl60gRGlyZWN0aXZlXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gc3BHcmlkKCAkY29tcGlsZSwgU3BHcmlkQ29uc3RhbnQsIG9yZGVyQnlGaWx0ZXIgKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3QgOiBcIkVcIixcclxuICAgICAgICBzY29wZSA6IHtcclxuICAgICAgICAgICAgXCJncmlkT2JqZWN0XCIgOiBcIj1cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udHJvbGxlciA6IFwic3BHcmlkQ29udHJvbGxlclwiLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsIDogU3BHcmlkQ29uc3RhbnQudGVtcGxhdGUuU1BfR1JJRCxcclxuICAgICAgICBsaW5rIDogZnVuY3Rpb24oIHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybHMsIHRyYW5zY2x1ZGUgKXtcclxuXHJcbiAgICAgICAgICAgIC8vIHNjb3BlLm9yZGVyQ29sdW1uID0gXCJcIjtcclxuICAgICAgICAgICAgLy8gc2NvcGUub3JkZXJSZXZlcnNlID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICBzY29wZS5vcmRlckNoYW5nZSA9IG9yZGVyQ2hhbmdlO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gb3JkZXJDaGFuZ2UoIGNvbHVtbklkLCBvcmRlckJ5ICl7XHJcbiAgICAgICAgICAgICAgICBpZiggb3JkZXJCeSA9PSBcImFzY1wiICl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2NvcGUub3JkZXJDb2x1bW4gPSBcIi1cIiArIGNvbHVtbklkO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNjb3BlLm9yZGVyUmV2ZXJzZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuZ3JpZE9iamVjdC5zZXREYXRhKG9yZGVyQnlGaWx0ZXIoc2NvcGUuZ3JpZE9iamVjdC5nZXREYXRhKCksXCItXCIgKyBjb2x1bW5JZCwgdHJ1ZSkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICggb3JkZXJCeSA9PSBcImRlc2NcIiApe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNjb3BlLm9yZGVyQ29sdW1uID0gXCItXCIgKyBjb2x1bW5JZDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzY29wZS5vcmRlclJldmVyc2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5ncmlkT2JqZWN0LnNldERhdGEob3JkZXJCeUZpbHRlcihzY29wZS5ncmlkT2JqZWN0LmdldERhdGEoKSxcIi1cIiArIGNvbHVtbklkLCBmYWxzZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXBwKXtcclxuICAgIGFwcC5kaXJlY3RpdmUoXCJzcEdyaWRcIiwgc3BHcmlkKTtcclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kaXJlY3RpdmVzL3NwR3JpZC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIEdyaWQgSGVhZGVyIFdyYXAgRGlyZWN0aXZlXHJcbiAqL1xyXG5mdW5jdGlvbiBzcEdyaWRIZWFkZXIoICRjb21waWxlLCBTcEdyaWRDb25zdGFudCl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0IDogXCJFXCIsXHJcbiAgICAgICAgY29udHJvbGxlciA6IFwic3BHcmlkQ29udHJvbGxlclwiLFxyXG4gICAgICAgIHJlcXVpcmUgOiBcIl5zcEdyaWRcIixcclxuICAgICAgICByZXBsYWNlIDogdHJ1ZSxcclxuICAgICAgICB0ZW1wbGF0ZVVybCA6IFNwR3JpZENvbnN0YW50LnRlbXBsYXRlLlNQX0dSSURfSEVBREVSLFxyXG4gICAgICAgIGxpbmsgOiBmdW5jdGlvbiggc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJscywgdHJhbnNjbHVkZSApe1xyXG4gICAgICAgICAgICBjYWxjdWxhdGVXaWR0aCgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVdpZHRoKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2hlYWRlcldpZHRoID0gZ2V0V2lkdGgoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgX3VzZWFnZVdpZHRoID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgX2hlYWRlckNvbHVtbnMgPSBzY29wZS5ncmlkT2JqZWN0LmdldENvbHVtbkRlZigpO1xyXG4gICAgICAgICAgICAgICAgdmFyIF93aWxkQ2FyZENvbHVtbiA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKCBfaGVhZGVyQ29sdW1ucywgZnVuY3Rpb24oIGNvbHVtbiApe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBjb2x1bW4uaGFzT3duUHJvcGVydHkoXCJ3aWR0aFwiKSApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggY29sdW1uLmhhc093blByb3BlcnR5KFwiZmlsbFJlbWFpbldpZHRoXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBjb2x1bW4uZmlsbFJlbWFpbldpZHRoICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfd2lsZENhcmRDb2x1bW4gPSBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdXNlYWdlV2lkdGggKz0gcGFyc2VJbnQoY29sdW1uLndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihbIGNvbHVtbi5uYW1lICsgXCLsu6zrn7zsnZgg64SI67mE66W8IOyngOygle2VtOyjvOyEuOyalFwiXSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgX2dhcFdpZHRoID0gKF9oZWFkZXJXaWR0aCAtIF91c2VhZ2VXaWR0aCktNTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiggX3dpbGRDYXJkQ29sdW1uID09IG51bGwgKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiggX2dhcFdpZHRoID4gMCApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3VzZVBlcmNlbnRhZ2UgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goIF9oZWFkZXJDb2x1bW5zLCBmdW5jdGlvbiggY29sdW1uICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdXNlUGVyY2VudGFnZSA9IHBhcnNlSW50KGNvbHVtbi53aWR0aCkgLyBfdXNlYWdlV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4ud2lkdGggPSAocGFyc2VJbnQoY29sdW1uLndpZHRoKSArIHBhcnNlRmxvYXQoKCBfdXNlUGVyY2VudGFnZSAqIF9nYXBXaWR0aCApLnRvRml4ZWQoMSkpKSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcnNlRmxvYXQoKCBfdXNlUGVyY2VudGFnZSAqIF9nYXBXaWR0aCApLnRvRml4ZWQoMSkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiggX2dhcFdpZHRoID4gMCApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfd2lsZENhcmRDb2x1bW4ud2lkdGggPSAoX2dhcFdpZHRoKzUpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFdpZHRoKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgX3Jlc3VsdFdpZHRoID0gMDtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY3NzKHsgcG9zaXRpb24gOlwiYWJzb2x1dGVcIiwgdmlzaWJpbGl0eSA6IFwiaGlkZGVuXCIsIGRpc3BsYXkgOiBcImJsb2NrXCIsIHdpZHRoOiBcIjEwMCVcIn0pO1xyXG4gICAgICAgICAgICAgICAgX3Jlc3VsdFdpZHRoID0gZWxlbWVudC53aWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jc3MoeyBwb3NpdGlvbiA6IFwiXCIsIHZpc2liaWxpdHkgOiBcIlwiLCBkaXNwbGF5IDogXCJcIiB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfcmVzdWx0V2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFwcCl7XHJcbiAgICBhcHAuZGlyZWN0aXZlKFwic3BHcmlkSGVhZGVyXCIsIHNwR3JpZEhlYWRlcik7XHJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGlyZWN0aXZlcy9zcEdyaWRIZWFkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiBHcmlkIEhlYWRlciBSb3cgRGlyZWN0aXZlXHJcbiAqL1xyXG5mdW5jdGlvbiBzcEdyaWRIZWFkZXJSb3coICRjb21waWxlLCBTcEdyaWRDb25zdGFudCApe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdCA6IFwiRVwiLFxyXG4gICAgICAgIGNvbnRyb2xsZXIgOiBcInNwR3JpZENvbnRyb2xsZXJcIixcclxuICAgICAgICByZXF1aXJlIDogXCJec3BHcmlkSGVhZGVyXCIsXHJcbiAgICAgICAgcmVwbGFjZSA6IHRydWUsXHJcbiAgICAgICAgdGVtcGxhdGVVcmwgOiBTcEdyaWRDb25zdGFudC50ZW1wbGF0ZS5TUF9HUklEX0hFQURFUl9ST1csXHJcbiAgICAgICAgbGluayA6IGZ1bmN0aW9uKCBzY29wZSwgZWxlbWVudCwgYXR0cnMgKXtcclxuXHJcbiAgICAgICAgICAgIHZhciBfaGVhZGVyQ29sdW1ucyA9IHNjb3BlLmdyaWRPYmplY3QuZ2V0Q29sdW1uRGVmKCk7XHJcbiAgICAgICAgICAgIHNjb3BlLmhlYWRlckNvbHVtbnMgPSBnZXRDb2x1bW5zKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgc2NvcGUuJHdhdGNoKFwiZ3JpZE9iamVjdC5nZXRDb2x1bW5EZWYoKVwiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuaGVhZGVyQ29sdW1ucyA9IGdldENvbHVtbnMoKTtcclxuICAgICAgICAgICAgfSx0cnVlICk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRDb2x1bW5zKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2NvbHVtbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHZhciBfY29sU3BhbiAgICAgICA9IDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29sR3JvdXBJZHhBcnIgPSBnZXRDb2xHcm91cCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGFuZ3VsYXIuY29weSggX2hlYWRlckNvbHVtbnMsIF9jb2x1bW5zICk7XHJcbiAgICAgICAgICAgICAgICBmb3IoIHZhciBpID0gY29sR3JvdXBJZHhBcnIubGVuZ3RoIC0gMSA7IGkgPiAtMTsgaSAtLSApe1xyXG4gICAgICAgICAgICAgICAgICAgIF9jb2xTcGFuID0gX2NvbHVtbnNbY29sR3JvdXBJZHhBcnJbaV1dLmNvbFNwYW47XHJcbiAgICAgICAgICAgICAgICAgICAgX2NvbHVtbnMuc3BsaWNlKCBjb2xHcm91cElkeEFycltpXSsxLCBfY29sU3Bhbi0xICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb2x1bW5zO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRDb2xHcm91cCgpe1xyXG4gICAgICAgICAgICAgICAgdmFyIF9jb2x1bW4gICAgICAgID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHZhciBfc3BhbldpZHRoICAgICA9IDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29sR3JvdXAgICAgICAgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciggdmFyIGkgPSAwIDsgaSA8IF9oZWFkZXJDb2x1bW5zLmxlbmd0aCA7IGkgKysgKXtcclxuICAgICAgICAgICAgICAgICAgICBfY29sdW1uID0gX2hlYWRlckNvbHVtbnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIF9jb2x1bW4uaGFzT3duUHJvcGVydHkoXCJjb2xTcGFuXCIpICl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xHcm91cC5wdXNoKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfc3BhbldpZHRoID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciggdmFyIGogPSBpIDsgaiA8IGkgKyBfY29sdW1uLmNvbFNwYW4gOyBqICsrICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc3BhbldpZHRoICs9IHBhcnNlSW50KF9oZWFkZXJDb2x1bW5zW2pdLndpZHRoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgX2NvbHVtbi5zcGFuV2lkdGggPSBfc3BhbldpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBjb2xHcm91cDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcHApe1xyXG4gICAgYXBwLmRpcmVjdGl2ZShcInNwR3JpZEhlYWRlclJvd1wiLCBzcEdyaWRIZWFkZXJSb3cpO1xyXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RpcmVjdGl2ZXMvc3BHcmlkSGVhZGVyUm93LmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuICogR3JpZCBIZWFkZXIgQ29sdW1uIERpcmVjdGl2ZVxyXG4gKi9cclxuZnVuY3Rpb24gc3BHcmlkSGVhZGVyQ29sdW1uKCBTcEdyaWRDb25zdGFudCl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0IDogXCJFXCIsXHJcbiAgICAgICAgY29udHJvbGxlciA6IFwic3BHcmlkQ29udHJvbGxlclwiLFxyXG4gICAgICAgIHJlcXVpcmUgOiBcIl5zcEdyaWRIZWFkZXJSb3dcIixcclxuICAgICAgICByZXBsYWNlIDogdHJ1ZSxcclxuICAgICAgICB0ZW1wbGF0ZVVybCA6IFNwR3JpZENvbnN0YW50LnRlbXBsYXRlLlNQX0dSSURfSEVBREVSX0NPTFVNTixcclxuICAgICAgICBsaW5rIDogZnVuY3Rpb24oIHNjb3BlLCBlbGVtZW50LCBhdHRyKXtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLmdldFdpZHRoID0gZ2V0V2lkdGg7XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0V2lkdGgoKXtcclxuICAgICAgICAgICAgICAgIGlmKCBzY29wZS5jb2x1bW4uaGFzT3duUHJvcGVydHkoXCJzcGFuV2lkdGhcIikgKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGUuY29sdW1uLnNwYW5XaWR0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZS5jb2x1bW4ud2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXBwKXtcclxuICAgIGFwcC5kaXJlY3RpdmUoXCJzcEdyaWRIZWFkZXJDb2x1bW5cIiwgc3BHcmlkSGVhZGVyQ29sdW1uKTtcclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kaXJlY3RpdmVzL3NwR3JpZEhlYWRlckNvbHVtbi5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIEdyaWQgQm9keSBXcmFwIERpcmVjdGl2ZVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIHNwR3JpZEJvZHkoJGNvbXBpbGUsIFNwR3JpZENvbnN0YW50LCAkdGVtcGxhdGVDYWNoZSApe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdCA6IFwiRVwiLFxyXG4gICAgICAgIGNvbnRyb2xsZXIgOiBcInNwR3JpZEJvZHlDb250cm9sbGVyXCIsXHJcbiAgICAgICAgcmVxdWlyZSA6IFwiXnNwR3JpZFwiLFxyXG4gICAgICAgIHJlcGxhY2UgOiB0cnVlLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsIDogU3BHcmlkQ29uc3RhbnQudGVtcGxhdGUuU1BfR1JJRF9CT0RZLFxyXG4gICAgICAgIGxpbmsgOiBmdW5jdGlvbiggc2NvcGUsIGVsZW1lbnQsIGF0dHIgKXtcclxuICAgICAgICAgICAgc2NvcGUuaXNDb250ZXh0TWVudVNob3cgICA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzY29wZS5yaWdodENsaWNrUG9zaXRpb24gPSB7fTtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLm9wZW5Db250ZXh0TWVudSAgICAgPSBvcGVuQ29udGV4dE1lbnU7XHJcblxyXG4gICAgICAgICAgICBzY29wZS5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XHJcblxyXG4gICAgICAgICAgICBzY29wZS5yYW5nZSAgPSByYW5nZTtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLiRyb3dzID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLiR3YXRjaChcImdyaWRPYmplY3QuZ2V0UGFnaW5nT3B0aW9ucygpXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2N1cnJlbnRQYWdlID0gc2NvcGUuZ3JpZE9iamVjdC5nZXRDdXJyZW50UGFnZSgpIHx8IDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgX3BhZ2VTaXplICAgID0gc2NvcGUuZ3JpZE9iamVjdC5nZXRQYWdlU2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuc3RhcnQgICAgPSAoX2N1cnJlbnRQYWdlLTEpICogX3BhZ2VTaXplO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUucGFnZVNpemUgPSBfcGFnZVNpemU7XHJcbiAgICAgICAgICAgICAgICAvLyBzY29wZS4kcm93cyAgICAgICAgICAgICAgID0gcmFuZ2UoIHNjb3BlLmdyaWRPYmplY3QuZ2V0RGF0YSgpLCBzY29wZS5zdGFydCwgc2NvcGUuc3RhcnQgKyBzY29wZS5wYWdlU2l6ZSApO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuJHBhcmVudC4kYnJvYWRjYXN0KFwicGFnZUNoYW5nZVwiKTtcclxuICAgICAgICAgICAgfSwgdHJ1ZSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9wZW5Db250ZXh0TWVudSggZXZlbnQsIGluZGV4LCByb3dNYW5hZ2VyICl7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5yb3dNYW5hZ2VyID0gcm93TWFuYWdlcjtcclxuICAgICAgICAgICAgICAgIHNjb3BlLnJpZ2h0Q2xpY2tQb3NpdGlvbi5jdXJyZW50WCA9IGV2ZW50LnBhZ2VYICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIHNjb3BlLnJpZ2h0Q2xpY2tQb3NpdGlvbi5jdXJyZW50WSA9IGV2ZW50LnBhZ2VZICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIHNjb3BlLmlzQ29udGV4dE1lbnVTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmFuZ2UoIHN0YXJ0LCBlbmQgKXtcclxuICAgICAgICAgICAgICAgIGlmKCBzY29wZS5ncmlkT2JqZWN0LmlzRW5hYmxlUGFnaW5nKCkgKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGUuZ3JpZE9iamVjdC5nZXREYXRhKCkuc2xpY2UoIHN0YXJ0LCBlbmQgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZS5ncmlkT2JqZWN0LmdldERhdGEoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2Nyb2xsVG9wKCl7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbFRvcCgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcHApe1xyXG4gICAgYXBwLmRpcmVjdGl2ZShcInNwR3JpZEJvZHlcIiwgc3BHcmlkQm9keSk7XHJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGlyZWN0aXZlcy9zcEdyaWRCb2R5LmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBzcEdyaWRGb290ZXIoIFNwR3JpZENvbnN0YW50ICl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0IDogXCJFXCIsXHJcbiAgICAgICAgY29udHJvbGxlciA6IFwic3BHcmlkRm9vdGVyQ29udHJvbGxlclwiLFxyXG4gICAgICAgIHJlcXVpcmUgOiBcIl5zcEdyaWRcIixcclxuICAgICAgICByZXBsYWNlIDogdHJ1ZSxcclxuICAgICAgICB0ZW1wbGF0ZVVybCA6IFNwR3JpZENvbnN0YW50LnRlbXBsYXRlLlNQX0dSSURfRk9PVEVSLFxyXG4gICAgICAgIGxpbmsgOiBmdW5jdGlvbiAoIHNjb3BlLCBlbGVtZW50LCBhdHRycyApe1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oIGFwcCApe1xyXG4gICAgYXBwLmRpcmVjdGl2ZShcInNwR3JpZEZvb3RlclwiLCBzcEdyaWRGb290ZXIgKTtcclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kaXJlY3RpdmVzL3NwR3JpZEZvb3Rlci5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gc3BHcmlkRm9vdGVyQ29sdW1uKCBTcEdyaWRDb25zdGFudCApe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdCA6IFwiRVwiLFxyXG4gICAgICAgIGNvbnRyb2xsZXIgOiBcInNwR3JpZEZvb3RlckNvbnRyb2xsZXJcIixcclxuICAgICAgICByZXF1aXJlIDogXCJec3BHcmlkXCIsXHJcbiAgICAgICAgcmVwbGFjZSA6IHRydWUsXHJcbiAgICAgICAgdGVtcGxhdGVVcmwgOiBTcEdyaWRDb25zdGFudC50ZW1wbGF0ZS5TUF9HUklEX0ZPT1RFUl9DT0xVTU4sXHJcbiAgICAgICAgbGluayA6IGZ1bmN0aW9uICggc2NvcGUsIGVsZW1lbnQsIGF0dHJzICl7XHJcblxyXG4gICAgICAgICAgICB2YXIgX2hlYWRlckNvbHVtbiA9IHNjb3BlLmhlYWRlckNvbHVtbjtcclxuICAgICAgICAgICAgc2NvcGUuY29sdW1uV2lkdGggPSBfaGVhZGVyQ29sdW1uLndpZHRoO1xyXG4gICAgICAgICAgICBzY29wZS5jb2x1bW5IZWFkZXI9IF9oZWFkZXJDb2x1bW4ubmFtZTtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgc3VtbWFyeVR5cGUgPSB7XHJcbiAgICAgICAgICAgICAgICBzdW0gOiBmdW5jdGlvbiggZGF0YXNldCwgY29sdW1uSWQgKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goIGRhdGFzZXQsIGZ1bmN0aW9uKCByb3cgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHJvdy5oYXNPd25Qcm9wZXJ0eShjb2x1bW5JZCkgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v7J6E7Iuc7IKt7KCc64+EIO2VqeqzhOyXkOyEnCDrsLDsoJztlZzri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggcm93Lmhhc093blByb3BlcnR5KFwiY3VkRmxhZ1wiKSAmJiByb3cuY3VkRmxhZyA9PSBTcEdyaWRDb25zdGFudC5ERUxFVEVfRkxBRyApe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IHBhcnNlRmxvYXQocm93W2NvbHVtbklkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGF2ZyA6IGZ1bmN0aW9uKCBkYXRhc2V0LCBjb2x1bW5JZCApe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdW0gPSBzdW1tYXJ5VHlwZS5zdW0oZGF0YXNldCxjb2x1bW5JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1bSAvIGRhdGFzZXQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgc2NvcGUuJHdhdGNoQ29sbGVjdGlvbihcImdyaWRPYmplY3QuZ2V0RGF0YSgpXCIsZnVuY3Rpb24oIGRhdGFzZXQgKXtcclxuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZVN1bW1hcnkoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgc2NvcGUuJG9uKFwicm93RGVsZXRlXCIsIGNhbGN1bGF0ZVN1bW1hcnkpO1xyXG4gICAgICAgICAgICBzY29wZS4kb24oXCJwYWdlQ2hhbmdlXCIsIGNhbGN1bGF0ZVN1bW1hcnkpO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gY2FsY3VsYXRlU3VtbWFyeSggKXtcclxuICAgICAgICAgICAgICAgIHZhciBfY3VycmVudFBhZ2UgPSBzY29wZS5ncmlkT2JqZWN0LmdldEN1cnJlbnRQYWdlKCkgfHwgMTtcclxuICAgICAgICAgICAgICAgIHZhciBfcGFnZVNpemUgICAgPSBzY29wZS5ncmlkT2JqZWN0LmdldFBhZ2VTaXplKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2hlYWRlckNvbHVtbiA9IHNjb3BlLmhlYWRlckNvbHVtbjtcclxuICAgICAgICAgICAgICAgIHZhciBfcGFnZURhdGFzZXQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdmFyIF9yZXN1bHRGb3JtYXR0ZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Rm9ybWF0dGVyIDogZnVuY3Rpb24oIHJlc3VsdCApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoIHNjb3BlLmdyaWRPYmplY3QuaXNFbmFibGVQYWdpbmcoKSApe1xyXG4gICAgICAgICAgICAgICAgICAgIF9wYWdlRGF0YXNldCA9IHNjb3BlLmdyaWRPYmplY3QuZ2V0RGF0YSgpLnNsaWNlKCAoX2N1cnJlbnRQYWdlLTEpKl9wYWdlU2l6ZSAsICgoX2N1cnJlbnRQYWdlLTEpKl9wYWdlU2l6ZSkgKyBfcGFnZVNpemUgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3BhZ2VEYXRhc2V0ID0gc2NvcGUuZ3JpZE9iamVjdC5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoIF9oZWFkZXJDb2x1bW4uaGFzT3duUHJvcGVydHkoXCJzdW1tYXJ5XCIpICl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIF9oZWFkZXJDb2x1bW4uc3VtbWFyeSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oZWFkZXJDb2x1bW4uc3VtbWFyeSA9IGFuZ3VsYXIuZXh0ZW5kKHt9LCBfcmVzdWx0Rm9ybWF0dGVyLCAgX2hlYWRlckNvbHVtbi5zdW1tYXJ5ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2YgX2hlYWRlckNvbHVtbi5zdW1tYXJ5LnR5cGUgID09IFwic3RyaW5nXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuc3VtbWFyeSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2hlYWRlckNvbHVtbi5zdW1tYXJ5LnJlc3VsdEZvcm1hdHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdW1tYXJ5VHlwZVtfaGVhZGVyQ29sdW1uLnN1bW1hcnkudHlwZV0oIF9wYWdlRGF0YXNldCwgX2hlYWRlckNvbHVtbi5pZCApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKCB0eXBlb2YgX2hlYWRlckNvbHVtbi5zdW1tYXJ5LnR5cGUgPT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLnN1bW1hcnkgPSBfaGVhZGVyQ29sdW1uLnN1bW1hcnkucmVzdWx0Rm9ybWF0dGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9oZWFkZXJDb2x1bW4uc3VtbWFyeS50eXBlKCBfcGFnZURhdGFzZXQsIF9oZWFkZXJDb2x1bW4uaWQgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihbXCJzdW1tYXJ5IO2DgOyeheydgCBzdHJpbmcg7Zi57J2AIGZ1bmN0aW9uIOydtOyWtOyVvO2VqeuLiOuLpFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oIGFwcCApe1xyXG4gICAgYXBwLmRpcmVjdGl2ZShcInNwR3JpZEZvb3RlckNvbHVtblwiLCBzcEdyaWRGb290ZXJDb2x1bW4gKTtcclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kaXJlY3RpdmVzL3NwR3JpZEZvb3RlckNvbHVtbi5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gc3BHcmlkRm9vdGVyUm93KCBTcEdyaWRDb25zdGFudCApe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdCA6IFwiRVwiLFxyXG4gICAgICAgIGNvbnRyb2xsZXIgOiBcInNwR3JpZEZvb3RlckNvbnRyb2xsZXJcIixcclxuICAgICAgICByZXF1aXJlIDogXCJec3BHcmlkRm9vdGVyXCIsXHJcbiAgICAgICAgcmVwbGFjZSA6IHRydWUsXHJcbiAgICAgICAgdGVtcGxhdGVVcmwgOiBTcEdyaWRDb25zdGFudC50ZW1wbGF0ZS5TUF9HUklEX0ZPT1RFUl9ST1csXHJcbiAgICAgICAgbGluayA6IGZ1bmN0aW9uICggc2NvcGUsIGVsZW1lbnQsIGF0dHJzICl7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiggYXBwICl7XHJcbiAgICBhcHAuZGlyZWN0aXZlKFwic3BHcmlkRm9vdGVyUm93XCIsIHNwR3JpZEZvb3RlclJvdyApO1xyXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RpcmVjdGl2ZXMvc3BHcmlkRm9vdGVyUm93LmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuICogR3JpZCBEYXRhIFJvdyBEaXJlY3RpdmVcclxuICovXHJcbmZ1bmN0aW9uIHNwR3JpZERhdGFSb3coIFNwR3JpZENvbnN0YW50LCBTcEdyaWRVdGlsICl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0IDogXCJFXCIsXHJcbiAgICAgICAgY29udHJvbGxlciA6IFwic3BHcmlkQm9keUNvbnRyb2xsZXJcIixcclxuICAgICAgICByZXF1aXJlIDogXCJec3BHcmlkQm9keVwiLFxyXG4gICAgICAgIHJlcGxhY2UgOiB0cnVlLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsIDogU3BHcmlkQ29uc3RhbnQudGVtcGxhdGUuU1BfR1JJRF9EQVRBX1JPVyxcclxuICAgICAgICBsaW5rIDogZnVuY3Rpb24oIHNjb3BlLCBlbGVtZW50LCBhdHRyKXtcclxuICAgICAgICAgICAgc2NvcGUucmlnaHRDbGlja1Bvc2l0aW9uID0ge307XHJcblxyXG4gICAgICAgICAgICBzY29wZS5vbkdyaWREYXRhUm93Q2xpY2sgPSBvbkdyaWREYXRhUm93Q2xpY2s7XHJcblxyXG4gICAgICAgICAgICBzY29wZS5jaGVja1Jvd1ZhbGlkICAgICAgPSBjaGVja1Jvd1ZhbGlkO1xyXG5cclxuICAgICAgICAgICAgc2NvcGUuaXNUZW1wU2F2ZSAgICAgICAgID0gaXNUZW1wU2F2ZTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBHcmlkIERhdGEgUm93IO2BtOumreyLnCDquLDrs7ggQWN0aW9uIOqzvCDsu6TsiqTthYAgQWN0aW9uIOuPmeyekVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZnVuY3Rpb24gb25HcmlkRGF0YVJvd0NsaWNrKCByb3cgKXtcclxuICAgICAgICAgICAgICAgIHNjb3BlLmdyaWRPYmplY3Quc2VsZWN0Q2FuY2VsQWxsKCk7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5ncmlkT2JqZWN0LnNldFNlbGVjdGVkUm93KCByb3cgKTtcclxuICAgICAgICAgICAgICAgIHNjb3BlLmdyaWRPYmplY3QuZ2V0R3JpZEFjdGlvbigpLm9uUm93Q2xpY2soIHJvdyApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjaGVja1Jvd1ZhbGlkKCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGUucm93Lmhhc093blByb3BlcnR5KFwiX192YWxpZFwiKSAmJiBzY29wZS5yb3cuX192YWxpZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gaXNUZW1wU2F2ZSgpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlLnJvdy5oYXNPd25Qcm9wZXJ0eShcIl9faXNUZW1wU2F2ZVwiKSAmJiBzY29wZS5yb3cuX19pc1RlbXBTYXZlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogR3JpZCBEYXRhIFJvdyBFZGl0TW9kZSDrs4Dqsr1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNjb3BlLnJvd0VkaXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmKCBzY29wZS5ncmlkT2JqZWN0LmlzU3RhdHVzQ2hhbmdlZCgpICl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiggIXNjb3BlLmdyaWRPYmplY3QuZ2V0R3JpZEFjdGlvbigpLm9uUm93RWRpdEJlZm9yZSgpICl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy9EZWVwIENvcHlcclxuICAgICAgICAgICAgICAgIGlmKCAhc2NvcGUucm93Lmhhc093blByb3BlcnR5KFwiX29yaWdpbmFsUm93XCIpICl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF90ZW1wID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgU3BHcmlkVXRpbC5yb3dDb3B5KHNjb3BlLnJvdywgX3RlbXApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnJvd1tcIl9vcmlnaW5hbFJvd1wiXSA9IF90ZW1wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoICFzY29wZS5yb3cuaGFzT3duUHJvcGVydHkoXCJjdWRGbGFnXCIpICApe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5yb3cuY3VkRmxhZyAgICAgID0gU3BHcmlkQ29uc3RhbnQuVVBEQVRFX0ZMQUc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUucm93Ll9fdmFsaWQgICAgICA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUucm93Ll9faXNUZW1wU2F2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuZ3JpZE9iamVjdC5zZXRTdGF0dXMoXCJlZGl0XCIpO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuJGJyb2FkY2FzdChcImNoYW5nZU1vZGVcIik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogR3JpZCBEYXRhIFJvdyBWaWV3TW9kZSDrs4Dqsr1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNjb3BlLnJvd1JldmVydCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAvL0RlZXAgQ29weVxyXG5cclxuICAgICAgICAgICAgICAgIC8v66Gc7Jqw7IOd7ISx7ZuEIOuwlOuhnCDsupTsiqzsi5zsl5DripQg66Gc7JqwIOyCreygnFxyXG4gICAgICAgICAgICAgICAgaWYoIHNjb3BlLnJvdy5jdWRGbGFnID09IFNwR3JpZENvbnN0YW50LkNSRUFURV9GTEFHXHJcbiAgICAgICAgICAgICAgICAmJiBzY29wZS5ncmlkT2JqZWN0LmdldENyZWF0ZURhdGEoKS5sZW5ndGggPiAwICl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuZ3JpZE9iamVjdC5nZXRDcmVhdGVEYXRhKCkuc3BsaWNlKDAsMSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v7J6E7Iuc7KCA7J6l7ZuEIOy6lOyKrOyLnOyXkOuKlCDsm5Drs7XtlZztm4Qg7J6E7Iuc7KCA7J6lXHJcbiAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5jb3B5KHNjb3BlLnJvdy5fb3JpZ2luYWxSb3csIHNjb3BlLnJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUucm93Ll9faXNUZW1wU2F2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuJGJyb2FkY2FzdChcImNoYW5nZU1vZGVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzY29wZS5ncmlkT2JqZWN0LnNldFN0YXR1cyhcIlwiKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBHcmlkIERhdGEgUm93IERlbGV0ZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2NvcGUucm93RGVsZXRlID0gIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBpZiggc2NvcGUuZ3JpZE9iamVjdC5pc1N0YXR1c0NoYW5nZWQoKSApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoICFzY29wZS5ncmlkT2JqZWN0LmdldEdyaWRBY3Rpb24oKS5vblJvd0RlbGV0ZUJlZm9yZSggc2NvcGUucm93ICkgKXtcclxuICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUm93IERlbGV0ZeyLnCDsg53shLHrkJzrjbDsnbTthLDripQg67Cw7Je07JeQ7IScIOyZhOyghOyCreygnFxyXG4gICAgICAgICAgICAgICAgaWYoIHNjb3BlLnJvdy5jdWRGbGFnICE9IFNwR3JpZENvbnN0YW50LkNSRUFURV9GTEFHICl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUucm93LmN1ZEZsYWcgPSBTcEdyaWRDb25zdGFudC5ERUxFVEVfRkxBRztcclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5yb3cuX192YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmdyaWRPYmplY3QuZ2V0RGF0YSgpLnNwbGljZShzY29wZS4kaW5kZXgsIDEgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNjb3BlLiRwYXJlbnQuJGJyb2FkY2FzdChcInJvd0RlbGV0ZVwiKTtcclxuICAgICAgICAgICAgICAgIHNjb3BlLmdyaWRPYmplY3QuZ2V0R3JpZEFjdGlvbigpLm9uUm93RGVsZXRlQWZ0ZXIoIHNjb3BlLnJvdyApO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEdpcmQgUm936rCAIOyImOygleykkSDsnbwg6rK97JqwXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2NvcGUuaXNSb3dFZGl0dGluZyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBpZiggc2NvcGUucm93Lmhhc093blByb3BlcnR5KFwiY3VkRmxhZ1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHNjb3BlLnJvdy5jdWRGbGFnID09IFNwR3JpZENvbnN0YW50LlVQREFURV9GTEFHXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgIXNjb3BlLmlzVGVtcFNhdmUoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogR3JpZCBSb3fqsIAg7LaU6rCAIOykkSDsnbwg6rK97JqwXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2NvcGUuaXNSb3dBZGRpbmcgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgaWYoIHNjb3BlLnJvdy5oYXNPd25Qcm9wZXJ0eShcImN1ZEZsYWdcIilcclxuICAgICAgICAgICAgICAgICAgICAmJiBzY29wZS5yb3cuY3VkRmxhZyA9PSBTcEdyaWRDb25zdGFudC5DUkVBVEVfRkxBR1xyXG4gICAgICAgICAgICAgICAgICAgICYmICFzY29wZS5pc1RlbXBTYXZlKCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgc2NvcGUuaXNSb3dBY3RpdmUgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICggc2NvcGUuaXNSb3dFZGl0dGluZygpIHx8IHNjb3BlLmlzUm93QWRkaW5nKCkgKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBHcmlkIERhdGEgUm93IOyCreygnOuQnCDroZzsmrDsnbjsp4Ag7LK07YGsXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2NvcGUuaXNSb3dEZWxldGVkID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGlmKCBzY29wZS5yb3cuaGFzT3duUHJvcGVydHkoXCJjdWRGbGFnXCIpICl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlLnJvdy5jdWRGbGFnID09IFNwR3JpZENvbnN0YW50LkRFTEVURV9GTEFHO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEdyaWQgUm93IO2BtOuemOyKpCDqsrDsoJVcclxuICAgICAgICAgICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzY29wZS5nZXRSb3dDbGFzcyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgaWYoIHNjb3BlLmlzUm93QWN0aXZlKCkgKXtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFNwR3JpZENvbnN0YW50LlJPV19BQ1RJVkVfQ0xBU1M7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBpZiggc2NvcGUuZ3JpZE9iamVjdC5pc1NlbGVjdGFibGUoKSAmJiBzY29wZS5yb3cuaGFzT3duUHJvcGVydHkoXCJfX2lzU2VsZWN0ZWRcIikgJiYgc2NvcGUucm93Ll9faXNTZWxlY3RlZCApe1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gU3BHcmlkQ29uc3RhbnQuUk9XX1NFTEVDVF9DTEFTUztcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHJldHVybiBcIlwiXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNjb3BlLnJvdy5fX3ZhbGlkYXRlID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZhciBfaGVhZGVyQ29sdW1ucyAgID0gc2NvcGUuZ3JpZE9iamVjdC5nZXRDb2x1bW5EZWYoKTtcclxuICAgICAgICAgICAgICAgIHZhciBfdmFsaWRhdGVPYmplY3QgID0gU3BHcmlkVXRpbC5nZXRWYWxpZGF0ZU9iamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIF9pbnZhbGlkQXJyYXkgID0gW107XHJcbiAgICAgICAgICAgICAgICAvL+uvuOumrOygleydmOuQnCDsnKDtmqjshLHqsoDsgqwg7ZWo7IiYXHJcbiAgICAgICAgICAgICAgICB2YXIgX2RlZmluZVZhbGlkYXRlRm4gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgLy/sgqzsmqnsnpDsoJXsnZgg7Jyg7Zqo7ISx6rKA7IKsIO2VqOyImFxyXG4gICAgICAgICAgICAgICAgdmFyIF9jdXN0b21WYWxpZGF0ZUZuID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goIF9oZWFkZXJDb2x1bW5zLCBmdW5jdGlvbiggX2NvbHVtbil7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIF9jb2x1bW4uaGFzT3duUHJvcGVydHkoXCJ2YWxpZGF0ZVwiKSAmJiBfY29sdW1uLnR5cGUgPT0gXCJkYXRhXCIgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKCBfY29sdW1uLnZhbGlkYXRlLCBmdW5jdGlvbiggb2JqLCBrZXkgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9kZWZpbmVWYWxpZGF0ZUZuID0gX3ZhbGlkYXRlT2JqZWN0W2tleV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoICFfZGVmaW5lVmFsaWRhdGVGbiApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCAhb2JqLmhhc093blByb3BlcnR5KFwiZm5cIikgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFtcIuyCrOyaqeyekCDsoJXsnZgg7Jyg7Zqo7ISx6rKA7IKsIO2YleyLneydtCDslrTquIvrgqnri4jri6QuIGZu7J2EIOyEoOyWuO2VtOyjvOyEuOyalFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2N1c3RvbVZhbGlkYXRlRm4gPSBvYmouZm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggIV9jdXN0b21WYWxpZGF0ZUZuKCBzY29wZS5yb3dbX2NvbHVtbi5pZF0sIHNjb3BlLnJvdykpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2ludmFsaWRBcnJheS5wdXNoKG9iai5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoICFfZGVmaW5lVmFsaWRhdGVGbiggc2NvcGUucm93W19jb2x1bW4uaWRdLCBvYmopICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pbnZhbGlkQXJyYXkucHVzaChvYmoubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCBzY29wZS5yb3cuY3VkRmxhZyA9PSBTcEdyaWRDb25zdGFudC5VUERBVEVfRkxBRyApe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBTcEdyaWRVdGlsLmRpcnR5Q2hlY2soIHNjb3BlLnJvdy5fb3JpZ2luYWxSb3csIHNjb3BlLnJvdyApICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLmdyaWRPYmplY3QuZ2V0VmFsaWRhdGVDYWxsYmFjaygpKFwi67OA6rK965CcIOuCtOyaqeydtCDsl4bsirXri4jri6QuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiggX2ludmFsaWRBcnJheS5sZW5ndGggPiAwICl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuZ3JpZE9iamVjdC5nZXRWYWxpZGF0ZUNhbGxiYWNrKCkoX2ludmFsaWRBcnJheVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiggc2NvcGUucm93Lmhhc093blByb3BlcnR5KFwiY3VkRmxhZ1wiKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5yb3cuY3VkRmxhZyA9PSBTcEdyaWRDb25zdGFudC5DUkVBVEVfRkxBRyApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+yymOydjCDsg53shLHtlZwg66Gc7Jqw7J2YIOqyveyasCDrsLDsl7TsnYQg7Jiu6rKo7KSMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBzY29wZS5ncmlkT2JqZWN0LmdldENyZWF0ZURhdGEoKS5sZW5ndGggPiAwICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5ncmlkT2JqZWN0LmdldERhdGEoKS51bnNoaWZ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLmdyaWRPYmplY3QuZ2V0Q3JlYXRlRGF0YSgpLnNwbGljZSgwLDEpWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLmdyaWRPYmplY3QuZ2V0R3JpZEFjdGlvbigpLm9uUm93Q3JlYXRlQWZ0ZXIoIHNjb3BlLnJvdyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIHNjb3BlLnJvdy5oYXNPd25Qcm9wZXJ0eShcImN1ZEZsYWdcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUucm93LmN1ZEZsYWcgPT0gU3BHcmlkQ29uc3RhbnQuVVBEQVRFX0ZMQUcgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuZ3JpZE9iamVjdC5nZXRHcmlkQWN0aW9uKCkub25Sb3dFZGl0QWZ0ZXIoIHNjb3BlLnJvdyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5yb3cuX192YWxpZCAgICAgID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5yb3cuX19pc1RlbXBTYXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLmdyaWRPYmplY3Quc2V0U3RhdHVzKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuJGJyb2FkY2FzdChcImNoYW5nZU1vZGVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXBwKXtcclxuICAgIGFwcC5kaXJlY3RpdmUoXCJzcEdyaWREYXRhUm93XCIsIHNwR3JpZERhdGFSb3cpO1xyXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RpcmVjdGl2ZXMvc3BHcmlkRGF0YVJvdy5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIEdyaWQgRGF0YSBDb2x1bW4gRGlyZWN0aXZlXHJcbiAqL1xyXG5mdW5jdGlvbiBzcEdyaWREYXRhQ29sdW1uKCAkY29tcGlsZSwgU3BHcmlkQ29uc3RhbnQsICR0ZW1wbGF0ZUNhY2hlLCAkdGltZW91dCApe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdCA6IFwiRVwiLFxyXG4gICAgICAgIGNvbnRyb2xsZXIgOiBcInNwR3JpZENvbnRyb2xsZXJcIixcclxuICAgICAgICByZXF1aXJlIDogXCJec3BHcmlkRGF0YVJvd1wiLFxyXG4gICAgICAgIHJlcGxhY2UgOiB0cnVlLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsIDogU3BHcmlkQ29uc3RhbnQudGVtcGxhdGUuU1BfR1JJRF9EQVRBX0NPTFVNTixcclxuICAgICAgICBsaW5rIDogZnVuY3Rpb24oIHNjb3BlLCBlbGVtZW50LCBhdHRyICl7XHJcbiAgICAgICAgICAgIHZhciBfaGVhZGVyQ29sdW1uID0gc2NvcGUuaGVhZGVyQ29sdW1uO1xyXG4gICAgICAgICAgICBzY29wZS5jb2x1bW5XaWR0aCA9IF9oZWFkZXJDb2x1bW4ud2lkdGg7XHJcbiAgICAgICAgICAgIHNjb3BlLmNvbHVtbkhlYWRlcj0gX2hlYWRlckNvbHVtbi5uYW1lO1xyXG4gICAgICAgICAgICBzY29wZS50eXBlICAgICAgICA9IF9oZWFkZXJDb2x1bW4udHlwZSB8fCBcImRhdGFcIjtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLmlzVHlwZUh0bWwgPSBpc1R5cGVIdG1sO1xyXG5cclxuICAgICAgICAgICAgc2NvcGUuaXNUeXBlRGF0YSA9IGlzVHlwZURhdGE7XHJcblxyXG4gICAgICAgICAgICBzY29wZS5pc1R5cGVSb3dubyA9IGlzVHlwZVJvd25vO1xyXG5cclxuICAgICAgICAgICAgc2NvcGUuZ2V0Um93bm8gICAgPSBnZXRSb3dubztcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgaWYoIHNjb3BlLmlzVHlwZUh0bWwoKSApIHtcclxuICAgICAgICAgICAgICAgIHNjb3BlLmJpbmRIdG1sICAgID0gX2hlYWRlckNvbHVtbi5iaW5kSHRtbDtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZmluZChcIi5zcC1ncmlkLWRhdGEtaHRtbFwiKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgJGNvbXBpbGUoc2NvcGUuYmluZEh0bWwpKHNjb3BlKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2hhbmdlTW9kZUJ5Q3VkRmxhZygpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBpc1R5cGVSb3dubygpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlLnR5cGUgPT0gJ3Jvd25vJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gaXNUeXBlRGF0YSgpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlLnR5cGUgPT0gXCJkYXRhXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzVHlwZUh0bWwoKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZS50eXBlID09IFwiaHRtbFwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gY2hhbmdlTW9kZUJ5Q3VkRmxhZygpe1xyXG4gICAgICAgICAgICAgICAgaWYoICFzY29wZS5yb3cgKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8v7IOd7ISxIO2bhCDrr7jqsoDspp0gJiDsnoTsi5zsoIDsnqUgWCDsg4Htg5xcclxuICAgICAgICAgICAgICAgIHZhciBpc0NyZWF0ZSA9IHNjb3BlLnJvdy5jdWRGbGFnID09IFNwR3JpZENvbnN0YW50LkNSRUFURV9GTEFHXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAhc2NvcGUuaXNUZW1wU2F2ZSgpICYmICFzY29wZS5yb3cuX192YWxpZDtcclxuICAgICAgICAgICAgICAgIC8v7IiY7KCVICYg7J6E7Iuc7KCA7J6lIFjsg4Htg5xcclxuICAgICAgICAgICAgICAgIHZhciBpc1VwZGF0ZSA9IHNjb3BlLnJvdy5jdWRGbGFnID09IFNwR3JpZENvbnN0YW50LlVQREFURV9GTEFHICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2hlYWRlckNvbHVtbi5oYXNPd25Qcm9wZXJ0eShcImVkaXRUeXBlXCIpICYmICFzY29wZS5pc1RlbXBTYXZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoIHNjb3BlLnJvdy5oYXNPd25Qcm9wZXJ0eShcImN1ZEZsYWdcIikgJiYgc2NvcGUudHlwZSA9PSBcImRhdGFcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIGlzQ3JlYXRlIHx8IGlzVXBkYXRlICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmKCBpc0NyZWF0ZSApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2NvcGUuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdE1vZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmlld01vZGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Um93bm8oKXtcclxuICAgICAgICAgICAgICAgIHZhciBfcGFnZVNpemUgPSBzY29wZS5ncmlkT2JqZWN0LmdldFBhZ2VTaXplKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2N1cnJlbnRQYWdlID0gc2NvcGUuZ3JpZE9iamVjdC5nZXRDdXJyZW50UGFnZSgpIHx8IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICAoX3BhZ2VTaXplICogKF9jdXJyZW50UGFnZS0xKSkgKyAoc2NvcGUuJHBhcmVudC4kaW5kZXggKyAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGVkaXRNb2RlKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2dyaWREYXRhVmlldyAgICA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB2YXIgX3R5cGVNYXAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIgICAgICA6ICR0ZW1wbGF0ZUNhY2hlLmdldChTcEdyaWRDb25zdGFudC50ZW1wbGF0ZS5FRElUX0lOUFVUKSxcclxuICAgICAgICAgICAgICAgICAgICBcImNoZWNrYm94XCIgIDogJHRlbXBsYXRlQ2FjaGUuZ2V0KFNwR3JpZENvbnN0YW50LnRlbXBsYXRlLkVESVRfQ0hFQ0tCT1gpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0Ym94XCIgOiAkdGVtcGxhdGVDYWNoZS5nZXQoU3BHcmlkQ29uc3RhbnQudGVtcGxhdGUuRURJVF9TRUxFQ1RCT1gpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dGFyZWFcIiAgOiAkdGVtcGxhdGVDYWNoZS5nZXQoU3BHcmlkQ29uc3RhbnQudGVtcGxhdGUuRURJVF9URVhUQVJFQSlcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB2YXIgX3R5cGVOYW1lID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHZhciBfZWRpdFR5cGUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIF9ncmlkRGF0YVZpZXcgPSBlbGVtZW50LmZpbmQoXCIuc3AtZ3JpZC1kYXRhLXZpZXdcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIF9oZWFkZXJDb2x1bW4uaGFzT3duUHJvcGVydHkoXCJlZGl0VHlwZVwiKSApe1xyXG4gICAgICAgICAgICAgICAgICAgIF9lZGl0VHlwZSA9IF9oZWFkZXJDb2x1bW4uZWRpdFR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIHR5cGVvZiBfZWRpdFR5cGUgPT0gXCJzdHJpbmdcIiApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdHlwZU5hbWUgPSBfZWRpdFR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICggdHlwZW9mIF9lZGl0VHlwZSA9PSBcIm9iamVjdFwiICl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdHlwZU5hbWUgPSBfZWRpdFR5cGUubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBfdHlwZU5hbWUgPT0gXCJjaGVja2JveFwiICl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuY2hlY2tib3ggPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlIDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLmNoZWNrYm94ID0gYW5ndWxhci5leHRlbmQoe30sIHNjb3BlLmNoZWNrYm94LCBfZWRpdFR5cGUgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVja0JveCDsnbwg6rK97JqwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggIXNjb3BlLnJvd1tfaGVhZGVyQ29sdW1uLmlkXSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5yb3dbX2hlYWRlckNvbHVtbi5pZF0gPSBzY29wZS5jaGVja2JveC5kZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFZGl0IFR5cGUgQ2hlY2tCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKCBfdHlwZU5hbWUgPT0gXCJzZWxlY3Rib3hcIiApe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLnNlbGVjdGJveCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0IDogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5RmllbGQgOiBcImtleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRmllbGQgOiBcInZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFRleHQgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEluZGV4IDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5zZWxlY3Rib3ggPSBhbmd1bGFyLmV4dGVuZCh7fSwgc2NvcGUuc2VsZWN0Ym94LCBfZWRpdFR5cGUgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1Byb21pc2Ug6rCd7LK07J286rK97JqwIOu5hOuPmeq4sOuhnCDtlZzrsojshYvtjIXtm4Qg6re47ZuE66Gc64qUIOuwsOyXtOuhnCDsgqzsmqlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2YgX2VkaXRUeXBlLmRhdGFzZXQgPT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5zZWxlY3Rib3guZGF0YXNldCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9lZGl0VHlwZS5kYXRhc2V0KCkudGhlbihmdW5jdGlvbiggZGF0YXNldCApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5zZWxlY3Rib3guZGF0YXNldCA9IGRhdGFzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9lZGl0VHlwZS5kYXRhc2V0ICAgICAgID0gZGF0YXNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFZGl0IFR5cGUgU2VsZWN0Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggc2NvcGUuc2VsZWN0Ym94LmRlZmF1bHRUZXh0ICE9IG51bGwgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5zZWxlY3Rib3guZGVmYXVsdFZhbHVlICE9IG51bGwgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2RlZmF1bHRPYmplY3QgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZGVmYXVsdE9iamVjdFtzY29wZS5zZWxlY3Rib3gua2V5RmllbGRdICAgPSBzY29wZS5zZWxlY3Rib3guZGVmYXVsdFRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2RlZmF1bHRPYmplY3Rbc2NvcGUuc2VsZWN0Ym94LnZhbHVlRmllbGRdID0gc2NvcGUuc2VsZWN0Ym94LmRlZmF1bHRWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuc2VsZWN0Ym94LmRhdGFzZXQudW5zaGlmdChfZGVmYXVsdE9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIOydvCDqsr3smrBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCAhc2NvcGUucm93W19oZWFkZXJDb2x1bW4uaWRdICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+qwkuydtCDruYTslrTsnojsnYTqsr3smrAgZGVmYXVsdEluZGV4LCBkZWZhdWx0VmFsdWUg7Jqw7ISg7Iic7JyE66GcIOq4sOuzuOqwkuydtCDsoJXtlbTsp5BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggc2NvcGUuc2VsZWN0Ym94LmRlZmF1bHRWYWx1ZSAhPSBudWxsICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLnJvd1tfaGVhZGVyQ29sdW1uLmlkXSA9IHNjb3BlLnNlbGVjdGJveC5kZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBzY29wZS5zZWxlY3Rib3guZGVmYXVsdEluZGV4ICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5yb3dbX2hlYWRlckNvbHVtbi5pZF0gPSBzY29wZS5zZWxlY3Rib3guZGF0YXNldFtzY29wZS5zZWxlY3Rib3guZGVmYXVsdEluZGV4XVtzY29wZS5zZWxlY3Rib3gua2V5RmllbGRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF9ncmlkRGF0YVZpZXcucmVwbGFjZVdpdGgoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRjb21waWxlKF90eXBlTWFwW190eXBlTmFtZV0gKShzY29wZSlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBlbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiB2aWV3TW9kZSgpe1xyXG4gICAgICAgICAgICAgICAgdmFyIF9ncmlkRWRpdEVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgX2dyaWRFZGl0RWxlbWVudCA9IGVsZW1lbnQuZmluZChcIi5zcC1ncmlkLWRhdGEtZWRpdFwiKTtcclxuICAgICAgICAgICAgICAgIF9ncmlkRWRpdEVsZW1lbnQucmVwbGFjZVdpdGgoXHJcbiAgICAgICAgICAgICAgICAgICAgJGNvbXBpbGUoICR0ZW1wbGF0ZUNhY2hlLmdldChTcEdyaWRDb25zdGFudC50ZW1wbGF0ZS5EQVRBX1ZJRVcpKShzY29wZSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNjb3BlLiRvbihcImNoYW5nZU1vZGVcIiwgY2hhbmdlTW9kZUJ5Q3VkRmxhZyApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCBhcHAgKXtcclxuICAgIGFwcC5kaXJlY3RpdmUoXCJzcEdyaWREYXRhQ29sdW1uXCIsIHNwR3JpZERhdGFDb2x1bW4pO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kaXJlY3RpdmVzL3NwR3JpZERhdGFDb2x1bW4uanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIG5nUmlnaHRDbGljaygkcGFyc2UpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcclxuICAgICAgICB2YXIgZm4gPSAkcGFyc2UoYXR0cnMubmdSaWdodENsaWNrKTtcclxuICAgICAgICBlbGVtZW50LmJpbmQoJ2NvbnRleHRtZW51JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGZuKHNjb3BlLCB7JGV2ZW50OmV2ZW50fSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXBwKXtcclxuICAgIGFwcC5kaXJlY3RpdmUoXCJuZ1JpZ2h0Q2xpY2tcIiwgbmdSaWdodENsaWNrKTtcclxuICAgIGFwcC5maWx0ZXIoXCJ0b190cnVzdGVkXCIsIFsnJHNjZScsIGZ1bmN0aW9uKCRzY2Upe1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbih0ZXh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNIdG1sKHRleHQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XSk7XHJcblxyXG4gICAgYXBwLmZpbHRlcignc3RhcnRGcm9tJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoaW5wdXQsIHN0YXJ0KSB7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSArc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXQuc2xpY2Uoc3RhcnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGlyZWN0aXZlcy91dGlsL3NwVXRpbC5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gc3BHcmlkUGFnaW5nKCBTcEdyaWRDb25zdGFudCApe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdCA6IFwiRVwiLFxyXG4gICAgICAgIHNjb3BlIDoge1xyXG4gICAgICAgICAgICBwYWdpbmdPcHRpb25zIDogXCI9XCIsXHJcbiAgICAgICAgICAgIG9uUGFnZUNsaWNrICAgIDogXCImXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRlbXBsYXRlVXJsIDogU3BHcmlkQ29uc3RhbnQudGVtcGxhdGUuU1BfR1JJRF9QQUdJTkcsXHJcbiAgICAgICAgbGluayA6IGZ1bmN0aW9uKCBzY29wZSwgZWxlbWVudCwgYXR0cnMgKXtcclxuICAgICAgICAgICAgc2NvcGUuY3VycmVudFBhZ2UgPSBzY29wZS5wYWdpbmdPcHRpb25zLmN1cnJlbnRQYWdlIHx8IDE7XHJcbiAgICAgICAgICAgIHNjb3BlLnBhZ2VTaXplICAgID0gc2NvcGUucGFnaW5nT3B0aW9ucy5wYWdlU2l6ZTtcclxuICAgICAgICAgICAgc2NvcGUucGFnZUJsb2NrU2l6ZSA9IHNjb3BlLnBhZ2luZ09wdGlvbnMucGFnZUJsb2NrU2l6ZTtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLiR3YXRjaChcInBhZ2luZ09wdGlvbnNcIiwgZnVuY3Rpb24oIG5ld09iaiApe1xyXG4gICAgICAgICAgICAgICAgc2NvcGUudG90YWxSZWNvcmRDb3VudCA9ICBuZXdPYmoudG90YWxSZWNvcmRDb3VudDtcclxuICAgICAgICAgICAgICAgIHNjb3BlLnRvdGFsUGFnZSAgICAgICAgPSBNYXRoLmNlaWwoIHNjb3BlLnRvdGFsUmVjb3JkQ291bnQgLyBuZXdPYmoucGFnZVNpemUgKTtcclxuICAgICAgICAgICAgfSx0cnVlKTtcclxuXHJcblxyXG4gICAgICAgICAgICBzY29wZS50b3RhbFBnYWVCbG9jayAgID0gTWF0aC5mbG9vciggc2NvcGUudG90YWxSZWNvcmRDb3VudCAvIHNjb3BlLnBhZ2VCbG9ja1NpemUgKTtcclxuICAgICAgICAgICAgY2FsY3VsYXRlQ3VycmVudFBhZ2VCbG9jaygpO1xyXG5cclxuICAgICAgICAgICAgc2NvcGUuZ2V0UGFnZUJsb2NrID0gZ2V0UGFnZUJsb2NrO1xyXG4gICAgICAgICAgICBzY29wZS5uZXh0UGFnZSAgICAgPSBuZXh0UGFnZTtcclxuICAgICAgICAgICAgc2NvcGUucHJldlBhZ2UgICAgID0gcHJldlBhZ2U7XHJcbiAgICAgICAgICAgIHNjb3BlLmdvdG9QYWdlICAgICA9IGdvdG9QYWdlO1xyXG4gICAgICAgICAgICAvLyBzY29wZS5wYWdlQmxvY2sgICAgPSBnZXRQYWdlQmxvY2soKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBhZ2VCbG9jaygpe1xyXG4gICAgICAgICAgICAgICAgdmFyIF9wYWdlQmxvY2sgPSBbXTtcclxuICAgICAgICAgICAgICAgIHZhciBfbWluUGFnZSAgID0gKHNjb3BlLmN1cnJlbnRQYWdlQmxvY2stMSkgKiBzY29wZS5wYWdlQmxvY2tTaXplO1xyXG4gICAgICAgICAgICAgICAgdmFyIF9tYXhQYWdlICAgPSBfbWluUGFnZSArIHNjb3BlLnBhZ2VCbG9ja1NpemU7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKCB2YXIgaSA9IF9taW5QYWdlIDsgaSA8IF9tYXhQYWdlIDsgaSArKyApe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBpIDwgc2NvcGUudG90YWxQYWdlICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wYWdlQmxvY2sucHVzaChpKzEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBfcGFnZUJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBuZXh0UGFnZSgpe1xyXG4gICAgICAgICAgICAgICAgaWYoIHNjb3BlLmN1cnJlbnRQYWdlIDwgc2NvcGUudG90YWxQYWdlICl7XHJcbiAgICAgICAgICAgICAgICAgICAgZ290b1BhZ2Uoc2NvcGUuY3VycmVudFBhZ2UrMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHByZXZQYWdlKCl7XHJcbiAgICAgICAgICAgICAgICBpZiggc2NvcGUuY3VycmVudFBhZ2UgPiAxICl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGdvdG9QYWdlKHNjb3BlLmN1cnJlbnRQYWdlLTEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnb3RvUGFnZSggcGFnZSApe1xyXG4gICAgICAgICAgICAgICAgdmFyIF9taW5QYWdlLCBfbWF4UGFnZTtcclxuICAgICAgICAgICAgICAgIHNjb3BlLmN1cnJlbnRQYWdlID0gcGFnZTtcclxuICAgICAgICAgICAgICAgIHNjb3BlLnBhZ2luZ09wdGlvbnMuY3VycmVudFBhZ2UgPSBwYWdlO1xyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlQ3VycmVudFBhZ2VCbG9jaygpO1xyXG4gICAgICAgICAgICAgICAgX21pblBhZ2UgICA9IChzY29wZS5jdXJyZW50UGFnZUJsb2NrLTEpICogc2NvcGUucGFnZUJsb2NrU2l6ZTtcclxuICAgICAgICAgICAgICAgIF9tYXhQYWdlICAgPSBfbWluUGFnZSArIHNjb3BlLnBhZ2VCbG9ja1NpemU7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5vblBhZ2VDbGljayggX21pblBhZ2UsIF9tYXhQYWdlICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUN1cnJlbnRQYWdlQmxvY2soKXtcclxuICAgICAgICAgICAgICAgIHNjb3BlLmN1cnJlbnRQYWdlQmxvY2sgPSBNYXRoLmNlaWwoIHNjb3BlLmN1cnJlbnRQYWdlIC8gc2NvcGUucGFnZUJsb2NrU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCBhcHAgKXtcclxuICAgIGFwcC5kaXJlY3RpdmUoXCJzcEdyaWRQYWdpbmdcIiwgc3BHcmlkUGFnaW5nICk7XHJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGlyZWN0aXZlcy9zcEdyaWRQYWdpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJuYi10ZXh0YXJlYSBuYi0ybSBzcC1ncmlkLWRhdGEtZWRpdFxcXCI+IDxsYWJlbD4gPHRleHRhcmVhIG5nLW1vZGVsPXJvd1toZWFkZXJDb2x1bW4uaWRdPnt7cm93W2hlYWRlckNvbHVtbi5pZF19fTwvdGV4dGFyZWE+IDxpPjwvaT4gPC9sYWJlbD4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlL1NwR3JpZEVkaXRUZXh0QXJlYS50bXBsLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=