import React from 'react';
import s from './Header.module.css';
import HeadItemLogin from './HeadItem/HeadItemLogin';
import HeadItem from './HeadItem/HeadItem';
import Moment from 'react-moment';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className={s.header}>
            <NavLink to={'/'}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQldtpBMBBSRnmWKO0X6B2YUcq1SYCdec1kKF6svRKw&s' /></NavLink>
            <div className={s.headItems}>
                <HeadItem title='Home' />
                <HeadItem title='Contacts' />
                <HeadItem title='About' />
                <Moment format="HH:mm" interval={1000} className={s.time} />
                <div className={s.login}>
                    {
                        props.isAuth
                            ? <HeadItemLogin
                                login={props.login}
                                email={props.email}
                                id={props.id}
                                logoutThunkCreator={props.logoutThunkCreator}
                            />
                            : <NavLink to={'/login'} onClick={props.getIsAuthThunkCreator}>Login</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;