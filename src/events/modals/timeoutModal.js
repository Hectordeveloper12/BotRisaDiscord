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
            .setFooter({text: 'Equipe RisaDev'})
            .setThumbnail('https://cdn.discordapp.com/attachments/1126867209269030952/1260770006447423651/logo_risa_dev.jpg?ex=66a25351&is=66a101d1&hm=84caa250d6541d5828abf5f5ceabae43a4943b77912537b794a1a1e4822f30be&')
            .setImage('https://cdn.discordapp.com/attachments/1126867209269030952/1265826562121404426/Sushi_oriental_ousado_minimalista_banner.jpg?ex=66a2ec5a&is=66a19ada&hm=dbf2cf6d730e6584e8764b4ab9c9293dfde95513051c2fadd44f86435f1f9c9b&')

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