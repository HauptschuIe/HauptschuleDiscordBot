
module.exports = {
  name: 'help',
  description: 'returns an emote',

  execute(message) {

    const monkaS = message.guild.emojis.find(emoji => emoji.name === "monkaS");
    return message.channel.send(`${monkaS}`);

  },
};
