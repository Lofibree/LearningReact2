import React from 'react';
import {Navigate} from 'react-router-dom';
import { connect } from 'react-redux/es/exports';
// import { useLocation } from 'react-router-dom'




export const withAuthNavigate = (Component) => {

    // const prevRoute = useLocation();

    class NavigateComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Navigate to={'/login'} 
                // prevRoute={{prevRoute}}
                />
            }
            return (
                <>
                    <Component {...this.props} />
                </>
            )
        }
    }

    let mapStateToPropsForNavigate = (state) => {
        return {
            isAuth: state.auth.isAuth
        } 
    }


    return connect(mapStateToPropsForNavigate)(NavigateComponent);
};


