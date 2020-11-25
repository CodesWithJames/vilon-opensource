const { MessageEmbed } = require("discord.js")




const discord = require("discord.js");



module.exports = {
  name: "support",
  usage: "Support <message>",
  description: "Send your support message to owner via dms. Abuse will mean blacklist from bot.",
  category: "main",
  run: (client, message, args) => {
    
     let str = message.content.slice(client.prefix.length + 2 + 1);
    if (!args[0])
      return message.channel.send(`You did not specify your support message!`);
   client.users.cache.get
      .get("588000121287868417")
      .send(
        new MessageEmbed()
          .setThumbnail(message.author.displayAvatarURL())
          .setTitle(`New support message from ${message.author.tag}!`)
          .setDescription(str)
          .setColor("ff2050")
      );
  },
};