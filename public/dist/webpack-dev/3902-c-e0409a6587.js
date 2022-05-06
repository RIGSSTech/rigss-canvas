(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[3902],{

/***/ "VQkp":
/*!*****************************************************************************************************************************!*\
  !*** ./packages/canvas-rce/es/rce/plugins/instructure_buttons/components/CreateButtonForm/ImageSection/MultiColor/index.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SVGList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SVGList */ \"3ixB\");\n/* harmony import */ var _reducers_imageSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../reducers/imageSection */ \"wJzv\");\n/* harmony import */ var _svg_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../svg/utils */ \"cjS9\");\n/*\n * Copyright (C) 2022 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n\n\nconst MultiColor = ({\n  dispatch,\n  onLoaded\n}) => {\n  const onSelect = svg => {\n    dispatch({ ..._reducers_imageSection__WEBPACK_IMPORTED_MODULE_3__[\"actions\"].START_LOADING\n    });\n    dispatch({ ..._reducers_imageSection__WEBPACK_IMPORTED_MODULE_3__[\"actions\"].SET_IMAGE_NAME,\n      payload: svg.label\n    });\n    Object(_svg_utils__WEBPACK_IMPORTED_MODULE_4__[\"convertFileToBase64\"])(new Blob([svg.source()], {\n      type: 'image/svg+xml'\n    })).then(base64Image => {\n      dispatch({ ..._reducers_imageSection__WEBPACK_IMPORTED_MODULE_3__[\"actions\"].SET_IMAGE,\n        payload: base64Image\n      });\n      dispatch({ ..._reducers_imageSection__WEBPACK_IMPORTED_MODULE_3__[\"actions\"].SET_IMAGE_COLLECTION_OPEN,\n        payload: false\n      });\n      dispatch({ ..._reducers_imageSection__WEBPACK_IMPORTED_MODULE_3__[\"actions\"].STOP_LOADING\n      });\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SVGList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    type: _SVGList__WEBPACK_IMPORTED_MODULE_2__[\"TYPE\"].Multicolor,\n    onSelect: onSelect,\n    onMount: onLoaded\n  });\n};\n\nMultiColor.propTypes = {\n  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  onLoaded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\nMultiColor.defaultProps = {\n  dispatch: () => {},\n  onLoaded: () => {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MultiColor);\n\n//# sourceURL=webpack:///./packages/canvas-rce/es/rce/plugins/instructure_buttons/components/CreateButtonForm/ImageSection/MultiColor/index.js?");

/***/ })

}]);