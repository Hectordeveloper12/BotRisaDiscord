const { Events, ButtonBuilder, ButtonStyle, EmbedBuilder, ActionRowBuilder } = require('discord.js')

module.exports =(client, interaction) => {
    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isModalSubmit()) return;
        if (interaction.customId === 'timeoutPainel') {
            const channelId = '1269767631347646474'; 
            const channel = client.channels.cache.get(channelId);
            if (!channel) return console.error(`Não foi possível encontrar o canal de ID ${channelId}.`);
            

            const motivoTimeout = interaction.fields.getTextInputValue('motivoTimeout');
            const tempoTimeout = interaction.fields.getTextInputValue('tempoTimeout');
            if (isNaN(tempoTimeout) || null) {
                await interaction.reply('O valor inserido no campo (Duração do timeout) não é um número válido.');
            }
            const userId = interaction.fields.getTextInputValue('userIdTimeout');
            const user = await interaction.guild.members.fetch(userId);
            const duration = `${tempoTimeout}` * 60 * 1000;

            const embedi = new EmbedBuilder()
            .setTitle( 'Timeout Risa Dev' )
            .setDescription(`O usuário foi silenciado por ${interaction.user}\n\n\n`)
            .addFields(
        { name: 'Usuário Silenciado', value: "```"+`${user.user.tag}`+"```", inline: true },
		{ name: 'Motivo', value: `${motivoTimeout}` },
            )
            .setColor(0x763ee7)
            .setTimestamp()
            .setFooter({text: 'Equipe Risa Development'})
            .setThumbnail('https://cdn.discordapp.com/attachments/1446566190217560254/1453563557596626994/logo.png?ex=694de80e&is=694c968e&hm=162e6e6b4003b160d8e0d8e3328d095344694063bb5b9e682eb37062852844a2&')
            .setImage('https://cdn.discordapp.com/attachments/1446566190217560254/1448807630133923850/unnamed.gif?ex=694dbe40&is=694c6cc0&hm=70f2f3f6b93a9731d71259f1d77d3ac8fa52138b06b5b067e81b4965bf7698e4&')

            if (!user) {
                return interaction.reply('Usuário não encontrado!');
            }
    
            try {
                await user.timeout(duration);
                await interaction.reply({content: `Usuário ${user.user.tag} foi silenciado com sucesso!`, ephemeral: true});
                channel.send({embeds: [embedi]});

            } catch (error) {
                console.error(error);
                await interaction.reply('Ocorreu um erro ao tentar silenciar o usuário.');
            }
        }
    });
}