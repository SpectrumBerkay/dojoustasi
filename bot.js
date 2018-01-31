const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = ("fbebsi");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

  
client.on('message', msg => {
  
  var args = msg.content.substring(prefix.lenght).split(" ");
  
  switch (args[0].toLowerCase()) {
  
  case "fuccc":
    var role = member.guild.roles.find('name', 'Beginners');

member.addRole(role)   
  }
});
           
client.login(process.env.BOT_TOKEN);
