(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[127],{

/***/ "DiQt":
/*!*********************************************************************************************************!*\
  !*** ./packages/canvas-rce/es/rce/plugins/instructure_external_tools/components/LtiToolsModal/index.js ***!
  \*********************************************************************************************************/
/*! exports provided: LtiToolsModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LtiToolsModal\", function() { return LtiToolsModal; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _instructure_ui_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @instructure/ui-modal */ \"7I2A\");\n/* harmony import */ var _instructure_ui_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @instructure/ui-buttons */ \"K6WN\");\n/* harmony import */ var _instructure_ui_heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @instructure/ui-heading */ \"nwNI\");\n/* harmony import */ var _instructure_ui_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @instructure/ui-list */ \"dbzd\");\n/* harmony import */ var _instructure_ui_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @instructure/ui-view */ \"OkHH\");\n/* harmony import */ var _instructure_ui_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @instructure/ui-flex */ \"N46v\");\n/* harmony import */ var _instructure_ui_a11y_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @instructure/ui-a11y-content */ \"9+/z\");\n/* harmony import */ var _instructure_ui_text_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @instructure/ui-text-input */ \"/09A\");\n/* harmony import */ var _instructure_ui_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @instructure/ui-icons */ \"oMAr\");\n/* harmony import */ var _instructure_ui_alerts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @instructure/ui-alerts */ \"spba\");\n/* harmony import */ var _format_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../format-message */ \"NFDp\");\n/* harmony import */ var _LtiTool__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./LtiTool */ \"Y5PV\");\n/*\n * Copyright (C) 2019 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n\n\n\n\n\n\n\n\n\n // TODO: we really need a way for the client to pass this to the RCE\n\nconst getLiveRegion = () => document.getElementById('flash_screenreader_holder');\n\nconst getFilterResults = (term, thingsToFilter) => {\n  if (term.length <= 0) {\n    return thingsToFilter;\n  }\n\n  const query = term ? new RegExp(term, 'i') : null;\n  return thingsToFilter.filter(item => query && query.test(item.title));\n};\n\nfunction LtiToolsModal(props) {\n  const [filterTerm, setFilterTerm] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const [filteredResults, setFilteredResults] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(props.ltiButtons);\n\n  const handleFilterChange = e => {\n    setFilterTerm(e.target.value);\n    setFilteredResults(getFilterResults(e.target.value, props.ltiButtons));\n  };\n\n  const filterEmpty = filteredResults.length <= 0;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_modal__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"], {\n    \"data-mce-component\": true,\n    liveRegion: getLiveRegion,\n    size: \"medium\",\n    theme: {\n      mediumMaxWidth: '42rem'\n    },\n    label: Object(_format_message__WEBPACK_IMPORTED_MODULE_12__[\"default\"])('Apps'),\n    onDismiss: props.onDismiss,\n    open: true,\n    shouldCloseOnDocumentClick: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_modal__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"].Header, {\n    theme: {\n      padding: '0.5rem'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_buttons__WEBPACK_IMPORTED_MODULE_3__[\"CloseButton\"], {\n    placement: \"end\",\n    offset: \"medium\",\n    onClick: props.onDismiss\n  }, Object(_format_message__WEBPACK_IMPORTED_MODULE_12__[\"default\"])('Close')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_heading__WEBPACK_IMPORTED_MODULE_4__[\"Heading\"], {\n    margin: \"small\"\n  }, Object(_format_message__WEBPACK_IMPORTED_MODULE_12__[\"default\"])('All Apps')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_view__WEBPACK_IMPORTED_MODULE_6__[\"View\"], {\n    as: \"div\",\n    padding: \"x-small none x-small medium\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_text_input__WEBPACK_IMPORTED_MODULE_9__[\"TextInput\"], {\n    type: \"search\",\n    renderLabel: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_a11y_content__WEBPACK_IMPORTED_MODULE_8__[\"ScreenReaderContent\"], null, Object(_format_message__WEBPACK_IMPORTED_MODULE_12__[\"default\"])('Search')),\n    placeholder: Object(_format_message__WEBPACK_IMPORTED_MODULE_12__[\"default\"])('Search'),\n    renderAfterInput: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_icons__WEBPACK_IMPORTED_MODULE_10__[\"IconSearchLine\"], {\n      inline: false\n    }),\n    onChange: handleFilterChange\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_modal__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"].Body, {\n    overflow: \"fit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_flex__WEBPACK_IMPORTED_MODULE_7__[\"Flex\"], {\n    as: \"div\",\n    direction: \"column\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_flex__WEBPACK_IMPORTED_MODULE_7__[\"Flex\"].Item, {\n    as: \"div\",\n    shouldShrink: true,\n    shouldGrow: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_alerts__WEBPACK_IMPORTED_MODULE_11__[\"Alert\"], {\n    liveRegion: getLiveRegion,\n    variant: \"info\",\n    screenReaderOnly: !filterEmpty\n  }, filterEmpty && Object(_format_message__WEBPACK_IMPORTED_MODULE_12__[\"default\"])('No results found for {filterTerm}', {\n    filterTerm\n  }), !filterEmpty && Object(_format_message__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(`Found { count, plural,\n              =0 {# results}\n              one {# result}\n              other {# results}\n            }`, {\n    count: filteredResults.length\n  })), renderTools(filteredResults)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_modal__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_buttons__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    onClick: props.onDismiss,\n    color: \"primary\"\n  }, Object(_format_message__WEBPACK_IMPORTED_MODULE_12__[\"default\"])('Done'))));\n\n  function renderTools(ltiButtons) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_list__WEBPACK_IMPORTED_MODULE_5__[\"List\"], {\n      variant: \"unstyled\"\n    }, ltiButtons.sort((a, b) => a.title.localeCompare(b.title)).map(b => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_list__WEBPACK_IMPORTED_MODULE_5__[\"List\"].Item, {\n        key: b.id\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_view__WEBPACK_IMPORTED_MODULE_6__[\"View\"], {\n        as: \"div\",\n        padding: \"medium medium small none\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LtiTool__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        title: b.title,\n        image: b.image,\n        onAction: () => {\n          b.onAction();\n          props.onDismiss();\n        },\n        description: b.description\n      })));\n    }));\n  }\n}\nLtiToolsModal.propTypes = {\n  ltiButtons: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"arrayOf\"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"shape\"])({\n    description: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"].isRequired,\n    id: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"oneOfType\"])([prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"], prop_types__WEBPACK_IMPORTED_MODULE_1__[\"number\"]]).isRequired,\n    image: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"].isRequired,\n    onAction: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"func\"].isRequired,\n    title: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"].isRequired\n  })),\n  onDismiss: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"func\"].isRequired\n};\n\n//# sourceURL=webpack:///./packages/canvas-rce/es/rce/plugins/instructure_external_tools/components/LtiToolsModal/index.js?");

