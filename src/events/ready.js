
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
  const activities = [`Giveaways in ${client.guilds.cache.size} guilds`,"!help",`over ${client.users.cache.size} users!`];
  setInterval(() => {
    let activity = activities[Math.floor(Math.random() * activities.length)];
    client.user.setActivity("!help", { type: "PLAYING" });
  }, 20000);
};


