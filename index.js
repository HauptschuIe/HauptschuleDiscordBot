
// Extract the required classes from the discord.js module
const fs = require('fs');
// require the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const clbot = new Discord.Client();
// token is saved on Heroku
const token = process.env.token;
// set for saving phrases which lead to an auto-ban
var array1 = ["thats jew",
"kill jew",
"jew kill",
"jew kill",
"real golam",
"real golaam",
"real golaaam",
"nigger",
"niggger",
"kike",
"nigga",
"niggar",
"jewkiller"];
const set2 = new Set([
	"golam",
	"golaam",
	"golaaam",
]);

const PREFIX = '!';

clbot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

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
	const PogChamp = member.guild.emojis.find(emoji => emoji.name === "PogChamp");
	let guild = member.guild;
	var userCount = member.guild.memberCount;
	const channel = member.guild.channels.find(channel => channel.name === "united-antichess-security-council");
	if(!channel) return;

	channel.send(`A new Movag appeared, ${member} this is already Movag no. ${userCount}! ${PogChamp}`)

	// ban users having one of the Strings in set2 in their username
	if(set2.has(member.user.tag)){
		if(member){
			member.ban({
				reason: 'Nickname',
			}).catch(err => {
				console.error(err);
			});
			const channel = message.guild.channels.find(channel => channel.name === "united-antichess-security-council");
			if(!channel) return;
			channel.send(`${member} has been banned. Reason: Nickname`)
		}
	}

});


clbot.on('message', message => {

	if (message.author.bot) return;

	if (message.author.id === "161099739847327744") {
		message.react(clbot.emojis.get("696775593467052163"));
	}
		
	const wordToReactTo1 = "movag";
	const wordToReactTo2 = "metin";
	const wordToReactTo3 = "boomer";

	// bot reacts/replies to messages containing the words above
	if(message.content.toLowerCase().includes(wordToReactTo1)){
		message.react(clbot.emojis.get("639186943590006825"));
	}
	if(message.content.toLowerCase().includes(wordToReactTo2)){
		message.react(clbot.emojis.get("639186943590006825"));
	}
	if(message.content.toLowerCase().includes(wordToReactTo3)){
		message.react(clbot.emojis.get("639186943590006825"));
	}

	// delete messages in #story containing more than one word
/* 	const StoryChannel = message.guild.channels.get("id", 453514739595739136)
	const cmonBruh = message.guild.emojis.find(emoji => emoji.name === "cmonBruh");
	if(!StoryChannel) {
		return;
	}else{
		if(message.content.includes(" ") || message.content.length > 20){
			// message.channel.bulkDelete(1, true).catch(err => {
			// 	console.error(err);
			// });
			message.reply(`Invalid message ${cmonBruh}`)
			.then(msg => {
				msg.delete(10000)

			})
			.catch(err => {
				console.error(err);
			});
		}
	} */

	// auto-ban users by message
	array1.forEach(function(item){
		if(message.content.toLowerCase().includes(item)){
			const member = message.guild.member(message.author);
			if(member){
				member.ban({
					reason: 'Message',
				}).catch(err => {
					console.error(err);
				});
				const channel = message.guild.channels.find(channel => channel.name === "united-antichess-security-council");
				if(!channel) return;
				channel.send(`${message.author} has been banned for saying "${message}"`)
			}
		}
	});



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
