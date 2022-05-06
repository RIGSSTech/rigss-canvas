(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[3751],{

/***/ "3Mpb":
/*!******************************************************!*\
  !*** ./ui/features/course_wizard/react/InfoFrame.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ \"Y/W1\");\n/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _canvas_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @canvas/i18n */ \"HGxv\");\n/* harmony import */ var _ListItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ListItems */ \"KmTg\");\n/* harmony import */ var _instructure_get_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @instructure/get-cookie */ \"FOCd\");\n/*\n * Copyright (C) 2014 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n\n\n\nconst I18n = Object(_canvas_i18n__WEBPACK_IMPORTED_MODULE_4__[\"useScope\"])('course_wizard');\nconst courseNotSetUpItem = {\n  get text() {\n    return I18n.t(\"Great, so you've got a course. Now what? Well, before you go publishing it to the world, you may want to check and make sure you've got the basics laid out.  Work through the list on the left to ensure that your course is ready to use.\");\n  },\n\n  get warning() {\n    return I18n.t('This course is visible only to teachers until it is published.');\n  },\n\n  iconClass: 'icon-instructure'\n};\nconst checklistComplete = {\n  get text() {\n    return I18n.t(\"Now that your course is set up and available, you probably won't need this checklist anymore. But we'll keep it around in case you realize later you want to try something new, or you just want a little extra help as you make changes to your course content.\");\n  },\n\n  iconClass: 'icon-instructure'\n};\n\nclass InfoFrame extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {\n  constructor(...args) {\n    super(...args);\n    this.state = {\n      itemShown: courseNotSetUpItem\n    };\n\n    this.getWizardItem = key => {\n      const item = underscore__WEBPACK_IMPORTED_MODULE_1___default.a.findWhere(_ListItems__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        key\n      });\n\n      this.setState({\n        itemShown: item\n      }, function () {\n        const $messageBox = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.messageBox);\n        const $messageIcon = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.messageIcon); // I would use .toggle, but it has too much potential to get all out\n        // of whack having to be called twice to force the animation.\n        // Remove the animation classes in case they are there already.\n\n        $messageBox.removeClass('ic-wizard-box__message-inner--is-fired');\n        $messageIcon.removeClass('ic-wizard-box__message-icon--is-fired'); // Add them back\n\n        setTimeout(() => {\n          $messageBox.addClass('ic-wizard-box__message-inner--is-fired');\n          $messageIcon.addClass('ic-wizard-box__message-icon--is-fired');\n        }, 100); // Set the focus to the call to action 'button' if it's there\n        // otherwise the text.\n\n        if (this.callToAction) {\n          this.callToAction.focus();\n        } else {\n          this.messageBox.focus();\n        }\n      });\n    };\n\n    this.getHref = () => this.state.itemShown.url || '#';\n\n    this.chooseHomePage = event => {\n      event.preventDefault();\n      this.props.closeModal();\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.choose_home_page_link').click();\n    };\n\n    this.renderButton = () => {\n      if (this.state.itemShown.key === 'home_page') {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"a\", {\n          ref: e => this.callToAction = e,\n          onClick: this.chooseHomePage,\n          className: \"Button Button--primary\",\n          \"aria-label\": `Start task: ${this.state.itemShown.title}`,\n          \"aria-describedby\": \"ic-wizard-box__message-text\"\n        }, this.state.itemShown.title);\n      }\n\n      if (this.state.itemShown.key === 'publish_course') {\n        if (window.ENV.COURSE_WIZARD.permissions.can_change_course_publish_state) {\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"form\", {\n            acceptCharset: \"UTF-8\",\n            action: window.ENV.COURSE_WIZARD.publish_course,\n            method: \"post\"\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"input\", {\n            name: \"utf8\",\n            type: \"hidden\",\n            value: \"\\u2713\"\n          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"input\", {\n            name: \"_method\",\n            type: \"hidden\",\n            value: \"put\"\n          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"input\", {\n            name: \"authenticity_token\",\n            type: \"hidden\",\n            value: Object(_instructure_get_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('_csrf_token')\n          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"input\", {\n            type: \"hidden\",\n            name: \"course[event]\",\n            value: \"offer\"\n          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"button\", {\n            ref: e => this.callToAction = e,\n            type: \"submit\",\n            className: \"Button Button--success\"\n          }, this.state.itemShown.title));\n        } else {\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"b\", null, I18n.t('You do not have permission to publish this course.'));\n        }\n      }\n\n      if (this.state.itemShown.hasOwnProperty('title')) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"a\", {\n          ref: e => this.callToAction = e,\n          href: this.getHref(),\n          className: \"Button Button--primary\",\n          \"aria-label\": `Start task: ${this.state.itemShown.title}`,\n          \"aria-describedby\": \"ic-wizard-box__message-text\"\n        }, this.state.itemShown.title);\n      } else if (this.state.itemShown.hasOwnProperty('warning')) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"b\", null, this.state.itemShown.warning);\n      } else {\n        return null;\n      }\n    };\n  }\n\n  componentWillMount() {\n    if (window.ENV.COURSE_WIZARD.checklist_states.publish_step) {\n      this.setState({\n        itemShown: checklistComplete\n      });\n    }\n  }\n\n  componentWillReceiveProps(newProps) {\n    this.getWizardItem(newProps.itemToShow);\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n      className: this.props.className\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"h1\", {\n      className: \"ic-wizard-box__headline\"\n    }, I18n.t('Next Steps')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n      className: \"ic-wizard-box__message\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n      className: \"ic-wizard-box__message-layout\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n      ref: e => this.messageIcon = e,\n      className: \"ic-wizard-box__message-icon ic-wizard-box__message-icon--is-fired\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"i\", {\n      className: this.state.itemShown.iconClass\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n      ref: e => this.messageBox = e,\n      tabIndex: \"-1\",\n      className: \"ic-wizard-box__message-inner ic-wizard-box__message-inner--is-fired\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"p\", {\n      className: \"ic-wizard-box__message-text\",\n      id: \"ic-wizard-box__message-text\"\n    }, this.state.itemShown.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n      className: \"ic-wizard-box__message-button\"\n    }, this.renderButton())))));\n  }\n\n}\n\nInfoFrame.displayName = 'InfoFrame';\nInfoFrame.propTypes = {\n  closeModal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,\n  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (InfoFrame);\n\n//# sourceURL=webpack:///./ui/features/course_wizard/react/InfoFrame.js?");

/***/ }),

