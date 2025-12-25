const {Events, ChannelType, PermissionsBitField, ActionRowBuilder, ModalBuilder, TextInputStyle, TextInputBuilder} = require('discord.js');

module.exports = (client) => {
    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isStringSelectMenu()) return;
   
        const selected = interaction.values[0];
         if (selected === 'timeout') {

        const modal = new ModalBuilder()
        .setCustomId('timeoutPainel')
        .setTitle('Silenciar membro');

    const idUser = new TextInputBuilder()
        .setPlaceholder('Digite o Id do usuário.')
        .setCustomId('userIdTimeout')
        .setLabel("Id do usuário")
        .setStyle(TextInputStyle.Short);

        const tempoTimeout = new TextInputBuilder()
        .setPlaceholder('Duração do timeout')
        .setCustomId('tempoTimeout')
        .setLabel("Quantos minutos de timeout?")
        .setStyle(TextInputStyle.Short);

    const motivoTimeout = new TextInputBuilder()
        .setPlaceholder('Digite o motivo da expulsão')
        .setCustomId('motivoTimeout')
        .setLabel("Motivo do Timeout")
        .setStyle(TextInputStyle.Paragraph);


    const firstActionRow = new ActionRowBuilder().addComponents(idUser);
    const secondActionRow = new ActionRowBuilder().addComponents(motivoTimeout);
    const treeActionRow = new ActionRowBuilder().addComponents(tempoTimeout);

    modal.addComponents(firstActionRow, secondActionRow, treeActionRow);
    interaction.showModal(modal);
        };
    });
}