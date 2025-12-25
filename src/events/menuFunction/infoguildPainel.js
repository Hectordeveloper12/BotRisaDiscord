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
            .setFooter({text: 'Equipe RisaDev'})
            .setThumbnail('https://cdn.discordapp.com/attachments/1126867209269030952/1260770006447423651/logo_risa_dev.jpg?ex=66a25351&is=66a101d1&hm=84caa250d6541d5828abf5f5ceabae43a4943b77912537b794a1a1e4822f30be&')
            .setImage('https://cdn.discordapp.com/attachments/1126867209269030952/1265826562121404426/Sushi_oriental_ousado_minimalista_banner.jpg?ex=66a2ec5a&is=66a19ada&hm=dbf2cf6d730e6584e8764b4ab9c9293dfde95513051c2fadd44f86435f1f9c9b&')
            
            interaction.reply({ content: 'Seu comando foi executado com sucesso!', ephemeral: true});
            interaction.channel.send({embeds: [embed]});
        };


    });
}