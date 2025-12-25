const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	name: 'paineladmin',
    description: 'Painel dos administradores',
	permissionsRequired: [PermissionFlagsBits.Administrator],
	callback: (client, interaction) => {
        const embed = new EmbedBuilder()
        .setTitle(' Painel Admin ')
		.setDescription(`
            Bem-vindo ${interaction.user} ao nosso exclusivo Painel de Administração! Aqui, você tem acesso a uma variedade de ferramentas e recursos projetados para facilitar a gestão do servidor. Com nosso painel, você pode:\n

            👤**Gerenciar Usuários:** Adicione, remova e ajuste permissões de membros facilmente.\n
            🔍**Monitorar Atividades:** Acompanhe logs de atividades e eventos importantes em tempo real.\n
            🛠️**Personalizar Canais:** Crie, modifique e organize canais conforme necessário para otimizar a comunicação.\n
            ⚖️**Configurar Regras:** Defina e aplique regras e políticas para manter a ordem e a harmonia.\n
            📊**Acessar Estatísticas:** Visualize métricas e estatísticas detalhadas para tomar decisões informadas.\n
            Este painel foi desenvolvido pensando na simplicidade e eficiência, proporcionando uma experiência intuitiva para todos os administradores. Aproveite ao máximo as funcionalidades disponíveis e mantenha o seu servidor funcionando de forma impecável!
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
							label: 'Ban',
							description: 'Banir membro.',
							value: 'ban',
						},
						{
							label: 'Kick',
							description: 'Expulsar membro.',
							value: 'kick',
						},
						{
							label: 'Timeout',
							description: 'Coloca castigo em um usuário.',
							value: 'timeout',
						},
                        {
							label: 'Info Guild',
							description: 'Informações do servidor.',
							value: 'infoguild',
						},
                        {
							label: 'Info User',
							description: 'Informações de Usuário.',
							value: 'infouser',
						},

        ),
        );
        interaction.channel.send({embeds: [embed], components: [row]})
        interaction.reply({content: 'Comando executado com sucesso.',ephemeral:true})
	},
};