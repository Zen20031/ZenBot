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

//var hierf ="";
var version ='1.0.1';
const prefix ='!';
client.commands = new Collection();
client.aliases = new Collection();


var i=1;

client.on("ready", () => {
/*
  let statuses = [
    //////${client.guilds.cache.size} 
    //`carefully ${client.guilds.cache.size} servers!👀`,
   // "Zen!✔️",
    //"MAINTENANCE BREAK!!!!",
    //"Zen!anime✔️",
    ///////${client.users.cache.size} 
    //`over ${client.users.cache.size}  users!💻 `,
    `Zen!music✔️ `
    //"MAINTENANCE BREAK!"
]
//client.user.setActivity(statuses[statuses.length], {type: "WATCHING"});
/*
setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(status, {type: "WATCHING"});

}, 100000)*/
  // This event triggers when the bot joins a guild.
  ///client.user.setActivity(`Serving ${client.guilds.size} servers`);
  //console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
  //client.user.setActivity("on Discord|Zen!help")
  client.user.setActivity(`over ${client.users.cache.size}  users!💻`, { type: 'WATCHING' });
});








/*client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});*/
const disablersd = new Set();
client.on('message', msg => {

    //commands for stuff      // If the message is "zen!avatar"
      
      if((msg.content==='Zen!version') || (msg.content==='zen!version')){
        msg.channel.send(' 	__*Version 1.0.1*__');//+version
      }
      if((msg.content==='Zen!porn') || (msg.content==='zen!porn')){
        msg.channel.send(' 	__*no u*__');//+version
      }
      if((msg.content==='Zen!hentai') || (msg.content==='zen!hentai')){
        msg.channel.send(' 	__*no u*__');//+version
      }
      if((msg.content==='Zen!website') || (msg.content==='zen!website')){
        msg.channel.send('https://discordapp.com/developers/applications');
      }
      if((msg.content==='Zen!botlife') || (msg.content === 'zen!botlife')){
        msg.channel.send('🎀𝒯𝒽𝒾𝓈 𝒷☯𝓉 𝒾𝓈 𝒶𝒸𝓉𝒾𝓋𝑒 𝓈𝒾𝓃𝒸𝑒 𝟣𝟤.🌸𝟦.𝟤🍬𝟤🏵;𝒽𝓂𝓂 𝓉𝒽𝒶𝓉𝓈 𝒶 𝓁💗𝓉 🍩𝒻 𝓉𝒾𝓂𝑒 𝒾𝓈𝓃𝓉 𝒾𝓉?🎀');
      }
      
      if((msg.content==='Zen') || (msg.content === 'zen')){
        if(disablersd.has(msg.author.id)){
          msg.reply("you need to wait 10 seconds till you can use again Zen! command⌛");
          
        }else
        {
          msg.channel.send('Hi, Im here!');
          disablersd.add(msg.author.id);
          setTimeout(() =>{
            disablersd.delete(msg.author.id)
          
          },10000);
        }
        
    }
      /*if((msg.content==='Zen!help') || (msg.content === 'zen!help')){
        msg.reply("```Hmmm...looks like you need help, let me show you my world;(Bot prefix is 'Zen!', enjoy using it!!!) type:\nZen!version => for version info\nZen!ping => for ping\nZen!p[ex:dog,cat,killme,kiss,cuddle,love] =>for a define photo\nZen!botlife => to see since when the bot is alive:)\nZen!website =>the developer discord site\nZen!avatar=> to desplay your avatar\nZen!developer=>for more info and eventual bugs, don't hesitate\nZen!info =>more information about you\n Zen!svinfo=>info about the server that you are in```'");
      }*/
      if((msg.content==='Zen!developer') || (msg.content === 'zen!developer')){
        msg.reply("```For more information message me (Zenitsuツ#5511)```");
      }
      /*if((msg.content==='test') || (msg.content === 'zen!developer')){
        msg.reply("`` yes or no?``");
      }*/
      if (msg.content === 'Zen!rserver') {
        // Create the attachment using MessageAttachment
        // Send the attachment in the message channel
        msg.channel.send('I recommend you to try this server');
        msg.channel.send('https://discord.gg/H9NtsVK');
          // Create the attachment using MessageAttachment
        
          // Send the attachment in the message channel
          //msg.channel.send('https://media0.giphy.com/media/3oKIP8C4lSWT47ZBHW/giphy.gif?cid=ecf05e477c2f062d23c990a3166e27e666088daac5cdc780&rid=giphy.gif');
      }
      
    
      if((msg.content==='Zen!info') || (msg.content === 'zen!info`')){
        const exampleEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTimestamp()
        //.setTitle('Some title')
        //.setURL('https://discord.js.org/')
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        //.setDescription('Some description here')`node
        .setThumbnail(msg.author.avatarURL())
        .addField('Discord name',msg.author.tag)
        .addField('Your ID',msg.author.id)
        .addField("This account has been created at: ",msg.author.createdAt)
        .addField('Current Server', msg.guild.name)
        .setFooter('Made by Zenitsuツ#5511', 'https://cdn.discordapp.com/avatars/701108556996411512/d94637d3825f55da6f965027d180df34.webp');
          
        //.setImage('https://i.imgur.com/wSTFkRM.png')
        //.setTimestamp()
        ///.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
    
    msg.channel.send(exampleEmbed);
        }



        if((msg.content==='Zen!bot') || (msg.content === 'zen!bot') || (msg.content === 'Zen!Bot')){
          const exampleEmbed = new MessageEmbed()
          .setColor('#0099ff')
          .setTimestamp()
          //.setTitle('Some title')
          //.setURL('https://discord.js.org/')
          .setAuthor('ZenBot',`https://cdn.discordapp.com/attachments/704229400484380673/705831697005936640/2Q.png`,)
          //.setDescription('Some description here')`node
          .setThumbnail('https://cdn.discordapp.com/attachments/704229400484380673/705831697005936640/2Q.png')
          .addField('Version(beta)', version,true)
          .setURL('https://discord.js.org/')
          .addField('Watching over',client.users.cache.size+' users', true)
          .addField('Serving over',client.guilds.cache.size+' servers', true)
          //.addField('Bot id','698894048479674378')
          .addField('Bot life','active since  04.12.2020', true)
          .addField('Current Server', msg.guild.name, true)
          .addField('Current Bot Status','online', true)
          .addField("Support server", "[invite](https://discord.gg/H9NtsVK)",true)
          .addField('Invite link','[link](https://discord.com/oauth2/authorize?client_id=710440020674347109&permissions=8&scope=bot)',true)
          .addField('Language used to make this bot','JavaScript',true)
          .addField('Updates','Type Zen!updates to see the new commands',true)
          .addField('Bot developers',`<@701108556996411512> <@355011046513311755>`,true)
          .addField('Server owner',`${msg.guild.owner}`,true) 
          .addField('Bot id','710440020674347109',true)
          .addField('Server owner ID',`${msg.guild.ownerID}`,true) 
          .setFooter('Made by Zenitsuツ#5511', 'https://cdn.discordapp.com/avatars/701108556996411512/d94637d3825f55da6f965027d180df34.webp');
          //.setImage('https://i.imgur.com/wSTFkRM.png')
          //.setTimestamp()
          ///.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
      
      msg.channel.send(exampleEmbed);
          }


          if((msg.content==='Zen!updates') || (msg.content === 'zen!updates')|| (msg.content === 'Zen!update') || (msg.content === 'Zen!Updates')){
            const exampleEmbed = new MessageEmbed()
            .setColor('#ed6868')
            //.setTitle('Some title')
            //.setURL('https://discord.js.org/')
            .setAuthor('ZenBot',`https://cdn.discordapp.com/attachments/704229400484380673/705831697005936640/2Q.png`)
            //.setDescription('Some description here')`node
            .setThumbnail('https://cdn.discordapp.com/attachments/704229400484380673/705831697005936640/2Q.png')
            .addField('🏙️weather command🏙️','Zen!weather (city)',true)
            //.addField('🦁random meme🦁','Zen!meme')
            .addField('🔥anime🔥','Zen!anime for more info')
            .addField('🎶music🎶','Zen!music for more info')
            .addField('📔moderation command📔','Zen!help for more info')
            .addField('🦠corona live🦠','Zen!corona')
            .addField('🌆fun🪀','Zen!fun for more info')
            //.addField('🌆image🌆','Zen!image (with what you want)')
            .setTimestamp()
            .setFooter('Made by Zenitsuツ#5511', 'https://cdn.discordapp.com/avatars/701108556996411512/d94637d3825f55da6f965027d180df34.webp');
            //.setImage('https://i.imgur.com/wSTFkRM.png')
            //.setTimestamp()
            ///.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
        
        msg.channel.send(exampleEmbed);
            }
  
////member count
if (msg.content === `serverZen!`) {
  msg.channel.send(`Server name: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`);
}
        if((msg.content==='Zen!svinfo') || (msg.content === 'zen!svinfo`')){
          //var member1Count = (guild.members.cache.filter(member => !member.user.bot).size).toString() + 'Members';
          
          const exampleEmbed = new MessageEmbed()
            .setColor('#483D8B')
            //.setTitle('Some title')
            //.setURL('https://discord.js.org/')
            .setAuthor(msg.author.tag,msg.author.avatarURL())
            //.setDescription('Some description here')
            .setThumbnail(msg.guild.iconURL())
            //.setTimestamp()
            .setTimestamp()
            .addField('Current Server', msg.guild.name,true)
            .addField('All server members',  `${msg.guild.memberCount}`,true)
            //.addField("Server members",`${member1Count}`)
            .addField('Owner', `${msg.guild.owner}`,true)
            //.addField('The one who asked', `${msg.author}`,true)
            .addField('Server ID', msg.guild.id,true)
          //.addField(`This server has`,` ${msg.cache.memberCount} members!`)
          //.setImage(msg.guild.cache.iconURL)
            .addField('Server owner ID',`${msg.guild.ownerID}`,true)
            .addField("This server has been created at: ",msg.guild.createdAt) 
            .setFooter('Made by Zenitsu#5511', 'https://cdn.discordapp.com/avatars/701108556996411512/d94637d3825f55da6f965027d180df34.webp');
            
            //.setImage('https://i.imgur.com/wSTFkRM.png')
            //.setTimestamp()
            ///.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
        
        msg.channel.send(exampleEmbed);
        ///msg.channel.send (guild.avatarURL);
      // var member1Count = (guild.members.filter(member => !member.user.bot).size).toString() + 'Members';
            }
})

//TEST AICI
client.on('message', message => {
  
});

client.on("message", async message => {
    const prefix = "Zen!";

    if (message.author.bot) return; 
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const argst = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = argst.shift().toLowerCase();

    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, argst);
});
//POZE CU CHESTII DINAINTEPUSE
client.on('message', message => {
  // If the message is '!rip'
  if (message.content === 'Zen!prip') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
    // Send the attachment in the message channel
    message.channel.send(attachment);
  }
    if (message.content === 'Zen!pheaven') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://thumbs.dreamstime.com/b/heaven-gate-hope-91576937.jpg');
    // Send the attachment in the message channel
    message.channel.send(attachment);
  }
  
  if (message.content === 'Zen!pdie') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://www.spirit-of-metal.com/les%20goupes/B/Born%20To%20Die/pics/logo.jpg');
    // Send the attachment in the message channel
    message.channel.send(attachment);
  }
  if (message.content === 'Zen!plive') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://sd.keepcalms.com/i/just-live-dont-die.png');
    // Send the attachment in the message channel
    message.channel.send(attachment);
  }
  if (message.content === 'Zen!pkillme') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://m.media-amazon.com/images/I/51LQUEDx-3L._SS500_.jpg');
    // Send the attachment in the message channel
    message.channel.send(attachment);
  }
  if (message.content === 'Zen!plove') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://previews.123rf.com/images/redlinevector/redlinevector1801/redlinevector180100182/92933040-i-love-you-lettering-with-blossoms-and-roses-calligraphic-inscription-can-be-used-for-greeting-cards.jpg');
    // Send the attachment in the message channel
    message.channel.send(attachment);
  }
  if (message.content === 'Zen!pdog') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
    // Send the attachment in the message channel
    message.channel.send(attachment);
  }
  if (message.content === 'Zen!pcat') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA3dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMTkl/MkYwNSUyRjE3JTJGMTA3NDUxM18xMDc0/NTEzX2dydW1weS1jYXQtMS5qcGcmdz03/ODAmaD00NDAmaGFzaD1iZjc5OWY3Y2EyZGFmZDM4M2NkYTcwYjExMWJlMWRlNQ==.thumb.jpg');
    // Send the attachment in the message channel
    message.channel.send(attachment);
  }
  if (message.content === 'Zen!pkiss') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://images.wallpaperscraft.com/image/anime_boy_girl_tenderness_kiss_room_11582_1280x1024.jpg');
    // Send the attachment in the message channel
    message.channel.send(attachment);
  }
  if (message.content === 'Zen!pcuddles') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://i.pinimg.com/originals/22/1b/c2/221bc29dfaf096b0c0e81119c75e723a.jpg');
    // Send the attachment in the message channel
    message.channel.send(attachment);
  }
});





///VREMEA  weather command!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
client.on('message', message => {
  //let mssg=message.content.toUpperCase();
  //let sender =message.author;
  //let cont = message.content.slice(prefix.length).split(" ");
//let args=cont.slice(1);
  //var args = message.content.split(" ")
  //if(message.content==="!weather") return message.channel.send("**🏙️Please enter a location🏙️**");
  if(message.content.startsWith("Zen!")){
    const prefix="Zen!";
        let args = message.content.substring(prefix.length).split(" ");
        switch(args[0]){
    case 'weather':   message.delete();
    weather.find({search: args.join(" "),degreeType:'C'},function(err, result)
    {
      //if (result === undefined || result.length === 0) {message.channel.send('Please enter a real city!')}//message.channel.send(JSON.stringify(result[0].current,null,2));
    
      if(result.length === 0){
    message.channel.send('**🏙️Please enter a valid location🏙️**')
    return;}


    var current =result[0].current;
    var location =result[0].location;
    const exampleEmbed = new MessageEmbed()
      
    
    .setDescription(`**${current.skytext}**`)   
    .setAuthor(`Weather for ${current.observationpoint}`)
    .setThumbnail(current.imageUrl)
      .setColor('#ff729d')
        .addField('Timezone',`UTC +/-${location.timezone}`,true)
        .addField('Degree Type',location.degreetype,true)
        .addField('Temperature',`${current.temperature} Degrees`, true)
        .addField('Feels like ', ` ${current.feelslike} Degrees`, true)
        .addField('Winds',current.winddisplay, true) 
      .addField('Humidity ',`${current.humidity}%`,true) 
      .addField('Current Server', message.guild.name,true)
      .addField('Owner', `${message.guild.owner}`,true)
      .setFooter('Created by Zenitsuツ#5511','https://cdn.discordapp.com/avatars/701108556996411512/d94637d3825f55da6f965027d180df34.webp') 
    message.channel.send(exampleEmbed);
    message.channel.send(`🚈 I wish i could go to 🚀${current.observationpoint}🚀 in one day!^^⛵`);
      
  });
  }
}
  });

  


//clear command
    client.on('message', message =>{  
      if(message.content.startsWith("Zen!")){
        const prefix="Zen!";
            let args = message.content.substring(prefix.length).split(" ");
            switch(args[0]){
        case 'clear':
          message.delete();
          if(!message.member.hasPermission("ADMINISTRATOR")) 
            return message.channel.send("You Don't Have Permissions To Do This")
          else  if(args[1]==='1'){message.delete();message.delete();}
          else if(!args[1]) return message.channel.send('Please provide a number.')
        else message.channel.bulkDelete(args[1]).then ;{
          const r= new MessageEmbed()
          .setAuthor(`${message.author.tag}`,message.author.avatarURL())
          .setTimestamp()
          .setColor('#eb4034')
          .setFooter(`Server name: ${message.guild.name}, User ID: ${message.author.id}`)
          .addField("Time assigned", message.createdAt, true)
          .setDescription(`Action: <@${message.author.id}> deleted ${args[1]} messages in <#${message.channel.id}>`)
          //if (client.client.guild.cache.id==='703294913986560061') 
          if(message.guild.id==='481735279418408962')
          {client.channels.cache.get('704739357298524161').send(r); }
            console.log(`${message.author.username} deleted ${args[1]} messages in ${message.channel.name}`)
          }
      }
    }
    })
  //mute command





    ///ban command
    client.on("message", (message) => {
      const prefix='Zen!';
      if (message.content.startsWith(prefix+'ban')) {
          // Easy way to get member object though mentions.
          
          if(message.content==='Zen!ban'){
            return message.channel.send("Invalid, please provide a member!");
          }
          else if(message.member.hasPermission("ADMINISTRATOR"))
          {
          var member= message.mentions.members.first();
          // ban
          member.ban().then((member) => {
              // Successmessage
              const e= new MessageEmbed()
              .setTitle(":point_right:" + member.displayName + " has been successfully banned :wave: ")
              .setImage(`https://thumbs.gfycat.com/AssuredAcrobaticAchillestang-size_restricted.gif`)
              message.channel.send(e);
              const r= new MessageEmbed()
              .setAuthor(`${message.author.tag}`,message.author.avatarURL())
              .setTimestamp()
              .setFooter(`Server name: ${message.guild.name}, User ID: ${message.author.id}`)
              .setColor('#eb4034')
              .addField("Time assigned", message.createdAt, true)
              .setDescription(`Action: ${message.guild.id} ban ${member}`)
              if(message.guild.id==="481735279418408962")
                client.channels.cache.get('704739357298524161').send(r); 
            // console.log(message.content.author+"banned"+)
            ///message.channel.send("Access Denied");
        }).catch(() => {
             // Failmessage
             message.channel.send("You can not ban this member");
             
        });
      }
      else message.channel.send("Acces Denied")
    }
});
client.on('message', async message =>{    
//kick command
  const prefix='Zen!';
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();  
if (message.content.startsWith(prefix+'kick')) {
  // Easy way to get member object though mentions.
  if(message.content==='Zen!kick'){
    return message.channel.send("Invalid, please provide a member!");
  }
  else if (message.member.hasPermission("ADMINISTRATOR"))
  {
  var member= message.mentions.members.first();
  // Kick
  member.kick().then((member) => {
      // Successmessage
      const e= new MessageEmbed()
            .setTitle(":point_right:" + member.displayName + " has been successfully kicked :wave: ")
            .setImage(`https://i.imgur.com/0PITgFe.gif`)
            message.channel.send(e);
            const r= new MessageEmbed()
            .setAuthor(`${message.author.tag}`,message.author.avatarURL())
            .setTimestamp()
            .setFooter(`Server name: ${message.guild.name}, User ID: ${message.author.id}`)

            .setColor('#eb4034')
            .addField("Time assigned", message.createdAt, true)
            .setDescription(`Action: <@${message.author.id}> kicked ${member}`)
            if(message.guild.id==="481735279418408962")
         client.channels.cache.get('704739357298524161').send(r); 
   
     
  }).catch(() => {
       // Failmessage
      message.channel.send("You can not kick this member");
  });
} else return message.channel.send('Access Denied')

}






///say command
if(message.content.startsWith("Zen!say")){
  ///||(message.author.id==='701108556996411512')  ||(message.author.id==='355011046513311755')416989272432836609
  let text = args.join(" ");
  if(message.content==="Zen!say")
  return message.channel.send("You have to say something...")
  if(message.member.hasPermission("ADMINISTRATOR")||(message.author.id==="653099828364050442")||(message.author.id==="701108556996411512") )   //if((message.author.tag==="UNKNOWNFOX#2317") ||(message.author.id==='416989272432836609')||(message.author.id==='166678082151907328') ||(message.author.id==='355011046513311755')||(message.author.id==='573290240354156578')||(message.author.id==='653099828364050442'))
  {    let text = args.join(" ");
  console.log(message.author.username+" used say command to say: "+text)
  message.delete();
  message.channel.send(text);
  const r= new MessageEmbed()
            .setAuthor(`${message.author.tag}`,message.author.avatarURL())
            .setTimestamp()
            .setFooter(`Server name: ${message.guild.name}, User ID: ${message.author.id}`)
            .setColor('#eb4034')
            .addField("Time assigned", message.createdAt, true)
            .setDescription(`Action: <@${message.author.id}> used Zen!say command to say "${text}" in <#${message.channel.id}>`)
   if(message.guild.id==="481735279418408962")
         client.channels.cache.get('704739357298524161').send(r); 
   }
   else {
    console.log(message.author.username+` failed to use say command!!`)
    console.log(`The text was: ${text}`) 
    return message.channel.send(`🚫**Sorry ${message.author.username} you don't have the administrator permission to use Zen!say command!**🚫`);
   }
} 
if(message.content.startsWith("Zen, thanks mate")){
message.channel.send("Np mate, Im always here!GG");
}
});



/*
/////GIVEAWAY COMMAND!!!!!!!!!!!!!!!
client.on('message', async message => {
  const prefix='Zen!';
  
var messageArray = message.content.split(" ");
  var cmd = messageArray[0];
  if(cmd.toLowerCase()==`${config.prefix}giveaway`){
var item="";
var time;
var winnerCount;
for(var i=3;i<messageArray.length;i++)
{
  item+=(messageArray[i]+" ");    
}
winnerCount=Number(messageArray[1]);
time=Number(messageArray[2]);
var embed =new MessageEmbed();
embed.setDescription(item);
var embedSent=await message.channel.send(embed);
embedSent.react("🎉");
setTimeout(function(){
var peopleReacted=embedSent.reactions.get("🎉").users.array();
var index=Math.floor(Math.random()*peopleReacted.length);
var winners =[];
var winnerMessage ="";
for(var1=0;i<winnerCount;i++)
{winners.push(peopleReacted[index]);
index =Math.floor(Math.random()*peopleReacted.length);
}
for(var i=0;i<winners.length;i++){
winnerMessage +=(winners[i].toString()+ " ");
}
var haveHas= "has";
if(winners.length ==1)
{
   haveHas= "has";
}
else {
  haveHas="have";
}

message.channel.send(winnerMessage +" "+haveHas +`won ${item}`);
}, time*1000);
}
});
*/


////PING///
client.on("message", async message => {
if ((message.content === "Zen!ping") ||(message.content === "zen!ping"))
{
console.log(message.guild.ownerID)
const msg = await message.channel.send(`🏓 Pinging....`);
let ping=msg.createdAt - message.createdAt
msg.edit(`🏓 Pong!, I won🥇  \n🔢Latency is \`${ping}ms\`\n🔬API Latency is \`${Math.round(client.ws.ping)}ms\``);
//message.reply('Ahh...I cant look..Is it bad?(answer "yes" or "no")');
}
});














////8ball!!!!!!!!!z
const PREFIX = "*" // bot's prefix
client.on("message", function(message) { 
//var mutedrole = message.guild.roles.find("name", "muted");
var args = message.content.substring(PREFIX.length).split(" "); // removes the prefix from the message
  var command = args[0].toLowerCase(); // sets the command to lowercase (making it incase sensitive) // creates the command cookie
  i/*f(message.content.startsWith("Zen!")){
    const prefix="Zen!";
        let args = message.content.substring(prefix.length).split(" ");
        switch(args[0]){
          case 'cookie':
  if (message.mentions.members.first()) message.channel.send(`${message.author} has given  ${message.mentions.members.first()}  a cookie! :cookie:`) // sends the message saying someone has given someone else a cookie if someone mentions someone else
  else message.channel.send("Who do you want to send a cookie to? :cookie: (Correct usage: Zen!cookie @username)") // sends the error message if no-one is mentioned
}}*/
if (message.content === "Zen!help" || message.content === "ZEN!HELP" || message.content === "zen!help")
{
if(message.channel.id==='602983035645722625')   
     return message.channel.send(`<@${message.author.id}>, you can use Zen!help command in <#699361324307841094>`);
if(message.channel.id==='700363955213959178')   
     return message.channel.send(`<@${message.author.id}>, you can use Zen!help command in <#699361324307841094> `);
message.channel.send(`Hey ${message.author}, check your DM's:mailbox:`)
let pages =['***List of Commands***','***List of Commands***','***List of Commands***'];
let page = 1;
let embed=new MessageEmbed() 
var embed1 = new MessageEmbed() // sets a embed box to the variable embedhelpmember
.setAuthor('ZenBot',`https://cdn.discordapp.com/attachments/704229400484380673/705831697005936640/2Q.png`)      
.addField(" - help-", "Zen!  (this will help you to understand the bot)") // sets the first field to explain the command *help
    .addField(" - help moderation-", "Displays this message (Correct usage: Zen!help)") // sets the first field to explain the command *help
    .addField(" - music", "this bot has music commands (Type Zen!music for more info))") //sets a field
    .addField(" - anime", "anime help (Correct usage: Z!anime))") //sets a field
    .addField(" - bot", "See bot information (Correct usage: Zen!bot))") //sets a field
    .addField(" - weather", "See weather in a specific location (Correct usage: Zen!weather [city]))") //sets a field
   .setColor(0xFFA500) // sets the color of the embed box to orange

    .setFooter("You need help, do you?") // sets the footer to "You need help, do you?"
    .setFooter(`Page ${page} of ${pages.length}`)
.setDescription(pages[page-1]) 
var embedhelpadmin = new MessageEmbed() // sets a embed box to the var embedhelpadmin
.setAuthor('ZenBot',`https://cdn.discordapp.com/attachments/704229400484380673/705831697005936640/2Q.png`)      
.setTitle("**List of Admin Commands**\n") // sets the title
    .addField(" - say", "Makes the bot say whatever you want (Correct usage: Zen!say [message])")
    .addField(" - mute", "Mutes a desired member with a reason (Coorect usage: Zen!mute @username [reason])-beta-") // sets a field
    .addField(" - unmute", "Unmutes a muted player (Correct usage:  Zen!unmute @username)-beta-")
    .addField(" - kick", "Kick a desired member(Correct usage: Zen!kick @username)") //sets a field
    .addField(" - ban", "Ban a desired member(Correct usage: Zen!ban @username)") //sets a field
    .addField(" - clear", "Clear an amount of messages (Correct usage: Zen!clear (number))") //sets a field
    .addField(" - id", "See your id (Correct usage: Zen!my id)") //sets a field
    .addField(" - bot name", "Set the bot name (Correct usage: Zen!name <name>)")
    .setColor(0xFF0000) // sets a color
    .setFooter( "Only admins ca see this message!") // sets the footer
  
    const embed2=new MessageEmbed()
    .setAuthor('ZenBot',`https://cdn.discordapp.com/attachments/704229400484380673/705831697005936640/2Q.png`)   
    .setColor(0xFFA500) // sets the color of the embed box to orange.addField(" - version", "see the version of the bot (Correct usage: Zen!version)") //sets a field
        .addField(" - meme", "See a random meme (Correct usage: Zen!randommeme or Zen!meme))") //sets a field
        .addField(" - ping", "Tests your ping (Correct usage: Zen!ping)") // sets the second field to explain the command *ping
        .addField(" - anime", "See an anime from the list (Correct usage: Zen!anime <number>)") // sets the third field to explain the command *cookie
        .addField(" - coronavirus", "See updates about the virus (Type Zen!corona))") //sets a field
        .addField(" - 8ball", "Answers to all of your questions! (Correct usage: Zen!8ball [question])") // sets the field to the 8ball command
        .addField('- updates-','Type Zen!updates to see the new commands')
        .setColor(0xFFA500) // sets the color of the embed box to orange    
    .setFooter("You need help, do you?") // sets the footer to "You need help, do you?"
    .setFooter(`Page ${page} of ${pages.length}`)
.setDescription(pages[page-1]) 
    const embed3=new MessageEmbed()
    .setAuthor('ZenBot',`https://cdn.discordapp.com/attachments/704229400484380673/705831697005936640/2Q.png`)
    .addField('- avatar-','Type Zen!avatar to see your avatar')
    .addField(" - random anime", "See an anime random(Correct usage: Zen!ranime)") // sets the third field to explain the command *cookie 
.addField(" - anime sites", "See the top of my anime sites (Correct usage: Zen!anime sites)") // sets the third field to explain the command *cookie 
.setColor(0xFFA500) // sets the color of the embed box to orange.addField(" - version", "see the version of the bot (Correct usage: Zen!version)") //sets a field
.addField(" - info", "Tells info about the server(Correct usage: Zen!svinfo)") // sets the field information about the command *info
.addField(" - photo", "Zen!p[ex:dog,cat,killme,kiss,cuddle,love] =>for a define photo)") //sets a field
.addField(" - riceball", "Sends a riceball to the desired player! 🍙 (Correct usage: ``Zen!riceball @username``)") // sets the third field to explain the command *cookie




//.addField("***5) Black Bullet (Japanese: ブラック・ブレット, Hepburn: Burakku Buretto)***","```In the year 2021, a parasitic virus known as 'Gastrea' infects humans and turns them into monsters. What is left of mankind now lives within the Monolith walls, walls that are made of Varanium, the only material that can hurt Gastrea. ```")
///.addField("***6) Rokka: Braves of the Six Flowers (六花の勇者, Rokka no Yūsha, lit. `Heroes of the Six Flowers`***","```Six people called Braves of the Six Flowers are chosen by the Goddess of Fate to defeat the Demon God (魔神, Majin). However, when they gather, there are seven heroes present, leading them to believe that one is an impostor and on the side of the Demon God.```")
//.setFooter(`Page ${page} of ${pages.length}`)
.setDescription(pages[page-1]) 
if(message.member.hasPermission("ADMINISTRATOR"))     
message.member.send(embedhelpadmin); // if member is a botadmin, display this too

if(page===1)
{embed=embed1;
}
if(page===2)
{embed=embed2;
}
if(page===3)
{embed=embed3;
}


message.channel.send(embed).then(msg=>{
msg.react('⏪').then(r=>{
msg.react('⏩')


const backwardsFilter=(reaction,user)=>reaction.emoji.name==='⏪'&& user.id===message.author.id;
const forwardsFilter=(reaction,user)=>reaction.emoji.name==='⏩'&& user.id===message.author.id;
const backwards=msg.createReactionCollector(backwardsFilter,{time:1000000000});
const forwards=msg.createReactionCollector(forwardsFilter,{time:1000000000}); 
backwards.on("collect",r=>{
if(page===1) return;
page--;
if(page===1)
{embed=embed1;
}
if(page===2)
{embed=embed2;
}
if(page===3)
{embed=embed3;
}
embed.setDescription(pages[page-1]);
embed.setFooter(`Page ${page} of ${pages.length}`);
msg.edit(embed)

})
forwards.on('collect',r=>{
if(page===pages.length) return;
page++;
if(page===2)
{embed=embed2;
}
if(page===3)
{embed=embed3;
}
embed.setDescription(pages[page-1]);
embed.setFooter(`Page ${page} of ${pages.length}`);
msg.edit(embed)
return;
})


})
})}







if (message.content === "Zen!music") { // creates a command *help
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
    .setTitle("**List of Commands**\n") // sets the title to List of Commands
    .addField(" - help", "Displays this message (Correct usage: Zen!music)") // sets the first field to explain the command *help
    .addField(" - skip", "Skip a song (Correct usage: Zen!skip)") // sets the first field to explain the command *help
    .addField(" - stop", "Stop a song (Correct usage: Zen!stop)") // sets the first field to explain the command *help 
    .addField(" - play", "Play a song(Correct usage: Zen!play (and the link of the song))") // sets the field information about the command *info
    .addField(" - pause -", "Pause a song(Correct usage: Zen!pause)") // sets the field information about the command *info
  .addField(" - resume -", "Resume a song(Correct usage: Zen!resume)") // sets the field information about the command *info
    .addField(" - queue", "See how many song are about to be played (Correct usage: Zen!queue)") // sets the second field to explain the command *ping
    .setColor('#FF7F50') // sets the color of the embed box to orange
    .setFooter("I love music, do you?") // sets the footer to "You need help, do you?"
message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
// if member is a botadmin, display this too
}
if (message.content === "Zen!support") { // creates a command *help
message.channel.send("https://discord.gg/r9zVPM"); // sends the embed box "embedhelpmember" to the chatif
// if member is a botadmin, display this too
}
if ((message.content === "Zen!vote") ||(message.content === "zen!vote")||(message.content === "Zen!votes")||(message.content === "zen!votes")) {
message.delete()
message.channel.send("https://top.gg/bot/710440020674347109/vote");
}

if ((message.content === "Zen!corona") ||(message.content === "zen!corona")) { // creates a command *help
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
    .setTitle("**List of Commands**\n") // sets the title to List of Commands
    .addField("Last update","```02/05/2020-12:45:00```") // sets the field information about the command *info
    .addField("Total cases:", "```3,414,945  ```",true) // sets the second field to explain the command *ping
    .addField("Total deaths:", "```239,792```",true) // sets the second field to explain the command *ping      
    .addField("Recovered:", "```1,087,116```",true) // sets the second field to explain the command *ping      
    .addField("Active cases:", "```2,088,037```",true) // sets the second field to explain the command *ping      
    .addField("Closed cases:", "```1,326,908```",true) // sets the second field to explain the command *ping      
    .addField("Serious or Critical", "```51,312(2%)```",true) // sets the second field to explain the command *ping      
    .addField("In Mild Condition", "```2,036,725(98%)```",true) // sets the second field to explain the command *ping      
    .addField("Recovered / Discharged", "``` 1,087,116(82%)```",true) // sets the second field to explain the command *ping      
    .addField("SARS-CoV-2 Transmission", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
    .setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
    .setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
    .setColor('#986bdb') // sets the color of the embed box to orange
    .setTimestamp()
    .setFooter("#STAYHOME|STAYSAFE") // sets the footer to "You need help, do you?"
message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
// if member is a botadmin, display this too
}

/*
///AVATAR AVATAR COMMAND avatar command
if ((message.content === "Zen!avatar") ||(message.content === "zen!avatar")) { // creates a command *help
let y=message.author.displayAvatarURL()
///message.channel.send(y);
const img = y;
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
//.attachFiles(['https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg'])
    .setTitle("**Avatar**")
    .setAuthor(message.author.tag ,message.author.avatarURL())
    //.setImage(`${message.author.displayAvatarURL()}`)
        .setImage(user.avatarURL)
    .setColor('RANDOM') // sets the color of the embed box to orange
    //.setTimestamp()
    //.setFooter("I really love it") // sets the footer to "You need help, do you?"
message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
// if member is a botadmin, display this too
//const attachment= new MessageAttachment(`${y}`)
//message.channel.send(attachment)

}*/
//Zen!avatar command avatar command
let pref="Zen!"
if (message.content.startsWith(pref+ 'avatar')) {
const user = message.mentions.users.first() || message.author;
const avatarEmbed = new MessageEmbed()
    .setColor(0x333333)
    .setAuthor(user.tag,user.avatarURL())
    .setDescription("**Avatar**")
    //msg.author.avatarURL()
    .setImage(`${user.avatarURL()}`);
message.channel.send(avatarEmbed);
}

///Help total
if ((message.content === "Zen!")||(message.content === "zen!")) {
if(message.channel.id==='700363955213959178')   
     return message.channel.send(`<@${message.author.id}>, you can use Zen! command in <#699361324307841094>`); // creates a command *help
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
    .setTitle("**List of Commands**\n") // sets the title to List of Commands
    .setAuthor('ZenBot',`https://cdn.discordapp.com/attachments/704229400484380673/705831697005936640/2Q.png`)
    .addField(" - help", "Displays help message(around 30 commands; Correct usage: Zen!help)") // sets the first field to explain the command *help
    .addField(" - anime", "Displays anime help message(around 20 commands; Correct usage: Zen!anime)") // sets the first field to explain the command *help
    .addField(" - music", " Displays music help message(around 5 commands; Correct usage: Zen!music)") // sets the first field to explain the command *help 
    .addField(" - fun", "Displays fun help message(Correct usage: Zen!fun)") // sets the field information about the command *info
    .addField(" - updates", "There you can see the last updates(Correct usage: Zen!update)") // sets the field information about the command *info
    .addField(" - bot", "About the bot(servers and users) (Correct usage: Zen!bot)") // sets the second field to explain the command *ping
    .setColor('#280137') // sets the color of the embed box to orange
    .setFooter("I'm here to help you!") // sets the footer to "You need help, do you?"
message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
// if member is a botadmin, display this too
}

/////Fun
if ((message.content === "Zen!fun")||(message.content === "zen!fun")) { 
if(message.channel.id==='700363955213959178')   
return message.channel.send(`<@${message.author.id}>, you can use Zen!fun command in <#699361324307841094>`);// creates a command *help
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
    .setTitle("**List of Commands**\n") // sets the title to List of Commands
    .addField(" - Help", "Displays help message(Correct usage: ``Zen!fun``)") // sets the first field to explain the command *help
    .addField(" - Dice", "Dice game(Correct usage: ``Zen!roll <number>``)") // sets the first field to explain the command *help
    .addField(" - Coin", " Coin flip game(Correct usage: ``Zen!coin``)") // sets the first field to explain the command *help 
    .addField(" - 8ball", "8ball game(Correct usage: ``Zen!8ball <question>``)") // sets the field information about the command *info]
    .addField('Image','Displays an image (Correct usage: ``Zen!image <something>``)')
    .addField(" -Meme", "Displays a meme(Correct usage: ``Zen!meme``)")
    .addField(" -Gif", "Send a gif(Correct usage:``Zen!kiss,hit,slap,hug,hi,kill,pat,bite,bully,cry @username``)") // sets the field information about the command *info]
    .addField(" - riceball", "Sends a riceball to the desired player! 🍙 (Correct usage: ``Zen!riceball @username``)") // sets the third field to explain the command *cookie
    .setColor("RANDOM") // sets the color of the embed box to orange
    .setFooter("I'm here to help you!") // sets the footer to "You need help, do you?"
message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
// if member is a botadmin, display this too
}


////ANIME////////////////////////////
if (message.content === "Zen!anime") { 
if(message.channel.id==='700363955213959178')   
     return message.channel.send(`<@${message.author.id}>, you can use Zen!anime command in <#699361324307841094>`);// creates a command *help
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
    .setTitle("**List of Commands**\n") // sets the title to List of Commands
    .addField(" - help", "Displays this message (Correct usage: `Zen!anime`)") // sets the first field to explain the command *help
    .addField(" - list ", "See all the anime(Correct usage: `Zen!anime list`)") // sets the first field to explain the command *help
    .addField(" - random anime", "See a random anime (Correct usage: `Zen!ranime`)") // sets the first field to explain the command *help 
    .addField(" - anime sites", "Top 10 anime sites(Correct usage: `Zen!anime sites`)") // sets the field information about the command *info
    .addField(" - search anime", "Search an anime(Correct usage: `Z!anime <anime name>`)") // sets the field information about the command *info
    .addField(" - search anime", "Search an anime(Correct usage: `Zen!anime <number (1-20)>`)") // sets the field information about the command *info
    .addField(" - search quote", "Search a quote(Correct usage: `Zen!quote <anime name>`)") // sets the field information about the command *info
    .addField(" - random quote", "See a random quote(Correct usage: `Zen!quote`)") // sets the field information about the command *info 
    .setColor('#4ada76') // sets the color of the embed box to orange
    .setFooter("I love anime, do you?") // sets the footer to "You need help, do you?"
message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
// if member is a botadmin, display this too
}


////ID////////////////////////////
if (message.content === "Zen!my id") { // creates a command *help
message.channel.send("Your id is: "+message.author.id); // sends the embed box "embedhelpmember" to the chatif
// if member is a botadmin, display this too
}



///ANIME SITES
if ((message.content === "Zen!anime sites") ||(message.content === "zen!anime sites"))
{
if(message.channel.id==='700363955213959178')   
     return message.channel.send(`<@${message.author.id}>, you can use Zen!animesites command in <#699361324307841094>`);
let pages =["***#Top 10***","***#Best Anime Sites ***"];
let page = 1;
let embed=new MessageEmbed() 
const embed1=new MessageEmbed()      
//.addField("***1) Death Note(デスノート Desu Nōto)***","```A bright but bored boy attempts to rid the world of evil using a strange and deadly notebook that kills anyone whose name is written in its pages. His quest is complicated when a genius detective begins investigating the murders. ```")
    //.addField("***2) Tokyo Ghoul(東京喰種)***","```The story follows Ken Kaneki, a college student who barely survives a deadly encounter with Rize Kamishiro, his date who reveals herself as a ghoul. He is taken to the hospital in critical condition. After recovering, Kaneki discovers that he underwent a surgery that transformed him into a half-ghoul.  ```")
    //.addField("***3) Code Geass: Lelouch of the Rebellion (コードギアス 反逆のルルーシュ, Kōdo Giasu: Hangyaku no Rurūshu)***","```A bright but bored boy attempts to rid the world of evil using a strange and deadly notebook that kills anyone whose name is written in its pages. His quest is complicated when a genius detective begins investigating the murders. ```")
    .addField("***1) 4anime***","https://4anime.to/")
    .addField("***2) 9anime.to***","https://9anime.to/")
    .addField("***3) kissanimefree***","https://kissanimefree.xyz/")
    .addField("***4) animelab.com***","https://www.animelab.com/")
    .addField("***5) crunchyroll.com***","https://www.crunchyroll.com/").setColor('#33cc33')
    .setFooter(`Page ${page} of ${pages.length}`)
.setDescription(pages[page-1]) 

const embed2=new MessageEmbed()
     .addField("***6) animesimple.com***","https://ww1.animesimple.com/")
    .addField("***7) animeheaven.ru***","https://animeheaven.ru/")
    .addField("***8) animefreak.tv***","https://www.animefreak.tv/")
    .addField("***9) animesimple.com***","https://ww1.animesimple.com/")  
    .addField("***10) animedao.com***","https://animedao.com/")  
    .setColor('#ff0066')

//.addField("***5) Black Bullet (Japanese: ブラック・ブレット, Hepburn: Burakku Buretto)***","```In the year 2021, a parasitic virus known as 'Gastrea' infects humans and turns them into monsters. What is left of mankind now lives within the Monolith walls, walls that are made of Varanium, the only material that can hurt Gastrea. ```")
///.addField("***6) Rokka: Braves of the Six Flowers (六花の勇者, Rokka no Yūsha, lit. `Heroes of the Six Flowers`***","```Six people called Braves of the Six Flowers are chosen by the Goddess of Fate to defeat the Demon God (魔神, Majin). However, when they gather, there are seven heroes present, leading them to believe that one is an impostor and on the side of the Demon God.```")
//.setFooter(`Page ${page} of ${pages.length}`)
.setDescription(pages[page-1]) 


if(page===1)
{embed=embed1;
}
if(page===2)
{embed=embed2;
}


message.channel.send(embed).then(msg=>{
msg.react('⏪').then(r=>{
msg.react('⏩')


const backwardsFilter=(reaction,user)=>reaction.emoji.name==='⏪'&& user.id===message.author.id;
const forwardsFilter=(reaction,user)=>reaction.emoji.name==='⏩'&& user.id===message.author.id;
const backwards=msg.createReactionCollector(backwardsFilter,{time:1000000000});
const forwards=msg.createReactionCollector(forwardsFilter,{time:1000000000}); 
backwards.on("collect",r=>{
if(page===1) return;
page--;
if(page===1)
{embed=embed1;
}
if(page===2)
{embed=embed2;
}
embed.setDescription(pages[page-1]);
embed.setFooter(`Page ${page} of ${pages.length}`);
msg.edit(embed)

})
forwards.on('collect',r=>{
if(page===pages.length) return;
page++;
if(page===2)
{embed=embed2;
}

embed.setDescription(pages[page-1]);
embed.setFooter(`Page ${page} of ${pages.length}`);
msg.edit(embed)
return;
})


})

})}




////////////INCERACREA MOARTE N.ARE////////////
if ((message.content === "Zen!anime list") ||(message.content === "zen!anime list"))
{
let pages =['***#Action #Mystery***','***#Action #Drama #Aventure***','***#Action #Shounen #Supernatural***','***#Action #Comedy #Martial #Arts #Shounen***',"***#Action #Drama #Mecha #Military #Sci-Fi #Super #Power***","***#Action #Ecchi #Fantasy Shounen***"];
let page = 1;
let embed=new MessageEmbed() 
const embed1=new MessageEmbed()      
//.addField("***1) Death Note(デスノート Desu Nōto)***","```A bright but bored boy attempts to rid the world of evil using a strange and deadly notebook that kills anyone whose name is written in its pages. His quest is complicated when a genius detective begins investigating the murders. ```")
    //.addField("***2) Tokyo Ghoul(東京喰種)***","```The story follows Ken Kaneki, a college student who barely survives a deadly encounter with Rize Kamishiro, his date who reveals herself as a ghoul. He is taken to the hospital in critical condition. After recovering, Kaneki discovers that he underwent a surgery that transformed him into a half-ghoul.  ```")
    //.addField("***3) Code Geass: Lelouch of the Rebellion (コードギアス 反逆のルルーシュ, Kōdo Giasu: Hangyaku no Rurūshu)***","```A bright but bored boy attempts to rid the world of evil using a strange and deadly notebook that kills anyone whose name is written in its pages. His quest is complicated when a genius detective begins investigating the murders. ```")
    .addField("***1) Death Note(デスノート Desu Nōto)***","```A bright but bored boy attempts to rid the world of evil using a strange and deadly notebook that kills anyone whose name is written in its pages. His quest is complicated when a genius detective begins investigating the murders. ```")
    .addField("***2) Tokyo Ghoul(東京喰種)***","```The story follows Ken Kaneki, a college student who barely survives a deadly encounter with Rize Kamishiro, his date who reveals herself as a ghoul. He is taken to the hospital in critical condition. After recovering, Kaneki discovers that he underwent a surgery that transformed him into a half-ghoul.  ```")
    .addField("***3) Code Geass: Lelouch of the Rebellion (コードギアス 反逆のルルーシュ, Kōdo Giasu: Hangyaku no Rurūshu)***","```A bright but bored boy attempts to rid the world of evil using a strange and deadly notebook that kills anyone whose name is written in its pages. His quest is complicated when a genius detective begins investigating the murders. ```")
   .setColor('#33cc33')
    .setFooter(`Page ${page} of ${pages.length}`)
.setDescription(pages[page-1]) 

const embed2=new MessageEmbed()
.addField("***4) Charlotte (シャーロット, Shārotto)***","```Charlotte takes place in an alternate reality where a short-period comet called Charlotte passes near Earth once every 75 years. As this happens, it spreads dust onto the Earth, which causes a small percentage of preadolescent children who inhale the dust to manifest superhuman abilities upon reaching puberty.  ```")
.addField("***5) Black Bullet (Japanese: ブラック・ブレット, Hepburn: Burakku Buretto)***","```In the year 2021, a parasitic virus known as 'Gastrea' infects humans and turns them into monsters. What is left of mankind now lives within the Monolith walls, walls that are made of Varanium, the only material that can hurt Gastrea. ```")
.addField("***6) Rokka: Braves of the Six Flowers (六花の勇者, Rokka no Yūsha, lit. `Heroes of the Six Flowers`***","```Six people called Braves of the Six Flowers are chosen by the Goddess of Fate to defeat the Demon God (魔神, Majin). However, when they gather, there are seven heroes present, leading them to believe that one is an impostor and on the side of the Demon God.```")
.setColor('#ff0066')
const embed3=new MessageEmbed()
    .addField("***7) Naruto (ナルト)`***","```A powerful fox known as the Nine-Tails attacks Konoha, the hidden leaf village in the Land of Fire, one of the Five Great Shinobi Countries in the Ninja World.```")
    .addField("***8) Demon Slayer: Kimetsu no Yaiba (Japanese: 鬼滅の刃, Hepburn: Kimetsu no Yaiba, lit. `Blade of Demon Destruction`)`***","```In Taishō-era Japan, Tanjiro Kamado is a kindhearted and intelligent boy who lives with his family in the mountains. ```")
    .addField("***9)  My Hero Academia (Japanese: 僕のヒーローアカデミア, Hepburn: Boku no Hīrō Akademia)***","```In a world where currently most of the human population possess superpowers, labeled as `Quirks` (個性, Kosei) following the transitional period```")
    .addField("***10)  Your Lie in April, known in Japan as Shigatsu wa Kimi no Uso (四月は君の嘘)***","```Piano prodigy Kōsei Arima dominates various music competitions and becomes famous among child musicians, but also controversial. When his mother Saki dies suddenly```")
    .setColor('#0000ff') 
const embed4=new MessageEmbed()
.addField("***11)  One-Punch Man (Japanese: ワンパンマン, Hepburn: Wanpanman)***","```On a supercontinent Earth, powerful monsters and villains have been wreaking havoc in the cities. To combat them, the millionaire Agoni creates the Hero Association, which employs superheroes to stop them. Saitama, an unassociated hero.```")
.addField("***12)  : Naruto: Shippūden***","```It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger.```")  
.addField("***13)  Black Butler (Japanese: 黒執事, Hepburn: Kuroshitsuji) ***","```Young Ciel Phantomhive is known as `the Queen's Guard Dog,` taking care of the many unsettling events that occur in Victorian England for Her Majesty.```")
.addField("***14) March Comes in Like a Lion (Japanese: 3月のライオン, Hepburn: Sangatsu no Raion, lit. `The Lion of March`)***","```Having reached professional status in middle school, Rei Kiriyama is one of the few elite in the world of shogi.```")
.setColor('#ffcc99')
const embed5=new MessageEmbed()
.addField("***15) Code Geass: Lelouch of the Rebellion R2 (Japanese: コードギアス 反逆のルルーシュ R2, Hepburn: Kōdo Giasu: Hangyaku no Rurūshu R2)***","```One year has passed since the Black Rebellion, a failed uprising against the Holy Britannian Empire led by the masked vigilante Zero, who is now missing. ```")  
.addField("***16) JoJo's Bizarre Adventure (Japanese: ジョジョの奇妙な冒険, Hepburn: JoJo no Kimyō na Bōken)***","```In 1868, Dario Brando saves the life of an English nobleman, George Joestar. By taking in Dario's son Dio when the boy becomes fatherless.```")
.addField("***17) Hunter × Hunter (Japanese: ハンター×ハンター, Hepburn: Hantā Hantā)***","```The story follows a young boy named Gon Freecss, who was told all his life that both his parents were dead. But when he learns from Kite, an apprentice of his father Ging Freecss, that he is still alive and has since become an accomplished Hunter.```")
.addField("***18) Kaguya-sama: Love Is War***","```At the renowned Shuchiin Academy, Miyuki Shirogane and Kaguya Shinomiya are the student body's top representatives. Ranked the top student in the nation and respected by peers and mentors alike, Miyuki serves as the student council president.```")
.setColor('#782069')
const embed6=new MessageEmbed()
.addField("***19) Plunderer (Japanese: プランダラ, Hepburn: Purandara)***","```Alcia is a world governed by 'Count': numbers engraved on a person's body, representing any number related to their life. These Counts determine a person's social status and power in Alcia.```")
.addField("***20) Wise Man's Grandchild (賢者の孫, Kenja no Mago, lit. 'The Sage's Grandson')***","```In the kingdom of Earlshide, Merlin Walford was once regarded as a national hero, hailed for both his power and achievements. Preferring a quiet life however, he secludes himself deep in the rural woods, dedicating his time to raising an orphan that he saved. ```")
      
.setColor("#207829")
//.addField("***5) Black Bullet (Japanese: ブラック・ブレット, Hepburn: Burakku Buretto)***","```In the year 2021, a parasitic virus known as 'Gastrea' infects humans and turns them into monsters. What is left of mankind now lives within the Monolith walls, walls that are made of Varanium, the only material that can hurt Gastrea. ```")
///.addField("***6) Rokka: Braves of the Six Flowers (六花の勇者, Rokka no Yūsha, lit. `Heroes of the Six Flowers`***","```Six people called Braves of the Six Flowers are chosen by the Goddess of Fate to defeat the Demon God (魔神, Majin). However, when they gather, there are seven heroes present, leading them to believe that one is an impostor and on the side of the Demon God.```")
//.setFooter(`Page ${page} of ${pages.length}`)
.setDescription(pages[page-1]) 


if(page===1)
{embed=embed1;
}
if(page===2)
{embed=embed2;
}
if(page===3)
{embed=embed3;
}
if(page===4)
{embed=embed4;
}
if(page===5)
{embed=embed5;
}
if(page===6)
{embed=embed6;
}



message.channel.send(embed).then(msg=>{
msg.react('⏪').then(r=>{
msg.react('⏩')


const backwardsFilter=(reaction,user)=>reaction.emoji.name==='⏪'&& user.id===message.author.id;
const forwardsFilter=(reaction,user)=>reaction.emoji.name==='⏩'&& user.id===message.author.id;
const backwards=msg.createReactionCollector(backwardsFilter,{time:1000000000});
const forwards=msg.createReactionCollector(forwardsFilter,{time:1000000000}); 
backwards.on("collect",r=>{
if(page===1) return;
page--;
if(page===1)
{embed=embed1;
}
if(page===2)
{embed=embed2;
}
if(page===3)
{embed=embed3;
}
if(page===4)
{embed=embed4;
}
if(page===5)
{embed=embed5;
}
if(page===6)
{embed=embed6;
}
embed.setDescription(pages[page-1]);
embed.setFooter(`Page ${page} of ${pages.length}`);
msg.edit(embed)

})
forwards.on('collect',r=>{
if(page===pages.length) return;
page++;
if(page===2)
{embed=embed2;
}
if(page===3)
{embed=embed3;
}
if(page===4)
{embed=embed4;
}
if(page===5)
{embed=embed5;
}
if(page===6)
{embed=embed6;
}
embed.setDescription(pages[page-1]);
embed.setFooter(`Page ${page} of ${pages.length}`);
msg.edit(embed)
return;
})


})

})}


///ANIME RANDOM
if ((message.content === "Zen!ranime") ||(message.content === "zen!ranime")) { // creates a command *help
//number=15;
//var ok=Math.floor(Math.random() *(number-1+1))+1;
if(ok===0)
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
    .setTitle("**Random Anime**\n") // sets the title to List of Commands
    //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
    //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
    //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
    //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
    .addField("***1) Death Note(デスノート Desu Nōto)***","```A bright but bored boy attempts to rid the world of evil using a strange and deadly notebook that kills anyone whose name is written in its pages. His quest is complicated when a genius detective begins investigating the murders. ```")
    .addField("~-Gendre-~"," __**Mystery Police Psychological Shounen Supernatural Thriller**__")
    .addField("~-Type-~"," __***TV Series***__",true )
    .addField("~-Studio-~"," __***Madhouse***__",true )
    .addField("-Release Date (JP)-"," *Fall, 2006*",true )
    .addField("~- Status -~"," __**Finished**__",true )
    .addField("~- Episodes -~"," **   🎥 37🎥   **",true )
    .addField("~- Years of activity -~"," __**2006-2007**__",true )
    .addField("~- Rating -~"," *8.63/10 'This is anime at its best'*",true )
    .addField("~- Age targeting -~"," *Shōnen(around 15-16 years old)*",true )
    .addField("~- Manga by -~"," Tsugumi Ohba and Takeshi Obata",true )
    .addField("~- Quote -~"," “The human world is a boring place with boring people doing boring things.” – Ryuk")
    .setColor('#986bdb') // sets the color of the embed box to orange
    .setThumbnail("https://wallpapercave.com/wp/er4khNt.jpg")
    .setImage("https://nationeditions.com/wp-content/uploads/2020/03/100fma-5-696x395.jpg")
    .setTimestamp()
    .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"
   // ok=1;
    return message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif}
}
// if member is a botadmin, display this toonodenode 
if(ok===1)
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
    .setTitle("**Random Anime**\n") // sets the title to List of Commands
    //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
    //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
    //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
    //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
    .addField("***2) Tokyo Ghoul(東京喰種)***","```The story follows Ken Kaneki, a college student who barely survives a deadly encounter with Rize Kamishiro, his date who reveals herself as a ghoul. He is taken to the hospital in critical condition. After recovering, Kaneki discovers that he underwent a surgery that transformed him into a half-ghoul.  ```")
    .addField("~-Gendre-~"," __** Action Drama Horror Mystery Psychological Seinen Supernatural **__")
    .addField("~-Type-~"," __***TV Series***__",true )
    .addField("~-Studio-~"," __***Studio Pierrot***__",true )
    .addField("-Release Date (JP)-"," *Summer, 2014*",true )
    .addField("~- Status -~"," __**Finished**__",true )
    .addField("~- Episodes -~"," **   🎥12🎥   **",true )
    .addField("~- Years of activity -~"," __**2014-2015**__",true )
    .addField("~- Rating -~"," *7.86 'One of the best anime I've ever watched.'*",true )
    .addField("-Age targeting-"," *17+*",true )
    .addField("~- Manga by -~","Sui Ishida",true )
    .addField("~- Quote -~"," ““Sometimes good people make bad choices. It doesn't mean they are bad people. It means they're human.”― ishida sui ")
    .setColor('#986bdb') // sets the color of the embed box to orange
    .setThumbnail("https://static.tvtropes.org/pmwiki/pub/images/tokyo_ghoul_5787.jpg")
    .setImage("https://dropyourblog.files.wordpress.com/2015/03/tokyo-ghoul-mask.jpg")
    .setTimestamp()
    .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"
  
// ok=2;
    return message.channel.send(embedhelpmember); // sends the embed b

}
if(ok===2)
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
    .setTitle("**Random Anime**\n") // sets the title to List of Commands
    //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
    //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
    //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
    //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
    .addField("***3) Code Geass: Lelouch of the Rebellion (コードギアス 反逆のルルーシュ, Kōdo Giasu: Hangyaku no Rurūshu)***","```Lelouch vi Britannia is an exiled Britannian prince, son of Emperor Charles zi Britannia and his royal consort Marianne vi Britannia. Lelouch has a sister, Nunnally vi Britannia.  ```")
    .setThumbnail("https://www.gstatic.com/tv/thumb/tvbanners/186544/p186544_b_v8_ad.jpg")
    .setImage("https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABTdXX0pleEG-sDruJpbuhQ0YR9p9V5M8MR6M8ft9goUfVwNR3kTIW9VuVtCU6_hJlicomJcbHpdHinGbuHiLWzLPNGA4.jpg?r=b6a")
    .addField("~- Rating -~"," *8.74 'I'm very pleased to say that I was greatly surprised.'*",true )
    .addField("-Age targeting-"," *17+*",true )
   
    .addField("~-Gendre-~"," __** Action Drama Mecha Mystery School Sci-Fi Super Power  **__")
    .addField("~-Type-~"," __***TV Series***__",true )
    .addField("~-Studio-~"," __***Sunrise***__",true )
    .addField("-Release Date (JP)-"," *Fall, 2006*",true )
    .addField("~- Status -~"," __**Finished**__",true )
    .addField("~- Episodes -~"," **   🎥25🎥   **",true )
    .addField("~- Years of activity -~"," __**October 6, 2006 – July 29, 2007**__",true )
    .addField("~- Manga made by -~","	Jun Maeda and Haruka Komowata",true )
    .addField("~- Quote -~","To defeat evil, I must become a greater evil ")
   .setColor('#986bdb') // sets the color of the embed box to orange
    .setTimestamp()
    .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"
  
// ok=3;
    return message.channel.send(embedhelpmember); // sends the embed b

}
if(ok===3)
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
    .setTitle("**Random Anime**\n") // sets the title to List of Commands
    //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
    //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
    //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
    //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
    .addField("***4) Charlotte (シャーロット, Shārotto)***","```Charlotte takes place in an alternate reality where a short-period comet called Charlotte passes near Earth once every 75 years. As this happens, it spreads dust onto the Earth, which causes a small percentage of preadolescent children who inhale the dust to manifest superhuman abilities upon reaching puberty.  ```")
    .addField("~-Gendre-~"," __** Drama School Super Power   **__")
    .addField("~-Type-~"," __***TV Series***__",true )
    .addField("~-Studio-~"," __***P.A. Works***__",true )
    .addField("-Release Date (JP)-"," *Summer, 2015*",true )
    .addField("~- Status -~"," __**Finished**__",true )
    .addField("~- Episodes -~"," **   🎥13🎥   **",true )
    .addField("~- Years of activity -~"," __**July 5, 2015 – September 27, 2015**__",true )
    .addField("~- Rating -~"," *7.83/10 'I was (mildly) hyped for this show.'*",true )
    .addField("-Age targeting-"," *Shōnen(around 15-16 years old)*",true )
    .addField("~- Manga by -~","Gorō Taniguchi and Ichirō Ōkouchi",true )
    
    .addField("~- Quote -~","“Why am I myself, and not somebody else.” – Yuu Otosaka")
   .setColor('#986bdb') // sets the color of the embed box to orange
    .setThumbnail("https://i2.wp.com/efsunlublog.com/wp-content/uploads/2020/01/charlotte-anime-yorumu-efsunlublog.jpg?fit=512%2C288&ssl=1")
    .setImage("https://miro.medium.com/max/3840/1*-bcACEHxrySNZoZz0N7ItA.jpeg")
   .setTimestamp()
   .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"
  
// ok=4;
    return message.channel.send(embedhelpmember); // sends the embed b

}
if(ok===4)
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
    .setTitle("**Random Anime**\n") // sets the title to List of Commands
    //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
    //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
    //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
    //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
    .addField("***5) Black Bullet (Japanese: ブラック・ブレット, Hepburn: Burakku Buretto)***","```In the year 2021, a parasitic virus known as 'Gastrea' infects humans and turns them into monsters. What is left of mankind now lives within the Monolith walls, walls that are made of Varanium, the only material that can hurt Gastrea. ```")
    .addField("~-Gendre-~"," __** Action Mystery Sci-Fi Seinen    **__")
    .addField("~-Type-~"," __***TV Series***__",true )
    .addField("~-Studio-~"," __***Kinema Citruss***__",true )
    .addField("-Release Date (JP)-"," *Spring, 2014*",true )
    .addField("~- Status -~"," __**Finished**__",true )
    .addField("~- Episodes -~"," **   🎥13🎥   **",true )
    .addField("~- Years of activity -~"," __**April 8, 2014 – July 1, 2014**__",true )
    .addField("~- Rating -~"," *7.25/10 'Black Bullet is driven by manufactured drama'*",true )
    .addField("~-Age targeting-~"," *Shōnen(around 15-16 years old)*",true )
    .addField("~- Manga by -~","	Shiden Kanzaki",true )
    
    .addField("~- Quote -~"," 'Once you expect something in return, your good deed is no longer just a good deed.'-Kayo Senju" )
   .setColor('#986bdb') // sets the color of the embed box to orange
    .setThumbnail("https://vignette.wikia.nocookie.net/blackbullet/images/2/2a/RentaroSatomiBild.png/revision/latest?cb=20150325081542&path-prefix=de")
    .setImage("https://i.pinimg.com/originals/b4/99/13/b49913adcd39c247839ae2d3af5e6c1d.png")
   .setTimestamp()
   .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"
  
// ok=5;
    return message.channel.send(embedhelpmember); // sends the embed b

}
if(ok===5)
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
    .setTitle("**Random Anime**\n") // sets the title to List of Commands
    //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
    //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
    //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
    //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
    .addField("***6) Rokka: Braves of the Six Flowers (六花の勇者, Rokka no Yūsha, lit. `Heroes of the Six Flowers`***","```Six people called Braves of the Six Flowers are chosen by the Goddess of Fate to defeat the Demon God (魔神, Majin). However, when they gather, there are seven heroes present, leading them to believe that one is an impostor and on the side of the Demon God.```")
    .addField("~-Gendre-~"," __**  Action Adventure Fantasy Magic Mystery     **__")
    .addField("~-Type-~"," __***TV Series***__",true )
    .addField("~-Studio-~"," __***Passione***__",true )
    .addField("-Release Date (JP)-"," *Summer, 2015*",true )
    .addField("~- Status -~"," __**Finished**__",true )
    .addField("~- Episodes -~"," **   🎥12🎥   **",true )
    .addField("~- Years of activity -~"," __**July 4, 2015 – September 19, 2015**__",true )
    .addField("~- Rating -~"," *7.43/10 'Does not give the best first impression regarding'*",true )
    .addField("-Age targeting-"," *Shōnen(around 15-16 years old)*",true )
    .addField("~- Manga by -~","Ishio Yamagata",true )
    
    .addField("~- Quote -~"," 'In order to accomplish something, first you had to believe in yourself that you could do it.'-Adlet Mayer" )
   .setColor('#986bdb') // sets the color of the embed box to orange
    .setThumbnail("https://static.zerochan.net/Adlet.Mayer.full.2379197.jpg")
    .setImage("https://i.pinimg.com/originals/d7/e3/ac/d7e3ac15a1ccc5d25e9866132ff3f7e8.jpg")
   .setTimestamp()
   .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"
  
// ok=6;
    return message.channel.send(embedhelpmember); // sends the embed b

}
if(ok===6)
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
    .setTitle("**Random Anime**\n") // sets the title to List of Commands
    //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
    //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
    //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
    //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
    .addField("***7) Naruto (ナルト)`***","```A powerful fox known as the Nine-Tails attacks Konoha, the hidden leaf village in the Land of Fire, one of the Five Great Shinobi Countries in the Ninja World.```")
    .addField("~-Gendre-~"," __** Action Adventure Comedy Martial Arts Shounen Super Power **__")
    .addField("~-Type-~"," __***TV Series***__",true )
    .addField("~-Studio-~"," __***Studio Pierrot***__",true )
    .addField("-Release Date (JP)-"," *Fall, 2002*",true )
    .addField("~- Status -~"," __**Finished**__",true )
    .addField("~- Episodes -~"," **   🎥220🎥   **",true )
    .addField("~- Years of activity -~"," __**October 3, 2002 – February 8, 2007**__",true )
    .addField("~- Rating -~"," *7.88/10 'To be honest, Naruto is the most overhyped show in existence.'*",true )
    .addField("-Age targeting-"," *Shōnen(around 15-16 years old)*",true )
    .addField("~- Manga by -~","Masashi Kishimoto",true )
    
    .addField("~- Quote -~","“I care more about others than I do myself, and I won’t let anyone hurt them.” Naruto" )
   .setColor('#986bdb') // sets the color of the embed box to orange
    .setThumbnail("https://static.cinemagia.ro/img/resize/db/movie/02/02/99/naruto-761043l-imagine.jpg")
    .setImage("https://i.ytimg.com/vi/ME6a3dj-5s0/maxresdefault.jpg")
   .setTimestamp()
   .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"
  
/// ok=7;
    return message.channel.send(embedhelpmember); // sends the embed b

}
if(ok===7)
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
    .setTitle("**Random Anime**\n") // sets the title to List of Commands
    //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
    //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
    //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
    //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
    .addField("***8) Demon Slayer: Kimetsu no Yaiba (Japanese: 鬼滅の刃, Hepburn: Kimetsu no Yaiba, lit. `Blade of Demon Destruction`)`***","```In Taishō-era Japan, Tanjiro Kamado is a kindhearted and intelligent boy who lives with his family in the mountains. ```")
    .addField("~-Gendre-~"," __**  Action Demons Historical Shounen Supernatural  **__")
    .addField("~-Type-~"," __***TV Series***__",true )
    .addField("~-Studio-~"," __***Ufotable***__",true )
    .addField("-Release Date (JP)-"," *Spring, 2019*",true )
    .addField("~- Status -~"," __**Finished**__",true )
    .addField("~- Episodes -~"," **   🎥26🎥   **",true )
    .addField("~- Years of activity -~"," __**	April 6, 2019 – September 28, 2019**__",true )
    .addField("~- Rating -~"," *8.84/10 'For a show to be good, it’s not always necessary for it to have a complex plot and a deep cast of characters.'*",true )
    .addField("-Age targeting-"," *Shōnen(around 15-16 years old)*",true )
    .addField("~- Manga by -~","Koyoharu Gotōge",true )
    
    .addField("~- Quote -~","“Feel the rage. The powerful, pure rage of not being able to forgive will become your unswerving drive to take action.”" )
   .setColor('#986bdb') // sets the color of the embed box to orange
    .setThumbnail("https://img2.hulu.com/user/v3/artwork/2c3e4b00-30d9-434d-bccc-cf346e40e868?base_image_bucket_name=image_manager&base_image=6e19186c-2d91-43b5-a805-d8e15f0b5f77&size=400x600&format=jpeg")
    .setImage("https://s1.econotimes.com/assets/uploads/2020032976ae58f8fe246e4e7_th_1024x0.jpg")
   .setTimestamp()
   .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"
  
// ok=8;
    return message.channel.send(embedhelpmember); // sends the embed b

}
if(ok===8)
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
    .setTitle("**Random Anime**\n") // sets the title to List of Commands
    //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
    //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
    //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
    //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
    .addField("***9)  My Hero Academia (Japanese: 僕のヒーローアカデミア, Hepburn: Boku no Hīrō Akademia)***","``In a world where currently most of the human population possess superpowers, labeled as `Quirks` (個性, Kosei) following the transitional period``")
    .addField("~-Gendre-~"," __**   Action Comedy School Shounen Super Power   **__")
    .addField("~-Type-~"," __***TV Series***__",true )
    .addField("~-Studio-~"," __***Bones***__",true )
    .addField("-Release Date (JP)-"," *Spring, 2019*",true )
    .addField("~- Status -~"," __**Finished**__",true )
    .addField("~- Episodes -~"," **   🎥88🎥   **",true )
    .addField("~- Years of activity -~"," __**		April 3, 2016 – present**__",true )
    .addField("~- Rating -~"," *8.50/10 'My hero academia came out at a perfect time. '*",true )
    .addField("-Age targeting-"," *Shōnen(around 15-16 years old)*",true )
    .addField("~- Manga by -~","Kōhei Horikoshi",true )
    
    .addField("~- Quote -~","“All men are not created equal.” – Izuku Midoriya")
   .setColor('#986bdb') // sets the color of the embed box to orange
   .setThumbnail("https://i.pinimg.com/736x/0a/c4/66/0ac466c645fb9a891270a0806377b8b6.jpg")
   .setImage("https://i.pinimg.com/originals/e4/04/1d/e4041d72952ef815e9432331d90f23e3.jpg")
   .setTimestamp()
   .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"
  
// ok=9;
    return message.channel.send(embedhelpmember); // sends the embed b

}
if(ok===9)
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
    .setTitle("**Random Anime**\n") // sets the title to List of Commands
    //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
    //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
    //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
    //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
    .addField("***10)  Your Lie in April, known in Japan as Shigatsu wa Kimi no Uso (四月は君の嘘)***","``Piano prodigy Kōsei Arima dominates various music competitions and becomes famous among child musicians, but also controversial. When his mother Saki dies suddenly``")
    .addField("~-Gendre-~"," __**  Drama Music Romance School Shounen    **__")
    .addField("~-Type-~"," __***TV Series***__",true )
    .addField("~-Studio-~"," __***A-1 Pictures***__",true )
    .addField("-Release Date (JP)-"," *Fall, 2014*",true )
    .addField("~- Status -~"," __**Finished**__",true )
    .addField("~- Episodes -~"," **   🎥22🎥   **",true )
    .addField("~- Years of activity -~"," __**		October 9, 2014 – March 19, 2015**__",true )
    .addField("~- Rating -~"," *8.81/10 'Hers was a white lie built on a grain of truth that snowballed as one lie after the other piled up. '*",true )
    .addField("-Age targeting-"," *Shōnen(around 15-16 years old)*",true )
    .addField("~- Manga by -~","Naoshi Arakawa ",true )
    
    .addField("~- Quote -~","“Maybe there’s only a dark road up ahead. But you still have to believe and keep going. Believe that the stars will light your path, even a little bit.” – Kaori Miyazono")
   .setColor('#986bdb') // sets the color of the embed box to orange
   .setThumbnail("https://pm1.narvii.com/6397/4736351b7c81c504bb6aa6699787b70fd40a6a91_00.jpg")
   .setImage("https://filme-recomandate.ro/wp-content/uploads/2019/01/Your-Lie-in-April.jpg")
   .setTimestamp()
   .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"
  
// ok=0;
    return message.channel.send(embedhelpmember); // sends the embed b

}
if(ok===10)
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
    .setTitle("**Random Anime**\n") // sets the title to List of Commands
    //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
    //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
    //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
    //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
    .addField("***11)  One-Punch Man (Japanese: ワンパンマン, Hepburn: Wanpanman)***","```On a supercontinent Earth, powerful monsters and villains have been wreaking havoc in the cities. To combat them, the millionaire Agoni creates the Hero Association, which employs superheroes to stop them. Saitama, an unassociated hero.```")
    .addField("~-Gendre-~"," __**   Action Comedy Parody Sci-Fi Seinen Super Power Supernatural     **__")
    .addField("~-Type-~"," __***TV Series***__",true )
    .addField("~-Studio-~"," __***J.C.Staff***__",true )
    .addField("-Release Date (JP)-"," *	October 5, 2015*",true )
    .addField("~- Status -~"," __**Finished**__",true )
    .addField("~- Episodes -~"," **   🎥24 + 10 OVAs🎥   **",true )
    .addField("~- Years of activity -~"," __**		October 5, 2015 – July 2, 2019**__",true )
    .addField("~- Rating -~"," *8.66/10 'I'm not saying this is going to be a completely balanced review. '*",true )
    .addField("-Age targeting-"," *Shōnen(around 15-16 years old)*",true )
    .addField("~- Manga by -~","	ONE ",true )
    
    .addField("~- Quote -~","Saitama :  You gotta train like hell until the point where your hair falls out. That’s the only way to become truly strong.")
   .setColor('#986bdb') // sets the color of the embed box to orange
   .setThumbnail("https://static.posters.cz/image/750/postere/one-punch-man-collage-i33906.jpg")
   .setImage("https://img.mipon.org/wp-content/uploads/2019/04/05164321/saitama-one-punch-man-oppai-shirt1.jpg")
   .setTimestamp()
   .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"

// ok=0;
    return message.channel.send(embedhelpmember); // sends the embed b

}
if(ok===11)
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
    .setTitle("**Random Anime**\n") // sets the title to List of Commands
    //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
    //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
    //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
    //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
    .addField("***11)  One-Punch Man (Japanese: ワンパンマン, Hepburn: Wanpanman)***","```On a supercontinent Earth, powerful monsters and villains have been wreaking havoc in the cities. To combat them, the millionaire Agoni creates the Hero Association, which employs superheroes to stop them. Saitama, an unassociated hero.```")
    .addField("~-Gendre-~"," __**   Action Comedy Parody Sci-Fi Seinen Super Power Supernatural     **__")
    .addField("~-Type-~"," __***TV Series***__",true )
    .addField("~-Studio-~"," __***J.C.Staff***__",true )
    .addField("-Release Date (JP)-"," *	October 5, 2015*",true )
    .addField("~- Status -~"," __**Finished**__",true )
    .addField("~- Episodes -~"," **   🎥24 + 10 OVAs🎥   **",true )
    .addField("~- Years of activity -~"," __**		October 5, 2015 – July 2, 2019**__",true )
    .addField("~- Rating -~"," *8.66/10 'I'm not saying this is going to be a completely balanced review. '*",true )
    .addField("-Age targeting-"," *Shōnen(around 15-16 years old)*",true )
    .addField("~- Manga by -~","	ONE ",true )
    
    .addField("~- Quote -~","Saitama :  You gotta train like hell until the point where your hair falls out. That’s the only way to become truly strong.")
   .setColor('#986bdb') // sets the color of the embed box to orange
   .setThumbnail("https://static.posters.cz/image/750/postere/one-punch-man-collage-i33906.jpg")
   .setImage("https://img.mipon.org/wp-content/uploads/2019/04/05164321/saitama-one-punch-man-oppai-shirt1.jpg")
   .setTimestamp()
   .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"

// ok=0;
    return message.channel.send(embedhelpmember); // sends the embed b

}
if(ok===12)
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
    .setTitle("**Random Anime**\n") // sets the title to List of Commands
    //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
    //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
    //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
    //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
    .addField("***11)  : Naruto: Shippūden***","```It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger.```")
    .addField("~-Gendre-~"," __**    Action Comedy Martial Arts Shounen Super Power      **__")
    .addField("~-Type-~"," __***TV Series***__",true )
    .addField("~-Studio-~"," __***Studio Pierrot***__",true )
    .addField("-Release Date (JP)-"," *Winter 2007*",true )
    .addField("~- Status -~"," __** Finished Airing **__",true )
    .addField("~- Episodes -~"," **   🎥 500 🎥   **",true )
    .addField("~- Years of activity -~"," __**Feb 15, 2007 to Mar 23, 2017**__",true )
    .addField("~- Rating -~"," *8.15/10 'I am super sad that this show has come to an end.*",true )
    .addField("-Age targeting-"," *PG-13 *",true )
    .addField("~- Manga by -~"," Masashi Kishimoto ",true )
    
    .addField("~- Quote -~","“The concept of hope is nothing more than giving up. A word that holds no true meaning.” – Madara Uchiha")
   .setColor('#986bdb') // sets the color of the embed box to orange
   .setThumbnail("https://dg31sz3gwrwan.cloudfront.net/fanart/79824/194081-0-q80.jpg")
   .setImage("https://ae01.alicdn.com/kf/HTB1w7LHOVXXXXX0XpXXq6xXFXXXx/Custom-Canvas-Art-Naruto-Poster-Naruto-Wall-Stickers-Shippuden-Kakashi-Wallpaper-Anime-Mural-Christmas-Gift-Home.jpg")
   .setTimestamp()
   .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"

// ok=0;
    return message.channel.send(embedhelpmember); // sends the embed b

}
if(ok===13)
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
    .setTitle("**Random Anime**\n") // sets the title to List of Commands
    //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
    //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
    //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
    //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
    .addField("***12)  Black Butler (Japanese: 黒執事, Hepburn: Kuroshitsuji) ***","```Young Ciel Phantomhive is known as `the Queen's Guard Dog,` taking care of the many unsettling events that occur in Victorian England for Her Majesty.```")
    .addField("~-Gendre-~"," __**    Action Comedy Demons Fantasy Historical Mystery Shounen Supernatural     **__")
    .addField("~-Type-~"," __***TV Series***__",true )
    .addField("~-Studio-~"," __***A-1 Pictures***__",true )
    .addField("-Release Date (JP)-"," Fall 2008*",true )
    .addField("~- Status -~"," __** Finished Airing **__",true )
    .addField("~- Episodes -~"," **   🎥 24 🎥   **",true )
    .addField("~- Years of activity -~"," __** Oct 3, 2008 to Mar 27, 2009**__",true )
    .addField("~- Rating -~"," *7.84/10 ' There is so much here that I look for in an anime; '*",true )
    .addField("-Age targeting-"," *PG-13 *",true )
    .addField("~- Manga by -~"," Yana Toboso ",true )
    
    .addField("~- Quote -~","“My heart was entwined in a spider web. You’ll always be my Highness. I wanted your love.” – Alois Trancy")
   .setColor('#986bdb') // sets the color of the embed box to orange
   .setThumbnail("https://derf9v1xhwwx1.cloudfront.net/image/upload/oth/FunimationStoreFront/1329052/Latvian/1329052_Latvian_ShowThumbnail_09242110-3879-ea11-82a8-dd291e252010.jpg")
   .setImage("https://thegeekiary.com/wp-content/uploads/2015/11/BlackButler.jpg")
   .setTimestamp()
   .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"

// ok=0;
    return message.channel.send(embedhelpmember); // sends the embed b

}
if(ok===14)
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
    .setTitle("**Random Anime**\n") // sets the title to List of Commands
    //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
    //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
    //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
    //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
    .addField("***13) March Comes in Like a Lion (Japanese: 3月のライオン, Hepburn: Sangatsu no Raion, lit. `The Lion of March`)***","```Having reached professional status in middle school, Rei Kiriyama is one of the few elite in the world of shogi.```")
    .addField("~-Gendre-~"," __**     Drama Game Seinen Slice of Life      **__")
    .addField("~-Type-~"," __***TV Series***__",true )
    .addField("~-Studio-~"," __***Shaft***__",true )
    .addField("-Release Date (JP)-"," Fall 2016*",true )
    .addField("~- Status -~"," __** Finished Airing **__",true )
    .addField("~- Episodes -~"," **   🎥  22 🎥   **",true )
    .addField("~- Years of activity -~"," __** October 8, 2016 – March 31, 2018**__",true )
    .addField("~- Rating -~"," *8.45/10 ' To be honest, I’ve always found reviewing slice of life series to be difficult and unpleasant. '*",true )
    .addField("-Age targeting-"," *PG-13 *",true )
    .addField("~- Manga by -~"," Chica Umino",true )
    
    .addField("~- Quote -~","“This time is precious. But it’s flowing onward, and I can’t stop it.” – Hinata Kawamoto” – Alois Trancy")
   .setColor('#986bdb') // sets the color of the embed box to orange
   .setThumbnail("https://static.tvtropes.org/pmwiki/pub/images/SangatsuNoLionMain_3703.jpg")
   .setImage("https://manga.tokyo/wp-content/uploads/2016/10/main_sr01_075-_t1_0318_00098.jpg")
   .setTimestamp()
   .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"

// ok=0;
    return message.channel.send(embedhelpmember); // sends the embed b

}
if(ok===15)
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
     .setTitle("**Random Anime**\n") // sets the title to List of Commands
     //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
     //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
     //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
     //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
     .addField("***15) Code Geass: Lelouch of the Rebellion R2 (Japanese: コードギアス 反逆のルルーシュ R2, Hepburn: Kōdo Giasu: Hangyaku no Rurūshu R2)***","```One year has passed since the Black Rebellion, a failed uprising against the Holy Britannian Empire led by the masked vigilante Zero, who is now missing. ```")
     .addField("~-Gendre-~"," __**     Action Drama Mecha Military Sci-Fi Super Power      **__")
     .addField("~-Type-~"," __***TV Series***__",true )
     .addField("~-Studio-~"," __***Sunrise***__",true )
     .addField("-Release Date (JP)-"," Spring, 2008*",true )
     .addField("~- Status -~"," __** Finished Airing **__",true )
     .addField("~- Episodes -~"," **   🎥  25 🎥   **",true )
     .addField("~- Years of activity -~"," __** April 6, 2008 – September 28, 2008**__",true )
     .addField("~- Rating -~"," *8.92/10 ' This is... Code Geass: Hangyaku no Lelouch... R2!'*",true )
     .addField("-Age targeting-"," *PG-13 *",true )
     .addField("~- Manga by -~","Jun Maeda and Haruka Komowata",true )
     
     .addField("~- Quote -~","“The only ones who should kill, are those who are prepared to be killed.”― Lelouch Vi Britannia ")
    .setColor('#986bdb') // sets the color of the embed box to orange
    .setThumbnail("https://images-na.ssl-images-amazon.com/images/I/71b6uVcU8aL._AC_SY606_.jpg")
    .setImage("https://www.anime-evo.net/wp-content/uploads/2009/05/moe-56632-sample1-640x250.jpg")
    .setTimestamp()
    .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"

// ok=0;
     return message.channel.send(embedhelpmember); // sends the embed b
 
}
if(ok===16) 
{
  var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
       .setTitle("**Random Anime**\n") // sets the title to List of Commands
       //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
       //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
       //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
       //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
       .addField("***16) JoJo's Bizarre Adventure (Japanese: ジョジョの奇妙な冒険, Hepburn: JoJo no Kimyō na Bōken)***","```In 1868, Dario Brando saves the life of an English nobleman, George Joestar. By taking in Dario's son Dio when the boy becomes fatherless.```")
       .addField("~-Gendre-~"," __**     Action, Adventure, Supernatural, Vampire, Shounen     **__")
       .addField("~-Type-~"," __***TV Series***__",true )
       .addField("~-Studio-~"," __***David Production***__",true )
       .addField("-Release Date (JP)-"," Fall, 2012*",true )
       .addField("~- Status -~"," __** Finished Airing **__",true )
       .addField("~- Episodes -~"," **   🎥  26 🎥   **",true )
       .addField("-Age targeting-"," *PG-13 *",true )
       .addField("~- Rating -~"," *8.25/10 Jojo's Bizarre Adventure is quite possibly the most popular anime on the internet right now*")
       .addField("~- Years of activity -~"," __** 	October 5, 2012 – April 5, 2013**__",true )
       .addField("~- Manga by -~","Hirohiko Araki",true )
       
       .addField("~- Quote -~","“You truly are the lowest scum in history. You can’t pay back what you owe with money.” – Jotaro Kujo ")
      .setColor('#986bdb') // sets the color of the embed box to orange
      .setThumbnail("https://otsukai.com/optimized?key=public/item/13972/original-5d225fd8a76c9.jpg&operation=thumbnail&w=300")
      .setImage("https://www.geek.com/wp-content/uploads/2017/12/jojo1-625x352.jpg")
      .setTimestamp()
      .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"
 
  // ok=0;
       return message.channel.send(embedhelpmember); // sends the embed b
   
 }
 if(ok===17)
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
     .setTitle("**Anime Review**\n") // sets the title to List of Commands
     //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
     //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
     //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
     //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
     .addField("***17) Hunter × Hunter (Japanese: ハンター×ハンター, Hepburn: Hantā Hantā)***","```The story follows a young boy named Gon Freecss, who was told all his life that both his parents were dead. But when he learns from Kite, an apprentice of his father Ging Freecss, that he is still alive and has since become an accomplished Hunter.```")
     .addField("~-Gendre-~"," __**      Action Adventure Fantasy Shounen Super Power      **__")
     .addField("~-Type-~"," __***TV Series***__",true )
     .addField("~-Studio-~"," __***Nippon Animation***__",true )
     .addField("-Release Date (JP)-"," Fall, 1999*",true )
     .addField("~- Status -~"," __** Finished Airing **__",true )
     .addField("~- Episodes -~"," **   🎥  62 🎥   **",true )
     .addField("-Age targeting-"," *PG-13 *",true )
     .addField("~- Rating -~"," *8.44/10 The story is good, but not really anything mind breaking. *")
     .addField("~- Years of activity -~"," __** 	October 16, 1999 – March 31, 2001**__",true )
     .addField("~- Manga by -~","	Yoshihiro Togashi",true )
     
     .addField("~- Quote -~","“People only find me interesting because they can’t tell whether I’m serious or not.” – Killua Zoldyck ")
    .setColor('#986bdb') // sets the color of the embed box to orange
    .setThumbnail("https://cdn.myanimelist.net/r/360x360/images/anime/8/19473.jpg?s=37f6976ddc24ff847519920406c75b7a")
    .setImage("https://assets.mubicdn.net/images/film/258973/image-w1280.jpg?1583226062")
    .setTimestamp()
    .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"

// ok=0;
     return message.channel.send(embedhelpmember); // sends the embed b
 
}
if (ok===18)
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
    .setTitle("**Anime Review**\n") // sets the title to List of Commands
    //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
    //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
    //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
    //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
    .addField("***18) Kaguya-sama: Love Is War***","```At the renowned Shuchiin Academy, Miyuki Shirogane and Kaguya Shinomiya are the student body's top representatives. Ranked the top student in the nation and respected by peers and mentors alike, Miyuki serves as the student council president.```")
    .addField("~-Gendre-~"," __**     Comedy Psychological Romance School Seinen     **__")
    .addField("~-Type-~"," __***TV Series***__",true )
    .addField("~-Studio-~"," __***A-1 Pictures***__",true )
    .addField("-Release Date (JP)-"," Winter, 2019*",true )
    .addField("~- Status -~"," __** Currently Airing **__",true )
    .addField("~- Episodes -~"," **   🎥16🎥   **",true )
    .addField("-Age targeting-"," *PG-13 *",true )
    .addField("~- Rating -~"," *8.42/10 Story? There’s no story beyond two teen high schoolers failed love*")
    .addField("~- Years of activity -~"," __**January 12, 2019 – present**__",true )
    .addField("~- Manga by -~","Aka Akasaka",true )
    
    .addField("~- Quote -~","'A love letter to Shinomiya? Some men really are fools for love.'- Miyuki Shirogane ")
   .setColor('#986bdb') // sets the color of the embed box to orange
   .setThumbnail("https://m.media-amazon.com/images/M/MV5BOTkzZjZiOWItZGM5Ny00N2IxLTg4ZTQtYTBiODhlNmRlM2IxXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UY268_CR4,0,182,268_AL_.jpg")
   .setImage("https://img.over-blog-kiwi.com/3/28/25/53/20190329/ob_405ed1_7fzv7qmnq.jpg")
   .setTimestamp()
   .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"

// ok=0;
    return message.channel.send(embedhelpmember); // sends the embed b

}
if (ok===19)  
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
     .setTitle("**Anime Review**\n") // sets the title to List of Commands
     //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
     //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
     //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
     //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
     .addField("***19) Plunderer (Japanese: プランダラ, Hepburn: Purandara)***","```Alcia is a world governed by 'Count': numbers engraved on a person's body, representing any number related to their life. These Counts determine a person's social status and power in Alcia.```")
     .addField("~-Gendre-~"," __**      Action Ecchi Fantasy Shounen      **__")
     .addField("~-Type-~"," __***TV Series***__",true )
     .addField("~-Studio-~"," __***Geektoys***__",true )
     .addField("-Release Date (JP)-"," Winter, 2020*",true )
     .addField("~- Status -~"," __** Currently Airing **__",true )
     .addField("~- Episodes -~"," **   🎥24🎥   **",true )
     .addField("-Age targeting-"," *PG-13 *",true )
     .addField("~- Rating -~"," *6.14/10 Ah, yes Ecchi fantasy anime*")
     .addField("~- Years of activity -~"," __**J Jan 9, 2020 to present**__",true )
     .addField("~- Manga by -~","Suu Minazuki",true )
     
     .addField("~- Quote -~","Never thake to much care on someone because you won't be able to stand the pain when they start avoiding you!")
    .setColor('#986bdb') // sets the color of the embed box to orange
    .setThumbnail("https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.3/157578/plunderer.jpg")
    .setImage("https://www.epicdope.com/wp-content/uploads/2020/04/Licht-Bach-Plunderer.jpg")
    .setTimestamp()
    .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"

// ok=0;
     return message.channel.send(embedhelpmember); // sends the embed b
 }
if (ok===20) {
 var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
      .setTitle("**Anime Review**\n") // sets the title to List of Commands
      //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
      //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
      //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
      //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
      .addField("***20) Wise Man's Grandchild (賢者の孫, Kenja no Mago, lit. 'The Sage's Grandson')***","```In the kingdom of Earlshide, Merlin Walford was once regarded as a national hero, hailed for both his power and achievements. Preferring a quiet life however, he secludes himself deep in the rural woods, dedicating his time to raising an orphan that he saved. ```")
      .addField("~-Gendre-~"," __**    Action Comedy Magic     **__")
      .addField("~-Type-~"," __***TV Series***__",true )
      .addField("~-Studio-~"," __***Silver Link.***__",true )
      .addField("-Release Date (JP)-"," Spring, 2019*",true )
      .addField("~- Status -~"," __**  Finished Airing  **__",true )
      .addField("~- Episodes -~"," **   🎥12🎥   **",true )
      .addField("-Age targeting-"," *PG-13 *",true )
      .addField("~- Rating -~"," *6.63/10 Kenja no Mago is a show with neither originality nor personality.*")
      .addField("~- Years of activity -~"," __**	April 10, 2019 – June 26, 2019**__",true )
      .addField("~- Manga by -~","	Tsuyoshi Yoshioka",true )
      
      .addField("~- Quote -~","'He took anyone who was half-decent with magic'-August von Earlshide")
     .setColor('#986bdb') // sets the color of the embed box to orange
     .setThumbnail("https://m.media-amazon.com/images/M/MV5BNjIxYmFjNGQtOTRkMS00YmY4LWFhZDEtODZkMzE3NDAxNDQ2XkEyXkFqcGdeQXVyMzI2Mjc1NjQ@._V1_UY1200_CR751,0,630,1200_AL_.jpg")
     .setImage("https://wallpaperaccess.com/full/2126969.jpg")
     .setTimestamp()
     .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"

 // ok=0;
      return message.channel.send(embedhelpmember); // sends the embed b
  }
}









///ANIME Cautare
if ((message.content === "Zen!anime 1")||(message.content === "Zen!Death Note")||(message.content === "Zen!anime Death Note") ||(message.content === "zen!death note") ||(message.content === "zen!deathnote") ||(message.content === "Zen!DeathNote")) { // creates a command *help
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
    .setTitle("**Anime Review**\n") // sets the title to List of Commands
    //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
    //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
    //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
    //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
    .addField("***1) Death Note(デスノート Desu Nōto)***","```A bright but bored boy attempts to rid the world of evil using a strange and deadly notebook that kills anyone whose name is written in its pages. His quest is complicated when a genius detective begins investigating the murders. ```")
    .addField("~-Gendre-~"," __**Mystery Police Psychological Shounen Supernatural Thriller**__")
    .addField("~-Type-~"," __***TV Series***__",true )
    .addField("~-Studio-~"," __***Madhouse***__",true )
    .addField("-Release Date (JP)-"," *Fall, 2006*",true )
    .addField("~- Status -~"," __**Finished**__",true )
    .addField("~- Episodes -~"," **   🎥 37🎥   **",true )
    .addField("~- Years of activity -~"," __**2006-2007**__",true )
    .addField("~- Rating -~"," *8.63/10 'This is anime at its best'*",true )
    .addField("~- Age targeting -~"," *Shōnen(around 15-16 years old)*",true )
    .addField("~- Manga by -~"," Tsugumi Ohba and Takeshi Obata",true )
    .addField("~- Quote -~"," “The human world is a boring place with boring people doing boring things.” – Ryuk")
    .setColor('#986bdb') // sets the color of the embed box to orange
    .setThumbnail("https://wallpapercave.com/wp/er4khNt.jpg")
    .setImage("https://nationeditions.com/wp-content/uploads/2020/03/100fma-5-696x395.jpg")
    .setTimestamp()
    .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"
    return message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif}
} 
if ((message.content === "Zen!anime 2")||(message.content === "Zen!anime Code Geass") ||(message.content === "zen!code geass") ||(message.content === "zen!codegeass") ||(message.content === "Zen!CodeGeass")) { // creates a command *help
  var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
       .setTitle("**Anime Review**\n") // sets the title to List of Commands
       //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
       //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
       //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
       //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
       .addField("***2) Code Geass: Lelouch of the Rebellion (コードギアス 反逆のルルーシュ, Kōdo Giasu: Hangyaku no Rurūshu)***","```Lelouch vi Britannia is an exiled Britannian prince, son of Emperor Charles zi Britannia and his royal consort Marianne vi Britannia. Lelouch has a sister, Nunnally vi Britannia.  ```")
       .setThumbnail("https://www.gstatic.com/tv/thumb/tvbanners/186544/p186544_b_v8_ad.jpg")
       .setImage("https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABTdXX0pleEG-sDruJpbuhQ0YR9p9V5M8MR6M8ft9goUfVwNR3kTIW9VuVtCU6_hJlicomJcbHpdHinGbuHiLWzLPNGA4.jpg?r=b6a")
       .addField("~- Rating -~"," *8.74 'I'm very pleased to say that I was greatly surprised.'*",true )
       .addField("-Age targeting-"," *17+*",true )
      
       .addField("~-Gendre-~"," __** Action Drama Mecha Mystery School Sci-Fi Super Power  **__")
       .addField("~-Type-~"," __***TV Series***__",true )
       .addField("~-Studio-~"," __***Sunrise***__",true )
       .addField("-Release Date (JP)-"," *Fall, 2006*",true )
       .addField("~- Status -~"," __**Finished**__",true )
       .addField("~- Episodes -~"," **   🎥25🎥   **",true )
       .addField("~- Years of activity -~"," __**October 6, 2006 – July 29, 2007**__",true )
       .addField("~- Manga made by -~","	Jun Maeda and Haruka Komowata",true )
       .addField("~- Quote -~","To defeat evil, I must become a greater evil ")
      .setColor('#986bdb') // sets the color of the embed box to orange
       .setTimestamp()
       .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"
     
   
       return message.channel.send(embedhelpmember); // sends the embed b
   
 }
 if ((message.content === "Zen!anime 3")||(message.content === "Zen!anime Black Bullet") ||(message.content === "zen!black bullet") ||(message.content === "Zen!Black bullet") ||(message.content === "zen!blackbullet") ||(message.content === "Zen!BlackBullet")) { // creates a command *help
  var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
       .setTitle("**Anime Review**\n") // sets the title to List of Commands
       //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
       //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
       //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
       //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
       .addField("***3) Black Bullet (Japanese: ブラック・ブレット, Hepburn: Burakku Buretto)***","```In the year 2021, a parasitic virus known as 'Gastrea' infects humans and turns them into monsters. What is left of mankind now lives within the Monolith walls, walls that are made of Varanium, the only material that can hurt Gastrea. ```")
       .addField("~-Gendre-~"," __** Action Mystery Sci-Fi Seinen    **__")
       .addField("~-Type-~"," __***TV Series***__",true )
       .addField("~-Studio-~"," __***Kinema Citruss***__",true )
       .addField("-Release Date (JP)-"," *Spring, 2014*",true )
       .addField("~- Status -~"," __**Finished**__",true )
       .addField("~- Episodes -~"," **   🎥13🎥   **",true )
       .addField("~- Years of activity -~"," __**April 8, 2014 – July 1, 2014**__",true )
       .addField("~- Rating -~"," *7.25/10 'Black Bullet is driven by manufactured drama'*",true )
       .addField("~-Age targeting-~"," *Shōnen(around 15-16 years old)*",true )
       .addField("~- Manga by -~","	Shiden Kanzaki",true )
       
       .addField("~- Quote -~"," 'Once you expect something in return, your good deed is no longer just a good deed.'-Kayo Senju" )
      .setColor('#986bdb') // sets the color of the embed box to orange
       .setThumbnail("https://vignette.wikia.nocookie.net/blackbullet/images/2/2a/RentaroSatomiBild.png/revision/latest?cb=20150325081542&path-prefix=de")
       .setImage("https://i.pinimg.com/originals/b4/99/13/b49913adcd39c247839ae2d3af5e6c1d.png")
      .setTimestamp()
      .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"
     
  

       return message.channel.send(embedhelpmember); // sends the embed b
   
 }
 if ((message.content === "Zen!anime 4")||(message.content === "Zen!anime Charlotte") ||(message.content === "zen!charlotte") ||(message.content === "Zen!charlotte")) { // creates a command *help
 var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
 .setTitle("**Anime Review**\n") // sets the title to List of Commands
 //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
 //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
 //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
 //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
 .addField("***1) Charlotte (シャーロット, Shārotto)***","```Charlotte takes place in an alternate reality where a short-period comet called Charlotte passes near Earth once every 75 years. As this happens, it spreads dust onto the Earth, which causes a small percentage of preadolescent children who inhale the dust to manifest superhuman abilities upon reaching puberty.  ```")
 .addField("~-Gendre-~"," __** Drama School Super Power   **__")
 .addField("~-Type-~"," __***TV Series***__",true )
 .addField("~-Studio-~"," __***P.A. Works***__",true )
 .addField("-Release Date (JP)-"," *Summer, 2015*",true )
 .addField("~- Status -~"," __**Finished**__",true )
 .addField("~- Episodes -~"," **   🎥13🎥   **",true )
 .addField("~- Years of activity -~"," __**July 5, 2015 – September 27, 2015**__",true )
 .addField("~- Rating -~"," *7.83/10 'I was (mildly) hyped for this show.'*",true )
 .addField("-Age targeting-"," *Shōnen(around 15-16 years old)*",true )
 .addField("~- Manga by -~","Gorō Taniguchi and Ichirō Ōkouchi",true )
 
 .addField("~- Quote -~","“Why am I myself, and not somebody else.” – Yuu Otosaka")
.setColor('#986bdb') // sets the color of the embed box to orange
 .setThumbnail("https://i2.wp.com/efsunlublog.com/wp-content/uploads/2020/01/charlotte-anime-yorumu-efsunlublog.jpg?fit=512%2C288&ssl=1")
 .setImage("https://miro.medium.com/max/3840/1*-bcACEHxrySNZoZz0N7ItA.jpeg")
.setTimestamp()
.setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"

 return message.channel.send(embedhelpmember); // sends the embed b

}
if ((message.content === "Zen!anime 5")||(message.content === "Zen!anime tokyo ghoul")||(message.content === "Zen!anime Tokyo Ghoul") ||(message.content === "zen!tokyo ghoul") ||(message.content === "Zen!Tokyo ghoul") ||(message.content === "Zen!Tokyo Ghoul")|(message.content === "Zen!TokyoGohul")) { // creates a command *help
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
.setTitle("**Anime Review**\n") // sets the title to List of Commands
//.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
//.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
//.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
//.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
.addField("***5) Tokyo Ghoul(東京喰種)***","```The story follows Ken Kaneki, a college student who barely survives a deadly encounter with Rize Kamishiro, his date who reveals herself as a ghoul. He is taken to the hospital in critical condition. After recovering, Kaneki discovers that he underwent a surgery that transformed him into a half-ghoul.  ```")
.addField("~-Gendre-~"," __** Action Drama Horror Mystery Psychological Seinen Supernatural **__")
.addField("~-Type-~"," __***TV Series***__",true )
.addField("~-Studio-~"," __***Studio Pierrot***__",true )
.addField("-Release Date (JP)-"," *Summer, 2014*",true )
.addField("~- Status -~"," __**Finished**__",true )
.addField("~- Episodes -~"," **   🎥12🎥   **",true )
.addField("~- Years of activity -~"," __**2014-2015**__",true )
.addField("~- Rating -~"," *7.86 'One of the best anime I've ever watched.'*",true )
.addField("-Age targeting-"," *17+*",true )
.addField("~- Manga by -~","Sui Ishida",true )
.addField("~- Quote -~"," ““Sometimes good people make bad choices. It doesn't mean they are bad people. It means they're human.”― ishida sui ")
.setColor('#986bdb') // sets the color of the embed box to orange
.setThumbnail("https://static.tvtropes.org/pmwiki/pub/images/tokyo_ghoul_5787.jpg")
.setImage("https://dropyourblog.files.wordpress.com/2015/03/tokyo-ghoul-mask.jpg")
.setTimestamp()
.setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"


return message.channel.send(embedhelpmember); // sends the embed b

}
if ((message.content === "Zen!anime 6")||(message.content === "Zen!anime Rokka no Yuusha") ||(message.content === "zen!RokkanoYuusha") ||(message.content === "Zen!Tokyo ghoul") ||(message.content === "Zen!RokkanoYuusha")|(message.content === "Zen!Heroes of the Six Flowers")) 
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
     .setTitle("**Anime Review**\n") // sets the title to List of Commands
     //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
     //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
     //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
     //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
     .addField("***1) Rokka: Braves of the Six Flowers (六花の勇者, Rokka no Yūsha, lit. `Heroes of the Six Flowers`***","```Six people called Braves of the Six Flowers are chosen by the Goddess of Fate to defeat the Demon God (魔神, Majin). However, when they gather, there are seven heroes present, leading them to believe that one is an impostor and on the side of the Demon God.```")
     .addField("~-Gendre-~"," __**  Action Adventure Fantasy Magic Mystery     **__")
     .addField("~-Type-~"," __***TV Series***__",true )
     .addField("~-Studio-~"," __***Passione***__",true )
     .addField("-Release Date (JP)-"," *Summer, 2015*",true )
     .addField("~- Status -~"," __**Finished**__",true )
     .addField("~- Episodes -~"," **   🎥12🎥   **",true )
     .addField("~- Years of activity -~"," __**July 4, 2015 – September 19, 2015**__",true )
     .addField("~- Rating -~"," *7.43/10 'Does not give the best first impression regarding'*",true )
     .addField("-Age targeting-"," *Shōnen(around 15-16 years old)*",true )
     .addField("~- Manga by -~","Ishio Yamagata",true )
     
     .addField("~- Quote -~"," 'In order to accomplish something, first you had to believe in yourself that you could do it.'-Adlet Mayer" )
    .setColor('#986bdb') // sets the color of the embed box to orange
     .setThumbnail("https://static.zerochan.net/Adlet.Mayer.full.2379197.jpg")
     .setImage("https://i.pinimg.com/originals/d7/e3/ac/d7e3ac15a1ccc5d25e9866132ff3f7e8.jpg")
    .setTimestamp()
    .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"
   
 ok=0;
     return message.channel.send(embedhelpmember); // sends the embed b
 
}
if ((message.content === "Zen!anime 7")||(message.content === "Zen!anime Naruto") ||(message.content === "zen!Naruto") ||(message.content === "Zen!naruto") ||(message.content === "Zen!naruto"))
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
     .setTitle("**Anime Review**\n") // sets the title to List of Commands
     //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
     //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
     //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
     //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
     .addField("***7) Naruto (ナルト)`***","```A powerful fox known as the Nine-Tails attacks Konoha, the hidden leaf village in the Land of Fire, one of the Five Great Shinobi Countries in the Ninja World.```")
     .addField("~-Gendre-~"," __** Action Adventure Comedy Martial Arts Shounen Super Power **__")
     .addField("~-Type-~"," __***TV Series***__",true )
     .addField("~-Studio-~"," __***Studio Pierrot***__",true )
     .addField("-Release Date (JP)-"," *Fall, 2002*",true )
     .addField("~- Status -~"," __**Finished**__",true )
     .addField("~- Episodes -~"," **   🎥220🎥   **",true )
     .addField("~- Years of activity -~"," __**October 3, 2002 – February 8, 2007**__",true )
     .addField("~- Rating -~"," *7.88/10 'To be honest, Naruto is the most overhyped show in existence.'*",true )
     .addField("-Age targeting-"," *Shōnen(around 15-16 years old)*",true )
     .addField("~- Manga by -~","Masashi Kishimoto",true )
     
     .addField("~- Quote -~","“I care more about others than I do myself, and I won’t let anyone hurt them.” Naruto" )
    .setColor('#986bdb') // sets the color of the embed box to orange
     .setThumbnail("https://static.cinemagia.ro/img/resize/db/movie/02/02/99/naruto-761043l-imagine.jpg")
     .setImage("https://i.ytimg.com/vi/ME6a3dj-5s0/maxresdefault.jpg")
    .setTimestamp()
    .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"
     return message.channel.send(embedhelpmember); // sends the embed b
 
}
if ((message.content === "Zen!anime 8")||(message.content === "Zen!anime Demon Slayer") ||(message.content === "Zen!Kimetsu no Yaba")||(message.content === "Zen!demon Slayer")||(message.content === "Zen!KimetsunoYaba")||(message.content === "zen!DemonSlayer") ||(message.content === "Zen!Demon slayer") ||(message.content === "Zen!demon slayer"))
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
     .setTitle("**Anime Review**\n") // sets the title to List of Commands
     //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
     //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
     //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
     //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
     .addField("***8) Demon Slayer: Kimetsu no Yaiba (Japanese: 鬼滅の刃, Hepburn: Kimetsu no Yaiba, lit. `Blade of Demon Destruction`)`***","```In Taishō-era Japan, Tanjiro Kamado is a kindhearted and intelligent boy who lives with his family in the mountains. ```")
     .addField("~-Gendre-~"," __**  Action Demons Historical Shounen Supernatural  **__")
     .addField("~-Type-~"," __***TV Series***__",true )
     .addField("~-Studio-~"," __***Ufotable***__",true )
     .addField("-Release Date (JP)-"," *Spring, 2019*",true )
     .addField("~- Status -~"," __**Finished**__",true )
     .addField("~- Episodes -~"," **   🎥26🎥   **",true )
     .addField("~- Years of activity -~"," __**	April 6, 2019 – September 28, 2019**__",true )
     .addField("~- Rating -~"," *8.84/10 'For a show to be good, it’s not always necessary for it to have a complex plot and a deep cast of characters.'*",true )
     .addField("-Age targeting-"," *Shōnen(around 15-16 years old)*",true )
     .addField("~- Manga by -~","Koyoharu Gotōge",true )
     
     .addField("~- Quote -~","“Feel the rage. The powerful, pure rage of not being able to forgive will become your unswerving drive to take action.”" )
    .setColor('#986bdb') // sets the color of the embed box to orange
     .setThumbnail("https://img2.hulu.com/user/v3/artwork/2c3e4b00-30d9-434d-bccc-cf346e40e868?base_image_bucket_name=image_manager&base_image=6e19186c-2d91-43b5-a805-d8e15f0b5f77&size=400x600&format=jpeg")
     .setImage("https://s1.econotimes.com/assets/uploads/2020032976ae58f8fe246e4e7_th_1024x0.jpg")
    .setTimestamp()
    .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"

     return message.channel.send(embedhelpmember); // sends the embed b
 
}
if ((message.content === "Zen!anime 9")||(message.content === "Zen!anime bnha") ||(message.content === "Zen!My Hero Academia")||(message.content === "Zen!boku no hero academia")||(message.content === "Zen!bokunoheroacademia")||(message.content === "zen!BokuNoHeroAcademia") ||(message.content === "Zen!Boku No Hero Academia") ||(message.content === "Zen!Boku no Hero Academia")||(message.content === "Zen!BokuNoHeroAcademia"))
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
    .setTitle("**Anime Review**\n") // sets the title to List of Commands
    //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
    //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
    //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
    //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
    .addField("***9)  My Hero Academia (Japanese: 僕のヒーローアカデミア, Hepburn: Boku no Hīrō Akademia)***","``In a world where currently most of the human population possess superpowers, labeled as `Quirks` (個性, Kosei) following the transitional period``")
    .addField("~-Gendre-~"," __**   Action Comedy School Shounen Super Power   **__")
    .addField("~-Type-~"," __***TV Series***__",true )
    .addField("~-Studio-~"," __***Bones***__",true )
    .addField("-Release Date (JP)-"," *Spring, 2016*",true )
    .addField("~- Status -~"," __**Finished**__",true )
    .addField("~- Episodes -~"," **   🎥88🎥   **",true )
    .addField("~- Years of activity -~"," __**		April 3, 2016 – present**__",true )
    .addField("~- Rating -~"," *8.50/10 'My hero academia came out at a perfect time. '*",true )
    .addField("-Age targeting-"," *Shōnen(around 15-16 years old)*",true )
    .addField("~- Manga by -~","Kōhei Horikoshi",true )
    
    .addField("~- Quote -~","“All men are not created equal.” – Izuku Midoriya")
   .setColor('#986bdb') // sets the color of the embed box to orange
   .setThumbnail("https://i.pinimg.com/736x/0a/c4/66/0ac466c645fb9a891270a0806377b8b6.jpg")
   .setImage("https://i.pinimg.com/originals/e4/04/1d/e4041d72952ef815e9432331d90f23e3.jpg")
   .setTimestamp()
   .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"
    return message.channel.send(embedhelpmember); // sends the embed b

}
if (((message.content === "Zen!anime 10")||message.content === "Zen!anime Your Lie in April") ||(message.content === "zen!Your Lie in April") ||(message.content === "zen!anime Your Lie in April") ||(message.content === "Zen!anime Your Lie in April"))
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
     .setTitle("**Anime Review**\n") // sets the title to List of Commands
     //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
     //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
     //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
     //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
     .addField("***10)  Your Lie in April, known in Japan as Shigatsu wa Kimi no Uso (四月は君の嘘)***","``Piano prodigy Kōsei Arima dominates various music competitions and becomes famous among child musicians, but also controversial. When his mother Saki dies suddenly``")
     .addField("~-Gendre-~"," __**  Drama Music Romance School Shounen    **__")
     .addField("~-Type-~"," __***TV Series***__",true )
     .addField("~-Studio-~"," __***A-1 Pictures***__",true )
     .addField("-Release Date (JP)-"," *Fall, 2014*",true )
     .addField("~- Status -~"," __**Finished**__",true )
     .addField("~- Episodes -~"," **   🎥22🎥   **",true )
     .addField("~- Years of activity -~"," __**		October 9, 2014 – March 19, 2015**__",true )
     .addField("~- Rating -~"," *8.81/10 'Hers was a white lie built on a grain of truth that snowballed as one lie after the other piled up. '*",true )
     .addField("-Age targeting-"," *Shōnen(around 15-16 years old)*",true )
     .addField("~- Manga by -~","Naoshi Arakawa ",true )
     
     .addField("~- Quote -~","“Maybe there’s only a dark road up ahead. But you still have to believe and keep going. Believe that the stars will light your path, even a little bit.” – Kaori Miyazono")
    .setColor('#986bdb') // sets the color of the embed box to orange
    .setThumbnail("https://pm1.narvii.com/6397/4736351b7c81c504bb6aa6699787b70fd40a6a91_00.jpg")
    .setImage("https://filme-recomandate.ro/wp-content/uploads/2019/01/Your-Lie-in-April.jpg")
    .setTimestamp()
    .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"
   
 ok=0;
     return message.channel.send(embedhelpmember); // sends the embed b
 
}
if ((message.content === "Zen!anime 11")||(message.content === "Zen!anime One Punch Man")||(message.content === "Zen!One Punch Man") ||(message.content === "zen!OnePunchMan") ||(message.content === "zen!onepunchman") ||(message.content === "Zen!1pm"))
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
     .setTitle("**Random Anime**\n") // sets the title to List of Commands
     //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
     //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
     //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
     //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
     .addField("***11)  One-Punch Man (Japanese: ワンパンマン, Hepburn: Wanpanman)***","``On a supercontinent Earth, powerful monsters and villains have been wreaking havoc in the cities. To combat them, the millionaire Agoni creates the Hero Association, which employs superheroes to stop them. Saitama, an unassociated hero.``")
     .addField("~-Gendre-~"," __**   Action Comedy Parody Sci-Fi Seinen Super Power Supernatural     **__")
     .addField("~-Type-~"," __***TV Series***__",true )
     .addField("~-Studio-~"," __***J.C.Staff***__",true )
     .addField("-Release Date (JP)-"," *	October 5, 2015*",true )
     .addField("~- Status -~"," __**Finished Airing **__",true )
     .addField("~- Episodes -~"," **   🎥24 + 10 OVAs🎥   **",true )
     .addField("~- Years of activity -~"," __**		October 5, 2015 – July 2, 2019**__",true )
     .addField("~- Rating -~"," *8.66/10 'I'm not saying this is going to be a completely balanced review. '*",true )
     .addField("-Age targeting-"," *Shōnen(around 15-16 years old)*",true )
     .addField("~- Manga by -~","	ONE ",true )
     
     .addField("~- Quote -~","Saitama :  You gotta train like hell until the point where your hair falls out. That’s the only way to become truly strong.")
    .setColor('#986bdb') // sets the color of the embed box to orange
    .setThumbnail("https://static.posters.cz/image/750/postere/one-punch-man-collage-i33906.jpg")
    .setImage("https://img.mipon.org/wp-content/uploads/2019/04/05164321/saitama-one-punch-man-oppai-shirt1.jpg")
    .setTimestamp()
    .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"

// ok=0;
     return message.channel.send(embedhelpmember); // sends the embed b
 
}
if ((message.content === "Zen!anime 12")||(message.content === "Zen!anime Naruto Shippuden")||(message.content === "Zen!Naruto Shippuden") ||(message.content === "zen!NarutoShippuden") ||(message.content === "zen!narutoshippuden") ||(message.content === "Zen!Naruto shippuden"))
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
     .setTitle("**Anime Review**\n") // sets the title to List of Commands
     //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
     //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
     //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
     //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
     .addField("***12)  : Naruto: Shippūden***","```It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger.```")
     .addField("~-Gendre-~"," __**    Action Comedy Martial Arts Shounen Super Power      **__")
     .addField("~-Type-~"," __***TV Series***__",true )
     .addField("~-Studio-~"," __***Studio Pierrot***__",true )
     .addField("-Release Date (JP)-"," *Winter 2007*",true )
     .addField("~- Status -~"," __** Finished Airing **__",true )
     .addField("~- Episodes -~"," **   🎥 500 🎥   **",true )
     .addField("~- Years of activity -~"," __**Feb 15, 2007 to Mar 23, 2017**__",true )
     .addField("~- Rating -~"," *8.15/10 'I am super sad that this show has come to an end.*",true )
     .addField("-Age targeting-"," *PG-13 *",true )
     .addField("~- Manga by -~"," Masashi Kishimoto ",true )
     
     .addField("~- Quote -~","“The concept of hope is nothing more than giving up. A word that holds no true meaning.” – Madara Uchiha")
    .setColor('#986bdb') // sets the color of the embed box to orange
    .setThumbnail("https://dg31sz3gwrwan.cloudfront.net/fanart/79824/194081-0-q80.jpg")
    .setImage("https://ae01.alicdn.com/kf/HTB1w7LHOVXXXXX0XpXXq6xXFXXXx/Custom-Canvas-Art-Naruto-Poster-Naruto-Wall-Stickers-Shippuden-Kakashi-Wallpaper-Anime-Mural-Christmas-Gift-Home.jpg")
    .setTimestamp()
    .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"

// ok=0;
     return message.channel.send(embedhelpmember); // sends the embed b
 
}
if ((message.content === "Zen!anime 13")||(message.content === "Zen!anime Black Butler")||(message.content === "Zen!Black Butler") ||(message.content === "zen!blackbutler") ||(message.content === "Zen!Kuroshitsuji") ||(message.content === "zen!Kuroshitsuji")||(message.content === "Zen!anime Kuroshitsuji"))
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
     .setTitle("**Anime Review**\n") // sets the title to List of Commands
     //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
     //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
     //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
     //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
     .addField("***13)  Black Butler (Japanese: 黒執事, Hepburn: Kuroshitsuji) ***","```Young Ciel Phantomhive is known as `the Queen's Guard Dog,` taking care of the many unsettling events that occur in Victorian England for Her Majesty.```")
     .addField("~-Gendre-~"," __**    Action Comedy Demons Fantasy Historical Mystery Shounen Supernatural     **__")
     .addField("~-Type-~"," __***TV Series***__",true )
     .addField("~-Studio-~"," __***A-1 Pictures***__",true )
     .addField("-Release Date (JP)-"," Fall 2008*",true )
     .addField("~- Status -~"," __** Finished Airing **__",true )
     .addField("~- Episodes -~"," **   🎥 24 🎥   **",true )
     .addField("~- Years of activity -~"," __** Oct 3, 2008 to Mar 27, 2009**__",true )
     .addField("~- Rating -~"," *7.84/10 ' There is so much here that I look for in an anime; '*",true )
     .addField("-Age targeting-"," *PG-13 *",true )
     .addField("~- Manga by -~"," Yana Toboso ",true )
     
     .addField("~- Quote -~","“My heart was entwined in a spider web. You’ll always be my Highness. I wanted your love.” – Alois Trancy")
    .setColor('#986bdb') // sets the color of the embed box to orange
    .setThumbnail("https://derf9v1xhwwx1.cloudfront.net/image/upload/oth/FunimationStoreFront/1329052/Latvian/1329052_Latvian_ShowThumbnail_09242110-3879-ea11-82a8-dd291e252010.jpg")
    .setImage("https://thegeekiary.com/wp-content/uploads/2015/11/BlackButler.jpg")
    .setTimestamp()
    .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"

// ok=0;
     return message.channel.send(embedhelpmember); // sends the embed b
 
}
if ((message.content === "Zen!anime 14")||(message.content === "Zen!anime sangatsu no lion")||(message.content === "Zen!anime March comes in like a lion")||(message.content === "Zen!anime Sangatsu no Lion")||(message.content === "Zen!Marchcomesinlikealion") ||(message.content === "Zen!Sangatsu no Lion") ||(message.content === "zen!SangatsunoLion") ||(message.content === "Zen!SangatsunoLion")||(message.content === "Zen!anime Kuroshitsuji"))
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
     .setTitle("**Anime Review**\n") // sets the title to List of Commands
     //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
     //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
     //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
     //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
     .addField("***14) March Comes in Like a Lion (Japanese: 3月のライオン, Hepburn: Sangatsu no Raion, lit. `The Lion of March`)***","```Having reached professional status in middle school, Rei Kiriyama is one of the few elite in the world of shogi.```")
     .addField("~-Gendre-~"," __**     Drama Game Seinen Slice of Life      **__")
     .addField("~-Type-~"," __***TV Series***__",true )
     .addField("~-Studio-~"," __***Shaft***__",true )
     .addField("-Release Date (JP)-"," Fall 2016*",true )
     .addField("~- Status -~"," __** Finished Airing **__",true )
     .addField("~- Episodes -~"," **   🎥  22 🎥   **",true )
     .addField("~- Years of activity -~"," __** October 8, 2016 – March 31, 2018**__",true )
     .addField("~- Rating -~"," *8.45/10 ' To be honest, I’ve always found reviewing slice of life series to be difficult and unpleasant. '*",true )
     .addField("-Age targeting-"," *PG-13 *",true )
     .addField("~- Manga by -~"," Chica Umino",true )
     
     .addField("~- Quote -~","“This time is precious. But it’s flowing onward, and I can’t stop it.” – Hinata Kawamoto” – Alois Trancy")
    .setColor('#986bdb') // sets the color of the embed box to orange
    .setThumbnail("https://static.tvtropes.org/pmwiki/pub/images/SangatsuNoLionMain_3703.jpg")
    .setImage("https://manga.tokyo/wp-content/uploads/2016/10/main_sr01_075-_t1_0318_00098.jpg")
    .setTimestamp()
    .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"

// ok=0;
     return message.channel.send(embedhelpmember); // sends the embed b
 
}
if ((message.content === "Zen!anime 15")||(message.content === "Zen!Code Geass R2")||(message.content === "Zen!anime Code Geass R2")||(message.content === "Zen!Code Geass R2 ")||(message.content === "Zen!CodeGeassR2") ||(message.content === "Zen!Sangatsu no Lion") ||(message.content === "zen!SangatsunoLion") ||(message.content === "zen!code geass r2")||(message.content === "Zen!anime Kuroshitsuji"))
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
     .setTitle("**Random Anime**\n") // sets the title to List of Commands
     //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
     //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
     //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
     //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
     .addField("***15) Code Geass: Lelouch of the Rebellion R2 (Japanese: コードギアス 反逆のルルーシュ R2, Hepburn: Kōdo Giasu: Hangyaku no Rurūshu R2)***","```One year has passed since the Black Rebellion, a failed uprising against the Holy Britannian Empire led by the masked vigilante Zero, who is now missing. ```")
     .addField("~-Gendre-~"," __**     Action Drama Mecha Military Sci-Fi Super Power      **__")
     .addField("~-Type-~"," __***TV Series***__",true )
     .addField("~-Studio-~"," __***Sunrise***__",true ) 
     .addField("-Release Date (JP)-"," Spring, 2008*",true )
     .addField("~- Status -~"," __** Finished Airing **__",true )
     .addField("~- Episodes -~"," **   🎥  25 🎥   **",true )
     .addField("~- Years of activity -~"," __** April 6, 2008 – September 28, 2008**__",true )
     .addField("~- Rating -~"," *8.92/10 ' This is... Code Geass: Hangyaku no Lelouch... R2!'*",true )
     .addField("-Age targeting-"," *PG-13 *",true )
     .addField("~- Manga by -~","Jun Maeda and Haruka Komowata",true )
     
     .addField("~- Quote -~","“The only ones who should kill, are those who are prepared to be killed.”― Lelouch Vi Britannia ")
    .setColor('#986bdb') // sets the color of the embed box to orange
    .setThumbnail("https://images-na.ssl-images-amazon.com/images/I/71b6uVcU8aL._AC_SY606_.jpg")
    .setImage("https://www.anime-evo.net/wp-content/uploads/2009/05/moe-56632-sample1-640x250.jpg")
    .setTimestamp()
    .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"

// ok=0;
     return message.channel.send(embedhelpmember); // sends the embed b
 
}
if ((message.content === "Zen!anime 16")||(message.content === "Zen!anime JoJo's Bizarre Adventure")||(message.content === "Zen!anime JoJo no Kimyou na Bouken ")||(message.content === "Zen!Jojo")||(message.content === "Zen!jojo")||(message.content === "zen!jojo "))
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
     .setTitle("**Anime Review**\n") // sets the title to List of Commands
     //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
     //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
     //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
     //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
     .addField("***16) JoJo's Bizarre Adventure (Japanese: ジョジョの奇妙な冒険, Hepburn: JoJo no Kimyō na Bōken)***","```In 1868, Dario Brando saves the life of an English nobleman, George Joestar. By taking in Dario's son Dio when the boy becomes fatherless.```")
     .addField("~-Gendre-~"," __**     Action, Adventure, Supernatural, Vampire, Shounen     **__")
     .addField("~-Type-~"," __***TV Series***__",true )
     .addField("~-Studio-~"," __***David Production***__",true )
     .addField("-Release Date (JP)-"," Fall, 2012*",true )
     .addField("~- Status -~"," __** Finished Airing **__",true )
     .addField("~- Episodes -~"," **   🎥  26 🎥   **",true )
     .addField("-Age targeting-"," *PG-13 *",true )
     .addField("~- Rating -~"," *8.25/10 Jojo's Bizarre Adventure is quite possibly the most popular anime on the internet right now*")
     .addField("~- Years of activity -~"," __** 	October 5, 2012 – April 5, 2013**__",true )
     .addField("~- Manga by -~","Hirohiko Araki",true )
     
     .addField("~- Quote -~","“You truly are the lowest scum in history. You can’t pay back what you owe with money.” – Jotaro Kujo ")
    .setColor('#986bdb') // sets the color of the embed box to orange
    .setThumbnail("https://otsukai.com/optimized?key=public/item/13972/original-5d225fd8a76c9.jpg&operation=thumbnail&w=300")
    .setImage("https://www.geek.com/wp-content/uploads/2017/12/jojo1-625x352.jpg")
    .setTimestamp()
    .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"

// ok=0;
     return message.channel.send(embedhelpmember); // sends the embed b
 
}
if ((message.content === "Zen!anime 17")||(message.content === "Zen!anime Hunter x Hunter")||(message.content === "Zen!anime HunterxHunter ")||(message.content === "Zen!Hunter x Hunter")||(message.content === "zen!Hunter x Hunter")||(message.content === "zen!anime hunter x hunter"))
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
     .setTitle("**Anime Review**\n") // sets the title to List of Commands
     //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
     //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
     //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
     //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
     .addField("***17) Hunter × Hunter (Japanese: ハンター×ハンター, Hepburn: Hantā Hantā)***","```The story follows a young boy named Gon Freecss, who was told all his life that both his parents were dead. But when he learns from Kite, an apprentice of his father Ging Freecss, that he is still alive and has since become an accomplished Hunter.```")
     .addField("~-Gendre-~"," __**      Action Adventure Fantasy Shounen Super Power      **__")
     .addField("~-Type-~"," __***TV Series***__",true )
     .addField("~-Studio-~"," __***Nippon Animation***__",true )
     .addField("-Release Date (JP)-"," Fall, 1999*",true )
     .addField("~- Status -~"," __** Finished Airing **__",true )
     .addField("~- Episodes -~"," **   🎥  62 🎥   **",true )
     .addField("-Age targeting-"," *PG-13 *",true )
     .addField("~- Rating -~"," *8.44/10 The story is good, but not really anything mind breaking. *")
     .addField("~- Years of activity -~"," __** 	October 16, 1999 – March 31, 2001**__",true )
     .addField("~- Manga by -~","	Yoshihiro Togashi",true )
     
     .addField("~- Quote -~","“People only find me interesting because they can’t tell whether I’m serious or not.” – Killua Zoldyck ")
    .setColor('#986bdb') // sets the color of the embed box to orange
    .setThumbnail("https://cdn.myanimelist.net/r/360x360/images/anime/8/19473.jpg?s=37f6976ddc24ff847519920406c75b7a")
    .setImage("https://assets.mubicdn.net/images/film/258973/image-w1280.jpg?1583226062")
    .setTimestamp()
    .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"

// ok=0;
     return message.channel.send(embedhelpmember); // sends the embed b
 
}
if ((message.content === "Zen!anime 18")||(message.content === "Zen!anime Love is War")||(message.content === "Zen!anime love is war")||(message.content === "Zen!Love is War"))
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
    .setTitle("**Anime Review**\n") // sets the title to List of Commands
    //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
    //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
    //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
    //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
    .addField("***18) Kaguya-sama: Love Is War***","```At the renowned Shuchiin Academy, Miyuki Shirogane and Kaguya Shinomiya are the student body's top representatives. Ranked the top student in the nation and respected by peers and mentors alike, Miyuki serves as the student council president.```")
    .addField("~-Gendre-~"," __**     Comedy Psychological Romance School Seinen     **__")
    .addField("~-Type-~"," __***TV Series***__",true )
    .addField("~-Studio-~"," __***A-1 Pictures***__",true )
    .addField("-Release Date (JP)-"," Winter, 2019*",true )
    .addField("~- Status -~"," __** Currently Airing **__",true )
    .addField("~- Episodes -~"," **   🎥16🎥   **",true )
    .addField("-Age targeting-"," *PG-13 *",true )
    .addField("~- Rating -~"," *8.42/10 Story? There’s no story beyond two teen high schoolers failed love*")
    .addField("~- Years of activity -~"," __**January 12, 2019 – present**__",true )
    .addField("~- Manga by -~","Aka Akasaka",true )
    
    .addField("~- Quote -~","'A love letter to Shinomiya? Some men really are fools for love.'- Miyuki Shirogane ")
   .setColor('#986bdb') // sets the color of the embed box to orange
   .setThumbnail("https://m.media-amazon.com/images/M/MV5BOTkzZjZiOWItZGM5Ny00N2IxLTg4ZTQtYTBiODhlNmRlM2IxXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UY268_CR4,0,182,268_AL_.jpg")
   .setImage("https://img.over-blog-kiwi.com/3/28/25/53/20190329/ob_405ed1_7fzv7qmnq.jpg")
   .setTimestamp()
   .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"

// ok=0;
    return message.channel.send(embedhelpmember); // sends the embed b
}
if ((message.content === "Zen!anime 19")||(message.content === "Zen!anime Plunderer")||(message.content === "Zen!anime plunderer")||(message.content === "Zen!Plunderer"))
{
var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
     .setTitle("**Anime Review**\n") // sets the title to List of Commands
     //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
     //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
     //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
     //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
     .addField("***19) Plunderer (Japanese: プランダラ, Hepburn: Purandara)***","```Alcia is a world governed by 'Count': numbers engraved on a person's body, representing any number related to their life. These Counts determine a person's social status and power in Alcia.```")
     .addField("~-Gendre-~"," __**      Action Ecchi Fantasy Shounen      **__")
     .addField("~-Type-~"," __***TV Series***__",true )
     .addField("~-Studio-~"," __***Geektoys***__",true )
     .addField("-Release Date (JP)-"," Winter, 2020*",true )
     .addField("~- Status -~"," __** Currently Airing **__",true )
     .addField("~- Episodes -~"," **   🎥24🎥   **",true )
     .addField("-Age targeting-"," *PG-13 *",true )
     .addField("~- Rating -~"," *6.14/10 Ah, yes Ecchi fantasy anime*")
     .addField("~- Years of activity -~"," __**J Jan 9, 2020 to present**__",true )
     .addField("~- Manga by -~","Suu Minazuki",true )
     
     .addField("~- Quote -~","Never thake to much care on someone because you won't be able to stand the pain when they start avoiding you!")
    .setColor('#986bdb') // sets the color of the embed box to orange
    .setThumbnail("https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.3/157578/plunderer.jpg")
    .setImage("https://www.epicdope.com/wp-content/uploads/2020/04/Licht-Bach-Plunderer.jpg")
    .setTimestamp()
    .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"

// ok=0;
     return message.channel.send(embedhelpmember); // sends the embed b
 }
 if ((message.content === "Zen!anime 20")||(message.content === "Zen!anime Kenja no Mago")||(message.content === "Zen!anime Kenja No Mago")||(message.content === "Zen!Kenja no Mago"))
 {
 var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
      .setTitle("**Anime Review**\n") // sets the title to List of Commands
      //.addField("Last update","```04/27/2020-09:30:24```") // sets the field information about the command *info
      //.addField("as", "```Air distance, air currents, duration in air, humidity, airborne transmission, duration on objects and surfaces, floor```") // sets the second field to explain the command *ping      
      //.setThumbnail('https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3.jpeg')
      //.setImage('https://media.istockphoto.com/vectors/precautions-for-the-coronavirus-basic-protective-measures-against-the-vector-id1214251621')
      .addField("***20) Wise Man's Grandchild (賢者の孫, Kenja no Mago, lit. 'The Sage's Grandson')***","```In the kingdom of Earlshide, Merlin Walford was once regarded as a national hero, hailed for both his power and achievements. Preferring a quiet life however, he secludes himself deep in the rural woods, dedicating his time to raising an orphan that he saved. ```")
      .addField("~-Gendre-~"," __**    Action Comedy Magic     **__")
      .addField("~-Type-~"," __***TV Series***__",true )
      .addField("~-Studio-~"," __***Silver Link.***__",true )
      .addField("-Release Date (JP)-"," Spring, 2019*",true )
      .addField("~- Status -~"," __**  Finished Airing  **__",true )
      .addField("~- Episodes -~"," **   🎥12🎥   **",true )
      .addField("-Age targeting-"," *PG-13 *",true )
      .addField("~- Rating -~"," *6.63/10 Kenja no Mago is a show with neither originality nor personality.*")
      .addField("~- Years of activity -~"," __**	April 10, 2019 – June 26, 2019**__",true )
      .addField("~- Manga by -~","	Tsuyoshi Yoshioka",true )
      
      .addField("~- Quote -~","'He took anyone who was half-decent with magic'-August von Earlshide")
     .setColor('#986bdb') // sets the color of the embed box to orange
     .setThumbnail("https://m.media-amazon.com/images/M/MV5BNjIxYmFjNGQtOTRkMS00YmY4LWFhZDEtODZkMzE3NDAxNDQ2XkEyXkFqcGdeQXVyMzI2Mjc1NjQ@._V1_UY1200_CR751,0,630,1200_AL_.jpg")
     .setImage("https://wallpaperaccess.com/full/2126969.jpg")
     .setTimestamp()
     .setFooter("#ANIMEARECOOL|The score is taken from myanimelist") // sets the footer to "You need help, do you?"

 // ok=0;
      return message.channel.send(embedhelpmember); // sends the embed b
  }

















const prefix='Zen!';
///8ball
if(message.content.startsWith("Zen!")){
const prefix="Zen!";
    let args = message.content.substring(prefix.length).split(" ");
    switch(args[0]){
      case '8ball':
if(message.content==="Zen!8ball")
return message.channel.send("Please put a question after 'Zen!8ball'");
ballMessage =message.content.slice(10);
number =6;
var random=Math.floor(Math.random() *(number-1+1))+1;
switch (random){  
case 1: message.reply('***The 8ball says __no__***'); break;
case 2: message.reply('***The 8ball says __maybe__***'); break;
case 3: message.reply('***The 8ball says __yes__***'); break;
case 4: message.reply('***The 8ball says __not at all__***'); break;
case 5: message.reply('***The 8ball says __of course__***'); break;
case 6: message.reply('***The 8ball says  __i dont know__***'); break;
case 7: message.reply('***The 8ball says  __i think so__***'); break;
} 
    }
}
});







let x;
let t=1;
////////MUSIC ///////////
require('events').EventEmitter.defaultMaxListeners = 100;
let numar = 0;
const queue = new Map();
const ytdl = require("ytdl-core");
client.on("message", async message => {
const prefix="Zen!";
if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;

const serverQueue = queue.get(message.guild.id);

if (message.content.startsWith(`${prefix}play`)) {
  if(message.content==="Zen!play")
return message.channel.send("You have to put the link of the song!");
  message.delete();
  execute(message, serverQueue);
  return;
} else if (message.content.startsWith(`${prefix}skip`)) {
  skip(message, serverQueue);
  return;
}  else if (message.content.startsWith(`${prefix}pause`)) {
    pause(message, serverQueue);
    return;
 } else if (message.content.startsWith(`${prefix}queue`)) {
      queue1(message, serverQueue);
      return;
 } else if (message.content.startsWith(`${prefix}resume`)) {
      resume(message, serverQueue);
      return;
} else if (message.content.startsWith(`${prefix}stop`)) {
  message.channel.send("🛑The music has been stopped!:white_check_mark:")
  stop(message, serverQueue);
  return;
} //else {
  ///message.channel.send("You need to enter a valid command!");
//}
});
async function execute(message, serverQueue) {
const args = message.content.split(" ");

const voiceChannel = message.member.voice.channel;
if (!voiceChannel)
  return message.channel.send(
    "You need to be in a voice channel to play music!"
  );
const permissions = voiceChannel.permissionsFor(message.client.user);
if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
  return message.channel.send("I need the permissions to join and speak in your voice channel!");
}

const songInfo = await ytdl.getInfo(args[1]);
const song = {
  title: songInfo.title,
  url: songInfo.video_url
};
if (!serverQueue) {
  const queueContruct = {
    textChannel: message.channel,
    voiceChannel: voiceChannel,
    connection: null,
    songs: [],
    volume: 5,
    playing: true
  };
  queue.set(message.guild.id, queueContruct);
  queueContruct.songs.push(song);
  try {
    var connection = await voiceChannel.join();
    queueContruct.connection = connection;
    play(message.guild, queueContruct.songs[0]);
  } catch (err) {
    console.log(err);
    queue.delete(message.guild.id);
    return message.channel.send(err);
  }
} else {  
  if(t===1){
  serverQueue.songs.push(song);
  ///message.channel.send(`☕${song.title} has been added to the queue!☕`);
  var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
  .setTitle(`**${song.title} **\n`) // sets the title to List of Commands
.setAuthor(`Adding to the queue:`)
.setDescription(`***Type Zen!music to see more info***`) // sets the first field to explain the command *help
//.addField(" -song added by-", `${message.author}`) // sets the first field to explain the command *help
  .addField(" - link -", `${song.url}`) // sets the first field to explain the command *help
  //.setDescription("***Type Zen!music to see more info***") // sets the first field to explain the command *help
  .setImage('https://cutewallpaper.org/21/anime-music-wallpaper-hd/Anime-Music-Wallpaper-77-images.jpg')
  .setColor('#69524e') // sets the color of the embed box to orange
  .setTimestamp()
  .setThumbnail(`https://i.pinimg.com/originals/48/5d/e6/485de66b78bceb718909e8426edab611.jpg`)
  .setFooter("I love music, do you?") // sets the footer to "You need help, do you?"
  serverQueue.textChannel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
}
// if member is a botadmin, display this too
if(t===2)
{var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
.setTitle(`**${song.title} **\n`) // sets the title to List of Commands
.setAuthor(`Adding to the queue:`)
.setDescription(`***Type Zen!music to see more info***`) // sets the first field to explain the command *help
 // sets the first field to explain the command *help
//.addField(" -song played by-", `${message.author}`)
.addField(" - link -", `${song.url}`) // sets the first field to explain the command *help
//.setDescription("***Type Zen!music to see more info***") // sets the first field to explain the command *help
.setImage('http://sf.co.ua/13/03/wallpaper-2227239.jpg')
.setColor('#69524e') // sets the color of the embed box to orange
.setTimestamp()
.setThumbnail('https://i.pinimg.com/736x/53/c4/d2/53c4d2ee0d98ebc8529a25b483454c63.jpg').setFooter("I love music, do you?") // sets the footer to "You need help, do you?"
serverQueue.textChannel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
}
if(t>2)
{var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
.setTitle(`**${song.title} **\n`) // sets the title to List of Commands
.setAuthor(`Adding to the queue:`)
.setDescription(`***Type Zen!music to see more info***`) // sets the first field to explain the command *help

//.addField(" -song played by-", `${message.author}`)
.addField(" - link -", `${song.url}`) // sets the first field to explain the command *help
//.setDescription("***Type Zen!music to see more info***") // sets the first field to explain the command *help
.setImage('  https://free4kwallpapers.com/uploads/originals/2015/07/13/listening-to-music.jpg')
.setColor('#69524e') // sets the color of the embed box to orange       https://free4kwallpapers.com/uploads/originals/2015/07/13/listening-to-music.jpg
.setTimestamp()
.setThumbnail('https://i.pinimg.com/originals/87/5b/e1/875be132a9a8a044fd3bce96a4fb3b58.jpg').setFooter("I love music, do you?") // sets the footer to "You need help, do you?"
serverQueue.textChannel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
}  
x=`${song.title}`;
t++;
}


}
function pause(message, serverQueue) {
if (!message.member.voice.channel)
  return message.channel.send(
    "You have to be in a voice channel to pause the music!"
  );
  //number--;
if (!serverQueue)
  return message.channel.send("🤗There is no song that I could pause!🤗");
serverQueue.connection.dispatcher.pause();//number--;
message.channel.send(`***⏸️The song(${serverQueue.songs[0].title}) has been paused!***:white_check_mark:`);
}
function resume(message, serverQueue) {
if (!message.member.voice.channel)
  return message.channel.send(
    "You have to be in a voice channel to pause the music!"
  );
  //number--;
if (!serverQueue)
  return message.channel.send("🤗There is no song that I could resume!🤗");
serverQueue.connection.dispatcher.resume();//number--;
message.channel.send(`***▶️The song(${serverQueue.songs[0].title}) has been resumed!***:white_check_mark: `);
}
function skip(message, serverQueue) {
if (!message.member.voice.channel)
  return message.channel.send(
    "You have to be in a voice channel to skip the music!"
  );
  //number--;
if (!serverQueue)
  return message.channel.send("🤗There is no song that I could skip!🤗");
  message.channel.send(`***⏭️The song(${serverQueue.songs[0].title}) has been skipped!***:white_check_mark: `);
  serverQueue.connection.dispatcher.end();
//number--;
}
///queue
function queue1(message, serverQueue) {
  if (!serverQueue) return message.channel.send('There is nothing playing.');
  return message.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
  `);
}
function stop(message, serverQueue) {
if (!message.member.voice.channel)
  return message.channel.send(
    "😞You have to be in a voice channel to stop the music!😞"
  );
//serverQueue.songs = [];
serverQueue.connection.dispatcher.end();

}
function play(guild, song) {
const serverQueue = queue.get(guild.id);
if (!song) {
  serverQueue.voiceChannel.leave();
  queue.delete(guild.id);
  return;
}
const dispatcher = serverQueue.connection
  .play(ytdl(song.url))
  .on("finish", () => {
    serverQueue.songs.shift();
    play(guild, serverQueue.songs[0]);
  })
  .on("error", error => console.error(error));
dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
//serverQueue.textChannel.send(`🐬Start playing: **${song.title}** enjoy!!🐬`);
///let t=1;

  var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
  .setTitle(`**${song.title} **\n`) // sets the title to List of Commands
  .setAuthor(`Start playing:`)
  .setDescription(`***Type Zen!music to see more info***`) // sets the first field to explain the command *help
   //.addField(" -song played by-", `${message.author}`)**🐬Start playing:**
    .addField(" - link -", `${song.url}`) // sets the first field to explain the command *help
   // .setDescription("***Type Zen!music to see more info***") // sets the first field to explain the command *help
    .setImage('https://www.ecopetit.cat/wpic/mpic/271-2718152_anime-boy-song.jpg')
    .setColor('#69524e') // sets the color of the embed box to orange
    .setTimestamp()
    .setThumbnail('https://deluscar.files.wordpress.com/2014/07/anime-headphones-mac.jpg').setFooter("I love music, do you?") // sets the footer to "You need help, do you?"
    serverQueue.textChannel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
// if member is a botadmin, display this too
}
/*
let fetched = ops.active.get(message.guild.id);
if(!fetched)return message.channel.send("There are no songs to be paused");
if(message.member.voiceChannel!==message.guild.me.voiceChannel)return message.channel.send("You need to be in the same voice channel!");
if(fetched.dispatcher.paused)return MediaKeyMessageEvent.channel.send("This music isnt paused");
fetched.dispatcher.resume();
message.channel.send("resumed");
*/





let a=1;
//const randomPuppy = require("random-puppy");
client.on("message", async message => {
/*const Recentt =new Set();
if((message.content==='Zen!randommeme') || (message.content==='Zen!meme')|| (message.content==='zen!meme'))
{ 
    if(message.channel.id==='602983035645722625')
                 return message.channel.send(`<@${message.author.id}>, you can use Zen!meme command in #bot-spam `); 
     if(message.channel.id==='700363955213959178')
                 return message.channel.send(`<@${message.author.id}>, you can use Zen!meme command in #bot-spam `); 
  if(a===4){message.channel.send('😃LOL😃(please wait few seconds till the meme will appear)');}
  if(a===3){message.channel.send('🔥What about this?🔥(please wait few seconds till the meme will appear)');}
  if(a===2){message.channel.send('🌵Hmmmmmmm🌵(please wait few seconds till the meme will appear)');}
  if(a===1){ message.channel.send('👍I got you bro👍(please wait few seconds till the meme will appear)');}
  a++;
  if(a===5){a=1;}
const args = message.content.slice(prefix.length).trim().split(/ +/g);

const cmd = args.shift().toLowerCase();
// In this array, 
      // you can put the subreddits you want to grab memes from
      const subReddits = ["dankmeme", "meme", "me_irl", "animememes"];
      // Grab a random property from the array
      const random = subReddits[Math.floor(Math.random() * subReddits.length)];

      // Get a random image from the subreddit page
      const img = await randomPuppy(random);
      const embed = new MessageEmbed()
          .setColor("RANDOM")
          .setImage(img)
          .setTitle(`From /r/${random}`)
          .setURL(`https://reddit.com/r/${random}`);

      message.channel.send(embed);
      if(a===4){message.channel.send('☠️Was it funny?☠️');}
      if(a===3){message.channel.send('😯IT IS WHAT IT IS!!!!😯');}
      if(a===2){message.channel.send('👨‍🎤Damn boyyyy👨‍🎤');}
      if(a===1){message.channel.send('🤓Never say never🤓');}
}*/









https://cdn.discordapp.com/avatars/673362753489993749/0e6ecd5dd65c56a058a43c8556cc8f57.png?size=1024

///BOT AVATAR https://cdn.discordapp.com/attachments/704229400484380673/705831697005936640/2Q.png
if(message.content==="Zen!myavatar"){client.user.setAvatar("https://cdn.discordapp.com/attachments/704229400484380673/705831697005936640/2Q.png")}});









///////////////////

/*client.on("message", function(message) { // when a message is sent
  if (message.author.equals(client.user)) return; // if the message is sent by a bot, ignore

  if (!message.content.startsWith(PREFIX)) return; // if the message doesn't contain PREFIX (*), then ignore

  var args = message.content.substring(PREFIX.length).split(" "); // removes the prefix from the message
  var command = args[0].toLowerCase(); // sets the command to lowercase (making it incase sensitive)
  var mutedrole = message.guild.roles.find("name", "muted");

  if (command == "help") { // creates a command *help
      var embedhelpmember = new MessageEmbed() // sets a embed box to the variable embedhelpmember
          .setTitle("**List of Commands**\n") // sets the title to List of Commands
          .addField(" - help", "Displays this message (Correct usage: *help)") // sets the first field to explain the command *help
          .addField(" - info", "Tells info about myself :grin:") // sets the field information about the command *info
          .addField(" - ping", "Tests your ping (Correct usage: *ping)") // sets the second field to explain the command *ping
          .addField(" - cookie", "Sends a cookie to the desired player! :cookie: (Correct usage: *cookie @username)") // sets the third field to explain the command *cookie
          .addField(" - 8ball", "Answers to all of your questions! (Correct usage: *8ball [question])") // sets the field to the 8ball command
          .setColor(0xFFA500) // sets the color of the embed box to orange
          .setFooter("You need help, do you?") // sets the footer to "You need help, do you?"
      var embedhelpadmin = new MessageEmbed() // sets a embed box to the var embedhelpadmin
          .setTitle("**List of Admin Commands**\n") // sets the title
          .addField(" - say", "Makes the bot say whatever you want (Correct usage: *say [message])")
          .addField(" - mute", "Mutes a desired member with a reason (Coorect usage: *mute @username [reason])") // sets a field
          .addField(" - unmute", "Unmutes a muted player (Correct usage: *unmute @username)")
          .addField(" - kick", "Kicks a desired member with a reason (Correct usage: *kick @username [reason])") //sets a field
          .setColor(0xFF0000) // sets a color
          .setFooter("Ooo, an admin!") // sets the footer
      message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
      if(message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too
  }

 

  
  if (command == "Zen!say") { // creates command say
      if (!message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!");
      var sayMessage = message.content.substring(4)
      message.delete().catch(O_o=>{});
      message.channel.send(sayMessage);
  }

  if(command === "Zen!purge") {
      let messagecount = parseInt(args[1]) || 1;

      var deletedMessages = -1;

      message.channel.fetchMessages({limit: Math.min(messagecount + 1, 100)}).then(messages => {
          messages.forEach(m => {
              if (m.author.id == client.user.id) {
                  m.delete().catch(console.error);
                  deletedMessages++;
              }
          });
      }).then(() => {
              if (deletedMessages === -1) deletedMessages = 0;
              message.channel.send(`:white_check_mark: Purged \`${deletedMessages}\` messages.`)
                  .then(m => m.delete(2000));
      }).catch(console.error);
  }

  if (command == "mute") { // creates the command mute
      if (!message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!"); // if author has no perms
      var mutedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
      if (!mutedmember) return message.reply("Please mention a valid member of this server!") // if there is no kickedmmeber var
      if (mutedmember.hasPermission("ADMINISTRATOR")) return message.reply("I cannot mute this member!") // if memebr is an admin
      var mutereasondelete = 10 + mutedmember.user.id.length //sets the length of the kickreasondelete
      var mutereason = message.content.substring(mutereasondelete).split(" "); // deletes the first letters until it reaches the reason
      var mutereason = mutereason.join(" "); // joins the list kickreason into one line
      if (!mutereason) return message.reply("Please indicate a reason for the mute!") // if no reason
      mutedmember.addRole(mutedrole) //if reason, kick
          .catch(error => message.reply(`Sorry ${message.author} I couldn't mute because of : ${error}`)); //if error, display error
      message.reply(`${mutedmember.user} has been muted by ${message.author} because: ${mutereason}`); // sends a message saying he was kicked
  }

  if (command == "unmute") { // creates the command unmute
      if (!message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!"); // if author has no perms
      var unmutedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
      if (!unmutedmember) return message.reply("Please mention a valid member of this server!") // if there is no kickedmmeber var
      unmutedmember.removeRole(mutedrole) //if reason, kick
          .catch(error => message.reply(`Sorry ${message.author} I couldn't mute because of : ${error}`)); //if error, display error
      message.reply(`${unmutedmember.user} has been unmuted by ${message.author}!`); // sends a message saying he was kicked
  }

  if (command == "kick") { // creates the command kick
      if (!message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!"); // if author has no perms
      var kickedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
      if (!kickedmember) return message.reply("Please mention a valid member of this server!") // if there is no kickedmmeber var
      if (!kickedmember.kickable) return message.reply("I cannot kick this member!") // if the member is unkickable
      var kickreasondelete = 10 + kickedmember.user.id.length //sets the length of the kickreasondelete
      var kickreason = message.content.substring(kickreasondelete).split(" "); // deletes the first letters until it reaches the reason
      var kickreason = kickreason.join(" "); // joins the list kickreason into one line
      if (!kickreason) return message.reply("Please indicate a reason for the kick!") // if no reason
      kickedmember.kick(kickreason) //if reason, kick
          .catch(error => message.reply(`Sorry @${message.author} I couldn't kick because of : ${error}`)); //if error, display error
      message.reply(`${kickedmember.user.username} has been kicked by ${message.author.username} because: ${kickreason}`); // sends a message saying he was kicked
  }

});
*/


client.on("message", (message) => {
  let prefix='Zen!';
  let prx='zen!';
  let args = message.content.substring(prefix.length).split(" ");
  if ((message.content.startsWith(prefix+'roll'))|| (message.content.startsWith(prx+'roll'))) {
    if(message.content=='Zen!roll')return message.reply("Please provide a number!");
    if((message.channel.id==="700363955213959178")&&message.author.id!="701108556996411512")
    {
      return message.channel.send("no u")
    }
    let r= args[1];
   let x=Math.floor(Math.random() * args[1]) 
   x++;
   console.log(`${message.author.username} roll dices and got ${x} out of `+args[1]);
    
     // message.channel.send(`In the end, the result was: ***${x}***`);
  
     const dice = new MessageEmbed()
     .setColor("RANDOM")
     .setTitle('**:game_die: Rolling Dice!**')
     .addField(`**[d${r}** : ${x}]`,`In the end, the result was: **${x}**`)
     //.setFooter(`${message.author.tag}`)
     //.setThumbnail("https://i7.pngguru.com/preview/985/642/564/5bed1a7199569.jpg")
     //.setThumbnail(" https://i.pinimg.com/originals/27/c2/f2/27c2f2f2987acd4625c9e950f2d0598b.png")
     ///.setAuthor(`${message.author.tag}`)
     message.channel.send(dice); 
    } 
  });



    
    client.on("message", (message) => {
      if(message.content.startsWith("Zen!")){
        const prefix="Zen!";
            let args = message.content.substring(prefix.length).split(" ");
            switch(args[0]){
              case 'coin': 
              if((message.channel.id==="700363955213959178")&&message.author.id!="701108556996411512")
              {
                return message.channel.send("no u")
              }
    number =2;
    let random=Math.floor(Math.random() * 2)+1;  
    switch (random){  
      case 1: 
      const head = new MessageEmbed()
      .setColor("RANDOM") 
      .setTitle(`*${message.author.username} tossed a coin and got: __Heads__*`)
      //.setThumbnail("https://i7.pngguru.com/preview/985/642/564/5bed1a7199569.jpg")
      .setAuthor(`⌛Coinflip results:`)
      .setThumbnail(" https://i.pinimg.com/originals/27/c2/f2/27c2f2f2987acd4625c9e950f2d0598b.png")
      //.setAuthor(`Flipping coin...⌛`)
      //.setFooter(`${message.author.tag}`)
      message.channel.send(head); break;
      case 2: 
      const tails = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`*${message.author.username} tossed a coin and got: __Tails__*`)
      .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/4/49/LT-2014-50lit%C5%B3-Donelaitis-a.png")
      .setAuthor(`⌛Coinflip results:`)
      message.channel.send(tails); break;
    } 
    }
    }
    });


  

///cooldown
const randomPuppy = require("random-puppy");
const Recentt =new Set();
const disabler = new Set();
let Prefix= 'Zen!';
let disable=0;
let q;
client.on('message',async message =>{
if(message.content==="Zen!disable Zen!meme")
{
  disabler.add(message.channel.id);
 message.channel.send("Meme command has been disabled!");
} 
if(message.content==="Zen!enable Zen!meme")
  {
    message.channel.send("Meme command has been enabled!");
    disabler.delete(message.channel.id);
  }
if(message.content.startsWith("Zen!")){
  const prefix="Zen!";
      let args = message.content.substring(prefix.length).split(" ");
      switch(args[0]){
        case 'meme': 
 if(Recentt.has(message.author.id)){
   message.reply("you need to wait 10 seconds till you can use again Zen!meme command⌛");
   //message.reply('*Zoomie IM A GENIUS:)))*');
 }else
 {
   if((disabler.has(message.channel.id)) &&(message.content==="Zen!meme"))
   {
   return message.channel.send("Meme command has been disabled on this channel!");
    }
  if(message.channel.id==='602983035645722625')
  return message.channel.send(`<@${message.author.id}>, you can use Zen!meme command in <#699361324307841094> `); 
if(message.channel.id==='700363955213959178')
  return message.channel.send(`<@${message.author.id}>, you can use Zen!meme command in <#699361324307841094> `); 
/*if(a===4){message.channel.send('😃LOL😃(please wait few seconds till the meme will appear)');}
if(a===3){message.channel.send('🔥What about this?🔥(please wait few seconds till the meme will appear)');}
if(a===2){message.channel.send('🌵Hmmmmmmm🌵(please wait few seconds till the meme will appear)');}
if(a===1){ message.channel.send('👍I got you bro👍(please wait few seconds till the meme will appear)');}
a++;
if(a===5){a=1;}*/
const args = message.content.slice(prefix.length).trim().split(/ +/g);

const cmd = args.shift().toLowerCase();
// In this array, 
// you can put the subreddits you want to grab memes from
const subReddits = ["animemes"];
// Grab a random property from the array
const random = subReddits[Math.floor(Math.random() * subReddits.length)];

// Get a random image from the subreddit page
const img = await randomPuppy(random);
const embed = new MessageEmbed()
.setColor("RANDOM")
.setImage(img)
.setTitle(`From /r/${random}`)
.setURL(`https://reddit.com/r/${random}`);

message.channel.send(embed);
/*
if(a===4){message.channel.send('☠️Was it funny?☠️');}
if(a===3){message.channel.send('😯IT IS WHAT IT IS!!!!😯');}
if(a===2){message.channel.send('👨‍🎤Damn boyyyy👨‍🎤');}
if(a===1){message.channel.send('🤓Never say never🤓');}
*/  

   Recentt.add(message.author.id);
   setTimeout(() =>{
     Recentt.delete(message.author.id)
   
    },10000);
 }
 break;
}
}
});






///GOOGLE google imagini imagine SEARCH imagine///
const cheerio=require("cheerio")
const request=require("request")
const imaginer = new Set();
client.on("message", async message => {
if(message.content.startsWith("Zen!")){
  if(message.content==="Zen!disable Zen!image")
  {
    message.channel.send("Image command has been disabled!");
    imaginer.add(message.channel.id);
  }
  if(message.content==="Zen!enable Zen!image")
  {
    message.channel.send("Image command has been enabled!");
    imaginer.delete(message.channel.id);
  }
  const prefix="Zen!";
      let args = message.content.substring(prefix.length).split(" ");
      switch(args[0]){
  case 'image': 
  if(message.content.startsWith("Zen!image") &&(imaginer.has(message.channel.id)))
  {
    return message.channel.send("Image command has been disabled on this channel!");
  }

  if(message.channel.id==='602983035645722625')   
     return message.channel.send(`<@${message.author.id}>, you can use Zen!image command in <#699361324307841094> `);
  if(message.channel.id==='700363955213959178')      
     return message.channel.send(`<@${message.author.id}>, you can use Zen!image command in <#699361324307841094>`);
    image(message);

    break;
}
}
});
function image(message){
let args = message.content.slice(PREFIX.length).split(" ");
var search  = args.toString();
var options = {
    url: "http://results.dogpile.com/serp?qc=images&q=" + search,
    method: "GET",
    headers: {
        "Accept": "text/html",
        "User-Agent": "Chrome"
    } 
};
request(options, function(error, response,responseBody) {
    if (error) {
        return;
    }
    $ = cheerio.load(responseBody);
    var links = $(".image a.link");
    var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
    if (!urls.length) {
        return;
    }
    // Send result
    //const exampleEmbed = new MessageEmbed()
    //.attachFiles(`${urls[Math.floor(Math.random() * urls.length)]}`)
    //message.channel.send (exampleEmbed );
    const img = urls[Math.floor(Math.random() * urls.length)];
    const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        message.channel.send (embed );
});
}













///gif commands

//hug
client.on('message', message => {
const prefix="Zen!";
if(message.content.startsWith("Zen!")){
let args = message.content.substring(prefix.length).split(" ");
switch(args[0]){
  case 'hug':   
  if(Recentt.has(message.author.id)){
    message.reply("you need to wait 10 seconds till you can use again Zen!hug command⌛");
    //message.reply('*Zoomie IM A GENIUS:)))*');
  }else
  {
  message.delete();
  //const user = 
  var k=Math.floor(Math.random() * 11);
  k++;
  //var k=10;
  if(k===1)
  {
  const ala =message.mentions.users.first() || message.author;
  const avatarEmbed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${message.author} **hugs** ${ala}!`)
  .setImage("https://media1.tenor.com/images/adeb030aaa5a2a3d16abdc58be4d1448/tenor.gif?itemid=11733535")
  message.channel.send(avatarEmbed);
}
if(k===2){
const ala =message.mentions.users.first() || message.author;
  const avatarEmbed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${message.author} **hugs** ${ala}!`)
  .setImage("https://pa1.narvii.com/6103/377538d76d83ec7d9d2be32870d43f2ac931a412_hq.gif")
  message.channel.send(avatarEmbed);
}
if(k===3){ 
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **hugs** ${ala}!`)
    .setImage("https://i.gifer.com/CzCS.gif")
    message.channel.send(avatarEmbed);
}
if(k===4){
  const ala =message.mentions.users.first() || message.author;
      const avatarEmbed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${message.author} **hugs** ${ala}!`)
       .setImage("https://gifimage.net/wp-content/uploads/2017/10/cuddle-anime-gif-14.gif")
      message.channel.send(avatarEmbed);
}
if(k===5){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **hugs** ${ala}!`)
    .setImage("https://i.gifer.com/7zbn.gif")
    message.channel.send(avatarEmbed);
}
if(k===6){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **hugs** ${ala}!`)
    .setImage("https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif")
    message.channel.send(avatarEmbed);
}
if(k===7){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **hugs** ${ala}!`)
    .setImage("https://media1.tenor.com/images/1069921ddcf38ff722125c8f65401c28/tenor.gif?itemid=11074788")
    message.channel.send(avatarEmbed);
}
if(k===8){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **hugs** ${ala}!`)
    .setImage("https://i.imgur.com/mTAF7zA.gif")
    message.channel.send(avatarEmbed);
}
if(k===9){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **hugs** ${ala}!`)
    .setImage("https://cdn.weeb.sh/images/SknauOQwb.gif")
    message.channel.send(avatarEmbed);
}
if(k===10){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **hugs** ${ala}!`)
    .setImage("https://i.imgur.com/r9aU2xv.gif")
    message.channel.send(avatarEmbed);
}
if(k===11){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **hugs** ${ala}!`)
    .setImage("https://66.media.tumblr.com/291c8b98b219283f9e21927e7ef6c3f2/tumblr_mzscklfLYx1tptsy9o1_400.gifv")
    message.channel.send(avatarEmbed);
}
if(k===12){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **hugs** ${ala}!`)
    .setImage("https://cdn.weeb.sh/images/BkZngAYtb.gif")
    message.channel.send(avatarEmbed);
}
Recentt.add(message.author.id);
   setTimeout(() =>{
     Recentt.delete(message.author.id)
   
    },10000);
 }
 break;
}
}
});//e bin
//kiss
client.on('message', message => {
if(message.content.startsWith("Zen!")){
const prefix="Zen!";
let args = message.content.substring(prefix.length).split(" ");
switch(args[0]){
  case 'kiss':   
  if(Recentt.has(message.author.id)){
    message.reply("you need to wait 10 seconds till you can use again Zen!kiss command⌛");
    //message.reply('*Zoomie IM A GENIUS:)))*');
  }else
  {
    message.delete();
  //const user = 
  var k=Math.floor(Math.random() * 11);
  k++;
  //var k=10;
  if(k===1)
  {
  const ala =message.mentions.users.first() || message.author;
  const avatarEmbed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${message.author} **kisses** ${ala}'s lips`)
  .setImage("https://i.pinimg.com/originals/e3/4e/31/e34e31123f8f35d5c771a2d6a70bef52.gif")
  message.channel.send(avatarEmbed);
}
if(k===2){
const ala =message.mentions.users.first() || message.author;
  const avatarEmbed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${message.author} **kisses** ${ala}'s lips`)
  .setImage("https://i.imgur.com/N7npWrB.gif")
  message.channel.send(avatarEmbed);
}
if(k===3){ 
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **kisses** ${ala}'s lips`)
    .setImage("https://data.whicdn.com/images/278256806/original.gif")
    message.channel.send(avatarEmbed);
}
if(k===4){
  const ala =message.mentions.users.first() || message.author;
      const avatarEmbed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${message.author} **kisses** ${ala}'s lips`)
       .setImage("https://shiroganenosuiren.files.wordpress.com/2014/01/sakura-trick-3-m1.gif")
      message.channel.send(avatarEmbed);
}
if(k===5){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **kisses** ${ala}'s lips`)

    .setImage("https://media1.tenor.com/images/5654c7b35e067553e99bb996535c0a75/tenor.gif?itemid=10358833")
    message.channel.send(avatarEmbed);
}
if(k===6){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **kisses** ${ala}'s lips`)
    .setImage("https://i.gifer.com/2uEt.gif")
    message.channel.send(avatarEmbed);
}
if(k===7){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **kisses** ${ala}'s lips`)
    .setImage("https://cutewallpaper.org/21/kiss-anime-pic/Cute-anime-kiss-Album-on-Imgur.gif")
    message.channel.send(avatarEmbed);
}
if(k===8){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **kisses** ${ala}'s lips`)
    .setImage("https://66.media.tumblr.com/tumblr_m22718URy21r0ydwlo1_400.gif")
    message.channel.send(avatarEmbed);
}
if(k===9){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **kisses** ${ala}'s lips`)
     .setImage("https://media1.tenor.com/images/c263375bf2b35ed931edf05c8694910d/tenor.gif?itemid=15111557")
    message.channel.send(avatarEmbed);
}
if(k===10){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **kisses** ${ala}'s lips`)
    .setImage("https://i.gifer.com/REyy.gif")
    message.channel.send(avatarEmbed);
}
if(k===11){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **kisses** ${ala}'s lips`)
    .setImage("https://gifimage.net/wp-content/uploads/2017/09/anime-forehead-kiss-gif-3.gif")
    message.channel.send(avatarEmbed);
}
if(k===12){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **kisses** ${ala}'s lips`)
    .setImage("https://cdn.weeb.sh/images/SJINn6OPW.gif")
    message.channel.send(avatarEmbed);
}
Recentt.add(message.author.id);
   setTimeout(() =>{
     Recentt.delete(message.author.id)
   
    },10000);
 }
 break;
}
}});








//cookie
const cookiecd =new Set();
const times =new Set();
client.on("message", function(message) { 
//var mutedrole = message.guild.roles.find("name", "muted");
var args = message.content.substring(PREFIX.length).split(" "); // removes the prefix from the message
var command = args[0].toLowerCase(); // sets the command to lowercase (making it incase sensitive) // creates the command cookie
if(message.content.startsWith("Zen!")){
 const prefix="Zen!";
     let args = message.content.substring(prefix.length).split(" ");
     switch(args[0]){
       case 'riceball':
     if (message.content==="Zen!riceball") 
     {if(times.has(message.author.id))   {return message.channel.send("**Sorry, you are out of riceballs, u can claim riceballs again after after the** *12h cooldown*"); }
      else
      {message.channel.send("**You just made 2 riceballs :rice_ball: !!** *yum yum*");  times.add(message.author.id);
     setTimeout(() =>{
       times.delete(message.author.id)
      },43200000);
      break;
    }
  } 
  if (message.mentions.members.first()) 
  { if(cookiecd.has(message.author.id)){
    return message.reply("**Oops, seems like u ran out of ingredients :rice_ball:**  u can make riceball after 12h⌛");
     //message.reply('*Zoomie IM A GENIUS:)))*');
   }      
    if(message.mentions.members.first().id===message.author.id) return message.channel.send("**You can't give a riceball to yourself!🚫**");
  message.channel.send(`<@${message.author.id}> **Gave u 1 riceball :rice_ball: !!** *yum yum*`)
  cookiecd.add(message.author.id);
  setTimeout(() =>{
    cookiecd.delete(message.author.id)
   },43200000);
   break; // sends the message saying someone has given someone else a cookie if someone mentions someone else
}   
    else{
      return message.channel.send("Invalid!")
      ///${message.author} **has given** ${message.mentions.members.first()}  **a** 🍙! *yum yum
   
  }}}});


















///shoot
client.on('message', message => {
if(message.content.startsWith("Zen!")){
const prefix="Zen!";
let args = message.content.substring(prefix.length).split(" ");
switch(args[0]){
  case 'shoot': 
  if(Recentt.has(message.author.id)){
    message.reply("you need to wait 10 seconds till you can use again Zen!shoot command⌛");
    //message.reply('*Zoomie IM A GENIUS:)))*');
  }else
  {  message.delete();
  //const user = 
  var k=Math.floor(Math.random() * 12);
  //var k=9;
  k++;
  //var k=10;
  if(k===1)
  {
  const ala =message.mentions.users.first() || message.author;
  const avatarEmbed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${message.author} **is shooting** ${ala}`)
  .setImage("https://giffiles.alphacoders.com/943/94344.gif")
  message.channel.send(avatarEmbed);
}
if(k===2){
const ala =message.mentions.users.first() || message.author;
  const avatarEmbed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${message.author} **is shooting** ${ala}`)
  .setImage("https://i.gifer.com/Pq3.gif")
  message.channel.send(avatarEmbed);
}
if(k===3){ 
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is shooting** ${ala}`)
    .setImage("https://media1.tenor.com/images/63c0c6b632dfffd790b60a87007f1bfd/tenor.gif?itemid=11514589")
    message.channel.send(avatarEmbed);
}
if(k===4){
  const ala =message.mentions.users.first() || message.author;
      const avatarEmbed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${message.author} **is shooting** ${ala}`)
       .setImage("https://i.pinimg.com/originals/a0/f0/c3/a0f0c3dacfa0962425f34e011d30e9be.gif")
      message.channel.send(avatarEmbed);
}
if(k===5){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is shooting** ${ala}`)

    .setImage("https://i.gifer.com/DRn.gif")
    message.channel.send(avatarEmbed);
}
if(k===6){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is shooting** ${ala}`)
    .setImage("https://pa1.narvii.com/5974/7e9f44408e1dd64b8423e5389bf5d041579dbf69_hq.gif")
    message.channel.send(avatarEmbed);
}
if(k===7){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is shooting** ${ala}`)
    .setImage("https://static.zerochan.net/Sinon.%28GGO%29.full.2470653.gif")
    message.channel.send(avatarEmbed);
}
if(k===8){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is shooting** ${ala}`)
    .setImage("https://media1.tenor.com/images/b01e66460709524edc9a058419d36a6e/tenor.gif?itemid=14046966")
    message.channel.send(avatarEmbed);
}
if(k===9){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is shooting** ${ala}`)
     .setImage("https://thumbs.gfycat.com/WelldocumentedWeeklyHarpyeagle-size_restricted.gif")
    message.channel.send(avatarEmbed);
}
if(k===10){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is shooting** ${ala}`)
    .setImage("https://thumbs.gfycat.com/LeftBarrenFunnelweaverspider-small.gif")
    message.channel.send(avatarEmbed);
}
if(k===11){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is shooting** ${ala}`)
    .setImage("https://i.imgur.com/srp1ocR.gif")
    message.channel.send(avatarEmbed);
}
Recentt.add(message.author.id);
   setTimeout(() =>{
     Recentt.delete(message.author.id)
   
    },10000);
 }
 break;
}
}});
///hit
client.on('message', message => {
if(message.content.startsWith("Zen!")){
const prefix="Zen!";
let args = message.content.substring(prefix.length).split(" ");
switch(args[0]){
  case 'hit':  
  if(Recentt.has(message.author.id)){
    message.reply("you need to wait 10 seconds till you can use again Zen!hit command⌛");
    //message.reply('*Zoomie IM A GENIUS:)))*');
  }else
  {  message.delete();
  //const user = 
  var k=Math.floor(Math.random() * 11);
  //var k=1;
  k++;
 // var k=1;
  if(k===1)
  {
  const ala =message.mentions.users.first() || message.author;
  const avatarEmbed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${message.author} **is hitting** ${ala}`)
  .setImage("https://66.media.tumblr.com/889ae75a9a43272c1c064ee1be1c3adb/tumblr_n9elayYEtK1sg9gi2o1_500.gif")
  message.channel.send(avatarEmbed);
}
if(k===2){
const ala =message.mentions.users.first() || message.author;
  const avatarEmbed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${message.author} **is hitting** ${ala}`)
  .setImage("https://media1.tenor.com/images/3f997ab2772b82a5717c024fa5b9cb35/tenor.gif?itemid=14604313")
  message.channel.send(avatarEmbed);
}
if(k===3){ 
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is hitting** ${ala}`)
    .setImage("https://i.imgur.com/rKkQvKK.gif")
    message.channel.send(avatarEmbed);
}
if(k===4){
  const ala =message.mentions.users.first() || message.author;
      const avatarEmbed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${message.author} **is hitting** ${ala}`)
       .setImage("https://i.pinimg.com/originals/3f/44/1b/3f441ba8a891512172fa1861af7dbedc.gif")
      message.channel.send(avatarEmbed);
}
if(k===5){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is hitting** ${ala}`)
    .setImage("https://i.gifer.com/1UDX.gif")
    message.channel.send(avatarEmbed);
}
if(k===6){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is hitting** ${ala}`)
    .setImage("https://gifimage.net/wp-content/uploads/2017/09/anime-kick-gif-9.gif")
    message.channel.send(avatarEmbed);
}
if(k===7){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is hitting** ${ala}`)
    .setImage("https://thumbs.gfycat.com/DescriptiveSorrowfulGordonsetter-size_restricted.gif")
    message.channel.send(avatarEmbed);
}
if(k===8){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is hitting** ${ala}`)
    .setImage("https://thumbs.gfycat.com/EasyChubbyArcticwolf-small.gif")
    message.channel.send(avatarEmbed);
}
if(k===9){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is hitting** ${ala}`)
     .setImage("https://data.whicdn.com/images/318687183/original.gif")
    message.channel.send(avatarEmbed);
}
if(k===10){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is hitting** ${ala}`)
    .setImage("https://data.whicdn.com/images/121010715/original.gif")
    message.channel.send(avatarEmbed);
}
if(k===11){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
         .setDescription(`${message.author} **is hitting** ${ala}`)
    .setImage("https://66.media.tumblr.com/dfa5b815c6e587c2f1581d85c7c85442/tumblr_mw4irwOMjK1solyeco1_500.gif")
    message.channel.send(avatarEmbed);
}Recentt.add(message.author.id);
setTimeout(() =>{
Recentt.delete(message.author.id)

},10000);
}
break;
}
}});
////kill
client.on('message', message => {
if(message.content.startsWith("Zen!")){
const prefix="Zen!";
    let args = message.content.substring(prefix.length).split(" ");
    switch(args[0]){
      case 'kill': 
      if(Recentt.has(message.author.id)){
        message.reply("you need to wait 10 seconds till you can use again Zen!kill command⌛");
        //message.reply('*Zoomie IM A GENIUS:)))*');
      }else
      {   message.delete();
  //const user = 
  var k=Math.floor(Math.random() * 6);
  //var k=1;
  k++;
 // var k=1;
  if(k===1)
  {
  const ala =message.mentions.users.first() || message.author;
  const avatarEmbed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${message.author} **has killed** ${ala}`)
  .setImage("https://cdn.weeb.sh/images/HyXTiyKw-.gif")
  message.channel.send(avatarEmbed);
}
if(k===2){
const ala =message.mentions.users.first() || message.author;
  const avatarEmbed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${message.author} **has killed** ${ala}`)
  .setImage("https://cdn.weeb.sh/images/r11as1tvZ.gif")
  message.channel.send(avatarEmbed);
}
if(k===3){ 
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **has killed** ${ala}`)
    .setImage("https://cdn.weeb.sh/images/B1VnoJFDZ.gif")
    message.channel.send(avatarEmbed);
}
if(k===4){
  const ala =message.mentions.users.first() || message.author;
      const avatarEmbed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${message.author} **has killed** ${ala}`)
       .setImage("https://cdn.weeb.sh/images/BJO2j1Fv-.gif")
      message.channel.send(avatarEmbed);
}
if(k===5){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **has killed** ${ala}`)
    .setImage("https://cdn.weeb.sh/images/B1qosktwb.gif")
    message.channel.send(avatarEmbed);
}
if(k===6){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **has killed** ${ala}`)
    .setImage("https://cdn.discordapp.com/attachments/713915440782508080/713938702526709850/KRwXSrfI1IF.gif")
    message.channel.send(avatarEmbed);
}
if(k===7){
  const ala =message.mentions.users.first() || message.author;
      const avatarEmbed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${message.author} **has killed** ${ala}`)
      .setImage("https://cdn.discordapp.com/attachments/713914988602982422/713935599911960576/2yk8SfYDJpk.gif")
      message.channel.send(avatarEmbed);
  }
Recentt.add(message.author.id);
setTimeout(() =>{
Recentt.delete(message.author.id)

},10000);
}
break;
/*
if(k===6){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **has killed** ${ala}`)
    .setImage("https://cdn.weeb.sh/images/B1VnoJFDZ.gif")
    message.channel.send(avatarEmbed);
}/*
if(k===7){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **has killed** ${ala}`)
    .setImage("https://gifdownload.net/wp-content/uploads/2019/01/anime-girl-salute-gif-2.gif")
    message.channel.send(avatarEmbed);
}
if(k===8){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **has killed** ${ala}`)
    .setImage("https://cdn.lowgif.com/full/567e0c3ad54113e1-best-girl-part-3-saltdust-crusaders-round-4-bracket-a.gif")
    message.channel.send(avatarEmbed);
}
if(k===9){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **has killed** ${ala}`)
     .setImage("https://media.tenor.com/images/6870fd2f3f7be6bc6f08083a899c4889/tenor.gif")
    message.channel.send(avatarEmbed);
}
if(k===10){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **has killed** ${ala}`)
       .setImage("https://thumbs.gfycat.com/GiganticDirtyAstarte-size_restricted.gif")
    message.channel.send(avatarEmbed);
}
if(k===11){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **has killed** ${ala}`)
    .setImage("https://gifimage.net/wp-content/uploads/2017/10/hi-anime-gif-11.gif")
    message.channel.send(avatarEmbed);
}*/
}
}
});
///salute
client.on('message', message => {
if(message.content.startsWith("Zen!")){
const prefix="Zen!";
    let args = message.content.substring(prefix.length).split(" ");
    switch(args[0]){
      case 'hi':  
      if(Recentt.has(message.author.id)){
        message.reply("you need to wait 10 seconds till you can use again Zen!hi command⌛");
        //message.reply('*Zoomie IM A GENIUS:)))*');
      }else
      {  message.delete();
  //const user = 
  var k=Math.floor(Math.random() * 12);
  //var k=11;
  k++;
 // var k=1;
  if(k===1)
  {
  const ala =message.mentions.users.first() || message.author;
  const avatarEmbed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${message.author} **is saluting** ${ala}`)
  .setImage("https://media1.tenor.com/images/f821ff1a4a904d03000e08ca657233a5/tenor.gif?itemid=5359089")
  message.channel.send(avatarEmbed);
}
if(k===2){
const ala =message.mentions.users.first() || message.author;
  const avatarEmbed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${message.author} **is saluting** ${ala}`)
  .setImage("https://cdn.weeb.sh/images/HkgmNjh0b.gif")
  message.channel.send(avatarEmbed);
}
if(k===3){ 
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is saluting** ${ala}`)
    .setImage("https://cdn.lowgif.com/full/3b7b15a56fc1768a-anime-salute-gif-find-share-on-giphy.gif")
    message.channel.send(avatarEmbed);
}
if(k===4){
  const ala =message.mentions.users.first() || message.author;
      const avatarEmbed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${message.author} **is saluting** ${ala}`)
       .setImage("https://cdn.lowgif.com/small/85b3c0ec5c030fc4-kawaii-anime-gif-kawaii-anime-hi-discover-share-gifs.gif")
      message.channel.send(avatarEmbed);
}
if(k===5){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is saluting** ${ala}`)
    .setImage("https://i.gifer.com/S0oQ.gif")
    message.channel.send(avatarEmbed);
}
if(k===6){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is saluting** ${ala}`)
    .setImage("https://gifimage.net/wp-content/uploads/2017/09/anime-salute-gif.gif")
    message.channel.send(avatarEmbed);
}
if(k===7){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is saluting** ${ala}`)
    .setImage("https://cdn.weeb.sh/images/ByQ6Ij3Rb.gif")
    message.channel.send(avatarEmbed);
}
if(k===8){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is saluting** ${ala}`)
    .setImage("https://cdn.lowgif.com/full/567e0c3ad54113e1-best-girl-part-3-saltdust-crusaders-round-4-bracket-a.gif")
    message.channel.send(avatarEmbed);
}
if(k===9){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is saluting** ${ala}`)
     .setImage("https://media.tenor.com/images/6870fd2f3f7be6bc6f08083a899c4889/tenor.gif")
    message.channel.send(avatarEmbed);
}
if(k===10){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is saluting** ${ala}`)
       .setImage("https://thumbs.gfycat.com/GiganticDirtyAstarte-size_restricted.gif")
    message.channel.send(avatarEmbed);
}
if(k===11){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is saluting** ${ala}`)
    .setImage("https://gifimage.net/wp-content/uploads/2017/10/hi-anime-gif-11.gif")
    message.channel.send(avatarEmbed);
}
if(k===12){
  const ala =message.mentions.users.first() || message.author;
      const avatarEmbed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${message.author} **is saluting** ${ala}`)
      .setImage("https://cdn.weeb.sh/images/Sk9VEsnR-.gif")
      message.channel.send(avatarEmbed);
  }
Recentt.add(message.author.id);
setTimeout(() =>{
Recentt.delete(message.author.id)

},10000);
}
break;
}
}});
///pet
client.on('message', message => {
if(message.content.startsWith("Zen!")){
const prefix="Zen!";
    let args = message.content.substring(prefix.length).split(" ");
    switch(args[0]){
      case 'pet': if(Recentt.has(message.author.id)){
        message.reply("you need to wait 10 seconds till you can use again Zen!pet command⌛");
        //message.reply('*Zoomie IM A GENIUS:)))*');
      }else
      {   message.delete();
  //const user = 
  var k=Math.floor(Math.random() * 11);
  //var k=1;
  k++;
 //var k=1;
  if(k===1)
  {
  const ala =message.mentions.users.first() || message.author;
  const avatarEmbed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${message.author} **pets** ${ala}! *pat pat*`)
  .setImage("https://media1.tenor.com/images/01827ac93db8966ee97e63308ba79965/tenor.gif?itemid=9394441")
  message.channel.send(avatarEmbed);
}
if(k===2){
const ala =message.mentions.users.first() || message.author;
  const avatarEmbed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${message.author} **pets** ${ala}! *pat pat*`)
  .setImage("https://media1.tenor.com/images/220babfd5f8b629cc16399497ed9dd96/tenor.gif?itemid=6130861")
  message.channel.send(avatarEmbed);
}
if(k===3){ 
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **pets** ${ala}! *pat pat*`)
    .setImage("https://thumbs.gfycat.com/AnnualUnsungDikkops-size_restricted.gif")
    message.channel.send(avatarEmbed);
}
if(k===4){
  const ala =message.mentions.users.first() || message.author;
      const avatarEmbed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${message.author} **pets** ${ala}! *pat pat*`)
       .setImage("https://media1.tenor.com/images/ba551e0f5a51c7d77a3ca4e62a14a919/tenor.gif?itemid=9096264")
      message.channel.send(avatarEmbed);
}
if(k===5){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **pets** ${ala}! *pat pat*`)
    .setImage("https://media3.giphy.com/media/e7xQm1dtF9Zni/source.gif")
    message.channel.send(avatarEmbed);
}
if(k===6){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **pets** ${ala}! *pat pat*`)
    .setImage("https://68.media.tumblr.com/72d640d7c1bb765420783a9b9cbee13c/tumblr_ow2d7dWNi51vip2zbo1_500.gif")
    message.channel.send(avatarEmbed);
}
if(k===7){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **pets** ${ala}! *pat pat*`)
    .setImage("https://media1.tenor.com/images/1d702b7ae909f9926e523125f4b36469/tenor.gif?itemid=15173241")
    message.channel.send(avatarEmbed);
}
if(k===8){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
   .setDescription(`${message.author} **pets** ${ala}! *pat pat*`)
    .setImage("https://media1.tenor.com/images/1a8e560e8873ce2a48b3dfbbaa7805ec/tenor.gif?itemid=11118254")
    message.channel.send(avatarEmbed);
}
if(k===9){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **pets** ${ala}! *pat pat*`)
     .setImage("https://media1.tenor.com/images/cb2f75a027d295805797e5661dcf38a2/tenor.gif?itemid=9096297")
    message.channel.send(avatarEmbed);
}
if(k===10){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **pets** ${ala}! *pat pat*`)
       .setImage("https://gifimage.net/wp-content/uploads/2017/09/anime-petting-gif-4.gif")
    message.channel.send(avatarEmbed);
}
if(k===11){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **pets** ${ala}! *pat pat*`)
    .setImage("https://cdn46.picsart.com/176352519000202.gif?to=min&r=640")
    message.channel.send(avatarEmbed);
}
Recentt.add(message.author.id);
setTimeout(() =>{
Recentt.delete(message.author.id)

},10000);
}
break;
case 'pat':
if(Recentt.has(message.author.id)){
  message.reply("you need to wait 10 seconds till you can use again Zen!pat command⌛");
  //message.reply('*Zoomie IM A GENIUS:)))*');
}else
{    message.delete();
//const user = 
var k=Math.floor(Math.random() * 11);
//var k=1;
k++;
//var k=1;
if(k===1)
{
const ala =message.mentions.users.first() || message.author;
const avatarEmbed = new MessageEmbed()
.setColor("RANDOM")
.setDescription(`${message.author} **pets** ${ala}! *pat pat*`)
.setImage("https://media1.tenor.com/images/01827ac93db8966ee97e63308ba79965/tenor.gif?itemid=9394441")
message.channel.send(avatarEmbed);
}
if(k===2){
const ala =message.mentions.users.first() || message.author;
const avatarEmbed = new MessageEmbed()
.setColor("RANDOM")
.setDescription(`${message.author} **pets** ${ala}! *pat pat*`)
.setImage("https://media1.tenor.com/images/220babfd5f8b629cc16399497ed9dd96/tenor.gif?itemid=6130861")
message.channel.send(avatarEmbed);
}
if(k===3){ 
const ala =message.mentions.users.first() || message.author;
const avatarEmbed = new MessageEmbed()
.setColor("RANDOM")
.setDescription(`${message.author} **pets** ${ala}! *pat pat*`)
.setImage("https://thumbs.gfycat.com/AnnualUnsungDikkops-size_restricted.gif")
message.channel.send(avatarEmbed);
}
if(k===4){
const ala =message.mentions.users.first() || message.author;
  const avatarEmbed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${message.author} **pets** ${ala}! *pat pat*`)
   .setImage("https://media1.tenor.com/images/ba551e0f5a51c7d77a3ca4e62a14a919/tenor.gif?itemid=9096264")
  message.channel.send(avatarEmbed);
}
if(k===5){
const ala =message.mentions.users.first() || message.author;
const avatarEmbed = new MessageEmbed()
.setColor("RANDOM")
.setDescription(`${message.author} **pets** ${ala}! *pat pat*`)
.setImage("https://media3.giphy.com/media/e7xQm1dtF9Zni/source.gif")
message.channel.send(avatarEmbed);
}
if(k===6){
const ala =message.mentions.users.first() || message.author;
const avatarEmbed = new MessageEmbed()
.setColor("RANDOM")
.setDescription(`${message.author} **pets** ${ala}! *pat pat*`)
.setImage("https://68.media.tumblr.com/72d640d7c1bb765420783a9b9cbee13c/tumblr_ow2d7dWNi51vip2zbo1_500.gif")
message.channel.send(avatarEmbed);
}
if(k===7){
const ala =message.mentions.users.first() || message.author;
const avatarEmbed = new MessageEmbed()
.setColor("RANDOM")
.setDescription(`${message.author} **pets** ${ala}! *pat pat*`)
.setImage("https://media1.tenor.com/images/1d702b7ae909f9926e523125f4b36469/tenor.gif?itemid=15173241")
message.channel.send(avatarEmbed);
}
if(k===8){
const ala =message.mentions.users.first() || message.author;
const avatarEmbed = new MessageEmbed()
.setColor("RANDOM")
.setDescription(`${message.author} **pets** ${ala}! *pat pat*`)
.setImage("https://media1.tenor.com/images/1a8e560e8873ce2a48b3dfbbaa7805ec/tenor.gif?itemid=11118254")
message.channel.send(avatarEmbed);
}
if(k===9){
const ala =message.mentions.users.first() || message.author;
const avatarEmbed = new MessageEmbed()
.setColor("RANDOM")
.setDescription(`${message.author} **pets** ${ala}! *pat pat*`)
 .setImage("https://media1.tenor.com/images/cb2f75a027d295805797e5661dcf38a2/tenor.gif?itemid=9096297")
message.channel.send(avatarEmbed);
}
if(k===10){
const ala =message.mentions.users.first() || message.author;
const avatarEmbed = new MessageEmbed()
.setColor("RANDOM")
.setDescription(`${message.author} **pets** ${ala}! *pat pat*`)
   .setImage("https://gifimage.net/wp-content/uploads/2017/09/anime-petting-gif-4.gif")
message.channel.send(avatarEmbed);
}
if(k===11){
const ala =message.mentions.users.first() || message.author;
const avatarEmbed = new MessageEmbed()
.setColor("RANDOM")
.setDescription(`${message.author} **pets** ${ala}! *pat pat*`)
.setImage("https://cdn46.picsart.com/176352519000202.gif?to=min&r=640")
message.channel.send(avatarEmbed);
}
Recentt.add(message.author.id);
setTimeout(() =>{
Recentt.delete(message.author.id)

},10000);
}
break;
}
}})
///slap
client.on('message', message => {
if(message.content.startsWith("Zen!")){
const prefix="Zen!";
    let args = message.content.substring(prefix.length).split(" ");
    switch(args[0]){
      case 'slap':  if(Recentt.has(message.author.id)){
        message.reply("you need to wait 10 seconds till you can use again Zen!slap command⌛");
        //message.reply('*Zoomie IM A GENIUS:)))*');
      }else
      {  message.delete();

  //const user = 
  var k=Math.floor(Math.random() * 11);
  //var k=11;
  k++;
 // var k=1;
  if(k===1)
  {
  const ala =message.mentions.users.first() || message.author;
  const avatarEmbed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${message.author} **has slapped** ${ala}`)
  .setImage("https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943")
  message.channel.send(avatarEmbed);
}
if(k===2){
const ala =message.mentions.users.first() || message.author;
  const avatarEmbed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${message.author} **has slapped** ${ala}`)
  .setImage("https://i.imgur.com/fm49srQ.gif")
  message.channel.send(avatarEmbed);
}
if(k===3){ 
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **has slapped** ${ala}`)
    .setImage("https://media1.tenor.com/images/f9f121a46229ea904209a07cae362b3e/tenor.gif?itemid=7859254")
    message.channel.send(avatarEmbed);
}
if(k===4){
  const ala =message.mentions.users.first() || message.author;
      const avatarEmbed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${message.author} **has slapped** ${ala}`)
       .setImage("https://data.whicdn.com/images/230128566/original.gif")
      message.channel.send(avatarEmbed);
}
if(k===5){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **has slapped** ${ala}`)
    .setImage("https://thumbs.gfycat.com/IllinformedRigidAfricangoldencat-size_restricted.gif")
    message.channel.send(avatarEmbed);
}
if(k===6){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **has slapped** ${ala}`)
    .setImage("https://i.pinimg.com/originals/17/ac/34/17ac34d7bcedbf0810fc5194f6bab63b.gif")
    message.channel.send(avatarEmbed);
}
if(k===7){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **has slapped** ${ala}`)
    .setImage("https://i.imgur.com/o2SJYUS.gif")
    message.channel.send(avatarEmbed);
}
if(k===8){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **has slapped** ${ala}`)
    .setImage("https://i.kym-cdn.com/photos/images/newsfeed/001/040/951/73e.gif")
    message.channel.send(avatarEmbed);
}
if(k===9){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **has slapped** ${ala}`)
     .setImage("https://i.pinimg.com/originals/78/36/e6/7836e675b2a68671895ce7f35ad224c2.gif")
    message.channel.send(avatarEmbed);
}
if(k===10){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **has slapped** ${ala}`)
       .setImage("https://media1.tenor.com/images/4eed54377433c396ce2d9ad9ee5d22ef/tenor.gif?itemid=11234788")
    message.channel.send(avatarEmbed);
}
if(k===11){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **has slapped** ${ala}`)
    .setImage("https://gifimage.net/wp-content/uploads/2018/11/violent-slapping-anime-gif-3.gif")
    message.channel.send(avatarEmbed);
}
Recentt.add(message.author.id);
setTimeout(() =>{
Recentt.delete(message.author.id)

},10000);
}
break;
}
}});
///bite
client.on('message', message => {
if(message.content.startsWith("Zen!")){
const prefix="Zen!";
    let args = message.content.substring(prefix.length).split(" ");
    switch(args[0]){
      case 'bite':  if(Recentt.has(message.author.id)){
        message.reply("you need to wait 10 seconds till you can use again Zen!bite command⌛");
        //message.reply('*Zoomie IM A GENIUS:)))*');
      }else
      {  message.delete();

  //const user = 
  var k=Math.floor(Math.random() * 7);
  //var k=11;
  k++;
 // var k=1;
  if(k===1)
  {
  const ala =message.mentions.users.first() || message.author;
  const avatarEmbed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${message.author} **bites** ${ala}`)
  .setImage("https://cdn.weeb.sh/images/rkNgZlXi-.gif")
  message.channel.send(avatarEmbed);
}
if(k===2){
const ala =message.mentions.users.first() || message.author;
  const avatarEmbed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${message.author} **bites** ${ala}`)
  .setImage("https://cdn.weeb.sh/images/BJXRmfr6-.gif")
  message.channel.send(avatarEmbed);
}
if(k===3){ 
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **bites** ${ala}`)
    .setImage("https://cdn.weeb.sh/images/ry3pQGraW.gif")
    message.channel.send(avatarEmbed);
}
if(k===4){
  const ala =message.mentions.users.first() || message.author;
      const avatarEmbed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${message.author} **bites** ${ala}`)
       .setImage("https://cdn.weeb.sh/images/ry00lxmob.gif")
      message.channel.send(avatarEmbed);
}
if(k===5){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **bites** ${ala}`)
    .setImage("https://cdn.weeb.sh/images/rJjd1nDLz.gif")
    message.channel.send(avatarEmbed);
}
if(k===6){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **bites** ${ala}`)
    .setImage("https://cdn.weeb.sh/images/H1gYelQjZ.gif")
    message.channel.send(avatarEmbed);
}
if(k===7){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **bites** ${ala}`)
    .setImage("https://cdn.weeb.sh/images/HkutgeXob.gif")
    message.channel.send(avatarEmbed);
}
if(k===8){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **bites** ${ala}`)
    .setImage("https://cdn.weeb.sh/images/ByWuR1q1M.gif")
    message.channel.send(avatarEmbed);
}
Recentt.add(message.author.id);
setTimeout(() =>{
Recentt.delete(message.author.id)

},10000);
}
break;

/*
if(k===9){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **has slapped** ${ala}`)
     .setImage("https://i.pinimg.com/originals/78/36/e6/7836e675b2a68671895ce7f35ad224c2.gif")
    message.channel.send(avatarEmbed);
}
if(k===10){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **has slapped** ${ala}`)
       .setImage("https://media1.tenor.com/images/4eed54377433c396ce2d9ad9ee5d22ef/tenor.gif?itemid=11234788")
    message.channel.send(avatarEmbed);
}
if(k===11){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **has slapped** ${ala}`)
    .setImage("https://gifimage.net/wp-content/uploads/2018/11/violent-slapping-anime-gif-3.gif")
    message.channel.send(avatarEmbed);
}*/
}
}});
///bully
client.on('message', message => {
if(message.content.startsWith("Zen!")){
const prefix="Zen!";
//const prefixr="Zen!bully";
    let args = message.content.substring(prefix.length).split(" ");
    //let argst = message.content.substring(prefixr.length).split(" ");
    switch(args[0]){
      case 'bully':  if(Recentt.has(message.author.id)){
        message.reply("you need to wait 10 seconds till you can use again Zen!bully command⌛");
        //message.reply('*Zoomie IM A GENIUS:)))*');
      }else
      {  message.delete();

   var k=Math.floor(Math.random() * 7);
  k++;
 // var k=1;
  if(k===1)
  {
  const ala =message.mentions.users.first() || message.author;
  const avatarEmbed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${message.author} **bullies** ${ala}-${args.join(" ")}`)
  .setImage("https://imgur.com/UYKs7Q1.gif")
  message.channel.send(avatarEmbed);
}
if(k===2){
const ala =message.mentions.users.first() || message.author;
  const avatarEmbed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${message.author} **bullies** ${ala}`)
  .setImage("https://imgur.com/N10WUeF.gif")
  message.channel.send(avatarEmbed);
}
if(k===3){ 
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **bullies** ${ala}`)
    .setImage("https://imgur.com/a3upumA.gif")
    message.channel.send(avatarEmbed);
}
if(k===4){
  const ala =message.mentions.users.first() || message.author;
      const avatarEmbed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${message.author} **bullies** ${ala}`)
       .setImage("https://imgur.com/xmj8XRD.gif")
      message.channel.send(avatarEmbed);
}
if(k===5){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **bullies** ${ala}`)
    .setImage("https://imgur.com/pO2smzw.gif")
    message.channel.send(avatarEmbed);
}
if(k===6){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **bullies** ${ala}`)
    .setImage("https://imgur.com/meZ0TDz.gif")
    message.channel.send(avatarEmbed);
}
if(k===7){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **bullies** ${ala}`)
    .setImage("https://imgur.com/D8SIe4Z.gif")
    message.channel.send(avatarEmbed);
}
if(k===8){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **bullies** ${ala}`)
    .setImage("https://imgur.com/Lbzh24f.gif")
    message.channel.send(avatarEmbed);
}
Recentt.add(message.author.id);
setTimeout(() =>{
Recentt.delete(message.author.id)

},10000);
}
break;

/*
if(k===9){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **has slapped** ${ala}`)
     .setImage("https://i.pinimg.com/originals/78/36/e6/7836e675b2a68671895ce7f35ad224c2.gif")
    message.channel.send(avatarEmbed);
}
if(k===10){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **has slapped** ${ala}`)
       .setImage("https://media1.tenor.com/images/4eed54377433c396ce2d9ad9ee5d22ef/tenor.gif?itemid=11234788")
    message.channel.send(avatarEmbed);
}
if(k===11){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **has slapped** ${ala}`)
    .setImage("https://gifimage.net/wp-content/uploads/2018/11/violent-slapping-anime-gif-3.gif")
    message.channel.send(avatarEmbed);
}*/
}
}});
///cry
client.on('message', message => {
if(message.content.startsWith("Zen!")){
const prefix="Zen!";
const prefixr="Zen!cry";
    let args = message.content.substring(prefix.length).split(" ");
    let argst = message.content.substring(prefixr.length).split(" ");
    switch(args[0]){
      case 'cry':  if(Recentt.has(message.author.id)){
        message.reply("you need to wait 10 seconds till you can use again Zen!cry command⌛");
        //message.reply('*Zoomie IM A GENIUS:)))*');
      }else
      {  message.delete();

  //const user = 
  var k=Math.floor(Math.random() * 12);
  //var k=1;
  k++;
 // var k=1;
  if(k===1)
  {
  const ala =message.mentions.users.first() || message.author;
  const avatarEmbed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${message.author} **is crying** -${argst.join(" ")}`)
  .setImage("https://cdn.weeb.sh/images/HyiGQUmPb.gif")
  message.channel.send(avatarEmbed);
}
if(k===2){
const ala =message.mentions.users.first() || message.author;
  const avatarEmbed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${message.author} **is crying** -${argst.join(" ")}`)
  .setImage("https://cdn.weeb.sh/images/Syzw78XPZ.gif")
  message.channel.send(avatarEmbed);
}
if(k===3){ 
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is crying** -${argst.join(" ")}`)
    .setImage("https://cdn.weeb.sh/images/r1O8QUmvb.gif")
    message.channel.send(avatarEmbed);
}
if(k===4){
  const ala =message.mentions.users.first() || message.author;
      const avatarEmbed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${message.author} **is crying** -${argst.join(" ")}`)
       .setImage("https://cdn.weeb.sh/images/SkbN7LQv-.gif")
      message.channel.send(avatarEmbed);
}
if(k===5){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is crying** -${argst.join(" ")}`)
    .setImage("https://cdn.weeb.sh/images/rkpoLqadG.gif")
    message.channel.send(avatarEmbed);
}
if(k===6){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is crying** -${argst.join(" ")}`)
    .setImage("https://cdn.weeb.sh/images/HymMXUQPW.gif")
    message.channel.send(avatarEmbed);
}
if(k===7){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is crying** -${argst.join(" ")}`)
    .setImage("https://cdn.weeb.sh/images/r1tSmU7wb.gif")
    message.channel.send(avatarEmbed);
}
if(k===8){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is crying** -${argst.join(" ")}`)
    .setImage("https://cdn.weeb.sh/images/rJCG7IXPb.gif")
    message.channel.send(avatarEmbed);
}
if(k===9){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is crying** -${argst.join(" ")}`)
     .setImage("https://cdn.weeb.sh/images/HkxLXIQvb.gif")
    message.channel.send(avatarEmbed);
}
if(k===10){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is crying** -${argst.join(" ")}`)
       .setImage("https://cdn.weeb.sh/images/HkbPQUQvW.gif")
    message.channel.send(avatarEmbed);
}
if(k===11){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is crying** -${argst.join(" ")}`)
    .setImage("https://cdn.weeb.sh/images/S11LXImPZ.gif")
    message.channel.send(avatarEmbed);
}
if(k===12){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is crying** -${argst.join(" ")}`)
    .setImage("https://cdn.weeb.sh/images/r1OUjlycZ.gif")
    message.channel.send(avatarEmbed);
}
if(k===13){
const ala =message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} **is crying** -${argst.join(" ")}`)
    .setImage("https://cdn.weeb.sh/images/rJ5IX8XPZ.gif")
    message.channel.send(avatarEmbed);
}

Recentt.add(message.author.id);
setTimeout(() =>{
Recentt.delete(message.author.id)

},10000);
}
break;
}
}});





const malScraper = require('mal-scraper')
const animeQuotes = require("animequotes");
const Kitsu = require("kitsu.js");
const kitsu = new Kitsu();
//const aq = require ("animequote");
const fetch = require("node-fetch")
client.on('message', message => {
  if(message.content==="Zen!reset")
  {
    message.reply("The command is now ``Zen!reset claims``!")
  }
  if(message.content.startsWith("Z!anime"))
{
  const prefix="Z!anime";
        let args = message.content.substring(prefix.length).split(" ");
 let search=args.join(" ");
 console.log(search)
 //var search = message.content.split(/\s+/g).slice(1).join(" ");
 //var search= message.content; 

 kitsu.searchAnime(search).then(async result =>{
    if(result.length===0)
    {
      return message.channel.send("Invalid");
    }
   
// Get Random Quote
//console.log(animeQuotes.randomQuote());
 
// Get Quote by ID
//console.log(animeQuotes.getQuote(1));
 
// Get Quotes by Anime
//console.log(animeQuotes.getQuotesByAnime("Naruto"));
 
// Get Quotes by Character
//console.log(animeQuotes.getQuotesByCharacter("Itachi Uchiha"));
    var anime =result[0];
   // message.channel.send(animeQuotes.getQuotesByAnime(anime));
  //console.log(animeQuotes.getQuotesByAnime('Naruto')[1])
    
  console.log(anime)
    //console.log(anime.titles.english);
    let emb = new MessageEmbed()
    .setTitle(`${anime.titles.english}| ${anime.titles.japanese}`)
    .setDescription(anime.synopsis)
    .addField('Rating', anime.averageRating,true)
    .addField('Popularity Rank', anime.popularityRank,true)
    .addField('Age Rating', anime.ageRating,true)
    .addField('Age',anime.ageRatingGuide,true)
    .addField('Started', anime.startDate,true)
    .addField('Ended', anime.endDate,true)
    .addField('NSFW', anime.nsfw,true)
    .addField('Episodes', anime.episodeCount,true)
    .addField('Episodes length', anime.episodeLength,true)
   .setThumbnail(anime.posterImage.original,100,200)
    .setImage(anime.coverImage.original)
    .setFooter('Made by Zenitsuツ#5511', 'https://cdn.discordapp.com/avatars/701108556996411512/d94637d3825f55da6f965027d180df34.webp')
    .setColor("#ff2050")
    .setTimestamp()
  
    message.channel.send(emb);
   //console.log("OKK")
    })

}
if(message.content===`Zen!quote`)
{ var k=Math.floor(Math.random() * 12000);
  console.log(animeQuotes.getQuote(k))
  let emb = new MessageEmbed()
  .setColor("RANDOM")
  //.setDescription(`${animeQuotes.randomQuote().quote}-${animeQuotes.randomQuote().name}`)
  .setDescription(`${animeQuotes.getQuote(k).quote}-${animeQuotes.getQuote(k).name}-(${animeQuotes.getQuote(k).anime})`)
  return message.channel.send(emb);
}

if(message.content.startsWith(`Zen!quote`))
{

  const prefix="Zen!quote";
        let args = message.content.substring(prefix.length).split(" ");
 let search=args.join(" ");
 console.log(search)
 //var search = message.content.split(/\s+/g).slice(1).join(" ");
 //var search= message.content; 

 kitsu.searchAnime(search).then(async result =>{
    if(result.length===0)
    {
      return message.channel.send("Invalid");
    }
    var k=Math.floor(Math.random() * 10);
    var anime =result[0];
    let emb = new MessageEmbed()  
    .addField('Quote', `${animeQuotes.getQuotesByAnime(anime.titles.english)[k].quote}-${animeQuotes.getQuotesByAnime(anime.titles.english)[1].name}`)
    .setColor("RANDOM") 
    message.channel.send(emb);
    })

}
});








///welcomer
client.on("guildMemberAdd", member=>{
  const welcomeChannel = member.guild.channels.cache.find(channel=>channel.name==="sadadasdasdasd2132")
  try {
    //console.log(member.user.bot);
    //console.log(member.guild.memberCount)
    if(member.user.bot===true)
    {
      let embed= new MessageEmbed()
    .setDescription(`${member} has been added to the server.<:zenpat:660377344757989386>`)
    .setTimestamp()
    .setTitle(`__Welcome to ${member.guild.name} __`)
    .setColor("FFFF00")
    //.setImage(member.user.avatarURL())
    .setThumbnail(member.user.avatarURL())
    .setFooter(`Member count: ${member.guild.memberCount}`)
    welcomeChannel.send(embed);
  return console.log(member.guild.name)
    }
    else{
      welcomeChannel.send(`${member}`)
    let embed= new MessageEmbed()
    .setDescription(`**Thanks for joining!** Hope you have a fun time socializing with others while abiding by the **rules**.<:zenpat:660377344757989386>`)
    .setTimestamp()
    .setTitle(`__Welcome to ${member.guild.name} __`)
    .setColor("FFFF00")
    .setImage('https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312')
    //.setThumbnail(member.displayAvatarURL())
    .setFooter(`Member count: ${member.guild.memberCount}`)
    welcomeChannel.send(embed);
  return console.log(member.guild.name)
    }
  }
    catch(err) {
    return
  }
})



const preffs=":green:";
client.on('message', (msg) => {
if(msg.content.startsWith(":green:"))
{let argsst = msg.content.substring(preffs.length).split(" ");
msg.channel.send(argsst[1]);
}
if(msg.content.startsWith("as!asdasdasdcd")&& msg.author.id==="701108556996411512")
    { 
   // msg.guild.cache.find.guil.leave()("582023149080543246").then(guild => {
   //client.guild.cache.find("582023149080543246").then(guild => {
    ///client.guilds.cache.find('582023149080543246').then(client.guild.leave())
     
    msg.guild.leave("703289205962571938")
    
    /*msg.guild.cache.find("582023149080543246").then(guild => {
      client.guild.leave(guild)
     }).catch(err => {
     console.log(`there was an error leaving the guild: \n ${err.msg}`);
     })*/
     
    
  
      //const stsr = msg.embeds[0].description;
      //let idbest=msg.author.id;       
      //const User = Client.User(idbest);
     // console.log(User); 
      //msg.channel.seng(User);
     //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}|| test his nickname is ${User}`);
      //let tttt=msg.embeds[0].description;
     //tier=0;
    }
});



client.login(process.env.token);
   



  


client.on('message', (msg) => {
  if((msg.content.startsWith("Zen!report"))||(msg.content.startsWith("zen!report")))
  { msg.reply("Your report has been submitted!")
    return client.channels.cache.get('710561366611591228').send("ok"); 
  }
  if(msg.content.startsWith("asdasdasdasd"))
  {   
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    .setDescription(`has claimed [asdad](https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id})`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#f2f2f2')
    tiier=0;
    msg.channel.send(r);
    xe++;
  msg.channel.send(`https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`)
  }
  });

/*
const mongoose = require("mongoose");
const Report = require("./report.js")
mongoose.connect("mongodb://localhost/Reports");  

client.on('message', (msg) => {
  if(msg.content==="test mongoose 1234")
  {
const report = new Report({
  _id: mongoose.Types.ObjectId(),
  username: msg.author.username,
  userID: msg.author.id
});
report.save().then(result => console.log(result))
.catch(err =>console.log(err));
msg.reply("test")
  }
})*/
 



/*
///SQL TRY
const mysql =require("mysql")
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rooty",
  database: "testng1"
});

connection.connect(function(error){
  console.log("connected!");;
});
*/































































































































































































































































  //let ok=0;
  
  client.commands = new Collection();
  client.aliases = new Collection();
  
client.on("ready", () => {
    console.log(`Hi, you uploaded the AnimeSoul.js!`);
  });

  require('events').EventEmitter.defaultMaxListeners = 100;

/////SERVER 1  

let tier=0;
let tiier=0;
let ret;
let nammess;
client.on('message',async msg => {
//DESPAWN SERVER 1 DADDY'S CAVE
  if((msg.channel.id==="700363955213959178") && (msg.author.id==="673362753489993749")){
    if((msg.content.startsWith('Looks like nobody')) && (msg.author.id==="673362753489993749"))
    { let tr=0;
      if(tiier===1)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${nammess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#f2f2f2')
      ret.edit(r);

    }
    if(tiier===2)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${nammess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
      ret.edit(r);

    }
    if(tiier===3)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${nammess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
      ret.edit(r);

    }
    if(tiier===4)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${nammess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
      ret.edit(r);

    }
    if(tiier===5)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${nammess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
      ret.edit(r);

    }
    if(tiier===6)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${nammess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
      ret.edit(r);
    }
  }
  msg.embeds.forEach(async embed => {
    let p='711680724192985108';
    let x='711668385540472912';
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tiier===1)
      {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed [${nammess}](${tr})`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#f2f2f2')
        tiier=0;
        ret.edit(r);   
      }
      if(tiier===2)
      {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed [${nammess}](${tr})`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#33cc33')
        tiier=0;
        ret.edit(r); 
        }
        if(tiier===3)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed [${nammess}](${tr})`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#0099ff')
        tiier=0;
        ret.edit(r); 
      }
        if(tiier===4)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed [${nammess}](${tr})`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#cc00ff')
        tiier=0;
        ret.edit(r); 
       }
        if(tiier===5)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed [${nammess}](${tr})`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ffff00')
        tiier=0;
        ret.edit(r); 
       }
        if(tiier===6)
        {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed [${nammess}](${tr})`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
        tiier=0;
        ret.edit(r); 
         }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    { tr=`https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`;
      let xp=14;
     let myinterval;
     let ok=1;
       if (ok===1) {
         const r= new MessageEmbed()
         .setDescription(`**Time remaining till despawns** ${xp}`)   
           .setColor('#cccccc')
          msg.channel.send(r)
               .then(message => { //crInterval(myinterval);
                   myinterval=setInterval(function() {
                     //console.log(".")
                    
                     xp=xp-2;  
                   const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
                       .setColor('#cccccc')
                     message.edit(r)
                       if(xp==0)
                     {clearInterval(myinterval);
                       message.delete();
                     }
                   }, 2000);
                   //clearInterval(myinterval);
                    
                   })
            }
      nammess=msg.embeds[0].title;
     tiier=1;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     .setDescription(`${msg.embeds[0].title} has spawned!`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#cccccc')
     ret= await client.channels.cache.get(x).send(r);
    } 
   if(msg.embeds[0].title.includes('Tier: 2'))
    { 
      tr=`https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`;
      let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#7aff8d')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#7aff8d')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
                  }
      nammess=msg.embeds[0].title;
      tiier=2;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
        return ret= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 3'))
     {tr=`https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`;
       let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#58a0e3')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#58a0e3')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
                  }
       
      tiier=3;nammess=msg.embeds[0].title;
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())     
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
        return  ret= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 4'))
     {tr=`https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`;
       let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#ad58e3')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#ad58e3')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
                  }
       
      tiier=4;nammess=msg.embeds[0].title;
       console.log(`${msg.embeds[0].title} in server 1`)
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
        ret= await client.channels.cache.get(x).send(r);
      return msg.channel.send("<@&727100057458966538>  **E B I C** tier 4 spawned, go get it <:pog:699999258547322950>") 
     }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {tr=`https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`;
       let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#fff200')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#fff200')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
                  }
       
      tiier=5;nammess=msg.embeds[0].title;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())    
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
        ret= await client.channels.cache.get(x).send(r);
        console.log(`${msg.embeds[0].title} in server 1`);
        return msg.channel.send("<@&710524640161955840>  **E B I C** tier 5 spawned, go get it <:pog:699999258547322950>")} 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { tr=`https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`;
      let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#ea2222')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#ea2222')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
                  }
      
      tiier=6;nammess=msg.embeds[0].title;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
        ret= await client.channels.cache.get(x).send(r);
      console.log(`${msg.embeds[0].title} in server 1`)
      return msg.channel.send("<@&710524640161955840> **E B I C** tier 6 spawned, go get it <:pog:699999258547322950>")} 
    //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
      });
  }




  //SERVER 2 Anime Addiction
  if((msg.channel.id==="661283653162237962") && (msg.author.id==="673362753489993749")){
  msg.embeds.forEach((embed) => {
    let x='710881521162125373';
    if(typeof msg.embeds[0].title==='undefined')
    {return }
    if(msg.embeds[0].title.includes('Tier: 1'))
    { const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#f2f2f2')
     client.channels.cache.get(x).send(r);
    } 
   if(msg.embeds[0].title.includes('Tier: 2'))
    {const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`*${msg.embeds[0].title} has spawned!*`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#f2f2f2')
        client.channels.cache.get(x).send(r);
      }
        if(msg.embeds[0].title.includes('Tier: 3'))
     {const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`*${msg.embeds[0].title} has spawned!*`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
        client.channels.cache.get(x).send(r);
      }
     if(msg.embeds[0].title.includes('Tier: 4'))
     {const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`*${msg.embeds[0].title} has spawned!*`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
        client.channels.cache.get(x).send(r);
     console.log(`${msg.embeds[0].title} in server 2`)
     return msg.channel.send("<@&707008540530966578>  **E B I C** tier 4 spawned, go get it!")
    }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`*${msg.embeds[0].title} has spawned!*`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
        client.channels.cache.get(x).send(r);
        console.log(`${msg.embeds[0].title} in server 2`)
        return msg.channel.send("<@&707008540530966578>  **E B I C** tier 5 spawned, go get it!");  
      } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`*${msg.embeds[0].title} has spawned!*`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
        client.channels.cache.get(x).send(r);
      console.log(`${msg.embeds[0].title} in server 2`)
      return msg.channel.send("<@&707008540530966578>  **E B I C** tier 6 spawned, go get it!");} 
      }); 
  }

 



   //SERVER 5 Waifu Station
 if((msg.channel.id==="718228759450484796") && (msg.author.id==="673362753489993749")){
  msg.embeds.forEach((embed) => {
    let x='705858371131146250';
    if(typeof msg.embeds[0].title==='undefined')
    {return }
    if(msg.embeds[0].title.includes('Tier: 1'))
    {
      let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#f2f2f2')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#f2f2f2')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                 
          }
      
    } 
   if(msg.embeds[0].title.includes('Tier: 2'))
    {
      let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#f2f2f2')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#f2f2f2')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                 
          }
      
      }
      if(msg.embeds[0].title.includes('Tier: 3'))
     {
      let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#f2f2f2')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#f2f2f2')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        }
    
      }
     if(msg.embeds[0].title.includes('Tier: 4'))
     {
      let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#f2f2f2')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#f2f2f2')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        }
    
    }
    if(msg.embeds[0].title.includes('Tier: 5'))
  {let xp=14;
    let myinterval;
    let ok=1;
      if (ok===1) {
        const r= new MessageEmbed()
        .setDescription(`**Time remaining till despawns** ${xp}`)   
          .setColor('#f2f2f2')
         msg.channel.send(r)
              .then(message => { //clearInterval(myinterval);
                  myinterval=setInterval(function() {
                    //console.log(".")
                   
                    xp=xp-2;  
                  const r= new MessageEmbed()
         .setDescription(`**Time remaining till despawns** ${xp}`)   
                      .setColor('#f2f2f2')
                    message.edit(r)
                      if(xp==0)
                    {clearInterval(myinterval);
                      message.delete();
                    }
                  }, 2000);
                  //clearInterval(myinterval);
                   
                  })
             
      }
  
    namess=msg.embeds[0].title;
    tier=1;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    .setDescription(`${msg.embeds[0].title} has spawned!`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#ffff00')
      client.channels.cache.get(x).send(r);
      console.log("Tier 5 in server 5");
        return msg.channel.send("<@&712295044044030024> Hey, look at that! A tier 5 spawned! Go get it!");  
      } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#f2f2f2')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#f2f2f2')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        }
    
      namess=msg.embeds[0].title;
      tier=1;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
        client.channels.cache.get(x).send(r);
      console.log("Tier 6 in server 5");
      return msg.channel.send("<@&712295044044030024>  Hey, look at that! A tier 6 spawned! Go get it!");
    } 
    //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
  }); 
 }

   ///SERVER 6 iced coffee
 if((msg.channel.id==="712292494980677703") && (msg.author.id==="673362753489993749")){
  msg.embeds.forEach((embed) => {
    //let x='712332031626838028';
    if(typeof msg.embeds[0].title==='undefined')
    {return }
    if(msg.embeds[0].title.includes('Tier: 1'))
    {//msg.channel.send("<@&711317109837135933> Hey, look at that! A tier 1 spawned! Go get it!||TEST SORRY FOR THE PING"); 
    } 
   if(msg.embeds[0].title.includes('Tier: 2'))
    {
      }
      if(msg.embeds[0].title.includes('Tier: 3'))
     {  
      }
     if(msg.embeds[0].title.includes('Tier: 4'))
     {
    }
    if(msg.embeds[0].title.includes('Tier: 5'))
  {
      console.log("Tier 5 in server 6");
        return msg.channel.send("<@&711317109837135933> Hey, look at that! A tier 5 spawned! Go get it!");  
      } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { 
      console.log("Tier 6 in server 6");
      return msg.channel.send("<@&711317109837135933>  Hey, look at that! A tier 6 spawned! Go get it!");
    } 
    //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
  }); 
 }
 
    
 


   
   ///SERVER 14 TEA
  if((msg.channel.id==="696611672831426683") && (msg.author.id==="673362753489993749")){
    msg.embeds.forEach((embed) => {
      let x='714769592857264178';
      if(typeof msg.embeds[0].title==='undefined')
      {return }
      if(msg.embeds[0].title.includes('Tier: 1'))
      {//msg.channel.send("<@&714754338437726208> Hey, look at that! A tier 1 spawned! Go get it!||TEST SORRY FOR THE PING"); 
      /*namess=msg.embeds[0].title;
        tier=1;
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`*${msg.embeds[0].title} has spawned!*`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#f2f2f2')
    client.channels.cache.get(x).send(r);*/} 
     if(msg.embeds[0].title.includes('Tier: 2'))
      {namess=msg.embeds[0].title;
        tier=1;
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`*${msg.embeds[0].title} has spawned!*`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#33cc33')
          client.channels.cache.get(x).send(r);
        }
        if(msg.embeds[0].title.includes('Tier: 3'))
       {  namess=msg.embeds[0].title;
        tier=1;
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`*${msg.embeds[0].title} has spawned!*`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#0099ff')
          client.channels.cache.get(x).send(r);
        }
       if(msg.embeds[0].title.includes('Tier: 4'))
       {namess=msg.embeds[0].title;
        tier=1;
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`*${msg.embeds[0].title} has spawned!*`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#cc00ff')
          client.channels.cache.get(x).send(r);
      }
      if(msg.embeds[0].title.includes('Tier: 5'))
    {namess=msg.embeds[0].title;
      tier=1;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`*${msg.embeds[0].title} has spawned!*`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
        client.channels.cache.get(x).send(r);
        console.log("Tier 5 in server 8");
          return msg.channel.send("<@&714754338437726208> Hey, look at that! A tier 5 spawned! Go get it!");  
        } 
      if(msg.embeds[0].title.includes('Tier: 6'))
      { namess=msg.embeds[0].title;
        tier=1;
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`*${msg.embeds[0].title} has spawned!*`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
          client.channels.cache.get(x).send(r);
        console.log("Tier 6 in server 8");
        return msg.channel.send("<@&714754338437726208>  Hey, look at that! A tier 6 spawned! Go get it!");
      } 
      //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
    }); 
   }
  

})










//id:709954796920242237
/////SERVER 10 The Hangout  
let tiertw=0;
let ryyy;
//let zp='711680724192985108';
client.on('message',async msg => {
  if((msg.channel.id==="705253619133448262") && (msg.author.id==="673362753489993749")){
    if((msg.content.startsWith('Looks like nobody')) && (msg.author.id==="673362753489993749"))
    {if(tiertw===1)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#f2f2f2')
        ryyy.edit(r);

    }
    if(tiertw===2)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
        ryyy.edit(r);

    }
    if(tiertw===3)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
        ryyy.edit(r);

    }
    if(tiertw===4)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
        ryyy.edit(r);

    }
    if(tiertw===5)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
        ryyy.edit(r);

    }
    if(tiertw===6)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
        ryyy.edit(r);
    }
  }
  msg.embeds.forEach(async embed => {
    let x='714046243445407774';
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tiertw===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#f2f2f2')
        tierw=0;
        ryyy.edit(r);   
      }
      if(tiertw===2)
      {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#33cc33')
        tiertw=0;
        ryyy.edit(r); 
        }
        if(tiertw===3)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#0099ff')
        tiertw=0;
        ryyy.edit(r); 
      }
        if(tiertw===4)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#cc00ff')
        tiertw=0;
        ryyy.edit(r); 
       }
        if(tiertw===5)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ffff00')
        tiertw=0;
        ryyy.edit(r); 
       }
        if(tiertw===6)
        {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
        tiertw=0;
        ryyy.edit(r); 
         }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    { namess=msg.embeds[0].title;
     tiertw=1;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     .setDescription(`${msg.embeds[0].title} has spawned!`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#f2f2f2')
      return ryyy= await client.channels.cache.get(x).send(r);
    }
    
   if(msg.embeds[0].title.includes('Tier: 2'))
    { namess=msg.embeds[0].title;
      tiertw=2;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
        return ryyy= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 3'))
     { tiertw=3;namess=msg.embeds[0].title;
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())     
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
        return  ryyy= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 4'))
     {tiertw=4;namess=msg.embeds[0].title;
       console.log(`${msg.embeds[0].title} in server 1`)
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
       return ryyy= await client.channels.cache.get(x).send(r);
       
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {tiertw=5;namess=msg.embeds[0].title;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())    
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
        ryyy= await client.channels.cache.get(x).send(r);
        console.log(`${msg.embeds[0].title} in server 9`);
        return msg.channel.send("<@&714050617311625257>  **E B I C** tier 5 spawned, go get it")} 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { tiertw=6;namess=msg.embeds[0].title;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
        ryyy= await client.channels.cache.get(x).send(r);
      console.log(`${msg.embeds[0].title} in server 9`)
      return msg.channel.send("<@&714050617311625257> **E B I C** tier 6 spawned, go get it")} 
    //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
      });
  }

});




//id:709954796920242237
/////SERVER WAIFU SERVER
//let zp='711680724192985108';
client.on('message',async msg => {
  if((msg.channel.id==="706957129877291028") && (msg.author.id==="673362753489993749")){
  msg.embeds.forEach(async embed => {
    let x='714046243445407774';
    if(typeof msg.embeds[0].title==='undefined')
    {return  
    }
//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    { //return msg.channel.send("<@&717419979145740380>  **E B I C** tier 1 spawned, go get it")
    }    
   if(msg.embeds[0].title.includes('Tier: 2'))
    { }
     if(msg.embeds[0].title.includes('Tier: 3'))
     { }
     if(msg.embeds[0].title.includes('Tier: 4'))
     {
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {
        return msg.channel.send("<@&717419979145740380>  **E B I C** tier 5 spawned, go get it")} 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { 
      console.log(`${msg.embeds[0].title} in server 9`)
      return msg.channel.send("<@&717419979145740380> **E B I C** tier 6 spawned, go get it")} 
    //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
      });
  }

});





//id:709954796920242237
/////Naruto ninja hideout
//let zp='711680724192985108';
client.on('message',async msg => {
  if((msg.channel.id==="710372375740416051") && (msg.author.id==="673362753489993749")){
  msg.embeds.forEach(async embed => {
    if(typeof msg.embeds[0].title==='undefined')
    {return  
    }
//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    { //return msg.channel.send("<@&718449953621409793>  tier 1 spawned, go get it||test oing")
    }    
   if(msg.embeds[0].title.includes('Tier: 2'))
    { }
     if(msg.embeds[0].title.includes('Tier: 3'))
     { }
     if(msg.embeds[0].title.includes('Tier: 4'))
     {return msg.channel.send("<@&718449953621409793>  **E B I C** tier 4 spawned, go get it")
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {
        return msg.channel.send("<@&722758177975828492>  **E B I C** tier 5 spawned, go get it")} 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { 
      console.log(`${msg.embeds[0].title} in server 9`)
      return msg.channel.send("<@&722758202621558814> **E B I C** tier 6 spawned, go get it")} 
    //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
      });
  }

});






/////SERVER 9 Sakure World  
let tiert=0;
let rett;
//let zp='711680724192985108';
client.on('message',async msg => {
 if((msg.channel.id==="693542026649665607") && (msg.author.id==="673362753489993749")){
    if((msg.content.startsWith('Looks like nobody')) && (msg.author.id==="673362753489993749"))
    {if(tiert===1)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#f2f2f2')
      rett.edit(r);

    }
    if(tiert===2)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
      rett.edit(r);

    }
    if(tiert===3)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
      rett.edit(r);

    }
    if(tiert===4)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
      rett.edit(r);

    }
    if(tiert===5)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
      rett.edit(r);

    }
    if(tiert===6)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
      rett.edit(r);
    }
  }
  msg.embeds.forEach(async embed => {
    let x='713344828464955442';
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tiert===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#f2f2f2')
        tiert=0;
        rett.edit(r);   
      }
      if(tiert===2)
      {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#33cc33')
        tiert=0;
        rett.edit(r); 
        }
        if(tiert===3)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#0099ff')
        tiert=0;
        rett.edit(r); 
      }
        if(tier===4)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#cc00ff')
        tiert=0;
        rett.edit(r); 
       }
        if(tiert===5)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ffff00')
        tiert=0;
        rett.edit(r); 
       }
        if(tiert===6)
        {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
        tiert=0;
        rett.edit(r); 
         }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    { namess=msg.embeds[0].title;
     tiert=1;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     .setDescription(`${msg.embeds[0].title} has spawned!`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#f2f2f2')
     rett= await client.channels.cache.get(x).send(r);
    }
    
   if(msg.embeds[0].title.includes('Tier: 2'))
    { namess=msg.embeds[0].title;
      tiert=2;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
        return rett= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 3'))
     { tiert=3;namess=msg.embeds[0].title;
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())     
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
        return  rett= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 4'))
     {msg.channel.send("<@&699144770131591199> **E B I C** tier 4 spawned, go get it <:pog:699999258547322950>")
       tiert=4;namess=msg.embeds[0].title;
       console.log(`${msg.embeds[0].title} in server 1`)
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
        return rett= await client.channels.cache.get(x).send(r);
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {tiert=5;namess=msg.embeds[0].title;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())    
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
        rett= await client.channels.cache.get(x).send(r);
        console.log(`${msg.embeds[0].title} in server 9`);
        return msg.channel.send("<@&699144769678606356>  **E B I C** tier 5 spawned, go get it <:pog:699999258547322950>")} 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { tiert=6;namess=msg.embeds[0].title;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
        rett= await client.channels.cache.get(x).send(r);
      console.log(`${msg.embeds[0].title} in server 9`)
      return msg.channel.send("<@&698192703313412116> **E B I C** tier 6 spawned, go get it <:pog:699999258547322950>")} 
    //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
      });
  }

});





/////SERVER 12 Indonesia thing 
let tierts=0;
let retts;
//let zp='711680724192985108';
client.on('message',async msg => {
  if((msg.channel.id==="717701215433129995") && (msg.author.id==="673362753489993749")){
    if((msg.content.startsWith('Looks like nobody')) && (msg.author.id==="673362753489993749"))
    {if(tierts===1)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#f2f2f2')
      retts.edit(r);

    }
    if(tierts===2)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
      retts.edit(r);

    }
    if(tierts===3)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
      retts.edit(r);

    }
    if(tierts===4)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
      retts.edit(r);

    }
    if(tierts===5)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
      retts.edit(r);

    }
    if(tierts===6)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
      retts.edit(r);
    }
  }
  msg.embeds.forEach(async embed => {
    let x='714192110504378388';
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tierts===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#f2f2f2')
        tierts=0;
        retts.edit(r);   
      }
      if(tierts===2)
      {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#33cc33')
        tierts=0;
        retts.edit(r); 
        }
        if(tierts===3)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#0099ff')
        tierts=0;
        retts.edit(r); 
      }
        if(tierts===4)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#cc00ff')
        tierts=0;
        retts.edit(r); 
       }
        if(tierts===5)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ffff00')
        tierts=0;
        retts.edit(r); 
       }
        if(tierts===6)//foff 
        {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
        tierts=0;
        retts.edit(r); 
         }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    { let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)
            .setColor('#f2f2f2')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")

                      xp=xp-2;
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)
                        .setColor('#f2f2f2')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);

                    })

        }

      
      
      //msg.channel.send("<@&703244026551206008>  **E B I C** tier 1 spawned, go get it||Test SORRY FOR PING(TESTING THE PING) ")
      namess=msg.embeds[0].title;
     tierts=1;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     .setDescription(`${msg.embeds[0].title} has spawned!`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#f2f2f2')
     retts= await client.channels.cache.get(x).send(r);
    }
    
   if(msg.embeds[0].title.includes('Tier: 2'))
    { 
      let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)
            .setColor('#f2f2f2')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")

                      xp=xp-2;
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)
                        .setColor('#f2f2f2')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);

                    })

        }

      namess=msg.embeds[0].title;
      tierts=2;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
        return retts= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 3'))
     { 
      let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)
            .setColor('#f2f2f2')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")

                      xp=xp-2;
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)
                        .setColor('#f2f2f2')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);

                    })

        }
 
      tierts=3;namess=msg.embeds[0].title;
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())     
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
        return  retts= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 4'))
     {
      let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)
            .setColor('#f2f2f2')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")

                      xp=xp-2;
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)
                        .setColor('#f2f2f2')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);

                    })

        }
 
      tierts=4;namess=msg.embeds[0].title;
       console.log(`${msg.embeds[0].title} in server 1`)
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
        return retts= await client.channels.cache.get(x).send(r);
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {
      let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)
            .setColor('#f2f2f2')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")

                      xp=xp-2;
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)
                        .setColor('#f2f2f2')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);

                    })

        }
 
      tierts=5;namess=msg.embeds[0].title;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())    
      .setTimestamp()//java script
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
        retts= await client.channels.cache.get(x).send(r);
        console.log(`${msg.embeds[0].title} in server 9`);
        return msg.channel.send("<@&725191216588652604> **E B I C** tier 5 spawned, go get it ")} 
    if(msg.embeds[0].title.includes('Tier: 6'))
    {let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)
            .setColor('#f2f2f2')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")

                      xp=xp-2;
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)
                        .setColor('#f2f2f2')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);

                    })

        }
      tierts=6;namess=msg.embeds[0].title;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ff0000')
        retts= await client.channels.cache.get(x).send(r);
      console.log(`${msg.embeds[0].title} in server 9`)
      return msg.channel.send("<@&725191216588652604> **E B I C** tier 6 spawned, go get it ")} 
    //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
      });
  }

});







/////SERVER 13  Game Hub
let tiertss=0;
let rettss;
//let zp='711680724192985108';
client.on('message',async msg => {
  if((msg.channel.id==="703283196720316457") && (msg.author.id==="673362753489993749")){
    if((msg.content.startsWith('Looks like nobody')) && (msg.author.id==="673362753489993749"))
    {if(tiertss===1)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#f2f2f2')
      rettss.edit(r);

    }
    if(tiertss===2)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
      rettss.edit(r);

    }
    if(tiertss===3)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
      rettss.edit(r);

    }
    if(tiertss===4)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
      rettss.edit(r);

    }
    if(tiertss===5)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
      rettss.edit(r);

    }
    if(tiertss===6)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ff0000')
      rettss.edit(r);
    }
  }
  msg.embeds.forEach(async embed => {
    let x='714219136955449724';
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tiertss===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#f2f2f2')
        tiertss=0;
        rettss.edit(r);   
      }
      if(tiertss===2)
      {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#33cc33')
        tiertss=0;
        rettss.edit(r); 
        }
        if(tiertss===3)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#0099ff')
        tiertss=0;
        rettss.edit(r); 
      }
        if(tiertss===4)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#cc00ff')
        tiertss=0;
        rettss.edit(r); 
       }
        if(tiertss===5)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ffff00')
        tiertss=0;
        rettss.edit(r); 
       }
        if(tiertss===6)//foff 
        {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ff0000')
        tiertss=0;
        rettss.edit(r); 
         }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    { //  msg.channel.send("<@&712685088143441961>  **E B I C** tier 1 spawned, go get it||Test SORRY FOR PING(TESTING THE PING) ")
    let xp=14;
     let myinterval;
     let ok=1;
       if (ok===1) {
         const r= new MessageEmbed()
         .setDescription(`**Time remaining till despawns** ${xp}`)   
           .setColor('#cccccc')
          msg.channel.send(r)
               .then(message => { //clearInterval(myinterval);
                   myinterval=setInterval(function() {
                     //console.log(".")
                    
                     xp=xp-2;  
                   const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
                       .setColor('#cccccc')
                     message.edit(r)
                       if(xp==0)
                     {clearInterval(myinterval);
                       message.delete();
                     }
                   }, 2000);
                   //clearInterval(myinterval);
                    
                   })
            } 
    namess=msg.embeds[0].title;
     tiertss=1;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     .setDescription(`${msg.embeds[0].title} has spawned!`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#f2f2f2')
     rettss= await client.channels.cache.get(x).send(r);
    }
    
   if(msg.embeds[0].title.includes('Tier: 2'))
    { let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#7aff8d')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#7aff8d')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
                  }
      namess=msg.embeds[0].title;
      tiertss=2;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
        return rettss= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 3'))
     { let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#58a0e3')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#58a0e3')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
                  }
       tiertss=3;namess=msg.embeds[0].title;
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())     
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
        return  rettss= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 4'))
     {let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#ad58e3')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#ad58e3')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
                  }
       tiertss=4;namess=msg.embeds[0].title;
       console.log(`${msg.embeds[0].title} in server 1`)
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
        return rettss= await client.channels.cache.get(x).send(r);
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#fff200')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#fff200')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
                  }
       tiertss=5;namess=msg.embeds[0].title;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())    
      .setTimestamp()//java script
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
        rettss= await client.channels.cache.get(x).send(r);
        console.log(`${msg.embeds[0].title} in server 13`);
        //return msg.channel.send("<@&712685088143441961>  **E B I C** tier 5 spawned, go get it ")
      } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#ea2222')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#ea2222')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
                  }
      tiertss=6;namess=msg.embeds[0].title;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ff0000')
        rettss= await client.channels.cache.get(x).send(r);
      console.log(`${msg.embeds[0].title} in server 13`)
    //  return msg.channel.send("<@712685088143441961> **E B I C** tier 6 spawned, go get it ")
    } 
    //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
      });
  }

});








/////SERVER 14 FALLEN BIG SV
let tiertsa=0;
let rettsa;
//let zp='711680724192985108';
client.on('message',async msg => {
  if((msg.channel.id==="681237013105869037") && (msg.author.id==="673362753489993749")){
    if((msg.content.startsWith('Looks like nobody')) && (msg.author.id==="673362753489993749"))
    {if(tiertsa===1)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#f2f2f2')
      rettsa.edit(r);

    }
    if(tiertsa===2)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
      rettsa.edit(r);

    }
    if(tiertsa===3)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
      rettsa.edit(r);

    }
    if(tiertsa===4)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
      rettsa.edit(r);

    }
    if(tiertsa===5)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
      rettsa.edit(r);

    }
    if(tiertsa===6)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ff0000')
      rettsa.edit(r);
    }
  }
  msg.embeds.forEach(async embed => {
    let x='714499741009969194';
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tiertsa===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#f2f2f2')
          tiertsa=0;
        rettsa.edit(r);   
      }
      if(tiertsa===2)
      {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#33cc33')
        tiertsa=0;
        rettsa.edit(r); 
        }
        if(tiertsa===3)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#0099ff')
        tiertsa=0;
        rettsa.edit(r); 
      }
        if(tiertsa===4)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#cc00ff')
        tiertsa=0;
        rettsa.edit(r); 
       }
        if(tiertsa===5)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ffff00')
        tiertsa=0;
        rettsa.edit(r); 
       }
        if(tiertsa===6)//foff 
        {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ff0000')
        tiertsa=0;
        rettsa.edit(r); 
         }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    { //msg.channel.send(`<@&714499879237320737>  ${msg.embeds[0].title} has spawned, go get it!||Test SORRY FOR PING(TESTING THE PING)`)
      namess=msg.embeds[0].title;
     tiertsa=1;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     .setDescription(`${msg.embeds[0].title} has spawned!`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#f2f2f2')
     rettsa= await client.channels.cache.get(x).send(r);
    }
    
   if(msg.embeds[0].title.includes('Tier: 2'))
    { namess=msg.embeds[0].title;
      tiertsa=2;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
        return rettsa= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 3'))
     { tiertsa=3;namess=msg.embeds[0].title;
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())     
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
        return  rettsa= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 4'))
     {tiertsa=4;namess=msg.embeds[0].title;
       console.log(`${msg.embeds[0].title} in server 1`)
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
        return rettsa= await client.channels.cache.get(x).send(r);
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {tiertsa=5;namess=msg.embeds[0].title;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())    
      .setTimestamp()//java script
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
        rettsa= await client.channels.cache.get(x).send(r);
        console.log(`${msg.embeds[0].title} in server 9`);
        return msg.channel.send(`<@&714499879237320737> ${msg.embeds[0].title} has spawned, go get it!`)} 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { tiertsa=6;namess=msg.embeds[0].title;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ff0000')
        rettsa= await client.channels.cache.get(x).send(r);
      console.log(`${msg.embeds[0].title} in server 9`)
      return msg.channel.send(`<@&714499879237320737> ${msg.embeds[0].title} has spawned, go get it!`)} 
    //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
      });
  }

});







/////SERVER 13 Mirai
let stierts=0;
let rettts;
let re2;
//let zp='711680724192985108';
client.on('message',async msg => {
  if((msg.channel.id==="707640634873479309") && (msg.author.id==="673362753489993749")){
    if((msg.content.startsWith('Looks like nobody')) && (msg.author.id==="673362753489993749"))
    {if(stierts===1)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#f2f2f2')
      rettts.edit(r);

    }
    if(stierts===2)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
      rettts.edit(r);

    }
    if(stierts===3)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
      rettts.edit(r);

    }
    if(stierts===4)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
      ret2.edit(r);

    }
    if(stierts===5)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
      ret2.edit(r);

    }
    if(stierts===6)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ff0000')
      ret2.edit(r);
    }
  }
  msg.embeds.forEach(async embed => {
    let x='714017077425602581';////////////////////////////////////////////
    let xyx='714016723317162036';
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(stierts===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#f2f2f2')
        stiers=0;
        rettts.edit(r);   
      }
      if(stierts===2)
      {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#33cc33')
       stierts=0;
        rettts.edit(r); 
        }
        if(stierts===3)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#0099ff')
        stierts=0;
        rettts.edit(r); 
      }
        if(stierts===4)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#cc00ff')
        stierts=0;
        ret2.edit(r); 
       }
        if(stierts===5)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ffff00')
        stierts=0;
        ret2.edit(r); 
       }
        if(stierts===6)//foff 
        {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ff0000')
        stierts=0;
        ret2.edit(r); 
         }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    { 
      
      let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#f2f2f2')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#f2f2f2')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                 
          }
      
      
      
      
      
      
      
      
      
      
      
      
      //msg.channel.send("<@&703244026551206008>  **E B I C** tier 1 spawned, go get it||Test SORRY FOR PING(TESTING THE PING) ")
      namess=msg.embeds[0].title;
     stierts=1;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     .setDescription(`${msg.embeds[0].title} has spawned!`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#f2f2f2')
     rettts= await client.channels.cache.get(x).send(r);
    }
    
   if(msg.embeds[0].title.includes('Tier: 2'))
    { 
      
      let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#f2f2f2')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#f2f2f2')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                 
          }
      namess=msg.embeds[0].title;
      stierts=2;
      msg.channel.send("<@&714019903824199700>  **E B I C** tier 2 spawned, go get it!")
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
        return rettts= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 3'))
     {   
      
      let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#f2f2f2')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#f2f2f2')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                 
          } 
      msg.channel.send("<@&714019538735333397>  **E B I C** tier 3 spawned, go get it!")
       stierts=3;namess=msg.embeds[0].title;
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())     
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
        return  rettts= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 4'))
     {
      
      let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#f2f2f2')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#f2f2f2')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                 
          } 
      stierts=4;namess=msg.embeds[0].title;
      msg.channel.send("<@&714019497572302948>  **E B I C** tier 4 spawned, go get it!")
       console.log(`${msg.embeds[0].title} in server 1`)
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
        return ret2= await client.channels.cache.get(xyx).send(r);
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {
      let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#f2f2f2')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#f2f2f2')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                 
          }
       
      stierts=5;namess=msg.embeds[0].title;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())    
      .setTimestamp()//java script
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
        ret2= await client.channels.cache.get(xyx).send(r);
        console.log(`${msg.embeds[0].title} in server 9`);
        return msg.channel.send("<@&714019450193707068>  **E B I C** tier 5 spawned, go get it ")} 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { 
      let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#f2f2f2')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#f2f2f2')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                 
          }
      
      stierts=6;namess=msg.embeds[0].title;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ff0000')
        ret2= await client.channels.cache.get(xyx).send(r);
      console.log(`${msg.embeds[0].title} in server 9`)
      return msg.channel.send("<@&714019390286462998> **E B I C** tier 6 spawned, go get it ")} 
    //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
      });
  }

});











//kyukeisho
let ttier=0;
let rret;
client.on('message',async msg => {
   //SERVER 4 Kyukeisho 
   if(msg.content==="test embed")
   {const r= new MessageEmbed()
    .setDescription(`**Time remaining till despawns** 15`)   
      .setColor('#58a0e3')
     msg.channel.send(r)
   }
   if((msg.channel.id==="696798992113336390") && (msg.author.id==="673362753489993749")){
    msg.embeds.forEach((embed) => {
      let x='711987118121156688';
      if(typeof msg.embeds[0].title==='undefined')
      {return }
      if(msg.embeds[0].title.includes('Tier: 1'))
      { let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#f2f2f2')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#f2f2f2')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                 
          }
      } 
     if(msg.embeds[0].title.includes('Tier: 2'))
      {let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#f2f2f2')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#f2f2f2')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                 
          }
        namess=msg.embeds[0].title;
        ttier=1;
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`*${msg.embeds[0].title} has spawned!*`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#33cc33')
          client.channels.cache.get(x).send(r);
        }
        if(msg.embeds[0].title.includes('Tier: 3'))
       {let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#f2f2f2')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#f2f2f2')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                 
          }
        namess=msg.embeds[0].title;
        ttier=1;
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`*${msg.embeds[0].title} has spawned!*`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#0099ff')
          client.channels.cache.get(x).send(r);
        }
       if(msg.embeds[0].title.includes('Tier: 4'))
       {let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#f2f2f2')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#f2f2f2')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                 
          }
        console.log("Tier 4 in server 4");
        namess=msg.embeds[0].title;
        ttier=1;
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`*${msg.embeds[0].title} has spawned!*`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#cc00ff')
          client.channels.cache.get(x).send(r);
      }
      if(msg.embeds[0].title.includes('Tier: 5'))
       {let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#f2f2f2')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#f2f2f2')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                 
          }
         namess=msg.embeds[0].title;
        ttier=1;
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`*${msg.embeds[0].title} has spawned!*`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ffff00')
        client.channels.cache.get(x).send(r);
        console.log("Tier 5 in server 3");
          return msg.channel.send("<@&711941632773324810> Hey, look at that! A tier 5 spawned! Go get it!");  
        } 
      if(msg.embeds[0].title.includes('Tier: 6'))
      {let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#f2f2f2')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#f2f2f2')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                 
          }
         namess=msg.embeds[0].title;
        tier=1;
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`*${msg.embeds[0].title} has spawned!*`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ff0000')
          client.channels.cache.get(x).send(r);
        console.log("Tier 6 in server 3");
        return msg.channel.send("<@&711941632773324810>  Hey, look at that! A tier 6 spawned! Go get it!");
      } 
      //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
    }); 
   }
  });







/////AICI AM RAMAS!!

/////SERVER 16 ES elite Squad
let tiertts=0;
let retttts;
//let zp='711680724192985108';
client.on('message',async msg => {
  if((msg.channel.id==="724289023635619871") && (msg.author.id==="673362753489993749")){
    if((msg.content.startsWith('Looks like nobody')) && (msg.author.id==="673362753489993749"))
    {if(tiertts===1)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#f2f2f2')
      retttts.edit(r);

    }
    if(tiertts===2)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
      retttts.edit(r);

    }
    if(tiertts===3)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
      retttts.edit(r);

    }
    if(tiertts===4)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
      retttts.edit(r);

    }
    if(tiertts===5)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
      retttts.edit(r);

    }
    if(tiertts===6)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namess} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ff0000')
      retttts.edit(r);
    }
  }
  msg.embeds.forEach(async embed => {
    let x='725964913717018654';////////////////////////////////////////////
    
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tiertts===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#f2f2f2')
          tiertts=0;
        retttts.edit(r);   
      }
      if(tiertts===2)
      {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#33cc33')
        tiertts=0;
        retttts.edit(r); 
        }
        if(tiertts===3)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#0099ff')
        tiertts=0;
        retttts.edit(r); 
      }
        if(tiertts===4)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#cc00ff')
        tiertts=0;
        retttts.edit(r); 
       }
        if(tiertts===5)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ffff00')
        tiertts=0;
        retttts.edit(r); 
       }
        if(tiertts===6)//foff 
        {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namess}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ff0000')
        tiertts=0;
        retttts.edit(r); 
         }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    { //msg.channel.send("<@&716233012282654831> test ping|Sorry for ping!")
    namess=msg.embeds[0].title;
     tiertts=1;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     .setDescription(`${msg.embeds[0].title} has spawned!`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#f2f2f2')
     retttts= await client.channels.cache.get(x).send(r);
    }
    
   if(msg.embeds[0].title.includes('Tier: 2'))
    { 
      namess=msg.embeds[0].title;
      tiertts=2;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
        return retttts= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 3'))
     { 
       //msg.channel.send("<@&725794121658269737>  **E B I C** tier 3 spawned, go get it!") 
       tiertts=3;namess=msg.embeds[0].title;
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())     
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
        return  retttts= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 4'))
     {tiertts=4;namess=msg.embeds[0].title;
      msg.channel.send("<@&725794121658269737>  **E B I C** tier 4 spawned, go get it!")
       console.log(`${msg.embeds[0].title} in server 1`)
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
        return retttts= await client.channels.cache.get(x).send(r);
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {
       msg.channel.send("<@&725794121658269737>  **E B I C** tier 5 spawned, go get it!")
       tiertts=5;namess=msg.embeds[0].title;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())    
      .setTimestamp()//java script
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
        retttts= await client.channels.cache.get(x).send(r);
        console.log(`${msg.embeds[0].title} in server 9`);
        } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    {
       msg.channel.send("<@&725794121658269737>  **E B I C** tier 6 spawned, go get it!")
      tiertts=6;namess=msg.embeds[0].title;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ff0000')
        retttts= await client.channels.cache.get(x).send(r);
      console.log(`${msg.embeds[0].title} in server 9`)
    } 
    //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
      });
  }

});


////AG BOT DUNGEON
let tierttts=0;
let rettttts;
let namesss=0
//let zp='711680724192985108';
client.on('message',async msg => {
  if((msg.channel.id==="712844155579138068") && (msg.author.id==="673362753489993749")){
    if((msg.content.startsWith('Looks like nobody')) && (msg.author.id==="673362753489993749"))
    {if(tierttts===1)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namesss} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#f2f2f2')
      rettttts.edit(r);

    }
    if(tierttts===2)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namesss} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
      rettttts.edit(r);

    }
    if(tierttts===3)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namesss} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
      rettttts.edit(r);

    }
    if(tierttts===4)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namesss} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
      rettttts.edit(r);

    }
    if(tierttts===5)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namesss} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
      rettttts.edit(r);

    }
    if(tierttts===6)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namesss} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ff0000')
      rettttts.edit(r);
    }
  }
  msg.embeds.forEach(async embed => {
    let x='715933103138406402';////////////////////////////////////////////
    
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tierttts===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namesss}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#f2f2f2')
          tierttts=0;
        rettttts.edit(r);   
      }
      if(tierttts===2)
      {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namesss}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#33cc33')
        tierttts=0;
        rettttts.edit(r); 
        }
        if(tierttts===3)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namesss}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#0099ff')
        tierttts=0;
        rettttts.edit(r); 
      }
        if(tierttts===4)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namesss}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#cc00ff')
        tierttts=0;
        rettttts.edit(r); 
       }
        if(tierts===5)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namesss}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ffff00')
        tierttts=0;
        rettttts.edit(r); 
       }
        if(tierttts===6)//foff 
        {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namesss}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ff0000')
        tierttts=0;
        rettttts.edit(r); 
         }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    {namesss=msg.embeds[0].title;
      //msg.channel.send("<@&715929995989483592> test tier 1 ping tier 4|Sorry for ping!")
     tierttts=1;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     .setDescription(`${msg.embeds[0].title} has spawned!`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#f2f2f2')
     rettttts= await client.channels.cache.get(x).send(r);
    }
    
   if(msg.embeds[0].title.includes('Tier: 2'))
    { namesss=msg.embeds[0].title;
      tierttts=2;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
        return rettttts= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 3'))
     {   
       tierttts=3;namesss=msg.embeds[0].title;
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())     
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
        return  rettttts= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 4'))
     {tierttts=4;namesss=msg.embeds[0].title;
      msg.channel.send("<@&715929995989483592>  **E B I C** tier 4 spawned, go get it")
       console.log(`${msg.embeds[0].title} in server 1`)
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
        return rettttts= await client.channels.cache.get(x).send(r);
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {tierttts=5;namesss=msg.embeds[0].title;
      msg.channel.send("<@&715930029174947860>  **E B I C** tier 5 spawned, go get it")
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())    
      .setTimestamp()//java script
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
        rettttts= await client.channels.cache.get(x).send(r);
        console.log(`${msg.embeds[0].title} in server 9`);
        } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { tierttts=6;namesss=msg.embeds[0].title;
      msg.channel.send("<@&715930058094673933>  **E B I C** tier 6 spawned, go get it")
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ff0000')
        rettttts= await client.channels.cache.get(x).send(r);
      console.log(`${msg.embeds[0].title} in server 9`)
    } 
    //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
      });
  }

});




require('events').EventEmitter.defaultMaxListeners = 100;

////EGC
//let zp='711680724192985108';
client.on('message',async msg => {
  if((msg.channel.id==="711664374997319741") && (msg.author.id==="673362753489993749")){
  msg.embeds.forEach(async embed => {
    let x='712682947261759578';////////////////////////////////////////////  
    if(typeof msg.embeds[0].title==='undefined')
    { 
         return 
    }
//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    {let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#f2f2f2')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#f2f2f2')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        }
      
      //msg.channel.send("<@&717043443142099057> Hey, look at that! A tier 1 spawned! Go get it!|TEST") 
    }
    
   if(msg.embeds[0].title.includes('Tier: 2'))
    {let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#f2f2f2')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#f2f2f2')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        } }
     if(msg.embeds[0].title.includes('Tier: 3'))
     {  let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#f2f2f2')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#f2f2f2')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        } 
       }
     if(msg.embeds[0].title.includes('Tier: 4'))
     {let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#f2f2f2')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#f2f2f2')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        }
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#f2f2f2')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#f2f2f2')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        }
     
        } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { 
      let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#f2f2f2')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#f2f2f2')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        }
          
    } 
    //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
      });
  }
});


///VIRUS
client.on('message',async msg => {
  if((msg.channel.id==="705819528520794283") && (msg.author.id==="673362753489993749")){
  msg.embeds.forEach(async embed => {
    let x='712682947261759578';////////////////////////////////////////////  
    if(typeof msg.embeds[0].title==='undefined')
    { 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    {//msg.channel.send("<@&717043443142099057> Hey, look at that! A tier 1 spawned! Go get it!|TEST") 
    }
    
   if(msg.embeds[0].title.includes('Tier: 2'))
    { }
     if(msg.embeds[0].title.includes('Tier: 3'))
     {   
       }
     if(msg.embeds[0].title.includes('Tier: 4'))
     {msg.channel.send("<@&718768432614604822> Hey, look at that! A tier 4 spawned! Go get it!")
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {
      msg.channel.send("<@&718768432614604822> Hey, look at that! A tier 5 spawned! Go get it!")
        } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { msg.channel.send("<@&718768432614604822> Hey, look at that! A tier 6 spawned! Go get it!")
      
    } 
    //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
      });
  }

});











///




////Unknowsv
let tiertttts=0;
let retttttts;
let namessss=0
//let zp='711680724192985108';
client.on('message',async msg => {
  if((msg.channel.id==="708442817977909278") && (msg.author.id==="673362753489993749")){
    if((msg.content.startsWith('Looks like nobody')) && (msg.author.id==="673362753489993749"))
    {if(tiertttts===1)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namessss} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#f2f2f2')
      retttttts.edit(r);

    }
    if(tiertttts===2)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namessss} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
      retttttts.edit(r);

    }
    if(tiertttts===3)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namessss} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
      retttttts.edit(r);

    }
    if(tiertttts===4)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namessss} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
      retttttts.edit(r);

    }
    if(tiertttts===5)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namessss} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
      retttttts.edit(r);

    }
    if(tiertttts===6)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namessss} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ff0000')
      retttttts.edit(r);
    }
  }
  msg.embeds.forEach(async embed => {
    let x='719153768058322955';////////////////////////////////////////////
    
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tiertttts===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namessss}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#f2f2f2')
          tiertttts=0;
        retttttts.edit(r);   
      }
      if(tiertttts===2)
      {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namessss}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#33cc33')
        tiertttts=0;
        retttttts.edit(r); 
        }
        if(tiertttts===3)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namessss}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#0099ff')
        tiertttts=0;
        retttttts.edit(r); 
      }
        if(tiertttts===4)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namessss}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#cc00ff')
        tiertttts=0;
        retttttts.edit(r); 
       }
        if(tierts===5)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namessss}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ffff00')
        tiertttts=0;
        retttttts.edit(r); 
       }
        if(tiertttts===6)//foff 
        {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namessss}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ff0000')
        tiertttts=0;
        retttttts.edit(r); 
         }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    {namessss=msg.embeds[0].title;
     // msg.channel.send("<@&717071265650704446> test tier 1 ping tier 4|Sorry for ping!")
     tiertttts=1;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     .setDescription(`${msg.embeds[0].title} has spawned!`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#f2f2f2')
     retttttts= await client.channels.cache.get(x).send(r);
    }
    
   if(msg.embeds[0].title.includes('Tier: 2'))
    { namessss=msg.embeds[0].title;
      tiertttts=2;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
        return retttttts= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 3'))
     {   
       tiertttts=3;namessss=msg.embeds[0].title;
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())     
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
        return  retttttts= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 4'))
     {tiertttts=4;namessss=msg.embeds[0].title;
     //msg.channel.send("<@&717071265650704446>  **E B I C** tier 4 spawned, go get it")
       console.log(`${msg.embeds[0].title} in server 1`)
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
        return retttttts= await client.channels.cache.get(x).send(r);
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {tiertttts=5;namessss=msg.embeds[0].title;
     msg.channel.send("<@&717071265650704446>  **E B I C** tier 5 spawned, go get it")
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())    
      .setTimestamp()//java script
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
        retttttts= await client.channels.cache.get(x).send(r);
        console.log(`${msg.embeds[0].title} in server 9`);
        } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { tiertttts=6;namessss=msg.embeds[0].title;
      msg.channel.send("<@&717071265650704446>  **E B I C** tier 6 spawned, go get it")
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ff0000')
        retttttts= await client.channels.cache.get(x).send(r);
      console.log(`${msg.embeds[0].title} in server 9`)
    } 
    //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
      });
  }

});







////Kiatsu
let tierttttts=0;
let rettttttts;
let namessssr=0
//let zp='711680724192985108';
client.on('message',async msg => {
  if((msg.channel.id==="694411103782043688") && (msg.author.id==="673362753489993749")){
    if((msg.content.startsWith('Looks like nobody')) && (msg.author.id==="673362753489993749"))
    {if(tierttttts===1)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namessssr} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#f2f2f2')
      rettttttts.edit(r);

    }
    if(tierttttts===2)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namessssr} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
      rettttttts.edit(r);

    }
    if(tierttttts===3)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namessssr} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
      rettttttts.edit(r);

    }
    if(tierttttts===4)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namessssr} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
      rettttttts.edit(r);

    }
    if(tierttttts===5)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namessssr} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
      rettttttts.edit(r);

    }
    if(tierttttts===6)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namessssr} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ff0000')
      rettttttts.edit(r);
    }
  }
  msg.embeds.forEach(async embed => {
    let x='719629405739155577';////////////////////////////////////////////
    
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tierttttts===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namessssr}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#f2f2f2')
          tierttttts=0;
        rettttttts.edit(r);   
      }
      if(tierttttts===2)
      {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namessssr}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#33cc33')
        tierttttts=0;
        rettttttts.edit(r); 
        }
        if(tierttttts===3)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namessssr}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#0099ff')
        tierttttts=0;
        rettttttts.edit(r); 
      }
        if(tierttttts===4)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namessssr}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#cc00ff')
        tierttttts=0;
        rettttttts.edit(r); 
       }
        if(tierts===5)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namessssr}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ffff00')
        tierttttts=0;
        rettttttts.edit(r); 
       }
        if(tierttttts===6)//foff 
        {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namessssr}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ff0000')
        tierttttts=0;
        rettttttts.edit(r); 
         }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    {//msg.channel.send("<:sakura:716256348878143498> <@&719596460600983635> **card just spawned.** Be the one to catch it! <:sakura:716256348878143498>")
      let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#cccccc')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#cccccc')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        }
      namessssr=msg.embeds[0].title;
      //msg.channel.send("<@&715929995989483592> test tier 1 ping tier 4|Sorry for ping!")
     tierttttts=1;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     .setDescription(`${msg.embeds[0].title} has spawned!`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#f2f2f2')
     rettttttts= await client.channels.cache.get(x).send(r);
    }
    
   if(msg.embeds[0].title.includes('Tier: 2'))
    {msg.channel.send("<:sakura:716256348878143498> <@&719596460600983635> **card just spawned.** Be the one to catch it! <:sakura:716256348878143498>")
       let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#7aff8d')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#7aff8d')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        }
      namessssr=msg.embeds[0].title;
      tierttttts=2;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
        return rettttttts= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 3'))
     { msg.channel.send("<:sakura:716256348878143498> <@&719596418007957606> **card just spawned.** Be the one to catch it! <:sakura:716256348878143498>")
       let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#58a0e3')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#58a0e3')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        } 
       tierttttts=3;namessssr=msg.embeds[0].title;
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())     
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
        return  rettttttts= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 4'))
     {msg.channel.send("<:sakura:716256348878143498> <@&719596349733077134> **card just spawned.** Be the one to catch it! <:sakura:716256348878143498>")
       let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#ad58e3')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#ad58e3')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        }
       tierttttts=4;namessssr=msg.embeds[0].title;
      
       console.log(`${msg.embeds[0].title} in server 1`)
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
        return rettttttts= await client.channels.cache.get(x).send(r);
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {msg.channel.send("<:sakura:716256348878143498> <@&719596279516102724> **card just spawned.** Be the one to catch it! <:sakura:716256348878143498>")
       
       let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#fff200')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#fff200')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        }
       tierttttts=5;namessssr=msg.embeds[0].title;
     // msg.channel.send("<@&715930029174947860>  **E B I C** tier 5 spawned, go get it")
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())    
      .setTimestamp()//java script
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
        rettttttts= await client.channels.cache.get(x).send(r);
        console.log(`${msg.embeds[0].title} in server 9`);
        } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    {msg.channel.send("<:sakura:716256348878143498> <@&719596173899595940> **card just spawned.** Be the one to catch it! <:sakura:716256348878143498>")
       
       let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#ea2222')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#ea2222')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        }
      tierttttts=6;namessssr=msg.embeds[0].title;
      //msg.channel.send("<@&715930058094673933>  **E B I C** tier 6 spawned, go get it")
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ff0000')
        rettttttts= await client.channels.cache.get(x).send(r);
      console.log(`${msg.embeds[0].title} in server 9`)
    } 
    //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
      });
  }

});







////Oaisis sv 12
let tiertttttts=0;
let retttttttts;
let namesssssr=0
//let zp='711680724192985108';
client.on('message',async msg => {
  if((msg.channel.id==="714989643569037313") && (msg.author.id==="673362753489993749")){
    if((msg.content.startsWith('Looks like nobody')) && (msg.author.id==="673362753489993749"))
    {if(tiertttttts===1)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namesssssr} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#f2f2f2')
      retttttttts.edit(r);

    }
    if(tiertttttts===2)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namesssssr} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
      retttttttts.edit(r);

    }
    if(tiertttttts===3)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namesssssr} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
      retttttttts.edit(r);

    }
    if(tiertttttts===4)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namesssssr} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
      retttttttts.edit(r);

    }
    if(tiertttttts===5)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namesssssr} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
      retttttttts.edit(r);

    }
    if(tiertttttts===6)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namesssssr} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ff0000')
      retttttttts.edit(r);
    }
  }
  msg.embeds.forEach(async embed => {
    let x='720300456194342993';////////////////////////////////////////////
    
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tiertttttts===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namesssssr}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#f2f2f2')
          tiertttttts=0;
        retttttttts.edit(r);   
      }
      if(tiertttttts===2)
      {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namesssssr}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#33cc33')
        tiertttttts=0;
        retttttttts.edit(r); 
        }
        if(tiertttttts===3)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namesssssr}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#0099ff')
        tiertttttts=0;
        retttttttts.edit(r); 
      }
        if(tiertttttts===4)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namesssssr}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#cc00ff')
        tiertttttts=0;
        retttttttts.edit(r); 
       }
        if(tierts===5)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namesssssr}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ffff00')
        tiertttttts=0;
        retttttttts.edit(r); 
       }
        if(tiertttttts===6)//foff 
        {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namesssssr}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ff0000')
        tiertttttts=0;
        retttttttts.edit(r); 
         }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    {//msg.channel.send("<:sakura:716256348878143498> <@&719596460600983635> **card just spawned.** Be the one to catch it! <:sakura:716256348878143498>")
      let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#cccccc')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#cccccc')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        }
      namesssssr=msg.embeds[0].title;
     // msg.channel.send("<@&697522565618597938> test tier 1 ping tier|Sorry for ping!")
     tiertttttts=1;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     .setDescription(`${msg.embeds[0].title} has spawned!`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#f2f2f2')
     retttttttts= await client.channels.cache.get(x).send(r);
    }
    
   if(msg.embeds[0].title.includes('Tier: 2'))
    {//msg.channel.send("<:sakura:716256348878143498> <@&697522565618597938> **card just spawned.** Be the one to catch it! <:sakura:716256348878143498>")
       let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#7aff8d')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#7aff8d')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        }
      namesssssr=msg.embeds[0].title;
      tiertttttts=2;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
        return retttttttts= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 3'))
     { //msg.channel.send("<:sakura:716256348878143498> <@&697522565618597938> **card just spawned.** Be the one to catch it! <:sakura:716256348878143498>")
       let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#58a0e3')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#58a0e3')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        } 
       tiertttttts=3;namesssssr=msg.embeds[0].title;
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())     
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
        return  retttttttts= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 4'))
     {msg.channel.send("<:sakura:716256348878143498> <@&697522565618597938> **card just spawned.** Be the one to catch it! <:sakura:716256348878143498>")
       let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#ad58e3')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#ad58e3')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        }
       tiertttttts=4;namesssssr=msg.embeds[0].title;
      
       console.log(`${msg.embeds[0].title} in server 1`)
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
        return retttttttts= await client.channels.cache.get(x).send(r);
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {msg.channel.send("<:sakura:716256348878143498> <@&697522565618597938> **card just spawned.** Be the one to catch it! <:sakura:716256348878143498>")
       
       let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#fff200')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#fff200')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        }
       tiertttttts=5;namesssssr=msg.embeds[0].title;
     // msg.channel.send("<@&715930029174947860>  **E B I C** tier 5 spawned, go get it")
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())    
      .setTimestamp()//java script
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
        retttttttts= await client.channels.cache.get(x).send(r);
        console.log(`${msg.embeds[0].title} in server 9`);
        } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    {
      msg.channel.send("<:sakura:716256348878143498> <@&697522565618597938> **card just spawned.** Be the one to catch it! <:sakura:716256348878143498>")
       
       let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#ea2222')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#ea2222')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        }
      tiertttttts=6;namesssssr=msg.embeds[0].title;
      //msg.channel.send("<@&715930058094673933>  **E B I C** tier 6 spawned, go get it")
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ff0000')
        retttttttts= await client.channels.cache.get(x).send(r);
      console.log(`${msg.embeds[0].title} in server 9`)
    } 
    //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
      });
  }

});









////Moonlight WORLD OF RUINA 1 sv 13
let tierttttttts=0;
let rettttttttts;
let namessssssr=0
//let zp='711680724192985108';
client.on('message',async msg => {
  if((msg.channel.id==="705735403143036968") && (msg.author.id==="673362753489993749")){
    if((msg.content.startsWith('Looks like nobody')) && (msg.author.id==="673362753489993749"))
    {if(tierttttttts===1)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namessssssr} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#f2f2f2')
      rettttttttts.edit(r);

    }
    if(tierttttttts===2)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namessssssr} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
      rettttttttts.edit(r);

    }
    if(tierttttttts===3)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namessssssr} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
      rettttttttts.edit(r);

    }
    if(tierttttttts===4)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namessssssr} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
      rettttttttts.edit(r);

    }
    if(tierttttttts===5)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namessssssr} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
      rettttttttts.edit(r);

    }
    if(tierttttttts===6)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${namessssssr} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ff0000')
      rettttttttts.edit(r);
    }
  }
  msg.embeds.forEach(async embed => {
    let x='713317244590882826';////////////////////////////////////////////
    
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tierttttttts===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namessssssr}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#f2f2f2')
          tierttttttts=0;
        rettttttttts.edit(r);   
      }
      if(tierttttttts===2)
      {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namessssssr}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#33cc33')
        tierttttttts=0;
        rettttttttts.edit(r); 
        }
        if(tierttttttts===3)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namessssssr}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#0099ff')
        tierttttttts=0;
        rettttttttts.edit(r); 
      }
        if(tierttttttts===4)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namessssssr}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#cc00ff')
        tierttttttts=0;
        rettttttttts.edit(r); 
       }
        if(tierts===5)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namessssssr}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ffff00')
        tierttttttts=0;
        rettttttttts.edit(r); 
       }
        if(tierttttttts===6)//foff 
        {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${namessssssr}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ff0000')
        tierttttttts=0;
        rettttttttts.edit(r); 
         }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    {//msg.channel.send("<:sakura:716256348878143498> <@&719596460600983635> **card just spawned.** Be the one to catch it! <:sakura:716256348878143498>")
      let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#cccccc')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#cccccc')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        }
      namessssssr=msg.embeds[0].title;
     // msg.channel.send("<@&697522565618597938> test tier 1 ping tier|Sorry for ping!")
     tierttttttts=1;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     .setDescription(`${msg.embeds[0].title} has spawned!`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#f2f2f2')
     rettttttttts= await client.channels.cache.get(x).send(r);
    }
    
   if(msg.embeds[0].title.includes('Tier: 2'))
    {//msg.channel.send("<:sakura:716256348878143498> <@&697522565618597938> **card just spawned.** Be the one to catch it! <:sakura:716256348878143498>")
       let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#7aff8d')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#7aff8d')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        }
      namessssssr=msg.embeds[0].title;
      tierttttttts=2;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
        return rettttttttts= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 3'))
     { //msg.channel.send("<:sakura:716256348878143498> <@&697522565618597938> **card just spawned.** Be the one to catch it! <:sakura:716256348878143498>")
       let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#58a0e3')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#58a0e3')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        } 
       tierttttttts=3;namessssssr=msg.embeds[0].title;
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())     
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
        return  rettttttttts= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 4'))
     {msg.channel.send("<:sakura:716256348878143498> <@&697522565618597938> **card just spawned.** Be the one to catch it! <:sakura:716256348878143498>")
       let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#ad58e3')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#ad58e3')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        }
       tierttttttts=4;namessssssr=msg.embeds[0].title;
      
       console.log(`${msg.embeds[0].title} in server 1`)
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
        return rettttttttts= await client.channels.cache.get(x).send(r);
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {
      msg.channel.send("<@&703567974291734548> Hey, look at that! A tier 5 spawned! Go get it!");  
       let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#fff200')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#fff200')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        }
       tierttttttts=5;namessssssr=msg.embeds[0].title;
     // msg.channel.send("<@&715930029174947860>  **E B I C** tier 5 spawned, go get it")
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())    
      .setTimestamp()//java script
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
        rettttttttts= await client.channels.cache.get(x).send(r);
        console.log(`${msg.embeds[0].title} in server 9`);
        } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    {
      msg.channel.send("<@&703567974291734548> Hey, look at that! A tier 6 spawned! Go get it!");  
       let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#ea2222')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#ea2222')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
               
        }
      tierttttttts=6;namessssssr=msg.embeds[0].title;
      //msg.channel.send("<@&715930058094673933>  **E B I C** tier 6 spawned, go get it")
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ff0000')
        rettttttttts= await client.channels.cache.get(x).send(r);
      console.log(`${msg.embeds[0].title} in server 9`)
    } 
    //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
      });
  }

});


let tiiier=0;
let reet;
let nammesss;
client.on('message',async msg => {
//DESPAWN SERVER 14 
  if((msg.channel.id==="701347899639988254") && (msg.author.id==="673362753489993749")){
    if((msg.content.startsWith('Looks like nobody')) && (msg.author.id==="673362753489993749"))
    {if(tiiier===1)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${nammesss} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#f2f2f2')
      reet.edit(r);

    }
    if(tiiier===2)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${nammesss} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
      reet.edit(r);

    }
    if(tiiier===3)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${nammesss} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
      reet.edit(r);

    }
    if(tiiier===4)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${nammesss} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
      reet.edit(r);

    }
    if(tiiier===5)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${nammesss} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
      reet.edit(r);

    }
    if(tiiier===6)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${nammesss} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
      reet.edit(r);
    }
  }
  msg.embeds.forEach(async embed => {
    let x='721459420671901827';
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tiiier===1)
      {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${nammesss}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#f2f2f2')
        tiiier=0;
        reet.edit(r);   
      }
      if(tiiier===2)
      {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${nammesss}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#33cc33')
        tiiier=0;
        reet.edit(r); 
        }
        if(tiiier===3)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${nammesss}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#0099ff')
        tiiier=0;
        reet.edit(r); 
      }
        if(tiiier===4)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${nammesss}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#cc00ff')
        tiiier=0;
        reet.edit(r); 
       }
        if(tiiier===5)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${nammesss}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ffff00')
        tiiier=0;
        reet.edit(r); 
       }
        if(tiiier===6)
        {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${nammesss}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
        tiiier=0;
        reet.edit(r); 
         }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    {   //msg.channel.send("<@&721457437399449620>  **E B I C** tier 1 spawned, go get it(TEST!) <:pog:699999258547322950>") 
  
      let xp=14;
     let myinterval;
     let ok=1;
       if (ok===1) {
         const r= new MessageEmbed()
         .setDescription(`**Time remaining till despawns** ${xp}`)   
           .setColor('#cccccc')
          msg.channel.send(r)
               .then(message => { //clearInterval(myinterval);
                   myinterval=setInterval(function() {
                     //console.log(".")
                    
                     xp=xp-2;  
                   const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
                       .setColor('#cccccc')
                     message.edit(r)
                       if(xp==0)
                     {clearInterval(myinterval);
                       message.delete();
                     }
                   }, 2000);
                   //clearInterval(myinterval);
                    
                   })
            }
      nammesss=msg.embeds[0].title;
     tiiier=1;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     .setDescription(`${msg.embeds[0].title} has spawned!`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#cccccc')
     reet= await client.channels.cache.get(x).send(r);
    } 
   if(msg.embeds[0].title.includes('Tier: 2'))
    { 
      
      let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#7aff8d')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#7aff8d')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
                  }
      nammesss=msg.embeds[0].title;
      tiiier=2;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
        return reet= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 3'))
     {let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#58a0e3')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#58a0e3')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
                  }
       
      tiiier=3;nammesss=msg.embeds[0].title;
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())     
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
        return  reet= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 4'))
     {let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#ad58e3')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#ad58e3')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
                  }
    msg.channel.send("<@&721469721572147202>  **E B I C** tier 4 spawned, go get it <:pog:699999258547322950>")
      tiiier=4;nammesss=msg.embeds[0].title;
       console.log(`${msg.embeds[0].title} in server 1`)
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
        return reet= await client.channels.cache.get(x).send(r);
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#fff200')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#fff200')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
                  }
       
      tiiier=5;nammesss=msg.embeds[0].title;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())    
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
        reet= await client.channels.cache.get(x).send(r);
        console.log(`${msg.embeds[0].title} in server 1`);
        return msg.channel.send("<@&721469677271908502>  **E B I C** tier 5 spawned, go get it <:pog:699999258547322950>")} 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#ea2222')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#ea2222')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
                  }
      
      tiiier=6;nammesss=msg.embeds[0].title;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
        reet= await client.channels.cache.get(x).send(r);
      console.log(`${msg.embeds[0].title} in server 1`)
      return msg.channel.send("<@&721457437399449620> **E B I C** tier 6 spawned, go get it <:pog:699999258547322950>")} 
    //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
      });
    }
  });







  let tiiiier=0;
  let reeet;
  let nammessss;
  client.on('message',async msg => {
  //DESPAWN SERVER AnimeMemesSekai
    if((msg.channel.id==="708259848407744512") && (msg.author.id==="673362753489993749")){
      if((msg.content.startsWith('Looks like nobody')) && (msg.author.id==="673362753489993749"))
      {if(tiiiier===1)
      {
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${nammessss} despawned`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#f2f2f2')
        reeet.edit(r);
  
      }
      if(tiiiier===2)
      {
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${nammessss} despawned`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#33cc33')
        reeet.edit(r);
  
      }
      if(tiiiier===3)
      {
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${nammessss} despawned`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#0099ff')
        reeet.edit(r);
  
      }
      if(tiiiier===4)
      {
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${nammessss} despawned`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#cc00ff')
        reeet.edit(r);
  
      }
      if(tiiiier===5)
      {
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${nammessss} despawned`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ffff00')
        reeet.edit(r);
  
      }
      if(tiiiier===6)
      {
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${nammessss} despawned`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
        reeet.edit(r);
      }
    }
    msg.embeds.forEach(async embed => {
      let x='722433452988694569';
      if(typeof msg.embeds[0].title==='undefined')
      { 
        if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
        {
        if(tiiiier===1)
        {
          const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);    
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`<@${idbest}> has claimed ${nammessss}`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#f2f2f2')
          tiiiier=0;
          reeet.edit(r);   
        }
        if(tiiiier===2)
        {
          const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);    
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`<@${idbest}> has claimed ${nammessss}`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#33cc33')
          tiiiier=0;
          reeet.edit(r); 
          }
          if(tiiiier===3)
        {const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);    
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`<@${idbest}> has claimed ${nammessss}`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#0099ff')
          tiiiier=0;
          reeet.edit(r); 
        }
          if(tiiiier===4)
        {const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);    
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`<@${idbest}> has claimed ${nammessss}`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#cc00ff')
          tiiiier=0;
          reeet.edit(r); 
         }
          if(tiiiier===5)
        {const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);    
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`<@${idbest}> has claimed ${nammessss}`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#ffff00')
          tiiiier=0;
          reeet.edit(r); 
         }
          if(tiiiier===6)
          {
          const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);    
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`<@${idbest}> has claimed ${nammessss}`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#ea2222')
          tiiiier=0;
          reeet.edit(r); 
           }
      } 
           return 
      }
  
  
  //logs!!!
      if(msg.embeds[0].title.includes('Tier: 1'))
      {  
        let xp=14;
       let myinterval;
       let ok=1;
         if (ok===1) {
           const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
             .setColor('#cccccc')
            msg.channel.send(r)
                 .then(message => { //clearInterval(myinterval);
                     myinterval=setInterval(function() {
                       //console.log(".")
                      
                       xp=xp-2;  
                     const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
                         .setColor('#cccccc')
                       message.edit(r)
                         if(xp==0)
                       {clearInterval(myinterval);
                         message.delete();
                       }
                     }, 2000);
                     //clearInterval(myinterval);
                      
                     })
              }
        nammessss=msg.embeds[0].title;
       tiiiier=1;
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
       .setTimestamp()
       .setDescription(`${msg.embeds[0].title} has spawned!`)
       .setFooter(`Server name: ${msg.guild.name}`)
         .setColor('#cccccc')
       reeet= await client.channels.cache.get(x).send(r);
      } 
     if(msg.embeds[0].title.includes('Tier: 2'))
      { 
        
        let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#7aff8d')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#7aff8d')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
        nammessss=msg.embeds[0].title;
        tiiiier=2;
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${msg.embeds[0].title} has spawned!`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#33cc33')
          return reeet= await client.channels.cache.get(x).send(r);}
       if(msg.embeds[0].title.includes('Tier: 3'))
       {let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#58a0e3')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#58a0e3')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
         
        tiiiier=3;nammessss=msg.embeds[0].title;
         const r= new MessageEmbed()
         .setAuthor(`${msg.author.username}`,msg.author.avatarURL())     
        .setTimestamp()
        .setDescription(`${msg.embeds[0].title} has spawned!`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#0099ff')
          return  reeet= await client.channels.cache.get(x).send(r);}
       if(msg.embeds[0].title.includes('Tier: 4'))
       {let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#ad58e3')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#ad58e3')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
        tiiiier=4;nammessss=msg.embeds[0].title;
         console.log(`${msg.embeds[0].title} in server 1`)
         const r= new MessageEmbed()
         .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${msg.embeds[0].title} has spawned!`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#cc00ff')
          return reeet= await client.channels.cache.get(x).send(r);
        }
      if(msg.embeds[0].title.includes('Tier: 5'))
       {let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#fff200')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#fff200')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
         
        tiiiier=5;nammessss=msg.embeds[0].title;
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())    
        .setTimestamp()
        .setDescription(`${msg.embeds[0].title} has spawned!`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ffff00')
          reeet= await client.channels.cache.get(x).send(r);
          return } 
      if(msg.embeds[0].title.includes('Tier: 6'))
      { let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#ea2222')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#ea2222')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
        
        tiiiier=6;nammessss=msg.embeds[0].title;
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${msg.embeds[0].title} has spawned!`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
          reeet= await client.channels.cache.get(x).send(r);
                 return } 
      //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
        });
      }
    });
  
// New server aldready done
    let tiiiiier=0;
    let reeeet;
    let nammessssm;
    client.on('message',async msg => {
    //DESPAWN SERVER AnimeMemesSekai
      if((msg.channel.id==="722162973849812992") && (msg.author.id==="673362753489993749")){
        if((msg.content.startsWith('Looks like nobody')) && (msg.author.id==="673362753489993749"))
        {if(tiiiiier===1)
        {
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`${nammessssm} despawned`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#f2f2f2')
          reeeet.edit(r);
    
        }
        if(tiiiiier===2)
        {
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`${nammessssm} despawned`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#33cc33')
          reeeet.edit(r);
    
        }
        if(tiiiiier===3)
        {
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`${nammessssm} despawned`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#0099ff')
          reeeet.edit(r);
    
        }
        if(tiiiiier===4)
        {
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`${nammessssm} despawned`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#cc00ff')
          reeeet.edit(r);
    
        }
        if(tiiiiier===5)
        {
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`${nammessssm} despawned`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#ffff00')
          reeeet.edit(r);
    
        }
        if(tiiiiier===6)
        {
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`${nammessssm} despawned`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#ea2222')
          reeeet.edit(r);
        }
      }
      msg.embeds.forEach(async embed => {
        let x='722829953212874782';
        if(typeof msg.embeds[0].title==='undefined')
        { 
          if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
          {
          if(tiiiiier===1)
          {
            const stsr = msg.embeds[0].description;
            let idbest=stsr.substring(31, 49);    
            const r= new MessageEmbed()
            .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
            .setTimestamp()
            .setDescription(`<@${idbest}> has claimed ${nammessssm}`)
            .setFooter(`Server name: ${msg.guild.name}`)
              .setColor('#f2f2f2')
            tiiiiier=0;
            reeeet.edit(r);   
          }
          if(tiiiiier===2)
          {
            const stsr = msg.embeds[0].description;
            let idbest=stsr.substring(31, 49);    
            const r= new MessageEmbed()
            .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
            .setTimestamp()
            .setDescription(`<@${idbest}> has claimed ${nammessssm}`)
            .setFooter(`Server name: ${msg.guild.name}`)
              .setColor('#33cc33')
            tiiiiier=0;
            reeeet.edit(r); 
            }
            if(tiiiiier===3)
          {const stsr = msg.embeds[0].description;
            let idbest=stsr.substring(31, 49);    
            const r= new MessageEmbed()
            .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
            .setTimestamp()
            .setDescription(`<@${idbest}> has claimed ${nammessssm}`)
            .setFooter(`Server name: ${msg.guild.name}`)
              .setColor('#0099ff')
            tiiiiier=0;
            reeeet.edit(r); 
          }
            if(tiiiiier===4)
          {const stsr = msg.embeds[0].description;
            let idbest=stsr.substring(31, 49);    
            const r= new MessageEmbed()
            .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
            .setTimestamp()
            .setDescription(`<@${idbest}> has claimed ${nammessssm}`)
            .setFooter(`Server name: ${msg.guild.name}`)
              .setColor('#cc00ff')
            tiiiiier=0;
            reeeet.edit(r); 
           }
            if(tiiiiier===5)
          {const stsr = msg.embeds[0].description;
            let idbest=stsr.substring(31, 49);    
            const r= new MessageEmbed()
            .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
            .setTimestamp()
            .setDescription(`<@${idbest}> has claimed ${nammessssm}`)
            .setFooter(`Server name: ${msg.guild.name}`)
              .setColor('#ffff00')
            tiiiiier=0;
            reeeet.edit(r); 
           }
            if(tiiiiier===6)
            {
            const stsr = msg.embeds[0].description;
            let idbest=stsr.substring(31, 49);    
            const r= new MessageEmbed()
            .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
            .setTimestamp()
            .setDescription(`<@${idbest}> has claimed ${nammessssm}`)
            .setFooter(`Server name: ${msg.guild.name}`)
              .setColor('#ea2222')
            tiiiiier=0;
            reeeet.edit(r); 
             }
        } 
             return 
        }
    
    
    //logs!!!
        if(msg.embeds[0].title.includes('Tier: 1'))
        {  
          let xp=14;
         let myinterval;
         let ok=1;
           if (ok===1) {
             const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
               .setColor('#cccccc')
              msg.channel.send(r)
                   .then(message => { //clearInterval(myinterval);
                       myinterval=setInterval(function() {
                         //console.log(".")
                        
                         xp=xp-2;  
                       const r= new MessageEmbed()
              .setDescription(`**Time remaining till despawns** ${xp}`)   
                           .setColor('#cccccc')
                         message.edit(r)
                           if(xp==0)
                         {clearInterval(myinterval);
                           message.delete();
                         }
                       }, 2000);
                       //clearInterval(myinterval);
                        
                       })
                }
          nammessssm=msg.embeds[0].title;
         tiiiiier=1;
         const r= new MessageEmbed()
         .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
         .setTimestamp()
         .setDescription(`${msg.embeds[0].title} has spawned!`)
         .setFooter(`Server name: ${msg.guild.name}`)
           .setColor('#cccccc')
         reeeet= await client.channels.cache.get(x).send(r);
        } 
       if(msg.embeds[0].title.includes('Tier: 2'))
        { 
          
          let xp=14;
          let myinterval;
          let ok=1;
            if (ok===1) {
              const r= new MessageEmbed()
              .setDescription(`**Time remaining till despawns** ${xp}`)   
                .setColor('#7aff8d')
               msg.channel.send(r)
                    .then(message => { //clearInterval(myinterval);
                        myinterval=setInterval(function() {
                          //console.log(".")
                         
                          xp=xp-2;  
                        const r= new MessageEmbed()
               .setDescription(`**Time remaining till despawns** ${xp}`)   
                            .setColor('#7aff8d')
                          message.edit(r)
                            if(xp==0)
                          {clearInterval(myinterval);
                            message.delete();
                          }
                        }, 2000);
                        //clearInterval(myinterval);
                         
                        })
                      }
          nammessssm=msg.embeds[0].title;
          tiiiiier=2;
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`${msg.embeds[0].title} has spawned!`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#33cc33')
            return reeeet= await client.channels.cache.get(x).send(r);}
         if(msg.embeds[0].title.includes('Tier: 3'))
         {let xp=14;
          let myinterval;
          let ok=1;
            if (ok===1) {
              const r= new MessageEmbed()
              .setDescription(`**Time remaining till despawns** ${xp}`)   
                .setColor('#58a0e3')
               msg.channel.send(r)
                    .then(message => { //clearInterval(myinterval);
                        myinterval=setInterval(function() {
                          //console.log(".")
                         
                          xp=xp-2;  
                        const r= new MessageEmbed()
               .setDescription(`**Time remaining till despawns** ${xp}`)   
                            .setColor('#58a0e3')
                          message.edit(r)
                            if(xp==0)
                          {clearInterval(myinterval);
                            message.delete();
                          }
                        }, 2000);
                        //clearInterval(myinterval);
                         
                        })
                      }
           
          tiiiiier=3;nammessssm=msg.embeds[0].title;
           const r= new MessageEmbed()
           .setAuthor(`${msg.author.username}`,msg.author.avatarURL())     
          .setTimestamp()
          .setDescription(`${msg.embeds[0].title} has spawned!`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#0099ff')
            return  reeeet= await client.channels.cache.get(x).send(r);}
         if(msg.embeds[0].title.includes('Tier: 4'))
         {let xp=14;
          let myinterval;
          let ok=1;
            if (ok===1) {
              const r= new MessageEmbed()
              .setDescription(`**Time remaining till despawns** ${xp}`)   
                .setColor('#ad58e3')
               msg.channel.send(r)
                    .then(message => { //clearInterval(myinterval);
                        myinterval=setInterval(function() {
                          //console.log(".")
                         
                          xp=xp-2;  
                        const r= new MessageEmbed()
               .setDescription(`**Time remaining till despawns** ${xp}`)   
                            .setColor('#ad58e3')
                          message.edit(r)
                            if(xp==0)
                          {clearInterval(myinterval);
                            message.delete();
                          }
                        }, 2000);
                        //clearInterval(myinterval);
                         
                        })
                      }
          tiiiiier=4;nammessssm=msg.embeds[0].title;
           console.log(`${msg.embeds[0].title} in server 1`)
           const r= new MessageEmbed()
           .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`${msg.embeds[0].title} has spawned!`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#cc00ff')
            return reeeet= await client.channels.cache.get(x).send(r);
          }
        if(msg.embeds[0].title.includes('Tier: 5'))
         {let xp=14;
          let myinterval;
          let ok=1;
            if (ok===1) {
              const r= new MessageEmbed()
              .setDescription(`**Time remaining till despawns** ${xp}`)   
                .setColor('#fff200')
               msg.channel.send(r)
                    .then(message => { //clearInterval(myinterval);
                        myinterval=setInterval(function() {
                          //console.log(".")
                         
                          xp=xp-2;  
                        const r= new MessageEmbed()
               .setDescription(`**Time remaining till despawns** ${xp}`)   
                            .setColor('#fff200')
                          message.edit(r)
                            if(xp==0)
                          {clearInterval(myinterval);
                            message.delete();
                          }
                        }, 2000);
                        //clearInterval(myinterval);
                         
                        })
                      }
           
          tiiiiier=5;nammessssm=msg.embeds[0].title;
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())    
          .setTimestamp()
          .setDescription(`${msg.embeds[0].title} has spawned!`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#ffff00')
            reeeet= await client.channels.cache.get(x).send(r);
            return } 
        if(msg.embeds[0].title.includes('Tier: 6'))
        { let xp=14;
          let myinterval;
          let ok=1;
            if (ok===1) {
              const r= new MessageEmbed()
              .setDescription(`**Time remaining till despawns** ${xp}`)   
                .setColor('#ea2222')
               msg.channel.send(r)
                    .then(message => { //clearInterval(myinterval);
                        myinterval=setInterval(function() {
                          //console.log(".")
                         
                          xp=xp-2;  
                        const r= new MessageEmbed()
               .setDescription(`**Time remaining till despawns** ${xp}`)   
                            .setColor('#ea2222')
                          message.edit(r)
                            if(xp==0)
                          {clearInterval(myinterval);
                            message.delete();
                          }
                        }, 2000);
                        //clearInterval(myinterval);
                         
                        })
                      }
          
          tiiiiier=6;nammessssm=msg.embeds[0].title;
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`${msg.embeds[0].title} has spawned!`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#ea2222')
            reeeet= await client.channels.cache.get(x).send(r);
                   return } 
        //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
          });
        }
      });
    
  


// 1000 Ways to Die ways die
let tiiiiiier=0;
let reeeeet;
let nammesssssm;
client.on('message',async msg => {
//DESPAWN SERVER 1000 
  if((msg.channel.id==="716691973582618674") && (msg.author.id==="673362753489993749")){
    if((msg.content.startsWith('Looks like nobody')) && (msg.author.id==="673362753489993749"))
    {if(tiiiiiier===1)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${nammesssssm} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#f2f2f2')
      reeeeet.edit(r);

    }
    if(tiiiiiier===2)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${nammesssssm} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
      reeeeet.edit(r);

    }
    if(tiiiiiier===3)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${nammesssssm} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
      reeeeet.edit(r);

    }
    if(tiiiiiier===4)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${nammesssssm} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
      reeeeet.edit(r);

    }
    if(tiiiiiier===5)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${nammesssssm} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
      reeeeet.edit(r);

    }
    if(tiiiiiier===6)
    {
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${nammesssssm} despawned`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
      reeeeet.edit(r);
    }
  }
  msg.embeds.forEach(async embed => {
    let x='724338393332449341';
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tiiiiiier===1)
      {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${nammesssssm}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#f2f2f2')
        tiiiiiier=0;
        reeeeet.edit(r);   
      }
      if(tiiiiiier===2)
      {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${nammesssssm}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#33cc33')
        tiiiiiier=0;
        reeeeet.edit(r); 
        }
        if(tiiiiiier===3)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${nammesssssm}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#0099ff')
        tiiiiiier=0;
        reeeeet.edit(r); 
      }
        if(tiiiiiier===4)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${nammesssssm}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#cc00ff')
        tiiiiiier=0;
        reeeeet.edit(r); 
       }
        if(tiiiiiier===5)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${nammesssssm}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ffff00')
        tiiiiiier=0;
        reeeeet.edit(r); 
       }
        if(tiiiiiier===6)
        {
        const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);    
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<@${idbest}> has claimed ${nammesssssm}`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
        tiiiiiier=0;
        reeeeet.edit(r); 
         }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    {  
      let xp=14;
     let myinterval;
     let ok=1;
       if (ok===1) {
         const r= new MessageEmbed()
         .setDescription(`**Time remaining till despawns** ${xp}`)   
           .setColor('#cccccc')
          msg.channel.send(r)
               .then(message => { //clearInterval(myinterval);
                   myinterval=setInterval(function() {
                     //console.log(".")
                    
                     xp=xp-2;  
                   const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
                       .setColor('#cccccc')
                     message.edit(r)
                       if(xp==0)
                     {clearInterval(myinterval);
                       message.delete();
                     }
                   }, 2000);
                   //clearInterval(myinterval);
                    
                   })
            }
      nammesssssm=msg.embeds[0].title;
     tiiiiiier=1;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     .setDescription(`${msg.embeds[0].title} has spawned!`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#cccccc')
     reeeeet= await client.channels.cache.get(x).send(r);
    } 
   if(msg.embeds[0].title.includes('Tier: 2'))
    { 
      
      let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#7aff8d')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#7aff8d')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
                  }
      nammesssssm=msg.embeds[0].title;
      tiiiiiier=2;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#33cc33')
        return reeeeet= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 3'))
     {let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#58a0e3')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#58a0e3')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
                  }
       
      tiiiiiier=3;nammesssssm=msg.embeds[0].title;
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())     
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0099ff')
        return  reeeeet= await client.channels.cache.get(x).send(r);}
     if(msg.embeds[0].title.includes('Tier: 4'))
     {let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#ad58e3')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#ad58e3')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
                  }
      tiiiiiier=4;nammesssssm=msg.embeds[0].title;
       console.log(`${msg.embeds[0].title} in server 1`)
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cc00ff')
       reeeeet= await client.channels.cache.get(x).send(r);
      return  msg.channel.send("<@&724332574654333026>  **E B I C** tier 4 spawned, go get it <:pog:699999258547322950>") 
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#fff200')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#fff200')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
                  }
       
      tiiiiiier=5;nammesssssm=msg.embeds[0].title;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())    
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ffff00')
        reeeeet= await client.channels.cache.get(x).send(r);
        return msg.channel.send("<@&724332649354887210>  **E B I C** tier 5 spawned, go get it <:pog:699999258547322950>")   
      } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#ea2222')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#ea2222')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
                  }
      
      tiiiiiier=6;nammesssssm=msg.embeds[0].title;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`${msg.embeds[0].title} has spawned!`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
        reeeeet= await client.channels.cache.get(x).send(r);
        return msg.channel.send("<@&724332725795946498>  **E B I C** tier 6 spawned, go get it <:pog:699999258547322950>") } 
    //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
      });
    }
  });



  
// 1000 Ways to Die ways die
client.on('message',async msg => {
//DESPAWN SERVER 1000 
  if((msg.channel.id==="677916486005948425") && (msg.author.id==="673362753489993749")){
  msg.embeds.forEach(async embed => {
    if(typeof msg.embeds[0].title==='undefined')
    {return  
    }
      

//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    {  
      let xp=14;
     let myinterval;
     let ok=1;
       if (ok===1) {
         const r= new MessageEmbed()
         .setDescription(`**Time remaining till despawns** ${xp}`)   
           .setColor('#cccccc')
          msg.channel.send(r)
               .then(message => { //clearInterval(myinterval);
                   myinterval=setInterval(function() {
                     //console.log(".")
                    
                     xp=xp-2;  
                   const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
                       .setColor('#cccccc')
                     message.edit(r)
                       if(xp==0)
                     {clearInterval(myinterval);
                       message.delete();
                     }
                   }, 2000);
                   //clearInterval(myinterval);
                    
                   })
            }
     
    } 
   if(msg.embeds[0].title.includes('Tier: 2'))
    { 
      
      let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#7aff8d')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#7aff8d')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
                  }
                }
     if(msg.embeds[0].title.includes('Tier: 3'))
     {let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#58a0e3')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#58a0e3')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
                  }
                }
     if(msg.embeds[0].title.includes('Tier: 4'))
     {let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#ad58e3')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#ad58e3')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
       } 
       }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#fff200')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#fff200')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
                  }
       } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { let xp=14;
      let myinterval;
      let ok=1;
        if (ok===1) {
          const r= new MessageEmbed()
          .setDescription(`**Time remaining till despawns** ${xp}`)   
            .setColor('#ea2222')
           msg.channel.send(r)
                .then(message => { //clearInterval(myinterval);
                    myinterval=setInterval(function() {
                      //console.log(".")
                     
                      xp=xp-2;  
                    const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
                        .setColor('#ea2222')
                      message.edit(r)
                        if(xp==0)
                      {clearInterval(myinterval);
                        message.delete();
                      }
                    }, 2000);
                    //clearInterval(myinterval);
                     
                    })
                  }
                }
           });
    }
  });






  


///LAST DESTINY
  
// 1000 Ways to Die ways die
client.on('message',async msg => {
  //DESPAWN SERVER 1000 
    if((msg.channel.id==="709317413501403181") && (msg.author.id==="673362753489993749")){
    msg.embeds.forEach(async embed => {
      if(typeof msg.embeds[0].title==='undefined')
      {return  
      }
        
  
  //logs!!!
      if(msg.embeds[0].title.includes('Tier: 1'))
      {  
        let xp=14;
       let myinterval;
       let ok=1;
         if (ok===1) {
           const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
             .setColor('#cccccc')
            msg.channel.send(r)
                 .then(message => { //clearInterval(myinterval);
                     myinterval=setInterval(function() {
                       //console.log(".")
                      
                       xp=xp-2;  
                     const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
                         .setColor('#cccccc')
                       message.edit(r)
                         if(xp==0)
                       {clearInterval(myinterval);
                         message.delete();
                       }
                     }, 2000);
                     //clearInterval(myinterval);
                      
                     })
              }
       
      } 
     if(msg.embeds[0].title.includes('Tier: 2'))
      { 
        
        let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#7aff8d')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#7aff8d')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
                  }
       if(msg.embeds[0].title.includes('Tier: 3'))
       {let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#58a0e3')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#58a0e3')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
                  }
       if(msg.embeds[0].title.includes('Tier: 4'))
       {let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#ad58e3')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#ad58e3')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
         } 
         }
      if(msg.embeds[0].title.includes('Tier: 5'))
       {
       msg.channel.send("<@&725690595515039815>  **E B I C** tier 5 spawned, go get it <:pog:699999258547322950>") 
        let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#fff200')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#fff200')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
         } 
      if(msg.embeds[0].title.includes('Tier: 6'))
      { msg.channel.send("<@&725690745952010260>  **E B I C** tier 6 spawned, go get it <:pog:699999258547322950>") 
        let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#ea2222')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#ea2222')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
                  }
             });
      }
    });
  
  














  //AKIRI keep the corona out of this
  let tiiiiiiier=0;
  let reeeeeet;
  let nammessssssm;
  client.on('message',async msg => {
  //AKIRI
    if((msg.channel.id==="701433483746344981") && (msg.author.id==="673362753489993749")){
      if((msg.content.startsWith('Looks like nobody')) && (msg.author.id==="673362753489993749"))
      {if(tiiiiiiier===1)
      {
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${nammessssssm} despawned`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#f2f2f2')
        reeeeeet.edit(r);
  
      }
      if(tiiiiiiier===2)
      {
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${nammessssssm} despawned`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#33cc33')
        reeeeeet.edit(r);
  
      }
      if(tiiiiiiier===3)
      {
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${nammessssssm} despawned`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#0099ff')
        reeeeeet.edit(r);
  
      }
      if(tiiiiiiier===4)
      {
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${nammessssssm} despawned`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#cc00ff')
        reeeeeet.edit(r);
  
      }
      if(tiiiiiiier===5)
      {
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${nammessssssm} despawned`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ffff00')
        reeeeeet.edit(r);
  
      }
      if(tiiiiiiier===6)
      {
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${nammessssssm} despawned`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
        reeeeeet.edit(r);
      }
    }
    msg.embeds.forEach(async embed => {
      let x='724718274964750367';
      if(typeof msg.embeds[0].title==='undefined')
      { 
        if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
        {
        if(tiiiiiiier===1)
        {
          const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);    
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`<@${idbest}> has claimed ${nammessssssm}`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#f2f2f2')
          tiiiiiiier=0;
          reeeeeet.edit(r);   
        }
        if(tiiiiiiier===2)
        {
          const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);    
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`<@${idbest}> has claimed ${nammessssssm}`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#33cc33')
          tiiiiiiier=0;
          reeeeeet.edit(r); 
          }
          if(tiiiiiiier===3)
        {const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);    
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`<@${idbest}> has claimed ${nammessssssm}`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#0099ff')
          tiiiiiiier=0;
          reeeeeet.edit(r); 
        }
          if(tiiiiiiier===4)
        {const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);    
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`<@${idbest}> has claimed ${nammessssssm}`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#cc00ff')
          tiiiiiiier=0;
          reeeeeet.edit(r); 
         }
          if(tiiiiiiier===5)
        {const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);    
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`<@${idbest}> has claimed ${nammessssssm}`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#ffff00')
          tiiiiiiier=0;
          reeeeeet.edit(r); 
         }
          if(tiiiiiiier===6)
          {
          const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);    
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`<@${idbest}> has claimed ${nammessssssm}`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#ea2222')
          tiiiiiiier=0;
          reeeeeet.edit(r); 
           }
      } 
           return 
      }
  
  
  //logs!!!
      if(msg.embeds[0].title.includes('Tier: 1'))
      {  
        let xp=14;
       let myinterval;
       let ok=1;
         if (ok===1) {
           const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
             .setColor('#cccccc')
            msg.channel.send(r)
                 .then(message => { //clearInterval(myinterval);
                     myinterval=setInterval(function() {
                       //console.log(".")
                      
                       xp=xp-2;  
                     const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
                         .setColor('#cccccc')
                       message.edit(r)
                         if(xp==0)
                       {clearInterval(myinterval);
                         message.delete();
                       }
                     }, 2000);
                     //clearInterval(myinterval);
                      
                     })
              }
        nammessssssm=msg.embeds[0].title;
       tiiiiiiier=1;
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
       .setTimestamp()
       .setDescription(`${msg.embeds[0].title} has spawned!`)
       .setFooter(`Server name: ${msg.guild.name}`)
         .setColor('#cccccc')
       reeeeeet= await client.channels.cache.get(x).send(r);
      } 
     if(msg.embeds[0].title.includes('Tier: 2'))
      { 
        
        let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#7aff8d')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#7aff8d')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
        nammessssssm=msg.embeds[0].title;
        tiiiiiiier=2;
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${msg.embeds[0].title} has spawned!`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#33cc33')
          return reeeeeet= await client.channels.cache.get(x).send(r);}
       if(msg.embeds[0].title.includes('Tier: 3'))
       {let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#58a0e3')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#58a0e3')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
         
        tiiiiiiier=3;nammessssssm=msg.embeds[0].title;
         const r= new MessageEmbed()
         .setAuthor(`${msg.author.username}`,msg.author.avatarURL())     
        .setTimestamp()
        .setDescription(`${msg.embeds[0].title} has spawned!`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#0099ff')
          return  reeeeeet= await client.channels.cache.get(x).send(r);}
       if(msg.embeds[0].title.includes('Tier: 4'))
       {let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#ad58e3')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#ad58e3')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
        tiiiiiiier=4;nammessssssm=msg.embeds[0].title;
         console.log(`${msg.embeds[0].title} in server 1`)
         const r= new MessageEmbed()
         .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${msg.embeds[0].title} has spawned!`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#cc00ff')
         reeeeeet= await client.channels.cache.get(x).send(r);
        return  msg.channel.send("<@&726364426864951308>  **E B I C** tier 4 spawned, go get it <:pog:699999258547322950>") 
        }
      if(msg.embeds[0].title.includes('Tier: 5'))
       {let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#fff200')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#fff200')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
         
        tiiiiiiier=5;nammessssssm=msg.embeds[0].title;
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())    
        .setTimestamp()
        .setDescription(`${msg.embeds[0].title} has spawned!`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ffff00')
          reeeeeet= await client.channels.cache.get(x).send(r);
          return msg.channel.send("<@&726362558998773762>  **E B I C** tier 5 spawned, go get it <:pog:699999258547322950>")   
        } 
      if(msg.embeds[0].title.includes('Tier: 6'))
      { let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#ea2222')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#ea2222')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
        
        tiiiiiiier=6;nammessssssm=msg.embeds[0].title;
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${msg.embeds[0].title} has spawned!`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
          reeeeeet= await client.channels.cache.get(x).send(r);
          return msg.channel.send("<@&726363940161847387>  **E B I C** tier 6 spawned, go get it <:pog:699999258547322950>") 
        } 
      //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
        });
      }
    }) 










    
  //New sv No name
  let tiiiiiiiier=0;
  let reeeeeeet;
  let nammesssssssm;
  client.on('message',async msg => {
  //AKIRI
    if((msg.channel.id==="690533060768301056") && (msg.author.id==="673362753489993749")){
      if((msg.content.startsWith('Looks like nobody')) && (msg.author.id==="673362753489993749"))
      {let tr=0;
        if(tiiiiiiiier===1)
      {
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${nammesssssssm} despawned`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#f2f2f2')
        reeeeeeet.edit(r);
  
      }
      if(tiiiiiiiier===2)
      {
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${nammesssssssm} despawned`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#33cc33')
        reeeeeeet.edit(r);
  
      }
      if(tiiiiiiiier===3)
      {
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${nammesssssssm} despawned`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#0099ff')
        reeeeeeet.edit(r);
  
      }
      if(tiiiiiiiier===4)
      {
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${nammesssssssm} despawned`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#cc00ff')
        reeeeeeet.edit(r);
  
      }
      if(tiiiiiiiier===5)
      {
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${nammesssssssm} despawned`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ffff00')
        reeeeeeet.edit(r);
  
      }
      if(tiiiiiiiier===6)
      {
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${nammesssssssm} despawned`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
        reeeeeeet.edit(r);
      }
    }
    msg.embeds.forEach(async embed => {
      let x='727416019408257024';
      if(typeof msg.embeds[0].title==='undefined')
      { 
        if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
        {
        if(tiiiiiiiier===1)
        {
          const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);    
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`<@${idbest}> has claimed [${nammesssssssm}](${tr})`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#f2f2f2')
          tiiiiiiiier=0;
          reeeeeeet.edit(r);   
        }
        if(tiiiiiiiier===2)
        {
          const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);    
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`<@${idbest}> has claimed [${nammesssssssm}](${tr})`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#33cc33')
          tiiiiiiiier=0;
          reeeeeeet.edit(r); 
          }
          if(tiiiiiiiier===3)
        {const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);    
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`<@${idbest}> has claimed [${nammesssssssm}](${tr})`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#0099ff')
          tiiiiiiiier=0;
          reeeeeeet.edit(r); 
        }
          if(tiiiiiiiier===4)
        {const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);    
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`<@${idbest}> has claimed [${nammesssssssm}](${tr})`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#cc00ff')
          tiiiiiiiier=0;
          reeeeeeet.edit(r); 
         }
          if(tiiiiiiiier===5)
        {const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);    
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`<@${idbest}> has claimed [${nammesssssssm}](${tr})`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#ffff00')
          tiiiiiiiier=0;
          reeeeeeet.edit(r); 
         }
          if(tiiiiiiiier===6)
          {
          const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);    
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`<@${idbest}> has claimed [${nammesssssssm}](${tr})`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#ea2222')
          tiiiiiiiier=0;
          reeeeeeet.edit(r); 
           }
      } 
           return 
      }
  
  
  //logs!!!
      if(msg.embeds[0].title.includes('Tier: 1'))
      {  tr=`https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`;
        let xp=14;
       let myinterval;
       let ok=1;
         if (ok===1) {
           const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
             .setColor('#cccccc')
            msg.channel.send(r)
                 .then(message => { //clearInterval(myinterval);
                     myinterval=setInterval(function() {
                       //console.log(".")
                      
                       xp=xp-2;  
                     const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
                         .setColor('#cccccc')
                       message.edit(r)
                         if(xp==0)
                       {clearInterval(myinterval);
                         message.delete();
                       }
                     }, 2000);
                     //clearInterval(myinterval);
                      
                     })
              }
        nammesssssssm=msg.embeds[0].title;
       tiiiiiiiier=1;
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
       .setTimestamp()
       .setDescription(`${msg.embeds[0].title} has spawned!`)
       .setFooter(`Server name: ${msg.guild.name}`)
         .setColor('#cccccc')
       reeeeeeet= await client.channels.cache.get(x).send(r);
      } 
     if(msg.embeds[0].title.includes('Tier: 2'))
      { tr=`https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`;
        
        let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#7aff8d')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#7aff8d')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
        nammesssssssm=msg.embeds[0].title;
        tiiiiiiiier=2;
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${msg.embeds[0].title} has spawned!`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#33cc33')
          return reeeeeeet= await client.channels.cache.get(x).send(r);}
       if(msg.embeds[0].title.includes('Tier: 3'))
       {tr=`https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`;
         let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#58a0e3')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#58a0e3')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
         
        tiiiiiiiier=3;nammesssssssm=msg.embeds[0].title;
         const r= new MessageEmbed()
         .setAuthor(`${msg.author.username}`,msg.author.avatarURL())     
        .setTimestamp()
        .setDescription(`${msg.embeds[0].title} has spawned!`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#0099ff')
          return  reeeeeeet= await client.channels.cache.get(x).send(r);}
       if(msg.embeds[0].title.includes('Tier: 4'))
       {tr=`https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`;
         let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#ad58e3')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#ad58e3')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
        tiiiiiiiier=4;nammesssssssm=msg.embeds[0].title;
         console.log(`${msg.embeds[0].title} in server 1`)
         const r= new MessageEmbed()
         .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${msg.embeds[0].title} has spawned!`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#cc00ff')
         return reeeeeeet= await client.channels.cache.get(x).send(r);
        //return  msg.channel.send("<@&>  **E B I C** tier 4 spawned, go get it <:pog:699999258547322950>") 
        }
      if(msg.embeds[0].title.includes('Tier: 5'))
       {tr=`https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`;
         let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#fff200')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#fff200')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
         
        tiiiiiiiier=5;nammesssssssm=msg.embeds[0].title;
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())    
        .setTimestamp()
        .setDescription(`${msg.embeds[0].title} has spawned!`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ffff00')
          reeeeeeet= await client.channels.cache.get(x).send(r);
          return msg.channel.send("<@&727414885469651006>  **E B I C** tier 5 spawned, go get it <:pog:699999258547322950>")   
        } 
      if(msg.embeds[0].title.includes('Tier: 6'))
      { tr=`https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`;
        let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#ea2222')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#ea2222')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
        
        tiiiiiiiier=6;nammesssssssm=msg.embeds[0].title;
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${msg.embeds[0].title} has spawned!`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
          reeeeeeet= await client.channels.cache.get(x).send(r);
          return msg.channel.send("<@&727414895179726848>  **E B I C** tier 6 spawned, go get it <:pog:699999258547322950>") 
        } 
      //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
        });
      }
    }) 





  
  //New sv UNDERNOON undernoon
  let tiiiiiiiiier=0;
  let reeeeeeeet;
  let nammessssssssm;
  client.on('message',async msg => {
  //AKIRI
    if((msg.channel.id==="720788490089922641") && (msg.author.id==="673362753489993749")){
      if((msg.content.startsWith('Looks like nobody')) && (msg.author.id==="673362753489993749"))
      {let tr=0;
        if(tiiiiiiiiier===1)
      {
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${nammessssssssm} despawned`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#f2f2f2')
        reeeeeeeet.edit(r);
  
      }
      if(tiiiiiiiiier===2)
      {
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${nammessssssssm} despawned`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#33cc33')
        reeeeeeeet.edit(r);
  
      }
      if(tiiiiiiiiier===3)
      {
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${nammessssssssm} despawned`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#0099ff')
        reeeeeeeet.edit(r);
  
      }
      if(tiiiiiiiiier===4)
      {
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${nammessssssssm} despawned`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#cc00ff')
        reeeeeeeet.edit(r);
  
      }
      if(tiiiiiiiiier===5)
      {
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${nammessssssssm} despawned`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ffff00')
        reeeeeeeet.edit(r);
  
      }
      if(tiiiiiiiiier===6)
      {
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${nammessssssssm} despawned`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
        reeeeeeeet.edit(r);
      }
    }
    msg.embeds.forEach(async embed => {
      let x='727801902670151721';
      if(typeof msg.embeds[0].title==='undefined')
      { 
        if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
        {
        if(tiiiiiiiiier===1)
        {
          const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);    
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`<@${idbest}> has claimed [${nammessssssssm}](${tr})`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#f2f2f2')
          tiiiiiiiiier=0;
          reeeeeeeet.edit(r);   
        }
        if(tiiiiiiiiier===2)
        {
          const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);    
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`<@${idbest}> has claimed [${nammessssssssm}](${tr})`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#33cc33')
          tiiiiiiiiier=0;
          reeeeeeeet.edit(r); 
          }
          if(tiiiiiiiiier===3)
        {const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);    
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`<@${idbest}> has claimed [${nammessssssssm}](${tr})`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#0099ff')
          tiiiiiiiiier=0;
          reeeeeeeet.edit(r); 
        }
          if(tiiiiiiiiier===4)
        {const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);    
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`<@${idbest}> has claimed [${nammessssssssm}](${tr})`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#cc00ff')
          tiiiiiiiiier=0;
          reeeeeeeet.edit(r); 
         }
          if(tiiiiiiiiier===5)
        {const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);    
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`<@${idbest}> has claimed [${nammessssssssm}](${tr})`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#ffff00')
          tiiiiiiiiier=0;
          reeeeeeeet.edit(r); 
         }
          if(tiiiiiiiiier===6)
          {
          const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);    
          const r= new MessageEmbed()
          .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
          .setTimestamp()
          .setDescription(`<@${idbest}> has claimed [${nammessssssssm}](${tr})`)
          .setFooter(`Server name: ${msg.guild.name}`)
            .setColor('#ea2222')
          tiiiiiiiiier=0;
          reeeeeeeet.edit(r); 
           }
      } 
           return 
      }
  
  
  //logs!!!
      if(msg.embeds[0].title.includes('Tier: 1'))
      {  tr=`https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`;
        let xp=14;
       let myinterval;
       let ok=1;
         if (ok===1) {
           const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
             .setColor('#cccccc')
            msg.channel.send(r)
                 .then(message => { //clearInterval(myinterval);
                     myinterval=setInterval(function() {
                       //console.log(".")
                      
                       xp=xp-2;  
                     const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
                         .setColor('#cccccc')
                       message.edit(r)
                         if(xp==0)
                       {clearInterval(myinterval);
                         message.delete();
                       }
                     }, 2000);
                     //clearInterval(myinterval);
                      
                     })
              }
        nammessssssssm=msg.embeds[0].title;
       tiiiiiiiiier=1;
       const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
       .setTimestamp()
       .setDescription(`${msg.embeds[0].title} has spawned!`)
       .setFooter(`Server name: ${msg.guild.name}`)
         .setColor('#cccccc')
       reeeeeeeet= await client.channels.cache.get(x).send(r);
      } 
     if(msg.embeds[0].title.includes('Tier: 2'))
      { tr=`https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`;
        
        let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#7aff8d')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#7aff8d')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
        nammessssssssm=msg.embeds[0].title;
        tiiiiiiiiier=2;
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${msg.embeds[0].title} has spawned!`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#33cc33')
          return reeeeeeeet= await client.channels.cache.get(x).send(r);}
       if(msg.embeds[0].title.includes('Tier: 3'))
       {tr=`https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`;
         let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#58a0e3')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#58a0e3')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
         
        tiiiiiiiiier=3;nammessssssssm=msg.embeds[0].title;
         const r= new MessageEmbed()
         .setAuthor(`${msg.author.username}`,msg.author.avatarURL())     
        .setTimestamp()
        .setDescription(`${msg.embeds[0].title} has spawned!`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#0099ff')
          return  reeeeeeeet= await client.channels.cache.get(x).send(r);}
       if(msg.embeds[0].title.includes('Tier: 4'))
       {tr=`https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`;
         let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#ad58e3')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#ad58e3')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
        tiiiiiiiiier=4;nammessssssssm=msg.embeds[0].title;
         console.log(`${msg.embeds[0].title} in server 1`)
         const r= new MessageEmbed()
         .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${msg.embeds[0].title} has spawned!`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#cc00ff')
         return reeeeeeeet= await client.channels.cache.get(x).send(r);
        //return  msg.channel.send("<@&>  **E B I C** tier 4 spawned, go get it <:pog:699999258547322950>") 
        }
      if(msg.embeds[0].title.includes('Tier: 5'))
       {tr=`https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`;
         let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#fff200')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#fff200')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
         
        tiiiiiiiiier=5;nammessssssssm=msg.embeds[0].title;
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())    
        .setTimestamp()
        .setDescription(`${msg.embeds[0].title} has spawned!`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ffff00')
          reeeeeeeet= await client.channels.cache.get(x).send(r);
          return msg.channel.send("<@&>  **E B I C** tier 5 spawned, go get it <:pog:699999258547322950>")   
        } 
      if(msg.embeds[0].title.includes('Tier: 6'))
      { tr=`https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`;
        let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#ea2222')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#ea2222')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
        
        tiiiiiiiiier=6;nammessssssssm=msg.embeds[0].title;
        const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`${msg.embeds[0].title} has spawned!`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
          reeeeeeeet= await client.channels.cache.get(x).send(r);
          return msg.channel.send("<@&727414895179726848>  **E B I C** tier 6 spawned, go get it <:pog:699999258547322950>") 
        } 
      //console.log("WE HAVE A PROBLEM!!!");// if there are no embeds, this code won't run.
        });
      }
    }) 
















///LAST DESTINY
  
// Harem 500616101823119360
client.on('message',async msg => {
  //DESPAWN SERVER 1000 
    if((msg.channel.id==="682611785496526886") && (msg.author.id==="673362753489993749")){
    msg.embeds.forEach(async embed => {
      if(typeof msg.embeds[0].title==='undefined')
      {return  
      }
        
  
  //logs!!!
      if(msg.embeds[0].title.includes('Tier: 1'))
      {  
        let xp=14;
       let myinterval;
       let ok=1;
         if (ok===1) {
           const r= new MessageEmbed()
           .setDescription(`**Time remaining till despawns** ${xp}`)   
             .setColor('#cccccc')
            msg.channel.send(r)
                 .then(message => { //clearInterval(myinterval);
                     myinterval=setInterval(function() {
                       //console.log(".")
                      
                       xp=xp-2;  
                     const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
                         .setColor('#cccccc')
                       message.edit(r)
                         if(xp==0)
                       {clearInterval(myinterval);
                         message.delete();
                       }
                     }, 2000);
                     //clearInterval(myinterval);
                      
                     })
              }
       
      } 
     if(msg.embeds[0].title.includes('Tier: 2'))
      { 
        
        let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#7aff8d')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#7aff8d')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
                  }
       if(msg.embeds[0].title.includes('Tier: 3'))
       {let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#58a0e3')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#58a0e3')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
                  }
       if(msg.embeds[0].title.includes('Tier: 4'))
       {msg.channel.send("<@&725963071721308162>  **E B I C** tier 4 spawned, go get it <:pog:699999258547322950>") 
         let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#ad58e3')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#ad58e3')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
         } 
         }
      if(msg.embeds[0].title.includes('Tier: 5'))
       {
       msg.channel.send("<@&725970213383962674>  **E B I C** tier 5 spawned, go get it <:pog:699999258547322950>") 
        let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#fff200')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#fff200')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
         } 
      if(msg.embeds[0].title.includes('Tier: 6'))
      { msg.channel.send("<@&725970218572185622>  **E B I C** tier 6 spawned, go get it <:pog:699999258547322950>") 
        let xp=14;
        let myinterval;
        let ok=1;
          if (ok===1) {
            const r= new MessageEmbed()
            .setDescription(`**Time remaining till despawns** ${xp}`)   
              .setColor('#ea2222')
             msg.channel.send(r)
                  .then(message => { //clearInterval(myinterval);
                      myinterval=setInterval(function() {
                        //console.log(".")
                       
                        xp=xp-2;  
                      const r= new MessageEmbed()
             .setDescription(`**Time remaining till despawns** ${xp}`)   
                          .setColor('#ea2222')
                        message.edit(r)
                          if(xp==0)
                        {clearInterval(myinterval);
                          message.delete();
                        }
                      }, 2000);
                      //clearInterval(myinterval);
                       
                      })
                    }
                  }
             });
      }
    });
  
  



/*
  
    client.login(process.env.token); 
const mongoose = require("mongoose");
const Report = require("./report.js")
mongoose.connect("mongodb://localhost/Reports");  

client.on('message', (msg) => {
  if(msg.content==="test mongoose 1234")
  {
const report = new Report({
  _id: mongoose.Types.ObjectId(),
  username: msg.author.username,
  userID: msg.author.id
});
report.save().then(result => console.log(result))
.catch(err =>console.log(err));
msg.reply("test")
  }
})
 */
