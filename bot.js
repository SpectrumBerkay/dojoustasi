const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = ("fbebsi");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

  
client.on('guildMemberAdd', member => {
  console.log('User ' + member.username + ' joined')
  
case "embed":
  
var role = member.guild.roles.find('name', 'Beginners');

member.addRole(role)     
  }
});
           
client.login(process.env.BOT_TOKEN);
