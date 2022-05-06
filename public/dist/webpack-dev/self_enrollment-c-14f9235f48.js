(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["self_enrollment"],{

/***/ "+p23":
/*!***************************************!*\
  !*** ./packages/obj-flatten/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return flatten; });\n//\n// Copyright (C) 2012 - present Instructure, Inc.\n//\n// This file is part of Canvas.\n//\n// Canvas is free software: you can redistribute it and/or modify it under\n// the terms of the GNU Affero General Public License as published by the Free\n// Software Foundation, version 3 of the License.\n//\n// Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n// A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n// details.\n//\n// You should have received a copy of the GNU Affero General Public License along\n// with this program. If not, see <http://www.gnu.org/licenses/>.\n\n// turns {foo: {bar: 1}} into {'foo[bar]': 1}\nfunction flatten(obj, options = {}, result = {}, prefix) {\n  for (let key in obj) {\n    const value = obj[key]\n    key = prefix ? `${prefix}[${key}]` : key\n    let flattenable = typeof value === 'object'\n    if (value.length != null && options.arrays === false) {\n      flattenable = false\n    }\n    if (flattenable) {\n      flatten(value, options, result, key)\n    } else {\n      result[key] = value\n    }\n  }\n  return result\n}\n\n\n//# sourceURL=webpack:///./packages/obj-flatten/index.js?");

/***/ }),

