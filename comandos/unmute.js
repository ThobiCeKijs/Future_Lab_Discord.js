module.exports = {
    name: "unmute",
    description: "Reative um membro do seu servidor",

    async run (client, message, args) {
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Você não tem permissão para executar este comando");

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        let role = message.guild.roles.cache.find(x => x.name === "Mutado");

        if(!user.roles.cache.has(role.id)) return message.channel.send("Este membro não está mutado")

        user.roles.remove(role);

        message.channel.send(`${user} foi desmutado`)
    }
}
