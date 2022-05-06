(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[3604],{

/***/ "VHC9":
/*!*******************************************************************************!*\
  !*** ./ui/features/permissions/react/templates/allow_course_admin_actions.js ***!
  \*******************************************************************************/
/*! exports provided: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"template\", function() { return template; });\n/* harmony import */ var _canvas_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n */ \"HGxv\");\n/* harmony import */ var _generateActionTemplates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generateActionTemplates */ \"nkr0\");\n/*\n * Copyright (C) 2021 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\nconst I18n = Object(_canvas_i18n__WEBPACK_IMPORTED_MODULE_0__[\"useScope\"])('permissions_templates_1');\nconst template = Object(_generateActionTemplates__WEBPACK_IMPORTED_MODULE_1__[\"generateActionTemplates\"])([{\n  title: I18n.t('People (Course)'),\n  description: I18n.t('Allows user to view login ID information for users.')\n}, {\n  description: I18n.t('Allows user to view user details for course users.')\n}, {\n  description: I18n.t('Allows user to edit a user’s section or role (if not added via SIS).')\n}], [{\n  title: I18n.t('People (Account)'),\n  description: I18n.t('To edit user details, modify login details, or change user passwords, Users - manage login details must also be enabled.')\n}, {\n  title: I18n.t('People (Course)'),\n  description: I18n.t('To view the People page, Courses - view list must be enabled.')\n}, {\n  description: I18n.t('To add or remove users to a course, the appropriate Users permission must be enabled (e.g. Users - Teachers).')\n}, {\n  description: I18n.t('To view SIS IDs, SIS Data - read must be enabled.')\n}, {\n  description: I18n.t('To edit a user’s section, Conversations - send to individual course members must be enabled.')\n}, {\n  title: I18n.t('Observers (Course)'),\n  description: I18n.t('To link an observer to a student, Users - manage login details and Conversations - send to individual course members must be enabled.')\n}, {\n  description: I18n.t('To generate a pairing code on behalf of a student to share with an observer, Users - Generate observer pairing code for students must also be enabled.')\n}], [{\n  title: I18n.t('People'),\n  description: I18n.t('Allows user to view login ID information for users.')\n}, {\n  description: I18n.t('Allows user to view user details for course users.')\n}, {\n  description: I18n.t('Allows user to edit a user’s section or role (if not added via SIS).')\n}], [{\n  title: I18n.t('People'),\n  description: I18n.t('To view the People page, Courses - view list must be enabled.')\n}, {\n  description: I18n.t('To add or remove users to a course, the appropriate Users permission must be enabled (e.g. Users - Teachers).')\n}, {\n  description: I18n.t('To view SIS IDs, SIS Data - read must be enabled.')\n}, {\n  description: I18n.t('To edit a user’s section, Conversations - send to individual course members must be enabled.')\n}, {\n  title: I18n.t('Observers'),\n  description: I18n.t('To link an observer to a student, Conversations - send to individual course members must be enabled.')\n}, {\n  description: I18n.t('To generate a pairing code on behalf of a student to share with an observer, Users - Generate observer pairing code for students must also be enabled.')\n}]);\n\n//# sourceURL=webpack:///./ui/features/permissions/react/templates/allow_course_admin_actions.js?");

/***/ })

}]);