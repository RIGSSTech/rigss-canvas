(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["canvas-rce-async-chunk"],{

/***/ "QLaP":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\n/**\n * Use invariant() to assert state which your program assumes to be true.\n *\n * Provide sprintf-style format (only %s is supported) and arguments\n * to provide information about what broke and what you were\n * expecting.\n *\n * The invariant message will be stripped in production, but the invariant\n * will remain to ensure logic does not differ in production.\n */\n\nvar invariant = function(condition, format, a, b, c, d, e, f) {\n  if (true) {\n    if (format === undefined) {\n      throw new Error('invariant requires an error message argument');\n    }\n  }\n\n  if (!condition) {\n    var error;\n    if (format === undefined) {\n      error = new Error(\n        'Minified exception occurred; use the non-minified dev environment ' +\n        'for the full error message and additional helpful warnings.'\n      );\n    } else {\n      var args = [a, b, c, d, e, f];\n      var argIndex = 0;\n      error = new Error(\n        format.replace(/%s/g, function() { return args[argIndex++]; })\n      );\n      error.name = 'Invariant Violation';\n    }\n\n    error.framesToPop = 1; // we don't care about invariant's own frame\n    throw error;\n  }\n};\n\nmodule.exports = invariant;\n\n\n//# sourceURL=webpack:///./node_modules/invariant/browser.js?");

/***/ }),

/***/ "TZ14":
/*!********************************************!*\
  !*** ./packages/canvas-rce/es/rce/root.js ***!
  \********************************************/
/*! exports provided: renderIntoDiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderIntoDiv\", function() { return renderIntoDiv; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"i8i4\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _RCEWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RCEWrapper */ \"Jvcl\");\n/* harmony import */ var _normalizeProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./normalizeProps */ \"cymJ\");\n/* harmony import */ var _format_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../format-message */ \"NFDp\");\nvar _process, _process$env;\n\n/*\n * Copyright (C) 2018 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n\n\nif (!((_process = process) !== null && _process !== void 0 && (_process$env = _process.env) !== null && _process$env !== void 0 && _process$env.BUILD_LOCALE)) {\n  _format_message__WEBPACK_IMPORTED_MODULE_4__[\"default\"].setup({\n    locale: 'en',\n    generateId: __webpack_require__(/*! format-message-generate-id/underscored_crc32 */ \"syYy\"),\n    missingTranslation: 'ignore'\n  });\n}\n\nfunction renderIntoDiv(target, props, renderCallback) {\n  Promise.all(/*! import() */[__webpack_require__.e(23), __webpack_require__.e(28), __webpack_require__.e(38), __webpack_require__.e(42), __webpack_require__.e(50), __webpack_require__.e(57), __webpack_require__.e(68), __webpack_require__.e(69), __webpack_require__.e(80), __webpack_require__.e(89), __webpack_require__.e(3791)]).then(__webpack_require__.bind(null, /*! ./tinyRCE */ \"5+Bo\")).then(module => {\n    const tinyRCE = module.default; // normalize props\n\n    props = Object(_normalizeProps__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(props, tinyRCE);\n    _format_message__WEBPACK_IMPORTED_MODULE_4__[\"default\"].setup({\n      locale: props.language\n    }); // render the editor to the target element\n\n    const renderedComponent = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createRef\"])();\n    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RCEWrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], Object.assign({\n      ref: renderedComponent\n    }, props, {\n      handleUnmount: () => Object(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"unmountComponentAtNode\"])(target)\n    })), target, () => {\n      // pass it back\n      renderCallback && renderCallback(renderedComponent.current);\n    });\n  }).catch(err => {\n    // eslint-disable-next-line no-console\n    console.error('Failed loading RCE', err);\n  });\n} // Adding this event listener fixes LA-212. I have no idea why. In Safari it\n// lets the user scroll the iframe via the mouse wheel without having to resize\n// the RCE or the window or something else first.\n\nif (window) window.addEventListener('wheel', () => {});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ \"8oxB\")))\n\n//# sourceURL=webpack:///./packages/canvas-rce/es/rce/root.js?");

/***/ }),

/***/ "cymJ":
/*!******************************************************!*\
  !*** ./packages/canvas-rce/es/rce/normalizeProps.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wrapInitCb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapInitCb */ \"7Jtz\");\n/*\n * Copyright (C) 2018 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props, tinymce) {\n  const initialEditorOptions = props.editorOptions(tinymce);\n  const editorOptions = Object(_wrapInitCb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props.mirroredAttrs, initialEditorOptions);\n  return { // other props, including overrides\n    ...props,\n    // enforced values, in addition to props and cannot be overridden by\n    // props\n    editorOptions,\n    tinymce\n  };\n});\n\n//# sourceURL=webpack:///./packages/canvas-rce/es/rce/normalizeProps.js?");

