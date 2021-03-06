"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _formatMessage = _interopRequireDefault(require("format-message"));

var _uiAlerts = require("@instructure/ui-alerts");

var _uiButtons = require("@instructure/ui-buttons");

var _uiIcons = require("@instructure/ui-icons");

var _uiView = require("@instructure/ui-view");

var _ClosedCaptionCreatorRow = _interopRequireDefault(require("./ClosedCaptionCreatorRow"));

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
// TODO:
//   - Limit file creation
class ClosedCaptionPanel extends _react.Component {
  static propTypes = {
    liveRegion: _propTypes.func.isRequired,
    subtitles: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
      locale: _propTypes.string.isRequired,
      file: (0, _propTypes.shape)({
        name: _propTypes.string.isRequired
      }).isRequired
    })),
    updateSubtitles: _propTypes.func.isRequired,
    uploadMediaTranslations: (0, _propTypes.shape)({
      UploadMediaStrings: (0, _propTypes.objectOf)(_propTypes.string),
      SelectStrings: (0, _propTypes.objectOf)(_propTypes.string)
    }).isRequired,
    languages: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
      id: _propTypes.string,
      language: _propTypes.string
    })).isRequired
  };

  constructor(props) {
    var _props$subtitles;

    super(props);
    this.state = {
      addingNewClosedCaption: !(props !== null && props !== void 0 && (_props$subtitles = props.subtitles) !== null && _props$subtitles !== void 0 && _props$subtitles.length),
      // if there are none, show the + button
      newSelectedFile: null,
      newSelectedLanguage: null,
      lastDeletedCCIndex: -1,
      subtitles: props.subtitles || [],
      announcement: null
    };
    this._addButtonRef = /*#__PURE__*/_react.default.createRef();
    this._newCreatorRef = /*#__PURE__*/_react.default.createRef();
    this._nextCCRef = /*#__PURE__*/_react.default.createRef();
  }

  componentDidUpdate() {
    if (document.activeElement === document.body) {
      // where focus goes when it's lost
      if (this._newCreatorRef.current) {
        this._newCreatorRef.current.focus();
      } else if (this._nextCCRef.current) {
        this._nextCCRef.current.focus();
      } else {
        var _this$_addButtonRef$c;

        (_this$_addButtonRef$c = this._addButtonRef.current) === null || _this$_addButtonRef$c === void 0 ? void 0 : _this$_addButtonRef$c.focus();
      } // setState in componentDidUpdate is generally bad form,
      // but in this case it makes sense to clear lastDeletedCCIndex
      // here in the place where it's just been used to help direct focus.
      // eslint-disable-next-line react/no-did-update-set-state


      this.setState(state => {
        if (state.lastDeletedCCIndex !== -1) {
          return {
            lastDeletedCCIndex: -1
          };
        }

        return null;
      });
    }
  }

  newButtonClick = () => {
    this.setState({
      addingNewClosedCaption: true,
      newSelectedFile: null,
      newSelectedLanguage: null,
      announcement: null
    });
  };
  onFileSelected = newFile => {
    if (this.state.newSelectedLanguage && newFile) {
      this.setState(prevState => {
        const subtitles = prevState.subtitles.concat([{
          locale: prevState.newSelectedLanguage.id,
          file: newFile,
          isNew: true
        }]);
        this.props.updateSubtitles(subtitles);
        return {
          subtitles,
          addingNewClosedCaption: false,
          newSelectedFile: null,
          newSelectedLanguage: null,
          announcement: (0, _formatMessage.default)(this.props.uploadMediaTranslations.UploadMediaStrings.ADDED_CAPTION, {
            lang: prevState.newSelectedLanguage.label
          })
        };
      });
    } else {
      this.setState({
        newSelectedFile: newFile,
        announcement: null
      });
    }
  };
  onLanguageSelected = lang => {
    if (this.state.newSelectedFile) {
      this.setState(prevState => {
        const subtitles = prevState.subtitles.concat([{
          locale: lang.id,
          file: prevState.newSelectedFile,
          isNew: true
        }]);
        this.props.updateSubtitles(subtitles);
        return {
          subtitles,
          addingNewClosedCaption: false,
          newSelectedFile: null,
          newSelectedLanguage: null,
          announcement: (0, _formatMessage.default)(this.props.uploadMediaTranslations.UploadMediaStrings.ADDED_CAPTION, {
            lang: lang.label
          })
        };
      });
    } else {
      this.setState({
        newSelectedLanguage: lang,
        announcement: null
      });
    }
  };
  onRowDelete = locale => {
    this.setState(prevState => {
      const deletedLang = this.props.languages.findIndex(l => l.id === locale);
      const deletedCCIndex = prevState.subtitles.findIndex(s => s.locale === locale);
      const subtitles = prevState.subtitles.filter(s => s.locale !== locale);
      this.props.updateSubtitles(subtitles);
      return {
        subtitles,
        addingNewClosedCaption: subtitles.length > 0 ? prevState.addingNewClosedCaption : true,
        announcement: (0, _formatMessage.default)(this.props.uploadMediaTranslations.UploadMediaStrings.DELETED_CAPTION, {
          lang: deletedLang === null || deletedLang === void 0 ? void 0 : deletedLang.label
        }),
        lastDeletedCCIndex: deletedCCIndex
      };
    });
  };

  render() {
    const {
      ADD_NEW_CAPTION_OR_SUBTITLE
    } = this.props.uploadMediaTranslations.UploadMediaStrings;
    return /*#__PURE__*/_react.default.createElement(_uiView.View, {
      display: "inline-block",
      "data-testid": "ClosedCaptionPanel"
    }, this.state.announcement && /*#__PURE__*/_react.default.createElement(_uiAlerts.Alert, {
      liveRegion: this.props.liveRegion,
      screenReaderOnly: true,
      isLiveRegionAtomic: true,
      liveRegionPoliteness: "assertive"
    }, this.state.announcement), /*#__PURE__*/_react.default.createElement(_uiView.View, {
      display: "inline-block"
    }, this.state.subtitles.map((cc, index) => /*#__PURE__*/_react.default.createElement(_ClosedCaptionCreatorRow.default, {
      ref: index === this.state.lastDeletedCCIndex ? this._nextCCRef : undefined,
      key: cc.locale,
      liveRegion: this.props.liveRegion,
      uploadMediaTranslations: this.props.uploadMediaTranslations,
      onDeleteRow: this.onRowDelete,
      onLanguageSelected: this.onLanguageSelected,
      onFileSelected: this.onFileSelected,
      languages: this.props.languages,
      selectedLanguage: this.props.languages.find(l => l.id === cc.locale),
      selectedFile: cc.file
    }))), this.state.addingNewClosedCaption ? /*#__PURE__*/_react.default.createElement(_uiView.View, {
      as: "div"
    }, /*#__PURE__*/_react.default.createElement(_ClosedCaptionCreatorRow.default, {
      ref: this._newCreatorRef,
      liveRegion: this.props.liveRegion,
      uploadMediaTranslations: this.props.uploadMediaTranslations,
      onDeleteRow: this.onRowDelete,
      onLanguageSelected: this.onLanguageSelected,
      onFileSelected: this.onFileSelected,
      languages: this.props.languages.filter(candidate_lang => {
        // remove already selected languages form the list
        return !this.state.subtitles.find(st => st.locale === candidate_lang.id);
      }),
      selectedLanguage: this.state.newSelectedLanguage,
      selectedFile: this.state.newSelectedFile
    })) : /*#__PURE__*/_react.default.createElement("div", {
      style: {
        position: 'relative',
        textAlign: 'center'
      }
    }, /*#__PURE__*/_react.default.createElement(_uiButtons.IconButton, {
      ref: this._addButtonRef,
      shape: "circle",
      color: "primary",
      screenReaderLabel: ADD_NEW_CAPTION_OR_SUBTITLE,
      onClick: this.newButtonClick,
      margin: "x-small auto"
    }, /*#__PURE__*/_react.default.createElement(_uiIcons.IconAddLine, null))));
  }

}

exports.default = ClosedCaptionPanel;