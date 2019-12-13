import React, { useState } from 'react';

function Login({ onLogin}) {
  const [newUsername, setNewUsername] = useState('');

  const onTextChange = (e) => {
    setNewUsername(e.target.value);
  };

  const submitUsername = () => {
    if(newUsername) {
      onLogin(newUsername);
      setNewUsername('');
    }
  };

  const onKeyUp = (e) => {
    if(e.key === 'Enter') {
      submitUsername();
    }
  };

  return (
    <div className="login-panel">
        <h2 className="title">Login for Chat</h2>     
        <div className="validate-panel">
            <label className="label">User Name :</label>
            <input className="login-username" type='text'
                onChange={onTextChange}
                onKeyUp={onKeyUp}
                value={newUsername}
            />
            <button className="login-button" 
                onClick={submitUsername}
                >Login</button>
        </div>
    </div>
  );
};

export default Login;
