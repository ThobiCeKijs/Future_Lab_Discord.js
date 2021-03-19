const Discord = require('discord.js');

const db = require('quick.db');

module.exports = {
    name: "warn",
    description: "avise um membro",

    async run (client, message, args) {
        if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send('Você não pode usar isso');

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        if(!user) return message.channel.send('Especifique um usuário, por meio de menção ou ID');

        if(user.bot) return message.channel.send('Você não pode avisar os bots');

        if(message.author.id === user.id) return message.channel.send('Você não pode se avisar imbecil');

        if(message.guild.owner.id === user.id) return message.channel.send('Você não pode avisar o dono do servidor');

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Não Especificado';

        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

        if(warnings === 3) return message.channel.send(`${user} já atingiu três avisos`);


        if(warnings === null) {
            db.set(`warnings_${message.guild.id}_${user.id}`, 1);
            user.send(`Você foi avisado em ${message.guild.name} pelo seguinte motivo: \`${reason}\``)
            await message.channel.send(`**${user.username}** foi avisado`)
        }

        if(warnings !== null){
            db.add(`warnings_${message.guild.id}_${user.id}`, 1)
            user.send(`Você foi avisado em ${message.guild.name} pelo seguinte motivo: \`${reason}\``)
            await message.channel.send(`**${user.username}** foi avisado`)
        }
    }
}
