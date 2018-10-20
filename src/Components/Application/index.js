import React from 'react'
import { Redirect } from 'react-router-dom'

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
            <div>{this.props.name} {this.props.surname}</div>
        )
    }
}

export default Application
