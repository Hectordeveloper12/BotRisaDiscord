const { Events, ButtonBuilder, ButtonStyle, EmbedBuilder, ActionRowBuilder } = require('discord.js')
const wait = require('node:timers/promises').setTimeout;


module.exports = (client) =>{
    client.on(Events.InteractionCreate, async interaction =>{
        if (!interaction.isButton()) return;
            if (interaction.customId === 'apagar') {
                const embedi = new EmbedBuilder()
                .setTitle( 'Cancelar Ticket' )
                .setDescription(`O chat atual sera excluido.`)
                .setColor(0x763ee7)
                .setTimestamp()
                .setFooter({text: 'Equipe Risa Development'})

                await interaction.update({embeds: [embedi]});
                await wait(1_000);
                await interaction.channel.delete();
            }
        });
}
