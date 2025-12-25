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
                parent: '1228721557719748629',
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
            .setFooter({text: 'Equipe RisaDev'})
            .setThumbnail('https://cdn.discordapp.com/attachments/1126867209269030952/1260770006447423651/logo_risa_dev.jpg?ex=66a25351&is=66a101d1&hm=84caa250d6541d5828abf5f5ceabae43a4943b77912537b794a1a1e4822f30be&')
            .setImage('https://cdn.discordapp.com/attachments/1126867209269030952/1265826562121404426/Sushi_oriental_ousado_minimalista_banner.jpg?ex=66a2ec5a&is=66a19ada&hm=dbf2cf6d730e6584e8764b4ab9c9293dfde95513051c2fadd44f86435f1f9c9b&')

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