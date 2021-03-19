const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "ping",
    usage: "ping",
    description: "Envia o ping",
    category: "info",
    run: (client, message, args) => {
        
        let embed = new MessageEmbed()
        .setAuthor(message.author.tag, message.member.user.displayAvatarURL({dynamic:true}))
            .setColor('RANDOM')
            .setThumbnail('https://media4.giphy.com/media/fvA1ieS8rEV8Y/200.gif')
            .setDescription(`**Latencia** \n ${Date.now()  - message.createdTimestamp}ms. \n **API** \n ${Math.round(client.ws.ping)}ms`)
            .setFooter("!kira", client.user.displayAvatarURL())
        
            message.channel.send(embed);
}}
