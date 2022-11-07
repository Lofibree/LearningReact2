import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';



const Layout = (props) => {
    return (
        <div>
            <Header/>
            <Navbar 
            state={props.state.navBar}
            />
            {/* <Outlet/> */}
            <Footer/>
        </div>
    );
};

export {Layout};