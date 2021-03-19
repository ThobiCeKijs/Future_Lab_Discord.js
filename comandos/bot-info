const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setDescription(`Olá ${message.author}, Abaixo está uma listinha sobre mim:`)
    .setTimestamp()
    .setFooter(`Comando feito por: ${message.author.username}`)
    .addFields(
        {
            name: 'Meu nome e minha #',
            value: `${client.user.tag}`,
            inline: true
        },
        {
            name: ' Servidores:',
            value: `Estou em **${client.guilds.cache.size}** servidores.`,
            inline: true
        },
        {
            name: 'Canais:',
            value: `Tenho **${client.channels.cache.size}** canais de texto.`,
            inline: true
        },
        {
            name: ' Usuários:',
            value: `Cuido de **${client.users.cache.size}** usuários.`,
            inline: true
        },
        {
            name: ' Meu ping:',
            value: `**${Math.round(client.ws.ping)}** ms`,
            inline: true
        },
        {
            name: ' Meu criador:',
            value: '!kira#5694',
            inline: true
        },
    )
    message.channel.send(embed);
}
