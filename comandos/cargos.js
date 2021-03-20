const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "cargos",
    description: "Mostra os cargos de alguém!",
    run: async(client, message, args) => {
        const user = message.mentions.members.first() || message.member || message.guild.members.cache.find(u => u.id === args[0])
        if(!user) return message.reply("Por favor, dê um usuario válidor!")
        
        const cargos = user.roles.cache
        .filter((role) => role.id !== message.guild.id)
        .map((roles) => roles.toString())
        .join(", ")

        let embed = new MessageEmbed()
        .addField("Cargos", cargos)
        .setFooter(user.user.tag, user.user.displayAvatarURL({ dynamic: true}))
        message.channel.send(embed)
    }
}
