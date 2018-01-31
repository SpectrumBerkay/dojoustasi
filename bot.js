const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = ("$");

client.on('ready', () => {
  console.log(`Bot Working....`);
});

client.on("message", async message => {

  case "yay":
      var embed = new Discord.RichEmbed()
      .setAuthor(msg.author.username)
      .setColor(0xFFFFFF)
      .setFooter("Spectrum! ©")
      .setThumbnail(msg.author.avatarURL)
 msg.channel.sendEmbed(embed);
  }
});  

client.login(process.env.BOT_TOKEN);
