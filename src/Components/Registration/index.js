import React from 'react';
import { Redirect } from 'react-router-dom'

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

import { addUser } from "../../service/api/api";
import { hasUser, isCorrectEmail } from "../../service/utils";
import { INCORRECT_EMAIL, USED_EMAIL, EMPTY_FIELDS, OK, DEFAULT } from "./constants";

import { styles } from './style';

class Registration extends React.Component {

    render() {
        const { classes, status, changeStatus, isAuthorized } = this.props;

        if (isAuthorized) {
            return <Redirect to={'/'}/>
        }

        let warning = <></>;

        if(status === OK) {
            changeStatus(DEFAULT);
            return <Redirect to={'/authorization'}/>
        }

        if(status === INCORRECT_EMAIL) {
            warning = <Typography>Некорректный Email</Typography>
        }

        if(status === USED_EMAIL) {
            warning = <Typography>Этот email уже был использован</Typography>
        }

        if(status === EMPTY_FIELDS) {
            warning = <Typography>Заполните все поля</Typography>
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
                    <div>
                        {warning}
                        <TextField
                            id="standard-name"
                            label="Name"
                            margin="normal"
                            inputRef={this.mountNameInput}
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-name"
                            label="Surname"
                            margin="normal"
                            inputRef={this.mountSurnameInput}
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-name"
                            label="Password"
                            margin="normal"
                            inputRef={this.mountPasswordInput}
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-name"
                            label="Email"
                            margin="normal"
                            inputRef={this.mountEmailInput}
                        />
                    </div>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        className={classes.btnGroup}
                    >
                        <Button color="primary" onClick={this.handleClick}>Регистрация</Button>
                    </Grid>
                </Card>
            </Grid>
        );
    }

    mountNameInput = nameInput => this.nameInput = nameInput;
    mountSurnameInput = surnameInput => this.surnameInput = surnameInput;
    mountPasswordInput = passwordInput => this.passwordInput = passwordInput;
    mountEmailInput = emailInput => this.emailInput = emailInput;

    handleClick = () => {
        if(this.emailInput.value === '' || this.nameInput.value === '' ||
            this.passwordInput.value === '' || this.surnameInput.value === '')
        {
            this.props.changeStatus(EMPTY_FIELDS);
            return;
        }

        if(!isCorrectEmail(this.emailInput.value)) {
            this.props.changeStatus(INCORRECT_EMAIL);
            return;
        }

        hasUser(this.emailInput.value, (user) => {
            if(user.email === '') {
                const user = {
                    name: this.nameInput.value,
                    surname: this.surnameInput.value,
                    password: this.passwordInput.value,
                    email: this.emailInput.value
                };
                addUser(user);
                this.props.changeStatus(OK);
            }
            else {
                this.props.changeStatus(USED_EMAIL);
            }
        });
    }
}

export default withStyles(styles)(Registration)
