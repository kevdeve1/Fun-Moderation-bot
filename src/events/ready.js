
const Client = require('../classes/Unicron');
const BaseEvent = require('../classes/BaseEvent');
module.exports = class extends BaseEvent {
    constructor() {
        super('ready');
    }
    /**
     * 
     * @param {Client} client 
     */
    async run(client) {
        client.forceSweep(70);
        client.startSweepInterval();
    }
}
module.exports = (client) => {
  console.log(
    `Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`
  );
 client.on("ready", () => {
   client.user.setPresence({ activity: { name: "Powered by RBXBots"}, status: "PLAYING"})
 })
}
