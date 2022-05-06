/*
 * Copyright (C) 2021 - present Instructure, Inc.
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
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { CloseButton } from '@instructure/ui-buttons';
import { Heading } from '@instructure/ui-heading';
import { Flex } from '@instructure/ui-flex';
import { View } from '@instructure/ui-view';
import { Alert } from '@instructure/ui-alerts';
import { Preview } from './CreateButtonForm/Preview';
import { CreateButtonForm } from './CreateButtonForm';
import { Footer } from './CreateButtonForm/Footer';
import { buildStylesheet, buildSvg } from '../svg';
import { statuses, useSvgSettings } from '../svg/settings';
import { BTN_AND_ICON_ATTRIBUTE, BTN_AND_ICON_DOWNLOAD_URL_ATTR } from '../registerEditToolbar';
import { FixedContentTray } from '../../shared/FixedContentTray';
import { useStoreProps } from '../../shared/StoreContext';
import formatMessage from '../../../../format-message';
import buildDownloadUrl from '../../shared/buildDownloadUrl';
import { validIcon } from '../utils/iconValidation';
const INVALID_MESSAGE = formatMessage('One of the following styles must be added to save an icon: Icon Color, Outline Size, Icon Text, or Image');

function renderHeader(title, settings, setIsOpen, onKeyDown, isInvalid, onAlertDismissal) {
  return /*#__PURE__*/React.createElement(View, {
    as: "div",
    background: "primary"
  }, isInvalid && /*#__PURE__*/React.createElement(Alert, {
    variant: "error",
    margin: "small",
    timeout: 10000,
    onDismiss: onAlertDismissal,
    renderCloseButtonLabel: "Close"
  }, INVALID_MESSAGE), /*#__PURE__*/React.createElement(Flex, {
    direction: "column"
  }, /*#__PURE__*/React.createElement(Flex.Item, {
    padding: "medium medium small"
  }, /*#__PURE__*/React.createElement(Flex, {
    direction: "row"
  }, /*#__PURE__*/React.createElement(Flex.Item, {
    grow: true,
    shrink: true
  }, /*#__PURE__*/React.createElement(Heading, {
    as: "h2"
  }, title)), /*#__PURE__*/React.createElement(Flex.Item, null, /*#__PURE__*/React.createElement(CloseButton, {
    placement: "static",
    variant: "icon",
    onClick: () => setIsOpen(false),
    onKeyDown: onKeyDown,
    "data-testid": "icon-maker-close-button"
  }, formatMessage('Close'))))), /*#__PURE__*/React.createElement(Flex.Item, {
    as: "div",
    padding: "small"
  }, /*#__PURE__*/React.createElement(Preview, {
    settings: settings
  }))));
}

function renderBody(settings, dispatch, editor, editing, allowNameChange, nameRef, rcsConfig) {
  return /*#__PURE__*/React.createElement(CreateButtonForm, {
    settings: settings,
    dispatch: dispatch,
    editor: editor,
    editing: editing,
    allowNameChange: allowNameChange,
    nameRef: nameRef,
    rcsConfig: rcsConfig
  });
}

function renderFooter(status, onClose, handleSubmit, editing, replaceAll, setReplaceAll, applyRef) {
  return /*#__PURE__*/React.createElement(View, {
    as: "div",
    background: "primary"
  }, /*#__PURE__*/React.createElement(Footer, {
    disabled: status === statuses.LOADING,
    onCancel: onClose,
    onSubmit: () => handleSubmit({
      replaceFile: replaceAll
    }),
    replaceAll: replaceAll,
    onReplaceAllChanged: setReplaceAll,
    editing: editing,
    applyRef: applyRef
  }));
}

export function ButtonsTray({
  editor,
  onUnmount,
  editing,
  rcsConfig
}) {
  const nameRef = useRef();
  const applyRef = useRef();
  const [isInvalid, setIsInvalid] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [replaceAll, setReplaceAll] = useState(false);
  const title = editing ? formatMessage('Edit Icon') : formatMessage('Create Icon');
  const [settings, settingsStatus, dispatch] = useSvgSettings(editor, editing, rcsConfig);
  const [status, setStatus] = useState(statuses.IDLE);
  const storeProps = useStoreProps();

  const onClose = () => setIsOpen(false);

  const onKeyDown = event => {
    var _applyRef$current, _nameRef$current;

    if (event.keyCode !== 9) return;
    event.preventDefault();
    event.shiftKey ? (_applyRef$current = applyRef.current) === null || _applyRef$current === void 0 ? void 0 : _applyRef$current.focus() : (_nameRef$current = nameRef.current) === null || _nameRef$current === void 0 ? void 0 : _nameRef$current.focus();
  };

  useEffect(() => {
    setReplaceAll(false);
  }, [settings.name]);
  useEffect(() => {
    if (validIcon(settings)) {
      setIsInvalid(false);
      setStatus(statuses.IDLE);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [settings.color, settings.textColor, settings.text, settings.encodedImage, settings.outlineColor, settings.outlineSize]);

  const handleSubmit = ({
    replaceFile = false
  }) => {
    setStatus(statuses.LOADING);

    if (!validIcon(settings)) {
      setIsInvalid(true);
      setStatus(statuses.ERROR);
      return;
    }

    const svg = buildSvg(settings, {
      isPreview: false
    });
    buildStylesheet().then(stylesheet => {
      svg.appendChild(stylesheet);
      return storeProps.startButtonsAndIconsUpload({
        name: `${settings.name || formatMessage('untitled')}.svg`,
        domElement: svg
      }, {
        onDuplicate: replaceFile && 'overwrite'
      });
    }).then(writeButtonToRCE).then(onClose).catch(() => setStatus(statuses.ERROR));
  };

  const writeButtonToRCE = ({
    url
  }) => {
    const img = editor.dom.create('img');
    img.setAttribute('src', url);

    if (settings.alt) {
      img.setAttribute('alt', settings.alt);
    } // Mark the image as a button and icon.


    img.setAttribute(BTN_AND_ICON_ATTRIBUTE, true); // URL to fetch the SVG from when loading the Edit tray.
    // We can't use the 'src' because Canvas will re-write the
    // source attribute to a URL that is not cross-origin friendly.

    img.setAttribute(BTN_AND_ICON_DOWNLOAD_URL_ATTR, buildDownloadUrl(url));
    editor.insertContent(img.outerHTML);
  };

  useEffect(() => {
    setStatus(settingsStatus);
  }, [settingsStatus]);

  const handleAlertDismissal = () => setIsInvalid(false);

  return /*#__PURE__*/React.createElement(FixedContentTray, {
    title: title,
    isOpen: isOpen,
    onDismiss: onClose,
    onUnmount: onUnmount,
    renderHeader: () => renderHeader(title, settings, setIsOpen, onKeyDown, isInvalid, handleAlertDismissal),
    renderBody: () => renderBody(settings, dispatch, editor, editing, !replaceAll, nameRef, rcsConfig),
    renderFooter: () => renderFooter(status, onClose, handleSubmit, editing, replaceAll, setReplaceAll, applyRef),
    bodyAs: "form",
    shouldJoinBodyAndFooter: true
  });
}
ButtonsTray.propTypes = {
  editor: PropTypes.object.isRequired,
  onUnmount: PropTypes.func,
  editing: PropTypes.bool,
  rcsConfig: PropTypes.object.isRequired
};
ButtonsTray.defaultProps = {
  onUnmount: () => {},
  editing: false
};