/***/ }),

/***/ "Y5PV":
/*!***********************************************************************************************************!*\
  !*** ./packages/canvas-rce/es/rce/plugins/instructure_external_tools/components/LtiToolsModal/LtiTool.js ***!
  \***********************************************************************************************************/
/*! exports provided: default, styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LtiTool; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"styles\", function() { return styles; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _instructure_ui_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @instructure/ui-text */ \"iE3e\");\n/* harmony import */ var _instructure_ui_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @instructure/ui-view */ \"OkHH\");\n/* harmony import */ var _ExpandoText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExpandoText */ \"nANm\");\n/* harmony import */ var _format_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../format-message */ \"NFDp\");\n/* harmony import */ var aphrodite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aphrodite */ \"/7Jz\");\n/*\n * Copyright (C) 2019 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n\n\n\nfunction LtiTool(props) {\n  const [focused, setFocused] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    title,\n    image,\n    description,\n    onAction\n  } = props;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_view__WEBPACK_IMPORTED_MODULE_3__[\"View\"], {\n    as: \"span\",\n    focused: focused,\n    className: Object(aphrodite__WEBPACK_IMPORTED_MODULE_6__[\"css\"])(styles.appButton),\n    padding: \"xxx-small xxx-small xx-small\",\n    borderRadius: \"medium\",\n    role: \"button\",\n    position: \"relative\",\n    onClick: () => {\n      onAction();\n    },\n    onKeyDown: e => {\n      if (e.keyCode === 13 || e.keyCode === 32) {\n        onAction();\n      }\n    },\n    onFocus: () => setFocused(true),\n    onBlur: () => setFocused(false),\n    tabIndex: \"0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: image,\n    width: \"28\",\n    height: \"28\",\n    alt: \"\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_view__WEBPACK_IMPORTED_MODULE_3__[\"View\"], {\n    as: \"span\",\n    className: Object(aphrodite__WEBPACK_IMPORTED_MODULE_6__[\"css\"])(styles.appTitle),\n    margin: \"none none none small\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_text__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    \"aria-label\": Object(_format_message__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('Open {title} application', {\n      title\n    }),\n    weight: \"bold\"\n  }, title))), description && renderDescription(description));\n\n  function renderDescription(desc) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_view__WEBPACK_IMPORTED_MODULE_3__[\"View\"], {\n      as: \"span\",\n      margin: \"none none none large\",\n      display: \"block\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExpandoText__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      text: desc,\n      title: title\n    }));\n  }\n}\nLtiTool.propTypes = {\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"].isRequired,\n  image: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"].isRequired,\n  onAction: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"func\"].isRequired,\n  description: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"]\n};\nconst styles = aphrodite__WEBPACK_IMPORTED_MODULE_6__[\"StyleSheet\"].create({\n  appTitle: {\n    verticalAlign: 'middle'\n  },\n  appButton: {\n    cursor: 'pointer'\n  }\n});\n\n//# sourceURL=webpack:///./packages/canvas-rce/es/rce/plugins/instructure_external_tools/components/LtiToolsModal/LtiTool.js?");

