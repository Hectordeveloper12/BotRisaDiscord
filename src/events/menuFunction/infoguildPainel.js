const {Events, ChannelType, PermissionsBitField, ActionRowBuilder, EmbedBuilder} = require('discord.js');

module.exports = (client) => {
    client.on(Events.InteractionCreate, async interaction => {

        if (!interaction.isStringSelectMenu()) return;
        const guild = interaction.guild;
        const totalMembers = guild.memberCount;
        const onlineMembers = guild.members.cache.filter(member => member.presence?.status === 'online').size;
        const createdAt = guild.createdAt.toDateString();
        const owner = await guild.fetchOwner();

        const selected = interaction.values[0];
         if (selected === 'infoguild') {
            const embed = new EmbedBuilder()
            .setTitle( 'Risa Dev Info' )
            .setDescription(`Olá ${interaction.user}, você usou o comando de informações do servidor.\n\n`)
            .addFields(
        { name: 'Nome do Servidor', value: "```"+`${guild.name}`+"```", inline: true },
        { name: 'Id do Servidor', value: "```"+`${guild.id}`+"```", inline: true },
        { name: 'Dono do Servidor', value: "```"+`${owner.user.globalName}`+"```" },
        { name: 'Membros Totais', value: "```"+`${totalMembers}`+"```", inline: true },
        { name: 'Membros Online', value: "```"+`${onlineMembers}`+"```", inline: true },
        { name: 'Criado em', value: "```"+`${createdAt}`+"```" },
            )
            .setColor(0x763ee7)
            .setTimestamp()
            .setFooter({text: 'Equipe Risa Development'})
            .setThumbnail('https://cdn.discordapp.com/attachments/1446566190217560254/1453563557596626994/logo.png?ex=694de80e&is=694c968e&hm=162e6e6b4003b160d8e0d8e3328d095344694063bb5b9e682eb37062852844a2&')
            .setImage('https://cdn.discordapp.com/attachments/1446566190217560254/1448807630133923850/unnamed.gif?ex=694dbe40&is=694c6cc0&hm=70f2f3f6b93a9731d71259f1d77d3ac8fa52138b06b5b067e81b4965bf7698e4&')
            
            interaction.reply({ content: 'Seu comando foi executado com sucesso!', ephemeral: true});
            interaction.channel.send({embeds: [embed]});
        };


    });
}