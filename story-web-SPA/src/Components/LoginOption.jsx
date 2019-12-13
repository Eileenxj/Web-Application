import React from 'react';

function LoginOpition({setReadyToLogin}) {

    const addLoginOpition = (e) => {
        e.preventDefault();
        setReadyToLogin(true);
    };

    return (      
            <div className="options">
                <button className="options-login"
                onClick={addLoginOpition}>Login</button>      
            </div>
    )
}

export default LoginOpition;