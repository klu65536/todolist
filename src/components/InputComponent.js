'use strict';

import React from 'react';

require('styles//Input.css');

const style = {
  minWidth:'95%',
  marginTop:'-30px',
  marginRight:'25px',
  borderTop: '0px',
  borderBottom:'1px solid black',
  borderLeft:'0px',
  borderRight:'0px'
};

class InputComponent extends React.Component {
  constructor(props){
    super(props);
    //this.Finish = this.Finish.bind(this);
    //this.HandleChange = this.HandleChange.bind(this);
    this.state = {
      thingsTodo:''
    };
  }
  Finish(e){
    if (e.key == 'Enter'){
      if (this.props.onKeyPress){
        var value = this.todoInput.value;
        if (value.replace(/^\s+|\s+$/g,'') == ''){
          return ;
        }
        this.todoInput.value = '';
        this.props.onKeyPress(e, value);
        this.todoInput.focus();

      }
    }
  }

  render() {
    return (
      <div className='input-component'>
        <input id='thingTodo'
                   style={style}
                   onKeyPress = {this.Finish.bind(this)}
                   ref = {(input) => {this.todoInput = input;}}
        />
      </div>
    );
  }
}

InputComponent.displayName = 'InputComponent';

// Uncomment properties you need
// InputComponent.propTypes = {};
// InputComponent.defaultProps = {};

export default InputComponent;
