"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _formatMessage = _interopRequireDefault(require("format-message"));

var _uiButtons = require("@instructure/ui-buttons");

var _uiFlex = require("@instructure/ui-flex");

var _uiIcons = require("@instructure/ui-icons");

var _uiA11yContent = require("@instructure/ui-a11y-content");

var _uiText = require("@instructure/ui-text");

var _uiView = require("@instructure/ui-view");

var _CanvasSelect = _interopRequireDefault(require("../shared/CanvasSelect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Copyright (C) 2019 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */
class ClosedCaptionCreatorRow extends _react.Component {
  static propTypes = {
    languages: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
      id: _propTypes.string,
      label: _propTypes.string
    })),
    liveRegion: _propTypes.func,
    uploadMediaTranslations: (0, _propTypes.shape)({
      UploadMediaStrings: (0, _propTypes.objectOf)(_propTypes.string),
      SelectStrings: (0, _propTypes.objectOf)(_propTypes.string)
    }),
    onDeleteRow: _propTypes.func,
    onFileSelected: _propTypes.func,
    onLanguageSelected: _propTypes.func,
    selectedFile: (0, _propTypes.shape)({
      name: _propTypes.string.isRequired
    }),
    // there's more, but his is all I care about
    selectedLanguage: (0, _propTypes.shape)({
      id: _propTypes.string.isRequired,
      label: _propTypes.string.isRequired
    })
  };
  _langSelectRef = /*#__PURE__*/_react.default.createRef();
  _deleteCCBtnRef = /*#__PURE__*/_react.default.createRef();
  handleLanguageChange = (event, selectedLang) => {
    this.props.onLanguageSelected(this.props.languages.find(l => l.id === selectedLang));
  };
  handleDeleteRow = _e => {
    this.props.onDeleteRow(this.props.selectedLanguage.id);
  };

  get isReadonly() {
    return this.props.selectedFile && this.props.selectedLanguage;
  }

  focus() {
    if (this._langSelectRef.current) {
      this._langSelectRef.current.focus();
    } else if (this._deleteCCBtnRef.current) {
      this._deleteCCBtnRef.current.focus();
    }
  }

  renderChoosing() {
    return /*#__PURE__*/_react.default.createElement(_uiFlex.Flex, {
      as: "div",
      wrap: "wrap",
      justifyItems: "start",
      alignItems: "end",
      "data-testid": "CC-CreatorRow-choosing"
    }, this.renderSelectLanguage(), this.renderChooseFile());
  }

  renderSelectLanguage() {
    var _this$props$selectedL;

    const {
      CLOSED_CAPTIONS_SELECT_LANGUAGE
    } = this.props.uploadMediaTranslations.UploadMediaStrings;
    return /*#__PURE__*/_react.default.createElement(_uiFlex.Flex.Item, {
      margin: "0 small small 0"
    }, /*#__PURE__*/_react.default.createElement(_CanvasSelect.default, {
      ref: this._langSelectRef,
      value: (_this$props$selectedL = this.props.selectedLanguage) === null || _this$props$selectedL === void 0 ? void 0 : _this$props$selectedL.id,
      label: /*#__PURE__*/_react.default.createElement(_uiA11yContent.ScreenReaderContent, null, CLOSED_CAPTIONS_SELECT_LANGUAGE),
      liveRegion: this.props.liveRegion,
      onChange: this.handleLanguageChange,
      placeholder: CLOSED_CAPTIONS_SELECT_LANGUAGE,
      translatedStrings: this.props.uploadMediaTranslations.SelectStrings
    }, this.props.languages.map(o => {
      return /*#__PURE__*/_react.default.createElement(_CanvasSelect.default.Option, {
        key: o.id,
        id: o.id,
        value: o.id
      }, o.label);
    })));
  }

  renderChooseFile() {
    const {
      NO_FILE_CHOSEN,
      SUPPORTED_FILE_TYPES,
      CLOSED_CAPTIONS_CHOOSE_FILE
    } = this.props.uploadMediaTranslations.UploadMediaStrings;
    return /*#__PURE__*/_react.default.createElement(_uiFlex.Flex.Item, {
      margin: "0 small small 0"
    }, /*#__PURE__*/_react.default.createElement("input", {
      id: "attachmentFile",
      accept: ".vtt, .srt",
      ref: element => {
        this.fileInput = element;
      },
      onChange: e => {
        this.props.onFileSelected(e.target.files[0]);
      },
      style: {
        display: 'none'
      },
      type: "file"
    }), /*#__PURE__*/_react.default.createElement(_uiView.View, {
      as: "div"
    }, /*#__PURE__*/_react.default.createElement(_uiText.Text, {
      as: "div"
    }, SUPPORTED_FILE_TYPES), /*#__PURE__*/_react.default.createElement(_uiButtons.Button, {
      margin: "xx-small 0 0 0",
      id: "attachmentFileButton",
      onClick: () => {
        this.fileInput.click();
      },
      ref: element => {
        this.attachmentFileButton = element;
      }
    }, this.props.selectedFile ? this.props.selectedFile.name : CLOSED_CAPTIONS_CHOOSE_FILE), !this.props.selectedFile && /*#__PURE__*/_react.default.createElement(_uiView.View, {
      display: "inline-block",
      margin: "0 0 0 small"
    }, /*#__PURE__*/_react.default.createElement(_uiText.Text, {
      color: "secondary"
    }, NO_FILE_CHOSEN))));
  }

  renderChosen() {
    const {
      REMOVE_FILE
    } = this.props.uploadMediaTranslations.UploadMediaStrings;
    return /*#__PURE__*/_react.default.createElement(_uiFlex.Flex, {
      as: "div",
      wrap: "wrap",
      justifyItems: "start",
      alignItems: "end",
      "data-testid": "CC-CreatorRow-chosen"
    }, /*#__PURE__*/_react.default.createElement(_uiFlex.Flex.Item, {
      margin: "0 0 small 0"
    }, /*#__PURE__*/_react.default.createElement(_uiView.View, {
      as: "div",
      borderWidth: "small",
      padding: "0 0 0 small",
      borderRadius: "medium",
      width: "100%"
    }, /*#__PURE__*/_react.default.createElement(_uiFlex.Flex, {
      justifyItems: "space-between"
    }, /*#__PURE__*/_react.default.createElement(_uiFlex.Flex.Item, null, /*#__PURE__*/_react.default.createElement(_uiText.Text, {
      weight: "bold"
    }, this.props.selectedLanguage.label)), /*#__PURE__*/_react.default.createElement(_uiFlex.Flex.Item, {
      margin: "0 0 0 x-small"
    }, /*#__PURE__*/_react.default.createElement(_uiButtons.IconButton, {
      ref: this._deleteCCBtnRef,
      withBackground: false,
      withBorder: false,
      onClick: this.handleDeleteRow,
      screenReaderLabel: (0, _formatMessage.default)(REMOVE_FILE, {
        lang: this.props.selectedLanguage.label
      })
    }, /*#__PURE__*/_react.default.createElement(_uiIcons.IconTrashLine, null)))))));
  }

  render() {
    return this.isReadonly ? this.renderChosen() : this.renderChoosing();
  }

}

exports.default = ClosedCaptionCreatorRow;