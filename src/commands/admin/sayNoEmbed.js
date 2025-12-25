const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    name: "saynoembed",
    description: "Use esse comando para enviar uma embed pelo bot.",
    callback: (client, interaction) => {
        const modal = new ModalBuilder()
        .setCustomId('modalsaynoembed')
        .setTitle('Say');

    const saydescription = new TextInputBuilder()
        .setPlaceholder('Digite o texto aqui!')
        .setCustomId('saydescription')
        .setLabel("Escreva o texto aqui")
        .setStyle(TextInputStyle.Paragraph);

    const secondActionRow = new ActionRowBuilder().addComponents(saydescription);

    modal.addComponents(secondActionRow);

    interaction.showModal(modal);
}
}