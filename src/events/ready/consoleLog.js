const { ActivityType } = require('discord.js');

module.exports = (client ) => {
    console.log(`${client.user.tag} está online.`)
    client.user.setActivity('RisaDev', { type: ActivityType.Watching });;
};