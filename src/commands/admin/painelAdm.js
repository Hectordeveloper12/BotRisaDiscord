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