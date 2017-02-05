'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Checkbox from 'material-ui/Checkbox';
import InputComponent from './InputComponent.js';
import ListPanelComponent from './ListPanelComponent.js';


require('styles//TodoList.css');


class TodoListComponent extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="todolist-component">
        <InputComponent hintText="Note down things here......"/>
        <ListPanelComponent/>
      </div>
    );
  }
}

TodoListComponent.displayName = 'TodoListComponent';

// Uncomment properties you need
// TodoListComponent.propTypes = {};
// TodoListComponent.defaultProps = {};

export default TodoListComponent;
