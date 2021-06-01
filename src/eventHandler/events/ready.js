// IMPORTANT IMPORTS
const Discord = require('discord.js')

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log('Bot Onlin!');
	},
};