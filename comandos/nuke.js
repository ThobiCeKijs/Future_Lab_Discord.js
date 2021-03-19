const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "nuke",
    description: "Bomba nuclear em um canal, faz o chat ser deletado, e uma replica desse canal é criada",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("Você não tem permissoes para usar este comando!")
        }
        let reason = args.join(" ") || "Sem Razão"
        if(!message.channel.deletable) {
            return message.reply("Esse canal não pode ser nucleado!")
        }
        let newchannel = await message.channel.clone()
        await message.channel.delete()
        let embed = new MessageEmbed()
        .setTitle("Canal Atacado")
        .setDescription(reason)
        .setImage('https://media0.giphy.com/media/oe33xf3B50fsc/200.gif')
        await newchannel.send(embed)
    }
}
