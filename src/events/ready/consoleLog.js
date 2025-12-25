const { ActivityType } = require('discord.js');

module.exports = (client ) => {
    console.log(`${client.user.tag} está online.`)
    client.user.setActivity('Risa Community', { type: ActivityType.Watching });;
};