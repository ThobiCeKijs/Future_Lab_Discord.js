const Discord = require('discord.js')
const moment = require('moment')//npm i moment
module.exports = {
    name: "emojiinfo",
    async run(client, message, args) {
        let emojiName = args.join(" ");
        let emoji = message.guild.emojis.cache.get(args[0]) || message.guild.emojis.cache.find(emoji => emoji.name === `${emojiName}`) 
        if (!args[0]) return message.channel.send("Forneça o nome ou id de um emoji!")
        if (!emoji) return message.channel.send("Forneça o nome ou id de um emoji ** válido **!")
        let xd;
        if(emoji.animated) xd = "Sim"
        if(!emoji.animated) xd = 'Não'
        let embed = new Discord.MessageEmbed()

            .addField("Nome", `${emoji.name}`)
            .addField("ID do Emoji", `${emoji.id}`)
            .addField("Previw", `${emoji}`)
            .addField("Do Servidor", message.guild.name)
            .addField("Animado?", xd)
            .setThumbnail(emoji.url)
            .setColor("RED")
            .addField("Formato", `\`<:${emoji.name}:${emoji.id}>\``)
            .addField("URL", `[clique aqui](${emoji.url})`)

        message.channel.send(embed)
    }
}
