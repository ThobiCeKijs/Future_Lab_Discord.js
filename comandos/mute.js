module.exports = {
    name: "mute",
    description: "Silenciar um membro do seu servidor",

    async run (client, message, args) {
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Você não tem permissão para executar este comando");

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!user) message.channel.send("Este usuário não foi encontrado em nenhum lugar deste servidor");

        if(user.id === message.author.id) return message.channel.send("Você não pode se silenciar, seu imbecil");

        let role = message.guild.roles.cache.find(x => x.name === "Nome Do Cargo De Mute");

        if(!role) return message.channel.send("Não é possível encontrar o cargo 'mutado'");

        let reason = args.slice(1).join(" ");
        if(reason === null) reason = "Não especificado"

        user.roles.add(role);

        await message.channel.send(`${user} foi silenciado`)

        user.send(`Olá. Você foi silenciado de ${message.guild.name}`);
    }
}
