const {Events, ChannelType, PermissionsBitField, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle} = require('discord.js');

module.exports = (client) => {
    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isStringSelectMenu()) return;
   
        const selected = interaction.values[0];
         if (selected === 'option1') {
            const guild = interaction.guild;

            // Criar o canal de texto
            const channel = await guild.channels.create({
                name: `duvidas-${interaction.user.id}`,
                type: ChannelType.GuildText,
                parent: '1446565401248006285',
                permissionOverwrites: [
                    {
                        id: interaction.guild.id,
                        deny: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ReadMessageHistory],
                    },
                    {
                        id: interaction.guild.id,
                        id: await interaction.user.id,
                        allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ReadMessageHistory],
                    }
                ]
                
            });
            
            const embedi = new EmbedBuilder()
            .setTitle( 'Ticket Criado' )
            .setDescription(`Bem vindo ${interaction.user}, aguarde um dos administradores entrarem em contato, já iremos responder\n\n\n`)
            .addFields(
            { name: 'Responsável:', value: "```"+`A ser assumido`+"```", inline: true },
            )
            .setColor(0x763ee7)
            .setTimestamp()
            .setFooter({text: 'Equipe Risa Development'})
            .setThumbnail('https://cdn.discordapp.com/attachments/1446566190217560254/1453563557596626994/logo.png?ex=694de80e&is=694c968e&hm=162e6e6b4003b160d8e0d8e3328d095344694063bb5b9e682eb37062852844a2&')
            .setImage('https://cdn.discordapp.com/attachments/1446566190217560254/1448807630133923850/unnamed.gif?ex=694dbe40&is=694c6cc0&hm=70f2f3f6b93a9731d71259f1d77d3ac8fa52138b06b5b067e81b4965bf7698e4&')

            const assumir = new ButtonBuilder()
            .setCustomId('assumir')
            .setLabel('Assumir')
            .setStyle(ButtonStyle.Success)

            const cancelar = new ButtonBuilder()
            .setCustomId('cancelar')
            .setLabel('Cancelar')
            .setStyle(ButtonStyle.Danger)

            const row = new ActionRowBuilder()
            .addComponents(assumir, cancelar);

            const msg = await channel.send({embeds: [embedi], components: [row]});
            await interaction.reply({ content: 'Seu chat foi criado com sucesso, está no topo dos chats ou nessa mesma seção.', ephemeral: true})

            return msg;
            

        };


    });
}