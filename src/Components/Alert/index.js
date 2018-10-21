import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';


class Alert extends React.Component {
    static propTypes = {
        text: PropTypes.string,
        alert: PropTypes.func
    };

    state = {
        open: true,
    };

    handleClose = () => {
        this.setState({ open: false });
        this.props.accept();
    };

    render() {
        return (
            <div>
                <Dialog aria-labelledby="simple-dialog-title"
                        open={this.state.open}
                        onClose={this.handleClose}
                        text={this.props.text}>
                    <DialogTitle id="simple-dialog-title">{this.props.text}</DialogTitle>
                    <Button onClick={this.handleClose}>OK</Button>
                </Dialog>
            </div>
        );
    }
}

export default Alert;
