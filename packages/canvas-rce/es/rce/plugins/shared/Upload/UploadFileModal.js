/*
 * Copyright (C) 2020 - present Instructure, Inc.
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
import React, { Suspense, useState } from 'react';
import { arrayOf, bool, func, number, object, oneOf, oneOfType, string } from 'prop-types';
import { Modal } from '@instructure/ui-modal';
import { Button, CloseButton } from '@instructure/ui-buttons';
import { Heading } from '@instructure/ui-heading';
import { Spinner } from '@instructure/ui-spinner';
import { Tabs } from '@instructure/ui-tabs';
import { ToggleDetails } from '@instructure/ui-toggle-details';
import { Text } from '@instructure/ui-text';
import formatMessage from '../../../../format-message';
import RceApiSource from '../../../../rcs/api';
import ImageOptionsForm from '../ImageOptionsForm';
import UsageRightsSelectBox from './UsageRightsSelectBox';
import { View } from '@instructure/ui-view';
const ComputerPanel = /*#__PURE__*/React.lazy(() => import('./ComputerPanel'));
const UrlPanel = /*#__PURE__*/React.lazy(() => import('./UrlPanel'));
const UnsplashPanel = /*#__PURE__*/React.lazy(() => import('./UnsplashPanel'));

function shouldBeDisabled({
  fileUrl,
  theFile,
  unsplashData,
  error
}, selectedPanel, usageRightNotSet) {
  if (error || usageRightNotSet && selectedPanel === 'COMPUTER') {
    return true;
  }

  switch (selectedPanel) {
    case 'COMPUTER':
      return !theFile || theFile.error;

    case 'UNSPLASH':
      return !unsplashData.id || !unsplashData.url;

    case 'URL':
      return !fileUrl;

    default:
      return false;
    // When in doubt, don't disable (but we shouldn't get here either)
  }
}

