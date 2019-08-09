
// Extract the required classes from the discord.js module
const fs = require('fs');
// require the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const clbot = new Discord.Client();
// token is saved on Heroku
const token = process.env.token;

const PREFIX = '!';

clbot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	clbot.commands.set(command.name, command);
}

// when the client is ready, run this code
// this event will only trigger one time after logging in
clbot.on('ready', () =>{
	console.log('Abfahrt!');
	clbot.user.setPresence({
		game: {
			name: 'Dank Music',
			type: "LISTENING",
		}
	});
})

// when an user joins the server a welcome message will be sent
clbot.on('guildMemberAdd', member =>{
	let guild = member.guild;
	var userCount = member.guild.memberCount;
	const channel = member.guild.channels.find(channel => channel.name === "haupts-emote-paradise");
	if(!channel) return;
	channel.send(`A new Movag appeared, ${member} this is already Movag no. ${userCount}!`)

});


clbot.on('message', message => {

	if (message.author.bot) return;

	const wordToReactTo1 = "movag";
	const wordToReactTo2 = "metin";
	const wordToReactTo3 = "you";

	// bot reacts/replies to messages containing the words above
		if(message.content.toLowerCase().includes(wordToReactTo1)){
			message.react(clbot.emojis.get("555480363351146530"));
			}
		if(message.content.toLowerCase().includes(wordToReactTo2)){
			message.react(clbot.emojis.get("518878496546881557"));
			}
		if(message.content.toLowerCase().includes(wordToReactTo3)){
			message.reply('no u');
			}

	if (!message.content.startsWith(PREFIX)) return;

let args = message.content.substring(PREFIX.length).split(" ");

	const command = args.shift().toLowerCase();

	if (!clbot.commands.has(command)) return;

	try {
		clbot.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
clbot.login(token);
