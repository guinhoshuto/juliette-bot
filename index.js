const tmi = require('tmi.js');
require('dotenv').config();

const client = new tmi.Client({
    options: {debug: true},
    identity: {
        username: 'juliette',
        password: process.env.TWITCH_OAUTH
    },
    channels: ['marcellus_v', 'guzcalp']
});

client.connect();

client.on('message', (channel, tags, message, self)=>{
    if(self) return;
    if(message.toLowerCase === '!cuzcuz'){
        client.say(channel, `@${tags.username}, o cuscuz tá pronto!`)
    }
})
