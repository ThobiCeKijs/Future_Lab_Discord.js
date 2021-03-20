const ms = require('ms');
const config = require("../config.json")

exports.run = async (client, message, args) => {

  let Timer = args[0];

  if (!args[0]){
    return message.reply(`escreva o tempo! Ex.: \`${config.prefix}lembrete 10s\``);
  }

  if (args[0] <= 0){
    return message.channel.send(`escreva um tempo maior que zero!`);
  }

  message.channel.send("Irei te chamar em: " + `\`${ms(ms(Timer), {long: true})}\``)

  setTimeout(function(){
    message.channel.send(`BIP BIP BIP! ${message.author}`)

  }, ms(Timer));
}
