/*
 * Copyright (C) 2017 - present Instructure, Inc.
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
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, object, bool, string } from 'prop-types';
import moment from 'moment-timezone';
import { List } from '@instructure/ui-list';
import { Text } from '@instructure/ui-text';
import { Spinner } from '@instructure/ui-spinner';
import { View } from '@instructure/ui-view';
import { Button } from '@instructure/ui-buttons';
import { IconWarningLine } from '@instructure/ui-icons';
import { Flex } from '@instructure/ui-flex';
import formatMessage from '../../format-message';
import { observedUserId } from '../../utilities/apiUtils';
import { sidebarLoadInitialItems, sidebarCompleteItem } from '../../actions';
import ToDoItem from './ToDoItem';
export class ToDoSidebar extends Component {
  constructor(props) {
    super(props);
    this.dismissedItemIndex = null;
    this.titleFocus = null;
    this.state = {
      visibleToDos: this.getVisibleItems(props.items)
    };
  }

  componentDidMount() {
    this.props.sidebarLoadInitialItems(moment.tz(this.props.timeZone).startOf('day'), this.props.forCourse);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const visibleToDos = this.getVisibleItems(nextProps.items);
    this.setState({
      visibleToDos
    });
  }

  componentDidUpdate() {
    if (this.dismissedItemIndex != null) {
      const previousIndex = this.dismissedItemIndex - 1;
      this.dismissedItemIndex = null;

      if (previousIndex >= 0) {
        this.todoItemComponents[previousIndex].focus();
      } else {
        this.titleFocus.focus();
      }
    }
  }

  getVisibleItems(items) {
    const incompletedFilter = item => {
      if (!item) return false;
      return !item.completed;
    };

    return items.filter(incompletedFilter).slice(0, 7);
  }

  handleDismissClick(itemIndex, item) {
    this.dismissedItemIndex = itemIndex;
    this.props.sidebarCompleteItem(item).catch(() => {
      this.dismissedItemIndex = null;
    });
  }

  renderShowAll() {
    if (this.props.changeDashboardView && this.state.visibleToDos.length > 0) {
      return /*#__PURE__*/React.createElement(View, {
        as: "div",
        textAlign: "center"
      }, /*#__PURE__*/React.createElement(Button, {
        variant: "link",
        onClick: () => this.props.changeDashboardView('planner')
      }, formatMessage('Show All')));
    }

    return null;
  }

  renderItems() {
    this.todoItemComponents = [];

    if (this.state.visibleToDos.length === 0) {
      return /*#__PURE__*/React.createElement(Text, {
        size: "small"
      }, formatMessage('Nothing for now'));
    }

    return /*#__PURE__*/React.createElement(List, {
      id: "planner-todosidebar-item-list",
      variant: "unstyled"
    }, this.state.visibleToDos.map((item, itemIndex) => /*#__PURE__*/React.createElement(List.Item, {
      key: item.uniqueId
    }, /*#__PURE__*/React.createElement(ToDoItem, {
      ref: component => {
        this.todoItemComponents[itemIndex] = component;
      },
      item: item,
      courses: this.props.courses,
      handleDismissClick: () => this.handleDismissClick(itemIndex, item),
      locale: this.props.locale,
      timeZone: this.props.timeZone,
      isObserving: this.props.isObserving
    }))));
  }

  render() {
    if (!this.props.loaded && !this.props.loadingError) {
      return /*#__PURE__*/React.createElement("div", {
        "data-testid": "ToDoSidebar"
      }, /*#__PURE__*/React.createElement("h2", {
        className: "todo-list-header"
      }, formatMessage('To Do')), /*#__PURE__*/React.createElement(View, {
        as: "div",
        textAlign: "center"
      }, /*#__PURE__*/React.createElement(Spinner, {
        renderTitle: () => formatMessage('To Do Items Loading'),
        size: "small"
      })));
    }

    if (this.props.loadingError) {
      return /*#__PURE__*/React.createElement("div", {
        "data-testid": "ToDoSidebar"
      }, /*#__PURE__*/React.createElement("h2", {
        className: "todo-list-header"
      }, formatMessage('To Do')), /*#__PURE__*/React.createElement(Flex, {
        justifyItems: "start"
      }, /*#__PURE__*/React.createElement(Flex.Item, null, /*#__PURE__*/React.createElement(IconWarningLine, {
        color: "error"
      })), /*#__PURE__*/React.createElement(Flex.Item, {
        margin: "xx-small none none xx-small"
      }, /*#__PURE__*/React.createElement(Text, {
        color: "danger"
      }, formatMessage('Failure loading the To Do list')))));
    }

    return /*#__PURE__*/React.createElement("div", {
      "data-testid": "ToDoSidebar"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "todo-list-header"
    }, /*#__PURE__*/React.createElement("span", {
      tabIndex: "-1",
      ref: elt => {
        this.titleFocus = elt;
      }
    }, formatMessage('To Do'))), this.renderItems(), this.renderShowAll());
  }

}
ToDoSidebar.propTypes = {
  sidebarLoadInitialItems: func.isRequired,
  sidebarCompleteItem: func.isRequired,
  items: arrayOf(object).isRequired,
  loaded: bool,
  courses: arrayOf(object).isRequired,
  timeZone: string,
  locale: string,
  changeDashboardView: func,
  forCourse: string,
  isObserving: bool,
  loadingError: string
};
ToDoSidebar.defaultProps = {
  loaded: false,
  timeZone: moment.tz.guess(),
  locale: 'en',
  forCourse: undefined
};

const mapStateToProps = state => ({
  courses: state.courses,
  items: state.sidebar.items,
  loaded: state.sidebar.loaded,
  isObserving: !!observedUserId(state),
  loadingError: state.sidebar.loadingError
});

const mapDispatchToProps = {
  sidebarLoadInitialItems,
  sidebarCompleteItem
};
export default connect(mapStateToProps, mapDispatchToProps)(ToDoSidebar);