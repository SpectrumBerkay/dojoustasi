const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = ("fbebsi");

client.on('ready', () => {
  console.log(`Bot Working....`);
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === prefix + 'ping') {
    msg.reply('Pong! **' + client.ping + '** ms');
  }
 if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam!')
  }
  if (msg.content.toLowerCase() === 'merhaba') {
    msg.reply('Aleyküm Selam!')
  }
  if (msg.content.toLowerCase() === 'fotoğrafım ne') {
    msg.reply(msg.author.avatarURL)
  }
  if (msg.content.toLowerCase() === 'selamün aleyküm') {
    msg.reply('Aleyküm Selam!')
  }
  if (msg.content.toLowerCase() === 'bot komutları') {
    msg.channel.sendMessage('fbebsiping,fbebsibot')
  }
  if (msg.content.toLowerCase() === 'embedyaz') {
    msg.channel.sendMessage('embed')
  }
  
  var args = msg.content.substring(prefix.lenght).split(" ");
  
  switch (args[0].toLowerCase()) {
  
  case "embed":
      var embed = new Discord.RichEmbed()
      .addField("Team DOJO", "Designed by", true)
      .addField("Hoşgeldiniz", "Spectrum!", true)
      .setColor(0xFFFFFF)
      .setFooter("Spectrum! ©")
      .setThumbnail(msg.author.avatarURL)
 msg.channel.sendEmbed(embed);
 break;
  }
  
client.on('guildMemberAdd', member => {
  console.log('User ' + member.username + ' joined')
  
var role = member.guild.roles.find('name', 'Beginners');

member.addRole(role)   
}  

client.login(process.env.BOT_TOKEN);
