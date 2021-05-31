const discord = require('discors.js')
const client = new discord.Cleint()
const fetch = require('node-fetch')

client.on('ready', () => {
  console.log('OKIE BOSS IM ONLINE!')

});

client.on('message', async message => {
  if(message.content == 'ping'){
    message.channel.send('pong') 
  }
});

let count = 86400000;
setInterval(
  () =>
    require("node-fetch")(process.env.URL).then(() =>
      console.log(`[${++count}] here i pinged ${process.env.URL}`)
    ),
  86400000
);
client.login(process.env.BOT_TOKEN);
