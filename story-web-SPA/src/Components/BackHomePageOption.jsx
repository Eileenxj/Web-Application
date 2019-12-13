import React from 'react';

function BackHomePageOption({setReadyToRead, setReadyToCreate}) {

    const addBackHomePageOption = (e) => {
        e.preventDefault();
        setReadyToRead(false);
        setReadyToCreate(false);
    };

    return (      
            <div className="options">
                <button className="options-home"
                onClick={addBackHomePageOption}>Home</button>      
            </div>
    )
}

export default BackHomePageOption;