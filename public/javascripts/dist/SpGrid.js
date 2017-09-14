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
__webpack_require__(6);
// var angular = require("angular");


var app = angular.module("spGrid", []);


app.constant("SpGridConstant", __webpack_require__(7));

app.run( ['$templateCache', 'SpGridConstant', function( $templateCache, SpGridConstant ){

    $templateCache.put( SpGridConstant.template.SP_GRID, __webpack_require__( 8));

    /**
     * Grid Header
     */
    $templateCache.put( SpGridConstant.template.SP_GRID_HEADER          , __webpack_require__( 9 ));
    $templateCache.put( SpGridConstant.template.SP_GRID_HEADER_ROW      , __webpack_require__( 10));
    $templateCache.put( SpGridConstant.template.SP_GRID_HEADER_COLUMN   , __webpack_require__(11));


    /**
     * Grid Body
     */
    $templateCache.put( SpGridConstant.template.SP_GRID_BODY        , __webpack_require__(12));
    $templateCache.put( SpGridConstant.template.SP_GRID_DATA_ROW    , __webpack_require__(13));
    $templateCache.put( SpGridConstant.template.SP_GRID_DATA_COLUMN , __webpack_require__(14));
    $templateCache.put( SpGridConstant.template.SP_GRID_DATA_ROW_BTN_GROUP, __webpack_require__(15));

    /**
     * Grid Util
     */
    $templateCache.put( SpGridConstant.template.EDIT_INPUT  , __webpack_require__(16));
    $templateCache.put( SpGridConstant.template.EDIT_CHECKBOX, __webpack_require__(17));
    $templateCache.put( SpGridConstant.template.CONTEXT_MENU, __webpack_require__(18));
    $templateCache.put( SpGridConstant.template.DATA_VIEW   , __webpack_require__(19));

    $templateCache.put( SpGridConstant.template.SP_GRID_PAGING, __webpack_require__(20));

}]);

    __webpack_require__(21)(app);
    __webpack_require__(22)(app)
    __webpack_require__(23)(app);
    __webpack_require__(24)(app);
    __webpack_require__(25)(app);
    __webpack_require__(26)(app);
    __webpack_require__(27)(app);
    __webpack_require__(28)(app);
    __webpack_require__(29)(app);
    __webpack_require__(30)(app);
    // require("./directives/spGridDataContextMenu")(app);
    __webpack_require__(31)(app);
    __webpack_require__(32)(app);
    __webpack_require__(33)(app);




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
		module.hot.accept("!!../../node_modules/css-loader/index.js!./SpGrid.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./SpGrid.css");
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
exports.push([module.i, ".sp-grid-wrap{\r\n    width: 100%;\r\n    overflow-x : scroll;\r\n}\r\n.sp-grid-wrap > .sp-grid > .sp-grid-body\r\n{\r\n    position : relative;\r\n}\r\n\r\n.sp-grid .sp-grid-data-context-menu-backdrop{\r\n    position:fixed;\r\n    top:0;\r\n    left:0;\r\n    right:0;\r\n    bottom:0;\r\n}\r\n.sp-grid .sp-grid-data-context-menu-wrap{\r\n    position: absolute;\r\n}\r\n\r\n.sp-grid .sp-grid-data-context-menu-wrap > .sp-grid-data-context-menu{\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n}\r\n.sp-grid .sp-grid-data-context-menu-wrap > .sp-grid-data-context-menu > li {\r\n    padding: 5px 20px;\r\n    border: 1px solid #4b4b4b;\r\n    box-sizing: border-box;\r\n    background: -webkit-linear-gradient(#fff, #fefefe);\r\n    background: -o-linear-gradient(#fff, #fefefe);\r\n    background: -moz-linear-gradient(#fff, #fefefe);\r\n    background: linear-gradient(#fff, #fefefe);\r\n    box-shadow : 1px 1px 1px #4b4b4b;\r\n}\r\n\r\n.sp-grid .sp-grid-header-column{\r\n    position:relative;\r\n}\r\n[class^=sp-grid-order]{\r\n    position: absolute;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    cursor:pointer;\r\n}\r\n.sp-grid .sp-grid-order-asc{\r\n    top: 12px;\r\n}\r\n.sp-grid .sp-grid-order-desc{\r\n    bottom: 12px;\r\n}\r\n@media( min-width : 501px ){\r\n    .sp-grid{\r\n        width:100%;\r\n        border:1px solid #ababab;\r\n        min-height:300px;\r\n        display:table;\r\n    }\r\n\r\n    .sp-grid > .sp-grid-header {\r\n        height:50px;\r\n    }\r\n    .sp-grid > .sp-grid-header > .sp-grid-header-row{\r\n        display:table-row;\r\n        height:50px;\r\n    }\r\n    .sp-grid > .sp-grid-header > .sp-grid-header-row  .sp-grid-header-column {\r\n        padding: 0 10px;\r\n        border-right: 1px solid #ababab;\r\n        text-align: center;\r\n        display : table-cell;\r\n        vertical-align:middle;\r\n        background: #f7f7f7;\r\n        color: #333;\r\n        border-bottom: 1px solid #ababab;\r\n        font-size:14px;\r\n    }\r\n\r\n    .sp-grid > .sp-grid-body {\r\n        overflow-y:scroll;\r\n\r\n    }\r\n\r\n    .sp-grid > .sp-grid-body > .sp-grid-data-row{\r\n        display:table-row;\r\n        height:50px;\r\n    }\r\n\r\n    .sp-grid > .sp-grid-body > .sp-grid-data-row  .sp-grid-data-column{\r\n        padding: 0 10px;\r\n        border-right: 1px solid #ababab;\r\n        border-bottom: 1px solid #ababab;\r\n        color:#888;\r\n        text-align: center;\r\n        display : table-cell;\r\n        vertical-align:middle;\r\n        font-size:13px;\r\n    }\r\n\r\n    .sp-grid > .sp-grid-body > .sp-grid-data-row  .sp-grid-data-column > .sp-grid-data{\r\n        overflow: hidden;\r\n        word-break: break-all;\r\n        box-sizing:border-box;\r\n    }\r\n\r\n    .sp-grid-data > .sp-grid-data-html{\r\n        padding-bottom: 12px;\r\n    }\r\n    .sp-grid-data-header{\r\n        display:none;\r\n    }\r\n}\r\n\r\n\r\n@media ( max-width : 500px ){\r\n    .sp-grid-wrap{\r\n        width:100% !important;\r\n        overflow:hidden;\r\n    }\r\n    .sp-grid{\r\n        width:100%;\r\n        border:1px solid #ababab;\r\n        min-height:300px;\r\n        display:block;\r\n    }\r\n\r\n    .sp-grid > .sp-grid-header {\r\n        display:none;\r\n    }\r\n\r\n    .sp-grid > .sp-grid-body {\r\n        overflow-y:scroll;\r\n        padding:10px;\r\n    }\r\n\r\n    .sp-grid > .sp-grid-body > .sp-grid-data-row{\r\n        display:block;\r\n        height:auto;\r\n        margin-bottom:30px;\r\n    }\r\n\r\n    .sp-grid > .sp-grid-body > .sp-grid-data-row  .sp-grid-data-column{\r\n        padding: 20px 10px;\r\n        background: #f7f7f7;\r\n        border-left: 1px solid #ababab;\r\n        border-right: 1px solid #ababab;\r\n        border-bottom: 1px solid #ababab;\r\n        text-align: center;\r\n        display : block;\r\n        vertical-align:middle;\r\n        min-width:100% !important;\r\n        max-width:100% !important;\r\n        box-sizing:border-box;\r\n        font-size:13px;\r\n    }\r\n\r\n    .sp-grid > .sp-grid-body > .sp-grid-data-row{\r\n        border-top : 1px solid #ababab;\r\n\r\n    }\r\n\r\n    .sp-grid > .sp-grid-body > .sp-grid-data-row .sp-grid-data-column > .sp-grid-data-header,\r\n    .sp-grid > .sp-grid-body > .sp-grid-data-row  .sp-grid-data-column > .sp-grid-data{\r\n        display: inline-block;\r\n        overflow: hidden;\r\n        word-break: break-all;\r\n        box-sizing:border-box;\r\n    }\r\n\r\n    .sp-grid > .sp-grid-body > .sp-grid-data-row  .sp-grid-data-column > .sp-grid-data-header{\r\n        width:20%;\r\n        vertical-align:top;\r\n    }\r\n    .sp-grid > .sp-grid-body > .sp-grid-data-row  .sp-grid-data-column > .sp-grid-data {\r\n        width: 80%;\r\n    }\r\n\r\n\r\n}", ""]);

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

var fa=function(i){return fa[i.replace(/-./g,function(x){return x.substr(1).toUpperCase()})]};fa.glass="\uf000";fa.music="\uf001";fa.search="\uf002";fa.envelopeO="\uf003";fa.heart="\uf004";fa.star="\uf005";fa.starO="\uf006";fa.user="\uf007";fa.film="\uf008";fa.thLarge="\uf009";fa.th="\uf00a";fa.thList="\uf00b";fa.check="\uf00c";fa.remove="\uf00d";fa.close="\uf00d";fa.times="\uf00d";fa.searchPlus="\uf00e";fa.searchMinus="\uf010";fa.powerOff="\uf011";fa.signal="\uf012";fa.gear="\uf013";fa.cog="\uf013";fa.trashO="\uf014";fa.home="\uf015";fa.fileO="\uf016";fa.clockO="\uf017";fa.road="\uf018";fa.download="\uf019";fa.arrowCircleODown="\uf01a";fa.arrowCircleOUp="\uf01b";fa.inbox="\uf01c";fa.playCircleO="\uf01d";fa.rotateRight="\uf01e";fa.repeat="\uf01e";fa.refresh="\uf021";fa.listAlt="\uf022";fa.lock="\uf023";fa.flag="\uf024";fa.headphones="\uf025";fa.volumeOff="\uf026";fa.volumeDown="\uf027";fa.volumeUp="\uf028";fa.qrcode="\uf029";fa.barcode="\uf02a";fa.tag="\uf02b";fa.tags="\uf02c";fa.book="\uf02d";fa.bookmark="\uf02e";fa.print="\uf02f";fa.camera="\uf030";fa.font="\uf031";fa.bold="\uf032";fa.italic="\uf033";fa.textHeight="\uf034";fa.textWidth="\uf035";fa.alignLeft="\uf036";fa.alignCenter="\uf037";fa.alignRight="\uf038";fa.alignJustify="\uf039";fa.list="\uf03a";fa.dedent="\uf03b";fa.outdent="\uf03b";fa.indent="\uf03c";fa.videoCamera="\uf03d";fa.photo="\uf03e";fa.image="\uf03e";fa.pictureO="\uf03e";fa.pencil="\uf040";fa.mapMarker="\uf041";fa.adjust="\uf042";fa.tint="\uf043";fa.edit="\uf044";fa.pencilSquareO="\uf044";fa.shareSquareO="\uf045";fa.checkSquareO="\uf046";fa.arrows="\uf047";fa.stepBackward="\uf048";fa.fastBackward="\uf049";fa.backward="\uf04a";fa.play="\uf04b";fa.pause="\uf04c";fa.stop="\uf04d";fa.forward="\uf04e";fa.fastForward="\uf050";fa.stepForward="\uf051";fa.eject="\uf052";fa.chevronLeft="\uf053";fa.chevronRight="\uf054";fa.plusCircle="\uf055";fa.minusCircle="\uf056";fa.timesCircle="\uf057";fa.checkCircle="\uf058";fa.questionCircle="\uf059";fa.infoCircle="\uf05a";fa.crosshairs="\uf05b";fa.timesCircleO="\uf05c";fa.checkCircleO="\uf05d";fa.ban="\uf05e";fa.arrowLeft="\uf060";fa.arrowRight="\uf061";fa.arrowUp="\uf062";fa.arrowDown="\uf063";fa.mailForward="\uf064";fa.share="\uf064";fa.expand="\uf065";fa.compress="\uf066";fa.plus="\uf067";fa.minus="\uf068";fa.asterisk="\uf069";fa.exclamationCircle="\uf06a";fa.gift="\uf06b";fa.leaf="\uf06c";fa.fire="\uf06d";fa.eye="\uf06e";fa.eyeSlash="\uf070";fa.warning="\uf071";fa.exclamationTriangle="\uf071";fa.plane="\uf072";fa.calendar="\uf073";fa.random="\uf074";fa.comment="\uf075";fa.magnet="\uf076";fa.chevronUp="\uf077";fa.chevronDown="\uf078";fa.retweet="\uf079";fa.shoppingCart="\uf07a";fa.folder="\uf07b";fa.folderOpen="\uf07c";fa.arrowsV="\uf07d";fa.arrowsH="\uf07e";fa.barChartO="\uf080";fa.barChart="\uf080";fa.twitterSquare="\uf081";fa.facebookSquare="\uf082";fa.cameraRetro="\uf083";fa.key="\uf084";fa.gears="\uf085";fa.cogs="\uf085";fa.comments="\uf086";fa.thumbsOUp="\uf087";fa.thumbsODown="\uf088";fa.starHalf="\uf089";fa.heartO="\uf08a";fa.signOut="\uf08b";fa.linkedinSquare="\uf08c";fa.thumbTack="\uf08d";fa.externalLink="\uf08e";fa.signIn="\uf090";fa.trophy="\uf091";fa.githubSquare="\uf092";fa.upload="\uf093";fa.lemonO="\uf094";fa.phone="\uf095";fa.squareO="\uf096";fa.bookmarkO="\uf097";fa.phoneSquare="\uf098";fa.twitter="\uf099";fa.facebookF="\uf09a";fa.facebook="\uf09a";fa.github="\uf09b";fa.unlock="\uf09c";fa.creditCard="\uf09d";fa.feed="\uf09e";fa.rss="\uf09e";fa.hddO="\uf0a0";fa.bullhorn="\uf0a1";fa.bell="\uf0f3";fa.certificate="\uf0a3";fa.handORight="\uf0a4";fa.handOLeft="\uf0a5";fa.handOUp="\uf0a6";fa.handODown="\uf0a7";fa.arrowCircleLeft="\uf0a8";fa.arrowCircleRight="\uf0a9";fa.arrowCircleUp="\uf0aa";fa.arrowCircleDown="\uf0ab";fa.globe="\uf0ac";fa.wrench="\uf0ad";fa.tasks="\uf0ae";fa.filter="\uf0b0";fa.briefcase="\uf0b1";fa.arrowsAlt="\uf0b2";fa.group="\uf0c0";fa.users="\uf0c0";fa.chain="\uf0c1";fa.link="\uf0c1";fa.cloud="\uf0c2";fa.flask="\uf0c3";fa.cut="\uf0c4";fa.scissors="\uf0c4";fa.copy="\uf0c5";fa.filesO="\uf0c5";fa.paperclip="\uf0c6";fa.save="\uf0c7";fa.floppyO="\uf0c7";fa.square="\uf0c8";fa.navicon="\uf0c9";fa.reorder="\uf0c9";fa.bars="\uf0c9";fa.listUl="\uf0ca";fa.listOl="\uf0cb";fa.strikethrough="\uf0cc";fa.underline="\uf0cd";fa.table="\uf0ce";fa.magic="\uf0d0";fa.truck="\uf0d1";fa.pinterest="\uf0d2";fa.pinterestSquare="\uf0d3";fa.googlePlusSquare="\uf0d4";fa.googlePlus="\uf0d5";fa.money="\uf0d6";fa.caretDown="\uf0d7";fa.caretUp="\uf0d8";fa.caretLeft="\uf0d9";fa.caretRight="\uf0da";fa.columns="\uf0db";fa.unsorted="\uf0dc";fa.sort="\uf0dc";fa.sortDown="\uf0dd";fa.sortDesc="\uf0dd";fa.sortUp="\uf0de";fa.sortAsc="\uf0de";fa.envelope="\uf0e0";fa.linkedin="\uf0e1";fa.rotateLeft="\uf0e2";fa.undo="\uf0e2";fa.legal="\uf0e3";fa.gavel="\uf0e3";fa.dashboard="\uf0e4";fa.tachometer="\uf0e4";fa.commentO="\uf0e5";fa.commentsO="\uf0e6";fa.flash="\uf0e7";fa.bolt="\uf0e7";fa.sitemap="\uf0e8";fa.umbrella="\uf0e9";fa.paste="\uf0ea";fa.clipboard="\uf0ea";fa.lightbulbO="\uf0eb";fa.exchange="\uf0ec";fa.cloudDownload="\uf0ed";fa.cloudUpload="\uf0ee";fa.userMd="\uf0f0";fa.stethoscope="\uf0f1";fa.suitcase="\uf0f2";fa.bellO="\uf0a2";fa.coffee="\uf0f4";fa.cutlery="\uf0f5";fa.fileTextO="\uf0f6";fa.buildingO="\uf0f7";fa.hospitalO="\uf0f8";fa.ambulance="\uf0f9";fa.medkit="\uf0fa";fa.fighterJet="\uf0fb";fa.beer="\uf0fc";fa.hSquare="\uf0fd";fa.plusSquare="\uf0fe";fa.angleDoubleLeft="\uf100";fa.angleDoubleRight="\uf101";fa.angleDoubleUp="\uf102";fa.angleDoubleDown="\uf103";fa.angleLeft="\uf104";fa.angleRight="\uf105";fa.angleUp="\uf106";fa.angleDown="\uf107";fa.desktop="\uf108";fa.laptop="\uf109";fa.tablet="\uf10a";fa.mobilePhone="\uf10b";fa.mobile="\uf10b";fa.circleO="\uf10c";fa.quoteLeft="\uf10d";fa.quoteRight="\uf10e";fa.spinner="\uf110";fa.circle="\uf111";fa.mailReply="\uf112";fa.reply="\uf112";fa.githubAlt="\uf113";fa.folderO="\uf114";fa.folderOpenO="\uf115";fa.smileO="\uf118";fa.frownO="\uf119";fa.mehO="\uf11a";fa.gamepad="\uf11b";fa.keyboardO="\uf11c";fa.flagO="\uf11d";fa.flagCheckered="\uf11e";fa.terminal="\uf120";fa.code="\uf121";fa.mailReplyAll="\uf122";fa.replyAll="\uf122";fa.starHalfEmpty="\uf123";fa.starHalfFull="\uf123";fa.starHalfO="\uf123";fa.locationArrow="\uf124";fa.crop="\uf125";fa.codeFork="\uf126";fa.unlink="\uf127";fa.chainBroken="\uf127";fa.question="\uf128";fa.info="\uf129";fa.exclamation="\uf12a";fa.superscript="\uf12b";fa.subscript="\uf12c";fa.eraser="\uf12d";fa.puzzlePiece="\uf12e";fa.microphone="\uf130";fa.microphoneSlash="\uf131";fa.shield="\uf132";fa.calendarO="\uf133";fa.fireExtinguisher="\uf134";fa.rocket="\uf135";fa.maxcdn="\uf136";fa.chevronCircleLeft="\uf137";fa.chevronCircleRight="\uf138";fa.chevronCircleUp="\uf139";fa.chevronCircleDown="\uf13a";fa.html5="\uf13b";fa.css3="\uf13c";fa.anchor="\uf13d";fa.unlockAlt="\uf13e";fa.bullseye="\uf140";fa.ellipsisH="\uf141";fa.ellipsisV="\uf142";fa.rssSquare="\uf143";fa.playCircle="\uf144";fa.ticket="\uf145";fa.minusSquare="\uf146";fa.minusSquareO="\uf147";fa.levelUp="\uf148";fa.levelDown="\uf149";fa.checkSquare="\uf14a";fa.pencilSquare="\uf14b";fa.externalLinkSquare="\uf14c";fa.shareSquare="\uf14d";fa.compass="\uf14e";fa.toggleDown="\uf150";fa.caretSquareODown="\uf150";fa.toggleUp="\uf151";fa.caretSquareOUp="\uf151";fa.toggleRight="\uf152";fa.caretSquareORight="\uf152";fa.euro="\uf153";fa.eur="\uf153";fa.gbp="\uf154";fa.dollar="\uf155";fa.usd="\uf155";fa.rupee="\uf156";fa.inr="\uf156";fa.cny="\uf157";fa.rmb="\uf157";fa.yen="\uf157";fa.jpy="\uf157";fa.ruble="\uf158";fa.rouble="\uf158";fa.rub="\uf158";fa.won="\uf159";fa.krw="\uf159";fa.bitcoin="\uf15a";fa.btc="\uf15a";fa.file="\uf15b";fa.fileText="\uf15c";fa.sortAlphaAsc="\uf15d";fa.sortAlphaDesc="\uf15e";fa.sortAmountAsc="\uf160";fa.sortAmountDesc="\uf161";fa.sortNumericAsc="\uf162";fa.sortNumericDesc="\uf163";fa.thumbsUp="\uf164";fa.thumbsDown="\uf165";fa.youtubeSquare="\uf166";fa.youtube="\uf167";fa.xing="\uf168";fa.xingSquare="\uf169";fa.youtubePlay="\uf16a";fa.dropbox="\uf16b";fa.stackOverflow="\uf16c";fa.instagram="\uf16d";fa.flickr="\uf16e";fa.adn="\uf170";fa.bitbucket="\uf171";fa.bitbucketSquare="\uf172";fa.tumblr="\uf173";fa.tumblrSquare="\uf174";fa.longArrowDown="\uf175";fa.longArrowUp="\uf176";fa.longArrowLeft="\uf177";fa.longArrowRight="\uf178";fa.apple="\uf179";fa.windows="\uf17a";fa.android="\uf17b";fa.linux="\uf17c";fa.dribbble="\uf17d";fa.skype="\uf17e";fa.foursquare="\uf180";fa.trello="\uf181";fa.female="\uf182";fa.male="\uf183";fa.gittip="\uf184";fa.gratipay="\uf184";fa.sunO="\uf185";fa.moonO="\uf186";fa.archive="\uf187";fa.bug="\uf188";fa.vk="\uf189";fa.weibo="\uf18a";fa.renren="\uf18b";fa.pagelines="\uf18c";fa.stackExchange="\uf18d";fa.arrowCircleORight="\uf18e";fa.arrowCircleOLeft="\uf190";fa.toggleLeft="\uf191";fa.caretSquareOLeft="\uf191";fa.dotCircleO="\uf192";fa.wheelchair="\uf193";fa.vimeoSquare="\uf194";fa.turkishLira="\uf195";fa.try="\uf195";fa.plusSquareO="\uf196";fa.spaceShuttle="\uf197";fa.slack="\uf198";fa.envelopeSquare="\uf199";fa.wordpress="\uf19a";fa.openid="\uf19b";fa.institution="\uf19c";fa.bank="\uf19c";fa.university="\uf19c";fa.mortarBoard="\uf19d";fa.graduationCap="\uf19d";fa.yahoo="\uf19e";fa.google="\uf1a0";fa.reddit="\uf1a1";fa.redditSquare="\uf1a2";fa.stumbleuponCircle="\uf1a3";fa.stumbleupon="\uf1a4";fa.delicious="\uf1a5";fa.digg="\uf1a6";fa.piedPiperPp="\uf1a7";fa.piedPiperAlt="\uf1a8";fa.drupal="\uf1a9";fa.joomla="\uf1aa";fa.language="\uf1ab";fa.fax="\uf1ac";fa.building="\uf1ad";fa.child="\uf1ae";fa.paw="\uf1b0";fa.spoon="\uf1b1";fa.cube="\uf1b2";fa.cubes="\uf1b3";fa.behance="\uf1b4";fa.behanceSquare="\uf1b5";fa.steam="\uf1b6";fa.steamSquare="\uf1b7";fa.recycle="\uf1b8";fa.automobile="\uf1b9";fa.car="\uf1b9";fa.cab="\uf1ba";fa.taxi="\uf1ba";fa.tree="\uf1bb";fa.spotify="\uf1bc";fa.deviantart="\uf1bd";fa.soundcloud="\uf1be";fa.database="\uf1c0";fa.filePdfO="\uf1c1";fa.fileWordO="\uf1c2";fa.fileExcelO="\uf1c3";fa.filePowerpointO="\uf1c4";fa.filePhotoO="\uf1c5";fa.filePictureO="\uf1c5";fa.fileImageO="\uf1c5";fa.fileZipO="\uf1c6";fa.fileArchiveO="\uf1c6";fa.fileSoundO="\uf1c7";fa.fileAudioO="\uf1c7";fa.fileMovieO="\uf1c8";fa.fileVideoO="\uf1c8";fa.fileCodeO="\uf1c9";fa.vine="\uf1ca";fa.codepen="\uf1cb";fa.jsfiddle="\uf1cc";fa.lifeBouy="\uf1cd";fa.lifeBuoy="\uf1cd";fa.lifeSaver="\uf1cd";fa.support="\uf1cd";fa.lifeRing="\uf1cd";fa.circleONotch="\uf1ce";fa.ra="\uf1d0";fa.resistance="\uf1d0";fa.rebel="\uf1d0";fa.ge="\uf1d1";fa.empire="\uf1d1";fa.gitSquare="\uf1d2";fa.git="\uf1d3";fa.yCombinatorSquare="\uf1d4";fa.ycSquare="\uf1d4";fa.hackerNews="\uf1d4";fa.tencentWeibo="\uf1d5";fa.qq="\uf1d6";fa.wechat="\uf1d7";fa.weixin="\uf1d7";fa.send="\uf1d8";fa.paperPlane="\uf1d8";fa.sendO="\uf1d9";fa.paperPlaneO="\uf1d9";fa.history="\uf1da";fa.circleThin="\uf1db";fa.header="\uf1dc";fa.paragraph="\uf1dd";fa.sliders="\uf1de";fa.shareAlt="\uf1e0";fa.shareAltSquare="\uf1e1";fa.bomb="\uf1e2";fa.soccerBallO="\uf1e3";fa.futbolO="\uf1e3";fa.tty="\uf1e4";fa.binoculars="\uf1e5";fa.plug="\uf1e6";fa.slideshare="\uf1e7";fa.twitch="\uf1e8";fa.yelp="\uf1e9";fa.newspaperO="\uf1ea";fa.wifi="\uf1eb";fa.calculator="\uf1ec";fa.paypal="\uf1ed";fa.googleWallet="\uf1ee";fa.ccVisa="\uf1f0";fa.ccMastercard="\uf1f1";fa.ccDiscover="\uf1f2";fa.ccAmex="\uf1f3";fa.ccPaypal="\uf1f4";fa.ccStripe="\uf1f5";fa.bellSlash="\uf1f6";fa.bellSlashO="\uf1f7";fa.trash="\uf1f8";fa.copyright="\uf1f9";fa.at="\uf1fa";fa.eyedropper="\uf1fb";fa.paintBrush="\uf1fc";fa.birthdayCake="\uf1fd";fa.areaChart="\uf1fe";fa.pieChart="\uf200";fa.lineChart="\uf201";fa.lastfm="\uf202";fa.lastfmSquare="\uf203";fa.toggleOff="\uf204";fa.toggleOn="\uf205";fa.bicycle="\uf206";fa.bus="\uf207";fa.ioxhost="\uf208";fa.angellist="\uf209";fa.cc="\uf20a";fa.shekel="\uf20b";fa.sheqel="\uf20b";fa.ils="\uf20b";fa.meanpath="\uf20c";fa.buysellads="\uf20d";fa.connectdevelop="\uf20e";fa.dashcube="\uf210";fa.forumbee="\uf211";fa.leanpub="\uf212";fa.sellsy="\uf213";fa.shirtsinbulk="\uf214";fa.simplybuilt="\uf215";fa.skyatlas="\uf216";fa.cartPlus="\uf217";fa.cartArrowDown="\uf218";fa.diamond="\uf219";fa.ship="\uf21a";fa.userSecret="\uf21b";fa.motorcycle="\uf21c";fa.streetView="\uf21d";fa.heartbeat="\uf21e";fa.venus="\uf221";fa.mars="\uf222";fa.mercury="\uf223";fa.intersex="\uf224";fa.transgender="\uf224";fa.transgenderAlt="\uf225";fa.venusDouble="\uf226";fa.marsDouble="\uf227";fa.venusMars="\uf228";fa.marsStroke="\uf229";fa.marsStrokeV="\uf22a";fa.marsStrokeH="\uf22b";fa.neuter="\uf22c";fa.genderless="\uf22d";fa.facebookOfficial="\uf230";fa.pinterestP="\uf231";fa.whatsapp="\uf232";fa.server="\uf233";fa.userPlus="\uf234";fa.userTimes="\uf235";fa.hotel="\uf236";fa.bed="\uf236";fa.viacoin="\uf237";fa.train="\uf238";fa.subway="\uf239";fa.medium="\uf23a";fa.yc="\uf23b";fa.yCombinator="\uf23b";fa.optinMonster="\uf23c";fa.opencart="\uf23d";fa.expeditedssl="\uf23e";fa.battery4="\uf240";fa.battery="\uf240";fa.batteryFull="\uf240";fa.battery3="\uf241";fa.batteryThreeQuarters="\uf241";fa.battery2="\uf242";fa.batteryHalf="\uf242";fa.battery1="\uf243";fa.batteryQuarter="\uf243";fa.battery0="\uf244";fa.batteryEmpty="\uf244";fa.mousePointer="\uf245";fa.iCursor="\uf246";fa.objectGroup="\uf247";fa.objectUngroup="\uf248";fa.stickyNote="\uf249";fa.stickyNoteO="\uf24a";fa.ccJcb="\uf24b";fa.ccDinersClub="\uf24c";fa.clone="\uf24d";fa.balanceScale="\uf24e";fa.hourglassO="\uf250";fa.hourglass1="\uf251";fa.hourglassStart="\uf251";fa.hourglass2="\uf252";fa.hourglassHalf="\uf252";fa.hourglass3="\uf253";fa.hourglassEnd="\uf253";fa.hourglass="\uf254";fa.handGrabO="\uf255";fa.handRockO="\uf255";fa.handStopO="\uf256";fa.handPaperO="\uf256";fa.handScissorsO="\uf257";fa.handLizardO="\uf258";fa.handSpockO="\uf259";fa.handPointerO="\uf25a";fa.handPeaceO="\uf25b";fa.trademark="\uf25c";fa.registered="\uf25d";fa.creativeCommons="\uf25e";fa.gg="\uf260";fa.ggCircle="\uf261";fa.tripadvisor="\uf262";fa.odnoklassniki="\uf263";fa.odnoklassnikiSquare="\uf264";fa.getPocket="\uf265";fa.wikipediaW="\uf266";fa.safari="\uf267";fa.chrome="\uf268";fa.firefox="\uf269";fa.opera="\uf26a";fa.internetExplorer="\uf26b";fa.tv="\uf26c";fa.television="\uf26c";fa.contao="\uf26d";fa["500px"]="\uf26e";fa.amazon="\uf270";fa.calendarPlusO="\uf271";fa.calendarMinusO="\uf272";fa.calendarTimesO="\uf273";fa.calendarCheckO="\uf274";fa.industry="\uf275";fa.mapPin="\uf276";fa.mapSigns="\uf277";fa.mapO="\uf278";fa.map="\uf279";fa.commenting="\uf27a";fa.commentingO="\uf27b";fa.houzz="\uf27c";fa.vimeo="\uf27d";fa.blackTie="\uf27e";fa.fonticons="\uf280";fa.redditAlien="\uf281";fa.edge="\uf282";fa.creditCardAlt="\uf283";fa.codiepie="\uf284";fa.modx="\uf285";fa.fortAwesome="\uf286";fa.usb="\uf287";fa.productHunt="\uf288";fa.mixcloud="\uf289";fa.scribd="\uf28a";fa.pauseCircle="\uf28b";fa.pauseCircleO="\uf28c";fa.stopCircle="\uf28d";fa.stopCircleO="\uf28e";fa.shoppingBag="\uf290";fa.shoppingBasket="\uf291";fa.hashtag="\uf292";fa.bluetooth="\uf293";fa.bluetoothB="\uf294";fa.percent="\uf295";fa.gitlab="\uf296";fa.wpbeginner="\uf297";fa.wpforms="\uf298";fa.envira="\uf299";fa.universalAccess="\uf29a";fa.wheelchairAlt="\uf29b";fa.questionCircleO="\uf29c";fa.blind="\uf29d";fa.audioDescription="\uf29e";fa.volumeControlPhone="\uf2a0";fa.braille="\uf2a1";fa.assistiveListeningSystems="\uf2a2";fa.aslInterpreting="\uf2a3";fa.americanSignLanguageInterpreting="\uf2a3";fa.deafness="\uf2a4";fa.hardOfHearing="\uf2a4";fa.deaf="\uf2a4";fa.glide="\uf2a5";fa.glideG="\uf2a6";fa.signing="\uf2a7";fa.signLanguage="\uf2a7";fa.lowVision="\uf2a8";fa.viadeo="\uf2a9";fa.viadeoSquare="\uf2aa";fa.snapchat="\uf2ab";fa.snapchatGhost="\uf2ac";fa.snapchatSquare="\uf2ad";fa.piedPiper="\uf2ae";fa.firstOrder="\uf2b0";fa.yoast="\uf2b1";fa.themeisle="\uf2b2";fa.googlePlusCircle="\uf2b3";fa.googlePlusOfficial="\uf2b3";fa.fa="\uf2b4";fa.fontAwesome="\uf2b4";fa.handshakeO="\uf2b5";fa.envelopeOpen="\uf2b6";fa.envelopeOpenO="\uf2b7";fa.linode="\uf2b8";fa.addressBook="\uf2b9";fa.addressBookO="\uf2ba";fa.vcard="\uf2bb";fa.addressCard="\uf2bb";fa.vcardO="\uf2bc";fa.addressCardO="\uf2bc";fa.userCircle="\uf2bd";fa.userCircleO="\uf2be";fa.userO="\uf2c0";fa.idBadge="\uf2c1";fa.driversLicense="\uf2c2";fa.idCard="\uf2c2";fa.driversLicenseO="\uf2c3";fa.idCardO="\uf2c3";fa.quora="\uf2c4";fa.freeCodeCamp="\uf2c5";fa.telegram="\uf2c6";fa.thermometer4="\uf2c7";fa.thermometer="\uf2c7";fa.thermometerFull="\uf2c7";fa.thermometer3="\uf2c8";fa.thermometerThreeQuarters="\uf2c8";fa.thermometer2="\uf2c9";fa.thermometerHalf="\uf2c9";fa.thermometer1="\uf2ca";fa.thermometerQuarter="\uf2ca";fa.thermometer0="\uf2cb";fa.thermometerEmpty="\uf2cb";fa.shower="\uf2cc";fa.bathtub="\uf2cd";fa.s15="\uf2cd";fa.bath="\uf2cd";fa.podcast="\uf2ce";fa.windowMaximize="\uf2d0";fa.windowMinimize="\uf2d1";fa.windowRestore="\uf2d2";fa.timesRectangle="\uf2d3";fa.windowClose="\uf2d3";fa.timesRectangleO="\uf2d4";fa.windowCloseO="\uf2d4";fa.bandcamp="\uf2d5";fa.grav="\uf2d6";fa.etsy="\uf2d7";fa.imdb="\uf2d8";fa.ravelry="\uf2d9";fa.eercast="\uf2da";fa.microchip="\uf2db";fa.snowflakeO="\uf2dc";fa.superpowers="\uf2dd";fa.wpexplorer="\uf2de";fa.meetup="\uf2e0";module.exports=fa;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {
    CREATE_FLAG : "C",
        UPDATE_FLAG : "U",
    DELETE_FLAG : "D",
    template : {
        EDIT_INPUT            : "SpGridEditInput.tmpl.html",
        EDIT_CHECKBOX         : "SpGridEditCheckBox.tmpl.html",
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
        SP_GRID_PAGING        : "SpGridPaging.tmpl.html"
    }
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<div class=sp-grid-wrap ng-style=\"{ 'width' : gridObject.getSize().width }\"> <div class=sp-grid> <sp-grid-header></sp-grid-header> <sp-grid-body></sp-grid-body> </div> </div>";

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<div class=sp-grid-header> <sp-grid-header-row></sp-grid-header-row> </div>";

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<div class=sp-grid-header-row> <sp-grid-header-column ng-repeat=\"column in gridObject.getColumnDef() track by $index\"> </sp-grid-header-column> </div>";

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<div class=sp-grid-header-column ng-style=\"{ 'min-width' : column.width, 'max-width' : column.width }\"> <span>{{column.name}}<span class=sp-grid-order-desc ng-show=\"column.type=='data'\" ng-click=\"orderChange(column.id,'desc')\"> <i class=\"fa fa-chevron-down\" aria-hidden=true></i> </span> <span class=sp-grid-order-asc ng-show=\"column.type=='data'\" ng-click=\"orderChange(column.id,'asc')\"> <i class=\"fa fa-chevron-up\" aria-hidden=true></i> </span></span> </div>";

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<div class=sp-grid-body ng-style=\"{ 'height' : gridObject.getSize().height }\"> <sp-grid-data-row ng-repeat=\"row in gridObject.getCreateData()\"></sp-grid-data-row> <sp-grid-data-row ng-repeat=\"row in gridObject.getData() | startFrom:start | limitTo:pageSize\"></sp-grid-data-row> </div>";

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "<div class=sp-grid-data-row ng-click=onGridDataRowClick(row) ng-hide=isRowDeleted()> <form class=sp-grid-row-form novalidate name=rowForm> <sp-grid-data-column ng-repeat=\"headerColumn in gridObject.getColumnDef() track by $index\"></sp-grid-data-column> </form> </div>";

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "<div class=sp-grid-data-column ng-style=\"{ 'max-width' : columnWidth , 'min-width' : columnWidth }\"> <div class=sp-grid-data-header>{{columnHeader}}</div> <div class=sp-grid-data> <span class=sp-grid-data-view ng-show=\"isTypeData() || isTypeRowno()\">{{displayData}}</span> <div class=sp-grid-data-html ng-show=isTypeHtml()></div> </div> </div>";

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = " <div class=\"nb-buttons left nb-inline\"> <div class=nb-btn-save ng-show=\"isTempSave() || ( !isRowEditting() && !isRowAdding())\" ng-click=rowEdit();> <button><i class=\"fa fa-pencil-square-o\" aria-hidden=true></i></button> </div> <div class=nb-btn-save ng-show=\"!isTempSave() && (isRowEditting() || isRowAdding())\" ng-click=validate()> <button><i class=\"fa fa-check\" aria-hidden=true></i></button></div> <div class=nb-btn-delete ng-show=\"!isTempSave() && (isRowEditting() || isRowAdding())\" ng-click=rowRevert()> <button><i class=\"fa fa-close\" aria-hidden=true></i></button></div> <div class=nb-btn-delete ng-show=\"isTempSave() || (!isRowEditting() && !isRowAdding())\" ng-click=rowDelete()> <button><i class=\"fa fa-trash\" aria-hidden=true></i></button></div> </div>";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<div class=\"nb-inputText nb-2m sp-grid-data-edit\"> <label> <div> <input type=text ng-model=row[headerColumn.id] value={{row[headerColumn.id]}} name=row[headerColumn.id]> <i></i> </div> </label> </div>";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<div class=\"nb-checkbox sp-grid-data-edit\"> <div> <label> <input type=checkbox ng-true-value=\"'{{checkbox.trueValue}}'\" ng-checked=\"'{{checkbox.trueValue}}'\" ng-false-value=\"'{{checkbox.falseValue}}'\" ng-model=row[headerColumn.id] value=\"'{{checkbox.falseValue}}'\"> <span> <i></i> <em>{{label}}</em> </span> </label> </div> </div>";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "<div class=sp-grid-data-context-menu-backdrop ng-show=isContextMenuShow ng-click=\"isContextMenuShow = !isContextMenuShow\"> <div class=sp-grid-data-context-menu-wrap ng-style=\"{ 'top' : rightClickPosition.currentY , 'left' : rightClickPosition.currentX }\"> <ul class=sp-grid-data-context-menu> <li ng-show=\"gridObject.isEditMode() && !rowManager.isRowEditting()\" ng-click=rowManager.rowEdit()>Edit</li> <li ng-show=\"gridObject.isEditMode() && rowManager.isRowEditting()\" ng-click=rowManager.rowRevert()>Revert</li> <li ng-click=rowManager.rowDelete()>Delete</li> </ul> </div> </div>";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "<span class=sp-grid-data-view>{{row[headerColumn.id]}}</span>";

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<section class=nb-paging> <div class=nb-paging-wrap> <div class=nb-paging-first><button ng-click=gotoPage(1)>처음</button></div> <div class=nb-paging-prev><button ng-click=prevPage()>이전</button></div> <ul class=nb-paging-blocks> <li ng-repeat=\"page in getPageBlock()\"><a href=javascript:void(0); ng-class=\"currentPage == page ? 'on' : ''\" ng-click=gotoPage(page)>{{page}}</a></li> </ul> <div class=nb-paging-next><button ng-click=nextPage()>다음</button></div> <div class=nb-paging-last><button ng-click=gotoPage(totalPage)>마지막</button></div> <div class=nb-paging-info> {{currentPage}} / {{totalPage}} Page Total Record : {{totalRecordCount}} </div> </div> </section>";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

function SpGrid( SpGridConstant, $templateCache ){

    function SpGrid( gridOptions ){
        var _self = this;

        this._defaultOptions = {
            editMode  : false,
            columnDef : [],
            dataset   : [],
            createDataset : [],
            registerFunction : [],
            gridSize : {
                width  : "auto",
                height : "300px"
            },
            filterOptions : {
                query : ""
            },
            pagingOptions : {
                currentPage : 1,
                pageSize    : 10
            },
            validateCallback : function( message ){
                alert(message);
            }

        };



        this._gridOptions     = angular.extend( this._defaultOptions, gridOptions );

        this._originalDataset = angular.copy( this._gridOptions.dataset );

        this.pageDataset      = angular.copy( this._gridOptions.dataset);

        this.status = "";

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

    SpGrid.prototype.init = function(){
        var _columns = this.getColumnDef();


        if( this._gridOptions.editMode ){
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
            angular.forEach( _columns, function( _column){
                if( !_column.hasOwnProperty("type") ){
                    _column.type = "data";
                }
            });
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
     * Grid EditMode 리턴
     * @returns {boolean|*}
     */
    SpGrid.prototype.isEditMode = function(){
        return this._gridOptions.editMode;
    };

    /**
     * Grid EditMode 설정
     * @param editMode
     * @returns {SpGrid}
     */
    SpGrid.prototype.setEditMode = function( editMode ){
        this._gridOptions.editMode = editMode;
        return this;
    };

    /**
     * Grid 로우 추가
     */
    SpGrid.prototype.addEmptyRow = function( ){
        var _columns = this.getColumnDef();
        var _row     = {};

        if( this.isStatusChanged() ){
            return;
        }

        for( var i = 0 ; i < _columns.length ; i ++ ){
            _row[_columns[i].id] = "";
        }
        _row.cudFlag = SpGridConstant.CREATE_FLAG;
        this.setStatus("create");
        this.getCreateData().push(_row);
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
/* 22 */
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
        }
    }
}

module.exports = function( app ){
    app.factory("SpGridUtil", SpGridUtil );
};



/***/ }),
/* 23 */
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
        for( var i = 0 ; i < _functions.length ; i ++ ){
            $scope[SpGridUtil.getFunctionName(_functions[i])] = _functions[i]
        }
    }




    init();
}


