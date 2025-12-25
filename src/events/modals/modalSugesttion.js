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
            .setFooter({text: 'Equipe RisaDev'})
            .setThumbnail('https://cdn.discordapp.com/attachments/1126867209269030952/1260770006447423651/logo_risa_dev.jpg?ex=66a25351&is=66a101d1&hm=84caa250d6541d5828abf5f5ceabae43a4943b77912537b794a1a1e4822f30be&')
            .setImage('https://cdn.discordapp.com/attachments/1126867209269030952/1265826562121404426/Sushi_oriental_ousado_minimalista_banner.jpg?ex=66a2ec5a&is=66a19ada&hm=dbf2cf6d730e6584e8764b4ab9c9293dfde95513051c2fadd44f86435f1f9c9b&')

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