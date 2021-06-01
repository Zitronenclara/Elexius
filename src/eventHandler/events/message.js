// IMPORTANT IMPORTS
const Discord = require('discord.js')
const config = require('./../../../config.json')
const debugHandler = require('./../../commandHandler/debugHandler.js')

module.exports = {
	name: 'message',
	once: false,
	/**
	 * Triggered when the bot receives a message
	 *
	 * @author: Clara
	 * @param {Discord.Client} client The bot client
     * @param {Discord.Message} message The received message
	 * @since 1.0.0
	 */
	execute(client, message) {
        // triggers debug command
        if (message.content.startsWith("~") || message.author.id === config.ownerID){
            const commandArgs = message.content.slice(1).trim().split(/ +/);
            const commandName = commandArgs.shift().toLowerCase();
            debugHandler(commandName, commandArgs)
        }
	},
};