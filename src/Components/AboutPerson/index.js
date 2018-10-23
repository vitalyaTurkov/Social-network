import React from 'react'

import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

class AboutPerson extends React.Component {
    render() {
        return (
            <Card style={{marginLeft: "20px"}}>
                <Typography style={{padding: "20px"}}>{this.props.name} {this.props.surname}</Typography>
            </Card>
        )
    }
}

export default AboutPerson
