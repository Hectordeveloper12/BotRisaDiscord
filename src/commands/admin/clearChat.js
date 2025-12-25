const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle, PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: "clearchat",
    description: "Use esse comando para apagar mensagens do chat.",
    permissionsRequired: [PermissionFlagsBits.Administrator],
    
    callback: (client, interaction) => {

        const modal = new ModalBuilder()
        .setCustomId('cleanModal')
        .setTitle('Apagar Mensagem');

    const cleanmodal = new TextInputBuilder()
        .setPlaceholder('Quantidade de mensagem que deseja apagar')
        .setCustomId('cleanmodal')
        .setLabel("0 - 100")
        .setStyle(TextInputStyle.Short);

    const firstActionRow = new ActionRowBuilder().addComponents(cleanmodal);

    modal.addComponents(firstActionRow);

    interaction.showModal(modal);
}
}