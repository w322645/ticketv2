const { Client, Intents } = require('discord.js');

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.config = require('./config');

require('./src/loader');

client.login("MTA2MjE2Nzc5MTAxODQ1MDk5NQ.GhVqoS.-0XVrGeWqQHseKo46ksRqrq8s41jOfX7WQCVYM")