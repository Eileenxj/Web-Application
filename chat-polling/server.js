const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 5000;

const chat = require('./chat');
const usersSession = {};
app.use(express.static('./build'));
app.use(cookieParser());
//RESTful services
app.get('/allUsers',(req, res) => {
    const sessionId = req.cookies && req.cookies.session;
    if(!sessionId ) {//the username is blank
        res.status(401).json({ error: " You must be logged in " });
        return;
    } else if ( !usersSession[sessionId] ) {
        res.status(403).json({ error: 'You do not have a valid session' });
        return;       
    } else {
        res.json(chat.users);
    }
});

app.get('/allMessages',(req, res) => {
    const sessionId = req.cookies && req.cookies.session;
    if(!sessionId) {//the username is blank
        res.status(401).json({ error: " You must be logged in " });
    } else if (!usersSession[sessionId]) { 
        res.status(403).json({ error: 'You do not have a valid session' });
        return;  
    } else {
        res.json(chat.messages);
    }
});

app.post('/allMessages', express.json({ extended: false }), (req, res) => {
    const sessionId = req.cookies && req.cookies.session;
    const {username} = req.query;  
    const sender = chat.users[username];
    const timestamp = new Date();
    const text = req.body.text; 

    if(!sessionId) {//the username is blank
        res.status(401).json({ error: " You must be logged in " });
    } else if (!usersSession[sessionId]) { 
        res.status(403).json({ error: 'You do not have a valid session' });
        return;  
    } 
    if(text){     
        chat.addMessage({sender,timestamp, text});  
        res.json(chat.messages);
    }  else {
        res.status(400).json({ error: " You can not send empty message " });
    }
});

app.post('/logout', express.json({ extended: false }), (req, res) => {
    const {username} = req.body;
    const sessionId = req.cookies && req.cookies.session;
    if(sessionId){     
        chat.removeUser({username}); 
        delete usersSession[sessionId];
        res.cookie('session', '');
        res.json(null);
    }  else {
        res.status(403).json({ error: " You are not an authorized user " });
    }
});

app.post('/session', express.json(), (req, res) => {
    const { username } = req.body;
    chat.addUser({username});
    // This is a poor way of making a sessionId, but it does work
    const sessionId = Math.floor( Date.now() + (Math.random() * 10000)) + username;
    // record this user as logged in
    usersSession[sessionId] = {username};
    // Set a cookie with that value on the response
    res.cookie('session', sessionId, {
      sameSite: 'Strict', // Does this cookie follow the SOP?
    });
    res.json({sessionId});
});

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
