const Discord = require("discord.js");


   exports.run = async (bot, message, args) => {

var list = [
'https://media1.tenor.com/images/42621cf33b44ca6a717d448b1223bccc/tenor.gif?itemid=15696850.gif',
'https://media1.tenor.com/images/49de17c6f21172b3abfaf5972fddf6d6/tenor.gif?itemid=10206784.gif',
'https://media1.tenor.com/images/f6f206307fa39c1407db881468d1a8c2/tenor.gif?itemid=19169875.gif',
'https://media1.tenor.com/images/df8af24e5756ecf4a4e8af0c9ea6499b/tenor.gif?itemid=4902917.gif',
'https://media1.tenor.com/images/0720ffb69ab479d3a00f2d4ac7e0510c/tenor.gif?itemid=10422113.gif',
'https://media1.tenor.com/images/9b408bd50a738f795bc7f3ceebd2b2cb/tenor.gif?itemid=17672480.gif',
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para socar!');
}

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Tapa forte')
        .setColor('RANDOM')
        .setDescription(`${message.author} acaba de socar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Treta?')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
