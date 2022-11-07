import React from 'react';
import FrendItem from './FrendItem/FrendItem';
import Navbar from './Navbar';



let mapStateToProps = (state) => {
    return {
        navBarEl: state.navBar.map(n => <FrendItem name={n.name} id={n.id} />)
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        
    }
}


const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);



export default NavbarContainer;