const { Events, ButtonBuilder, ButtonStyle, EmbedBuilder, ActionRowBuilder } = require('discord.js')
const wait = require('node:timers/promises').setTimeout;


module.exports = (client) =>{
    client.on(Events.InteractionCreate, async interaction =>{
        if (!interaction.isButton()) return;
            if (interaction.customId === 'continuar') {
                const embedi = new EmbedBuilder()
                .setTitle( 'Cancelar Ticket' )
                .setDescription(`Iremos prosseguir com o atendimento... Aguarde o administrador entrar em contato.`)
                .setColor(0x564FCC)
                .setTimestamp()
                .setFooter({text: 'Equipe Risa Development'})

                await interaction.update({embeds: [embedi]});
                await wait(1_000);
                await interaction.deleteReply();
            }
        });
}
