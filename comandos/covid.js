const fetch = require('node-fetch');

const Discord = require('discord.js');

module.exports = {
    name: "covid",
    description: "Rastrear casos COVID-19 em um país ou em todo o mundo",

    async run (client, message, args){

        let countries = args.join(" ");


        const noArgs = new Discord.MessageEmbed()
        .setTitle('Argumentos ausentes')
        .setColor(0xFF0000)
        .setDescription('Estão faltando alguns argumentos (por exemplo: covid total || covid brazil)')
        .setTimestamp()

        if(!args[0]) return message.channel.send(noArgs);

        if(args[0] === "total"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`Estatística da COVID-19 no mundo`)
                .addField('Casos confirmados', confirmed)
                .addField('Recuperados', recovered)
                .addField('Mortos', deaths)

                message.channel.send(embed)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`COVID-19 Estatísticas para **${countries}**`)
                .addField('Casos confirmados', confirmed)
                .addField('Recuperados', recovered)
                .addField('Mortes', deaths)

                message.channel.send(embed)
            }).catch(e => {
                return message.channel.send('País fornecido inválido ')
            })
        }
    }
}
