const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  var list = [
    "0%  [..........] Perfeito pra quem acredita em milagre...",
    "10% [█.........] Acho que não preciso nem falar...",
    "20% [██........] Se tiver bastante fé até que vai.",
    "30% [███.......] Quem sabe né...",
    "40% [████......] Acho melhor nem arriscar...",
    "50% [█████.....] Ou vai dar muito certo, ou MUITO errado",
    "60% [██████....] Será que tem futuro?",
    "70% [███████...] Acho que merece uma chance...",
    "80% [████████..] Tenta que da certo.",
    "90% [█████████..] Foram feitos um pro outro.",
    "100% [██████████] SUPER MATCH!",
  ];

  var rand = list[Math.floor(Math.random() * list.length)];

  const embed2 = new Discord.MessageEmbed()
    .setColor("#ff007f")
    .setTitle(":warning: **ERROR** :warning:")
    .setDescription(`Oops ${message.author} desculpe mas olhei até de baixo da minha cama! E não achei este usuario, ta parecendo o pai do Kira.`);

  if (!args[0])
    return message.channel.send(`
                :warning: **ERROR** :warning:
Oops ${message.author} desculpe mas olhei até de baixo da minha cama! E não achei este usuario, ta parecendo o pai do Kira.`);

  if (!args[1])
    return message.channel.send(`
                :warning: **ERROR** :warning:
Oops ${message.author} desculpe mas olhei até de baixo da minha cama! E não achei este usuario, ta parecendo o pai do Kira.`);

  const embed = new Discord.MessageEmbed()
    .setTitle("**Ship!**")
    .setColor("#ff007f")
    .setDescription(`Será que ${args[1]} tem chance com ${args[0]}?`)
    .setImage(`https://media4.giphy.com/media/hr3AZuH7Y8Dvba9jUf/giphy.gif`)
    .addField("Porcentagem", rand)
    .setTimestamp()
    .setFooter("Uow...será que temos alguma coisa aqui?");
  await message.channel.send(`${message.author}`, embed);
};
