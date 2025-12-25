const {Events, ChannelType, PermissionsBitField, ActionRowBuilder, ModalBuilder, TextInputStyle, TextInputBuilder} = require('discord.js');

module.exports = (client) => {
    client.on(Events.InteractionCreate, async interaction => {

        if (!interaction.isStringSelectMenu()) return;
   
        const selected = interaction.values[0];
         if (selected === 'ban') {

        const modal = new ModalBuilder()
        .setCustomId('banPainel')
        .setTitle('Banir membro');

    const idUser = new TextInputBuilder()
        .setPlaceholder('Digite o Id do usuário.')
        .setCustomId('userId')
        .setLabel("Id do usuário")
        .setStyle(TextInputStyle.Short);

    const motivoBan = new TextInputBuilder()
        .setPlaceholder('Digite o motivo do ban')
        .setCustomId('motivoBan')
        .setLabel("Motivo do ban")
        .setStyle(TextInputStyle.Paragraph);


    const firstActionRow = new ActionRowBuilder().addComponents(idUser);
    const secondActionRow = new ActionRowBuilder().addComponents(motivoBan);

    modal.addComponents(firstActionRow, secondActionRow);
    interaction.showModal(modal);
        };
    });
}