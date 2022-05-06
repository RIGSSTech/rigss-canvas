(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[120],{

/***/ "R1PX":
/*!**********************************************************************!*\
  !*** ./ui/shared/groups/backbone/collections/GroupCollection.coffee ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_pagination_backbone_collections_PaginatedCollection_coffee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/pagination/backbone/collections/PaginatedCollection.coffee */ \"TnsN\");\n/* harmony import */ var _GroupUserCollection_coffee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupUserCollection.coffee */ \"n7p2\");\n/* harmony import */ var _models_Group_coffee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Group.coffee */ \"aftf\");\n/* harmony import */ var _canvas_util_natcompare__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @canvas/util/natcompare */ \"plYi\");\nvar GroupCollection,\n  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },\n  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  hasProp = {}.hasOwnProperty;\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GroupCollection = (function(superClass) {\n  extend(GroupCollection, superClass);\n\n  function GroupCollection() {\n    this.fetchNext = bind(this.fetchNext, this);\n    return GroupCollection.__super__.constructor.apply(this, arguments);\n  }\n\n  GroupCollection.prototype.model = _models_Group_coffee__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\n  GroupCollection.prototype.comparator = _canvas_util_natcompare__WEBPACK_IMPORTED_MODULE_3__[\"default\"].byGet('name');\n\n  GroupCollection.optionProperty('category');\n\n  GroupCollection.optionProperty('loadAll');\n\n  GroupCollection.optionProperty('markInactiveStudents');\n\n  GroupCollection.prototype._defaultUrl = function() {\n    var url;\n    if (this.forCourse) {\n      url = GroupCollection.__super__._defaultUrl.apply(this, arguments);\n      if (!ENV.CAN_MANAGE_GROUPS) {\n        url = url + \"?only_own_groups=1\";\n      }\n      return url;\n    } else {\n      return '/api/v1/users/self/groups';\n    }\n  };\n\n  GroupCollection.prototype.url = function() {\n    if (this.category != null) {\n      return this.url = \"/api/v1/group_categories/\" + this.category.id + \"/groups?per_page=50\";\n    } else {\n      return this.url = GroupCollection.__super__.url.apply(this, arguments);\n    }\n  };\n\n  GroupCollection.prototype.fetchAll = function() {\n    return this.fetchAllDriver({\n      success: this.fetchNext\n    });\n  };\n\n  GroupCollection.prototype.fetchNext = function() {\n    if (this.canFetch('next')) {\n      return this.fetch({\n        page: 'next',\n        success: this.fetchNext\n      });\n    } else {\n      return this.trigger('finish');\n    }\n  };\n\n  GroupCollection.prototype.fetchAllDriver = function(options) {\n    if (options == null) {\n      options = {};\n    }\n    options.data = Object.assign({\n      per_page: 20,\n      include: \"can_message\"\n    }, options.data || {});\n    return this.fetch(options);\n  };\n\n  return GroupCollection;\n\n})(_canvas_pagination_backbone_collections_PaginatedCollection_coffee__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n\n\n//# sourceURL=webpack:///./ui/shared/groups/backbone/collections/GroupCollection.coffee?");

/***/ }),

/***/ "WcR+":
/*!***********************************************************!*\
  !*** ./ui/shared/groups/backbone/models/GroupUser.coffee ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _canvas_users_backbone_models_User_coffee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @canvas/users/backbone/models/User.coffee */ \"torl\");\n/* harmony import */ var _canvas_jquery_jquery_ajaxJSON__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @canvas/jquery/jquery.ajaxJSON */ \"dhbk\");\nvar GroupUser,\n  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },\n  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  hasProp = {}.hasOwnProperty;\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GroupUser = (function(superClass) {\n  extend(GroupUser, superClass);\n\n  function GroupUser() {\n    this.moved = bind(this.moved, this);\n    this.sync = bind(this.sync, this);\n    return GroupUser.__super__.constructor.apply(this, arguments);\n  }\n\n  GroupUser.prototype.sync = function(method, model, options) {\n    var group, previousGroup;\n    group = this.get('group');\n    previousGroup = this.previous('group');\n    if (group === previousGroup) {\n      return;\n    }\n    if (group != null) {\n      this.joinGroup(group);\n    }\n    if (previousGroup && ((group == null) || this.get('category').get('allows_multiple_memberships'))) {\n      return this.leaveGroup(previousGroup);\n    }\n  };\n\n  GroupUser.prototype.joinGroup = function(group) {\n    return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajaxJSON(\"/api/v1/groups/\" + group.id + \"/memberships\", 'POST', {\n      user_id: this.get('id')\n    }, (function(_this) {\n      return function(data) {\n        return _this.trigger('ajaxJoinGroupSuccess', data);\n      };\n    })(this));\n  };\n\n  GroupUser.prototype.leaveGroup = function(group) {\n    return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajaxJSON(\"/api/v1/groups/\" + group.id + \"/users/\" + (this.get('id')), 'DELETE');\n  };\n\n  GroupUser.prototype.moved = function() {\n    return this.trigger('moved', this);\n  };\n\n  return GroupUser;\n\n})(_canvas_users_backbone_models_User_coffee__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n\n\n//# sourceURL=webpack:///./ui/shared/groups/backbone/models/GroupUser.coffee?");