const UploadFileModal = /*#__PURE__*/React.forwardRef(({
  editor,
  contentProps,
  trayProps,
  onSubmit,
  onDismiss,
  panels,
  label,
  accept,
  modalBodyWidth,
  modalBodyHeight,
  requireA11yAttributes = true
}, ref) => {
  var _contentProps$session;

  const [theFile, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [fileUrl, setFileUrl] = useState('');
  const [selectedPanel, setSelectedPanel] = useState(panels[0]);
  const [unsplashData, setUnsplashData] = useState({
    id: null,
    url: null
  });
  const [usageRightsState, setUsageRightsState] = React.useState({
    usageRight: 'choose',
    ccLicense: '',
    copyrightHolder: ''
  }); // Image options props

  const [altText, setAltText] = useState('');
  const [isDecorativeImage, setIsDecorativeImage] = useState(false);
  const [displayAs, setDisplayAs] = useState('embed'); // even though usage rights might be required by the course, canvas has no place
  // on the user to store it. Only Group and Course.

  const requiresUsageRights = (contentProps === null || contentProps === void 0 ? void 0 : (_contentProps$session = contentProps.session) === null || _contentProps$session === void 0 ? void 0 : _contentProps$session.usageRightsRequired) && /(?:course|group)/.test(trayProps.contextType);

  function handleAltTextChange(event) {
    setAltText(event.target.value);
  }

  function handleIsDecorativeChange(event) {
    setIsDecorativeImage(event.target.checked);
  }

  function handleDisplayAsChange(event) {
    setDisplayAs(event.target.value);
  }

  const submitDisabled = shouldBeDisabled({
    fileUrl,
    theFile,
    unsplashData,
    error
  }, selectedPanel, requiresUsageRights && usageRightsState.usageRight === 'choose'); // Load the necessary session values, if not already loaded

  const loadSession = contentProps.loadSession;
  React.useEffect(() => {
    loadSession();
  }, [loadSession]);
  const source = trayProps.source || new RceApiSource({
    jwt: trayProps.jwt,
    refreshToken: trayProps.refreshToken,
    host: trayProps.host
  });
  return /*#__PURE__*/React.createElement(Modal, {
    "data-mce-component": true,
    as: "form",
    label: label,
    size: "large",
    overflow: "fit",
    onDismiss: onDismiss,
    onSubmit: e => {
      e.preventDefault();

      if (submitDisabled) {
        return false;
      }

      onSubmit(editor, accept, selectedPanel, {
        fileUrl,
        theFile,
        unsplashData,
        imageOptions: {
          altText,
          isDecorativeImage,
          displayAs
        },
        usageRights: usageRightsState
      }, contentProps, source, onDismiss);
    },
    open: true,
    shouldCloseOnDocumentClick: true,
    liveRegion: trayProps.liveRegion
  }, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(CloseButton, {
    onClick: onDismiss,
    offset: "small",
    placement: "end"
  }, formatMessage('Close')), /*#__PURE__*/React.createElement(Heading, null, label)), /*#__PURE__*/React.createElement(Modal.Body, {
    ref: ref
  }, /*#__PURE__*/React.createElement(Tabs, {
    onRequestTabChange: (event, {
      index
    }) => setSelectedPanel(panels[index])
  }, panels.map(panel => {
    switch (panel) {
      case 'COMPUTER':
        return /*#__PURE__*/React.createElement(Tabs.Panel, {
          key: panel,
          renderTitle: function () {
            return formatMessage('Computer');
          },
          selected: selectedPanel === 'COMPUTER'
        }, /*#__PURE__*/React.createElement(Suspense, {
          fallback: /*#__PURE__*/React.createElement(Spinner, {
            renderTitle: formatMessage('Loading'),
            size: "large"
          })
        }, /*#__PURE__*/React.createElement(ComputerPanel, {
          editor: editor,
          theFile: theFile,
          setFile: setFile,
          setError: setError,
          label: label,
          accept: accept,
          bounds: {
            width: modalBodyWidth,
            height: modalBodyHeight
          }
        })));

      case 'UNSPLASH':
        return /*#__PURE__*/React.createElement(Tabs.Panel, {
          key: panel,
          renderTitle: function () {
            return 'Unsplash';
          },
          selected: selectedPanel === 'UNSPLASH'
        }, /*#__PURE__*/React.createElement(Suspense, {
          fallback: /*#__PURE__*/React.createElement(Spinner, {
            renderTitle: formatMessage('Loading'),
            size: "large"
          })
        }, /*#__PURE__*/React.createElement(UnsplashPanel, {
          editor: editor,
          setUnsplashData: setUnsplashData,
          source: source,
          brandColor: trayProps.brandColor,
          liveRegion: trayProps.liveRegion
        })));

      case 'URL':
        return /*#__PURE__*/React.createElement(Tabs.Panel, {
          key: panel,
          renderTitle: function () {
            return formatMessage('URL');
          },
          selected: selectedPanel === 'URL'
        }, /*#__PURE__*/React.createElement(Suspense, {
          fallback: /*#__PURE__*/React.createElement(Spinner, {
            renderTitle: formatMessage('Loading'),
            size: "large"
          })
        }, /*#__PURE__*/React.createElement(UrlPanel, {
          fileUrl: fileUrl,
          setFileUrl: setFileUrl
        })));
    }

    return null;
  })), // We shouldn't show the accordions until the session data is loaded.
  Object.keys(contentProps.session || {}).length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, selectedPanel === 'COMPUTER' && requiresUsageRights && /*#__PURE__*/React.createElement(View, {
    as: "div",
    role: "group",
    borderColor: "primary",
    borderWidth: "0 0 small 0",
    padding: "medium"
  }, /*#__PURE__*/React.createElement(ToggleDetails, {
    defaultExpanded: true,
    summary: /*#__PURE__*/React.createElement(Heading, {
      level: "h3"
    }, formatMessage('Usage Rights (required)'))
  }, /*#__PURE__*/React.createElement(UsageRightsSelectBox, {
    usageRightsState: usageRightsState,
    setUsageRightsState: setUsageRightsState,
    contextType: trayProps.contextType,
    contextId: trayProps.contextId,
    showMessage: false
  }))), /image/.test(accept) && requireA11yAttributes && /*#__PURE__*/React.createElement(View, {
    as: "div",
    role: "group",
    borderColor: "primary",
    borderWidth: "0 0 small 0",
    padding: "medium"
  }, /*#__PURE__*/React.createElement(ToggleDetails, {
    defaultExpanded: !requiresUsageRights,
    summary: /*#__PURE__*/React.createElement(Heading, {
      level: "h3"
    }, formatMessage('Attributes'))
  }, /*#__PURE__*/React.createElement(ImageOptionsForm, {
    id: "upload-file-form",
    altText: altText,
    isDecorativeImage: isDecorativeImage,
    displayAs: displayAs,
    handleAltTextChange: handleAltTextChange,
    handleIsDecorativeChange: handleIsDecorativeChange,
    handleDisplayAsChange: handleDisplayAsChange,
    hideDimensions: true
  }))))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(Button, {
    onClick: onDismiss
  }, formatMessage('Close')), "\xA0", /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit",
    disabled: submitDisabled
  }, formatMessage('Submit'))));
});
UploadFileModal.propTypes = {
  editor: object.isRequired,
  contentProps: object,
  trayProps: object,
  onSubmit: func,
  onDismiss: func.isRequired,
  panels: arrayOf(oneOf(['COMPUTER', 'UNSPLASH', 'URL'])),
  label: string.isRequired,
  accept: oneOfType([arrayOf(string), string]),
  modalBodyWidth: number,
  modalBodyHeight: number,
  requireA11yAttributes: bool
};
export default UploadFileModal;