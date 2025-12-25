const {Events, ChannelType, PermissionsBitField, ActionRowBuilder, ModalBuilder, TextInputStyle, TextInputBuilder} = require('discord.js');

module.exports = (client) => {
    client.on(Events.InteractionCreate, async interaction => {

        if (!interaction.isStringSelectMenu()) return;

        const selected = interaction.values[0];
         if (selected === 'infouser') {
            const modal = new ModalBuilder()
            .setCustomId('memberPainel')
            .setTitle('Info Membro');
    
        const idUser = new TextInputBuilder()
            .setPlaceholder('Digite o Id do usuário.')
            .setCustomId('userIdmember')
            .setLabel("Id do usuário")
            .setStyle(TextInputStyle.Short);
    
        const firstActionRow = new ActionRowBuilder().addComponents(idUser);
    
        modal.addComponents(firstActionRow);
        interaction.showModal(modal);
        };


    });
}