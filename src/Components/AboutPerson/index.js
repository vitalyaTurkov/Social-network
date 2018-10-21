import React from 'react'

class Index extends React.Component {
    render() {
        return (
            <div>{this.props.name} {this.props.surname}</div>
        )
    }
}

export default Index
