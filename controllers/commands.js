const Joke = require('../commands/Joke.js');
const Meme = require('../commands/Meme.js');

exports.initCommands = (client) => {
  client.on('messageCreate', (command) => {
    switch (command.content.toLowerCase()) {
      case '?joke':
        const joke = new Joke();
        command.reply({
          content: joke.getJoke(),
        });
        break;

      case '?meme':
        const meme = new Meme();
        meme.getMeme(command);
        break;

      default:
        break;
    }
  });
};
