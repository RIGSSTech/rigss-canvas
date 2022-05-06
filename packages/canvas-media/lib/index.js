"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ClosedCaptionPanel", {
  enumerable: true,
  get: function () {
    return _ClosedCaptionCreator.default;
  }
});
Object.defineProperty(exports, "LoadingIndicator", {
  enumerable: true,
  get: function () {
    return _LoadingIndicator.default;
  }
});
Object.defineProperty(exports, "RocketSVG", {
  enumerable: true,
  get: function () {
    return _RocketSVG.default;
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _UploadMedia.default;
  }
});
Object.defineProperty(exports, "isAudio", {
  enumerable: true,
  get: function () {
    return _utils.isAudio;
  }
});
Object.defineProperty(exports, "isPreviewable", {
  enumerable: true,
  get: function () {
    return _utils.isPreviewable;
  }
});
Object.defineProperty(exports, "isVideo", {
  enumerable: true,
  get: function () {
    return _utils.isVideo;
  }
});
Object.defineProperty(exports, "saveClosedCaptions", {
  enumerable: true,
  get: function () {
    return _saveMediaRecording.saveClosedCaptions;
  }
});
Object.defineProperty(exports, "saveMediaRecording", {
  enumerable: true,
  get: function () {
    return _saveMediaRecording.default;
  }
});
Object.defineProperty(exports, "sizeMediaPlayer", {
  enumerable: true,
  get: function () {
    return _utils.sizeMediaPlayer;
  }
});
Object.defineProperty(exports, "useComputerPanelFocus", {
  enumerable: true,
  get: function () {
    return _useComputerPanelFocus.default;
  }
});

var _UploadMedia = _interopRequireDefault(require("./UploadMedia"));

var _ClosedCaptionCreator = _interopRequireDefault(require("./ClosedCaptionCreator"));

var _RocketSVG = _interopRequireDefault(require("./RocketSVG"));

var _useComputerPanelFocus = _interopRequireDefault(require("./useComputerPanelFocus"));

var _utils = require("./shared/utils");

var _LoadingIndicator = _interopRequireDefault(require("./shared/LoadingIndicator"));

var _saveMediaRecording = _interopRequireWildcard(require("./saveMediaRecording"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }