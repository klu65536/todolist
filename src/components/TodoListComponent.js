'use strict';

import React from 'react';
import InputComponent from './InputComponent.js';
import ListPanelComponent from './ListPanelComponent.js';


require('styles//TodoList.css');


class TodoListComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      things:[],
      showHistory:false
    };
    this.counter = 1;

  }

  Change(e,text){
    if (e.key == 'Enter') {
      let things = this.state.things;
      things.push({
        key:this.counter++,
        value:text,
        done:false
      });
      this.setState({
        things:things
      });

    }
  }

  ToggleHistory(){
      var things = this.state.things;
      console.log(this.state.showHistory);
      this.setState({
        showHistory: !this.state.showHistory,
        things:things
      });
  }

  Check(index){
    let things = this.state.things;
    things[index]['done'] = true;
    this.setState({
      things:things,
      showHistory:this.state.showHistory
    });
  }
  render() {
    return (
      <div className='todolist-component'>
        <InputComponent hintText='Note down things here......' onKeyPress={this.Change.bind(this)} />
        <ListPanelComponent list={this.state.things} onCheck={this.Check.bind(this)} showHistory={this.state.showHistory}/>
        <button onClick={this.ToggleHistory.bind(this)}>{this.state.showHistory?'hide finished':'show finished'}</button>
      </div>
    );
  }
}

TodoListComponent.displayName = 'TodoListComponent';

// Uncomment properties you need
// TodoListComponent.propTypes = {};
// TodoListComponent.defaultProps = {};

export default TodoListComponent;
