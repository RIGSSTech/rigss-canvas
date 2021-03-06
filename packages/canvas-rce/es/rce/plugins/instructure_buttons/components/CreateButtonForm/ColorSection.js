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
import React from 'react';
import { Flex } from '@instructure/ui-flex';
import { SimpleSelect } from '@instructure/ui-simple-select';
import { ColorInput } from '../../../shared/ColorInput';
import formatMessage from '../../../../../format-message';
const OUTLINE_SIZES = ['none', 'small', 'medium', 'large'];

const getColorSection = () => document.querySelector('#buttons-tray-color-section');

export const ColorSection = ({
  settings,
  onChange
}) => /*#__PURE__*/React.createElement(Flex, {
  as: "section",
  direction: "column",
  id: "buttons-tray-color-section",
  justifyItems: "space-between",
  padding: "0 small"
}, /*#__PURE__*/React.createElement(Flex.Item, {
  padding: "small"
}, /*#__PURE__*/React.createElement(ColorInput, {
  color: settings.color,
  label: formatMessage('Icon Color'),
  name: "button-color",
  onChange: color => onChange({
    color
  }),
  popoverMountNode: getColorSection
})), /*#__PURE__*/React.createElement(Flex.Item, {
  padding: "small"
}, /*#__PURE__*/React.createElement(SimpleSelect, {
  assistiveText: formatMessage('Use arrow keys to select an outline size.'),
  id: "button-outline-size",
  onChange: (e, option) => onChange({
    outlineSize: option.value
  }),
  renderLabel: formatMessage('Outline Size'),
  value: settings.outlineSize
}, OUTLINE_SIZES.map(size => /*#__PURE__*/React.createElement(SimpleSelect.Option, {
  id: `outline-size-${size}`,
  key: `outline-size-${size}`,
  value: size
}, OUTLINE_SIZE_DESCRIPTION[size] || '')))), /*#__PURE__*/React.createElement(Flex.Item, {
  padding: "small"
}, /*#__PURE__*/React.createElement(ColorInput, {
  color: settings.outlineColor,
  label: formatMessage('Outline Color'),
  name: "button-outline",
  onChange: outlineColor => onChange({
    outlineColor
  }),
  popoverMountNode: getColorSection,
  requireColor: true
})));
const OUTLINE_SIZE_DESCRIPTION = {
  none: formatMessage('None'),
  small: formatMessage('Small'),
  medium: formatMessage('Medium'),
  large: formatMessage('Large')
};