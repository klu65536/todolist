'use strict';

import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';


require('styles//ListPanel.css');

const ListItemStyle = {
  borderBottom:'1px solid #E0E0E0'
};


class ListPanelComponent extends React.Component {
  constructor(props){
    super(props);
    this.list = [
      "item a","item b","item c"
    ];
  }

  render() {
    let rendered = this.list.map(function(item,index){
        return (<ListItem style={{borderBottom:'1px solid #E0E0E0'}}
                         leftCheckbox={<Checkbox />}
                         primaryText={item}
          //secondaryText="Hangouts video call"
        />);
    });
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
