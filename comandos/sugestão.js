const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
const content = args.join(" ");

if (!args[0]) {
  return message.channel.send(`${message.author.username}, escreva a sugestão após o comando.`)
} else if (content.length > 1000) {
  return message.channel.send(`${message.author.username}, me de uma sugestão com 1000 caracteres no maximo!!`);
} else {
  var canal = message.guild.channels.cache.find(ch => ch.id === "id do canal onde a sugestão sera enviada");
  const msg = await canal.send(
    new Discord.MessageEmbed()
    .setColor("#FFFFF1")
    .addField("Autor:", message.author)
    .addField("Sugestão", content)
    .setFooter("ID do Autor: " + message.author.id)
    .setTimestamp()
  );
  await message.channel.send(`${message.author} sucesso, mensagem enviada!`);

  const emojis = ["✔️", "❎"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
}
}
