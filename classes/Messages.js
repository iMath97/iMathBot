class Message {
  constructor(client, msg, reply) {
    if (Array.isArray(msg)) {
      client.on('messageCreate', (message) => {
        if (msg.includes(message.content.toLowerCase())) {
          message.reply({
            content: reply,
          });
        }
      });
    } else {
      client.on('messageCreate', (message) => {
        if (message.content.toLowerCase() == msg) {
          message.reply({
            content: reply,
          });
        }
      });
    }
  }
}

module.exports = Message;
