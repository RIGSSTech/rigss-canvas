(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["confirm_email"],{

/***/ "EyB0":
/*!********************************************!*\
  !*** ./ui/features/confirm_email/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_util_jquery_confirmEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/util/jquery/confirmEmail */ \"VVh5\");\n/*\n * Copyright (C) 2012 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n//# sourceURL=webpack:///./ui/features/confirm_email/index.js?");

/***/ }),

/***/ "VVh5":
/*!***********************************************!*\
  !*** ./ui/shared/util/jquery/confirmEmail.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _canvas_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @canvas/i18n */ \"HGxv\");\n/* harmony import */ var prevent_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prevent-default */ \"qqwe\");\n/* harmony import */ var _canvas_jquery_jquery_ajaxJSON__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @canvas/jquery/jquery.ajaxJSON */ \"dhbk\");\n/* harmony import */ var _canvas_rails_flash_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @canvas/rails-flash-notifications */ \"r2Yr\");\n//\n// Copyright (C) 2012 - present Instructure, Inc.\n//\n// This file is part of Canvas.\n//\n// Canvas is free software: you can redistribute it and/or modify it under\n// the terms of the GNU Affero General Public License as published by the Free\n// Software Foundation, version 3 of the License.\n//\n// Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n// A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n// details.\n//\n// You should have received a copy of the GNU Affero General Public License along\n// with this program. If not, see <http://www.gnu.org/licenses/>.\n\n\n\n\n\nconst I18n = Object(_canvas_i18n__WEBPACK_IMPORTED_MODULE_1__[\"useScope\"])('profile');\njquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {\n  let resending = false;\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.re_send_confirmation_link').click(Object(prevent_default__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function () {\n    const $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);\n    const text = $this.text();\n    if (resending) return;\n    resending = true;\n    $this.text(I18n.t('resending', 'resending...'));\n    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajaxJSON($this.attr('href'), 'POST', {}, data => {\n      resending = false;\n      $this.text(text);\n      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.flashMessage(I18n.t('done_resending', 'Done! Message delivery may take a few minutes.'));\n    }, data => {\n      resending = false;\n      $this.text(text);\n      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.flashError(I18n.t('failed_resending', 'Request failed. Try again.'));\n    });\n  }));\n});\n\n//# sourceURL=webpack:///./ui/shared/util/jquery/confirmEmail.js?");

/***/ })

}]);