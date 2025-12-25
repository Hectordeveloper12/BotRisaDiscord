require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
const mongoose = require('mongoose');
const eventHandler = require('./src/handlers/eventHandler');
const ticketMenu = require('./src/events/menuFunction/ticketMenu');
const ticketMenu2 = require('./src/events/menuFunction/ticketMenu2');
const ticketMenu3 = require('./src/events/menuFunction/ticketMenu3');
const respotaTicket = require('./src/events/buttonFunction/repostaTicket');
const cancelarTicket = require('./src/events/buttonFunction/cancelarTicket');
const continuarTicket = require('./src/events/buttonFunction/continuarTicket');
const excluirTicket = require('./src/events/buttonFunction/excluirTicket');
const banPainel = require('./src/events/menuFunction/banPainel');
const banModel = require('./src/events/modals/banModal');
const kickPainel = require('./src/events/menuFunction/kickPainel');
const kickModal = require('./src/events/modals/kickModal');
const timeoutPainel = require('./src/events/menuFunction/timeoutPainel');
const timeoutModal = require('./src/events/modals/timeoutModal');
const infoguild = require('./src/events/menuFunction/infoguildPainel');
const infomember = require('./src/events/menuFunction/infomemberPainel');
const infomemberModal = require('./src/events/modals/infomemberModal');
const apresentarModal = require('./src/events/modals/modalApresentar');
const cleanModal = require('./src/events/modals/cleanModal');
const modalSay = require('./src/events/modals/modalSay');
const modalSayNoEmbed = require('./src/events/modals/modalSayNoEmbed');

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
        apresentarModal(client);
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
        cleanModal(client);
        modalSay(client);
        modalSayNoEmbed(client);

        // Login do bot no Discord
        await client.login(process.env.TOKEN);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
})();
