/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"Courier New\\\", Courier, monospace;\\n  font-weight: bold;\\n}\\n\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-color: #3635bd2e;\\n}\\n\\n#header {\\n  width: 100%;\\n  background-color: #abacb8;\\n}\\n\\n.logo {\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 15px;\\n  line-height: 20px;\\n  color: #1c1c1c;\\n}\\n\\n.logo a {\\n  text-decoration: none;\\n  font-size: 1.5rem;\\n  font-family: fantasy;\\n  color: #09fbff;\\n}\\n\\n.header-container {\\n  display: flex;\\n  justify-content: space-between;\\n  width: 79%;\\n  align-items: center;\\n  margin: 0 auto;\\n  height: 4rem;\\n}\\n\\n.logo img {\\n  width: 50px;\\n  padding-top: 10px;\\n}\\n\\n.navbar {\\n  display: flex;\\n  align-items: center;\\n  line-height: 4rem;\\n  width: 37%;\\n}\\n\\n.d-navbar {\\n  display: flex;\\n  list-style-type: none;\\n  flex-direction: row;\\n  width: 100%;\\n}\\n\\n.d-navbar li {\\n  margin-left: 1rem;\\n}\\n\\n.d-navbar li a {\\n  color: #080808;\\n  font-size: 18px;\\n  font-weight: bold;\\n}\\n\\n.a-navbar {\\n  text-decoration: none;\\n  height: 2em;\\n  padding: 0.5em 1em;\\n}\\n\\n.navbar .humberger i {\\n  font-size: 22px;\\n  font-weight: 600;\\n  color: #0a0a0a;\\n}\\n\\n.container {\\n  padding: 4em 0;\\n  justify-content: center;\\n  display: flex;\\n}\\n\\nul {\\n  list-style-type: none;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n  width: 80%;\\n}\\n\\n.dflex {\\n  display: flex;\\n}\\n\\n.meal-item {\\n  border-radius: 0.5em;\\n  background-color: white;\\n  display: flex;\\n  flex-direction: column;\\n  width: 32%;\\n  padding: 7px;\\n  margin: 1em 0;\\n  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.77);\\n  transition: 300ms ease-in-out;\\n}\\n\\n.meal-image {\\n  width: 100%;\\n  margin-bottom: 1em;\\n  border-radius: 0.5em;\\n}\\n\\n.meal-meta {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-bottom: 1em;\\n}\\n\\n.icn-btn {\\n  background: transparent;\\n  border: none;\\n  color: var(--secondary-color);\\n  padding: 12px 16px;\\n  font-size: 1em;\\n  cursor: pointer;\\n}\\n\\n.btn {\\n  padding: 0.5em;\\n  border-radius: 0.5em;\\n  border: 1px solid #6070ff;\\n  background: var(--primary-color);\\n  color: var(--background-color);\\n  background-color: #0000ff0d;\\n  font-size: 22px;\\n  transition: ease color 2s;\\n  cursor: pointer;\\n}\\n\\n.btn-alt {\\n  margin-top: 1em;\\n  color: var(--background-color);\\n  background: var(--secondary-color);\\n}\\n\\nfooter {\\n  width: 100%;\\n  justify-content: center;\\n  margin: auto;\\n  margin-top: 10px;\\n  flex-shrink: 0;\\n  background-color: #abacb8;\\n  bottom: 0;\\n  border-style: solid;\\n  font-size: 21px;\\n  text-align: center;\\n}\\n\\n.modal {\\n  display: none;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  height: 100vh;\\n  width: 100%;\\n  background: rgba(170, 176, 177, 0.72);\\n  backdrop-filter: blur(57px);\\n  overflow: scroll;\\n}\\n\\n.modal-content {\\n  background-color: #fefefe;\\n  margin: auto;\\n  padding: 20px;\\n  border: 1px solid #888;\\n  width: 80%;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.modal-details img {\\n  position: absolute;\\n  padding-top: 3rem;\\n  width: 34%;\\n  margin-left: 27rem;\\n}\\n\\n.modal-meta {\\n  padding-left: 27rem;\\n  padding-top: 33rem;\\n  position: absolute;\\n  display: flex;\\n  flex-direction: column;\\n  width: 67%;\\n}\\n\\n.comment-form input {\\n  height: 3rem;\\n}\\n\\n.all-comments {\\n  justify-content: center;\\n  display: flex;\\n  padding-top: 25px;\\n  flex-direction: column;\\n}\\n\\n.comment-form {\\n  display: flex;\\n  flex-direction: column;\\n  padding-top: 43px;\\n}\\n\\n.comment-meta {\\n  padding-right: 10px;\\n}\\n\\n.comment-li {\\n  display: flex;\\n  flex-direction: row;\\n  padding-top: 13px;\\n  gap: 35px;\\n}\\n\\n.close-modal {\\n  padding-left: 78rem;\\n  padding-top: 19px;\\n  position: absolute;\\n  font-size: 3rem;\\n}\\n\\nform .btn-alt {\\n  border: black;\\n  border-style: solid;\\n  border-radius: inherit;\\n}\\n\\n@media screen and (max-width: 600px) {\\n  .d-navbar {\\n    display: none;\\n  }\\n\\n  .container {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n  }\\n}\\n@media screen and (min-width: 600px) {\\n  .humberger {\\n    display: none;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://JS-Capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://JS-Capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://JS-Capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://JS-Capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://JS-Capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://JS-Capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://JS-Capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://JS-Capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://JS-Capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var _modules_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/counter */ \"./src/modules/counter.js\");\n/* harmony import */ var _modules_render_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/render/app */ \"./src/modules/render/app.js\");\n\n\n\n\n\n\nconst mealCounter = document.getElementById('meal-counter');\n\nconst endpoint = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';\nconst likesEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lvQFdeSbvijlsDX1Y4VY/likes/';\nconst displayMeals = () => {\n  Promise.all([\n    _modules_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getMeals(`${endpoint}`),\n    _modules_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getLikes(likesEndpoint),\n  ]).then((data) => {\n    (0,_modules_render_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data[0], data[1]);\n    const length = _modules_counter__WEBPACK_IMPORTED_MODULE_2__[\"default\"].meals(data[0].meals);\n    mealCounter.innerText = length;\n  });\n};\n\nwindow.addEventListener('load', displayMeals);\n\n\n//# sourceURL=webpack://JS-Capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/counter.js":
/*!********************************!*\
  !*** ./src/modules/counter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst counter = {\n  meals: (allMeals) => allMeals.length,\n  comments: (allComments) => allComments.length,\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);\n\n\n//# sourceURL=webpack://JS-Capstone/./src/modules/counter.js?");

/***/ }),

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API = {\n  getMeals: async (endpoint) => {\n    const res = await fetch(`${endpoint}`, { method: 'GET' });\n    if (!res.ok) {\n      throw new Error(`API error! status: ${res.status}`);\n    } else {\n      const data = await res.json();\n      return data;\n    }\n  },\n\n  getLikes: async () => {\n    const res = await fetch(\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lvQFdeSbvijlsDX1Y4VY/likes/',\n      { method: 'GET' },\n    );\n    if (!res.ok) {\n      throw new Error(`API error! status: ${res.status}`);\n    } else {\n      const data = await res.json();\n      return data;\n    }\n  },\n\n  postLike: async (itemId) => {\n    const res = await fetch(\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lvQFdeSbvijlsDX1Y4VY/likes/',\n      {\n        method: 'POST',\n        body: JSON.stringify({\n          item_id: itemId,\n        }),\n        headers: {\n          'Content-type': 'application/json; charset=UTF-8',\n        },\n      },\n    );\n    if (!res.ok) {\n      throw new Error(`API error! status: ${res.status}`);\n    } else {\n      const data = await res.text();\n      return data;\n    }\n  },\n\n  getComments: async (mealId) => {\n    const res = await fetch(\n      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lvQFdeSbvijlsDX1Y4VY/comments?item_id=${mealId}`,\n      { method: 'GET' },\n    );\n    if (!res.ok) {\n      return 'No comments available for this meal';\n    }\n    const data = await res.json();\n    return data;\n  },\n\n  postComment: async (itemId, username, comment) => {\n    const res = await fetch(\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lvQFdeSbvijlsDX1Y4VY/comments/',\n      {\n        method: 'POST',\n        body: JSON.stringify({\n          item_id: itemId,\n          username,\n          comment,\n        }),\n        headers: {\n          'Content-type': 'application/json; charset=UTF-8',\n        },\n      },\n    );\n    if (!res.ok) {\n      throw new Error(`API error! status: ${res.status}`);\n    } else {\n      const data = await res.text();\n      return data;\n    }\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);\n\n\n//# sourceURL=webpack://JS-Capstone/./src/modules/data.js?");

/***/ }),

/***/ "./src/modules/involvement.js":
/*!************************************!*\
  !*** ./src/modules/involvement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst involvement = {\n  likes: (likesData, mealID) => {\n    const mealLikes = likesData.find((i) => i.item_id === mealID);\n    if (mealLikes !== undefined) {\n      return mealLikes.likes;\n    }\n    return 0;\n  },\n\n  comments: (commentsData, mealID) => {\n    const commentLists = commentsData.find((i) => i.item_id === mealID);\n    if (commentLists !== undefined) {\n      return commentLists.comments;\n    }\n    return 0;\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (involvement);\n\n\n//# sourceURL=webpack://JS-Capstone/./src/modules/involvement.js?");

/***/ }),

/***/ "./src/modules/render/app.js":
/*!***********************************!*\
  !*** ./src/modules/render/app.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ \"./src/modules/data.js\");\n/* harmony import */ var _involvement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../involvement */ \"./src/modules/involvement.js\");\n/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments */ \"./src/modules/render/comments.js\");\n\n\n\n\nconst ul = document.getElementById('meal-list');\nconst commentModal = document.getElementById('modal-comment');\n\nconst meals = (mealsData, likesData) => {\n  const { meals } = mealsData;\n\n  meals.forEach((mealItem) => {\n    const li = document.createElement('li');\n    li.className = 'meal-item';\n\n    const img = document.createElement('img');\n    img.src = mealItem.strMealThumb;\n    img.className = 'meal-image';\n    li.appendChild(img);\n\n    const div = document.createElement('div');\n    div.className = 'meal-meta';\n    li.appendChild(div);\n\n    const p = document.createElement('p');\n    p.className = 'meal-title';\n    p.innerText = mealItem.strMeal;\n    div.appendChild(p);\n\n    const likeSection = document.createElement('div');\n    likeSection.className = 'like-section';\n    div.appendChild(likeSection);\n    const likeBtn = document.createElement('button');\n    likeBtn.className = 'icn-btn like-btn';\n\n    likeSection.appendChild(likeBtn);\n    const likeIcon = document.createElement('i');\n    likeIcon.className = 'far fa-heart';\n\n    likeBtn.appendChild(likeIcon);\n    const likeCount = document.createElement('p');\n    likeCount.className = 'like-count';\n    likeCount.innerText = _involvement__WEBPACK_IMPORTED_MODULE_1__[\"default\"].likes(likesData, mealItem.idMeal);\n    likeBtn.onclick = async () => {\n      await _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].postLike(mealItem.idMeal);\n      const likesData = await _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getLikes().then((data) => data);\n      likeCount.innerText = _involvement__WEBPACK_IMPORTED_MODULE_1__[\"default\"].likes(likesData, mealItem.idMeal);\n    };\n    likeSection.appendChild(likeCount);\n\n    const commentBtn = document.createElement('button');\n    commentBtn.className = 'btn';\n    commentBtn.innerText = 'Comment';\n    commentBtn.addEventListener('click', () => {\n      if (commentModal.hasChildNodes()) {\n        commentModal.innerHTML = '';\n      } else {\n        (0,_comments__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(mealItem);\n        commentModal.style.display = 'block';\n      }\n    });\n    li.appendChild(commentBtn);\n    ul.appendChild(li);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meals);\n\n\n//# sourceURL=webpack://JS-Capstone/./src/modules/render/app.js?");

/***/ }),

/***/ "./src/modules/render/comments.js":
/*!****************************************!*\
  !*** ./src/modules/render/comments.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ \"./src/modules/data.js\");\n/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../counter */ \"./src/modules/counter.js\");\n\n\n\nconst modal = document.getElementById('modal-comment');\n\nconst displayComments = (ul, userComment) => {\n  const comment = document.createElement('li');\n  comment.className = 'comment-li';\n  const commentMeta = document.createElement('div');\n  commentMeta.className = 'comment-meta';\n  comment.appendChild(commentMeta);\n  const name = document.createElement('p');\n  name.style.textTransform = 'Capitalize';\n  name.innerText = userComment.username;\n\n  const date = document.createElement('p');\n  date.className = 'no-comments';\n  date.innerText = userComment.creation_date;\n  commentMeta.appendChild(name);\n  commentMeta.appendChild(date);\n  const message = document.createElement('p');\n  message.innerText = userComment.comment;\n  message.style.textTransform = 'Capitalize';\n  comment.appendChild(message);\n  ul.appendChild(comment);\n};\n\nconst commentModal = (meal) => {\n  const modalInner = document.createElement('div');\n  modalInner.className = 'modal-inner';\n  const modalHeader = document.createElement('div');\n  modalHeader.className = 'modal-header';\n  modalInner.appendChild(modalHeader);\n  const closeBtn = document.createElement('button');\n  closeBtn.className = 'close-modal icn-btn';\n  closeBtn.innerHTML = '&times;';\n  closeBtn.addEventListener('click', () => {\n    modal.style.display = 'none';\n  });\n  modalHeader.appendChild(closeBtn);\n  const modalDetails = document.createElement('div');\n  modalDetails.className = 'modal-details';\n  modalInner.appendChild(modalDetails);\n  const modalImg = document.createElement('img');\n  modalImg.className = 'modal-img';\n  modalImg.src = meal.strMealThumb;\n  modalDetails.appendChild(modalImg);\n  const modalMeta = document.createElement('div');\n  modalMeta.className = 'modal-meta';\n  modalDetails.appendChild(modalMeta);\n  const modalTitle = document.createElement('h4');\n  modalTitle.className = 'modal-title';\n  modalTitle.innerText = meal.strMeal;\n  modalMeta.appendChild(modalTitle);\n  const modalDesc = document.createElement('p');\n  modalDesc.className = 'modal-desc';\n  modalDesc.innerText = meal.strInstructions;\n  modalMeta.appendChild(modalDesc);\n\n  const allComments = document.createElement('div');\n  allComments.className = 'all-comments';\n  modalMeta.appendChild(allComments);\n  const allCommentsTitle = document.createElement('h1');\n  allCommentsTitle.className = 'all-comments-title';\n  allCommentsTitle.innerText = 'All Comments';\n  allComments.appendChild(allCommentsTitle);\n  const commentUl = document.createElement('ul');\n  commentUl.className = 'comment-ul';\n  _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getComments(meal.idMeal).then((data) => {\n    if (data === 'No comments available for this meal') {\n      commentUl.innerHTML = `<li class=\"no-comments\">${`${data}. Add a new comment`}</li>`;\n    } else {\n      const commentCounter = _counter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].comments(data);\n      allCommentsTitle.innerText = `All Comments(${commentCounter})`;\n      data.forEach((userComment) => {\n        displayComments(commentUl, userComment);\n      });\n    }\n  });\n  allComments.appendChild(commentUl);\n  const form = document.createElement('form');\n  form.className = 'comment-form';\n  modalMeta.appendChild(form);\n  const formTitle = document.createElement('h1');\n  formTitle.className = 'comment-form-title';\n  formTitle.innerText = 'Add a comment';\n  form.appendChild(formTitle);\n  const commenterName = document.createElement('input');\n  commenterName.type = 'text';\n  commenterName.name = 'commenter';\n  commenterName.placeholder = 'Your Name';\n  commenterName.attributes.required = true;\n  form.appendChild(commenterName);\n  const commenterMessage = document.createElement('textarea');\n  commenterMessage.rows = 5;\n  commenterMessage.className = 'comment-message';\n  commenterMessage.placeholder = 'Your Message';\n  form.appendChild(commenterMessage);\n  const formButton = document.createElement('button');\n  formButton.className = 'btn btn-alt';\n  formButton.innerHTML = 'Add Comment';\n  form.appendChild(formButton);\n  formButton.onclick = (e) => {\n    e.preventDefault();\n    _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].postComment(\n      meal.idMeal,\n      commenterName.value,\n      commenterMessage.value,\n    ).then(() => {\n      if (commentUl.hasChildNodes()) {\n        commentUl.innerHTML = '';\n        _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getComments(meal.idMeal).then((data) => {\n          if (data === 'No comments available for this meal') {\n            commentUl.innerHTML = `<li class=\"no-comments\">${`${data}. Add a new comment`}</li>`;\n          } else {\n            data.forEach((userComment) => {\n              displayComments(commentUl, userComment);\n            });\n          }\n        });\n      }\n    });\n    commenterName.value = '';\n    commenterMessage.value = '';\n  };\n\n  modal.appendChild(modalInner);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentModal);\n\n//# sourceURL=webpack://JS-Capstone/./src/modules/render/comments.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;