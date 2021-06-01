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

		// for receiving slash commands
		client.ws.on('INTERACTION_CREATE', async interaction => {
			const commandName = interaction.data.name.toLowerCase();
			const args = interaction.data.options;
			const author = interaction.member.user
			const channel = await client.channels.fetch(interaction.channel_id)
	
			//let authorData = await botUser.load(client, author.id)
			
			const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
			try {
				command.execute({"client": client, "author": {"info": author/*, "data": authorData*/}, "channel": channel, "args": args, "interaction": interaction});
			} catch (error) {
				console.error(error);
				channel.send("An error occured while trying to execute that command.");
			}
		});
	},
};