(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["all_courses"],{

/***/ "mo2D":
/*!******************************************!*\
  !*** ./ui/features/all_courses/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n */ \"HGxv\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _instructure_ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @instructure/ready */ \"3lLS\");\n/* harmony import */ var _instructure_ready__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_instructure_ready__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jqueryui_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqueryui/dialog */ \"ESjL\");\n/*\n * Copyright (C) 2013 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\nconst I18n = Object(_canvas_i18n__WEBPACK_IMPORTED_MODULE_0__[\"useScope\"])('catalog');\nconst startupHost = window.location.host;\n\nfunction fetchCourses() {\n  // Defense-in-depth... it's hard to see how this could happen given\n  // the places in which this function is given control, but let's just\n  // make absolutely sure that we never load off-application HTML into\n  // the #catalog_content div.\n  if (window.location.host !== startupHost) return;\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#catalog_content').load(window.location.href);\n}\n\nfunction handleNav(e) {\n  let url;\n\n  if (!window.history.pushState) {\n    return;\n  }\n\n  if (this.href) {\n    url = this.href;\n  } else {\n    url = `${this.action}?${jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).serialize()}`;\n  }\n\n  window.history.pushState(null, '', url);\n  fetchCourses();\n  e.preventDefault();\n}\n\nfunction handleCourseClick(e) {\n  const link = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.target).closest('.course_enrollment_link')[0];\n\n  if (!link) {\n    const $course = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.target).closest('.course_summary');\n\n    if ($course.length && !jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.target).is('a')) {\n      $course.find('h3 a')[0].click();\n    }\n\n    return;\n  }\n\n  const $dialog = jquery__WEBPACK_IMPORTED_MODULE_1___default()('<div>');\n  const $iframe = jquery__WEBPACK_IMPORTED_MODULE_1___default()('<iframe>', {\n    style: 'position:absolute;top:0;left:0;width:100%;height:100%;border:none',\n    src: `${link.href}?embedded=1&no_headers=1`,\n    title: I18n.t('Course Catalog')\n  });\n  $dialog.append($iframe);\n  $dialog.dialog({\n    width: 550,\n    height: 500,\n    resizable: false\n  });\n  e.preventDefault();\n}\n\n_instructure_ready__WEBPACK_IMPORTED_MODULE_2___default()(() => {\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#course_filter').submit(handleNav);\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#catalog_content').on('click', '#previous-link', handleNav);\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#catalog_content').on('click', '#next-link', handleNav);\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#catalog_content').on('click', '#course_summaries', handleCourseClick);\n  window.addEventListener('popstate', fetchCourses);\n});\n\n//# sourceURL=webpack:///./ui/features/all_courses/index.js?");

/***/ })

}]);