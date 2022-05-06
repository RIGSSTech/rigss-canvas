(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[3776],{

/***/ "HA9v":
/*!******************************************!*\
  !*** ./ui/boot/initializers/setupCSP.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setupCSP; });\n/* harmony import */ var _canvas_alerts_react_FlashAlert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/alerts/react/FlashAlert */ \"uloQ\");\n/* harmony import */ var _canvas_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @canvas/i18n */ \"HGxv\");\n/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ \"Y/W1\");\n/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);\n/*\n * Copyright (C) 2019 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\nconst I18n = Object(_canvas_i18n__WEBPACK_IMPORTED_MODULE_1__[\"useScope\"])('common_bundle');\n/**\n * Sets up CSP enforcement for iframes and alerts end users to csp failures\n */\n\nfunction setupCSP(rootElement) {\n  const csp = ENV.csp;\n\n  if (csp) {\n    const cspViolationFunction = () => {\n      Object(_canvas_alerts_react_FlashAlert__WEBPACK_IMPORTED_MODULE_0__[\"showFlashAlert\"])({\n        message: I18n.t('Content on this page violates the security policy, contact your admin for assistance.'),\n        type: 'error'\n      });\n    };\n\n    const setupCSPForIframes = underscore__WEBPACK_IMPORTED_MODULE_2___default.a.debounce(() => Array.from(rootElement.querySelectorAll('iframe.attachment-html-iframe')).forEach(frame => {\n      if (!frame.getAttribute('csp')) {\n        frame.setAttribute('csp', csp);\n      }\n    }), 300); // Set up CSP on any iframes currently on the page\n\n\n    setupCSPForIframes(); // Handle page level violations\n\n    rootElement.addEventListener('securitypolicyviolation', cspViolationFunction); // Set up handling for any iframes that might be added to the page\n    // Sometimes an iframe being added in React doesn't trigger nodes being added... :(\n    // So we just run this function on all mutations (though it is debounced)\n\n    const cspMutationObserver = new MutationObserver(setupCSPForIframes);\n    cspMutationObserver.observe(rootElement, {\n      childList: true,\n      subtree: true\n    });\n  }\n}\n\n//# sourceURL=webpack:///./ui/boot/initializers/setupCSP.js?");

/***/ }),

/***/ "uloQ":
/*!**********************************************!*\
  !*** ./ui/shared/alerts/react/FlashAlert.js ***!
  \**********************************************/
