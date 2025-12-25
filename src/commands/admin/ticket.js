const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	name: 'ticket',
    description: 'Embed de Ticket',
	permissionsRequired: [PermissionFlagsBits.Administrator],
	callback: (client, interaction) => {
        const embed = new EmbedBuilder()
        .setTitle(' Tickets RisaDev ')
		.setDescription(`Bem-vindo ao nosso Canal de Ticket!
		
		Instruções:
		Utilize o menu abaixo para selecionar a opção correspondente à sua solicitação:
		
		🤔 - Dúvida
		🛡️ - Denuncia
		🆘 - Ajuda
		
		Importante: Por favor, selecione apenas uma opção do menu para abrir seu ticket. Isso nos ajuda a direcionar sua solicitação de forma mais eficiente.
		
		Obrigado por escolher nosso serviço!
		`)
		.setColor(0x564FCC)
            .setThumbnail('https://cdn.discordapp.com/attachments/1446566190217560254/1453563557596626994/logo.png?ex=694de80e&is=694c968e&hm=162e6e6b4003b160d8e0d8e3328d095344694063bb5b9e682eb37062852844a2&')
            .setImage('https://cdn.discordapp.com/attachments/1446566190217560254/1448807630133923850/unnamed.gif?ex=694dbe40&is=694c6cc0&hm=70f2f3f6b93a9731d71259f1d77d3ac8fa52138b06b5b067e81b4965bf7698e4&')
		.setFooter({text: 'Equipe Risa Development'})
        const row = new ActionRowBuilder()
        .addComponents(
            new StringSelectMenuBuilder()
					.setCustomId('select')
					.setPlaceholder('Selecione uma das opções...')
					.addOptions(
						{
							label: 'Dúvidas',
							description: 'Abrir um canal de dúvida.',
							value: 'option1',
						},
						{
							label: 'Denuncia',
							description: 'Abrir um canal de denuncia.',
							value: 'option2',
						},
						{
							label: 'Ajuda',
							description: 'Abrir um canal de ajuda.',
							value: 'option3',
						},

        ),
        );
        interaction.channel.send({embeds: [embed], components: [row]})
        interaction.reply({content: 'Comando executado com sucesso.',ephemeral:true})
      
	},
};