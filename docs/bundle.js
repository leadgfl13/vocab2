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
	transform: scale(1.3);
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

.hovering {
	position: relative;
	display: inline-block;
	margin-top: 20px;
	background-color: beige;
	border-radius: 25%;
	padding: 8px;

	border: 2px solid black;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@media (max-width: 768px) {\n\tbody {\n\t\tfont-size: 14px;\n\t}\n}\n\n/* Styles for devices with a max width of 480px (e.g., small phones) */\n@media (max-width: 480px) {\n\tbody {\n\t\tfont-size: 12px;\n\t}\n}\n\n@keyframes bounceleft {\n\t0%,\n\t20%,\n\t50%,\n\t80%,\n\t100% {\n\t\ttransform: translateY(0);\n\t}\n\t40% {\n\t\ttransform: translateX(-30px);\n\t}\n\t60% {\n\t\ttransform: translateX(-15px);\n\t}\n}\n\n@keyframes bounce {\n\t0%,\n\t20%,\n\t50%,\n\t80%,\n\t100% {\n\t\ttransform: translateX(0);\n\t}\n\t40% {\n\t\ttransform: translateY(-30px);\n\t}\n\t60% {\n\t\ttransform: translateY(-15px);\n\t}\n}\n\n@keyframes fadeinfromtop {\n\t0% {\n\t\topacity: 0;\n\t\ttransform: translateY(0px);\n\t}\n\t100% {\n\t\topacity: 1;\n\t\ttransform: translateY(0);\n\t}\n}\n@keyframes bounceright {\n\t0%,\n\t20%,\n\t50%,\n\t80%,\n\t100% {\n\t\ttransform: translateY(0);\n\t}\n\t40% {\n\t\ttransform: translateX(30px);\n\t}\n\t60% {\n\t\ttransform: translateX(15px);\n\t}\n}\n\n@keyframes openfromtop {\n\t0% {\n\t\theight: 0;\n\t}\n\n\t100% {\n\t\theight: 70%; /* Adjust the final height as needed */\n\t}\n}\n@keyframes itemopen {\n\t0% {\n\t\theight: 0;\n\t}\n\n\t100% {\n\t\theight: 100px; /* Adjust the final height as needed */\n\t}\n}\n\nbutton:hover {\n\tbackground-color: skyblue;\n}\n\nbody {\n\tbackground-color: rgb(156, 197, 176);\n}\n\n#pagelayout {\n\theight: 100%;\n\twidth: 100%;\n\tmargin: 0px;\n\tdisplay: grid;\n\tgrid-template-columns: 20% 80%;\n\tgrid-template-rows: 20% 80%;\n}\n\n#topright {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgrid-template-areas: 1/1/2/2;\n\tfont-size: 2rem;\n\ttext-align: center;\n\tbackground-color: tan;\n\tborder: 4px solid black;\n\tcolor: green;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tfont-weight: 700;\n}\n\n#topleft {\n\tborder: 4px solid black;\n\tgrid-template-areas: 1/2/2/3;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tfont-size: 2rem;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tbackground-color: rgb(4, 65, 4);\n\tcolor: tan;\n\tfont-weight: 800;\n}\n\n#bottomleft {\n\tgrid-template-areas: 2/2/3/3;\n}\n\n#bottomright {\n\tgrid-template-areas: 2/1/3/2;\n\tdisplay: flex;\n\tflex-direction: Column;\n\twidth: 100%;\n}\n\n#leftright {\n\tdisplay: flex;\n\theight: 60%;\n\twidth: 100%;\n\tflex-direction: row;\n}\n\n#leftarrow {\n\tbackground-image: url(\"./images/left_arrow.png\");\n\tbackground-size: 100%;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 20%;\n\ttext-align: center;\n}\n#rightarrow {\n\tbackground-image: url(\"./images/right_arrow.png\");\n\tbackground-size: 100%;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 20%;\n\ttext-align: center;\n}\n\n#left:active {\n\tanimation: bounceleft 0.5s;\n}\n\n#right:active {\n\tanimation: bounceright 0.5s;\n}\n#carouselcontainer {\n\tposition: relative;\n\twidth: 70%;\n\tdisplay: flex;\n\tword-wrap: break-word;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tfont-size: 2rem;\n\tmargin: 10px;\n\tborder-radius: 20px;\n\ttext-align: center;\n\tcolor: tan;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-size: cover;\n\tperspective: 1200px;\n}\n\n.card {\n\theight: 100%;\n\twidth: 100%;\n\tposition: absolute;\n\ttransform-style: preserve-3d;\n\ttransition: transform 1000ms;\n}\n.flipped {\n\ttransform: rotateY(180deg);\n}\n.front {\n\tdisplay: flex;\n\tborder-radius: 20px;\n\ttext-align: center;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-size: cover;\n\tborder: 2px black groove;\n\tposition: absolute;\n\tcolor: black;\n\tfont-weight: 800;\n\theight: 100%;\n\twidth: 100%;\n\tbackface-visibility: hidden;\n\tbackground-image: url(\"./images/paper.webp\");\n}\n\n.back {\n\tbackground-image: url(\"./images/paper.webp\");\n\n\tdisplay: Flex;\n\tborder-radius: 20px;\n\ttext-align: center;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-size: cover;\n\tborder: 2px black groove;\n\tposition: absolute;\n\tfont-weight: 800;\n\theight: 100%;\n\twidth: 100%;\n\tbackface-visibility: hidden;\n\tcolor: black;\n\ttransform: rotateY(180deg);\n}\n#carouseldots {\n\theight: 1rem;\n\twidth: auto;\n\tgap: 10px;\n\tdisplay: flex;\n\tpadding: 8px;\n\tjustify-content: center;\n\talign-items: center;\n\tborder: 2px green solid;\n\ttext-align: Center;\n\tborder: groove black 10px;\n\tflex-wrap: wrap;\n}\n\n.circle {\n\theight: 1rem;\n\twidth: 1rem;\n\tborder-radius: 50%;\n\tbackground-color: gray;\n}\n.circle:hover {\n\ttransform: scale(1.3);\n}\n\n#menubutton {\n\theight: 40px;\n\tcolor: green;\n\tbackground-color: tan;\n\tfont-size: 1rem;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\twidth: 100%;\n}\n\n#dropdowncontainer {\n\tdisplay: none;\n}\n\n.switchcontainer {\n\tgap: 10px;\n\tmargin: 5px;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n}\n.switch {\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tfont-size: 1rem;\n\twidth: 90%;\n\tbackground-color: antiquewhite;\n\tborder-radius: 20px;\n\tcolor: rgb(116, 154, 116);\n\tfont-weight: 800;\n}\n.dropdownitem {\n\tborder: 2px solid black;\n\tpadding: 5px;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tbackground-color: rgb(221, 250, 215);\n}\n.dropdownitemvisible {\n\tborder: 2px solid black;\n\tpadding: 5px;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tbackground-color: rgb(221, 250, 215);\n}\n#switchcontainer1,\n#switchcontainer2,\n#switchcontainer3,\n#switchcontainer4,\n#switchcontainer5,\n#switchcontainer6,\n#switchcontainer7,\n#switchcontainer8 {\n\twidth: 50%;\n\tdisplay: none;\n}\n\n#visibleswitch1 #visibleswitch2,\n#visibleswitch3 #visibleswitch4,\n#visibleswitch5 #visibleswitch6,\n#visibleswitch7 #visibleswitch8 {\n\tanimation: fadeinfromtop 0.5s forwards;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-around;\n}\n#visible {\n\tanimation: fadeinfromtop 0.5s forwards;\n\twidth: 100%;\n\tdisplay: flex;\n\ttext-align: center;\n\tfont-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n\tfont-size: 1rem;\n\tflex-direction: column;\n\tbackground-color: beige;\n\tgap: 20px;\n\tborder: 2px solid black;\n\theight: 70%;\n}\n#dropdowncontainer:hover {\n\twidth: 100%;\n\tdisplay: flex;\n\ttext-align: center;\n\tfont-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n\tfont-size: 1rem;\n\tflex-direction: column;\n\tbackground-color: beige;\n\tgap: 20px;\n\tborder: 2px solid black;\n}\n\nul {\n\tlist-style: none;\n\tgap: 14px;\n\tdisplay: flex;\n\tflex-direction: row;\n\ttext-align: center;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tfont-size: 2rem;\n\tfont-weight: 700;\n\tcolor: black;\n\tmargin-top: 30px;\n}\n\n.hovering {\n\tposition: relative;\n\tdisplay: inline-block;\n\tmargin-top: 20px;\n\tbackground-color: beige;\n\tborder-radius: 25%;\n\tpadding: 8px;\n\n\tborder: 2px solid black;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkDots: () => (/* binding */ checkDots),
/* harmony export */   counter: () => (/* binding */ counter)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/carousel */ "./src/modules/carousel.js");
/* harmony import */ var _modules_units__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/units */ "./src/modules/units.js");












let currentcarousel = "";
let unit = "";
let keys = "";
let values = "";
let dots = "";
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
let front = document.getElementById("front");
let back = document.getElementById("back");

let counter = {
	_number: 0, // Internal variable to store the value

	get number() {
		return this._number;
	},

	set number(value) {
		this._number = value;
	},
};

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
front.addEventListener("click", () => {
	let card = document.getElementsByClassName("card");
	for (let i = 0; i < card.length; i++) {
		card[i].classList.toggle("flipped");
	}
});

back.addEventListener("click", () => {
	let card = document.getElementsByClassName("card");
	for (let i = 0; i < card.length; i++) {
		card[i].classList.toggle("flipped");
	}
});

//lets card flip on f press
document.addEventListener("keypress", function (event) {
	if (event.key === "f") {
		let card = document.getElementsByClassName("card");
		for (let i = 0; i < card.length; i++) {
			card[i].classList.toggle("flipped");
		}
	}
});
//Old style of rotating card "smootly"
//document.addEventListener("keyup", function (event) {
//if (event.key === "f") {
//	let card = document.getElementsByClassName("card");
//for (let i = 0; i < card.length; i++) {
//	card[i].style.cursor = "pointer";
//	card[i].style.transform = "rotateY(0deg)";
//}
//}
//});

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
	const [newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit1_vocab, 0);
	(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.doDots)(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Scientific Method";
});

