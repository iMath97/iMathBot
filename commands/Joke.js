class Joke {
  constructor() {
    this.jokes = [
      'Donald Trump Angela Merkel en een klein meisje zitten samen op een vliegtuig. \n ze zijn allemaal rustig aan het babbelen en het meisje is honderduit aan het vertellen hoe ze terug is van een schoolreis. \n Plots krijgen ze bericht van de piloot dat de motoren uitgevallen zijn en dat de inzittenden uit het vliegtuig moeten springen met een parachute. Als alle passagiers en de piloten gesprongen zijn blijven alleen Trump, Merkel, en het meisje over. \n Maar ze merken dat er nog maar twee parachutes zijn  voor drie mensen. Dus er ontstaat een discussie en  Trump zegt: ik ben de belangrijkste mens van Amerika dus ik vind dat ik als eerste moet springen. Die staat op loopt naar de deur en springt \n Alleen Angela Merkel en het meisje zijn nog over en Merkel zegt: ga maar, neem de laatste parachute maar het is mooi geweest voor mij. Het meisje loopt naar de deur en voordat ze springt roept ze: mevrouw Merkel er is nog een parachute over die sukkelaar is met mijn boekentas naar beneden gesprongen',
      'Q: what do you call a fake noodle? \n A: an im-pasta',
      'In een laboratorium heeft men eindelijk ontdekt wat er gebeurt als je schaamluizen zou kruisen met vuurvliegjes \n Dan krijg je een fakkeltocht in uw onderbroek',
      'Er zijn twee mannen die opgeroepen  worden voor medische controle voor hun legerdienst en ze spreken af om samen naar de kazerne te rijden. Ze beginnen te praten maar al snel merken ze dat ze liever afgekeurd worden.  Dus proberen ze iets te bedenken \n Later in de wachtzaal zegt de ene: ik heb idee ik steek een briefje van 100 euro in mijn kont en ik zeg dat ik last heb van aambeien. Dan word ik zeker afgekeurd. \n Die man gaat binnen de dokter onderzoekt hem volledig  ziet dat briefje van 100 zitten en zegt: ja ik zie het al afgekeurd! Die mens komt buiten en is natuurlijk heel blij want hij moet niet naar het leger \n Die vriend van hem begint te panikeren: help ik geen 100 euro bij ik steek een briefje 10 in mijn kont dat is even goed... hij gaat ook binnen de dokter onderzoekt hem ook volledig kijkt naar zijn kont en ziet dat briefje van 10 euro zitten: goedgekeurd zegt de dokter de man kijkt hem raar aan en zegt hoezo goedgekeurd? De man voor mij had ook last van aambeien net als ik \n Waarop de dokter zegt: ja maar bij hem was het wel tien keer erger',
    ];
  }

  getJoke(command) {
    const joke = this.jokes[Math.floor(Math.random() * this.jokes.length - 1)];

    command.reply({
      content: joke,
    });
  }
}

module.exports = Joke;
