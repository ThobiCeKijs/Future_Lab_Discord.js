const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "firstmessage",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const fetchMessages = await message.channel.messages.fetch({
      after: 1,
      limit: 1,
    });
    const msg = fetchMessages.first();

    message.channel.send(
      new MessageEmbed()
        .setTitle(`Primeira mensagem em ${message.channel.name}`)
        .setURL(msg.url)
        .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
        .setDescription("Info: " + msg.content)
        .addField("Autor:",  msg.author, true)
        .addField('ID da Mensagem', msg.id, true)
    );
  },
};
