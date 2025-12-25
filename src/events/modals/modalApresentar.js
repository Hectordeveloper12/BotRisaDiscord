const { Events, ButtonBuilder, ButtonStyle, EmbedBuilder, ActionRowBuilder } = require('discord.js')

module.exports =(client, interaction) => {
    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isModalSubmit()) return;
        if (interaction.customId === 'myModal') {
            const channelId = '1453802543065989371';
            const channel = client.channels.cache.get(channelId);
            if (!channel) return console.error(`Não foi possível encontrar o canal de ID ${channelId}.`);
            
            const sugestion = interaction.fields.getTextInputValue('sugestionInput');
            const detail = interaction.fields.getTextInputValue('detailInput');
            const stack = interaction.fields.getTextInputValue('stackInput');
            const detalhes = interaction.fields.getTextInputValue('detalhesInput');
    
            const embedi = new EmbedBuilder()
            .setTitle( 'Apresentação RisaDev' )
            .setDescription(`Olá ${interaction.user} obrigado por entrar no servidor, seja bem vindo e obrigado por se apresentar.\n\n\n`)
            .addFields(
        { name: 'Nome:', value: "```"+`${sugestion}`+"```",inline: true},
		{ name: 'Idade:', value: "```"+`${detail}`+"```", inline: true},
		{ name: 'Minhas Stacks:', value: "```"+`${stack}`+"```"},
		{ name: 'Sobre mim:', value: "```"+`${detalhes}`+"```"},
            )
            .setColor(0x564FCC)
            .setTimestamp()
            .setFooter({text: 'Equipe Risa Development'})
            .setThumbnail(interaction.user.avatarURL({dynamic: true, size:1024}))
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