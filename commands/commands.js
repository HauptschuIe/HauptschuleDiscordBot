
module.exports = {
	name: 'commands',
	description: 'Returns embed with command information',

	execute(message, args) {

    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    		.setTitle('List of commands')
				.setURL('https://discord.js.org/')
    		.addField('!avatar', 'fetches your avatar')
    		.addField('!avatar @user', 'fetches the tagged users avatar')
        .addField('!prune x', 'prunes the last x messages (mod only)')
				.addField('!github', 'hauptschulebot on Github')
				.addField('!setct', 'Set channel topic, remove channel topic w/o argument (mod only)')
    		.setColor(0xFFFFFF)
    		.setThumbnail(message.guild.iconURL)

    		message.channel.send(embed);

	},
};
