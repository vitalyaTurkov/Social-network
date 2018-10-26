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
import * as ls from '../../service/local-storage'

import {INCORRECT_DATA, DEFAULT, OK} from "./constants";

class Authorization extends React.Component
{
    static propTypes = {
        changeAuthorizationStatus: PropTypes.func,
        isAuthorized: PropTypes.bool,
        classes: PropTypes.object,
        authorizationStatus: PropTypes.string,
        changeUser: PropTypes.func
    };

    state = { status: DEFAULT };

    componentWillUpdate() {
        if(this.state.status !== OK && this.state.status !== INCORRECT_DATA) {
            this.setState({status: INCORRECT_DATA});
        }
    }

    handleKeyPress = (e) => e.key === "Enter" && this.handleAuth();

    handleAuth = () => {
        this.props.changeUser({email: this.emailInput.value, password: this.passwordInput.value}, (user) => {
            user.isAuthorized === true && this.setState({status: OK});
            ls.save('user', user);
        });
    };

    mountEmailInput = input => this.emailInput = input;

    mountPasswordInput = input => this.passwordInput = input;

    render() {
        let warning = <></>;
        const { classes, isAuthorized, id } = this.props,
              { status } = this.state;

        if(status === OK) {
            localStorage.setItem(
                'user',
                JSON.stringify({
                    id: id,
                    isAuthorized: true
                }));

            return <Redirect to={`/user/${id}`}/>
        }

        if(isAuthorized && status === DEFAULT) {
            return <Redirect to={`/user/${id}`}/>
        }

        if(status === INCORRECT_DATA) {
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
                <form onKeyPress={this.handleKeyPress}>
                    <Card className={classes.card}>
                        { warning }
                        <div>
                            <TextField
                                label="Email"
                                type="email"
                                name="email"
                                autoComplete="email"
                                className={classes.textField}
                                margin="normal"
                                inputRef={this.mountEmailInput}
                            />
                        </div>
                        <div>
                            <TextField
                                label="Password"
                                type="password"
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
                </form>
            </Grid>
        );
    }
}

export default withStyles(styles)(Authorization)
