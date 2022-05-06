(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[121],{

/***/ "0nLJ":
/*!*******************************************!*\
  !*** ./packages/canvas-rce/es/rce/RCE.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _format_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../format-message */ \"NFDp\");\n/* harmony import */ var _RCEWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RCEWrapper */ \"Jvcl\");\n/* harmony import */ var _plugins_shared_CanvasContentTray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins/shared/CanvasContentTray */ \"lcQH\");\n/* harmony import */ var _editorLanguage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editorLanguage */ \"20cW\");\n/* harmony import */ var _editorLanguage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_editorLanguage__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _normalizeLocale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./normalizeLocale */ \"0T/Z\");\n/* harmony import */ var _wrapInitCb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wrapInitCb */ \"7Jtz\");\n/* harmony import */ var _tinyRCE__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tinyRCE */ \"5+Bo\");\n/* harmony import */ var _defaultTinymceConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../defaultTinymceConfig */ \"ErZx\");\n/* harmony import */ var _getTranslations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../getTranslations */ \"k3+9\");\n/* harmony import */ var _instructure_canvas_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @instructure/canvas-theme */ \"7np9\");\nvar _process, _process$env;\n\n/*\n * Copyright (C) 2021 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n\n\n\n\n\n\n\n\n\nif (!((_process = process) !== null && _process !== void 0 && (_process$env = _process.env) !== null && _process$env !== void 0 && _process$env.BUILD_LOCALE)) {\n  _format_message__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setup({\n    locale: 'en',\n    generateId: __webpack_require__(/*! format-message-generate-id/underscored_crc32 */ \"syYy\"),\n    missingTranslation: 'ignore'\n  });\n} // forward rceRef to it refs the RCEWrapper where clients can call getCode etc. on it.\n// You probably shouldn't use it until onInit has been called. Until then tinymce\n// is not initialized.\n\n\nconst RCE = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"forwardRef\"])(function RCE(props, rceRef) {\n  const {\n    autosave,\n    defaultContent,\n    editorOptions,\n    // tinymce config\n    height,\n    highContrastCSS,\n    instRecordDisabled,\n    language,\n    liveRegion,\n    mirroredAttrs,\n    // attributes to transfer from the original textarea to the one created by tinymce\n    readOnly,\n    textareaId,\n    textareaClassName,\n    rcsProps,\n    use_rce_buttons_and_icons,\n    onFocus,\n    onBlur,\n    onInit,\n    onContentChange,\n    ...rest\n  } = props;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(() => _format_message__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setup({\n    locale: Object(_normalizeLocale__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(props.language)\n  }));\n  const [translations, setTranslations] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(() => {\n    const locale = Object(_normalizeLocale__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(props.language);\n    const p = Object(_getTranslations__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(locale).then(() => {\n      setTranslations(true);\n    }).catch(err => {\n      // eslint-disable-next-line no-console\n      console.error('Failed loading the language file for', locale, '\\n Cause:', err);\n      setTranslations(false);\n    });\n    return p;\n  }, []); // some properties are only used on initialization\n  // Languages is a bit of a mess. Tinymce and Canvas\n  // have 2 different sets of language names. normalizeLocale\n  // takes the language prop and returns the locale Canvas knows,\n  // editorLanguage takes the language prop and returns the\n  // corresponding locale for tinymce.\n\n  const [initOnlyProps] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(() => {\n    const iProps = {\n      autosave,\n      defaultContent,\n      highContrastCSS,\n      instRecordDisabled,\n      language: Object(_normalizeLocale__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(language),\n      liveRegion,\n      textareaId,\n      textareaClassName,\n      trayProps: rcsProps,\n      use_rce_buttons_and_icons,\n      editorOptions: Object.assign(editorOptions, {\n        selector: `#${textareaId}`,\n        height,\n        language: _editorLanguage__WEBPACK_IMPORTED_MODULE_5___default()(props.language)\n      })\n    };\n    Object(_wrapInitCb__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(mirroredAttrs, iProps.editorOptions);\n    return iProps;\n  });\n\n  if (typeof translations !== 'boolean') {\n    return Object(_format_message__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Loading...');\n  } else {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RCEWrapper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], Object.assign({\n      ref: rceRef,\n      tinymce: _tinyRCE__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n      readOnly: readOnly\n    }, initOnlyProps, {\n      onFocus: onFocus,\n      onBlur: onBlur,\n      onContentChange: onContentChange,\n      onInitted: onInit\n    }, rest));\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (RCE);\nRCE.propTypes = {\n  // do you want the rce to autosave content to localStorage, and\n  // how long should it be until it's deleted.\n  // If autosave is enabled, call yourRef.RCEClosed() if the user\n  // exits the page normally (e.g. via Cancel or Save)\n  autosave: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"shape\"])({\n    enabled: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"bool\"],\n    maxAge: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"number\"]\n  }),\n  // the initial content\n  defaultContent: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"],\n  // tinymce configuration. See defaultTinymceConfig for all the defaults\n  // and RCEWrapper.editorOptionsPropType for stuff you may want to include\n  editorOptions: _RCEWrapper__WEBPACK_IMPORTED_MODULE_3__[\"editorOptionsPropType\"],\n  // there's an open bug when RCE is rendered in a Modal form\n  // and the user navigates to the KB Shortcut Helper Button using\n  // Apple VoiceOver navigation keys (VO+arrows)\n  // as a workaround, the KB Shortcut Helper Button may be supressed\n  // setting renderKBShortcutModal to false\n  renderKBShortcutModal: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"bool\"],\n  //\n  // height of the RCE. if a number, in px\n  height: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"oneOfType\"])([prop_types__WEBPACK_IMPORTED_MODULE_1__[\"number\"], prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"]]),\n  // array of URLs to high-contrast css\n  highContrastCSS: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"arrayOf\"])(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"]),\n  // if true, do not load the plugin that provides the media toolbar and menu items\n  instRecordDisabled: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"bool\"],\n  // locale of the user's language\n  language: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"],\n  // list of all supported languages. This is the list of languages\n  // shown to the user when adding closed captions to videos.\n  // If you are not supporting media uploads, this is not necessary.\n  // Defaults to [{id: 'en', label: 'English'}]\n  languages: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"arrayOf\"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"shape\"])({\n    // the id is the locale\n    id: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"].isRequired,\n    // the label to show in the UI\n    label: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"].isRequired\n  })),\n  // function that returns the element where screenreader alerts go\n  liveRegion: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"func\"],\n  // array of lti tools available to the user\n  // {id, favorite} are all that's required, ther fields are ignored\n  ltiTools: _RCEWrapper__WEBPACK_IMPORTED_MODULE_3__[\"ltiToolsPropType\"],\n  // The maximum number of RCEs that will render on page load.\n  // Any more than this will be deferred until it is nearly\n  // scrolled into view.\n  // if isNaN or <=0, render them all\n  maxInitRenderedRCEs: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"number\"],\n  // name:value pairs of attributes to add to the textarea\n  // tinymce creates as the backing store of the RCE\n  mirroredAttrs: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"objectOf\"])(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"]),\n  // is this RCE readonly?\n  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"bool\"],\n  // id put on the generated textarea\n  textareaId: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"].isRequired,\n  // class name added to the generated textarea\n  textareaClassName: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"],\n  // properties necessary for the RCE to us the RCS\n  // if missing, RCE features that require the RCS are omitted\n  rcsProps: _plugins_shared_CanvasContentTray__WEBPACK_IMPORTED_MODULE_4__[\"trayPropTypes\"],\n  // enable the custom buttons feature (temporary until the feature is forced on)\n  use_rce_buttons_and_icons: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"bool\"],\n  // event handlers\n  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"func\"],\n  // f(RCEWrapper component)\n  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"func\"],\n  // f(event)\n  onInit: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"func\"],\n  // f(tinymce_editor)\n  onContentChange: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"func\"] // f(content), don't mistake this as an indication RCE is a controlled component\n\n};\nRCE.defaultProps = {\n  autosave: {\n    enabled: false,\n    maxAge: 3600000\n  },\n  defaultContent: '',\n  editorOptions: { ..._defaultTinymceConfig__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n  },\n  renderKBShortcutModal: true,\n  highContrastCSS: [],\n  instRecordDisabled: false,\n  language: 'en',\n  liveRegion: () => document.getElementById('flash_screenreader_holder'),\n  maxInitRenderedRCEs: -1,\n  mirroredAttrs: {},\n  readOnly: false,\n  use_rce_buttons_and_icons: true,\n  onFocus: () => {},\n  onBlur: () => {},\n  onContentChange: () => {},\n  onInit: () => {}\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ \"8oxB\")))\n\n//# sourceURL=webpack:///./packages/canvas-rce/es/rce/RCE.js?");

/***/ }),

