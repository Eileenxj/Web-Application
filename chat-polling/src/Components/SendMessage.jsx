import React, { useState }  from 'react';

function SendMessage ({username, onSend, disabled}) {
    const [timestamp, setTimestamp] = useState('');
    const [text, setText] = useState('');
    
    const onTextChange = (e) => {
        setText(e.target.value);
      };

    const postMessage = () => {
        if(text) {
            setTimestamp(new Date());  
            onSend({username, timestamp, text});
            setText('');
        }
    };
    
    return (
        <div className="outgoing">
            <input type="hidden" name="username" value={username}/>
            <input className="to-send" type="text" placeholder="Enter message to send" name="text"
                onChange={onTextChange}
                value={text}
            />
            <button className="send-button" type="submit" 
                onClick={postMessage}
                disabled={disabled}
            >{ disabled ? 'Loading...' : 'Send'}</button>
        </div> 

    );

}

export default SendMessage;