module.exports = function( app ){
    app.controller("spGridController", spGridController);
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

function spGridBodyController( $scope ){

}

module.exports = function(app){
    app.controller("spGridBodyController",spGridBodyController);
};

/***/ }),
/* 25 */
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
/* 26 */
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
            console.log("spGridHeader");
        }
    }
}

module.exports = function(app){
    app.directive("spGridHeader", spGridHeader);
};

/***/ }),
/* 27 */
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
        }
    }
};


module.exports = function(app){
    app.directive("spGridHeaderRow", spGridHeaderRow);
}

/***/ }),
/* 28 */
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
        }
    }
}

module.exports = function(app){
    app.directive("spGridHeaderColumn", spGridHeaderColumn);
};

/***/ }),
/* 29 */
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




            scope.$watch("gridObject.getPagingOptions()", function(){
                var _currentPage = scope.gridObject.getCurrentPage() || 1;
                var _pageSize    = scope.gridObject.getPageSize();
                scope.start    = (_currentPage-1) * _pageSize;
                scope.pageSize = _pageSize;
                // scope.$rows               = range( scope.gridObject.getData(), scope.start, scope.start + scope.pageSize );
            }, true);


            function openContextMenu( event, index, rowManager ){
                scope.rowManager = rowManager;
                scope.rightClickPosition.currentX = event.pageX + 'px';
                scope.rightClickPosition.currentY = event.pageY + 'px';
                scope.isContextMenuShow = true;
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
/* 30 */
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
                //TODO 그리드 오브젝트를 통해 커스텀 이벤트 등록이 가능하도록 조정 gridObject.gridAction
                console.log(row);
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
                if( !scope.row.hasOwnProperty("cudFlag")  ){
                    scope.row._originalRow = {};
                    //Deep Copy
                    angular.copy(scope.row, scope.row._originalRow);
                    scope.row.cudFlag      = SpGridConstant.UPDATE_FLAG;
                }

                scope.row.__isTempSave = false;
                scope.gridObject.setStatus("edit");
                scope.$broadcast("changeMode");
            };

            /**
             * Grid Data Row ViewMode 변경
             */
            scope.rowRevert = function(){
                //Deep Copy
                if( scope.row.cudFlag == SpGridConstant.CREATE_FLAG ){
                    scope.gridObject.getCreateData().splice(0,1);
                } else {
                    angular.copy(scope.row._originalRow, scope.row);
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
                scope.row.cudFlag = SpGridConstant.DELETE_FLAG;
            };

            scope.isRowEditting = function(){
                if( scope.row.hasOwnProperty("cudFlag")
                    && scope.row.cudFlag == SpGridConstant.UPDATE_FLAG ){
                    return true;
                }
                return false;
            };

            scope.isRowAdding = function(){
                if( scope.row.hasOwnProperty("cudFlag")
                    && scope.row.cudFlag == SpGridConstant.CREATE_FLAG ){
                    return true;
                }
                return false;
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
             *
             * @returns {boolean}
             */
            scope.validate = function(){
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

              /*  var _form = scope['rowForm' + scope.$index];
                if( _form.$dirty ){
                    scope.gridObject.getValidateCallback()("변경된 내용이 없습니다");
                }*/

                if( _invalidArray.length > 0 ){
                    scope.gridObject.getValidateCallback()(_invalidArray[0]);
                    return false;
                } else {
                    if( scope.row.hasOwnProperty("cudFlag") &&
                        scope.row.cudFlag == SpGridConstant.CREATE_FLAG ){
                        scope.gridObject.getData().unshift(
                            scope.gridObject.getCreateData().splice(0,1)[0]
                        );
                    }
                    scope.row.__valid = true;
                    scope.row.__isTempSave = true;
                }



                scope.gridObject.setStatus("");
                scope.$broadcast("changeMode");

                return true;
            };

        }
    }
};


module.exports = function(app){
    app.directive("spGridDataRow", spGridDataRow);
};

