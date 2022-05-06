(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["assignments_peer_reviews"],{

/***/ "TvTI":
/*!****************************************!*\
  !*** ./ui/shared/util/templateData.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var html_escape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-escape */ \"gI0r\");\n/* harmony import */ var _canvas_jquery_jquery_instructure_misc_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @canvas/jquery/jquery.instructure_misc_helpers */ \"8JEM\");\n/*\n * Copyright (C) 2011 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n/* replaceTags */\n// Fills the selected object(s) with data values as specified.  Plaintext values should be specified in the\n//  data: data used to fill template.\n//  id: set the id attribute of the template object\n//  textValues: a list of strings, which values should be plaintext\n//  htmlValues: a list of strings, which values should be html\n//  hrefValues: List of string.  Searches for all anchor tags in the template\n//    and globally replaces \"{{ value }}\" with data[value].  Useful for adding\n//    new elements asynchronously, when you don't know what their URL will be\n//    until they're created.\n\njquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.fillTemplateData = function (options) {\n  if (this.length && options) {\n    if (options.iterator) {\n      //  todo: replace .andSelf with .addBack when JQuery is upgraded.\n      this.find('*').andSelf().each(function () {\n        const $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);\n        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(['name', 'id', 'class'], (i, attr) => {\n          if ($el.attr(attr)) {\n            $el.attr(attr, $el.attr(attr).replace(/-iterator-/, options.iterator));\n          }\n        });\n      });\n    }\n\n    if (options.id) {\n      this.attr('id', options.id);\n    }\n\n    let contentChange = false;\n\n    if (options.data) {\n      for (var item in options.data) {\n        if (options.except && jquery__WEBPACK_IMPORTED_MODULE_0___default.a.inArray(item, options.except) != -1) {\n          continue;\n        }\n\n        if (options.data[item] && options.dataValues && jquery__WEBPACK_IMPORTED_MODULE_0___default.a.inArray(item, options.dataValues) != -1) {\n          this.data(item, options.data[item].toString());\n        }\n\n        const $found_all = this.find('.' + item);\n        var avoid = options.avoid || '';\n        $found_all.each(function () {\n          const $found = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);\n\n          if ($found.length > 0 && $found.closest(avoid).length === 0) {\n            if (typeof options.data[item] === 'undefined' || options.data[item] === null) {\n              options.data[item] = '';\n            }\n\n            if (options.htmlValues && jquery__WEBPACK_IMPORTED_MODULE_0___default.a.inArray(item, options.htmlValues) != -1) {\n              $found.html(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.raw(options.data[item].toString()));\n\n              if ($found.hasClass('user_content')) {\n                contentChange = true;\n                $found.removeClass('enhanced');\n                $found.data('unenhanced_content_html', options.data[item].toString());\n              }\n            } else if ($found[0].tagName.toUpperCase() == 'INPUT') {\n              $found.val(options.data[item]);\n            } else {\n              try {\n                const str = options.data[item].toString();\n                $found.html(Object(html_escape__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(str));\n              } catch (e) {}\n            }\n          }\n        });\n      }\n    }\n\n    if (options.hrefValues && options.data) {\n      this.find('a,span[rel]').each(function () {\n        let $obj = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n            oldHref,\n            oldRel,\n            oldName;\n\n        for (const i in options.hrefValues) {\n          if (!options.hrefValues.hasOwnProperty(i)) {\n            continue;\n          }\n\n          const name = options.hrefValues[i];\n\n          if (oldHref = $obj.attr('href')) {\n            const newHref = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.replaceTags(oldHref, name, encodeURIComponent(options.data[name]));\n            const orig = $obj.text() === $obj.html() ? $obj.text() : null;\n\n            if (oldHref !== newHref) {\n              $obj.attr('href', newHref);\n\n              if (orig) {\n                $obj.text(orig);\n              }\n            }\n          }\n\n          if (oldRel = $obj.attr('rel')) {\n            $obj.attr('rel', jquery__WEBPACK_IMPORTED_MODULE_0___default.a.replaceTags(oldRel, name, options.data[name]));\n          }\n\n          if (oldName = $obj.attr('name')) {\n            $obj.attr('name', jquery__WEBPACK_IMPORTED_MODULE_0___default.a.replaceTags(oldName, name, options.data[name]));\n          }\n        }\n      });\n    }\n\n    if (contentChange) {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).triggerHandler('user_content_change');\n    }\n  }\n\n  return this;\n};\n\njquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.fillTemplateData.defaults = {\n  htmlValues: null,\n  hrefValues: null\n}; // Reverse version of fillTemplateData.  Lets you pull out the string versions of values held in divs, spans, etc.\n// Based on the usage of class names within an object to specify an object's sub-parts.\n\njquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.getTemplateData = function (options) {\n  if (!this.length || !options) {\n    return {};\n  }\n\n  var result = {},\n      item,\n      val;\n\n  if (options.textValues) {\n    const _this = this;\n\n    options.textValues.forEach(item => {\n      const $item = _this.find('.' + item.replace(/\\[/g, '\\\\[').replace(/\\]/g, '\\\\]') + ':first');\n\n      val = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.trim($item.text());\n\n      if ($item.html() === '&nbsp;') {\n        val = '';\n      }\n\n      if (val.length === 1 && val.charCodeAt(0) === 160) {\n        val = '';\n      }\n\n      result[item] = val;\n    });\n  }\n\n  if (options.dataValues) {\n    for (item in options.dataValues) {\n      var val = this.data(options.dataValues[item]);\n\n      if (val) {\n        result[options.dataValues[item]] = val;\n      }\n    }\n  }\n\n  if (options.htmlValues) {\n    for (item in options.htmlValues) {\n      const $elem = this.find('.' + options.htmlValues[item].replace(/\\[/g, '\\\\[').replace(/\\]/g, '\\\\]') + ':first');\n      val = null;\n\n      if ($elem.hasClass('user_content') && $elem.data('unenhanced_content_html')) {\n        val = $elem.data('unenhanced_content_html');\n      } else {\n        val = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.trim($elem.html());\n      }\n\n      result[options.htmlValues[item]] = val;\n    }\n  }\n\n  return result;\n};\n\njquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.getTemplateValue = function (value, options) {\n  const opts = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, options, {\n    textValues: [value]\n  });\n  return this.getTemplateData(opts)[value];\n};\n\n//# sourceURL=webpack:///./ui/shared/util/templateData.js?");

/***/ }),

