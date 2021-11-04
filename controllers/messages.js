const Message = require('../classes/Messages.js');

const messages = [
  { content: ['hallo', 'hi', 'hoi', 'hey', 'yo', 'yow'], reply: 'hii' },
  { content: 'wie is je meester?', reply: 'Mathias is mijn meester!' },
];

exports.initMessages = (client) => {
  messages.forEach((message) => {
    const newMessage = new Message(client, message.content, message.reply);
  });
};
