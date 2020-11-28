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

setInterval(async () => {

  await fetch('https://internal-spangle-trombone.glitch.me').then(console.log('Pinged!'))

}, 240000)

client.login('NzE5ODMwNzEyMzk1NDk3NTAz.Xt9Ilw.istehxX6Iiyr6vHzs24VjisJLEI')