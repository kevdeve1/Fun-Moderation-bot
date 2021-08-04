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

client.login(process.env.BOT_TOKEN);
