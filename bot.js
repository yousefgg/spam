 const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});


client.on('ready', async() => {
var server = "510399878002901002"; // ايدي السررفر
var channel = "510399878002901005";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam  , Magic Spam  , Magic Spam  , Magic Spam  , Magic Spam  , Magic Spam  , Magic Spam  , Magic Spam  , Magic Spam  , Magic Spam  , Magic Spam  , Magic Spam  , Magic Spam  , Magic Spam  , Magic Spam  , Magic Spam , Magic Spam, Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam **')
    },305);
})

client.login(process.env.BOT_TOKEN); 
