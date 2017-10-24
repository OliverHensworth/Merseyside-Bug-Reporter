const { Command } = require('discord.js-commando');
const Discord = require("discord.js");

module.exports = class ReportCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'report',
            aliases: ['bug', 'glitch'],
            group: 'report',
            memberName: 'report',
            description: 'The bot reports your report to developers!',
            examples: ['report <REPORT>'],
            guildOnly: true,

            // userPermissions: ['MANAGE_MESSAGES'],

            // throttling: {
            //     usages: 0,
            //     duration: 0
            // },

            args: [
            {
                key: `description`,
                prompt: 'Describe the bug.',
                type: 'string'

            },
            {
                key: `steps`,
                prompt: 'How do you do this bug/glitch?',
                type: 'string'

            },
            {
                key: `old`,
                prompt: 'Has this occured more than one time?',
                type: 'string'

            }
            ]
        });
    }

    run(msg, {description,steps,old}) {

        const embed = new Discord.RichEmbed()
            .setAuthor(`Report from ${msg.author.tag}`)

            .addField("Report Description", description, true)
            .addField("How to do it?", steps, true)
            .addField("Done before?", old, true)
        
            .setColor(0x0de538)
        
            .setTimestamp();
      

            this.client.channels.get("372261805822574594").send({embed})
            .catch(console.error);
    }
};