definition1.addEventListener("click", () => {
	const [newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit1_vocab, 1);
	(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.doDots)(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Scientific Method";
});
word2.addEventListener("click", () => {
	const [newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit2_vocab, 0);
	(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.doDots)(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Life and Cells";
});
definition2.addEventListener("click", () => {
	const [newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit2_vocab, 1);
	(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.doDots)(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Life and Cells";
});
word3.addEventListener("click", () => {
	const [newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit3_vocab, 0);
	(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.doDots)(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Nutrition";
});
definition3.addEventListener("click", () => {
	const [newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit3_vocab, 1);
	(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.doDots)(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Nutrition";
});
word4.addEventListener("click", () => {
	const [newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit4_vocab, 0);
	(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.doDots)(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Homeostasis";
});
definition4.addEventListener("click", () => {
	const [newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit4_vocab, 1);
	(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.doDots)(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Homeostasis";
});
word5.addEventListener("click", () => {
	const [newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit5_vocab, 0);
	(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.doDots)(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Respiration/Photosynthesis";
});
definition5.addEventListener("click", () => {
	const [newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(unit65_vocab, 1);
	(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.doDots)(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Respiration/Photosynthesis";
});
word6.addEventListener("click", () => {
	const [newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit6_vocab, 0);
	(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.doDots)(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Genetics";
});
definition6.addEventListener("click", () => {
	const [newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit6_vocab, 1);
	(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.doDots)(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Genetics";
});
word7.addEventListener("click", () => {
	const [newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit7_vocab, 0);
	(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.doDots)(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Evolution";
});
definition7.addEventListener("click", () => {
	const [newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit7_vocab, 1);
	(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.doDots)(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Evolution";
});
word8.addEventListener("click", () => {
	const [newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit8_vocab, 0);
	(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.doDots)(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Ecology";
});
definition8.addEventListener("click", () => {
	const [newkeys, newvalues] = (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.moveCarousel)(_modules_units__WEBPACK_IMPORTED_MODULE_2__.unit8_vocab, 1);
	(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.doDots)(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Ecology";
});

//adds the event listener for the left and right arrow
leftbutton.addEventListener("click", () => {
	testRun(keys, values);
	console.log(counter);
});

rightbutton.addEventListener("click", () => {
	rightRun(keys, values);
});

document.addEventListener("keydown", function (event) {
	if (event.key === "ArrowLeft") testRun(keys, values);
});
document.addEventListener("keydown", function (event) {
	if (event.key === "ArrowRight") rightRun(keys, values);
});

document.addEventListener("keydown", function (event) {
	if (event.key === " ") {
		let temp = front.innerHTML;
		front.innerHTML = back.innerHTML;
		back.innerHTML = temp;
	}
});

document.addEventListener("keydown", function (event) {
	if (event.key === "ArrowUp") {
		makeRandom();
		checkDots();
	}
});

function makeRandom() {
	console.log(keys.length);
	counter.number = Math.floor(Math.random() * keys.length);
	front.innerHTML = keys[counter.number];
	back.innerHTML = values[counter.number];
}

function testRun(thekeys, thevalues) {
	if (counter.number == 0) {
		counter.number = thekeys.length - 1;
	} else {
		counter.number = counter.number - 1;
	}
	front.innerHTML = thekeys[counter.number];
	back.innerHTML = thevalues[counter.number];
	if (front.innerHTML == "undefined" || back.innerHTML == "undefined") {
		front.innerHTML = "select a unit!";
		back.innerHTML = "select a unit!";
	}
	checkDots();
}

function rightRun(thekeys, thevalues) {
	//needs to take the output of the carousel container to then use
	if (counter.number == keys.length - 1) {
		counter.number = 0;
	} else {
		counter.number = counter.number + 1;
	}
	front.innerHTML = thekeys[counter.number];
	back.innerHTML = thevalues[counter.number];
	if (front.innerHTML == "undefined" || back.innerHTML == "undefined") {
		front.innerHTML = "select a unit!";
		back.innerHTML = "select a unit!";
	}

	checkDots();
}
//resets all dots to gray, then checks the counter number, and makes the dot with that counter ID red
function checkDots() {
	dots = document.getElementsByClassName("circle");
	for (let i = 0; i < keys.length; i++) {
		dots[i].style.backgroundColor = "gray";

		if (counter.number == i) {
			var thisdot = document.getElementById("dots" + i);
			thisdot.style.backgroundColor = "black";
		}
	}
}


/***/ }),

/***/ "./src/modules/carousel.js":
/*!*********************************!*\
  !*** ./src/modules/carousel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   doDots: () => (/* binding */ doDots),
/* harmony export */   moveCarousel: () => (/* binding */ moveCarousel)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");


function moveCarousel(unit, choice) {
	let carousel = document.getElementById("carouselcontainer");
	let front = document.getElementById("front");
	let back = document.getElementById("back");

	carouseldots.innerHTML = "";
	___WEBPACK_IMPORTED_MODULE_0__.counter.number = 0;
	var keys = Object.keys(unit);
	var values = Object.values(unit);
	if (choice == 1) {
		let temp = keys;
		keys = values;
		values = temp;
	}
	front.innerHTML = keys[___WEBPACK_IMPORTED_MODULE_0__.counter.number];
	back.innerHTML = values[___WEBPACK_IMPORTED_MODULE_0__.counter.number];
	//creates dots for carousel and adds them to the page

	return [keys, values];
}

function doDots(thekeys, thevalues) {
	//creates the Dots and appends them to the page
	for (let i = 0; i < thekeys.length; i++) {
		let dot = document.createElement("div");
		dot.setAttribute("class", "circle");
		dot.setAttribute("id", "dots" + i);
		carouseldots.append(dot);
	}

	let dots = document.getElementsByClassName("circle");
	//function to make dot click and showcase the corresponding card by updating the counter value
	for (let i = 0; i < dots.length; i++) {
		dots[i].addEventListener("click", () => {
			___WEBPACK_IMPORTED_MODULE_0__.counter.number = i;
			front.innerHTML = thekeys[___WEBPACK_IMPORTED_MODULE_0__.counter.number];
			back.innerHTML = thevalues[___WEBPACK_IMPORTED_MODULE_0__.counter.number];
			(0,___WEBPACK_IMPORTED_MODULE_0__.checkDots)();
		});
		dots[i].addEventListener("mouseover", () => {
			timeoutId = setTimeout(showPopup, 1000);
		});
		dots[i].addEventListener("mouseleave", () => {
			clearTimeout(timeoutId);

			dots[i].innerHTML = "";
		});

		function showPopup() {
			let hover = document.createElement("div");
			hover.setAttribute("class", "hovering");
			hover.innerHTML = thekeys[i];
			dots[i].append(hover);
		}
		let timeoutId;
		//this checks the colors and changes them so that only the counter is dark
	}

	//resets all dots to gray, then checks the counter number, and makes the dot with that counter ID red
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMkhBQTBDO0FBQ3RGLDRDQUE0Qyw2SEFBMkM7QUFDdkYsNENBQTRDLG1IQUFzQztBQUNsRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLG1DQUFtQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtQ0FBbUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsbUNBQW1DO0FBQzVEOztBQUVBO0FBQ0EseUJBQXlCLG1DQUFtQzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxTQUFTLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssU0FBUyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLEtBQUssU0FBUyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssc0JBQXNCLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssc0JBQXNCLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLE9BQU8sYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLE9BQU8sYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLE9BQU8sV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssT0FBTyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxPQUFPLE1BQU0sS0FBSyxLQUFLLE9BQU8sV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLE9BQU8sYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssT0FB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QVksQ0FBQyx1REFBVztBQUN0RCxDQUFDLHlEQUFNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw4QkFBOEIsK0RBQVksQ0FBQyx1REFBVztBQUN0RCxDQUFDLHlEQUFNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw4QkFBOEIsK0RBQVksQ0FBQyx1REFBVztBQUN0RCxDQUFDLHlEQUFNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw4QkFBOEIsK0RBQVksQ0FBQyx1REFBVztBQUN0RCxDQUFDLHlEQUFNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw4QkFBOEIsK0RBQVksQ0FBQyx1REFBVztBQUN0RCxDQUFDLHlEQUFNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw4QkFBOEIsK0RBQVksQ0FBQyx1REFBVztBQUN0RCxDQUFDLHlEQUFNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw4QkFBOEIsK0RBQVk7QUFDMUMsQ0FBQyx5REFBTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsOEJBQThCLCtEQUFZLENBQUMsdURBQVc7QUFDdEQsQ0FBQyx5REFBTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsOEJBQThCLCtEQUFZLENBQUMsdURBQVc7QUFDdEQsQ0FBQyx5REFBTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsOEJBQThCLCtEQUFZLENBQUMsdURBQVc7QUFDdEQsQ0FBQyx5REFBTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsOEJBQThCLCtEQUFZLENBQUMsdURBQVc7QUFDdEQsQ0FBQyx5REFBTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsOEJBQThCLCtEQUFZLENBQUMsdURBQVc7QUFDdEQsQ0FBQyx5REFBTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsOEJBQThCLCtEQUFZLENBQUMsdURBQVc7QUFDdEQsQ0FBQyx5REFBTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaForQjtBQUNGO0FBQ3RCO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxzQ0FBTztBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNDQUFPO0FBQy9CLHlCQUF5QixzQ0FBTztBQUNoQzs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQSxHQUFHLHNDQUFPO0FBQ1YsNkJBQTZCLHNDQUFPO0FBQ3BDLDhCQUE4QixzQ0FBTztBQUNyQyxHQUFHLDRDQUFTO0FBQ1osR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3hOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL21vZHVsZXMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy91bml0cy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvbGVmdF9hcnJvdy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9yaWdodF9hcnJvdy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9wYXBlci53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHRib2R5IHtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdH1cbn1cblxuLyogU3R5bGVzIGZvciBkZXZpY2VzIHdpdGggYSBtYXggd2lkdGggb2YgNDgwcHggKGUuZy4sIHNtYWxsIHBob25lcykgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuXHRib2R5IHtcblx0XHRmb250LXNpemU6IDEycHg7XG5cdH1cbn1cblxuQGtleWZyYW1lcyBib3VuY2VsZWZ0IHtcblx0MCUsXG5cdDIwJSxcblx0NTAlLFxuXHQ4MCUsXG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0fVxuXHQ0MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzBweCk7XG5cdH1cblx0NjAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1cHgpO1xuXHR9XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlIHtcblx0MCUsXG5cdDIwJSxcblx0NTAlLFxuXHQ4MCUsXG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcblx0fVxuXHQ0MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG5cdH1cblx0NjAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xuXHR9XG59XG5cbkBrZXlmcmFtZXMgZmFkZWluZnJvbXRvcCB7XG5cdDAlIHtcblx0XHRvcGFjaXR5OiAwO1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuXHR9XG5cdDEwMCUge1xuXHRcdG9wYWNpdHk6IDE7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuXHR9XG59XG5Aa2V5ZnJhbWVzIGJvdW5jZXJpZ2h0IHtcblx0MCUsXG5cdDIwJSxcblx0NTAlLFxuXHQ4MCUsXG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0fVxuXHQ0MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcblx0fVxuXHQ2MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcblx0fVxufVxuXG5Aa2V5ZnJhbWVzIG9wZW5mcm9tdG9wIHtcblx0MCUge1xuXHRcdGhlaWdodDogMDtcblx0fVxuXG5cdDEwMCUge1xuXHRcdGhlaWdodDogNzAlOyAvKiBBZGp1c3QgdGhlIGZpbmFsIGhlaWdodCBhcyBuZWVkZWQgKi9cblx0fVxufVxuQGtleWZyYW1lcyBpdGVtb3BlbiB7XG5cdDAlIHtcblx0XHRoZWlnaHQ6IDA7XG5cdH1cblxuXHQxMDAlIHtcblx0XHRoZWlnaHQ6IDEwMHB4OyAvKiBBZGp1c3QgdGhlIGZpbmFsIGhlaWdodCBhcyBuZWVkZWQgKi9cblx0fVxufVxuXG5idXR0b246aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xufVxuXG5ib2R5IHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NiwgMTk3LCAxNzYpO1xufVxuXG4jcGFnZWxheW91dCB7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDEwMCU7XG5cdG1hcmdpbjogMHB4O1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDgwJTtcbn1cblxuI3RvcHJpZ2h0IHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdyaWQtdGVtcGxhdGUtYXJlYXM6IDEvMS8yLzI7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0YW47XG5cdGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xuXHRjb2xvcjogZ3JlZW47XG5cdGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG5cdFx0XCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuI3RvcGxlZnQge1xuXHRib3JkZXI6IDRweCBzb2xpZCBibGFjaztcblx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogMS8yLzIvMztcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1zaXplOiAycmVtO1xuXHRmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxuXHRcdFwiTHVjaWRhIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYig0LCA2NSwgNCk7XG5cdGNvbG9yOiB0YW47XG5cdGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbiNib3R0b21sZWZ0IHtcblx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogMi8yLzMvMztcbn1cblxuI2JvdHRvbXJpZ2h0IHtcblx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogMi8xLzMvMjtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IENvbHVtbjtcblx0d2lkdGg6IDEwMCU7XG59XG5cbiNsZWZ0cmlnaHQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRoZWlnaHQ6IDYwJTtcblx0d2lkdGg6IDEwMCU7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbiNsZWZ0YXJyb3cge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJTtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0d2lkdGg6IDIwJTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuI3JpZ2h0YXJyb3cge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJTtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0d2lkdGg6IDIwJTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jbGVmdDphY3RpdmUge1xuXHRhbmltYXRpb246IGJvdW5jZWxlZnQgMC41cztcbn1cblxuI3JpZ2h0OmFjdGl2ZSB7XG5cdGFuaW1hdGlvbjogYm91bmNlcmlnaHQgMC41cztcbn1cbiNjYXJvdXNlbGNvbnRhaW5lciB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2lkdGg6IDcwJTtcblx0ZGlzcGxheTogZmxleDtcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xuXHRmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxuXHRcdFwiTHVjaWRhIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0bWFyZ2luOiAxMHB4O1xuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGNvbG9yOiB0YW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdHBlcnNwZWN0aXZlOiAxMjAwcHg7XG59XG5cbi5jYXJkIHtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwMG1zO1xufVxuLmZsaXBwZWQge1xuXHR0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cbi5mcm9udCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0Ym9yZGVyOiAycHggYmxhY2sgZ3Jvb3ZlO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGNvbG9yOiBibGFjaztcblx0Zm9udC13ZWlnaHQ6IDgwMDtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5cbi5iYWNrIHtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuXG5cdGRpc3BsYXk6IEZsZXg7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0Ym9yZGVyOiAycHggYmxhY2sgZ3Jvb3ZlO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGZvbnQtd2VpZ2h0OiA4MDA7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblx0Y29sb3I6IGJsYWNrO1xuXHR0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cbiNjYXJvdXNlbGRvdHMge1xuXHRoZWlnaHQ6IDFyZW07XG5cdHdpZHRoOiBhdXRvO1xuXHRnYXA6IDEwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdHBhZGRpbmc6IDhweDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJvcmRlcjogMnB4IGdyZWVuIHNvbGlkO1xuXHR0ZXh0LWFsaWduOiBDZW50ZXI7XG5cdGJvcmRlcjogZ3Jvb3ZlIGJsYWNrIDEwcHg7XG5cdGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNpcmNsZSB7XG5cdGhlaWdodDogMXJlbTtcblx0d2lkdGg6IDFyZW07XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn1cbi5jaXJjbGU6aG92ZXIge1xuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG59XG5cbiNtZW51YnV0dG9uIHtcblx0aGVpZ2h0OiA0MHB4O1xuXHRjb2xvcjogZ3JlZW47XG5cdGJhY2tncm91bmQtY29sb3I6IHRhbjtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHRmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxuXHRcdFwiTHVjaWRhIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4jZHJvcGRvd25jb250YWluZXIge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4uc3dpdGNoY29udGFpbmVyIHtcblx0Z2FwOiAxMHB4O1xuXHRtYXJnaW46IDVweDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG5cdFx0XCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbi5zd2l0Y2gge1xuXHRmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxuXHRcdFwiTHVjaWRhIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMXJlbTtcblx0d2lkdGg6IDkwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRjb2xvcjogcmdiKDExNiwgMTU0LCAxMTYpO1xuXHRmb250LXdlaWdodDogODAwO1xufVxuLmRyb3Bkb3duaXRlbSB7XG5cdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuXHRwYWRkaW5nOiA1cHg7XG5cdGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG5cdFx0XCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjUwLCAyMTUpO1xufVxuLmRyb3Bkb3duaXRlbXZpc2libGUge1xuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcblx0cGFkZGluZzogNXB4O1xuXHRmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxuXHRcdFwiTHVjaWRhIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDI1MCwgMjE1KTtcbn1cbiNzd2l0Y2hjb250YWluZXIxLFxuI3N3aXRjaGNvbnRhaW5lcjIsXG4jc3dpdGNoY29udGFpbmVyMyxcbiNzd2l0Y2hjb250YWluZXI0LFxuI3N3aXRjaGNvbnRhaW5lcjUsXG4jc3dpdGNoY29udGFpbmVyNixcbiNzd2l0Y2hjb250YWluZXI3LFxuI3N3aXRjaGNvbnRhaW5lcjgge1xuXHR3aWR0aDogNTAlO1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4jdmlzaWJsZXN3aXRjaDEgI3Zpc2libGVzd2l0Y2gyLFxuI3Zpc2libGVzd2l0Y2gzICN2aXNpYmxlc3dpdGNoNCxcbiN2aXNpYmxlc3dpdGNoNSAjdmlzaWJsZXN3aXRjaDYsXG4jdmlzaWJsZXN3aXRjaDcgI3Zpc2libGVzd2l0Y2g4IHtcblx0YW5pbWF0aW9uOiBmYWRlaW5mcm9tdG9wIDAuNXMgZm9yd2FyZHM7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuI3Zpc2libGUge1xuXHRhbmltYXRpb246IGZhZGVpbmZyb210b3AgMC41cyBmb3J3YXJkcztcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1mYW1pbHk6IFwiR2lsbCBTYW5zXCIsIFwiR2lsbCBTYW5zIE1UXCIsIENhbGlicmksIFwiVHJlYnVjaGV0IE1TXCIsIHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMXJlbTtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XG5cdGdhcDogMjBweDtcblx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XG5cdGhlaWdodDogNzAlO1xufVxuI2Ryb3Bkb3duY29udGFpbmVyOmhvdmVyIHtcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1mYW1pbHk6IFwiR2lsbCBTYW5zXCIsIFwiR2lsbCBTYW5zIE1UXCIsIENhbGlicmksIFwiVHJlYnVjaGV0IE1TXCIsIHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMXJlbTtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XG5cdGdhcDogMjBweDtcblx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG5cbnVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0Z2FwOiAxNHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxuXHRcdFwiTHVjaWRhIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Y29sb3I6IGJsYWNrO1xuXHRtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uaG92ZXJpbmcge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luLXRvcDogMjBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XG5cdGJvcmRlci1yYWRpdXM6IDI1JTtcblx0cGFkZGluZzogOHB4O1xuXG5cdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0M7RUFDQyxlQUFlO0NBQ2hCO0FBQ0Q7O0FBRUEsc0VBQXNFO0FBQ3RFO0NBQ0M7RUFDQyxlQUFlO0NBQ2hCO0FBQ0Q7O0FBRUE7Q0FDQzs7Ozs7RUFLQyx3QkFBd0I7Q0FDekI7Q0FDQTtFQUNDLDRCQUE0QjtDQUM3QjtDQUNBO0VBQ0MsNEJB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QkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLFNBQVM7Q0FDVCx1QkFBdUI7Q0FDdkIsV0FBVztBQUNaO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQiw2RUFBNkU7Q0FDN0UsZUFBZTtDQUNmLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsU0FBUztDQUNULHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixTQUFTO0NBQ1QsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQjtrQ0FDaUM7Q0FDakMsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQixZQUFZOztDQUVaLHVCQUF1QjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG5cXHRib2R5IHtcXG5cXHRcXHRmb250LXNpemU6IDE0cHg7XFxuXFx0fVxcbn1cXG5cXG4vKiBTdHlsZXMgZm9yIGRldmljZXMgd2l0aCBhIG1heCB3aWR0aCBvZiA0ODBweCAoZS5nLiwgc21hbGwgcGhvbmVzKSAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcblxcdGJvZHkge1xcblxcdFxcdGZvbnQtc2l6ZTogMTJweDtcXG5cXHR9XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlbGVmdCB7XFxuXFx0MCUsXFxuXFx0MjAlLFxcblxcdDUwJSxcXG5cXHQ4MCUsXFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcblxcdH1cXG5cXHQ0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzBweCk7XFxuXFx0fVxcblxcdDYwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNXB4KTtcXG5cXHR9XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlIHtcXG5cXHQwJSxcXG5cXHQyMCUsXFxuXFx0NTAlLFxcblxcdDgwJSxcXG5cXHQxMDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuXFx0fVxcblxcdDQwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcXG5cXHR9XFxuXFx0NjAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xcblxcdH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlaW5mcm9tdG9wIHtcXG5cXHQwJSB7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG5cXHR9XFxuXFx0MTAwJSB7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuXFx0fVxcbn1cXG5Aa2V5ZnJhbWVzIGJvdW5jZXJpZ2h0IHtcXG5cXHQwJSxcXG5cXHQyMCUsXFxuXFx0NTAlLFxcblxcdDgwJSxcXG5cXHQxMDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuXFx0fVxcblxcdDQwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xcblxcdH1cXG5cXHQ2MCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcXG5cXHR9XFxufVxcblxcbkBrZXlmcmFtZXMgb3BlbmZyb210b3Age1xcblxcdDAlIHtcXG5cXHRcXHRoZWlnaHQ6IDA7XFxuXFx0fVxcblxcblxcdDEwMCUge1xcblxcdFxcdGhlaWdodDogNzAlOyAvKiBBZGp1c3QgdGhlIGZpbmFsIGhlaWdodCBhcyBuZWVkZWQgKi9cXG5cXHR9XFxufVxcbkBrZXlmcmFtZXMgaXRlbW9wZW4ge1xcblxcdDAlIHtcXG5cXHRcXHRoZWlnaHQ6IDA7XFxuXFx0fVxcblxcblxcdDEwMCUge1xcblxcdFxcdGhlaWdodDogMTAwcHg7IC8qIEFkanVzdCB0aGUgZmluYWwgaGVpZ2h0IGFzIG5lZWRlZCAqL1xcblxcdH1cXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU2LCAxOTcsIDE3Nik7XFxufVxcblxcbiNwYWdlbGF5b3V0IHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luOiAwcHg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgODAlO1xcbn1cXG5cXG4jdG9wcmlnaHQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOiAxLzEvMi8yO1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdGFuO1xcblxcdGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcblxcdGNvbG9yOiBncmVlbjtcXG5cXHRmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcblxcdFxcdFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbiN0b3BsZWZ0IHtcXG5cXHRib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOiAxLzIvMi8zO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsXFxuXFx0XFx0XFxcIkx1Y2lkYSBTYW5zXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDQsIDY1LCA0KTtcXG5cXHRjb2xvcjogdGFuO1xcblxcdGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbiNib3R0b21sZWZ0IHtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOiAyLzIvMy8zO1xcbn1cXG5cXG4jYm90dG9tcmlnaHQge1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6IDIvMS8zLzI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogQ29sdW1uO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jbGVmdHJpZ2h0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGhlaWdodDogNjAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbiNsZWZ0YXJyb3cge1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvbGVmdF9hcnJvdy5wbmdcXFwiKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHdpZHRoOiAyMCU7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jcmlnaHRhcnJvdyB7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9yaWdodF9hcnJvdy5wbmdcXFwiKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHdpZHRoOiAyMCU7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jbGVmdDphY3RpdmUge1xcblxcdGFuaW1hdGlvbjogYm91bmNlbGVmdCAwLjVzO1xcbn1cXG5cXG4jcmlnaHQ6YWN0aXZlIHtcXG5cXHRhbmltYXRpb246IGJvdW5jZXJpZ2h0IDAuNXM7XFxufVxcbiNjYXJvdXNlbGNvbnRhaW5lciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdpZHRoOiA3MCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG5cXHRcXHRcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0bWFyZ2luOiAxMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGNvbG9yOiB0YW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRwZXJzcGVjdGl2ZTogMTIwMHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcblxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDAwbXM7XFxufVxcbi5mbGlwcGVkIHtcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXG59XFxuLmZyb250IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0Ym9yZGVyOiAycHggYmxhY2sgZ3Jvb3ZlO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0Zm9udC13ZWlnaHQ6IDgwMDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0YmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvcGFwZXIud2VicFxcXCIpO1xcbn1cXG5cXG4uYmFjayB7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9wYXBlci53ZWJwXFxcIik7XFxuXFxuXFx0ZGlzcGxheTogRmxleDtcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGJvcmRlcjogMnB4IGJsYWNrIGdyb292ZTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Zm9udC13ZWlnaHQ6IDgwMDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0YmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXG59XFxuI2Nhcm91c2VsZG90cyB7XFxuXFx0aGVpZ2h0OiAxcmVtO1xcblxcdHdpZHRoOiBhdXRvO1xcblxcdGdhcDogMTBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHBhZGRpbmc6IDhweDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJvcmRlcjogMnB4IGdyZWVuIHNvbGlkO1xcblxcdHRleHQtYWxpZ246IENlbnRlcjtcXG5cXHRib3JkZXI6IGdyb292ZSBibGFjayAxMHB4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNpcmNsZSB7XFxuXFx0aGVpZ2h0OiAxcmVtO1xcblxcdHdpZHRoOiAxcmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG4uY2lyY2xlOmhvdmVyIHtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxufVxcblxcbiNtZW51YnV0dG9uIHtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0Y29sb3I6IGdyZWVuO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRhbjtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG5cXHRcXHRcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuI2Ryb3Bkb3duY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc3dpdGNoY29udGFpbmVyIHtcXG5cXHRnYXA6IDEwcHg7XFxuXFx0bWFyZ2luOiA1cHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsXFxuXFx0XFx0XFxcIkx1Y2lkYSBTYW5zXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcbi5zd2l0Y2gge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsXFxuXFx0XFx0XFxcIkx1Y2lkYSBTYW5zXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdHdpZHRoOiA5MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFx0Y29sb3I6IHJnYigxMTYsIDE1NCwgMTE2KTtcXG5cXHRmb250LXdlaWdodDogODAwO1xcbn1cXG4uZHJvcGRvd25pdGVtIHtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG5cXHRcXHRcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyNTAsIDIxNSk7XFxufVxcbi5kcm9wZG93bml0ZW12aXNpYmxlIHtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG5cXHRcXHRcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyNTAsIDIxNSk7XFxufVxcbiNzd2l0Y2hjb250YWluZXIxLFxcbiNzd2l0Y2hjb250YWluZXIyLFxcbiNzd2l0Y2hjb250YWluZXIzLFxcbiNzd2l0Y2hjb250YWluZXI0LFxcbiNzd2l0Y2hjb250YWluZXI1LFxcbiNzd2l0Y2hjb250YWluZXI2LFxcbiNzd2l0Y2hjb250YWluZXI3LFxcbiNzd2l0Y2hjb250YWluZXI4IHtcXG5cXHR3aWR0aDogNTAlO1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiN2aXNpYmxlc3dpdGNoMSAjdmlzaWJsZXN3aXRjaDIsXFxuI3Zpc2libGVzd2l0Y2gzICN2aXNpYmxlc3dpdGNoNCxcXG4jdmlzaWJsZXN3aXRjaDUgI3Zpc2libGVzd2l0Y2g2LFxcbiN2aXNpYmxlc3dpdGNoNyAjdmlzaWJsZXN3aXRjaDgge1xcblxcdGFuaW1hdGlvbjogZmFkZWluZnJvbXRvcCAwLjVzIGZvcndhcmRzO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuI3Zpc2libGUge1xcblxcdGFuaW1hdGlvbjogZmFkZWluZnJvbXRvcCAwLjVzIGZvcndhcmRzO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiR2lsbCBTYW5zXFxcIiwgXFxcIkdpbGwgU2FucyBNVFxcXCIsIENhbGlicmksIFxcXCJUcmVidWNoZXQgTVNcXFwiLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcblxcdGdhcDogMjBweDtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG5cXHRoZWlnaHQ6IDcwJTtcXG59XFxuI2Ryb3Bkb3duY29udGFpbmVyOmhvdmVyIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LWZhbWlseTogXFxcIkdpbGwgU2Fuc1xcXCIsIFxcXCJHaWxsIFNhbnMgTVRcXFwiLCBDYWxpYnJpLCBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG5cXHRnYXA6IDIwcHg7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbnVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcblxcdGdhcDogMTRweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG5cXHRcXHRcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0bWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuLmhvdmVyaW5nIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdG1hcmdpbi10b3A6IDIwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjUlO1xcblxcdHBhZGRpbmc6IDhweDtcXG5cXG5cXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGRvRG90cyB9IGZyb20gXCIuL21vZHVsZXMvY2Fyb3VzZWxcIjtcbmltcG9ydCB7IGxlZnRBcnJvdyB9IGZyb20gXCIuL21vZHVsZXMvY2Fyb3VzZWxcIjtcbmltcG9ydCB7IG1vdmVDYXJvdXNlbCB9IGZyb20gXCIuL21vZHVsZXMvY2Fyb3VzZWxcIjtcbmltcG9ydCB7IHVuaXQxX3ZvY2FiIH0gZnJvbSBcIi4vbW9kdWxlcy91bml0c1wiO1xuaW1wb3J0IHsgdW5pdDJfdm9jYWIgfSBmcm9tIFwiLi9tb2R1bGVzL3VuaXRzXCI7XG5pbXBvcnQgeyB1bml0M192b2NhYiB9IGZyb20gXCIuL21vZHVsZXMvdW5pdHNcIjtcbmltcG9ydCB7IHVuaXQ0X3ZvY2FiIH0gZnJvbSBcIi4vbW9kdWxlcy91bml0c1wiO1xuaW1wb3J0IHsgdW5pdDVfdm9jYWIgfSBmcm9tIFwiLi9tb2R1bGVzL3VuaXRzXCI7XG5pbXBvcnQgeyB1bml0Nl92b2NhYiB9IGZyb20gXCIuL21vZHVsZXMvdW5pdHNcIjtcbmltcG9ydCB7IHVuaXQ3X3ZvY2FiIH0gZnJvbSBcIi4vbW9kdWxlcy91bml0c1wiO1xuaW1wb3J0IHsgdW5pdDhfdm9jYWIgfSBmcm9tIFwiLi9tb2R1bGVzL3VuaXRzXCI7XG5sZXQgY3VycmVudGNhcm91c2VsID0gXCJcIjtcbmxldCB1bml0ID0gXCJcIjtcbmxldCBrZXlzID0gXCJcIjtcbmxldCB2YWx1ZXMgPSBcIlwiO1xubGV0IGRvdHMgPSBcIlwiO1xuLy9kZWNsYXJlIHVuaXQgdmFyaWFibGVzXG5jb25zdCB1bml0MSA9IHVuaXQxX3ZvY2FiO1xuY29uc3QgdW5pdDIgPSB1bml0Ml92b2NhYjtcbmNvbnN0IHVuaXQzID0gdW5pdDNfdm9jYWI7XG5jb25zdCB1bml0NCA9IHVuaXQ0X3ZvY2FiO1xuY29uc3QgdW5pdDUgPSB1bml0NV92b2NhYjtcbmNvbnN0IHVuaXQ2ID0gdW5pdDZfdm9jYWI7XG5jb25zdCB1bml0NyA9IHVuaXQ3X3ZvY2FiO1xuY29uc3QgdW5pdDggPSB1bml0OF92b2NhYjtcblxuLy9HbG9iYWwgdmFyaWFibGVzIG9uIG1haW4gcGFnZVxuY29uc3QgbGVmdGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdGFycm93XCIpO1xuY29uc3QgcmlnaHRidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0YXJyb3dcIik7XG5sZXQgZnJvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyb250XCIpO1xubGV0IGJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tcIik7XG5cbmV4cG9ydCBsZXQgY291bnRlciA9IHtcblx0X251bWJlcjogMCwgLy8gSW50ZXJuYWwgdmFyaWFibGUgdG8gc3RvcmUgdGhlIHZhbHVlXG5cblx0Z2V0IG51bWJlcigpIHtcblx0XHRyZXR1cm4gdGhpcy5fbnVtYmVyO1xuXHR9LFxuXG5cdHNldCBudW1iZXIodmFsdWUpIHtcblx0XHR0aGlzLl9udW1iZXIgPSB2YWx1ZTtcblx0fSxcbn07XG5cbmxldCBjYXJvdXNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2Fyb3VzZWxjb250YWluZXJcIik7XG5sZXQgdGVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd25jb250YWluZXJcIik7XG5sZXQgc3dpdGNoMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoY29udGFpbmVyMVwiKTtcbmxldCBzd2l0Y2gyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd2l0Y2hjb250YWluZXIyXCIpO1xubGV0IHN3aXRjaDMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaGNvbnRhaW5lcjNcIik7XG5sZXQgc3dpdGNoNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoY29udGFpbmVyNFwiKTtcbmxldCBzd2l0Y2g1ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd2l0Y2hjb250YWluZXI1XCIpO1xubGV0IHN3aXRjaDYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaGNvbnRhaW5lcjZcIik7XG5sZXQgc3dpdGNoNyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoY29udGFpbmVyN1wiKTtcbmxldCBzd2l0Y2g4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd2l0Y2hjb250YWluZXI4XCIpO1xuXG4vLyBjYXVzZXMgY2FyZCB0byBmbGlwIG9uIGEgY2xpY2tcbmZyb250LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGxldCBjYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhcmRcIik7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZC5sZW5ndGg7IGkrKykge1xuXHRcdGNhcmRbaV0uY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG5cdH1cbn0pO1xuXG5iYWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGxldCBjYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhcmRcIik7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZC5sZW5ndGg7IGkrKykge1xuXHRcdGNhcmRbaV0uY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG5cdH1cbn0pO1xuXG4vL2xldHMgY2FyZCBmbGlwIG9uIGYgcHJlc3NcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0aWYgKGV2ZW50LmtleSA9PT0gXCJmXCIpIHtcblx0XHRsZXQgY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJkXCIpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y2FyZFtpXS5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcblx0XHR9XG5cdH1cbn0pO1xuLy9PbGQgc3R5bGUgb2Ygcm90YXRpbmcgY2FyZCBcInNtb290bHlcIlxuLy9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4vL2lmIChldmVudC5rZXkgPT09IFwiZlwiKSB7XG4vL1x0bGV0IGNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2FyZFwiKTtcbi8vZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkLmxlbmd0aDsgaSsrKSB7XG4vL1x0Y2FyZFtpXS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbi8vXHRjYXJkW2ldLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlWSgwZGVnKVwiO1xuLy99XG4vL31cbi8vfSk7XG5cbmxldCB0b3ByaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9wcmlnaHRcIik7XG5sZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudWJ1dHRvblwiKTtcbmxldCBpdGVtMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd24xXCIpO1xubGV0IGl0ZW0yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93bjJcIik7XG5sZXQgaXRlbTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duM1wiKTtcbmxldCBpdGVtNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd240XCIpO1xubGV0IGl0ZW01ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93bjVcIik7XG5sZXQgaXRlbTYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duNlwiKTtcbmxldCBpdGVtNyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd243XCIpO1xubGV0IGl0ZW04ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93bjhcIik7XG5cbi8vIHdvcmQgYW5kIGRlZmluaXRpb24gYnV0dG9uc1xubGV0IHdvcmQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JkMVwiKTtcbmxldCBkZWZpbml0aW9uMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmaW5pdGlvbjFcIik7XG5sZXQgd29yZDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmQyXCIpO1xubGV0IGRlZmluaXRpb24yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZpbml0aW9uMlwiKTtcbmxldCB3b3JkMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yZDNcIik7XG5sZXQgZGVmaW5pdGlvbjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmluaXRpb24zXCIpO1xubGV0IHdvcmQ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JkNFwiKTtcbmxldCBkZWZpbml0aW9uNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmaW5pdGlvbjRcIik7XG5sZXQgd29yZDUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmQ1XCIpO1xubGV0IGRlZmluaXRpb241ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZpbml0aW9uNVwiKTtcbmxldCB3b3JkNiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yZDZcIik7XG5sZXQgZGVmaW5pdGlvbjYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmluaXRpb242XCIpO1xubGV0IHdvcmQ3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JkN1wiKTtcbmxldCBkZWZpbml0aW9uNyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmaW5pdGlvbjdcIik7XG5sZXQgd29yZDggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmQ4XCIpO1xubGV0IGRlZmluaXRpb244ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZpbml0aW9uOFwiKTtcblxuLy9tYWtlIGRyb3Bkb3duIGNvbnRhbmllciB2aXNpYmxlXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuXHR0ZXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidmlzaWJsZVwiKTtcbn0pO1xubWVudS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG5cdHRlc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkcm9wZG93bmNvbnRhaW5lclwiKTtcbn0pO1xuXG4vL21ha2Ugc3dpY2ggZm9yIGVhY2ggdW5pdCB2aXNpYmxlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaXRlbTEuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG5cdHN3aXRjaDEuaWQgPSBcInZpc2libGVzd2l0Y2gxXCI7XG59KTtcbml0ZW0yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuXHRzd2l0Y2gyLmlkID0gXCJ2aXNpYmxlc3dpdGNoMlwiO1xufSk7XG5pdGVtMy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcblx0c3dpdGNoMy5pZCA9IFwidmlzaWJsZXN3aXRjaDNcIjtcbn0pO1xuaXRlbTQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG5cdHN3aXRjaDQuaWQgPSBcInZpc2libGVzd2l0Y2g0XCI7XG59KTtcbml0ZW01LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuXHRzd2l0Y2g1LmlkID0gXCJ2aXNpYmxlc3dpdGNoNVwiO1xufSk7XG5pdGVtNi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcblx0c3dpdGNoNi5pZCA9IFwidmlzaWJsZXN3aXRjaDZcIjtcbn0pO1xuaXRlbTcuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG5cdHN3aXRjaDcuaWQgPSBcInZpc2libGVzd2l0Y2g3XCI7XG59KTtcbml0ZW04LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuXHRzd2l0Y2g4LmlkID0gXCJ2aXNpYmxlc3dpdGNoOFwiO1xufSk7XG5cbi8vbWFrZSBzd2l0Y2ggZm9yIGVhY2ggdW5pdCBkaXNhcHBlYXItLS0tLS0tLS0tLS0tLS0tXG5pdGVtMS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG5cdGxldCBzd2l0Y2gxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aXNpYmxlc3dpdGNoMVwiKTtcblx0c3dpdGNoMS5pZCA9IFwic3dpdGNoY29udGFpbmVyMVwiO1xufSk7XG5pdGVtMi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG5cdGxldCBzd2l0Y2gyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aXNpYmxlc3dpdGNoMlwiKTtcblx0c3dpdGNoMi5pZCA9IFwic3dpdGNoY29udGFpbmVyMlwiO1xufSk7XG5pdGVtMy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG5cdGxldCBzd2l0Y2gzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aXNpYmxlc3dpdGNoM1wiKTtcblx0c3dpdGNoMy5pZCA9IFwic3dpdGNoY29udGFpbmVyM1wiO1xufSk7XG5pdGVtNC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG5cdGxldCBzd2l0Y2g0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aXNpYmxlc3dpdGNoNFwiKTtcblx0c3dpdGNoNC5pZCA9IFwic3dpdGNoY29udGFpbmVyNFwiO1xufSk7XG5pdGVtNS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG5cdGxldCBzd2l0Y2g1ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aXNpYmxlc3dpdGNoNVwiKTtcblx0c3dpdGNoNS5pZCA9IFwic3dpdGNoY29udGFpbmVyNVwiO1xufSk7XG5pdGVtNi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG5cdGxldCBzd2l0Y2g2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aXNpYmxlc3dpdGNoNlwiKTtcblx0c3dpdGNoNi5pZCA9IFwic3dpdGNoY29udGFpbmVyNlwiO1xufSk7XG5pdGVtNy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG5cdGxldCBzd2l0Y2g3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aXNpYmxlc3dpdGNoN1wiKTtcblx0c3dpdGNoNy5pZCA9IFwic3dpdGNoY29udGFpbmVyN1wiO1xufSk7XG5pdGVtOC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG5cdGxldCBzd2l0Y2g4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aXNpYmxlc3dpdGNoOFwiKTtcblx0c3dpdGNoOC5pZCA9IFwic3dpdGNoY29udGFpbmVyOFwiO1xufSk7XG5cbi8vZXZlbnQgbGlzdGVuZXIgZm9yIHNlbGVjdGlvbiBvZiBjaG9pY2Ugb24gdW5pdCAxXG53b3JkMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRjb25zdCBbbmV3a2V5cywgbmV3dmFsdWVzXSA9IG1vdmVDYXJvdXNlbCh1bml0MV92b2NhYiwgMCk7XG5cdGRvRG90cyhuZXdrZXlzLCBuZXd2YWx1ZXMpO1xuXHRrZXlzID0gbmV3a2V5cztcblx0dmFsdWVzID0gbmV3dmFsdWVzO1xuXHRjaGVja0RvdHMoKTtcblx0dG9wcmlnaHQuaW5uZXJIVE1MID0gXCJTY2llbnRpZmljIE1ldGhvZFwiO1xufSk7XG5cbmRlZmluaXRpb24xLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGNvbnN0IFtuZXdrZXlzLCBuZXd2YWx1ZXNdID0gbW92ZUNhcm91c2VsKHVuaXQxX3ZvY2FiLCAxKTtcblx0ZG9Eb3RzKG5ld2tleXMsIG5ld3ZhbHVlcyk7XG5cdGtleXMgPSBuZXdrZXlzO1xuXHR2YWx1ZXMgPSBuZXd2YWx1ZXM7XG5cdGNoZWNrRG90cygpO1xuXHR0b3ByaWdodC5pbm5lckhUTUwgPSBcIlNjaWVudGlmaWMgTWV0aG9kXCI7XG59KTtcbndvcmQyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGNvbnN0IFtuZXdrZXlzLCBuZXd2YWx1ZXNdID0gbW92ZUNhcm91c2VsKHVuaXQyX3ZvY2FiLCAwKTtcblx0ZG9Eb3RzKG5ld2tleXMsIG5ld3ZhbHVlcyk7XG5cdGtleXMgPSBuZXdrZXlzO1xuXHR2YWx1ZXMgPSBuZXd2YWx1ZXM7XG5cdGNoZWNrRG90cygpO1xuXHR0b3ByaWdodC5pbm5lckhUTUwgPSBcIkxpZmUgYW5kIENlbGxzXCI7XG59KTtcbmRlZmluaXRpb24yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGNvbnN0IFtuZXdrZXlzLCBuZXd2YWx1ZXNdID0gbW92ZUNhcm91c2VsKHVuaXQyX3ZvY2FiLCAxKTtcblx0ZG9Eb3RzKG5ld2tleXMsIG5ld3ZhbHVlcyk7XG5cdGtleXMgPSBuZXdrZXlzO1xuXHR2YWx1ZXMgPSBuZXd2YWx1ZXM7XG5cdGNoZWNrRG90cygpO1xuXHR0b3ByaWdodC5pbm5lckhUTUwgPSBcIkxpZmUgYW5kIENlbGxzXCI7XG59KTtcbndvcmQzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGNvbnN0IFtuZXdrZXlzLCBuZXd2YWx1ZXNdID0gbW92ZUNhcm91c2VsKHVuaXQzX3ZvY2FiLCAwKTtcblx0ZG9Eb3RzKG5ld2tleXMsIG5ld3ZhbHVlcyk7XG5cdGtleXMgPSBuZXdrZXlzO1xuXHR2YWx1ZXMgPSBuZXd2YWx1ZXM7XG5cdGNoZWNrRG90cygpO1xuXHR0b3ByaWdodC5pbm5lckhUTUwgPSBcIk51dHJpdGlvblwiO1xufSk7XG5kZWZpbml0aW9uMy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRjb25zdCBbbmV3a2V5cywgbmV3dmFsdWVzXSA9IG1vdmVDYXJvdXNlbCh1bml0M192b2NhYiwgMSk7XG5cdGRvRG90cyhuZXdrZXlzLCBuZXd2YWx1ZXMpO1xuXHRrZXlzID0gbmV3a2V5cztcblx0dmFsdWVzID0gbmV3dmFsdWVzO1xuXHRjaGVja0RvdHMoKTtcblx0dG9wcmlnaHQuaW5uZXJIVE1MID0gXCJOdXRyaXRpb25cIjtcbn0pO1xud29yZDQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0Y29uc3QgW25ld2tleXMsIG5ld3ZhbHVlc10gPSBtb3ZlQ2Fyb3VzZWwodW5pdDRfdm9jYWIsIDApO1xuXHRkb0RvdHMobmV3a2V5cywgbmV3dmFsdWVzKTtcblx0a2V5cyA9IG5ld2tleXM7XG5cdHZhbHVlcyA9IG5ld3ZhbHVlcztcblx0Y2hlY2tEb3RzKCk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiSG9tZW9zdGFzaXNcIjtcbn0pO1xuZGVmaW5pdGlvbjQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0Y29uc3QgW25ld2tleXMsIG5ld3ZhbHVlc10gPSBtb3ZlQ2Fyb3VzZWwodW5pdDRfdm9jYWIsIDEpO1xuXHRkb0RvdHMobmV3a2V5cywgbmV3dmFsdWVzKTtcblx0a2V5cyA9IG5ld2tleXM7XG5cdHZhbHVlcyA9IG5ld3ZhbHVlcztcblx0Y2hlY2tEb3RzKCk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiSG9tZW9zdGFzaXNcIjtcbn0pO1xud29yZDUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0Y29uc3QgW25ld2tleXMsIG5ld3ZhbHVlc10gPSBtb3ZlQ2Fyb3VzZWwodW5pdDVfdm9jYWIsIDApO1xuXHRkb0RvdHMobmV3a2V5cywgbmV3dmFsdWVzKTtcblx0a2V5cyA9IG5ld2tleXM7XG5cdHZhbHVlcyA9IG5ld3ZhbHVlcztcblx0Y2hlY2tEb3RzKCk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiUmVzcGlyYXRpb24vUGhvdG9zeW50aGVzaXNcIjtcbn0pO1xuZGVmaW5pdGlvbjUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0Y29uc3QgW25ld2tleXMsIG5ld3ZhbHVlc10gPSBtb3ZlQ2Fyb3VzZWwodW5pdDY1X3ZvY2FiLCAxKTtcblx0ZG9Eb3RzKG5ld2tleXMsIG5ld3ZhbHVlcyk7XG5cdGtleXMgPSBuZXdrZXlzO1xuXHR2YWx1ZXMgPSBuZXd2YWx1ZXM7XG5cdGNoZWNrRG90cygpO1xuXHR0b3ByaWdodC5pbm5lckhUTUwgPSBcIlJlc3BpcmF0aW9uL1Bob3Rvc3ludGhlc2lzXCI7XG59KTtcbndvcmQ2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGNvbnN0IFtuZXdrZXlzLCBuZXd2YWx1ZXNdID0gbW92ZUNhcm91c2VsKHVuaXQ2X3ZvY2FiLCAwKTtcblx0ZG9Eb3RzKG5ld2tleXMsIG5ld3ZhbHVlcyk7XG5cdGtleXMgPSBuZXdrZXlzO1xuXHR2YWx1ZXMgPSBuZXd2YWx1ZXM7XG5cdGNoZWNrRG90cygpO1xuXHR0b3ByaWdodC5pbm5lckhUTUwgPSBcIkdlbmV0aWNzXCI7XG59KTtcbmRlZmluaXRpb242LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGNvbnN0IFtuZXdrZXlzLCBuZXd2YWx1ZXNdID0gbW92ZUNhcm91c2VsKHVuaXQ2X3ZvY2FiLCAxKTtcblx0ZG9Eb3RzKG5ld2tleXMsIG5ld3ZhbHVlcyk7XG5cdGtleXMgPSBuZXdrZXlzO1xuXHR2YWx1ZXMgPSBuZXd2YWx1ZXM7XG5cdGNoZWNrRG90cygpO1xuXHR0b3ByaWdodC5pbm5lckhUTUwgPSBcIkdlbmV0aWNzXCI7XG59KTtcbndvcmQ3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGNvbnN0IFtuZXdrZXlzLCBuZXd2YWx1ZXNdID0gbW92ZUNhcm91c2VsKHVuaXQ3X3ZvY2FiLCAwKTtcblx0ZG9Eb3RzKG5ld2tleXMsIG5ld3ZhbHVlcyk7XG5cdGtleXMgPSBuZXdrZXlzO1xuXHR2YWx1ZXMgPSBuZXd2YWx1ZXM7XG5cdGNoZWNrRG90cygpO1xuXHR0b3ByaWdodC5pbm5lckhUTUwgPSBcIkV2b2x1dGlvblwiO1xufSk7XG5kZWZpbml0aW9uNy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRjb25zdCBbbmV3a2V5cywgbmV3dmFsdWVzXSA9IG1vdmVDYXJvdXNlbCh1bml0N192b2NhYiwgMSk7XG5cdGRvRG90cyhuZXdrZXlzLCBuZXd2YWx1ZXMpO1xuXHRrZXlzID0gbmV3a2V5cztcblx0dmFsdWVzID0gbmV3dmFsdWVzO1xuXHRjaGVja0RvdHMoKTtcblx0dG9wcmlnaHQuaW5uZXJIVE1MID0gXCJFdm9sdXRpb25cIjtcbn0pO1xud29yZDguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0Y29uc3QgW25ld2tleXMsIG5ld3ZhbHVlc10gPSBtb3ZlQ2Fyb3VzZWwodW5pdDhfdm9jYWIsIDApO1xuXHRkb0RvdHMobmV3a2V5cywgbmV3dmFsdWVzKTtcblx0a2V5cyA9IG5ld2tleXM7XG5cdHZhbHVlcyA9IG5ld3ZhbHVlcztcblx0Y2hlY2tEb3RzKCk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiRWNvbG9neVwiO1xufSk7XG5kZWZpbml0aW9uOC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRjb25zdCBbbmV3a2V5cywgbmV3dmFsdWVzXSA9IG1vdmVDYXJvdXNlbCh1bml0OF92b2NhYiwgMSk7XG5cdGRvRG90cyhuZXdrZXlzLCBuZXd2YWx1ZXMpO1xuXHRrZXlzID0gbmV3a2V5cztcblx0dmFsdWVzID0gbmV3dmFsdWVzO1xuXHRjaGVja0RvdHMoKTtcblx0dG9wcmlnaHQuaW5uZXJIVE1MID0gXCJFY29sb2d5XCI7XG59KTtcblxuLy9hZGRzIHRoZSBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGxlZnQgYW5kIHJpZ2h0IGFycm93XG5sZWZ0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdHRlc3RSdW4oa2V5cywgdmFsdWVzKTtcblx0Y29uc29sZS5sb2coY291bnRlcik7XG59KTtcblxucmlnaHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0cmlnaHRSdW4oa2V5cywgdmFsdWVzKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0aWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd0xlZnRcIikgdGVzdFJ1bihrZXlzLCB2YWx1ZXMpO1xufSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0aWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHJpZ2h0UnVuKGtleXMsIHZhbHVlcyk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdGlmIChldmVudC5rZXkgPT09IFwiIFwiKSB7XG5cdFx0bGV0IHRlbXAgPSBmcm9udC5pbm5lckhUTUw7XG5cdFx0ZnJvbnQuaW5uZXJIVE1MID0gYmFjay5pbm5lckhUTUw7XG5cdFx0YmFjay5pbm5lckhUTUwgPSB0ZW1wO1xuXHR9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XG5cdFx0bWFrZVJhbmRvbSgpO1xuXHRcdGNoZWNrRG90cygpO1xuXHR9XG59KTtcblxuZnVuY3Rpb24gbWFrZVJhbmRvbSgpIHtcblx0Y29uc29sZS5sb2coa2V5cy5sZW5ndGgpO1xuXHRjb3VudGVyLm51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGtleXMubGVuZ3RoKTtcblx0ZnJvbnQuaW5uZXJIVE1MID0ga2V5c1tjb3VudGVyLm51bWJlcl07XG5cdGJhY2suaW5uZXJIVE1MID0gdmFsdWVzW2NvdW50ZXIubnVtYmVyXTtcbn1cblxuZnVuY3Rpb24gdGVzdFJ1bih0aGVrZXlzLCB0aGV2YWx1ZXMpIHtcblx0aWYgKGNvdW50ZXIubnVtYmVyID09IDApIHtcblx0XHRjb3VudGVyLm51bWJlciA9IHRoZWtleXMubGVuZ3RoIC0gMTtcblx0fSBlbHNlIHtcblx0XHRjb3VudGVyLm51bWJlciA9IGNvdW50ZXIubnVtYmVyIC0gMTtcblx0fVxuXHRmcm9udC5pbm5lckhUTUwgPSB0aGVrZXlzW2NvdW50ZXIubnVtYmVyXTtcblx0YmFjay5pbm5lckhUTUwgPSB0aGV2YWx1ZXNbY291bnRlci5udW1iZXJdO1xuXHRpZiAoZnJvbnQuaW5uZXJIVE1MID09IFwidW5kZWZpbmVkXCIgfHwgYmFjay5pbm5lckhUTUwgPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdGZyb250LmlubmVySFRNTCA9IFwic2VsZWN0IGEgdW5pdCFcIjtcblx0XHRiYWNrLmlubmVySFRNTCA9IFwic2VsZWN0IGEgdW5pdCFcIjtcblx0fVxuXHRjaGVja0RvdHMoKTtcbn1cblxuZnVuY3Rpb24gcmlnaHRSdW4odGhla2V5cywgdGhldmFsdWVzKSB7XG5cdC8vbmVlZHMgdG8gdGFrZSB0aGUgb3V0cHV0IG9mIHRoZSBjYXJvdXNlbCBjb250YWluZXIgdG8gdGhlbiB1c2Vcblx0aWYgKGNvdW50ZXIubnVtYmVyID09IGtleXMubGVuZ3RoIC0gMSkge1xuXHRcdGNvdW50ZXIubnVtYmVyID0gMDtcblx0fSBlbHNlIHtcblx0XHRjb3VudGVyLm51bWJlciA9IGNvdW50ZXIubnVtYmVyICsgMTtcblx0fVxuXHRmcm9udC5pbm5lckhUTUwgPSB0aGVrZXlzW2NvdW50ZXIubnVtYmVyXTtcblx0YmFjay5pbm5lckhUTUwgPSB0aGV2YWx1ZXNbY291bnRlci5udW1iZXJdO1xuXHRpZiAoZnJvbnQuaW5uZXJIVE1MID09IFwidW5kZWZpbmVkXCIgfHwgYmFjay5pbm5lckhUTUwgPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdGZyb250LmlubmVySFRNTCA9IFwic2VsZWN0IGEgdW5pdCFcIjtcblx0XHRiYWNrLmlubmVySFRNTCA9IFwic2VsZWN0IGEgdW5pdCFcIjtcblx0fVxuXG5cdGNoZWNrRG90cygpO1xufVxuLy9yZXNldHMgYWxsIGRvdHMgdG8gZ3JheSwgdGhlbiBjaGVja3MgdGhlIGNvdW50ZXIgbnVtYmVyLCBhbmQgbWFrZXMgdGhlIGRvdCB3aXRoIHRoYXQgY291bnRlciBJRCByZWRcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0RvdHMoKSB7XG5cdGRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2lyY2xlXCIpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRkb3RzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JheVwiO1xuXG5cdFx0aWYgKGNvdW50ZXIubnVtYmVyID09IGkpIHtcblx0XHRcdHZhciB0aGlzZG90ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb3RzXCIgKyBpKTtcblx0XHRcdHRoaXNkb3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibGFja1wiO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHsgY2hlY2tEb3RzIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBjb3VudGVyIH0gZnJvbSBcIi4uXCI7XG5leHBvcnQgZnVuY3Rpb24gbW92ZUNhcm91c2VsKHVuaXQsIGNob2ljZSkge1xuXHRsZXQgY2Fyb3VzZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcm91c2VsY29udGFpbmVyXCIpO1xuXHRsZXQgZnJvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyb250XCIpO1xuXHRsZXQgYmFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja1wiKTtcblxuXHRjYXJvdXNlbGRvdHMuaW5uZXJIVE1MID0gXCJcIjtcblx0Y291bnRlci5udW1iZXIgPSAwO1xuXHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKHVuaXQpO1xuXHR2YXIgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyh1bml0KTtcblx0aWYgKGNob2ljZSA9PSAxKSB7XG5cdFx0bGV0IHRlbXAgPSBrZXlzO1xuXHRcdGtleXMgPSB2YWx1ZXM7XG5cdFx0dmFsdWVzID0gdGVtcDtcblx0fVxuXHRmcm9udC5pbm5lckhUTUwgPSBrZXlzW2NvdW50ZXIubnVtYmVyXTtcblx0YmFjay5pbm5lckhUTUwgPSB2YWx1ZXNbY291bnRlci5udW1iZXJdO1xuXHQvL2NyZWF0ZXMgZG90cyBmb3IgY2Fyb3VzZWwgYW5kIGFkZHMgdGhlbSB0byB0aGUgcGFnZVxuXG5cdHJldHVybiBba2V5cywgdmFsdWVzXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvRG90cyh0aGVrZXlzLCB0aGV2YWx1ZXMpIHtcblx0Ly9jcmVhdGVzIHRoZSBEb3RzIGFuZCBhcHBlbmRzIHRoZW0gdG8gdGhlIHBhZ2Vcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGVrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0ZG90LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2lyY2xlXCIpO1xuXHRcdGRvdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRvdHNcIiArIGkpO1xuXHRcdGNhcm91c2VsZG90cy5hcHBlbmQoZG90KTtcblx0fVxuXG5cdGxldCBkb3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNpcmNsZVwiKTtcblx0Ly9mdW5jdGlvbiB0byBtYWtlIGRvdCBjbGljayBhbmQgc2hvd2Nhc2UgdGhlIGNvcnJlc3BvbmRpbmcgY2FyZCBieSB1cGRhdGluZyB0aGUgY291bnRlciB2YWx1ZVxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGRvdHMubGVuZ3RoOyBpKyspIHtcblx0XHRkb3RzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRjb3VudGVyLm51bWJlciA9IGk7XG5cdFx0XHRmcm9udC5pbm5lckhUTUwgPSB0aGVrZXlzW2NvdW50ZXIubnVtYmVyXTtcblx0XHRcdGJhY2suaW5uZXJIVE1MID0gdGhldmFsdWVzW2NvdW50ZXIubnVtYmVyXTtcblx0XHRcdGNoZWNrRG90cygpO1xuXHRcdH0pO1xuXHRcdGRvdHNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG5cdFx0XHR0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KHNob3dQb3B1cCwgMTAwMCk7XG5cdFx0fSk7XG5cdFx0ZG90c1tpXS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGltZW91dElkKTtcblxuXHRcdFx0ZG90c1tpXS5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdH0pO1xuXG5cdFx0ZnVuY3Rpb24gc2hvd1BvcHVwKCkge1xuXHRcdFx0bGV0IGhvdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGhvdmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaG92ZXJpbmdcIik7XG5cdFx0XHRob3Zlci5pbm5lckhUTUwgPSB0aGVrZXlzW2ldO1xuXHRcdFx0ZG90c1tpXS5hcHBlbmQoaG92ZXIpO1xuXHRcdH1cblx0XHRsZXQgdGltZW91dElkO1xuXHRcdC8vdGhpcyBjaGVja3MgdGhlIGNvbG9ycyBhbmQgY2hhbmdlcyB0aGVtIHNvIHRoYXQgb25seSB0aGUgY291bnRlciBpcyBkYXJrXG5cdH1cblxuXHQvL3Jlc2V0cyBhbGwgZG90cyB0byBncmF5LCB0aGVuIGNoZWNrcyB0aGUgY291bnRlciBudW1iZXIsIGFuZCBtYWtlcyB0aGUgZG90IHdpdGggdGhhdCBjb3VudGVyIElEIHJlZFxufVxuIiwiZXhwb3J0IGxldCB1bml0MV92b2NhYiA9IHtcblx0T2JzZXJ2YXRpb246XG5cdFx0XCJ0aGUgYWN0IG9mIG5vdGljaW5nIGFuZCBkZXNjcmliaW5nIHByb2Nlc3NlcyBpbiBhIGNhcmVmdWwsIG9yZGVybHkgd2F5XCIsXG5cdGluZmVyZW5jZTogXCJhIGxvZ2ljYWwgaW50ZXJwcmV0YXRpb24gYmFzZWQgb24gd2hhdCBzY2llbnRpc3RzIGFscmVhZHkga25vd1wiLFxuXHRoeXBvdGhlc2lzOlxuXHRcdFwiYSBzY2llbnRpZmljIGV4cGxhbmF0aW9uIGZvciBhIHNldCBvZiBvYnNlcnZhdGlvbnMgdGhhdCBjYW4gYmUgdGVzdGVkIGluIHdheXMgdGhhdCBzdXBwb3J0LCBvciByZWplY3QgaXRcIixcblx0XCJDb250cm9sbGVkIEV4cGVyaWVtZW50XCI6XG5cdFx0XCJhbiBleHBlcmltZW50IGluIHdoaWNoIG9ubHkgb25lIHZhcmlhYmxlIGlzIGNoYW5nZWQuICBBbGwgb3RoZXIgdmFyaWFibGVzIHNob3VsZCBiZSBjb250cm9sbGVkIGZvciwgb3Iga2VwdCBjb25zdGFudCBcIixcblx0XCJJbmRlcGVuZGVudCBWYXJpYWJsZVwiOlxuXHRcdFwiIEFsc28ga25vd24gYXMgdGhlIGV4cGVyaW1lbnRhbCwgb3IgbWFuaXB1bGF0ZWQgdmFyaWFibGUuICBUaGUgdmFyaWFibGUgdGhhdCBpcyBkZWxpYmVyYXRleSBjaGFuZ2VkXCIsXG5cdFwiRGVwZW5kZW50IFZhcmlhYmxlXCI6XG5cdFx0XCJBbHNvIGtub3duIGFzIHRoZSBtZWFzdXJlZCwgb3IgcmVzcG9uZGluZyB2YXJpYWJsZS4gIFRoZSB2YXJpYWJsZSB0aGF0IGlzIG9ic2VydmVkIGFuZCBjaGFuZ2VzIGluIHJlc3BvbnNlIHRvIHRoZSBpbmRlcGVuZGVudCB2YXJpYWJsZVwiLFxuXHRcIkNvbnRyb2wgR3JvdXBcIjpcblx0XHRcIlRoZSBncm91cCB0aGF0IGRvZXMgbm90IHJlY2VpdmUgYW55IGNoYW5nZS4gIElzIHVzZWQgYXMgYSBiYXNlbGluZSBvZiBjb21wYXJpc29uXCIsXG5cdFwiRXhwZXJpbWVudGFsIEdyb3VwXCI6XG5cdFx0XCJUaGUgZ3JvdXAocykgaW4gd2hpY2ggdGhlIEluZGVwZW5kZW50IHZhcmlhYmxlIGlzIGNoYW5nZWQgZm9yIHRoZSBwdXJwb3NlIG9mIG9ic2VydmluZyBkaWZmZXJlbmNlcy4gIFRoZXJlIGNhbiBiZSBtdWx0aXBsZSBleHBlcmltZW50YWwgZ3JvdXBzXCIsXG5cdFwiUGVlciBSZXZpZXdcIjpcblx0XHRcIiBBIHJldmlldyBwcm9jZXNzIGluIHdoaWNoIG90aGVyIGV4cGVydHMgaW4gdGhlIGZpZWxkIHJldmlldyB3b3JrIHRvIGRldGVybWluZSBhbnkgZXJyb3JzIG9yIGZsYXdzIGluIGFuIGV4cGVyaW1lbnRcIixcblx0VGhlb3J5OiBcIkEgd2VsbC10ZXN0ZWQgZXhwbGFuYXRpb24gYmFja2VkIGJ5IGV2aWRlbmNlXCIsXG5cdEJpYXM6IFwiYSBwYXJ0aWN1bGFyIHByZWZlcmVuY2Ugb3IgcG9pbnQgb2YgdmlldyB0aGF0IGlzIHBlcnNvbmFsLiAgU29tZXRpbWVzIHRoZXNlIGNhbiBiZSBpbmdyYWluZWQgYmFzZWQgb24gbGlmZSBleHBlcmllbmNlc1wiLFxuXHRcIndvcmQgMTJcIjogXCJEZWZpbml0aW9uIDEyXCIsXG5cdFwid29yZCAxM1wiOiBcIkRlZmludGlvbiAxM1wiLFxuXHRcIndvcmQgMTRcIjogXCJkZWZpbml0aW9uIDE0XCIsXG5cdFwid29yZCAxNVwiOiBcImRlZmluaXRpb24gMTVcIixcblx0XCJ3b3JkIDE2XCI6IFwiRGVmaW5pdGlvbiAxNlwiLFxuXHRcIndvcmQgMTdcIjogXCJEZWZpbnRpb24gMTdcIixcblx0XCJ3b3JkIDE4XCI6IFwiZGVmaW5pdGlvbiAxOFwiLFxuXHRcIndvcmQgMTlcIjogXCJkZWZpbml0aW9uIDE5XCIsXG5cdFwid29yZCAyMFwiOiBcIkRlZmluaXRpb24gMjBcIixcbn07XG5cbmV4cG9ydCBsZXQgdW5pdDJfdm9jYWIgPSB7XG5cdENlbGw6IFwiYmFzaWMgdW5pdCBvZiBsaWZlXCIsXG5cdFwiQ2VsbCB0aGVvcnlcIjpcblx0XHRcIkFsbCBsaXZpbmcgdGhpbmdzIGFyZSBtYWRlIG9mIGNlbGxzLCBjZWxscyBjb21lIGZyb20gb3RoZXIgY2VsbHNcIixcblx0XCJDZWxsIG1lbWJyYW5lIChQbGFzbWEgbWVtYnJhbmUpXCI6XG5cdFx0XCJBIHRoaW4gZmxleGlibGUgbGF5ZXIgb24gdGhlIG91dHNpZGUgb2YgY2VsbCBtYWRlIHVwIG9mIHBob3NwaG9saXBpZCBiaWxheWVyKHR3byBsYXllcnMgb2YgZmF0cylcIixcblx0TnVjbGV1czpcblx0XHRcImxhcmdlIG1lbWJyYW5lIGVuY2xvc2VkIHN0cnVjdHVyZSB0aGF0IGNvbnRhaW5zIHRoZSBnZW5ldGljIG1hdGVyaWFsKEROQSkgb2YgZXVrYXJ5b3RpYyBjZWxscy4gIERpcmVjdHMgbWFueSBjZWxsIGFjdGl2aXRlcywgb25seSBmb3VuZCBpbiBFdWthcnlvdGljIGNlbGxzXCIsXG5cdFwiRXVrYXJ5b3RpYyBDZWxsXCI6XG5cdFx0XCJjZWxscyB0aGF0IGhhdmUgbWVtYnJhbmUgYm91bmQgb3JnYW5lbGxlcyAoc3RydWN0dXJlcyBlbmNsb3NlZCBpbiBhIHByb3RlY3RpdmUgbGF5ZXIgdGhhdCBzZXBhcmF0ZSB0aGVtIGZyb20gdGhlIHJlc3Qgb2YgdGhlIGNlbGwpXCIsXG5cdFwiUHJva2FyeW90aWMgQ2VsbFwiOiAnYSBcInNpbXBsZVwiIGNlbGwgd2l0aCBubyBvcmdhbmVsbGVzJyxcblx0Q3l0b3BsYXNtOiBcInRoZSBsaXF1aWQgaW5zaWRlIG9mIGEgY2VsbFwiLFxuXHRPcmdhbmVsbGVzOlxuXHRcdCdcImxpdHRsZSBvcmdhbnNcIiBpbnNpZGUgb2YgdGhlIGNlbGwgdGhhdCBjYXJyeSBvdXQgc3BlY2lhbGl6ZWQgZnVuY3Rpb25zJyxcblx0VmFjdW9sZXM6XG5cdFx0XCJvcmdhbmxsZSB0aGF0IGlzIHVzZWQgZm9yIHN0b3JhZ2Ugb2Ygd2F0ZXIsIHByb3RlaW5zLCBjYXJib2h5ZHJhdGVzLCBldGNcIixcblx0THlzb3NvbWVzOlxuXHRcdFwib3JnYW5lbGxlcyB0aGF0IGFyZSBmaWxsZWQgd2l0aCBlbnp5bWVzIHRvIGhlbHAgYnJlYWsgZG93biBtYXRlcmlhbHMsIGluY2x1ZGluZyBvdGhlciBvcmdhbmxsZXNcIixcblx0Q3l0b3NrZWxldG9uOlxuXHRcdFwibmV0d29yayBvZiBmaWxhbWVudHMgdGhhdCBoZWxwIGdpdmUgdGhlIGNlbGwgc3RydWN0dXJlIChJbmNsdWRlcyBtaWNyb2ZpbGFtZW50cyBhbmQgbWljcm90dWJ1bGVzKVwiLFxuXHRDZW50cmlvbGVzOlxuXHRcdFwic21hbGwgc3RydWN0dXJlcyBsb2NhdGVkIG5lYXIgdGhlIG51Y2xldXMgdGhhdCBoZWxwIG9yZ2FuaXplIGNlbGwgZGl2aXNpb25cIixcblx0Umlib3NvbWVzOiBcInN0cnVjdHVyZXMgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHByb3RlaW5zIG91dCBvZiBhbWlubyBhY2lkc1wiLFxuXHRcIkVuZHBvcGxhc21pYyBSZWN0aWN1bHVtXCI6XG5cdFx0XCJhc3NlbWJsZXMgbGlwaWRzKGZhdHMpLCBwcm90ZWlucywgYW5kIG90aGVyIG1hdGVyaWFscyB0aGF0IGFyZSBleHBvcnRlZCBmcm9tIHRoZSBjZWxsXCIsXG5cdFwiR29sZ2kgQXBwYXJhdHVzXCI6XG5cdFx0XCJNb2RpZmllcywgc29ydHMgYW5kIHBhY2thZ2VzIHByb3RlaW5zIGFuZCBvdGhlciBtYXRlcmlhbHMgZnJvbSB0aGUgZW5kb3BsYXNtaWMgcmV0aWN1bHVtIGZvciBzdG9yYWdlIGluIHRoZSBjZWxsIG9yIHJlbGVhc2Ugb3V0c2lkZSB0aGUgY2VsbFwiLFxuXHRNaXRvY2hvbmRyaWE6XG5cdFx0XCJTaXRlIG9mIGNlbGx1bGFyIHJlc3BpcmF0aW9uIHdoZXJlIG94eWdlbiBhbmQgc3VnYXIgYXJlIGNvbnZlcnRlZCBpbnRvIGNlbGx1bGFyIGVuZXJneSBpbiB0aGUgZm9ybSBvZiBBVFBcIixcblx0Q2hsb3JvcGxhc3RzOlxuXHRcdFwiQ2FwdHVyZSB0aGUgZW5lcmd5IG9mIHN1bmxpZ2h0IGFuZCBjb252ZXJ0IGl0IGFsb25nIHdpdGggQ2FyYm9uIERpb3hpZGUgaW50byBzdWdhciAoZ2x1Y29zZSkgYW5kIG94eWdlblwiLFxuXHRcIkNlbGwgd2FsbFwiOlxuXHRcdFwiUmlnaWQgc3RydWN0dXJlIGZvdW5kIGluIHNvbWUgY2VsbHMgb24gdGhlIG91dHNpZGUgb2YgdGhlIGNlbGwgbWVtYnJhbmUgdGhhdCBwcm92aWRlcyBzdXBwb3J0IGFuZCBwcm90ZWN0aW9uXCIsXG5cdFwiU2VsZWN0aXZlbHkoU2VtaSkgUGVybWVhYmxlXCI6XG5cdFx0XCJBIG1lbWJyYW5lKGNvdmVyaW5nKSB0aGF0IGFsbG93cyBzb21lIHN1YnN0YW5jZXMgdG8gY3Jvc3MsIGJ1dCBub3Qgb3RoZXJzLiAgSW4gdGhlIGNhc2Ugb2YgdGhlIGNlbGwgbWVtYnJhbmUgaXQgaXMgYmFzZWQgb24gc2l6ZVwiLFxufTtcblxuZXhwb3J0IGxldCB1bml0M192b2NhYiA9IHtcblx0XCJ1bml0IDMgd29yZFwiOlxuXHRcdFwiRGVmaW5pdGlvbiAxIHRoaXMgaXMgYSB0ZXN0IHRvIHNlZSBob3cgbWFraW5nIHRoZSBkZWZpbml0aW9uIGJpZ2dlciBhZmZlY3RzIHRoZSBkaXYgc2l6ZVwiLFxuXHRcIndvcmQgMlwiOiBcIkRFRklOSVRJT04gMlwiLFxuXHRcIndvcmQgM1wiOiBcIkRFRklOSVRJT04gM1wiLFxuXHRcIndvcmQgNFwiOiBcIkRFRklOSVRJT04gNFwiLFxuXHRcIndvcmQgNVwiOiBcIkRlZmluaXRpb24gNVwiLFxuXHRcIldvcmQgNlwiOiBcImRlZmluaXRpb24gNlwiLFxuXHRcIndvcmQgN1wiOiBcImRlZmluaXRpb24gN1wiLFxuXHRcIndvcmQgOFwiOiBcImRlZmludGlvbiA4XCIsXG5cdFwid29yZCA5XCI6IFwiZGVmaW5pdGlvbiA5XCIsXG5cdFwid29yZCAxMFwiOiBcImRlZmluaXRpb24gMTBcIixcblx0XCJ3b3JkIDExXCI6IFwiZGVmaW5pdGlvbiAxMVwiLFxuXHRcIndvcmQgMTJcIjogXCJEZWZpbml0aW9uIDEyXCIsXG5cdFwid29yZCAxM1wiOiBcIkRlZmludGlvbiAxM1wiLFxuXHRcIndvcmQgMTRcIjogXCJkZWZpbml0aW9uIDE0XCIsXG5cdFwid29yZCAxNVwiOiBcImRlZmluaXRpb24gMTVcIixcblx0XCJ3b3JkIDE2XCI6IFwiRGVmaW5pdGlvbiAxNlwiLFxuXHRcIndvcmQgMTdcIjogXCJEZWZpbnRpb24gMTdcIixcblx0XCJ3b3JkIDE4XCI6IFwiZGVmaW5pdGlvbiAxOFwiLFxuXHRcIndvcmQgMTlcIjogXCJkZWZpbml0aW9uIDE5XCIsXG5cdFwid29yZCAyMFwiOiBcIkRlZmluaXRpb24gMjBcIixcbn07XG5cbmV4cG9ydCBsZXQgdW5pdDRfdm9jYWIgPSB7XG5cdFwidW5pdCA0IHdvcmRcIjpcblx0XHRcIkRlZmluaXRpb24gMSB0aGlzIGlzIGEgdGVzdCB0byBzZWUgaG93IG1ha2luZyB0aGUgZGVmaW5pdGlvbiBiaWdnZXIgYWZmZWN0cyB0aGUgZGl2IHNpemVcIixcblx0XCJ3b3JkIDJcIjogXCJERUZJTklUSU9OIDJcIixcblx0XCJ3b3JkIDNcIjogXCJERUZJTklUSU9OIDNcIixcblx0XCJ3b3JkIDRcIjogXCJERUZJTklUSU9OIDRcIixcblx0XCJ3b3JkIDVcIjogXCJEZWZpbml0aW9uIDVcIixcblx0XCJXb3JkIDZcIjogXCJkZWZpbml0aW9uIDZcIixcblx0XCJ3b3JkIDdcIjogXCJkZWZpbml0aW9uIDdcIixcblx0XCJ3b3JkIDhcIjogXCJkZWZpbnRpb24gOFwiLFxuXHRcIndvcmQgOVwiOiBcImRlZmluaXRpb24gOVwiLFxuXHRcIndvcmQgMTBcIjogXCJkZWZpbml0aW9uIDEwXCIsXG5cdFwid29yZCAxMVwiOiBcImRlZmluaXRpb24gMTFcIixcblx0XCJ3b3JkIDEyXCI6IFwiRGVmaW5pdGlvbiAxMlwiLFxuXHRcIndvcmQgMTNcIjogXCJEZWZpbnRpb24gMTNcIixcblx0XCJ3b3JkIDE0XCI6IFwiZGVmaW5pdGlvbiAxNFwiLFxuXHRcIndvcmQgMTVcIjogXCJkZWZpbml0aW9uIDE1XCIsXG5cdFwid29yZCAxNlwiOiBcIkRlZmluaXRpb24gMTZcIixcblx0XCJ3b3JkIDE3XCI6IFwiRGVmaW50aW9uIDE3XCIsXG5cdFwid29yZCAxOFwiOiBcImRlZmluaXRpb24gMThcIixcblx0XCJ3b3JkIDE5XCI6IFwiZGVmaW5pdGlvbiAxOVwiLFxuXHRcIndvcmQgMjBcIjogXCJEZWZpbml0aW9uIDIwXCIsXG59O1xuXG5leHBvcnQgbGV0IHVuaXQ1X3ZvY2FiID0ge1xuXHRcInVuaXQgNSB3b3JkXCI6XG5cdFx0XCJEZWZpbml0aW9uIDEgdGhpcyBpcyBhIHRlc3QgdG8gc2VlIGhvdyBtYWtpbmcgdGhlIGRlZmluaXRpb24gYmlnZ2VyIGFmZmVjdHMgdGhlIGRpdiBzaXplXCIsXG5cdFwid29yZCAyXCI6IFwiREVGSU5JVElPTiAyXCIsXG5cdFwid29yZCAzXCI6IFwiREVGSU5JVElPTiAzXCIsXG5cdFwid29yZCA0XCI6IFwiREVGSU5JVElPTiA0XCIsXG5cdFwid29yZCA1XCI6IFwiRGVmaW5pdGlvbiA1XCIsXG5cdFwiV29yZCA2XCI6IFwiZGVmaW5pdGlvbiA2XCIsXG5cdFwid29yZCA3XCI6IFwiZGVmaW5pdGlvbiA3XCIsXG5cdFwid29yZCA4XCI6IFwiZGVmaW50aW9uIDhcIixcblx0XCJ3b3JkIDlcIjogXCJkZWZpbml0aW9uIDlcIixcblx0XCJ3b3JkIDEwXCI6IFwiZGVmaW5pdGlvbiAxMFwiLFxuXHRcIndvcmQgMTFcIjogXCJkZWZpbml0aW9uIDExXCIsXG5cdFwid29yZCAxMlwiOiBcIkRlZmluaXRpb24gMTJcIixcblx0XCJ3b3JkIDEzXCI6IFwiRGVmaW50aW9uIDEzXCIsXG5cdFwid29yZCAxNFwiOiBcImRlZmluaXRpb24gMTRcIixcblx0XCJ3b3JkIDE1XCI6IFwiZGVmaW5pdGlvbiAxNVwiLFxuXHRcIndvcmQgMTZcIjogXCJEZWZpbml0aW9uIDE2XCIsXG5cdFwid29yZCAxN1wiOiBcIkRlZmludGlvbiAxN1wiLFxuXHRcIndvcmQgMThcIjogXCJkZWZpbml0aW9uIDE4XCIsXG5cdFwid29yZCAxOVwiOiBcImRlZmluaXRpb24gMTlcIixcblx0XCJ3b3JkIDIwXCI6IFwiRGVmaW5pdGlvbiAyMFwiLFxufTtcblxuZXhwb3J0IGxldCB1bml0Nl92b2NhYiA9IHtcblx0XCJ1bml0IDYgd29yZFwiOlxuXHRcdFwiRGVmaW5pdGlvbiAxIHRoaXMgaXMgYSB0ZXN0IHRvIHNlZSBob3cgbWFraW5nIHRoZSBkZWZpbml0aW9uIGJpZ2dlciBhZmZlY3RzIHRoZSBkaXYgc2l6ZVwiLFxuXHRcIndvcmQgMlwiOiBcIkRFRklOSVRJT04gMlwiLFxuXHRcIndvcmQgM1wiOiBcIkRFRklOSVRJT04gM1wiLFxuXHRcIndvcmQgNFwiOiBcIkRFRklOSVRJT04gNFwiLFxuXHRcIndvcmQgNVwiOiBcIkRlZmluaXRpb24gNVwiLFxuXHRcIldvcmQgNlwiOiBcImRlZmluaXRpb24gNlwiLFxuXHRcIndvcmQgN1wiOiBcImRlZmluaXRpb24gN1wiLFxuXHRcIndvcmQgOFwiOiBcImRlZmludGlvbiA4XCIsXG5cdFwid29yZCA5XCI6IFwiZGVmaW5pdGlvbiA5XCIsXG5cdFwid29yZCAxMFwiOiBcImRlZmluaXRpb24gMTBcIixcblx0XCJ3b3JkIDExXCI6IFwiZGVmaW5pdGlvbiAxMVwiLFxuXHRcIndvcmQgMTJcIjogXCJEZWZpbml0aW9uIDEyXCIsXG5cdFwid29yZCAxM1wiOiBcIkRlZmludGlvbiAxM1wiLFxuXHRcIndvcmQgMTRcIjogXCJkZWZpbml0aW9uIDE0XCIsXG5cdFwid29yZCAxNVwiOiBcImRlZmluaXRpb24gMTVcIixcblx0XCJ3b3JkIDE2XCI6IFwiRGVmaW5pdGlvbiAxNlwiLFxuXHRcIndvcmQgMTdcIjogXCJEZWZpbnRpb24gMTdcIixcblx0XCJ3b3JkIDE4XCI6IFwiZGVmaW5pdGlvbiAxOFwiLFxuXHRcIndvcmQgMTlcIjogXCJkZWZpbml0aW9uIDE5XCIsXG5cdFwid29yZCAyMFwiOiBcIkRlZmluaXRpb24gMjBcIixcbn07XG5cbmV4cG9ydCBsZXQgdW5pdDdfdm9jYWIgPSB7XG5cdFwidW5pdCA3IHdvcmRcIjpcblx0XHRcIkRlZmluaXRpb24gMSB0aGlzIGlzIGEgdGVzdCB0byBzZWUgaG93IG1ha2luZyB0aGUgZGVmaW5pdGlvbiBiaWdnZXIgYWZmZWN0cyB0aGUgZGl2IHNpemVcIixcblx0XCJ3b3JkIDJcIjogXCJERUZJTklUSU9OIDJcIixcblx0XCJ3b3JkIDNcIjogXCJERUZJTklUSU9OIDNcIixcblx0XCJ3b3JkIDRcIjogXCJERUZJTklUSU9OIDRcIixcblx0XCJ3b3JkIDVcIjogXCJEZWZpbml0aW9uIDVcIixcblx0XCJXb3JkIDZcIjogXCJkZWZpbml0aW9uIDZcIixcblx0XCJ3b3JkIDdcIjogXCJkZWZpbml0aW9uIDdcIixcblx0XCJ3b3JkIDhcIjogXCJkZWZpbnRpb24gOFwiLFxuXHRcIndvcmQgOVwiOiBcImRlZmluaXRpb24gOVwiLFxuXHRcIndvcmQgMTBcIjogXCJkZWZpbml0aW9uIDEwXCIsXG5cdFwid29yZCAxMVwiOiBcImRlZmluaXRpb24gMTFcIixcblx0XCJ3b3JkIDEyXCI6IFwiRGVmaW5pdGlvbiAxMlwiLFxuXHRcIndvcmQgMTNcIjogXCJEZWZpbnRpb24gMTNcIixcblx0XCJ3b3JkIDE0XCI6IFwiZGVmaW5pdGlvbiAxNFwiLFxuXHRcIndvcmQgMTVcIjogXCJkZWZpbml0aW9uIDE1XCIsXG5cdFwid29yZCAxNlwiOiBcIkRlZmluaXRpb24gMTZcIixcblx0XCJ3b3JkIDE3XCI6IFwiRGVmaW50aW9uIDE3XCIsXG5cdFwid29yZCAxOFwiOiBcImRlZmluaXRpb24gMThcIixcblx0XCJ3b3JkIDE5XCI6IFwiZGVmaW5pdGlvbiAxOVwiLFxuXHRcIndvcmQgMjBcIjogXCJEZWZpbml0aW9uIDIwXCIsXG59O1xuXG5leHBvcnQgbGV0IHVuaXQ4X3ZvY2FiID0ge1xuXHRcInVuaXQgOCB3b3JkXCI6XG5cdFx0XCJEZWZpbml0aW9uIDEgdGhpcyBpcyBhIHRlc3QgdG8gc2VlIGhvdyBtYWtpbmcgdGhlIGRlZmluaXRpb24gYmlnZ2VyIGFmZmVjdHMgdGhlIGRpdiBzaXplXCIsXG5cdFwid29yZCAyXCI6IFwiREVGSU5JVElPTiAyXCIsXG5cdFwid29yZCAzXCI6IFwiREVGSU5JVElPTiAzXCIsXG5cdFwid29yZCA0XCI6IFwiREVGSU5JVElPTiA0XCIsXG5cdFwid29yZCA1XCI6IFwiRGVmaW5pdGlvbiA1XCIsXG5cdFwiV29yZCA2XCI6IFwiZGVmaW5pdGlvbiA2XCIsXG5cdFwid29yZCA3XCI6IFwiZGVmaW5pdGlvbiA3XCIsXG5cdFwid29yZCA4XCI6IFwiZGVmaW50aW9uIDhcIixcblx0XCJ3b3JkIDlcIjogXCJkZWZpbml0aW9uIDlcIixcblx0XCJ3b3JkIDEwXCI6IFwiZGVmaW5pdGlvbiAxMFwiLFxuXHRcIndvcmQgMTFcIjogXCJkZWZpbml0aW9uIDExXCIsXG5cdFwid29yZCAxMlwiOiBcIkRlZmluaXRpb24gMTJcIixcblx0XCJ3b3JkIDEzXCI6IFwiRGVmaW50aW9uIDEzXCIsXG5cdFwid29yZCAxNFwiOiBcImRlZmluaXRpb24gMTRcIixcblx0XCJ3b3JkIDE1XCI6IFwiZGVmaW5pdGlvbiAxNVwiLFxuXHRcIndvcmQgMTZcIjogXCJEZWZpbml0aW9uIDE2XCIsXG5cdFwid29yZCAxN1wiOiBcIkRlZmludGlvbiAxN1wiLFxuXHRcIndvcmQgMThcIjogXCJkZWZpbml0aW9uIDE4XCIsXG5cdFwid29yZCAxOVwiOiBcImRlZmluaXRpb24gMTlcIixcblx0XCJ3b3JkIDIwXCI6IFwiRGVmaW5pdGlvbiAyMFwiLFxuXHRcIndvcmQgMjFcIjogXCJkZWZpbml0aW9uIDIxXCIsXG5cdFwid29yZCAyMlwiOiBcImRlZmluaXRpb24gMjJcIixcblx0XCJ3b3JkIDIzXCI6IFwiRGVmaW5pdGlvbiAyM1wiLFxuXHRcIndvcmQgMjRcIjogXCJkZWZpbml0aW9uIDI0XCIsXG5cdFwid29yZCAyNVwiOiBcImRlZmluaXRpb24gMjVcIixcblx0XCJ3b3JkIDI2XCI6IFwiRGVmaW5pdGlvbiAyNlwiLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==