/***/ }),

/***/ "nANm":
/*!***************************************************************************************************************!*\
  !*** ./packages/canvas-rce/es/rce/plugins/instructure_external_tools/components/LtiToolsModal/ExpandoText.js ***!
  \***************************************************************************************************************/
/*! exports provided: default, styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ExpandoText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"styles\", function() { return styles; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var aphrodite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aphrodite */ \"/7Jz\");\n/* harmony import */ var _instructure_ui_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @instructure/ui-text */ \"iE3e\");\n/* harmony import */ var _instructure_ui_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @instructure/ui-view */ \"OkHH\");\n/* harmony import */ var _format_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../format-message */ \"NFDp\");\n/*\n * Copyright (C) 2019 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n\n\nfunction ExpandoText(props) {\n  const [descExpanded, setDescExpanded] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const [focused, setFocused] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    text,\n    title\n  } = props;\n  const label = descExpanded ? Object(_format_message__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('Hide {title} description', {\n    title\n  }) : Object(_format_message__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('View {title} description', {\n    title\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_view__WEBPACK_IMPORTED_MODULE_4__[\"View\"], {\n    as: \"button\",\n    background: \"transparent\",\n    display: \"block\",\n    borderWidth: \"none\",\n    textAlign: \"start\",\n    type: \"button\",\n    position: \"relative\",\n    padding: \"none none none xx-small\",\n    \"aria-expanded\": descExpanded,\n    borderRadius: \"medium\",\n    focused: focused,\n    onClick: () => {\n      setDescExpanded(!descExpanded);\n    },\n    onFocus: () => setFocused(true),\n    onBlur: () => setFocused(false)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_view__WEBPACK_IMPORTED_MODULE_4__[\"View\"], {\n    as: \"span\",\n    \"aria-live\": \"assertive\",\n    \"aria-relevant\": \"text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_text__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    color: \"brand\",\n    size: \"x-small\",\n    \"aria-label\": label\n  }, descExpanded ? Object(_format_message__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('Hide description') : Object(_format_message__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('View description')))), descExpanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_view__WEBPACK_IMPORTED_MODULE_4__[\"View\"], {\n    as: \"span\",\n    margin: \"small none none xx-small\",\n    display: \"block\",\n    minWidth: \"10rem\",\n    role: \"presentation\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_text__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    as: \"span\",\n    color: \"secondary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: Object(aphrodite__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(styles.descriptionText),\n    dangerouslySetInnerHTML: {\n      __html: text\n    }\n  }))));\n}\nExpandoText.propTypes = {\n  text: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"].isRequired,\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"].isRequired\n};\nconst styles = aphrodite__WEBPACK_IMPORTED_MODULE_2__[\"StyleSheet\"].create({\n  descriptionText: {\n    lineHeight: '1.2rem',\n    p: {\n      margin: '1rem 0'\n    },\n    ':nth-child(1n)> :first-child': {\n      marginTop: '0',\n      display: 'inline-block'\n    },\n    ':nth-child(1n)> :last-child': {\n      marginBottom: '0'\n    }\n  }\n});\n\n//# sourceURL=webpack:///./packages/canvas-rce/es/rce/plugins/instructure_external_tools/components/LtiToolsModal/ExpandoText.js?");

/***/ })

}]);