const db = require('quick.db');
const Discord = require('discord.js');

exports.run = async (bot, message, args) => {

        let items = await db.fetch(message.author.id);
        if(items === null) items = "Você ainda nao comprou nada, digite rz/shop" // troque o rz/ pelo seu prefixo

        const Embed = new Discord.MessageEmbed()
        .setColor('BLACK')
        .addField('Invetario', items)

        message.channel.send(Embed);
}
