(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[3794],{

/***/ "4Yst":
/*!***********************************************************************!*\
  !*** ./packages/canvas-planner/es/components/ToDoSidebar/ToDoItem.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ToDoItem; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _instructure_ui_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @instructure/ui-buttons */ \"K6WN\");\n/* harmony import */ var _instructure_ui_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @instructure/ui-text */ \"iE3e\");\n/* harmony import */ var _instructure_ui_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @instructure/ui-list */ \"dbzd\");\n/* harmony import */ var _instructure_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @instructure/ui-icons */ \"oMAr\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utilities_dateUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/dateUtils */ \"q7ZJ\");\n/* harmony import */ var _format_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../format-message */ \"ukBn\");\n/*\n * Copyright (C) 2017 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n\n\n\n\n\nconst getIconComponent = itemType => {\n  switch (itemType) {\n    case 'Assignment':\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"IconAssignmentLine\"], {\n        label: Object(_format_message__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('Assignment'),\n        className: \"ToDoSidebarItem__Icon\"\n      });\n\n    case 'Quiz':\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"IconQuizLine\"], {\n        label: Object(_format_message__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('Quiz'),\n        className: \"ToDoSidebarItem__Icon\"\n      });\n\n    case 'Discussion':\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"IconDiscussionLine\"], {\n        label: Object(_format_message__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('Discussion'),\n        className: \"ToDoSidebarItem__Icon\"\n      });\n\n    case 'Announcement':\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"IconAnnouncementLine\"], {\n        label: Object(_format_message__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('Announcement'),\n        className: \"ToDoSidebarItem__Icon\"\n      });\n\n    case 'Calendar Event':\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"IconCalendarMonthLine\"], {\n        label: Object(_format_message__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('Calendar Event'),\n        className: \"ToDoSidebarItem__Icon\"\n      });\n\n    case 'Page':\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"IconDocumentLine\"], {\n        label: Object(_format_message__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('Page'),\n        className: \"ToDoSidebarItem__Icon\"\n      });\n\n    case 'Peer Review':\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"IconPeerReviewLine\"], {\n        label: Object(_format_message__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('Peer Review'),\n        className: \"ToDoSidebarItem__Icon\"\n      });\n\n    default:\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"IconNoteLine\"], {\n        label: Object(_format_message__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('To Do'),\n        className: \"ToDoSidebarItem__Icon\"\n      });\n  }\n};\n\nconst getContextShortName = (courses, courseId) => {\n  const course = courses.find(x => x.id === courseId);\n  return course ? course.shortName : '';\n};\n\nclass ToDoItem extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    this.handleClick = () => {\n      this.props.handleDismissClick(this.props.item);\n    };\n\n    this.getInformationRow = (dueAt, points) => {\n      const toDisplay = [];\n\n      if (points) {\n        toDisplay.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_list__WEBPACK_IMPORTED_MODULE_3__[\"List\"].Item, {\n          key: \"points\"\n        }, Object(_format_message__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('{numPoints} points', {\n          numPoints: points\n        })));\n      }\n\n      toDisplay.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_list__WEBPACK_IMPORTED_MODULE_3__[\"List\"].Item, {\n        key: \"date\"\n      }, Object(_utilities_dateUtils__WEBPACK_IMPORTED_MODULE_6__[\"dateTimeString\"])(dueAt, this.props.timeZone)));\n      return toDisplay;\n    };\n  }\n\n  focus() {\n    const focusable = this.linkRef || this.buttonRef;\n    if (focusable) focusable.focus();\n  }\n\n  itemTitle() {\n    if (this.props.item.type === 'Peer Review') {\n      return Object(_format_message__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('Peer Review for {itemTitle}', {\n        itemTitle: this.props.item.title\n      });\n    }\n\n    return this.props.item.title;\n  }\n\n  render() {\n    const title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_text__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n      size: \"small\",\n      lineHeight: \"fit\"\n    }, this.itemTitle());\n    const titleComponent = this.props.item.html_url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_buttons__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      variant: \"link\",\n      theme: {\n        mediumPaddingHorizontal: '0',\n        mediumHeight: 'normal'\n      },\n      buttonRef: elt => {\n        this.linkRef = elt;\n      },\n      href: this.props.item.html_url\n    }, title) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_text__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], null, title);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"ToDoSidebarItem\"\n    }, getIconComponent(this.props.item.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"ToDoSidebarItem__Info\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"ToDoSidebarItem__Title\"\n    }, titleComponent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_text__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n      color: \"secondary\",\n      size: \"small\",\n      weight: \"bold\",\n      lineHeight: \"fit\"\n    }, getContextShortName(this.props.courses, this.props.item.course_id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_list__WEBPACK_IMPORTED_MODULE_3__[\"List\"], {\n      variant: \"inline\",\n      delimiter: \"pipe\",\n      size: \"small\"\n    }, this.getInformationRow(this.props.item.date, this.props.item.points))), !this.props.isObserving && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"ToDoSidebarItem__Close\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_buttons__WEBPACK_IMPORTED_MODULE_1__[\"CloseButton\"], {\n      variant: \"icon\",\n      size: \"small\",\n      onClick: this.handleClick,\n      buttonRef: elt => {\n        this.buttonRef = elt;\n      }\n    }, Object(_format_message__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('Dismiss {itemTitle}', {\n      itemTitle: this.props.item.title\n    }))));\n  }\n\n}\nToDoItem.propTypes = {\n  item: Object(prop_types__WEBPACK_IMPORTED_MODULE_5__[\"shape\"])({\n    title: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"string\"],\n    html_url: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"string\"],\n    type: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"string\"],\n    course_id: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"string\"],\n    date: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"object\"],\n    // moment\n    points: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"number\"]\n  }),\n  courses: Object(prop_types__WEBPACK_IMPORTED_MODULE_5__[\"arrayOf\"])(prop_types__WEBPACK_IMPORTED_MODULE_5__[\"object\"]).isRequired,\n  handleDismissClick: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"func\"].isRequired,\n  timeZone: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"string\"],\n  isObserving: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"bool\"]\n};\n\n//# sourceURL=webpack:///./packages/canvas-planner/es/components/ToDoSidebar/ToDoItem.js?");

/***/ }),

