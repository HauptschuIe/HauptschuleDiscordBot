module.exports = {
	name: 'setct',
	description: 'Rename/set channel topic',

	execute(message, args) {

    message.channel.setTopic(agrs[1]);
    return message.channel.send('Channel topic has been changed to ' + args[1]);

	},
};