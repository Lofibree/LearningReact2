import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logoutThunkCreator } from './../../../redux/authReducer'


class HeaderContainer extends React.Component {

    render() {
        return (
            <Header 
                isAuth={this.props.isAuth}
                login={this.props.login}
                logoutThunkCreator={this.props.logoutThunkCreator}
                id={this.props.id}
                email={this.props.email}
                getIsAuthThunkCreator={this.props.getIsAuthThunkCreator}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        id: state.auth.id,
        email: state.auth.email,
    }
}

export default connect(mapStateToProps, { logoutThunkCreator })(HeaderContainer);