/***/ }),

/***/ "aftf":
/*!*******************************************************!*\
  !*** ./ui/shared/groups/backbone/models/Group.coffee ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_backbone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/backbone */ \"mX+G\");\n/* harmony import */ var _canvas_backbone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_canvas_backbone__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _collections_GroupUserCollection_coffee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../collections/GroupUserCollection.coffee */ \"n7p2\");\nvar Group,\n  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  hasProp = {}.hasOwnProperty;\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Group = (function(superClass) {\n  extend(Group, superClass);\n\n  function Group() {\n    return Group.__super__.constructor.apply(this, arguments);\n  }\n\n  Group.prototype.modelType = 'group';\n\n  Group.prototype.resourceName = 'groups';\n\n  Group.prototype.initialize = function(attrs, options) {\n    Group.__super__.initialize.apply(this, arguments);\n    return this.newAndEmpty = options != null ? options.newAndEmpty : void 0;\n  };\n\n  Group.prototype.users = function() {\n    var initialUsers, ref, ref1, ref2;\n    initialUsers = this.newAndEmpty ? [] : null;\n    this._users = new _collections_GroupUserCollection_coffee__WEBPACK_IMPORTED_MODULE_1__[\"default\"](initialUsers, {\n      group: this,\n      category: (ref = this.collection) != null ? ref.category : void 0,\n      markInactiveStudents: (ref1 = this.collection) != null ? (ref2 = ref1.options) != null ? ref2.markInactiveStudents : void 0 : void 0\n    });\n    this._users.on('fetched:last', (function(_this) {\n      return function() {\n        return _this.set('members_count', _this._users.length);\n      };\n    })(this));\n    this.users = function() {\n      return this._users;\n    };\n    return this._users;\n  };\n\n  Group.prototype.usersCount = function() {\n    return this.get('members_count');\n  };\n\n  Group.prototype.sync = function(method, model, options) {\n    if (options == null) {\n      options = {};\n    }\n    options.url = this.urlFor(method);\n    return _canvas_backbone__WEBPACK_IMPORTED_MODULE_0___default.a.sync(method, model, options);\n  };\n\n  Group.prototype.urlFor = function(method) {\n    if (method === 'create') {\n      return \"/api/v1/group_categories/\" + (this.get('group_category_id')) + \"/groups\";\n    } else {\n      return \"/api/v1/groups/\" + this.id;\n    }\n  };\n\n  Group.prototype.theLimit = function() {\n    var max_membership, ref, ref1;\n    max_membership = this.get('max_membership');\n    return max_membership || ((ref = this.collection) != null ? (ref1 = ref.category) != null ? ref1.get('group_limit') : void 0 : void 0);\n  };\n\n  Group.prototype.isFull = function() {\n    var limit;\n    limit = this.get('max_membership');\n    return (!limit && this.groupCategoryLimitMet()) || (limit && this.get('members_count') >= limit);\n  };\n\n  Group.prototype.groupCategoryLimitMet = function() {\n    var limit, ref, ref1;\n    limit = (ref = this.collection) != null ? (ref1 = ref.category) != null ? ref1.get('group_limit') : void 0 : void 0;\n    return limit && this.get('members_count') >= limit;\n  };\n\n  Group.prototype.isLocked = function() {\n    var ref, ref1;\n    return (ref = this.collection) != null ? (ref1 = ref.category) != null ? ref1.isLocked() : void 0 : void 0;\n  };\n\n  Group.prototype.toJSON = function() {\n    var json;\n    if (ENV.student_mode) {\n      return {\n        name: this.get('name')\n      };\n    } else {\n      json = Group.__super__.toJSON.apply(this, arguments);\n      json.isFull = this.isFull();\n      return json;\n    }\n  };\n\n  return Group;\n\n})(_canvas_backbone__WEBPACK_IMPORTED_MODULE_0___default.a.Model));\n\n\n//# sourceURL=webpack:///./ui/shared/groups/backbone/models/Group.coffee?");

