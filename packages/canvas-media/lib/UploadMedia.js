"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PANELS = void 0;

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _lodash = require("lodash");

var _uiButtons = require("@instructure/ui-buttons");

var _uiHeading = require("@instructure/ui-heading");

var _uiModal = require("@instructure/ui-modal");

var _uiTabs = require("@instructure/ui-tabs");

var _uiUtils = require("@instructure/ui-utils");

var _uiProgress = require("@instructure/ui-progress");

var _uiText = require("@instructure/ui-text");

var _constants = require("@instructure/canvas-rce/src/rce/plugins/shared/Upload/constants");

var _acceptedMediaFileTypes = require("./acceptedMediaFileTypes");

var _LoadingIndicator = _interopRequireDefault(require("./shared/LoadingIndicator"));

var _saveMediaRecording = _interopRequireWildcard(require("./saveMediaRecording"));

var _translationShape = _interopRequireDefault(require("./translationShape"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ComputerPanel = /*#__PURE__*/_react.default.lazy(() => Promise.resolve().then(() => _interopRequireWildcard(require('./ComputerPanel'))));

const MediaRecorder = /*#__PURE__*/_react.default.lazy(() => Promise.resolve().then(() => _interopRequireWildcard(require('./MediaRecorder'))));

const PANELS = {
  COMPUTER: 0,
  RECORD: 1
};
exports.PANELS = PANELS;

class UploadMedia extends _react.default.Component {
  static propTypes = {
    disableSubmitWhileUploading: _propTypes.bool,
    languages: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
      id: _propTypes.string,
      label: _propTypes.string
    })),
    liveRegion: _propTypes.func,
    rcsConfig: (0, _propTypes.shape)({
      contextId: _propTypes.string,
      contextType: _propTypes.string,
      origin: _propTypes.string,
      headers: (0, _propTypes.shape)({
        Authorization: _propTypes.string
      })
    }),
    onStartUpload: _propTypes.func,
    onUploadComplete: _propTypes.func,
    onDismiss: _propTypes.func,
    open: _propTypes.bool,
    tabs: (0, _propTypes.shape)({
      record: _propTypes.bool,
      upload: _propTypes.bool
    }),
    uploadMediaTranslations: _translationShape.default,
    // for testing
    computerFile: (0, _propTypes.instanceOf)(File)
  };
  static defaultProps = {
    disableSubmitWhileUploading: false
  };

  constructor(props) {
    super(props);
    let defaultSelectedPanel = this.inferSelectedPanel(props.tabs);

    if (props.computerFile) {
      props.computerFile.title = props.computerFile.name;
    }

    this.state = {
      hasUploadedFile: !!props.computerFile,
      uploading: false,
      progress: 0,
      selectedPanel: defaultSelectedPanel,
      computerFile: props.computerFile || null,
      subtitles: [],
      recordedFile: null,
      modalBodySize: {
        width: NaN,
        height: NaN
      }
    };
    this.modalBodyRef = /*#__PURE__*/_react.default.createRef();
  }

  inferSelectedPanel = tabs => {
    let selectedPanel = -1;

    if (tabs.upload) {
      selectedPanel = 0;
    } else if (tabs.record) {
      selectedPanel = 1;
    }

    return selectedPanel;
  };
  isReady = () => {
    if (this.props.disableSubmitWhileUploading && this.state.uploading) {
      return false;
    }

    switch (this.state.selectedPanel) {
      case PANELS.COMPUTER:
        return !!this.state.computerFile;

      case PANELS.RECORD:
        return !!this.state.recordedFile;

      default:
        return false;
    }
  };
  handleSubmit = () => {
    switch (this.state.selectedPanel) {
      case PANELS.COMPUTER:
        this.uploadFile(this.state.computerFile);
        break;

      case PANELS.RECORD:
        this.uploadFile(this.state.recordedFile);
        break;

      default:
        throw new Error('Selected Panel is invalid');
      // Should never get here
    }
  };
  submitEnabled = () => {
    var _this$state$computerF;

    switch (this.state.selectedPanel) {
      case PANELS.COMPUTER:
        return this.isReady() && !!((_this$state$computerF = this.state.computerFile) !== null && _this$state$computerF !== void 0 && _this$state$computerF.title);

      default:
        return this.isReady();
    }
  };

  uploadFile(file) {
    this.setState({
      uploading: true
    }, () => {
      this.props.onStartUpload && this.props.onStartUpload(file);
      (0, _saveMediaRecording.default)(file, this.props.rcsConfig, this.saveMediaCallback, this.onSaveMediaProgress);
    });
  }

  onSaveMediaProgress = progress => {
    this.setState({
      progress
    });
  };
  saveMediaCallback = async (err, data) => {
    if (err) {
      this.props.onUploadComplete && this.props.onUploadComplete(err, data);
    } else {
      try {
        if (this.state.selectedPanel === PANELS.COMPUTER && this.state.subtitles.length > 0) {
          await (0, _saveMediaRecording.saveClosedCaptions)(data.mediaObject.media_object.media_id, this.state.subtitles, this.props.rcsConfig, _constants.RCS_MAX_BODY_SIZE - _constants.RCS_REQUEST_SIZE_BUFFER);
        }

        this.props.onUploadComplete && this.props.onUploadComplete(null, data);
      } catch (ex) {
        this.props.onUploadComplete && this.props.onUploadComplete(ex, null);
      }
    }

    this.props.onDismiss && this.props.onDismiss();
  };

  componentDidMount() {
    this.setBodySize(this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    this.setBodySize(prevState); // If the specified tabs have not changed, don't attempt
    // to set the selected panel state (this would trigger
    // and endless loop).

    if ((0, _lodash.isEqual)(prevProps.tabs, this.props.tabs)) return;

    if (prevState.selectedPanel === -1) {
      // The tabs prop has changed and the selectedPanel was
      // never set in the constructor. Attempt to infer the
      // selected panel based on the new tabs list
      this.setState({
        selectedPanel: this.inferSelectedPanel(this.props.tabs)
      });
    }
  }

  setBodySize(state) {
    if (this.modalBodyRef.current) {
      // eslint-disable-next-line react/no-find-dom-node
      const thebody = _reactDom.default.findDOMNode(this.modalBodyRef.current);

      const modalBodySize = thebody.getBoundingClientRect();
      modalBodySize.height -= (0, _uiUtils.px)('3rem'); // leave room for the tabs

      if (modalBodySize.width !== state.modalBodySize.width || modalBodySize.height !== state.modalBodySize.height) {
        if (modalBodySize.width > 0 && modalBodySize.height > 0) {
          this.setState({
            modalBodySize
          });
        }
      }
    }
  }

  renderModalBody = () => {
    const {
      COMPUTER_PANEL_TITLE,
      DRAG_FILE_TEXT,
      LOADING_MEDIA,
      RECORD_PANEL_TITLE,
      MEDIA_RECORD_NOT_AVAILABLE
    } = this.props.uploadMediaTranslations.UploadMediaStrings;
    return /*#__PURE__*/_react.default.createElement(_uiTabs.Tabs, {
      maxWidth: "large",
      onRequestTabChange: (_, {
        index
      }) => {
        this.setState({
          selectedPanel: index
        });
      }
    }, this.props.tabs.upload && /*#__PURE__*/_react.default.createElement(_uiTabs.Tabs.Panel, {
      key: "computer",
      isSelected: this.state.selectedPanel === PANELS.COMPUTER,
      renderTitle: () => COMPUTER_PANEL_TITLE
    }, /*#__PURE__*/_react.default.createElement(_react.Suspense, {
      fallback: (0, _LoadingIndicator.default)(LOADING_MEDIA)
    }, /*#__PURE__*/_react.default.createElement(ComputerPanel, {
      theFile: this.state.computerFile,
      setFile: file => this.setState({
        computerFile: file
      }),
      hasUploadedFile: this.state.hasUploadedFile,
      setHasUploadedFile: uploadFileState => this.setState({
        hasUploadedFile: uploadFileState
      }),
      label: DRAG_FILE_TEXT,
      uploadMediaTranslations: this.props.uploadMediaTranslations,
      accept: _acceptedMediaFileTypes.ACCEPTED_FILE_TYPES,
      languages: this.props.languages,
      liveRegion: this.props.liveRegion,
      updateSubtitles: subtitles => {
        this.setState({
          subtitles
        });
      },
      bounds: this.state.modalBodySize
    }))), this.props.tabs.record && /*#__PURE__*/_react.default.createElement(_uiTabs.Tabs.Panel, {
      key: "record",
      isSelected: this.state.selectedPanel === PANELS.RECORD,
      renderTitle: () => RECORD_PANEL_TITLE
    }, /*#__PURE__*/_react.default.createElement(_react.Suspense, {
      fallback: (0, _LoadingIndicator.default)(LOADING_MEDIA)
    }, /*#__PURE__*/_react.default.createElement(MediaRecorder, {
      MediaCaptureStrings: this.props.uploadMediaTranslations.MediaCaptureStrings,
      errorMessage: MEDIA_RECORD_NOT_AVAILABLE,
      onSave: file => this.setState({
        recordedFile: file
      }, this.handleSubmit)
    }))));
  };
  onModalClose = () => {
    this.setState({
      hasUploadedFile: false,
      selectedPanel: 0,
      computerFile: null
    });
    this.props.onDismiss();
  };
  renderModalFooter = () => {
    if (this.state.selectedPanel === PANELS.RECORD) {
      return null;
    }

    const {
      CLOSE_TEXT,
      SUBMIT_TEXT,
      PROGRESS_LABEL
    } = this.props.uploadMediaTranslations.UploadMediaStrings;
    return /*#__PURE__*/_react.default.createElement(_uiModal.Modal.Footer, null, this.state.uploading && /*#__PURE__*/_react.default.createElement(_uiProgress.ProgressBar, {
      screenReaderLabel: PROGRESS_LABEL,
      valueNow: this.state.progress,
      valueMax: 100,
      renderValue: ({
        valueNow
      }) => {
        return /*#__PURE__*/_react.default.createElement(_uiText.Text, null, valueNow, "%");
      }
    }), "\xA0", /*#__PURE__*/_react.default.createElement(_uiButtons.Button, {
      onClick: this.onModalClose
    }, " ", CLOSE_TEXT, " "), "\xA0", /*#__PURE__*/_react.default.createElement(_uiButtons.Button, {
      onClick: e => {
        e.preventDefault();
        this.handleSubmit();
      },
      color: "primary",
      type: "submit",
      interaction: this.submitEnabled() ? 'enabled' : 'disabled'
    }, SUBMIT_TEXT));
  };

  render() {
    const {
      CLOSE_TEXT,
      UPLOAD_MEDIA_LABEL
    } = this.props.uploadMediaTranslations.UploadMediaStrings;
    return /*#__PURE__*/_react.default.createElement(_uiModal.Modal, {
      label: UPLOAD_MEDIA_LABEL,
      size: "large",
      onDismiss: this.onModalClose,
      open: this.props.open,
      shouldCloseOnDocumentClick: false,
      liveRegion: this.props.liveRegion
    }, /*#__PURE__*/_react.default.createElement(_uiModal.Modal.Header, null, /*#__PURE__*/_react.default.createElement(_uiButtons.CloseButton, {
      onClick: this.onModalClose,
      offset: "medium",
      placement: "end",
      screenReaderLabel: CLOSE_TEXT
    }), /*#__PURE__*/_react.default.createElement(_uiHeading.Heading, null, UPLOAD_MEDIA_LABEL)), /*#__PURE__*/_react.default.createElement(_uiModal.Modal.Body, {
      ref: this.modalBodyRef
    }, this.renderModalBody()), this.renderModalFooter());
  }

}

exports.default = UploadMedia;