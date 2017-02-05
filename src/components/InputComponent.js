'use strict';

import React from 'react';
import TextField from 'material-ui/TextField';

require('styles//Input.css');

const style = {
  minWidth:'100%',
  marginTop:'-30px'
};

class InputComponent extends React.Component {
  constructor(props){
    super(props);
    //this.Finish = this.Finish.bind(this);
    //this.HandleChange = this.HandleChange.bind(this);
    this.state = {
      thingsTodo:""
    };
  }
  Finish(e){
    if (e.key == 'Enter'){
      console.log(this.state.thingsTodo);
    }
  }
  HandleChange(e){
    this.state.thingsTodo = e.target.value;
  }
  render() {
    return (
      <div className="input-component">
        <TextField id="thingTodo" style={style} hintText={this.props.hintText} onChange={this.HandleChange.bind(this)} onKeyPress = {this.Finish.bind(this)}/>
      </div>
    );
  }
}

InputComponent.displayName = 'InputComponent';

// Uncomment properties you need
// InputComponent.propTypes = {};
// InputComponent.defaultProps = {};

export default InputComponent;
