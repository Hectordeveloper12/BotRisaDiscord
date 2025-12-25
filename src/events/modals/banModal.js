const { Events, ButtonBuilder, ButtonStyle, EmbedBuilder, ActionRowBuilder } = require('discord.js')

module.exports =(client, interaction) => {
    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isModalSubmit()) return;
        if (interaction.customId === 'banPainel') {
            const channelId = '1269234887660011662'; 
            const channel = client.channels.cache.get(channelId);
            if (!channel) return console.error(`Não foi possível encontrar o canal de ID ${channelId}.`);
            

            const motivoBan = interaction.fields.getTextInputValue('motivoBan');
            const userId = interaction.fields.getTextInputValue('userId');
            const user = await interaction.guild.members.fetch(userId);
            
            const embedi = new EmbedBuilder()
            .setTitle( 'Banidos Risa Dev' )
            .setDescription(`O usuário foi banido por ${interaction.user}\n\n\n`)
            .addFields(
        { name: 'Usuário Banido', value: "```"+`${user.user.tag}`+"```" },
		{ name: 'Motivo', value: `${motivoBan}` },
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
                await user.ban();
                await interaction.reply({content: `Usuário ${user.user.tag} foi banido com sucesso!`, ephemeral: true});
                channel.send({embeds: [embedi]});

            } catch (error) {
                console.error(error);
                await interaction.reply('Ocorreu um erro ao tentar banir o usuário.');
            }
        }
    });
}