/***/ "KmTg":
/*!******************************************************!*\
  !*** ./ui/features/course_wizard/react/ListItems.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n */ \"HGxv\");\n/*\n * Copyright (C) 2014 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\nconst I18n = Object(_canvas_i18n__WEBPACK_IMPORTED_MODULE_0__[\"useScope\"])('course_wizard');\n/**\n * Returns an array containing all the possible items for the checklist\n * For many ListItems, the ! is added for the complete property\n *  because the ENV is checking if the step is nil? or empty?\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  key: 'content_import',\n\n  get complete() {\n    return !ENV.COURSE_WIZARD.checklist_states.import_step;\n  },\n\n  get title() {\n    return I18n.t('Import Content');\n  },\n\n  get text() {\n    return I18n.t(\"If you've been using another course management system, you probably have stuff in there that you're going to want moved over to Canvas. We can walk you through the process of easily migrating your content into Canvas.\");\n  },\n\n  get url() {\n    return ENV.COURSE_WIZARD.urls.content_import;\n  },\n\n  iconClass: 'icon-upload'\n}, {\n  key: 'add_assignments',\n\n  get complete() {\n    return !ENV.COURSE_WIZARD.checklist_states.assignment_step;\n  },\n\n  get title() {\n    return I18n.t('Add Course Assignments');\n  },\n\n  get text() {\n    return I18n.t('Add your assignments.  You can just make a long list, or break them up into groups - and even specify weights for each assignment group.');\n  },\n\n  get url() {\n    return ENV.COURSE_WIZARD.urls.add_assignments;\n  },\n\n  iconClass: 'icon-assignment'\n}, {\n  key: 'add_students',\n\n  get complete() {\n    return !ENV.COURSE_WIZARD.checklist_states.add_student_step;\n  },\n\n  get title() {\n    return I18n.t('Add Students to the Course');\n  },\n\n  get text() {\n    return I18n.t(\"You'll definitely want some of these.  What's the fun of teaching a course if nobody's even listening?\");\n  },\n\n  get url() {\n    return ENV.COURSE_WIZARD.urls.add_students;\n  },\n\n  iconClass: 'icon-group-new'\n}, {\n  key: 'add_files',\n\n  get complete() {\n    return !ENV.COURSE_WIZARD.checklist_states.import_step;\n  }\n  /* Super odd in the existing wizard this is set to display: none */\n  ,\n\n  get title() {\n    return I18n.t('Add Files to the Course');\n  },\n\n  get text() {\n    return I18n.t(\"The Files tab is the place to share lecture slides, example documents, study helps -- anything your students will want to download.  Uploading and organizing your files is easy with Canvas.  We'll show you how.\");\n  },\n\n  get url() {\n    return ENV.COURSE_WIZARD.urls.add_files;\n  },\n\n  iconClass: 'icon-note-light'\n}, {\n  key: 'select_navigation',\n\n  get complete() {\n    return !ENV.COURSE_WIZARD.checklist_states.navigation_step;\n  },\n\n  get title() {\n    return I18n.t('Select Navigation Links');\n  },\n\n  get text() {\n    return I18n.t(\"By default all links are enabled for a course.  Students won't see links to sections that don't have content.  For example, if you haven't created any quizzes, they won't see the quizzes link.  You can sort and explicitly disable these links if there are areas of the course you don't want your students accessing.\");\n  },\n\n  get url() {\n    return ENV.COURSE_WIZARD.urls.select_navigation;\n  },\n\n  iconClass: 'icon-hamburger'\n}, {\n  key: 'home_page',\n\n  get complete() {\n    return ENV.COURSE_WIZARD.checklist_states.home_page_step;\n  },\n\n  get title() {\n    return I18n.t('Choose a Course Home Page');\n  },\n\n  get text() {\n    return I18n.t(\"When people visit the course, this is the page they'll see.  You can set it to show an activity stream, the list of course modules, a syllabus, or a custom page you write yourself.  The default is the course activity stream.\");\n  },\n\n  iconClass: 'icon-home'\n}, {\n  key: 'course_calendar',\n\n  get complete() {\n    return !ENV.COURSE_WIZARD.checklist_states.calendar_event_step;\n  },\n\n  get title() {\n    return I18n.t('Add Course Calendar Events');\n  },\n\n  get text() {\n    return I18n.t(\"Here's a great chance to get to know the calendar and add any non-assignment events you might have to the course. Don't worry, we'll help you through it.\");\n  },\n\n  get url() {\n    return ENV.COURSE_WIZARD.urls.course_calendar;\n  },\n\n  iconClass: 'icon-calendar-month'\n}, {\n  key: 'add_tas',\n\n  get complete() {\n    return !ENV.COURSE_WIZARD.checklist_states.add_ta_step;\n  },\n\n  get title() {\n    return I18n.t('Add TAs to the Course');\n  },\n\n  get text() {\n    return I18n.t('You may want to assign some TAs to help you with the course.  TAs can grade student submissions, help moderate the discussions and even update due dates and assignment details for you.');\n  },\n\n  get url() {\n    return ENV.COURSE_WIZARD.urls.add_tas;\n  },\n\n  iconClass: 'icon-educators'\n}, {\n  key: 'publish_course',\n\n  get complete() {\n    return ENV.COURSE_WIZARD.checklist_states.publish_step;\n  },\n\n  get title() {\n    return I18n.t('Publish the Course');\n  },\n\n  get text() {\n    return I18n.t('All finished?  Time to publish your course!  Click the button below to make it official! Publishing will allow the users to begin participating in the course.');\n  },\n\n  get non_registered_text() {\n    return I18n.t(\"This course is claimed and ready, but you'll need to finish the registration process before you can publish the course.  You should have received an email from Canvas with a link to finish the process.  Be sure to check your spam box.\");\n  },\n\n  iconClass: 'icon-publish icon-Solid'\n}]);\n\n//# sourceURL=webpack:///./ui/features/course_wizard/react/ListItems.js?");