/***/ "/lKC":
/*!**************************************************************************!*\
  !*** ./ui/features/self_enrollment/backbone/views/SelfEnrollmentForm.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SelfEnrollmentForm; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _canvas_backbone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @canvas/backbone */ \"mX+G\");\n/* harmony import */ var _canvas_backbone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_canvas_backbone__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _canvas_normalize_registration_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @canvas/normalize-registration-errors */ \"GGFl\");\n/* harmony import */ var _canvas_forms_jquery_jquery_instructure_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @canvas/forms/jquery/jquery.instructure_forms */ \"Dhso\");\n/* harmony import */ var _canvas_jquery_jquery_ajaxJSON__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @canvas/jquery/jquery.ajaxJSON */ \"dhbk\");\n//\n// Copyright (C) 2012 - present Instructure, Inc.\n//\n// This file is part of Canvas.\n//\n// Canvas is free software: you can redistribute it and/or modify it under\n// the terms of the GNU Affero General Public License as published by the Free\n// Software Foundation, version 3 of the License.\n//\n// Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n// A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n// details.\n//\n// You should have received a copy of the GNU Affero General Public License along\n// with this program. If not, see <http://www.gnu.org/licenses/>.\n//\n\n\n\n\n\nclass SelfEnrollmentForm extends _canvas_backbone__WEBPACK_IMPORTED_MODULE_1___default.a.View {\n  static initClass() {\n    this.prototype.events = {\n      'change input[name=initial_action]': 'changeAction',\n      'click #logout_link': 'logOutAndRefresh'\n    };\n  }\n\n  initialize(options = {}) {\n    this.options = options;\n    super.initialize(...arguments);\n    this.enrollUrl = this.$el.attr('action');\n    this.action = this.initialAction = this.$el.find('input[type=hidden][name=initial_action]').val();\n\n    if (ENV.ACCOUNT.recaptcha_key) {\n      const that = this;\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load', function () {\n        that.dataCaptchaId = grecaptcha.render(that.$el.find('.g-recaptcha')[0], {\n          sitekey: ENV.ACCOUNT.recaptcha_key,\n          callback: () => {\n            that.recaptchaPassed = true;\n            that.$el.find('#submit_button').prop('disabled', false);\n          },\n          'expired-callback': () => {\n            that.recaptchaPassed = false;\n            that.$el.find('#submit_button').prop('disabled', true);\n          }\n        });\n      });\n\n      if (this.action == 'create') {\n        this.$el.find('#submit_button').prop('disabled', true);\n      }\n    }\n\n    return this.$el.formSubmit({\n      beforeSubmit: data => this.beforeSubmit(data),\n      success: data => this.success(data),\n      errorFormatter: errors => this.errorFormatter(errors),\n      error: () => this.clearCaptcha(),\n      disableWhileLoading: 'spin_on_success'\n    });\n  }\n\n  changeAction(e) {\n    this.action = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).val();\n\n    if (ENV.ACCOUNT.recaptcha_key) {\n      this.$el.find('#submit_button').prop('disabled', this.action === 'create' && !this.recaptchaPassed);\n    }\n\n    this.$el.find('.user_info').hide();\n    this.$el.find(`#${this.action}_user_info`).show();\n    return this.$el.find('#submit_button').css({\n      visibility: 'visible'\n    });\n  }\n\n  beforeSubmit(data) {\n    if (!this.action) return false;\n\n    if (this.options.confirmEnrollmentUrl && this.action === 'enroll') {\n      window.location = this.options.confirmEnrollmentUrl;\n      return false;\n    }\n\n    this.normalizeData(data);\n    return this.$el.attr('action', (() => {\n      switch (this.action) {\n        case 'create':\n          return '/users';\n\n        case 'log_in':\n          return '/login/canvas';\n\n        case 'enroll':\n          return this.enrollUrl;\n      }\n    })());\n  }\n\n  success(data) {\n    if (this.action === 'enroll') {\n      // they should now be authenticated (either registered or pre_registered)\n      let q = window.location.search;\n      q = q ? `${q}&` : '?';\n      q += 'enrolled=1';\n\n      if (this.initialAction === 'create') {\n        q += '&just_created=1';\n      }\n\n      return window.location.search = q;\n    } else {\n      // i.e. we just registered or logged in\n      return this.enroll();\n    }\n  }\n\n  normalizeData(data) {\n    if (this.action === 'log_in') {\n      data['pseudonym_session[unique_id]'] = data['pseudonym[unique_id]'] != null ? data['pseudonym[unique_id]'] : '';\n      data['pseudonym_session[password]'] = data['pseudonym[password]'] != null ? data['pseudonym[password]'] : '';\n    }\n\n    return data;\n  }\n\n  clearCaptcha() {\n    if (ENV.ACCOUNT.recaptcha_key) {\n      grecaptcha.reset(this.dataCaptchaId);\n      this.$el.find('#submit_button').prop('disabled', true);\n    }\n  }\n\n  errorFormatter(errors) {\n    const ret = (() => {\n      switch (this.action) {\n        case 'create':\n          return Object(_canvas_normalize_registration_errors__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(errors);\n\n        case 'log_in':\n          return this.loginErrors(errors);\n\n        case 'enroll':\n          return this.enrollErrors(errors);\n      }\n    })();\n\n    return ret;\n  }\n\n  loginErrors(errors) {\n    const error = errors[errors.length - 1];\n    return {\n      'pseudonym[password]': error\n    };\n  }\n\n  enrollErrors(errors) {\n    if (__guard__(errors.user != null ? errors.user.errors.self_enrollment_code : undefined, x => x[0].type) === 'already_enrolled') {\n      // just reload if already enrolled\n      location.reload(true);\n      return [];\n    }\n\n    this.action = this.initialAction;\n    this.logOut();\n    return errors;\n  }\n\n  enroll() {\n    this.action = 'enroll';\n    return this.$el.submit();\n  }\n\n  logOut(refresh = false) {\n    return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajaxJSON('/logout', 'DELETE', {}, () => {\n      if (refresh) location.reload(true);\n    });\n  }\n\n  logOutAndRefresh(e) {\n    e.preventDefault();\n    return this.logOut(true);\n  }\n\n}\nSelfEnrollmentForm.initClass();\n\nfunction __guard__(value, transform) {\n  return typeof value !== 'undefined' && value !== null ? transform(value) : undefined;\n}\n\n//# sourceURL=webpack:///./ui/features/self_enrollment/backbone/views/SelfEnrollmentForm.js?");

/***/ }),

/***/ "8xMl":
/*!**********************************************!*\
  !*** ./ui/features/self_enrollment/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _instructure_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @instructure/ready */ \"3lLS\");\n/* harmony import */ var _instructure_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_instructure_ready__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _backbone_views_SelfEnrollmentForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backbone/views/SelfEnrollmentForm */ \"/lKC\");\n/*\n * Copyright (C) 2012 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n_instructure_ready__WEBPACK_IMPORTED_MODULE_1___default()(() => {\n  const options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, ENV.SELF_ENROLLMENT_OPTIONS != null ? ENV.SELF_ENROLLMENT_OPTIONS : {}, {\n    el: '#enroll_form'\n  });\n  new _backbone_views_SelfEnrollmentForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"](options);\n});\n\n//# sourceURL=webpack:///./ui/features/self_enrollment/index.js?");

/***/ }),

/***/ "BXhQ":
/*!*********************************************************************************************!*\
  !*** ./ui/shared/normalize-registration-errors/backbone/models/ObserverPairingCodeModel.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ObserverPairingCode; });\n/* harmony import */ var _canvas_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n */ \"HGxv\");\n/* harmony import */ var _canvas_backbone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @canvas/backbone */ \"mX+G\");\n/* harmony import */ var _canvas_backbone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_canvas_backbone__WEBPACK_IMPORTED_MODULE_1__);\n/*\n * Copyright (C) 2018 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\nconst I18n = Object(_canvas_i18n__WEBPACK_IMPORTED_MODULE_0__[\"useScope\"])('observer_pairing_code');\nclass ObserverPairingCode extends _canvas_backbone__WEBPACK_IMPORTED_MODULE_1___default.a.Model {} // no way of defining this in the class itself was making it work\n// with how coffeescript classes were expecting things to work\n\nObserverPairingCode.prototype.errorMap = {\n  code: {\n    invalid: I18n.t('errors.invalid', 'Invalid pairing code')\n  }\n};\n\n//# sourceURL=webpack:///./ui/shared/normalize-registration-errors/backbone/models/ObserverPairingCodeModel.js?");

/***/ }),

/***/ "GGFl":
/*!**************************************************************!*\
  !*** ./ui/shared/normalize-registration-errors/index.coffee ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_users_backbone_models_User_coffee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/users/backbone/models/User.coffee */ \"torl\");\n/* harmony import */ var _canvas_pseudonyms_backbone_models_Pseudonym_coffee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @canvas/pseudonyms/backbone/models/Pseudonym.coffee */ \"YQRR\");\n/* harmony import */ var _backbone_models_ObserverPairingCodeModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backbone/models/ObserverPairingCodeModel */ \"BXhQ\");\n/* harmony import */ var obj_flatten__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! obj-flatten */ \"+p23\");\nvar registrationErrors;\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (registrationErrors = function(errors, passwordPolicy) {\n  if (passwordPolicy == null) {\n    passwordPolicy = ENV.PASSWORD_POLICY;\n  }\n  return Object(obj_flatten__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    user: _canvas_users_backbone_models_User_coffee__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype.normalizeErrors(errors.user),\n    pseudonym: _canvas_pseudonyms_backbone_models_Pseudonym_coffee__WEBPACK_IMPORTED_MODULE_1__[\"default\"].prototype.normalizeErrors(errors.pseudonym, passwordPolicy),\n    observee: _canvas_pseudonyms_backbone_models_Pseudonym_coffee__WEBPACK_IMPORTED_MODULE_1__[\"default\"].prototype.normalizeErrors(errors.observee, passwordPolicy),\n    pairing_code: _backbone_models_ObserverPairingCodeModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].prototype.normalizeErrors(errors.pairing_code)\n  }, {\n    arrays: false\n  });\n});\n\n\n//# sourceURL=webpack:///./ui/shared/normalize-registration-errors/index.coffee?");