/***/ }),
/* 31 */
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


            var _pageSize = scope.gridObject.getPageSize();
            var _currentPage = scope.gridObject.getCurrentPage() || 1;
            if( scope.isTypeRowno() ){
                    scope.displayData = (_pageSize * (_currentPage-1)) + (scope.$parent.$index + 1);
            }

            if( scope.isTypeData() ){
                //data인지 순수 html 바인딩인지 구분해서 처리
                scope.displayData = scope.row[_headerColumn.id];

            }

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
                if( scope.row.hasOwnProperty("cudFlag") && scope.type == "data"){
                    if( scope.row.cudFlag == SpGridConstant.CREATE_FLAG && !scope.isTempSave()){
                        editMode();
                        scope.scrollTop();
                        return;
                    } else if ( scope.row.cudFlag == SpGridConstant.UPDATE_FLAG &&
                            _headerColumn.hasOwnProperty("editType") && !scope.isTempSave() ){
                        editMode();
                        return;
                    }
                }
                viewMode();
            }




            function editMode(){
                var _gridDataView    = null;
                var _typeMap = {
                    "text" : $templateCache.get(SpGridConstant.template.EDIT_INPUT),
                    "checkbox" : $templateCache.get(SpGridConstant.template.EDIT_CHECKBOX)
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
                            scope.checkbox = {};
                            scope.checkbox.trueValue = _editType.trueValue;
                            scope.checkbox.falseValue = _editType.falseValue;
                            scope.checkbox.label = "";
                        }
                    }

                }
                _gridDataView.replaceWith(
                    $compile(_typeMap[_typeName] )(scope)
                );

                element.focus();
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
/* 32 */
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
/* 33 */
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
                scope.totalPage        = Math.ceil( scope.totalRecordCount / scope.pageSize );
            },true);


            scope.currentPage      = 1;
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzM4OTFmZWVkZTJjYWVmYzlhYzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3R5bGVzaGVldHMvU3BHcmlkLmNzcz81NTI5Iiwid2VicGFjazovLy8uL3B1YmxpYy9zdHlsZXNoZWV0cy9TcEdyaWQuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9udGF3ZXNvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NwR3JpZENvbnN0YW50LmpzIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZS9TcEdyaWQudG1wbC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZS9TcEdyaWRIZWFkZXIudG1wbC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZS9TcEdyaWRIZWFkZXJSb3cudG1wbC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZS9TcEdyaWRIZWFkZXJDb2x1bW4udG1wbC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZS9TcEdyaWRCb2R5LnRtcGwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGUvU3BHcmlkRGF0YVJvdy50bXBsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlL1NwR3JpZERhdGFDb2x1bW4udG1wbC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZS9TcEdyaWREYXRhUm93QnRuR3JvdXAudG1wLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlL1NwR3JpZEVkaXRJbnB1dC50bXBsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlL1NwR3JpZEVkaXRDaGVja0JveC50bXBsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlL1NwR3JpZERhdGFDb250ZXh0TWVudS50bXBsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlL1NwR3JpZERhdGFWaWV3LnRtcGwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGUvU3BHcmlkUGFnaW5nLnRtcGwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvZmFjdG9yaWVzL1NwR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmFjdG9yaWVzL1NwR3JpZFV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL3NwR3JpZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL3NwR3JpZEJvZHlDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL3NwR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9zcEdyaWRIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvc3BHcmlkSGVhZGVyUm93LmpzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL3NwR3JpZEhlYWRlckNvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9zcEdyaWRCb2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL3NwR3JpZERhdGFSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvc3BHcmlkRGF0YUNvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy91dGlsL3NwVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9zcEdyaWRQYWdpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EseUJBQXlCO0FBQ3pCO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDbExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEMsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsRTs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7OztBQUdiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUF1QyxlQUFlO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6IlNwR3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGMzODkxZmVlZGUyY2FlZmM5YWM2IiwicmVxdWlyZShcIi4uL3B1YmxpYy9zdHlsZXNoZWV0cy9TcEdyaWQuY3NzXCIpO1xyXG5yZXF1aXJlKFwiZm9udGF3ZXNvbWVcIik7XHJcbi8vIHZhciBhbmd1bGFyID0gcmVxdWlyZShcImFuZ3VsYXJcIik7XHJcblxyXG5cclxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKFwic3BHcmlkXCIsIFtdKTtcclxuXHJcblxyXG5hcHAuY29uc3RhbnQoXCJTcEdyaWRDb25zdGFudFwiLCByZXF1aXJlKFwiLi9TcEdyaWRDb25zdGFudFwiKSk7XHJcblxyXG5hcHAucnVuKCBbJyR0ZW1wbGF0ZUNhY2hlJywgJ1NwR3JpZENvbnN0YW50JywgZnVuY3Rpb24oICR0ZW1wbGF0ZUNhY2hlLCBTcEdyaWRDb25zdGFudCApe1xyXG5cclxuICAgICR0ZW1wbGF0ZUNhY2hlLnB1dCggU3BHcmlkQ29uc3RhbnQudGVtcGxhdGUuU1BfR1JJRCwgcmVxdWlyZSggXCIuL3RlbXBsYXRlL1NwR3JpZC50bXBsLmh0bWxcIikpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR3JpZCBIZWFkZXJcclxuICAgICAqL1xyXG4gICAgJHRlbXBsYXRlQ2FjaGUucHV0KCBTcEdyaWRDb25zdGFudC50ZW1wbGF0ZS5TUF9HUklEX0hFQURFUiAgICAgICAgICAsIHJlcXVpcmUoIFwiLi90ZW1wbGF0ZS9TcEdyaWRIZWFkZXIudG1wbC5odG1sXCIgKSk7XHJcbiAgICAkdGVtcGxhdGVDYWNoZS5wdXQoIFNwR3JpZENvbnN0YW50LnRlbXBsYXRlLlNQX0dSSURfSEVBREVSX1JPVyAgICAgICwgcmVxdWlyZSggXCIuL3RlbXBsYXRlL1NwR3JpZEhlYWRlclJvdy50bXBsLmh0bWxcIikpO1xyXG4gICAgJHRlbXBsYXRlQ2FjaGUucHV0KCBTcEdyaWRDb25zdGFudC50ZW1wbGF0ZS5TUF9HUklEX0hFQURFUl9DT0xVTU4gICAsIHJlcXVpcmUoXCIuL3RlbXBsYXRlL1NwR3JpZEhlYWRlckNvbHVtbi50bXBsLmh0bWxcIikpO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdyaWQgQm9keVxyXG4gICAgICovXHJcbiAgICAkdGVtcGxhdGVDYWNoZS5wdXQoIFNwR3JpZENvbnN0YW50LnRlbXBsYXRlLlNQX0dSSURfQk9EWSAgICAgICAgLCByZXF1aXJlKFwiLi90ZW1wbGF0ZS9TcEdyaWRCb2R5LnRtcGwuaHRtbFwiKSk7XHJcbiAgICAkdGVtcGxhdGVDYWNoZS5wdXQoIFNwR3JpZENvbnN0YW50LnRlbXBsYXRlLlNQX0dSSURfREFUQV9ST1cgICAgLCByZXF1aXJlKFwiLi90ZW1wbGF0ZS9TcEdyaWREYXRhUm93LnRtcGwuaHRtbFwiKSk7XHJcbiAgICAkdGVtcGxhdGVDYWNoZS5wdXQoIFNwR3JpZENvbnN0YW50LnRlbXBsYXRlLlNQX0dSSURfREFUQV9DT0xVTU4gLCByZXF1aXJlKFwiLi90ZW1wbGF0ZS9TcEdyaWREYXRhQ29sdW1uLnRtcGwuaHRtbFwiKSk7XHJcbiAgICAkdGVtcGxhdGVDYWNoZS5wdXQoIFNwR3JpZENvbnN0YW50LnRlbXBsYXRlLlNQX0dSSURfREFUQV9ST1dfQlROX0dST1VQLCByZXF1aXJlKFwiLi90ZW1wbGF0ZS9TcEdyaWREYXRhUm93QnRuR3JvdXAudG1wLmh0bWxcIikpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR3JpZCBVdGlsXHJcbiAgICAgKi9cclxuICAgICR0ZW1wbGF0ZUNhY2hlLnB1dCggU3BHcmlkQ29uc3RhbnQudGVtcGxhdGUuRURJVF9JTlBVVCAgLCByZXF1aXJlKFwiLi90ZW1wbGF0ZS9TcEdyaWRFZGl0SW5wdXQudG1wbC5odG1sXCIpKTtcclxuICAgICR0ZW1wbGF0ZUNhY2hlLnB1dCggU3BHcmlkQ29uc3RhbnQudGVtcGxhdGUuRURJVF9DSEVDS0JPWCwgcmVxdWlyZShcIi4vdGVtcGxhdGUvU3BHcmlkRWRpdENoZWNrQm94LnRtcGwuaHRtbFwiKSk7XHJcbiAgICAkdGVtcGxhdGVDYWNoZS5wdXQoIFNwR3JpZENvbnN0YW50LnRlbXBsYXRlLkNPTlRFWFRfTUVOVSwgcmVxdWlyZShcIi4vdGVtcGxhdGUvU3BHcmlkRGF0YUNvbnRleHRNZW51LnRtcGwuaHRtbFwiKSk7XHJcbiAgICAkdGVtcGxhdGVDYWNoZS5wdXQoIFNwR3JpZENvbnN0YW50LnRlbXBsYXRlLkRBVEFfVklFVyAgICwgcmVxdWlyZShcIi4vdGVtcGxhdGUvU3BHcmlkRGF0YVZpZXcudG1wbC5odG1sXCIpKTtcclxuXHJcbiAgICAkdGVtcGxhdGVDYWNoZS5wdXQoIFNwR3JpZENvbnN0YW50LnRlbXBsYXRlLlNQX0dSSURfUEFHSU5HLCByZXF1aXJlKFwiLi90ZW1wbGF0ZS9TcEdyaWRQYWdpbmcudG1wbC5odG1sXCIpKTtcclxuXHJcbn1dKTtcclxuXHJcbiAgICByZXF1aXJlKFwiLi9mYWN0b3JpZXMvU3BHcmlkXCIpKGFwcCk7XHJcbiAgICByZXF1aXJlKFwiLi9mYWN0b3JpZXMvU3BHcmlkVXRpbFwiKShhcHApXHJcbiAgICByZXF1aXJlKFwiLi9jb250cm9sbGVycy9zcEdyaWRDb250cm9sbGVyXCIpKGFwcCk7XHJcbiAgICByZXF1aXJlKFwiLi9jb250cm9sbGVycy9zcEdyaWRCb2R5Q29udHJvbGxlclwiKShhcHApO1xyXG4gICAgcmVxdWlyZShcIi4vZGlyZWN0aXZlcy9zcEdyaWRcIikoYXBwKTtcclxuICAgIHJlcXVpcmUoXCIuL2RpcmVjdGl2ZXMvc3BHcmlkSGVhZGVyXCIpKGFwcCk7XHJcbiAgICByZXF1aXJlKFwiLi9kaXJlY3RpdmVzL3NwR3JpZEhlYWRlclJvd1wiKShhcHApO1xyXG4gICAgcmVxdWlyZShcIi4vZGlyZWN0aXZlcy9zcEdyaWRIZWFkZXJDb2x1bW5cIikoYXBwKTtcclxuICAgIHJlcXVpcmUoXCIuL2RpcmVjdGl2ZXMvc3BHcmlkQm9keVwiKShhcHApO1xyXG4gICAgcmVxdWlyZShcIi4vZGlyZWN0aXZlcy9zcEdyaWREYXRhUm93XCIpKGFwcCk7XHJcbiAgICAvLyByZXF1aXJlKFwiLi9kaXJlY3RpdmVzL3NwR3JpZERhdGFDb250ZXh0TWVudVwiKShhcHApO1xyXG4gICAgcmVxdWlyZShcIi4vZGlyZWN0aXZlcy9zcEdyaWREYXRhQ29sdW1uXCIpKGFwcCk7XHJcbiAgICByZXF1aXJlKFwiLi9kaXJlY3RpdmVzL3V0aWwvc3BVdGlsXCIpKGFwcCk7XHJcbiAgICByZXF1aXJlKFwiLi9kaXJlY3RpdmVzL3NwR3JpZFBhZ2luZ1wiKShhcHApO1xyXG5cclxuXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9TcEdyaWQuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL1NwR3JpZC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vU3BHcmlkLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvc3R5bGVzaGVldHMvU3BHcmlkLmNzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3AtZ3JpZC13cmFwe1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3cteCA6IHNjcm9sbDtcXHJcXG59XFxyXFxuLnNwLWdyaWQtd3JhcCA+IC5zcC1ncmlkID4gLnNwLWdyaWQtYm9keVxcclxcbntcXHJcXG4gICAgcG9zaXRpb24gOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNwLWdyaWQgLnNwLWdyaWQtZGF0YS1jb250ZXh0LW1lbnUtYmFja2Ryb3B7XFxyXFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcclxcbiAgICB0b3A6MDtcXHJcXG4gICAgbGVmdDowO1xcclxcbiAgICByaWdodDowO1xcclxcbiAgICBib3R0b206MDtcXHJcXG59XFxyXFxuLnNwLWdyaWQgLnNwLWdyaWQtZGF0YS1jb250ZXh0LW1lbnUtd3JhcHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3AtZ3JpZCAuc3AtZ3JpZC1kYXRhLWNvbnRleHQtbWVudS13cmFwID4gLnNwLWdyaWQtZGF0YS1jb250ZXh0LW1lbnV7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuLnNwLWdyaWQgLnNwLWdyaWQtZGF0YS1jb250ZXh0LW1lbnUtd3JhcCA+IC5zcC1ncmlkLWRhdGEtY29udGV4dC1tZW51ID4gbGkge1xcclxcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRiNGI0YjtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI2ZmZiwgI2ZlZmVmZSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgjZmZmLCAjZmVmZWZlKTtcXHJcXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoI2ZmZiwgI2ZlZmVmZSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmZmLCAjZmVmZWZlKTtcXHJcXG4gICAgYm94LXNoYWRvdyA6IDFweCAxcHggMXB4ICM0YjRiNGI7XFxyXFxufVxcclxcblxcclxcbi5zcC1ncmlkIC5zcC1ncmlkLWhlYWRlci1jb2x1bW57XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbn1cXHJcXG5bY2xhc3NePXNwLWdyaWQtb3JkZXJde1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxyXFxufVxcclxcbi5zcC1ncmlkIC5zcC1ncmlkLW9yZGVyLWFzY3tcXHJcXG4gICAgdG9wOiAxMnB4O1xcclxcbn1cXHJcXG4uc3AtZ3JpZCAuc3AtZ3JpZC1vcmRlci1kZXNje1xcclxcbiAgICBib3R0b206IDEycHg7XFxyXFxufVxcclxcbkBtZWRpYSggbWluLXdpZHRoIDogNTAxcHggKXtcXHJcXG4gICAgLnNwLWdyaWR7XFxyXFxuICAgICAgICB3aWR0aDoxMDAlO1xcclxcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjYWJhYmFiO1xcclxcbiAgICAgICAgbWluLWhlaWdodDozMDBweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6dGFibGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNwLWdyaWQgPiAuc3AtZ3JpZC1oZWFkZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OjUwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLnNwLWdyaWQgPiAuc3AtZ3JpZC1oZWFkZXIgPiAuc3AtZ3JpZC1oZWFkZXItcm93e1xcclxcbiAgICAgICAgZGlzcGxheTp0YWJsZS1yb3c7XFxyXFxuICAgICAgICBoZWlnaHQ6NTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuc3AtZ3JpZCA+IC5zcC1ncmlkLWhlYWRlciA+IC5zcC1ncmlkLWhlYWRlci1yb3cgIC5zcC1ncmlkLWhlYWRlci1jb2x1bW4ge1xcclxcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2FiYWJhYjtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGRpc3BsYXkgOiB0YWJsZS1jZWxsO1xcclxcbiAgICAgICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXHJcXG4gICAgICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYmFiYWI7XFxyXFxuICAgICAgICBmb250LXNpemU6MTRweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc3AtZ3JpZCA+IC5zcC1ncmlkLWJvZHkge1xcclxcbiAgICAgICAgb3ZlcmZsb3cteTpzY3JvbGw7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNwLWdyaWQgPiAuc3AtZ3JpZC1ib2R5ID4gLnNwLWdyaWQtZGF0YS1yb3d7XFxyXFxuICAgICAgICBkaXNwbGF5OnRhYmxlLXJvdztcXHJcXG4gICAgICAgIGhlaWdodDo1MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zcC1ncmlkID4gLnNwLWdyaWQtYm9keSA+IC5zcC1ncmlkLWRhdGEtcm93ICAuc3AtZ3JpZC1kYXRhLWNvbHVtbntcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNhYmFiYWI7XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FiYWJhYjtcXHJcXG4gICAgICAgIGNvbG9yOiM4ODg7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBkaXNwbGF5IDogdGFibGUtY2VsbDtcXHJcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToxM3B4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zcC1ncmlkID4gLnNwLWdyaWQtYm9keSA+IC5zcC1ncmlkLWRhdGEtcm93ICAuc3AtZ3JpZC1kYXRhLWNvbHVtbiA+IC5zcC1ncmlkLWRhdGF7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcclxcbiAgICAgICAgYm94LXNpemluZzpib3JkZXItYm94O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zcC1ncmlkLWRhdGEgPiAuc3AtZ3JpZC1kYXRhLWh0bWx7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcXHJcXG4gICAgfVxcclxcbiAgICAuc3AtZ3JpZC1kYXRhLWhlYWRlcntcXHJcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKCBtYXgtd2lkdGggOiA1MDBweCApe1xcclxcbiAgICAuc3AtZ3JpZC13cmFwe1xcclxcbiAgICAgICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xcclxcbiAgICB9XFxyXFxuICAgIC5zcC1ncmlke1xcclxcbiAgICAgICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgI2FiYWJhYjtcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6MzAwcHg7XFxyXFxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zcC1ncmlkID4gLnNwLWdyaWQtaGVhZGVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc3AtZ3JpZCA+IC5zcC1ncmlkLWJvZHkge1xcclxcbiAgICAgICAgb3ZlcmZsb3cteTpzY3JvbGw7XFxyXFxuICAgICAgICBwYWRkaW5nOjEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNwLWdyaWQgPiAuc3AtZ3JpZC1ib2R5ID4gLnNwLWdyaWQtZGF0YS1yb3d7XFxyXFxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xcclxcbiAgICAgICAgaGVpZ2h0OmF1dG87XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOjMwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNwLWdyaWQgPiAuc3AtZ3JpZC1ib2R5ID4gLnNwLWdyaWQtZGF0YS1yb3cgIC5zcC1ncmlkLWRhdGEtY29sdW1ue1xcclxcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXHJcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2FiYWJhYjtcXHJcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNhYmFiYWI7XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FiYWJhYjtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGRpc3BsYXkgOiBibG9jaztcXHJcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcXHJcXG4gICAgICAgIG1pbi13aWR0aDoxMDAlICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgYm94LXNpemluZzpib3JkZXItYm94O1xcclxcbiAgICAgICAgZm9udC1zaXplOjEzcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNwLWdyaWQgPiAuc3AtZ3JpZC1ib2R5ID4gLnNwLWdyaWQtZGF0YS1yb3d7XFxyXFxuICAgICAgICBib3JkZXItdG9wIDogMXB4IHNvbGlkICNhYmFiYWI7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNwLWdyaWQgPiAuc3AtZ3JpZC1ib2R5ID4gLnNwLWdyaWQtZGF0YS1yb3cgLnNwLWdyaWQtZGF0YS1jb2x1bW4gPiAuc3AtZ3JpZC1kYXRhLWhlYWRlcixcXHJcXG4gICAgLnNwLWdyaWQgPiAuc3AtZ3JpZC1ib2R5ID4gLnNwLWdyaWQtZGF0YS1yb3cgIC5zcC1ncmlkLWRhdGEtY29sdW1uID4gLnNwLWdyaWQtZGF0YXtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxyXFxuICAgICAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNwLWdyaWQgPiAuc3AtZ3JpZC1ib2R5ID4gLnNwLWdyaWQtZGF0YS1yb3cgIC5zcC1ncmlkLWRhdGEtY29sdW1uID4gLnNwLWdyaWQtZGF0YS1oZWFkZXJ7XFxyXFxuICAgICAgICB3aWR0aDoyMCU7XFxyXFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XFxyXFxuICAgIH1cXHJcXG4gICAgLnNwLWdyaWQgPiAuc3AtZ3JpZC1ib2R5ID4gLnNwLWdyaWQtZGF0YS1yb3cgIC5zcC1ncmlkLWRhdGEtY29sdW1uID4gLnNwLWdyaWQtZGF0YSB7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9wdWJsaWMvc3R5bGVzaGVldHMvU3BHcmlkLmNzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24pIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBmYT1mdW5jdGlvbihpKXtyZXR1cm4gZmFbaS5yZXBsYWNlKC8tLi9nLGZ1bmN0aW9uKHgpe3JldHVybiB4LnN1YnN0cigxKS50b1VwcGVyQ2FzZSgpfSldfTtmYS5nbGFzcz1cIlxcdWYwMDBcIjtmYS5tdXNpYz1cIlxcdWYwMDFcIjtmYS5zZWFyY2g9XCJcXHVmMDAyXCI7ZmEuZW52ZWxvcGVPPVwiXFx1ZjAwM1wiO2ZhLmhlYXJ0PVwiXFx1ZjAwNFwiO2ZhLnN0YXI9XCJcXHVmMDA1XCI7ZmEuc3Rhck89XCJcXHVmMDA2XCI7ZmEudXNlcj1cIlxcdWYwMDdcIjtmYS5maWxtPVwiXFx1ZjAwOFwiO2ZhLnRoTGFyZ2U9XCJcXHVmMDA5XCI7ZmEudGg9XCJcXHVmMDBhXCI7ZmEudGhMaXN0PVwiXFx1ZjAwYlwiO2ZhLmNoZWNrPVwiXFx1ZjAwY1wiO2ZhLnJlbW92ZT1cIlxcdWYwMGRcIjtmYS5jbG9zZT1cIlxcdWYwMGRcIjtmYS50aW1lcz1cIlxcdWYwMGRcIjtmYS5zZWFyY2hQbHVzPVwiXFx1ZjAwZVwiO2ZhLnNlYXJjaE1pbnVzPVwiXFx1ZjAxMFwiO2ZhLnBvd2VyT2ZmPVwiXFx1ZjAxMVwiO2ZhLnNpZ25hbD1cIlxcdWYwMTJcIjtmYS5nZWFyPVwiXFx1ZjAxM1wiO2ZhLmNvZz1cIlxcdWYwMTNcIjtmYS50cmFzaE89XCJcXHVmMDE0XCI7ZmEuaG9tZT1cIlxcdWYwMTVcIjtmYS5maWxlTz1cIlxcdWYwMTZcIjtmYS5jbG9ja089XCJcXHVmMDE3XCI7ZmEucm9hZD1cIlxcdWYwMThcIjtmYS5kb3dubG9hZD1cIlxcdWYwMTlcIjtmYS5hcnJvd0NpcmNsZU9Eb3duPVwiXFx1ZjAxYVwiO2ZhLmFycm93Q2lyY2xlT1VwPVwiXFx1ZjAxYlwiO2ZhLmluYm94PVwiXFx1ZjAxY1wiO2ZhLnBsYXlDaXJjbGVPPVwiXFx1ZjAxZFwiO2ZhLnJvdGF0ZVJpZ2h0PVwiXFx1ZjAxZVwiO2ZhLnJlcGVhdD1cIlxcdWYwMWVcIjtmYS5yZWZyZXNoPVwiXFx1ZjAyMVwiO2ZhLmxpc3RBbHQ9XCJcXHVmMDIyXCI7ZmEubG9jaz1cIlxcdWYwMjNcIjtmYS5mbGFnPVwiXFx1ZjAyNFwiO2ZhLmhlYWRwaG9uZXM9XCJcXHVmMDI1XCI7ZmEudm9sdW1lT2ZmPVwiXFx1ZjAyNlwiO2ZhLnZvbHVtZURvd249XCJcXHVmMDI3XCI7ZmEudm9sdW1lVXA9XCJcXHVmMDI4XCI7ZmEucXJjb2RlPVwiXFx1ZjAyOVwiO2ZhLmJhcmNvZGU9XCJcXHVmMDJhXCI7ZmEudGFnPVwiXFx1ZjAyYlwiO2ZhLnRhZ3M9XCJcXHVmMDJjXCI7ZmEuYm9vaz1cIlxcdWYwMmRcIjtmYS5ib29rbWFyaz1cIlxcdWYwMmVcIjtmYS5wcmludD1cIlxcdWYwMmZcIjtmYS5jYW1lcmE9XCJcXHVmMDMwXCI7ZmEuZm9udD1cIlxcdWYwMzFcIjtmYS5ib2xkPVwiXFx1ZjAzMlwiO2ZhLml0YWxpYz1cIlxcdWYwMzNcIjtmYS50ZXh0SGVpZ2h0PVwiXFx1ZjAzNFwiO2ZhLnRleHRXaWR0aD1cIlxcdWYwMzVcIjtmYS5hbGlnbkxlZnQ9XCJcXHVmMDM2XCI7ZmEuYWxpZ25DZW50ZXI9XCJcXHVmMDM3XCI7ZmEuYWxpZ25SaWdodD1cIlxcdWYwMzhcIjtmYS5hbGlnbkp1c3RpZnk9XCJcXHVmMDM5XCI7ZmEubGlzdD1cIlxcdWYwM2FcIjtmYS5kZWRlbnQ9XCJcXHVmMDNiXCI7ZmEub3V0ZGVudD1cIlxcdWYwM2JcIjtmYS5pbmRlbnQ9XCJcXHVmMDNjXCI7ZmEudmlkZW9DYW1lcmE9XCJcXHVmMDNkXCI7ZmEucGhvdG89XCJcXHVmMDNlXCI7ZmEuaW1hZ2U9XCJcXHVmMDNlXCI7ZmEucGljdHVyZU89XCJcXHVmMDNlXCI7ZmEucGVuY2lsPVwiXFx1ZjA0MFwiO2ZhLm1hcE1hcmtlcj1cIlxcdWYwNDFcIjtmYS5hZGp1c3Q9XCJcXHVmMDQyXCI7ZmEudGludD1cIlxcdWYwNDNcIjtmYS5lZGl0PVwiXFx1ZjA0NFwiO2ZhLnBlbmNpbFNxdWFyZU89XCJcXHVmMDQ0XCI7ZmEuc2hhcmVTcXVhcmVPPVwiXFx1ZjA0NVwiO2ZhLmNoZWNrU3F1YXJlTz1cIlxcdWYwNDZcIjtmYS5hcnJvd3M9XCJcXHVmMDQ3XCI7ZmEuc3RlcEJhY2t3YXJkPVwiXFx1ZjA0OFwiO2ZhLmZhc3RCYWNrd2FyZD1cIlxcdWYwNDlcIjtmYS5iYWNrd2FyZD1cIlxcdWYwNGFcIjtmYS5wbGF5PVwiXFx1ZjA0YlwiO2ZhLnBhdXNlPVwiXFx1ZjA0Y1wiO2ZhLnN0b3A9XCJcXHVmMDRkXCI7ZmEuZm9yd2FyZD1cIlxcdWYwNGVcIjtmYS5mYXN0Rm9yd2FyZD1cIlxcdWYwNTBcIjtmYS5zdGVwRm9yd2FyZD1cIlxcdWYwNTFcIjtmYS5lamVjdD1cIlxcdWYwNTJcIjtmYS5jaGV2cm9uTGVmdD1cIlxcdWYwNTNcIjtmYS5jaGV2cm9uUmlnaHQ9XCJcXHVmMDU0XCI7ZmEucGx1c0NpcmNsZT1cIlxcdWYwNTVcIjtmYS5taW51c0NpcmNsZT1cIlxcdWYwNTZcIjtmYS50aW1lc0NpcmNsZT1cIlxcdWYwNTdcIjtmYS5jaGVja0NpcmNsZT1cIlxcdWYwNThcIjtmYS5xdWVzdGlvbkNpcmNsZT1cIlxcdWYwNTlcIjtmYS5pbmZvQ2lyY2xlPVwiXFx1ZjA1YVwiO2ZhLmNyb3NzaGFpcnM9XCJcXHVmMDViXCI7ZmEudGltZXNDaXJjbGVPPVwiXFx1ZjA1Y1wiO2ZhLmNoZWNrQ2lyY2xlTz1cIlxcdWYwNWRcIjtmYS5iYW49XCJcXHVmMDVlXCI7ZmEuYXJyb3dMZWZ0PVwiXFx1ZjA2MFwiO2ZhLmFycm93UmlnaHQ9XCJcXHVmMDYxXCI7ZmEuYXJyb3dVcD1cIlxcdWYwNjJcIjtmYS5hcnJvd0Rvd249XCJcXHVmMDYzXCI7ZmEubWFpbEZvcndhcmQ9XCJcXHVmMDY0XCI7ZmEuc2hhcmU9XCJcXHVmMDY0XCI7ZmEuZXhwYW5kPVwiXFx1ZjA2NVwiO2ZhLmNvbXByZXNzPVwiXFx1ZjA2NlwiO2ZhLnBsdXM9XCJcXHVmMDY3XCI7ZmEubWludXM9XCJcXHVmMDY4XCI7ZmEuYXN0ZXJpc2s9XCJcXHVmMDY5XCI7ZmEuZXhjbGFtYXRpb25DaXJjbGU9XCJcXHVmMDZhXCI7ZmEuZ2lmdD1cIlxcdWYwNmJcIjtmYS5sZWFmPVwiXFx1ZjA2Y1wiO2ZhLmZpcmU9XCJcXHVmMDZkXCI7ZmEuZXllPVwiXFx1ZjA2ZVwiO2ZhLmV5ZVNsYXNoPVwiXFx1ZjA3MFwiO2ZhLndhcm5pbmc9XCJcXHVmMDcxXCI7ZmEuZXhjbGFtYXRpb25UcmlhbmdsZT1cIlxcdWYwNzFcIjtmYS5wbGFuZT1cIlxcdWYwNzJcIjtmYS5jYWxlbmRhcj1cIlxcdWYwNzNcIjtmYS5yYW5kb209XCJcXHVmMDc0XCI7ZmEuY29tbWVudD1cIlxcdWYwNzVcIjtmYS5tYWduZXQ9XCJcXHVmMDc2XCI7ZmEuY2hldnJvblVwPVwiXFx1ZjA3N1wiO2ZhLmNoZXZyb25Eb3duPVwiXFx1ZjA3OFwiO2ZhLnJldHdlZXQ9XCJcXHVmMDc5XCI7ZmEuc2hvcHBpbmdDYXJ0PVwiXFx1ZjA3YVwiO2ZhLmZvbGRlcj1cIlxcdWYwN2JcIjtmYS5mb2xkZXJPcGVuPVwiXFx1ZjA3Y1wiO2ZhLmFycm93c1Y9XCJcXHVmMDdkXCI7ZmEuYXJyb3dzSD1cIlxcdWYwN2VcIjtmYS5iYXJDaGFydE89XCJcXHVmMDgwXCI7ZmEuYmFyQ2hhcnQ9XCJcXHVmMDgwXCI7ZmEudHdpdHRlclNxdWFyZT1cIlxcdWYwODFcIjtmYS5mYWNlYm9va1NxdWFyZT1cIlxcdWYwODJcIjtmYS5jYW1lcmFSZXRybz1cIlxcdWYwODNcIjtmYS5rZXk9XCJcXHVmMDg0XCI7ZmEuZ2VhcnM9XCJcXHVmMDg1XCI7ZmEuY29ncz1cIlxcdWYwODVcIjtmYS5jb21tZW50cz1cIlxcdWYwODZcIjtmYS50aHVtYnNPVXA9XCJcXHVmMDg3XCI7ZmEudGh1bWJzT0Rvd249XCJcXHVmMDg4XCI7ZmEuc3RhckhhbGY9XCJcXHVmMDg5XCI7ZmEuaGVhcnRPPVwiXFx1ZjA4YVwiO2ZhLnNpZ25PdXQ9XCJcXHVmMDhiXCI7ZmEubGlua2VkaW5TcXVhcmU9XCJcXHVmMDhjXCI7ZmEudGh1bWJUYWNrPVwiXFx1ZjA4ZFwiO2ZhLmV4dGVybmFsTGluaz1cIlxcdWYwOGVcIjtmYS5zaWduSW49XCJcXHVmMDkwXCI7ZmEudHJvcGh5PVwiXFx1ZjA5MVwiO2ZhLmdpdGh1YlNxdWFyZT1cIlxcdWYwOTJcIjtmYS51cGxvYWQ9XCJcXHVmMDkzXCI7ZmEubGVtb25PPVwiXFx1ZjA5NFwiO2ZhLnBob25lPVwiXFx1ZjA5NVwiO2ZhLnNxdWFyZU89XCJcXHVmMDk2XCI7ZmEuYm9va21hcmtPPVwiXFx1ZjA5N1wiO2ZhLnBob25lU3F1YXJlPVwiXFx1ZjA5OFwiO2ZhLnR3aXR0ZXI9XCJcXHVmMDk5XCI7ZmEuZmFjZWJvb2tGPVwiXFx1ZjA5YVwiO2ZhLmZhY2Vib29rPVwiXFx1ZjA5YVwiO2ZhLmdpdGh1Yj1cIlxcdWYwOWJcIjtmYS51bmxvY2s9XCJcXHVmMDljXCI7ZmEuY3JlZGl0Q2FyZD1cIlxcdWYwOWRcIjtmYS5mZWVkPVwiXFx1ZjA5ZVwiO2ZhLnJzcz1cIlxcdWYwOWVcIjtmYS5oZGRPPVwiXFx1ZjBhMFwiO2ZhLmJ1bGxob3JuPVwiXFx1ZjBhMVwiO2ZhLmJlbGw9XCJcXHVmMGYzXCI7ZmEuY2VydGlmaWNhdGU9XCJcXHVmMGEzXCI7ZmEuaGFuZE9SaWdodD1cIlxcdWYwYTRcIjtmYS5oYW5kT0xlZnQ9XCJcXHVmMGE1XCI7ZmEuaGFuZE9VcD1cIlxcdWYwYTZcIjtmYS5oYW5kT0Rvd249XCJcXHVmMGE3XCI7ZmEuYXJyb3dDaXJjbGVMZWZ0PVwiXFx1ZjBhOFwiO2ZhLmFycm93Q2lyY2xlUmlnaHQ9XCJcXHVmMGE5XCI7ZmEuYXJyb3dDaXJjbGVVcD1cIlxcdWYwYWFcIjtmYS5hcnJvd0NpcmNsZURvd249XCJcXHVmMGFiXCI7ZmEuZ2xvYmU9XCJcXHVmMGFjXCI7ZmEud3JlbmNoPVwiXFx1ZjBhZFwiO2ZhLnRhc2tzPVwiXFx1ZjBhZVwiO2ZhLmZpbHRlcj1cIlxcdWYwYjBcIjtmYS5icmllZmNhc2U9XCJcXHVmMGIxXCI7ZmEuYXJyb3dzQWx0PVwiXFx1ZjBiMlwiO2ZhLmdyb3VwPVwiXFx1ZjBjMFwiO2ZhLnVzZXJzPVwiXFx1ZjBjMFwiO2ZhLmNoYWluPVwiXFx1ZjBjMVwiO2ZhLmxpbms9XCJcXHVmMGMxXCI7ZmEuY2xvdWQ9XCJcXHVmMGMyXCI7ZmEuZmxhc2s9XCJcXHVmMGMzXCI7ZmEuY3V0PVwiXFx1ZjBjNFwiO2ZhLnNjaXNzb3JzPVwiXFx1ZjBjNFwiO2ZhLmNvcHk9XCJcXHVmMGM1XCI7ZmEuZmlsZXNPPVwiXFx1ZjBjNVwiO2ZhLnBhcGVyY2xpcD1cIlxcdWYwYzZcIjtmYS5zYXZlPVwiXFx1ZjBjN1wiO2ZhLmZsb3BweU89XCJcXHVmMGM3XCI7ZmEuc3F1YXJlPVwiXFx1ZjBjOFwiO2ZhLm5hdmljb249XCJcXHVmMGM5XCI7ZmEucmVvcmRlcj1cIlxcdWYwYzlcIjtmYS5iYXJzPVwiXFx1ZjBjOVwiO2ZhLmxpc3RVbD1cIlxcdWYwY2FcIjtmYS5saXN0T2w9XCJcXHVmMGNiXCI7ZmEuc3RyaWtldGhyb3VnaD1cIlxcdWYwY2NcIjtmYS51bmRlcmxpbmU9XCJcXHVmMGNkXCI7ZmEudGFibGU9XCJcXHVmMGNlXCI7ZmEubWFnaWM9XCJcXHVmMGQwXCI7ZmEudHJ1Y2s9XCJcXHVmMGQxXCI7ZmEucGludGVyZXN0PVwiXFx1ZjBkMlwiO2ZhLnBpbnRlcmVzdFNxdWFyZT1cIlxcdWYwZDNcIjtmYS5nb29nbGVQbHVzU3F1YXJlPVwiXFx1ZjBkNFwiO2ZhLmdvb2dsZVBsdXM9XCJcXHVmMGQ1XCI7ZmEubW9uZXk9XCJcXHVmMGQ2XCI7ZmEuY2FyZXREb3duPVwiXFx1ZjBkN1wiO2ZhLmNhcmV0VXA9XCJcXHVmMGQ4XCI7ZmEuY2FyZXRMZWZ0PVwiXFx1ZjBkOVwiO2ZhLmNhcmV0UmlnaHQ9XCJcXHVmMGRhXCI7ZmEuY29sdW1ucz1cIlxcdWYwZGJcIjtmYS51bnNvcnRlZD1cIlxcdWYwZGNcIjtmYS5zb3J0PVwiXFx1ZjBkY1wiO2ZhLnNvcnREb3duPVwiXFx1ZjBkZFwiO2ZhLnNvcnREZXNjPVwiXFx1ZjBkZFwiO2ZhLnNvcnRVcD1cIlxcdWYwZGVcIjtmYS5zb3J0QXNjPVwiXFx1ZjBkZVwiO2ZhLmVudmVsb3BlPVwiXFx1ZjBlMFwiO2ZhLmxpbmtlZGluPVwiXFx1ZjBlMVwiO2ZhLnJvdGF0ZUxlZnQ9XCJcXHVmMGUyXCI7ZmEudW5kbz1cIlxcdWYwZTJcIjtmYS5sZWdhbD1cIlxcdWYwZTNcIjtmYS5nYXZlbD1cIlxcdWYwZTNcIjtmYS5kYXNoYm9hcmQ9XCJcXHVmMGU0XCI7ZmEudGFjaG9tZXRlcj1cIlxcdWYwZTRcIjtmYS5jb21tZW50Tz1cIlxcdWYwZTVcIjtmYS5jb21tZW50c089XCJcXHVmMGU2XCI7ZmEuZmxhc2g9XCJcXHVmMGU3XCI7ZmEuYm9sdD1cIlxcdWYwZTdcIjtmYS5zaXRlbWFwPVwiXFx1ZjBlOFwiO2ZhLnVtYnJlbGxhPVwiXFx1ZjBlOVwiO2ZhLnBhc3RlPVwiXFx1ZjBlYVwiO2ZhLmNsaXBib2FyZD1cIlxcdWYwZWFcIjtmYS5saWdodGJ1bGJPPVwiXFx1ZjBlYlwiO2ZhLmV4Y2hhbmdlPVwiXFx1ZjBlY1wiO2ZhLmNsb3VkRG93bmxvYWQ9XCJcXHVmMGVkXCI7ZmEuY2xvdWRVcGxvYWQ9XCJcXHVmMGVlXCI7ZmEudXNlck1kPVwiXFx1ZjBmMFwiO2ZhLnN0ZXRob3Njb3BlPVwiXFx1ZjBmMVwiO2ZhLnN1aXRjYXNlPVwiXFx1ZjBmMlwiO2ZhLmJlbGxPPVwiXFx1ZjBhMlwiO2ZhLmNvZmZlZT1cIlxcdWYwZjRcIjtmYS5jdXRsZXJ5PVwiXFx1ZjBmNVwiO2ZhLmZpbGVUZXh0Tz1cIlxcdWYwZjZcIjtmYS5idWlsZGluZ089XCJcXHVmMGY3XCI7ZmEuaG9zcGl0YWxPPVwiXFx1ZjBmOFwiO2ZhLmFtYnVsYW5jZT1cIlxcdWYwZjlcIjtmYS5tZWRraXQ9XCJcXHVmMGZhXCI7ZmEuZmlnaHRlckpldD1cIlxcdWYwZmJcIjtmYS5iZWVyPVwiXFx1ZjBmY1wiO2ZhLmhTcXVhcmU9XCJcXHVmMGZkXCI7ZmEucGx1c1NxdWFyZT1cIlxcdWYwZmVcIjtmYS5hbmdsZURvdWJsZUxlZnQ9XCJcXHVmMTAwXCI7ZmEuYW5nbGVEb3VibGVSaWdodD1cIlxcdWYxMDFcIjtmYS5hbmdsZURvdWJsZVVwPVwiXFx1ZjEwMlwiO2ZhLmFuZ2xlRG91YmxlRG93bj1cIlxcdWYxMDNcIjtmYS5hbmdsZUxlZnQ9XCJcXHVmMTA0XCI7ZmEuYW5nbGVSaWdodD1cIlxcdWYxMDVcIjtmYS5hbmdsZVVwPVwiXFx1ZjEwNlwiO2ZhLmFuZ2xlRG93bj1cIlxcdWYxMDdcIjtmYS5kZXNrdG9wPVwiXFx1ZjEwOFwiO2ZhLmxhcHRvcD1cIlxcdWYxMDlcIjtmYS50YWJsZXQ9XCJcXHVmMTBhXCI7ZmEubW9iaWxlUGhvbmU9XCJcXHVmMTBiXCI7ZmEubW9iaWxlPVwiXFx1ZjEwYlwiO2ZhLmNpcmNsZU89XCJcXHVmMTBjXCI7ZmEucXVvdGVMZWZ0PVwiXFx1ZjEwZFwiO2ZhLnF1b3RlUmlnaHQ9XCJcXHVmMTBlXCI7ZmEuc3Bpbm5lcj1cIlxcdWYxMTBcIjtmYS5jaXJjbGU9XCJcXHVmMTExXCI7ZmEubWFpbFJlcGx5PVwiXFx1ZjExMlwiO2ZhLnJlcGx5PVwiXFx1ZjExMlwiO2ZhLmdpdGh1YkFsdD1cIlxcdWYxMTNcIjtmYS5mb2xkZXJPPVwiXFx1ZjExNFwiO2ZhLmZvbGRlck9wZW5PPVwiXFx1ZjExNVwiO2ZhLnNtaWxlTz1cIlxcdWYxMThcIjtmYS5mcm93bk89XCJcXHVmMTE5XCI7ZmEubWVoTz1cIlxcdWYxMWFcIjtmYS5nYW1lcGFkPVwiXFx1ZjExYlwiO2ZhLmtleWJvYXJkTz1cIlxcdWYxMWNcIjtmYS5mbGFnTz1cIlxcdWYxMWRcIjtmYS5mbGFnQ2hlY2tlcmVkPVwiXFx1ZjExZVwiO2ZhLnRlcm1pbmFsPVwiXFx1ZjEyMFwiO2ZhLmNvZGU9XCJcXHVmMTIxXCI7ZmEubWFpbFJlcGx5QWxsPVwiXFx1ZjEyMlwiO2ZhLnJlcGx5QWxsPVwiXFx1ZjEyMlwiO2ZhLnN0YXJIYWxmRW1wdHk9XCJcXHVmMTIzXCI7ZmEuc3RhckhhbGZGdWxsPVwiXFx1ZjEyM1wiO2ZhLnN0YXJIYWxmTz1cIlxcdWYxMjNcIjtmYS5sb2NhdGlvbkFycm93PVwiXFx1ZjEyNFwiO2ZhLmNyb3A9XCJcXHVmMTI1XCI7ZmEuY29kZUZvcms9XCJcXHVmMTI2XCI7ZmEudW5saW5rPVwiXFx1ZjEyN1wiO2ZhLmNoYWluQnJva2VuPVwiXFx1ZjEyN1wiO2ZhLnF1ZXN0aW9uPVwiXFx1ZjEyOFwiO2ZhLmluZm89XCJcXHVmMTI5XCI7ZmEuZXhjbGFtYXRpb249XCJcXHVmMTJhXCI7ZmEuc3VwZXJzY3JpcHQ9XCJcXHVmMTJiXCI7ZmEuc3Vic2NyaXB0PVwiXFx1ZjEyY1wiO2ZhLmVyYXNlcj1cIlxcdWYxMmRcIjtmYS5wdXp6bGVQaWVjZT1cIlxcdWYxMmVcIjtmYS5taWNyb3Bob25lPVwiXFx1ZjEzMFwiO2ZhLm1pY3JvcGhvbmVTbGFzaD1cIlxcdWYxMzFcIjtmYS5zaGllbGQ9XCJcXHVmMTMyXCI7ZmEuY2FsZW5kYXJPPVwiXFx1ZjEzM1wiO2ZhLmZpcmVFeHRpbmd1aXNoZXI9XCJcXHVmMTM0XCI7ZmEucm9ja2V0PVwiXFx1ZjEzNVwiO2ZhLm1heGNkbj1cIlxcdWYxMzZcIjtmYS5jaGV2cm9uQ2lyY2xlTGVmdD1cIlxcdWYxMzdcIjtmYS5jaGV2cm9uQ2lyY2xlUmlnaHQ9XCJcXHVmMTM4XCI7ZmEuY2hldnJvbkNpcmNsZVVwPVwiXFx1ZjEzOVwiO2ZhLmNoZXZyb25DaXJjbGVEb3duPVwiXFx1ZjEzYVwiO2ZhLmh0bWw1PVwiXFx1ZjEzYlwiO2ZhLmNzczM9XCJcXHVmMTNjXCI7ZmEuYW5jaG9yPVwiXFx1ZjEzZFwiO2ZhLnVubG9ja0FsdD1cIlxcdWYxM2VcIjtmYS5idWxsc2V5ZT1cIlxcdWYxNDBcIjtmYS5lbGxpcHNpc0g9XCJcXHVmMTQxXCI7ZmEuZWxsaXBzaXNWPVwiXFx1ZjE0MlwiO2ZhLnJzc1NxdWFyZT1cIlxcdWYxNDNcIjtmYS5wbGF5Q2lyY2xlPVwiXFx1ZjE0NFwiO2ZhLnRpY2tldD1cIlxcdWYxNDVcIjtmYS5taW51c1NxdWFyZT1cIlxcdWYxNDZcIjtmYS5taW51c1NxdWFyZU89XCJcXHVmMTQ3XCI7ZmEubGV2ZWxVcD1cIlxcdWYxNDhcIjtmYS5sZXZlbERvd249XCJcXHVmMTQ5XCI7ZmEuY2hlY2tTcXVhcmU9XCJcXHVmMTRhXCI7ZmEucGVuY2lsU3F1YXJlPVwiXFx1ZjE0YlwiO2ZhLmV4dGVybmFsTGlua1NxdWFyZT1cIlxcdWYxNGNcIjtmYS5zaGFyZVNxdWFyZT1cIlxcdWYxNGRcIjtmYS5jb21wYXNzPVwiXFx1ZjE0ZVwiO2ZhLnRvZ2dsZURvd249XCJcXHVmMTUwXCI7ZmEuY2FyZXRTcXVhcmVPRG93bj1cIlxcdWYxNTBcIjtmYS50b2dnbGVVcD1cIlxcdWYxNTFcIjtmYS5jYXJldFNxdWFyZU9VcD1cIlxcdWYxNTFcIjtmYS50b2dnbGVSaWdodD1cIlxcdWYxNTJcIjtmYS5jYXJldFNxdWFyZU9SaWdodD1cIlxcdWYxNTJcIjtmYS5ldXJvPVwiXFx1ZjE1M1wiO2ZhLmV1cj1cIlxcdWYxNTNcIjtmYS5nYnA9XCJcXHVmMTU0XCI7ZmEuZG9sbGFyPVwiXFx1ZjE1NVwiO2ZhLnVzZD1cIlxcdWYxNTVcIjtmYS5ydXBlZT1cIlxcdWYxNTZcIjtmYS5pbnI9XCJcXHVmMTU2XCI7ZmEuY255PVwiXFx1ZjE1N1wiO2ZhLnJtYj1cIlxcdWYxNTdcIjtmYS55ZW49XCJcXHVmMTU3XCI7ZmEuanB5PVwiXFx1ZjE1N1wiO2ZhLnJ1YmxlPVwiXFx1ZjE1OFwiO2ZhLnJvdWJsZT1cIlxcdWYxNThcIjtmYS5ydWI9XCJcXHVmMTU4XCI7ZmEud29uPVwiXFx1ZjE1OVwiO2ZhLmtydz1cIlxcdWYxNTlcIjtmYS5iaXRjb2luPVwiXFx1ZjE1YVwiO2ZhLmJ0Yz1cIlxcdWYxNWFcIjtmYS5maWxlPVwiXFx1ZjE1YlwiO2ZhLmZpbGVUZXh0PVwiXFx1ZjE1Y1wiO2ZhLnNvcnRBbHBoYUFzYz1cIlxcdWYxNWRcIjtmYS5zb3J0QWxwaGFEZXNjPVwiXFx1ZjE1ZVwiO2ZhLnNvcnRBbW91bnRBc2M9XCJcXHVmMTYwXCI7ZmEuc29ydEFtb3VudERlc2M9XCJcXHVmMTYxXCI7ZmEuc29ydE51bWVyaWNBc2M9XCJcXHVmMTYyXCI7ZmEuc29ydE51bWVyaWNEZXNjPVwiXFx1ZjE2M1wiO2ZhLnRodW1ic1VwPVwiXFx1ZjE2NFwiO2ZhLnRodW1ic0Rvd249XCJcXHVmMTY1XCI7ZmEueW91dHViZVNxdWFyZT1cIlxcdWYxNjZcIjtmYS55b3V0dWJlPVwiXFx1ZjE2N1wiO2ZhLnhpbmc9XCJcXHVmMTY4XCI7ZmEueGluZ1NxdWFyZT1cIlxcdWYxNjlcIjtmYS55b3V0dWJlUGxheT1cIlxcdWYxNmFcIjtmYS5kcm9wYm94PVwiXFx1ZjE2YlwiO2ZhLnN0YWNrT3ZlcmZsb3c9XCJcXHVmMTZjXCI7ZmEuaW5zdGFncmFtPVwiXFx1ZjE2ZFwiO2ZhLmZsaWNrcj1cIlxcdWYxNmVcIjtmYS5hZG49XCJcXHVmMTcwXCI7ZmEuYml0YnVja2V0PVwiXFx1ZjE3MVwiO2ZhLmJpdGJ1Y2tldFNxdWFyZT1cIlxcdWYxNzJcIjtmYS50dW1ibHI9XCJcXHVmMTczXCI7ZmEudHVtYmxyU3F1YXJlPVwiXFx1ZjE3NFwiO2ZhLmxvbmdBcnJvd0Rvd249XCJcXHVmMTc1XCI7ZmEubG9uZ0Fycm93VXA9XCJcXHVmMTc2XCI7ZmEubG9uZ0Fycm93TGVmdD1cIlxcdWYxNzdcIjtmYS5sb25nQXJyb3dSaWdodD1cIlxcdWYxNzhcIjtmYS5hcHBsZT1cIlxcdWYxNzlcIjtmYS53aW5kb3dzPVwiXFx1ZjE3YVwiO2ZhLmFuZHJvaWQ9XCJcXHVmMTdiXCI7ZmEubGludXg9XCJcXHVmMTdjXCI7ZmEuZHJpYmJibGU9XCJcXHVmMTdkXCI7ZmEuc2t5cGU9XCJcXHVmMTdlXCI7ZmEuZm91cnNxdWFyZT1cIlxcdWYxODBcIjtmYS50cmVsbG89XCJcXHVmMTgxXCI7ZmEuZmVtYWxlPVwiXFx1ZjE4MlwiO2ZhLm1hbGU9XCJcXHVmMTgzXCI7ZmEuZ2l0dGlwPVwiXFx1ZjE4NFwiO2ZhLmdyYXRpcGF5PVwiXFx1ZjE4NFwiO2ZhLnN1bk89XCJcXHVmMTg1XCI7ZmEubW9vbk89XCJcXHVmMTg2XCI7ZmEuYXJjaGl2ZT1cIlxcdWYxODdcIjtmYS5idWc9XCJcXHVmMTg4XCI7ZmEudms9XCJcXHVmMTg5XCI7ZmEud2VpYm89XCJcXHVmMThhXCI7ZmEucmVucmVuPVwiXFx1ZjE4YlwiO2ZhLnBhZ2VsaW5lcz1cIlxcdWYxOGNcIjtmYS5zdGFja0V4Y2hhbmdlPVwiXFx1ZjE4ZFwiO2ZhLmFycm93Q2lyY2xlT1JpZ2h0PVwiXFx1ZjE4ZVwiO2ZhLmFycm93Q2lyY2xlT0xlZnQ9XCJcXHVmMTkwXCI7ZmEudG9nZ2xlTGVmdD1cIlxcdWYxOTFcIjtmYS5jYXJldFNxdWFyZU9MZWZ0PVwiXFx1ZjE5MVwiO2ZhLmRvdENpcmNsZU89XCJcXHVmMTkyXCI7ZmEud2hlZWxjaGFpcj1cIlxcdWYxOTNcIjtmYS52aW1lb1NxdWFyZT1cIlxcdWYxOTRcIjtmYS50dXJraXNoTGlyYT1cIlxcdWYxOTVcIjtmYS50cnk9XCJcXHVmMTk1XCI7ZmEucGx1c1NxdWFyZU89XCJcXHVmMTk2XCI7ZmEuc3BhY2VTaHV0dGxlPVwiXFx1ZjE5N1wiO2ZhLnNsYWNrPVwiXFx1ZjE5OFwiO2ZhLmVudmVsb3BlU3F1YXJlPVwiXFx1ZjE5OVwiO2ZhLndvcmRwcmVzcz1cIlxcdWYxOWFcIjtmYS5vcGVuaWQ9XCJcXHVmMTliXCI7ZmEuaW5zdGl0dXRpb249XCJcXHVmMTljXCI7ZmEuYmFuaz1cIlxcdWYxOWNcIjtmYS51bml2ZXJzaXR5PVwiXFx1ZjE5Y1wiO2ZhLm1vcnRhckJvYXJkPVwiXFx1ZjE5ZFwiO2ZhLmdyYWR1YXRpb25DYXA9XCJcXHVmMTlkXCI7ZmEueWFob289XCJcXHVmMTllXCI7ZmEuZ29vZ2xlPVwiXFx1ZjFhMFwiO2ZhLnJlZGRpdD1cIlxcdWYxYTFcIjtmYS5yZWRkaXRTcXVhcmU9XCJcXHVmMWEyXCI7ZmEuc3R1bWJsZXVwb25DaXJjbGU9XCJcXHVmMWEzXCI7ZmEuc3R1bWJsZXVwb249XCJcXHVmMWE0XCI7ZmEuZGVsaWNpb3VzPVwiXFx1ZjFhNVwiO2ZhLmRpZ2c9XCJcXHVmMWE2XCI7ZmEucGllZFBpcGVyUHA9XCJcXHVmMWE3XCI7ZmEucGllZFBpcGVyQWx0PVwiXFx1ZjFhOFwiO2ZhLmRydXBhbD1cIlxcdWYxYTlcIjtmYS5qb29tbGE9XCJcXHVmMWFhXCI7ZmEubGFuZ3VhZ2U9XCJcXHVmMWFiXCI7ZmEuZmF4PVwiXFx1ZjFhY1wiO2ZhLmJ1aWxkaW5nPVwiXFx1ZjFhZFwiO2ZhLmNoaWxkPVwiXFx1ZjFhZVwiO2ZhLnBhdz1cIlxcdWYxYjBcIjtmYS5zcG9vbj1cIlxcdWYxYjFcIjtmYS5jdWJlPVwiXFx1ZjFiMlwiO2ZhLmN1YmVzPVwiXFx1ZjFiM1wiO2ZhLmJlaGFuY2U9XCJcXHVmMWI0XCI7ZmEuYmVoYW5jZVNxdWFyZT1cIlxcdWYxYjVcIjtmYS5zdGVhbT1cIlxcdWYxYjZcIjtmYS5zdGVhbVNxdWFyZT1cIlxcdWYxYjdcIjtmYS5yZWN5Y2xlPVwiXFx1ZjFiOFwiO2ZhLmF1dG9tb2JpbGU9XCJcXHVmMWI5XCI7ZmEuY2FyPVwiXFx1ZjFiOVwiO2ZhLmNhYj1cIlxcdWYxYmFcIjtmYS50YXhpPVwiXFx1ZjFiYVwiO2ZhLnRyZWU9XCJcXHVmMWJiXCI7ZmEuc3BvdGlmeT1cIlxcdWYxYmNcIjtmYS5kZXZpYW50YXJ0PVwiXFx1ZjFiZFwiO2ZhLnNvdW5kY2xvdWQ9XCJcXHVmMWJlXCI7ZmEuZGF0YWJhc2U9XCJcXHVmMWMwXCI7ZmEuZmlsZVBkZk89XCJcXHVmMWMxXCI7ZmEuZmlsZVdvcmRPPVwiXFx1ZjFjMlwiO2ZhLmZpbGVFeGNlbE89XCJcXHVmMWMzXCI7ZmEuZmlsZVBvd2VycG9pbnRPPVwiXFx1ZjFjNFwiO2ZhLmZpbGVQaG90b089XCJcXHVmMWM1XCI7ZmEuZmlsZVBpY3R1cmVPPVwiXFx1ZjFjNVwiO2ZhLmZpbGVJbWFnZU89XCJcXHVmMWM1XCI7ZmEuZmlsZVppcE89XCJcXHVmMWM2XCI7ZmEuZmlsZUFyY2hpdmVPPVwiXFx1ZjFjNlwiO2ZhLmZpbGVTb3VuZE89XCJcXHVmMWM3XCI7ZmEuZmlsZUF1ZGlvTz1cIlxcdWYxYzdcIjtmYS5maWxlTW92aWVPPVwiXFx1ZjFjOFwiO2ZhLmZpbGVWaWRlb089XCJcXHVmMWM4XCI7ZmEuZmlsZUNvZGVPPVwiXFx1ZjFjOVwiO2ZhLnZpbmU9XCJcXHVmMWNhXCI7ZmEuY29kZXBlbj1cIlxcdWYxY2JcIjtmYS5qc2ZpZGRsZT1cIlxcdWYxY2NcIjtmYS5saWZlQm91eT1cIlxcdWYxY2RcIjtmYS5saWZlQnVveT1cIlxcdWYxY2RcIjtmYS5saWZlU2F2ZXI9XCJcXHVmMWNkXCI7ZmEuc3VwcG9ydD1cIlxcdWYxY2RcIjtmYS5saWZlUmluZz1cIlxcdWYxY2RcIjtmYS5jaXJjbGVPTm90Y2g9XCJcXHVmMWNlXCI7ZmEucmE9XCJcXHVmMWQwXCI7ZmEucmVzaXN0YW5jZT1cIlxcdWYxZDBcIjtmYS5yZWJlbD1cIlxcdWYxZDBcIjtmYS5nZT1cIlxcdWYxZDFcIjtmYS5lbXBpcmU9XCJcXHVmMWQxXCI7ZmEuZ2l0U3F1YXJlPVwiXFx1ZjFkMlwiO2ZhLmdpdD1cIlxcdWYxZDNcIjtmYS55Q29tYmluYXRvclNxdWFyZT1cIlxcdWYxZDRcIjtmYS55Y1NxdWFyZT1cIlxcdWYxZDRcIjtmYS5oYWNrZXJOZXdzPVwiXFx1ZjFkNFwiO2ZhLnRlbmNlbnRXZWlibz1cIlxcdWYxZDVcIjtmYS5xcT1cIlxcdWYxZDZcIjtmYS53ZWNoYXQ9XCJcXHVmMWQ3XCI7ZmEud2VpeGluPVwiXFx1ZjFkN1wiO2ZhLnNlbmQ9XCJcXHVmMWQ4XCI7ZmEucGFwZXJQbGFuZT1cIlxcdWYxZDhcIjtmYS5zZW5kTz1cIlxcdWYxZDlcIjtmYS5wYXBlclBsYW5lTz1cIlxcdWYxZDlcIjtmYS5oaXN0b3J5PVwiXFx1ZjFkYVwiO2ZhLmNpcmNsZVRoaW49XCJcXHVmMWRiXCI7ZmEuaGVhZGVyPVwiXFx1ZjFkY1wiO2ZhLnBhcmFncmFwaD1cIlxcdWYxZGRcIjtmYS5zbGlkZXJzPVwiXFx1ZjFkZVwiO2ZhLnNoYXJlQWx0PVwiXFx1ZjFlMFwiO2ZhLnNoYXJlQWx0U3F1YXJlPVwiXFx1ZjFlMVwiO2ZhLmJvbWI9XCJcXHVmMWUyXCI7ZmEuc29jY2VyQmFsbE89XCJcXHVmMWUzXCI7ZmEuZnV0Ym9sTz1cIlxcdWYxZTNcIjtmYS50dHk9XCJcXHVmMWU0XCI7ZmEuYmlub2N1bGFycz1cIlxcdWYxZTVcIjtmYS5wbHVnPVwiXFx1ZjFlNlwiO2ZhLnNsaWRlc2hhcmU9XCJcXHVmMWU3XCI7ZmEudHdpdGNoPVwiXFx1ZjFlOFwiO2ZhLnllbHA9XCJcXHVmMWU5XCI7ZmEubmV3c3BhcGVyTz1cIlxcdWYxZWFcIjtmYS53aWZpPVwiXFx1ZjFlYlwiO2ZhLmNhbGN1bGF0b3I9XCJcXHVmMWVjXCI7ZmEucGF5cGFsPVwiXFx1ZjFlZFwiO2ZhLmdvb2dsZVdhbGxldD1cIlxcdWYxZWVcIjtmYS5jY1Zpc2E9XCJcXHVmMWYwXCI7ZmEuY2NNYXN0ZXJjYXJkPVwiXFx1ZjFmMVwiO2ZhLmNjRGlzY292ZXI9XCJcXHVmMWYyXCI7ZmEuY2NBbWV4PVwiXFx1ZjFmM1wiO2ZhLmNjUGF5cGFsPVwiXFx1ZjFmNFwiO2ZhLmNjU3RyaXBlPVwiXFx1ZjFmNVwiO2ZhLmJlbGxTbGFzaD1cIlxcdWYxZjZcIjtmYS5iZWxsU2xhc2hPPVwiXFx1ZjFmN1wiO2ZhLnRyYXNoPVwiXFx1ZjFmOFwiO2ZhLmNvcHlyaWdodD1cIlxcdWYxZjlcIjtmYS5hdD1cIlxcdWYxZmFcIjtmYS5leWVkcm9wcGVyPVwiXFx1ZjFmYlwiO2ZhLnBhaW50QnJ1c2g9XCJcXHVmMWZjXCI7ZmEuYmlydGhkYXlDYWtlPVwiXFx1ZjFmZFwiO2ZhLmFyZWFDaGFydD1cIlxcdWYxZmVcIjtmYS5waWVDaGFydD1cIlxcdWYyMDBcIjtmYS5saW5lQ2hhcnQ9XCJcXHVmMjAxXCI7ZmEubGFzdGZtPVwiXFx1ZjIwMlwiO2ZhLmxhc3RmbVNxdWFyZT1cIlxcdWYyMDNcIjtmYS50b2dnbGVPZmY9XCJcXHVmMjA0XCI7ZmEudG9nZ2xlT249XCJcXHVmMjA1XCI7ZmEuYmljeWNsZT1cIlxcdWYyMDZcIjtmYS5idXM9XCJcXHVmMjA3XCI7ZmEuaW94aG9zdD1cIlxcdWYyMDhcIjtmYS5hbmdlbGxpc3Q9XCJcXHVmMjA5XCI7ZmEuY2M9XCJcXHVmMjBhXCI7ZmEuc2hla2VsPVwiXFx1ZjIwYlwiO2ZhLnNoZXFlbD1cIlxcdWYyMGJcIjtmYS5pbHM9XCJcXHVmMjBiXCI7ZmEubWVhbnBhdGg9XCJcXHVmMjBjXCI7ZmEuYnV5c2VsbGFkcz1cIlxcdWYyMGRcIjtmYS5jb25uZWN0ZGV2ZWxvcD1cIlxcdWYyMGVcIjtmYS5kYXNoY3ViZT1cIlxcdWYyMTBcIjtmYS5mb3J1bWJlZT1cIlxcdWYyMTFcIjtmYS5sZWFucHViPVwiXFx1ZjIxMlwiO2ZhLnNlbGxzeT1cIlxcdWYyMTNcIjtmYS5zaGlydHNpbmJ1bGs9XCJcXHVmMjE0XCI7ZmEuc2ltcGx5YnVpbHQ9XCJcXHVmMjE1XCI7ZmEuc2t5YXRsYXM9XCJcXHVmMjE2XCI7ZmEuY2FydFBsdXM9XCJcXHVmMjE3XCI7ZmEuY2FydEFycm93RG93bj1cIlxcdWYyMThcIjtmYS5kaWFtb25kPVwiXFx1ZjIxOVwiO2ZhLnNoaXA9XCJcXHVmMjFhXCI7ZmEudXNlclNlY3JldD1cIlxcdWYyMWJcIjtmYS5tb3RvcmN5Y2xlPVwiXFx1ZjIxY1wiO2ZhLnN0cmVldFZpZXc9XCJcXHVmMjFkXCI7ZmEuaGVhcnRiZWF0PVwiXFx1ZjIxZVwiO2ZhLnZlbnVzPVwiXFx1ZjIyMVwiO2ZhLm1hcnM9XCJcXHVmMjIyXCI7ZmEubWVyY3VyeT1cIlxcdWYyMjNcIjtmYS5pbnRlcnNleD1cIlxcdWYyMjRcIjtmYS50cmFuc2dlbmRlcj1cIlxcdWYyMjRcIjtmYS50cmFuc2dlbmRlckFsdD1cIlxcdWYyMjVcIjtmYS52ZW51c0RvdWJsZT1cIlxcdWYyMjZcIjtmYS5tYXJzRG91YmxlPVwiXFx1ZjIyN1wiO2ZhLnZlbnVzTWFycz1cIlxcdWYyMjhcIjtmYS5tYXJzU3Ryb2tlPVwiXFx1ZjIyOVwiO2ZhLm1hcnNTdHJva2VWPVwiXFx1ZjIyYVwiO2ZhLm1hcnNTdHJva2VIPVwiXFx1ZjIyYlwiO2ZhLm5ldXRlcj1cIlxcdWYyMmNcIjtmYS5nZW5kZXJsZXNzPVwiXFx1ZjIyZFwiO2ZhLmZhY2Vib29rT2ZmaWNpYWw9XCJcXHVmMjMwXCI7ZmEucGludGVyZXN0UD1cIlxcdWYyMzFcIjtmYS53aGF0c2FwcD1cIlxcdWYyMzJcIjtmYS5zZXJ2ZXI9XCJcXHVmMjMzXCI7ZmEudXNlclBsdXM9XCJcXHVmMjM0XCI7ZmEudXNlclRpbWVzPVwiXFx1ZjIzNVwiO2ZhLmhvdGVsPVwiXFx1ZjIzNlwiO2ZhLmJlZD1cIlxcdWYyMzZcIjtmYS52aWFjb2luPVwiXFx1ZjIzN1wiO2ZhLnRyYWluPVwiXFx1ZjIzOFwiO2ZhLnN1YndheT1cIlxcdWYyMzlcIjtmYS5tZWRpdW09XCJcXHVmMjNhXCI7ZmEueWM9XCJcXHVmMjNiXCI7ZmEueUNvbWJpbmF0b3I9XCJcXHVmMjNiXCI7ZmEub3B0aW5Nb25zdGVyPVwiXFx1ZjIzY1wiO2ZhLm9wZW5jYXJ0PVwiXFx1ZjIzZFwiO2ZhLmV4cGVkaXRlZHNzbD1cIlxcdWYyM2VcIjtmYS5iYXR0ZXJ5ND1cIlxcdWYyNDBcIjtmYS5iYXR0ZXJ5PVwiXFx1ZjI0MFwiO2ZhLmJhdHRlcnlGdWxsPVwiXFx1ZjI0MFwiO2ZhLmJhdHRlcnkzPVwiXFx1ZjI0MVwiO2ZhLmJhdHRlcnlUaHJlZVF1YXJ0ZXJzPVwiXFx1ZjI0MVwiO2ZhLmJhdHRlcnkyPVwiXFx1ZjI0MlwiO2ZhLmJhdHRlcnlIYWxmPVwiXFx1ZjI0MlwiO2ZhLmJhdHRlcnkxPVwiXFx1ZjI0M1wiO2ZhLmJhdHRlcnlRdWFydGVyPVwiXFx1ZjI0M1wiO2ZhLmJhdHRlcnkwPVwiXFx1ZjI0NFwiO2ZhLmJhdHRlcnlFbXB0eT1cIlxcdWYyNDRcIjtmYS5tb3VzZVBvaW50ZXI9XCJcXHVmMjQ1XCI7ZmEuaUN1cnNvcj1cIlxcdWYyNDZcIjtmYS5vYmplY3RHcm91cD1cIlxcdWYyNDdcIjtmYS5vYmplY3RVbmdyb3VwPVwiXFx1ZjI0OFwiO2ZhLnN0aWNreU5vdGU9XCJcXHVmMjQ5XCI7ZmEuc3RpY2t5Tm90ZU89XCJcXHVmMjRhXCI7ZmEuY2NKY2I9XCJcXHVmMjRiXCI7ZmEuY2NEaW5lcnNDbHViPVwiXFx1ZjI0Y1wiO2ZhLmNsb25lPVwiXFx1ZjI0ZFwiO2ZhLmJhbGFuY2VTY2FsZT1cIlxcdWYyNGVcIjtmYS5ob3VyZ2xhc3NPPVwiXFx1ZjI1MFwiO2ZhLmhvdXJnbGFzczE9XCJcXHVmMjUxXCI7ZmEuaG91cmdsYXNzU3RhcnQ9XCJcXHVmMjUxXCI7ZmEuaG91cmdsYXNzMj1cIlxcdWYyNTJcIjtmYS5ob3VyZ2xhc3NIYWxmPVwiXFx1ZjI1MlwiO2ZhLmhvdXJnbGFzczM9XCJcXHVmMjUzXCI7ZmEuaG91cmdsYXNzRW5kPVwiXFx1ZjI1M1wiO2ZhLmhvdXJnbGFzcz1cIlxcdWYyNTRcIjtmYS5oYW5kR3JhYk89XCJcXHVmMjU1XCI7ZmEuaGFuZFJvY2tPPVwiXFx1ZjI1NVwiO2ZhLmhhbmRTdG9wTz1cIlxcdWYyNTZcIjtmYS5oYW5kUGFwZXJPPVwiXFx1ZjI1NlwiO2ZhLmhhbmRTY2lzc29yc089XCJcXHVmMjU3XCI7ZmEuaGFuZExpemFyZE89XCJcXHVmMjU4XCI7ZmEuaGFuZFNwb2NrTz1cIlxcdWYyNTlcIjtmYS5oYW5kUG9pbnRlck89XCJcXHVmMjVhXCI7ZmEuaGFuZFBlYWNlTz1cIlxcdWYyNWJcIjtmYS50cmFkZW1hcms9XCJcXHVmMjVjXCI7ZmEucmVnaXN0ZXJlZD1cIlxcdWYyNWRcIjtmYS5jcmVhdGl2ZUNvbW1vbnM9XCJcXHVmMjVlXCI7ZmEuZ2c9XCJcXHVmMjYwXCI7ZmEuZ2dDaXJjbGU9XCJcXHVmMjYxXCI7ZmEudHJpcGFkdmlzb3I9XCJcXHVmMjYyXCI7ZmEub2Rub2tsYXNzbmlraT1cIlxcdWYyNjNcIjtmYS5vZG5va2xhc3NuaWtpU3F1YXJlPVwiXFx1ZjI2NFwiO2ZhLmdldFBvY2tldD1cIlxcdWYyNjVcIjtmYS53aWtpcGVkaWFXPVwiXFx1ZjI2NlwiO2ZhLnNhZmFyaT1cIlxcdWYyNjdcIjtmYS5jaHJvbWU9XCJcXHVmMjY4XCI7ZmEuZmlyZWZveD1cIlxcdWYyNjlcIjtmYS5vcGVyYT1cIlxcdWYyNmFcIjtmYS5pbnRlcm5ldEV4cGxvcmVyPVwiXFx1ZjI2YlwiO2ZhLnR2PVwiXFx1ZjI2Y1wiO2ZhLnRlbGV2aXNpb249XCJcXHVmMjZjXCI7ZmEuY29udGFvPVwiXFx1ZjI2ZFwiO2ZhW1wiNTAwcHhcIl09XCJcXHVmMjZlXCI7ZmEuYW1hem9uPVwiXFx1ZjI3MFwiO2ZhLmNhbGVuZGFyUGx1c089XCJcXHVmMjcxXCI7ZmEuY2FsZW5kYXJNaW51c089XCJcXHVmMjcyXCI7ZmEuY2FsZW5kYXJUaW1lc089XCJcXHVmMjczXCI7ZmEuY2FsZW5kYXJDaGVja089XCJcXHVmMjc0XCI7ZmEuaW5kdXN0cnk9XCJcXHVmMjc1XCI7ZmEubWFwUGluPVwiXFx1ZjI3NlwiO2ZhLm1hcFNpZ25zPVwiXFx1ZjI3N1wiO2ZhLm1hcE89XCJcXHVmMjc4XCI7ZmEubWFwPVwiXFx1ZjI3OVwiO2ZhLmNvbW1lbnRpbmc9XCJcXHVmMjdhXCI7ZmEuY29tbWVudGluZ089XCJcXHVmMjdiXCI7ZmEuaG91eno9XCJcXHVmMjdjXCI7ZmEudmltZW89XCJcXHVmMjdkXCI7ZmEuYmxhY2tUaWU9XCJcXHVmMjdlXCI7ZmEuZm9udGljb25zPVwiXFx1ZjI4MFwiO2ZhLnJlZGRpdEFsaWVuPVwiXFx1ZjI4MVwiO2ZhLmVkZ2U9XCJcXHVmMjgyXCI7ZmEuY3JlZGl0Q2FyZEFsdD1cIlxcdWYyODNcIjtmYS5jb2RpZXBpZT1cIlxcdWYyODRcIjtmYS5tb2R4PVwiXFx1ZjI4NVwiO2ZhLmZvcnRBd2Vzb21lPVwiXFx1ZjI4NlwiO2ZhLnVzYj1cIlxcdWYyODdcIjtmYS5wcm9kdWN0SHVudD1cIlxcdWYyODhcIjtmYS5taXhjbG91ZD1cIlxcdWYyODlcIjtmYS5zY3JpYmQ9XCJcXHVmMjhhXCI7ZmEucGF1c2VDaXJjbGU9XCJcXHVmMjhiXCI7ZmEucGF1c2VDaXJjbGVPPVwiXFx1ZjI4Y1wiO2ZhLnN0b3BDaXJjbGU9XCJcXHVmMjhkXCI7ZmEuc3RvcENpcmNsZU89XCJcXHVmMjhlXCI7ZmEuc2hvcHBpbmdCYWc9XCJcXHVmMjkwXCI7ZmEuc2hvcHBpbmdCYXNrZXQ9XCJcXHVmMjkxXCI7ZmEuaGFzaHRhZz1cIlxcdWYyOTJcIjtmYS5ibHVldG9vdGg9XCJcXHVmMjkzXCI7ZmEuYmx1ZXRvb3RoQj1cIlxcdWYyOTRcIjtmYS5wZXJjZW50PVwiXFx1ZjI5NVwiO2ZhLmdpdGxhYj1cIlxcdWYyOTZcIjtmYS53cGJlZ2lubmVyPVwiXFx1ZjI5N1wiO2ZhLndwZm9ybXM9XCJcXHVmMjk4XCI7ZmEuZW52aXJhPVwiXFx1ZjI5OVwiO2ZhLnVuaXZlcnNhbEFjY2Vzcz1cIlxcdWYyOWFcIjtmYS53aGVlbGNoYWlyQWx0PVwiXFx1ZjI5YlwiO2ZhLnF1ZXN0aW9uQ2lyY2xlTz1cIlxcdWYyOWNcIjtmYS5ibGluZD1cIlxcdWYyOWRcIjtmYS5hdWRpb0Rlc2NyaXB0aW9uPVwiXFx1ZjI5ZVwiO2ZhLnZvbHVtZUNvbnRyb2xQaG9uZT1cIlxcdWYyYTBcIjtmYS5icmFpbGxlPVwiXFx1ZjJhMVwiO2ZhLmFzc2lzdGl2ZUxpc3RlbmluZ1N5c3RlbXM9XCJcXHVmMmEyXCI7ZmEuYXNsSW50ZXJwcmV0aW5nPVwiXFx1ZjJhM1wiO2ZhLmFtZXJpY2FuU2lnbkxhbmd1YWdlSW50ZXJwcmV0aW5nPVwiXFx1ZjJhM1wiO2ZhLmRlYWZuZXNzPVwiXFx1ZjJhNFwiO2ZhLmhhcmRPZkhlYXJpbmc9XCJcXHVmMmE0XCI7ZmEuZGVhZj1cIlxcdWYyYTRcIjtmYS5nbGlkZT1cIlxcdWYyYTVcIjtmYS5nbGlkZUc9XCJcXHVmMmE2XCI7ZmEuc2lnbmluZz1cIlxcdWYyYTdcIjtmYS5zaWduTGFuZ3VhZ2U9XCJcXHVmMmE3XCI7ZmEubG93VmlzaW9uPVwiXFx1ZjJhOFwiO2ZhLnZpYWRlbz1cIlxcdWYyYTlcIjtmYS52aWFkZW9TcXVhcmU9XCJcXHVmMmFhXCI7ZmEuc25hcGNoYXQ9XCJcXHVmMmFiXCI7ZmEuc25hcGNoYXRHaG9zdD1cIlxcdWYyYWNcIjtmYS5zbmFwY2hhdFNxdWFyZT1cIlxcdWYyYWRcIjtmYS5waWVkUGlwZXI9XCJcXHVmMmFlXCI7ZmEuZmlyc3RPcmRlcj1cIlxcdWYyYjBcIjtmYS55b2FzdD1cIlxcdWYyYjFcIjtmYS50aGVtZWlzbGU9XCJcXHVmMmIyXCI7ZmEuZ29vZ2xlUGx1c0NpcmNsZT1cIlxcdWYyYjNcIjtmYS5nb29nbGVQbHVzT2ZmaWNpYWw9XCJcXHVmMmIzXCI7ZmEuZmE9XCJcXHVmMmI0XCI7ZmEuZm9udEF3ZXNvbWU9XCJcXHVmMmI0XCI7ZmEuaGFuZHNoYWtlTz1cIlxcdWYyYjVcIjtmYS5lbnZlbG9wZU9wZW49XCJcXHVmMmI2XCI7ZmEuZW52ZWxvcGVPcGVuTz1cIlxcdWYyYjdcIjtmYS5saW5vZGU9XCJcXHVmMmI4XCI7ZmEuYWRkcmVzc0Jvb2s9XCJcXHVmMmI5XCI7ZmEuYWRkcmVzc0Jvb2tPPVwiXFx1ZjJiYVwiO2ZhLnZjYXJkPVwiXFx1ZjJiYlwiO2ZhLmFkZHJlc3NDYXJkPVwiXFx1ZjJiYlwiO2ZhLnZjYXJkTz1cIlxcdWYyYmNcIjtmYS5hZGRyZXNzQ2FyZE89XCJcXHVmMmJjXCI7ZmEudXNlckNpcmNsZT1cIlxcdWYyYmRcIjtmYS51c2VyQ2lyY2xlTz1cIlxcdWYyYmVcIjtmYS51c2VyTz1cIlxcdWYyYzBcIjtmYS5pZEJhZGdlPVwiXFx1ZjJjMVwiO2ZhLmRyaXZlcnNMaWNlbnNlPVwiXFx1ZjJjMlwiO2ZhLmlkQ2FyZD1cIlxcdWYyYzJcIjtmYS5kcml2ZXJzTGljZW5zZU89XCJcXHVmMmMzXCI7ZmEuaWRDYXJkTz1cIlxcdWYyYzNcIjtmYS5xdW9yYT1cIlxcdWYyYzRcIjtmYS5mcmVlQ29kZUNhbXA9XCJcXHVmMmM1XCI7ZmEudGVsZWdyYW09XCJcXHVmMmM2XCI7ZmEudGhlcm1vbWV0ZXI0PVwiXFx1ZjJjN1wiO2ZhLnRoZXJtb21ldGVyPVwiXFx1ZjJjN1wiO2ZhLnRoZXJtb21ldGVyRnVsbD1cIlxcdWYyYzdcIjtmYS50aGVybW9tZXRlcjM9XCJcXHVmMmM4XCI7ZmEudGhlcm1vbWV0ZXJUaHJlZVF1YXJ0ZXJzPVwiXFx1ZjJjOFwiO2ZhLnRoZXJtb21ldGVyMj1cIlxcdWYyYzlcIjtmYS50aGVybW9tZXRlckhhbGY9XCJcXHVmMmM5XCI7ZmEudGhlcm1vbWV0ZXIxPVwiXFx1ZjJjYVwiO2ZhLnRoZXJtb21ldGVyUXVhcnRlcj1cIlxcdWYyY2FcIjtmYS50aGVybW9tZXRlcjA9XCJcXHVmMmNiXCI7ZmEudGhlcm1vbWV0ZXJFbXB0eT1cIlxcdWYyY2JcIjtmYS5zaG93ZXI9XCJcXHVmMmNjXCI7ZmEuYmF0aHR1Yj1cIlxcdWYyY2RcIjtmYS5zMTU9XCJcXHVmMmNkXCI7ZmEuYmF0aD1cIlxcdWYyY2RcIjtmYS5wb2RjYXN0PVwiXFx1ZjJjZVwiO2ZhLndpbmRvd01heGltaXplPVwiXFx1ZjJkMFwiO2ZhLndpbmRvd01pbmltaXplPVwiXFx1ZjJkMVwiO2ZhLndpbmRvd1Jlc3RvcmU9XCJcXHVmMmQyXCI7ZmEudGltZXNSZWN0YW5nbGU9XCJcXHVmMmQzXCI7ZmEud2luZG93Q2xvc2U9XCJcXHVmMmQzXCI7ZmEudGltZXNSZWN0YW5nbGVPPVwiXFx1ZjJkNFwiO2ZhLndpbmRvd0Nsb3NlTz1cIlxcdWYyZDRcIjtmYS5iYW5kY2FtcD1cIlxcdWYyZDVcIjtmYS5ncmF2PVwiXFx1ZjJkNlwiO2ZhLmV0c3k9XCJcXHVmMmQ3XCI7ZmEuaW1kYj1cIlxcdWYyZDhcIjtmYS5yYXZlbHJ5PVwiXFx1ZjJkOVwiO2ZhLmVlcmNhc3Q9XCJcXHVmMmRhXCI7ZmEubWljcm9jaGlwPVwiXFx1ZjJkYlwiO2ZhLnNub3dmbGFrZU89XCJcXHVmMmRjXCI7ZmEuc3VwZXJwb3dlcnM9XCJcXHVmMmRkXCI7ZmEud3BleHBsb3Jlcj1cIlxcdWYyZGVcIjtmYS5tZWV0dXA9XCJcXHVmMmUwXCI7bW9kdWxlLmV4cG9ydHM9ZmE7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZm9udGF3ZXNvbWUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBDUkVBVEVfRkxBRyA6IFwiQ1wiLFxyXG4gICAgICAgIFVQREFURV9GTEFHIDogXCJVXCIsXHJcbiAgICBERUxFVEVfRkxBRyA6IFwiRFwiLFxyXG4gICAgdGVtcGxhdGUgOiB7XHJcbiAgICAgICAgRURJVF9JTlBVVCAgICAgICAgICAgIDogXCJTcEdyaWRFZGl0SW5wdXQudG1wbC5odG1sXCIsXHJcbiAgICAgICAgRURJVF9DSEVDS0JPWCAgICAgICAgIDogXCJTcEdyaWRFZGl0Q2hlY2tCb3gudG1wbC5odG1sXCIsXHJcbiAgICAgICAgQ09OVEVYVF9NRU5VICAgICAgICAgIDogXCJTcEdyaWREYXRhQ29udGV4dE1lbnUudG1wbC5odG1sXCIsXHJcbiAgICAgICAgREFUQV9WSUVXICAgICAgICAgICAgIDogXCJTcEdyaWREYXRhVmlldy50bXBsLmh0bWxcIixcclxuICAgICAgICBTUF9HUklEICAgICAgICAgICAgICAgOiBcIlNwR3JpZC50bXBsLmh0bWxcIixcclxuICAgICAgICBTUF9HUklEX0hFQURFUiAgICAgICAgOiBcIlNwR3JpZEhlYWRlci50bXBsLmh0bWxcIixcclxuICAgICAgICBTUF9HUklEX0hFQURFUl9ST1cgICAgOiBcIlNwR3JpZEhlYWRlclJvdy50bXBsLmh0bWxcIixcclxuICAgICAgICBTUF9HUklEX0hFQURFUl9DT0xVTU4gOiBcIlNwR3JpZEhlYWRlckNvbHVtbi50bXBsLmh0bWxcIixcclxuICAgICAgICBTUF9HUklEX0JPRFkgICAgICAgICAgOiBcIlNwR3JpZEJvZHkudG1wbC5odG1sXCIsXHJcbiAgICAgICAgU1BfR1JJRF9EQVRBX1JPVyAgICAgIDogXCJTcEdyaWREYXRhUm93LnRtcGwuaHRtbFwiLFxyXG4gICAgICAgIFNQX0dSSURfREFUQV9ST1dfQlROX0dST1VQIDogXCJTcEdyaWREYXRhUm93QnRuR3JvdXAudG1wbC5odG1sXCIsXHJcbiAgICAgICAgU1BfR1JJRF9EQVRBX0NPTFVNTiAgIDogXCJTcEdyaWREYXRhQ29sdW1uLnRtcGwuaHRtbFwiLFxyXG4gICAgICAgIFNQX0dSSURfUEFHSU5HICAgICAgICA6IFwiU3BHcmlkUGFnaW5nLnRtcGwuaHRtbFwiXHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1NwR3JpZENvbnN0YW50LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPXNwLWdyaWQtd3JhcCBuZy1zdHlsZT1cXFwieyAnd2lkdGgnIDogZ3JpZE9iamVjdC5nZXRTaXplKCkud2lkdGggfVxcXCI+IDxkaXYgY2xhc3M9c3AtZ3JpZD4gPHNwLWdyaWQtaGVhZGVyPjwvc3AtZ3JpZC1oZWFkZXI+IDxzcC1ncmlkLWJvZHk+PC9zcC1ncmlkLWJvZHk+IDwvZGl2PiA8L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZS9TcEdyaWQudG1wbC5odG1sXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPXNwLWdyaWQtaGVhZGVyPiA8c3AtZ3JpZC1oZWFkZXItcm93Pjwvc3AtZ3JpZC1oZWFkZXItcm93PiA8L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZS9TcEdyaWRIZWFkZXIudG1wbC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPXNwLWdyaWQtaGVhZGVyLXJvdz4gPHNwLWdyaWQtaGVhZGVyLWNvbHVtbiBuZy1yZXBlYXQ9XFxcImNvbHVtbiBpbiBncmlkT2JqZWN0LmdldENvbHVtbkRlZigpIHRyYWNrIGJ5ICRpbmRleFxcXCI+IDwvc3AtZ3JpZC1oZWFkZXItY29sdW1uPiA8L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZS9TcEdyaWRIZWFkZXJSb3cudG1wbC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1zcC1ncmlkLWhlYWRlci1jb2x1bW4gbmctc3R5bGU9XFxcInsgJ21pbi13aWR0aCcgOiBjb2x1bW4ud2lkdGgsICdtYXgtd2lkdGgnIDogY29sdW1uLndpZHRoIH1cXFwiPiA8c3Bhbj57e2NvbHVtbi5uYW1lfX08c3BhbiBjbGFzcz1zcC1ncmlkLW9yZGVyLWRlc2Mgbmctc2hvdz1cXFwiY29sdW1uLnR5cGU9PSdkYXRhJ1xcXCIgbmctY2xpY2s9XFxcIm9yZGVyQ2hhbmdlKGNvbHVtbi5pZCwnZGVzYycpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWNoZXZyb24tZG93blxcXCIgYXJpYS1oaWRkZW49dHJ1ZT48L2k+IDwvc3Bhbj4gPHNwYW4gY2xhc3M9c3AtZ3JpZC1vcmRlci1hc2Mgbmctc2hvdz1cXFwiY29sdW1uLnR5cGU9PSdkYXRhJ1xcXCIgbmctY2xpY2s9XFxcIm9yZGVyQ2hhbmdlKGNvbHVtbi5pZCwnYXNjJylcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtY2hldnJvbi11cFxcXCIgYXJpYS1oaWRkZW49dHJ1ZT48L2k+IDwvc3Bhbj48L3NwYW4+IDwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlL1NwR3JpZEhlYWRlckNvbHVtbi50bXBsLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPXNwLWdyaWQtYm9keSBuZy1zdHlsZT1cXFwieyAnaGVpZ2h0JyA6IGdyaWRPYmplY3QuZ2V0U2l6ZSgpLmhlaWdodCB9XFxcIj4gPHNwLWdyaWQtZGF0YS1yb3cgbmctcmVwZWF0PVxcXCJyb3cgaW4gZ3JpZE9iamVjdC5nZXRDcmVhdGVEYXRhKClcXFwiPjwvc3AtZ3JpZC1kYXRhLXJvdz4gPHNwLWdyaWQtZGF0YS1yb3cgbmctcmVwZWF0PVxcXCJyb3cgaW4gZ3JpZE9iamVjdC5nZXREYXRhKCkgfCBzdGFydEZyb206c3RhcnQgfCBsaW1pdFRvOnBhZ2VTaXplXFxcIj48L3NwLWdyaWQtZGF0YS1yb3c+IDwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlL1NwR3JpZEJvZHkudG1wbC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1zcC1ncmlkLWRhdGEtcm93IG5nLWNsaWNrPW9uR3JpZERhdGFSb3dDbGljayhyb3cpIG5nLWhpZGU9aXNSb3dEZWxldGVkKCk+IDxmb3JtIGNsYXNzPXNwLWdyaWQtcm93LWZvcm0gbm92YWxpZGF0ZSBuYW1lPXJvd0Zvcm0+IDxzcC1ncmlkLWRhdGEtY29sdW1uIG5nLXJlcGVhdD1cXFwiaGVhZGVyQ29sdW1uIGluIGdyaWRPYmplY3QuZ2V0Q29sdW1uRGVmKCkgdHJhY2sgYnkgJGluZGV4XFxcIj48L3NwLWdyaWQtZGF0YS1jb2x1bW4+IDwvZm9ybT4gPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGUvU3BHcmlkRGF0YVJvdy50bXBsLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPXNwLWdyaWQtZGF0YS1jb2x1bW4gbmctc3R5bGU9XFxcInsgJ21heC13aWR0aCcgOiBjb2x1bW5XaWR0aCAsICdtaW4td2lkdGgnIDogY29sdW1uV2lkdGggfVxcXCI+IDxkaXYgY2xhc3M9c3AtZ3JpZC1kYXRhLWhlYWRlcj57e2NvbHVtbkhlYWRlcn19PC9kaXY+IDxkaXYgY2xhc3M9c3AtZ3JpZC1kYXRhPiA8c3BhbiBjbGFzcz1zcC1ncmlkLWRhdGEtdmlldyBuZy1zaG93PVxcXCJpc1R5cGVEYXRhKCkgfHwgaXNUeXBlUm93bm8oKVxcXCI+e3tkaXNwbGF5RGF0YX19PC9zcGFuPiA8ZGl2IGNsYXNzPXNwLWdyaWQtZGF0YS1odG1sIG5nLXNob3c9aXNUeXBlSHRtbCgpPjwvZGl2PiA8L2Rpdj4gPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGUvU3BHcmlkRGF0YUNvbHVtbi50bXBsLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIgPGRpdiBjbGFzcz1cXFwibmItYnV0dG9ucyBsZWZ0IG5iLWlubGluZVxcXCI+IDxkaXYgY2xhc3M9bmItYnRuLXNhdmUgbmctc2hvdz1cXFwiaXNUZW1wU2F2ZSgpIHx8ICggIWlzUm93RWRpdHRpbmcoKSAmJiAhaXNSb3dBZGRpbmcoKSlcXFwiIG5nLWNsaWNrPXJvd0VkaXQoKTs+IDxidXR0b24+PGkgY2xhc3M9XFxcImZhIGZhLXBlbmNpbC1zcXVhcmUtb1xcXCIgYXJpYS1oaWRkZW49dHJ1ZT48L2k+PC9idXR0b24+IDwvZGl2PiA8ZGl2IGNsYXNzPW5iLWJ0bi1zYXZlIG5nLXNob3c9XFxcIiFpc1RlbXBTYXZlKCkgJiYgKGlzUm93RWRpdHRpbmcoKSB8fCBpc1Jvd0FkZGluZygpKVxcXCIgbmctY2xpY2s9dmFsaWRhdGUoKT4gPGJ1dHRvbj48aSBjbGFzcz1cXFwiZmEgZmEtY2hlY2tcXFwiIGFyaWEtaGlkZGVuPXRydWU+PC9pPjwvYnV0dG9uPjwvZGl2PiA8ZGl2IGNsYXNzPW5iLWJ0bi1kZWxldGUgbmctc2hvdz1cXFwiIWlzVGVtcFNhdmUoKSAmJiAoaXNSb3dFZGl0dGluZygpIHx8IGlzUm93QWRkaW5nKCkpXFxcIiBuZy1jbGljaz1yb3dSZXZlcnQoKT4gPGJ1dHRvbj48aSBjbGFzcz1cXFwiZmEgZmEtY2xvc2VcXFwiIGFyaWEtaGlkZGVuPXRydWU+PC9pPjwvYnV0dG9uPjwvZGl2PiA8ZGl2IGNsYXNzPW5iLWJ0bi1kZWxldGUgbmctc2hvdz1cXFwiaXNUZW1wU2F2ZSgpIHx8ICghaXNSb3dFZGl0dGluZygpICYmICFpc1Jvd0FkZGluZygpKVxcXCIgbmctY2xpY2s9cm93RGVsZXRlKCk+IDxidXR0b24+PGkgY2xhc3M9XFxcImZhIGZhLXRyYXNoXFxcIiBhcmlhLWhpZGRlbj10cnVlPjwvaT48L2J1dHRvbj48L2Rpdj4gPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGUvU3BHcmlkRGF0YVJvd0J0bkdyb3VwLnRtcC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibmItaW5wdXRUZXh0IG5iLTJtIHNwLWdyaWQtZGF0YS1lZGl0XFxcIj4gPGxhYmVsPiA8ZGl2PiA8aW5wdXQgdHlwZT10ZXh0IG5nLW1vZGVsPXJvd1toZWFkZXJDb2x1bW4uaWRdIHZhbHVlPXt7cm93W2hlYWRlckNvbHVtbi5pZF19fSBuYW1lPXJvd1toZWFkZXJDb2x1bW4uaWRdPiA8aT48L2k+IDwvZGl2PiA8L2xhYmVsPiA8L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZS9TcEdyaWRFZGl0SW5wdXQudG1wbC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibmItY2hlY2tib3ggc3AtZ3JpZC1kYXRhLWVkaXRcXFwiPiA8ZGl2PiA8bGFiZWw+IDxpbnB1dCB0eXBlPWNoZWNrYm94IG5nLXRydWUtdmFsdWU9XFxcIid7e2NoZWNrYm94LnRydWVWYWx1ZX19J1xcXCIgbmctY2hlY2tlZD1cXFwiJ3t7Y2hlY2tib3gudHJ1ZVZhbHVlfX0nXFxcIiBuZy1mYWxzZS12YWx1ZT1cXFwiJ3t7Y2hlY2tib3guZmFsc2VWYWx1ZX19J1xcXCIgbmctbW9kZWw9cm93W2hlYWRlckNvbHVtbi5pZF0gdmFsdWU9XFxcIid7e2NoZWNrYm94LmZhbHNlVmFsdWV9fSdcXFwiPiA8c3Bhbj4gPGk+PC9pPiA8ZW0+e3tsYWJlbH19PC9lbT4gPC9zcGFuPiA8L2xhYmVsPiA8L2Rpdj4gPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGUvU3BHcmlkRWRpdENoZWNrQm94LnRtcGwuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9c3AtZ3JpZC1kYXRhLWNvbnRleHQtbWVudS1iYWNrZHJvcCBuZy1zaG93PWlzQ29udGV4dE1lbnVTaG93IG5nLWNsaWNrPVxcXCJpc0NvbnRleHRNZW51U2hvdyA9ICFpc0NvbnRleHRNZW51U2hvd1xcXCI+IDxkaXYgY2xhc3M9c3AtZ3JpZC1kYXRhLWNvbnRleHQtbWVudS13cmFwIG5nLXN0eWxlPVxcXCJ7ICd0b3AnIDogcmlnaHRDbGlja1Bvc2l0aW9uLmN1cnJlbnRZICwgJ2xlZnQnIDogcmlnaHRDbGlja1Bvc2l0aW9uLmN1cnJlbnRYIH1cXFwiPiA8dWwgY2xhc3M9c3AtZ3JpZC1kYXRhLWNvbnRleHQtbWVudT4gPGxpIG5nLXNob3c9XFxcImdyaWRPYmplY3QuaXNFZGl0TW9kZSgpICYmICFyb3dNYW5hZ2VyLmlzUm93RWRpdHRpbmcoKVxcXCIgbmctY2xpY2s9cm93TWFuYWdlci5yb3dFZGl0KCk+RWRpdDwvbGk+IDxsaSBuZy1zaG93PVxcXCJncmlkT2JqZWN0LmlzRWRpdE1vZGUoKSAmJiByb3dNYW5hZ2VyLmlzUm93RWRpdHRpbmcoKVxcXCIgbmctY2xpY2s9cm93TWFuYWdlci5yb3dSZXZlcnQoKT5SZXZlcnQ8L2xpPiA8bGkgbmctY2xpY2s9cm93TWFuYWdlci5yb3dEZWxldGUoKT5EZWxldGU8L2xpPiA8L3VsPiA8L2Rpdj4gPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGUvU3BHcmlkRGF0YUNvbnRleHRNZW51LnRtcGwuaHRtbFxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzcGFuIGNsYXNzPXNwLWdyaWQtZGF0YS12aWV3Pnt7cm93W2hlYWRlckNvbHVtbi5pZF19fTwvc3Bhbj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZS9TcEdyaWREYXRhVmlldy50bXBsLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2VjdGlvbiBjbGFzcz1uYi1wYWdpbmc+IDxkaXYgY2xhc3M9bmItcGFnaW5nLXdyYXA+IDxkaXYgY2xhc3M9bmItcGFnaW5nLWZpcnN0PjxidXR0b24gbmctY2xpY2s9Z290b1BhZ2UoMSk+7LKY7J2MPC9idXR0b24+PC9kaXY+IDxkaXYgY2xhc3M9bmItcGFnaW5nLXByZXY+PGJ1dHRvbiBuZy1jbGljaz1wcmV2UGFnZSgpPuydtOyghDwvYnV0dG9uPjwvZGl2PiA8dWwgY2xhc3M9bmItcGFnaW5nLWJsb2Nrcz4gPGxpIG5nLXJlcGVhdD1cXFwicGFnZSBpbiBnZXRQYWdlQmxvY2soKVxcXCI+PGEgaHJlZj1qYXZhc2NyaXB0OnZvaWQoMCk7IG5nLWNsYXNzPVxcXCJjdXJyZW50UGFnZSA9PSBwYWdlID8gJ29uJyA6ICcnXFxcIiBuZy1jbGljaz1nb3RvUGFnZShwYWdlKT57e3BhZ2V9fTwvYT48L2xpPiA8L3VsPiA8ZGl2IGNsYXNzPW5iLXBhZ2luZy1uZXh0PjxidXR0b24gbmctY2xpY2s9bmV4dFBhZ2UoKT7ri6TsnYw8L2J1dHRvbj48L2Rpdj4gPGRpdiBjbGFzcz1uYi1wYWdpbmctbGFzdD48YnV0dG9uIG5nLWNsaWNrPWdvdG9QYWdlKHRvdGFsUGFnZSk+66eI7KeA66eJPC9idXR0b24+PC9kaXY+IDxkaXYgY2xhc3M9bmItcGFnaW5nLWluZm8+IHt7Y3VycmVudFBhZ2V9fSAvIHt7dG90YWxQYWdlfX0gUGFnZSBUb3RhbCBSZWNvcmQgOiB7e3RvdGFsUmVjb3JkQ291bnR9fSA8L2Rpdj4gPC9kaXY+IDwvc2VjdGlvbj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZS9TcEdyaWRQYWdpbmcudG1wbC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBTcEdyaWQoIFNwR3JpZENvbnN0YW50LCAkdGVtcGxhdGVDYWNoZSApe1xyXG5cclxuICAgIGZ1bmN0aW9uIFNwR3JpZCggZ3JpZE9wdGlvbnMgKXtcclxuICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLl9kZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgZWRpdE1vZGUgIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbHVtbkRlZiA6IFtdLFxyXG4gICAgICAgICAgICBkYXRhc2V0ICAgOiBbXSxcclxuICAgICAgICAgICAgY3JlYXRlRGF0YXNldCA6IFtdLFxyXG4gICAgICAgICAgICByZWdpc3RlckZ1bmN0aW9uIDogW10sXHJcbiAgICAgICAgICAgIGdyaWRTaXplIDoge1xyXG4gICAgICAgICAgICAgICAgd2lkdGggIDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgOiBcIjMwMHB4XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsdGVyT3B0aW9ucyA6IHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5IDogXCJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYWdpbmdPcHRpb25zIDoge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2UgOiAxLFxyXG4gICAgICAgICAgICAgICAgcGFnZVNpemUgICAgOiAxMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2YWxpZGF0ZUNhbGxiYWNrIDogZnVuY3Rpb24oIG1lc3NhZ2UgKXtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5fZ3JpZE9wdGlvbnMgICAgID0gYW5ndWxhci5leHRlbmQoIHRoaXMuX2RlZmF1bHRPcHRpb25zLCBncmlkT3B0aW9ucyApO1xyXG5cclxuICAgICAgICB0aGlzLl9vcmlnaW5hbERhdGFzZXQgPSBhbmd1bGFyLmNvcHkoIHRoaXMuX2dyaWRPcHRpb25zLmRhdGFzZXQgKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYWdlRGF0YXNldCAgICAgID0gYW5ndWxhci5jb3B5KCB0aGlzLl9ncmlkT3B0aW9ucy5kYXRhc2V0KTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBcIlwiO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBTcEdyaWQucHJvdG90eXBlLmdldENyZWF0ZURhdGEgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ncmlkT3B0aW9ucy5jcmVhdGVEYXRhc2V0O1xyXG4gICAgfTtcclxuXHJcbiAgICBTcEdyaWQucHJvdG90eXBlLmdldFZhbGlkYXRlQ2FsbGJhY2sgPSBmdW5jdGlvbiggKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ3JpZE9wdGlvbnMudmFsaWRhdGVDYWxsYmFjaztcclxuICAgIH07XHJcblxyXG4gICAgU3BHcmlkLnByb3RvdHlwZS5zZXRWYWxpZGF0ZUNhbGxiYWNrID0gZnVuY3Rpb24oIGNhbGxiYWNrICl7XHJcbiAgICAgICAgdGhpcy5fZ3JpZE9wdGlvbnMudmFsaWRhdGVDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgU3BHcmlkLnByb3RvdHlwZS5zZXRTdGF0dXMgPSBmdW5jdGlvbiggc3RhdHVzICl7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIFNwR3JpZC5wcm90b3R5cGUuZ2V0U3RhdHVzID0gZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXM7XHJcbiAgICB9O1xyXG5cclxuICAgIFNwR3JpZC5wcm90b3R5cGUuaXNTdGF0dXNDaGFuZ2VkID0gZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT0gXCJlZGl0XCIgfHwgdGhpcy5zdGF0dXMgPT0gXCJjcmVhdGVcIjtcclxuICAgIH07XHJcblxyXG4gICAgU3BHcmlkLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgX2NvbHVtbnMgPSB0aGlzLmdldENvbHVtbkRlZigpO1xyXG5cclxuXHJcbiAgICAgICAgaWYoIHRoaXMuX2dyaWRPcHRpb25zLmVkaXRNb2RlICl7XHJcbiAgICAgICAgICAgIF9jb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZSA6IFwiaHRtbFwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE1MHB4XCIsXHJcbiAgICAgICAgICAgICAgICBiaW5kSHRtbCA6ICR0ZW1wbGF0ZUNhY2hlLmdldChTcEdyaWRDb25zdGFudC50ZW1wbGF0ZS5TUF9HUklEX0RBVEFfUk9XX0JUTl9HUk9VUClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiggdGhpcy5nZXREYXRhKCkgJiYgdGhpcy5nZXREYXRhLmxlbmd0aCA+IDAgKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5nZW5lcmF0ZUlkeCggdGhpcy5nZXREYXRhKCkpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy9Db2x1bW4gVHlwZSDstIjquLDtmZRcclxuICAgICAgICBpZiggX2NvbHVtbnMgJiYgX2NvbHVtbnMubGVuZ3RoID4gMCApe1xyXG4gICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goIF9jb2x1bW5zLCBmdW5jdGlvbiggX2NvbHVtbil7XHJcbiAgICAgICAgICAgICAgICBpZiggIV9jb2x1bW4uaGFzT3duUHJvcGVydHkoXCJ0eXBlXCIpICl7XHJcbiAgICAgICAgICAgICAgICAgICAgX2NvbHVtbi50eXBlID0gXCJkYXRhXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFNwR3JpZC5wcm90b3R5cGUuZ2VuZXJhdGVJZHggPSBmdW5jdGlvbiggZGF0YXNldCl7XHJcbiAgICAvLyAgICAgZm9yKCB2YXIgaSA9IDAgOyBpIDwgZGF0YXNldC5sZW5ndGggOyBpICsrICl7XHJcbiAgICAvLyAgICAgICAgIGRhdGFzZXRbaV0uX19pZHggPSBpKzE7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfTtcclxuXHJcbiAgICBTcEdyaWQucHJvdG90eXBlLmdldEZpbHRlck9wdGlvbnMgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ncmlkT3B0aW9ucy5maWx0ZXJPcHRpb25zO1xyXG4gICAgfTtcclxuXHJcbiAgICBTcEdyaWQucHJvdG90eXBlLmdldFBhZ2VTaXplID0gZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ3JpZE9wdGlvbnMucGFnaW5nT3B0aW9ucy5wYWdlU2l6ZTtcclxuICAgIH07XHJcblxyXG4gICAgU3BHcmlkLnByb3RvdHlwZS5nZXRDdXJyZW50UGFnZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyaWRPcHRpb25zLnBhZ2luZ09wdGlvbnMuY3VycmVudFBhZ2U7XHJcbiAgICB9O1xyXG5cclxuICAgIFNwR3JpZC5wcm90b3R5cGUuZ2V0VG90YWxSZWNvcmRDb3VudCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YSgpLmxlbmd0aDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7U3BHcmlkLl9kZWZhdWx0T3B0aW9ucy5wYWdpbmdPcHRpb25zfHtjdXJyZW50UGFnZSwgcGFnZVNpemV9fVxyXG4gICAgICovXHJcbiAgICBTcEdyaWQucHJvdG90eXBlLmdldFBhZ2luZ09wdGlvbnMgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ncmlkT3B0aW9ucy5wYWdpbmdPcHRpb25zO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog65Ox66Gd7ZWgIEZ1bmN0aW9uIExpc3RcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cclxuICAgICAqL1xyXG4gICAgU3BHcmlkLnByb3RvdHlwZS5nZXRSZWdpc3RlckZ1bmN0aW9uID0gZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ3JpZE9wdGlvbnMucmVnaXN0ZXJGdW5jdGlvbjtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdyaWQg7Lus65+8IERlZmluZSDrqqnroZ0g66as7YS0XHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XHJcbiAgICAgKi9cclxuICAgIFNwR3JpZC5wcm90b3R5cGUuZ2V0Q29sdW1uRGVmID0gZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ3JpZE9wdGlvbnMuY29sdW1uRGVmO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9yaWdpbmFsIERhdGFzZXQg66as7YS0XHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG4gICAgU3BHcmlkLnByb3RvdHlwZS5nZXRPcmlnaW5hbERhdGEgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vcmlnaW5hbERhdGFzZXQ7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHcmlkIERhdGFzZXQg66as7YS0XHJcbiAgICAgKiBAcmV0dXJucyB7RE9NU3RyaW5nTWFwfEFycmF5fCp9XHJcbiAgICAgKi9cclxuICAgIFNwR3JpZC5wcm90b3R5cGUuZ2V0RGF0YSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyaWRPcHRpb25zLmRhdGFzZXQ7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR3JpZCBEYXRhc2V0IOyEpOyglVxyXG4gICAgICogQHBhcmFtIGRhdGFzZXRcclxuICAgICAqIEByZXR1cm5zIHtTcEdyaWR9XHJcbiAgICAgKi9cclxuICAgIFNwR3JpZC5wcm90b3R5cGUuc2V0RGF0YSA9IGZ1bmN0aW9uKCBkYXRhc2V0ICl7XHJcbiAgICAgICAgLy8gdGhpcy5nZW5lcmF0ZUlkeCggZGF0YXNldCApO1xyXG4gICAgICAgIGFuZ3VsYXIuY29weShkYXRhc2V0LHRoaXMuX2dyaWRPcHRpb25zLmRhdGFzZXQpO1xyXG4gICAgICAgIGFuZ3VsYXIuY29weSh0aGlzLl9ncmlkT3B0aW9ucy5kYXRhc2V0LHRoaXMuX29yaWdpbmFsRGF0YXNldCApO1xyXG4gICAgICAgIC8vIHRoaXMuX2dyaWRPcHRpb25zLmRhdGFzZXQgPSBkYXRhc2V0O1xyXG4gICAgICAgIC8vIHRoaXMuX29yaWdpbmFsRGF0YXNldCA9IGFuZ3VsYXIuY29weSggdGhpcy5fZ3JpZE9wdGlvbnMuZGF0YXNldCApO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdyaWQg7IKs7J207KaIKOuEiOu5hCzrhpLsnbQpIOumrO2EtFxyXG4gICAgICogQHJldHVybnMge1NwR3JpZC5fZGVmYXVsdE9wdGlvbnMuZ3JpZFNpemV8e3dpZHRoLCBoZWlnaHR9fCp9XHJcbiAgICAgKi9cclxuICAgIFNwR3JpZC5wcm90b3R5cGUuZ2V0U2l6ZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyaWRPcHRpb25zLmdyaWRTaXplO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdyaWQg7IKs7J207KaIKOuEiOu5hCzrhpLsnbQpIOyEpOyglVxyXG4gICAgICogQHBhcmFtIHNpemVcclxuICAgICAqIEByZXR1cm5zIHtTcEdyaWR9XHJcbiAgICAgKi9cclxuICAgIFNwR3JpZC5wcm90b3R5cGUuc2V0U2l6ZSA9IGZ1bmN0aW9uKCBzaXplICl7XHJcbiAgICAgICAgdGhpcy5fZ3JpZE9wdGlvbnMuZ3JpZFNpemUgPSBzaXplO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdyaWQgRWRpdE1vZGUg66as7YS0XHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbnwqfVxyXG4gICAgICovXHJcbiAgICBTcEdyaWQucHJvdG90eXBlLmlzRWRpdE1vZGUgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ncmlkT3B0aW9ucy5lZGl0TW9kZTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHcmlkIEVkaXRNb2RlIOyEpOyglVxyXG4gICAgICogQHBhcmFtIGVkaXRNb2RlXHJcbiAgICAgKiBAcmV0dXJucyB7U3BHcmlkfVxyXG4gICAgICovXHJcbiAgICBTcEdyaWQucHJvdG90eXBlLnNldEVkaXRNb2RlID0gZnVuY3Rpb24oIGVkaXRNb2RlICl7XHJcbiAgICAgICAgdGhpcy5fZ3JpZE9wdGlvbnMuZWRpdE1vZGUgPSBlZGl0TW9kZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHcmlkIOuhnOyasCDstpTqsIBcclxuICAgICAqL1xyXG4gICAgU3BHcmlkLnByb3RvdHlwZS5hZGRFbXB0eVJvdyA9IGZ1bmN0aW9uKCApe1xyXG4gICAgICAgIHZhciBfY29sdW1ucyA9IHRoaXMuZ2V0Q29sdW1uRGVmKCk7XHJcbiAgICAgICAgdmFyIF9yb3cgICAgID0ge307XHJcblxyXG4gICAgICAgIGlmKCB0aGlzLmlzU3RhdHVzQ2hhbmdlZCgpICl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciggdmFyIGkgPSAwIDsgaSA8IF9jb2x1bW5zLmxlbmd0aCA7IGkgKysgKXtcclxuICAgICAgICAgICAgX3Jvd1tfY29sdW1uc1tpXS5pZF0gPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfcm93LmN1ZEZsYWcgPSBTcEdyaWRDb25zdGFudC5DUkVBVEVfRkxBRztcclxuICAgICAgICB0aGlzLnNldFN0YXR1cyhcImNyZWF0ZVwiKTtcclxuICAgICAgICB0aGlzLmdldENyZWF0ZURhdGEoKS5wdXNoKF9yb3cpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHcmlkIOuzgOqyveuQnCDroZzsmrAg66as7YS0XHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XHJcbiAgICAgKi9cclxuICAgIFNwR3JpZC5wcm90b3R5cGUuZ2V0Q2hhbmdlZFJvdyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIF9yZXN1bHQgPSBbXTtcclxuICAgICAgICB2YXIgX2RhdGFzZXQgPSB0aGlzLmdldERhdGEoKTtcclxuICAgICAgICBmb3IoIHZhciBpID0gMCA7IGkgPCBfZGF0YXNldC5sZW5ndGggOyBpICsrICl7XHJcbiAgICAgICAgICAgIGlmKCBfZGF0YXNldFtpXSAmJiBfZGF0YXNldFtpXS5oYXNPd25Qcm9wZXJ0eShcImN1ZEZsYWdcIilcclxuICAgICAgICAgICAgICAgICYmIF9kYXRhc2V0W2ldLmN1ZEZsYWcgIT0gXCJcIiAmJiBfZGF0YXNldFtpXS5fX3ZhbGlkICl7XHJcbiAgICAgICAgICAgICAgICBfcmVzdWx0LnB1c2goX2RhdGFzZXRbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfcmVzdWx0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTcEdyaWQ7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXBwKXtcclxuICAgIGFwcC5mYWN0b3J5KFwiU3BHcmlkXCIsIFNwR3JpZCk7XHJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZmFjdG9yaWVzL1NwR3JpZC5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gU3BHcmlkVXRpbCgpe1xyXG4gICAgcmV0dXJuICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog67Cw7Je07JWI7JeQIOqwneyytOulvCDtg5Dsg4ntlbTshJwg7JuQ7ZWY64qUIO2VhOuTnOqwkuydhCDrpqzthLRcclxuICAgICAgICAgKiBAcGFyYW0gYXJyYXkgLSDrsLDsl7RcclxuICAgICAgICAgKiBAcGFyYW0ga2V5IC0g7YKk6rCSXHJcbiAgICAgICAgICogQHBhcmFtIHNvdXJjZUZpZWxkIC0g7IaM7Iqk7ZWE65OcXHJcbiAgICAgICAgICogQHBhcmFtIHRhcmdldEZpZWxkIC0g7YOA6rKf7ZWE65OcXHJcbiAgICAgICAgICogQHJldHVybnMgdGFyZ2V0VmFsdWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRNYXBEYXRhIDogZnVuY3Rpb24oIGFycmF5LCBrZXksIHNvdXJjZUZpZWxkLCB0YXJnZXRGaWVsZCApe1xyXG4gICAgICAgICAgICBmb3IoIHZhciBpID0gMCA7IGkgPCBhcnJheS5sZW5ndGggOyBpICsrICl7XHJcbiAgICAgICAgICAgICAgICBpZiggYXJyYXlbaV1bc291cmNlRmllbGRdID09IGtleSApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJheVtpXVt0YXJnZXRGaWVsZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldEZ1bmN0aW9uTmFtZSA6IGZ1bmN0aW9uKCBmdW5jIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIE1hdGNoOlxyXG4gICAgICAgICAgICAvLyAtIF4gICAgICAgICAgdGhlIGJlZ2lubmluZyBvZiB0aGUgc3RyaW5nXHJcbiAgICAgICAgICAgIC8vIC0gZnVuY3Rpb24gICB0aGUgd29yZCAnZnVuY3Rpb24nXHJcbiAgICAgICAgICAgIC8vIC0gXFxzKyAgICAgICAgYXQgbGVhc3Qgc29tZSB3aGl0ZSBzcGFjZVxyXG4gICAgICAgICAgICAvLyAtIChbXFx3XFwkXSspICBjYXB0dXJlIG9uZSBvciBtb3JlIHZhbGlkIEphdmFTY3JpcHQgaWRlbnRpZmllciBjaGFyYWN0ZXJzXHJcbiAgICAgICAgICAgIC8vIC0gXFxzKiAgICAgICAgb3B0aW9uYWxseSBmb2xsb3dlZCBieSB3aGl0ZSBzcGFjZSAoaW4gdGhlb3J5IHRoZXJlIHdvbid0IGJlIGFueSBoZXJlLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgc28gaWYgcGVyZm9ybWFuY2UgaXMgYW4gaXNzdWUgdGhpcyBjYW4gYmUgb21pdHRlZFsxXVxyXG4gICAgICAgICAgICAvLyAtIFxcKCAgICAgICAgIGZvbGxvd2VkIGJ5IGFuIG9wZW5pbmcgYnJhY2VcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IC9eZnVuY3Rpb25cXHMrKFtcXHdcXCRdKylcXHMqXFwoLy5leGVjKCBmdW5jLnRvU3RyaW5nKCkgKVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICByZXN1bHQgID8gIHJlc3VsdFsgMSBdICA6ICAnJyAvLyBmb3IgYW4gYW5vbnltb3VzIGZ1bmN0aW9uIHRoZXJlIHdvbid0IGJlIGEgbWF0Y2hcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFZhbGlkYXRlT2JqZWN0IDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIF92YWxpZGF0ZU9iamVjdCA9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgOiBmdW5jdGlvbiggdmFsdWUgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9IFwiXCIgJiYgdmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGggOiBmdW5jdGlvbiggZGF0YSwgb2JqICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBvYmoudmFsdWUgPT0gXCJcIiB8fCBvYmoudmFsdWUgPT0gbnVsbCB8fCBvYmoudmFsdWUgPT09IHVuZGVmaW5lZCApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFtcIk1pbkxlbmd0aCDsobDqsbTsnYAgdmFsdWXqsJLsnYQg64Sj7Ja07KO87IWU7JW8IO2VqeuLiOuLpC5cIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmxlbmd0aCA+IG9iai52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aCA6IGZ1bmN0aW9uKCBkYXRhLCBvYmogKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIG9iai52YWx1ZSA9PSBcIlwiIHx8IG9iai52YWx1ZSA9PSBudWxsIHx8IG9iai52YWx1ZSA9PT0gdW5kZWZpbmVkICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoW1wiTWF4TGVuZ3RoIOyhsOqxtOydgCB2YWx1ZeqwkuydhCDrhKPslrTso7zshZTslbwg7ZWp64uI64ukLlwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEubGVuZ3RoIDwgb2JqLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gX3ZhbGlkYXRlT2JqZWN0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiggYXBwICl7XHJcbiAgICBhcHAuZmFjdG9yeShcIlNwR3JpZFV0aWxcIiwgU3BHcmlkVXRpbCApO1xyXG59O1xyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZmFjdG9yaWVzL1NwR3JpZFV0aWwuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG5mdW5jdGlvbiBzcEdyaWRDb250cm9sbGVyKCAkc2NvcGUsIFNwR3JpZFV0aWwgKXtcclxuICAgIHZhciBfZ3JpZE9iamVjdCAgPSAkc2NvcGUuZ3JpZE9iamVjdDtcclxuICAgIHZhciBfZ3JpZENvbHVtbnMgPSBfZ3JpZE9iamVjdC5nZXRDb2x1bW5EZWYoKTtcclxuXHJcbiAgICB2YXIgX2dyaWRDb2x1bW5JZHMgPSBnZXRHcmlkQ29sdW1uSWRzKCk7XHJcblxyXG5cclxuICAgICRzY29wZS5pbml0ID0gaW5pdDtcclxuXHJcbiAgICAkc2NvcGUuZmlsdGVyRGF0YUNvbHVtbiA9IGZpbHRlckRhdGFDb2x1bW47XHJcblxyXG4gICAgJHNjb3BlLmdldENvbHVtbkRhdGEgPSBnZXRDb2x1bW5EYXRhO1xyXG5cclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgICAgICByZWdpc3RlckZ1bmN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEhlYWRlciBDb2x1bW4g7J2YIOyVhOydtOuUlCDqsJLrp4wg67Cw7Je066GcIOumrO2EtFxyXG4gICAgICogQHJldHVybnMge0FycmF5fVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRHcmlkQ29sdW1uSWRzKCl7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaCggX2dyaWRDb2x1bW5zLCBmdW5jdGlvbiggY29sICl7XHJcbiAgICAgICAgICAgIGlmKCBjb2wuaGFzT3duUHJvcGVydHkoXCJpZFwiKSlcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbC5pZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGhlYWRlciBDb2x1bW7sl5Ag7J6I64qUIOyVoOuTpOunjCBkaXNwbGF5IO2VqFxyXG4gICAgICogQHBhcmFtIGRhdGFcclxuICAgICAqIEByZXR1cm5zIHt7fX0gLSBmaWx0ZXIgT2JqZWN0XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGZpbHRlckRhdGFDb2x1bW4oIGRhdGEgKXtcclxuICAgICAgICB2YXIgcmVzdWx0ICAgICAgPSB7fTtcclxuICAgICAgICB2YXIgX2NvbHVtbnMgICAgPSB0aGlzLmdldENvbHVtbkRlZigpO1xyXG5cclxuICAgICAgICBhbmd1bGFyLmZvckVhY2goIGRhdGEsIGZ1bmN0aW9uKCB2YWx1ZSwga2V5ICl7XHJcbiAgICAgICAgICAgIGlmKCBfZ3JpZENvbHVtbklkcy5pbmRleE9mKGtleSkgIT0gLTEgKXtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpZCDqsJLsnLzroZwg7Lus65+8IOuEiOu5hOulvCDqtaztlbTsmLRcclxuICAgICAqIEBwYXJhbSBpZFxyXG4gICAgICogQHBhcmFtIHRhcmdldEZpZWxkXHJcbiAgICAgKiBAcmV0dXJucyB7Knx0YXJnZXRWYWx1ZX1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0Q29sdW1uRGF0YSggaWQsIHRhcmdldEZpZWxkICl7XHJcbiAgICAgICAgcmV0dXJuIFNwR3JpZFV0aWwuZ2V0TWFwRGF0YSggX2dyaWRDb2x1bW5zLCBpZCwgJ2lkJywgdGFyZ2V0RmllbGQgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJGdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBfZnVuY3Rpb25zID0gX2dyaWRPYmplY3QuZ2V0UmVnaXN0ZXJGdW5jdGlvbigpO1xyXG4gICAgICAgIGZvciggdmFyIGkgPSAwIDsgaSA8IF9mdW5jdGlvbnMubGVuZ3RoIDsgaSArKyApe1xyXG4gICAgICAgICAgICAkc2NvcGVbU3BHcmlkVXRpbC5nZXRGdW5jdGlvbk5hbWUoX2Z1bmN0aW9uc1tpXSldID0gX2Z1bmN0aW9uc1tpXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBpbml0KCk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCBhcHAgKXtcclxuICAgIGFwcC5jb250cm9sbGVyKFwic3BHcmlkQ29udHJvbGxlclwiLCBzcEdyaWRDb250cm9sbGVyKTtcclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250cm9sbGVycy9zcEdyaWRDb250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBzcEdyaWRCb2R5Q29udHJvbGxlciggJHNjb3BlICl7XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFwcCl7XHJcbiAgICBhcHAuY29udHJvbGxlcihcInNwR3JpZEJvZHlDb250cm9sbGVyXCIsc3BHcmlkQm9keUNvbnRyb2xsZXIpO1xyXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRyb2xsZXJzL3NwR3JpZEJvZHlDb250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuICogR3JpZCDsoITssrQg7JiB7JetIERpcmVjdGl2ZVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIHNwR3JpZCggJGNvbXBpbGUsIFNwR3JpZENvbnN0YW50LCBvcmRlckJ5RmlsdGVyICl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0IDogXCJFXCIsXHJcbiAgICAgICAgc2NvcGUgOiB7XHJcbiAgICAgICAgICAgIFwiZ3JpZE9iamVjdFwiIDogXCI9XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRyb2xsZXIgOiBcInNwR3JpZENvbnRyb2xsZXJcIixcclxuICAgICAgICB0ZW1wbGF0ZVVybCA6IFNwR3JpZENvbnN0YW50LnRlbXBsYXRlLlNQX0dSSUQsXHJcbiAgICAgICAgbGluayA6IGZ1bmN0aW9uKCBzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmxzLCB0cmFuc2NsdWRlICl7XHJcblxyXG4gICAgICAgICAgICAvLyBzY29wZS5vcmRlckNvbHVtbiA9IFwiXCI7XHJcbiAgICAgICAgICAgIC8vIHNjb3BlLm9yZGVyUmV2ZXJzZSA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAgICAgc2NvcGUub3JkZXJDaGFuZ2UgPSBvcmRlckNoYW5nZTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9yZGVyQ2hhbmdlKCBjb2x1bW5JZCwgb3JkZXJCeSApe1xyXG4gICAgICAgICAgICAgICAgaWYoIG9yZGVyQnkgPT0gXCJhc2NcIiApe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNjb3BlLm9yZGVyQ29sdW1uID0gXCItXCIgKyBjb2x1bW5JZDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzY29wZS5vcmRlclJldmVyc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmdyaWRPYmplY3Quc2V0RGF0YShvcmRlckJ5RmlsdGVyKHNjb3BlLmdyaWRPYmplY3QuZ2V0RGF0YSgpLFwiLVwiICsgY29sdW1uSWQsIHRydWUpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIG9yZGVyQnkgPT0gXCJkZXNjXCIgKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzY29wZS5vcmRlckNvbHVtbiA9IFwiLVwiICsgY29sdW1uSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2NvcGUub3JkZXJSZXZlcnNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuZ3JpZE9iamVjdC5zZXREYXRhKG9yZGVyQnlGaWx0ZXIoc2NvcGUuZ3JpZE9iamVjdC5nZXREYXRhKCksXCItXCIgKyBjb2x1bW5JZCwgZmFsc2UpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXBwKXtcclxuICAgIGFwcC5kaXJlY3RpdmUoXCJzcEdyaWRcIiwgc3BHcmlkKTtcclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kaXJlY3RpdmVzL3NwR3JpZC5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIEdyaWQgSGVhZGVyIFdyYXAgRGlyZWN0aXZlXHJcbiAqL1xyXG5mdW5jdGlvbiBzcEdyaWRIZWFkZXIoICRjb21waWxlLCBTcEdyaWRDb25zdGFudCl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0IDogXCJFXCIsXHJcbiAgICAgICAgY29udHJvbGxlciA6IFwic3BHcmlkQ29udHJvbGxlclwiLFxyXG4gICAgICAgIHJlcXVpcmUgOiBcIl5zcEdyaWRcIixcclxuICAgICAgICByZXBsYWNlIDogdHJ1ZSxcclxuICAgICAgICB0ZW1wbGF0ZVVybCA6IFNwR3JpZENvbnN0YW50LnRlbXBsYXRlLlNQX0dSSURfSEVBREVSLFxyXG4gICAgICAgIGxpbmsgOiBmdW5jdGlvbiggc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJscywgdHJhbnNjbHVkZSApe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNwR3JpZEhlYWRlclwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXBwKXtcclxuICAgIGFwcC5kaXJlY3RpdmUoXCJzcEdyaWRIZWFkZXJcIiwgc3BHcmlkSGVhZGVyKTtcclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kaXJlY3RpdmVzL3NwR3JpZEhlYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIEdyaWQgSGVhZGVyIFJvdyBEaXJlY3RpdmVcclxuICovXHJcbmZ1bmN0aW9uIHNwR3JpZEhlYWRlclJvdyggJGNvbXBpbGUsIFNwR3JpZENvbnN0YW50ICl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0IDogXCJFXCIsXHJcbiAgICAgICAgY29udHJvbGxlciA6IFwic3BHcmlkQ29udHJvbGxlclwiLFxyXG4gICAgICAgIHJlcXVpcmUgOiBcIl5zcEdyaWRIZWFkZXJcIixcclxuICAgICAgICByZXBsYWNlIDogdHJ1ZSxcclxuICAgICAgICB0ZW1wbGF0ZVVybCA6IFNwR3JpZENvbnN0YW50LnRlbXBsYXRlLlNQX0dSSURfSEVBREVSX1JPVyxcclxuICAgICAgICBsaW5rIDogZnVuY3Rpb24oIHNjb3BlLCBlbGVtZW50LCBhdHRycyApe1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFwcCl7XHJcbiAgICBhcHAuZGlyZWN0aXZlKFwic3BHcmlkSGVhZGVyUm93XCIsIHNwR3JpZEhlYWRlclJvdyk7XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kaXJlY3RpdmVzL3NwR3JpZEhlYWRlclJvdy5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIEdyaWQgSGVhZGVyIENvbHVtbiBEaXJlY3RpdmVcclxuICovXHJcbmZ1bmN0aW9uIHNwR3JpZEhlYWRlckNvbHVtbiggU3BHcmlkQ29uc3RhbnQpe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdCA6IFwiRVwiLFxyXG4gICAgICAgIGNvbnRyb2xsZXIgOiBcInNwR3JpZENvbnRyb2xsZXJcIixcclxuICAgICAgICByZXF1aXJlIDogXCJec3BHcmlkSGVhZGVyUm93XCIsXHJcbiAgICAgICAgcmVwbGFjZSA6IHRydWUsXHJcbiAgICAgICAgdGVtcGxhdGVVcmwgOiBTcEdyaWRDb25zdGFudC50ZW1wbGF0ZS5TUF9HUklEX0hFQURFUl9DT0xVTU4sXHJcbiAgICAgICAgbGluayA6IGZ1bmN0aW9uKCBzY29wZSwgZWxlbWVudCwgYXR0cil7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFwcCl7XHJcbiAgICBhcHAuZGlyZWN0aXZlKFwic3BHcmlkSGVhZGVyQ29sdW1uXCIsIHNwR3JpZEhlYWRlckNvbHVtbik7XHJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGlyZWN0aXZlcy9zcEdyaWRIZWFkZXJDb2x1bW4uanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiBHcmlkIEJvZHkgV3JhcCBEaXJlY3RpdmVcclxuICovXHJcblxyXG5mdW5jdGlvbiBzcEdyaWRCb2R5KCRjb21waWxlLCBTcEdyaWRDb25zdGFudCwgJHRlbXBsYXRlQ2FjaGUgKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3QgOiBcIkVcIixcclxuICAgICAgICBjb250cm9sbGVyIDogXCJzcEdyaWRCb2R5Q29udHJvbGxlclwiLFxyXG4gICAgICAgIHJlcXVpcmUgOiBcIl5zcEdyaWRcIixcclxuICAgICAgICByZXBsYWNlIDogdHJ1ZSxcclxuICAgICAgICB0ZW1wbGF0ZVVybCA6IFNwR3JpZENvbnN0YW50LnRlbXBsYXRlLlNQX0dSSURfQk9EWSxcclxuICAgICAgICBsaW5rIDogZnVuY3Rpb24oIHNjb3BlLCBlbGVtZW50LCBhdHRyICl7XHJcbiAgICAgICAgICAgIHNjb3BlLmlzQ29udGV4dE1lbnVTaG93ICAgPSBmYWxzZTtcclxuICAgICAgICAgICAgc2NvcGUucmlnaHRDbGlja1Bvc2l0aW9uID0ge307XHJcblxyXG4gICAgICAgICAgICBzY29wZS5vcGVuQ29udGV4dE1lbnUgICAgID0gb3BlbkNvbnRleHRNZW51O1xyXG5cclxuICAgICAgICAgICAgc2NvcGUuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgc2NvcGUuJHdhdGNoKFwiZ3JpZE9iamVjdC5nZXRQYWdpbmdPcHRpb25zKClcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZhciBfY3VycmVudFBhZ2UgPSBzY29wZS5ncmlkT2JqZWN0LmdldEN1cnJlbnRQYWdlKCkgfHwgMTtcclxuICAgICAgICAgICAgICAgIHZhciBfcGFnZVNpemUgICAgPSBzY29wZS5ncmlkT2JqZWN0LmdldFBhZ2VTaXplKCk7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5zdGFydCAgICA9IChfY3VycmVudFBhZ2UtMSkgKiBfcGFnZVNpemU7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5wYWdlU2l6ZSA9IF9wYWdlU2l6ZTtcclxuICAgICAgICAgICAgICAgIC8vIHNjb3BlLiRyb3dzICAgICAgICAgICAgICAgPSByYW5nZSggc2NvcGUuZ3JpZE9iamVjdC5nZXREYXRhKCksIHNjb3BlLnN0YXJ0LCBzY29wZS5zdGFydCArIHNjb3BlLnBhZ2VTaXplICk7XHJcbiAgICAgICAgICAgIH0sIHRydWUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9wZW5Db250ZXh0TWVudSggZXZlbnQsIGluZGV4LCByb3dNYW5hZ2VyICl7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5yb3dNYW5hZ2VyID0gcm93TWFuYWdlcjtcclxuICAgICAgICAgICAgICAgIHNjb3BlLnJpZ2h0Q2xpY2tQb3NpdGlvbi5jdXJyZW50WCA9IGV2ZW50LnBhZ2VYICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIHNjb3BlLnJpZ2h0Q2xpY2tQb3NpdGlvbi5jdXJyZW50WSA9IGV2ZW50LnBhZ2VZICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIHNjb3BlLmlzQ29udGV4dE1lbnVTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNjcm9sbFRvcCgpe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxUb3AoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXBwKXtcclxuICAgIGFwcC5kaXJlY3RpdmUoXCJzcEdyaWRCb2R5XCIsIHNwR3JpZEJvZHkpO1xyXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RpcmVjdGl2ZXMvc3BHcmlkQm9keS5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIEdyaWQgRGF0YSBSb3cgRGlyZWN0aXZlXHJcbiAqL1xyXG5mdW5jdGlvbiBzcEdyaWREYXRhUm93KCBTcEdyaWRDb25zdGFudCwgU3BHcmlkVXRpbCApe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdCA6IFwiRVwiLFxyXG4gICAgICAgIGNvbnRyb2xsZXIgOiBcInNwR3JpZEJvZHlDb250cm9sbGVyXCIsXHJcbiAgICAgICAgcmVxdWlyZSA6IFwiXnNwR3JpZEJvZHlcIixcclxuICAgICAgICByZXBsYWNlIDogdHJ1ZSxcclxuICAgICAgICB0ZW1wbGF0ZVVybCA6IFNwR3JpZENvbnN0YW50LnRlbXBsYXRlLlNQX0dSSURfREFUQV9ST1csXHJcbiAgICAgICAgbGluayA6IGZ1bmN0aW9uKCBzY29wZSwgZWxlbWVudCwgYXR0cil7XHJcbiAgICAgICAgICAgIHNjb3BlLnJpZ2h0Q2xpY2tQb3NpdGlvbiA9IHt9O1xyXG5cclxuICAgICAgICAgICAgc2NvcGUub25HcmlkRGF0YVJvd0NsaWNrID0gb25HcmlkRGF0YVJvd0NsaWNrO1xyXG5cclxuICAgICAgICAgICAgc2NvcGUuY2hlY2tSb3dWYWxpZCAgICAgID0gY2hlY2tSb3dWYWxpZDtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLmlzVGVtcFNhdmUgICAgICAgICA9IGlzVGVtcFNhdmU7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogR3JpZCBEYXRhIFJvdyDtgbTrpq3si5wg6riw67O4IEFjdGlvbiDqs7wg7Luk7Iqk7YWAIEFjdGlvbiDrj5nsnpFcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uR3JpZERhdGFSb3dDbGljayggcm93ICl7XHJcbiAgICAgICAgICAgICAgICAvL1RPRE8g6re466as65OcIOyYpOu4jOygne2KuOulvCDthrXtlbQg7Luk7Iqk7YWAIOydtOuypO2KuCDrk7HroZ3snbQg6rCA64ql7ZWY64+E66GdIOyhsOyglSBncmlkT2JqZWN0LmdyaWRBY3Rpb25cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvdyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrUm93VmFsaWQoKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZS5yb3cuaGFzT3duUHJvcGVydHkoXCJfX3ZhbGlkXCIpICYmIHNjb3BlLnJvdy5fX3ZhbGlkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBpc1RlbXBTYXZlKCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGUucm93Lmhhc093blByb3BlcnR5KFwiX19pc1RlbXBTYXZlXCIpICYmIHNjb3BlLnJvdy5fX2lzVGVtcFNhdmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBHcmlkIERhdGEgUm93IEVkaXRNb2RlIOuzgOqyvVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2NvcGUucm93RWRpdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYoIHNjb3BlLmdyaWRPYmplY3QuaXNTdGF0dXNDaGFuZ2VkKCkgKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoICFzY29wZS5yb3cuaGFzT3duUHJvcGVydHkoXCJjdWRGbGFnXCIpICApe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnJvdy5fb3JpZ2luYWxSb3cgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAvL0RlZXAgQ29weVxyXG4gICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuY29weShzY29wZS5yb3csIHNjb3BlLnJvdy5fb3JpZ2luYWxSb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnJvdy5jdWRGbGFnICAgICAgPSBTcEdyaWRDb25zdGFudC5VUERBVEVfRkxBRztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5yb3cuX19pc1RlbXBTYXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5ncmlkT2JqZWN0LnNldFN0YXR1cyhcImVkaXRcIik7XHJcbiAgICAgICAgICAgICAgICBzY29wZS4kYnJvYWRjYXN0KFwiY2hhbmdlTW9kZVwiKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBHcmlkIERhdGEgUm93IFZpZXdNb2RlIOuzgOqyvVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2NvcGUucm93UmV2ZXJ0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIC8vRGVlcCBDb3B5XHJcbiAgICAgICAgICAgICAgICBpZiggc2NvcGUucm93LmN1ZEZsYWcgPT0gU3BHcmlkQ29uc3RhbnQuQ1JFQVRFX0ZMQUcgKXtcclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5ncmlkT2JqZWN0LmdldENyZWF0ZURhdGEoKS5zcGxpY2UoMCwxKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5jb3B5KHNjb3BlLnJvdy5fb3JpZ2luYWxSb3csIHNjb3BlLnJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuJGJyb2FkY2FzdChcImNoYW5nZU1vZGVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzY29wZS5ncmlkT2JqZWN0LnNldFN0YXR1cyhcIlwiKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBHcmlkIERhdGEgUm93IERlbGV0ZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2NvcGUucm93RGVsZXRlID0gIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBpZiggc2NvcGUuZ3JpZE9iamVjdC5pc1N0YXR1c0NoYW5nZWQoKSApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzY29wZS5yb3cuY3VkRmxhZyA9IFNwR3JpZENvbnN0YW50LkRFTEVURV9GTEFHO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgc2NvcGUuaXNSb3dFZGl0dGluZyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBpZiggc2NvcGUucm93Lmhhc093blByb3BlcnR5KFwiY3VkRmxhZ1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHNjb3BlLnJvdy5jdWRGbGFnID09IFNwR3JpZENvbnN0YW50LlVQREFURV9GTEFHICl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBzY29wZS5pc1Jvd0FkZGluZyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBpZiggc2NvcGUucm93Lmhhc093blByb3BlcnR5KFwiY3VkRmxhZ1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHNjb3BlLnJvdy5jdWRGbGFnID09IFNwR3JpZENvbnN0YW50LkNSRUFURV9GTEFHICl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogR3JpZCBEYXRhIFJvdyDsgq3soJzrkJwg66Gc7Jqw7J247KeAIOyytO2BrFxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNjb3BlLmlzUm93RGVsZXRlZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBpZiggc2NvcGUucm93Lmhhc093blByb3BlcnR5KFwiY3VkRmxhZ1wiKSApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzY29wZS5yb3cuY3VkRmxhZyA9PSBTcEdyaWRDb25zdGFudC5ERUxFVEVfRkxBRztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNjb3BlLnZhbGlkYXRlID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZhciBfaGVhZGVyQ29sdW1ucyAgID0gc2NvcGUuZ3JpZE9iamVjdC5nZXRDb2x1bW5EZWYoKTtcclxuICAgICAgICAgICAgICAgIHZhciBfdmFsaWRhdGVPYmplY3QgID0gU3BHcmlkVXRpbC5nZXRWYWxpZGF0ZU9iamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIF9pbnZhbGlkQXJyYXkgID0gW107XHJcbiAgICAgICAgICAgICAgICAvL+uvuOumrOygleydmOuQnCDsnKDtmqjshLHqsoDsgqwg7ZWo7IiYXHJcbiAgICAgICAgICAgICAgICB2YXIgX2RlZmluZVZhbGlkYXRlRm4gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgLy/sgqzsmqnsnpDsoJXsnZgg7Jyg7Zqo7ISx6rKA7IKsIO2VqOyImFxyXG4gICAgICAgICAgICAgICAgdmFyIF9jdXN0b21WYWxpZGF0ZUZuID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goIF9oZWFkZXJDb2x1bW5zLCBmdW5jdGlvbiggX2NvbHVtbil7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIF9jb2x1bW4uaGFzT3duUHJvcGVydHkoXCJ2YWxpZGF0ZVwiKSAmJiBfY29sdW1uLnR5cGUgPT0gXCJkYXRhXCIgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKCBfY29sdW1uLnZhbGlkYXRlLCBmdW5jdGlvbiggb2JqLCBrZXkgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9kZWZpbmVWYWxpZGF0ZUZuID0gX3ZhbGlkYXRlT2JqZWN0W2tleV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoICFfZGVmaW5lVmFsaWRhdGVGbiApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCAhb2JqLmhhc093blByb3BlcnR5KFwiZm5cIikgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFtcIuyCrOyaqeyekCDsoJXsnZgg7Jyg7Zqo7ISx6rKA7IKsIO2YleyLneydtCDslrTquIvrgqnri4jri6QuIGZu7J2EIOyEoOyWuO2VtOyjvOyEuOyalFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2N1c3RvbVZhbGlkYXRlRm4gPSBvYmouZm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggIV9jdXN0b21WYWxpZGF0ZUZuKCBzY29wZS5yb3dbX2NvbHVtbi5pZF0sIHNjb3BlLnJvdykpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2ludmFsaWRBcnJheS5wdXNoKG9iai5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoICFfZGVmaW5lVmFsaWRhdGVGbiggc2NvcGUucm93W19jb2x1bW4uaWRdLCBvYmopICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pbnZhbGlkQXJyYXkucHVzaChvYmoubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAvKiAgdmFyIF9mb3JtID0gc2NvcGVbJ3Jvd0Zvcm0nICsgc2NvcGUuJGluZGV4XTtcclxuICAgICAgICAgICAgICAgIGlmKCBfZm9ybS4kZGlydHkgKXtcclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5ncmlkT2JqZWN0LmdldFZhbGlkYXRlQ2FsbGJhY2soKShcIuuzgOqyveuQnCDrgrTsmqnsnbQg7JeG7Iq164uI64ukXCIpO1xyXG4gICAgICAgICAgICAgICAgfSovXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoIF9pbnZhbGlkQXJyYXkubGVuZ3RoID4gMCApe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmdyaWRPYmplY3QuZ2V0VmFsaWRhdGVDYWxsYmFjaygpKF9pbnZhbGlkQXJyYXlbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIHNjb3BlLnJvdy5oYXNPd25Qcm9wZXJ0eShcImN1ZEZsYWdcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUucm93LmN1ZEZsYWcgPT0gU3BHcmlkQ29uc3RhbnQuQ1JFQVRFX0ZMQUcgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuZ3JpZE9iamVjdC5nZXREYXRhKCkudW5zaGlmdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLmdyaWRPYmplY3QuZ2V0Q3JlYXRlRGF0YSgpLnNwbGljZSgwLDEpWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnJvdy5fX3ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5yb3cuX19pc1RlbXBTYXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLmdyaWRPYmplY3Quc2V0U3RhdHVzKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuJGJyb2FkY2FzdChcImNoYW5nZU1vZGVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFwcCl7XHJcbiAgICBhcHAuZGlyZWN0aXZlKFwic3BHcmlkRGF0YVJvd1wiLCBzcEdyaWREYXRhUm93KTtcclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kaXJlY3RpdmVzL3NwR3JpZERhdGFSb3cuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiBHcmlkIERhdGEgQ29sdW1uIERpcmVjdGl2ZVxyXG4gKi9cclxuZnVuY3Rpb24gc3BHcmlkRGF0YUNvbHVtbiggJGNvbXBpbGUsIFNwR3JpZENvbnN0YW50LCAkdGVtcGxhdGVDYWNoZSwgJHRpbWVvdXQgKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3QgOiBcIkVcIixcclxuICAgICAgICBjb250cm9sbGVyIDogXCJzcEdyaWRDb250cm9sbGVyXCIsXHJcbiAgICAgICAgcmVxdWlyZSA6IFwiXnNwR3JpZERhdGFSb3dcIixcclxuICAgICAgICByZXBsYWNlIDogdHJ1ZSxcclxuICAgICAgICB0ZW1wbGF0ZVVybCA6IFNwR3JpZENvbnN0YW50LnRlbXBsYXRlLlNQX0dSSURfREFUQV9DT0xVTU4sXHJcbiAgICAgICAgbGluayA6IGZ1bmN0aW9uKCBzY29wZSwgZWxlbWVudCwgYXR0ciApe1xyXG4gICAgICAgICAgICB2YXIgX2hlYWRlckNvbHVtbiA9IHNjb3BlLmhlYWRlckNvbHVtbjtcclxuICAgICAgICAgICAgc2NvcGUuY29sdW1uV2lkdGggPSBfaGVhZGVyQ29sdW1uLndpZHRoO1xyXG4gICAgICAgICAgICBzY29wZS5jb2x1bW5IZWFkZXI9IF9oZWFkZXJDb2x1bW4ubmFtZTtcclxuICAgICAgICAgICAgc2NvcGUudHlwZSAgICAgICAgPSBfaGVhZGVyQ29sdW1uLnR5cGUgfHwgXCJkYXRhXCI7XHJcblxyXG4gICAgICAgICAgICBzY29wZS5pc1R5cGVIdG1sID0gaXNUeXBlSHRtbDtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLmlzVHlwZURhdGEgPSBpc1R5cGVEYXRhO1xyXG5cclxuICAgICAgICAgICAgc2NvcGUuaXNUeXBlUm93bm8gPSBpc1R5cGVSb3dubztcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX3BhZ2VTaXplID0gc2NvcGUuZ3JpZE9iamVjdC5nZXRQYWdlU2l6ZSgpO1xyXG4gICAgICAgICAgICB2YXIgX2N1cnJlbnRQYWdlID0gc2NvcGUuZ3JpZE9iamVjdC5nZXRDdXJyZW50UGFnZSgpIHx8IDE7XHJcbiAgICAgICAgICAgIGlmKCBzY29wZS5pc1R5cGVSb3dubygpICl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuZGlzcGxheURhdGEgPSAoX3BhZ2VTaXplICogKF9jdXJyZW50UGFnZS0xKSkgKyAoc2NvcGUuJHBhcmVudC4kaW5kZXggKyAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIHNjb3BlLmlzVHlwZURhdGEoKSApe1xyXG4gICAgICAgICAgICAgICAgLy9kYXRh7J247KeAIOyInOyImCBodG1sIOuwlOyduOuUqeyduOyngCDqtazrtoTtlbTshJwg7LKY66asXHJcbiAgICAgICAgICAgICAgICBzY29wZS5kaXNwbGF5RGF0YSA9IHNjb3BlLnJvd1tfaGVhZGVyQ29sdW1uLmlkXTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCBzY29wZS5pc1R5cGVIdG1sKCkgKSB7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5iaW5kSHRtbCAgICA9IF9oZWFkZXJDb2x1bW4uYmluZEh0bWw7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmZpbmQoXCIuc3AtZ3JpZC1kYXRhLWh0bWxcIikuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICRjb21waWxlKHNjb3BlLmJpbmRIdG1sKShzY29wZSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNoYW5nZU1vZGVCeUN1ZEZsYWcoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gaXNUeXBlUm93bm8oKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZS50eXBlID09ICdyb3dubyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzVHlwZURhdGEoKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZS50eXBlID09IFwiZGF0YVwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBpc1R5cGVIdG1sKCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGUudHlwZSA9PSBcImh0bWxcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjaGFuZ2VNb2RlQnlDdWRGbGFnKCl7XHJcbiAgICAgICAgICAgICAgICBpZiggc2NvcGUucm93Lmhhc093blByb3BlcnR5KFwiY3VkRmxhZ1wiKSAmJiBzY29wZS50eXBlID09IFwiZGF0YVwiKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiggc2NvcGUucm93LmN1ZEZsYWcgPT0gU3BHcmlkQ29uc3RhbnQuQ1JFQVRFX0ZMQUcgJiYgIXNjb3BlLmlzVGVtcFNhdmUoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRNb2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICggc2NvcGUucm93LmN1ZEZsYWcgPT0gU3BHcmlkQ29uc3RhbnQuVVBEQVRFX0ZMQUcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9oZWFkZXJDb2x1bW4uaGFzT3duUHJvcGVydHkoXCJlZGl0VHlwZVwiKSAmJiAhc2NvcGUuaXNUZW1wU2F2ZSgpICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRNb2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2aWV3TW9kZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBlZGl0TW9kZSgpe1xyXG4gICAgICAgICAgICAgICAgdmFyIF9ncmlkRGF0YVZpZXcgICAgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdmFyIF90eXBlTWFwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiIDogJHRlbXBsYXRlQ2FjaGUuZ2V0KFNwR3JpZENvbnN0YW50LnRlbXBsYXRlLkVESVRfSU5QVVQpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2hlY2tib3hcIiA6ICR0ZW1wbGF0ZUNhY2hlLmdldChTcEdyaWRDb25zdGFudC50ZW1wbGF0ZS5FRElUX0NIRUNLQk9YKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHZhciBfdHlwZU5hbWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdmFyIF9lZGl0VHlwZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgX2dyaWREYXRhVmlldyA9IGVsZW1lbnQuZmluZChcIi5zcC1ncmlkLWRhdGEtdmlld1wiKTtcclxuICAgICAgICAgICAgICAgIGlmICggX2hlYWRlckNvbHVtbi5oYXNPd25Qcm9wZXJ0eShcImVkaXRUeXBlXCIpICl7XHJcbiAgICAgICAgICAgICAgICAgICAgX2VkaXRUeXBlID0gX2hlYWRlckNvbHVtbi5lZGl0VHlwZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiggdHlwZW9mIF9lZGl0VHlwZSA9PSBcInN0cmluZ1wiICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90eXBlTmFtZSA9IF9lZGl0VHlwZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2YgX2VkaXRUeXBlID09IFwib2JqZWN0XCIgKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90eXBlTmFtZSA9IF9lZGl0VHlwZS5uYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF90eXBlTmFtZSA9PSBcImNoZWNrYm94XCIgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLmNoZWNrYm94ID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5jaGVja2JveC50cnVlVmFsdWUgPSBfZWRpdFR5cGUudHJ1ZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuY2hlY2tib3guZmFsc2VWYWx1ZSA9IF9lZGl0VHlwZS5mYWxzZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuY2hlY2tib3gubGFiZWwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF9ncmlkRGF0YVZpZXcucmVwbGFjZVdpdGgoXHJcbiAgICAgICAgICAgICAgICAgICAgJGNvbXBpbGUoX3R5cGVNYXBbX3R5cGVOYW1lXSApKHNjb3BlKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHZpZXdNb2RlKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2dyaWRFZGl0RWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBfZ3JpZEVkaXRFbGVtZW50ID0gZWxlbWVudC5maW5kKFwiLnNwLWdyaWQtZGF0YS1lZGl0XCIpO1xyXG4gICAgICAgICAgICAgICAgX2dyaWRFZGl0RWxlbWVudC5yZXBsYWNlV2l0aChcclxuICAgICAgICAgICAgICAgICAgICAkY29tcGlsZSggJHRlbXBsYXRlQ2FjaGUuZ2V0KFNwR3JpZENvbnN0YW50LnRlbXBsYXRlLkRBVEFfVklFVykpKHNjb3BlKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2NvcGUuJG9uKFwiY2hhbmdlTW9kZVwiLCBjaGFuZ2VNb2RlQnlDdWRGbGFnICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oIGFwcCApe1xyXG4gICAgYXBwLmRpcmVjdGl2ZShcInNwR3JpZERhdGFDb2x1bW5cIiwgc3BHcmlkRGF0YUNvbHVtbik7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RpcmVjdGl2ZXMvc3BHcmlkRGF0YUNvbHVtbi5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gbmdSaWdodENsaWNrKCRwYXJzZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG4gICAgICAgIHZhciBmbiA9ICRwYXJzZShhdHRycy5uZ1JpZ2h0Q2xpY2spO1xyXG4gICAgICAgIGVsZW1lbnQuYmluZCgnY29udGV4dG1lbnUnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZm4oc2NvcGUsIHskZXZlbnQ6ZXZlbnR9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcHApe1xyXG4gICAgYXBwLmRpcmVjdGl2ZShcIm5nUmlnaHRDbGlja1wiLCBuZ1JpZ2h0Q2xpY2spO1xyXG4gICAgYXBwLmZpbHRlcihcInRvX3RydXN0ZWRcIiwgWyckc2NlJywgZnVuY3Rpb24oJHNjZSl7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHRleHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc0h0bWwodGV4dCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1dKTtcclxuXHJcbiAgICBhcHAuZmlsdGVyKCdzdGFydEZyb20nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChpbnB1dCwgc3RhcnQpIHtcclxuICAgICAgICAgICAgaWYgKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydCA9ICtzdGFydDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dC5zbGljZShzdGFydCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kaXJlY3RpdmVzL3V0aWwvc3BVdGlsLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBzcEdyaWRQYWdpbmcoIFNwR3JpZENvbnN0YW50ICl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0IDogXCJFXCIsXHJcbiAgICAgICAgc2NvcGUgOiB7XHJcbiAgICAgICAgICAgIHBhZ2luZ09wdGlvbnMgOiBcIj1cIixcclxuICAgICAgICAgICAgb25QYWdlQ2xpY2sgICAgOiBcIiZcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVtcGxhdGVVcmwgOiBTcEdyaWRDb25zdGFudC50ZW1wbGF0ZS5TUF9HUklEX1BBR0lORyxcclxuICAgICAgICBsaW5rIDogZnVuY3Rpb24oIHNjb3BlLCBlbGVtZW50LCBhdHRycyApe1xyXG4gICAgICAgICAgICBzY29wZS5jdXJyZW50UGFnZSA9IHNjb3BlLnBhZ2luZ09wdGlvbnMuY3VycmVudFBhZ2UgfHwgMTtcclxuICAgICAgICAgICAgc2NvcGUucGFnZVNpemUgICAgPSBzY29wZS5wYWdpbmdPcHRpb25zLnBhZ2VTaXplO1xyXG4gICAgICAgICAgICBzY29wZS5wYWdlQmxvY2tTaXplID0gc2NvcGUucGFnaW5nT3B0aW9ucy5wYWdlQmxvY2tTaXplO1xyXG5cclxuICAgICAgICAgICAgc2NvcGUuJHdhdGNoKFwicGFnaW5nT3B0aW9uc1wiLCBmdW5jdGlvbiggbmV3T2JqICl7XHJcbiAgICAgICAgICAgICAgICBzY29wZS50b3RhbFJlY29yZENvdW50ID0gIG5ld09iai50b3RhbFJlY29yZENvdW50O1xyXG4gICAgICAgICAgICAgICAgc2NvcGUudG90YWxQYWdlICAgICAgICA9IE1hdGguY2VpbCggc2NvcGUudG90YWxSZWNvcmRDb3VudCAvIHNjb3BlLnBhZ2VTaXplICk7XHJcbiAgICAgICAgICAgIH0sdHJ1ZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgc2NvcGUuY3VycmVudFBhZ2UgICAgICA9IDE7XHJcbiAgICAgICAgICAgIHNjb3BlLnRvdGFsUGdhZUJsb2NrICAgPSBNYXRoLmZsb29yKCBzY29wZS50b3RhbFJlY29yZENvdW50IC8gc2NvcGUucGFnZUJsb2NrU2l6ZSApO1xyXG4gICAgICAgICAgICBjYWxjdWxhdGVDdXJyZW50UGFnZUJsb2NrKCk7XHJcblxyXG4gICAgICAgICAgICBzY29wZS5nZXRQYWdlQmxvY2sgPSBnZXRQYWdlQmxvY2s7XHJcbiAgICAgICAgICAgIHNjb3BlLm5leHRQYWdlICAgICA9IG5leHRQYWdlO1xyXG4gICAgICAgICAgICBzY29wZS5wcmV2UGFnZSAgICAgPSBwcmV2UGFnZTtcclxuICAgICAgICAgICAgc2NvcGUuZ290b1BhZ2UgICAgID0gZ290b1BhZ2U7XHJcbiAgICAgICAgICAgIC8vIHNjb3BlLnBhZ2VCbG9jayAgICA9IGdldFBhZ2VCbG9jaygpO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UGFnZUJsb2NrKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgX3BhZ2VCbG9jayA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIF9taW5QYWdlICAgPSAoc2NvcGUuY3VycmVudFBhZ2VCbG9jay0xKSAqIHNjb3BlLnBhZ2VCbG9ja1NpemU7XHJcbiAgICAgICAgICAgICAgICB2YXIgX21heFBhZ2UgICA9IF9taW5QYWdlICsgc2NvcGUucGFnZUJsb2NrU2l6ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IoIHZhciBpID0gX21pblBhZ2UgOyBpIDwgX21heFBhZ2UgOyBpICsrICl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIGkgPCBzY29wZS50b3RhbFBhZ2UgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3BhZ2VCbG9jay5wdXNoKGkrMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9wYWdlQmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG5leHRQYWdlKCl7XHJcbiAgICAgICAgICAgICAgICBpZiggc2NvcGUuY3VycmVudFBhZ2UgPCBzY29wZS50b3RhbFBhZ2UgKXtcclxuICAgICAgICAgICAgICAgICAgICBnb3RvUGFnZShzY29wZS5jdXJyZW50UGFnZSsxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcHJldlBhZ2UoKXtcclxuICAgICAgICAgICAgICAgIGlmKCBzY29wZS5jdXJyZW50UGFnZSA+IDEgKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZ290b1BhZ2Uoc2NvcGUuY3VycmVudFBhZ2UtMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdvdG9QYWdlKCBwYWdlICl7XHJcbiAgICAgICAgICAgICAgICB2YXIgX21pblBhZ2UsIF9tYXhQYWdlO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuY3VycmVudFBhZ2UgPSBwYWdlO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUucGFnaW5nT3B0aW9ucy5jdXJyZW50UGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVDdXJyZW50UGFnZUJsb2NrKCk7XHJcbiAgICAgICAgICAgICAgICBfbWluUGFnZSAgID0gKHNjb3BlLmN1cnJlbnRQYWdlQmxvY2stMSkgKiBzY29wZS5wYWdlQmxvY2tTaXplO1xyXG4gICAgICAgICAgICAgICAgX21heFBhZ2UgICA9IF9taW5QYWdlICsgc2NvcGUucGFnZUJsb2NrU2l6ZTtcclxuICAgICAgICAgICAgICAgIHNjb3BlLm9uUGFnZUNsaWNrKCBfbWluUGFnZSwgX21heFBhZ2UgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gY2FsY3VsYXRlQ3VycmVudFBhZ2VCbG9jaygpe1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuY3VycmVudFBhZ2VCbG9jayA9IE1hdGguY2VpbCggc2NvcGUuY3VycmVudFBhZ2UgLyBzY29wZS5wYWdlQmxvY2tTaXplKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oIGFwcCApe1xyXG4gICAgYXBwLmRpcmVjdGl2ZShcInNwR3JpZFBhZ2luZ1wiLCBzcEdyaWRQYWdpbmcgKTtcclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kaXJlY3RpdmVzL3NwR3JpZFBhZ2luZy5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==