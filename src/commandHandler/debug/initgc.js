// IMPORTANT IMPORTS
const Discord = require('discord.js')
const axios = require('axios')
const config = require('./../../../config.json')

/**
 * Initializes the given command as a guild slash command
 *
 * @author: Clara
 * @param {String[]} args The command arguments  
 * @since 1.0.0
 */
module.exports = async function (args){
    const command = require('./../commands/'+args[0]+".js")
    const data = {name: command.name, description: command.description, options: command.options}
    let http_config = {
        headers: {
            "Authorization": "Bot " + config.token
        }
    }
    axios.post(`https://discordapp.com/api/v8/applications/${config.appID}/guilds/${config.mainGuildID}/commands`, data, http_config)
        .catch(function (error) {
            console.log(error);
    });
    console.log(command.name+" GUILD command init")
}