/***/ "d+6Z":
/*!*******************************************************!*\
  !*** ./ui/features/assignments_peer_reviews/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n */ \"HGxv\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _canvas_jquery_jquery_ajaxJSON__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @canvas/jquery/jquery.ajaxJSON */ \"dhbk\");\n/* harmony import */ var _canvas_datetime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @canvas/datetime */ \"7AEQ\");\n/* harmony import */ var _canvas_forms_jquery_jquery_instructure_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @canvas/forms/jquery/jquery.instructure_forms */ \"Dhso\");\n/* harmony import */ var _canvas_jquery_jquery_instructure_misc_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @canvas/jquery/jquery.instructure_misc_helpers */ \"8JEM\");\n/* harmony import */ var _canvas_jquery_jquery_instructure_misc_plugins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @canvas/jquery/jquery.instructure_misc_plugins */ \"aq8L\");\n/* harmony import */ var _canvas_loading_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @canvas/loading-image */ \"lBOK\");\n/* harmony import */ var _canvas_util_templateData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @canvas/util/templateData */ \"TvTI\");\n//\n// Copyright (C) 2014 - present Instructure, Inc.\n//\n// This file is part of Canvas.\n//\n// Canvas is free software: you can redistribute it and/or modify it under\n// the terms of the GNU Affero General Public License as published by the Free\n// Software Foundation, version 3 of the License.\n//\n// Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n// A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n// details.\n//\n// You should have received a copy of the GNU Affero General Public License along\n// with this program. If not, see <http://www.gnu.org/licenses/>.\n\n\n\n\n\n\n\n\n\nconst I18n = Object(_canvas_i18n__WEBPACK_IMPORTED_MODULE_0__[\"useScope\"])('assignments.peer_reviews');\njquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(() => {\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.peer_review').hover(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.peer_review.submission-hover').removeClass('submission-hover');\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass('submission-hover');\n  }, function () {\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).removeClass('submission-hover');\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.peer_review').focusin(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass('focusWithin');\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.peer_review').focusout(function (event) {\n    const $parent = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).closest('.peer_review');\n    const $newFocus = jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.related).closest('.peer_review');\n\n    if (!$newFocus.is($parent)) {\n      $parent.removeClass('focusWithin');\n    }\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.peer_review .delete_review_link').click(function (event) {\n    event.preventDefault();\n    const next = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parents('.peer_review').next().find('a').add(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parents('.student_reviews').find('.assign_peer_review_link')).first();\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parents('.peer_review').confirmDelete({\n      url: jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('href'),\n      message: I18n.t('messages.cancel_peer_review', 'Cancel this peer review?'),\n\n      success() {\n        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).fadeOut('slow', function () {\n          const $parent = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parents('.peer_reviews');\n          jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).remove();\n\n          if ($parent.find('.assigned').length === 0) {\n            $parent.find('.no_requests_message').show();\n          }\n\n          next.focus();\n        });\n      }\n\n    });\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.assign_peer_review_link').click(function (event) {\n    event.preventDefault(); // if the form is there and is being shown, then slide it up.\n\n    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parents('.student_reviews').find('.form_content form:visible').length) {\n      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parents('.student_reviews').find('.form_content form:visible').slideUp();\n    } else {\n      // otherwise make it and inject it then slide it down\n      const $form = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#assign_peer_review_form').clone(true).removeAttr('id');\n      let url = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.assign_peer_review_url').attr('href');\n      let user_id = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parents('.student_reviews').getTemplateData({\n        textValues: ['student_review_id']\n      }).student_review_id;\n      url = jquery__WEBPACK_IMPORTED_MODULE_1___default.a.replaceTags(url, 'reviewer_id', user_id);\n      $form.find(`select option.student_${user_id}`).attr('disabled', true);\n      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parents('.student_reviews').find('.peer_review').each(function () {\n        ;\n        ({\n          user_id\n        } = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).getTemplateData({\n          textValues: ['user_id']\n        }));\n        $form.find(`select option.student_${user_id}`).attr('disabled', true);\n      });\n      $form.attr('action', url);\n      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parents('.student_reviews').find('.form_content').empty().append($form);\n      $form.slideDown();\n    }\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#assign_peer_review_form').formSubmit({\n    beforeSubmit(data) {\n      if (!data.reviewee_id) return false;\n      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).loadingImage();\n    },\n\n    success(data) {\n      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).loadingImage('remove');\n      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).slideUp(function () {\n        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).remove();\n      });\n      const $review = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#review_request_blank').clone(true).removeAttr('id');\n      $review.fillTemplateData({\n        data: data.assessment_request,\n        hrefValues: ['id', 'user_id']\n      });\n      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parents('.student_reviews').find('.no_requests_message').slideUp().end().find('.peer_reviews').append($review);\n      $review.slideDown();\n      $review.find('a').first().focus();\n      const assessor_name = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parents('.student_reviews').find('.assessor_name').text();\n      const time = jquery__WEBPACK_IMPORTED_MODULE_1___default.a.datetimeString(data.assessment_request.updated_at);\n      $review.find('.reminder_peer_review_link').attr('title', I18n.t('titles.reminder', 'Remind %{assessor} about Assessment, last notified %{time}', {\n        assessor: assessor_name,\n        time\n      }));\n      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).slideUp(function () {\n        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).remove();\n      });\n    },\n\n    error(data) {\n      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).loadingImage('remove');\n      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).formErrors(data);\n    }\n\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.remind_peer_review_link').click(function (event) {\n    event.preventDefault();\n    const $link = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this);\n    $link.parents('.peer_review').loadingImage({\n      image_size: 'small'\n    });\n    return jquery__WEBPACK_IMPORTED_MODULE_1___default.a.ajaxJSON($link.attr('href'), 'POST', {}, data => {\n      $link.parents('.peer_review').loadingImage('remove');\n      const assessor_name = $link.parents('.student_reviews').find('.assessor_name').text();\n      const time = jquery__WEBPACK_IMPORTED_MODULE_1___default.a.datetimeString(data.assessment_request.updated_at);\n      $link.attr('title', I18n.t('titles.remind', 'Remind %{assessor} about Assessment, last notified %{time}', {\n        assessor: assessor_name,\n        time\n      }));\n    });\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.remind_peer_reviews_link').click(event => {\n    event.preventDefault();\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.peer_review.assigned .remind_peer_review_link').click();\n  });\n});\n\n//# sourceURL=webpack:///./ui/features/assignments_peer_reviews/index.js?");

