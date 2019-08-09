
// set for saving people for cooldown
const userUsedCommandRecently = new Set();

module.exports = {
	name: 'prune',
	description: 'prune up to 99 messages',

	execute(message, args) {

    const cmonBruh = message.guild.emojis.find(emoji => emoji.name === "cmonBruh");
    const amount = parseInt(args[0]) + 1;

    if (!message.member.roles.find(r => r.name === "Mods") && userUsedCommandRecently.has(message.author.id)){
      return message.reply(`you still do not have permissions to prune messages ${cmonBruh}`);


    } else if (!message.member.roles.find(r => r.name === "Mods") && !userUsedCommandRecently.has(message.author.id)) {
      userUsedCommandRecently.add(message.author.id)
      setTimeout(() => {
      userUsedCommandRecently.delete(message.author.id)
      }, 30000);
      return message.reply('you do not have permissions to prune messages.');
        }

	if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		} else if (amount <= 1) {
			return message.reply('you need to input a number between 1 and 99.');
		} else if (amount > 100) {
      message.channel.bulkDelete(99, true).catch(err => {
  			console.error(err);
      });
    }

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
		});
	},
};
