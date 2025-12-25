const { Events, ButtonBuilder, ButtonStyle, EmbedBuilder, ActionRowBuilder } = require('discord.js')

module.exports =(client, interaction) => {
    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isModalSubmit()) return;
        if (interaction.customId === 'cleanModal') {
            
            const quantidade = interaction.fields.getTextInputValue('cleanmodal');

            if (quantidade < 1 || quantidade > 100) {
                return interaction.reply({ content: 'A quantidade precisa estar entre 1 e 100.', ephemeral: true });
            }
    
            try {
                await interaction.channel.bulkDelete(quantidade, true);
                await interaction.reply({ content: `Apaguei ${quantidade} mensagens.`, ephemeral: true });
            } catch (error) {
                console.error(error);
                interaction.reply({ content: 'Houve um erro ao tentar apagar as mensagens.', ephemeral: true });
            }
        }
    });
}