const { Events, ButtonBuilder, ButtonStyle, EmbedBuilder, ActionRowBuilder } = require('discord.js')


module.exports = (client) =>{
    client.on(Events.InteractionCreate, async interaction =>{
        if (!interaction.isButton()) return;
            if (interaction.customId === 'assumir') {
                const embedi = new EmbedBuilder()
                .setTitle( 'Ticket Criado' )
                .setDescription(`Bem vindo ${interaction.user}, aguarde um dos administradores entrarem em contato, já iremos responder\n\n\n`)
                .addFields(
                { name: 'Responsável:', value: "```"+`${interaction.user.globalName}`+"```", inline: true },
                )
                .setColor(0x763ee7)
                .setTimestamp()
                .setFooter({text: 'Equipe RisaDev'})
                .setThumbnail('https://cdn.discordapp.com/attachments/1126867209269030952/1260770006447423651/logo_risa_dev.jpg?ex=66a25351&is=66a101d1&hm=84caa250d6541d5828abf5f5ceabae43a4943b77912537b794a1a1e4822f30be&')
                .setImage('https://cdn.discordapp.com/attachments/1126867209269030952/1265826562121404426/Sushi_oriental_ousado_minimalista_banner.jpg?ex=66a2ec5a&is=66a19ada&hm=dbf2cf6d730e6584e8764b4ab9c9293dfde95513051c2fadd44f86435f1f9c9b&')
                
                const assumir = new ButtonBuilder()
                .setCustomId('assumir')
                .setLabel('Assumir')
                .setStyle(ButtonStyle.Success)
                .setDisabled(true);
    
                const cancelar = new ButtonBuilder()
                .setCustomId('cancelar')
                .setLabel('Cancelar')
                .setStyle(ButtonStyle.Danger)
    
                const row = new ActionRowBuilder()
                .addComponents(assumir, cancelar);

                await interaction.update({embeds: [embedi], components: [row]});
            }
        });
}
