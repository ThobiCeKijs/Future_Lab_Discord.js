const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif',
  'https://acegif.com/wp-content/uploads/anime-kiss-m.gif',
  'http://24.media.tumblr.com/56614f2adbcecd04ab527ce1a067f297/tumblr_mn64lwbR0w1rsbc8eo1_500.gif',
  'https://data.whicdn.com/images/173117476/original.gif',
  'https://cdn.statically.io/img/gifimage.net/wp-content/uploads/2017/09/anime-forehead-kiss-gif-5.gif',
 'https://i.imgur.com/YbNv10F.gif',
 'https://i.imgur.com/sGVgr74.gif',
 'https://i.imgur.com/TItLfqh.gif',
 'https://i.imgur.com/lmY5soG.gif',
 'https://i.imgur.com/IgGumrf.gif',
 'https://i.imgur.com/KKAMPju.gif'

 ];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para beijar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Kiss')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de beijar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Que belo beijo kkk')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
