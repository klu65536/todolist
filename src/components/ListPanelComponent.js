'use strict';

import React from 'react';
import List from 'material-ui/List';


require('styles//ListPanel.css');



class ListPanelComponent extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      list:props.list,
      showHistory:props.showHistory
    };
  }

  Check(e,i){
    if (this.props.onCheck){
      this.props.onCheck(e, i);
    }
  }
  componentWillReceiveProps(nextProps) {
    //console.log(nextProps);
    this.setState({
      showHistory:nextProps.showHistory
    });
  }

  render() {
    console.log("panel render");
    console.log(this.state);
    let rendered = this.state.list.map(function(item,index){

        return (<span key={item.key} style={{display:(this.state.showHistory || !item.done)?'block':'none'}}><input type="checkbox"
                             style={{borderBottom:'1px solid #E0E0E0'}}
                             onChange = {this.Check.bind(this,index)}
                             disabled={item.done}

          //secondaryText="Hangouts video call"
        /> {item.value} <br/></span>);
    }.bind(this));
    return (
      <div className="listpanel-component">
        <List>
          {rendered}
        </List>
      </div>
    );
  }
}

ListPanelComponent.displayName = 'ListPanelComponent';

// Uncomment properties you need
// ListPanelComponent.propTypes = {};
// ListPanelComponent.defaultProps = {};

export default ListPanelComponent;
