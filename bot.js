// packages
require('dotenv').config();
const { Client, Intents } = require('discord.js');

// controllers
const { initMessages } = require('./controllers/messages.js');
const { initCommands } = require('./controllers/commands.js');
const { initMusicPlayer } = require('./controllers/musicPlayer.js');

// init discord client
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES],
});

const settings = {
  prefix: '?',
  bot_token: process.env.BOT_TOKEN,
};

// on ready
client.on('ready', () => {
  console.log('Ready for duty');
});

//* init functionalities
initMessages(client);
initCommands(client);
initMusicPlayer(client, settings.prefix);

// login bot
client.login(settings.bot_token);
