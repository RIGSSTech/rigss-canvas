(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[102],{

/***/ "5OOk":
/*!*********************************************************!*\
  !*** ./ui/shared/due-dates/react/CoursePacingNotice.js ***!
  \*********************************************************/
/*! exports provided: renderCoursePacingNotice, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCoursePacingNotice\", function() { return renderCoursePacingNotice; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"i8i4\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _canvas_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @canvas/i18n */ \"HGxv\");\n/* harmony import */ var _instructure_ui_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @instructure/ui-alerts */ \"spba\");\n/* harmony import */ var _instructure_ui_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @instructure/ui-link */ \"dlTp\");\n/* harmony import */ var _instructure_ui_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @instructure/ui-view */ \"OkHH\");\n/*\n * Copyright (C) 2022 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n\n\nconst I18n = Object(_canvas_i18n__WEBPACK_IMPORTED_MODULE_2__[\"useScope\"])('shared_due_dates_react_due_dates_in_course_pacing');\n\nconst CoursePacingNotice = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_view__WEBPACK_IMPORTED_MODULE_5__[\"View\"], {\n    as: \"div\",\n    margin: \"medium 0 0 0\",\n    \"data-testid\": \"CoursePacingNotice\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_alerts__WEBPACK_IMPORTED_MODULE_3__[\"Alert\"], {\n    variant: \"info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_view__WEBPACK_IMPORTED_MODULE_5__[\"View\"], {\n    as: \"div\",\n    margin: \"0 0 small 0\"\n  }, I18n.t('This course is using Course Pacing. Go to Course Pacing to manage due dates.')), props.courseId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_link__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n    href: `/courses/${props.courseId}/course_pacing`\n  }, I18n.t('Course Pacing'))));\n};\n\nfunction renderCoursePacingNotice(mountPoint, courseId) {\n  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CoursePacingNotice, {\n    courseId: courseId\n  }), mountPoint);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoursePacingNotice);\n\n//# sourceURL=webpack:///./ui/shared/due-dates/react/CoursePacingNotice.js?");

/***/ })

}]);