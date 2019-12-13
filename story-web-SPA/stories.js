const makeId = ( () => {
    let count = 1;
    return () => count++;
  })();

const users = {
    "TaliDali" : "TaliDali",
    "CitrusChickadee" : "CitrusChickadee",
    "Dougie Zerts" : "Dougie Zerts"
}

const storyList = [
    {
        id: makeId(),
        title: "Tutoring Tina",
        description: "A sneak peek at the inner workings of an exhausted tutor",
        text: "I just don't get it, she huffed, if the top is positive, and the bottom is negative, then how is the number positive? Well, you must have gotten it wrong then, I replied, because it worked when I did it.Well that was a mistake. Tina screws up her face and lets out a wail fit for a car chase.Moooom, he said I'm stupid she cries.That's not even close to what I said I hiss to her, but it's no use. Mom exits her office to glare at me.Aiden, that is not an acceptable way to talk to your sistershe states.It's the last time, I tell myself, gritting my teeth and stewing silently, glaring hard enough into the paper that maybe, just maybe, it'll catch fire and I'll be free of this stupid problem she doesn't get. I'm never teaching that brat anything again.Right, I answer myself. That is, until Mom offers a better deal.I scowl at my own realisation. I can't help it, Mom's a lawyer and I'm a sucker.Last time, I got out of an entire week of dishes for just half an hour of Tina-ville.This time, it had been the enticing opportunity of a whole hour's extension to my curfew, any night that I may choose this month, for whatever reason I deem fit.That's it, I promise myself. Next time, you ask for it. You demand it. Turn the tables, and let everyone understand the horror of tutoring Tina.Next time, I think to myself, Next time, I'm making Mom take upon herself a tutoring session with Tina.I grin evilly at the devilish math problem, ready, waiting, plotting my revenge.",
        amountOfLikes: 1262,
        creator : "TaliDali",
        timestamp : "2019-04-01 19:22:00"
    },

    {
        id: makeId(),
        title: "Headless",
        description: "Abby gets a little more than she expected when an experiment with her toys goes wrong.",
        text: "I just don't get it, she huffed, if the top is positive, and the bottom is negative, then how is the number positive? Well, you must have gotten it wrong then, I replied, because it worked when I did it.Well that was a mistake. Tina screws up her face and lets out a wail fit for a car chase.Moooom, he said I'm stupid she cries.That's not even close to what I said I hiss to her, but it's no use. Mom exits her office to glare at me.Aiden, that is not an acceptable way to talk to your sistershe states.It's the last time, I tell myself, gritting my teeth and stewing silently, glaring hard enough into the paper that maybe, just maybe, it'll catch fire and I'll be free of this stupid problem she doesn't get. I'm never teaching that brat anything again.Right, I answer myself. That is, until Mom offers a better deal.I scowl at my own realisation. I can't help it, Mom's a lawyer and I'm a sucker.Last time, I got out of an entire week of dishes for just half an hour of Tina-ville.This time, it had been the enticing opportunity of a whole hour's extension to my curfew, any night that I may choose this month, for whatever reason I deem fit.That's it, I promise myself. Next time, you ask for it. You demand it. Turn the tables, and let everyone understand the horror of tutoring Tina.Next time, I think to myself, Next time, I'm making Mom take upon herself a tutoring session with Tina.I grin evilly at the devilish math problem, ready, waiting, plotting my revenge.",
        amountOfLikes: 1090,
        creator : "CitrusChickadee",
        timestamp : "2019-03-01 19:21:00"
    },

    {
        id: makeId(),
        title: "TComfortable Shoes",
        description: "A barefoot Jenny adventure. She appears in a TV commercial-for shoes! Damascus MD as a real city outside of Washington DC. My sister used to live there.",
        text:"I starred in a TV commercial! Here's how it happened:A man came into my office, one day. Barefoot Jenny?That's me.Hi. My name is Joe Randolph. I own a shoe company called Comfortable Shoes™. As the name implies, we manufacture the most comfortable shoes your feet will ever wear!He gave me his card.That's a bold statement to make!We back it 100%.OK, so how can I help you?I have a proposal—so to speak: We're planning to run some ads, soon. And I'd like you to star in them!This shocked me! But, why? I don't wear shoes, that much!And, that's the point! My wife and I were thinking that you would be perfect for it BECAUSE you like to go barefooted! How's this for a slogan: 'Comfortable Shoes™-more comfortable than bare feet!'I nodded. That has promise! Would you mind if I think it over, a bit?Certainly. 'However, I've recently discovered shoes that are so comfortable, I may become a shoe convert!(She displays a pair of sandals.)In fact, they are so comfortable, they're called Comfortable Shoes™.(They magically appear on her feet.)They are made from a special soft leather that is kind to your tootsies. And they are proudly made in a factory in Damascus MD, a city outside of Washington DC. They can be worn both with socks,(She is shown wearing socks with the shoes.)Or au natural.(She is again shown with the shoes without socks.)So, buy a pair of Comfortable Shoes™; you may never go barefooted again!Announcer—Comfortable Shoes™-more comfortable than bare feet!Aside from the TV ad, I also posed for some print ads. They showed two shots of me—one barefoot, the other with the shoes on.The money really helped. And the publicity did, too; I got some case, as a direct result of the ads. Aside from the $2000, I also got a DVD of the ad. And I got two free pairs of the sandals, as well.'They're nice—but I still prefer to go barefooted!Sadly, the company didn't do so well, and they went out of business, two years later. However, I remained friends with Joe Randolph and his wife.'But there's one thing I must tell you: We're willing to offer you $2000 to do it.I'll do it!Wonderful!I went to their headquarters, the next day. I met his wife and the rest of the staff. We negotiated details, and I signed a contract.On Monday the next week. I went to the studio and filmed the ad.Comfortable Shoes™ TV Ad:(Jenny is sitting at a desk, her bare feet propped up.)Jenny—Hello. My name is Barefoot Jenny, and I'm a private detective. As my name suggests, I am usually barefooted.",
        amountOfLikes: 1091,
        creator : "Dougie Zerts",
        timestamp :"2019-02-01 19:20:00"
    },
] 
    
function addUser({ username }) {    
    if( !users[username] ) { 
        users[username] = username;
    }   
}

function addStory ({ title, description, text, amountOfLikes, creator, timestamp}) {
    storyList.push({
        id: makeId(),
        title, 
        description: description, 
        text,
        amountOfLikes,  
        creator, 
        timestamp
    });
    
}

function addAmountofLikes(id) {    
    if(storyList[id]) {
        const newAmountOfLikes = storyList[id].amountOfLikes + 1;
        storyList[id].amountOfLikes= newAmountOfLikes;       
    }
}

const stories = {
    users,
    storiyList: storyList,
    addStory,
    addUser,
    addAmountofLikes
};

module.exports = stories;