
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
"cunt",
"motherfucker",
"jew kill",
"real golam",
"real golaam",
"real golaaam",
"nigger",
"niggger",
"kike",
"nigga",
"niggar",
"jewkiller",
"testword123"];
const set2 = new Set([
	"golam",
	"golaam",
	"golaaam",
]);

const PREFIX = '!';

clbot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}
 
bot.on('ready', () => {
    console.log("The bot is active and ready to go!");
});
 
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
 
        case "ping":
            bot.commands.get('ping').execute(message, args);
        break;
 
        case "hello":
            bot.commands.get('hello').execute(message, args);
        break;
    }
 
});

	// Log our bot in using the token from https://discordapp.com/developers/applications/me
	clbot.login(token);
