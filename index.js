const tmi = require('tmi.js');
require('dotenv').config();

const client = new tmi.Client({
    connection: { reconnect: true},
    options: {debug: true},
    identity: {
        username: 'juliette_freire_bot',
        password: process.env.TWITCH_OAUTH
    },
    channels: ['marcellus_v', 'guzcalp']
});

client.connect()
.then(() => console.log('foi'))
.catch(e => console.log(e));

client.on('message', (channel, tags, message, self)=>{
    if(self) return;
    switch( message.toLowerCase){
        case '!cuzcuz':
            client.say(channel, `@${tags.username}, o cuscuz tá pronto!`)
            break;
        case '!chame':
            client.say(channel, "meu amigo pessoal @miguelchame")
            break;
    }
})
