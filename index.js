// IMPORTANT IMPORTS
const Discord = require('discord.js');
const config = require('./config.json');

// MODULE IMPORTS
const commandHandler = require('./src/commandHandler/commandHandler.js')
const eventHandler = require('./src/eventHandler/eventHandler.js')
const DB = require('./src/database/db.js')

// OTHER VARIABLES
const client = new Discord.Client()

/* STARTUP */

// init commands
commandHandler(client)

// register events
eventHandler(client)

// connect to database
DB.connect()

// client login
client.login(config.token)