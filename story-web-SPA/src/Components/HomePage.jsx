import React,{useState, useEffect} from 'react';
import Logo from './Logo';
import CreateStoryOption from './CreateStoryOption';
import BackHomePageOption from './BackHomePageOption';
import LogoutOption from './LogoutOption';
import ListofStories from './ListofStories';
import {fetchStoryList, fetchStory} from '../services.js';
const REFRESH_TIME_IN_MS = 3000; // this is a "constant" - a config variable

const getStoryList = ({username, setStoryList, setErrorText}) => {
  fetchStoryList({username})
  .then( stories => {
    setStoryList(stories);
  })
  .catch(err => {
    setErrorText("Story List is Empty.");
  });
};


const HomePage = ({ username, setReadyToRead, setStory , setAmountOfLikes, setReadyToLogin, setReadyToCreate, setUsername}) => {

const [storyList, setStoryList] = useState([]);
const [errorText, setErrorText] = useState('');


useEffect( () => {
  if(username) {
      getStoryList({username, setStoryList, setErrorText});
      const intervalId = setInterval( () => {
        getStoryList({setStoryList, setErrorText});
      }, REFRESH_TIME_IN_MS );
    // Return the function to run if the component is removed from the page
    // React will call this automatically
    return function cleanup() {
      clearInterval(intervalId);
    };
  }
}, [username]);

const onReadStory = (id)=>{
 
  fetchStory(id)
  .then((story) => {
    setReadyToRead(true);
    setStory(story);
    setAmountOfLikes(story.amountOfLikes);
  })
  .catch(err => {
    setErrorText("You can not Read this story.");
  }); 
};

return (
  <div className="home">
      <div className="navigation-bar">
          <Logo/>
          <span className="welcome-info">Welcome! {username}</span>
          <BackHomePageOption setReadyToRead={setReadyToRead} setReadyToCreate={setReadyToCreate} />
          <CreateStoryOption setReadyToCreate={setReadyToCreate}/>
          <LogoutOption setReadyToLogin={setReadyToLogin}  setReadyToRead={setReadyToRead} 
          setUsername={setUsername} setReadyToCreate={setReadyToCreate}/>
      </div>
      <p className="stories-container-title">Recent Stories</p> 
      <ListofStories storyList={storyList} onReadStory={onReadStory}/>
      <div> {errorText} </div>
  </div>
);
};

export default HomePage;
