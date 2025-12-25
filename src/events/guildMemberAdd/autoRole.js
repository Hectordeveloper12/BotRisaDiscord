const { Client, GuildMember, EmbedBuilder } = require('discord.js');
const AutoRole = require('../../models/AutoRole');

/**
 *
 * @param {Client} client
 * @param {GuildMember} member
 */


module.exports = async (client, member) => {
  try {
    let guild = member.guild;
    if (!guild) return;

    const autoRole = await AutoRole.findOne({ guildId: guild.id });
    if (!autoRole) return;

    // Embed de boas vindas
    const embedi = new EmbedBuilder()
            .setTitle( 'Bem vindo a Risa' )
            .setDescription(`Olá ${member.user}! 🎈\n\nEstamos muito felizes em ter você conosco na **${member.guild.name}**! 🥳\n\nAqui estão algumas coisas para você fazer:\n- **Leia as regras** no canal regras 📜\n- **Participe** das conversas e divirta-se! 💬\n\nSe precisar de ajuda, não hesite em chamar um moderador ou usar o comando !help.`)
            .setColor(0x763ee7)
            .setTimestamp()
            .setFooter({text: 'Equipe Risa Development'})
            .setThumbnail('https://cdn.discordapp.com/attachments/1446566190217560254/1453563557596626994/logo.png?ex=694de80e&is=694c968e&hm=162e6e6b4003b160d8e0d8e3328d095344694063bb5b9e682eb37062852844a2&')
            .setImage('https://cdn.discordapp.com/attachments/1446566190217560254/1448807630133923850/unnamed.gif?ex=694dbe40&is=694c6cc0&hm=70f2f3f6b93a9731d71259f1d77d3ac8fa52138b06b5b067e81b4965bf7698e4&')

    const channelId = '1446565570815197435';
    const channel = client.channels.cache.get(channelId); 

    await member.roles.add(autoRole.roleId);
    await channel.send({embeds: [embedi]});
  } catch (error) {
    console.log(`Error giving role automatically: ${error}`);
  }
};