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

button:active {
	animation: bounce 0.5s;
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
#carouselcontainer:active > .card {
	cursor: "pointer";
	transform: "rotateY(0deg)";
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@media (max-width: 768px) {\n\tbody {\n\t\tfont-size: 14px;\n\t}\n}\n\n/* Styles for devices with a max width of 480px (e.g., small phones) */\n@media (max-width: 480px) {\n\tbody {\n\t\tfont-size: 12px;\n\t}\n}\n\n@keyframes bounceleft {\n\t0%,\n\t20%,\n\t50%,\n\t80%,\n\t100% {\n\t\ttransform: translateY(0);\n\t}\n\t40% {\n\t\ttransform: translateX(-30px);\n\t}\n\t60% {\n\t\ttransform: translateX(-15px);\n\t}\n}\n\n@keyframes bounce {\n\t0%,\n\t20%,\n\t50%,\n\t80%,\n\t100% {\n\t\ttransform: translateX(0);\n\t}\n\t40% {\n\t\ttransform: translateY(-30px);\n\t}\n\t60% {\n\t\ttransform: translateY(-15px);\n\t}\n}\n\n@keyframes fadeinfromtop {\n\t0% {\n\t\topacity: 0;\n\t\ttransform: translateY(0px);\n\t}\n\t100% {\n\t\topacity: 1;\n\t\ttransform: translateY(0);\n\t}\n}\n@keyframes bounceright {\n\t0%,\n\t20%,\n\t50%,\n\t80%,\n\t100% {\n\t\ttransform: translateY(0);\n\t}\n\t40% {\n\t\ttransform: translateX(30px);\n\t}\n\t60% {\n\t\ttransform: translateX(15px);\n\t}\n}\n\n@keyframes openfromtop {\n\t0% {\n\t\theight: 0;\n\t}\n\n\t100% {\n\t\theight: 70%; /* Adjust the final height as needed */\n\t}\n}\n@keyframes itemopen {\n\t0% {\n\t\theight: 0;\n\t}\n\n\t100% {\n\t\theight: 100px; /* Adjust the final height as needed */\n\t}\n}\n\nbutton:hover {\n\tbackground-color: skyblue;\n}\n\nbutton:active {\n\tanimation: bounce 0.5s;\n}\nbody {\n\tbackground-color: rgb(156, 197, 176);\n}\n\n#pagelayout {\n\theight: 100%;\n\twidth: 100%;\n\tmargin: 0px;\n\tdisplay: grid;\n\tgrid-template-columns: 20% 80%;\n\tgrid-template-rows: 20% 80%;\n}\n\n#topright {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgrid-template-areas: 1/1/2/2;\n\tfont-size: 2rem;\n\ttext-align: center;\n\tbackground-color: tan;\n\tborder: 4px solid black;\n\tcolor: green;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tfont-weight: 700;\n}\n\n#topleft {\n\tborder: 4px solid black;\n\tgrid-template-areas: 1/2/2/3;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 2rem;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tbackground-color: rgb(4, 65, 4);\n\tcolor: tan;\n\tfont-weight: 800;\n}\n\n#bottomleft {\n\tgrid-template-areas: 2/2/3/3;\n}\n\n#bottomright {\n\tgrid-template-areas: 2/1/3/2;\n\tdisplay: flex;\n\tflex-direction: Column;\n\twidth: 100%;\n}\n\n#leftright {\n\tdisplay: flex;\n\theight: 60%;\n\twidth: 100%;\n\tflex-direction: row;\n}\n\n#left {\n\tbackground-image: url(\"./images/left_arrow.png\");\n\tbackground-size: 100%;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 20%;\n\ttext-align: center;\n}\n#right {\n\tbackground-image: url(\"./images/right_arrow.png\");\n\tbackground-size: 100%;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 20%;\n\ttext-align: center;\n}\n\n#left:active {\n\tanimation: bounceleft 0.5s;\n}\n\n#right:active {\n\tanimation: bounceright 0.5s;\n}\n#carouselcontainer {\n\tposition: relative;\n\twidth: 70%;\n\tdisplay: flex;\n\tword-wrap: break-word;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tfont-size: 2rem;\n\tmargin: 10px;\n\tborder-radius: 20px;\n\ttext-align: center;\n\tcolor: tan;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-size: cover;\n\tperspective: 1200px;\n}\n#carouselcontainer:active > .card {\n\tcursor: \"pointer\";\n\ttransform: \"rotateY(0deg)\";\n}\n.card {\n\theight: 100%;\n\twidth: 100%;\n\tposition: absolute;\n\ttransform-style: preserve-3d;\n\ttransition: transform 1000ms;\n}\n\n.front {\n\tdisplay: flex;\n\tborder-radius: 20px;\n\ttext-align: center;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-size: cover;\n\tborder: 2px black groove;\n\tposition: absolute;\n\tcolor: black;\n\tfont-weight: 800;\n\theight: 100%;\n\twidth: 100%;\n\tbackface-visibility: hidden;\n\tbackground-image: url(\"./images/paper.webp\");\n}\n\n.back {\n\tbackground-image: url(\"./images/paper.webp\");\n\n\tdisplay: Flex;\n\tborder-radius: 20px;\n\ttext-align: center;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-size: cover;\n\tborder: 2px black groove;\n\tposition: absolute;\n\tfont-weight: 800;\n\theight: 100%;\n\twidth: 100%;\n\tbackface-visibility: hidden;\n\tcolor: black;\n\ttransform: rotateY(180deg);\n}\n#carouseldots {\n\theight: 1rem;\n\twidth: auto;\n\tgap: 10px;\n\tdisplay: flex;\n\tpadding: 8px;\n\tjustify-content: center;\n\talign-items: center;\n\tborder: 2px green solid;\n\ttext-align: Center;\n\tborder: groove black 10px;\n\tflex-wrap: wrap;\n}\n\n.circle {\n\theight: 1rem;\n\twidth: 1rem;\n\tborder-radius: 50%;\n\tbackground-color: gray;\n}\n.circle:hover {\n\ttransform: scale(1.2);\n}\n\n#menubutton {\n\theight: 40px;\n\tcolor: green;\n\tbackground-color: tan;\n\tfont-size: 1rem;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\twidth: 100%;\n}\n\n#dropdowncontainer {\n\tdisplay: none;\n}\n\n.switchcontainer {\n\tgap: 10px;\n\tmargin: 5px;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n}\n.switch {\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tfont-size: 1rem;\n\twidth: 90%;\n\tbackground-color: antiquewhite;\n\tborder-radius: 20px;\n\tcolor: rgb(116, 154, 116);\n\tfont-weight: 800;\n}\n.dropdownitem {\n\tborder: 2px solid black;\n\tpadding: 5px;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tbackground-color: rgb(221, 250, 215);\n}\n.dropdownitemvisible {\n\tborder: 2px solid black;\n\tpadding: 5px;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tbackground-color: rgb(221, 250, 215);\n}\n#switchcontainer1,\n#switchcontainer2,\n#switchcontainer3,\n#switchcontainer4,\n#switchcontainer5,\n#switchcontainer6,\n#switchcontainer7,\n#switchcontainer8 {\n\twidth: 50%;\n\tdisplay: none;\n}\n\n#visibleswitch1 #visibleswitch2,\n#visibleswitch3 #visibleswitch4,\n#visibleswitch5 #visibleswitch6,\n#visibleswitch7 #visibleswitch8 {\n\tanimation: fadeinfromtop 0.5s forwards;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-around;\n}\n#visible {\n\tanimation: fadeinfromtop 0.5s forwards;\n\twidth: 100%;\n\tdisplay: flex;\n\ttext-align: center;\n\tfont-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n\tfont-size: 1rem;\n\tflex-direction: column;\n\tbackground-color: beige;\n\tgap: 20px;\n\tborder: 2px solid black;\n\theight: 70%;\n}\n#dropdowncontainer:hover {\n\twidth: 100%;\n\tdisplay: flex;\n\ttext-align: center;\n\tfont-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n\tfont-size: 1rem;\n\tflex-direction: column;\n\tbackground-color: beige;\n\tgap: 20px;\n\tborder: 2px solid black;\n}\n\nul {\n\tlist-style: none;\n\tgap: 14px;\n\tdisplay: flex;\n\tflex-direction: row;\n\ttext-align: center;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n\t\t\"Lucida Sans\", Arial, sans-serif;\n\tfont-size: 2rem;\n\tfont-weight: 700;\n\tcolor: black;\n\tmargin-top: 30px;\n}\n"],"sourceRoot":""}]);
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

	document.addEventListener("keydown", function (event) {
		if (event.key === "f") {
			let card = document.getElementsByClassName("card");
			for (let i = 0; i < card.length; i++) {
				card[i].style.cursor = "pointer";
				card[i].style.transform = "rotateY(180deg)";
			}
		}
	});
	let carousel = document.getElementById("carouselcontainer");

	carousel.addEventListener("click", () => {
		let card = document.getElementsByClassName("card");
		for (let i = 0; i < card.length; i++) {
			if (card[i].style.transform !== "rotateY(180deg)") {
				card[i].style.transform = "rotateY(180deg)";
			} else if (card[i].style.transform == "rotateY(180deg)") {
				card[i].style.transform = "rotateY(0deg)";
			}
		}
	});
	document.addEventListener("keyup", function (event) {
		if (event.key === "f") {
			let card = document.getElementsByClassName("card");
			for (let i = 0; i < card.length; i++) {
				card[i].style.cursor = "pointer";
				card[i].style.transform = "rotateY(0deg)";
			}
		}
	});

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

			return counter, unit;
		});
		carouseldots.append(dot);
		checkDots();
	}

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
			checkDots();
			return counter;
		}
		//spacbar
		if (event.keyCode === 32) {
			if (front.innerHTML == keys[counter]) {
				front.innerHTML = back.innerHTML;
			} else if (back.innerHTML == values[counter]) {
				front.innerHTML = keys[counter];
			}
		}
		if (event.keyCode === 38) {
			let dots = document.getElementsByClassName("circle");
			counter = Math.floor(Math.random() * dots.length);
			front.innerHTML = keys[counter];
			back.innerHTML = values[counter];
			checkDots();
		}
	}
	document.addEventListener("keydown", leftPress);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMkhBQTBDO0FBQ3RGLDRDQUE0Qyw2SEFBMkM7QUFDdkYsNENBQTRDLG1IQUFzQztBQUNsRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixtQ0FBbUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsbUNBQW1DO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsbUNBQW1DO0FBQzVEOztBQUVBO0FBQ0EseUJBQXlCLG1DQUFtQzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssU0FBUyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFNBQVMsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLFNBQVMsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLHNCQUFzQixNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLHNCQUFzQixNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxPQUFPLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssT0FBTyxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sT0FBTyxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLE9BQU8sV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sT0FBTyxNQUFNLEtBQUssS0FBSyxPQUFPLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxPQUFPLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLE9BQU8sYUFBYSxNQUFNLFlBQVksVUFBVSxVQUFVLE1BQU0sUUFBUSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxXQUFXLFlBQVksV0FBVyxZQUFZLHFEQUFxRCxVQUFVLHNCQUFzQixLQUFLLEdBQUcsd0dBQXdHLFVBQVUsc0JBQXNCLEtBQUssR0FBRywyQkFBMkIseUNBQXlDLCtCQUErQixLQUFLLFNBQVMsbUNBQW1DLEtBQUssU0FBUyxtQ0FBbUMsS0FBSyxHQUFHLHVCQUF1Qix5Q0FBeUMsK0JBQStCLEtBQUssU0FBUyxtQ0FBbUMsS0FBSyxTQUFTLG1DQUFtQyxLQUFLLEdBQUcsOEJBQThCLFFBQVEsaUJBQWlCLGlDQUFpQyxLQUFLLFVBQVUsaUJBQWlCLCtCQUErQixLQUFLLEdBQUcsMEJBQTBCLHlDQUF5QywrQkFBK0IsS0FBSyxTQUFTLGtDQUFrQyxLQUFLLFNBQVMsa0NBQWtDLEtBQUssR0FBRyw0QkFBNEIsUUFBUSxnQkFBZ0IsS0FBSyxZQUFZLG1CQUFtQiw0Q0FBNEMsR0FBRyx1QkFBdUIsUUFBUSxnQkFBZ0IsS0FBSyxZQUFZLHFCQUFxQiw0Q0FBNEMsR0FBRyxrQkFBa0IsOEJBQThCLEdBQUcsbUJBQW1CLDJCQUEyQixHQUFHLFFBQVEseUNBQXlDLEdBQUcsaUJBQWlCLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLGtCQUFrQixtQ0FBbUMsZ0NBQWdDLEdBQUcsZUFBZSxrQkFBa0IsNEJBQTRCLHdCQUF3QixpQ0FBaUMsb0JBQW9CLHVCQUF1QiwwQkFBMEIsNEJBQTRCLGlCQUFpQix1SEFBdUgscUJBQXFCLEdBQUcsY0FBYyw0QkFBNEIsaUNBQWlDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLG9CQUFvQix1SEFBdUgsb0NBQW9DLGVBQWUscUJBQXFCLEdBQUcsaUJBQWlCLGlDQUFpQyxHQUFHLGtCQUFrQixpQ0FBaUMsa0JBQWtCLDJCQUEyQixnQkFBZ0IsR0FBRyxnQkFBZ0Isa0JBQWtCLGdCQUFnQixnQkFBZ0Isd0JBQXdCLEdBQUcsV0FBVyx1REFBdUQsMEJBQTBCLGlDQUFpQyxnQ0FBZ0Msa0JBQWtCLDRCQUE0Qix3QkFBd0IsZUFBZSx1QkFBdUIsR0FBRyxVQUFVLHdEQUF3RCwwQkFBMEIsaUNBQWlDLGdDQUFnQyxrQkFBa0IsNEJBQTRCLHdCQUF3QixlQUFlLHVCQUF1QixHQUFHLGtCQUFrQiwrQkFBK0IsR0FBRyxtQkFBbUIsZ0NBQWdDLEdBQUcsc0JBQXNCLHVCQUF1QixlQUFlLGtCQUFrQiwwQkFBMEIsdUhBQXVILG9CQUFvQixpQkFBaUIsd0JBQXdCLHVCQUF1QixlQUFlLDRCQUE0Qix3QkFBd0IsdUJBQXVCLDJCQUEyQix3QkFBd0IsR0FBRyxxQ0FBcUMsd0JBQXdCLGlDQUFpQyxHQUFHLFNBQVMsaUJBQWlCLGdCQUFnQix1QkFBdUIsaUNBQWlDLGlDQUFpQyxHQUFHLFlBQVksa0JBQWtCLHdCQUF3Qix1QkFBdUIsNEJBQTRCLHdCQUF3Qix1QkFBdUIsMkJBQTJCLDZCQUE2Qix1QkFBdUIsaUJBQWlCLHFCQUFxQixpQkFBaUIsZ0JBQWdCLGdDQUFnQyxtREFBbUQsR0FBRyxXQUFXLG1EQUFtRCxvQkFBb0Isd0JBQXdCLHVCQUF1Qiw0QkFBNEIsd0JBQXdCLHVCQUF1QiwyQkFBMkIsNkJBQTZCLHVCQUF1QixxQkFBcUIsaUJBQWlCLGdCQUFnQixnQ0FBZ0MsaUJBQWlCLCtCQUErQixHQUFHLGlCQUFpQixpQkFBaUIsZ0JBQWdCLGNBQWMsa0JBQWtCLGlCQUFpQiw0QkFBNEIsd0JBQXdCLDRCQUE0Qix1QkFBdUIsOEJBQThCLG9CQUFvQixHQUFHLGFBQWEsaUJBQWlCLGdCQUFnQix1QkFBdUIsMkJBQTJCLEdBQUcsaUJBQWlCLDBCQUEwQixHQUFHLGlCQUFpQixpQkFBaUIsaUJBQWlCLDBCQUEwQixvQkFBb0IsdUhBQXVILGdCQUFnQixHQUFHLHdCQUF3QixrQkFBa0IsR0FBRyxzQkFBc0IsY0FBYyxnQkFBZ0Isa0JBQWtCLGtDQUFrQyx3QkFBd0IsdUhBQXVILEdBQUcsV0FBVyx1SEFBdUgsb0JBQW9CLGVBQWUsbUNBQW1DLHdCQUF3Qiw4QkFBOEIscUJBQXFCLEdBQUcsaUJBQWlCLDRCQUE0QixpQkFBaUIsdUhBQXVILHlDQUF5QyxHQUFHLHdCQUF3Qiw0QkFBNEIsaUJBQWlCLHVIQUF1SCx5Q0FBeUMsR0FBRyxpS0FBaUssZUFBZSxrQkFBa0IsR0FBRywySUFBMkksMkNBQTJDLGtCQUFrQix3QkFBd0Isa0NBQWtDLEdBQUcsWUFBWSwyQ0FBMkMsZ0JBQWdCLGtCQUFrQix1QkFBdUIsd0ZBQXdGLG9CQUFvQiwyQkFBMkIsNEJBQTRCLGNBQWMsNEJBQTRCLGdCQUFnQixHQUFHLDRCQUE0QixnQkFBZ0Isa0JBQWtCLHVCQUF1Qix3RkFBd0Ysb0JBQW9CLDJCQUEyQiw0QkFBNEIsY0FBYyw0QkFBNEIsR0FBRyxRQUFRLHFCQUFxQixjQUFjLGtCQUFrQix3QkFBd0IsdUJBQXVCLDRCQUE0Qix3QkFBd0IsdUhBQXVILG9CQUFvQixxQkFBcUIsaUJBQWlCLHFCQUFxQixHQUFHLHFCQUFxQjtBQUN0MlY7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNoWjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3hOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7QUNBcUI7QUFDMEI7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUMsNERBQVksQ0FBQyx1REFBVztBQUN6QjtBQUNBLENBQUM7O0FBRUQ7QUFDQSxDQUFDLDREQUFZLENBQUMsdURBQVc7QUFDekI7QUFDQSxDQUFDOztBQUVEO0FBQ0EsQ0FBQyw0REFBWSxDQUFDLHVEQUFXO0FBQ3pCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLENBQUMsNERBQVksQ0FBQyx1REFBVztBQUN6QjtBQUNBLENBQUM7O0FBRUQ7QUFDQSxDQUFDLDREQUFZLENBQUMsdURBQVc7QUFDekI7QUFDQSxDQUFDOztBQUVEO0FBQ0EsQ0FBQyw0REFBWSxDQUFDLHVEQUFXO0FBQ3pCO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQyw0REFBWSxDQUFDLHVEQUFXO0FBQ3pCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLENBQUMsNERBQVksQ0FBQyx1REFBVztBQUN6QjtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUMsNERBQVksQ0FBQyx1REFBVztBQUN6QjtBQUNBLENBQUM7O0FBRUQ7QUFDQSxDQUFDLDREQUFZLENBQUMsdURBQVc7QUFDekI7QUFDQSxDQUFDOztBQUVEO0FBQ0EsQ0FBQyw0REFBWSxDQUFDLHVEQUFXO0FBQ3pCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLENBQUMsNERBQVksQ0FBQyx1REFBVztBQUN6QjtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUMsNERBQVksQ0FBQyx1REFBVztBQUN6QjtBQUNBLENBQUM7O0FBRUQ7QUFDQSxDQUFDLDREQUFZLENBQUMsdURBQVc7QUFDekI7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDLDREQUFZLENBQUMsdURBQVc7QUFDekI7QUFDQSxDQUFDOztBQUVEO0FBQ0EsQ0FBQyw0REFBWSxDQUFDLHVEQUFXO0FBQ3pCO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL2l0ZW0xLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL21vZHVsZXMvdW5pdHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvbGVmdF9hcnJvdy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9yaWdodF9hcnJvdy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9wYXBlci53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHRib2R5IHtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdH1cbn1cblxuLyogU3R5bGVzIGZvciBkZXZpY2VzIHdpdGggYSBtYXggd2lkdGggb2YgNDgwcHggKGUuZy4sIHNtYWxsIHBob25lcykgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuXHRib2R5IHtcblx0XHRmb250LXNpemU6IDEycHg7XG5cdH1cbn1cblxuQGtleWZyYW1lcyBib3VuY2VsZWZ0IHtcblx0MCUsXG5cdDIwJSxcblx0NTAlLFxuXHQ4MCUsXG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0fVxuXHQ0MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzBweCk7XG5cdH1cblx0NjAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1cHgpO1xuXHR9XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlIHtcblx0MCUsXG5cdDIwJSxcblx0NTAlLFxuXHQ4MCUsXG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcblx0fVxuXHQ0MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG5cdH1cblx0NjAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xuXHR9XG59XG5cbkBrZXlmcmFtZXMgZmFkZWluZnJvbXRvcCB7XG5cdDAlIHtcblx0XHRvcGFjaXR5OiAwO1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuXHR9XG5cdDEwMCUge1xuXHRcdG9wYWNpdHk6IDE7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuXHR9XG59XG5Aa2V5ZnJhbWVzIGJvdW5jZXJpZ2h0IHtcblx0MCUsXG5cdDIwJSxcblx0NTAlLFxuXHQ4MCUsXG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0fVxuXHQ0MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcblx0fVxuXHQ2MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcblx0fVxufVxuXG5Aa2V5ZnJhbWVzIG9wZW5mcm9tdG9wIHtcblx0MCUge1xuXHRcdGhlaWdodDogMDtcblx0fVxuXG5cdDEwMCUge1xuXHRcdGhlaWdodDogNzAlOyAvKiBBZGp1c3QgdGhlIGZpbmFsIGhlaWdodCBhcyBuZWVkZWQgKi9cblx0fVxufVxuQGtleWZyYW1lcyBpdGVtb3BlbiB7XG5cdDAlIHtcblx0XHRoZWlnaHQ6IDA7XG5cdH1cblxuXHQxMDAlIHtcblx0XHRoZWlnaHQ6IDEwMHB4OyAvKiBBZGp1c3QgdGhlIGZpbmFsIGhlaWdodCBhcyBuZWVkZWQgKi9cblx0fVxufVxuXG5idXR0b246aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xufVxuXG5idXR0b246YWN0aXZlIHtcblx0YW5pbWF0aW9uOiBib3VuY2UgMC41cztcbn1cbmJvZHkge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU2LCAxOTcsIDE3Nik7XG59XG5cbiNwYWdlbGF5b3V0IHtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luOiAwcHg7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgODAlO1xufVxuXG4jdG9wcmlnaHQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogMS8xLzIvMjtcblx0Zm9udC1zaXplOiAycmVtO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6IHRhbjtcblx0Ym9yZGVyOiA0cHggc29saWQgYmxhY2s7XG5cdGNvbG9yOiBncmVlbjtcblx0Zm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIixcblx0XHRcIkx1Y2lkYSBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXHRmb250LXdlaWdodDogNzAwO1xufVxuXG4jdG9wbGVmdCB7XG5cdGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xuXHRncmlkLXRlbXBsYXRlLWFyZWFzOiAxLzIvMi8zO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Zm9udC1zaXplOiAycmVtO1xuXHRmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxuXHRcdFwiTHVjaWRhIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYig0LCA2NSwgNCk7XG5cdGNvbG9yOiB0YW47XG5cdGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbiNib3R0b21sZWZ0IHtcblx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogMi8yLzMvMztcbn1cblxuI2JvdHRvbXJpZ2h0IHtcblx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogMi8xLzMvMjtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IENvbHVtbjtcblx0d2lkdGg6IDEwMCU7XG59XG5cbiNsZWZ0cmlnaHQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRoZWlnaHQ6IDYwJTtcblx0d2lkdGg6IDEwMCU7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbiNsZWZ0IHtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHdpZHRoOiAyMCU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNyaWdodCB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR3aWR0aDogMjAlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNsZWZ0OmFjdGl2ZSB7XG5cdGFuaW1hdGlvbjogYm91bmNlbGVmdCAwLjVzO1xufVxuXG4jcmlnaHQ6YWN0aXZlIHtcblx0YW5pbWF0aW9uOiBib3VuY2VyaWdodCAwLjVzO1xufVxuI2Nhcm91c2VsY29udGFpbmVyIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR3aWR0aDogNzAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cdGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG5cdFx0XCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAycmVtO1xuXHRtYXJnaW46IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6IHRhbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0cGVyc3BlY3RpdmU6IDEyMDBweDtcbn1cbiNjYXJvdXNlbGNvbnRhaW5lcjphY3RpdmUgPiAuY2FyZCB7XG5cdGN1cnNvcjogXCJwb2ludGVyXCI7XG5cdHRyYW5zZm9ybTogXCJyb3RhdGVZKDBkZWcpXCI7XG59XG4uY2FyZCB7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDEwMCU7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMDBtcztcbn1cblxuLmZyb250IHtcblx0ZGlzcGxheTogZmxleDtcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRib3JkZXI6IDJweCBibGFjayBncm9vdmU7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Y29sb3I6IGJsYWNrO1xuXHRmb250LXdlaWdodDogODAwO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAxMDAlO1xuXHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuLmJhY2sge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG5cblx0ZGlzcGxheTogRmxleDtcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRib3JkZXI6IDJweCBibGFjayBncm9vdmU7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Zm9udC13ZWlnaHQ6IDgwMDtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuXHRjb2xvcjogYmxhY2s7XG5cdHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuI2Nhcm91c2VsZG90cyB7XG5cdGhlaWdodDogMXJlbTtcblx0d2lkdGg6IGF1dG87XG5cdGdhcDogMTBweDtcblx0ZGlzcGxheTogZmxleDtcblx0cGFkZGluZzogOHB4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Ym9yZGVyOiAycHggZ3JlZW4gc29saWQ7XG5cdHRleHQtYWxpZ246IENlbnRlcjtcblx0Ym9yZGVyOiBncm9vdmUgYmxhY2sgMTBweDtcblx0ZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY2lyY2xlIHtcblx0aGVpZ2h0OiAxcmVtO1xuXHR3aWR0aDogMXJlbTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuLmNpcmNsZTpob3ZlciB7XG5cdHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuI21lbnVidXR0b24ge1xuXHRoZWlnaHQ6IDQwcHg7XG5cdGNvbG9yOiBncmVlbjtcblx0YmFja2dyb3VuZC1jb2xvcjogdGFuO1xuXHRmb250LXNpemU6IDFyZW07XG5cdGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG5cdFx0XCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0d2lkdGg6IDEwMCU7XG59XG5cbiNkcm9wZG93bmNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zd2l0Y2hjb250YWluZXIge1xuXHRnYXA6IDEwcHg7XG5cdG1hcmdpbjogNXB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Zm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIixcblx0XHRcIkx1Y2lkYSBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuLnN3aXRjaCB7XG5cdGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG5cdFx0XCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHR3aWR0aDogOTAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdGNvbG9yOiByZ2IoMTE2LCAxNTQsIDExNik7XG5cdGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uZHJvcGRvd25pdGVtIHtcblx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XG5cdHBhZGRpbmc6IDVweDtcblx0Zm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIixcblx0XHRcIkx1Y2lkYSBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyNTAsIDIxNSk7XG59XG4uZHJvcGRvd25pdGVtdmlzaWJsZSB7XG5cdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuXHRwYWRkaW5nOiA1cHg7XG5cdGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG5cdFx0XCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjUwLCAyMTUpO1xufVxuI3N3aXRjaGNvbnRhaW5lcjEsXG4jc3dpdGNoY29udGFpbmVyMixcbiNzd2l0Y2hjb250YWluZXIzLFxuI3N3aXRjaGNvbnRhaW5lcjQsXG4jc3dpdGNoY29udGFpbmVyNSxcbiNzd2l0Y2hjb250YWluZXI2LFxuI3N3aXRjaGNvbnRhaW5lcjcsXG4jc3dpdGNoY29udGFpbmVyOCB7XG5cdHdpZHRoOiA1MCU7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbiN2aXNpYmxlc3dpdGNoMSAjdmlzaWJsZXN3aXRjaDIsXG4jdmlzaWJsZXN3aXRjaDMgI3Zpc2libGVzd2l0Y2g0LFxuI3Zpc2libGVzd2l0Y2g1ICN2aXNpYmxlc3dpdGNoNixcbiN2aXNpYmxlc3dpdGNoNyAjdmlzaWJsZXN3aXRjaDgge1xuXHRhbmltYXRpb246IGZhZGVpbmZyb210b3AgMC41cyBmb3J3YXJkcztcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4jdmlzaWJsZSB7XG5cdGFuaW1hdGlvbjogZmFkZWluZnJvbXRvcCAwLjVzIGZvcndhcmRzO1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LWZhbWlseTogXCJHaWxsIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgQ2FsaWJyaSwgXCJUcmVidWNoZXQgTVNcIiwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcblx0Z2FwOiAyMHB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcblx0aGVpZ2h0OiA3MCU7XG59XG4jZHJvcGRvd25jb250YWluZXI6aG92ZXIge1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LWZhbWlseTogXCJHaWxsIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgQ2FsaWJyaSwgXCJUcmVidWNoZXQgTVNcIiwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcblx0Z2FwOiAyMHB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cblxudWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xuXHRnYXA6IDE0cHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG5cdFx0XCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAycmVtO1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRjb2xvcjogYmxhY2s7XG5cdG1hcmdpbi10b3A6IDMwcHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQztFQUNDLGVBQWU7Q0FDaEI7QUFDRDs7QUFFQSxzRUFBc0U7QUFDdEU7Q0FDQztFQUNDLGVBQWU7Q0FDaEI7QUFDRDs7QUFFQTtDQUNDOzs7OztFQUtDLHdCQUF3QjtDQUN6QjtDQUNBO0VBQ0MsNEJBQTRCO0NBQzdCO0NBQ0E7RUFDQyw0QkFBNEI7Q0FDN0I7QUFDRDs7QUFFQTtDQUNDOzs7OztFQUtDLHdCQUF3QjtDQUN6QjtDQUNBO0VBQ0MsNEJBQTRCO0NBQzdCO0NBQ0E7RUFDQyw0QkFBNEI7Q0FDN0I7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsVUFBVTtFQUNWLDBCQUEwQjtDQUMzQjtDQUNBO0VBQ0MsVUFBVTtFQUNWLHdCQUF3QjtDQUN6QjtBQUNEO0FBQ0E7Q0FDQzs7Ozs7RUFLQyx3QkFBd0I7Q0FDekI7Q0FDQTtFQUNDLDJCQUEyQjtDQUM1QjtDQUNBO0VBQ0MsMkJBQTJCO0NBQzVCO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLFNBQVM7Q0FDVjs7Q0FFQTtFQUNDLFdBQVcsRUFBRSxzQ0FBc0M7Q0FDcEQ7QUFDRDtBQUNBO0NBQ0M7RUFDQyxTQUFTO0NBQ1Y7O0NBRUE7RUFDQyxhQUFhLEVBQUUsc0NBQXNDO0NBQ3REO0FBQ0Q7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxzQkFBc0I7QUFDdkI7QUFDQTtDQUNDLG9DQUFvQztBQUNyQzs7QUFFQTtDQUND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VCxXQUFXO0NBQ1gsYUFBYTtDQUNiLDZCQUE2QjtDQUM3QixtQkFBbUI7Q0FDbkI7a0NBQ2lDO0FBQ2xDO0FBQ0E7Q0FDQztrQ0FDaUM7Q0FDakMsZUFBZTtDQUNmLFVBQVU7Q0FDViw4QkFBOEI7Q0FDOUIsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1o7a0NBQ2lDO0NBQ2pDLG9DQUFvQztBQUNyQztBQUNBO0NBQ0MsdUJBQXVCO0NBQ3ZCLFlBQVk7Q0FDWjtrQ0FDaUM7Q0FDakMsb0NBQW9DO0FBQ3JDO0FBQ0E7Ozs7Ozs7O0NBUUMsVUFBVTtDQUNWLGFBQWE7QUFDZDs7QUFFQTs7OztDQUlDLHNDQUFzQztDQUN0QyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLDZCQUE2QjtBQUM5QjtBQUNBO0NBQ0Msc0NBQXNDO0NBQ3RDLFdBQVc7Q0FDWCxhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLDZFQUE2RTtDQUM3RSxlQUFlO0NBQ2Ysc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixTQUFTO0NBQ1QsdUJBQXVCO0NBQ3ZCLFdBQVc7QUFDWjtBQUNBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsNkVBQTZFO0NBQzdFLGVBQWU7Q0FDZixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLFNBQVM7Q0FDVCx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsU0FBUztDQUNULGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkI7a0NBQ2lDO0NBQ2pDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG5cXHRib2R5IHtcXG5cXHRcXHRmb250LXNpemU6IDE0cHg7XFxuXFx0fVxcbn1cXG5cXG4vKiBTdHlsZXMgZm9yIGRldmljZXMgd2l0aCBhIG1heCB3aWR0aCBvZiA0ODBweCAoZS5nLiwgc21hbGwgcGhvbmVzKSAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcblxcdGJvZHkge1xcblxcdFxcdGZvbnQtc2l6ZTogMTJweDtcXG5cXHR9XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlbGVmdCB7XFxuXFx0MCUsXFxuXFx0MjAlLFxcblxcdDUwJSxcXG5cXHQ4MCUsXFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcblxcdH1cXG5cXHQ0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzBweCk7XFxuXFx0fVxcblxcdDYwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNXB4KTtcXG5cXHR9XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlIHtcXG5cXHQwJSxcXG5cXHQyMCUsXFxuXFx0NTAlLFxcblxcdDgwJSxcXG5cXHQxMDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuXFx0fVxcblxcdDQwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcXG5cXHR9XFxuXFx0NjAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xcblxcdH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlaW5mcm9tdG9wIHtcXG5cXHQwJSB7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG5cXHR9XFxuXFx0MTAwJSB7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuXFx0fVxcbn1cXG5Aa2V5ZnJhbWVzIGJvdW5jZXJpZ2h0IHtcXG5cXHQwJSxcXG5cXHQyMCUsXFxuXFx0NTAlLFxcblxcdDgwJSxcXG5cXHQxMDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuXFx0fVxcblxcdDQwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xcblxcdH1cXG5cXHQ2MCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcXG5cXHR9XFxufVxcblxcbkBrZXlmcmFtZXMgb3BlbmZyb210b3Age1xcblxcdDAlIHtcXG5cXHRcXHRoZWlnaHQ6IDA7XFxuXFx0fVxcblxcblxcdDEwMCUge1xcblxcdFxcdGhlaWdodDogNzAlOyAvKiBBZGp1c3QgdGhlIGZpbmFsIGhlaWdodCBhcyBuZWVkZWQgKi9cXG5cXHR9XFxufVxcbkBrZXlmcmFtZXMgaXRlbW9wZW4ge1xcblxcdDAlIHtcXG5cXHRcXHRoZWlnaHQ6IDA7XFxuXFx0fVxcblxcblxcdDEwMCUge1xcblxcdFxcdGhlaWdodDogMTAwcHg7IC8qIEFkanVzdCB0aGUgZmluYWwgaGVpZ2h0IGFzIG5lZWRlZCAqL1xcblxcdH1cXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG5cXHRhbmltYXRpb246IGJvdW5jZSAwLjVzO1xcbn1cXG5ib2R5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU2LCAxOTcsIDE3Nik7XFxufVxcblxcbiNwYWdlbGF5b3V0IHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luOiAwcHg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgODAlO1xcbn1cXG5cXG4jdG9wcmlnaHQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOiAxLzEvMi8yO1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdGFuO1xcblxcdGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcblxcdGNvbG9yOiBncmVlbjtcXG5cXHRmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcblxcdFxcdFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbiN0b3BsZWZ0IHtcXG5cXHRib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOiAxLzIvMi8zO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG5cXHRcXHRcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNCwgNjUsIDQpO1xcblxcdGNvbG9yOiB0YW47XFxuXFx0Zm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuI2JvdHRvbWxlZnQge1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6IDIvMi8zLzM7XFxufVxcblxcbiNib3R0b21yaWdodCB7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogMi8xLzMvMjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBDb2x1bW47XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbiNsZWZ0cmlnaHQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0aGVpZ2h0OiA2MCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuI2xlZnQge1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvbGVmdF9hcnJvdy5wbmdcXFwiKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHdpZHRoOiAyMCU7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jcmlnaHQge1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvcmlnaHRfYXJyb3cucG5nXFxcIik7XFxuXFx0YmFja2dyb3VuZC1zaXplOiAxMDAlO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR3aWR0aDogMjAlO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2xlZnQ6YWN0aXZlIHtcXG5cXHRhbmltYXRpb246IGJvdW5jZWxlZnQgMC41cztcXG59XFxuXFxuI3JpZ2h0OmFjdGl2ZSB7XFxuXFx0YW5pbWF0aW9uOiBib3VuY2VyaWdodCAwLjVzO1xcbn1cXG4jY2Fyb3VzZWxjb250YWluZXIge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR3aWR0aDogNzAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0d29yZC13cmFwOiBicmVhay13b3JkO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsXFxuXFx0XFx0XFxcIkx1Y2lkYSBTYW5zXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdG1hcmdpbjogMTBweDtcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRjb2xvcjogdGFuO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0cGVyc3BlY3RpdmU6IDEyMDBweDtcXG59XFxuI2Nhcm91c2VsY29udGFpbmVyOmFjdGl2ZSA+IC5jYXJkIHtcXG5cXHRjdXJzb3I6IFxcXCJwb2ludGVyXFxcIjtcXG5cXHR0cmFuc2Zvcm06IFxcXCJyb3RhdGVZKDBkZWcpXFxcIjtcXG59XFxuLmNhcmQge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwMG1zO1xcbn1cXG5cXG4uZnJvbnQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRib3JkZXI6IDJweCBibGFjayBncm9vdmU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRmb250LXdlaWdodDogODAwO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9wYXBlci53ZWJwXFxcIik7XFxufVxcblxcbi5iYWNrIHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL3BhcGVyLndlYnBcXFwiKTtcXG5cXG5cXHRkaXNwbGF5OiBGbGV4O1xcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0Ym9yZGVyOiAycHggYmxhY2sgZ3Jvb3ZlO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRmb250LXdlaWdodDogODAwO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbn1cXG4jY2Fyb3VzZWxkb3RzIHtcXG5cXHRoZWlnaHQ6IDFyZW07XFxuXFx0d2lkdGg6IGF1dG87XFxuXFx0Z2FwOiAxMHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0cGFkZGluZzogOHB4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Ym9yZGVyOiAycHggZ3JlZW4gc29saWQ7XFxuXFx0dGV4dC1hbGlnbjogQ2VudGVyO1xcblxcdGJvcmRlcjogZ3Jvb3ZlIGJsYWNrIDEwcHg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uY2lyY2xlIHtcXG5cXHRoZWlnaHQ6IDFyZW07XFxuXFx0d2lkdGg6IDFyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcbi5jaXJjbGU6aG92ZXIge1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuI21lbnVidXR0b24ge1xcblxcdGhlaWdodDogNDBweDtcXG5cXHRjb2xvcjogZ3JlZW47XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdGFuO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcblxcdFxcdFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZHJvcGRvd25jb250YWluZXIge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zd2l0Y2hjb250YWluZXIge1xcblxcdGdhcDogMTBweDtcXG5cXHRtYXJnaW46IDVweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG5cXHRcXHRcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuLnN3aXRjaCB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG5cXHRcXHRcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0d2lkdGg6IDkwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXG5cXHRjb2xvcjogcmdiKDExNiwgMTU0LCAxMTYpO1xcblxcdGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcbi5kcm9wZG93bml0ZW0ge1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcblxcdHBhZGRpbmc6IDVweDtcXG5cXHRmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcblxcdFxcdFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDI1MCwgMjE1KTtcXG59XFxuLmRyb3Bkb3duaXRlbXZpc2libGUge1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcblxcdHBhZGRpbmc6IDVweDtcXG5cXHRmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcblxcdFxcdFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDI1MCwgMjE1KTtcXG59XFxuI3N3aXRjaGNvbnRhaW5lcjEsXFxuI3N3aXRjaGNvbnRhaW5lcjIsXFxuI3N3aXRjaGNvbnRhaW5lcjMsXFxuI3N3aXRjaGNvbnRhaW5lcjQsXFxuI3N3aXRjaGNvbnRhaW5lcjUsXFxuI3N3aXRjaGNvbnRhaW5lcjYsXFxuI3N3aXRjaGNvbnRhaW5lcjcsXFxuI3N3aXRjaGNvbnRhaW5lcjgge1xcblxcdHdpZHRoOiA1MCU7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Zpc2libGVzd2l0Y2gxICN2aXNpYmxlc3dpdGNoMixcXG4jdmlzaWJsZXN3aXRjaDMgI3Zpc2libGVzd2l0Y2g0LFxcbiN2aXNpYmxlc3dpdGNoNSAjdmlzaWJsZXN3aXRjaDYsXFxuI3Zpc2libGVzd2l0Y2g3ICN2aXNpYmxlc3dpdGNoOCB7XFxuXFx0YW5pbWF0aW9uOiBmYWRlaW5mcm9tdG9wIDAuNXMgZm9yd2FyZHM7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4jdmlzaWJsZSB7XFxuXFx0YW5pbWF0aW9uOiBmYWRlaW5mcm9tdG9wIDAuNXMgZm9yd2FyZHM7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJHaWxsIFNhbnNcXFwiLCBcXFwiR2lsbCBTYW5zIE1UXFxcIiwgQ2FsaWJyaSwgXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxuXFx0Z2FwOiAyMHB4O1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcblxcdGhlaWdodDogNzAlO1xcbn1cXG4jZHJvcGRvd25jb250YWluZXI6aG92ZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiR2lsbCBTYW5zXFxcIiwgXFxcIkdpbGwgU2FucyBNVFxcXCIsIENhbGlicmksIFxcXCJUcmVidWNoZXQgTVNcXFwiLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcblxcdGdhcDogMjBweDtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxudWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFx0Z2FwOiAxNHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcblxcdFxcdFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gbW92ZUNhcm91c2VsKHVuaXQsIGNob2ljZSkge1xuXHRsZXQgZnJvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyb250XCIpO1xuXHRsZXQgYmFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja1wiKTtcblx0Y2Fyb3VzZWxkb3RzLmlubmVySFRNTCA9IFwiXCI7XG5cdGxldCBjb3VudGVyID0gMDtcblx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyh1bml0KTtcblx0dmFyIHZhbHVlcyA9IE9iamVjdC52YWx1ZXModW5pdCk7XG5cdGlmIChjaG9pY2UgPT0gMSkge1xuXHRcdGxldCB0ZW1wID0ga2V5cztcblx0XHRrZXlzID0gdmFsdWVzO1xuXHRcdHZhbHVlcyA9IHRlbXA7XG5cdH1cblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRpZiAoZXZlbnQua2V5ID09PSBcImZcIikge1xuXHRcdFx0bGV0IGNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2FyZFwiKTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjYXJkW2ldLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuXHRcdFx0XHRjYXJkW2ldLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlWSgxODBkZWcpXCI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblx0bGV0IGNhcm91c2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJvdXNlbGNvbnRhaW5lclwiKTtcblxuXHRjYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGxldCBjYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhcmRcIik7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoY2FyZFtpXS5zdHlsZS50cmFuc2Zvcm0gIT09IFwicm90YXRlWSgxODBkZWcpXCIpIHtcblx0XHRcdFx0Y2FyZFtpXS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZVkoMTgwZGVnKVwiO1xuXHRcdFx0fSBlbHNlIGlmIChjYXJkW2ldLnN0eWxlLnRyYW5zZm9ybSA9PSBcInJvdGF0ZVkoMTgwZGVnKVwiKSB7XG5cdFx0XHRcdGNhcmRbaV0uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGVZKDBkZWcpXCI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGlmIChldmVudC5rZXkgPT09IFwiZlwiKSB7XG5cdFx0XHRsZXQgY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJkXCIpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNhcmRbaV0uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG5cdFx0XHRcdGNhcmRbaV0uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGVZKDBkZWcpXCI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRmcm9udC5pbm5lckhUTUwgPSBrZXlzW2NvdW50ZXJdO1xuXHRiYWNrLmlubmVySFRNTCA9IHZhbHVlc1tjb3VudGVyXTtcblx0Ly9jcmVhdGVzIGRvdHMgZm9yIGNhcm91c2VsIGFuZCBhZGRzIHRoZW0gdG8gdGhlIHBhZ2Vcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0ZG90LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2lyY2xlXCIpO1xuXHRcdGRvdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRvdHNcIiArIGkpO1xuXHRcdC8vZnVuY3Rpb24gdG8gbWFrZSBkb3QgY2xpY2sgYW5kIHNob3djYXNlIHRoZSBjb3JyZXNwb25kaW5nIGltYWdlXG5cdFx0ZG90LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRjb3VudGVyID0gaTtcblx0XHRcdC8vbmVlZCB0byB1cGRhdGUgaW1hZ2Vcblx0XHRcdGZyb250LmlubmVySFRNTCA9IGtleXNbY291bnRlcl07XG5cdFx0XHRiYWNrLmlubmVySFRNTCA9IHZhbHVlc1tjb3VudGVyXTtcblx0XHRcdGNoZWNrRG90cygpO1xuXG5cdFx0XHRyZXR1cm4gY291bnRlciwgdW5pdDtcblx0XHR9KTtcblx0XHRjYXJvdXNlbGRvdHMuYXBwZW5kKGRvdCk7XG5cdFx0Y2hlY2tEb3RzKCk7XG5cdH1cblxuXHQvL2Z1bmN0aW9ucyBmb3IgbGVmdCBhbmQgcmlnaHQgYXJyb3csIGFuZCBjaGFuZ2luZyBjb3VudGVyXG5cdGxldCBsZWZ0YXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIik7XG5cdGxldCByaWdodGFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodFwiKTtcblx0bGVmdGFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0aWYgKGNvdW50ZXIgPT0gMCkge1xuXHRcdFx0Y291bnRlciA9IGtleXMubGVuZ3RoIC0gMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y291bnRlciA9IGNvdW50ZXIgLSAxO1xuXHRcdH1cblx0XHRmcm9udC5pbm5lckhUTUwgPSBrZXlzW2NvdW50ZXJdO1xuXHRcdGJhY2suaW5uZXJIVE1MID0gdmFsdWVzW2NvdW50ZXJdO1xuXG5cdFx0Y2hlY2tEb3RzKCk7XG5cdFx0cmV0dXJuIGNvdW50ZXI7XG5cdH0pO1xuXG5cdHJpZ2h0YXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRpZiAoY291bnRlciA9PSBrZXlzLmxlbmd0aCAtIDEpIHtcblx0XHRcdGNvdW50ZXIgPSAwO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb3VudGVyID0gY291bnRlciArIDE7XG5cdFx0fVxuXHRcdGZyb250LmlubmVySFRNTCA9IGtleXNbY291bnRlcl07XG5cdFx0YmFjay5pbm5lckhUTUwgPSB2YWx1ZXNbY291bnRlcl07XG5cdFx0Y2hlY2tEb3RzKCk7XG5cdFx0cmV0dXJuIGNvdW50ZXI7XG5cdH0pO1xuXHQvL3Jlc2V0cyBhbGwgZG90cyB0byBncmF5LCB0aGVuIGNoZWNrcyB0aGUgY291bnRlciBudW1iZXIsIGFuZCBtYWtlcyB0aGUgZG90IHdpdGggdGhhdCBjb3VudGVyIElEIHJlZFxuXHRmdW5jdGlvbiBjaGVja0RvdHMoKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoY291bnRlciA9PSBpKSB7XG5cdFx0XHRcdGxldCBkb3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNpcmNsZVwiKTtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBkb3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0ZG90c1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyYXlcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgdGhpc2RvdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG90c1wiICsgaSk7XG5cdFx0XHRcdHRoaXNkb3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibGFja1wiO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGxlZnRQcmVzcyhldmVudCkge1xuXHRcdGlmIChldmVudC5rZXlDb2RlID09PSAzNykge1xuXHRcdFx0aWYgKGNvdW50ZXIgPT0gMCkge1xuXHRcdFx0XHRjb3VudGVyID0ga2V5cy5sZW5ndGggLSAxO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y291bnRlciA9IGNvdW50ZXIgLSAxO1xuXHRcdFx0fVxuXHRcdFx0ZnJvbnQuaW5uZXJIVE1MID0ga2V5c1tjb3VudGVyXTtcblx0XHRcdGJhY2suaW5uZXJIVE1MID0gdmFsdWVzW2NvdW50ZXJdO1xuXG5cdFx0XHRjaGVja0RvdHMoKTtcblx0XHRcdHJldHVybiBjb3VudGVyO1xuXHRcdH1cblx0XHRpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkpIHtcblx0XHRcdGlmIChjb3VudGVyID09IGtleXMubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRjb3VudGVyID0gMDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvdW50ZXIgPSBjb3VudGVyICsgMTtcblx0XHRcdH1cblx0XHRcdGZyb250LmlubmVySFRNTCA9IGtleXNbY291bnRlcl07XG5cdFx0XHRiYWNrLmlubmVySFRNTCA9IHZhbHVlc1tjb3VudGVyXTtcblx0XHRcdGNoZWNrRG90cygpO1xuXHRcdFx0cmV0dXJuIGNvdW50ZXI7XG5cdFx0fVxuXHRcdC8vc3BhY2JhclxuXHRcdGlmIChldmVudC5rZXlDb2RlID09PSAzMikge1xuXHRcdFx0aWYgKGZyb250LmlubmVySFRNTCA9PSBrZXlzW2NvdW50ZXJdKSB7XG5cdFx0XHRcdGZyb250LmlubmVySFRNTCA9IGJhY2suaW5uZXJIVE1MO1xuXHRcdFx0fSBlbHNlIGlmIChiYWNrLmlubmVySFRNTCA9PSB2YWx1ZXNbY291bnRlcl0pIHtcblx0XHRcdFx0ZnJvbnQuaW5uZXJIVE1MID0ga2V5c1tjb3VudGVyXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGV2ZW50LmtleUNvZGUgPT09IDM4KSB7XG5cdFx0XHRsZXQgZG90cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaXJjbGVcIik7XG5cdFx0XHRjb3VudGVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZG90cy5sZW5ndGgpO1xuXHRcdFx0ZnJvbnQuaW5uZXJIVE1MID0ga2V5c1tjb3VudGVyXTtcblx0XHRcdGJhY2suaW5uZXJIVE1MID0gdmFsdWVzW2NvdW50ZXJdO1xuXHRcdFx0Y2hlY2tEb3RzKCk7XG5cdFx0fVxuXHR9XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGxlZnRQcmVzcyk7XG59XG4iLCJleHBvcnQgbGV0IHVuaXQxX3ZvY2FiID0ge1xuXHRPYnNlcnZhdGlvbjpcblx0XHRcInRoZSBhY3Qgb2Ygbm90aWNpbmcgYW5kIGRlc2NyaWJpbmcgcHJvY2Vzc2VzIGluIGEgY2FyZWZ1bCwgb3JkZXJseSB3YXlcIixcblx0aW5mZXJlbmNlOiBcImEgbG9naWNhbCBpbnRlcnByZXRhdGlvbiBiYXNlZCBvbiB3aGF0IHNjaWVudGlzdHMgYWxyZWFkeSBrbm93XCIsXG5cdGh5cG90aGVzaXM6XG5cdFx0XCJhIHNjaWVudGlmaWMgZXhwbGFuYXRpb24gZm9yIGEgc2V0IG9mIG9ic2VydmF0aW9ucyB0aGF0IGNhbiBiZSB0ZXN0ZWQgaW4gd2F5cyB0aGF0IHN1cHBvcnQsIG9yIHJlamVjdCBpdFwiLFxuXHRcIkNvbnRyb2xsZWQgRXhwZXJpZW1lbnRcIjpcblx0XHRcImFuIGV4cGVyaW1lbnQgaW4gd2hpY2ggb25seSBvbmUgdmFyaWFibGUgaXMgY2hhbmdlZC4gIEFsbCBvdGhlciB2YXJpYWJsZXMgc2hvdWxkIGJlIGNvbnRyb2xsZWQgZm9yLCBvciBrZXB0IGNvbnN0YW50IFwiLFxuXHRcIkluZGVwZW5kZW50IFZhcmlhYmxlXCI6XG5cdFx0XCIgQWxzbyBrbm93biBhcyB0aGUgZXhwZXJpbWVudGFsLCBvciBtYW5pcHVsYXRlZCB2YXJpYWJsZS4gIFRoZSB2YXJpYWJsZSB0aGF0IGlzIGRlbGliZXJhdGV5IGNoYW5nZWRcIixcblx0XCJEZXBlbmRlbnQgVmFyaWFibGVcIjpcblx0XHRcIkFsc28ga25vd24gYXMgdGhlIG1lYXN1cmVkLCBvciByZXNwb25kaW5nIHZhcmlhYmxlLiAgVGhlIHZhcmlhYmxlIHRoYXQgaXMgb2JzZXJ2ZWQgYW5kIGNoYW5nZXMgaW4gcmVzcG9uc2UgdG8gdGhlIGluZGVwZW5kZW50IHZhcmlhYmxlXCIsXG5cdFwiQ29udHJvbCBHcm91cFwiOlxuXHRcdFwiVGhlIGdyb3VwIHRoYXQgZG9lcyBub3QgcmVjZWl2ZSBhbnkgY2hhbmdlLiAgSXMgdXNlZCBhcyBhIGJhc2VsaW5lIG9mIGNvbXBhcmlzb25cIixcblx0XCJFeHBlcmltZW50YWwgR3JvdXBcIjpcblx0XHRcIlRoZSBncm91cChzKSBpbiB3aGljaCB0aGUgSW5kZXBlbmRlbnQgdmFyaWFibGUgaXMgY2hhbmdlZCBmb3IgdGhlIHB1cnBvc2Ugb2Ygb2JzZXJ2aW5nIGRpZmZlcmVuY2VzLiAgVGhlcmUgY2FuIGJlIG11bHRpcGxlIGV4cGVyaW1lbnRhbCBncm91cHNcIixcblx0XCJQZWVyIFJldmlld1wiOlxuXHRcdFwiIEEgcmV2aWV3IHByb2Nlc3MgaW4gd2hpY2ggb3RoZXIgZXhwZXJ0cyBpbiB0aGUgZmllbGQgcmV2aWV3IHdvcmsgdG8gZGV0ZXJtaW5lIGFueSBlcnJvcnMgb3IgZmxhd3MgaW4gYW4gZXhwZXJpbWVudFwiLFxuXHRUaGVvcnk6IFwiQSB3ZWxsLXRlc3RlZCBleHBsYW5hdGlvbiBiYWNrZWQgYnkgZXZpZGVuY2VcIixcblx0QmlhczogXCJhIHBhcnRpY3VsYXIgcHJlZmVyZW5jZSBvciBwb2ludCBvZiB2aWV3IHRoYXQgaXMgcGVyc29uYWwuICBTb21ldGltZXMgdGhlc2UgY2FuIGJlIGluZ3JhaW5lZCBiYXNlZCBvbiBsaWZlIGV4cGVyaWVuY2VzXCIsXG5cdFwid29yZCAxMlwiOiBcIkRlZmluaXRpb24gMTJcIixcblx0XCJ3b3JkIDEzXCI6IFwiRGVmaW50aW9uIDEzXCIsXG5cdFwid29yZCAxNFwiOiBcImRlZmluaXRpb24gMTRcIixcblx0XCJ3b3JkIDE1XCI6IFwiZGVmaW5pdGlvbiAxNVwiLFxuXHRcIndvcmQgMTZcIjogXCJEZWZpbml0aW9uIDE2XCIsXG5cdFwid29yZCAxN1wiOiBcIkRlZmludGlvbiAxN1wiLFxuXHRcIndvcmQgMThcIjogXCJkZWZpbml0aW9uIDE4XCIsXG5cdFwid29yZCAxOVwiOiBcImRlZmluaXRpb24gMTlcIixcblx0XCJ3b3JkIDIwXCI6IFwiRGVmaW5pdGlvbiAyMFwiLFxufTtcblxuZXhwb3J0IGxldCB1bml0Ml92b2NhYiA9IHtcblx0Q2VsbDogXCJiYXNpYyB1bml0IG9mIGxpZmVcIixcblx0XCJDZWxsIHRoZW9yeVwiOlxuXHRcdFwiQWxsIGxpdmluZyB0aGluZ3MgYXJlIG1hZGUgb2YgY2VsbHMsIGNlbGxzIGNvbWUgZnJvbSBvdGhlciBjZWxsc1wiLFxuXHRcIkNlbGwgbWVtYnJhbmUgKFBsYXNtYSBtZW1icmFuZSlcIjpcblx0XHRcIkEgdGhpbiBmbGV4aWJsZSBsYXllciBvbiB0aGUgb3V0c2lkZSBvZiBjZWxsIG1hZGUgdXAgb2YgcGhvc3Bob2xpcGlkIGJpbGF5ZXIodHdvIGxheWVycyBvZiBmYXRzKVwiLFxuXHROdWNsZXVzOlxuXHRcdFwibGFyZ2UgbWVtYnJhbmUgZW5jbG9zZWQgc3RydWN0dXJlIHRoYXQgY29udGFpbnMgdGhlIGdlbmV0aWMgbWF0ZXJpYWwoRE5BKSBvZiBldWthcnlvdGljIGNlbGxzLiAgRGlyZWN0cyBtYW55IGNlbGwgYWN0aXZpdGVzLCBvbmx5IGZvdW5kIGluIEV1a2FyeW90aWMgY2VsbHNcIixcblx0XCJFdWthcnlvdGljIENlbGxcIjpcblx0XHRcImNlbGxzIHRoYXQgaGF2ZSBtZW1icmFuZSBib3VuZCBvcmdhbmVsbGVzIChzdHJ1Y3R1cmVzIGVuY2xvc2VkIGluIGEgcHJvdGVjdGl2ZSBsYXllciB0aGF0IHNlcGFyYXRlIHRoZW0gZnJvbSB0aGUgcmVzdCBvZiB0aGUgY2VsbClcIixcblx0XCJQcm9rYXJ5b3RpYyBDZWxsXCI6ICdhIFwic2ltcGxlXCIgY2VsbCB3aXRoIG5vIG9yZ2FuZWxsZXMnLFxuXHRDeXRvcGxhc206IFwidGhlIGxpcXVpZCBpbnNpZGUgb2YgYSBjZWxsXCIsXG5cdE9yZ2FuZWxsZXM6XG5cdFx0J1wibGl0dGxlIG9yZ2Fuc1wiIGluc2lkZSBvZiB0aGUgY2VsbCB0aGF0IGNhcnJ5IG91dCBzcGVjaWFsaXplZCBmdW5jdGlvbnMnLFxuXHRWYWN1b2xlczpcblx0XHRcIm9yZ2FubGxlIHRoYXQgaXMgdXNlZCBmb3Igc3RvcmFnZSBvZiB3YXRlciwgcHJvdGVpbnMsIGNhcmJvaHlkcmF0ZXMsIGV0Y1wiLFxuXHRMeXNvc29tZXM6XG5cdFx0XCJvcmdhbmVsbGVzIHRoYXQgYXJlIGZpbGxlZCB3aXRoIGVuenltZXMgdG8gaGVscCBicmVhayBkb3duIG1hdGVyaWFscywgaW5jbHVkaW5nIG90aGVyIG9yZ2FubGxlc1wiLFxuXHRDeXRvc2tlbGV0b246XG5cdFx0XCJuZXR3b3JrIG9mIGZpbGFtZW50cyB0aGF0IGhlbHAgZ2l2ZSB0aGUgY2VsbCBzdHJ1Y3R1cmUgKEluY2x1ZGVzIG1pY3JvZmlsYW1lbnRzIGFuZCBtaWNyb3R1YnVsZXMpXCIsXG5cdENlbnRyaW9sZXM6XG5cdFx0XCJzbWFsbCBzdHJ1Y3R1cmVzIGxvY2F0ZWQgbmVhciB0aGUgbnVjbGV1cyB0aGF0IGhlbHAgb3JnYW5pemUgY2VsbCBkaXZpc2lvblwiLFxuXHRSaWJvc29tZXM6IFwic3RydWN0dXJlcyByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgcHJvdGVpbnMgb3V0IG9mIGFtaW5vIGFjaWRzXCIsXG5cdFwiRW5kcG9wbGFzbWljIFJlY3RpY3VsdW1cIjpcblx0XHRcImFzc2VtYmxlcyBsaXBpZHMoZmF0cyksIHByb3RlaW5zLCBhbmQgb3RoZXIgbWF0ZXJpYWxzIHRoYXQgYXJlIGV4cG9ydGVkIGZyb20gdGhlIGNlbGxcIixcblx0XCJHb2xnaSBBcHBhcmF0dXNcIjpcblx0XHRcIk1vZGlmaWVzLCBzb3J0cyBhbmQgcGFja2FnZXMgcHJvdGVpbnMgYW5kIG90aGVyIG1hdGVyaWFscyBmcm9tIHRoZSBlbmRvcGxhc21pYyByZXRpY3VsdW0gZm9yIHN0b3JhZ2UgaW4gdGhlIGNlbGwgb3IgcmVsZWFzZSBvdXRzaWRlIHRoZSBjZWxsXCIsXG5cdE1pdG9jaG9uZHJpYTpcblx0XHRcIlNpdGUgb2YgY2VsbHVsYXIgcmVzcGlyYXRpb24gd2hlcmUgb3h5Z2VuIGFuZCBzdWdhciBhcmUgY29udmVydGVkIGludG8gY2VsbHVsYXIgZW5lcmd5IGluIHRoZSBmb3JtIG9mIEFUUFwiLFxuXHRDaGxvcm9wbGFzdHM6XG5cdFx0XCJDYXB0dXJlIHRoZSBlbmVyZ3kgb2Ygc3VubGlnaHQgYW5kIGNvbnZlcnQgaXQgYWxvbmcgd2l0aCBDYXJib24gRGlveGlkZSBpbnRvIHN1Z2FyIChnbHVjb3NlKSBhbmQgb3h5Z2VuXCIsXG5cdFwiQ2VsbCB3YWxsXCI6XG5cdFx0XCJSaWdpZCBzdHJ1Y3R1cmUgZm91bmQgaW4gc29tZSBjZWxscyBvbiB0aGUgb3V0c2lkZSBvZiB0aGUgY2VsbCBtZW1icmFuZSB0aGF0IHByb3ZpZGVzIHN1cHBvcnQgYW5kIHByb3RlY3Rpb25cIixcblx0XCJTZWxlY3RpdmVseShTZW1pKSBQZXJtZWFibGVcIjpcblx0XHRcIkEgbWVtYnJhbmUoY292ZXJpbmcpIHRoYXQgYWxsb3dzIHNvbWUgc3Vic3RhbmNlcyB0byBjcm9zcywgYnV0IG5vdCBvdGhlcnMuICBJbiB0aGUgY2FzZSBvZiB0aGUgY2VsbCBtZW1icmFuZSBpdCBpcyBiYXNlZCBvbiBzaXplXCIsXG59O1xuXG5leHBvcnQgbGV0IHVuaXQzX3ZvY2FiID0ge1xuXHRcInVuaXQgMyB3b3JkXCI6XG5cdFx0XCJEZWZpbml0aW9uIDEgdGhpcyBpcyBhIHRlc3QgdG8gc2VlIGhvdyBtYWtpbmcgdGhlIGRlZmluaXRpb24gYmlnZ2VyIGFmZmVjdHMgdGhlIGRpdiBzaXplXCIsXG5cdFwid29yZCAyXCI6IFwiREVGSU5JVElPTiAyXCIsXG5cdFwid29yZCAzXCI6IFwiREVGSU5JVElPTiAzXCIsXG5cdFwid29yZCA0XCI6IFwiREVGSU5JVElPTiA0XCIsXG5cdFwid29yZCA1XCI6IFwiRGVmaW5pdGlvbiA1XCIsXG5cdFwiV29yZCA2XCI6IFwiZGVmaW5pdGlvbiA2XCIsXG5cdFwid29yZCA3XCI6IFwiZGVmaW5pdGlvbiA3XCIsXG5cdFwid29yZCA4XCI6IFwiZGVmaW50aW9uIDhcIixcblx0XCJ3b3JkIDlcIjogXCJkZWZpbml0aW9uIDlcIixcblx0XCJ3b3JkIDEwXCI6IFwiZGVmaW5pdGlvbiAxMFwiLFxuXHRcIndvcmQgMTFcIjogXCJkZWZpbml0aW9uIDExXCIsXG5cdFwid29yZCAxMlwiOiBcIkRlZmluaXRpb24gMTJcIixcblx0XCJ3b3JkIDEzXCI6IFwiRGVmaW50aW9uIDEzXCIsXG5cdFwid29yZCAxNFwiOiBcImRlZmluaXRpb24gMTRcIixcblx0XCJ3b3JkIDE1XCI6IFwiZGVmaW5pdGlvbiAxNVwiLFxuXHRcIndvcmQgMTZcIjogXCJEZWZpbml0aW9uIDE2XCIsXG5cdFwid29yZCAxN1wiOiBcIkRlZmludGlvbiAxN1wiLFxuXHRcIndvcmQgMThcIjogXCJkZWZpbml0aW9uIDE4XCIsXG5cdFwid29yZCAxOVwiOiBcImRlZmluaXRpb24gMTlcIixcblx0XCJ3b3JkIDIwXCI6IFwiRGVmaW5pdGlvbiAyMFwiLFxufTtcblxuZXhwb3J0IGxldCB1bml0NF92b2NhYiA9IHtcblx0XCJ1bml0IDQgd29yZFwiOlxuXHRcdFwiRGVmaW5pdGlvbiAxIHRoaXMgaXMgYSB0ZXN0IHRvIHNlZSBob3cgbWFraW5nIHRoZSBkZWZpbml0aW9uIGJpZ2dlciBhZmZlY3RzIHRoZSBkaXYgc2l6ZVwiLFxuXHRcIndvcmQgMlwiOiBcIkRFRklOSVRJT04gMlwiLFxuXHRcIndvcmQgM1wiOiBcIkRFRklOSVRJT04gM1wiLFxuXHRcIndvcmQgNFwiOiBcIkRFRklOSVRJT04gNFwiLFxuXHRcIndvcmQgNVwiOiBcIkRlZmluaXRpb24gNVwiLFxuXHRcIldvcmQgNlwiOiBcImRlZmluaXRpb24gNlwiLFxuXHRcIndvcmQgN1wiOiBcImRlZmluaXRpb24gN1wiLFxuXHRcIndvcmQgOFwiOiBcImRlZmludGlvbiA4XCIsXG5cdFwid29yZCA5XCI6IFwiZGVmaW5pdGlvbiA5XCIsXG5cdFwid29yZCAxMFwiOiBcImRlZmluaXRpb24gMTBcIixcblx0XCJ3b3JkIDExXCI6IFwiZGVmaW5pdGlvbiAxMVwiLFxuXHRcIndvcmQgMTJcIjogXCJEZWZpbml0aW9uIDEyXCIsXG5cdFwid29yZCAxM1wiOiBcIkRlZmludGlvbiAxM1wiLFxuXHRcIndvcmQgMTRcIjogXCJkZWZpbml0aW9uIDE0XCIsXG5cdFwid29yZCAxNVwiOiBcImRlZmluaXRpb24gMTVcIixcblx0XCJ3b3JkIDE2XCI6IFwiRGVmaW5pdGlvbiAxNlwiLFxuXHRcIndvcmQgMTdcIjogXCJEZWZpbnRpb24gMTdcIixcblx0XCJ3b3JkIDE4XCI6IFwiZGVmaW5pdGlvbiAxOFwiLFxuXHRcIndvcmQgMTlcIjogXCJkZWZpbml0aW9uIDE5XCIsXG5cdFwid29yZCAyMFwiOiBcIkRlZmluaXRpb24gMjBcIixcbn07XG5cbmV4cG9ydCBsZXQgdW5pdDVfdm9jYWIgPSB7XG5cdFwidW5pdCA1IHdvcmRcIjpcblx0XHRcIkRlZmluaXRpb24gMSB0aGlzIGlzIGEgdGVzdCB0byBzZWUgaG93IG1ha2luZyB0aGUgZGVmaW5pdGlvbiBiaWdnZXIgYWZmZWN0cyB0aGUgZGl2IHNpemVcIixcblx0XCJ3b3JkIDJcIjogXCJERUZJTklUSU9OIDJcIixcblx0XCJ3b3JkIDNcIjogXCJERUZJTklUSU9OIDNcIixcblx0XCJ3b3JkIDRcIjogXCJERUZJTklUSU9OIDRcIixcblx0XCJ3b3JkIDVcIjogXCJEZWZpbml0aW9uIDVcIixcblx0XCJXb3JkIDZcIjogXCJkZWZpbml0aW9uIDZcIixcblx0XCJ3b3JkIDdcIjogXCJkZWZpbml0aW9uIDdcIixcblx0XCJ3b3JkIDhcIjogXCJkZWZpbnRpb24gOFwiLFxuXHRcIndvcmQgOVwiOiBcImRlZmluaXRpb24gOVwiLFxuXHRcIndvcmQgMTBcIjogXCJkZWZpbml0aW9uIDEwXCIsXG5cdFwid29yZCAxMVwiOiBcImRlZmluaXRpb24gMTFcIixcblx0XCJ3b3JkIDEyXCI6IFwiRGVmaW5pdGlvbiAxMlwiLFxuXHRcIndvcmQgMTNcIjogXCJEZWZpbnRpb24gMTNcIixcblx0XCJ3b3JkIDE0XCI6IFwiZGVmaW5pdGlvbiAxNFwiLFxuXHRcIndvcmQgMTVcIjogXCJkZWZpbml0aW9uIDE1XCIsXG5cdFwid29yZCAxNlwiOiBcIkRlZmluaXRpb24gMTZcIixcblx0XCJ3b3JkIDE3XCI6IFwiRGVmaW50aW9uIDE3XCIsXG5cdFwid29yZCAxOFwiOiBcImRlZmluaXRpb24gMThcIixcblx0XCJ3b3JkIDE5XCI6IFwiZGVmaW5pdGlvbiAxOVwiLFxuXHRcIndvcmQgMjBcIjogXCJEZWZpbml0aW9uIDIwXCIsXG59O1xuXG5leHBvcnQgbGV0IHVuaXQ2X3ZvY2FiID0ge1xuXHRcInVuaXQgNiB3b3JkXCI6XG5cdFx0XCJEZWZpbml0aW9uIDEgdGhpcyBpcyBhIHRlc3QgdG8gc2VlIGhvdyBtYWtpbmcgdGhlIGRlZmluaXRpb24gYmlnZ2VyIGFmZmVjdHMgdGhlIGRpdiBzaXplXCIsXG5cdFwid29yZCAyXCI6IFwiREVGSU5JVElPTiAyXCIsXG5cdFwid29yZCAzXCI6IFwiREVGSU5JVElPTiAzXCIsXG5cdFwid29yZCA0XCI6IFwiREVGSU5JVElPTiA0XCIsXG5cdFwid29yZCA1XCI6IFwiRGVmaW5pdGlvbiA1XCIsXG5cdFwiV29yZCA2XCI6IFwiZGVmaW5pdGlvbiA2XCIsXG5cdFwid29yZCA3XCI6IFwiZGVmaW5pdGlvbiA3XCIsXG5cdFwid29yZCA4XCI6IFwiZGVmaW50aW9uIDhcIixcblx0XCJ3b3JkIDlcIjogXCJkZWZpbml0aW9uIDlcIixcblx0XCJ3b3JkIDEwXCI6IFwiZGVmaW5pdGlvbiAxMFwiLFxuXHRcIndvcmQgMTFcIjogXCJkZWZpbml0aW9uIDExXCIsXG5cdFwid29yZCAxMlwiOiBcIkRlZmluaXRpb24gMTJcIixcblx0XCJ3b3JkIDEzXCI6IFwiRGVmaW50aW9uIDEzXCIsXG5cdFwid29yZCAxNFwiOiBcImRlZmluaXRpb24gMTRcIixcblx0XCJ3b3JkIDE1XCI6IFwiZGVmaW5pdGlvbiAxNVwiLFxuXHRcIndvcmQgMTZcIjogXCJEZWZpbml0aW9uIDE2XCIsXG5cdFwid29yZCAxN1wiOiBcIkRlZmludGlvbiAxN1wiLFxuXHRcIndvcmQgMThcIjogXCJkZWZpbml0aW9uIDE4XCIsXG5cdFwid29yZCAxOVwiOiBcImRlZmluaXRpb24gMTlcIixcblx0XCJ3b3JkIDIwXCI6IFwiRGVmaW5pdGlvbiAyMFwiLFxufTtcblxuZXhwb3J0IGxldCB1bml0N192b2NhYiA9IHtcblx0XCJ1bml0IDcgd29yZFwiOlxuXHRcdFwiRGVmaW5pdGlvbiAxIHRoaXMgaXMgYSB0ZXN0IHRvIHNlZSBob3cgbWFraW5nIHRoZSBkZWZpbml0aW9uIGJpZ2dlciBhZmZlY3RzIHRoZSBkaXYgc2l6ZVwiLFxuXHRcIndvcmQgMlwiOiBcIkRFRklOSVRJT04gMlwiLFxuXHRcIndvcmQgM1wiOiBcIkRFRklOSVRJT04gM1wiLFxuXHRcIndvcmQgNFwiOiBcIkRFRklOSVRJT04gNFwiLFxuXHRcIndvcmQgNVwiOiBcIkRlZmluaXRpb24gNVwiLFxuXHRcIldvcmQgNlwiOiBcImRlZmluaXRpb24gNlwiLFxuXHRcIndvcmQgN1wiOiBcImRlZmluaXRpb24gN1wiLFxuXHRcIndvcmQgOFwiOiBcImRlZmludGlvbiA4XCIsXG5cdFwid29yZCA5XCI6IFwiZGVmaW5pdGlvbiA5XCIsXG5cdFwid29yZCAxMFwiOiBcImRlZmluaXRpb24gMTBcIixcblx0XCJ3b3JkIDExXCI6IFwiZGVmaW5pdGlvbiAxMVwiLFxuXHRcIndvcmQgMTJcIjogXCJEZWZpbml0aW9uIDEyXCIsXG5cdFwid29yZCAxM1wiOiBcIkRlZmludGlvbiAxM1wiLFxuXHRcIndvcmQgMTRcIjogXCJkZWZpbml0aW9uIDE0XCIsXG5cdFwid29yZCAxNVwiOiBcImRlZmluaXRpb24gMTVcIixcblx0XCJ3b3JkIDE2XCI6IFwiRGVmaW5pdGlvbiAxNlwiLFxuXHRcIndvcmQgMTdcIjogXCJEZWZpbnRpb24gMTdcIixcblx0XCJ3b3JkIDE4XCI6IFwiZGVmaW5pdGlvbiAxOFwiLFxuXHRcIndvcmQgMTlcIjogXCJkZWZpbml0aW9uIDE5XCIsXG5cdFwid29yZCAyMFwiOiBcIkRlZmluaXRpb24gMjBcIixcbn07XG5cbmV4cG9ydCBsZXQgdW5pdDhfdm9jYWIgPSB7XG5cdFwidW5pdCA4IHdvcmRcIjpcblx0XHRcIkRlZmluaXRpb24gMSB0aGlzIGlzIGEgdGVzdCB0byBzZWUgaG93IG1ha2luZyB0aGUgZGVmaW5pdGlvbiBiaWdnZXIgYWZmZWN0cyB0aGUgZGl2IHNpemVcIixcblx0XCJ3b3JkIDJcIjogXCJERUZJTklUSU9OIDJcIixcblx0XCJ3b3JkIDNcIjogXCJERUZJTklUSU9OIDNcIixcblx0XCJ3b3JkIDRcIjogXCJERUZJTklUSU9OIDRcIixcblx0XCJ3b3JkIDVcIjogXCJEZWZpbml0aW9uIDVcIixcblx0XCJXb3JkIDZcIjogXCJkZWZpbml0aW9uIDZcIixcblx0XCJ3b3JkIDdcIjogXCJkZWZpbml0aW9uIDdcIixcblx0XCJ3b3JkIDhcIjogXCJkZWZpbnRpb24gOFwiLFxuXHRcIndvcmQgOVwiOiBcImRlZmluaXRpb24gOVwiLFxuXHRcIndvcmQgMTBcIjogXCJkZWZpbml0aW9uIDEwXCIsXG5cdFwid29yZCAxMVwiOiBcImRlZmluaXRpb24gMTFcIixcblx0XCJ3b3JkIDEyXCI6IFwiRGVmaW5pdGlvbiAxMlwiLFxuXHRcIndvcmQgMTNcIjogXCJEZWZpbnRpb24gMTNcIixcblx0XCJ3b3JkIDE0XCI6IFwiZGVmaW5pdGlvbiAxNFwiLFxuXHRcIndvcmQgMTVcIjogXCJkZWZpbml0aW9uIDE1XCIsXG5cdFwid29yZCAxNlwiOiBcIkRlZmluaXRpb24gMTZcIixcblx0XCJ3b3JkIDE3XCI6IFwiRGVmaW50aW9uIDE3XCIsXG5cdFwid29yZCAxOFwiOiBcImRlZmluaXRpb24gMThcIixcblx0XCJ3b3JkIDE5XCI6IFwiZGVmaW5pdGlvbiAxOVwiLFxuXHRcIndvcmQgMjBcIjogXCJEZWZpbml0aW9uIDIwXCIsXG5cdFwid29yZCAyMVwiOiBcImRlZmluaXRpb24gMjFcIixcblx0XCJ3b3JkIDIyXCI6IFwiZGVmaW5pdGlvbiAyMlwiLFxuXHRcIndvcmQgMjNcIjogXCJEZWZpbml0aW9uIDIzXCIsXG5cdFwid29yZCAyNFwiOiBcImRlZmluaXRpb24gMjRcIixcblx0XCJ3b3JkIDI1XCI6IFwiZGVmaW5pdGlvbiAyNVwiLFxuXHRcIndvcmQgMjZcIjogXCJEZWZpbml0aW9uIDI2XCIsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBtb3ZlQ2Fyb3VzZWwgfSBmcm9tIFwiLi9tb2R1bGVzL2l0ZW0xXCI7XG5pbXBvcnQgeyB1bml0MV92b2NhYiB9IGZyb20gXCIuL21vZHVsZXMvdW5pdHNcIjtcbmltcG9ydCB7IHVuaXQyX3ZvY2FiIH0gZnJvbSBcIi4vbW9kdWxlcy91bml0c1wiO1xuaW1wb3J0IHsgdW5pdDNfdm9jYWIgfSBmcm9tIFwiLi9tb2R1bGVzL3VuaXRzXCI7XG5pbXBvcnQgeyB1bml0NF92b2NhYiB9IGZyb20gXCIuL21vZHVsZXMvdW5pdHNcIjtcbmltcG9ydCB7IHVuaXQ1X3ZvY2FiIH0gZnJvbSBcIi4vbW9kdWxlcy91bml0c1wiO1xuaW1wb3J0IHsgdW5pdDZfdm9jYWIgfSBmcm9tIFwiLi9tb2R1bGVzL3VuaXRzXCI7XG5pbXBvcnQgeyB1bml0N192b2NhYiB9IGZyb20gXCIuL21vZHVsZXMvdW5pdHNcIjtcbmltcG9ydCB7IHVuaXQ4X3ZvY2FiIH0gZnJvbSBcIi4vbW9kdWxlcy91bml0c1wiO1xuXG4vL0dsb2JhbCB2YXJpYWJsZXMgb24gbWFpbiBwYWdlXG5sZXQgdG9wcmlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcHJpZ2h0XCIpO1xubGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVidXR0b25cIik7XG5sZXQgaXRlbTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duMVwiKTtcbmxldCBpdGVtMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd24yXCIpO1xubGV0IGl0ZW0zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93bjNcIik7XG5sZXQgaXRlbTQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duNFwiKTtcbmxldCBpdGVtNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd241XCIpO1xubGV0IGl0ZW02ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93bjZcIik7XG5sZXQgaXRlbTcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duN1wiKTtcbmxldCBpdGVtOCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd244XCIpO1xubGV0IGJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tcIik7XG5sZXQgYm90dG9tcmlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdHRvbXJpZ2h0XCIpO1xuXG4vLyB3b3JkIGFuZCBkZWZpbml0aW9uIGJ1dHRvbnNcbmxldCB3b3JkMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yZDFcIik7XG5sZXQgZGVmaW5pdGlvbjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmluaXRpb24xXCIpO1xubGV0IHdvcmQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JkMlwiKTtcbmxldCBkZWZpbml0aW9uMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmaW5pdGlvbjJcIik7XG5sZXQgd29yZDMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmQzXCIpO1xubGV0IGRlZmluaXRpb24zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZpbml0aW9uM1wiKTtcbmxldCB3b3JkNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yZDRcIik7XG5sZXQgZGVmaW5pdGlvbjQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmluaXRpb240XCIpO1xubGV0IHdvcmQ1ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JkNVwiKTtcbmxldCBkZWZpbml0aW9uNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmaW5pdGlvbjVcIik7XG5sZXQgd29yZDYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmQ2XCIpO1xubGV0IGRlZmluaXRpb242ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZpbml0aW9uNlwiKTtcbmxldCB3b3JkNyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yZDdcIik7XG5sZXQgZGVmaW5pdGlvbjcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmluaXRpb243XCIpO1xubGV0IHdvcmQ4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JkOFwiKTtcbmxldCBkZWZpbml0aW9uOCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmaW5pdGlvbjhcIik7XG5cbi8vbWFrZSBkcm9wZG93biBjb250YW5pZXIgdmlzaWJsZVxuXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuXHRsZXQgdGVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd25jb250YWluZXJcIik7XG5cdHRlc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ2aXNpYmxlXCIpO1xufSk7XG5cbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgdGVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZVwiKTtcblx0dGVzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRyb3Bkb3duY29udGFpbmVyXCIpO1xufSk7XG5cbi8vbWFrZSBzd2ljaCBmb3IgZWFjaCB1bml0IHZpc2libGUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pdGVtMS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcblx0bGV0IHN3aXRjaDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaGNvbnRhaW5lcjFcIik7XG5cdHN3aXRjaDEuaWQgPSBcInZpc2libGVzd2l0Y2gxXCI7XG59KTtcblxuaXRlbTIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG5cdGxldCBzd2l0Y2gyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd2l0Y2hjb250YWluZXIyXCIpO1xuXHRzd2l0Y2gyLmlkID0gXCJ2aXNpYmxlc3dpdGNoMlwiO1xufSk7XG5cbml0ZW0zLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoY29udGFpbmVyM1wiKTtcblx0c3dpdGNoMy5pZCA9IFwidmlzaWJsZXN3aXRjaDNcIjtcbn0pO1xuXG5pdGVtNC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcblx0bGV0IHN3aXRjaDQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaGNvbnRhaW5lcjRcIik7XG5cdHN3aXRjaDQuaWQgPSBcInZpc2libGVzd2l0Y2g0XCI7XG59KTtcbml0ZW01LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoY29udGFpbmVyNVwiKTtcblx0c3dpdGNoNS5pZCA9IFwidmlzaWJsZXN3aXRjaDVcIjtcbn0pO1xuaXRlbTYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG5cdGxldCBzd2l0Y2g2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd2l0Y2hjb250YWluZXI2XCIpO1xuXHRzd2l0Y2g2LmlkID0gXCJ2aXNpYmxlc3dpdGNoNlwiO1xufSk7XG5pdGVtNy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcblx0bGV0IHN3aXRjaDcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaGNvbnRhaW5lcjdcIik7XG5cdHN3aXRjaDcuaWQgPSBcInZpc2libGVzd2l0Y2g3XCI7XG59KTtcbml0ZW04LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoOCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoY29udGFpbmVyOFwiKTtcblx0c3dpdGNoOC5pZCA9IFwidmlzaWJsZXN3aXRjaDhcIjtcbn0pO1xuLy9tYWtlIHN3aXRjaCBmb3IgZWFjaCB1bml0IGRpc2FwcGVhci0tLS0tLS0tLS0tLS0tLS1cbml0ZW0xLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcblx0bGV0IHN3aXRjaDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpc2libGVzd2l0Y2gxXCIpO1xuXHRzd2l0Y2gxLmlkID0gXCJzd2l0Y2hjb250YWluZXIxXCI7XG59KTtcblxuaXRlbTIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDJcIik7XG5cdHN3aXRjaDIuaWQgPSBcInN3aXRjaGNvbnRhaW5lcjJcIjtcbn0pO1xuaXRlbTMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDNcIik7XG5cdHN3aXRjaDMuaWQgPSBcInN3aXRjaGNvbnRhaW5lcjNcIjtcbn0pO1xuaXRlbTQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDRcIik7XG5cdHN3aXRjaDQuaWQgPSBcInN3aXRjaGNvbnRhaW5lcjRcIjtcbn0pO1xuaXRlbTUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDVcIik7XG5cdHN3aXRjaDUuaWQgPSBcInN3aXRjaGNvbnRhaW5lcjVcIjtcbn0pO1xuaXRlbTYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoNiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDZcIik7XG5cdHN3aXRjaDYuaWQgPSBcInN3aXRjaGNvbnRhaW5lcjZcIjtcbn0pO1xuaXRlbTcuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoNyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDdcIik7XG5cdHN3aXRjaDcuaWQgPSBcInN3aXRjaGNvbnRhaW5lcjdcIjtcbn0pO1xuaXRlbTguYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRsZXQgc3dpdGNoOCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZXN3aXRjaDhcIik7XG5cdHN3aXRjaDguaWQgPSBcInN3aXRjaGNvbnRhaW5lcjhcIjtcbn0pO1xuXG4vL2V2ZW50IGxpc3RlbmVyIGZvciBzZWxlY3Rpb24gb2YgY2hvaWNlIG9uIHVuaXQgMVxud29yZDEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0bW92ZUNhcm91c2VsKHVuaXQxX3ZvY2FiLCAwKTtcblx0dG9wcmlnaHQuaW5uZXJIVE1MID0gXCJTY2llbnRpZmljIE1ldGhvZFwiO1xufSk7XG5cbmRlZmluaXRpb24xLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdG1vdmVDYXJvdXNlbCh1bml0MV92b2NhYiwgMSk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiU2NpZW50aWZpYyBNZXRob2RcIjtcbn0pO1xuXG53b3JkMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRtb3ZlQ2Fyb3VzZWwodW5pdDJfdm9jYWIsIDApO1xuXHR0b3ByaWdodC5pbm5lckhUTUwgPSBcIkxpZmUgYW5kIENlbGxzXCI7XG59KTtcblxuZGVmaW5pdGlvbjIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0bW92ZUNhcm91c2VsKHVuaXQyX3ZvY2FiLCAxKTtcblx0dG9wcmlnaHQuaW5uZXJIVE1MID0gXCJMaWZlIGFuZCBDZWxsc1wiO1xufSk7XG5cbndvcmQzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdG1vdmVDYXJvdXNlbCh1bml0M192b2NhYiwgMCk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiTnV0cml0aW9uXCI7XG59KTtcblxuZGVmaW5pdGlvbjMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0bW92ZUNhcm91c2VsKHVuaXQzX3ZvY2FiLCAxKTtcblx0dG9wcmlnaHQuaW5uZXJIVE1MID0gXCJOdXRyaXRpb25cIjtcbn0pO1xud29yZDQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0bW92ZUNhcm91c2VsKHVuaXQ0X3ZvY2FiLCAwKTtcblx0dG9wcmlnaHQuaW5uZXJIVE1MID0gXCJSZXNwaXJhdGlvbi9QaG90b3N5bnRoZXNpc1wiO1xufSk7XG5cbmRlZmluaXRpb240LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdG1vdmVDYXJvdXNlbCh1bml0NF92b2NhYiwgMSk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiUmVzcGlyYXRpb24vUGhvdG9zeW50aGVzaXNcIjtcbn0pO1xud29yZDUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0bW92ZUNhcm91c2VsKHVuaXQ1X3ZvY2FiLCAwKTtcblx0dG9wcmlnaHQuaW5uZXJIVE1MID0gXCJIb21lb3N0YXNpc1wiO1xufSk7XG5cbmRlZmluaXRpb241LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdG1vdmVDYXJvdXNlbCh1bml0NV92b2NhYiwgMSk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiSG9tZW9zdGFzaXNcIjtcbn0pO1xuXG53b3JkNi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRtb3ZlQ2Fyb3VzZWwodW5pdDZfdm9jYWIsIDApO1xuXHR0b3ByaWdodC5pbm5lckhUTUwgPSBcIkdlbmV0aWNzXCI7XG59KTtcblxuZGVmaW5pdGlvbjYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0bW92ZUNhcm91c2VsKHVuaXQ2X3ZvY2FiLCAxKTtcblx0dG9wcmlnaHQuaW5uZXJIVE1MID0gXCJHZW5ldGljc1wiO1xufSk7XG53b3JkNy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRtb3ZlQ2Fyb3VzZWwodW5pdDdfdm9jYWIsIDApO1xuXHR0b3ByaWdodC5pbm5lckhUTUwgPSBcIkV2b2x1dGlvblwiO1xufSk7XG5cbmRlZmluaXRpb243LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdG1vdmVDYXJvdXNlbCh1bml0N192b2NhYiwgMSk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiRXZvbHV0aW9uXCI7XG59KTtcbndvcmQ4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdG1vdmVDYXJvdXNlbCh1bml0OF92b2NhYiwgMCk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiRWNvbG9neVwiO1xufSk7XG5cbmRlZmluaXRpb244LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdG1vdmVDYXJvdXNlbCh1bml0OF92b2NhYiwgMSk7XG5cdHRvcHJpZ2h0LmlubmVySFRNTCA9IFwiRWNvbG9neVwiO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=