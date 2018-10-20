import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Authorization from '../Authorization'
import Registration from '../Registration'
import Application from '../Application'
import { changeUser } from '../../store/redusers/user-reduser'
import { changeRegistrationStatus } from '../../store/redusers/registration-reducer'
import { changeAuthorizationStatus } from '../../store/redusers/authorization-reducer'

class Main extends React.Component {

    render() {
        const {name, surname, email,
            id, isAuthorized, authorizationStatus, registrationStatus} = this.props;

        return (
            <Switch>
                <Route exact path={'/authorization'}
                       render={() => (
                           <Authorization
                               isAuthorized={isAuthorized}
                               changeUser={this.changeUser}
                               authorizationStatus={authorizationStatus}
                               changeAuthorizationStatus={this.props.changeAuthorizationStatus}
                           />
                       )}
                />
                <Route path={'/registration'}
                       render={() => (
                           <Registration
                               status={registrationStatus}
                               changeStatus={this.props.changeRegistrationStatus}
                               isAuthorized={isAuthorized}
                           />
                       )}
                />
                <Route path={'/'}
                       render={() => (
                           <Application
                               isAuthorized={isAuthorized}
                               name={name}
                               surname={surname}
                               email={email}
                               id={id}
                           />
                       )}
                />
                <Route
                    component={() => <div>404 not found</div>}
                />
            </Switch>
        )
    }

    changeUser = (user) => {
        this.props.changeUser(user);
    }
}

const mapStateToProps = state => {
    return {
            id: state.userReducer.id,
            email: state.userReducer.email,
            name: state.userReducer.name,
            surname: state.userReducer.surname,
            isAuthorized: state.userReducer.isAuthorized,
            registrationStatus: state.registrationReducer.status,
            authorizationStatus: state.authorizationReducer.status
        }
};

const mapActionsToProps = dispatch => ({
    changeUser: bindActionCreators(changeUser, dispatch),
    changeRegistrationStatus: bindActionCreators(changeRegistrationStatus, dispatch),
    changeAuthorizationStatus: bindActionCreators(changeAuthorizationStatus, dispatch)
});

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Main))
