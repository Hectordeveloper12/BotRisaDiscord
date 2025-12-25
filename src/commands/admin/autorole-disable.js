const { Client, Interaction, PermissionFlagsBits } = require('discord.js');
const AutoRole = require('../../models/AutoRole');

module.exports = {
  /**
   *
   * @param {Client} client
   * @param {Interaction} interaction
   */
  callback: async (client, interaction) => {
    try {
      await interaction.deferReply();

      if (!(await AutoRole.exists({ guildId: interaction.guild.id }))) {
        interaction.editReply('A função automática não foi configurada para este servidor. Use `/autorole-configure` para configurá-lo.');
        return;
      }

      await AutoRole.findOneAndDelete({ guildId: interaction.guild.id });
      interaction.editReply('A função automática foi desativada para este servidor. Use `/autorole-configure` para configurá-lo novamente.');
    } catch (error) {
      console.log(error);
    }
  },

  name: 'desabilitar-autorole',
  description: 'Desabilita o autorole.',
  permissionsRequired: [PermissionFlagsBits.Administrator],
};