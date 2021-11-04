const { MessageEmbed } = require('discord.js');

const axios = require('axios');

class Meme {
  constructor() {}

  getMeme(command) {
    axios
      .get('https://meme-api.herokuapp.com/gimme')
      .then(function (response) {
        // handle success
        const imgEmbed = new MessageEmbed().setDescription('A meme').setImage(response.data.preview[response.data.preview.length - 1]);
        command.channel.send({ embeds: [imgEmbed] });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {});
  }
}

module.exports = Meme;
