const Discord = require('discord.js');
const client = new Discord.Client();

// Bot Token neede
client.login("BotTokenNeeded");

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }else if(message.content === "Hello Bot") {
      message.reply("I am Admin Bot");
  }
});

client.login('your token'); // Put the bot toke here
