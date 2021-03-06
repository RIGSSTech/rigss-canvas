#
# Copyright (C) 2013 - present Instructure, Inc.
#
# This file is part of Canvas.
#
# Canvas is free software: you can redistribute it and/or modify it under
# the terms of the GNU Affero General Public License as published by the Free
# Software Foundation, version 3 of the License.
#
# Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
# WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
# A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
# details.
#
# You should have received a copy of the GNU Affero General Public License along
# with this program. If not, see <http://www.gnu.org/licenses/>.

import _ from 'underscore'
import $ from 'jquery'
import Backbone from '@canvas/backbone'
import {completeUpload} from '@canvas/upload-file'
import {useScope as useI18nScope} from '@canvas/i18n'
import React from 'react'
import ReactDOM from 'react-dom'
import {ProgressBar} from '@instructure/ui-progress'
import '@canvas/forms/jquery/jquery.instructure_forms'

I18n = useI18nScope('content_migrations')

export default class ContentMigration extends Backbone.Model
  urlRoot: => "/api/v1/courses/#{@get('course_id')}/content_migrations"
  @dynamicDefaults = {}

  # Creates a dynamic default for this models attributes. This means that
  # the default values for this model (instance) will be whatever it was 
  # set to originally.
  #   id: 
  #      model = new ContentMigration foo: 'bar', cat: 'Fluffy'
  #      model.set('pill', adderall) # don't do drugs...
  #      
  #      model.dynamicDefaults = {foo: 'bar', cat: 'Fluffy'} 
  # @api public backbone override

  initialize:(attributes) -> 
    super
    @dynamicDefaults = attributes

  # Clears all attributes on the model and reset's the model to it's 
  # origional state when initialized. Uses the dynamicDefaults to 
  # determin which properties were used.
  #
  # @api public

  resetModel: -> 
    @clear()
    @resetDynamicDefaultCollections()
    @set @dynamicDefaults

  # Loop through all defaults and reset any collections to be blank that
  # might exist. 
  #
  # @api private

  resetDynamicDefaultCollections: -> 
    _.each @dynamicDefaults, (value, key, list) ->
      if value instanceof Backbone.Collection
        collection = value
        
        # Force models into an new array since we modify collections
        # models in the .each which effects the loop since
        # collection.models is pass by reference.
        models = collection.map (model) -> model
        _.each models, (model) -> collection.remove model

  # Handles two cases. Migration with a file and without a file.
  #
  # The presence of a file in the migration is indicated by a
  # `pre_attachment` field on the model. This field will contain a
  # `fileElement` (a DOM node for an <input type="file">). A migration
  # without a file (e.g. a course copy) is executed as a normal save.
  #
  # A migration with a file (e.g. an import) is executed in multiple stages.
  # We first set aside the fileElement and save the remainder of the
  # migration. In addition to creating the migration on the server, this acts
  # as the preflight for the upload of the migration's file, with the
  # preflight results being stored back into the model's `pre_attachment`. We
  # then complete the upload as for any other file upload. Once completed, we
  # reload the model to set the polling url, then resolve the deferred.
  #
  #  @returns deferred object
  #  @api public backbone override

  save: =>
    return super unless @get('pre_attachment') # No attachment, regular save

    dObject = $.Deferred()
    resolve = =>
      # sets the poll url
      this.fetch success: =>
        dObject.resolve()
    reject = (message) => dObject.rejectWith(this, message)

    fileElement = @get('pre_attachment').fileElement
    delete @get('pre_attachment').fileElement
    file = fileElement.files[0]

    super _.omit(arguments[0], 'file'),
      error: (xhr) => reject(xhr.responseText)
      success: (model, xhr, options) =>
        completeUpload(@get('pre_attachment'), file, { ignoreResult: true, onProgress: @onProgress })
          .catch(reject)
          .then(resolve)

    dObject

  # These models will have many SubDayModels via a collection. This model has attributes
  # that must go with the request. 
  #
  # @api private backbone override

  toJSON: -> 
    json = super
    @addDaySubsitutions(json)
    @translateDateAdjustmentParams(json)
    json

  # Add day substituions to a json object if this model has a daySubCollection. 
  # remember json is pass by reference so changes are reflected on the origional
  # json object
  # 
  # @api private

  addDaySubsitutions: (json) => 
    collection = @daySubCollection
    json.date_shift_options ||= {}
    json.date_shift_options.day_substitutions = collection.toJSON() if collection

  # Convert date adjustment (shift / remove) radio buttons into the format
  # expected by the Canvas API
  #
  # @api private

  translateDateAdjustmentParams: (json) =>
    if json.adjust_dates
      if json.adjust_dates.enabled == '1'
        json.date_shift_options[json.adjust_dates.operation] = '1'
      delete json.adjust_dates

  progressValue: (h) ->
    I18n.t '%{percent}%',
      percent: Math.round((h.valueNow * 100) / h.valueMax)

  onProgress: (event) =>
    if event.lengthComputable
      mountPoint = document.getElementById('migration_upload_progress_bar')
      if mountPoint
        ReactDOM.render(React.createElement(ProgressBar, {
          screenReaderLabel: I18n.t('Uploading progress')
          valueMax: event.total
          valueNow: event.loaded
          renderValue: @progressValue
          formatScreenReaderValue: @progressValue
          tabindex: '0'
        }), mountPoint)
