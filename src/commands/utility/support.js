
const Discord = require('discord.js');
const { Message } = require('discord.js');
const Client = require('../../classes/Unicron');
const BaseCommand = require('../../classes/BaseCommand');

module.exports = class extends BaseCommand {
    constructor() {
        super({
            config: {
                name: 'support',
                description: 'Shows Support Server, Invite link.',
                permission: 'User',
            },
            options: {
                aliases: ['invite'],
                clientPermissions: ['EMBED_LINKS'],
                cooldown: 3,
                nsfwCommand: false,
                args: false,
                usage: '',
                donatorOnly: false,
            }
        });
    }
    /**
     * @returns {Promise<Message|boolean>}
     * @param {Client} client 
     * @param {Message} message 
     * @param {Array<string>} args 
     */
    async run(client, message, args) {
        const OWNER = await client.users.fetch(client.unicron.owner, false);
        return message.channel.send(new Discord.MessageEmbed()
            .setColor(0x00FFFF)
            .setTitle('SakuraV1 Fun & Moderation bot')
            .setDescription(`
[Support Server](${client.unicron.serverInviteURL})
[Invite to your server](https://discord.com/oauth2/authorize?client_id=764845261083639858&scope=bot&permissions=2147483647)`)
            .setFooter(`Made by //Goju//`)
        );
    }
}