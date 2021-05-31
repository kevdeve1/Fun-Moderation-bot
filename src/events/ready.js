
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

var word = ["'266 Members', { type: 'WATCHING'}", "'6 Servers', {type: 'WATCHING'}"];

let i = 0;

client.user.setActivity(word[0]);

i++;

setInterval(() => {

 if (i >= word.length + 1) {

   i = 0;

 }

client.user.setActivity(word[i]);

i++;

}, 1000 * 15); // 30 = 30s || 1000 * 1 = 1s

});
