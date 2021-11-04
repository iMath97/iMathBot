// packages
require('dotenv').config();
const { Client, Intents } = require('discord.js');

// controllers
const { initMessages } = require('./controllers/messages.js');
const { initCommands } = require('./controllers/commands.js');

// init discord client
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

// on ready
client.on('ready', () => {
  console.log('Ready for duty');
});

//* init functionalities
initMessages(client);
initCommands(client);

// login bot
client.login(process.env.BOT_TOKEN);