/***/ }),

/***/ "msTH":
/*!*************************************************!*\
  !*** ./ui/shared/util/jquery/apiUserContent.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ \"Y/W1\");\n/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var html_escape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-escape */ \"gI0r\");\n/* harmony import */ var _canvas_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @canvas/i18n */ \"HGxv\");\n//\n// Copyright (C) 2015 - present Instructure, Inc.\n//\n// This file is part of Canvas.\n//\n// Canvas is free software: you can redistribute it and/or modify it under\n// the terms of the GNU Affero General Public License as published by the Free\n// Software Foundation, version 3 of the License.\n//\n// Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n// A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n// details.\n//\n// You should have received a copy of the GNU Affero General Public License along\n// with this program. If not, see <http://www.gnu.org/licenses/>.\n\n\n\n\nconst I18n = Object(_canvas_i18n__WEBPACK_IMPORTED_MODULE_3__[\"useScope\"])('user_content');\nconst apiUserContent = {\n  /*\n  xsslint safeString.identifier mathml\n  */\n  translateMathmlForScreenreaders($equationImage) {\n    var _ENV, _ENV$FEATURES;\n\n    if (!((_ENV = ENV) !== null && _ENV !== void 0 && (_ENV$FEATURES = _ENV.FEATURES) !== null && _ENV$FEATURES !== void 0 && _ENV$FEATURES.new_math_equation_handling)) {\n      // note, it is safe to treat the x-canvaslms-safe-mathml as html because it\n      // only ever gets put there by us (in Api::Html::Content::apply_mathml).\n      // Any user content that gets sent to the server will have the\n      // x-canvaslms-safe-mathml attribute stripped out.\n      const mathml = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div/>').html($equationImage.attr('x-canvaslms-safe-mathml')).html();\n      const mathmlSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span class=\"hidden-readable\"></span>');\n      mathmlSpan.html(mathml);\n      return mathmlSpan;\n    }\n  },\n\n  toMediaCommentLink(node) {\n    const $link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`<a\n        id='media_comment_${Object(html_escape__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(node).data('media_comment_id'))}'\n        data-media_comment_type='${Object(html_escape__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(node).data('media_comment_type'))}'\n        class='instructure_inline_media_comment ${Object(html_escape__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(node.nodeName.toLowerCase())}_comment'\n        data-alt='${Object(html_escape__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(node).attr('data-alt'))}'\n      />`);\n    $link.html(jquery__WEBPACK_IMPORTED_MODULE_0___default()(node).html());\n    return $link;\n  },\n\n  /*\n  xsslint safeString.identifier mathmlSpan\n  */\n  // use this method to process any user content fields returned in api responses\n  // this is important to handle object/embed tags safely, and to properly display audio/video tags\n  convert(html, options = {}) {\n    const $dummy = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').html(html); // finds any <video/audio class=\"instructure_inline_media_comment\"> and turns them into media comment thumbnails\n\n    $dummy.find('video.instructure_inline_media_comment,audio.instructure_inline_media_comment').replaceWith(function () {\n      return apiUserContent.toMediaCommentLink(this);\n    }); // remove any embed tags inside an object tag, to avoid repeated translations\n\n    $dummy.find('object.instructure_user_content:not(#kaltura_player) embed').remove(); // if we aren't actually displaying this content but are instead putting\n    // it into a RTE, we want to preserve the object/embed tags\n\n    if (!options.forEditing) {\n      // find all object/embed tags and convert them into an iframe that posts\n      // to safefiles to display the content (to avoid javascript attacks)\n      //\n      // see the corresponding code in lib/user_content.rb for non-api user\n      // content handling\n      $dummy.find('object.instructure_user_content,embed.instructure_user_content').replaceWith(function () {\n        const $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);\n\n        if (!$this.data('uc_snippet') || !$this.data('uc_sig')) {\n          return this;\n        }\n\n        const uuid = underscore__WEBPACK_IMPORTED_MODULE_1___default.a.uniqueId('uc_');\n\n        let action = '/object_snippet';\n\n        if (ENV.files_domain) {\n          action = `//${ENV.files_domain}${action}`;\n        }\n\n        const $form = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`<form\n            action='${Object(html_escape__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(action)}'\n            method='post'\n            class='user_content_post_form'\n            target='${Object(html_escape__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(uuid)}'\n            id='form-${Object(html_escape__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(uuid)}'\n          />`);\n        $form.append(jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"<input type='hidden'/>\").attr({\n          name: 'object_data',\n          value: $this.data('uc_snippet')\n        }));\n        $form.append(jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"<input type='hidden'/>\").attr({\n          name: 's',\n          value: $this.data('uc_sig')\n        }));\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').append($form);\n        setTimeout(() => $form.submit(), 0);\n        return jquery__WEBPACK_IMPORTED_MODULE_0___default()(`<iframe\n            class='user_content_iframe'\n            name='${Object(html_escape__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(uuid)}'\n            style='width: ${Object(html_escape__WEBPACK_IMPORTED_MODULE_2__[\"default\"])($this.data('uc_width'))}; height: ${Object(html_escape__WEBPACK_IMPORTED_MODULE_2__[\"default\"])($this.data('uc_height'))};'\n            frameborder='0'\n            title='${Object(html_escape__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(I18n.t('User Content'))}'\n          />`);\n      });\n      $dummy.find('img.equation_image').each((index, equationImage) => {\n        const $equationImage = jquery__WEBPACK_IMPORTED_MODULE_0___default()(equationImage);\n        const mathmlSpan = apiUserContent.translateMathmlForScreenreaders($equationImage);\n        $equationImage.removeAttr('x-canvaslms-safe-mathml');\n        $equationImage.after(mathmlSpan);\n      });\n    }\n\n    return $dummy.html();\n  }\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiUserContent);\n\n//# sourceURL=webpack:///./ui/shared/util/jquery/apiUserContent.js?");

