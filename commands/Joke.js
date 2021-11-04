class Joke {
  constructor() {
    this.jokes = [
      'I went to a street where the houses were numbered 8k, 16k, 32k, 64k, 128k, 256k and 512k. It was a trip down Memory Lane.',
      '“Debugging” is like being the detective in a crime drama where you are also the murderer.',
      'The best thing about a Boolean is that even if you are wrong, you are only off by a bit.',
      'A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn’t.',
      'Why do Java programmers have to wear glasses? Because they don’t C#.',
      'What sits on your shoulder and says “Pieces of 7! Pieces of 7!”? A Parroty Error.',
      'When Apple employees die, does their life HTML5 in front of their eyes?',
      'Without requirements or design, programming is the art of adding bugs to an empty text file.',
      'Before software can be reusable it first has to be usable.',
      'I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.',
      'There are two ways to write error-free programs; only the third one works.',
    ];
  }

  getJoke() {
    return this.jokes[Math.floor(Math.random() * this.jokes.length)];
  }
}

module.exports = Joke;
