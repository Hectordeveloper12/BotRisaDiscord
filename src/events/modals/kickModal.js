const { Events, ButtonBuilder, ButtonStyle, EmbedBuilder, ActionRowBuilder } = require('discord.js')

module.exports =(client, interaction) => {
    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isModalSubmit()) return;
        if (interaction.customId === 'kickPainel') {
            const channelId = '1269234887660011662'; 
            const channel = client.channels.cache.get(channelId);
            if (!channel) return console.error(`Não foi possível encontrar o canal de ID ${channelId}.`);
            

            const motivoBan = interaction.fields.getTextInputValue('motivoKick');
            const userId = interaction.fields.getTextInputValue('userIdKick');
            const user = await interaction.guild.members.fetch(userId);
            
            const embedi = new EmbedBuilder()
            .setTitle( 'Expulsão Risa Dev' )
            .setDescription(`O usuário foi expulso por ${interaction.user}\n\n\n`)
            .addFields(
        { name: 'Usuário Expulso', value: "```"+`${user.user.tag}`+"```" },
		{ name: 'Motivo', value: `${motivoBan}` },
            )
            .setColor(0x763ee7)
            .setTimestamp()
            .setFooter({text: 'Equipe Risa Development'})
            .setThumbnail('https://cdn.discordapp.com/attachments/1446566190217560254/1453563557596626994/logo.png?ex=694de80e&is=694c968e&hm=162e6e6b4003b160d8e0d8e3328d095344694063bb5b9e682eb37062852844a2&')
            .setImage('https://cdn.discordapp.com/attachments/1446566190217560254/1448807630133923850/unnamed.gif?ex=694dbe40&is=694c6cc0&hm=70f2f3f6b93a9731d71259f1d77d3ac8fa52138b06b5b067e81b4965bf7698e4&')

            if (!user) {
                return interaction.reply('Usuário não encontrado!');
            }
    
            try {
                await user.kick();
                await interaction.reply({content: `Usuário ${user.user.tag} foi banido com sucesso!`, ephemeral: true});
                channel.send({embeds: [embedi]});

            } catch (error) {
                console.error(error);
                await interaction.reply('Ocorreu um erro ao tentar banir o usuário.');
            }
        }
    });
}