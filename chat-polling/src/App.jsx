import React,{useState} from 'react';
import './App.css';
import Login from './Components/Login';
import ChatApp from './Components/ChatApp';
import {login } from './services';

function App() {

  const [username, setUsername] = useState('');
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

  
  
  return (
    <div className="App">
      { username ? <ChatApp username={username} setUsername={setUsername}/> : <Login onLogin={onLogin} /> }
      <div> {errorText} </div>
    </div>

  );


  
}

export default App;
