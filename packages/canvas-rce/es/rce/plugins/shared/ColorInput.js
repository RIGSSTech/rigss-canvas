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
import React, { useEffect, useState } from 'react';
import { View } from '@instructure/ui-view';
import { Flex } from '@instructure/ui-flex';
import { TextInput } from '@instructure/ui-text-input';
import { Popover } from '@instructure/ui-popover';
import { IconArrowOpenDownLine, IconArrowOpenUpLine } from '@instructure/ui-icons';
import { BaseButton, CloseButton, IconButton } from '@instructure/ui-buttons';
import { ScreenReaderContent } from '@instructure/ui-a11y-content';
import PreviewIcon from './PreviewIcon';
import formatMessage from '../../../format-message';
const NAMED_COLORS = [{
  color: '#BD3C14',
  name: formatMessage('Brick')
}, {
  color: '#FF2717',
  name: formatMessage('Red')
}, {
  color: '#E71F63',
  name: formatMessage('Magenta')
}, {
  color: '#8F3E97',
  name: formatMessage('Purple')
}, {
  color: '#65499D',
  name: formatMessage('Deep Purple')
}, {
  color: '#4554A4',
  name: formatMessage('Indigo')
}, {
  color: '#1770AB',
  name: formatMessage('Blue')
}, {
  color: '#0B9BE3',
  name: formatMessage('Light Blue')
}, {
  color: '#06A3B7',
  name: formatMessage('Cyan')
}, {
  color: '#009688',
  name: formatMessage('Teal')
}, {
  color: '#009606',
  name: formatMessage('Green')
}, {
  color: '#8D9900',
  name: formatMessage('Olive')
}, {
  color: '#D97900',
  name: formatMessage('Pumpkin')
}, {
  color: '#FD5D10',
  name: formatMessage('Orange')
}, {
  color: '#F06291',
  name: formatMessage('Pink')
}, {
  color: '#000000',
  name: formatMessage('Black')
}, {
  color: '#556572',
  name: formatMessage('Steel Blue')
}, {
  color: '#6B7780',
  name: formatMessage('Grey')
}, {
  color: '#FFFFFF',
  name: formatMessage('White')
}, null];
export const ColorInput = ({
  color,
  label,
  name,
  onChange,
  popoverMountNode,
  width = '11rem',
  readonly = false,
  requireColor = false
}) => {
  var _NAMED_COLORS$find;

  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(color);
  const colorName = (_NAMED_COLORS$find = NAMED_COLORS.find(c => (c === null || c === void 0 ? void 0 : c.color) === color)) === null || _NAMED_COLORS$find === void 0 ? void 0 : _NAMED_COLORS$find.name;
  useEffect(() => {
    setInputValue(color);
  }, [color]); // fire onChange in case value is valid

  const handleColorChange = hex => {
    if (isValidHex(hex)) {
      onChange(hex);
    }

    if (!hex || !hex.length) {
      onChange(null);
    }

    setInputValue(hex);
  }; // reset the input value on blur if invalid


  const handleInputBlur = () => {
    if (!inputValue || inputValue.length > 0 && !isValidHex(inputValue)) {
      setInputValue(color);
    }
  };

  const colorPreviews = NAMED_COLORS.map(c => /*#__PURE__*/React.createElement(ColorPreview, {
    key: `${name}-${c === null || c === void 0 ? void 0 : c.color}`,
    color: c === null || c === void 0 ? void 0 : c.color,
    name: c === null || c === void 0 ? void 0 : c.name,
    disabled: !isOpen,
    onSelect: () => {
      handleColorChange(c === null || c === void 0 ? void 0 : c.color);
      setIsOpen(false);
    }
  }));

  function renderPopover() {
    return /*#__PURE__*/React.createElement(Popover, {
      on: "click",
      isShowingContent: isOpen,
      onShowContent: () => setIsOpen(true),
      onHideContent: () => setIsOpen(false),
      shouldContainFocus: true,
      shouldReturnFocus: true,
      mountNode: popoverMountNode,
      renderTrigger: /*#__PURE__*/React.createElement(IconButton, {
        screenReaderLabel: formatMessage('View predefined colors'),
        size: "small",
        withBackground: false,
        withBorder: false,
        interaction: "enabled",
        "data-testid": `${name}-popover-trigger`
      }, isOpen ? /*#__PURE__*/React.createElement(IconArrowOpenUpLine, null) : /*#__PURE__*/React.createElement(IconArrowOpenDownLine, null))
    }, /*#__PURE__*/React.createElement(CloseButton, {
      placement: "end",
      onClick: () => setIsOpen(false)
    }, formatMessage('Close')), /*#__PURE__*/React.createElement(Flex, {
      alignItems: "center",
      as: "div",
      justifyItems: requireColor ? 'start' : 'center',
      padding: "x-large x-small small",
      width: "175px",
      wrapItems: true,
      "data-testid": `${name}-popover`
    }, requireColor ? colorPreviews.slice(0, -1) : colorPreviews));
  }

  const pickerLabel = colorName ? formatMessage('Color Picker ({colorName} selected)', {
    colorName
  }) : formatMessage('Color Picker');
  return /*#__PURE__*/React.createElement(View, {
    as: "div"
  }, /*#__PURE__*/React.createElement(TextInput, {
    display: "inline-block",
    name: name,
    onBlur: handleInputBlur,
    onChange: (e, value) => handleColorChange(value),
    placeholder: formatMessage('None'),
    renderBeforeInput: /*#__PURE__*/React.createElement(ColorPreview, {
      color: color,
      disabled: true,
      margin: "0"
    }),
    renderAfterInput: /*#__PURE__*/React.createElement("span", {
      "aria-label": pickerLabel
    }, renderPopover()),
    renderLabel: label,
    shouldNotWrap: true,
    value: inputValue || '',
    width: width,
    interaction: readonly ? 'readonly' : undefined
  }));
};

function ColorPreview({
  color,
  name,
  disabled,
  margin = 'xxx-small',
  onSelect
}) {
  return /*#__PURE__*/React.createElement(BaseButton, {
    interaction: disabled ? 'readonly' : undefined,
    isCondensed: true,
    margin: margin,
    onClick: onSelect,
    size: "small",
    withBackground: false,
    withBorder: false,
    "aria-hidden": disabled
  }, /*#__PURE__*/React.createElement(ScreenReaderContent, null, color ? formatMessage('{name} ({color})', {
    name,
    color
  }) : formatMessage('None')), /*#__PURE__*/React.createElement(PreviewIcon, {
    color: color,
    testId: `colorPreview-${color || 'none'}`
  }));
}

function isValidHex(color) {
  if (!color) return false;

  switch (color.length) {
    case 4:
      return /^#[0-9A-F]{3}$/i.test(color);

    case 7:
      return /^#[0-9A-F]{6}$/i.test(color);

    default:
      return false;
  }
}