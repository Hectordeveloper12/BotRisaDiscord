require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
const mongoose = require('mongoose');
const eventHandler = require('./handlers/eventHandler');
const modalSuggestion = require('./events/modals/modalSugesttion');
const ticketMenu = require('./events/menuFunction/ticketMenu');
const ticketMenu2 = require('./events/menuFunction/ticketMenu2');
const ticketMenu3 = require('./events/menuFunction/ticketMenu3');
const respotaTicket = require('./events/buttonFunction/repostaTicket');
const cancelarTicket = require('./events/buttonFunction/cancelarTicket');
const continuarTicket = require('./events/buttonFunction/continuarTicket');
const excluirTicket = require('./events/buttonFunction/excluirTicket');
const banPainel = require('./events/menuFunction/banPainel');
const banModel = require('./events/modals/banModal');
const kickPainel = require('./events/menuFunction/kickPainel');
const kickModal = require('./events/modals/kickModal');
const timeoutPainel = require('./events/menuFunction/timeoutPainel');
const timeoutModal = require('./events/modals/timeoutModal');
const infoguild = require('./events/menuFunction/infoguildPainel');
const infomember = require('./events/menuFunction/infomemberPainel');
const infomemberModal = require('./events/modals/infomemberModal');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildPresences,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildVoiceStates,
    ],
});

(async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Conectado ao Banco de dados');

        // Eventos do Discord
        ticketMenu(client);
        ticketMenu2(client);
        ticketMenu3(client);
        eventHandler(client);
        modalSuggestion(client);
        respotaTicket(client);
        cancelarTicket(client);
        continuarTicket(client);
        excluirTicket(client);
        banPainel(client);
        banModel(client);
        kickPainel(client);
        kickModal(client);
        timeoutPainel(client);
        timeoutModal(client);
        infoguild(client);
        infomember(client);
        infomemberModal(client);

        // Login do bot no Discord
        await client.login(process.env.TOKEN);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
})();
