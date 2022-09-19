import React from "react";
import '../styles/Header.css'
import freeCodeCampLogo from '../images/freecodecamp-logo.png'

function Header(){
    return (
        <div className='logo-contenedor'>
        <img 
        className='logo'
        src={freeCodeCampLogo}
        alt='logo'/>
      </div>
    );

}

export default Header;