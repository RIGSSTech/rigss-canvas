(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["user_outcome_results"],{

/***/ "3hQY":
/*!***************************************************!*\
  !*** ./ui/features/user_outcome_results/index.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _canvas_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @canvas/i18n */ \"HGxv\");\n//\n// Copyright (C) 2014 - present Instructure, Inc.\n//\n// This file is part of Canvas.\n//\n// Canvas is free software: you can redistribute it and/or modify it under\n// the terms of the GNU Affero General Public License as published by the Free\n// Software Foundation, version 3 of the License.\n//\n// Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n// A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n// details.\n//\n// You should have received a copy of the GNU Affero General Public License along\n// with this program. If not, see <http://www.gnu.org/licenses/>.\n\n\nconst I18n = Object(_canvas_i18n__WEBPACK_IMPORTED_MODULE_1__[\"useScope\"])('outcomes.user_outcome_results');\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(() => {\n  const showAllArtifacts = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#show_all_artifacts_link');\n  showAllArtifacts.click(event => {\n    event.preventDefault();\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('tr.artifact_details').toggle();\n\n    if (showAllArtifacts.text() === I18n.t('Show All Artifacts')) {\n      showAllArtifacts.text(I18n.t('Hide All Artifacts'));\n    } else {\n      showAllArtifacts.text(I18n.t('Show All Artifacts'));\n    }\n  });\n});\n\n//# sourceURL=webpack:///./ui/features/user_outcome_results/index.js?");

/***/ })

}]);