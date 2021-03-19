const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'unban',
    run: async (client, message, args) => {

        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('está faltando a permissão **BANIR MEMBROS**!').then(m => m.delete({ timeout: 5000 }));

        if (!args[0]) return message.channel.send('Por favor insira um ID de usuário para desbanir!').then(m => m.delete({ timeout: 5000 }));

        let member;

        try {
            member = await client.users.fetch(args[0])
        } catch (e) {
            console.log(e)
            return message.channel.send('Não é um usuário válido!').then(m => m.delete({ timeout: 5000 }));
        }

        const reason = args[1] ? args.slice(1).join(' ') : 'sem razão';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        message.guild.fetchBans().then( bans => {

            const user = bans.find(ban => ban.user.id === member.id );

            if (user) {
                embed.setTitle(`Desbanido com sucesso ${user.user.tag}`)
                    .setColor('#00ff00')
                    .addField('ID', user.user.id, true)
                    .addField('Tag', user.user.tag, true)
                    .addField('Banido por:', user.reason != null ? user.reason : 'Motivo não esclarecido ')
                    .addField('Desbanido por:', reason)
                message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed))
            } else {
                embed.setTitle(`O usuario ${member.tag} não está banido!`)
                    .setColor('#ff0000')
                message.channel.send(embed)
            }

        }).catch(e => {
            console.log(e)
            message.channel.send('Um erro aconteceu!')
        });

    }
}
