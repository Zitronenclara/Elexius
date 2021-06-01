// IMPORTANT IMPORTS
const Discord = require('discord.js')
const fs = require("fs");

/**
 * Loads all commands in the command folder and appends them to the client object for later use
 *
 * @author: Clara
 * @param {Discord.Client} client The bot client
 * @since 1.0.0
 */
module.exports = function (client) {
    client.commands = new Discord.Collection();
    const commandFiles = fs.readdirSync('./src/commandHandler/commands').filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
    }
}