/***/ "7NEt":
/*!******************************************!*\
  !*** ./ui/shared/rce/react/CanvasRce.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _instructure_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @instructure/ui-utils */ \"Nd46\");\n/* harmony import */ var _instructure_canvas_rce_es_rce_RCE__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @instructure/canvas-rce/es/rce/RCE */ \"0nLJ\");\n/* harmony import */ var _getRCSProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../getRCSProps */ \"eVns\");\n/* harmony import */ var _canvas_util_closedCaptionLanguages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @canvas/util/closedCaptionLanguages */ \"stQK\");\n/* harmony import */ var _tinymce_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tinymce.config */ \"JiFB\");\n/* harmony import */ var _loadEventListeners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loadEventListeners */ \"FNQM\");\n/* harmony import */ var _shouldUseFeature__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shouldUseFeature */ \"TiZd\");\n/*\n * Copyright (C) 2021 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n\n\n\n\n // the ref you add via <CanvasRce ref={yourRef} /> will be a reference\n// to the underlying RCEWrapper. You probably shouldn't use it until\n// onInit has been called. Until then tinymce is not initialized.\n\nconst CanvasRce = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"forwardRef\"])(function CanvasRce(props, rceRef) {\n  var _window$ENV, _window$ENV2, _window$ENV3, _window$INST;\n\n  const {\n    autosave,\n    defaultContent,\n    mirroredAttrs,\n    readOnly,\n    textareaClassName,\n    textareaId,\n    height,\n    editorOptions,\n    onFocus,\n    onBlur,\n    onContentChange,\n    onInit,\n    ...rest\n  } = props;\n  const [languages] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(() => {\n    const myLanguage = ENV.LOCALE;\n    const langlist = Object.keys(_canvas_util_closedCaptionLanguages__WEBPACK_IMPORTED_MODULE_5__[\"default\"]).map(locale => {\n      return {\n        id: locale,\n        label: _canvas_util_closedCaptionLanguages__WEBPACK_IMPORTED_MODULE_5__[\"default\"][locale]\n      };\n    }).sort((a, b) => {\n      if (a.id === myLanguage) {\n        return -1;\n      } else if (b.id === myLanguage) {\n        return 1;\n      } else {\n        return a.label.localeCompare(b.label, myLanguage);\n      }\n    });\n    return langlist;\n  });\n  const [RCSProps] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(Object(_getRCSProps__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n  const [tinymceConfig] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(() => {\n    // tinymce is a global by now via import of CanvasRce importing tinyRCE\n    const editorConfig = new _tinymce_config__WEBPACK_IMPORTED_MODULE_6__[\"default\"](tinymce, window.INST, textareaId);\n    const config = { ...editorConfig.defaultConfig(),\n      ...editorOptions\n    };\n\n    if (editorOptions.init_instance_callback) {\n      config.init_instance_callback = Object(_instructure_ui_utils__WEBPACK_IMPORTED_MODULE_2__[\"createChainedFunction\"])(config.init_instance_callback, editorOptions.init_instance_callback);\n    }\n\n    return config;\n  });\n  const [autosave_] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    enabled: true,\n    interval: Number.isNaN(ENV.rce_auto_save_max_age_ms) ? 3600000 : ENV.rce_auto_save_max_age_ms\n  });\n  const [refCreated, setRefCreated] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null); // you have to use a callback function ref because a ref as a useEffect dependency\n  // will never trigger it to be rerun. This way any time the ref changes,\n  // the function is called. rceRef as a dependency is to quiet eslint.\n\n  const magicRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(node => {\n    rceRef.current = node;\n\n    if (node) {\n      node.getTextarea().remoteEditor = node;\n    }\n\n    setRefCreated(node);\n  }, [rceRef]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const rce_wrapper = refCreated && rceRef.current;\n    return () => {\n      rce_wrapper === null || rce_wrapper === void 0 ? void 0 : rce_wrapper.destroy();\n    };\n  }, [rceRef, refCreated]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    Object(_loadEventListeners__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_canvas_rce_es_rce_RCE__WEBPACK_IMPORTED_MODULE_3__[\"default\"], Object.assign({\n    ref: magicRef,\n    autosave: autosave_,\n    defaultContent: defaultContent,\n    editorOptions: tinymceConfig,\n    highContrastCSS: (_window$ENV = window.ENV) === null || _window$ENV === void 0 ? void 0 : _window$ENV.url_for_high_contrast_tinymce_editor_css,\n    instRecordDisabled: (_window$ENV2 = window.ENV) === null || _window$ENV2 === void 0 ? void 0 : _window$ENV2.RICH_CONTENT_INST_RECORD_TAB_DISABLED,\n    language: ((_window$ENV3 = window.ENV) === null || _window$ENV3 === void 0 ? void 0 : _window$ENV3.LOCALE) || 'en',\n    languages: languages,\n    liveRegion: () => document.getElementById('flash_screenreader_holder'),\n    ltiTools: (_window$INST = window.INST) === null || _window$INST === void 0 ? void 0 : _window$INST.editorButtons,\n    maxInitRenderedRCEs: props.maxInitRenderedRCEs,\n    mirroredAttrs: mirroredAttrs,\n    readOnly: readOnly,\n    textareaClassName: textareaClassName,\n    textareaId: textareaId,\n    height: height,\n    rcsProps: RCSProps,\n    onFocus: onFocus,\n    onBlur: onBlur,\n    onContentChange: onContentChange,\n    onInit: onInit,\n    use_rce_buttons_and_icons: Object(_shouldUseFeature__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_shouldUseFeature__WEBPACK_IMPORTED_MODULE_8__[\"Feature\"].ButtonsAndIcons, window.ENV)\n  }, rest));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (CanvasRce);\nCanvasRce.propTypes = {\n  // should the RCE autosave content to localStorage as the user types\n  autosave: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"bool\"],\n  // the initial content\n  defaultContent: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"],\n  // tinymce configuration overrides\n  // see RCEWrapper's editorOptionsPropType for details.\n  editorOptions: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"object\"],\n  // height of the RCE. If a number, in px\n  height: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"oneOfType\"])([prop_types__WEBPACK_IMPORTED_MODULE_1__[\"number\"], prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"]]),\n  // The maximum number of RCEs that will render on page load.\n  // Any more than this will be deferred until it is nearly\n  // scrolled into view.\n  // if isNaN or <=0, render them all\n  maxInitRenderedRCEs: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"number\"],\n  // name:value pairs of attributes to add to the textarea\n  // tinymce creates as the backing store of the RCE\n  mirroredAttrs: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"objectOf\"])(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"]),\n  // is thie RCE readonly?\n  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"bool\"],\n  // class name added to the generated textarea\n  textareaClassName: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"],\n  // id of the generated textarea\n  textareaId: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"].isRequired,\n  // event handlers\n  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"func\"],\n  // f(RCEWrapper component) (sorry)\n  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"func\"],\n  // f(event)\n  onInit: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"func\"],\n  // f(tinymce_editor)\n  onContentChange: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"func\"] // f(content), don't mistake this as an indication CanvasRce is a controlled component\n\n};\nCanvasRce.defaultProps = {\n  autosave: true,\n  editorOptions: {},\n  maxInitRenderedRCEs: -1,\n  mirroredAttrs: {},\n  readOnly: false,\n  textareaClassName: 'input-block-level',\n  onFocus: () => {},\n  onBlur: () => {},\n  onContentChange: () => {},\n  onInit: () => {}\n};\n\n//# sourceURL=webpack:///./ui/shared/rce/react/CanvasRce.js?");

