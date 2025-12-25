const {ApplicationCommandOptionType, EmbedBuilder} = require('discord.js');
  

module.exports = {
    name: "avatar",
    description: "Coleta avatar de usuário selecionado.",
    options: [
        {
          name: 'membro',
          description: 'Membro desejado.',
          required: true,
          type: ApplicationCommandOptionType.Mentionable,
        },
    ],
    callback: (client, interaction) => {
        const pessoa = interaction.options.getUser('membro');
        const embedVarr = new EmbedBuilder()
        .setAuthor({name: 'RisaDev'})
        .setDescription(`Aqui está o avatar solicitado ${interaction.user}. [Clique aqui](${pessoa.avatarURL({dynamic: true, size:1024})}) para baixar a imagem ou use /ajuda para mais comandos.`)
        .setColor(0x763ee7)
        .setFooter({text: 'Equipe RisaDev'})
        .setImage(pessoa.avatarURL({dynamic: true, size:1024}))
        .setTimestamp()

        interaction.channel.send({embeds: [embedVarr]});
        interaction.reply({content: 'Comando executado com sucesso.',ephemeral:true})
    },
    }
