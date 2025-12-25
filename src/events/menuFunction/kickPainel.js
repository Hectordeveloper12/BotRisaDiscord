const {Events, ChannelType, PermissionsBitField, ActionRowBuilder, ModalBuilder, TextInputStyle, TextInputBuilder} = require('discord.js');

module.exports = (client) => {
    client.on(Events.InteractionCreate, async interaction => {

        if (!interaction.isStringSelectMenu()) return;
   
        const selected = interaction.values[0];
         if (selected === 'kick') {

        const modal = new ModalBuilder()
        .setCustomId('kickPainel')
        .setTitle('Kickar membro');

    const idUser = new TextInputBuilder()
        .setPlaceholder('Digite o Id do usuário.')
        .setCustomId('userIdKick')
        .setLabel("Id do usuário")
        .setStyle(TextInputStyle.Short);

    const motivoKick = new TextInputBuilder()
        .setPlaceholder('Digite o motivo da expulsão')
        .setCustomId('motivoKick')
        .setLabel("Motivo da expulsão")
        .setStyle(TextInputStyle.Paragraph);


    const firstActionRow = new ActionRowBuilder().addComponents(idUser);
    const secondActionRow = new ActionRowBuilder().addComponents(motivoKick);

    modal.addComponents(firstActionRow, secondActionRow);
    interaction.showModal(modal);
        };
    });
}