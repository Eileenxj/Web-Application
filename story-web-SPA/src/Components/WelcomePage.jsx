import React  from 'react';
import Logo from './Logo';
import LoginOpition from './LoginOption';
import ThemeIntro from './ThemeIntro';

function WelcomePage({setReadyToLogin}) {
 
    return (
        <div className="welcome-page">        
            <div className="navigation-bar">
                <Logo/>
                <LoginOpition setReadyToLogin={setReadyToLogin}/>
            </div>
            <div className="splash">
                <ThemeIntro/>
            </div>
        </div>
        
    )
}
  


export default WelcomePage;