/***/ }),

/***/ "QLaP":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\n/**\n * Use invariant() to assert state which your program assumes to be true.\n *\n * Provide sprintf-style format (only %s is supported) and arguments\n * to provide information about what broke and what you were\n * expecting.\n *\n * The invariant message will be stripped in production, but the invariant\n * will remain to ensure logic does not differ in production.\n */\n\nvar invariant = function(condition, format, a, b, c, d, e, f) {\n  if (true) {\n    if (format === undefined) {\n      throw new Error('invariant requires an error message argument');\n    }\n  }\n\n  if (!condition) {\n    var error;\n    if (format === undefined) {\n      error = new Error(\n        'Minified exception occurred; use the non-minified dev environment ' +\n        'for the full error message and additional helpful warnings.'\n      );\n    } else {\n      var args = [a, b, c, d, e, f];\n      var argIndex = 0;\n      error = new Error(\n        format.replace(/%s/g, function() { return args[argIndex++]; })\n      );\n      error.name = 'Invariant Violation';\n    }\n\n    error.framesToPop = 1; // we don't care about invariant's own frame\n    throw error;\n  }\n};\n\nmodule.exports = invariant;\n\n\n//# sourceURL=webpack:///./node_modules/invariant/browser.js?");

/***/ }),

/***/ "dDTa":
/*!*****************************************************!*\
  !*** ./ui/shared/external-apps/iframeAllowances.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\n * Copyright (C) 2018 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\nconst iframeAllowances = () => {\n  const allowances = ENV.LTI_LAUNCH_FRAME_ALLOWANCES || [];\n  return allowances.join('; ');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (iframeAllowances);\n\n//# sourceURL=webpack:///./ui/shared/external-apps/iframeAllowances.js?");

/***/ }),

/***/ "dI71":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _inheritsLoose; });\n/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ \"s4An\");\n\nfunction _inheritsLoose(subClass, superClass) {\n  subClass.prototype = Object.create(superClass.prototype);\n  subClass.prototype.constructor = subClass;\n  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subClass, superClass);\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js?");

/***/ })

}]);