/***/ }),

/***/ "n7p2":
/*!**************************************************************************!*\
  !*** ./ui/shared/groups/backbone/collections/GroupUserCollection.coffee ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n */ \"HGxv\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _canvas_pagination_backbone_collections_PaginatedCollection_coffee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @canvas/pagination/backbone/collections/PaginatedCollection.coffee */ \"TnsN\");\n/* harmony import */ var _models_GroupUser_coffee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/GroupUser.coffee */ \"WcR+\");\n/* harmony import */ var html_escape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-escape */ \"gI0r\");\nvar GroupUserCollection, I18n,\n  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },\n  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  hasProp = {}.hasOwnProperty;\n\n\n\n\n\n\n\n\n\n\n\nI18n = Object(_canvas_i18n__WEBPACK_IMPORTED_MODULE_0__[\"useScope\"])('GroupUserCollection');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GroupUserCollection = (function(superClass) {\n  extend(GroupUserCollection, superClass);\n\n  function GroupUserCollection() {\n    this.onChangeGroup = bind(this.onChangeGroup, this);\n    return GroupUserCollection.__super__.constructor.apply(this, arguments);\n  }\n\n  GroupUserCollection.prototype.comparator = function(user) {\n    return user.get('sortable_name').toLowerCase();\n  };\n\n  GroupUserCollection.optionProperty('group');\n\n  GroupUserCollection.optionProperty('category');\n\n  GroupUserCollection.optionProperty('markInactiveStudents');\n\n  GroupUserCollection.prototype.url = function() {\n    var params, url_base;\n    url_base = \"/api/v1/groups/\" + this.group.id + \"/users?\";\n    params = {\n      per_page: 50,\n      include: ['sections', 'group_submissions'],\n      exclude: ['pseudonym']\n    };\n    if (this.markInactiveStudents) {\n      params.include.push('active_status');\n    }\n    return url_base + jquery__WEBPACK_IMPORTED_MODULE_1___default.a.param(params);\n  };\n\n  GroupUserCollection.prototype.initialize = function(models) {\n    GroupUserCollection.__super__.initialize.apply(this, arguments);\n    this.loaded = this.loadedAll = models != null;\n    this.on('change:group', this.onChangeGroup);\n    return this.model = _models_GroupUser_coffee__WEBPACK_IMPORTED_MODULE_3__[\"default\"].extend({\n      defaults: {\n        group: this.group,\n        category: this.category\n      }\n    });\n  };\n\n  GroupUserCollection.prototype.load = function(target) {\n    if (target == null) {\n      target = 'all';\n    }\n    this.loadAll = target === 'all';\n    this.loaded = true;\n    if (target !== 'none') {\n      this.fetch();\n    }\n    return this.load = function() {};\n  };\n\n  GroupUserCollection.prototype.onChangeGroup = function(model, group) {\n    var ref;\n    this.removeUser(model);\n    return (ref = this.groupUsersFor(group)) != null ? ref.addUser(model) : void 0;\n  };\n\n  GroupUserCollection.prototype.membershipsLocked = function() {\n    return false;\n  };\n\n  GroupUserCollection.prototype.getUser = function(asset_string) {\n    return this.get(asset_string.replace(\"user_\", \"\"));\n  };\n\n  GroupUserCollection.prototype.addUser = function(user) {\n    var ref;\n    if (this.membershipsLocked()) {\n      if ((ref = this.get(user)) != null) {\n        ref.moved();\n      }\n      return;\n    }\n    if (this.loaded) {\n      if (this.get(user)) {\n        this.flashAlreadyInGroupError(user);\n      } else {\n        this.add(user);\n        this.increment(1);\n      }\n      return user.moved();\n    } else {\n      user.once('ajaxJoinGroupSuccess', (function(_this) {\n        return function(data) {\n          if (data.just_created) {\n            return;\n          }\n          _this.increment(-1);\n          return _this.flashAlreadyInGroupError(user);\n        };\n      })(this));\n      return this.increment(1);\n    }\n  };\n\n  GroupUserCollection.prototype.flashAlreadyInGroupError = function(user) {\n    return jquery__WEBPACK_IMPORTED_MODULE_1___default.a.flashError(I18n.t('flash.userAlreadyInGroup', \"WARNING: %{user} is already a member of %{group}\", {\n      user: Object(html_escape__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(user.get('name')),\n      group: Object(html_escape__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this.group.get('name'))\n    }));\n  };\n\n  GroupUserCollection.prototype.removeUser = function(user) {\n    var ref, ref1;\n    if (this.membershipsLocked()) {\n      return;\n    }\n    this.increment(-1);\n    if (((ref = this.group) != null ? (ref1 = ref.get('leader')) != null ? ref1.id : void 0 : void 0) === user.id) {\n      this.group.set('leader', null);\n    }\n    if (this.loaded) {\n      return this.remove(user);\n    }\n  };\n\n  GroupUserCollection.prototype.increment = function(amount) {\n    return this.group.increment('members_count', amount);\n  };\n\n  GroupUserCollection.prototype.groupUsersFor = function(group) {\n    var ref;\n    return (ref = this.category) != null ? ref.groupUsersFor(group) : void 0;\n  };\n\n  return GroupUserCollection;\n\n})(_canvas_pagination_backbone_collections_PaginatedCollection_coffee__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n\n\n//# sourceURL=webpack:///./ui/shared/groups/backbone/collections/GroupUserCollection.coffee?");

