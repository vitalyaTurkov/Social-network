import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import Authorization from '../Authorization'
import Registration from '../Registration'
import Application from '../Application'
import { changeUser } from '../../store/redusers/user-reduser'
import { openMenuAction } from '../../store/redusers/main-reducer'

class Main extends React.Component {

    static propTypes = {
        id: PropTypes.string,
        email: PropTypes.string,
        name: PropTypes.string,
        surname: PropTypes.string,
        isAuthorized: PropTypes.bool,
        changeUser: PropTypes.func
    };

    render() {
        const { changeUser,
            id, isAuthorized, menuIsOpened, openMenuAction } = this.props;

        return (
            <Switch>
                <Route exact path={'/'}
                       render={() => (
                           <Authorization
                               isAuthorized={isAuthorized}
                               changeUser={changeUser}
                               id={this.props.id}
                           />
                       )}
                />
                <Route path={'/registration'}
                       render={() => <Registration id={id} isAuthorized={isAuthorized}/>}
                />
                <Route path={'/user/:id'}
                       render={() => (
                           <Application
                               isAuthorized={isAuthorized}
                               id={id}
                               menuIsOpened={menuIsOpened}
                               openMenuAction={openMenuAction}
                               changeUser={changeUser}
                           />
                       )}
                />
                <Route
                    component={() => <div>404 not found</div>}
                />
            </Switch>
        )
    }
}

const mapStateToProps = state => {
    return {
        id: state.userReducer.id,
        isAuthorized: state.userReducer.isAuthorized,
        menuIsOpened: state.mainReducer.menuIsOpened
    }
};

const mapActionsToProps = dispatch => ({
    changeUser: bindActionCreators(changeUser, dispatch),
    openMenuAction: bindActionCreators(openMenuAction, dispatch)
});

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Main))
