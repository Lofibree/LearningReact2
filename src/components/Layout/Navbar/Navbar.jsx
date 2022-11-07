import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import { useSelector } from 'react-redux'
import FrendItem from './FrendItem/FrendItem';


const Navbar = () => {

    const navBar = useSelector(state => state.navBar);

    const friendEl = navBar.map(f => <FrendItem name={f.name}/>);

    return (
        <div className={s.navdiv}>
            <nav className={s.nav}>
                <div>
                    <NavLink
                        to='/profile'
                        className={(navigationData) => navigationData.isActive
                            ? s.activeLink
                            : null}
                    >
                        MyProfile
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to='/dialogs'
                        className={(navigationData) => navigationData.isActive
                            ? s.activeLink
                            : null}
                    >
                        Dialogs
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to='/users'
                        className={(navigationData) => navigationData.isActive
                            ? s.activeLink
                            : null}
                    >
                        Users
                    </NavLink>
                </div>
                {/* <div className={s.friendsEl}>
                    <div>
                        Friends
                    </div>
                    <div className={s.friends}>
                        {friendEl}
                    </div>
                </div> */}
            </nav>
        </div>
    )

};


export default Navbar;