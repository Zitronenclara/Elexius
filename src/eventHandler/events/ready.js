// IMPORTANT IMPORTS
const Discord = require('discord.js')

module.exports = {
	name: 'ready',
	once: true,
	/**
	 * Triggered when the bot goes online
	 *
	 * @author: Clara
	 * @param {Discord.Client} client The bot client
	 * @since 1.0.0
	 */
	execute(client) {
		console.log('Bot Online!');
	},
};