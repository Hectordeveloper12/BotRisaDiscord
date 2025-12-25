const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    name: "apresentar",
    description: "Use esse comando para se apresentar no servidor.",
    callback: (client, interaction) => {
        const modal = new ModalBuilder()
        .setCustomId('myModal')
        .setTitle('Sugestão');

    const sugestionInput = new TextInputBuilder()
        .setPlaceholder('Digite o seu nome aqui!')
        .setCustomId('sugestionInput')
        .setLabel("Qual o seu nome?")
        .setStyle(TextInputStyle.Short);

    const detailInput = new TextInputBuilder()
        .setPlaceholder('Digite a sua idade aqui!')
        .setCustomId('detailInput')
        .setLabel("Qual a sua idade?")
        .setStyle(TextInputStyle.Short);

    const stackInput = new TextInputBuilder()
        .setPlaceholder('Digite a sua stack aqui!')
        .setCustomId('stackInput')
        .setLabel("Qual stack você usa?")
        .setStyle(TextInputStyle.Paragraph);
    
    const detalhesInput = new TextInputBuilder()
        .setPlaceholder('Digite sobre você aqui!')
        .setCustomId('detalhesInput')
        .setLabel("Fale um pouco sobre você.")
        .setStyle(TextInputStyle.Paragraph);


    const firstActionRow = new ActionRowBuilder().addComponents(sugestionInput);
    const secondActionRow = new ActionRowBuilder().addComponents(detailInput);
    const stackActionRow = new ActionRowBuilder().addComponents(stackInput);
    const detalhesActionRow = new ActionRowBuilder().addComponents(detalhesInput);

    modal.addComponents(firstActionRow, secondActionRow, stackActionRow, detalhesActionRow);

    interaction.showModal(modal);
}
}