/***/ "kfGi":
/*!********************************************************************!*\
  !*** ./packages/canvas-planner/es/components/ToDoSidebar/index.js ***!
  \********************************************************************/
/*! exports provided: ToDoSidebar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToDoSidebar\", function() { return ToDoSidebar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"/MKj\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment-timezone */ \"f0Wu\");\n/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _instructure_ui_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @instructure/ui-list */ \"dbzd\");\n/* harmony import */ var _instructure_ui_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @instructure/ui-text */ \"iE3e\");\n/* harmony import */ var _instructure_ui_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @instructure/ui-spinner */ \"cPO5\");\n/* harmony import */ var _instructure_ui_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @instructure/ui-view */ \"OkHH\");\n/* harmony import */ var _instructure_ui_buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @instructure/ui-buttons */ \"K6WN\");\n/* harmony import */ var _instructure_ui_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @instructure/ui-icons */ \"oMAr\");\n/* harmony import */ var _instructure_ui_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @instructure/ui-flex */ \"N46v\");\n/* harmony import */ var _format_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../format-message */ \"ukBn\");\n/* harmony import */ var _utilities_apiUtils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utilities/apiUtils */ \"R49/\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../actions */ \"mgUk\");\n/* harmony import */ var _ToDoItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ToDoItem */ \"4Yst\");\n/*\n * Copyright (C) 2017 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass ToDoSidebar extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.dismissedItemIndex = null;\n    this.titleFocus = null;\n    this.state = {\n      visibleToDos: this.getVisibleItems(props.items)\n    };\n  }\n\n  componentDidMount() {\n    this.props.sidebarLoadInitialItems(moment_timezone__WEBPACK_IMPORTED_MODULE_3___default.a.tz(this.props.timeZone).startOf('day'), this.props.forCourse);\n  }\n\n  UNSAFE_componentWillReceiveProps(nextProps) {\n    const visibleToDos = this.getVisibleItems(nextProps.items);\n    this.setState({\n      visibleToDos\n    });\n  }\n\n  componentDidUpdate() {\n    if (this.dismissedItemIndex != null) {\n      const previousIndex = this.dismissedItemIndex - 1;\n      this.dismissedItemIndex = null;\n\n      if (previousIndex >= 0) {\n        this.todoItemComponents[previousIndex].focus();\n      } else {\n        this.titleFocus.focus();\n      }\n    }\n  }\n\n  getVisibleItems(items) {\n    const incompletedFilter = item => {\n      if (!item) return false;\n      return !item.completed;\n    };\n\n    return items.filter(incompletedFilter).slice(0, 7);\n  }\n\n  handleDismissClick(itemIndex, item) {\n    this.dismissedItemIndex = itemIndex;\n    this.props.sidebarCompleteItem(item).catch(() => {\n      this.dismissedItemIndex = null;\n    });\n  }\n\n  renderShowAll() {\n    if (this.props.changeDashboardView && this.state.visibleToDos.length > 0) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_view__WEBPACK_IMPORTED_MODULE_7__[\"View\"], {\n        as: \"div\",\n        textAlign: \"center\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_buttons__WEBPACK_IMPORTED_MODULE_8__[\"Button\"], {\n        variant: \"link\",\n        onClick: () => this.props.changeDashboardView('planner')\n      }, Object(_format_message__WEBPACK_IMPORTED_MODULE_11__[\"default\"])('Show All')));\n    }\n\n    return null;\n  }\n\n  renderItems() {\n    this.todoItemComponents = [];\n\n    if (this.state.visibleToDos.length === 0) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_text__WEBPACK_IMPORTED_MODULE_5__[\"Text\"], {\n        size: \"small\"\n      }, Object(_format_message__WEBPACK_IMPORTED_MODULE_11__[\"default\"])('Nothing for now'));\n    }\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_list__WEBPACK_IMPORTED_MODULE_4__[\"List\"], {\n      id: \"planner-todosidebar-item-list\",\n      variant: \"unstyled\"\n    }, this.state.visibleToDos.map((item, itemIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_list__WEBPACK_IMPORTED_MODULE_4__[\"List\"].Item, {\n      key: item.uniqueId\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToDoItem__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n      ref: component => {\n        this.todoItemComponents[itemIndex] = component;\n      },\n      item: item,\n      courses: this.props.courses,\n      handleDismissClick: () => this.handleDismissClick(itemIndex, item),\n      locale: this.props.locale,\n      timeZone: this.props.timeZone,\n      isObserving: this.props.isObserving\n    }))));\n  }\n\n  render() {\n    if (!this.props.loaded && !this.props.loadingError) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        \"data-testid\": \"ToDoSidebar\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n        className: \"todo-list-header\"\n      }, Object(_format_message__WEBPACK_IMPORTED_MODULE_11__[\"default\"])('To Do')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_view__WEBPACK_IMPORTED_MODULE_7__[\"View\"], {\n        as: \"div\",\n        textAlign: \"center\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_spinner__WEBPACK_IMPORTED_MODULE_6__[\"Spinner\"], {\n        renderTitle: () => Object(_format_message__WEBPACK_IMPORTED_MODULE_11__[\"default\"])('To Do Items Loading'),\n        size: \"small\"\n      })));\n    }\n\n    if (this.props.loadingError) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        \"data-testid\": \"ToDoSidebar\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n        className: \"todo-list-header\"\n      }, Object(_format_message__WEBPACK_IMPORTED_MODULE_11__[\"default\"])('To Do')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_flex__WEBPACK_IMPORTED_MODULE_10__[\"Flex\"], {\n        justifyItems: \"start\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_flex__WEBPACK_IMPORTED_MODULE_10__[\"Flex\"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_icons__WEBPACK_IMPORTED_MODULE_9__[\"IconWarningLine\"], {\n        color: \"error\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_flex__WEBPACK_IMPORTED_MODULE_10__[\"Flex\"].Item, {\n        margin: \"xx-small none none xx-small\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_text__WEBPACK_IMPORTED_MODULE_5__[\"Text\"], {\n        color: \"danger\"\n      }, Object(_format_message__WEBPACK_IMPORTED_MODULE_11__[\"default\"])('Failure loading the To Do list')))));\n    }\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      \"data-testid\": \"ToDoSidebar\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n      className: \"todo-list-header\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      tabIndex: \"-1\",\n      ref: elt => {\n        this.titleFocus = elt;\n      }\n    }, Object(_format_message__WEBPACK_IMPORTED_MODULE_11__[\"default\"])('To Do'))), this.renderItems(), this.renderShowAll());\n  }\n\n}\nToDoSidebar.propTypes = {\n  sidebarLoadInitialItems: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"func\"].isRequired,\n  sidebarCompleteItem: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"func\"].isRequired,\n  items: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__[\"arrayOf\"])(prop_types__WEBPACK_IMPORTED_MODULE_2__[\"object\"]).isRequired,\n  loaded: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"bool\"],\n  courses: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__[\"arrayOf\"])(prop_types__WEBPACK_IMPORTED_MODULE_2__[\"object\"]).isRequired,\n  timeZone: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"string\"],\n  locale: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"string\"],\n  changeDashboardView: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"func\"],\n  forCourse: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"string\"],\n  isObserving: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"bool\"],\n  loadingError: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"string\"]\n};\nToDoSidebar.defaultProps = {\n  loaded: false,\n  timeZone: moment_timezone__WEBPACK_IMPORTED_MODULE_3___default.a.tz.guess(),\n  locale: 'en',\n  forCourse: undefined\n};\n\nconst mapStateToProps = state => ({\n  courses: state.courses,\n  items: state.sidebar.items,\n  loaded: state.sidebar.loaded,\n  isObserving: !!Object(_utilities_apiUtils__WEBPACK_IMPORTED_MODULE_12__[\"observedUserId\"])(state),\n  loadingError: state.sidebar.loadingError\n});\n\nconst mapDispatchToProps = {\n  sidebarLoadInitialItems: _actions__WEBPACK_IMPORTED_MODULE_13__[\"sidebarLoadInitialItems\"],\n  sidebarCompleteItem: _actions__WEBPACK_IMPORTED_MODULE_13__[\"sidebarCompleteItem\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(ToDoSidebar));\n\n//# sourceURL=webpack:///./packages/canvas-planner/es/components/ToDoSidebar/index.js?");

/***/ })

}]);