const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = ("fbebsi");

client.on('ready', () => {
  console.log(`Bot Working....`);
});
 

client.login(process.env.BOT_TOKEN);
