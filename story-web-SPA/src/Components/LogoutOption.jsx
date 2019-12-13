import React from 'react';

function LogoutOption({setReadyToLogin, setReadyToRead, setUsername, setReadyToCreate}) {

    const addLogoutOption = (e) => {
        e.preventDefault();
        setReadyToLogin(false);
        setReadyToRead(false);
        setUsername('');
        setReadyToCreate(false);
    };

    return (      
            <div className="options">
                <button className="options-logout"
                onClick={addLogoutOption}>Logout</button>      
            </div>
    )
}

export default LogoutOption;