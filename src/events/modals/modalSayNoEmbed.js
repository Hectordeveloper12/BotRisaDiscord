const { Events, ButtonBuilder, ButtonStyle, EmbedBuilder, ActionRowBuilder } = require('discord.js')

module.exports =(client, interaction) => {
    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isModalSubmit()) return;
        if (interaction.customId === 'modalsaynoembed') {
            
            const description = interaction.fields.getTextInputValue('saydescription');

            interaction.reply({ content: 'Comando executado com sucesso!', ephemeral: true});
            interaction.channel.send({content: `${description}`});
        }
    });
}