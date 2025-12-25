const { Events, ButtonBuilder, ButtonStyle, EmbedBuilder, ActionRowBuilder } = require('discord.js')

module.exports =(client, interaction) => {
    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isModalSubmit()) return;
        if (interaction.customId === 'memberPainel') {
            
            const userId = interaction.fields.getTextInputValue('userIdmember');
            const user = await interaction.guild.members.fetch(userId);
            const username = user.user.username;
            const joinedAt = user.joinedAt.toDateString();
            const createdAt = user.user.createdAt.toDateString();
            const status = user.presence?.status || 'offline';
            const roles = user.roles.cache.map(role => role.name).join(', ');

    
            const embed = new EmbedBuilder()
            .setTitle( 'Risa Dev Info Membro' )
            .setDescription(`Olá ${interaction.user}, você usou o comando de informações de membro.\n\n`)
            .addFields(
        { name: 'Nome do Membro', value: "```"+`${username}`+"```", inline: true },
        { name: 'Id do Membro', value: "```"+`${userId}`+"```", inline: true },
        { name: 'Entrou no servidor em', value: "```"+`${joinedAt}`+"```" },
        { name: 'Status', value: "```"+`${status}`+"```" },
        { name: 'Cargos', value: "```"+`${roles}`+"```" },
        { name: 'Conta criada em', value: "```"+`${createdAt}`+"```" },
            )
            .setColor(0x564FCC)
            .setTimestamp()
            .setFooter({text: 'Equipe Risa Development'})
            .setThumbnail('https://cdn.discordapp.com/attachments/1446566190217560254/1453563557596626994/logo.png?ex=694de80e&is=694c968e&hm=162e6e6b4003b160d8e0d8e3328d095344694063bb5b9e682eb37062852844a2&')
            .setImage('https://cdn.discordapp.com/attachments/1446566190217560254/1448807630133923850/unnamed.gif?ex=694dbe40&is=694c6cc0&hm=70f2f3f6b93a9731d71259f1d77d3ac8fa52138b06b5b067e81b4965bf7698e4&')
            
           

            if (!user) {
                return interaction.reply('Usuário não encontrado!');
            }
    
            try {
                await interaction.reply({content: `Comando executado com sucesso!`, ephemeral: true});
                await interaction.channel.send({embeds: [embed]});

            } catch (error) {
                console.error(error);
                await interaction.reply('Ocorreu um erro ao tentar pegar informação do usuário.');
            }
        }
    });
}