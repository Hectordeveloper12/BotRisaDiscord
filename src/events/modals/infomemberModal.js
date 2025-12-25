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
            .setColor(0x763ee7)
            .setTimestamp()
            .setFooter({text: 'Equipe RisaDev'})
            .setThumbnail('https://cdn.discordapp.com/attachments/1126867209269030952/1260770006447423651/logo_risa_dev.jpg?ex=66a25351&is=66a101d1&hm=84caa250d6541d5828abf5f5ceabae43a4943b77912537b794a1a1e4822f30be&')
            .setImage('https://cdn.discordapp.com/attachments/1126867209269030952/1265826562121404426/Sushi_oriental_ousado_minimalista_banner.jpg?ex=66a2ec5a&is=66a19ada&hm=dbf2cf6d730e6584e8764b4ab9c9293dfde95513051c2fadd44f86435f1f9c9b&')
            
           

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