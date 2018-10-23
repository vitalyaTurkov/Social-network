import React from 'react'
import { Redirect } from 'react-router-dom'

import AboutPerson from '../AboutPerson'
import AppBar from '../AppBar'
import PersonPhoto from '../PersonPhoto'
import MainMenu from '../MainMenu'
import { classes } from './styles'
import { getUserById } from "../../service/api/api";

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core'

class Application extends React.Component {

    state = {
        name: "",
        surname: "",
        id: this.props.id,
        redirect: false
    };

    componentWillMount() {
        if(!this.props.isAuthorized) return;

        const {pathname} = window.location;
        const id = pathname.substring(6);
        if(!this.state.redirect) {
            getUserById(id)
                .then(res => this.setState({
                    name: res.data.name,
                    surname: res.data.surname,
                    id: res.data.id,
                }));
        }
    }

    componentWillReceiveProps() {
        if(!this.props.isAuthorized) return;
        const {pathname} = window.location;
        const id = pathname.substring(6);
        if(!this.state.redirect) {
            getUserById(id)
                .then(res => this.setState({
                    name: res.data.name,
                    surname: res.data.surname,
                    id: res.data.id,
                }));
        }
    }

    onSelectSearch = (id) => {
        this.setState({...this.state, id: id, redirect: false});
    };

    render() {
        const {classes, menuIsOpened, openMenuAction} = this.props;

        if (!this.props.isAuthorized) return <Redirect to={'/authorization'}/>;

        return (
            <div>
                <AppBar onSelect={this.onSelectSearch} openMenuAction={openMenuAction}/>
                <Grid container className={classes.container}>
                    <PersonPhoto url={'https://img1.goodfon.ru/wallpaper/big/1/b1/fairy-tail-erza-elza-devushka.jpg'}/>
                    <AboutPerson name={this.state.name} surname={this.state.surname}/>
                    <MainMenu isOpen={menuIsOpened} openMenuAction={openMenuAction}/>
                </Grid>
            </div>
        )
    }
}

export default withStyles(classes)(Application)
