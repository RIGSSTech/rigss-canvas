(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[3828],{

/***/ "dIE/":
/*!****************************************************************************!*\
  !*** ./ui/features/assignments_show_student/react/components/RubricTab.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RubricTab; });\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _canvas_instui_bindings_react_Select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @canvas/instui-bindings/react/Select */ \"WROG\");\n/* harmony import */ var _canvas_rubrics_react_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @canvas/rubrics/react/helpers */ \"aLXX\");\n/* harmony import */ var _canvas_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @canvas/i18n */ \"HGxv\");\n/* harmony import */ var _canvas_assignments_graphql_student_ProficiencyRating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @canvas/assignments/graphql/student/ProficiencyRating */ \"cYdA\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _canvas_assignments_graphql_student_Rubric__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @canvas/assignments/graphql/student/Rubric */ \"EXQS\");\n/* harmony import */ var _canvas_assignments_graphql_student_RubricAssessment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @canvas/assignments/graphql/student/RubricAssessment */ \"z3ng\");\n/* harmony import */ var _canvas_assignments_graphql_student_RubricAssociation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @canvas/assignments/graphql/student/RubricAssociation */ \"FcR3\");\n/* harmony import */ var _canvas_rubrics_react_Rubric__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @canvas/rubrics/react/Rubric */ \"kv/t\");\n/* harmony import */ var _instructure_ui_text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @instructure/ui-text */ \"iE3e\");\n/* harmony import */ var _instructure_ui_toggle_details__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @instructure/ui-toggle-details */ \"Bcfm\");\n/* harmony import */ var _instructure_ui_view__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @instructure/ui-view */ \"OkHH\");\n/*\n * Copyright (C) 2019 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst I18n = Object(_canvas_i18n__WEBPACK_IMPORTED_MODULE_3__[\"useScope\"])('assignments_2');\nconst ENROLLMENT_STRINGS = {\n  StudentEnrollment: I18n.t('Student'),\n  TeacherEnrollment: I18n.t('Teacher'),\n  TaEnrollment: I18n.t('TA')\n};\n\nfunction formatAssessor(assessor) {\n  var _assessor$enrollments, _assessor$enrollments2;\n\n  if (!(assessor !== null && assessor !== void 0 && assessor.name)) {\n    return I18n.t('Anonymous');\n  }\n\n  const enrollment = ENROLLMENT_STRINGS[(_assessor$enrollments = assessor.enrollments) === null || _assessor$enrollments === void 0 ? void 0 : (_assessor$enrollments2 = _assessor$enrollments[0]) === null || _assessor$enrollments2 === void 0 ? void 0 : _assessor$enrollments2.type];\n  return enrollment ? `${assessor.name} (${enrollment})` : assessor.name;\n}\n\nfunction RubricTab(props) {\n  var _props$assessments, _props$assessments$, _props$assessments2, _props$assessments3;\n\n  const [displayedAssessmentId, setDisplayedAssessmentId] = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])((_props$assessments = props.assessments) === null || _props$assessments === void 0 ? void 0 : (_props$assessments$ = _props$assessments[0]) === null || _props$assessments$ === void 0 ? void 0 : _props$assessments$._id); // This will always be undefined if there are no assessments, or the displayed\n  // assessments if any assessments are present\n\n  const displayedAssessment = (_props$assessments2 = props.assessments) === null || _props$assessments2 === void 0 ? void 0 : _props$assessments2.find(assessment => assessment._id === displayedAssessmentId);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n    \"data-testid\": \"rubric-tab\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_instructure_ui_view__WEBPACK_IMPORTED_MODULE_12__[\"View\"], {\n    as: \"div\",\n    margin: \"none none medium\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_instructure_ui_toggle_details__WEBPACK_IMPORTED_MODULE_11__[\"ToggleDetails\"], {\n    defaultExpanded: true,\n    fluidWidth: true,\n    summary: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_instructure_ui_text__WEBPACK_IMPORTED_MODULE_10__[\"Text\"], {\n      weight: \"bold\"\n    }, I18n.t('View Rubric'))\n  }, !!((_props$assessments3 = props.assessments) !== null && _props$assessments3 !== void 0 && _props$assessments3.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n    style: {\n      marginBottom: '22px',\n      width: '325px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_canvas_instui_bindings_react_Select__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    label: I18n.t('Select Grader'),\n    value: displayedAssessment._id,\n    onChange: (e, optionValue) => setDisplayedAssessmentId(optionValue)\n  }, props.assessments.map(assessment => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_canvas_instui_bindings_react_Select__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Option, {\n    key: assessment._id,\n    value: assessment._id,\n    id: assessment._id\n  }, formatAssessor(assessment.assessor))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_canvas_rubrics_react_Rubric__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    customRatings: props.proficiencyRatings,\n    rubric: props.rubric,\n    rubricAssessment: Object(_canvas_rubrics_react_helpers__WEBPACK_IMPORTED_MODULE_2__[\"fillAssessment\"])(props.rubric, displayedAssessment || {}),\n    rubricAssociation: props.rubricAssociation\n  }))));\n}\nRubricTab.propTypes = {\n  assessments: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__[\"arrayOf\"])(_canvas_assignments_graphql_student_RubricAssessment__WEBPACK_IMPORTED_MODULE_7__[\"RubricAssessment\"].shape),\n  proficiencyRatings: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__[\"arrayOf\"])(_canvas_assignments_graphql_student_ProficiencyRating__WEBPACK_IMPORTED_MODULE_4__[\"ProficiencyRating\"].shape),\n  rubric: _canvas_assignments_graphql_student_Rubric__WEBPACK_IMPORTED_MODULE_6__[\"Rubric\"].shape,\n  rubricAssociation: _canvas_assignments_graphql_student_RubricAssociation__WEBPACK_IMPORTED_MODULE_8__[\"RubricAssociation\"].shape\n};\n\n//# sourceURL=webpack:///./ui/features/assignments_show_student/react/components/RubricTab.js?");

/***/ })

}]);