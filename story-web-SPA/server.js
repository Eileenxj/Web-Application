const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 5000;
const usersSession = {};

const stories = require('./stories');
app.use(cookieParser());
app.use(express.static('./build'));
//RESTful Service: to login 
app.post('/session', express.json(), (req, res) => {
    const { username } = req.body;
    // chat.addUser({username});
    // This is a poor way of making a sessionId, but it does work
    const sessionId = Math.floor( Date.now() + (Math.random() * 10000)) + username;
    // record this user as logged in
    usersSession[sessionId] = {username};
    // Set a cookie with that value on the response
    res.cookie('session', sessionId, {
      sameSite: 'Strict', 
    });
    res.json({sessionId});
});

//RESTful Service:  to get the list of stories 
app.get('/allStories',(req, res) => {
  const sessionId = req.cookies && req.cookies.session;
  if(!sessionId) {//the username is blank
      res.status(401).json({ error: " You must be logged in " });
  } else if (!usersSession[sessionId]) { 
      res.status(403).json({ error: 'You do not have a valid session' });
      return;  
  } else {
      res.json(stories.storiyList);
  }
});


//RESTful Service:  to post one new story 
app.post('/allStories',express.json(), (req, res) => {
    const sessionId = req.cookies && req.cookies.session;  
    const creator = req.body.username;
    const timestamp = new Date();
    const title = req.body.newTitle;
    const text = req.body.newText; 
    const description = req.body.newDexcription;
    const amountOfLikes = 0;

    if(!sessionId) {//the username is blank
        res.status(401).json({ error: " You must be logged in " });
    } else if (!usersSession[sessionId]) { 
        res.status(403).json({ error: 'You do not have a valid session' });
        return;  
    } 
    if(title && text){     
        stories.addStory({ title, description, text, amountOfLikes, creator, timestamp});
        res.json(stories.storiyList);
    }  else {
        res.status(400).json({ error: " You can not post empty story " });
    }
});

//RESTful Service:  to read a story 
app.get('/story/:id',(req, res) => {
  const id = req.params.id;
  const sessionId = req.cookies && req.cookies.session;
  if(!sessionId) {//the username is blank
      res.status(401).json({ error: " You must be logged in " });
  } else if (!usersSession[sessionId]) { 
      res.status(403).json({ error: 'You do not have a valid session' });
      return;  
  } else {
    const storyid = parseInt(id)-1;
    res.json(stories.storiyList[storyid]);
      
  }
});

app.post('/story/:id', express.json(), (req, res) => {
  const id = req.params.id;
  const sessionId = req.cookies && req.cookies.session;
  if(!sessionId) {//the username is blank
      res.status(401).json({ error: " You must be logged in " });
  } else if (!usersSession[sessionId]) { 
      res.status(403).json({ error: 'You do not have a valid session' });
      return;  
  } else {
    const storyid = parseInt(id)-1;
    stories.addAmountofLikes(storyid);
    res.json(stories.storiyList[storyid]);
  }
});

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
