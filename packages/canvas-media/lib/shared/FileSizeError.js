"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
class FileSizeError extends Error {
  static get type() {
    return 'FileSizeError';
  }

  constructor({
    maxBytes,
    actualBytes
  }, ...args) {
    super("Max file size exceeded", args);
    this.name = FileSizeError.type;
    this.maxBytes = maxBytes;
    this.actualBytes = actualBytes;
  }

}

var _default = FileSizeError;
exports.default = _default;