/*! exports provided: default, showFlashAlert, destroyContainer, showFlashError, showFlashSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FlashAlert; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showFlashAlert\", function() { return showFlashAlert; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"destroyContainer\", function() { return destroyContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showFlashError\", function() { return showFlashError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showFlashSuccess\", function() { return showFlashSuccess; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"i8i4\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _canvas_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @canvas/i18n */ \"HGxv\");\n/* harmony import */ var _instructure_ui_alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @instructure/ui-alerts */ \"spba\");\n/* harmony import */ var _instructure_ui_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @instructure/ui-buttons */ \"K6WN\");\n/* harmony import */ var _instructure_ui_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @instructure/ui-text */ \"iE3e\");\n/* harmony import */ var _instructure_ui_a11y_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @instructure/ui-a11y-content */ \"9+/z\");\n/* harmony import */ var _instructure_ui_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @instructure/ui-motion */ \"Nl9J\");\n/*\n * Copyright (C) 2017 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n/**\n * Flash alerts, especially for ajax error messages\n * Typical usage:\n * import {showFlashError} from './FlashAlert'\n * ...\n * axios.put(url, data).then((response) => {\n *     // do something with response\n *   }).catch(showFlashError(your_error_message))\n *\n * showFlashError() with no argument shows a generic message\n *\n * On error, will display an inst-ui Alert at the top of the page\n * with an error message and \"Details\" button. When the user clicks\n * the button, it shows error details extracted from the axios Error\n *\n * You could also import the lower level showFlashAlert function or\n * the FlashAlert component if you need more control\n *\n * showFlashAlert({ err, message, type }, onCloseCallback)\n *  err: error object\n *  message: user-facing message\n *  type: one of ['info', 'success', 'warning', 'error']\n *        default is 'info' unless an error object is passed in, else is 'error'\n */\n\n\n\n\n\n\n\n\n\nconst I18n = Object(_canvas_i18n__WEBPACK_IMPORTED_MODULE_3__[\"useScope\"])('ajaxflashalert');\nconst messageHolderId = 'flashalert_message_holder'; // specs fail if I reuse jquery's elements\n\nconst screenreaderMessageHolderId = 'flash_screenreader_holder';\nconst timeout = 10000; // An Alert with a message and \"Details\" button which surfaces\n// more info about the error when pressed.\n// Is displayed at the top of the document, and will close itself after a while\n\nclass FlashAlert extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    this.showDetails = () => {\n      this.setState({\n        showDetails: true\n      });\n      clearTimeout(this.timerId);\n      this.timerId = setTimeout(() => this.closeAlert(), this.props.timeout);\n    };\n\n    this.closeAlert = () => {\n      this.setState({\n        isOpen: false\n      }, () => {\n        setTimeout(() => {\n          clearTimeout(this.timerId);\n          this.props.onClose();\n        }, 500);\n      });\n    };\n\n    this.state = {\n      showDetails: false,\n      isOpen: true\n    };\n    this.timerId = 0;\n  }\n\n  getLiveRegion() {\n    // return element where flash screenreader messages go.\n    // create if necessary\n    let liveRegion = document.getElementById(screenreaderMessageHolderId);\n\n    if (!liveRegion) {\n      liveRegion = document.createElement('div');\n      liveRegion.id = screenreaderMessageHolderId;\n      liveRegion.setAttribute('role', 'alert');\n      document.body.appendChild(liveRegion);\n    }\n\n    return liveRegion;\n  }\n\n  findDetailMessage() {\n    const err = this.props.error;\n    let a = err.message;\n    let b;\n\n    if (err.response) {\n      if (err.response.data) {\n        try {\n          if (Array.isArray(err.response.data.errors)) {\n            // probably a canvas api\n            a = err.response.data.errors[0].message;\n            b = err.message;\n          } else if (err.response.data.message) {\n            // probably a canvas api too\n            a = err.response.data.message;\n            b = err.message;\n          }\n        } catch (ignore) {\n          a = err.message;\n        }\n      }\n    }\n\n    return {\n      a,\n      b\n    };\n  }\n\n  renderDetailMessage() {\n    const {\n      a,\n      b\n    } = this.findDetailMessage();\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_text__WEBPACK_IMPORTED_MODULE_6__[\"Text\"], {\n      as: \"p\",\n      fontStyle: \"italic\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_text__WEBPACK_IMPORTED_MODULE_6__[\"Text\"], null, a), b ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null) : null, b ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_text__WEBPACK_IMPORTED_MODULE_6__[\"Text\"], null, b) : null);\n  }\n\n  render() {\n    let details = null;\n\n    if (this.props.error) {\n      if (this.state.showDetails) {\n        details = this.renderDetailMessage();\n      } else {\n        details = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_a11y_content__WEBPACK_IMPORTED_MODULE_7__[\"PresentationContent\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_buttons__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n          variant: \"link\",\n          onClick: this.showDetails\n        }, I18n.t('Details'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_a11y_content__WEBPACK_IMPORTED_MODULE_7__[\"ScreenReaderContent\"], null, this.renderDetailMessage()));\n      }\n    }\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_motion__WEBPACK_IMPORTED_MODULE_8__[\"Transition\"], {\n      transitionOnMount: true,\n      in: this.state.isOpen,\n      type: \"fade\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_alerts__WEBPACK_IMPORTED_MODULE_4__[\"Alert\"], {\n      variant: this.props.variant,\n      renderCloseButtonLabel: I18n.t('Close'),\n      onDismiss: this.closeAlert,\n      margin: \"small auto\",\n      timeout: this.props.timeout,\n      liveRegion: this.getLiveRegion,\n      transition: \"fade\",\n      screenReaderOnly: this.props.screenReaderOnly\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      style: {\n        margin: '0 -5px'\n      }\n    }, this.props.message), details)));\n  }\n\n}\nFlashAlert.propTypes = {\n  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Error),\n  variant: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['info', 'success', 'warning', 'error']),\n  timeout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n  screenReaderOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool\n};\nFlashAlert.defaultProps = {\n  error: null,\n  variant: 'info',\n  timeout,\n  screenReaderOnly: false\n};\nfunction showFlashAlert({\n  message,\n  err,\n  type = err ? 'error' : 'info',\n  srOnly = false\n}) {\n  function closeAlert(atNode) {\n    react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.unmountComponentAtNode(atNode);\n    atNode.remove();\n  }\n\n  function getAlertContainer() {\n    let alertContainer = document.getElementById(messageHolderId);\n\n    if (!alertContainer) {\n      alertContainer = document.createElement('div');\n      alertContainer.classList.add('clickthrough-container');\n      alertContainer.id = messageHolderId;\n      alertContainer.setAttribute('style', 'position: fixed; top: 0; left: 0; width: 100%; z-index: 100000;');\n      document.body.appendChild(alertContainer);\n    }\n\n    return alertContainer;\n  }\n\n  function renderAlert(parent) {\n    react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FlashAlert, {\n      message: message,\n      timeout: Number.isNaN(parseInt(ENV.flashAlertTimeout, 10)) ? timeout : ENV.flashAlertTimeout,\n      error: err,\n      variant: type,\n      onClose: closeAlert.bind(null, parent) // eslint-disable-line react/jsx-no-bind\n      ,\n      screenReaderOnly: srOnly\n    }), parent);\n  }\n\n  const div = document.createElement('div'); // div.setAttribute('class', styles.flashMessage)\n\n  div.setAttribute('style', 'max-width:50em;margin:1rem auto;');\n  div.setAttribute('class', 'flashalert-message');\n  getAlertContainer().appendChild(div);\n  renderAlert(div);\n}\nfunction destroyContainer() {\n  const container = document.getElementById(messageHolderId);\n  const liveRegion = document.getElementById(screenreaderMessageHolderId);\n  if (container) container.remove();\n  if (liveRegion) liveRegion.remove();\n}\nfunction showFlashError(message = I18n.t('An error occurred making a network request')) {\n  return err => showFlashAlert({\n    message,\n    err,\n    type: 'error'\n  });\n}\nfunction showFlashSuccess(message) {\n  return () => showFlashAlert({\n    message,\n    type: 'success'\n  });\n}\n\n//# sourceURL=webpack:///./ui/shared/alerts/react/FlashAlert.js?");

/***/ })

}]);