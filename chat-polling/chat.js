const makeId = ( () => {
    let count = 1;
    return () => count++;
  })();

const users = {
    "Amit": "Amit",
    "Bao": "Bao"
  };
    
const messages = [
{
    id: makeId(),
    sender: "Amit",
    timestamp: new Date("2019-01-01 19:20:00"),
    text: "You up?",
},
{
    id: makeId(),
    sender: "Bao",
    timestamp: new Date("2019-01-01 19:21:00"),
    text: "Yeah, still working on this INFO6250 work, but I keep getting distracted by cat videos",
},
{
    id: makeId(),
    sender: "Amit",
    timestamp: new Date("2019-01-01 19:22:00"),
    text: "Oh~! Fighting!",
},
];

function addUser({ username }) {    
    if( !users[username] ) { 
        users[username] = username;
    }   
}

function removeUser({username}) {
    delete users[username];
}

function addMessage({ sender, timestamp, text }) {
    messages.push({
        id: makeId(),
        sender,
        timestamp,
        text
    });
}

const chat = {
    users,
    messages,
    addUser,
    removeUser,
    addMessage,
};
  
module.exports = chat;