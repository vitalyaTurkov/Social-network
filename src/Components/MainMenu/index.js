import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class SwipeableTemporaryDrawer extends React.Component {

    toggleDrawer = (open) => () => {
        this.props.openMenuAction(open);
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>qwe</List>
                <Divider />
                <List>qwe</List>
            </div>
        );

        return (
            <SwipeableDrawer
                open={this.props.isOpen}
                onClose={this.toggleDrawer(false)}
                onOpen={this.toggleDrawer(true)}
            >
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer(false)}
                    onKeyDown={this.toggleDrawer(false)}
                >
                    {sideList}
                </div>
            </SwipeableDrawer>
        );
    }
}

SwipeableTemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwipeableTemporaryDrawer);
