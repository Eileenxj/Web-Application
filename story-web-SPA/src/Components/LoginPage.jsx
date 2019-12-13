import React, { useState } from 'react';
import Logo from './Logo';

function LoginPage({ onLogin}) {
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
        <div className="login-page">
            <div className="navigation-bar">
            <Logo/>
            </div>
            <div className="login-panel">        
                <div className="login-container">
                    <div className="content-box">
                        <input type="text" placeholder="username" className="username"
                        onChange={onTextChange}
                        onKeyUp={onKeyUp}
                        value={newUsername}
                        />
                        <button type="submit" className="login-button"
                        onClick={submitUsername}
                        >
                        Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;