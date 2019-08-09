
module.exports = {
	name: 'github',
	description: 'Show the Github repository',

	execute(message) {

    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
        .setAuthor('Click me hard', 'https://cdn.discordapp.com/emojis/452507095884103690.png', 'https://github.com/HauptschuIe/hauptschulebotdiscord')
        .setColor(0xFFFFFF)

        message.channel.send(embed);

	},
};
