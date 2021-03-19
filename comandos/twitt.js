const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
    name: "twitt",
    description: "envia a foto de um twitt com o que vc digitou!",
    run: async(client, message, args) => {
        fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${message.author.username}&text=${args.join(' ')}`)
        .then((res) => res.json())
        .then((data) => {
            let embed = new MessageEmbed()
            .setTitle("twitt")
            .setImage(data.message)
            .setTimestamp()
            message.channel.send(embed)
        })
    }
}
