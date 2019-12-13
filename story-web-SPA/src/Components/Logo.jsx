import React from 'react';
import logo from '../Image/logo.png';


function Logo() {


    return (
       
        <div className="logo-container">
            <img src={logo} alt="witty-story-logo" className="logo-image"/>
            <span className="logo-text">Witty Story</span>
        </div>
  
    )
}

export default Logo;