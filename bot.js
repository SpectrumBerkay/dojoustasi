const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = ("$");

client.on('ready', () => {
  console.log(`Bot Working....`);
});

client.on("message", async message => {

  if(command === 'userinfo') {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setDescription("This is the user info!");
    
    message.channel.sendEmbed(embed)
  }
});  

client.login(process.env.BOT_TOKEN);
