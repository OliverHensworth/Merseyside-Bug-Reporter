const Commando = require("discord.js-commando");
const config = require("./config.json");
const client = new Commando.Client({
    owner: ["293110100707639297","208005257324658688","269783091583647754"],
    commandPrefix: ""
});

client.on("ready", async => {
    console.warn(`${client.user.username} is ready to recieve bugs!`);
});

const path = require('path');

client.registry
    // Registers your custom command groups
    .registerGroups([
        ['report', 'Report commands']
    ])

    // Registers all built-in groups, commands, and argument types
    .registerDefaults()

    // Registers all of your commands in the ./commands/ directory
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.login(process.env.TOKEN);
