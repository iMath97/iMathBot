const Joke = require('../commands/Joke.js');
const Meme = require('../commands/Meme.js');

exports.initCommands = (client, prefix) => {
  client.on('messageCreate', (command) => {
    let role;
    let member;

    const args = command.content.slice(prefix.length).trim().split(/ +/g);
    const commandSearch = args.shift();

    switch (commandSearch.toLowerCase()) {
      case 'joke':
        const joke = new Joke();
        joke.getJoke(command);
        break;
      case 'commands':
        command.reply({
          content:
            "All commands start with '?'. \n \n List of administrative commands: \n - ?participate (name of server): join a server \n - ?retire (name of server): leave a server \n \n List of basic commands: \n - ?joke: sends a funny joke \n - ?meme: sends a meme. \n \n List of musicplayer commands: \n - ?play (title or link): play a song. \n - ?stop: stop playing songs. \n - ?skip: skip the current song. \n - ?pause: pause current song. \n - ?resume: resume current song. \n - ?shuffle: shuffle the songs in the queue.",
        });
        break;

      case 'meme':
        const meme = new Meme();
        meme.getMeme(command);
        break;
      case 'participate':
        console.log(args);
        if (args[0].toLowerCase() != 'admin' && args[0].toLowerCase() != 'imath') {
          role = command.guild.roles.cache.find((r) => r.name == args[0]);
          member = command.member;

          member.roles.add(role).catch(console.error);

          command.reply({
            content: `You have joined the ${args[0]} role.`,
          });
        } else {
          command.reply({
            content: 'You are not authorized to access this role!',
          });
        }
        break;
      case 'retire':
        if (args[0].toLowerCase() != 'admin' && args[0].toLowerCase() != 'imath') {
          role = command.guild.roles.cache.find((r) => r.name == args[0]);
          member = command.member;

          member.roles.remove(role).catch(console.error);

          command.reply({
            content: `You have retired from the ${args[0]} role.`,
          });
        } else {
          command.reply({
            content: 'You are not authorized to access this role!',
          });
        }
        break;

      default:
        break;
    }
  });
};
