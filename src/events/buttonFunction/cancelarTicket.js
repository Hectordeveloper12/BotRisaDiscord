const { Events, ButtonBuilder, ButtonStyle, EmbedBuilder, ActionRowBuilder } = require('discord.js')


module.exports = (client) =>{
    client.on(Events.InteractionCreate, async interaction =>{
        if (!interaction.isButton()) return;
            if (interaction.customId === 'cancelar') {
                const embedi = new EmbedBuilder()
                .setTitle( 'Cancelar Ticket' )
                .setDescription(`${interaction.user}Você tem certeza que deseja cancelar esse ticket?`)
                .setColor(0x763ee7)
                .setTimestamp()
                .setFooter({text: 'Equipe Risa Development'})
                
                const continuar = new ButtonBuilder()
                .setCustomId('continuar')
                .setLabel('Continuar')
                .setStyle(ButtonStyle.Success)
    
                const apagar = new ButtonBuilder()
                .setCustomId('apagar')
                .setLabel('Apagar')
                .setStyle(ButtonStyle.Danger)
    
                const row = new ActionRowBuilder()
                .addComponents(continuar, apagar);

                await interaction.reply({embeds: [embedi], components: [row]});
            }
        });
}
