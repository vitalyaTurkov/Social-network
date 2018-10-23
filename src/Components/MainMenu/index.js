import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from '@material-ui/core/Typography'

import { classes } from "./classes";

class MainMenu extends React.Component {
    toggleDrawer = (open) => () => {
        this.props.openMenuAction(open);
    };

    render() {
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
                    <Typography>Hello</Typography>
                </div>
                <div
                    tabIndex={1}
                    role="button"
                    onClick={this.toggleDrawer(false)}
                    onKeyDown={this.toggleDrawer(false)}
                >
                    <Typography>Hello</Typography>
                </div>
                <div
                    tabIndex={2}
                    role="button"
                    onClick={this.toggleDrawer(false)}
                    onKeyDown={this.toggleDrawer(false)}
                >
                    <Typography>Hello</Typography>
                </div>
            </SwipeableDrawer>
        );
    }
}

MainMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(classes)(MainMenu);