/***/ }),

/***/ "plYi":
/*!**************************************!*\
  !*** ./ui/shared/util/natcompare.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n */ \"HGxv\");\n//\n// Copyright (C) 2014 - present Instructure, Inc.\n//\n// This file is part of Canvas.\n//\n// Canvas is free software: you can redistribute it and/or modify it under\n// the terms of the GNU Affero General Public License as published by the Free\n// Software Foundation, version 3 of the License.\n//\n// Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n// A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n// details.\n//\n// You should have received a copy of the GNU Affero General Public License along\n// with this program. If not, see <http://www.gnu.org/licenses/>.\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  strings(x, y) {\n    let locale = _canvas_i18n__WEBPACK_IMPORTED_MODULE_0__[\"default\"].locale || 'en-US';\n    const locale_map = {\n      zh_Hant: 'zh-Hant'\n    };\n    locale = locale_map[locale] || locale; // if you change these settings, also match the settings in best_unicode_collation_key\n    // and Canvas::ICU.collator\n\n    return x.localeCompare(y, locale, {\n      sensitivity: 'variant',\n      ignorePunctuation: false,\n      numeric: true\n    });\n  },\n\n  by(f) {\n    return (x, y) => this.strings(f(x), f(y));\n  },\n\n  byKey(key) {\n    return this.by(x => x[key]);\n  },\n\n  byGet(key) {\n    return this.by(x => x.get(key));\n  }\n\n});\n\n//# sourceURL=webpack:///./ui/shared/util/natcompare.js?");

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