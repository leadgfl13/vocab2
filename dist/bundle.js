/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/left_arrow.png */ "./src/images/left_arrow.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/right_arrow.png */ "./src/images/right_arrow.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/paper.webp */ "./src/images/paper.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes bounceleft {
	0%,
	20%,
	50%,
	80%,
	100% {
		transform: translateY(0);
	}
	40% {
		transform: translateX(-30px);
	}
	60% {
		transform: translateX(-15px);
	}
}
@keyframes fadeinfromtop {
	0% {
		opacity: 0;
		transform: translateY(0px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}
@keyframes bounceright {
	0%,
	20%,
	50%,
	80%,
	100% {
		transform: translateY(0);
	}
	40% {
		transform: translateX(30px);
	}
	60% {
		transform: translateX(15px);
	}
}

@keyframes openfromtop {
	0% {
		height: 0;
	}

	100% {
		height: 70%; /* Adjust the final height as needed */
	}
}
@keyframes itemopen {
	0% {
		height: 0;
	}

	100% {
		height: 100px; /* Adjust the final height as needed */
	}
}
body {
	background-color: rgb(156, 197, 176);
}

#pagelayout {
	height: 100%;
	width: 100%;
	margin: 0px;
	display: grid;
	grid-template-columns: 20% 80%;
	grid-template-rows: 20% 80%;
}

#topright {
	display: flex;
	justify-content: center;
	align-items: center;
	grid-template-areas: 1/1/2/2;
	font-size: 60px;
	text-align: center;
	background-color: tan;
	border: 4px solid black;
	color: green;
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	font-weight: 700;
}

#topleft {
	border: 4px solid black;
	grid-template-areas: 1/2/2/3;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 36px;
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	background-color: rgb(8, 70, 8);
	color: tan;
	font-weight: 800;
}

#bottomleft {
	grid-template-areas: 2/2/3/3;
}

#bottomright {
	grid-template-areas: 2/1/3/2;
	display: flex;
	flex-direction: Column;
	width: 100%;
}

#leftright {
	display: flex;
	height: 60%;
	width: 100%;
	flex-direction: row;
}

#left {
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
	background-size: 100%;
	background-repeat: no-repeat;
	background-position: center;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 20%;
	text-align: center;
}
#right {
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
	background-size: 100%;
	background-repeat: no-repeat;
	background-position: center;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 20%;
	text-align: center;
}

#left:active {
	animation: bounceleft 0.5s;
}

#right:active {
	animation: bounceright 0.5s;
}
#carouselcontainer {
	position: relative;
	width: 70%;
	display: flex;
	word-wrap: break-word;
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	font-size: 24px;
	margin: 10px;
	border-radius: 20px;
	text-align: center;
	color: tan;
	justify-content: center;
	align-items: center;
	text-align: center;
	background-size: cover;
	perspective: 1200px;
}

#carouselcontainer:active > .card {
	cursor: pointer;
	transform: rotateY(180deg);
}

.card {
	height: 100%;
	width: 100%;
	position: absolute;
	transform-style: preserve-3d;
	transition: transform 1000ms;
}

.front {
	display: flex;
	border-radius: 20px;
	text-align: center;
	justify-content: center;
	align-items: center;
	text-align: center;
	background-size: cover;
	border: 2px black groove;
	position: absolute;
	color: black;
	font-weight: 800;
	height: 100%;
	width: 100%;
	backface-visibility: hidden;
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

.back {
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});

	display: Flex;
	border-radius: 20px;
	text-align: center;
	justify-content: center;
	align-items: center;
	text-align: center;
	background-size: cover;
	border: 2px black groove;
	position: absolute;
	font-weight: 800;
	height: 100%;
	width: 100%;
	backface-visibility: hidden;
	color: black;
	transform: rotateY(180deg);
}
#carouseldots {
	height: 40px;
	width: auto;
	gap: 10px;
	display: flex;
	padding: 8px;
	justify-content: center;
	align-items: center;
	border: 2px green solid;
	text-align: Center;
	border: groove black 10px;
}

.circle {
	height: 40px;
	width: 40px;
	border-radius: 50%;
	background-color: gray;
}
.circle:hover {
	transform: scale(1.2);
}

#menubutton {
	height: 40px;
	color: green;
	background-color: tan;
	font-size: 26px;
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	width: 100%;
}

#dropdowncontainer {
	display: none;
}
.switchcontainer {
	margin: 5px;
	display: flex;
	border: solid 1px brown;
	justify-content: space-around;
	align-items: center;
	background-color: tan;
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
}
.switch {
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	font-size: 16px;
	border-radius: 10%;
	width: 100%;
	background-color: antiquewhite;
	color: rgb(116, 154, 116);
	font-weight: 800;
}
.dropdownitem {
	border: 2px solid black;
	padding: 5px;
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	background-color: rgb(221, 250, 215);
}
.dropdownitemvisible {
	border: 2px solid black;
	padding: 5px;
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	background-color: rgb(221, 250, 215);
}
#switchcontainer1,
#switchcontainer2,
#switchcontainer3,
#switchcontainer4,
#switchcontainer5,
#switchcontainer6,
#switchcontainer7,
#switchcontainer8 {
	width: 50%;
	display: none;
}

#visibleswitch1,
#visibleswitch2,
#visibleswitch3,
#visibleswitch4,
#visibleswitch5,
#visibleswitch6,
#visibleswitch7,
#visibleswitch8 {
	animation: fadeinfromtop 0.5s forwards;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}
