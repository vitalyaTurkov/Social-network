import React from 'react'
import { Redirect } from 'react-router-dom'

import AboutPerson from '../AboutPerson'
import AppBar from '../AppBar'
import PersonPhoto from '../PersonPhoto'
import MainMenu from '../MainMenu'

import Grid from '@material-ui/core/Grid'

class Application extends React.Component
{
    render()
    {
        if(!this.props.isAuthorized)
        {
            return (
                <Redirect to={'/authorization'}/>
            )
        }
        return (
            <div>
                <AppBar openMenuAction={this.props.openMenuAction}/>
                <Grid container>
                    <PersonPhoto url={'https://img1.goodfon.ru/wallpaper/big/1/b1/fairy-tail-erza-elza-devushka.jpg'}/>
                    <AboutPerson name={this.props.name} surname={this.props.surname}/>
                    <MainMenu isOpen={this.props.menuIsOpened} openMenuAction={this.props.openMenuAction}/>
                </Grid>
            </div>
        )
    }
}

export default Application
