import React from 'react'

function MessageArea({username, userlist, messagelist}) {

    const userList =  Object.values(userlist).map( (user) => 
        <li key={user.toString()}>
          <div className="user">
            <span className="username">{user}</span>
          </div>
        </li>
        )

    const messageList = Object.values(messagelist).map( message => 
        <li key={message.id}>
            <div className="message">
              <div className="meta-info">
                <div className="sender-info">
                  <span className="username" id="username">{message.sender}</span>
                </div>
                <div className="message-info">
                  <span className="timestamp">{new Date( message.timestamp ).toLocaleTimeString()}</span>
                </div>
              </div>
                <p className="message-text">{message.text}</p>          
            </div>
        </li>
        )

    return (
           
            <div className="chat-panel">
                <div className="current-user">
                    <p className="current-username">
                        <label>Current Username: </label>
                        <span>{username}</span >
                    </p>
                </div>
                <ul className="users">
                    {userList}
                </ul>
                <ol className="messages">
                    {messageList}
                </ol>
            </div>             

    )
    
}

export default MessageArea;
