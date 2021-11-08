const axios = require('axios');

class Joke {
  constructor() {}

  getJoke(command) {
    var options = {
      method: 'GET',
      url: 'https://dad-jokes.p.rapidapi.com/random/joke',
      headers: {
        'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
        'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        command.reply({
          content: response.data.body[0].setup + '\n \n' + response.data.body[0].punchline,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }
}

module.exports = Joke;
