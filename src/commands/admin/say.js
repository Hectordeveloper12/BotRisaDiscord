const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle, PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: "say",
    description: "Use esse comando para enviar uma embed pelo bot.",
    permissionsRequired: [PermissionFlagsBits.Administrator],
    
    callback: (client, interaction) => {
        const modal = new ModalBuilder()
        .setCustomId('modalsay')
        .setTitle('Say');

    const saytitle = new TextInputBuilder()
        .setPlaceholder('Digite o titulo aqui!')
        .setCustomId('saytitle')
        .setLabel("Qual o titulo do texto?")
        .setStyle(TextInputStyle.Short);

    const saydescription = new TextInputBuilder()
        .setPlaceholder('Digite o texto aqui!')
        .setCustomId('saydescription')
        .setLabel("Escreva o texto aqui")
        .setStyle(TextInputStyle.Paragraph);


    const firstActionRow = new ActionRowBuilder().addComponents(saytitle);
    const secondActionRow = new ActionRowBuilder().addComponents(saydescription);

    modal.addComponents(firstActionRow, secondActionRow);

    interaction.showModal(modal);
}
}