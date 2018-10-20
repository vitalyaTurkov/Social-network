import React from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { styles } from './style'

import {INCORRECT_DATA, DEFAULT} from "./constants";

class Authorization extends React.Component
{
    propTypes = {
        changeAuthorizationStatus: PropTypes.func,
        isAuthorized: PropTypes.bool,
        classes: PropTypes.objectOf(PropTypes.object),
        authorizationStatus: PropTypes.string,
        changeUser: PropTypes.string
    };

    componentWillUpdate() {
        if(this.props.isAuthorized === false) {
            this.props.changeAuthorizationStatus(INCORRECT_DATA);
        }
        else {
            this.props.changeAuthorizationStatus(DEFAULT);
        }
    }

    render()
    {
        let warning = <></>;

        const { classes, isAuthorized, authorizationStatus } = this.props;

        if(isAuthorized)
        {
            return <Redirect to={'/'}/>
        }

        if(authorizationStatus === INCORRECT_DATA) {
            warning = <Typography>Неправильный логин или пароль</Typography>;
        }

        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.container}
            >
                <Card className={classes.card}>
                    { warning }
                    <div>
                        <TextField
                            label="Email"
                            className={classes.textField}
                            margin="normal"
                            inputRef={this.mountEmailInput}
                        />
                    </div>
                    <div>
                        <TextField
                            label="Password"
                            className={classes.textField}
                            margin="normal"
                            inputRef={this.mountPasswordInput}
                        />
                    </div>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        className={classes.btnGroup}
                    >
                        <Button variant="contained" onClick={this.handleAuth} color="primary">Вход</Button>
                        <Link to={'/registration'}>
                            <Button>Регистрация</Button>
                        </Link>
                    </Grid>
                </Card>
            </Grid>
        );
    }

    handleAuth = () => {
        this.props.changeUser({email: this.emailInput.value, password: this.passwordInput.value});
    };

    mountEmailInput = input => this.emailInput = input;
    mountPasswordInput = input => this.passwordInput = input;
}

export default withStyles(styles)(Authorization)
