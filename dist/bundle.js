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

@keyframes bounce {
	0%,
	20%,
	50%,
	80%,
	100% {
		transform: translateX(0);
	}
	40% {
		transform: translateY(-30px);
	}
	60% {
		transform: translateY(-15px);
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

button:hover {
	background-color: skyblue;
}

button:active {
	animation:bounce 0.5s {
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
	height: 100px;
	width: auto;
	gap: 10px;
	display: flex;
	padding: 8px;
	justify-content: center;
	align-items: center;
	border: 2px green solid;
	text-align: Center;
	border: groove black 10px;
	flex-wrap: wrap;
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
	gap: 10px;
	margin: 5px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
}
.switch {
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	font-size: 16px;
	width: 90%;
	background-color: antiquewhite;
	border-radius: 20px;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@keyframes bounceleft {\n\t0%,\n\t20%,\n\t50%,\n\t80%,\n\t100% {\n\t\ttransform: translateY(0);\n\t}\n\t40% {\n\t\ttransform: translateX(-30px);\n\t}\n\t60% {\n\t\ttransform: translateX(-15px);\n\t}\n}\n\n@keyframes bounce {\n\t0%,\n\t20%,\n\t50%,\n\t80%,\n\t100% {\n\t\ttransform: translateX(0);\n\t}\n\t40% {\n\t\ttransform: translateY(-30px);\n\t}\n\t60% {\n\t\ttransform: translateY(-15px);\n\t}\n}\n\n@keyframes fadeinfromtop {\n\t0% {\n\t\topacity: 0;\n\t\ttransform: translateY(0px);\n\t}\n\t100% {\n\t\topacity: 1;\n\t\ttransform: translateY(0);\n\t}\n}\n@keyframes bounceright {\n\t0%,\n\t20%,\n\t50%,\n\t80%,\n\t100% {\n\t\ttransform: translateY(0);\n\t}\n\t40% {\n\t\ttransform: translateX(30px);\n\t}\n\t60% {\n\t\ttransform: translateX(15px);\n\t}\n}\n\n@keyframes openfromtop {\n\t0% {\n\t\theight: 0;\n\t}\n\n\t100% {\n\t\theight: 70%; /* Adjust the final height as needed */\n\t}\n}\n@keyframes itemopen {\n\t0% {\n\t\theight: 0;\n\t}\n\n\t100% {\n\t\theight: 100px; /* Adjust the final height as needed */\n\t}\n}\n\nbutton:hover {\n\tbackground-color: skyblue;\n}\n\nbutton:active {\n\tanimation:bounce 0.5s {\n\t}\n}\nbody {\n\tbackground-color: rgb(156, 197, 176);\n}\n\n#pagelayout {\n\theight: 100%;\n\twidth: 100%;\n\tmargin: 0px;\n\tdisplay: grid;\n\tgrid-template-columns: 20% 80%;\n\tgrid-template-rows: 20% 80%;\n}\n\n#topright {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgrid-template-areas: 1/1/2/2;\n\tfont-size: 60px;\n\ttext-align: center;\n\tbackground-color: tan;\n\tborder: 4px solid black;\n\tcolor: green;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tfont-weight: 700;\n}\n\n#topleft {\n\tborder: 4px solid black;\n\tgrid-template-areas: 1/2/2/3;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 36px;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tbackground-color: rgb(8, 70, 8);\n\tcolor: tan;\n\tfont-weight: 800;\n}\n\n#bottomleft {\n\tgrid-template-areas: 2/2/3/3;\n}\n\n#bottomright {\n\tgrid-template-areas: 2/1/3/2;\n\tdisplay: flex;\n\tflex-direction: Column;\n\twidth: 100%;\n}\n\n#leftright {\n\tdisplay: flex;\n\theight: 60%;\n\twidth: 100%;\n\tflex-direction: row;\n}\n\n#left {\n\tbackground-image: url(\"./images/left_arrow.png\");\n\tbackground-size: 100%;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 20%;\n\ttext-align: center;\n}\n#right {\n\tbackground-image: url(\"./images/right_arrow.png\");\n\tbackground-size: 100%;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 20%;\n\ttext-align: center;\n}\n\n#left:active {\n\tanimation: bounceleft 0.5s;\n}\n\n#right:active {\n\tanimation: bounceright 0.5s;\n}\n#carouselcontainer {\n\tposition: relative;\n\twidth: 70%;\n\tdisplay: flex;\n\tword-wrap: break-word;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tfont-size: 24px;\n\tmargin: 10px;\n\tborder-radius: 20px;\n\ttext-align: center;\n\tcolor: tan;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-size: cover;\n\tperspective: 1200px;\n}\n\n#carouselcontainer:active > .card {\n\tcursor: pointer;\n\ttransform: rotateY(180deg);\n}\n\n.card {\n\theight: 100%;\n\twidth: 100%;\n\tposition: absolute;\n\ttransform-style: preserve-3d;\n\ttransition: transform 1000ms;\n}\n\n.front {\n\tdisplay: flex;\n\tborder-radius: 20px;\n\ttext-align: center;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-size: cover;\n\tborder: 2px black groove;\n\tposition: absolute;\n\tcolor: black;\n\tfont-weight: 800;\n\theight: 100%;\n\twidth: 100%;\n\tbackface-visibility: hidden;\n\tbackground-image: url(\"./images/paper.webp\");\n}\n\n.back {\n\tbackground-image: url(\"./images/paper.webp\");\n\n\tdisplay: Flex;\n\tborder-radius: 20px;\n\ttext-align: center;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-size: cover;\n\tborder: 2px black groove;\n\tposition: absolute;\n\tfont-weight: 800;\n\theight: 100%;\n\twidth: 100%;\n\tbackface-visibility: hidden;\n\tcolor: black;\n\ttransform: rotateY(180deg);\n}\n#carouseldots {\n\theight: 100px;\n\twidth: auto;\n\tgap: 10px;\n\tdisplay: flex;\n\tpadding: 8px;\n\tjustify-content: center;\n\talign-items: center;\n\tborder: 2px green solid;\n\ttext-align: Center;\n\tborder: groove black 10px;\n\tflex-wrap: wrap;\n}\n\n.circle {\n\theight: 40px;\n\twidth: 40px;\n\tborder-radius: 50%;\n\tbackground-color: gray;\n}\n.circle:hover {\n\ttransform: scale(1.2);\n}\n\n#menubutton {\n\theight: 40px;\n\tcolor: green;\n\tbackground-color: tan;\n\tfont-size: 26px;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\twidth: 100%;\n}\n\n#dropdowncontainer {\n\tdisplay: none;\n}\n.switchcontainer {\n\tgap: 10px;\n\tmargin: 5px;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n}\n.switch {\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tfont-size: 16px;\n\twidth: 90%;\n\tbackground-color: antiquewhite;\n\tborder-radius: 20px;\n\tcolor: rgb(116, 154, 116);\n\tfont-weight: 800;\n}\n.dropdownitem {\n\tborder: 2px solid black;\n\tpadding: 5px;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tbackground-color: rgb(221, 250, 215);\n}\n.dropdownitemvisible {\n\tborder: 2px solid black;\n\tpadding: 5px;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tbackground-color: rgb(221, 250, 215);\n}\n#switchcontainer1,\n#switchcontainer2,\n#switchcontainer3,\n#switchcontainer4,\n#switchcontainer5,\n#switchcontainer6,\n#switchcontainer7,\n#switchcontainer8 {\n\twidth: 50%;\n\tdisplay: none;\n}\n\n#visibleswitch1,\n#visibleswitch2,\n#visibleswitch3,\n#visibleswitch4,\n#visibleswitch5,\n#visibleswitch6,\n#visibleswitch7,\n#visibleswitch8 {\n\tanimation: fadeinfromtop 0.5s forwards;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-around;\n}\n#visible {\n\tanimation: fadeinfromtop 0.5s forwards;\n\twidth: 100%;\n\tdisplay: flex;\n\ttext-align: center;\n\tfont-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n\tfont-size: 16px;\n\tflex-direction: column;\n\tbackground-color: beige;\n\tgap: 20px;\n\tborder: 2px solid black;\n\theight: 70%;\n}\n#dropdowncontainer:hover {\n\twidth: 100%;\n\tdisplay: flex;\n\ttext-align: center;\n\tfont-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n\tfont-size: 16px;\n\tflex-direction: column;\n\tbackground-color: beige;\n\tgap: 20px;\n\tborder: 2px solid black;\n}\n"],"sourceRoot":""}]);
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
	"word 5": "Definition 5",
	"Word 6": "definition 6",
	"word 7": "definition 7",
	"word 8": "defintion 8",
	"word 9": "definition 9",
	"word 10": "definition 10",
	"word 11": "definition 11",
	"word 12": "Definition 12",
	"word 13": "Defintion 13",
	"word 14": "definition 14",
	"word 15": "definition 15",
	"word 16": "Definition 16",
	"word 17": "Defintion 17",
	"word 18": "definition 18",
	"word 19": "definition 19",
	"word 20": "Definition 20",
};

let unit2_vocab = {
	"unit 2 word":
		"Definition 1 this is a test to see how making the definition bigger affects the div size",
	"word 2": "DEFINITION 2",
	"word 3": "DEFINITION 3",
	"word 4": "DEFINITION 4",
	"word 5": "Definition 5",
	"Word 6": "definition 6",
	"word 7": "definition 7",
	"word 8": "defintion 8",
	"word 9": "definition 9",
	"word 10": "definition 10",
	"word 11": "definition 11",
	"word 12": "Definition 12",
	"word 13": "Defintion 13",
	"word 14": "definition 14",
	"word 15": "definition 15",
	"word 16": "Definition 16",
	"word 17": "Defintion 17",
	"word 18": "definition 18",
	"word 19": "definition 19",
	"word 20": "Definition 20",
};

let unit3_vocab = {
	"unit 1 word":
		"Definition 1 this is a test to see how making the definition bigger affects the div size",
	"word 2": "DEFINITION 2",
	"word 3": "DEFINITION 3",
	"word 4": "DEFINITION 4",
	"word 5": "Definition 5",
	"Word 6": "definition 6",
	"word 7": "definition 7",
	"word 8": "defintion 8",
	"word 9": "definition 9",
	"word 10": "definition 10",
	"word 11": "definition 11",
	"word 12": "Definition 12",
	"word 13": "Defintion 13",
	"word 14": "definition 14",
	"word 15": "definition 15",
	"word 16": "Definition 16",
	"word 17": "Defintion 17",
	"word 18": "definition 18",
	"word 19": "definition 19",
	"word 20": "Definition 20",
};

let unit4_vocab = {
	"unit 1 word":
		"Definition 1 this is a test to see how making the definition bigger affects the div size",
	"word 2": "DEFINITION 2",
	"word 3": "DEFINITION 3",
	"word 4": "DEFINITION 4",
	"word 5": "Definition 5",
	"Word 6": "definition 6",
	"word 7": "definition 7",
	"word 8": "defintion 8",
	"word 9": "definition 9",
	"word 10": "definition 10",
	"word 11": "definition 11",
	"word 12": "Definition 12",
	"word 13": "Defintion 13",
	"word 14": "definition 14",
	"word 15": "definition 15",
	"word 16": "Definition 16",
	"word 17": "Defintion 17",
	"word 18": "definition 18",
	"word 19": "definition 19",
	"word 20": "Definition 20",
};

let unit5_vocab = {
	"unit 1 word":
		"Definition 1 this is a test to see how making the definition bigger affects the div size",
	"word 2": "DEFINITION 2",
	"word 3": "DEFINITION 3",
	"word 4": "DEFINITION 4",
	"word 5": "Definition 5",
	"Word 6": "definition 6",
	"word 7": "definition 7",
	"word 8": "defintion 8",
	"word 9": "definition 9",
	"word 10": "definition 10",
	"word 11": "definition 11",
	"word 12": "Definition 12",
	"word 13": "Defintion 13",
	"word 14": "definition 14",
	"word 15": "definition 15",
	"word 16": "Definition 16",
	"word 17": "Defintion 17",
	"word 18": "definition 18",
	"word 19": "definition 19",
	"word 20": "Definition 20",
};

let unit6_vocab = {
	"unit 1 word":
		"Definition 1 this is a test to see how making the definition bigger affects the div size",
	"word 2": "DEFINITION 2",
	"word 3": "DEFINITION 3",
	"word 4": "DEFINITION 4",
	"word 5": "Definition 5",
	"Word 6": "definition 6",
	"word 7": "definition 7",
	"word 8": "defintion 8",
	"word 9": "definition 9",
	"word 10": "definition 10",
	"word 11": "definition 11",
	"word 12": "Definition 12",
	"word 13": "Defintion 13",
	"word 14": "definition 14",
	"word 15": "definition 15",
	"word 16": "Definition 16",
	"word 17": "Defintion 17",
	"word 18": "definition 18",
	"word 19": "definition 19",
	"word 20": "Definition 20",
};

let unit7_vocab = {
	"unit 1 word":
		"Definition 1 this is a test to see how making the definition bigger affects the div size",
	"word 2": "DEFINITION 2",
	"word 3": "DEFINITION 3",
	"word 4": "DEFINITION 4",
	"word 5": "Definition 5",
	"Word 6": "definition 6",
	"word 7": "definition 7",
	"word 8": "defintion 8",
	"word 9": "definition 9",
	"word 10": "definition 10",
	"word 11": "definition 11",
	"word 12": "Definition 12",
	"word 13": "Defintion 13",
	"word 14": "definition 14",
	"word 15": "definition 15",
	"word 16": "Definition 16",
	"word 17": "Defintion 17",
	"word 18": "definition 18",
	"word 19": "definition 19",
	"word 20": "Definition 20",
};

let unit8_vocab = {
	"unit 1 word":
		"Definition 1 this is a test to see how making the definition bigger affects the div size",
	"word 2": "DEFINITION 2",
	"word 3": "DEFINITION 3",
	"word 4": "DEFINITION 4",
	"word 5": "Definition 5",
	"Word 6": "definition 6",
	"word 7": "definition 7",
	"word 8": "defintion 8",
	"word 9": "definition 9",
	"word 10": "definition 10",
	"word 11": "definition 11",
	"word 12": "Definition 12",
	"word 13": "Defintion 13",
	"word 14": "definition 14",
	"word 15": "definition 15",
	"word 16": "Definition 16",
	"word 17": "Defintion 17",
	"word 18": "definition 18",
	"word 19": "definition 19",
	"word 20": "Definition 20",
	"word 21": "definition 21",
	"word 22": "definition 22",
	"word 23": "Definition 23",
	"word 24": "definition 24",
	"word 25": "definition 25",
	"word 26": "Definition 26",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMkhBQTBDO0FBQ3RGLDRDQUE0Qyw2SEFBMkM7QUFDdkYsNENBQTRDLG1IQUFzQztBQUNsRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLG1DQUFtQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtQ0FBbUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1DQUFtQztBQUM1RDs7QUFFQTtBQUNBLHlCQUF5QixtQ0FBbUM7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsU0FBUyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFNBQVMsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLFNBQVMsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLHNCQUFzQixNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLHNCQUFzQixNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLE9BQU8sYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxPQUFPLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxPQUFPLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssT0FBTyxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxPQUFPLE1BQU0sS0FBSyxLQUFLLE9BQU8sV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLE9BQU8sYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssT0FBTyxhQUFhLE1BQU0sWUFBWSxVQUFVLFVBQVUsTUFBTSxZQUFZLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwTUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzBCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDLDREQUFZLENBQUMsdURBQVc7QUFDekI7QUFDQSxDQUFDOztBQUVEO0FBQ0EsQ0FBQyw0REFBWSxDQUFDLHVEQUFXO0FBQ3pCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLENBQUMsNERBQVksQ0FBQyx1REFBVztBQUN6QjtBQUNBLENBQUM7O0FBRUQ7QUFDQSxDQUFDLDREQUFZLENBQUMsdURBQVc7QUFDekI7QUFDQSxDQUFDOztBQUVEO0FBQ0EsQ0FBQyw0REFBWSxDQUFDLHVEQUFXO0FBQ3pCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLENBQUMsNERBQVksQ0FBQyx1REFBVztBQUN6QjtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUMsNERBQVksQ0FBQyx1REFBVztBQUN6QjtBQUNBLENBQUM7O0FBRUQ7QUFDQSxDQUFDLDREQUFZLENBQUMsdURBQVc7QUFDekI7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDLDREQUFZLENBQUMsdURBQVc7QUFDekI7QUFDQSxDQUFDOztBQUVEO0FBQ0EsQ0FBQyw0REFBWSxDQUFDLHVEQUFXO0FBQ3pCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLENBQUMsNERBQVksQ0FBQyx1REFBVztBQUN6QjtBQUNBLENBQUM7O0FBRUQ7QUFDQSxDQUFDLDREQUFZLENBQUMsdURBQVc7QUFDekI7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDLDREQUFZLENBQUMsdURBQVc7QUFDekI7QUFDQSxDQUFDOztBQUVEO0FBQ0EsQ0FBQyw0REFBWSxDQUFDLHVEQUFXO0FBQ3pCO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQyw0REFBWSxDQUFDLHVEQUFXO0FBQ3pCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLENBQUMsNERBQVksQ0FBQyx1REFBVztBQUN6QjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9pdGVtMS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL3VuaXRzLmpzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2xlZnRfYXJyb3cucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvcmlnaHRfYXJyb3cucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvcGFwZXIud2VicFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAa2V5ZnJhbWVzIGJvdW5jZWxlZnQge1xuXHQwJSxcblx0MjAlLFxuXHQ1MCUsXG5cdDgwJSxcblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuXHR9XG5cdDQwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMHB4KTtcblx0fVxuXHQ2MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTVweCk7XG5cdH1cbn1cblxuQGtleWZyYW1lcyBib3VuY2Uge1xuXHQwJSxcblx0MjAlLFxuXHQ1MCUsXG5cdDgwJSxcblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuXHR9XG5cdDQwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcblx0fVxuXHQ2MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XG5cdH1cbn1cblxuQGtleWZyYW1lcyBmYWRlaW5mcm9tdG9wIHtcblx0MCUge1xuXHRcdG9wYWNpdHk6IDA7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG5cdH1cblx0MTAwJSB7XG5cdFx0b3BhY2l0eTogMTtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdH1cbn1cbkBrZXlmcmFtZXMgYm91bmNlcmlnaHQge1xuXHQwJSxcblx0MjAlLFxuXHQ1MCUsXG5cdDgwJSxcblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuXHR9XG5cdDQwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xuXHR9XG5cdDYwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpO1xuXHR9XG59XG5cbkBrZXlmcmFtZXMgb3BlbmZyb210b3Age1xuXHQwJSB7XG5cdFx0aGVpZ2h0OiAwO1xuXHR9XG5cblx0MTAwJSB7XG5cdFx0aGVpZ2h0OiA3MCU7IC8qIEFkanVzdCB0aGUgZmluYWwgaGVpZ2h0IGFzIG5lZWRlZCAqL1xuXHR9XG59XG5Aa2V5ZnJhbWVzIGl0ZW1vcGVuIHtcblx0MCUge1xuXHRcdGhlaWdodDogMDtcblx0fVxuXG5cdDEwMCUge1xuXHRcdGhlaWdodDogMTAwcHg7IC8qIEFkanVzdCB0aGUgZmluYWwgaGVpZ2h0IGFzIG5lZWRlZCAqL1xuXHR9XG59XG5cbmJ1dHRvbjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XG59XG5cbmJ1dHRvbjphY3RpdmUge1xuXHRhbmltYXRpb246Ym91bmNlIDAuNXMge1xuXHR9XG59XG5ib2R5IHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NiwgMTk3LCAxNzYpO1xufVxuXG4jcGFnZWxheW91dCB7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDEwMCU7XG5cdG1hcmdpbjogMHB4O1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDgwJTtcbn1cblxuI3RvcHJpZ2h0IHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdyaWQtdGVtcGxhdGUtYXJlYXM6IDEvMS8yLzI7XG5cdGZvbnQtc2l6ZTogNjBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0YW47XG5cdGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xuXHRjb2xvcjogZ3JlZW47XG5cdGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG5cdFx0XCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuI3RvcGxlZnQge1xuXHRib3JkZXI6IDRweCBzb2xpZCBibGFjaztcblx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogMS8yLzIvMztcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogMzZweDtcblx0Zm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIixcblx0XHRcIkx1Y2lkYSBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOCwgNzAsIDgpO1xuXHRjb2xvcjogdGFuO1xuXHRmb250LXdlaWdodDogODAwO1xufVxuXG4jYm90dG9tbGVmdCB7XG5cdGdyaWQtdGVtcGxhdGUtYXJlYXM6IDIvMi8zLzM7XG59XG5cbiNib3R0b21yaWdodCB7XG5cdGdyaWQtdGVtcGxhdGUtYXJlYXM6IDIvMS8zLzI7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBDb2x1bW47XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4jbGVmdHJpZ2h0IHtcblx0ZGlzcGxheTogZmxleDtcblx0aGVpZ2h0OiA2MCU7XG5cdHdpZHRoOiAxMDAlO1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4jbGVmdCB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR3aWR0aDogMjAlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jcmlnaHQge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJTtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0d2lkdGg6IDIwJTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jbGVmdDphY3RpdmUge1xuXHRhbmltYXRpb246IGJvdW5jZWxlZnQgMC41cztcbn1cblxuI3JpZ2h0OmFjdGl2ZSB7XG5cdGFuaW1hdGlvbjogYm91bmNlcmlnaHQgMC41cztcbn1cbiNjYXJvdXNlbGNvbnRhaW5lciB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2lkdGg6IDcwJTtcblx0ZGlzcGxheTogZmxleDtcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xuXHRmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxuXHRcdFwiTHVjaWRhIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMjRweDtcblx0bWFyZ2luOiAxMHB4O1xuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGNvbG9yOiB0YW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdHBlcnNwZWN0aXZlOiAxMjAwcHg7XG59XG5cbiNjYXJvdXNlbGNvbnRhaW5lcjphY3RpdmUgPiAuY2FyZCB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0dHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbi5jYXJkIHtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwMG1zO1xufVxuXG4uZnJvbnQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJvcmRlcjogMnB4IGJsYWNrIGdyb292ZTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtd2VpZ2h0OiA4MDA7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuXG4uYmFjayB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcblxuXHRkaXNwbGF5OiBGbGV4O1xuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJvcmRlcjogMnB4IGJsYWNrIGdyb292ZTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRmb250LXdlaWdodDogODAwO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAxMDAlO1xuXHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG5cdGNvbG9yOiBibGFjaztcblx0dHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG4jY2Fyb3VzZWxkb3RzIHtcblx0aGVpZ2h0OiAxMDBweDtcblx0d2lkdGg6IGF1dG87XG5cdGdhcDogMTBweDtcblx0ZGlzcGxheTogZmxleDtcblx0cGFkZGluZzogOHB4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Ym9yZGVyOiAycHggZ3JlZW4gc29saWQ7XG5cdHRleHQtYWxpZ246IENlbnRlcjtcblx0Ym9yZGVyOiBncm9vdmUgYmxhY2sgMTBweDtcblx0ZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY2lyY2xlIHtcblx0aGVpZ2h0OiA0MHB4O1xuXHR3aWR0aDogNDBweDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuLmNpcmNsZTpob3ZlciB7XG5cdHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuI21lbnVidXR0b24ge1xuXHRoZWlnaHQ6IDQwcHg7XG5cdGNvbG9yOiBncmVlbjtcblx0YmFja2dyb3VuZC1jb2xvcjogdGFuO1xuXHRmb250LXNpemU6IDI2cHg7XG5cdGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG5cdFx0XCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0d2lkdGg6IDEwMCU7XG59XG5cbiNkcm9wZG93bmNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG4uc3dpdGNoY29udGFpbmVyIHtcblx0Z2FwOiAxMHB4O1xuXHRtYXJnaW46IDVweDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG5cdFx0XCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbi5zd2l0Y2gge1xuXHRmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxuXHRcdFwiTHVjaWRhIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0d2lkdGg6IDkwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRjb2xvcjogcmdiKDExNiwgMTU0LCAxMTYpO1xuXHRmb250LXdlaWdodDogODAwO1xufVxuLmRyb3Bkb3duaXRlbSB7XG5cdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuXHRwYWRkaW5nOiA1cHg7XG5cdGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG5cdFx0XCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjUwLCAyMTUpO1xufVxuLmRyb3Bkb3duaXRlbXZpc2libGUge1xuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcblx0cGFkZGluZzogNXB4O1xuXHRmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxuXHRcdFwiTHVjaWRhIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDI1MCwgMjE1KTtcbn1cbiNzd2l0Y2hjb250YWluZXIxLFxuI3N3aXRjaGNvbnRhaW5lcjIsXG4jc3dpdGNoY29udGFpbmVyMyxcbiNzd2l0Y2hjb250YWluZXI0LFxuI3N3aXRjaGNvbnRhaW5lcjUsXG4jc3dpdGNoY29udGFpbmVyNixcbiNzd2l0Y2hjb250YWluZXI3LFxuI3N3aXRjaGNvbnRhaW5lcjgge1xuXHR3aWR0aDogNTAlO1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4jdmlzaWJsZXN3aXRjaDEsXG4jdmlzaWJsZXN3aXRjaDIsXG4jdmlzaWJsZXN3aXRjaDMsXG4jdmlzaWJsZXN3aXRjaDQsXG4jdmlzaWJsZXN3aXRjaDUsXG4jdmlzaWJsZXN3aXRjaDYsXG4jdmlzaWJsZXN3aXRjaDcsXG4jdmlzaWJsZXN3aXRjaDgge1xuXHRhbmltYXRpb246IGZhZGVpbmZyb210b3AgMC41cyBmb3J3YXJkcztcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4jdmlzaWJsZSB7XG5cdGFuaW1hdGlvbjogZmFkZWluZnJvbXRvcCAwLjVzIGZvcndhcmRzO1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LWZhbWlseTogXCJHaWxsIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgQ2FsaWJyaSwgXCJUcmVidWNoZXQgTVNcIiwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcblx0Z2FwOiAyMHB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcblx0aGVpZ2h0OiA3MCU7XG59XG4jZHJvcGRvd25jb250YWluZXI6aG92ZXIge1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LWZhbWlseTogXCJHaWxsIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgQ2FsaWJyaSwgXCJUcmVidWNoZXQgTVNcIiwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcblx0Z2FwOiAyMHB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDOzs7OztFQUtDLHdCQUF3QjtDQUN6QjtD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V0FBVztDQUNYLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsNkVBQTZFO0NBQzdFLGVBQWU7Q0FDZixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLFNBQVM7Q0FDVCx1QkFBdUI7Q0FDdkIsV0FBVztBQUNaO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQiw2RUFBNkU7Q0FDN0UsZUFBZTtDQUNmLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsU0FBUztDQUNULHVCQUF1QjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAa2V5ZnJhbWVzIGJvdW5jZWxlZnQge1xcblxcdDAlLFxcblxcdDIwJSxcXG5cXHQ1MCUsXFxuXFx0ODAlLFxcblxcdDEwMCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG5cXHR9XFxuXFx0NDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwcHgpO1xcblxcdH1cXG5cXHQ2MCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTVweCk7XFxuXFx0fVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XFxuXFx0MCUsXFxuXFx0MjAlLFxcblxcdDUwJSxcXG5cXHQ4MCUsXFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcblxcdH1cXG5cXHQ0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XFxuXFx0fVxcblxcdDYwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcXG5cXHR9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZWluZnJvbXRvcCB7XFxuXFx0MCUge1xcblxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuXFx0fVxcblxcdDEwMCUge1xcblxcdFxcdG9wYWNpdHk6IDE7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcblxcdH1cXG59XFxuQGtleWZyYW1lcyBib3VuY2VyaWdodCB7XFxuXFx0MCUsXFxuXFx0MjAlLFxcblxcdDUwJSxcXG5cXHQ4MCUsXFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcblxcdH1cXG5cXHQ0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcXG5cXHR9XFxuXFx0NjAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XFxuXFx0fVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIG9wZW5mcm9tdG9wIHtcXG5cXHQwJSB7XFxuXFx0XFx0aGVpZ2h0OiAwO1xcblxcdH1cXG5cXG5cXHQxMDAlIHtcXG5cXHRcXHRoZWlnaHQ6IDcwJTsgLyogQWRqdXN0IHRoZSBmaW5hbCBoZWlnaHQgYXMgbmVlZGVkICovXFxuXFx0fVxcbn1cXG5Aa2V5ZnJhbWVzIGl0ZW1vcGVuIHtcXG5cXHQwJSB7XFxuXFx0XFx0aGVpZ2h0OiAwO1xcblxcdH1cXG5cXG5cXHQxMDAlIHtcXG5cXHRcXHRoZWlnaHQ6IDEwMHB4OyAvKiBBZGp1c3QgdGhlIGZpbmFsIGhlaWdodCBhcyBuZWVkZWQgKi9cXG5cXHR9XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuXFx0YW5pbWF0aW9uOmJvdW5jZSAwLjVzIHtcXG5cXHR9XFxufVxcbmJvZHkge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxNTYsIDE5NywgMTc2KTtcXG59XFxuXFxuI3BhZ2VsYXlvdXQge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXJnaW46IDBweDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSA4MCU7XFxufVxcblxcbiN0b3ByaWdodCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6IDEvMS8yLzI7XFxuXFx0Zm9udC1zaXplOiA2MHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0YW47XFxuXFx0Ym9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuXFx0Y29sb3I6IGdyZWVuO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsXFxuXFx0XFx0XFxcIkx1Y2lkYSBTYW5zXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuI3RvcGxlZnQge1xcblxcdGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6IDEvMi8yLzM7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMzZweDtcXG5cXHRmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcblxcdFxcdFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYig4LCA3MCwgOCk7XFxuXFx0Y29sb3I6IHRhbjtcXG5cXHRmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4jYm90dG9tbGVmdCB7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogMi8yLzMvMztcXG59XFxuXFxuI2JvdHRvbXJpZ2h0IHtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOiAyLzEvMy8yO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IENvbHVtbjtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuI2xlZnRyaWdodCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRoZWlnaHQ6IDYwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4jbGVmdCB7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9sZWZ0X2Fycm93LnBuZ1xcXCIpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDIwJTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNyaWdodCB7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9yaWdodF9hcnJvdy5wbmdcXFwiKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHdpZHRoOiAyMCU7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jbGVmdDphY3RpdmUge1xcblxcdGFuaW1hdGlvbjogYm91bmNlbGVmdCAwLjVzO1xcbn1cXG5cXG4jcmlnaHQ6YWN0aXZlIHtcXG5cXHRhbmltYXRpb246IGJvdW5jZXJpZ2h0IDAuNXM7XFxufVxcbiNjYXJvdXNlbGNvbnRhaW5lciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdpZHRoOiA3MCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG5cXHRcXHRcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDI0cHg7XFxuXFx0bWFyZ2luOiAxMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGNvbG9yOiB0YW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRwZXJzcGVjdGl2ZTogMTIwMHB4O1xcbn1cXG5cXG4jY2Fyb3VzZWxjb250YWluZXI6YWN0aXZlID4gLmNhcmQge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXG59XFxuXFxuLmNhcmQge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwMG1zO1xcbn1cXG5cXG4uZnJvbnQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRib3JkZXI6IDJweCBibGFjayBncm9vdmU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRmb250LXdlaWdodDogODAwO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9wYXBlci53ZWJwXFxcIik7XFxufVxcblxcbi5iYWNrIHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL3BhcGVyLndlYnBcXFwiKTtcXG5cXG5cXHRkaXNwbGF5OiBGbGV4O1xcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0Ym9yZGVyOiAycHggYmxhY2sgZ3Jvb3ZlO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRmb250LXdlaWdodDogODAwO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbn1cXG4jY2Fyb3VzZWxkb3RzIHtcXG5cXHRoZWlnaHQ6IDEwMHB4O1xcblxcdHdpZHRoOiBhdXRvO1xcblxcdGdhcDogMTBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHBhZGRpbmc6IDhweDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJvcmRlcjogMnB4IGdyZWVuIHNvbGlkO1xcblxcdHRleHQtYWxpZ246IENlbnRlcjtcXG5cXHRib3JkZXI6IGdyb292ZSBibGFjayAxMHB4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNpcmNsZSB7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdHdpZHRoOiA0MHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG4uY2lyY2xlOmhvdmVyIHtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbiNtZW51YnV0dG9uIHtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0Y29sb3I6IGdyZWVuO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRhbjtcXG5cXHRmb250LXNpemU6IDI2cHg7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG5cXHRcXHRcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuI2Ryb3Bkb3duY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG4uc3dpdGNoY29udGFpbmVyIHtcXG5cXHRnYXA6IDEwcHg7XFxuXFx0bWFyZ2luOiA1cHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsXFxuXFx0XFx0XFxcIkx1Y2lkYSBTYW5zXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcbi5zd2l0Y2gge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsXFxuXFx0XFx0XFxcIkx1Y2lkYSBTYW5zXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdHdpZHRoOiA5MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFx0Y29sb3I6IHJnYigxMTYsIDE1NCwgMTE2KTtcXG5cXHRmb250LXdlaWdodDogODAwO1xcbn1cXG4uZHJvcGRvd25pdGVtIHtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG5cXHRcXHRcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyNTAsIDIxNSk7XFxufVxcbi5kcm9wZG93bml0ZW12aXNpYmxlIHtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG5cXHRcXHRcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyNTAsIDIxNSk7XFxufVxcbiNzd2l0Y2hjb250YWluZXIxLFxcbiNzd2l0Y2hjb250YWluZXIyLFxcbiNzd2l0Y2hjb250YWluZXIzLFxcbiNzd2l0Y2hjb250YWluZXI0LFxcbiNzd2l0Y2hjb250YWluZXI1LFxcbiNzd2l0Y2hjb250YWluZXI2LFxcbiNzd2l0Y2hjb250YWluZXI3LFxcbiNzd2l0Y2hjb250YWluZXI4IHtcXG5cXHR3aWR0aDogNTAlO1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiN2aXNpYmxlc3dpdGNoMSxcXG4jdmlzaWJsZXN3aXRjaDIsXFxuI3Zpc2libGVzd2l0Y2gzLFxcbiN2aXNpYmxlc3dpdGNoNCxcXG4jdmlzaWJsZXN3aXRjaDUsXFxuI3Zpc2libGVzd2l0Y2g2LFxcbiN2aXNpYmxlc3dpdGNoNyxcXG4jdmlzaWJsZXN3aXRjaDgge1xcblxcdGFuaW1hdGlvbjogZmFkZWluZnJvbXRvcCAwLjVzIGZvcndhcmRzO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuI3Zpc2libGUge1xcblxcdGFuaW1hdGlvbjogZmFkZWluZnJvbXRvcCAwLjVzIGZvcndhcmRzO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiR2lsbCBTYW5zXFxcIiwgXFxcIkdpbGwgU2FucyBNVFxcXCIsIENhbGlicmksIFxcXCJUcmVidWNoZXQgTVNcXFwiLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcblxcdGdhcDogMjBweDtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG5cXHRoZWlnaHQ6IDcwJTtcXG59XFxuI2Ryb3Bkb3duY29udGFpbmVyOmhvdmVyIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LWZhbWlseTogXFxcIkdpbGwgU2Fuc1xcXCIsIFxcXCJHaWxsIFNhbnMgTVRcXFwiLCBDYWxpYnJpLCBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG5cXHRnYXA6IDIwcHg7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBtb3ZlQ2Fyb3VzZWwodW5pdCwgY2hvaWNlKSB7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGxlZnRQcmVzcyk7XG5cblx0bGV0IGZyb250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcm9udFwiKTtcblx0bGV0IGJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tcIik7XG5cdGNhcm91c2VsZG90cy5pbm5lckhUTUwgPSBcIlwiO1xuXHRsZXQgY291bnRlciA9IDA7XG5cdHZhciBrZXlzID0gT2JqZWN0LmtleXModW5pdCk7XG5cdHZhciB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKHVuaXQpO1xuXHRpZiAoY2hvaWNlID09IDEpIHtcblx0XHRsZXQgdGVtcCA9IGtleXM7XG5cdFx0a2V5cyA9IHZhbHVlcztcblx0XHR2YWx1ZXMgPSB0ZW1wO1xuXHR9XG5cdGZyb250LmlubmVySFRNTCA9IGtleXNbY291bnRlcl07XG5cdGJhY2suaW5uZXJIVE1MID0gdmFsdWVzW2NvdW50ZXJdO1xuXHQvL2NyZWF0ZXMgZG90cyBmb3IgY2Fyb3VzZWwgYW5kIGFkZHMgdGhlbSB0byB0aGUgcGFnZVxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRkb3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjaXJjbGVcIik7XG5cdFx0ZG90LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZG90c1wiICsgaSk7XG5cdFx0Ly9mdW5jdGlvbiB0byBtYWtlIGRvdCBjbGljayBhbmQgc2hvd2Nhc2UgdGhlIGNvcnJlc3BvbmRpbmcgaW1hZ2Vcblx0XHRkb3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdGNvdW50ZXIgPSBpO1xuXHRcdFx0Ly9uZWVkIHRvIHVwZGF0ZSBpbWFnZVxuXHRcdFx0ZnJvbnQuaW5uZXJIVE1MID0ga2V5c1tjb3VudGVyXTtcblx0XHRcdGJhY2suaW5uZXJIVE1MID0gdmFsdWVzW2NvdW50ZXJdO1xuXHRcdFx0Y2hlY2tEb3RzKCk7XG5cblx0XHRcdHJldHVybiBjb3VudGVyO1xuXHRcdH0pO1xuXHRcdGNhcm91c2VsZG90cy5hcHBlbmQoZG90KTtcblx0XHRjaGVja0RvdHMoKTtcblx0fVxuXG5cdC8vY3JlYXRlcyBhbiBhcnJheSBvZiBrZXlzIGFuZCB2YWx1ZXMgZnJvbSB0aGUgdW5pdCAxIG9iamVjdFxuXHQvL05vIGxvbmdlciBuZWVkIHNpbmNlIGZyb250IGFuZCBiYWNrIGFyZSBzZXBhcmF0ZSBkaXZzXG5cdC8vb24gY2xpY2sgd2lsbCBzd2l0Y2ggYmV0d2VlbiBrZXkgYW5kIHZhbHVlIHBhaXJcblx0Ly9jYXJvdXNlbGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHQvL1x0aWYgKGNhcm91c2VsY29udGFpbmVyLmlubmVySFRNTCA9PSBrZXlzW2NvdW50ZXJdKSB7XG5cdC8vXHRcdGNhcm91c2VsY29udGFpbmVyLmlubmVySFRNTCA9IHZhbHVlc1tjb3VudGVyXTtcblx0Ly9cdH0gZWxzZSBpZiAoY2Fyb3VzZWxjb250YWluZXIuaW5uZXJIVE1MID09IHZhbHVlc1tjb3VudGVyXSkge1xuXHQvL1x0XHRjYXJvdXNlbGNvbnRhaW5lci5pbm5lckhUTUwgPSBrZXlzW2NvdW50ZXJdO1xuXHQvL1x0fVxuXHQvL30pO1xuXG5cdC8vZnVuY3Rpb25zIGZvciBsZWZ0IGFuZCByaWdodCBhcnJvdywgYW5kIGNoYW5naW5nIGNvdW50ZXJcblx0bGV0IGxlZnRhcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFwiKTtcblx0bGV0IHJpZ2h0YXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0XCIpO1xuXHRsZWZ0YXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRpZiAoY291bnRlciA9PSAwKSB7XG5cdFx0XHRjb3VudGVyID0ga2V5cy5sZW5ndGggLSAxO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb3VudGVyID0gY291bnRlciAtIDE7XG5cdFx0fVxuXHRcdGZyb250LmlubmVySFRNTCA9IGtleXNbY291bnRlcl07XG5cdFx0YmFjay5pbm5lckhUTUwgPSB2YWx1ZXNbY291bnRlcl07XG5cblx0XHRjb25zb2xlLmxvZyhjb3VudGVyKTtcblx0XHRjaGVja0RvdHMoKTtcblx0XHRyZXR1cm4gY291bnRlcjtcblx0fSk7XG5cblx0cmlnaHRhcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGlmIChjb3VudGVyID09IGtleXMubGVuZ3RoIC0gMSkge1xuXHRcdFx0Y291bnRlciA9IDA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvdW50ZXIgPSBjb3VudGVyICsgMTtcblx0XHR9XG5cdFx0ZnJvbnQuaW5uZXJIVE1MID0ga2V5c1tjb3VudGVyXTtcblx0XHRiYWNrLmlubmVySFRNTCA9IHZhbHVlc1tjb3VudGVyXTtcblx0XHRjaGVja0RvdHMoKTtcblx0XHRyZXR1cm4gY291bnRlcjtcblx0fSk7XG5cdC8vcmVzZXRzIGFsbCBkb3RzIHRvIGdyYXksIHRoZW4gY2hlY2tzIHRoZSBjb3VudGVyIG51bWJlciwgYW5kIG1ha2VzIHRoZSBkb3Qgd2l0aCB0aGF0IGNvdW50ZXIgSUQgcmVkXG5cdGZ1bmN0aW9uIGNoZWNrRG90cygpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChjb3VudGVyID09IGkpIHtcblx0XHRcdFx0bGV0IGRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2lyY2xlXCIpO1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRvdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRkb3RzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JheVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCB0aGlzZG90ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb3RzXCIgKyBpKTtcblx0XHRcdFx0dGhpc2RvdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gbGVmdFByZXNzKGV2ZW50KSB7XG5cdFx0aWYgKGV2ZW50LmtleUNvZGUgPT09IDM3KSB7XG5cdFx0XHRpZiAoY291bnRlciA9PSAwKSB7XG5cdFx0XHRcdGNvdW50ZXIgPSBrZXlzLmxlbmd0aCAtIDE7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb3VudGVyID0gY291bnRlciAtIDE7XG5cdFx0XHR9XG5cdFx0XHRmcm9udC5pbm5lckhUTUwgPSBrZXlzW2NvdW50ZXJdO1xuXHRcdFx0YmFjay5pbm5lckhUTUwgPSB2YWx1ZXNbY291bnRlcl07XG5cblx0XHRcdGNvbnNvbGUubG9nKGNvdW50ZXIpO1xuXHRcdFx0Y2hlY2tEb3RzKCk7XG5cdFx0XHRyZXR1cm4gY291bnRlcjtcblx0XHR9XG5cdFx0aWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG5cdFx0XHRpZiAoY291bnRlciA9PSBrZXlzLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0Y291bnRlciA9IDA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb3VudGVyID0gY291bnRlciArIDE7XG5cdFx0XHR9XG5cdFx0XHRmcm9udC5pbm5lckhUTUwgPSBrZXlzW2NvdW50ZXJdO1xuXHRcdFx0YmFjay5pbm5lckhUTUwgPSB2YWx1ZXNbY291bnRlcl07XG5cdFx0XHRjb25zb2xlLmxvZyhjb3VudGVyKTtcblx0XHRcdGNoZWNrRG90cygpO1xuXHRcdFx0cmV0dXJuIGNvdW50ZXI7XG5cdFx0fVxuXHRcdGlmIChldmVudC5rZXlDb2RlID09PSAzMikge1xuXHRcdFx0aWYgKGZyb250LmlubmVySFRNTCA9PSBrZXlzW2NvdW50ZXJdKSB7XG5cdFx0XHRcdGZyb250LmlubmVySFRNTCA9IHZhbHVlc1tjb3VudGVyXTtcblx0XHRcdH0gZWxzZSBpZiAoZnJvbnQuaW5uZXJIVE1MID09IHZhbHVlc1tjb3VudGVyXSkge1xuXHRcdFx0XHRmcm9udC5pbm5lckhUTUwgPSBrZXlzW2NvdW50ZXJdO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiZXhwb3J0IGxldCB1bml0MV92b2NhYiA9IHtcblx0XCJ1bml0IDEgd29yZFwiOlxuXHRcdFwiRGVmaW5pdGlvbiAxIHRoaXMgaXMgYSB0ZXN0IHRvIHNlZSBob3cgbWFraW5nIHRoZSBkZWZpbml0aW9uIGJpZ2dlciBhZmZlY3RzIHRoZSBkaXYgc2l6ZVwiLFxuXHRcIndvcmQgMlwiOiBcIkRFRklOSVRJT04gMlwiLFxuXHRcIndvcmQgM1wiOiBcIkRFRklOSVRJT04gM1wiLFxuXHRcIndvcmQgNFwiOiBcIkRFRklOSVRJT04gNFwiLFxuXHRcIndvcmQgNVwiOiBcIkRlZmluaXRpb24gNVwiLFxuXHRcIldvcmQgNlwiOiBcImRlZmluaXRpb24gNlwiLFxuXHRcIndvcmQgN1wiOiBcImRlZmluaXRpb24gN1wiLFxuXHRcIndvcmQgOFwiOiBcImRlZmludGlvbiA4XCIsXG5cdFwid29yZCA5XCI6IFwiZGVmaW5pdGlvbiA5XCIsXG5cdFwid29yZCAxMFwiOiBcImRlZmluaXRpb24gMTBcIixcblx0XCJ3b3JkIDExXCI6IFwiZGVmaW5pdGlvbiAxMVwiLFxuXHRcIndvcmQgMTJcIjogXCJEZWZpbml0aW9uIDEyXCIsXG5cdFwid29yZCAxM1wiOiBcIkRlZmludGlvbiAxM1wiLFxuXHRcIndvcmQgMTRcIjogXCJkZWZpbml0aW9uIDE0XCIsXG5cdFwid29yZCAxNVwiOiBcImRlZmluaXRpb24gMTVcIixcblx0XCJ3b3JkIDE2XCI6IFwiRGVmaW5pdGlvbiAxNlwiLFxuXHRcIndvcmQgMTdcIjogXCJEZWZpbnRpb24gMTdcIixcblx0XCJ3b3JkIDE4XCI6IFwiZGVmaW5pdGlvbiAxOFwiLFxuXHRcIndvcmQgMTlcIjogXCJkZWZpbml0aW9uIDE5XCIsXG5cdFwid29yZCAyMFwiOiBcIkRlZmluaXRpb24gMjBcIixcbn07XG5cbmV4cG9ydCBsZXQgdW5pdDJfdm9jYWIgPSB7XG5cdFwidW5pdCAyIHdvcmRcIjpcblx0XHRcIkRlZmluaXRpb24gMSB0aGlzIGlzIGEgdGVzdCB0byBzZWUgaG93IG1ha2luZyB0aGUgZGVmaW5pdGlvbiBiaWdnZXIgYWZmZWN0cyB0aGUgZGl2IHNpemVcIixcblx0XCJ3b3JkIDJcIjogXCJERUZJTklUSU9OIDJcIixcblx0XCJ3b3JkIDNcIjogXCJERUZJTklUSU9OIDNcIixcblx0XCJ3b3JkIDRcIjogXCJERUZJTklUSU9OIDRcIixcblx0XCJ3b3JkIDVcIjogXCJEZWZpbml0aW9uIDVcIixcblx0XCJXb3JkIDZcIjogXCJkZWZpbml0aW9uIDZcIixcblx0XCJ3b3JkIDdcIjogXCJkZWZpbml0aW9uIDdcIixcblx0XCJ3b3JkIDhcIjogXCJkZWZpbnRpb24gOFwiLFxuXHRcIndvcmQgOVwiOiBcImRlZmluaXRpb24gOVwiLFxuXHRcIndvcmQgMTBcIjogXCJkZWZpbml0aW9uIDEwXCIsXG5cdFwid29yZCAxMVwiOiBcImRlZmluaXRpb24gMTFcIixcblx0XCJ3b3JkIDEyXCI6IFwiRGVmaW5pdGlvbiAxMlwiLFxuXHRcIndvcmQgMTNcIjogXCJEZWZpbnRpb24gMTNcIixcblx0XCJ3b3JkIDE0XCI6IFwiZGVmaW5pdGlvbiAxNFwiLFxuXHRcIndvcmQgMTVcIjogXCJkZWZpbml0aW9uIDE1XCIsXG5cdFwid29yZCAxNlwiOiBcIkRlZmluaXRpb24gMTZcIixcblx0XCJ3b3JkIDE3XCI6IFwiRGVmaW50aW9uIDE3XCIsXG5cdFwid29yZCAxOFwiOiBcImRlZmluaXRpb24gMThcIixcblx0XCJ3b3JkIDE5XCI6IFwiZGVmaW5pdGlvbiAxOVwiLFxuXHRcIndvcmQgMjBcIjogXCJEZWZpbml0aW9uIDIwXCIsXG59O1xuXG5leHBvcnQgbGV0IHVuaXQzX3ZvY2FiID0ge1xuXHRcInVuaXQgMSB3b3JkXCI6XG5cdFx0XCJEZWZpbml0aW9uIDEgdGhpcyBpcyBhIHRlc3QgdG8gc2VlIGhvdyBtYWtpbmcgdGhlIGRlZmluaXRpb24gYmlnZ2VyIGFmZmVjdHMgdGhlIGRpdiBzaXplXCIsXG5cdFwid29yZCAyXCI6IFwiREVGSU5JVElPTiAyXCIsXG5cdFwid29yZCAzXCI6IFwiREVGSU5JVElPTiAzXCIsXG5cdFwid29yZCA0XCI6IFwiREVGSU5JVElPTiA0XCIsXG5cdFwid29yZCA1XCI6IFwiRGVmaW5pdGlvbiA1XCIsXG5cdFwiV29yZCA2XCI6IFwiZGVmaW5pdGlvbiA2XCIsXG5cdFwid29yZCA3XCI6IFwiZGVmaW5pdGlvbiA3XCIsXG5cdFwid29yZCA4XCI6IFwiZGVmaW50aW9uIDhcIixcblx0XCJ3b3JkIDlcIjogXCJkZWZpbml0aW9uIDlcIixcblx0XCJ3b3JkIDEwXCI6IFwiZGVmaW5pdGlvbiAxMFwiLFxuXHRcIndvcmQgMTFcIjogXCJkZWZpbml0aW9uIDExXCIsXG5cdFwid29yZCAxMlwiOiBcIkRlZmluaXRpb24gMTJcIixcblx0XCJ3b3JkIDEzXCI6IFwiRGVmaW50aW9uIDEzXCIsXG5cdFwid29yZCAxNFwiOiBcImRlZmluaXRpb24gMTRcIixcblx0XCJ3b3JkIDE1XCI6IFwiZGVmaW5pdGlvbiAxNVwiLFxuXHRcIndvcmQgMTZcIjogXCJEZWZpbml0aW9uIDE2XCIsXG5cdFwid29yZCAxN1wiOiBcIkRlZmludGlvbiAxN1wiLFxuXHRcIndvcmQgMThcIjogXCJkZWZpbml0aW9uIDE4XCIsXG5cdFwid29yZCAxOVwiOiBcImRlZmluaXRpb24gMTlcIixcblx0XCJ3b3JkIDIwXCI6IFwiRGVmaW5pdGlvbiAyMFwiLFxufTtcblxuZXhwb3J0IGxldCB1bml0NF92b2NhYiA9IHtcblx0XCJ1bml0IDEgd29yZFwiOlxuXHRcdFwiRGVmaW5pdGlvbiAxIHRoaXMgaXMgYSB0ZXN0IHRvIHNlZSBob3cgbWFraW5nIHRoZSBkZWZpbml0aW9uIGJpZ2dlciBhZmZlY3RzIHRoZSBkaXYgc2l6ZVwiLFxuXHRcIndvcmQgMlwiOiBcIkRFRklOSVRJT04gMlwiLFxuXHRcIndvcmQgM1wiOiBcIkRFRklOSVRJT04gM1wiLFxuXHRcIndvcmQgNFwiOiBcIkRFRklOSVRJT04gNFwiLFxuXHRcIndvcmQgNVwiOiBcIkRlZmluaXRpb24gNVwiLFxuXHRcIldvcmQgNlwiOiBcImRlZmluaXRpb24gNlwiLFxuXHRcIndvcmQgN1wiOiBcImRlZmluaXRpb24gN1wiLFxuXHRcIndvcmQgOFwiOiBcImRlZmludGlvbiA4XCIsXG5cdFwid29yZCA5XCI6IFwiZGVmaW5pdGlvbiA5XCIsXG5cdFwid29yZCAxMFwiOiBcImRlZmluaXRpb24gMTBcIixcblx0XCJ3b3JkIDExXCI6IFwiZGVmaW5pdGlvbiAxMVwiLFxuXHRcIndvcmQgMTJcIjogXCJEZWZpbml0aW9uIDEyXCIsXG5cdFwid29yZCAxM1wiOiBcIkRlZmludGlvbiAxM1wiLFxuXHRcIndvcmQgMTRcIjogXCJkZWZpbml0aW9uIDE0XCIsXG5cdFwid29yZCAxNVwiOiBcImRlZmluaXRpb24gMTVcIixcblx0XCJ3b3JkIDE2XCI6IFwiRGVmaW5pdGlvbiAxNlwiLFxuXHRcIndvcmQgMTdcIjogXCJEZWZpbnRpb24gMTdcIixcblx0XCJ3b3JkIDE4XCI6IFwiZGVmaW5pdGlvbiAxOFwiLFxuXHRcIndvcmQgMTlcIjogXCJkZWZpbml0aW9uIDE5XCIsXG5cdFwid29yZCAyMFwiOiBcIkRlZmluaXRpb24gMjBcIixcbn07XG5cbmV4cG9ydCBsZXQgdW5pdDVfdm9jYWIgPSB7XG5cdFwidW5pdCAxIHdvcmRcIjpcblx0XHRcIkRlZmluaXRpb24gMSB0aGlzIGlzIGEgdGVzdCB0byBzZWUgaG93IG1ha2luZyB0aGUgZGVmaW5pdGlvbiBiaWdnZXIgYWZmZWN0cyB0aGUgZGl2IHNpemVcIixcblx0XCJ3b3JkIDJcIjogXCJERUZJTklUSU9OIDJcIixcblx0XCJ3b3JkIDNcIjogXCJERUZJTklUSU9OIDNcIixcblx0XCJ3b3JkIDRcIjogXCJERUZJTklUSU9OIDRcIixcblx0XCJ3b3JkIDVcIjogXCJEZWZpbml0aW9uIDVcIixcblx0XCJXb3JkIDZcIjogXCJkZWZpbml0aW9uIDZcIixcblx0XCJ3b3JkIDdcIjogXCJkZWZpbml0aW9uIDdcIixcblx0XCJ3b3JkIDhcIjogXCJkZWZpbnRpb24gOFwiLFxuXHRcIndvcmQgOVwiOiBcImRlZmluaXRpb24gOVwiLFxuXHRcIndvcmQgMTBcIjogXCJkZWZpbml0aW9uIDEwXCIsXG5cdFwid29yZCAxMVwiOiBcImRlZmluaXRpb24gMTFcIixcblx0XCJ3b3JkIDEyXCI6IFwiRGVmaW5pdGlvbiAxMlwiLFxuXHRcIndvcmQgMTNcIjogXCJEZWZpbnRpb24gMTNcIixcblx0XCJ3b3JkIDE0XCI6IFwiZGVmaW5pdGlvbiAxNFwiLFxuXHRcIndvcmQgMTVcIjogXCJkZWZpbml0aW9uIDE1XCIsXG5cdFwid29yZCAxNlwiOiBcIkRlZmluaXRpb24gMTZcIixcblx0XCJ3b3JkIDE3XCI6IFwiRGVmaW50aW9uIDE3XCIsXG5cdFwid29yZCAxOFwiOiBcImRlZmluaXRpb24gMThcIixcblx0XCJ3b3JkIDE5XCI6IFwiZGVmaW5pdGlvbiAxOVwiLFxuXHRcIndvcmQgMjBcIjogXCJEZWZpbml0aW9uIDIwXCIsXG59O1xuXG5leHBvcnQgbGV0IHVuaXQ2X3ZvY2FiID0ge1xuXHRcInVuaXQgMSB3b3JkXCI6XG5cdFx0XCJEZWZpbml0aW9uIDEgdGhpcyBpcyBhIHRlc3QgdG8gc2VlIGhvdyBtYWtpbmcgdGhlIGRlZmluaXRpb24gYmlnZ2VyIGFmZmVjdHMgdGhlIGRpdiBzaXplXCIsXG5cdFwid29yZCAyXCI6IFwiREVGSU5JVElPTiAyXCIsXG5cdFwid29yZCAzXCI6IFwiREVGSU5JVElPTiAzXCIsXG5cdFwid29yZCA0XCI6IFwiREVGSU5JVElPTiA0XCIsXG5cdFwid29yZCA1XCI6IFwiRGVmaW5pdGlvbiA1XCIsXG5cdFwiV29yZCA2XCI6IFwiZGVmaW5pdGlvbiA2XCIsXG5cdFwid29yZCA3XCI6IFwiZGVmaW5pdGlvbiA3XCIsXG5cdFwid29yZCA4XCI6IFwiZGVmaW50aW9uIDhcIixcblx0XCJ3b3JkIDlcIjogXCJkZWZpbml0aW9uIDlcIixcblx0XCJ3b3JkIDEwXCI6IFwiZGVmaW5pdGlvbiAxMFwiLFxuXHRcIndvcmQgMTFcIjogXCJkZWZpbml0aW9uIDExXCIsXG5cdFwid29yZCAxMlwiOiBcIkRlZmluaXRpb24gMTJcIixcblx0XCJ3b3JkIDEzXCI6IFwiRGVmaW50aW9uIDEzXCIsXG5cdFwid29yZCAxNFwiOiBcImRlZmluaXRpb24gMTRcIixcblx0XCJ3b3JkIDE1XCI6IFwiZGVmaW5pdGlvbiAxNVwiLFxuXHRcIndvcmQgMTZcIjogXCJEZWZpbml0aW9uIDE2XCIsXG5cdFwid29yZCAxN1wiOiBcIkRlZmludGlvbiAxN1wiLFxuXHRcIndvcmQgMThcIjogXCJkZWZpbml0aW9uIDE4XCIsXG5cdFwid29yZCAxOVwiOiBcImRlZmluaXRpb24gMTlcIixcblx0XCJ3b3JkIDIwXCI6IFwiRGVmaW5pdGlvbiAyMFwiLFxufTtcblxuZXhwb3J0IGxldCB1bml0N192b2NhYiA9IHtcblx0XCJ1bml0IDEgd29yZFwiOlxuXHRcdFwiRGVmaW5pdGlvbiAxIHRoaXMgaXMgYSB0ZXN0IHRvIHNlZSBob3cgbWFraW5nIHRoZSBkZWZpbml0aW9uIGJpZ2dlciBhZmZlY3RzIHRoZSBkaXYgc2l6ZVwiLFxuXHRcIndvcmQgMlwiOiBcIkRFRklOSVRJT04gMlwiLFxuXHRcIndvcmQgM1wiOiBcIkRFRklOSVRJT04gM1wiLFxuXHRcIndvcmQgNFwiOiBcIkRFRklOSVRJT04gNFwiLFxuXHRcIndvcmQgNVwiOiBcIkRlZmluaXRpb24gNVwiLFxuXHRcIldvcmQgNlwiOiBcImRlZmluaXRpb24gNlwiLFxuXHRcIndvcmQgN1wiOiBcImRlZmluaXRpb24gN1wiLFxuXHRcIndvcmQgOFwiOiBcImRlZmludGlvbiA4XCIsXG5cdFwid29yZCA5XCI6IFwiZGVmaW5pdGlvbiA5XCIsXG5cdFwid29yZCAxMFwiOiBcImRlZmluaXRpb24gMTBcIixcblx0XCJ3b3JkIDExXCI6IFwiZGVmaW5pdGlvbiAxMVwiLFxuXHRcIndvcmQgMTJcIjogXCJEZWZpbml0aW9uIDEyXCIsXG5cdFwid29yZCAxM1wiOiBcIkRlZmludGlvbiAxM1wiLFxuXHRcIndvcmQgMTRcIjogXCJkZWZpbml0aW9uIDE0XCIsXG5cdFwid29yZCAxNVwiOiBcImRlZmluaXRpb24gMTVcIixcblx0XCJ3b3JkIDE2XCI6IFwiRGVmaW5pdGlvbiAxNlwiLFxuXHRcIndvcmQgMTdcIjogXCJEZWZpbnRpb24gMTdcIixcblx0XCJ3b3JkIDE4XCI6IFwiZGVmaW5pdGlvbiAxOFwiLFxuXHRcIndvcmQgMTlcIjogXCJkZWZpbml0aW9uIDE5XCIsXG5cdFwid29yZCAyMFwiOiBcIkRlZmluaXRpb24gMjBcIixcbn07XG5cbmV4cG9ydCBsZXQgdW5pdDhfdm9jYWIgPSB7XG5cdFwidW5pdCAxIHdvcmRcIjpcblx0XHRcIkRlZmluaXRpb24gMSB0aGlzIGlzIGEgdGVzdCB0byBzZWUgaG93IG1ha2luZyB0aGUgZGVmaW5pdGlvbiBiaWdnZXIgYWZmZWN0cyB0aGUgZGl2IHNpemVcIixcblx0XCJ3b3JkIDJcIjogXCJERUZJTklUSU9OIDJcIixcblx0XCJ3b3JkIDNcIjogXCJERUZJTklUSU9OIDNcIixcblx0XCJ3b3JkIDRcIjogXCJERUZJTklUSU9OIDRcIixcblx0XCJ3b3JkIDVcIjogXCJEZWZpbml0aW9uIDVcIixcblx0XCJXb3JkIDZcIjogXCJkZWZpbml0aW9uIDZcIixcblx0XCJ3b3JkIDdcIjogXCJkZWZpbml0aW9uIDdcIixcblx0XCJ3b3JkIDhcIjogXCJkZWZpbnRpb24gOFwiLFxuXHRcIndvcmQgOVwiOiBcImRlZmluaXRpb24gOVwiLFxuXHRcIndvcmQgMTBcIjogXCJkZWZpbml0aW9uIDEwXCIsXG5cdFwid29yZCAxMVwiOiBcImRlZmluaXRpb24gMTFcIixcblx0XCJ3b3JkIDEyXCI6IFwiRGVmaW5pdGlvbiAxMlwiLFxuXHRcIndvcmQgMTNcIjogXCJEZWZpbnRpb24gMTNcIixcblx0XCJ3b3JkIDE0XCI6IFwiZGVmaW5pdGlvbiAxNFwiLFxuXHRcIndvcmQgMTVcIjogXCJkZWZpbml0aW9uIDE1XCIsXG5cdFwid29yZCAxNlwiOiBcIkRlZmluaXRpb24gMTZcIixcblx0XCJ3b3JkIDE3XCI6IFwiRGVmaW50aW9uIDE3XCIsXG5cdFwid29yZCAxOFwiOiBcImRlZmluaXRpb24gMThcIixcblx0XCJ3b3JkIDE5XCI6IFwiZGVmaW5pdGlvbiAxOVwiLFxuXHRcIndvcmQgMjBcIjogXCJEZWZpbml0aW9uIDIwXCIsXG5cdFwid29yZCAyMVwiOiBcImRlZmluaXRpb24gMjFcIixcblx0XCJ3b3JkIDIyXCI6IFwiZGVmaW5pdGlvbiAyMlwiLFxuXHRcIndvcmQgMjNcIjogXCJEZWZpbml0aW9uIDIzXCIsXG5cdFwid29yZCAyNFwiOiBcImRlZmluaXRpb24gMjRcIixcblx0XCJ3b3JkIDI1XCI6IFwiZGVmaW5pdGlvbiAyNVwiLFxuXHRcIndvcmQgMjZcIjogXCJEZWZpbml0aW9uIDI2XCIsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBtb3ZlQ2Fyb3VzZWwgfSBmcm9tIFwiLi9tb2R1bGVzL2l0ZW0xXCI7XG5pbXBvcnQgeyB1bml0MV92b2NhYiB9IGZyb20gXCIuL21vZHVsZXMvdW5pdHNcIjtcbmltcG9ydCB7IHVuaXQyX3ZvY2FiIH0gZnJvbSBcIi4vbW9kdWxlcy91bml0c1wiO1xuaW1wb3J0IHsgdW5pdDNfdm9jYWIgfSBmcm9tIFwiLi9tb2R1bGVzL3VuaXRzXCI7XG5pbXBvcnQgeyB1bml0NF92b2NhYiB9IGZyb20gXCIuL21vZHVsZXMvdW5pdHNcIjtcbmltcG9ydCB7IHVuaXQ1X3ZvY2FiIH0gZnJvbSBcIi4vbW9kdWxlcy91bml0c1wiO1xuaW1wb3J0IHsgdW5pdDZfdm9jYWIgfSBmcm9tIFwiLi9tb2R1bGVzL3VuaXRzXCI7XG5pbXBvcnQgeyB1bml0N192b2NhYiB9IGZyb20gXCIuL21vZHVsZXMvdW5pdHNcIjtcbmltcG9ydCB7IHVuaXQ4X3ZvY2FiIH0gZnJvbSBcIi4vbW9kdWxlcy91bml0c1wiO1xuXG4vL0dsb2JhbCB2YXJpYWJsZXMgb24gbWFpbiBwYWdlXG5sZXQgdG9wcmlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcHJpZ2h0XCIpO1xubGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVidXR0b25cIik7XG5sZXQgaXRlbTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duMVwiKTtcbmxldCBpdGVtMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd24yXCIpO1xubGV0IGl0ZW0zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93bjNcIik7XG5sZXQgaXRlbTQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duNFwiKTtcbmxldCBpdGVtNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd241XCIpO1xubGV0IGl0ZW02ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93bjZcIik7XG5sZXQgaXRlbTcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duN1wiKTtcbmxldCBpdGVtOCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd244XCIpO1xubGV0IGJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tcIik7XG5sZXQgYm90dG9tcmlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdHRvbXJpZ2h0XCIpO1xuXG4vLyB3b3JkIGFuZCBkZWZpbml0aW9uIGJ1dHRvbnNcbmxldCB3b3JkMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yZDFcIik7XG5sZXQgZGVmaW5pdGlvbjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmluaXRpb24xXCIpO1xubGV0IHdvcmQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JkMlwiKTtcbmxldCBkZWZpbml0aW9uMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmaW5pdGlvbjJcIik7XG5sZXQgd29yZDMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmQzXCIpO1xubGV0IGRlZmluaXRpb24zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZpbml0aW9uM1wiKTtcbmxldCB3b3JkNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yZDRcIik7XG5sZXQgZGVmaW5pdGlvbjQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmluaXRpb240XCIpO1xubGV0IHdvcmQ1ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JkNVwiKTtcbmxldCBkZWZpbml0aW9uNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmaW5pdGlvbjVcIik7XG5sZXQgd29yZDYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmQ2XCIpO1xubGV0IGRlZmluaXRpb242ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZpbml0aW9uNlwiKTtcbmxldCB3b3JkNyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yZDdcIik7XG5sZXQgZGVmaW5pdGlvbjcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmluaXRpb243XCIpO1xubGV0IHdvcmQ4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JkOFwiKTtcbmxldCBkZWZpbml0aW9uOCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmaW5pdGlvbjhcIik7XG5cbi8vbWFrZSBkcm9wZG93biBjb250YW5pZXIgdmlzaWJsZVxuXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuXHRsZXQgdGVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd25jb250YWluZXJcIik7XG5cdHRlc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ2aXNpYmxlXCIpO1xufSk7XG5cbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgdGVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZVwiKTtcblx0dGVzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRyb3Bkb3duY29udGFpbmVyXCIpO1xufSk7XG5cbi8vbWFrZSBzd2ljaCBmb3IgZWFjaCB1bml0IHZpc2libGUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pdGVtMS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcblx0bGV0IHN3aXRjaDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaGNvbnRhaW5lcjFcIik7XG5cdHN3aXRjaDEuaWQgPSBcInZpc2libGVzd2l0Y2gxXCI7XG59KTtcblxuaXRlbTIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG5cdGxldCBzd2l0Y2gyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd2l0Y2hjb250YWluZXIyXCIpO1xuXHRzd2l0Y2gyLmlkID0gXCJ2aXNpYmxlc3dpdGNoMlwiO1xufSk7XG5cbml0ZW0zLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoY29udGFpbmVyM1wiKTtcblx0c3dpdGNoMy5pZCA9IFwidmlzaWJsZXN3aXRjaDNcIjtcbn0pO1xuXG5pdGVtNC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcblx0bGV0IHN3aXRjaDQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaGNvbnRhaW5lcjRcIik7XG5cdHN3aXRjaDQuaWQgPSBcInZpc2libGVzd2l0Y2g0XCI7XG59KTtcbml0ZW01LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoY29udGFpbmVyNVwiKTtcblx0c3dpdGNoNS5pZCA9IFwidmlzaWJsZXN3aXRjaDVcIjtcbn0pO1xuaXRlbTYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG5cdGxldCBzd2l0Y2g2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd2l0Y2hjb250YWluZXI2XCIpO1xuXHRzd2l0Y2g2LmlkID0gXCJ2aXNpYmxlc3dpdGNoNlwiO1xufSk7XG5pdGVtNy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcblx0bGV0IHN3aXRjaDcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaGNvbnRhaW5lcjdcIik7XG5cdHN3aXRjaDcuaWQgPSBcInZpc2libGVzd2l0Y2g3XCI7XG59KTtcbml0ZW04LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoOCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoY29udGFpbmVyOFwiKTtcblx0c3dpdGNoOC5pZCA9IFwidmlzaWJsZXN3aXRjaDhcIjtcbn0pO1xuLy9tYWtlIHN3aXRjaCBmb3IgZWFjaCB1bml0IGRpc2FwcGVhci0tLS0tLS0tLS0tLS0tLS1cbml0ZW0xLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcblx0bGV0IHN3aXRjaDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpc2libGVzd2l0Y2gxXCIpO1xuXHRzd2l0Y2gxLmlkID0gXCJzd2l0Y2hjb250YWluZXIxXCI7XG59KTtcblxuaXRlbTIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDJcIik7XG5cdHN3aXRjaDIuaWQgPSBcInN3aXRjaGNvbnRhaW5lcjJcIjtcbn0pO1xuaXRlbTMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDNcIik7XG5cdHN3aXRjaDMuaWQgPSBcInN3aXRjaGNvbnRhaW5lcjNcIjtcbn0pO1xuaXRlbTQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDRcIik7XG5cdHN3aXRjaDQuaWQgPSBcInN3aXRjaGNvbnRhaW5lcjRcIjtcbn0pO1xuaXRlbTUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDVcIik7XG5cdHN3aXRjaDUuaWQgPSBcInN3aXRjaGNvbnRhaW5lcjVcIjtcbn0pO1xuaXRlbTYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoNiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDZcIik7XG5cdHN3aXRjaDYuaWQgPSBcInN3aXRjaGNvbnRhaW5lcjZcIjtcbn0pO1xuaXRlbTcuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoNyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDdcIik7XG5cdHN3aXRjaDcuaWQgPSBcInN3aXRjaGNvbnRhaW5lcjdcIjtcbn0pO1xuaXRlbTguYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoOCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDhcIik7XG5cdHN3aXRjaDguaWQgPSBcInN3aXRjaGNvbnRhaW5lcjhcIjtcbn0pO1xuXG4vL2V2ZW50IGxpc3RlbmVyIGZvciBzZWxlY3Rpb24gb2YgY2hvaWNlIG9uIHVuaXQgMVxud29yZDEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0bW92ZUNhcm91c2VsKHVuaXQxX3ZvY2FiLCAwKTtcblx0dG9wcmlnaHQuaW5uZXJIVE1MID0gXCJTY2llbnRpZmljIE1ldGhvZFwiO1xufSk7XG5cbmRlZmluaXRpb24xLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdG1vdmVDYXJvdXNlbCh1bml0MV92b2NhYiwgMSk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiU2NpZW50aWZpYyBNZXRob2RcIjtcbn0pO1xuXG53b3JkMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRtb3ZlQ2Fyb3VzZWwodW5pdDJfdm9jYWIsIDApO1xuXHR0b3ByaWdodC5pbm5lckhUTUwgPSBcIkxpZmUgYW5kIENlbGxzXCI7XG59KTtcblxuZGVmaW5pdGlvbjIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0bW92ZUNhcm91c2VsKHVuaXQyX3ZvY2FiLCAxKTtcblx0dG9wcmlnaHQuaW5uZXJIVE1MID0gXCJMaWZlIGFuZCBDZWxsc1wiO1xufSk7XG5cbndvcmQzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdG1vdmVDYXJvdXNlbCh1bml0M192b2NhYiwgMCk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiTnV0cml0aW9uXCI7XG59KTtcblxuZGVmaW5pdGlvbjMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0bW92ZUNhcm91c2VsKHVuaXQzX3ZvY2FiLCAxKTtcblx0dG9wcmlnaHQuaW5uZXJIVE1MID0gXCJOdXRyaXRpb25cIjtcbn0pO1xud29yZDQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0bW92ZUNhcm91c2VsKHVuaXQ0X3ZvY2FiLCAwKTtcblx0dG9wcmlnaHQuaW5uZXJIVE1MID0gXCJSZXNwaXJhdGlvbi9QaG90b3N5bnRoZXNpc1wiO1xufSk7XG5cbmRlZmluaXRpb240LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdG1vdmVDYXJvdXNlbCh1bml0NF92b2NhYiwgMSk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiUmVzcGlyYXRpb24vUGhvdG9zeW50aGVzaXNcIjtcbn0pO1xud29yZDUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0bW92ZUNhcm91c2VsKHVuaXQ1X3ZvY2FiLCAwKTtcblx0dG9wcmlnaHQuaW5uZXJIVE1MID0gXCJIb21lb3N0YXNpc1wiO1xufSk7XG5cbmRlZmluaXRpb241LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdG1vdmVDYXJvdXNlbCh1bml0NV92b2NhYiwgMSk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiSG9tZW9zdGFzaXNcIjtcbn0pO1xuXG53b3JkNi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRtb3ZlQ2Fyb3VzZWwodW5pdDZfdm9jYWIsIDApO1xuXHR0b3ByaWdodC5pbm5lckhUTUwgPSBcIkdlbmV0aWNzXCI7XG59KTtcblxuZGVmaW5pdGlvbjYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0bW92ZUNhcm91c2VsKHVuaXQ2X3ZvY2FiLCAxKTtcblx0dG9wcmlnaHQuaW5uZXJIVE1MID0gXCJHZW5ldGljc1wiO1xufSk7XG53b3JkNy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRtb3ZlQ2Fyb3VzZWwodW5pdDdfdm9jYWIsIDApO1xuXHR0b3ByaWdodC5pbm5lckhUTUwgPSBcIkV2b2x1dGlvblwiO1xufSk7XG5cbmRlZmluaXRpb243LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdG1vdmVDYXJvdXNlbCh1bml0N192b2NhYiwgMSk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiRXZvbHV0aW9uXCI7XG59KTtcbndvcmQ4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdG1vdmVDYXJvdXNlbCh1bml0OF92b2NhYiwgMCk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiRWNvbG9neVwiO1xufSk7XG5cbmRlZmluaXRpb244LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdG1vdmVDYXJvdXNlbCh1bml0OF92b2NhYiwgMSk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiRWNvbG9neVwiO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=