/***/ }),

/***/ "lBOK":
/*!*************************************************!*\
  !*** ./ui/shared/loading-image/jquery/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/*\n * Copyright (C) 2011 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n // Shows an ajax-loading image on the given object.\n\njquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.loadingImg = function (options) {\n  if (!this || this.length === 0) {\n    return this;\n  }\n\n  const dir = window.getComputedStyle(this[0]).direction || 'ltr';\n  const $obj = this.filter(':first');\n  let list;\n\n  if (options === 'hide' || options === 'remove') {\n    $obj.children('.loading_image').remove();\n    list = $obj.data('loading_images') || [];\n    list.forEach(item => {\n      if (item) {\n        item.remove();\n      }\n    });\n    $obj.data('loading_images', null);\n    this.css('margin-inline-end', '');\n    return this;\n  } else if (options === 'remove_once') {\n    $obj.children('.loading_image').remove();\n    list = $obj.data('loading_images') || [];\n    const img = list.pop();\n\n    if (img) {\n      img.remove();\n    }\n\n    $obj.data('loading_images', list);\n    return this;\n  } else if (options === 'register_image' && arguments.length === 3) {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.loadingImg.image_files[arguments[1]] = arguments[2];\n    return this;\n  }\n\n  options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.loadingImg.defaults, options);\n  let image = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.loadingImg.image_files.normal;\n\n  if (options.image_size && jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.loadingImg.image_files[options.image_size]) {\n    image = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.loadingImg.image_files[options.image_size];\n  }\n\n  if (options.paddingTop) {\n    options.vertical = options.paddingTop;\n  }\n\n  let paddingTop = 0;\n\n  if (options.vertical) {\n    if (options.vertical === 'top') {// nothing to do\n    } else if (options.vertical === 'bottom') {\n      paddingTop = $obj.outerHeight();\n    } else if (options.vertical === 'middle') {\n      paddingTop = $obj.outerHeight() / 2 - image.height / 2;\n    } else {\n      paddingTop = parseInt(options.vertical, 10); // eslint-disable-next-line no-restricted-globals\n\n      if (isNaN(paddingTop)) {\n        paddingTop = 0;\n      }\n    }\n  }\n\n  let paddingLeft = 0;\n\n  if (options.horizontal) {\n    if (options.horizontal === 'left') {// nothing to do\n    } else if (options.horizontal === 'right') {\n      paddingLeft = $obj.outerWidth() - image.width;\n    } else if (options.horizontal === 'right!') {\n      paddingLeft = dir === 'ltr' ? $obj.outerWidth() + 5 : -5 - (image.width || 16);\n      this.css({\n        'margin-inline-end': '16px'\n      });\n    } else if (options.horizontal === 'middle') {\n      paddingLeft = $obj.outerWidth() / 2 - image.width / 2;\n    } else {\n      paddingLeft = parseInt(options.horizontal, 10); // eslint-disable-next-line no-restricted-globals\n\n      if (isNaN(paddingLeft)) {\n        paddingLeft = 0;\n      }\n    }\n  }\n\n  const zIndex = $obj.zIndex() + 1;\n  const $imageHolder = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.createElement('div')).addClass('loading_image_holder');\n  const $image = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.createElement('img')).attr('src', image.url);\n  $imageHolder.append($image);\n  list = $obj.data('loading_images') || [];\n  list.push($imageHolder);\n  $obj.data('loading_images', list);\n\n  if (!$obj.css('position') || $obj.css('position') === 'static') {\n    const offset = $obj.offset();\n    let top = offset.top,\n        left = offset.left;\n\n    if (options.vertical) {\n      top += paddingTop;\n    }\n\n    if (options.horizontal) {\n      left += paddingLeft;\n    }\n\n    $imageHolder.css({\n      zIndex,\n      position: 'absolute',\n      top,\n      left\n    });\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').append($imageHolder);\n  } else {\n    $imageHolder.css({\n      zIndex,\n      position: 'absolute',\n      top: paddingTop,\n      left: paddingLeft\n    });\n    $obj.append($imageHolder);\n  }\n\n  return jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);\n};\n\njquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.loadingImg.defaults = {\n  paddingTop: 0,\n  image_size: 'normal',\n  vertical: 0,\n  horizontal: 0\n};\njquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.loadingImg.image_files = {\n  normal: {\n    url: '/images/ajax-loader.gif',\n    width: 32,\n    height: 32\n  },\n  small: {\n    url: '/images/ajax-loader-small.gif',\n    width: 16,\n    height: 16\n  }\n};\njquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.loadingImage = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.loadingImg;\n\n//# sourceURL=webpack:///./ui/shared/loading-image/jquery/index.js?");

/***/ })

}]);