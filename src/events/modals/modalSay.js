const { Events, ButtonBuilder, ButtonStyle, EmbedBuilder, ActionRowBuilder } = require('discord.js')

module.exports =(client, interaction) => {
    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isModalSubmit()) return;
        if (interaction.customId === 'modalsay') {
            
            const title = interaction.fields.getTextInputValue('saytitle');
            const description = interaction.fields.getTextInputValue('saydescription');
    
            const embedi = new EmbedBuilder()
            .setTitle( `${title}` )
            .setDescription(`${description}`)
            .setTimestamp()
            .setColor(0x564FCC)
            .setFooter({text: 'Equipe Risa Development'})
            
            interaction.reply({ content: 'Comando executado com sucesso!', ephemeral: true});
            interaction.channel.send({embeds: [embedi]});
        }
    });
}