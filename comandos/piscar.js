const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "piscar",
    category: "diversão",
    run: async (client, message, args) => {
        const url = 'https://some-random-api.ml/animu/wink';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`Um erro aconteceu!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`@${message.author.username} Piscou para @${message.mentions.users.first().username || message.mentions.members.first()}`)
            .setImage(data.link)

        await message.channel.send(embed)
    }
}