#visible {
	animation: fadeinfromtop 0.5s forwards;
	width: 100%;
	display: flex;
	text-align: center;
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
	font-size: 16px;
	flex-direction: column;
	background-color: beige;
	gap: 20px;
	border: 2px solid black;
	height: 70%;
}
#dropdowncontainer:hover {
	width: 100%;
	display: flex;
	text-align: center;
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
	font-size: 16px;
	flex-direction: column;
	background-color: beige;
	gap: 20px;
	border: 2px solid black;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@keyframes bounceleft {\n\t0%,\n\t20%,\n\t50%,\n\t80%,\n\t100% {\n\t\ttransform: translateY(0);\n\t}\n\t40% {\n\t\ttransform: translateX(-30px);\n\t}\n\t60% {\n\t\ttransform: translateX(-15px);\n\t}\n}\n@keyframes fadeinfromtop {\n\t0% {\n\t\topacity: 0;\n\t\ttransform: translateY(0px);\n\t}\n\t100% {\n\t\topacity: 1;\n\t\ttransform: translateY(0);\n\t}\n}\n@keyframes bounceright {\n\t0%,\n\t20%,\n\t50%,\n\t80%,\n\t100% {\n\t\ttransform: translateY(0);\n\t}\n\t40% {\n\t\ttransform: translateX(30px);\n\t}\n\t60% {\n\t\ttransform: translateX(15px);\n\t}\n}\n\n@keyframes openfromtop {\n\t0% {\n\t\theight: 0;\n\t}\n\n\t100% {\n\t\theight: 70%; /* Adjust the final height as needed */\n\t}\n}\n@keyframes itemopen {\n\t0% {\n\t\theight: 0;\n\t}\n\n\t100% {\n\t\theight: 100px; /* Adjust the final height as needed */\n\t}\n}\nbody {\n\tbackground-color: rgb(156, 197, 176);\n}\n\n#pagelayout {\n\theight: 100%;\n\twidth: 100%;\n\tmargin: 0px;\n\tdisplay: grid;\n\tgrid-template-columns: 20% 80%;\n\tgrid-template-rows: 20% 80%;\n}\n\n#topright {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgrid-template-areas: 1/1/2/2;\n\tfont-size: 60px;\n\ttext-align: center;\n\tbackground-color: tan;\n\tborder: 4px solid black;\n\tcolor: green;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tfont-weight: 700;\n}\n\n#topleft {\n\tborder: 4px solid black;\n\tgrid-template-areas: 1/2/2/3;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 36px;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tbackground-color: rgb(8, 70, 8);\n\tcolor: tan;\n\tfont-weight: 800;\n}\n\n#bottomleft {\n\tgrid-template-areas: 2/2/3/3;\n}\n\n#bottomright {\n\tgrid-template-areas: 2/1/3/2;\n\tdisplay: flex;\n\tflex-direction: Column;\n\twidth: 100%;\n}\n\n#leftright {\n\tdisplay: flex;\n\theight: 60%;\n\twidth: 100%;\n\tflex-direction: row;\n}\n\n#left {\n\tbackground-image: url(\"./images/left_arrow.png\");\n\tbackground-size: 100%;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 20%;\n\ttext-align: center;\n}\n#right {\n\tbackground-image: url(\"./images/right_arrow.png\");\n\tbackground-size: 100%;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 20%;\n\ttext-align: center;\n}\n\n#left:active {\n\tanimation: bounceleft 0.5s;\n}\n\n#right:active {\n\tanimation: bounceright 0.5s;\n}\n#carouselcontainer {\n\tposition: relative;\n\twidth: 70%;\n\tdisplay: flex;\n\tword-wrap: break-word;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tfont-size: 24px;\n\tmargin: 10px;\n\tborder-radius: 20px;\n\ttext-align: center;\n\tcolor: tan;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-size: cover;\n\tperspective: 1200px;\n}\n\n#carouselcontainer:active > .card {\n\tcursor: pointer;\n\ttransform: rotateY(180deg);\n}\n\n.card {\n\theight: 100%;\n\twidth: 100%;\n\tposition: absolute;\n\ttransform-style: preserve-3d;\n\ttransition: transform 1000ms;\n}\n\n.front {\n\tdisplay: flex;\n\tborder-radius: 20px;\n\ttext-align: center;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-size: cover;\n\tborder: 2px black groove;\n\tposition: absolute;\n\tcolor: black;\n\tfont-weight: 800;\n\theight: 100%;\n\twidth: 100%;\n\tbackface-visibility: hidden;\n\tbackground-image: url(\"./images/paper.webp\");\n}\n\n.back {\n\tbackground-image: url(\"./images/paper.webp\");\n\n\tdisplay: Flex;\n\tborder-radius: 20px;\n\ttext-align: center;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-size: cover;\n\tborder: 2px black groove;\n\tposition: absolute;\n\tfont-weight: 800;\n\theight: 100%;\n\twidth: 100%;\n\tbackface-visibility: hidden;\n\tcolor: black;\n\ttransform: rotateY(180deg);\n}\n#carouseldots {\n\theight: 40px;\n\twidth: auto;\n\tgap: 10px;\n\tdisplay: flex;\n\tpadding: 8px;\n\tjustify-content: center;\n\talign-items: center;\n\tborder: 2px green solid;\n\ttext-align: Center;\n\tborder: groove black 10px;\n}\n\n.circle {\n\theight: 40px;\n\twidth: 40px;\n\tborder-radius: 50%;\n\tbackground-color: gray;\n}\n.circle:hover {\n\ttransform: scale(1.2);\n}\n\n#menubutton {\n\theight: 40px;\n\tcolor: green;\n\tbackground-color: tan;\n\tfont-size: 26px;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\twidth: 100%;\n}\n\n#dropdowncontainer {\n\tdisplay: none;\n}\n.switchcontainer {\n\tmargin: 5px;\n\tdisplay: flex;\n\tborder: solid 1px brown;\n\tjustify-content: space-around;\n\talign-items: center;\n\tbackground-color: tan;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n}\n.switch {\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tfont-size: 16px;\n\tborder-radius: 10%;\n\twidth: 100%;\n\tbackground-color: antiquewhite;\n\tcolor: rgb(116, 154, 116);\n\tfont-weight: 800;\n}\n.dropdownitem {\n\tborder: 2px solid black;\n\tpadding: 5px;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tbackground-color: rgb(221, 250, 215);\n}\n.dropdownitemvisible {\n\tborder: 2px solid black;\n\tpadding: 5px;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tbackground-color: rgb(221, 250, 215);\n}\n#switchcontainer1,\n#switchcontainer2,\n#switchcontainer3,\n#switchcontainer4,\n#switchcontainer5,\n#switchcontainer6,\n#switchcontainer7,\n#switchcontainer8 {\n\twidth: 50%;\n\tdisplay: none;\n}\n\n#visibleswitch1,\n#visibleswitch2,\n#visibleswitch3,\n#visibleswitch4,\n#visibleswitch5,\n#visibleswitch6,\n#visibleswitch7,\n#visibleswitch8 {\n\tanimation: fadeinfromtop 0.5s forwards;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-around;\n}\n#visible {\n\tanimation: fadeinfromtop 0.5s forwards;\n\twidth: 100%;\n\tdisplay: flex;\n\ttext-align: center;\n\tfont-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n\tfont-size: 16px;\n\tflex-direction: column;\n\tbackground-color: beige;\n\tgap: 20px;\n\tborder: 2px solid black;\n\theight: 70%;\n}\n#dropdowncontainer:hover {\n\twidth: 100%;\n\tdisplay: flex;\n\ttext-align: center;\n\tfont-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n\tfont-size: 16px;\n\tflex-direction: column;\n\tbackground-color: beige;\n\tgap: 20px;\n\tborder: 2px solid black;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/item1.js":
/*!******************************!*\
  !*** ./src/modules/item1.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moveCarousel: () => (/* binding */ moveCarousel)
/* harmony export */ });
function moveCarousel(unit, choice) {
	document.addEventListener("keydown", leftPress);

	let front = document.getElementById("front");
	let back = document.getElementById("back");
	carouseldots.innerHTML = "";
	let counter = 0;
	var keys = Object.keys(unit);
	var values = Object.values(unit);
	if (choice == 1) {
		let temp = keys;
		keys = values;
		values = temp;
	}
	front.innerHTML = keys[counter];
	back.innerHTML = values[counter];
	//creates dots for carousel and adds them to the page
	for (let i = 0; i < keys.length; i++) {
		let dot = document.createElement("div");
		dot.setAttribute("class", "circle");
		dot.setAttribute("id", "dots" + i);
		//function to make dot click and showcase the corresponding image
		dot.addEventListener("click", () => {
			counter = i;
			//need to update image
			front.innerHTML = keys[counter];
			back.innerHTML = values[counter];
			checkDots();

			return counter;
		});
		carouseldots.append(dot);
		checkDots();
	}

	//creates an array of keys and values from the unit 1 object
	//No longer need since front and back are separate divs
	//on click will switch between key and value pair
	//carouselcontainer.addEventListener("click", () => {
	//	if (carouselcontainer.innerHTML == keys[counter]) {
	//		carouselcontainer.innerHTML = values[counter];
	//	} else if (carouselcontainer.innerHTML == values[counter]) {
	//		carouselcontainer.innerHTML = keys[counter];
	//	}
	//});

	//functions for left and right arrow, and changing counter
	let leftarrow = document.getElementById("left");
	let rightarrow = document.getElementById("right");
	leftarrow.addEventListener("click", () => {
		if (counter == 0) {
			counter = keys.length - 1;
		} else {
			counter = counter - 1;
		}
		front.innerHTML = keys[counter];
		back.innerHTML = values[counter];

		console.log(counter);
		checkDots();
		return counter;
	});

	rightarrow.addEventListener("click", () => {
		if (counter == keys.length - 1) {
			counter = 0;
		} else {
			counter = counter + 1;
		}
		front.innerHTML = keys[counter];
		back.innerHTML = values[counter];
		checkDots();
		return counter;
	});
	//resets all dots to gray, then checks the counter number, and makes the dot with that counter ID red
	function checkDots() {
		for (let i = 0; i < keys.length; i++) {
			if (counter == i) {
				let dots = document.getElementsByClassName("circle");
				for (let i = 0; i < dots.length; i++) {
					dots[i].style.backgroundColor = "gray";
				}
				let thisdot = document.getElementById("dots" + i);
				thisdot.style.backgroundColor = "black";
			}
		}
	}

	function leftPress(event) {
		if (event.keyCode === 37) {
			if (counter == 0) {
				counter = keys.length - 1;
			} else {
				counter = counter - 1;
			}
			front.innerHTML = keys[counter];
			back.innerHTML = values[counter];

			console.log(counter);
			checkDots();
			return counter;
		}
		if (event.keyCode === 39) {
			if (counter == keys.length - 1) {
				counter = 0;
			} else {
				counter = counter + 1;
			}
			front.innerHTML = keys[counter];
			back.innerHTML = values[counter];
			console.log(counter);
			checkDots();
			return counter;
		}
		if (event.keyCode === 32) {
			if (front.innerHTML == keys[counter]) {
				front.innerHTML = values[counter];
			} else if (front.innerHTML == values[counter]) {
				front.innerHTML = keys[counter];
			}
		}
	}
}


/***/ }),

/***/ "./src/modules/units.js":
/*!******************************!*\
  !*** ./src/modules/units.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unit1_vocab: () => (/* binding */ unit1_vocab),
/* harmony export */   unit2_vocab: () => (/* binding */ unit2_vocab),
/* harmony export */   unit3_vocab: () => (/* binding */ unit3_vocab),
/* harmony export */   unit4_vocab: () => (/* binding */ unit4_vocab),
/* harmony export */   unit5_vocab: () => (/* binding */ unit5_vocab),
/* harmony export */   unit6_vocab: () => (/* binding */ unit6_vocab),
/* harmony export */   unit7_vocab: () => (/* binding */ unit7_vocab),
/* harmony export */   unit8_vocab: () => (/* binding */ unit8_vocab)
/* harmony export */ });
let unit1_vocab = {
	"unit 1 word":
		"Definition 1 this is a test to see how making the definition bigger affects the div size",
	"word 2": "DEFINITION 2",
	"word 3": "DEFINITION 3",
	"word 4": "DEFINITION 4",
};

