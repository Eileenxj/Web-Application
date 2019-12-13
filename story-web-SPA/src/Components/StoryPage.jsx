import React from 'react';
import Logo from './Logo';
import CreateStoryOption from './CreateStoryOption';
import BackHomePageOption from './BackHomePageOption';
import LogoutOption from './LogoutOption';

function StoryPage({story, onLike, amountOfLikes , setReadyToLogin, setReadyToCreate, setReadyToRead, setUsername, username}) {
   
    const increaseAmountOfLikes = () => {
    
        onLike(story.id);
    }

    return (
        <div className="story-page">
            <div className="navigation-bar">
            <Logo/>
            <span className="welcome-info">Welcome! {username}</span>
            <BackHomePageOption setReadyToRead={setReadyToRead} setReadyToCreate={setReadyToCreate} />
            <CreateStoryOption setReadyToCreate={setReadyToCreate}/>
            <LogoutOption setReadyToLogin={setReadyToLogin}  setReadyToRead={setReadyToRead} 
            setUsername={setUsername} setReadyToCreate={setReadyToCreate}/>
            </div>
            <div className="story-panel">                       
                <p className="title">{story.title}</p>
                <div className="main-content">
                    <span className="description">{story.description}</span>
                    <p className="creator">{story.creator}</p>
                    <p className="timestamp">{story.timestamp}</p>
                    <p className="text">{story.text}</p>

                    <div className="reaction">
                       
                            <button className="like-button" type="submit"
                            onClick={increaseAmountOfLikes}>
                                <span className="button-icon-thumbsup" role="img" aria-label="thumbs up">👍</span>
                                <span className="button-likes-count" >{amountOfLikes}</span>
                            </button>
                       
                    </div>

                </div>
            </div>
        </div>
    )
}

export default StoryPage;