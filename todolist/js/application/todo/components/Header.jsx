import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

const styles = {
    title: {
        cursor: 'pointer',
    },
};

const AppBarExampleIcon = () => (
    <AppBar
        title={<span style={styles.title}>Title</span>}
        iconClassNameRight="muidocs-icon-navigation-expand-more"

    />
);
export default AppBarExampleIcon;