let unit2_vocab = {
	unit2: "pee",
};

let unit3_vocab = {
	unit2: "pee",
};

let unit4_vocab = {
	unit2: "pee",
};

let unit5_vocab = {
	unit2: "pee",
};

let unit6_vocab = {
	unit2: "pee",
};

let unit7_vocab = {
	unit2: "pee",
};

let unit8_vocab = {
	unit2: "pee",
};


/***/ }),

/***/ "./src/images/left_arrow.png":
/*!***********************************!*\
  !*** ./src/images/left_arrow.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bff435431d0132642c53.png";

/***/ }),

/***/ "./src/images/paper.webp":
/*!*******************************!*\
  !*** ./src/images/paper.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b82f6c7898287c26618d.webp";

/***/ }),

/***/ "./src/images/right_arrow.png":
/*!************************************!*\
  !*** ./src/images/right_arrow.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2685e7f77f4f8ec76452.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_item1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/item1 */ "./src/modules/item1.js");
/* harmony import */ var _modules_units__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/units */ "./src/modules/units.js");











//Global variables on main page
let topright = document.getElementById("topright");
let menu = document.getElementById("menubutton");
let item1 = document.getElementById("dropdown1");
let item2 = document.getElementById("dropdown2");
let item3 = document.getElementById("dropdown3");
let item4 = document.getElementById("dropdown4");
let item5 = document.getElementById("dropdown5");
let item6 = document.getElementById("dropdown6");
let item7 = document.getElementById("dropdown7");
let item8 = document.getElementById("dropdown8");
let back = document.getElementById("back");
let bottomright = document.getElementById("bottomright");

// word and definition buttons
let word1 = document.getElementById("word1");
let definition1 = document.getElementById("definition1");
let word2 = document.getElementById("word2");
let definition2 = document.getElementById("definition2");
let word3 = document.getElementById("word3");
let definition3 = document.getElementById("definition3");
let word4 = document.getElementById("word4");
let definition4 = document.getElementById("definition4");
let word5 = document.getElementById("word5");
let definition5 = document.getElementById("definition5");
let word6 = document.getElementById("word6");
let definition6 = document.getElementById("definition6");
let word7 = document.getElementById("word7");
let definition7 = document.getElementById("definition7");
let word8 = document.getElementById("word8");
let definition8 = document.getElementById("definition8");

//make dropdown contanier visible

menu.addEventListener("mouseover", () => {
	let test = document.getElementById("dropdowncontainer");
	test.setAttribute("id", "visible");
});

menu.addEventListener("mouseleave", () => {
	let test = document.getElementById("visible");
	test.setAttribute("id", "dropdowncontainer");
});

//make swich for each unit visible----------------------------
item1.addEventListener("mouseover", () => {
	let switch1 = document.getElementById("switchcontainer1");
	switch1.id = "visibleswitch1";
});

item2.addEventListener("mouseover", () => {
	let switch2 = document.getElementById("switchcontainer2");
	switch2.id = "visibleswitch2";
});

item3.addEventListener("mouseover", () => {
	let switch3 = document.getElementById("switchcontainer3");
	switch3.id = "visibleswitch3";
});

item4.addEventListener("mouseover", () => {
	let switch4 = document.getElementById("switchcontainer4");
	switch4.id = "visibleswitch4";
});
item5.addEventListener("mouseover", () => {
	let switch5 = document.getElementById("switchcontainer5");
	switch5.id = "visibleswitch5";
});
item6.addEventListener("mouseover", () => {
	let switch6 = document.getElementById("switchcontainer6");
	switch6.id = "visibleswitch6";
});
item7.addEventListener("mouseover", () => {
	let switch7 = document.getElementById("switchcontainer7");
	switch7.id = "visibleswitch7";
});
item8.addEventListener("mouseover", () => {
	let switch8 = document.getElementById("switchcontainer8");
	switch8.id = "visibleswitch8";
});
//make switch for each unit disappear----------------
item1.addEventListener("mouseleave", () => {
	let switch1 = document.getElementById("visibleswitch1");
	switch1.id = "switchcontainer1";
});

item2.addEventListener("mouseleave", () => {
	let switch2 = document.getElementById("visibleswitch2");
	switch2.id = "switchcontainer2";
});
item3.addEventListener("mouseleave", () => {
	let switch3 = document.getElementById("visibleswitch3");
	switch3.id = "switchcontainer3";
});
item4.addEventListener("mouseleave", () => {
	let switch4 = document.getElementById("visibleswitch4");
	switch4.id = "switchcontainer4";
});
item5.addEventListener("mouseleave", () => {
	let switch5 = document.getElementById("visibleswitch5");
	switch5.id = "switchcontainer5";
});
item6.addEventListener("mouseleave", () => {
	let switch6 = document.getElementById("visibleswitch6");
	switch6.id = "switchcontainer6";
});
item7.addEventListener("mouseleave", () => {
	let switch7 = document.getElementById("visibleswitch7");
	switch7.id = "switchcontainer7";
});
item8.addEventListener("mouseleave", () => {
	let switch8 = document.getElementById("visibleswitch8");
	switch8.id = "switchcontainer8";
});

//event listener for selection of choice on unit 1
word1.addEventListener("click", () => {
	(0,_modules_item1__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit1_vocab, 0);
	topright.innerHTML = "Scientific Method";
});

definition1.addEventListener("click", () => {
	(0,_modules_item1__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit1_vocab, 1);
	topright.innerHTML = "Scientific Method";
});

word2.addEventListener("click", () => {
	(0,_modules_item1__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit2_vocab, 0);
	topright.innerHTML = "Life and Cells";
});

definition2.addEventListener("click", () => {
	(0,_modules_item1__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit2_vocab, 1);
	topright.innerHTML = "Life and Cells";
});

word3.addEventListener("click", () => {
	(0,_modules_item1__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit3_vocab, 0);
	topright.innerHTML = "Nutrition";
});

definition3.addEventListener("click", () => {
	(0,_modules_item1__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit3_vocab, 1);
	topright.innerHTML = "Nutrition";
});
word4.addEventListener("click", () => {
	(0,_modules_item1__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit4_vocab, 0);
	topright.innerHTML = "Respiration/Photosynthesis";
});

definition4.addEventListener("click", () => {
	(0,_modules_item1__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit4_vocab, 1);
	topright.innerHTML = "Respiration/Photosynthesis";
});
word5.addEventListener("click", () => {
	(0,_modules_item1__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit5_vocab, 0);
	topright.innerHTML = "Homeostasis";
});

definition5.addEventListener("click", () => {
	(0,_modules_item1__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit5_vocab, 1);
	topright.innerHTML = "Homeostasis";
});

word6.addEventListener("click", () => {
	(0,_modules_item1__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit6_vocab, 0);
	topright.innerHTML = "Genetics";
});

definition6.addEventListener("click", () => {
	(0,_modules_item1__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit6_vocab, 1);
	topright.innerHTML = "Genetics";
});
word7.addEventListener("click", () => {
	(0,_modules_item1__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit7_vocab, 0);
	topright.innerHTML = "Evolution";
});

definition7.addEventListener("click", () => {
	(0,_modules_item1__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit7_vocab, 1);
	topright.innerHTML = "Evolution";
});
word8.addEventListener("click", () => {
	(0,_modules_item1__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit8_vocab, 0);
	topright.innerHTML = "Ecology";
});

