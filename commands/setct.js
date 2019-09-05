
// set for saving people for cooldown
const userUsedCommandRecently = new Set();

module.exports = {
  name: 'setct',
  description: 'Rename/set channel topic',

  execute(message, args) {

    const cmonBruh = message.guild.emojis.find(emoji => emoji.name === "cmonBruh");
    const topic = message.content;
    const slicedTopic = message.content.slice(7, message.length)

    if (!message.member.roles.find(r => r.name === "Mods") && userUsedCommandRecently.has(message.author.id)){
      return message.reply(`you still do not have permissions to change the channel topic ${cmonBruh}`);

    } else if (!message.member.roles.find(r => r.name === "Mods") && !userUsedCommandRecently.has(message.author.id)) {
      userUsedCommandRecently.add(message.author.id)
      setTimeout(() => {
        userUsedCommandRecently.delete(message.author.id)
      }, 30000);
      return message.reply('you do not have permissions to change the channel topic.');
    }

    if(!args[0]){
      message.channel.setTopic(null).catch(err => {
        console.error(err);
      });
      return message.channel.send('Channel topic has been removed');

    }else if (slicedTopic){
      message.channel.setTopic(slicedTopic).catch(err => {
        console.error(err);
      });
      return message.channel.send('Channel topic has been changed to ' + slicedTopic);
    }

  },
};
