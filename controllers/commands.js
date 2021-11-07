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
      case '?commands':
        command.reply({
          content: "All commands start with '?'. \n \n List of basic commands: \n - ?joke: sends a funny joke \n - ?meme: sends a meme. \n \n List of musicplayer commands: \n - ?play (title or link): play a song. \n - ?stop: stop playing songs. \n - ?skip: skip the current song. \n - ?pause: pause current song. \n - ?resume: resume current song. \n - ?shuffle: shuffle the songs in the queue.",
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
