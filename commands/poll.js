module.exports = {
	name: 'poll',
	description: 'creates a simple yes or no poll',

	execute(message) {

        const PREFIX = '!';
        let args = message.content.substring(PREFIX.length).split(" ");
      
              if (!args[1]) {
                  const Discord = require('discord.js');
                  const embed = new Discord.RichEmbed()
                          .setTitle('Initiate Poll')
                          .setDescription('!Poll to initiate a simple yes or no poll')
                          .setColor(0xFFC300)
                         
                          message.channel.send(embed);
      
              } else if (args[1]){
                const Discord = require('discord.js');
                let msgArgs = args.slice(1).join(" ");
               message.channel.send("📝" + "**" + msgArgs + "**").then(messageReaction => {
                   messageReaction.react("👍")
                   messageReaction.react("👎")

                   message.delete(3000).catch(console.error)
               });
               
             
          }
          break;
	},
};
