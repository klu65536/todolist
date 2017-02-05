require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import TodoListComponent from './TodoListComponent.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class AppComponent extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
    <MuiThemeProvider>
      <div className="index">
        <TodoListComponent></TodoListComponent>
      </div>
    </MuiThemeProvider>

    )
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
