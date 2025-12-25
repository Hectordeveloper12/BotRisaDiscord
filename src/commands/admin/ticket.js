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
		🛡️ - Garantia
		🆘 - Ajuda
		
		Importante: Por favor, selecione apenas uma opção do menu para abrir seu ticket. Isso nos ajuda a direcionar sua solicitação de forma mais eficiente.
		
		Obrigado por escolher nosso serviço!
		`)
		.setColor(0x763ee7)
		.setThumbnail('https://cdn.discordapp.com/attachments/1126867209269030952/1260770006447423651/logo_risa_dev.jpg?ex=66a25351&is=66a101d1&hm=84caa250d6541d5828abf5f5ceabae43a4943b77912537b794a1a1e4822f30be&')
		.setImage('https://cdn.discordapp.com/attachments/1126867209269030952/1265826562121404426/Sushi_oriental_ousado_minimalista_banner.jpg?ex=66a2ec5a&is=66a19ada&hm=dbf2cf6d730e6584e8764b4ab9c9293dfde95513051c2fadd44f86435f1f9c9b&')
		.setFooter({text: 'Equipe RisaDev'})
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
							label: 'Garantia',
							description: 'Abrir um canal de garantia.',
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