/***/ }),

/***/ "N18G":
/*!******************************************************!*\
  !*** ./ui/features/course_wizard/react/Checklist.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ChecklistItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChecklistItem */ \"ijRM\");\n/* harmony import */ var _ListItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListItems */ \"KmTg\");\n/* harmony import */ var _canvas_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @canvas/i18n */ \"HGxv\");\n/*\n * Copyright (C) 2014 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n\nconst I18n = Object(_canvas_i18n__WEBPACK_IMPORTED_MODULE_4__[\"useScope\"])('course_wizard');\n\nclass Checklist extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n    this.state = {\n      selectedItem: this.props.selectedItem || ''\n    };\n\n    this.renderChecklist = () => _ListItems__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(item => {\n      const isSelected = this.state.selectedItem === item.key;\n      const id = `wizard_${item.key}`;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChecklistItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        complete: item.complete,\n        id: id,\n        key: item.key,\n        stepKey: item.key,\n        title: item.title,\n        onClick: this.props.clickHandler,\n        isSelected: isSelected\n      });\n    });\n  }\n\n  componentWillReceiveProps(newProps) {\n    this.setState({\n      selectedItem: newProps.selectedItem\n    });\n  }\n\n  render() {\n    const checklist = this.renderChecklist();\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: this.props.className\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n      className: \"screenreader-only\"\n    }, I18n.t('Setup Checklist')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n      className: \"ic-wizard-box__nav-checklist\"\n    }, checklist));\n  }\n\n}\n\nChecklist.displayName = 'Checklist';\nChecklist.propTypes = {\n  selectedItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  clickHandler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Checklist);\n\n//# sourceURL=webpack:///./ui/features/course_wizard/react/Checklist.js?");

/***/ }),

