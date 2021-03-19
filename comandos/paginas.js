const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setTitle(`Central de comandos`)
    .setDescription(`Aperte em uma reação pra ver tal pagina 
    
     ⏪  Primeira Pagina

     ↔️  Central de Paginas

     ⏩  Segunda pagina`)
    .setColor("RANDOM")    
    message.channel.send(embed).then(msg => {
      msg.react("⏪")
      msg.react("↔️")
      msg.react("⏩")

      let filtro1 = (r, u) => r.emoji.name === '⏪' && u.id === message.author.id;
      let filtro2 = (r, u) => r.emoji.name ===  '↔️'&& u.id === message.author.id;
      let filtro3 = (r, u) => r.emoji.name === '⏩' && u.id === message.author.id;

      let coletor = msg.createReactionCollector(filtro1);
      let coletor2 = msg.createReactionCollector(filtro2);
      let coletor3 = msg.createReactionCollector(filtro3);

      coletor.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Pagina 1`)
        .setDescription(`Digite o que ira nesta pagina`)
        .setColor("RANDOM")
        
        msg.edit(embed)
      })

      coletor2.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Central de Paginas`)
        .setDescription(`Aperte em uma reação para ver tal pagina

  ⏪  Primeira Pagina

  ↔️  Central de Paginas

  ⏩  Segunda Pagina`)
        .setColor("RANDOM")

        msg.edit(embed)
      })

      coletor3.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Pagina 2`)
        .setDescription(`Digite aqui o que tera na segunda pagina`)
        .setColor("RANDOM")
        
        msg.edit(embed)
      })
    })
  }
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setTitle(`Central de Paginas`)
    .setDescription(`Aperte em uma reação pra ver tal pagina 
    
     ⏪  Primeira Pagina

     ↔️  Central de Paginas

     ⏩  Segunda pagina`)
    .setColor("RANDOM")    
    message.channel.send(embed).then(msg => {
      msg.react("⏪")
      msg.react("↔️")
      msg.react("⏩")

      let filtro1 = (r, u) => r.emoji.name === '⏪' && u.id === message.author.id;
      let filtro2 = (r, u) => r.emoji.name ===  '↔️'&& u.id === message.author.id;
      let filtro3 = (r, u) => r.emoji.name === '⏩' && u.id === message.author.id;

      let coletor = msg.createReactionCollector(filtro1);
      let coletor2 = msg.createReactionCollector(filtro2);
      let coletor3 = msg.createReactionCollector(filtro3);

      coletor.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Pagina 1`)
        .setDescription(`Digite o que ira nesta pagina`)
        .setColor("RANDOM")
        
        msg.edit(embed)
      })

      coletor2.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Central de Paginas`)
        .setDescription(`Aperte em uma reação para ver tal pagina

  ⏪  Primeira Pagina

  ↔️  Central de Paginas

  ⏩  Segunda Pagina`)
        .setColor("RANDOM")

        msg.edit(embed)
      })

      coletor3.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Pagina 2`)
        .setDescription(`Digite aqui o que tera na segunda pagina`)
        .setColor("RANDOM")
        
        msg.edit(embed)
      })
    })
  }
