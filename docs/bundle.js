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
___CSS_LOADER_EXPORT___.push([module.id, `@media (max-width: 768px) {
	body {
		font-size: 14px;
	}
}

/* Styles for devices with a max width of 480px (e.g., small phones) */
@media (max-width: 480px) {
	body {
		font-size: 12px;
	}
}

@keyframes bounceleft {
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
	font-size: 2rem;
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
	text-align: center;
	font-size: 2rem;
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	background-color: rgb(4, 65, 4);
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

#leftarrow {
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
#rightarrow {
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
	font-size: 2rem;
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

.card {
	height: 100%;
	width: 100%;
	position: absolute;
	transform-style: preserve-3d;
	transition: transform 1000ms;
}
.flipped {
	transform: rotateY(180deg);
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
	height: 1rem;
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
	height: 1rem;
	width: 1rem;
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
	font-size: 1rem;
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
	font-size: 1rem;
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

#visibleswitch1 #visibleswitch2,
#visibleswitch3 #visibleswitch4,
#visibleswitch5 #visibleswitch6,
#visibleswitch7 #visibleswitch8 {
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
	font-size: 1rem;
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
	font-size: 1rem;
	flex-direction: column;
	background-color: beige;
	gap: 20px;
	border: 2px solid black;
}

ul {
	list-style: none;
	gap: 14px;
	display: flex;
	flex-direction: row;
	text-align: center;
	justify-content: center;
	align-items: center;
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	font-size: 2rem;
	font-weight: 700;
	color: black;
	margin-top: 30px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@media (max-width: 768px) {\n\tbody {\n\t\tfont-size: 14px;\n\t}\n}\n\n/* Styles for devices with a max width of 480px (e.g., small phones) */\n@media (max-width: 480px) {\n\tbody {\n\t\tfont-size: 12px;\n\t}\n}\n\n@keyframes bounceleft {\n\t0%,\n\t20%,\n\t50%,\n\t80%,\n\t100% {\n\t\ttransform: translateY(0);\n\t}\n\t40% {\n\t\ttransform: translateX(-30px);\n\t}\n\t60% {\n\t\ttransform: translateX(-15px);\n\t}\n}\n\n@keyframes bounce {\n\t0%,\n\t20%,\n\t50%,\n\t80%,\n\t100% {\n\t\ttransform: translateX(0);\n\t}\n\t40% {\n\t\ttransform: translateY(-30px);\n\t}\n\t60% {\n\t\ttransform: translateY(-15px);\n\t}\n}\n\n@keyframes fadeinfromtop {\n\t0% {\n\t\topacity: 0;\n\t\ttransform: translateY(0px);\n\t}\n\t100% {\n\t\topacity: 1;\n\t\ttransform: translateY(0);\n\t}\n}\n@keyframes bounceright {\n\t0%,\n\t20%,\n\t50%,\n\t80%,\n\t100% {\n\t\ttransform: translateY(0);\n\t}\n\t40% {\n\t\ttransform: translateX(30px);\n\t}\n\t60% {\n\t\ttransform: translateX(15px);\n\t}\n}\n\n@keyframes openfromtop {\n\t0% {\n\t\theight: 0;\n\t}\n\n\t100% {\n\t\theight: 70%; /* Adjust the final height as needed */\n\t}\n}\n@keyframes itemopen {\n\t0% {\n\t\theight: 0;\n\t}\n\n\t100% {\n\t\theight: 100px; /* Adjust the final height as needed */\n\t}\n}\n\nbutton:hover {\n\tbackground-color: skyblue;\n}\n\nbody {\n\tbackground-color: rgb(156, 197, 176);\n}\n\n#pagelayout {\n\theight: 100%;\n\twidth: 100%;\n\tmargin: 0px;\n\tdisplay: grid;\n\tgrid-template-columns: 20% 80%;\n\tgrid-template-rows: 20% 80%;\n}\n\n#topright {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgrid-template-areas: 1/1/2/2;\n\tfont-size: 2rem;\n\ttext-align: center;\n\tbackground-color: tan;\n\tborder: 4px solid black;\n\tcolor: green;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tfont-weight: 700;\n}\n\n#topleft {\n\tborder: 4px solid black;\n\tgrid-template-areas: 1/2/2/3;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tfont-size: 2rem;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tbackground-color: rgb(4, 65, 4);\n\tcolor: tan;\n\tfont-weight: 800;\n}\n\n#bottomleft {\n\tgrid-template-areas: 2/2/3/3;\n}\n\n#bottomright {\n\tgrid-template-areas: 2/1/3/2;\n\tdisplay: flex;\n\tflex-direction: Column;\n\twidth: 100%;\n}\n\n#leftright {\n\tdisplay: flex;\n\theight: 60%;\n\twidth: 100%;\n\tflex-direction: row;\n}\n\n#leftarrow {\n\tbackground-image: url(\"./images/left_arrow.png\");\n\tbackground-size: 100%;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 20%;\n\ttext-align: center;\n}\n#rightarrow {\n\tbackground-image: url(\"./images/right_arrow.png\");\n\tbackground-size: 100%;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 20%;\n\ttext-align: center;\n}\n\n#left:active {\n\tanimation: bounceleft 0.5s;\n}\n\n#right:active {\n\tanimation: bounceright 0.5s;\n}\n#carouselcontainer {\n\tposition: relative;\n\twidth: 70%;\n\tdisplay: flex;\n\tword-wrap: break-word;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tfont-size: 2rem;\n\tmargin: 10px;\n\tborder-radius: 20px;\n\ttext-align: center;\n\tcolor: tan;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-size: cover;\n\tperspective: 1200px;\n}\n\n.card {\n\theight: 100%;\n\twidth: 100%;\n\tposition: absolute;\n\ttransform-style: preserve-3d;\n\ttransition: transform 1000ms;\n}\n.flipped {\n\ttransform: rotateY(180deg);\n}\n.front {\n\tdisplay: flex;\n\tborder-radius: 20px;\n\ttext-align: center;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-size: cover;\n\tborder: 2px black groove;\n\tposition: absolute;\n\tcolor: black;\n\tfont-weight: 800;\n\theight: 100%;\n\twidth: 100%;\n\tbackface-visibility: hidden;\n\tbackground-image: url(\"./images/paper.webp\");\n}\n\n.back {\n\tbackground-image: url(\"./images/paper.webp\");\n\n\tdisplay: Flex;\n\tborder-radius: 20px;\n\ttext-align: center;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-size: cover;\n\tborder: 2px black groove;\n\tposition: absolute;\n\tfont-weight: 800;\n\theight: 100%;\n\twidth: 100%;\n\tbackface-visibility: hidden;\n\tcolor: black;\n\ttransform: rotateY(180deg);\n}\n#carouseldots {\n\theight: 1rem;\n\twidth: auto;\n\tgap: 10px;\n\tdisplay: flex;\n\tpadding: 8px;\n\tjustify-content: center;\n\talign-items: center;\n\tborder: 2px green solid;\n\ttext-align: Center;\n\tborder: groove black 10px;\n\tflex-wrap: wrap;\n}\n\n.circle {\n\theight: 1rem;\n\twidth: 1rem;\n\tborder-radius: 50%;\n\tbackground-color: gray;\n}\n.circle:hover {\n\ttransform: scale(1.2);\n}\n\n#menubutton {\n\theight: 40px;\n\tcolor: green;\n\tbackground-color: tan;\n\tfont-size: 1rem;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\twidth: 100%;\n}\n\n#dropdowncontainer {\n\tdisplay: none;\n}\n\n.switchcontainer {\n\tgap: 10px;\n\tmargin: 5px;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n}\n.switch {\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tfont-size: 1rem;\n\twidth: 90%;\n\tbackground-color: antiquewhite;\n\tborder-radius: 20px;\n\tcolor: rgb(116, 154, 116);\n\tfont-weight: 800;\n}\n.dropdownitem {\n\tborder: 2px solid black;\n\tpadding: 5px;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tbackground-color: rgb(221, 250, 215);\n}\n.dropdownitemvisible {\n\tborder: 2px solid black;\n\tpadding: 5px;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tbackground-color: rgb(221, 250, 215);\n}\n#switchcontainer1,\n#switchcontainer2,\n#switchcontainer3,\n#switchcontainer4,\n#switchcontainer5,\n#switchcontainer6,\n#switchcontainer7,\n#switchcontainer8 {\n\twidth: 50%;\n\tdisplay: none;\n}\n\n#visibleswitch1 #visibleswitch2,\n#visibleswitch3 #visibleswitch4,\n#visibleswitch5 #visibleswitch6,\n#visibleswitch7 #visibleswitch8 {\n\tanimation: fadeinfromtop 0.5s forwards;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-around;\n}\n#visible {\n\tanimation: fadeinfromtop 0.5s forwards;\n\twidth: 100%;\n\tdisplay: flex;\n\ttext-align: center;\n\tfont-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n\tfont-size: 1rem;\n\tflex-direction: column;\n\tbackground-color: beige;\n\tgap: 20px;\n\tborder: 2px solid black;\n\theight: 70%;\n}\n#dropdowncontainer:hover {\n\twidth: 100%;\n\tdisplay: flex;\n\ttext-align: center;\n\tfont-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n\tfont-size: 1rem;\n\tflex-direction: column;\n\tbackground-color: beige;\n\tgap: 20px;\n\tborder: 2px solid black;\n}\n\nul {\n\tlist-style: none;\n\tgap: 14px;\n\tdisplay: flex;\n\tflex-direction: row;\n\ttext-align: center;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tfont-size: 2rem;\n\tfont-weight: 700;\n\tcolor: black;\n\tmargin-top: 30px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/carousel.js":
/*!*********************************!*\
  !*** ./src/modules/carousel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moveCarousel: () => (/* binding */ moveCarousel)
/* harmony export */ });
function moveCarousel(unit, choice) {
	let carousel = document.getElementById("carouselcontainer");
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
	//makes card flip on f press down

	front.innerHTML = keys[counter];
	back.innerHTML = values[counter];
	//creates dots for carousel and adds them to the page
	for (let i = 0; i < keys.length; i++) {
		let dot = document.createElement("div");
		dot.setAttribute("class", "circle");
		dot.setAttribute("id", "dots" + i);
		//function to make dot click and showcase the corresponding card
		dot.addEventListener("click", () => {
			console.log("hello");
			counter = i;
			//need to update image
			front.innerHTML = keys[counter];
			back.innerHTML = values[counter];
			checkDots();
		});
		carouseldots.append(dot);
		checkDots();
	}

	//functions for left and right arrow, and changing counter

	//resets all dots to gray, then checks the counter number, and makes the dot with that counter ID red
	function checkDots() {
		for (let i = 0; i < keys.length; i++) {
			if (counter == i) {
				let dots = document.getElementsByClassName("circle");
				for (let i = 0; i < dots.length; i++) {
					dots[i].style.backgroundColor = "gray";
				}
				var thisdot = document.getElementById("dots" + i);
				thisdot.style.backgroundColor = "black";
			}
		}
	}
	return [counter, keys, values];
}

function leftArrowClick() {
	if (counter == 0) {
		counter = keys.length - 1;
	} else {
		counter = counter - 1;
	}
	front.innerHTML = keys[counter];
	back.innerHTML = values[counter];

	checkDots();
}

function rightArrowClick() {
	alert("Hello?");
	if (counter == keys.length - 1) {
		counter = 0;
	} else {
		counter = counter + 1;
	}
	front.innerHTML = keys[counter];
	back.innerHTML = values[counter];
	checkDots();
	return counter;
}
//left and right arrow functions


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
	Observation:
		"the act of noticing and describing processes in a careful, orderly way",
	inference: "a logical interpretation based on what scientists already know",
	hypothesis:
		"a scientific explanation for a set of observations that can be tested in ways that support, or reject it",
	"Controlled Experiement":
		"an experiment in which only one variable is changed.  All other variables should be controlled for, or kept constant ",
	"Independent Variable":
		" Also known as the experimental, or manipulated variable.  The variable that is deliberatey changed",
	"Dependent Variable":
		"Also known as the measured, or responding variable.  The variable that is observed and changes in response to the independent variable",
	"Control Group":
		"The group that does not receive any change.  Is used as a baseline of comparison",
	"Experimental Group":
		"The group(s) in which the Independent variable is changed for the purpose of observing differences.  There can be multiple experimental groups",
	"Peer Review":
		" A review process in which other experts in the field review work to determine any errors or flaws in an experiment",
	Theory: "A well-tested explanation backed by evidence",
	Bias: "a particular preference or point of view that is personal.  Sometimes these can be ingrained based on life experiences",
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
	Cell: "basic unit of life",
	"Cell theory":
		"All living things are made of cells, cells come from other cells",
	"Cell membrane (Plasma membrane)":
		"A thin flexible layer on the outside of cell made up of phospholipid bilayer(two layers of fats)",
	Nucleus:
		"large membrane enclosed structure that contains the genetic material(DNA) of eukaryotic cells.  Directs many cell activites, only found in Eukaryotic cells",
	"Eukaryotic Cell":
		"cells that have membrane bound organelles (structures enclosed in a protective layer that separate them from the rest of the cell)",
	"Prokaryotic Cell": 'a "simple" cell with no organelles',
	Cytoplasm: "the liquid inside of a cell",
	Organelles:
		'"little organs" inside of the cell that carry out specialized functions',
	Vacuoles:
		"organlle that is used for storage of water, proteins, carbohydrates, etc",
	Lysosomes:
		"organelles that are filled with enzymes to help break down materials, including other organlles",
	Cytoskeleton:
		"network of filaments that help give the cell structure (Includes microfilaments and microtubules)",
	Centrioles:
		"small structures located near the nucleus that help organize cell division",
	Ribosomes: "structures responsible for creating proteins out of amino acids",
	"Endpoplasmic Recticulum":
		"assembles lipids(fats), proteins, and other materials that are exported from the cell",
	"Golgi Apparatus":
		"Modifies, sorts and packages proteins and other materials from the endoplasmic reticulum for storage in the cell or release outside the cell",
	Mitochondria:
		"Site of cellular respiration where oxygen and sugar are converted into cellular energy in the form of ATP",
	Chloroplasts:
		"Capture the energy of sunlight and convert it along with Carbon Dioxide into sugar (glucose) and oxygen",
	"Cell wall":
		"Rigid structure found in some cells on the outside of the cell membrane that provides support and protection",
	"Selectively(Semi) Permeable":
		"A membrane(covering) that allows some substances to cross, but not others.  In the case of the cell membrane it is based on size",
};

let unit3_vocab = {
	"unit 3 word":
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
	"unit 4 word":
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
	"unit 5 word":
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
	"unit 6 word":
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
	"unit 7 word":
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
	"unit 8 word":
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
/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/carousel */ "./src/modules/carousel.js");
/* harmony import */ var _modules_units__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/units */ "./src/modules/units.js");











let currentcarousel = "";
let unit = "";
let src_keys = "";
let src_values = "";
//declare unit variables
const unit1 = _modules_units__WEBPACK_IMPORTED_MODULE_2__.unit1_vocab;
const unit2 = _modules_units__WEBPACK_IMPORTED_MODULE_2__.unit2_vocab;
const unit3 = _modules_units__WEBPACK_IMPORTED_MODULE_2__.unit3_vocab;
const unit4 = _modules_units__WEBPACK_IMPORTED_MODULE_2__.unit4_vocab;
const unit5 = _modules_units__WEBPACK_IMPORTED_MODULE_2__.unit5_vocab;
const unit6 = _modules_units__WEBPACK_IMPORTED_MODULE_2__.unit6_vocab;
const unit7 = _modules_units__WEBPACK_IMPORTED_MODULE_2__.unit7_vocab;
const unit8 = _modules_units__WEBPACK_IMPORTED_MODULE_2__.unit8_vocab;

//Global variables on main page
const leftbutton = document.getElementById("leftarrow");
const rightbutton = document.getElementById("rightarrow");

let src_counter = 0;
let carousel = document.getElementById("carouselcontainer");
let test = document.getElementById("dropdowncontainer");
let switch1 = document.getElementById("switchcontainer1");
let switch2 = document.getElementById("switchcontainer2");
let switch3 = document.getElementById("switchcontainer3");
let switch4 = document.getElementById("switchcontainer4");
let switch5 = document.getElementById("switchcontainer5");
let switch6 = document.getElementById("switchcontainer6");
let switch7 = document.getElementById("switchcontainer7");
let switch8 = document.getElementById("switchcontainer8");

// causes card to flip on a click
carousel.addEventListener("click", () => {
	let card = document.getElementsByClassName("card");
	for (let i = 0; i < card.length; i++) {
		card[i].classList.toggle("flipped");
	}
});

//lets card flip on f press
document.addEventListener("keydown", function (event) {
	if (event.key === "f") {
		let card = document.getElementsByClassName("card");
		for (let i = 0; i < card.length; i++) {
			card[i].style.cursor = "pointer";
			card[i].style.transform = "rotateY(180deg)";
		}
	}
});
//lets card flip back on f release
document.addEventListener("keyup", function (event) {
	if (event.key === "f") {
		let card = document.getElementsByClassName("card");
		for (let i = 0; i < card.length; i++) {
			card[i].style.cursor = "pointer";
			card[i].style.transform = "rotateY(0deg)";
		}
	}
});

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
let src_back = document.getElementById("back");

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
	test.setAttribute("id", "visible");
});
menu.addEventListener("mouseleave", () => {
	test.setAttribute("id", "dropdowncontainer");
});

//make swich for each unit visible----------------------------
item1.addEventListener("mouseover", () => {
	switch1.id = "visibleswitch1";
});
item2.addEventListener("mouseover", () => {
	switch2.id = "visibleswitch2";
});
item3.addEventListener("mouseover", () => {
	switch3.id = "visibleswitch3";
});
item4.addEventListener("mouseover", () => {
	switch4.id = "visibleswitch4";
});
item5.addEventListener("mouseover", () => {
	switch5.id = "visibleswitch5";
});
item6.addEventListener("mouseover", () => {
	switch6.id = "visibleswitch6";
});
item7.addEventListener("mouseover", () => {
	switch7.id = "visibleswitch7";
});
item8.addEventListener("mouseover", () => {
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
	alert("Hello");
	const [newcounter, newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit1_vocab, 0);
	(src_counter = newcounter), (src_keys = newkeys), (src_values = newvalues);
	topright.innerHTML = "Scientific Method";
});

definition1.addEventListener("click", () => {
	const [newcounter, newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit1_vocab, 1);
	(src_counter = newcounter), (src_keys = newkeys), (src_values = newvalues);
	topright.innerHTML = "Scientific Method";
});
word2.addEventListener("click", () => {
	console.log("Hello");
	const [newcounter, newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit2_vocab, 0);
	(src_counter = newcounter), (src_keys = newkeys), (src_values = newvalues);
	topright.innerHTML = "Life and Cells";
});
definition2.addEventListener("click", () => {
	const [newcounter, newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit2_vocab, 1);
	(src_counter = newcounter), (src_keys = newkeys), (src_values = newvalues);
	topright.innerHTML = "Life and Cells";
});
word3.addEventListener("click", () => {
	const [newcounter, newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit3_vocab, 0);
	(src_counter = newcounter), (src_keys = newkeys), (src_values = newvalues);
	topright.innerHTML = "Nutrition";
});
definition3.addEventListener("click", () => {
	const [newcounter, newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit3_vocab, 1);
	(src_counter = newcounter), (src_keys = newkeys), (src_values = newvalues);
	topright.innerHTML = "Nutrition";
});
word4.addEventListener("click", () => {
	const [newcounter, newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit4_vocab, 0);
	(src_counter = newcounter), (src_keys = newkeys), (src_values = newvalues);
	topright.innerHTML = "Homeostasis";
});
definition4.addEventListener("click", () => {
	const [newcounter, newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit4_vocab, 1);
	(src_counter = newcounter), (src_keys = newkeys), (src_values = newvalues);
	topright.innerHTML = "Homeostasis";
});
word5.addEventListener("click", () => {
	const [newcounter, newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit5_vocab, 0);
	(src_counter = newcounter), (src_keys = newkeys), (src_values = newvalues);
	topright.innerHTML = "Respiration/Photosynthesis";
});
definition5.addEventListener("click", () => {
	const [newcounter, newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit5_vocab, 1);
	(src_counter = newcounter), (src_keys = newkeys), (src_values = newvalues);
	topright.innerHTML = "Respiration/Photosynthesis";
});
word6.addEventListener("click", () => {
	const [newcounter, newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit6_vocab, 0);
	(src_counter = newcounter), (src_keys = newkeys), (src_values = newvalues);
	topright.innerHTML = "Genetics";
});
definition6.addEventListener("click", () => {
	const [newcounter, newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit6_vocab, 1);
	(src_counter = newcounter), (src_keys = newkeys), (src_values = newvalues);
	topright.innerHTML = "Genetics";
});
word7.addEventListener("click", () => {
	const [newcounter, newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit7_vocab, 0);
	(src_counter = newcounter), (src_keys = newkeys), (src_values = newvalues);
	topright.innerHTML = "Evolution";
});
definition7.addEventListener("click", () => {
	const [newcounter, newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit7_vocab, 1);
	(src_counter = newcounter), (src_keys = newkeys), (src_values = newvalues);
	topright.innerHTML = "Evolution";
});
word8.addEventListener("click", () => {
	const [newcounter, newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit8_vocab, 0);
	(src_counter = newcounter), (src_keys = newkeys), (src_values = newvalues);
	topright.innerHTML = "Ecology";
});
definition8.addEventListener("click", () => {
	const [newcounter, newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit8_vocab, 1);
	(src_counter = newcounter), (src_keys = newkeys), (src_values = newvalues);
	topright.innerHTML = "Ecology";
});

//adds the event listener for the left and right arrow
leftbutton.addEventListener("click", () => {
	testRun(src_counter, src_keys, src_values);
});

rightbutton.addEventListener("click", () => {
	rightRun(src_counter, src_keys, src_values);
});

document.addEventListener("keydown", function (event) {
	if (event.key === "ArrowLeft") testRun(src_counter, src_keys, src_values);
});
//=> {
//needs to take the output of the carousel container to then use
//if (counter == 0) {
//	counter = keys.length - 1;
//} else {
//	counter = counter - 1;
//}
//front.innerHTML = keys[counter];
//back.innerHTML = values[counter];
//checkDots();
//return counter;
//});

function testRun(thecounter, thekeys, thevalues) {
	if (thecounter == 0) {
		thecounter = thekeys.length - 1;
	} else {
		thecounter = thecounter - 1;
	}
	front.innerHTML = thekeys[thecounter];
	src_back.innerHTML = thevalues[thecounter];
	src_counter = thecounter;
	src_checkDots();
}

function rightRun(thecounter, thekeys, thevalues) {
	//needs to take the output of the carousel container to then use
	if (thecounter == src_keys.length - 1) {
		thecounter = 0;
	} else {
		thecounter = thecounter + 1;
	}
	front.innerHTML = thekeys[thecounter];
	src_back.innerHTML = thevalues[thecounter];
	src_counter = thecounter;

	src_checkDots();
}
//resets all dots to gray, then checks the counter number, and makes the dot with that counter ID red
function src_checkDots() {
	for (let i = 0; i < src_keys.length; i++) {
		if (src_counter == i) {
			let dots = document.getElementsByClassName("circle");
			for (let i = 0; i < dots.length; i++) {
				dots[i].style.backgroundColor = "gray";
			}
			var thisdot = document.getElementById("dots" + i);
			thisdot.style.backgroundColor = "black";
		}
	}
}

function leftPress(event) {
	if (event.keyCode === 37) {
		if (src_counter == 0) {
			src_counter = src_keys.length - 1;
		} else {
			src_counter = src_counter - 1;
		}
		front.innerHTML = src_keys[src_counter];
		src_back.innerHTML = src_values[src_counter];

		src_checkDots();
		return src_counter;
	}
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMkhBQTBDO0FBQ3RGLDRDQUE0Qyw2SEFBMkM7QUFDdkYsNENBQTRDLG1IQUFzQztBQUNsRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLG1DQUFtQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtQ0FBbUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsbUNBQW1DO0FBQzVEOztBQUVBO0FBQ0EseUJBQXlCLG1DQUFtQzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssU0FBUyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFNBQVMsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLFNBQVMsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLHNCQUFzQixNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLHNCQUFzQixNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxPQUFPLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxPQUFPLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxPQUFPLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLE9BQU8sV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sT0FBTyxNQUFNLEtBQUssS0FBSyxPQUFPLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxPQUFPLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLE9BQU8sYUFBYSxNQUFNLFlBQVksVUFBVSxVQUFVLE1BQU0sUUFBUSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxXQUFXLFlBQVksV0FBVyxZQUFZLHFEQUFxRCxVQUFVLHNCQUFzQixLQUFLLEdBQUcsd0dBQXdHLFVBQVUsc0JBQXNCLEtBQUssR0FBRywyQkFBMkIseUNBQXlDLCtCQUErQixLQUFLLFNBQVMsbUNBQW1DLEtBQUssU0FBUyxtQ0FBbUMsS0FBSyxHQUFHLHVCQUF1Qix5Q0FBeUMsK0JBQStCLEtBQUssU0FBUyxtQ0FBbUMsS0FBSyxTQUFTLG1DQUFtQyxLQUFLLEdBQUcsOEJBQThCLFFBQVEsaUJBQWlCLGlDQUFpQyxLQUFLLFVBQVUsaUJBQWlCLCtCQUErQixLQUFLLEdBQUcsMEJBQTBCLHlDQUF5QywrQkFBK0IsS0FBSyxTQUFTLGtDQUFrQyxLQUFLLFNBQVMsa0NBQWtDLEtBQUssR0FBRyw0QkFBNEIsUUFBUSxnQkFBZ0IsS0FBSyxZQUFZLG1CQUFtQiw0Q0FBNEMsR0FBRyx1QkFBdUIsUUFBUSxnQkFBZ0IsS0FBSyxZQUFZLHFCQUFxQiw0Q0FBNEMsR0FBRyxrQkFBa0IsOEJBQThCLEdBQUcsVUFBVSx5Q0FBeUMsR0FBRyxpQkFBaUIsaUJBQWlCLGdCQUFnQixnQkFBZ0Isa0JBQWtCLG1DQUFtQyxnQ0FBZ0MsR0FBRyxlQUFlLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGlDQUFpQyxvQkFBb0IsdUJBQXVCLDBCQUEwQiw0QkFBNEIsaUJBQWlCLHVIQUF1SCxxQkFBcUIsR0FBRyxjQUFjLDRCQUE0QixpQ0FBaUMsa0JBQWtCLDRCQUE0Qix3QkFBd0IsdUJBQXVCLG9CQUFvQix1SEFBdUgsb0NBQW9DLGVBQWUscUJBQXFCLEdBQUcsaUJBQWlCLGlDQUFpQyxHQUFHLGtCQUFrQixpQ0FBaUMsa0JBQWtCLDJCQUEyQixnQkFBZ0IsR0FBRyxnQkFBZ0Isa0JBQWtCLGdCQUFnQixnQkFBZ0Isd0JBQXdCLEdBQUcsZ0JBQWdCLHVEQUF1RCwwQkFBMEIsaUNBQWlDLGdDQUFnQyxrQkFBa0IsNEJBQTRCLHdCQUF3QixlQUFlLHVCQUF1QixHQUFHLGVBQWUsd0RBQXdELDBCQUEwQixpQ0FBaUMsZ0NBQWdDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGVBQWUsdUJBQXVCLEdBQUcsa0JBQWtCLCtCQUErQixHQUFHLG1CQUFtQixnQ0FBZ0MsR0FBRyxzQkFBc0IsdUJBQXVCLGVBQWUsa0JBQWtCLDBCQUEwQix1SEFBdUgsb0JBQW9CLGlCQUFpQix3QkFBd0IsdUJBQXVCLGVBQWUsNEJBQTRCLHdCQUF3Qix1QkFBdUIsMkJBQTJCLHdCQUF3QixHQUFHLFdBQVcsaUJBQWlCLGdCQUFnQix1QkFBdUIsaUNBQWlDLGlDQUFpQyxHQUFHLFlBQVksK0JBQStCLEdBQUcsVUFBVSxrQkFBa0Isd0JBQXdCLHVCQUF1Qiw0QkFBNEIsd0JBQXdCLHVCQUF1QiwyQkFBMkIsNkJBQTZCLHVCQUF1QixpQkFBaUIscUJBQXFCLGlCQUFpQixnQkFBZ0IsZ0NBQWdDLG1EQUFtRCxHQUFHLFdBQVcsbURBQW1ELG9CQUFvQix3QkFBd0IsdUJBQXVCLDRCQUE0Qix3QkFBd0IsdUJBQXVCLDJCQUEyQiw2QkFBNkIsdUJBQXVCLHFCQUFxQixpQkFBaUIsZ0JBQWdCLGdDQUFnQyxpQkFBaUIsK0JBQStCLEdBQUcsaUJBQWlCLGlCQUFpQixnQkFBZ0IsY0FBYyxrQkFBa0IsaUJBQWlCLDRCQUE0Qix3QkFBd0IsNEJBQTRCLHVCQUF1Qiw4QkFBOEIsb0JBQW9CLEdBQUcsYUFBYSxpQkFBaUIsZ0JBQWdCLHVCQUF1QiwyQkFBMkIsR0FBRyxpQkFBaUIsMEJBQTBCLEdBQUcsaUJBQWlCLGlCQUFpQixpQkFBaUIsMEJBQTBCLG9CQUFvQix1SEFBdUgsZ0JBQWdCLEdBQUcsd0JBQXdCLGtCQUFrQixHQUFHLHNCQUFzQixjQUFjLGdCQUFnQixrQkFBa0Isa0NBQWtDLHdCQUF3Qix1SEFBdUgsR0FBRyxXQUFXLHVIQUF1SCxvQkFBb0IsZUFBZSxtQ0FBbUMsd0JBQXdCLDhCQUE4QixxQkFBcUIsR0FBRyxpQkFBaUIsNEJBQTRCLGlCQUFpQix1SEFBdUgseUNBQXlDLEdBQUcsd0JBQXdCLDRCQUE0QixpQkFBaUIsdUhBQXVILHlDQUF5QyxHQUFHLGlLQUFpSyxlQUFlLGtCQUFrQixHQUFHLDJJQUEySSwyQ0FBMkMsa0JBQWtCLHdCQUF3QixrQ0FBa0MsR0FBRyxZQUFZLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLHVCQUF1Qix3RkFBd0Ysb0JBQW9CLDJCQUEyQiw0QkFBNEIsY0FBYyw0QkFBNEIsZ0JBQWdCLEdBQUcsNEJBQTRCLGdCQUFnQixrQkFBa0IsdUJBQXVCLHdGQUF3RixvQkFBb0IsMkJBQTJCLDRCQUE0QixjQUFjLDRCQUE0QixHQUFHLFFBQVEscUJBQXFCLGNBQWMsa0JBQWtCLHdCQUF3Qix1QkFBdUIsNEJBQTRCLHdCQUF3Qix1SEFBdUgsb0JBQW9CLHFCQUFxQixpQkFBaUIscUJBQXFCLEdBQUcscUJBQXFCO0FBQzl3VjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzdZMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUN4QmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4TkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFD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QTtBQUNBLE1BQU0sV0FBTztBQUNiLEdBQUcsV0FBTyxHQUFHLFFBQUk7QUFDakIsSUFBSTtBQUNKLEdBQUcsV0FBTyxHQUFHLFdBQU87QUFDcEI7QUFDQSxvQkFBb0IsUUFBSSxDQUFDLFdBQU87QUFDaEMsRUFBRSxRQUFJLGFBQWEsVUFBTSxDQUFDLFdBQU87O0FBRWpDLEVBQUUsYUFBUztBQUNYLFNBQVMsV0FBTztBQUNoQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL21vZHVsZXMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy91bml0cy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9sZWZ0X2Fycm93LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3JpZ2h0X2Fycm93LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3BhcGVyLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdGJvZHkge1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0fVxufVxuXG4vKiBTdHlsZXMgZm9yIGRldmljZXMgd2l0aCBhIG1heCB3aWR0aCBvZiA0ODBweCAoZS5nLiwgc21hbGwgcGhvbmVzKSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG5cdGJvZHkge1xuXHRcdGZvbnQtc2l6ZTogMTJweDtcblx0fVxufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZWxlZnQge1xuXHQwJSxcblx0MjAlLFxuXHQ1MCUsXG5cdDgwJSxcblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuXHR9XG5cdDQwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMHB4KTtcblx0fVxuXHQ2MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTVweCk7XG5cdH1cbn1cblxuQGtleWZyYW1lcyBib3VuY2Uge1xuXHQwJSxcblx0MjAlLFxuXHQ1MCUsXG5cdDgwJSxcblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuXHR9XG5cdDQwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcblx0fVxuXHQ2MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XG5cdH1cbn1cblxuQGtleWZyYW1lcyBmYWRlaW5mcm9tdG9wIHtcblx0MCUge1xuXHRcdG9wYWNpdHk6IDA7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG5cdH1cblx0MTAwJSB7XG5cdFx0b3BhY2l0eTogMTtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdH1cbn1cbkBrZXlmcmFtZXMgYm91bmNlcmlnaHQge1xuXHQwJSxcblx0MjAlLFxuXHQ1MCUsXG5cdDgwJSxcblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuXHR9XG5cdDQwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xuXHR9XG5cdDYwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpO1xuXHR9XG59XG5cbkBrZXlmcmFtZXMgb3BlbmZyb210b3Age1xuXHQwJSB7XG5cdFx0aGVpZ2h0OiAwO1xuXHR9XG5cblx0MTAwJSB7XG5cdFx0aGVpZ2h0OiA3MCU7IC8qIEFkanVzdCB0aGUgZmluYWwgaGVpZ2h0IGFzIG5lZWRlZCAqL1xuXHR9XG59XG5Aa2V5ZnJhbWVzIGl0ZW1vcGVuIHtcblx0MCUge1xuXHRcdGhlaWdodDogMDtcblx0fVxuXG5cdDEwMCUge1xuXHRcdGhlaWdodDogMTAwcHg7IC8qIEFkanVzdCB0aGUgZmluYWwgaGVpZ2h0IGFzIG5lZWRlZCAqL1xuXHR9XG59XG5cbmJ1dHRvbjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XG59XG5cbmJvZHkge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU2LCAxOTcsIDE3Nik7XG59XG5cbiNwYWdlbGF5b3V0IHtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luOiAwcHg7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgODAlO1xufVxuXG4jdG9wcmlnaHQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogMS8xLzIvMjtcblx0Zm9udC1zaXplOiAycmVtO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6IHRhbjtcblx0Ym9yZGVyOiA0cHggc29saWQgYmxhY2s7XG5cdGNvbG9yOiBncmVlbjtcblx0Zm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIixcblx0XHRcIkx1Y2lkYSBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXHRmb250LXdlaWdodDogNzAwO1xufVxuXG4jdG9wbGVmdCB7XG5cdGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xuXHRncmlkLXRlbXBsYXRlLWFyZWFzOiAxLzIvMi8zO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXNpemU6IDJyZW07XG5cdGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG5cdFx0XCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDQsIDY1LCA0KTtcblx0Y29sb3I6IHRhbjtcblx0Zm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuI2JvdHRvbWxlZnQge1xuXHRncmlkLXRlbXBsYXRlLWFyZWFzOiAyLzIvMy8zO1xufVxuXG4jYm90dG9tcmlnaHQge1xuXHRncmlkLXRlbXBsYXRlLWFyZWFzOiAyLzEvMy8yO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogQ29sdW1uO1xuXHR3aWR0aDogMTAwJTtcbn1cblxuI2xlZnRyaWdodCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGhlaWdodDogNjAlO1xuXHR3aWR0aDogMTAwJTtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuI2xlZnRhcnJvdyB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR3aWR0aDogMjAlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jcmlnaHRhcnJvdyB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR3aWR0aDogMjAlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNsZWZ0OmFjdGl2ZSB7XG5cdGFuaW1hdGlvbjogYm91bmNlbGVmdCAwLjVzO1xufVxuXG4jcmlnaHQ6YWN0aXZlIHtcblx0YW5pbWF0aW9uOiBib3VuY2VyaWdodCAwLjVzO1xufVxuI2Nhcm91c2VsY29udGFpbmVyIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR3aWR0aDogNzAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cdGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG5cdFx0XCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAycmVtO1xuXHRtYXJnaW46IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6IHRhbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0cGVyc3BlY3RpdmU6IDEyMDBweDtcbn1cblxuLmNhcmQge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAxMDAlO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDAwbXM7XG59XG4uZmxpcHBlZCB7XG5cdHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuLmZyb250IHtcblx0ZGlzcGxheTogZmxleDtcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRib3JkZXI6IDJweCBibGFjayBncm9vdmU7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Y29sb3I6IGJsYWNrO1xuXHRmb250LXdlaWdodDogODAwO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAxMDAlO1xuXHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuLmJhY2sge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG5cblx0ZGlzcGxheTogRmxleDtcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRib3JkZXI6IDJweCBibGFjayBncm9vdmU7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Zm9udC13ZWlnaHQ6IDgwMDtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuXHRjb2xvcjogYmxhY2s7XG5cdHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuI2Nhcm91c2VsZG90cyB7XG5cdGhlaWdodDogMXJlbTtcblx0d2lkdGg6IGF1dG87XG5cdGdhcDogMTBweDtcblx0ZGlzcGxheTogZmxleDtcblx0cGFkZGluZzogOHB4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Ym9yZGVyOiAycHggZ3JlZW4gc29saWQ7XG5cdHRleHQtYWxpZ246IENlbnRlcjtcblx0Ym9yZGVyOiBncm9vdmUgYmxhY2sgMTBweDtcblx0ZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY2lyY2xlIHtcblx0aGVpZ2h0OiAxcmVtO1xuXHR3aWR0aDogMXJlbTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuLmNpcmNsZTpob3ZlciB7XG5cdHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuI21lbnVidXR0b24ge1xuXHRoZWlnaHQ6IDQwcHg7XG5cdGNvbG9yOiBncmVlbjtcblx0YmFja2dyb3VuZC1jb2xvcjogdGFuO1xuXHRmb250LXNpemU6IDFyZW07XG5cdGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG5cdFx0XCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0d2lkdGg6IDEwMCU7XG59XG5cbiNkcm9wZG93bmNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zd2l0Y2hjb250YWluZXIge1xuXHRnYXA6IDEwcHg7XG5cdG1hcmdpbjogNXB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Zm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIixcblx0XHRcIkx1Y2lkYSBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuLnN3aXRjaCB7XG5cdGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG5cdFx0XCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHR3aWR0aDogOTAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdGNvbG9yOiByZ2IoMTE2LCAxNTQsIDExNik7XG5cdGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uZHJvcGRvd25pdGVtIHtcblx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XG5cdHBhZGRpbmc6IDVweDtcblx0Zm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIixcblx0XHRcIkx1Y2lkYSBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyNTAsIDIxNSk7XG59XG4uZHJvcGRvd25pdGVtdmlzaWJsZSB7XG5cdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuXHRwYWRkaW5nOiA1cHg7XG5cdGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG5cdFx0XCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjUwLCAyMTUpO1xufVxuI3N3aXRjaGNvbnRhaW5lcjEsXG4jc3dpdGNoY29udGFpbmVyMixcbiNzd2l0Y2hjb250YWluZXIzLFxuI3N3aXRjaGNvbnRhaW5lcjQsXG4jc3dpdGNoY29udGFpbmVyNSxcbiNzd2l0Y2hjb250YWluZXI2LFxuI3N3aXRjaGNvbnRhaW5lcjcsXG4jc3dpdGNoY29udGFpbmVyOCB7XG5cdHdpZHRoOiA1MCU7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbiN2aXNpYmxlc3dpdGNoMSAjdmlzaWJsZXN3aXRjaDIsXG4jdmlzaWJsZXN3aXRjaDMgI3Zpc2libGVzd2l0Y2g0LFxuI3Zpc2libGVzd2l0Y2g1ICN2aXNpYmxlc3dpdGNoNixcbiN2aXNpYmxlc3dpdGNoNyAjdmlzaWJsZXN3aXRjaDgge1xuXHRhbmltYXRpb246IGZhZGVpbmZyb210b3AgMC41cyBmb3J3YXJkcztcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4jdmlzaWJsZSB7XG5cdGFuaW1hdGlvbjogZmFkZWluZnJvbXRvcCAwLjVzIGZvcndhcmRzO1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LWZhbWlseTogXCJHaWxsIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgQ2FsaWJyaSwgXCJUcmVidWNoZXQgTVNcIiwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcblx0Z2FwOiAyMHB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcblx0aGVpZ2h0OiA3MCU7XG59XG4jZHJvcGRvd25jb250YWluZXI6aG92ZXIge1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LWZhbWlseTogXCJHaWxsIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgQ2FsaWJyaSwgXCJUcmVidWNoZXQgTVNcIiwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcblx0Z2FwOiAyMHB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cblxudWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xuXHRnYXA6IDE0cHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG5cdFx0XCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAycmVtO1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRjb2xvcjogYmxhY2s7XG5cdG1hcmdpbi10b3A6IDMwcHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQztFQUNDLGVBQWU7Q0FDaEI7QUFDRDs7QUFFQSxzRUFBc0U7QUFDdEU7Q0FDQztFQUNDLGVBQWU7Q0FDaEI7QUFDRDs7QUFFQTtDQUNDOzs7OztFQUtDLHdCQUF3QjtDQUN6QjtDQUNBO0VBQ0MsNEJBQTRCO0NBQzdCO0NBQ0E7RUFDQyw0QkFBNEI7Q0FDN0I7QUFDRDs7QUFFQTtDQUNDOzs7OztFQUtDLHdCQUF3QjtDQUN6QjtDQUNBO0VBQ0MsNEJBQTRCO0NBQzdCO0NBQ0E7RUFDQyw0QkFBNEI7Q0FDN0I7QUFDRDs7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LDZFQUE2RTtDQUM3RSxlQUFlO0NBQ2Ysc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixTQUFTO0NBQ1QsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFNBQVM7Q0FDVCxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CO2tDQUNpQztDQUNqQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixnQkFBZ0I7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuXFx0Ym9keSB7XFxuXFx0XFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdH1cXG59XFxuXFxuLyogU3R5bGVzIGZvciBkZXZpY2VzIHdpdGggYSBtYXggd2lkdGggb2YgNDgwcHggKGUuZy4sIHNtYWxsIHBob25lcykgKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXG5cXHRib2R5IHtcXG5cXHRcXHRmb250LXNpemU6IDEycHg7XFxuXFx0fVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZWxlZnQge1xcblxcdDAlLFxcblxcdDIwJSxcXG5cXHQ1MCUsXFxuXFx0ODAlLFxcblxcdDEwMCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG5cXHR9XFxuXFx0NDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwcHgpO1xcblxcdH1cXG5cXHQ2MCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTVweCk7XFxuXFx0fVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XFxuXFx0MCUsXFxuXFx0MjAlLFxcblxcdDUwJSxcXG5cXHQ4MCUsXFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcblxcdH1cXG5cXHQ0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XFxuXFx0fVxcblxcdDYwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcXG5cXHR9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZWluZnJvbXRvcCB7XFxuXFx0MCUge1xcblxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuXFx0fVxcblxcdDEwMCUge1xcblxcdFxcdG9wYWNpdHk6IDE7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcblxcdH1cXG59XFxuQGtleWZyYW1lcyBib3VuY2VyaWdodCB7XFxuXFx0MCUsXFxuXFx0MjAlLFxcblxcdDUwJSxcXG5cXHQ4MCUsXFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcblxcdH1cXG5cXHQ0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcXG5cXHR9XFxuXFx0NjAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XFxuXFx0fVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIG9wZW5mcm9tdG9wIHtcXG5cXHQwJSB7XFxuXFx0XFx0aGVpZ2h0OiAwO1xcblxcdH1cXG5cXG5cXHQxMDAlIHtcXG5cXHRcXHRoZWlnaHQ6IDcwJTsgLyogQWRqdXN0IHRoZSBmaW5hbCBoZWlnaHQgYXMgbmVlZGVkICovXFxuXFx0fVxcbn1cXG5Aa2V5ZnJhbWVzIGl0ZW1vcGVuIHtcXG5cXHQwJSB7XFxuXFx0XFx0aGVpZ2h0OiAwO1xcblxcdH1cXG5cXG5cXHQxMDAlIHtcXG5cXHRcXHRoZWlnaHQ6IDEwMHB4OyAvKiBBZGp1c3QgdGhlIGZpbmFsIGhlaWdodCBhcyBuZWVkZWQgKi9cXG5cXHR9XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcXG59XFxuXFxuYm9keSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NiwgMTk3LCAxNzYpO1xcbn1cXG5cXG4jcGFnZWxheW91dCB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbjogMHB4O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDgwJTtcXG59XFxuXFxuI3RvcHJpZ2h0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogMS8xLzIvMjtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRhbjtcXG5cXHRib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG5cXHRjb2xvcjogZ3JlZW47XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG5cXHRcXHRcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4jdG9wbGVmdCB7XFxuXFx0Ym9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogMS8yLzIvMztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcblxcdFxcdFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYig0LCA2NSwgNCk7XFxuXFx0Y29sb3I6IHRhbjtcXG5cXHRmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4jYm90dG9tbGVmdCB7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogMi8yLzMvMztcXG59XFxuXFxuI2JvdHRvbXJpZ2h0IHtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOiAyLzEvMy8yO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IENvbHVtbjtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuI2xlZnRyaWdodCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRoZWlnaHQ6IDYwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4jbGVmdGFycm93IHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL2xlZnRfYXJyb3cucG5nXFxcIik7XFxuXFx0YmFja2dyb3VuZC1zaXplOiAxMDAlO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR3aWR0aDogMjAlO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI3JpZ2h0YXJyb3cge1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvcmlnaHRfYXJyb3cucG5nXFxcIik7XFxuXFx0YmFja2dyb3VuZC1zaXplOiAxMDAlO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR3aWR0aDogMjAlO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2xlZnQ6YWN0aXZlIHtcXG5cXHRhbmltYXRpb246IGJvdW5jZWxlZnQgMC41cztcXG59XFxuXFxuI3JpZ2h0OmFjdGl2ZSB7XFxuXFx0YW5pbWF0aW9uOiBib3VuY2VyaWdodCAwLjVzO1xcbn1cXG4jY2Fyb3VzZWxjb250YWluZXIge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR3aWR0aDogNzAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0d29yZC13cmFwOiBicmVhay13b3JkO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsXFxuXFx0XFx0XFxcIkx1Y2lkYSBTYW5zXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdG1hcmdpbjogMTBweDtcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRjb2xvcjogdGFuO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0cGVyc3BlY3RpdmU6IDEyMDBweDtcXG59XFxuXFxuLmNhcmQge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwMG1zO1xcbn1cXG4uZmxpcHBlZCB7XFxuXFx0dHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxufVxcbi5mcm9udCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGJvcmRlcjogMnB4IGJsYWNrIGdyb292ZTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdGZvbnQtd2VpZ2h0OiA4MDA7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL3BhcGVyLndlYnBcXFwiKTtcXG59XFxuXFxuLmJhY2sge1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvcGFwZXIud2VicFxcXCIpO1xcblxcblxcdGRpc3BsYXk6IEZsZXg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRib3JkZXI6IDJweCBibGFjayBncm9vdmU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGZvbnQtd2VpZ2h0OiA4MDA7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0dHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxufVxcbiNjYXJvdXNlbGRvdHMge1xcblxcdGhlaWdodDogMXJlbTtcXG5cXHR3aWR0aDogYXV0bztcXG5cXHRnYXA6IDEwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwYWRkaW5nOiA4cHg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRib3JkZXI6IDJweCBncmVlbiBzb2xpZDtcXG5cXHR0ZXh0LWFsaWduOiBDZW50ZXI7XFxuXFx0Ym9yZGVyOiBncm9vdmUgYmxhY2sgMTBweDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5jaXJjbGUge1xcblxcdGhlaWdodDogMXJlbTtcXG5cXHR3aWR0aDogMXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuLmNpcmNsZTpob3ZlciB7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4jbWVudWJ1dHRvbiB7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdGNvbG9yOiBncmVlbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0YW47XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsXFxuXFx0XFx0XFxcIkx1Y2lkYSBTYW5zXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbiNkcm9wZG93bmNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnN3aXRjaGNvbnRhaW5lciB7XFxuXFx0Z2FwOiAxMHB4O1xcblxcdG1hcmdpbjogNXB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcblxcdFxcdFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG4uc3dpdGNoIHtcXG5cXHRmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcblxcdFxcdFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHR3aWR0aDogOTAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcblxcdGNvbG9yOiByZ2IoMTE2LCAxNTQsIDExNik7XFxuXFx0Zm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuLmRyb3Bkb3duaXRlbSB7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuXFx0cGFkZGluZzogNXB4O1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsXFxuXFx0XFx0XFxcIkx1Y2lkYSBTYW5zXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjUwLCAyMTUpO1xcbn1cXG4uZHJvcGRvd25pdGVtdmlzaWJsZSB7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuXFx0cGFkZGluZzogNXB4O1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsXFxuXFx0XFx0XFxcIkx1Y2lkYSBTYW5zXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjUwLCAyMTUpO1xcbn1cXG4jc3dpdGNoY29udGFpbmVyMSxcXG4jc3dpdGNoY29udGFpbmVyMixcXG4jc3dpdGNoY29udGFpbmVyMyxcXG4jc3dpdGNoY29udGFpbmVyNCxcXG4jc3dpdGNoY29udGFpbmVyNSxcXG4jc3dpdGNoY29udGFpbmVyNixcXG4jc3dpdGNoY29udGFpbmVyNyxcXG4jc3dpdGNoY29udGFpbmVyOCB7XFxuXFx0d2lkdGg6IDUwJTtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jdmlzaWJsZXN3aXRjaDEgI3Zpc2libGVzd2l0Y2gyLFxcbiN2aXNpYmxlc3dpdGNoMyAjdmlzaWJsZXN3aXRjaDQsXFxuI3Zpc2libGVzd2l0Y2g1ICN2aXNpYmxlc3dpdGNoNixcXG4jdmlzaWJsZXN3aXRjaDcgI3Zpc2libGVzd2l0Y2g4IHtcXG5cXHRhbmltYXRpb246IGZhZGVpbmZyb210b3AgMC41cyBmb3J3YXJkcztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbiN2aXNpYmxlIHtcXG5cXHRhbmltYXRpb246IGZhZGVpbmZyb210b3AgMC41cyBmb3J3YXJkcztcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LWZhbWlseTogXFxcIkdpbGwgU2Fuc1xcXCIsIFxcXCJHaWxsIFNhbnMgTVRcXFwiLCBDYWxpYnJpLCBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG5cXHRnYXA6IDIwcHg7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuXFx0aGVpZ2h0OiA3MCU7XFxufVxcbiNkcm9wZG93bmNvbnRhaW5lcjpob3ZlciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJHaWxsIFNhbnNcXFwiLCBcXFwiR2lsbCBTYW5zIE1UXFxcIiwgQ2FsaWJyaSwgXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxuXFx0Z2FwOiAyMHB4O1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG51bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRnYXA6IDE0cHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsXFxuXFx0XFx0XFxcIkx1Y2lkYSBTYW5zXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBtb3ZlQ2Fyb3VzZWwodW5pdCwgY2hvaWNlKSB7XG5cdGxldCBjYXJvdXNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2Fyb3VzZWxjb250YWluZXJcIik7XG5cdGxldCBmcm9udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJvbnRcIik7XG5cdGxldCBiYWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrXCIpO1xuXG5cdGNhcm91c2VsZG90cy5pbm5lckhUTUwgPSBcIlwiO1xuXHRsZXQgY291bnRlciA9IDA7XG5cdHZhciBrZXlzID0gT2JqZWN0LmtleXModW5pdCk7XG5cdHZhciB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKHVuaXQpO1xuXHRpZiAoY2hvaWNlID09IDEpIHtcblx0XHRsZXQgdGVtcCA9IGtleXM7XG5cdFx0a2V5cyA9IHZhbHVlcztcblx0XHR2YWx1ZXMgPSB0ZW1wO1xuXHR9XG5cdC8vbWFrZXMgY2FyZCBmbGlwIG9uIGYgcHJlc3MgZG93blxuXG5cdGZyb250LmlubmVySFRNTCA9IGtleXNbY291bnRlcl07XG5cdGJhY2suaW5uZXJIVE1MID0gdmFsdWVzW2NvdW50ZXJdO1xuXHQvL2NyZWF0ZXMgZG90cyBmb3IgY2Fyb3VzZWwgYW5kIGFkZHMgdGhlbSB0byB0aGUgcGFnZVxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRkb3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjaXJjbGVcIik7XG5cdFx0ZG90LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZG90c1wiICsgaSk7XG5cdFx0Ly9mdW5jdGlvbiB0byBtYWtlIGRvdCBjbGljayBhbmQgc2hvd2Nhc2UgdGhlIGNvcnJlc3BvbmRpbmcgY2FyZFxuXHRcdGRvdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coXCJoZWxsb1wiKTtcblx0XHRcdGNvdW50ZXIgPSBpO1xuXHRcdFx0Ly9uZWVkIHRvIHVwZGF0ZSBpbWFnZVxuXHRcdFx0ZnJvbnQuaW5uZXJIVE1MID0ga2V5c1tjb3VudGVyXTtcblx0XHRcdGJhY2suaW5uZXJIVE1MID0gdmFsdWVzW2NvdW50ZXJdO1xuXHRcdFx0Y2hlY2tEb3RzKCk7XG5cdFx0fSk7XG5cdFx0Y2Fyb3VzZWxkb3RzLmFwcGVuZChkb3QpO1xuXHRcdGNoZWNrRG90cygpO1xuXHR9XG5cblx0Ly9mdW5jdGlvbnMgZm9yIGxlZnQgYW5kIHJpZ2h0IGFycm93LCBhbmQgY2hhbmdpbmcgY291bnRlclxuXG5cdC8vcmVzZXRzIGFsbCBkb3RzIHRvIGdyYXksIHRoZW4gY2hlY2tzIHRoZSBjb3VudGVyIG51bWJlciwgYW5kIG1ha2VzIHRoZSBkb3Qgd2l0aCB0aGF0IGNvdW50ZXIgSUQgcmVkXG5cdGZ1bmN0aW9uIGNoZWNrRG90cygpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChjb3VudGVyID09IGkpIHtcblx0XHRcdFx0bGV0IGRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2lyY2xlXCIpO1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRvdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRkb3RzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JheVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciB0aGlzZG90ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb3RzXCIgKyBpKTtcblx0XHRcdFx0dGhpc2RvdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBbY291bnRlciwga2V5cywgdmFsdWVzXTtcbn1cblxuZnVuY3Rpb24gbGVmdEFycm93Q2xpY2soKSB7XG5cdGlmIChjb3VudGVyID09IDApIHtcblx0XHRjb3VudGVyID0ga2V5cy5sZW5ndGggLSAxO1xuXHR9IGVsc2Uge1xuXHRcdGNvdW50ZXIgPSBjb3VudGVyIC0gMTtcblx0fVxuXHRmcm9udC5pbm5lckhUTUwgPSBrZXlzW2NvdW50ZXJdO1xuXHRiYWNrLmlubmVySFRNTCA9IHZhbHVlc1tjb3VudGVyXTtcblxuXHRjaGVja0RvdHMoKTtcbn1cblxuZnVuY3Rpb24gcmlnaHRBcnJvd0NsaWNrKCkge1xuXHRhbGVydChcIkhlbGxvP1wiKTtcblx0aWYgKGNvdW50ZXIgPT0ga2V5cy5sZW5ndGggLSAxKSB7XG5cdFx0Y291bnRlciA9IDA7XG5cdH0gZWxzZSB7XG5cdFx0Y291bnRlciA9IGNvdW50ZXIgKyAxO1xuXHR9XG5cdGZyb250LmlubmVySFRNTCA9IGtleXNbY291bnRlcl07XG5cdGJhY2suaW5uZXJIVE1MID0gdmFsdWVzW2NvdW50ZXJdO1xuXHRjaGVja0RvdHMoKTtcblx0cmV0dXJuIGNvdW50ZXI7XG59XG4vL2xlZnQgYW5kIHJpZ2h0IGFycm93IGZ1bmN0aW9uc1xuIiwiZXhwb3J0IGxldCB1bml0MV92b2NhYiA9IHtcblx0T2JzZXJ2YXRpb246XG5cdFx0XCJ0aGUgYWN0IG9mIG5vdGljaW5nIGFuZCBkZXNjcmliaW5nIHByb2Nlc3NlcyBpbiBhIGNhcmVmdWwsIG9yZGVybHkgd2F5XCIsXG5cdGluZmVyZW5jZTogXCJhIGxvZ2ljYWwgaW50ZXJwcmV0YXRpb24gYmFzZWQgb24gd2hhdCBzY2llbnRpc3RzIGFscmVhZHkga25vd1wiLFxuXHRoeXBvdGhlc2lzOlxuXHRcdFwiYSBzY2llbnRpZmljIGV4cGxhbmF0aW9uIGZvciBhIHNldCBvZiBvYnNlcnZhdGlvbnMgdGhhdCBjYW4gYmUgdGVzdGVkIGluIHdheXMgdGhhdCBzdXBwb3J0LCBvciByZWplY3QgaXRcIixcblx0XCJDb250cm9sbGVkIEV4cGVyaWVtZW50XCI6XG5cdFx0XCJhbiBleHBlcmltZW50IGluIHdoaWNoIG9ubHkgb25lIHZhcmlhYmxlIGlzIGNoYW5nZWQuICBBbGwgb3RoZXIgdmFyaWFibGVzIHNob3VsZCBiZSBjb250cm9sbGVkIGZvciwgb3Iga2VwdCBjb25zdGFudCBcIixcblx0XCJJbmRlcGVuZGVudCBWYXJpYWJsZVwiOlxuXHRcdFwiIEFsc28ga25vd24gYXMgdGhlIGV4cGVyaW1lbnRhbCwgb3IgbWFuaXB1bGF0ZWQgdmFyaWFibGUuICBUaGUgdmFyaWFibGUgdGhhdCBpcyBkZWxpYmVyYXRleSBjaGFuZ2VkXCIsXG5cdFwiRGVwZW5kZW50IFZhcmlhYmxlXCI6XG5cdFx0XCJBbHNvIGtub3duIGFzIHRoZSBtZWFzdXJlZCwgb3IgcmVzcG9uZGluZyB2YXJpYWJsZS4gIFRoZSB2YXJpYWJsZSB0aGF0IGlzIG9ic2VydmVkIGFuZCBjaGFuZ2VzIGluIHJlc3BvbnNlIHRvIHRoZSBpbmRlcGVuZGVudCB2YXJpYWJsZVwiLFxuXHRcIkNvbnRyb2wgR3JvdXBcIjpcblx0XHRcIlRoZSBncm91cCB0aGF0IGRvZXMgbm90IHJlY2VpdmUgYW55IGNoYW5nZS4gIElzIHVzZWQgYXMgYSBiYXNlbGluZSBvZiBjb21wYXJpc29uXCIsXG5cdFwiRXhwZXJpbWVudGFsIEdyb3VwXCI6XG5cdFx0XCJUaGUgZ3JvdXAocykgaW4gd2hpY2ggdGhlIEluZGVwZW5kZW50IHZhcmlhYmxlIGlzIGNoYW5nZWQgZm9yIHRoZSBwdXJwb3NlIG9mIG9ic2VydmluZyBkaWZmZXJlbmNlcy4gIFRoZXJlIGNhbiBiZSBtdWx0aXBsZSBleHBlcmltZW50YWwgZ3JvdXBzXCIsXG5cdFwiUGVlciBSZXZpZXdcIjpcblx0XHRcIiBBIHJldmlldyBwcm9jZXNzIGluIHdoaWNoIG90aGVyIGV4cGVydHMgaW4gdGhlIGZpZWxkIHJldmlldyB3b3JrIHRvIGRldGVybWluZSBhbnkgZXJyb3JzIG9yIGZsYXdzIGluIGFuIGV4cGVyaW1lbnRcIixcblx0VGhlb3J5OiBcIkEgd2VsbC10ZXN0ZWQgZXhwbGFuYXRpb24gYmFja2VkIGJ5IGV2aWRlbmNlXCIsXG5cdEJpYXM6IFwiYSBwYXJ0aWN1bGFyIHByZWZlcmVuY2Ugb3IgcG9pbnQgb2YgdmlldyB0aGF0IGlzIHBlcnNvbmFsLiAgU29tZXRpbWVzIHRoZXNlIGNhbiBiZSBpbmdyYWluZWQgYmFzZWQgb24gbGlmZSBleHBlcmllbmNlc1wiLFxuXHRcIndvcmQgMTJcIjogXCJEZWZpbml0aW9uIDEyXCIsXG5cdFwid29yZCAxM1wiOiBcIkRlZmludGlvbiAxM1wiLFxuXHRcIndvcmQgMTRcIjogXCJkZWZpbml0aW9uIDE0XCIsXG5cdFwid29yZCAxNVwiOiBcImRlZmluaXRpb24gMTVcIixcblx0XCJ3b3JkIDE2XCI6IFwiRGVmaW5pdGlvbiAxNlwiLFxuXHRcIndvcmQgMTdcIjogXCJEZWZpbnRpb24gMTdcIixcblx0XCJ3b3JkIDE4XCI6IFwiZGVmaW5pdGlvbiAxOFwiLFxuXHRcIndvcmQgMTlcIjogXCJkZWZpbml0aW9uIDE5XCIsXG5cdFwid29yZCAyMFwiOiBcIkRlZmluaXRpb24gMjBcIixcbn07XG5cbmV4cG9ydCBsZXQgdW5pdDJfdm9jYWIgPSB7XG5cdENlbGw6IFwiYmFzaWMgdW5pdCBvZiBsaWZlXCIsXG5cdFwiQ2VsbCB0aGVvcnlcIjpcblx0XHRcIkFsbCBsaXZpbmcgdGhpbmdzIGFyZSBtYWRlIG9mIGNlbGxzLCBjZWxscyBjb21lIGZyb20gb3RoZXIgY2VsbHNcIixcblx0XCJDZWxsIG1lbWJyYW5lIChQbGFzbWEgbWVtYnJhbmUpXCI6XG5cdFx0XCJBIHRoaW4gZmxleGlibGUgbGF5ZXIgb24gdGhlIG91dHNpZGUgb2YgY2VsbCBtYWRlIHVwIG9mIHBob3NwaG9saXBpZCBiaWxheWVyKHR3byBsYXllcnMgb2YgZmF0cylcIixcblx0TnVjbGV1czpcblx0XHRcImxhcmdlIG1lbWJyYW5lIGVuY2xvc2VkIHN0cnVjdHVyZSB0aGF0IGNvbnRhaW5zIHRoZSBnZW5ldGljIG1hdGVyaWFsKEROQSkgb2YgZXVrYXJ5b3RpYyBjZWxscy4gIERpcmVjdHMgbWFueSBjZWxsIGFjdGl2aXRlcywgb25seSBmb3VuZCBpbiBFdWthcnlvdGljIGNlbGxzXCIsXG5cdFwiRXVrYXJ5b3RpYyBDZWxsXCI6XG5cdFx0XCJjZWxscyB0aGF0IGhhdmUgbWVtYnJhbmUgYm91bmQgb3JnYW5lbGxlcyAoc3RydWN0dXJlcyBlbmNsb3NlZCBpbiBhIHByb3RlY3RpdmUgbGF5ZXIgdGhhdCBzZXBhcmF0ZSB0aGVtIGZyb20gdGhlIHJlc3Qgb2YgdGhlIGNlbGwpXCIsXG5cdFwiUHJva2FyeW90aWMgQ2VsbFwiOiAnYSBcInNpbXBsZVwiIGNlbGwgd2l0aCBubyBvcmdhbmVsbGVzJyxcblx0Q3l0b3BsYXNtOiBcInRoZSBsaXF1aWQgaW5zaWRlIG9mIGEgY2VsbFwiLFxuXHRPcmdhbmVsbGVzOlxuXHRcdCdcImxpdHRsZSBvcmdhbnNcIiBpbnNpZGUgb2YgdGhlIGNlbGwgdGhhdCBjYXJyeSBvdXQgc3BlY2lhbGl6ZWQgZnVuY3Rpb25zJyxcblx0VmFjdW9sZXM6XG5cdFx0XCJvcmdhbmxsZSB0aGF0IGlzIHVzZWQgZm9yIHN0b3JhZ2Ugb2Ygd2F0ZXIsIHByb3RlaW5zLCBjYXJib2h5ZHJhdGVzLCBldGNcIixcblx0THlzb3NvbWVzOlxuXHRcdFwib3JnYW5lbGxlcyB0aGF0IGFyZSBmaWxsZWQgd2l0aCBlbnp5bWVzIHRvIGhlbHAgYnJlYWsgZG93biBtYXRlcmlhbHMsIGluY2x1ZGluZyBvdGhlciBvcmdhbmxsZXNcIixcblx0Q3l0b3NrZWxldG9uOlxuXHRcdFwibmV0d29yayBvZiBmaWxhbWVudHMgdGhhdCBoZWxwIGdpdmUgdGhlIGNlbGwgc3RydWN0dXJlIChJbmNsdWRlcyBtaWNyb2ZpbGFtZW50cyBhbmQgbWljcm90dWJ1bGVzKVwiLFxuXHRDZW50cmlvbGVzOlxuXHRcdFwic21hbGwgc3RydWN0dXJlcyBsb2NhdGVkIG5lYXIgdGhlIG51Y2xldXMgdGhhdCBoZWxwIG9yZ2FuaXplIGNlbGwgZGl2aXNpb25cIixcblx0Umlib3NvbWVzOiBcInN0cnVjdHVyZXMgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHByb3RlaW5zIG91dCBvZiBhbWlubyBhY2lkc1wiLFxuXHRcIkVuZHBvcGxhc21pYyBSZWN0aWN1bHVtXCI6XG5cdFx0XCJhc3NlbWJsZXMgbGlwaWRzKGZhdHMpLCBwcm90ZWlucywgYW5kIG90aGVyIG1hdGVyaWFscyB0aGF0IGFyZSBleHBvcnRlZCBmcm9tIHRoZSBjZWxsXCIsXG5cdFwiR29sZ2kgQXBwYXJhdHVzXCI6XG5cdFx0XCJNb2RpZmllcywgc29ydHMgYW5kIHBhY2thZ2VzIHByb3RlaW5zIGFuZCBvdGhlciBtYXRlcmlhbHMgZnJvbSB0aGUgZW5kb3BsYXNtaWMgcmV0aWN1bHVtIGZvciBzdG9yYWdlIGluIHRoZSBjZWxsIG9yIHJlbGVhc2Ugb3V0c2lkZSB0aGUgY2VsbFwiLFxuXHRNaXRvY2hvbmRyaWE6XG5cdFx0XCJTaXRlIG9mIGNlbGx1bGFyIHJlc3BpcmF0aW9uIHdoZXJlIG94eWdlbiBhbmQgc3VnYXIgYXJlIGNvbnZlcnRlZCBpbnRvIGNlbGx1bGFyIGVuZXJneSBpbiB0aGUgZm9ybSBvZiBBVFBcIixcblx0Q2hsb3JvcGxhc3RzOlxuXHRcdFwiQ2FwdHVyZSB0aGUgZW5lcmd5IG9mIHN1bmxpZ2h0IGFuZCBjb252ZXJ0IGl0IGFsb25nIHdpdGggQ2FyYm9uIERpb3hpZGUgaW50byBzdWdhciAoZ2x1Y29zZSkgYW5kIG94eWdlblwiLFxuXHRcIkNlbGwgd2FsbFwiOlxuXHRcdFwiUmlnaWQgc3RydWN0dXJlIGZvdW5kIGluIHNvbWUgY2VsbHMgb24gdGhlIG91dHNpZGUgb2YgdGhlIGNlbGwgbWVtYnJhbmUgdGhhdCBwcm92aWRlcyBzdXBwb3J0IGFuZCBwcm90ZWN0aW9uXCIsXG5cdFwiU2VsZWN0aXZlbHkoU2VtaSkgUGVybWVhYmxlXCI6XG5cdFx0XCJBIG1lbWJyYW5lKGNvdmVyaW5nKSB0aGF0IGFsbG93cyBzb21lIHN1YnN0YW5jZXMgdG8gY3Jvc3MsIGJ1dCBub3Qgb3RoZXJzLiAgSW4gdGhlIGNhc2Ugb2YgdGhlIGNlbGwgbWVtYnJhbmUgaXQgaXMgYmFzZWQgb24gc2l6ZVwiLFxufTtcblxuZXhwb3J0IGxldCB1bml0M192b2NhYiA9IHtcblx0XCJ1bml0IDMgd29yZFwiOlxuXHRcdFwiRGVmaW5pdGlvbiAxIHRoaXMgaXMgYSB0ZXN0IHRvIHNlZSBob3cgbWFraW5nIHRoZSBkZWZpbml0aW9uIGJpZ2dlciBhZmZlY3RzIHRoZSBkaXYgc2l6ZVwiLFxuXHRcIndvcmQgMlwiOiBcIkRFRklOSVRJT04gMlwiLFxuXHRcIndvcmQgM1wiOiBcIkRFRklOSVRJT04gM1wiLFxuXHRcIndvcmQgNFwiOiBcIkRFRklOSVRJT04gNFwiLFxuXHRcIndvcmQgNVwiOiBcIkRlZmluaXRpb24gNVwiLFxuXHRcIldvcmQgNlwiOiBcImRlZmluaXRpb24gNlwiLFxuXHRcIndvcmQgN1wiOiBcImRlZmluaXRpb24gN1wiLFxuXHRcIndvcmQgOFwiOiBcImRlZmludGlvbiA4XCIsXG5cdFwid29yZCA5XCI6IFwiZGVmaW5pdGlvbiA5XCIsXG5cdFwid29yZCAxMFwiOiBcImRlZmluaXRpb24gMTBcIixcblx0XCJ3b3JkIDExXCI6IFwiZGVmaW5pdGlvbiAxMVwiLFxuXHRcIndvcmQgMTJcIjogXCJEZWZpbml0aW9uIDEyXCIsXG5cdFwid29yZCAxM1wiOiBcIkRlZmludGlvbiAxM1wiLFxuXHRcIndvcmQgMTRcIjogXCJkZWZpbml0aW9uIDE0XCIsXG5cdFwid29yZCAxNVwiOiBcImRlZmluaXRpb24gMTVcIixcblx0XCJ3b3JkIDE2XCI6IFwiRGVmaW5pdGlvbiAxNlwiLFxuXHRcIndvcmQgMTdcIjogXCJEZWZpbnRpb24gMTdcIixcblx0XCJ3b3JkIDE4XCI6IFwiZGVmaW5pdGlvbiAxOFwiLFxuXHRcIndvcmQgMTlcIjogXCJkZWZpbml0aW9uIDE5XCIsXG5cdFwid29yZCAyMFwiOiBcIkRlZmluaXRpb24gMjBcIixcbn07XG5cbmV4cG9ydCBsZXQgdW5pdDRfdm9jYWIgPSB7XG5cdFwidW5pdCA0IHdvcmRcIjpcblx0XHRcIkRlZmluaXRpb24gMSB0aGlzIGlzIGEgdGVzdCB0byBzZWUgaG93IG1ha2luZyB0aGUgZGVmaW5pdGlvbiBiaWdnZXIgYWZmZWN0cyB0aGUgZGl2IHNpemVcIixcblx0XCJ3b3JkIDJcIjogXCJERUZJTklUSU9OIDJcIixcblx0XCJ3b3JkIDNcIjogXCJERUZJTklUSU9OIDNcIixcblx0XCJ3b3JkIDRcIjogXCJERUZJTklUSU9OIDRcIixcblx0XCJ3b3JkIDVcIjogXCJEZWZpbml0aW9uIDVcIixcblx0XCJXb3JkIDZcIjogXCJkZWZpbml0aW9uIDZcIixcblx0XCJ3b3JkIDdcIjogXCJkZWZpbml0aW9uIDdcIixcblx0XCJ3b3JkIDhcIjogXCJkZWZpbnRpb24gOFwiLFxuXHRcIndvcmQgOVwiOiBcImRlZmluaXRpb24gOVwiLFxuXHRcIndvcmQgMTBcIjogXCJkZWZpbml0aW9uIDEwXCIsXG5cdFwid29yZCAxMVwiOiBcImRlZmluaXRpb24gMTFcIixcblx0XCJ3b3JkIDEyXCI6IFwiRGVmaW5pdGlvbiAxMlwiLFxuXHRcIndvcmQgMTNcIjogXCJEZWZpbnRpb24gMTNcIixcblx0XCJ3b3JkIDE0XCI6IFwiZGVmaW5pdGlvbiAxNFwiLFxuXHRcIndvcmQgMTVcIjogXCJkZWZpbml0aW9uIDE1XCIsXG5cdFwid29yZCAxNlwiOiBcIkRlZmluaXRpb24gMTZcIixcblx0XCJ3b3JkIDE3XCI6IFwiRGVmaW50aW9uIDE3XCIsXG5cdFwid29yZCAxOFwiOiBcImRlZmluaXRpb24gMThcIixcblx0XCJ3b3JkIDE5XCI6IFwiZGVmaW5pdGlvbiAxOVwiLFxuXHRcIndvcmQgMjBcIjogXCJEZWZpbml0aW9uIDIwXCIsXG59O1xuXG5leHBvcnQgbGV0IHVuaXQ1X3ZvY2FiID0ge1xuXHRcInVuaXQgNSB3b3JkXCI6XG5cdFx0XCJEZWZpbml0aW9uIDEgdGhpcyBpcyBhIHRlc3QgdG8gc2VlIGhvdyBtYWtpbmcgdGhlIGRlZmluaXRpb24gYmlnZ2VyIGFmZmVjdHMgdGhlIGRpdiBzaXplXCIsXG5cdFwid29yZCAyXCI6IFwiREVGSU5JVElPTiAyXCIsXG5cdFwid29yZCAzXCI6IFwiREVGSU5JVElPTiAzXCIsXG5cdFwid29yZCA0XCI6IFwiREVGSU5JVElPTiA0XCIsXG5cdFwid29yZCA1XCI6IFwiRGVmaW5pdGlvbiA1XCIsXG5cdFwiV29yZCA2XCI6IFwiZGVmaW5pdGlvbiA2XCIsXG5cdFwid29yZCA3XCI6IFwiZGVmaW5pdGlvbiA3XCIsXG5cdFwid29yZCA4XCI6IFwiZGVmaW50aW9uIDhcIixcblx0XCJ3b3JkIDlcIjogXCJkZWZpbml0aW9uIDlcIixcblx0XCJ3b3JkIDEwXCI6IFwiZGVmaW5pdGlvbiAxMFwiLFxuXHRcIndvcmQgMTFcIjogXCJkZWZpbml0aW9uIDExXCIsXG5cdFwid29yZCAxMlwiOiBcIkRlZmluaXRpb24gMTJcIixcblx0XCJ3b3JkIDEzXCI6IFwiRGVmaW50aW9uIDEzXCIsXG5cdFwid29yZCAxNFwiOiBcImRlZmluaXRpb24gMTRcIixcblx0XCJ3b3JkIDE1XCI6IFwiZGVmaW5pdGlvbiAxNVwiLFxuXHRcIndvcmQgMTZcIjogXCJEZWZpbml0aW9uIDE2XCIsXG5cdFwid29yZCAxN1wiOiBcIkRlZmludGlvbiAxN1wiLFxuXHRcIndvcmQgMThcIjogXCJkZWZpbml0aW9uIDE4XCIsXG5cdFwid29yZCAxOVwiOiBcImRlZmluaXRpb24gMTlcIixcblx0XCJ3b3JkIDIwXCI6IFwiRGVmaW5pdGlvbiAyMFwiLFxufTtcblxuZXhwb3J0IGxldCB1bml0Nl92b2NhYiA9IHtcblx0XCJ1bml0IDYgd29yZFwiOlxuXHRcdFwiRGVmaW5pdGlvbiAxIHRoaXMgaXMgYSB0ZXN0IHRvIHNlZSBob3cgbWFraW5nIHRoZSBkZWZpbml0aW9uIGJpZ2dlciBhZmZlY3RzIHRoZSBkaXYgc2l6ZVwiLFxuXHRcIndvcmQgMlwiOiBcIkRFRklOSVRJT04gMlwiLFxuXHRcIndvcmQgM1wiOiBcIkRFRklOSVRJT04gM1wiLFxuXHRcIndvcmQgNFwiOiBcIkRFRklOSVRJT04gNFwiLFxuXHRcIndvcmQgNVwiOiBcIkRlZmluaXRpb24gNVwiLFxuXHRcIldvcmQgNlwiOiBcImRlZmluaXRpb24gNlwiLFxuXHRcIndvcmQgN1wiOiBcImRlZmluaXRpb24gN1wiLFxuXHRcIndvcmQgOFwiOiBcImRlZmludGlvbiA4XCIsXG5cdFwid29yZCA5XCI6IFwiZGVmaW5pdGlvbiA5XCIsXG5cdFwid29yZCAxMFwiOiBcImRlZmluaXRpb24gMTBcIixcblx0XCJ3b3JkIDExXCI6IFwiZGVmaW5pdGlvbiAxMVwiLFxuXHRcIndvcmQgMTJcIjogXCJEZWZpbml0aW9uIDEyXCIsXG5cdFwid29yZCAxM1wiOiBcIkRlZmludGlvbiAxM1wiLFxuXHRcIndvcmQgMTRcIjogXCJkZWZpbml0aW9uIDE0XCIsXG5cdFwid29yZCAxNVwiOiBcImRlZmluaXRpb24gMTVcIixcblx0XCJ3b3JkIDE2XCI6IFwiRGVmaW5pdGlvbiAxNlwiLFxuXHRcIndvcmQgMTdcIjogXCJEZWZpbnRpb24gMTdcIixcblx0XCJ3b3JkIDE4XCI6IFwiZGVmaW5pdGlvbiAxOFwiLFxuXHRcIndvcmQgMTlcIjogXCJkZWZpbml0aW9uIDE5XCIsXG5cdFwid29yZCAyMFwiOiBcIkRlZmluaXRpb24gMjBcIixcbn07XG5cbmV4cG9ydCBsZXQgdW5pdDdfdm9jYWIgPSB7XG5cdFwidW5pdCA3IHdvcmRcIjpcblx0XHRcIkRlZmluaXRpb24gMSB0aGlzIGlzIGEgdGVzdCB0byBzZWUgaG93IG1ha2luZyB0aGUgZGVmaW5pdGlvbiBiaWdnZXIgYWZmZWN0cyB0aGUgZGl2IHNpemVcIixcblx0XCJ3b3JkIDJcIjogXCJERUZJTklUSU9OIDJcIixcblx0XCJ3b3JkIDNcIjogXCJERUZJTklUSU9OIDNcIixcblx0XCJ3b3JkIDRcIjogXCJERUZJTklUSU9OIDRcIixcblx0XCJ3b3JkIDVcIjogXCJEZWZpbml0aW9uIDVcIixcblx0XCJXb3JkIDZcIjogXCJkZWZpbml0aW9uIDZcIixcblx0XCJ3b3JkIDdcIjogXCJkZWZpbml0aW9uIDdcIixcblx0XCJ3b3JkIDhcIjogXCJkZWZpbnRpb24gOFwiLFxuXHRcIndvcmQgOVwiOiBcImRlZmluaXRpb24gOVwiLFxuXHRcIndvcmQgMTBcIjogXCJkZWZpbml0aW9uIDEwXCIsXG5cdFwid29yZCAxMVwiOiBcImRlZmluaXRpb24gMTFcIixcblx0XCJ3b3JkIDEyXCI6IFwiRGVmaW5pdGlvbiAxMlwiLFxuXHRcIndvcmQgMTNcIjogXCJEZWZpbnRpb24gMTNcIixcblx0XCJ3b3JkIDE0XCI6IFwiZGVmaW5pdGlvbiAxNFwiLFxuXHRcIndvcmQgMTVcIjogXCJkZWZpbml0aW9uIDE1XCIsXG5cdFwid29yZCAxNlwiOiBcIkRlZmluaXRpb24gMTZcIixcblx0XCJ3b3JkIDE3XCI6IFwiRGVmaW50aW9uIDE3XCIsXG5cdFwid29yZCAxOFwiOiBcImRlZmluaXRpb24gMThcIixcblx0XCJ3b3JkIDE5XCI6IFwiZGVmaW5pdGlvbiAxOVwiLFxuXHRcIndvcmQgMjBcIjogXCJEZWZpbml0aW9uIDIwXCIsXG59O1xuXG5leHBvcnQgbGV0IHVuaXQ4X3ZvY2FiID0ge1xuXHRcInVuaXQgOCB3b3JkXCI6XG5cdFx0XCJEZWZpbml0aW9uIDEgdGhpcyBpcyBhIHRlc3QgdG8gc2VlIGhvdyBtYWtpbmcgdGhlIGRlZmluaXRpb24gYmlnZ2VyIGFmZmVjdHMgdGhlIGRpdiBzaXplXCIsXG5cdFwid29yZCAyXCI6IFwiREVGSU5JVElPTiAyXCIsXG5cdFwid29yZCAzXCI6IFwiREVGSU5JVElPTiAzXCIsXG5cdFwid29yZCA0XCI6IFwiREVGSU5JVElPTiA0XCIsXG5cdFwid29yZCA1XCI6IFwiRGVmaW5pdGlvbiA1XCIsXG5cdFwiV29yZCA2XCI6IFwiZGVmaW5pdGlvbiA2XCIsXG5cdFwid29yZCA3XCI6IFwiZGVmaW5pdGlvbiA3XCIsXG5cdFwid29yZCA4XCI6IFwiZGVmaW50aW9uIDhcIixcblx0XCJ3b3JkIDlcIjogXCJkZWZpbml0aW9uIDlcIixcblx0XCJ3b3JkIDEwXCI6IFwiZGVmaW5pdGlvbiAxMFwiLFxuXHRcIndvcmQgMTFcIjogXCJkZWZpbml0aW9uIDExXCIsXG5cdFwid29yZCAxMlwiOiBcIkRlZmluaXRpb24gMTJcIixcblx0XCJ3b3JkIDEzXCI6IFwiRGVmaW50aW9uIDEzXCIsXG5cdFwid29yZCAxNFwiOiBcImRlZmluaXRpb24gMTRcIixcblx0XCJ3b3JkIDE1XCI6IFwiZGVmaW5pdGlvbiAxNVwiLFxuXHRcIndvcmQgMTZcIjogXCJEZWZpbml0aW9uIDE2XCIsXG5cdFwid29yZCAxN1wiOiBcIkRlZmludGlvbiAxN1wiLFxuXHRcIndvcmQgMThcIjogXCJkZWZpbml0aW9uIDE4XCIsXG5cdFwid29yZCAxOVwiOiBcImRlZmluaXRpb24gMTlcIixcblx0XCJ3b3JkIDIwXCI6IFwiRGVmaW5pdGlvbiAyMFwiLFxuXHRcIndvcmQgMjFcIjogXCJkZWZpbml0aW9uIDIxXCIsXG5cdFwid29yZCAyMlwiOiBcImRlZmluaXRpb24gMjJcIixcblx0XCJ3b3JkIDIzXCI6IFwiRGVmaW5pdGlvbiAyM1wiLFxuXHRcIndvcmQgMjRcIjogXCJkZWZpbml0aW9uIDI0XCIsXG5cdFwid29yZCAyNVwiOiBcImRlZmluaXRpb24gMjVcIixcblx0XCJ3b3JkIDI2XCI6IFwiRGVmaW5pdGlvbiAyNlwiLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgbGVmdEFycm93IH0gZnJvbSBcIi4vbW9kdWxlcy9jYXJvdXNlbFwiO1xuaW1wb3J0IHsgbW92ZUNhcm91c2VsIH0gZnJvbSBcIi4vbW9kdWxlcy9jYXJvdXNlbFwiO1xuaW1wb3J0IHsgdW5pdDFfdm9jYWIgfSBmcm9tIFwiLi9tb2R1bGVzL3VuaXRzXCI7XG5pbXBvcnQgeyB1bml0Ml92b2NhYiB9IGZyb20gXCIuL21vZHVsZXMvdW5pdHNcIjtcbmltcG9ydCB7IHVuaXQzX3ZvY2FiIH0gZnJvbSBcIi4vbW9kdWxlcy91bml0c1wiO1xuaW1wb3J0IHsgdW5pdDRfdm9jYWIgfSBmcm9tIFwiLi9tb2R1bGVzL3VuaXRzXCI7XG5pbXBvcnQgeyB1bml0NV92b2NhYiB9IGZyb20gXCIuL21vZHVsZXMvdW5pdHNcIjtcbmltcG9ydCB7IHVuaXQ2X3ZvY2FiIH0gZnJvbSBcIi4vbW9kdWxlcy91bml0c1wiO1xuaW1wb3J0IHsgdW5pdDdfdm9jYWIgfSBmcm9tIFwiLi9tb2R1bGVzL3VuaXRzXCI7XG5pbXBvcnQgeyB1bml0OF92b2NhYiB9IGZyb20gXCIuL21vZHVsZXMvdW5pdHNcIjtcbmxldCBjdXJyZW50Y2Fyb3VzZWwgPSBcIlwiO1xubGV0IHVuaXQgPSBcIlwiO1xubGV0IGtleXMgPSBcIlwiO1xubGV0IHZhbHVlcyA9IFwiXCI7XG4vL2RlY2xhcmUgdW5pdCB2YXJpYWJsZXNcbmNvbnN0IHVuaXQxID0gdW5pdDFfdm9jYWI7XG5jb25zdCB1bml0MiA9IHVuaXQyX3ZvY2FiO1xuY29uc3QgdW5pdDMgPSB1bml0M192b2NhYjtcbmNvbnN0IHVuaXQ0ID0gdW5pdDRfdm9jYWI7XG5jb25zdCB1bml0NSA9IHVuaXQ1X3ZvY2FiO1xuY29uc3QgdW5pdDYgPSB1bml0Nl92b2NhYjtcbmNvbnN0IHVuaXQ3ID0gdW5pdDdfdm9jYWI7XG5jb25zdCB1bml0OCA9IHVuaXQ4X3ZvY2FiO1xuXG4vL0dsb2JhbCB2YXJpYWJsZXMgb24gbWFpbiBwYWdlXG5jb25zdCBsZWZ0YnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0YXJyb3dcIik7XG5jb25zdCByaWdodGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRhcnJvd1wiKTtcblxubGV0IGNvdW50ZXIgPSAwO1xubGV0IGNhcm91c2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJvdXNlbGNvbnRhaW5lclwiKTtcbmxldCB0ZXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93bmNvbnRhaW5lclwiKTtcbmxldCBzd2l0Y2gxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd2l0Y2hjb250YWluZXIxXCIpO1xubGV0IHN3aXRjaDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaGNvbnRhaW5lcjJcIik7XG5sZXQgc3dpdGNoMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoY29udGFpbmVyM1wiKTtcbmxldCBzd2l0Y2g0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd2l0Y2hjb250YWluZXI0XCIpO1xubGV0IHN3aXRjaDUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaGNvbnRhaW5lcjVcIik7XG5sZXQgc3dpdGNoNiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoY29udGFpbmVyNlwiKTtcbmxldCBzd2l0Y2g3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd2l0Y2hjb250YWluZXI3XCIpO1xubGV0IHN3aXRjaDggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaGNvbnRhaW5lcjhcIik7XG5cbi8vIGNhdXNlcyBjYXJkIHRvIGZsaXAgb24gYSBjbGlja1xuY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0bGV0IGNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2FyZFwiKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2FyZFtpXS5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcblx0fVxufSk7XG5cbi8vbGV0cyBjYXJkIGZsaXAgb24gZiBwcmVzc1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdGlmIChldmVudC5rZXkgPT09IFwiZlwiKSB7XG5cdFx0bGV0IGNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2FyZFwiKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNhcmQubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNhcmRbaV0uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG5cdFx0XHRjYXJkW2ldLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlWSgxODBkZWcpXCI7XG5cdFx0fVxuXHR9XG59KTtcbi8vbGV0cyBjYXJkIGZsaXAgYmFjayBvbiBmIHJlbGVhc2VcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0aWYgKGV2ZW50LmtleSA9PT0gXCJmXCIpIHtcblx0XHRsZXQgY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJkXCIpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y2FyZFtpXS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcblx0XHRcdGNhcmRbaV0uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGVZKDBkZWcpXCI7XG5cdFx0fVxuXHR9XG59KTtcblxubGV0IHRvcHJpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3ByaWdodFwiKTtcbmxldCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51YnV0dG9uXCIpO1xubGV0IGl0ZW0xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93bjFcIik7XG5sZXQgaXRlbTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duMlwiKTtcbmxldCBpdGVtMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd24zXCIpO1xubGV0IGl0ZW00ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93bjRcIik7XG5sZXQgaXRlbTUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duNVwiKTtcbmxldCBpdGVtNiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd242XCIpO1xubGV0IGl0ZW03ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93bjdcIik7XG5sZXQgaXRlbTggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duOFwiKTtcbmxldCBiYWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrXCIpO1xuXG4vLyB3b3JkIGFuZCBkZWZpbml0aW9uIGJ1dHRvbnNcbmxldCB3b3JkMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yZDFcIik7XG5sZXQgZGVmaW5pdGlvbjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmluaXRpb24xXCIpO1xubGV0IHdvcmQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JkMlwiKTtcbmxldCBkZWZpbml0aW9uMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmaW5pdGlvbjJcIik7XG5sZXQgd29yZDMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmQzXCIpO1xubGV0IGRlZmluaXRpb24zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZpbml0aW9uM1wiKTtcbmxldCB3b3JkNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yZDRcIik7XG5sZXQgZGVmaW5pdGlvbjQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmluaXRpb240XCIpO1xubGV0IHdvcmQ1ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JkNVwiKTtcbmxldCBkZWZpbml0aW9uNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmaW5pdGlvbjVcIik7XG5sZXQgd29yZDYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmQ2XCIpO1xubGV0IGRlZmluaXRpb242ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZpbml0aW9uNlwiKTtcbmxldCB3b3JkNyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yZDdcIik7XG5sZXQgZGVmaW5pdGlvbjcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmluaXRpb243XCIpO1xubGV0IHdvcmQ4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JkOFwiKTtcbmxldCBkZWZpbml0aW9uOCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmaW5pdGlvbjhcIik7XG5cbi8vbWFrZSBkcm9wZG93biBjb250YW5pZXIgdmlzaWJsZVxubWVudS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcblx0dGVzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInZpc2libGVcIik7XG59KTtcbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHR0ZXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHJvcGRvd25jb250YWluZXJcIik7XG59KTtcblxuLy9tYWtlIHN3aWNoIGZvciBlYWNoIHVuaXQgdmlzaWJsZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbml0ZW0xLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuXHRzd2l0Y2gxLmlkID0gXCJ2aXNpYmxlc3dpdGNoMVwiO1xufSk7XG5pdGVtMi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcblx0c3dpdGNoMi5pZCA9IFwidmlzaWJsZXN3aXRjaDJcIjtcbn0pO1xuaXRlbTMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG5cdHN3aXRjaDMuaWQgPSBcInZpc2libGVzd2l0Y2gzXCI7XG59KTtcbml0ZW00LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuXHRzd2l0Y2g0LmlkID0gXCJ2aXNpYmxlc3dpdGNoNFwiO1xufSk7XG5pdGVtNS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcblx0c3dpdGNoNS5pZCA9IFwidmlzaWJsZXN3aXRjaDVcIjtcbn0pO1xuaXRlbTYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG5cdHN3aXRjaDYuaWQgPSBcInZpc2libGVzd2l0Y2g2XCI7XG59KTtcbml0ZW03LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuXHRzd2l0Y2g3LmlkID0gXCJ2aXNpYmxlc3dpdGNoN1wiO1xufSk7XG5pdGVtOC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcblx0c3dpdGNoOC5pZCA9IFwidmlzaWJsZXN3aXRjaDhcIjtcbn0pO1xuXG4vL21ha2Ugc3dpdGNoIGZvciBlYWNoIHVuaXQgZGlzYXBwZWFyLS0tLS0tLS0tLS0tLS0tLVxuaXRlbTEuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDFcIik7XG5cdHN3aXRjaDEuaWQgPSBcInN3aXRjaGNvbnRhaW5lcjFcIjtcbn0pO1xuaXRlbTIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDJcIik7XG5cdHN3aXRjaDIuaWQgPSBcInN3aXRjaGNvbnRhaW5lcjJcIjtcbn0pO1xuaXRlbTMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDNcIik7XG5cdHN3aXRjaDMuaWQgPSBcInN3aXRjaGNvbnRhaW5lcjNcIjtcbn0pO1xuaXRlbTQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDRcIik7XG5cdHN3aXRjaDQuaWQgPSBcInN3aXRjaGNvbnRhaW5lcjRcIjtcbn0pO1xuaXRlbTUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDVcIik7XG5cdHN3aXRjaDUuaWQgPSBcInN3aXRjaGNvbnRhaW5lcjVcIjtcbn0pO1xuaXRlbTYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoNiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDZcIik7XG5cdHN3aXRjaDYuaWQgPSBcInN3aXRjaGNvbnRhaW5lcjZcIjtcbn0pO1xuaXRlbTcuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoNyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDdcIik7XG5cdHN3aXRjaDcuaWQgPSBcInN3aXRjaGNvbnRhaW5lcjdcIjtcbn0pO1xuaXRlbTguYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoOCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDhcIik7XG5cdHN3aXRjaDguaWQgPSBcInN3aXRjaGNvbnRhaW5lcjhcIjtcbn0pO1xuXG4vL2V2ZW50IGxpc3RlbmVyIGZvciBzZWxlY3Rpb24gb2YgY2hvaWNlIG9uIHVuaXQgMVxud29yZDEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0YWxlcnQoXCJIZWxsb1wiKTtcblx0Y29uc3QgW25ld2NvdW50ZXIsIG5ld2tleXMsIG5ld3ZhbHVlc10gPSBtb3ZlQ2Fyb3VzZWwodW5pdDFfdm9jYWIsIDApO1xuXHQoY291bnRlciA9IG5ld2NvdW50ZXIpLCAoa2V5cyA9IG5ld2tleXMpLCAodmFsdWVzID0gbmV3dmFsdWVzKTtcblx0dG9wcmlnaHQuaW5uZXJIVE1MID0gXCJTY2llbnRpZmljIE1ldGhvZFwiO1xufSk7XG5cbmRlZmluaXRpb24xLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGNvbnN0IFtuZXdjb3VudGVyLCBuZXdrZXlzLCBuZXd2YWx1ZXNdID0gbW92ZUNhcm91c2VsKHVuaXQxX3ZvY2FiLCAxKTtcblx0KGNvdW50ZXIgPSBuZXdjb3VudGVyKSwgKGtleXMgPSBuZXdrZXlzKSwgKHZhbHVlcyA9IG5ld3ZhbHVlcyk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiU2NpZW50aWZpYyBNZXRob2RcIjtcbn0pO1xud29yZDIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0Y29uc29sZS5sb2coXCJIZWxsb1wiKTtcblx0Y29uc3QgW25ld2NvdW50ZXIsIG5ld2tleXMsIG5ld3ZhbHVlc10gPSBtb3ZlQ2Fyb3VzZWwodW5pdDJfdm9jYWIsIDApO1xuXHQoY291bnRlciA9IG5ld2NvdW50ZXIpLCAoa2V5cyA9IG5ld2tleXMpLCAodmFsdWVzID0gbmV3dmFsdWVzKTtcblx0dG9wcmlnaHQuaW5uZXJIVE1MID0gXCJMaWZlIGFuZCBDZWxsc1wiO1xufSk7XG5kZWZpbml0aW9uMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRjb25zdCBbbmV3Y291bnRlciwgbmV3a2V5cywgbmV3dmFsdWVzXSA9IG1vdmVDYXJvdXNlbCh1bml0Ml92b2NhYiwgMSk7XG5cdChjb3VudGVyID0gbmV3Y291bnRlciksIChrZXlzID0gbmV3a2V5cyksICh2YWx1ZXMgPSBuZXd2YWx1ZXMpO1xuXHR0b3ByaWdodC5pbm5lckhUTUwgPSBcIkxpZmUgYW5kIENlbGxzXCI7XG59KTtcbndvcmQzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGNvbnN0IFtuZXdjb3VudGVyLCBuZXdrZXlzLCBuZXd2YWx1ZXNdID0gbW92ZUNhcm91c2VsKHVuaXQzX3ZvY2FiLCAwKTtcblx0KGNvdW50ZXIgPSBuZXdjb3VudGVyKSwgKGtleXMgPSBuZXdrZXlzKSwgKHZhbHVlcyA9IG5ld3ZhbHVlcyk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiTnV0cml0aW9uXCI7XG59KTtcbmRlZmluaXRpb24zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGNvbnN0IFtuZXdjb3VudGVyLCBuZXdrZXlzLCBuZXd2YWx1ZXNdID0gbW92ZUNhcm91c2VsKHVuaXQzX3ZvY2FiLCAxKTtcblx0KGNvdW50ZXIgPSBuZXdjb3VudGVyKSwgKGtleXMgPSBuZXdrZXlzKSwgKHZhbHVlcyA9IG5ld3ZhbHVlcyk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiTnV0cml0aW9uXCI7XG59KTtcbndvcmQ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGNvbnN0IFtuZXdjb3VudGVyLCBuZXdrZXlzLCBuZXd2YWx1ZXNdID0gbW92ZUNhcm91c2VsKHVuaXQ0X3ZvY2FiLCAwKTtcblx0KGNvdW50ZXIgPSBuZXdjb3VudGVyKSwgKGtleXMgPSBuZXdrZXlzKSwgKHZhbHVlcyA9IG5ld3ZhbHVlcyk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiSG9tZW9zdGFzaXNcIjtcbn0pO1xuZGVmaW5pdGlvbjQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0Y29uc3QgW25ld2NvdW50ZXIsIG5ld2tleXMsIG5ld3ZhbHVlc10gPSBtb3ZlQ2Fyb3VzZWwodW5pdDRfdm9jYWIsIDEpO1xuXHQoY291bnRlciA9IG5ld2NvdW50ZXIpLCAoa2V5cyA9IG5ld2tleXMpLCAodmFsdWVzID0gbmV3dmFsdWVzKTtcblx0dG9wcmlnaHQuaW5uZXJIVE1MID0gXCJIb21lb3N0YXNpc1wiO1xufSk7XG53b3JkNS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRjb25zdCBbbmV3Y291bnRlciwgbmV3a2V5cywgbmV3dmFsdWVzXSA9IG1vdmVDYXJvdXNlbCh1bml0NV92b2NhYiwgMCk7XG5cdChjb3VudGVyID0gbmV3Y291bnRlciksIChrZXlzID0gbmV3a2V5cyksICh2YWx1ZXMgPSBuZXd2YWx1ZXMpO1xuXHR0b3ByaWdodC5pbm5lckhUTUwgPSBcIlJlc3BpcmF0aW9uL1Bob3Rvc3ludGhlc2lzXCI7XG59KTtcbmRlZmluaXRpb241LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGNvbnN0IFtuZXdjb3VudGVyLCBuZXdrZXlzLCBuZXd2YWx1ZXNdID0gbW92ZUNhcm91c2VsKHVuaXQ1X3ZvY2FiLCAxKTtcblx0KGNvdW50ZXIgPSBuZXdjb3VudGVyKSwgKGtleXMgPSBuZXdrZXlzKSwgKHZhbHVlcyA9IG5ld3ZhbHVlcyk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiUmVzcGlyYXRpb24vUGhvdG9zeW50aGVzaXNcIjtcbn0pO1xud29yZDYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0Y29uc3QgW25ld2NvdW50ZXIsIG5ld2tleXMsIG5ld3ZhbHVlc10gPSBtb3ZlQ2Fyb3VzZWwodW5pdDZfdm9jYWIsIDApO1xuXHQoY291bnRlciA9IG5ld2NvdW50ZXIpLCAoa2V5cyA9IG5ld2tleXMpLCAodmFsdWVzID0gbmV3dmFsdWVzKTtcblx0dG9wcmlnaHQuaW5uZXJIVE1MID0gXCJHZW5ldGljc1wiO1xufSk7XG5kZWZpbml0aW9uNi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRjb25zdCBbbmV3Y291bnRlciwgbmV3a2V5cywgbmV3dmFsdWVzXSA9IG1vdmVDYXJvdXNlbCh1bml0Nl92b2NhYiwgMSk7XG5cdChjb3VudGVyID0gbmV3Y291bnRlciksIChrZXlzID0gbmV3a2V5cyksICh2YWx1ZXMgPSBuZXd2YWx1ZXMpO1xuXHR0b3ByaWdodC5pbm5lckhUTUwgPSBcIkdlbmV0aWNzXCI7XG59KTtcbndvcmQ3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGNvbnN0IFtuZXdjb3VudGVyLCBuZXdrZXlzLCBuZXd2YWx1ZXNdID0gbW92ZUNhcm91c2VsKHVuaXQ3X3ZvY2FiLCAwKTtcblx0KGNvdW50ZXIgPSBuZXdjb3VudGVyKSwgKGtleXMgPSBuZXdrZXlzKSwgKHZhbHVlcyA9IG5ld3ZhbHVlcyk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiRXZvbHV0aW9uXCI7XG59KTtcbmRlZmluaXRpb243LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGNvbnN0IFtuZXdjb3VudGVyLCBuZXdrZXlzLCBuZXd2YWx1ZXNdID0gbW92ZUNhcm91c2VsKHVuaXQ3X3ZvY2FiLCAxKTtcblx0KGNvdW50ZXIgPSBuZXdjb3VudGVyKSwgKGtleXMgPSBuZXdrZXlzKSwgKHZhbHVlcyA9IG5ld3ZhbHVlcyk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiRXZvbHV0aW9uXCI7XG59KTtcbndvcmQ4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGNvbnN0IFtuZXdjb3VudGVyLCBuZXdrZXlzLCBuZXd2YWx1ZXNdID0gbW92ZUNhcm91c2VsKHVuaXQ4X3ZvY2FiLCAwKTtcblx0KGNvdW50ZXIgPSBuZXdjb3VudGVyKSwgKGtleXMgPSBuZXdrZXlzKSwgKHZhbHVlcyA9IG5ld3ZhbHVlcyk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiRWNvbG9neVwiO1xufSk7XG5kZWZpbml0aW9uOC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRjb25zdCBbbmV3Y291bnRlciwgbmV3a2V5cywgbmV3dmFsdWVzXSA9IG1vdmVDYXJvdXNlbCh1bml0OF92b2NhYiwgMSk7XG5cdChjb3VudGVyID0gbmV3Y291bnRlciksIChrZXlzID0gbmV3a2V5cyksICh2YWx1ZXMgPSBuZXd2YWx1ZXMpO1xuXHR0b3ByaWdodC5pbm5lckhUTUwgPSBcIkVjb2xvZ3lcIjtcbn0pO1xuXG4vL2FkZHMgdGhlIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgbGVmdCBhbmQgcmlnaHQgYXJyb3dcbmxlZnRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0dGVzdFJ1bihjb3VudGVyLCBrZXlzLCB2YWx1ZXMpO1xufSk7XG5cbnJpZ2h0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdHJpZ2h0UnVuKGNvdW50ZXIsIGtleXMsIHZhbHVlcyk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHRlc3RSdW4oY291bnRlciwga2V5cywgdmFsdWVzKTtcbn0pO1xuLy89PiB7XG4vL25lZWRzIHRvIHRha2UgdGhlIG91dHB1dCBvZiB0aGUgY2Fyb3VzZWwgY29udGFpbmVyIHRvIHRoZW4gdXNlXG4vL2lmIChjb3VudGVyID09IDApIHtcbi8vXHRjb3VudGVyID0ga2V5cy5sZW5ndGggLSAxO1xuLy99IGVsc2Uge1xuLy9cdGNvdW50ZXIgPSBjb3VudGVyIC0gMTtcbi8vfVxuLy9mcm9udC5pbm5lckhUTUwgPSBrZXlzW2NvdW50ZXJdO1xuLy9iYWNrLmlubmVySFRNTCA9IHZhbHVlc1tjb3VudGVyXTtcbi8vY2hlY2tEb3RzKCk7XG4vL3JldHVybiBjb3VudGVyO1xuLy99KTtcblxuZnVuY3Rpb24gdGVzdFJ1bih0aGVjb3VudGVyLCB0aGVrZXlzLCB0aGV2YWx1ZXMpIHtcblx0aWYgKHRoZWNvdW50ZXIgPT0gMCkge1xuXHRcdHRoZWNvdW50ZXIgPSB0aGVrZXlzLmxlbmd0aCAtIDE7XG5cdH0gZWxzZSB7XG5cdFx0dGhlY291bnRlciA9IHRoZWNvdW50ZXIgLSAxO1xuXHR9XG5cdGZyb250LmlubmVySFRNTCA9IHRoZWtleXNbdGhlY291bnRlcl07XG5cdGJhY2suaW5uZXJIVE1MID0gdGhldmFsdWVzW3RoZWNvdW50ZXJdO1xuXHRjb3VudGVyID0gdGhlY291bnRlcjtcblx0Y2hlY2tEb3RzKCk7XG59XG5cbmZ1bmN0aW9uIHJpZ2h0UnVuKHRoZWNvdW50ZXIsIHRoZWtleXMsIHRoZXZhbHVlcykge1xuXHQvL25lZWRzIHRvIHRha2UgdGhlIG91dHB1dCBvZiB0aGUgY2Fyb3VzZWwgY29udGFpbmVyIHRvIHRoZW4gdXNlXG5cdGlmICh0aGVjb3VudGVyID09IGtleXMubGVuZ3RoIC0gMSkge1xuXHRcdHRoZWNvdW50ZXIgPSAwO1xuXHR9IGVsc2Uge1xuXHRcdHRoZWNvdW50ZXIgPSB0aGVjb3VudGVyICsgMTtcblx0fVxuXHRmcm9udC5pbm5lckhUTUwgPSB0aGVrZXlzW3RoZWNvdW50ZXJdO1xuXHRiYWNrLmlubmVySFRNTCA9IHRoZXZhbHVlc1t0aGVjb3VudGVyXTtcblx0Y291bnRlciA9IHRoZWNvdW50ZXI7XG5cblx0Y2hlY2tEb3RzKCk7XG59XG4vL3Jlc2V0cyBhbGwgZG90cyB0byBncmF5LCB0aGVuIGNoZWNrcyB0aGUgY291bnRlciBudW1iZXIsIGFuZCBtYWtlcyB0aGUgZG90IHdpdGggdGhhdCBjb3VudGVyIElEIHJlZFxuZnVuY3Rpb24gY2hlY2tEb3RzKCkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoY291bnRlciA9PSBpKSB7XG5cdFx0XHRsZXQgZG90cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaXJjbGVcIik7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRvdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0ZG90c1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyYXlcIjtcblx0XHRcdH1cblx0XHRcdHZhciB0aGlzZG90ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb3RzXCIgKyBpKTtcblx0XHRcdHRoaXNkb3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibGFja1wiO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsZWZ0UHJlc3MoZXZlbnQpIHtcblx0aWYgKGV2ZW50LmtleUNvZGUgPT09IDM3KSB7XG5cdFx0aWYgKGNvdW50ZXIgPT0gMCkge1xuXHRcdFx0Y291bnRlciA9IGtleXMubGVuZ3RoIC0gMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y291bnRlciA9IGNvdW50ZXIgLSAxO1xuXHRcdH1cblx0XHRmcm9udC5pbm5lckhUTUwgPSBrZXlzW2NvdW50ZXJdO1xuXHRcdGJhY2suaW5uZXJIVE1MID0gdmFsdWVzW2NvdW50ZXJdO1xuXG5cdFx0Y2hlY2tEb3RzKCk7XG5cdFx0cmV0dXJuIGNvdW50ZXI7XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==