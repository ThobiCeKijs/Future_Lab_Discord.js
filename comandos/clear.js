const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "clear",
    category: "moderação",
    run: async (client, message, args) => {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) // permissão para fazer o comando
            return message.channel.send(
                `Você não tem as permissões corretas para fazer esta ação, ${message.author.username}` // aaaa
            );
        if (!args[0]) {
            return message.channel.send(`Por favor, insira um valor de 1 a 100`)
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100 ) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        await message.channel.bulkDelete(deleteAmount, true);

        const embed = new MessageEmbed()
            .setTitle(`${message.author.username}`)
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription(`Excluído com sucesso ${deleteAmount}`)
            .setFooter(message.author.username, message.author.displayAvatarURL())
            .setColor('#f2f2f2')
        await message.channel.send(embed)
        .then(msg => msg.delete({timeout: 5000}))
    }
}