/***/ }),

/***/ "dI71":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _inheritsLoose; });\n/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ \"s4An\");\n\nfunction _inheritsLoose(subClass, superClass) {\n  subClass.prototype = Object.create(superClass.prototype);\n  subClass.prototype.constructor = subClass;\n  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subClass, superClass);\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js?");

/***/ }),

/***/ "j/Fk":
/*!*************************************!*\
  !*** ./ui/shared/rce/canvas-rce.js ***!
  \*************************************/
/*! exports provided: defaultConfiguration, renderIntoDiv, getRCSAuthenticationHeaders, getRCSOriginFromHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _instructure_canvas_rce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @instructure/canvas-rce */ \"oBik\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"defaultConfiguration\", function() { return _instructure_canvas_rce__WEBPACK_IMPORTED_MODULE_0__[\"defaultConfiguration\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"renderIntoDiv\", function() { return _instructure_canvas_rce__WEBPACK_IMPORTED_MODULE_0__[\"renderIntoDiv\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getRCSAuthenticationHeaders\", function() { return _instructure_canvas_rce__WEBPACK_IMPORTED_MODULE_0__[\"getRCSAuthenticationHeaders\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getRCSOriginFromHost\", function() { return _instructure_canvas_rce__WEBPACK_IMPORTED_MODULE_0__[\"getRCSOriginFromHost\"]; });\n\n/*\n * Copyright (C) 2019 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n//# sourceURL=webpack:///./ui/shared/rce/canvas-rce.js?");

/***/ }),

/***/ "oBik":
/*!*****************************************!*\
  !*** ./packages/canvas-rce/es/index.js ***!
  \*****************************************/
/*! exports provided: defaultConfiguration, renderIntoDiv, getRCSAuthenticationHeaders, getRCSOriginFromHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultConfiguration\", function() { return defaultConfiguration; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderIntoDiv\", function() { return renderIntoDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRCSAuthenticationHeaders\", function() { return getRCSAuthenticationHeaders; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRCSOriginFromHost\", function() { return getRCSOriginFromHost; });\n/* harmony import */ var _rce_normalizeLocale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rce/normalizeLocale */ \"0T/Z\");\n/* harmony import */ var _rce_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rce/root */ \"TZ14\");\n/* harmony import */ var _rcs_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rcs/api */ \"n/1O\");\n/* harmony import */ var _getTranslations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getTranslations */ \"k3+9\");\n/* harmony import */ var _defaultTinymceConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaultTinymceConfig */ \"ErZx\");\n/*\n * Copyright (C) 2018 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n\nconst defaultConfiguration = _defaultTinymceConfig__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\nfunction renderIntoDiv(editorEl, props, cb) {\n  const language = Object(_rce_normalizeLocale__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props.language);\n\n  if (undefined || language === 'en') {\n    Object(_rce_root__WEBPACK_IMPORTED_MODULE_1__[\"renderIntoDiv\"])(editorEl, props, cb);\n  } else {\n    // unlike the pretranslated builds, in the default, non-pretranslated build,\n    // this will cause a new network round trip to get all the locale info the rce\n    // and tinymce need.\n    Object(_getTranslations__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(language).then(() => Object(_rce_root__WEBPACK_IMPORTED_MODULE_1__[\"renderIntoDiv\"])(editorEl, props, cb)).catch(err => {\n      // eslint-disable-next-line no-console\n      console.error('Failed loading the language file for', language, 'RCE is falling back to English.\\n Cause:', err);\n      Object(_rce_root__WEBPACK_IMPORTED_MODULE_1__[\"renderIntoDiv\"])(editorEl, props, cb);\n    });\n  }\n}\nfunction getRCSAuthenticationHeaders(jwt) {\n  return Object(_rcs_api__WEBPACK_IMPORTED_MODULE_2__[\"headerFor\"])(jwt);\n}\nfunction getRCSOriginFromHost(host) {\n  return Object(_rcs_api__WEBPACK_IMPORTED_MODULE_2__[\"originFromHost\"])(host);\n}\n\n//# sourceURL=webpack:///./packages/canvas-rce/es/index.js?");

/***/ }),

/***/ "wx14":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _extends; });\nfunction _extends() {\n  _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/extends.js?");

/***/ })

}]);