/***/ }),

/***/ "YQRR":
/*!***************************************************************!*\
  !*** ./ui/shared/pseudonyms/backbone/models/Pseudonym.coffee ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n */ \"HGxv\");\n/* harmony import */ var _canvas_backbone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @canvas/backbone */ \"mX+G\");\n/* harmony import */ var _canvas_backbone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_canvas_backbone__WEBPACK_IMPORTED_MODULE_1__);\nvar I18n, Pseudonym,\n  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  hasProp = {}.hasOwnProperty;\n\n\n\n\n\nI18n = Object(_canvas_i18n__WEBPACK_IMPORTED_MODULE_0__[\"useScope\"])('pseudonym');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pseudonym = (function(superClass) {\n  extend(Pseudonym, superClass);\n\n  function Pseudonym() {\n    return Pseudonym.__super__.constructor.apply(this, arguments);\n  }\n\n  Pseudonym.prototype.errorMap = function(policy) {\n    if (policy == null) {\n      policy = {};\n    }\n    return {\n      unique_id: {\n        too_short: I18n.t(\"errors.required\", \"Required\"),\n        too_long: I18n.t(\"errors.too_long\", \"Can't exceed %{max} characters\", {\n          max: 100\n        }),\n        invalid: I18n.t(\"errors.invalid\", \"May only contain letters, numbers, or the following: %{characters}\", {\n          characters: \". + - _ @ =\"\n        }),\n        taken: I18n.t(\"errors.taken\", \"Already in use\"),\n        bad_credentials: I18n.t(\"errors.bad_credentials\", \"Invalid username or password\"),\n        not_email: I18n.t(\"errors.not_email\", \"Not a valid email address\")\n      },\n      sis_user_id: {\n        too_long: I18n.t(\"errors.too_long\", \"Can't exceed %{max} characters\", {\n          max: 255\n        }),\n        taken: I18n.t(\"errors.sis_taken\", \"The SIS ID is already in use\")\n      },\n      password: {\n        too_short: I18n.t(\"errors.too_short\", \"Must be at least %{min} characters\", {\n          min: policy.min_length\n        }),\n        sequence: I18n.t(\"errors.sequence\", \"Can't incude a run of more than %{max} characters (e.g. abcdef)\", {\n          max: policy.max_sequence\n        }),\n        common: I18n.t(\"errors.common\", \"Can't use common passwords (e.g. \\\"password\\\")\"),\n        repeated: I18n.t(\"errors.repeated\", \"Can't have the same character more than %{max} times in a row\", {\n          max: policy.max_repeats\n        }),\n        confirmation: I18n.t(\"errors.mismatch\", \"Doesn't match\"),\n        too_long: I18n.t(\"errors.too_long\", \"Can't exceed %{max} characters\", {\n          max: 255\n        })\n      },\n      password_confirmation: {\n        confirmation: I18n.t(\"errors.mismatch\", \"Doesn't match\")\n      }\n    };\n  };\n\n  Pseudonym.prototype.normalizeErrors = function(errors, policy) {\n    var e, i, j, len, len1, ref, ref1, ref2, too_short, type;\n    if (errors) {\n      ref = ['unique_id', 'password'];\n      for (i = 0, len = ref.length; i < len; i++) {\n        type = ref[i];\n        if (!(((ref1 = errors[type]) != null ? ref1.length : void 0) > 1)) {\n          continue;\n        }\n        too_short = null;\n        ref2 = errors[type];\n        for (j = 0, len1 = ref2.length; j < len1; j++) {\n          e = ref2[j];\n          if (e.type === 'too_short') {\n            too_short = e;\n          }\n        }\n        if (too_short) {\n          errors[type] = [too_short];\n        }\n      }\n    }\n    return Pseudonym.__super__.normalizeErrors.call(this, errors, policy);\n  };\n\n  return Pseudonym;\n\n})(_canvas_backbone__WEBPACK_IMPORTED_MODULE_1___default.a.Model));\n\n\n//# sourceURL=webpack:///./ui/shared/pseudonyms/backbone/models/Pseudonym.coffee?");

