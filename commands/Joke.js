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
      'Wat is het toppunt van grofheid? \n \n Een mongooltje naar zijn kamer sturen en zeggen: “Kom maar terug als je weer normaal kunt doen',
      'Een man heeft een jackpot gewonnen en gaat helemaal opgewonden naar huis. “Truus, pak je koffers maar in” zegt de man. “Wat is er dan aan de hand?” vraagt zijn vrouw. “Ik heb 2 miljoen gewonnen met de lotto!” zegt de man met een opgewonden stem. “Wauw, dat is prachtig!” zegt zijn vrouw. ”Wat moet ik dan inpakken, winter of zomerkleding?” \n \n “Dat boeit me helemaal niks” zegt de man. “Als je nu maar gewoon opdondert”',
      'Een stel hebben samen 13 kinderen waarvan 12 blond haar hebben en blauwe ogen, een heeft zwart haar en bruine ogen en heet Hendrik. Op een dag ligt de vrouw van het stelletje op haar sterfbed en haar man zit dicht aan haar bed. De man zegt “Onze Hendrik is anders dan onze andere kinderen, heeft hij misschien een andere vader dan de rest?” Zijn vrouw zegt kortaf “Ja” “En..” zegt de man “wie is zijn vader dan?” Waarop zijn vrouw zegt “Jij!”',
      'Vandaag was er een stroomstoring in het winkelcentrum... \n \n Drie Belgen zaten 4 uur lang vast op de roltrap!',
      'Het is geel, vliegt tegen de muur, valt dood neer, maar vliegt even later weer verder. Rara, wat is het? \n\n Een reïnkanarie…',
      'Hoe noem je het als twee lesbiennes in bed liggen en er maar eentje zin heeft? \n\n 1 pot nat!',
      'De juf vraagt aan Olivia: “Ik ben mooi. Is deze zin tegenwoordige tijd of verleden tijd?” Waarop Olivia antwoordt: “Verleden tijd, juf.”',
      'Door welke Pokémon word je verkouden? \n\n Pikhatsjoe!',
      'Welke planeet is heel blij? \n\n Joepie-ter.',
    ];
  }

  getJoke() {
    return this.jokes[Math.floor(Math.random() * this.jokes.length)];
  }
}

module.exports = Joke;
