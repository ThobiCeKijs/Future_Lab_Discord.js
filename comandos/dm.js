const Discord = require('discord.js'); 

exports.run = (client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`apenas administradores podem utilizar esse comando!`)
     message.channel.send(`Mencione o membro para quem eu devo enviar.`).then(m => {  
        let ck = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1}) 
        .on('collect', c => {
            membro = c.mentions.users.first() 
            if (!membro){ 
                message.reply(`mencione um membro!`)  
            } else { 
                message.channel.send(`Qual a mensagem?`).then(m2 => { 
                    let cp = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1})
                    .on('collect', c => {
                        mensagem = c.content
                        
                        message.channel.send(`Deseja que a mensagem seja em uma embed?\n**Com** - Envio em EMBED\n**Sem** - Envio sem EMBED`).then(m3 => {
                            let cd = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1})
                            .on('collect', c => {
                                result = c.content

                                if (result === 'Com'){ 
                                    let embedi = new Discord.MessageEmbed()

                                    .setDescription(`${mensagem}`)
                                    .setFooter(`Staff responsável: ${message.author.username}`)
                                    .setColor('#042a59')

                                    membro.send(embedi)
                                    message.reply(`EMBED enviada na **DM** do ${membro} com sucesso!`)
                                } 

                                if (result === 'Sem'){ 
                                    membro.send(`${mensagem}\n\nStaff responsável: \`${message.author.username}\``)
                                    message.reply(`Mensagem enviada na **DM** do ${membro} com sucesso!`)
                                }
                            })
                        })
                    })
                })
            }
        })
    })
}
