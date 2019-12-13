import React from 'react';

function CreateStoryOption({setReadyToCreate}) {

    const addCreateStoryOption = (e) => {
        e.preventDefault();
        setReadyToCreate(true);
    };

    return (      
            <div className="options">
                <button className="options-create"
                onClick={addCreateStoryOption}>Create</button>      
            </div>
    )
}

export default CreateStoryOption;