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
            .setTitle( 'Bem vindo a Risa Dev' )
            .setDescription(`Olá ${member.user}! 🎈\n\nEstamos muito felizes em ter você conosco na **${member.guild.name}**! 🥳\n\nAqui estão algumas coisas para você fazer:\n- **Leia as regras** no canal regras 📜\n- **Participe** das conversas e divirta-se! 💬\n\nSe precisar de ajuda, não hesite em chamar um moderador ou usar o comando !help.`)
            .setColor(0x763ee7)
            .setTimestamp()
            .setFooter({text: 'Equipe RisaDev'})
            .setThumbnail('https://cdn.discordapp.com/attachments/1126867209269030952/1260770006447423651/logo_risa_dev.jpg?ex=66a25351&is=66a101d1&hm=84caa250d6541d5828abf5f5ceabae43a4943b77912537b794a1a1e4822f30be&')
            .setImage('https://cdn.discordapp.com/attachments/1126867209269030952/1265826562121404426/Sushi_oriental_ousado_minimalista_banner.jpg?ex=66a2ec5a&is=66a19ada&hm=dbf2cf6d730e6584e8764b4ab9c9293dfde95513051c2fadd44f86435f1f9c9b&')

    const channelId = '1228049974328295568'; 
    const channel = client.channels.cache.get(channelId); 

    await member.roles.add(autoRole.roleId);
    await channel.send({embeds: [embedi]});
  } catch (error) {
    console.log(`Error giving role automatically: ${error}`);
  }
};