/***/ }),

/***/ "torl":
/*!*****************************************************!*\
  !*** ./ui/shared/users/backbone/models/User.coffee ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n */ \"HGxv\");\n/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ \"Y/W1\");\n/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _canvas_backbone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @canvas/backbone */ \"mX+G\");\n/* harmony import */ var _canvas_backbone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_canvas_backbone__WEBPACK_IMPORTED_MODULE_2__);\nvar I18n, User,\n  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  hasProp = {}.hasOwnProperty;\n\n\n\n\n\n\n\nI18n = Object(_canvas_i18n__WEBPACK_IMPORTED_MODULE_0__[\"useScope\"])('user');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (User = (function(superClass) {\n  extend(User, superClass);\n\n  function User() {\n    return User.__super__.constructor.apply(this, arguments);\n  }\n\n  User.prototype.modelType = 'user';\n\n  User.prototype.resourceName = 'users';\n\n  User.prototype.errorMap = {\n    name: {\n      blank: I18n.t(\"errors.required\", \"Required\"),\n      too_long: I18n.t(\"errors.too_long\", \"Can't exceed %{max} characters\", {\n        max: 255\n      })\n    },\n    self_enrollment_code: {\n      blank: I18n.t(\"errors.required\", \"Required\"),\n      invalid: I18n.t(\"errors.invalid_code\", \"Invalid code\"),\n      already_enrolled: I18n.t(\"errors.already_enrolled\", \"You are already enrolled in this course\"),\n      concluded: I18n.t(\"This course has concluded\"),\n      full: I18n.t(\"errors.course_full\", \"This course is full\")\n    },\n    terms_of_use: {\n      accepted: I18n.t(\"errors.terms\", \"You must agree to the terms\")\n    }\n  };\n\n  User.prototype.enrollments = function(attrs, first) {\n    return underscore__WEBPACK_IMPORTED_MODULE_1___default.a.where(this.get('enrollments'), attrs, first);\n  };\n\n  User.prototype.hasEnrollmentType = function(type) {\n    return !!this.enrollments({\n      type: type\n    }, true);\n  };\n\n  User.prototype.hasEnrollmentRole = function(role) {\n    return !!this.enrollments({\n      role: role\n    }, true);\n  };\n\n  User.prototype.findEnrollmentByRole = function(role) {\n    return this.enrollments({\n      role: role\n    }, true);\n  };\n\n  User.prototype.allEnrollmentsByType = function(type) {\n    return this.enrollments({\n      type: type\n    });\n  };\n\n  User.prototype.allEnrollmentsByRole = function(role) {\n    return this.enrollments({\n      role: role\n    });\n  };\n\n  User.prototype.pending = function(role) {\n    return underscore__WEBPACK_IMPORTED_MODULE_1___default.a.some(this.get('enrollments'), function(e) {\n      var ref;\n      return e.role === role && ((ref = e.enrollment_state) === 'creation_pending' || ref === 'invited');\n    });\n  };\n\n  User.prototype.inactive = function() {\n    return underscore__WEBPACK_IMPORTED_MODULE_1___default.a.every(this.get('enrollments'), function(e) {\n      return e.enrollment_state === 'inactive';\n    });\n  };\n\n  User.prototype.sectionEditableEnrollments = function() {\n    return underscore__WEBPACK_IMPORTED_MODULE_1___default.a.select(this.get('enrollments'), function(e) {\n      return e.type !== 'ObserverEnrollment';\n    });\n  };\n\n  return User;\n\n})(_canvas_backbone__WEBPACK_IMPORTED_MODULE_2___default.a.Model));\n\n\n//# sourceURL=webpack:///./ui/shared/users/backbone/models/User.coffee?");

/***/ })

}]);