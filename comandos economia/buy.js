const db = require('quick.db');
const Discord = require('discord.js');

exports.run = async (bot, message, args) => {

        let purchase = args.join(" ");
        if(!purchase) return message.channel.send('Digite o nome do item que deseja adquirir')
        let items = await db.fetch(message.author.id, { items: [] });
        let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

        if(purchase === 'm4a1'){
            if(amount < 30000) return message.channel.send('Você não possui dinheiro suficiente para realizar a compra!');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 30000);
            db.push(message.author.id, "m4a1");
            message.channel.send('Você comprou uma m4a1 com sucesso!')
        }
            if(purchase === 'ak-47'){
            if(amount < 35000) return message.channel.send('Você não possui dinheiro suficiente para realizar a compra!');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 35000);
            db.push(message.author.id, "ak-47");
            message.channel.send('Você comprou sua ak-47 com sucesso!')
        }
    }

// altere para deixar do jeito que vc quiser
