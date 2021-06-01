// IMPORTANT IMPORTS
const Discord = require('discord.js')
const fs = require('fs')

// OTHER VARIABLES
const commandFiles = fs.readdirSync('./src/commandHandler/debug').filter(file => file.endsWith('.js'));

/**
 * Tries to execute the given debug command
 *
 * @author: Clara
 * @param {String} name The command name
 * @param {Array} args The command arguments
 * @since 1.0.0
 */
module.exports = function (name, args){
    if (commandFiles.includes(name+".js")){
        const command = require('./debug/'+name+".js")
        command(args)
    }else{
        //error embed WIP
    }
}