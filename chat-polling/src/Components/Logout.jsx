import React from 'react';

function Logout ({username, onLogout, disabled}) {
    return (
        <div className="status-logout">
            <button className="logout-button" type="submit" id="logout"
            onClick={() => { 
                onLogout({username});
            }}
            disabled={disabled}> { disabled ? 'Loading...' : 'Sign Out'}</button>
        </div>
    );
};

export default Logout;