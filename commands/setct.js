module.exports = {
  name: 'setct',
  description: 'Rename/set channel topic',

  execute(message, args) {

    if(!args[1]){
      const topic = " ";

    }else{
      const topic = String(args[0]);
    }

    message.channel.setTopic(topic)
    .catch(console.error);
    return message.channel.send('Channel topic has been changed to ' + topic);

  },
};