/***/ "ijRM":
/*!**********************************************************!*\
  !*** ./ui/features/course_wizard/react/ChecklistItem.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _canvas_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @canvas/i18n */ \"HGxv\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"TSYQ\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/*\n * Copyright (C) 2014 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\nconst I18n = Object(_canvas_i18n__WEBPACK_IMPORTED_MODULE_2__[\"useScope\"])('course_wizard');\n\nclass ChecklistItem extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n    this.state = {\n      classNameString: ''\n    };\n    this.classNameString = '';\n\n    this.handleClick = event => {\n      event.preventDefault();\n      this.props.onClick(this.props.stepKey);\n    };\n\n    this.setClassName = props => {\n      this.setState({\n        classNameString: classnames__WEBPACK_IMPORTED_MODULE_3___default()({\n          'ic-wizard-box__content-trigger': true,\n          'ic-wizard-box__content-trigger--checked': props.complete,\n          'ic-wizard-box__content-trigger--active': props.isSelected\n        })\n      });\n    };\n  }\n\n  componentWillMount() {\n    this.setClassName(this.props);\n  }\n\n  componentWillReceiveProps(nextProps) {\n    this.setClassName(nextProps);\n  }\n\n  render() {\n    const completionMessage = this.props.complete ? I18n.t('(Item Complete)') : I18n.t('(Item Incomplete)');\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: \"#\",\n      id: this.props.id,\n      className: this.state.classNameString,\n      onClick: this.handleClick,\n      \"aria-label\": `Select task: ${this.props.title}`\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, this.props.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"screenreader-only\"\n    }, completionMessage))));\n  }\n\n}\n\nChecklistItem.displayName = 'ChecklistItem';\nChecklistItem.propTypes = {\n  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  stepKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  complete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,\n  isSelected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,\n  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChecklistItem);\n\n//# sourceURL=webpack:///./ui/features/course_wizard/react/ChecklistItem.js?");

/***/ }),

/***/ "x9/Y":
/*!*********************************************************!*\
  !*** ./ui/features/course_wizard/react/CourseWizard.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CourseWizard; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _canvas_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @canvas/i18n */ \"HGxv\");\n/* harmony import */ var _instructure_ui_overlays__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @instructure/ui-overlays */ \"vWls\");\n/* harmony import */ var _InfoFrame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InfoFrame */ \"3Mpb\");\n/* harmony import */ var _Checklist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Checklist */ \"N18G\");\n/* harmony import */ var _canvas_rails_flash_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @canvas/rails-flash-notifications */ \"r2Yr\");\n/*\n * Copyright (C) 2014 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n\n\n\n\nconst I18n = Object(_canvas_i18n__WEBPACK_IMPORTED_MODULE_3__[\"useScope\"])('course_wizard');\nfunction CourseWizard({\n  onHideWizard\n}) {\n  const [selectedItem, setSelectedItem] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const closeLink = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_instructure_ui_overlays__WEBPACK_IMPORTED_MODULE_4__[\"Overlay\"], {\n    onOpen: () => {\n      closeLink.current.focus();\n      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.screenReaderFlashMessageExclusive(I18n.t('Course Setup Wizard is showing.'));\n    },\n    open: true,\n    onDismiss: onHideWizard,\n    label: I18n.t('Course Wizard'),\n    shouldContainFocus: true,\n    shouldReturnFocus: true,\n    unmountOnExit: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_instructure_ui_overlays__WEBPACK_IMPORTED_MODULE_4__[\"Mask\"], {\n    theme: {\n      background: 'transparent'\n    },\n    fullscreen: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"main\", {\n    role: \"main\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"ic-wizard-box\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"ic-wizard-box__header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n    href: \"/\",\n    className: \"ic-wizard-box__logo-link\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n    className: \"screenreader-only\"\n  }, I18n.t('My dashboard'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Checklist__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: \"ic-wizard-box__nav\",\n    selectedItem: selectedItem,\n    clickHandler: setSelectedItem\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"ic-wizard-box__main\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"ic-wizard-box__close\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"ic-Expand-link ic-Expand-link--from-right\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    type: \"button\",\n    className: \"ic-Expand-link__trigger\",\n    onClick: onHideWizard,\n    ref: closeLink\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"ic-Expand-link__layout\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"i\", {\n    className: \"icon-x ic-Expand-link__icon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n    className: \"ic-Expand-link__text\"\n  }, I18n.t('Close and return to Canvas')))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_InfoFrame__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: \"ic-wizard-box__content\",\n    itemToShow: selectedItem,\n    closeModal: onHideWizard\n  }))))));\n}\nCourseWizard.propTypes = {\n  onHideWizard: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired\n};\n\n//# sourceURL=webpack:///./ui/features/course_wizard/react/CourseWizard.js?");

/***/ })

}]);