// IMPORTANT IMPORTS
const Discord = require('discord.js')

module.exports = {
	name: 'ping',
	description: 'Ping!',
	options: [],
    /**
     * Initializes the given command as a guild slash command
     *
     * @author: Clara
     * @param {Object} d The command data
     * @param {Discord.Client} d.client The bot client
     * @param {Object} d.author The author object
     * @param {Discord.User} d.author.info The author user objct
     * @param {Discord.TextChannel} d.channel The interaction channel
     * @param {Array} d.args The command options
     * @param {Object} d.interaction The command interaction
     * @since 1.0.0
     */
	async execute(d) {
		console.log(d.client.ws.ping)
	}
};