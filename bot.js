const Discord = require("discord.js");
const client = new Discord.Client();

await new ModernEmbedBuilder
{
    Content = ("this `supports` __a__ **subset** *of* ~~markdown~~ 😃 ```js\nfunction foo(bar) {\n  console.log(bar);\n}\n\nfoo(1);```"),
    Title = "title ~~(did you know you can have markdown here too?)~~",
    Description = "this supports [named links](https://discordapp.com) on top of the previously shown subset of markdown. ```\nyes, even code blocks```",
    Url = "https://discordapp.com",
    Color = 0xD3CF13,
    Timestamp = "2018-01-31T17:52:18.547Z",
    Footer = ("footer text", "https://cdn.discordapp.com/embed/avatars/0.png"),
    ThumbnailUrl = "https://cdn.discordapp.com/embed/avatars/0.png",
    ImageUrl = "https://cdn.discordapp.com/embed/avatars/0.png",
    Author = ("author name", "https://discordapp.com", "https://cdn.discordapp.com/embed/avatars/0.png"),
    Fields = 
    {
        ("🤔", "some of these properties have certain limits...")
        ("😱", "try exceeding some of them!")
        ("🙄", "an informative error should show up, and this view will remain as-is until all issues are fixed")
        ("<:thonkang:219069250692841473>", "these last two", inline: true)
        ("<:thonkang:219069250692841473>", "are inline fields", inline: true)
    }
}.Send(message);
           
client.login(process.env.BOT_TOKEN);