definition8.addEventListener("click", () => {
	(0,_modules_item1__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit8_vocab, 1);
	topright.innerHTML = "Ecology";
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMkhBQTBDO0FBQ3RGLDRDQUE0Qyw2SEFBMkM7QUFDdkYsNENBQTRDLG1IQUFzQztBQUNsRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLG1DQUFtQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtQ0FBbUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1DQUFtQztBQUM1RDs7QUFFQTtBQUNBLHlCQUF5QixtQ0FBbUM7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsU0FBUyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLEtBQUssU0FBUyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssc0JBQXNCLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssc0JBQXNCLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLE9BQU8sYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxPQUFPLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxPQUFPLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxV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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUMwQjtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQyw0REFBWSxDQUFDLHVEQUFXO0FBQ3pCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLENBQUMsNERBQVksQ0FBQyx1REFBVztBQUN6QjtBQUNBLENBQUM7O0FBRUQ7QUFDQSxDQUFDLDREQUFZLENBQUMsdURBQVc7QUFDekI7QUFDQSxDQUFDOztBQUVEO0FBQ0EsQ0FBQyw0REFBWSxDQUFDLHVEQUFXO0FBQ3pCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLENBQUMsNERBQVksQ0FBQyx1REFBVztBQUN6QjtBQUNBLENBQUM7O0FBRUQ7QUFDQSxDQUFDLDREQUFZLENBQUMsdURBQVc7QUFDekI7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDLDREQUFZLENBQUMsdURBQVc7QUFDekI7QUFDQSxDQUFDOztBQUVEO0FBQ0EsQ0FBQyw0REFBWSxDQUFDLHVEQUFXO0FBQ3pCO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQyw0REFBWSxDQUFDLHVEQUFXO0FBQ3pCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLENBQUMsNERBQVksQ0FBQyx1REFBVztBQUN6QjtBQUNBLENBQUM7O0FBRUQ7QUFDQSxDQUFDLDREQUFZLENBQUMsdURBQVc7QUFDekI7QUFDQSxDQUFDOztBQUVEO0FBQ0EsQ0FBQyw0REFBWSxDQUFDLHVEQUFXO0FBQ3pCO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQyw0REFBWSxDQUFDLHVEQUFXO0FBQ3pCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLENBQUMsNERBQVksQ0FBQyx1REFBVztBQUN6QjtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUMsNERBQVksQ0FBQyx1REFBVztBQUN6QjtBQUNBLENBQUM7O0FBRUQ7QUFDQSxDQUFDLDREQUFZLENBQUMsdURBQVc7QUFDekI7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL21vZHVsZXMvaXRlbTEuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy91bml0cy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9sZWZ0X2Fycm93LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3JpZ2h0X2Fycm93LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3BhcGVyLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGtleWZyYW1lcyBib3VuY2VsZWZ0IHtcblx0MCUsXG5cdDIwJSxcblx0NTAlLFxuXHQ4MCUsXG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0fVxuXHQ0MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzBweCk7XG5cdH1cblx0NjAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1cHgpO1xuXHR9XG59XG5Aa2V5ZnJhbWVzIGZhZGVpbmZyb210b3Age1xuXHQwJSB7XG5cdFx0b3BhY2l0eTogMDtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcblx0fVxuXHQxMDAlIHtcblx0XHRvcGFjaXR5OiAxO1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0fVxufVxuQGtleWZyYW1lcyBib3VuY2VyaWdodCB7XG5cdDAlLFxuXHQyMCUsXG5cdDUwJSxcblx0ODAlLFxuXHQxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdH1cblx0NDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCk7XG5cdH1cblx0NjAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XG5cdH1cbn1cblxuQGtleWZyYW1lcyBvcGVuZnJvbXRvcCB7XG5cdDAlIHtcblx0XHRoZWlnaHQ6IDA7XG5cdH1cblxuXHQxMDAlIHtcblx0XHRoZWlnaHQ6IDcwJTsgLyogQWRqdXN0IHRoZSBmaW5hbCBoZWlnaHQgYXMgbmVlZGVkICovXG5cdH1cbn1cbkBrZXlmcmFtZXMgaXRlbW9wZW4ge1xuXHQwJSB7XG5cdFx0aGVpZ2h0OiAwO1xuXHR9XG5cblx0MTAwJSB7XG5cdFx0aGVpZ2h0OiAxMDBweDsgLyogQWRqdXN0IHRoZSBmaW5hbCBoZWlnaHQgYXMgbmVlZGVkICovXG5cdH1cbn1cbmJvZHkge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU2LCAxOTcsIDE3Nik7XG59XG5cbiNwYWdlbGF5b3V0IHtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luOiAwcHg7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgODAlO1xufVxuXG4jdG9wcmlnaHQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogMS8xLzIvMjtcblx0Zm9udC1zaXplOiA2MHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6IHRhbjtcblx0Ym9yZGVyOiA0cHggc29saWQgYmxhY2s7XG5cdGNvbG9yOiBncmVlbjtcblx0Zm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIixcblx0XHRcIkx1Y2lkYSBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXHRmb250LXdlaWdodDogNzAwO1xufVxuXG4jdG9wbGVmdCB7XG5cdGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xuXHRncmlkLXRlbXBsYXRlLWFyZWFzOiAxLzIvMi8zO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Zm9udC1zaXplOiAzNnB4O1xuXHRmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxuXHRcdFwiTHVjaWRhIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYig4LCA3MCwgOCk7XG5cdGNvbG9yOiB0YW47XG5cdGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbiNib3R0b21sZWZ0IHtcblx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogMi8yLzMvMztcbn1cblxuI2JvdHRvbXJpZ2h0IHtcblx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogMi8xLzMvMjtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IENvbHVtbjtcblx0d2lkdGg6IDEwMCU7XG59XG5cbiNsZWZ0cmlnaHQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRoZWlnaHQ6IDYwJTtcblx0d2lkdGg6IDEwMCU7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbiNsZWZ0IHtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHdpZHRoOiAyMCU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNyaWdodCB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR3aWR0aDogMjAlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNsZWZ0OmFjdGl2ZSB7XG5cdGFuaW1hdGlvbjogYm91bmNlbGVmdCAwLjVzO1xufVxuXG4jcmlnaHQ6YWN0aXZlIHtcblx0YW5pbWF0aW9uOiBib3VuY2VyaWdodCAwLjVzO1xufVxuI2Nhcm91c2VsY29udGFpbmVyIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR3aWR0aDogNzAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cdGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG5cdFx0XCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAyNHB4O1xuXHRtYXJnaW46IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6IHRhbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0cGVyc3BlY3RpdmU6IDEyMDBweDtcbn1cblxuI2Nhcm91c2VsY29udGFpbmVyOmFjdGl2ZSA+IC5jYXJkIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLmNhcmQge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAxMDAlO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDAwbXM7XG59XG5cbi5mcm9udCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0Ym9yZGVyOiAycHggYmxhY2sgZ3Jvb3ZlO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGNvbG9yOiBibGFjaztcblx0Zm9udC13ZWlnaHQ6IDgwMDtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5cbi5iYWNrIHtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuXG5cdGRpc3BsYXk6IEZsZXg7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0Ym9yZGVyOiAycHggYmxhY2sgZ3Jvb3ZlO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGZvbnQtd2VpZ2h0OiA4MDA7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblx0Y29sb3I6IGJsYWNrO1xuXHR0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cbiNjYXJvdXNlbGRvdHMge1xuXHRoZWlnaHQ6IDQwcHg7XG5cdHdpZHRoOiBhdXRvO1xuXHRnYXA6IDEwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdHBhZGRpbmc6IDhweDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJvcmRlcjogMnB4IGdyZWVuIHNvbGlkO1xuXHR0ZXh0LWFsaWduOiBDZW50ZXI7XG5cdGJvcmRlcjogZ3Jvb3ZlIGJsYWNrIDEwcHg7XG59XG5cbi5jaXJjbGUge1xuXHRoZWlnaHQ6IDQwcHg7XG5cdHdpZHRoOiA0MHB4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG4uY2lyY2xlOmhvdmVyIHtcblx0dHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4jbWVudWJ1dHRvbiB7XG5cdGhlaWdodDogNDBweDtcblx0Y29sb3I6IGdyZWVuO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0YW47XG5cdGZvbnQtc2l6ZTogMjZweDtcblx0Zm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIixcblx0XHRcIkx1Y2lkYSBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXHR3aWR0aDogMTAwJTtcbn1cblxuI2Ryb3Bkb3duY29udGFpbmVyIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cbi5zd2l0Y2hjb250YWluZXIge1xuXHRtYXJnaW46IDVweDtcblx0ZGlzcGxheTogZmxleDtcblx0Ym9yZGVyOiBzb2xpZCAxcHggYnJvd247XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0YW47XG5cdGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG5cdFx0XCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbi5zd2l0Y2gge1xuXHRmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxuXHRcdFwiTHVjaWRhIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Ym9yZGVyLXJhZGl1czogMTAlO1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xuXHRjb2xvcjogcmdiKDExNiwgMTU0LCAxMTYpO1xuXHRmb250LXdlaWdodDogODAwO1xufVxuLmRyb3Bkb3duaXRlbSB7XG5cdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuXHRwYWRkaW5nOiA1cHg7XG5cdGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG5cdFx0XCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjUwLCAyMTUpO1xufVxuLmRyb3Bkb3duaXRlbXZpc2libGUge1xuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcblx0cGFkZGluZzogNXB4O1xuXHRmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxuXHRcdFwiTHVjaWRhIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDI1MCwgMjE1KTtcbn1cbiNzd2l0Y2hjb250YWluZXIxLFxuI3N3aXRjaGNvbnRhaW5lcjIsXG4jc3dpdGNoY29udGFpbmVyMyxcbiNzd2l0Y2hjb250YWluZXI0LFxuI3N3aXRjaGNvbnRhaW5lcjUsXG4jc3dpdGNoY29udGFpbmVyNixcbiNzd2l0Y2hjb250YWluZXI3LFxuI3N3aXRjaGNvbnRhaW5lcjgge1xuXHR3aWR0aDogNTAlO1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4jdmlzaWJsZXN3aXRjaDEsXG4jdmlzaWJsZXN3aXRjaDIsXG4jdmlzaWJsZXN3aXRjaDMsXG4jdmlzaWJsZXN3aXRjaDQsXG4jdmlzaWJsZXN3aXRjaDUsXG4jdmlzaWJsZXN3aXRjaDYsXG4jdmlzaWJsZXN3aXRjaDcsXG4jdmlzaWJsZXN3aXRjaDgge1xuXHRhbmltYXRpb246IGZhZGVpbmZyb210b3AgMC41cyBmb3J3YXJkcztcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4jdmlzaWJsZSB7XG5cdGFuaW1hdGlvbjogZmFkZWluZnJvbXRvcCAwLjVzIGZvcndhcmRzO1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LWZhbWlseTogXCJHaWxsIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgQ2FsaWJyaSwgXCJUcmVidWNoZXQgTVNcIiwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcblx0Z2FwOiAyMHB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcblx0aGVpZ2h0OiA3MCU7XG59XG4jZHJvcGRvd25jb250YWluZXI6aG92ZXIge1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LWZhbWlseTogXCJHaWxsIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgQ2FsaWJyaSwgXCJUcmVidWNoZXQgTVNcIiwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcblx0Z2FwOiAyMHB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDOzs7OztFQUtDLHdCQUF3QjtDQUN6QjtDQUNBO0VBQ0MsNEJBQTRCO0NBQzdCO0NBQ0E7RUFDQyw0QkFBNEI7Q0FDN0I7QUFDRDtBQUNBO0NBQ0M7RUFDQyxVQUFVO0VBQ1YsMEJBQTBCO0NBQzNCO0NBQ0E7RUFDQyxVQUFVO0VBQ1Ysd0JBQXdCO0NBQ3pCO0FBQ0Q7QUFDQTtDQUNDOzs7OztFQUtDLHdCQUF3QjtDQUN6QjtDQUNBO0VBQ0MsMkJBQTJCO0NBQzVCO0NBQ0E7RUFDQywyQkFBMkI7Q0FDNUI7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsU0FBUztDQUNWOztDQUVBO0VBQ0MsV0FBVyxFQUFFLHNDQUFzQztDQUNwRDtBQUNEO0FBQ0E7Q0FDQztFQUNDLFNBQVM7Q0FDVjs7Q0FFQTtFQUNDLGFBQWEsRUFBRSxzQ0FBc0M7Q0FDdEQ7QUFDRDtBQUNBO0NBQ0Msb0NBQW9DO0FBQ3JDOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QiwyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQiw0QkFBNEI7Q0FDNUIsZUFBZTtDQUNm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QXlCO0NBQ3pCLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsdUJBQXVCO0NBQ3ZCLFlBQVk7Q0FDWjtrQ0FDaUM7Q0FDakMsb0NBQW9DO0FBQ3JDO0FBQ0E7Q0FDQyx1QkFBdUI7Q0FDdkIsWUFBWTtDQUNaO2tDQUNpQztDQUNqQyxvQ0FBb0M7QUFDckM7QUFDQTs7Ozs7Ozs7Q0FRQyxVQUFVO0NBQ1YsYUFBYTtBQUNkOztBQUVBOzs7Ozs7OztDQVFDLHNDQUFzQztDQUN0QyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLDZCQUE2QjtBQUM5QjtBQUNBO0NBQ0Msc0NBQXNDO0NBQ3RDLFdBQVc7Q0FDWCxhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLDZFQUE2RTtDQUM3RSxlQUFlO0NBQ2Ysc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixTQUFTO0NBQ1QsdUJBQXVCO0NBQ3ZCLFdBQVc7QUFDWjtBQUNBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsNkVBQTZFO0NBQzdFLGVBQWU7Q0FDZixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLFNBQVM7Q0FDVCx1QkFBdUI7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGtleWZyYW1lcyBib3VuY2VsZWZ0IHtcXG5cXHQwJSxcXG5cXHQyMCUsXFxuXFx0NTAlLFxcblxcdDgwJSxcXG5cXHQxMDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuXFx0fVxcblxcdDQwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMHB4KTtcXG5cXHR9XFxuXFx0NjAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1cHgpO1xcblxcdH1cXG59XFxuQGtleWZyYW1lcyBmYWRlaW5mcm9tdG9wIHtcXG5cXHQwJSB7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG5cXHR9XFxuXFx0MTAwJSB7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuXFx0fVxcbn1cXG5Aa2V5ZnJhbWVzIGJvdW5jZXJpZ2h0IHtcXG5cXHQwJSxcXG5cXHQyMCUsXFxuXFx0NTAlLFxcblxcdDgwJSxcXG5cXHQxMDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuXFx0fVxcblxcdDQwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xcblxcdH1cXG5cXHQ2MCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcXG5cXHR9XFxufVxcblxcbkBrZXlmcmFtZXMgb3BlbmZyb210b3Age1xcblxcdDAlIHtcXG5cXHRcXHRoZWlnaHQ6IDA7XFxuXFx0fVxcblxcblxcdDEwMCUge1xcblxcdFxcdGhlaWdodDogNzAlOyAvKiBBZGp1c3QgdGhlIGZpbmFsIGhlaWdodCBhcyBuZWVkZWQgKi9cXG5cXHR9XFxufVxcbkBrZXlmcmFtZXMgaXRlbW9wZW4ge1xcblxcdDAlIHtcXG5cXHRcXHRoZWlnaHQ6IDA7XFxuXFx0fVxcblxcblxcdDEwMCUge1xcblxcdFxcdGhlaWdodDogMTAwcHg7IC8qIEFkanVzdCB0aGUgZmluYWwgaGVpZ2h0IGFzIG5lZWRlZCAqL1xcblxcdH1cXG59XFxuYm9keSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NiwgMTk3LCAxNzYpO1xcbn1cXG5cXG4jcGFnZWxheW91dCB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbjogMHB4O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDgwJTtcXG59XFxuXFxuI3RvcHJpZ2h0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogMS8xLzIvMjtcXG5cXHRmb250LXNpemU6IDYwcHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRhbjtcXG5cXHRib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG5cXHRjb2xvcjogZ3JlZW47XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG5cXHRcXHRcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4jdG9wbGVmdCB7XFxuXFx0Ym9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogMS8yLzIvMztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAzNnB4O1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsXFxuXFx0XFx0XFxcIkx1Y2lkYSBTYW5zXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDgsIDcwLCA4KTtcXG5cXHRjb2xvcjogdGFuO1xcblxcdGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbiNib3R0b21sZWZ0IHtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOiAyLzIvMy8zO1xcbn1cXG5cXG4jYm90dG9tcmlnaHQge1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6IDIvMS8zLzI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogQ29sdW1uO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jbGVmdHJpZ2h0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGhlaWdodDogNjAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbiNsZWZ0IHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL2xlZnRfYXJyb3cucG5nXFxcIik7XFxuXFx0YmFja2dyb3VuZC1zaXplOiAxMDAlO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR3aWR0aDogMjAlO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI3JpZ2h0IHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL3JpZ2h0X2Fycm93LnBuZ1xcXCIpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDIwJTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNsZWZ0OmFjdGl2ZSB7XFxuXFx0YW5pbWF0aW9uOiBib3VuY2VsZWZ0IDAuNXM7XFxufVxcblxcbiNyaWdodDphY3RpdmUge1xcblxcdGFuaW1hdGlvbjogYm91bmNlcmlnaHQgMC41cztcXG59XFxuI2Nhcm91c2VsY29udGFpbmVyIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0d2lkdGg6IDcwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG5cXHRmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcblxcdFxcdFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHRtYXJnaW46IDEwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Y29sb3I6IHRhbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdHBlcnNwZWN0aXZlOiAxMjAwcHg7XFxufVxcblxcbiNjYXJvdXNlbGNvbnRhaW5lcjphY3RpdmUgPiAuY2FyZCB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbn1cXG5cXG4uY2FyZCB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcblxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDAwbXM7XFxufVxcblxcbi5mcm9udCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGJvcmRlcjogMnB4IGJsYWNrIGdyb292ZTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdGZvbnQtd2VpZ2h0OiA4MDA7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL3BhcGVyLndlYnBcXFwiKTtcXG59XFxuXFxuLmJhY2sge1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvcGFwZXIud2VicFxcXCIpO1xcblxcblxcdGRpc3BsYXk6IEZsZXg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRib3JkZXI6IDJweCBibGFjayBncm9vdmU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGZvbnQtd2VpZ2h0OiA4MDA7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0dHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxufVxcbiNjYXJvdXNlbGRvdHMge1xcblxcdGhlaWdodDogNDBweDtcXG5cXHR3aWR0aDogYXV0bztcXG5cXHRnYXA6IDEwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwYWRkaW5nOiA4cHg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRib3JkZXI6IDJweCBncmVlbiBzb2xpZDtcXG5cXHR0ZXh0LWFsaWduOiBDZW50ZXI7XFxuXFx0Ym9yZGVyOiBncm9vdmUgYmxhY2sgMTBweDtcXG59XFxuXFxuLmNpcmNsZSB7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdHdpZHRoOiA0MHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG4uY2lyY2xlOmhvdmVyIHtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbiNtZW51YnV0dG9uIHtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0Y29sb3I6IGdyZWVuO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRhbjtcXG5cXHRmb250LXNpemU6IDI2cHg7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG5cXHRcXHRcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuI2Ryb3Bkb3duY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG4uc3dpdGNoY29udGFpbmVyIHtcXG5cXHRtYXJnaW46IDVweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGJvcmRlcjogc29saWQgMXB4IGJyb3duO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdGFuO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsXFxuXFx0XFx0XFxcIkx1Y2lkYSBTYW5zXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcbi5zd2l0Y2gge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsXFxuXFx0XFx0XFxcIkx1Y2lkYSBTYW5zXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxuXFx0Y29sb3I6IHJnYigxMTYsIDE1NCwgMTE2KTtcXG5cXHRmb250LXdlaWdodDogODAwO1xcbn1cXG4uZHJvcGRvd25pdGVtIHtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG5cXHRcXHRcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyNTAsIDIxNSk7XFxufVxcbi5kcm9wZG93bml0ZW12aXNpYmxlIHtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG5cXHRcXHRcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyNTAsIDIxNSk7XFxufVxcbiNzd2l0Y2hjb250YWluZXIxLFxcbiNzd2l0Y2hjb250YWluZXIyLFxcbiNzd2l0Y2hjb250YWluZXIzLFxcbiNzd2l0Y2hjb250YWluZXI0LFxcbiNzd2l0Y2hjb250YWluZXI1LFxcbiNzd2l0Y2hjb250YWluZXI2LFxcbiNzd2l0Y2hjb250YWluZXI3LFxcbiNzd2l0Y2hjb250YWluZXI4IHtcXG5cXHR3aWR0aDogNTAlO1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiN2aXNpYmxlc3dpdGNoMSxcXG4jdmlzaWJsZXN3aXRjaDIsXFxuI3Zpc2libGVzd2l0Y2gzLFxcbiN2aXNpYmxlc3dpdGNoNCxcXG4jdmlzaWJsZXN3aXRjaDUsXFxuI3Zpc2libGVzd2l0Y2g2LFxcbiN2aXNpYmxlc3dpdGNoNyxcXG4jdmlzaWJsZXN3aXRjaDgge1xcblxcdGFuaW1hdGlvbjogZmFkZWluZnJvbXRvcCAwLjVzIGZvcndhcmRzO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuI3Zpc2libGUge1xcblxcdGFuaW1hdGlvbjogZmFkZWluZnJvbXRvcCAwLjVzIGZvcndhcmRzO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiR2lsbCBTYW5zXFxcIiwgXFxcIkdpbGwgU2FucyBNVFxcXCIsIENhbGlicmksIFxcXCJUcmVidWNoZXQgTVNcXFwiLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcblxcdGdhcDogMjBweDtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG5cXHRoZWlnaHQ6IDcwJTtcXG59XFxuI2Ryb3Bkb3duY29udGFpbmVyOmhvdmVyIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LWZhbWlseTogXFxcIkdpbGwgU2Fuc1xcXCIsIFxcXCJHaWxsIFNhbnMgTVRcXFwiLCBDYWxpYnJpLCBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG5cXHRnYXA6IDIwcHg7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBtb3ZlQ2Fyb3VzZWwodW5pdCwgY2hvaWNlKSB7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGxlZnRQcmVzcyk7XG5cblx0bGV0IGZyb250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcm9udFwiKTtcblx0bGV0IGJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tcIik7XG5cdGNhcm91c2VsZG90cy5pbm5lckhUTUwgPSBcIlwiO1xuXHRsZXQgY291bnRlciA9IDA7XG5cdHZhciBrZXlzID0gT2JqZWN0LmtleXModW5pdCk7XG5cdHZhciB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKHVuaXQpO1xuXHRpZiAoY2hvaWNlID09IDEpIHtcblx0XHRsZXQgdGVtcCA9IGtleXM7XG5cdFx0a2V5cyA9IHZhbHVlcztcblx0XHR2YWx1ZXMgPSB0ZW1wO1xuXHR9XG5cdGZyb250LmlubmVySFRNTCA9IGtleXNbY291bnRlcl07XG5cdGJhY2suaW5uZXJIVE1MID0gdmFsdWVzW2NvdW50ZXJdO1xuXHQvL2NyZWF0ZXMgZG90cyBmb3IgY2Fyb3VzZWwgYW5kIGFkZHMgdGhlbSB0byB0aGUgcGFnZVxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRkb3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjaXJjbGVcIik7XG5cdFx0ZG90LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZG90c1wiICsgaSk7XG5cdFx0Ly9mdW5jdGlvbiB0byBtYWtlIGRvdCBjbGljayBhbmQgc2hvd2Nhc2UgdGhlIGNvcnJlc3BvbmRpbmcgaW1hZ2Vcblx0XHRkb3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdGNvdW50ZXIgPSBpO1xuXHRcdFx0Ly9uZWVkIHRvIHVwZGF0ZSBpbWFnZVxuXHRcdFx0ZnJvbnQuaW5uZXJIVE1MID0ga2V5c1tjb3VudGVyXTtcblx0XHRcdGJhY2suaW5uZXJIVE1MID0gdmFsdWVzW2NvdW50ZXJdO1xuXHRcdFx0Y2hlY2tEb3RzKCk7XG5cblx0XHRcdHJldHVybiBjb3VudGVyO1xuXHRcdH0pO1xuXHRcdGNhcm91c2VsZG90cy5hcHBlbmQoZG90KTtcblx0XHRjaGVja0RvdHMoKTtcblx0fVxuXG5cdC8vY3JlYXRlcyBhbiBhcnJheSBvZiBrZXlzIGFuZCB2YWx1ZXMgZnJvbSB0aGUgdW5pdCAxIG9iamVjdFxuXHQvL05vIGxvbmdlciBuZWVkIHNpbmNlIGZyb250IGFuZCBiYWNrIGFyZSBzZXBhcmF0ZSBkaXZzXG5cdC8vb24gY2xpY2sgd2lsbCBzd2l0Y2ggYmV0d2VlbiBrZXkgYW5kIHZhbHVlIHBhaXJcblx0Ly9jYXJvdXNlbGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHQvL1x0aWYgKGNhcm91c2VsY29udGFpbmVyLmlubmVySFRNTCA9PSBrZXlzW2NvdW50ZXJdKSB7XG5cdC8vXHRcdGNhcm91c2VsY29udGFpbmVyLmlubmVySFRNTCA9IHZhbHVlc1tjb3VudGVyXTtcblx0Ly9cdH0gZWxzZSBpZiAoY2Fyb3VzZWxjb250YWluZXIuaW5uZXJIVE1MID09IHZhbHVlc1tjb3VudGVyXSkge1xuXHQvL1x0XHRjYXJvdXNlbGNvbnRhaW5lci5pbm5lckhUTUwgPSBrZXlzW2NvdW50ZXJdO1xuXHQvL1x0fVxuXHQvL30pO1xuXG5cdC8vZnVuY3Rpb25zIGZvciBsZWZ0IGFuZCByaWdodCBhcnJvdywgYW5kIGNoYW5naW5nIGNvdW50ZXJcblx0bGV0IGxlZnRhcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFwiKTtcblx0bGV0IHJpZ2h0YXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0XCIpO1xuXHRsZWZ0YXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRpZiAoY291bnRlciA9PSAwKSB7XG5cdFx0XHRjb3VudGVyID0ga2V5cy5sZW5ndGggLSAxO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb3VudGVyID0gY291bnRlciAtIDE7XG5cdFx0fVxuXHRcdGZyb250LmlubmVySFRNTCA9IGtleXNbY291bnRlcl07XG5cdFx0YmFjay5pbm5lckhUTUwgPSB2YWx1ZXNbY291bnRlcl07XG5cblx0XHRjb25zb2xlLmxvZyhjb3VudGVyKTtcblx0XHRjaGVja0RvdHMoKTtcblx0XHRyZXR1cm4gY291bnRlcjtcblx0fSk7XG5cblx0cmlnaHRhcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGlmIChjb3VudGVyID09IGtleXMubGVuZ3RoIC0gMSkge1xuXHRcdFx0Y291bnRlciA9IDA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvdW50ZXIgPSBjb3VudGVyICsgMTtcblx0XHR9XG5cdFx0ZnJvbnQuaW5uZXJIVE1MID0ga2V5c1tjb3VudGVyXTtcblx0XHRiYWNrLmlubmVySFRNTCA9IHZhbHVlc1tjb3VudGVyXTtcblx0XHRjaGVja0RvdHMoKTtcblx0XHRyZXR1cm4gY291bnRlcjtcblx0fSk7XG5cdC8vcmVzZXRzIGFsbCBkb3RzIHRvIGdyYXksIHRoZW4gY2hlY2tzIHRoZSBjb3VudGVyIG51bWJlciwgYW5kIG1ha2VzIHRoZSBkb3Qgd2l0aCB0aGF0IGNvdW50ZXIgSUQgcmVkXG5cdGZ1bmN0aW9uIGNoZWNrRG90cygpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChjb3VudGVyID09IGkpIHtcblx0XHRcdFx0bGV0IGRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2lyY2xlXCIpO1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRvdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRkb3RzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JheVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCB0aGlzZG90ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb3RzXCIgKyBpKTtcblx0XHRcdFx0dGhpc2RvdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gbGVmdFByZXNzKGV2ZW50KSB7XG5cdFx0aWYgKGV2ZW50LmtleUNvZGUgPT09IDM3KSB7XG5cdFx0XHRpZiAoY291bnRlciA9PSAwKSB7XG5cdFx0XHRcdGNvdW50ZXIgPSBrZXlzLmxlbmd0aCAtIDE7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb3VudGVyID0gY291bnRlciAtIDE7XG5cdFx0XHR9XG5cdFx0XHRmcm9udC5pbm5lckhUTUwgPSBrZXlzW2NvdW50ZXJdO1xuXHRcdFx0YmFjay5pbm5lckhUTUwgPSB2YWx1ZXNbY291bnRlcl07XG5cblx0XHRcdGNvbnNvbGUubG9nKGNvdW50ZXIpO1xuXHRcdFx0Y2hlY2tEb3RzKCk7XG5cdFx0XHRyZXR1cm4gY291bnRlcjtcblx0XHR9XG5cdFx0aWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG5cdFx0XHRpZiAoY291bnRlciA9PSBrZXlzLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0Y291bnRlciA9IDA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb3VudGVyID0gY291bnRlciArIDE7XG5cdFx0XHR9XG5cdFx0XHRmcm9udC5pbm5lckhUTUwgPSBrZXlzW2NvdW50ZXJdO1xuXHRcdFx0YmFjay5pbm5lckhUTUwgPSB2YWx1ZXNbY291bnRlcl07XG5cdFx0XHRjb25zb2xlLmxvZyhjb3VudGVyKTtcblx0XHRcdGNoZWNrRG90cygpO1xuXHRcdFx0cmV0dXJuIGNvdW50ZXI7XG5cdFx0fVxuXHRcdGlmIChldmVudC5rZXlDb2RlID09PSAzMikge1xuXHRcdFx0aWYgKGZyb250LmlubmVySFRNTCA9PSBrZXlzW2NvdW50ZXJdKSB7XG5cdFx0XHRcdGZyb250LmlubmVySFRNTCA9IHZhbHVlc1tjb3VudGVyXTtcblx0XHRcdH0gZWxzZSBpZiAoZnJvbnQuaW5uZXJIVE1MID09IHZhbHVlc1tjb3VudGVyXSkge1xuXHRcdFx0XHRmcm9udC5pbm5lckhUTUwgPSBrZXlzW2NvdW50ZXJdO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiZXhwb3J0IGxldCB1bml0MV92b2NhYiA9IHtcblx0XCJ1bml0IDEgd29yZFwiOlxuXHRcdFwiRGVmaW5pdGlvbiAxIHRoaXMgaXMgYSB0ZXN0IHRvIHNlZSBob3cgbWFraW5nIHRoZSBkZWZpbml0aW9uIGJpZ2dlciBhZmZlY3RzIHRoZSBkaXYgc2l6ZVwiLFxuXHRcIndvcmQgMlwiOiBcIkRFRklOSVRJT04gMlwiLFxuXHRcIndvcmQgM1wiOiBcIkRFRklOSVRJT04gM1wiLFxuXHRcIndvcmQgNFwiOiBcIkRFRklOSVRJT04gNFwiLFxufTtcblxuZXhwb3J0IGxldCB1bml0Ml92b2NhYiA9IHtcblx0dW5pdDI6IFwicGVlXCIsXG59O1xuXG5leHBvcnQgbGV0IHVuaXQzX3ZvY2FiID0ge1xuXHR1bml0MjogXCJwZWVcIixcbn07XG5cbmV4cG9ydCBsZXQgdW5pdDRfdm9jYWIgPSB7XG5cdHVuaXQyOiBcInBlZVwiLFxufTtcblxuZXhwb3J0IGxldCB1bml0NV92b2NhYiA9IHtcblx0dW5pdDI6IFwicGVlXCIsXG59O1xuXG5leHBvcnQgbGV0IHVuaXQ2X3ZvY2FiID0ge1xuXHR1bml0MjogXCJwZWVcIixcbn07XG5cbmV4cG9ydCBsZXQgdW5pdDdfdm9jYWIgPSB7XG5cdHVuaXQyOiBcInBlZVwiLFxufTtcblxuZXhwb3J0IGxldCB1bml0OF92b2NhYiA9IHtcblx0dW5pdDI6IFwicGVlXCIsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBtb3ZlQ2Fyb3VzZWwgfSBmcm9tIFwiLi9tb2R1bGVzL2l0ZW0xXCI7XG5pbXBvcnQgeyB1bml0MV92b2NhYiB9IGZyb20gXCIuL21vZHVsZXMvdW5pdHNcIjtcbmltcG9ydCB7IHVuaXQyX3ZvY2FiIH0gZnJvbSBcIi4vbW9kdWxlcy91bml0c1wiO1xuaW1wb3J0IHsgdW5pdDNfdm9jYWIgfSBmcm9tIFwiLi9tb2R1bGVzL3VuaXRzXCI7XG5pbXBvcnQgeyB1bml0NF92b2NhYiB9IGZyb20gXCIuL21vZHVsZXMvdW5pdHNcIjtcbmltcG9ydCB7IHVuaXQ1X3ZvY2FiIH0gZnJvbSBcIi4vbW9kdWxlcy91bml0c1wiO1xuaW1wb3J0IHsgdW5pdDZfdm9jYWIgfSBmcm9tIFwiLi9tb2R1bGVzL3VuaXRzXCI7XG5pbXBvcnQgeyB1bml0N192b2NhYiB9IGZyb20gXCIuL21vZHVsZXMvdW5pdHNcIjtcbmltcG9ydCB7IHVuaXQ4X3ZvY2FiIH0gZnJvbSBcIi4vbW9kdWxlcy91bml0c1wiO1xuXG4vL0dsb2JhbCB2YXJpYWJsZXMgb24gbWFpbiBwYWdlXG5sZXQgdG9wcmlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcHJpZ2h0XCIpO1xubGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVidXR0b25cIik7XG5sZXQgaXRlbTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duMVwiKTtcbmxldCBpdGVtMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd24yXCIpO1xubGV0IGl0ZW0zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93bjNcIik7XG5sZXQgaXRlbTQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duNFwiKTtcbmxldCBpdGVtNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd241XCIpO1xubGV0IGl0ZW02ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93bjZcIik7XG5sZXQgaXRlbTcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duN1wiKTtcbmxldCBpdGVtOCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd244XCIpO1xubGV0IGJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tcIik7XG5sZXQgYm90dG9tcmlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdHRvbXJpZ2h0XCIpO1xuXG4vLyB3b3JkIGFuZCBkZWZpbml0aW9uIGJ1dHRvbnNcbmxldCB3b3JkMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yZDFcIik7XG5sZXQgZGVmaW5pdGlvbjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmluaXRpb24xXCIpO1xubGV0IHdvcmQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JkMlwiKTtcbmxldCBkZWZpbml0aW9uMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmaW5pdGlvbjJcIik7XG5sZXQgd29yZDMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmQzXCIpO1xubGV0IGRlZmluaXRpb24zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZpbml0aW9uM1wiKTtcbmxldCB3b3JkNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yZDRcIik7XG5sZXQgZGVmaW5pdGlvbjQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmluaXRpb240XCIpO1xubGV0IHdvcmQ1ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JkNVwiKTtcbmxldCBkZWZpbml0aW9uNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmaW5pdGlvbjVcIik7XG5sZXQgd29yZDYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmQ2XCIpO1xubGV0IGRlZmluaXRpb242ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZpbml0aW9uNlwiKTtcbmxldCB3b3JkNyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yZDdcIik7XG5sZXQgZGVmaW5pdGlvbjcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmluaXRpb243XCIpO1xubGV0IHdvcmQ4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JkOFwiKTtcbmxldCBkZWZpbml0aW9uOCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmaW5pdGlvbjhcIik7XG5cbi8vbWFrZSBkcm9wZG93biBjb250YW5pZXIgdmlzaWJsZVxuXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuXHRsZXQgdGVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd25jb250YWluZXJcIik7XG5cdHRlc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ2aXNpYmxlXCIpO1xufSk7XG5cbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgdGVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZVwiKTtcblx0dGVzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRyb3Bkb3duY29udGFpbmVyXCIpO1xufSk7XG5cbi8vbWFrZSBzd2ljaCBmb3IgZWFjaCB1bml0IHZpc2libGUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pdGVtMS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcblx0bGV0IHN3aXRjaDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaGNvbnRhaW5lcjFcIik7XG5cdHN3aXRjaDEuaWQgPSBcInZpc2libGVzd2l0Y2gxXCI7XG59KTtcblxuaXRlbTIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG5cdGxldCBzd2l0Y2gyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd2l0Y2hjb250YWluZXIyXCIpO1xuXHRzd2l0Y2gyLmlkID0gXCJ2aXNpYmxlc3dpdGNoMlwiO1xufSk7XG5cbml0ZW0zLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoY29udGFpbmVyM1wiKTtcblx0c3dpdGNoMy5pZCA9IFwidmlzaWJsZXN3aXRjaDNcIjtcbn0pO1xuXG5pdGVtNC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcblx0bGV0IHN3aXRjaDQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaGNvbnRhaW5lcjRcIik7XG5cdHN3aXRjaDQuaWQgPSBcInZpc2libGVzd2l0Y2g0XCI7XG59KTtcbml0ZW01LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoY29udGFpbmVyNVwiKTtcblx0c3dpdGNoNS5pZCA9IFwidmlzaWJsZXN3aXRjaDVcIjtcbn0pO1xuaXRlbTYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG5cdGxldCBzd2l0Y2g2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd2l0Y2hjb250YWluZXI2XCIpO1xuXHRzd2l0Y2g2LmlkID0gXCJ2aXNpYmxlc3dpdGNoNlwiO1xufSk7XG5pdGVtNy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcblx0bGV0IHN3aXRjaDcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaGNvbnRhaW5lcjdcIik7XG5cdHN3aXRjaDcuaWQgPSBcInZpc2libGVzd2l0Y2g3XCI7XG59KTtcbml0ZW04LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoOCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoY29udGFpbmVyOFwiKTtcblx0c3dpdGNoOC5pZCA9IFwidmlzaWJsZXN3aXRjaDhcIjtcbn0pO1xuLy9tYWtlIHN3aXRjaCBmb3IgZWFjaCB1bml0IGRpc2FwcGVhci0tLS0tLS0tLS0tLS0tLS1cbml0ZW0xLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcblx0bGV0IHN3aXRjaDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpc2libGVzd2l0Y2gxXCIpO1xuXHRzd2l0Y2gxLmlkID0gXCJzd2l0Y2hjb250YWluZXIxXCI7XG59KTtcblxuaXRlbTIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDJcIik7XG5cdHN3aXRjaDIuaWQgPSBcInN3aXRjaGNvbnRhaW5lcjJcIjtcbn0pO1xuaXRlbTMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDNcIik7XG5cdHN3aXRjaDMuaWQgPSBcInN3aXRjaGNvbnRhaW5lcjNcIjtcbn0pO1xuaXRlbTQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDRcIik7XG5cdHN3aXRjaDQuaWQgPSBcInN3aXRjaGNvbnRhaW5lcjRcIjtcbn0pO1xuaXRlbTUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDVcIik7XG5cdHN3aXRjaDUuaWQgPSBcInN3aXRjaGNvbnRhaW5lcjVcIjtcbn0pO1xuaXRlbTYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoNiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDZcIik7XG5cdHN3aXRjaDYuaWQgPSBcInN3aXRjaGNvbnRhaW5lcjZcIjtcbn0pO1xuaXRlbTcuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoNyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDdcIik7XG5cdHN3aXRjaDcuaWQgPSBcInN3aXRjaGNvbnRhaW5lcjdcIjtcbn0pO1xuaXRlbTguYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoOCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDhcIik7XG5cdHN3aXRjaDguaWQgPSBcInN3aXRjaGNvbnRhaW5lcjhcIjtcbn0pO1xuXG4vL2V2ZW50IGxpc3RlbmVyIGZvciBzZWxlY3Rpb24gb2YgY2hvaWNlIG9uIHVuaXQgMVxud29yZDEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0bW92ZUNhcm91c2VsKHVuaXQxX3ZvY2FiLCAwKTtcblx0dG9wcmlnaHQuaW5uZXJIVE1MID0gXCJTY2llbnRpZmljIE1ldGhvZFwiO1xufSk7XG5cbmRlZmluaXRpb24xLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdG1vdmVDYXJvdXNlbCh1bml0MV92b2NhYiwgMSk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiU2NpZW50aWZpYyBNZXRob2RcIjtcbn0pO1xuXG53b3JkMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRtb3ZlQ2Fyb3VzZWwodW5pdDJfdm9jYWIsIDApO1xuXHR0b3ByaWdodC5pbm5lckhUTUwgPSBcIkxpZmUgYW5kIENlbGxzXCI7XG59KTtcblxuZGVmaW5pdGlvbjIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0bW92ZUNhcm91c2VsKHVuaXQyX3ZvY2FiLCAxKTtcblx0dG9wcmlnaHQuaW5uZXJIVE1MID0gXCJMaWZlIGFuZCBDZWxsc1wiO1xufSk7XG5cbndvcmQzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdG1vdmVDYXJvdXNlbCh1bml0M192b2NhYiwgMCk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiTnV0cml0aW9uXCI7XG59KTtcblxuZGVmaW5pdGlvbjMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0bW92ZUNhcm91c2VsKHVuaXQzX3ZvY2FiLCAxKTtcblx0dG9wcmlnaHQuaW5uZXJIVE1MID0gXCJOdXRyaXRpb25cIjtcbn0pO1xud29yZDQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0bW92ZUNhcm91c2VsKHVuaXQ0X3ZvY2FiLCAwKTtcblx0dG9wcmlnaHQuaW5uZXJIVE1MID0gXCJSZXNwaXJhdGlvbi9QaG90b3N5bnRoZXNpc1wiO1xufSk7XG5cbmRlZmluaXRpb240LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdG1vdmVDYXJvdXNlbCh1bml0NF92b2NhYiwgMSk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiUmVzcGlyYXRpb24vUGhvdG9zeW50aGVzaXNcIjtcbn0pO1xud29yZDUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0bW92ZUNhcm91c2VsKHVuaXQ1X3ZvY2FiLCAwKTtcblx0dG9wcmlnaHQuaW5uZXJIVE1MID0gXCJIb21lb3N0YXNpc1wiO1xufSk7XG5cbmRlZmluaXRpb241LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdG1vdmVDYXJvdXNlbCh1bml0NV92b2NhYiwgMSk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiSG9tZW9zdGFzaXNcIjtcbn0pO1xuXG53b3JkNi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRtb3ZlQ2Fyb3VzZWwodW5pdDZfdm9jYWIsIDApO1xuXHR0b3ByaWdodC5pbm5lckhUTUwgPSBcIkdlbmV0aWNzXCI7XG59KTtcblxuZGVmaW5pdGlvbjYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0bW92ZUNhcm91c2VsKHVuaXQ2X3ZvY2FiLCAxKTtcblx0dG9wcmlnaHQuaW5uZXJIVE1MID0gXCJHZW5ldGljc1wiO1xufSk7XG53b3JkNy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRtb3ZlQ2Fyb3VzZWwodW5pdDdfdm9jYWIsIDApO1xuXHR0b3ByaWdodC5pbm5lckhUTUwgPSBcIkV2b2x1dGlvblwiO1xufSk7XG5cbmRlZmluaXRpb243LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdG1vdmVDYXJvdXNlbCh1bml0N192b2NhYiwgMSk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiRXZvbHV0aW9uXCI7XG59KTtcbndvcmQ4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdG1vdmVDYXJvdXNlbCh1bml0OF92b2NhYiwgMCk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiRWNvbG9neVwiO1xufSk7XG5cbmRlZmluaXRpb244LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdG1vdmVDYXJvdXNlbCh1bml0OF92b2NhYiwgMSk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiRWNvbG9neVwiO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=