import React, { useState }   from 'react';
import Logo from './Logo';
import BackHomePageOption from './BackHomePageOption';
import LogoutOption from './LogoutOption';

function CreateNewStoryPage({setReadyToRead, setReadyToCreate, setReadyToLogin, setUsername, onSubmit, username} ) {
    const [newTitle, setNewTitle] = useState('');
    const [newText, setNewText] = useState('');
    const [newDexcription, setNewDexcription] = useState('');

    const onTitleChange = (e) => {
        setNewTitle(e.target.value);
    };

    const onTextChange = (e) => {
        setNewText(e.target.value);
    };

    const onDexcriptionChange = (e) => {
        setNewDexcription(e.target.value);
    };

    const submitStory = () => {
        if(newTitle && newText) {           
          onSubmit({username, newTitle, newText, newDexcription});
        //   setNewTitle('');
        //   setNewText('');
        //   setNewDexcription('');
        }
      };
    return (
        <div className="create-page">        
            <div className="navigation-bar">
                <Logo/>
                <span className="welcome-info">Welcome! {username}</span>
                <BackHomePageOption setReadyToRead={setReadyToRead} setReadyToCreate={setReadyToCreate} />
                <LogoutOption setReadyToLogin={setReadyToLogin}  setReadyToRead={setReadyToRead} 
                setUsername={setUsername} setReadyToCreate={setReadyToCreate}/>              
            </div>
            <div className="create-panel">
                <input type="text" placeholder="Type Title Here" className="type-title"
                 onChange={onTitleChange}
                 value={newTitle}/>            
                <textarea rows="12" placeholder="Type or paste your story here!" className="type-story-text"
                onChange={onTextChange}
                value={newText}
                ></textarea>
                <p className="description-p">
                Description
                </p> 
                <textarea className="type-dexcription" placeholder="A teaser that will make potential readers drool."
                onChange={onDexcriptionChange}
                value={newDexcription}
                ></textarea> 
            </div>
            <button type="submit" className="submit-button"
            onClick={submitStory}
            >
            Submit
            </button>
          

        
        </div>
        
    );
}
  


export default CreateNewStoryPage;
