import React from 'react';

function Refresh ({username, onRefresh, disabled}) {
    return (
        <div className="status-refresh">
        <button className="refresh-button" type="submit" id="refresh"
        onClick={() => { 
            onRefresh({username});
        }}
        disabled={disabled}> { disabled ? 'Loading...' : 'Refresh'}</button>
        </div>
    );
};

export default Refresh;