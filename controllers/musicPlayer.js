const { RepeatMode, Player } = require('discord-music-player');

exports.initMusicPlayer = (client, prefix) => {
  const player = new Player(client, {
    leaveOnEmpty: false, // This options are optional.
  });
  // You can define the Player as *client.player* to easly access it.
  client.player = player;

  client.player
    // Emitted when channel was empty.
    .on('channelEmpty', (queue) => console.log(`Everyone left the Voice Channel, queue ended.`))
    // Emitted when a song was added to the queue.
    .on('songAdd', (queue, song) => console.log(`Song ${song} was added to the queue.`))
    // Emitted when a playlist was added to the queue.
    .on('playlistAdd', (queue, playlist) => console.log(`Playlist ${playlist} with ${playlist.songs.length} was added to the queue.`))
    // Emitted when there was no more music to play.
    .on('queueDestroyed', (queue) => console.log(`The queue was destroyed.`))
    // Emitted when the queue was destroyed (either by ending or stopping).
    .on('queueEnd', (queue) => console.log(`The queue has ended.`))
    // Emitted when a song changed.
    .on('songChanged', (queue, newSong, oldSong) => console.log(`${newSong} is now playing.`))
    // Emitted when a first song in the queue started playing.
    .on('songFirst', (queue, song) => console.log(`Started playing ${song}.`))
    // Emitted when someone disconnected the bot from the channel.
    .on('clientDisconnect', (queue) => console.log(`I was kicked from the Voice Channel, queue ended.`))
    // Emitted when deafenOnJoin is true and the bot was undeafened
    .on('clientUndeafen', (queue) => console.log(`I got undefeanded.`))
    // Emitted when there was an error in runtime
    .on('error', (error, queue) => {
      console.log(`Error: ${error} in ${queue.guild.name}`);
    });

  client.on('messageCreate', async (message) => {
    if (message.content[0] == '?') {
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift();
      console.log(command);
      let guildQueue = client.player.getQueue(message.guild.id);

      switch (command.toLowerCase()) {
        case 'play':
          let queue = client.player.createQueue(message.guild.id);
          await queue.join(message.member.voice.channel);
          let song = await queue.play(args.join(' ')).catch((_) => {
            if (!guildQueue) queue.stop();
          });
          break;
        case 'stop':
          guildQueue.stop();
          break;
        case 'skip':
          guildQueue.skip();
          break;
        case 'setVolume':
          guildQueue.setVolume(parseInt(args[0]));
          break;
        case 'clearQueue':
          guildQueue.clearQueue();
          break;
        case 'shuffle':
          guildQueue.shuffle();
          break;
        case 'getQueue':
          console.log(guildQueue);
          break;
        case 'getVolume':
          console.log(guildQueue.volume);
          break;
        case 'nowPlaying':
          console.log(`Now playing: ${guildQueue.nowPlaying}`);
          break;
        case 'resume':
          guildQueue.setPaused(false);
          break;
        case 'pause':
          guildQueue.setPaused(true);
          break;

        default:
          break;
      }
    }
  });
};
