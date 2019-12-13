import React,{useState}  from 'react';
import './App.css';
import WelcomePage from './Components/WelcomePage';
import LoginPage from './Components/LoginPage'
import HomePage from './Components/HomePage';
import StoryPage from './Components/StoryPage';
import CreateNewStoryPage from './Components/CreateNewStoryPage';
import {login, addStory,addLikes } from './services.js';

function App() {

  const [readyToLogin, setReadyToLogin] = useState('');
  const [readyToRead, setReadyToRead] = useState('');
  const [readyToCreate, setReadyToCreate] = useState('');
  const [username, setUsername] = useState('');
  const [story, setStory]=useState('');
  const [amountOfLikes, setAmountOfLikes]=useState('');
  const [errorText, setErrorText] = useState('');
  

  const onLogin = (username) => {
    login({username})
    .then( data => {
      setUsername(username);
 
    })
    .catch( err => {
      setErrorText("You can not Login.");
    });
  };

  const onSubmit = ({username, newTitle, newText, newDexcription}) => {
    addStory({username, newTitle, newText, newDexcription})
    .then(stories => {
      setReadyToCreate(false);
    })
    .catch( err => {
      setErrorText("You can not Submit.");
    });
  }
  const onLike = (id) => {
    addLikes(id)
    .then(story => {
      setAmountOfLikes(story.amountOfLikes);
    })
    .catch( err => {
      setErrorText("You can not click Like button.");
    })
  }

  if (!readyToLogin && !username && !readyToRead && !readyToCreate) {
    return (
      <div className="App">
        <header className="App-header">
        <WelcomePage setReadyToLogin={setReadyToLogin}/>
        </header>
      </div>
    );
  }
  else if( readyToLogin && !username && !readyToRead && !readyToCreate) {
    return (
      <div className="login-page">
        <LoginPage onLogin={onLogin} />
        <div> {errorText} </div>
      </div>
    );
  }
  else if( username && readyToLogin && !readyToRead && !readyToCreate){
    return (
      <div className="home-page">
        <HomePage username={username} setReadyToRead={setReadyToRead} 
        setStory={setStory} setAmountOfLikes={setAmountOfLikes}
        setReadyToLogin={setReadyToLogin} setReadyToCreate={setReadyToCreate} setUsername={setUsername}/>
        <div> {errorText} </div>
      </div>
    );
  }
  else if (readyToRead && username && readyToLogin && !readyToCreate) {
    return (
      <div className="story-page">
        <StoryPage story={story} onLike={onLike} amountOfLikes={amountOfLikes} 
        setReadyToLogin={setReadyToLogin} setReadyToCreate={setReadyToCreate} 
        setReadyToRead={setReadyToRead} setUsername={setUsername} username={username} />
        <div> {errorText} </div>
    </div>
    );
  }
  else if (readyToCreate && username) {
    return (
      <div className="create-page">
        <CreateNewStoryPage setReadyToRead={setReadyToRead} setReadyToCreate={setReadyToCreate} 
        setReadyToLogin={setReadyToLogin} setUsername={setUsername} onSubmit={onSubmit} username={username}/>
        <div> {errorText} </div>
      </div>
    );
  }
   

  }
  


export default App;
