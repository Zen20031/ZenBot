const { Client, Collection, Discord,MessageEmbed, EmbedBuilder, MessageAttachment,Attachment} = require('discord.js');
const { config } = require('dotenv');
const weather = require ('weather-js');


const client = new Client({
  disableEveryone: true
});
//let ok=0;
 
client.commands = new Collection();
client.aliases = new Collection();


const rs=require('fs')
client.on("ready", () => {
  
  //console.log(`Hi, ${client.user.username} is now online!`);
  console.log(`You uploaded Servers.js`)
  //client.user.setActivity("on Daddy's Cave");
  /*client.user.set({
      status: "online",
      game: {
          name: "me getting developed",
          type: "STREAMING"
      }
  }); */
});
client.login(process.env.token); 
