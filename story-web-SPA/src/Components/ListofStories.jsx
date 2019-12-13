import React from 'react'

function ListofStories({storyList, onReadStory}) {
    
    function addReadStoryOption(id) {
        onReadStory(id);     
    };

    const listOfStories = Object.values(storyList).map( story => 
        <li key={story.id}>
            <div className="recent-story">
            <div className="creator-info">
              <span className="creator">{story.creator}</span>
              <span className="timestamp">{new Date( story.timestamp ).toLocaleTimeString()}</span>
            </div>
            <div className="story-info">
              <a className="story-title" 
              href={`story/${story.id}`}
              onClick={ (e) => {
                e.preventDefault();
                addReadStoryOption(story.id); 
                }}
              >{story.title}</a>
              <span className="story-description">{story.description}</span>
            </div>
            <div className="reaction">
              <div className="likes" >
                <span className="icon-thumbsup" role="img" aria-label="thumbs up"
                >👍</span>
                <span className="likes-count" >{story.amountOfLikes}</span>
              </div>
            </div>
            <hr className="margin-bottom-line"/>
          </div>
        </li>
        );

    return (     
        <ol className="stories-container">
          {listOfStories}
        </ol>               

    )
    
}

export default ListofStories;
