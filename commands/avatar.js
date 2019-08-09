
module.exports = {
	name: 'avatar',
	description: 'Get the avatar URL of the tagged user, or your own avatar.',

	execute(message) {

  const PREFIX = '!';
  let args = message.content.substring(PREFIX.length).split(" ");

		if (!message.mentions.users.size && !args[1]) {
			const Discord = require('discord.js');
			const embed = new Discord.RichEmbed()
					.setTitle('Your avatar')
					.setURL(message.author.displayAvatarURL)
					.setColor(0xFFFFFF)
					.setImage(message.author.displayAvatarURL)
					message.channel.send(embed);

		} else if (!message.mentions.users.size && args[1]){
       return message.channel.send('Invalid username');
    }
  const user = message.mentions.users.first();
    if(user){
			const Discord = require('discord.js');
			const embed = new Discord.RichEmbed()
					.setTitle(`${user.username}'s avatar`)
					.setURL(user.displayAvatarURL)
					.setColor(0xFFFFFF)
					.setImage(user.displayAvatarURL)
					message.channel.send(embed);

    }
	},
};
