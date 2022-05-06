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
import React, { forwardRef } from 'react';
import formatMessage from '../../../../../../format-message';
import { modes, actions } from '../../../reducers/imageSection';
import { Button } from '@instructure/ui-buttons';
import { IconArrowOpenDownLine } from '@instructure/ui-icons';
import { View } from '@instructure/ui-view';
import { Menu } from '@instructure/ui-menu';
const ModeSelect = /*#__PURE__*/forwardRef(({
  dispatch,
  onFocus,
  onBlur,
  rcsConfig
}, ref) => {
  var _rcsConfig$features;

  const menuFor = mode => /*#__PURE__*/React.createElement(Menu.Item, {
    key: mode.type,
    value: mode.type,
    onSelect: () => {
      dispatch({
        type: mode.type
      });
      dispatch({ ...actions.SET_IMAGE_COLLECTION_OPEN,
        payload: true
      });
    }
  }, mode.label);

  const showNonIconImages = !!(rcsConfig !== null && rcsConfig !== void 0 && (_rcsConfig$features = rcsConfig.features) !== null && _rcsConfig$features !== void 0 && _rcsConfig$features.buttons_and_icons_cropper);
  return /*#__PURE__*/React.createElement(Menu, {
    placement: "bottom",
    ref: ref,
    onFocus: onFocus,
    onBlur: onBlur,
    trigger: /*#__PURE__*/React.createElement(Button, {
      color: "secondary",
      "data-testid": "add-image"
    }, formatMessage('Add Image'), /*#__PURE__*/React.createElement(View, {
      margin: "none none none x-small"
    }, /*#__PURE__*/React.createElement(IconArrowOpenDownLine, null)))
  }, showNonIconImages && menuFor(modes.uploadImages), menuFor(modes.singleColorImages), menuFor(modes.multiColorImages), showNonIconImages && menuFor(modes.courseImages));
});
export default ModeSelect;