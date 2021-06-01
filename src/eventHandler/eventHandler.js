// IMPORTANT IMPORTS
const Discord = require('discord.js')
const fs = require('fs')

// gets all event files
const events = fs.readdirSync('./src/eventHandler/events').filter(file => file.endsWith('.js'));

/**
 * Registers the event listeners and attaches the event scripts from the event folder
 *
 * @author: Clara
 * @param {Discord.Client} client The bot client
 * @since 1.0.0
 */
module.exports = function (client) {
    for (const file of events) {
        const event = require(`./events/${file}`);
        if (event.once) {
            client.once(event.name, (...args) => event.execute(client, ...args));
        } else {
            client.on(event.name, (...args) => event.execute(client,...args));
        }
    }
}