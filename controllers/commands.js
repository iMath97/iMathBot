const Joke = require('../commands/joke.js');

exports.initCommands = (client) => {
  client.on('messageCreate', (command) => {
    switch (command.content.toLowerCase()) {
      case '?grap':
        const joke = new Joke();
        command.reply({
          content: joke.getJoke(),
        });
        break;

      default:
        break;
    }
  });
};
