const { Events, ButtonBuilder, ButtonStyle, EmbedBuilder, ActionRowBuilder } = require('discord.js')

module.exports =(client, interaction) => {
    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isModalSubmit()) return;
        if (interaction.customId === 'myModal') {
            const channelId = '1228058834006839439'; 
            const channel = client.channels.cache.get(channelId);
            if (!channel) return console.error(`Não foi possível encontrar o canal de ID ${channelId}.`);
            
            const sugestion = interaction.fields.getTextInputValue('sugestionInput');
            const detail = interaction.fields.getTextInputValue('detailInput');
    
            const embedi = new EmbedBuilder()
            .setTitle( 'Sugestões RisaDev' )
            .setDescription(`Obrigado ${interaction.user} por sua sugestão! Estamos sempre buscando melhorar para nossos clientes. Tenha um ótimo dia!\n\n\n`)
            .addFields(
        { name: 'Sugestão', value: "```"+`${sugestion}`+"```", inline: true },
		{ name: 'Detalhes', value: "```"+`${detail}`+"```", inline: true },
		{ name: 'Status', value: "```"+'Está sendo avaliada pelo administrador'+"```"},
            )
            .setColor(0xFFFF)
            .setTimestamp()
            .setFooter({text: 'Equipe Risa Development'})
            .setThumbnail('https://cdn.discordapp.com/attachments/1446566190217560254/1453563557596626994/logo.png?ex=694de80e&is=694c968e&hm=162e6e6b4003b160d8e0d8e3328d095344694063bb5b9e682eb37062852844a2&')
            .setImage('https://cdn.discordapp.com/attachments/1446566190217560254/1448807630133923850/unnamed.gif?ex=694dbe40&is=694c6cc0&hm=70f2f3f6b93a9731d71259f1d77d3ac8fa52138b06b5b067e81b4965bf7698e4&')

            const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setLabel('Clique aqui')
                .setURL('https://discord.gg/T8n8EHGdJN')
                .setStyle(ButtonStyle.Link),
            );
            
            interaction.reply({ content: 'Sua sugestão foi enviado com sucesso!', components: [row], ephemeral: true});
            channel.send({embeds: [embedi]});
        }
    });
}