const { Client, Collection, Discord,MessageEmbed, MessageAttachment,Attachment} = require('discord.js');
const { config } = require('dotenv');
const weather = require ('weather-js');


const client = new Client({
  disableEveryone: true
});
//let ok=0;

client.commands = new Collection();
client.aliases = new Collection();


require('events').EventEmitter.defaultMaxListeners = 100; 

client.on("ready", () => {
  console.log(`Hi, ${client.user.username} is now online!`);
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
const fs = require("fs")
const rs = require("fs");
const es = require("fs");
/*
/////SERVER 1  Daddys Cave
const fs = require("fs");
client.msgs = require ("./test.json");
const rs = require("fs");
const es = require("fs");
client.msrs = require ("./Animetestfolder.json");

let tier=0;
client.on('message', async msg => {
    if(msg.channel.id==="700363955213959178")
    {   
        if(typeof client.msgs[msg.author.id]==="undefined")
    {
        client.msgs [msg.author.id]={
            tier1 : 0,
            tier2 : 0,
            tier3 : 0,
            tier4 : 0,
            tier5 : 0,
            tier6 : 0,
            tier7 : 0
        }
        fs.writeFile ("./ZenBot/test.json",JSON.stringify(client.msgs, null, 4),err=>{
            if(err) throw err;
        });
    }
   
    if((msg.channel.id==="700363955213959178") && (msg.author.id==="673362753489993749")){  
    msg.embeds.forEach((embed) => {
    let p='711680724192985108';
    let x='711668385540472912';
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tier===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);//ala care a luat      
        //const User = Client.User(idbest);
        //console.log(User); 
        client.msgs [idbest].tier1++;
        fs.writeFile ("./ZenBot/test.json",JSON.stringify(client.msgs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgs [idbest].tier7=client.msgs [idbest].tier1+client.msgs [idbest].tier2+client.msgs [idbest].tier3+client.msgs [idbest].tier4+client.msgs [idbest].tier5+client.msgs [idbest].tier6;
           fs.writeFile ("./ZenBot/test.json",JSON.stringify(client.msgs, null, 4),err=>{
            if(err) throw err;
        });
        //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
        let tttt=msg.embeds[0].description;
       tier=0;
      }
      if(tier===2)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);
         tier=0;
         client.msgs [idbest].tier2++;
        fs.writeFile ("./ZenBot/test.json",JSON.stringify(client.msgs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgs [idbest].tier7=client.msgs [idbest].tier1+client.msgs [idbest].tier2+client.msgs [idbest].tier3+client.msgs [idbest].tier4+client.msgs [idbest].tier5+client.msgs [idbest].tier6;
        fs.writeFile ("./ZenBot/test.json",JSON.stringify(client.msgs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         //const User = Client.User(idbest);
        //console.log(User); 
      
        }
        if(tier===3)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);        
         tier=0;
         client.msgs [idbest].tier3++;
        fs.writeFile ("./ZenBot/test.json",JSON.stringify(client.msgs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgs [idbest].tier7=client.msgs [idbest].tier1+client.msgs [idbest].tier2+client.msgs [idbest].tier3+client.msgs [idbest].tier4+client.msgs [idbest].tier5+client.msgs [idbest].tier6;
        fs.writeFile ("./ZenBot/test.json",JSON.stringify(client.msgs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         
  
      
        }
        if(tier===4)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);     
         tier=0;
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
       
        client.msgs [idbest].tier4++;
        fs.writeFile ("./ZenBot/test.json",JSON.stringify(client.msgs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgs [idbest].tier7=client.msgs [idbest].tier1+client.msgs [idbest].tier2+client.msgs [idbest].tier3+client.msgs [idbest].tier4+client.msgs [idbest].tier5+client.msgs [idbest].tier6;
           fs.writeFile ("./ZenBot/test.json",JSON.stringify(client.msgs, null, 4),err=>{
            if(err) throw err;
        });
      
        }
        if(tier===5)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);      
           tier=0;
         //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);  
         client.msgs [idbest].tier5++;
         fs.writeFile ("./ZenBot/test.json",JSON.stringify(client.msgs, null, 4),err=>{
             if(err) throw err;
         });
         client.msgs [idbest].tier7=client.msgs [idbest].tier1+client.msgs [idbest].tier2+client.msgs [idbest].tier3+client.msgs [idbest].tier4+client.msgs [idbest].tier5+client.msgs [idbest].tier6;
           fs.writeFile ("./ZenBot/test.json",JSON.stringify(client.msgs, null, 4),err=>{
             if(err) throw err;
         });
       
        }
        if(tier===6)
        {
            const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);        
          //console.log(idbest);
           tier=0;
           client.msgs [idbest].tier6++;
           fs.writeFile ("./ZenBot/test.json",JSON.stringify(client.msgs, null, 4),err=>{
               if(err) throw err;
           });
           client.msgs [idbest].tier7=client.msgs [idbest].tier1+client.msgs [idbest].tier2+client.msgs [idbest].tier3+client.msgs [idbest].tier4+client.msgs [idbest].tier5+client.msgs [idbest].tier6;
           fs.writeFile ("./ZenBot/test.json",JSON.stringify(client.msgs, null, 4),err=>{
               if(err) throw err;
           });
       
          }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    { tier=1;namess=msg.embeds[0].title;
    }
   if(msg.embeds[0].title.includes('Tier: 2'))
    { tier=2;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 3'))
     { tier=3;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 4'))
     {tier=4;namess=msg.embeds[0].title;
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {tier=5;namess=msg.embeds[0].title;
        console.log(`${msg.embeds[0].title} in server 1`)
    } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { tier=6;namess=msg.embeds[0].title;
      console.log(`${msg.embeds[0].title} in server 1`)
    }
      });
  }

     
    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
   { if(msg.content==="Zen!cards" || msg.contet==="Zen!cards")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .addField('<:t1:718765842891800646>``Tier : 1``',client.msgs[t].tier1,true)
      .addField('<:t2:718765892019814470>``Tier : 2``',client.msgs[t].tier2,true)
      .addField('<:t3:718765963448680448>``Tier : 3``',client.msgs[t].tier3,true)
      .addField('<:t4:718766099583205398>``Tier : 4``',client.msgs[t].tier4,true)
      .addField('<:t5:718766000824254486>``Tier : 5``',client.msgs[t].tier5,true)
      .addField('<:t6:718766066070716426>``Tier : 6``',client.msgs[t].tier6,true)
      
      .setDescription(`<@${t}> has claimed **${client.msgs[msg.author.id].tier7}** cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0373fc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    .addField('<:t1:718765842891800646>``Tier : 1``',client.msgs[t].tier1,true)
    .addField('<:t2:718765892019814470>``Tier : 2``',client.msgs[t].tier2,true)
    .addField('<:t3:718765963448680448>``Tier : 3``',client.msgs[t].tier3,true)
    .addField('<:t4:718766099583205398>``Tier : 4``',client.msgs[t].tier4,true)
    .addField('<:t5:718766000824254486>``Tier : 5``',client.msgs[t].tier5,true)
    .addField('<:t6:718766066070716426>``Tier : 6``',client.msgs[t].tier6,true)
    
    .setDescription(`${tt} has claimed **${client.msgs[t].tier7}** cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#0373fc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
   { if(msg.content==="Zen!showt1" || msg.contet==="Zen!showt1")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msgs[msg.author.id].tier1}** Tier: 1 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cccccc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msgs[t].tier1}** Tier: 1 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#cccccc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
   { if(msg.content==="Zen!showt2" || msg.contet==="Zen!showt2")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msgs[msg.author.id].tier2}** Tier: 2  cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#7aff8d')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msgs[t].tier2}** Tier: 2 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#7aff8d')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
    { if(msg.content==="Zen!showt3" || msg.contet==="Zen!showt3")
     {msg.delete();
     let t=msg.author.id;
         const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
       .setTimestamp()
       .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msgs[msg.author.id].tier3}** Tier: 3 cards`)
       .setFooter(`Server name: ${msg.guild.name}`)
         .setColor('#58a0e3')
         //msg.channel.send(r);
         return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }  
 
     if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
     {msg.delete();
     let tt =msg.mentions.members.first()|| msg.author;
     let t=tt.id;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
     .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msgs[t].tier3}** Tier: 3 cards`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#58a0e3')
       //msg.channel.send(r);
       await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }
     }
     if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt4" || msg.contet==="Zen!showt4")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msgs[msg.author.id].tier4}** Tier: 4 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ad58e3')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msgs[t].tier4}** Tier: 4 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ad58e3')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt5" || msg.contet==="Zen!showt5")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msgs[msg.author.id].tier5}** Tier: 5 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#fff200')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt5")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msgs[t].tier5}** Tier: 5 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#fff200')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
     { if(msg.content==="Zen!showt6" || msg.contet==="Zen!showt6")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msgs[msg.author.id].tier6}** Tier: 6 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msgs[t].tier6}** Tier: 6 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }

    if((msg.content==="Zen!lb")||(msg.content==="zen!lb"))
     {msg.delete();
         let board = Object.entries(client.msgs)
              .map(([key, val]) => ({id: key, ...val}))
              .sort((a, b) => b.tier7 - a.tier7);
     client.msrs=board;
        rs.writeFile ("./ZenBot/Animetestfolder.json",JSON.stringify(client.msrs, null, 4),err=>{
                if(err) throw err;
            });

            let _member1 = client.msrs[0].id;
            let _member11 = client.msrs[0].tier7;
            let _member2 = client.msrs[1].id;
            let _member22 = client.msrs[1].tier7;
            let _member3 = client.msrs[2].id;
            let _member33 = client.msrs[2].tier7;
            let _member4 = client.msrs[3].id;
            let _member44 = client.msrs[3].tier7;
            let _member5 = client.msrs[4].id;
            let _member55 = client.msrs[4].tier7;
            let _member6 = client.msrs[5].id;
            let _member66 = client.msrs[5].tier7;
            let _member7 = client.msrs[6].id;
            let _member77 = client.msrs[6].tier7;
            let _member8 = client.msrs[7].id;
            let _member88 = client.msrs[7].tier7;
            let _member9 = client.msrs[8].id;
            let _member99 = client.msrs[8].tier7;
            let _member10 = client.msrs[9].id;
            let _member1010 = client.msrs[9].tier7;

            
            const r= new MessageEmbed()
            .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
            .setTimestamp()
            .setTitle(`Leaderboard for ${msg.guild.name}`)
            //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
            .setDescription(`1)<@${_member1}> has claimed **${_member11}** cards \n 2)<@${_member2}> has claimed **${_member22}** cards \n 3)<@${_member3}> has claimed **${_member33}** cards \n 4)<@${_member4}> has claimed **${_member44}** cards \n 5)<@${_member5}> has claimed **${_member55}** cards \n 6)<@${_member6}> has claimed **${_member66}** cards \n 7)<@${_member7}> has claimed **${_member77}** cards \n 8)<@${_member8}> has claimed **${_member88}** cards \n 9)<@${_member9}> has claimed **${_member99}** cards \n 10)<@${_member10}> has claimed **${_member1010}** cards`)
            .setFooter(`Server name: ${msg.guild.name}`)
              .setColor('#0373fc')
              //msg.channel.send(r);
              await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))

    }
    if((msg.member.hasPermission("ADMINISTRATOR")) && (msg.content==="Zen!reset"))
        {  msg.reply("Done!");
            client.msgs= {}
            fs.writeFile ("./ZenBot/test.json",JSON.stringify(client.msgs, null, 4),err=>{
                if(err) throw err;
            });
        }
}
});

*/



/////SERVER 2 The Hangout  
const fsr = require("fs");
client.msggs = require ("./Sv2.json");
const rsr = require("fs");
client.msrrs = require ("./Lbsv2.json");
let tiier=0;
client.on('message', async msg => {
    if(msg.channel.id==="705253619133448262")
    {   
        if(typeof client.msggs[msg.author.id]==="undefined")
    {
        client.msggs [msg.author.id]={
            tier1 : 0,
            tier2 : 0,
            tier3 : 0,
            tier4 : 0,
            tier5 : 0,
            tier6 : 0,
            tier7 : 0
        }
        fsr.writeFile ("./ZenBot/Sv2.json",JSON.stringify(client.msggs, null, 4),err=>{
            if(err) throw err;
        });
    }
   
    if((msg.channel.id==="705253619133448262") && (msg.author.id==="673362753489993749")){  
    msg.embeds.forEach((embed) => {
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tiier===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);//ala care a luat      
        //const User = Client.User(idbest);
        //console.log(User); 
        client.msggs [idbest].tier1++;
        fsr.writeFile ("./ZenBot/Sv2.json",JSON.stringify(client.msggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggs [idbest].tier7=client.msggs [idbest].tier1+client.msggs [idbest].tier2+client.msggs [idbest].tier3+client.msggs [idbest].tier4+client.msggs [idbest].tier5+client.msggs [idbest].tier6;
           fsr.writeFile ("./ZenBot/Sv2.json",JSON.stringify(client.msggs, null, 4),err=>{
            if(err) throw err;
        });
        //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
        let tttt=msg.embeds[0].description;
       tiier=0;
      }
      if(tiier===2)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);
         tiier=0;
         client.msggs [idbest].tier2++;
        fsr.writeFile ("./ZenBot/Sv2.json",JSON.stringify(client.msggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggs [idbest].tier7=client.msggs [idbest].tier1+client.msggs [idbest].tier2+client.msggs [idbest].tier3+client.msggs [idbest].tier4+client.msggs [idbest].tier5+client.msggs [idbest].tier6;
        fsr.writeFile ("./ZenBot/Sv2.json",JSON.stringify(client.msggs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         //const User = Client.User(idbest);
        //console.log(User); 
      
        }
        if(tiier===3)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);        
         tier=0;
         client.msggs [idbest].tier3++;
        fsr.writeFile ("./ZenBot/Sv2.json",JSON.stringify(client.msggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggs [idbest].tier7=client.msggs [idbest].tier1+client.msggs [idbest].tier2+client.msggs [idbest].tier3+client.msggs [idbest].tier4+client.msggs [idbest].tier5+client.msggs [idbest].tier6;
        fsr.writeFile ("./ZenBot/Sv2.json",JSON.stringify(client.msggs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         
  
      
        }
        if(tiier===4)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);     
         tiier=0;
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
       
        client.msggs [idbest].tier4++;
        fsr.writeFile ("./ZenBot/Sv2.json",JSON.stringify(client.msggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggs [idbest].tier7=client.msggs [idbest].tier1+client.msggs [idbest].tier2+client.msggs [idbest].tier3+client.msggs [idbest].tier4+client.msggs [idbest].tier5+client.msggs [idbest].tier6;
           fsr.writeFile ("./ZenBot/Sv2.json",JSON.stringify(client.msggs, null, 4),err=>{
            if(err) throw err;
        });
      
        }
        if(tiier===5)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);      
           tiier=0;
         //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);  
         client.msggs [idbest].tier5++;
         fsr.writeFile ("./ZenBot/Sv2.json",JSON.stringify(client.msggs, null, 4),err=>{
             if(err) throw err;
         });
         client.msggs [idbest].tier7=client.msggs [idbest].tier1+client.msggs [idbest].tier2+client.msggs [idbest].tier3+client.msggs [idbest].tier4+client.msggs [idbest].tier5+client.msggs [idbest].tier6;
           fsr.writeFile ("./ZenBot/Sv2.json",JSON.stringify(client.msggs, null, 4),err=>{
             if(err) throw err;
         });
       
        }
        if(tiier===6)
        {
            const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);        
          //console.log(idbest);
           tiier=0;
           client.msggs [idbest].tier6++;
           fsr.writeFile ("./ZenBot/Sv2.json",JSON.stringify(client.msggs, null, 4),err=>{
               if(err) throw err;
           });
           client.msggs [idbest].tier7=client.msggs [idbest].tier1+client.msggs [idbest].tier2+client.msggs [idbest].tier3+client.msggs [idbest].tier4+client.msggs [idbest].tier5+client.msggs [idbest].tier6;
           fsr.writeFile ("./ZenBot/Sv2.json",JSON.stringify(client.msggs, null, 4),err=>{
               if(err) throw err;
           });
       
          }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    { tiier=1;namess=msg.embeds[0].title;
    }
   if(msg.embeds[0].title.includes('Tier: 2'))
    { tiier=2;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 3'))
     { tiier=3;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 4'))
     {tiier=4;namess=msg.embeds[0].title;
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {tiier=5;namess=msg.embeds[0].title;
        console.log(`${msg.embeds[0].title} in server 1`)
    } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { tiier=6;namess=msg.embeds[0].title;
      console.log(`${msg.embeds[0].title} in server 1`)
    }
      });
  }

     
    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
   { if(msg.content==="Zen!cards" || msg.contet==="Zen!cards")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .addField('<:t1:718765842891800646>``Tier : 1``',client.msggs[t].tier1,true)
      .addField('<:t2:718765892019814470>``Tier : 2``',client.msggs[t].tier2,true)
      .addField('<:t3:718765963448680448>``Tier : 3``',client.msggs[t].tier3,true)
      .addField('<:t4:718766099583205398>``Tier : 4``',client.msggs[t].tier4,true)
      .addField('<:t5:718766000824254486>``Tier : 5``',client.msggs[t].tier5,true)
      .addField('<:t6:718766066070716426>``Tier : 6``',client.msggs[t].tier6,true)
      
      .setDescription(`<@${t}> has claimed **${client.msggs[msg.author.id].tier7}** cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0373fc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    .addField('<:t1:718765842891800646>``Tier : 1``',client.msggs[t].tier1,true)
    .addField('<:t2:718765892019814470>``Tier : 2``',client.msggs[t].tier2,true)
    .addField('<:t3:718765963448680448>``Tier : 3``',client.msggs[t].tier3,true)
    .addField('<:t4:718766099583205398>``Tier : 4``',client.msggs[t].tier4,true)
    .addField('<:t5:718766000824254486>``Tier : 5``',client.msggs[t].tier5,true)
    .addField('<:t6:718766066070716426>``Tier : 6``',client.msggs[t].tier6,true)
    
    .setDescription(`${tt} has claimed **${client.msggs[t].tier7}** cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#0373fc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
   { if(msg.content==="Zen!showt1" || msg.contet==="Zen!showt1")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msggs[msg.author.id].tier1}** Tier: 1 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cccccc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msggs[t].tier1}** Tier: 1 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#cccccc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
   { if(msg.content==="Zen!showt2" || msg.contet==="Zen!showt2")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msggs[msg.author.id].tier2}** Tier: 2  cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#7aff8d')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msggs[t].tier2}** Tier: 2 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#7aff8d')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
    { if(msg.content==="Zen!showt3" || msg.contet==="Zen!showt3")
     {msg.delete();
     let t=msg.author.id;
         const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
       .setTimestamp()
       .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msggs[msg.author.id].tier3}** Tier: 3 cards`)
       .setFooter(`Server name: ${msg.guild.name}`)
         .setColor('#58a0e3')
         //msg.channel.send(r);
         return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }  
 
     if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
     {msg.delete();
     let tt =msg.mentions.members.first()|| msg.author;
     let t=tt.id;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
     .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msggs[t].tier3}** Tier: 3 cards`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#58a0e3')
       //msg.channel.send(r);
       await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }
     }
     if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt4" || msg.contet==="Zen!showt4")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msggs[msg.author.id].tier4}** Tier: 4 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ad58e3')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msggs[t].tier4}** Tier: 4 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ad58e3')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt5" || msg.contet==="Zen!showt5")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msggs[msg.author.id].tier5}** Tier: 5 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#fff200')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt5")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msggs[t].tier5}** Tier: 5 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#fff200')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
     { if(msg.content==="Zen!showt6" || msg.contet==="Zen!showt6")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msggs[msg.author.id].tier6}** Tier: 6 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msggs[t].tier6}** Tier: 6 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }

    if((msg.content==="Zen!lb")||(msg.content==="zen!lb"))
     {msg.delete();
         let board = Object.entries(client.msggs)
              .map(([key, val]) => ({id: key, ...val}))
              .sort((a, b) => b.tier7 - a.tier7);
     client.msrrs=board;
        rsr.writeFile ("./ZenBot/Lbsv2.json",JSON.stringify(client.msrrs, null, 4),err=>{
                if(err) throw err;
            });

            let _member1 = client.msrrs[0].id;
            let _member11 = client.msrrs[0].tier7;
            let _member2 = client.msrrs[1].id;
            let _member22 = client.msrrs[1].tier7;
            let _member3 = client.msrrs[2].id;
            let _member33 = client.msrrs[2].tier7;
            let _member4 = client.msrrs[3].id;
            let _member44 = client.msrrs[3].tier7;
            let _member5 = client.msrrs[4].id;
            let _member55 = client.msrrs[4].tier7;
            let _member6 = client.msrrs[5].id;
            let _member66 = client.msrrs[5].tier7;
            let _member7 = client.msrrs[6].id;
            let _member77 = client.msrrs[6].tier7;
            let _member8 = client.msrrs[7].id;
            let _member88 = client.msrrs[7].tier7;
            let _member9 = client.msrrs[8].id;
            let _member99 = client.msrrs[8].tier7;
            let _member10 = client.msrrs[9].id;
            let _member1010 = client.msrrs[9].tier7;

            
            const r= new MessageEmbed()
            .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
            .setTimestamp()
            .setTitle(`Leaderboard for ${msg.guild.name}`)
            //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
            .setDescription(`1)<@${_member1}> has claimed **${_member11}** cards \n 2)<@${_member2}> has claimed **${_member22}** cards \n 3)<@${_member3}> has claimed **${_member33}** cards \n 4)<@${_member4}> has claimed **${_member44}** cards \n 5)<@${_member5}> has claimed **${_member55}** cards \n 6)<@${_member6}> has claimed **${_member66}** cards \n 7)<@${_member7}> has claimed **${_member77}** cards \n 8)<@${_member8}> has claimed **${_member88}** cards \n 9)<@${_member9}> has claimed **${_member99}** cards \n 10)<@${_member10}> has claimed **${_member1010}** cards`)
            .setFooter(`Server name: ${msg.guild.name}`)
              .setColor('#0373fc')
              //msg.channel.send(r);
              await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))

    }
    if((msg.member.hasPermission("ADMINISTRATOR")) && (msg.content==="Zen!reset"))
        {  msg.reply("Done!");
            client.msggs= {}
            fsr.writeFile ("./ZenBot/Sv2.json",JSON.stringify(client.msggs, null, 4),err=>{
                if(err) throw err;
            });
        }
}

});







/////SERVER 3 Elite Squad  
const fssr = require("fs");
client.msgggs = require ("./Sv4.json");
const rssr = require("fs");
client.msrrrs = require ("./Lbsv4.json");
let tiiier=0;
client.on('message', async msg => {
    if(msg.channel.id==="707672026407501824")
    {   
        if(typeof client.msgggs[msg.author.id]==="undefined")
    {
        client.msgggs [msg.author.id]={
            tier1 : 0,
            tier2 : 0,
            tier3 : 0,
            tier4 : 0,
            tier5 : 0,
            tier6 : 0,
            tier7 : 0
        }
        fssr.writeFile ("./ZenBot/Sv4.json",JSON.stringify(client.msgggs, null, 4),err=>{
            if(err) throw err;
        });
    }
   
    if((msg.channel.id==="707672026407501824") && (msg.author.id==="673362753489993749")){  
    msg.embeds.forEach((embed) => {
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tiiier===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);//ala care a luat      
        //const User = Client.User(idbest);
        //console.log(User); 
        client.msgggs [idbest].tier1++;
        fssr.writeFile ("./ZenBot/Sv4.json",JSON.stringify(client.msgggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgggs [idbest].tier7=client.msgggs [idbest].tier1+client.msgggs [idbest].tier2+client.msgggs [idbest].tier3+client.msgggs [idbest].tier4+client.msgggs [idbest].tier5+client.msgggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Sv4.json",JSON.stringify(client.msgggs, null, 4),err=>{
            if(err) throw err;
        });
        //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
        let tttt=msg.embeds[0].description;
       tiiier=0;
      }
      if(tiiier===2)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);
         tiiier=0;
         client.msgggs [idbest].tier2++;
        fssr.writeFile ("./ZenBot/Sv4.json",JSON.stringify(client.msgggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgggs [idbest].tier7=client.msgggs [idbest].tier1+client.msgggs [idbest].tier2+client.msgggs [idbest].tier3+client.msgggs [idbest].tier4+client.msgggs [idbest].tier5+client.msgggs [idbest].tier6;
        fssr.writeFile ("./ZenBot/Sv4.json",JSON.stringify(client.msgggs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         //const User = Client.User(idbest);
        //console.log(User); 
      
        }
        if(tiiier===3)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);        
         tier=0;
         client.msgggs [idbest].tier3++;
        fssr.writeFile ("./ZenBot/Sv4.json",JSON.stringify(client.msgggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgggs [idbest].tier7=client.msgggs [idbest].tier1+client.msgggs [idbest].tier2+client.msgggs [idbest].tier3+client.msgggs [idbest].tier4+client.msgggs [idbest].tier5+client.msgggs [idbest].tier6;
        fssr.writeFile ("./ZenBot/Sv4.json",JSON.stringify(client.msgggs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         
  
      
        }
        if(tiiier===4)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);     
         tiiier=0;
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
       
        client.msgggs [idbest].tier4++;
        fssr.writeFile ("./ZenBot/Sv4.json",JSON.stringify(client.msgggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgggs [idbest].tier7=client.msgggs [idbest].tier1+client.msgggs [idbest].tier2+client.msgggs [idbest].tier3+client.msgggs [idbest].tier4+client.msgggs [idbest].tier5+client.msgggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Sv4.json",JSON.stringify(client.msgggs, null, 4),err=>{
            if(err) throw err;
        });
      
        }
        if(tiiier===5)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);      
           tiiier=0;
         //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);  
         client.msgggs [idbest].tier5++;
         fssr.writeFile ("./ZenBot/Sv4.json",JSON.stringify(client.msgggs, null, 4),err=>{
             if(err) throw err;
         });
         client.msgggs [idbest].tier7=client.msgggs [idbest].tier1+client.msgggs [idbest].tier2+client.msgggs [idbest].tier3+client.msgggs [idbest].tier4+client.msgggs [idbest].tier5+client.msgggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Sv4.json",JSON.stringify(client.msgggs, null, 4),err=>{
             if(err) throw err;
         });
       
        }
        if(tiiier===6)
        {
            const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);        
          //console.log(idbest);
           tiiier=0;
           client.msgggs [idbest].tier6++;
           fssr.writeFile ("./ZenBot/Sv4.json",JSON.stringify(client.msgggs, null, 4),err=>{
               if(err) throw err;
           });
           client.msgggs [idbest].tier7=client.msgggs [idbest].tier1+client.msgggs [idbest].tier2+client.msgggs [idbest].tier3+client.msgggs [idbest].tier4+client.msgggs [idbest].tier5+client.msgggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Sv4.json",JSON.stringify(client.msgggs, null, 4),err=>{
               if(err) throw err;
           });
       
          }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    { tiiier=1;namess=msg.embeds[0].title;
    }
   if(msg.embeds[0].title.includes('Tier: 2'))
    { tiiier=2;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 3'))
     { tiiier=3;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 4'))
     {tiiier=4;namess=msg.embeds[0].title;
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {tiiier=5;namess=msg.embeds[0].title;
        console.log(`${msg.embeds[0].title} in server 1`)
    } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { tiiier=6;namess=msg.embeds[0].title;
      console.log(`${msg.embeds[0].title} in server 1`)
    }
      });
  }

     
    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
   { if(msg.content==="Zen!cards" || msg.contet==="Zen!cards")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .addField('<:t1:718765842891800646>``Tier : 1``',client.msgggs[t].tier1,true)
      .addField('<:t2:718765892019814470>``Tier : 2``',client.msgggs[t].tier2,true)
      .addField('<:t3:718765963448680448>``Tier : 3``',client.msgggs[t].tier3,true)
      .addField('<:t4:718766099583205398>``Tier : 4``',client.msgggs[t].tier4,true)
      .addField('<:t5:718766000824254486>``Tier : 5``',client.msgggs[t].tier5,true)
      .addField('<:t6:718766066070716426>``Tier : 6``',client.msgggs[t].tier6,true)
      
      .setDescription(`<@${t}> has claimed **${client.msgggs[msg.author.id].tier7}** cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0373fc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    .addField('<:t1:718765842891800646>``Tier : 1``',client.msgggs[t].tier1,true)
    .addField('<:t2:718765892019814470>``Tier : 2``',client.msgggs[t].tier2,true)
    .addField('<:t3:718765963448680448>``Tier : 3``',client.msgggs[t].tier3,true)
    .addField('<:t4:718766099583205398>``Tier : 4``',client.msgggs[t].tier4,true)
    .addField('<:t5:718766000824254486>``Tier : 5``',client.msgggs[t].tier5,true)
    .addField('<:t6:718766066070716426>``Tier : 6``',client.msgggs[t].tier6,true)
    
    .setDescription(`${tt} has claimed **${client.msgggs[t].tier7}** cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#0373fc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
   { if(msg.content==="Zen!showt1" || msg.contet==="Zen!showt1")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msgggs[msg.author.id].tier1}** Tier: 1 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cccccc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msgggs[t].tier1}** Tier: 1 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#cccccc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
   { if(msg.content==="Zen!showt2" || msg.contet==="Zen!showt2")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msgggs[msg.author.id].tier2}** Tier: 2  cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#7aff8d')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msgggs[t].tier2}** Tier: 2 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#7aff8d')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
    { if(msg.content==="Zen!showt3" || msg.contet==="Zen!showt3")
     {msg.delete();
     let t=msg.author.id;
         const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
       .setTimestamp()
       .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msgggs[msg.author.id].tier3}** Tier: 3 cards`)
       .setFooter(`Server name: ${msg.guild.name}`)
         .setColor('#58a0e3')
         //msg.channel.send(r);
         return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }  
 
     if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
     {msg.delete();
     let tt =msg.mentions.members.first()|| msg.author;
     let t=tt.id;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
     .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msgggs[t].tier3}** Tier: 3 cards`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#58a0e3')
       //msg.channel.send(r);
       await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }
     }
     if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt4" || msg.contet==="Zen!showt4")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msgggs[msg.author.id].tier4}** Tier: 4 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ad58e3')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msgggs[t].tier4}** Tier: 4 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ad58e3')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt5" || msg.contet==="Zen!showt5")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msgggs[msg.author.id].tier5}** Tier: 5 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#fff200')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt5")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msgggs[t].tier5}** Tier: 5 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#fff200')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
     { if(msg.content==="Zen!showt6" || msg.contet==="Zen!showt6")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msgggs[msg.author.id].tier6}** Tier: 6 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msgggs[t].tier6}** Tier: 6 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }

    if((msg.content==="Zen!lb")||(msg.content==="zen!lb"))
     {msg.delete();
         let board = Object.entries(client.msgggs)
              .map(([key, val]) => ({id: key, ...val}))
              .sort((a, b) => b.tier7 - a.tier7);
     client.msrrrs=board;
        rssr.writeFile ("./ZenBot/Lbsv4.json",JSON.stringify(client.msrrrs, null, 4),err=>{
                if(err) throw err;
            });

            let _member1 = client.msrrrs[0].id;
            let _member11 = client.msrrrs[0].tier7;
            let _member2 = client.msrrrs[1].id;
            let _member22 = client.msrrrs[1].tier7;
            let _member3 = client.msrrrs[2].id;
            let _member33 = client.msrrrs[2].tier7;
            let _member4 = client.msrrrs[3].id;
            let _member44 = client.msrrrs[3].tier7;
            let _member5 = client.msrrrs[4].id;
            let _member55 = client.msrrrs[4].tier7;
            let _member6 = client.msrrrs[5].id;
            let _member66 = client.msrrrs[5].tier7;
            let _member7 = client.msrrrs[6].id;
            let _member77 = client.msrrrs[6].tier7;
            let _member8 = client.msrrrs[7].id;
            let _member88 = client.msrrrs[7].tier7;
            let _member9 = client.msrrrs[8].id;
            let _member99 = client.msrrrs[8].tier7;
            let _member10 = client.msrrrs[9].id;
            let _member1010 = client.msrrrs[9].tier7;

            
            const r= new MessageEmbed()
            .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
            .setTimestamp()
            .setTitle(`Leaderboard for ${msg.guild.name}`)
            //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
            .setDescription(`1)<@${_member1}> has claimed **${_member11}** cards \n 2)<@${_member2}> has claimed **${_member22}** cards \n 3)<@${_member3}> has claimed **${_member33}** cards \n 4)<@${_member4}> has claimed **${_member44}** cards \n 5)<@${_member5}> has claimed **${_member55}** cards \n 6)<@${_member6}> has claimed **${_member66}** cards \n 7)<@${_member7}> has claimed **${_member77}** cards \n 8)<@${_member8}> has claimed **${_member88}** cards \n 9)<@${_member9}> has claimed **${_member99}** cards \n 10)<@${_member10}> has claimed **${_member1010}** cards`)
            .setFooter(`Server name: ${msg.guild.name}`)
              .setColor('#0373fc')
              //msg.channel.send(r);
              await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))

    }
    if((msg.member.hasPermission("ADMINISTRATOR")) && (msg.content==="Zen!reset"))
        {  msg.reply("Done!");
            client.msgggs= {}
            fssr.writeFile ("./ZenBot/Sv4.json",JSON.stringify(client.msgggs, null, 4),err=>{
                if(err) throw err;
            });
        }
}

});



/////SERVER 4 EGC  
//const fssr = require("fs");
client.msggggs = require ("./EGC.json");
//const rssr = require("fs");
client.msrrrrs = require ("./EGClb.json");
let tiiiier=0;
client.on('message', async msg => {
    if(msg.channel.id==="711664374997319741")
    {   
        if(typeof client.msggggs[msg.author.id]==="undefined")
    {
        client.msggggs [msg.author.id]={
            tier1 : 0,
            tier2 : 0,
            tier3 : 0,
            tier4 : 0,
            tier5 : 0,
            tier6 : 0,
            tier7 : 0
        }
        fssr.writeFile ("./ZenBot/EGC.json",JSON.stringify(client.msggggs, null, 4),err=>{
            if(err) throw err;
        });
    }
   
    if((msg.channel.id==="711664374997319741") && (msg.author.id==="673362753489993749")){  
    msg.embeds.forEach((embed) => {
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tiiiier===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);//ala care a luat      
        //const User = Client.User(idbest);
        //console.log(User); 
        client.msggggs [idbest].tier1++;
        fssr.writeFile ("./ZenBot/EGC.json",JSON.stringify(client.msggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggggs [idbest].tier7=client.msggggs [idbest].tier1+client.msggggs [idbest].tier2+client.msggggs [idbest].tier3+client.msggggs [idbest].tier4+client.msggggs [idbest].tier5+client.msggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/EGC.json",JSON.stringify(client.msggggs, null, 4),err=>{
            if(err) throw err;
        });
        //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
        let tttt=msg.embeds[0].description;
       tiiiier=0;
      }
      if(tiiiier===2)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);
         tiiiier=0;
         client.msggggs [idbest].tier2++;
        fssr.writeFile ("./ZenBot/EGC.json",JSON.stringify(client.msggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggggs [idbest].tier7=client.msggggs [idbest].tier1+client.msggggs [idbest].tier2+client.msggggs [idbest].tier3+client.msggggs [idbest].tier4+client.msggggs [idbest].tier5+client.msggggs [idbest].tier6;
        fssr.writeFile ("./ZenBot/EGC.json",JSON.stringify(client.msggggs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         //const User = Client.User(idbest);
        //console.log(User); 
      
        }
        if(tiiiier===3)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);        
         tier=0;
         client.msggggs [idbest].tier3++;
        fssr.writeFile ("./ZenBot/EGC.json",JSON.stringify(client.msggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggggs [idbest].tier7=client.msggggs [idbest].tier1+client.msggggs [idbest].tier2+client.msggggs [idbest].tier3+client.msggggs [idbest].tier4+client.msggggs [idbest].tier5+client.msggggs [idbest].tier6;
        fssr.writeFile ("./ZenBot/EGC.json",JSON.stringify(client.msggggs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         
  
      
        }
        if(tiiiier===4)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);     
         tiiiier=0;
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
       
        client.msggggs [idbest].tier4++;
        fssr.writeFile ("./ZenBot/EGC.json",JSON.stringify(client.msggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggggs [idbest].tier7=client.msggggs [idbest].tier1+client.msggggs [idbest].tier2+client.msggggs [idbest].tier3+client.msggggs [idbest].tier4+client.msggggs [idbest].tier5+client.msggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/EGC.json",JSON.stringify(client.msggggs, null, 4),err=>{
            if(err) throw err;
        });
      
        }
        if(tiiiier===5)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);      
           tiiiier=0;
         //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);  
         client.msggggs [idbest].tier5++;
         fssr.writeFile ("./ZenBot/EGC.json",JSON.stringify(client.msggggs, null, 4),err=>{
             if(err) throw err;
         });
         client.msggggs [idbest].tier7=client.msggggs [idbest].tier1+client.msggggs [idbest].tier2+client.msggggs [idbest].tier3+client.msggggs [idbest].tier4+client.msggggs [idbest].tier5+client.msggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/EGC.json",JSON.stringify(client.msggggs, null, 4),err=>{
             if(err) throw err;
         });
       
        }
        if(tiiiier===6)
        {
            const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);        
          //console.log(idbest);
           tiiiier=0;
           client.msggggs [idbest].tier6++;
           fssr.writeFile ("./ZenBot/EGC.json",JSON.stringify(client.msggggs, null, 4),err=>{
               if(err) throw err;
           });
           client.msggggs [idbest].tier7=client.msggggs [idbest].tier1+client.msggggs [idbest].tier2+client.msggggs [idbest].tier3+client.msggggs [idbest].tier4+client.msggggs [idbest].tier5+client.msggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/EGC.json",JSON.stringify(client.msggggs, null, 4),err=>{
               if(err) throw err;
           });
       
          }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    { tiiiier=1;namess=msg.embeds[0].title;
    }
   if(msg.embeds[0].title.includes('Tier: 2'))
    { tiiiier=2;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 3'))
     { tiiiier=3;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 4'))
     {tiiiier=4;namess=msg.embeds[0].title;
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {tiiiier=5;namess=msg.embeds[0].title;
        console.log(`${msg.embeds[0].title} in server 1`)
    } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { tiiiier=6;namess=msg.embeds[0].title;
      console.log(`${msg.embeds[0].title} in server 1`)
    }
      });
  }

     
    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
   { if(msg.content==="Zen!cards" || msg.contet==="Zen!cards")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .addField('<:t1:718765842891800646>``Tier : 1``',client.msggggs[t].tier1,true)
      .addField('<:t2:718765892019814470>``Tier : 2``',client.msggggs[t].tier2,true)
      .addField('<:t3:718765963448680448>``Tier : 3``',client.msggggs[t].tier3,true)
      .addField('<:t4:718766099583205398>``Tier : 4``',client.msggggs[t].tier4,true)
      .addField('<:t5:718766000824254486>``Tier : 5``',client.msggggs[t].tier5,true)
      .addField('<:t6:718766066070716426>``Tier : 6``',client.msggggs[t].tier6,true)
      
      .setDescription(`<@${t}> has claimed **${client.msggggs[msg.author.id].tier7}** cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0373fc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    .addField('<:t1:718765842891800646>``Tier : 1``',client.msggggs[t].tier1,true)
    .addField('<:t2:718765892019814470>``Tier : 2``',client.msggggs[t].tier2,true)
    .addField('<:t3:718765963448680448>``Tier : 3``',client.msggggs[t].tier3,true)
    .addField('<:t4:718766099583205398>``Tier : 4``',client.msggggs[t].tier4,true)
    .addField('<:t5:718766000824254486>``Tier : 5``',client.msggggs[t].tier5,true)
    .addField('<:t6:718766066070716426>``Tier : 6``',client.msggggs[t].tier6,true)
    
    .setDescription(`${tt} has claimed **${client.msggggs[t].tier7}** cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#0373fc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
   { if(msg.content==="Zen!showt1" || msg.contet==="Zen!showt1")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msggggs[msg.author.id].tier1}** Tier: 1 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cccccc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msggggs[t].tier1}** Tier: 1 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#cccccc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
   { if(msg.content==="Zen!showt2" || msg.contet==="Zen!showt2")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msggggs[msg.author.id].tier2}** Tier: 2  cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#7aff8d')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msggggs[t].tier2}** Tier: 2 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#7aff8d')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
    { if(msg.content==="Zen!showt3" || msg.contet==="Zen!showt3")
     {msg.delete();
     let t=msg.author.id;
         const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
       .setTimestamp()
       .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msggggs[msg.author.id].tier3}** Tier: 3 cards`)
       .setFooter(`Server name: ${msg.guild.name}`)
         .setColor('#58a0e3')
         //msg.channel.send(r);
         return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }  
 
     if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
     {msg.delete();
     let tt =msg.mentions.members.first()|| msg.author;
     let t=tt.id;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
     .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msggggs[t].tier3}** Tier: 3 cards`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#58a0e3')
       //msg.channel.send(r);
       await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }
     }
     if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt4" || msg.contet==="Zen!showt4")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msggggs[msg.author.id].tier4}** Tier: 4 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ad58e3')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msggggs[t].tier4}** Tier: 4 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ad58e3')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt5" || msg.contet==="Zen!showt5")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msggggs[msg.author.id].tier5}** Tier: 5 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#fff200')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt5")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msggggs[t].tier5}** Tier: 5 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#fff200')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
     { if(msg.content==="Zen!showt6" || msg.contet==="Zen!showt6")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msggggs[msg.author.id].tier6}** Tier: 6 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msggggs[t].tier6}** Tier: 6 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }

    if((msg.content==="Zen!lb")||(msg.content==="zen!lb"))
     {msg.delete();
         let board = Object.entries(client.msggggs)
              .map(([key, val]) => ({id: key, ...val}))
              .sort((a, b) => b.tier7 - a.tier7);
     client.msrrrrs=board;
        rssr.writeFile ("./ZenBot/EGClb.json",JSON.stringify(client.msrrrrs, null, 4),err=>{
                if(err) throw err;
            });

            let _member1 = client.msrrrrs[0].id;
            let _member11 = client.msrrrrs[0].tier7;
            let _member2 = client.msrrrrs[1].id;
            let _member22 = client.msrrrrs[1].tier7;
            let _member3 = client.msrrrrs[2].id;
            let _member33 = client.msrrrrs[2].tier7;
            let _member4 = client.msrrrrs[3].id;
            let _member44 = client.msrrrrs[3].tier7;
            let _member5 = client.msrrrrs[4].id;
            let _member55 = client.msrrrrs[4].tier7;
            let _member6 = client.msrrrrs[5].id;
            let _member66 = client.msrrrrs[5].tier7;
            let _member7 = client.msrrrrs[6].id;
            let _member77 = client.msrrrrs[6].tier7;
            let _member8 = client.msrrrrs[7].id;
            let _member88 = client.msrrrrs[7].tier7;
            let _member9 = client.msrrrrs[8].id;
            let _member99 = client.msrrrrs[8].tier7;
            let _member10 = client.msrrrrs[9].id;
            let _member1010 = client.msrrrrs[9].tier7;

            
            const r= new MessageEmbed()
            .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
            .setTimestamp()
            .setTitle(`Leaderboard for ${msg.guild.name}`)
            //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
            .setDescription(`1)<@${_member1}> has claimed **${_member11}** cards \n 2)<@${_member2}> has claimed **${_member22}** cards \n 3)<@${_member3}> has claimed **${_member33}** cards \n 4)<@${_member4}> has claimed **${_member44}** cards \n 5)<@${_member5}> has claimed **${_member55}** cards \n 6)<@${_member6}> has claimed **${_member66}** cards \n 7)<@${_member7}> has claimed **${_member77}** cards \n 8)<@${_member8}> has claimed **${_member88}** cards \n 9)<@${_member9}> has claimed **${_member99}** cards \n 10)<@${_member10}> has claimed **${_member1010}** cards`)
            .setFooter(`Server name: ${msg.guild.name}`)
              .setColor('#0373fc')
              //msg.channel.send(r);
              await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))

    }
    if((msg.member.hasPermission("ADMINISTRATOR")) && (msg.content==="Zen!reset"))
        {  msg.reply("Done!");
            client.msggggs= {}
            fssr.writeFile ("./ZenBot/EGC.json",JSON.stringify(client.msggggs, null, 4),err=>{
                if(err) throw err;
            });
        }
}

});








/////SERVER 15 Hell  
//const fssr = require("fs");
client.msgggggs = require ("./Hell.json");
//const rssr = require("fs");
client.msrrrrrs = require ("./Helllb.json");
let tiiiiier=0;
client.on('message', async msg => {
    if(msg.channel.id==="701347899639988254")
    {   
        if(typeof client.msgggggs[msg.author.id]==="undefined")
    {
        client.msgggggs [msg.author.id]={
            tier1 : 0,
            tier2 : 0,
            tier3 : 0,
            tier4 : 0,
            tier5 : 0,
            tier6 : 0,
            tier7 : 0
        }
        fssr.writeFile ("./ZenBot/Hell.json",JSON.stringify(client.msgggggs, null, 4),err=>{
            if(err) throw err;
        });
    }
   
    if((msg.channel.id==="701347899639988254") && (msg.author.id==="673362753489993749")){  
    msg.embeds.forEach((embed) => {
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tiiiiier===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);//ala care a luat      
        //const User = Client.User(idbest);
        //console.log(User); 
        client.msgggggs [idbest].tier1++;
        fssr.writeFile ("./ZenBot/Hell.json",JSON.stringify(client.msgggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgggggs [idbest].tier7=client.msgggggs [idbest].tier1+client.msgggggs [idbest].tier2+client.msgggggs [idbest].tier3+client.msgggggs [idbest].tier4+client.msgggggs [idbest].tier5+client.msgggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Hell.json",JSON.stringify(client.msgggggs, null, 4),err=>{
            if(err) throw err;
        });
        //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
        let tttt=msg.embeds[0].description;
       tiiiiier=0;
      }
      if(tiiiiier===2)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);
         tiiiiier=0;
         client.msgggggs [idbest].tier2++;
        fssr.writeFile ("./ZenBot/Hell.json",JSON.stringify(client.msgggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgggggs [idbest].tier7=client.msgggggs [idbest].tier1+client.msgggggs [idbest].tier2+client.msgggggs [idbest].tier3+client.msgggggs [idbest].tier4+client.msgggggs [idbest].tier5+ client.msgggggs[idbest].tier6;
        fssr.writeFile ("./ZenBot/Hell.json",JSON.stringify(client.msgggggs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         //const User = Client.User(idbest);
        //console.log(User); 
      
        }
        if(tiiiiier===3)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);        
         tier=0;
         client.msgggggs [idbest].tier3++;
        fssr.writeFile ("./ZenBot/Hell.json",JSON.stringify(client.msgggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgggggs [idbest].tier7=client.msgggggs [idbest].tier1+client.msgggggs [idbest].tier2+client.msgggggs [idbest].tier3+client.msgggggs [idbest].tier4+client.msgggggs [idbest].tier5+client.msgggggs [idbest].tier6;
        fssr.writeFile ("./ZenBot/Hell.json",JSON.stringify(client.msgggggs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         
  
      
        }
        if(tiiiiier===4)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);     
         tiiiiier=0;
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
       
        client.msgggggs [idbest].tier4++;
        fssr.writeFile ("./ZenBot/Hell.json",JSON.stringify(client.msgggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgggggs [idbest].tier7=client.msgggggs [idbest].tier1+client.msgggggs [idbest].tier2+client.msgggggs [idbest].tier3+client.msgggggs [idbest].tier4+client.msgggggs [idbest].tier5+client.msgggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Hell.json",JSON.stringify(client.msgggggs, null, 4),err=>{
            if(err) throw err;
        });
      
        }
        if(tiiiiier===5)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);      
           tiiiiier=0;
         //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);  
         client.msgggggs [idbest].tier5++;
         fssr.writeFile ("./ZenBot/Hell.json",JSON.stringify(client.msgggggs, null, 4),err=>{
             if(err) throw err;
         });
         client.msgggggs [idbest].tier7=client.msgggggs [idbest].tier1+client.msgggggs [idbest].tier2+client.msgggggs [idbest].tier3+client.msgggggs [idbest].tier4+client.msgggggs [idbest].tier5+client.msgggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Hell.json",JSON.stringify(client.msgggggs, null, 4),err=>{
             if(err) throw err;
         });
       
        }
        if(tiiiiier===6)
        {
            const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);        
          //console.log(idbest);
           tiiiiier=0;
           client.msgggggs [idbest].tier6++;
           fssr.writeFile ("./ZenBot/Hell.json",JSON.stringify(client.msgggggs, null, 4),err=>{
               if(err) throw err;
           });
           client.msgggggs [idbest].tier7=client.msgggggs [idbest].tier1+client.msgggggs [idbest].tier2+client.msgggggs [idbest].tier3+client.msgggggs [idbest].tier4+client.msgggggs [idbest].tier5+client.msgggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Hell.json",JSON.stringify(client.msgggggs, null, 4),err=>{
               if(err) throw err;
           });
       
          }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    { tiiiiier=1;namess=msg.embeds[0].title;
    }
   if(msg.embeds[0].title.includes('Tier: 2'))
    { tiiiiier=2;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 3'))
     { tiiiiier=3;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 4'))
     {tiiiiier=4;namess=msg.embeds[0].title;
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {tiiiiier=5;namess=msg.embeds[0].title;
        console.log(`${msg.embeds[0].title} in server 1`)
    } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { tiiiiier=6;namess=msg.embeds[0].title;
      console.log(`${msg.embeds[0].title} in server 1`)
    }
      });
  }

     
    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
   { if(msg.content==="Zen!cards" || msg.contet==="Zen!cards")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .addField('<:t1:718765842891800646>``Tier : 1``',client.msgggggs[t].tier1,true)
      .addField('<:t2:718765892019814470>``Tier : 2``',client.msgggggs[t].tier2,true)
      .addField('<:t3:718765963448680448>``Tier : 3``',client.msgggggs[t].tier3,true)
      .addField('<:t4:718766099583205398>``Tier : 4``',client.msgggggs[t].tier4,true)
      .addField('<:t5:718766000824254486>``Tier : 5``',client.msgggggs[t].tier5,true)
      .addField('<:t6:718766066070716426>``Tier : 6``',client.msgggggs[t].tier6,true)
      
      .setDescription(`<@${t}> has claimed **${client.msgggggs[msg.author.id].tier7}** cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0373fc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    .addField('<:t1:718765842891800646>``Tier : 1``',client.msgggggs[t].tier1,true)
    .addField('<:t2:718765892019814470>``Tier : 2``',client.msgggggs[t].tier2,true)
    .addField('<:t3:718765963448680448>``Tier : 3``',client.msgggggs[t].tier3,true)
    .addField('<:t4:718766099583205398>``Tier : 4``',client.msgggggs[t].tier4,true)
    .addField('<:t5:718766000824254486>``Tier : 5``',client.msgggggs[t].tier5,true)
    .addField('<:t6:718766066070716426>``Tier : 6``',client.msgggggs[t].tier6,true)
    
    .setDescription(`${tt} has claimed **${client.msgggggs[t].tier7}** cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#0373fc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
   { if(msg.content==="Zen!showt1" || msg.contet==="Zen!showt1")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msgggggs[msg.author.id].tier1}** Tier: 1 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cccccc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msgggggs[t].tier1}** Tier: 1 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#cccccc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
   { if(msg.content==="Zen!showt2" || msg.contet==="Zen!showt2")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msgggggs[msg.author.id].tier2}** Tier: 2  cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#7aff8d')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msgggggs[t].tier2}** Tier: 2 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#7aff8d')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
    { if(msg.content==="Zen!showt3" || msg.contet==="Zen!showt3")
     {msg.delete();
     let t=msg.author.id;
         const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
       .setTimestamp()
       .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msgggggs[msg.author.id].tier3}** Tier: 3 cards`)
       .setFooter(`Server name: ${msg.guild.name}`)
         .setColor('#58a0e3')
         //msg.channel.send(r);
         return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }  
 
     if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
     {msg.delete();
     let tt =msg.mentions.members.first()|| msg.author;
     let t=tt.id;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
     .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msgggggs[t].tier3}** Tier: 3 cards`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#58a0e3')
       //msg.channel.send(r);
       await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }
     }
     if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt4" || msg.contet==="Zen!showt4")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msgggggs[msg.author.id].tier4}** Tier: 4 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ad58e3')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msgggggs[t].tier4}** Tier: 4 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ad58e3')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt5" || msg.contet==="Zen!showt5")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msgggggs[msg.author.id].tier5}** Tier: 5 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#fff200')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt5")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msgggggs[t].tier5}** Tier: 5 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#fff200')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
     { if(msg.content==="Zen!showt6" || msg.contet==="Zen!showt6")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msgggggs[msg.author.id].tier6}** Tier: 6 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msgggggs[t].tier6}** Tier: 6 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }

    if((msg.content==="Zen!lb")||(msg.content==="zen!lb"))
     {msg.delete();
         let board = Object.entries(client.msgggggs)
              .map(([key, val]) => ({id: key, ...val}))
              .sort((a, b) => b.tier7 - a.tier7);
     client.msrrrrrs=board;
        rssr.writeFile ("./ZenBot/Helllb.json",JSON.stringify(client.msrrrrrs, null, 4),err=>{
                if(err) throw err;
            });

            let _member1 = client.msrrrrrs[0].id;
            let _member11 = client.msrrrrrs[0].tier7;
            let _member2 = client.msrrrrrs[1].id;
            let _member22 = client.msrrrrrs[1].tier7;
            let _member3 = client.msrrrrrs[2].id;
            let _member33 = client.msrrrrrs[2].tier7;
            let _member4 = client.msrrrrrs[3].id;
            let _member44 = client.msrrrrrs[3].tier7;
            let _member5 = client.msrrrrrs[4].id;
            let _member55 = client.msrrrrrs[4].tier7;
            let _member6 = client.msrrrrrs[5].id;
            let _member66 = client.msrrrrrs[5].tier7;
            let _member7 = client.msrrrrrs[6].id;
            let _member77 = client.msrrrrrs[6].tier7;
            let _member8 = client.msrrrrrs[7].id;
            let _member88 = client.msrrrrrs[7].tier7;
            let _member9 = client.msrrrrrs[8].id;
            let _member99 = client.msrrrrrs[8].tier7;
            let _member10 = client.msrrrrrs[9].id;
            let _member1010 = client.msrrrrrs[9].tier7;

            
            const r= new MessageEmbed()
            .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
            .setTimestamp()
            .setTitle(`Leaderboard for ${msg.guild.name}`)
            //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
            .setDescription(`1)<@${_member1}> has claimed **${_member11}** cards \n 2)<@${_member2}> has claimed **${_member22}** cards \n 3)<@${_member3}> has claimed **${_member33}** cards \n 4)<@${_member4}> has claimed **${_member44}** cards \n 5)<@${_member5}> has claimed **${_member55}** cards \n 6)<@${_member6}> has claimed **${_member66}** cards \n 7)<@${_member7}> has claimed **${_member77}** cards \n 8)<@${_member8}> has claimed **${_member88}** cards \n 9)<@${_member9}> has claimed **${_member99}** cards \n 10)<@${_member10}> has claimed **${_member1010}** cards`)
            .setFooter(`Server name: ${msg.guild.name}`)
              .setColor('#0373fc')
              //msg.channel.send(r);
              await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))

    }
    if((msg.member.hasPermission("ADMINISTRATOR")) && (msg.content==="Zen!reset"))
        {  msg.reply("Done!");
            client.msgggggs= {}
            fssr.writeFile ("./ZenBot/Hell.json",JSON.stringify(client.msgggggs, null, 4),err=>{
                if(err) throw err;
            });
        }
}

});





/////SERVER 6 Dungeon  
//const fssr = require("fs");
client.msggggggs = require ("./Dungeon.json");
//const rssr = require("fs");
client.msrrrrrrs = require ("./Dungeonlb.json");
let tiiiiiier=0;
client.on('message', async msg => {
    if(msg.channel.id==="712844155579138068")
    {   
        if(typeof client.msggggggs[msg.author.id]==="undefined")
    {
        client.msggggggs [msg.author.id]={
            tier1 : 0,
            tier2 : 0,
            tier3 : 0,
            tier4 : 0,
            tier5 : 0,
            tier6 : 0,
            tier7 : 0
        }
        fssr.writeFile ("./ZenBot/Dungeon.json",JSON.stringify(client.msggggggs, null, 4),err=>{
            if(err) throw err;
        });
    }
   
    if((msg.channel.id==="712844155579138068") && (msg.author.id==="673362753489993749")){  
    msg.embeds.forEach((embed) => {
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tiiiiiier===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);//ala care a luat      
        //const User = Client.User(idbest);
        //console.log(User); 
        client.msggggggs [idbest].tier1++;
        fssr.writeFile ("./ZenBot/Dungeon.json",JSON.stringify(client.msggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggggggs [idbest].tier7=client.msggggggs [idbest].tier1+client.msggggggs [idbest].tier2+client.msggggggs [idbest].tier3+client.msggggggs [idbest].tier4+client.msggggggs [idbest].tier5+client.msggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Dungeon.json",JSON.stringify(client.msggggggs, null, 4),err=>{
            if(err) throw err;
        });
        //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
        let tttt=msg.embeds[0].description;
       tiiiiiier=0;
      }
      if(tiiiiiier===2)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);
         tiiiiiier=0;
         client.msggggggs [idbest].tier2++;
        fssr.writeFile ("./ZenBot/Dungeon.json",JSON.stringify(client.msggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggggggs [idbest].tier7=client.msggggggs [idbest].tier1+client.msggggggs [idbest].tier2+client.msggggggs [idbest].tier3+client.msggggggs [idbest].tier4+client.msggggggs [idbest].tier5+ client.msggggggs[idbest].tier6;
        fssr.writeFile ("./ZenBot/Dungeon.json",JSON.stringify(client.msggggggs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         //const User = Client.User(idbest);
        //console.log(User); 
      
        }
        if(tiiiiiier===3)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);        
         tier=0;
         client.msggggggs [idbest].tier3++;
        fssr.writeFile ("./ZenBot/Dungeon.json",JSON.stringify(client.msggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggggggs [idbest].tier7=client.msggggggs [idbest].tier1+client.msggggggs [idbest].tier2+client.msggggggs [idbest].tier3+client.msggggggs [idbest].tier4+client.msggggggs [idbest].tier5+client.msggggggs [idbest].tier6;
        fssr.writeFile ("./ZenBot/Dungeon.json",JSON.stringify(client.msggggggs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         
  
      
        }
        if(tiiiiiier===4)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);     
         tiiiiiier=0;
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
       
        client.msggggggs [idbest].tier4++;
        fssr.writeFile ("./ZenBot/Dungeon.json",JSON.stringify(client.msggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggggggs [idbest].tier7=client.msggggggs [idbest].tier1+client.msggggggs [idbest].tier2+client.msggggggs [idbest].tier3+client.msggggggs [idbest].tier4+client.msggggggs [idbest].tier5+client.msggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Dungeon.json",JSON.stringify(client.msggggggs, null, 4),err=>{
            if(err) throw err;
        });
      
        }
        if(tiiiiiier===5)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);      
           tiiiiiier=0;
         //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);  
         client.msggggggs [idbest].tier5++;
         fssr.writeFile ("./ZenBot/Dungeon.json",JSON.stringify(client.msggggggs, null, 4),err=>{
             if(err) throw err;
         });
         client.msggggggs [idbest].tier7=client.msggggggs [idbest].tier1+client.msggggggs [idbest].tier2+client.msggggggs [idbest].tier3+client.msggggggs [idbest].tier4+client.msggggggs [idbest].tier5+client.msggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Dungeon.json",JSON.stringify(client.msggggggs, null, 4),err=>{
             if(err) throw err;
         });
       
        }
        if(tiiiiiier===6)
        {
            const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);        
          //console.log(idbest);
           tiiiiiier=0;
           client.msggggggs [idbest].tier6++;
           fssr.writeFile ("./ZenBot/Dungeon.json",JSON.stringify(client.msggggggs, null, 4),err=>{
               if(err) throw err;
           });
           client.msggggggs [idbest].tier7=client.msggggggs [idbest].tier1+client.msggggggs [idbest].tier2+client.msggggggs [idbest].tier3+client.msggggggs [idbest].tier4+client.msggggggs [idbest].tier5+client.msggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Dungeon.json",JSON.stringify(client.msggggggs, null, 4),err=>{
               if(err) throw err;
           });
       
          }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    { tiiiiiier=1;namess=msg.embeds[0].title;
    }
   if(msg.embeds[0].title.includes('Tier: 2'))
    { tiiiiiier=2;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 3'))
     { tiiiiiier=3;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 4'))
     {tiiiiiier=4;namess=msg.embeds[0].title;
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {tiiiiiier=5;namess=msg.embeds[0].title;
        console.log(`${msg.embeds[0].title} in server 1`)
    } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { tiiiiiier=6;namess=msg.embeds[0].title;
      console.log(`${msg.embeds[0].title} in server 1`)
    }
      });
  }

     
    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
   { if(msg.content==="Zen!cards" || msg.contet==="Zen!cards")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .addField('<:t1:718765842891800646>``Tier : 1``',client.msggggggs[t].tier1,true)
      .addField('<:t2:718765892019814470>``Tier : 2``',client.msggggggs[t].tier2,true)
      .addField('<:t3:718765963448680448>``Tier : 3``',client.msggggggs[t].tier3,true)
      .addField('<:t4:718766099583205398>``Tier : 4``',client.msggggggs[t].tier4,true)
      .addField('<:t5:718766000824254486>``Tier : 5``',client.msggggggs[t].tier5,true)
      .addField('<:t6:718766066070716426>``Tier : 6``',client.msggggggs[t].tier6,true)
      
      .setDescription(`<@${t}> has claimed **${client.msggggggs[msg.author.id].tier7}** cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0373fc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    .addField('<:t1:718765842891800646>``Tier : 1``',client.msggggggs[t].tier1,true)
    .addField('<:t2:718765892019814470>``Tier : 2``',client.msggggggs[t].tier2,true)
    .addField('<:t3:718765963448680448>``Tier : 3``',client.msggggggs[t].tier3,true)
    .addField('<:t4:718766099583205398>``Tier : 4``',client.msggggggs[t].tier4,true)
    .addField('<:t5:718766000824254486>``Tier : 5``',client.msggggggs[t].tier5,true)
    .addField('<:t6:718766066070716426>``Tier : 6``',client.msggggggs[t].tier6,true)
    
    .setDescription(`${tt} has claimed **${client.msggggggs[t].tier7}** cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#0373fc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
   { if(msg.content==="Zen!showt1" || msg.contet==="Zen!showt1")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msggggggs[msg.author.id].tier1}** Tier: 1 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cccccc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msggggggs[t].tier1}** Tier: 1 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#cccccc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
   { if(msg.content==="Zen!showt2" || msg.contet==="Zen!showt2")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msggggggs[msg.author.id].tier2}** Tier: 2  cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#7aff8d')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msggggggs[t].tier2}** Tier: 2 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#7aff8d')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
    { if(msg.content==="Zen!showt3" || msg.contet==="Zen!showt3")
     {msg.delete();
     let t=msg.author.id;
         const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
       .setTimestamp()
       .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msggggggs[msg.author.id].tier3}** Tier: 3 cards`)
       .setFooter(`Server name: ${msg.guild.name}`)
         .setColor('#58a0e3')
         //msg.channel.send(r);
         return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }  
 
     if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
     {msg.delete();
     let tt =msg.mentions.members.first()|| msg.author;
     let t=tt.id;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
     .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msggggggs[t].tier3}** Tier: 3 cards`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#58a0e3')
       //msg.channel.send(r);
       await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }
     }
     if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt4" || msg.contet==="Zen!showt4")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msggggggs[msg.author.id].tier4}** Tier: 4 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ad58e3')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msggggggs[t].tier4}** Tier: 4 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ad58e3')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt5" || msg.contet==="Zen!showt5")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msggggggs[msg.author.id].tier5}** Tier: 5 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#fff200')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt5")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msggggggs[t].tier5}** Tier: 5 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#fff200')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
     { if(msg.content==="Zen!showt6" || msg.contet==="Zen!showt6")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msggggggs[msg.author.id].tier6}** Tier: 6 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msggggggs[t].tier6}** Tier: 6 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }

    if((msg.content==="Zen!lb")||(msg.content==="zen!lb"))
     {msg.delete();
         let board = Object.entries(client.msggggggs)
              .map(([key, val]) => ({id: key, ...val}))
              .sort((a, b) => b.tier7 - a.tier7);
     client.msrrrrrrs=board;
        rssr.writeFile ("./ZenBot/Dungeonlb.json",JSON.stringify(client.msrrrrrrs, null, 4),err=>{
                if(err) throw err;
            });

            let _member1 = client.msrrrrrrs[0].id;
            let _member11 = client.msrrrrrrs[0].tier7;
            let _member2 = client.msrrrrrrs[1].id;
            let _member22 = client.msrrrrrrs[1].tier7;
            let _member3 = client.msrrrrrrs[2].id;
            let _member33 = client.msrrrrrrs[2].tier7;
            let _member4 = client.msrrrrrrs[3].id;
            let _member44 = client.msrrrrrrs[3].tier7;
            let _member5 = client.msrrrrrrs[4].id;
            let _member55 = client.msrrrrrrs[4].tier7;
            let _member6 = client.msrrrrrrs[5].id;
            let _member66 = client.msrrrrrrs[5].tier7;
            let _member7 = client.msrrrrrrs[6].id;
            let _member77 = client.msrrrrrrs[6].tier7;
            let _member8 = client.msrrrrrrs[7].id;
            let _member88 = client.msrrrrrrs[7].tier7;
            let _member9 = client.msrrrrrrs[8].id;
            let _member99 = client.msrrrrrrs[8].tier7;
            let _member10 = client.msrrrrrrs[9].id;
            let _member1010 = client.msrrrrrrs[9].tier7;

            
            const r= new MessageEmbed()
            .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
            .setTimestamp()
            .setTitle(`Leaderboard for ${msg.guild.name}`)
            //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
            .setDescription(`1)<@${_member1}> has claimed **${_member11}** cards \n 2)<@${_member2}> has claimed **${_member22}** cards \n 3)<@${_member3}> has claimed **${_member33}** cards \n 4)<@${_member4}> has claimed **${_member44}** cards \n 5)<@${_member5}> has claimed **${_member55}** cards \n 6)<@${_member6}> has claimed **${_member66}** cards \n 7)<@${_member7}> has claimed **${_member77}** cards \n 8)<@${_member8}> has claimed **${_member88}** cards \n 9)<@${_member9}> has claimed **${_member99}** cards \n 10)<@${_member10}> has claimed **${_member1010}** cards`)
            .setFooter(`Server name: ${msg.guild.name}`)
              .setColor('#0373fc')
              //msg.channel.send(r);
              await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))

    }
    if((msg.member.hasPermission("ADMINISTRATOR")) && (msg.content==="Zen!reset"))
        {  msg.reply("Done!");
            client.msggggggs= {}
            fssr.writeFile ("./ZenBot/Dungeon.json",JSON.stringify(client.msggggggs, null, 4),err=>{
                if(err) throw err;
            });
        }
}

});






/////SERVER 11 Kiatsu  
//const fssr = require("fs");
client.msgggggggs = require ("./kiatsu11.json");
//const rssr = require("fs");
client.msrrrrrrrs = require ("./kiatsu11lb.json");
//let tiiier=0;
client.on('message', async msg => {
    if(msg.channel.id==="722544887375069235")
    {   
        if(typeof client.msgggggggs[msg.author.id]==="undefined")
    {
        client.msgggggggs [msg.author.id]={
            tier1 : 0,
            tier2 : 0,
            tier3 : 0,
            tier4 : 0,
            tier5 : 0,
            tier6 : 0,
            tier7 : 0
        }
        fssr.writeFile ("./ZenBot/kiatsu11.json",JSON.stringify(client.msgggggggs, null, 4),err=>{
            if(err) throw err;
        });
    }
   
    if((msg.channel.id==="722544887375069235") && (msg.author.id==="673362753489993749")){  
    msg.embeds.forEach((embed) => {
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tiiier===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);//ala care a luat      
        //const User = Client.User(idbest);
        //console.log(User); 
        client.msgggggggs[idbest].tier1++;
        fssr.writeFile ("./ZenBot/kiatsu11.json",JSON.stringify(client.msgggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgggggggs [idbest].tier7=client.msgggggggs [idbest].tier1+client.msgggggggs [idbest].tier2+client.msgggggggs [idbest].tier3+client.msgggggggs [idbest].tier4+client.msgggggggs [idbest].tier5+client.msgggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/kiatsu11.json",JSON.stringify(client.msgggggggs, null, 4),err=>{
            if(err) throw err;
        });
        //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
        let tttt=msg.embeds[0].description;
       tiiier=0;
      }
      if(tiiier===2)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);
         tiiier=0;
         client.msgggggggs [idbest].tier2++;
        fssr.writeFile ("./ZenBot/kiatsu11.json",JSON.stringify(client.msgggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgggggggs [idbest].tier7=client.msgggggggs [idbest].tier1+client.msgggggggs [idbest].tier2+client.msgggggggs [idbest].tier3+client.msgggggggs [idbest].tier4+client.msgggggggs [idbest].tier5+ client.msgggggggs[idbest].tier6;
        fssr.writeFile ("./ZenBot/kiatsu11.json",JSON.stringify(client.msgggggggs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         //const User = Client.User(idbest);
        //console.log(User); 
      
        }
        if(tiiier===3)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);        
         tier=0;
         client.msgggggggs [idbest].tier3++;
        fssr.writeFile ("./ZenBot/kiatsu11.json",JSON.stringify(client.msgggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgggggggs [idbest].tier7=client.msgggggggs [idbest].tier1+client.msgggggggs [idbest].tier2+client.msgggggggs [idbest].tier3+client.msgggggggs [idbest].tier4+client.msgggggggs [idbest].tier5+client.msgggggggs [idbest].tier6;
        fssr.writeFile ("./ZenBot/kiatsu11.json",JSON.stringify(client.msgggggggs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         
  
      
        }
        if(tiiier===4)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);     
         tiiier=0;
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
       
        client.msgggggggs [idbest].tier4++;
        fssr.writeFile ("./ZenBot/kiatsu11.json",JSON.stringify(client.msgggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgggggggs [idbest].tier7=client.msgggggggs [idbest].tier1+client.msgggggggs [idbest].tier2+client.msgggggggs [idbest].tier3+client.msgggggggs [idbest].tier4+client.msgggggggs [idbest].tier5+client.msgggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/kiatsu11.json",JSON.stringify(client.msgggggggs, null, 4),err=>{
            if(err) throw err;
        });
      
        }
        if(tiiier===5)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);      
           tiiier=0;
         //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);  
         client.msgggggggs [idbest].tier5++;
         fssr.writeFile ("./ZenBot/kiatsu11.json",JSON.stringify(client.msgggggggs, null, 4),err=>{
             if(err) throw err;
         });
         client.msgggggggs [idbest].tier7=client.msgggggggs [idbest].tier1+client.msgggggggs [idbest].tier2+client.msgggggggs [idbest].tier3+client.msgggggggs [idbest].tier4+client.msgggggggs [idbest].tier5+client.msgggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/kiatsu11.json",JSON.stringify(client.msgggggggs, null, 4),err=>{
             if(err) throw err;
         });
       
        }
        if(tiiier===6)
        {
            const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);        
          //console.log(idbest);
           tiiier=0;
           client.msgggggggs [idbest].tier6++;
           fssr.writeFile ("./ZenBot/kiatsu11.json",JSON.stringify(client.msgggggggs, null, 4),err=>{
               if(err) throw err;
           });
           client.msgggggggs [idbest].tier7=client.msgggggggs [idbest].tier1+client.msgggggggs [idbest].tier2+client.msgggggggs [idbest].tier3+client.msgggggggs [idbest].tier4+client.msgggggggs [idbest].tier5+client.msgggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/kiatsu11.json",JSON.stringify(client.msgggggggs, null, 4),err=>{
               if(err) throw err;
           });
       
          }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    { tiiier=1;namess=msg.embeds[0].title;
    }
   if(msg.embeds[0].title.includes('Tier: 2'))
    { tiiier=2;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 3'))
     { tiiier=3;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 4'))
     {tiiier=4;namess=msg.embeds[0].title;
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {tiiier=5;namess=msg.embeds[0].title;
        console.log(`${msg.embeds[0].title} in server 1`)
    } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { tiiier=6;namess=msg.embeds[0].title;
      console.log(`${msg.embeds[0].title} in server 1`)
    }
      });
  }

     
    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
   { if(msg.content==="Zen!cards" || msg.contet==="Zen!cards")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .addField('<:t1:718765842891800646>``Tier : 1``',client.msgggggggs[t].tier1,true)
      .addField('<:t2:718765892019814470>``Tier : 2``',client.msgggggggs[t].tier2,true)
      .addField('<:t3:718765963448680448>``Tier : 3``',client.msgggggggs[t].tier3,true)
      .addField('<:t4:718766099583205398>``Tier : 4``',client.msgggggggs[t].tier4,true)
      .addField('<:t5:718766000824254486>``Tier : 5``',client.msgggggggs[t].tier5,true)
      .addField('<:t6:718766066070716426>``Tier : 6``',client.msgggggggs[t].tier6,true)
      
      .setDescription(`<@${t}> has claimed **${client.msgggggggs[msg.author.id].tier7}** cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0373fc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    .addField('<:t1:718765842891800646>``Tier : 1``',client.msgggggggs[t].tier1,true)
    .addField('<:t2:718765892019814470>``Tier : 2``',client.msgggggggs[t].tier2,true)
    .addField('<:t3:718765963448680448>``Tier : 3``',client.msgggggggs[t].tier3,true)
    .addField('<:t4:718766099583205398>``Tier : 4``',client.msgggggggs[t].tier4,true)
    .addField('<:t5:718766000824254486>``Tier : 5``',client.msgggggggs[t].tier5,true)
    .addField('<:t6:718766066070716426>``Tier : 6``',client.msgggggggs[t].tier6,true)
    
    .setDescription(`${tt} has claimed **${client.msgggggggs[t].tier7}** cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#0373fc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
   { if(msg.content==="Zen!showt1" || msg.contet==="Zen!showt1")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msgggggggs[msg.author.id].tier1}** Tier: 1 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cccccc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msgggggggs[t].tier1}** Tier: 1 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#cccccc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
   { if(msg.content==="Zen!showt2" || msg.contet==="Zen!showt2")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msgggggggs[msg.author.id].tier2}** Tier: 2  cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#7aff8d')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msgggggggs[t].tier2}** Tier: 2 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#7aff8d')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
    { if(msg.content==="Zen!showt3" || msg.contet==="Zen!showt3")
     {msg.delete();
     let t=msg.author.id;
         const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
       .setTimestamp()
       .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msgggggggs[msg.author.id].tier3}** Tier: 3 cards`)
       .setFooter(`Server name: ${msg.guild.name}`)
         .setColor('#58a0e3')
         //msg.channel.send(r);
         return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }  
 
     if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
     {msg.delete();
     let tt =msg.mentions.members.first()|| msg.author;
     let t=tt.id;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
     .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msgggggggs[t].tier3}** Tier: 3 cards`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#58a0e3')
       //msg.channel.send(r);
       await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }
     }
     if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt4" || msg.contet==="Zen!showt4")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msgggggggs[msg.author.id].tier4}** Tier: 4 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ad58e3')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msgggggggs[t].tier4}** Tier: 4 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ad58e3')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt5" || msg.contet==="Zen!showt5")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msgggggggs[msg.author.id].tier5}** Tier: 5 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#fff200')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt5")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msgggggggs[t].tier5}** Tier: 5 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#fff200')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
     { if(msg.content==="Zen!showt6" || msg.contet==="Zen!showt6")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msgggggggs[msg.author.id].tier6}** Tier: 6 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msgggggggs[t].tier6}** Tier: 6 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }

    if((msg.content==="Zen!lb")||(msg.content==="zen!lb"))
     {msg.delete();
         let board = Object.entries(client.msgggggggs)
              .map(([key, val]) => ({id: key, ...val}))
              .sort((a, b) => b.tier7 - a.tier7);
     client.msrrrrrrrs=board;
        rssr.writeFile ("./ZenBot/kiatsu11lb.json",JSON.stringify(client.msrrrrrrrs, null, 4),err=>{
                if(err) throw err;
            });

            let _member1 = client.msrrrrrrrs[0].id;
            let _member11 = client.msrrrrrrrs[0].tier7;
            let _member2 = client.msrrrrrrrs[1].id;
            let _member22 = client.msrrrrrrrs[1].tier7;
            let _member3 = client.msrrrrrrrs[2].id;
            let _member33 = client.msrrrrrrrs[2].tier7;
            let _member4 = client.msrrrrrrrs[3].id;
            let _member44 = client.msrrrrrrrs[3].tier7;
            let _member5 = client.msrrrrrrrs[4].id;
            let _member55 = client.msrrrrrrrs[4].tier7;
            let _member6 = client.msrrrrrrrs[5].id;
            let _member66 = client.msrrrrrrrs[5].tier7;
            let _member7 = client.msrrrrrrrs[6].id;
            let _member77 = client.msrrrrrrrs[6].tier7;
            let _member8 = client.msrrrrrrrs[7].id;
            let _member88 = client.msrrrrrrrs[7].tier7;
            let _member9 = client.msrrrrrrrs[8].id;
            let _member99 = client.msrrrrrrrs[8].tier7;
            let _member10 = client.msrrrrrrrs[9].id;
            let _member1010 = client.msrrrrrrrs[9].tier7;

            
            const r= new MessageEmbed()
            .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
            .setTimestamp()
            .setTitle(`Leaderboard for ${msg.guild.name}`)
            //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
            .setDescription(`1)<@${_member1}> has claimed **${_member11}** cards \n 2)<@${_member2}> has claimed **${_member22}** cards \n 3)<@${_member3}> has claimed **${_member33}** cards \n 4)<@${_member4}> has claimed **${_member44}** cards \n 5)<@${_member5}> has claimed **${_member55}** cards \n 6)<@${_member6}> has claimed **${_member66}** cards \n 7)<@${_member7}> has claimed **${_member77}** cards \n 8)<@${_member8}> has claimed **${_member88}** cards \n 9)<@${_member9}> has claimed **${_member99}** cards \n 10)<@${_member10}> has claimed **${_member1010}** cards`)
            .setFooter(`Server name: ${msg.guild.name}`)
              .setColor('#0373fc')
              //msg.channel.send(r);
              await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))

    }
    if((msg.member.hasPermission("ADMINISTRATOR")) && (msg.content==="Zen!reset"))
        {  msg.reply("Done!");
            client.msgggggggs= {}
            fssr.writeFile ("./ZenBot/kiatsu11.json",JSON.stringify(client.msgggggggs, null, 4),err=>{
                if(err) throw err;
            });
        }
}

});






/////SERVER 11 Mirai 
//const fssr = require("fs");
client.msggggggggs = require ("./Mirai.json");
//const rssr = require("fs");
client.msrrrrrrrrs = require ("./Mirailb.json");
//let tiiier=0;
client.on('message', async msg => {
    if(msg.channel.id==="707640634873479309")
    {   
        if(typeof client.msggggggggs[msg.author.id]==="undefined")
    {
        client.msggggggggs [msg.author.id]={
            tier1 : 0,
            tier2 : 0,
            tier3 : 0,
            tier4 : 0,
            tier5 : 0,
            tier6 : 0,
            tier7 : 0
        }
        fssr.writeFile ("./ZenBot/Mirai.json",JSON.stringify(client.msggggggggs, null, 4),err=>{
            if(err) throw err;
        });
    }
   
    if((msg.channel.id==="707640634873479309") && (msg.author.id==="673362753489993749")){  
    msg.embeds.forEach((embed) => {
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tiiier===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);//ala care a luat      
        //const User = Client.User(idbest);
        //console.log(User); 
        client.msggggggggs [idbest].tier1++;
        fssr.writeFile ("./ZenBot/Mirai.json",JSON.stringify(client.msggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggggggggs [idbest].tier7=client.msggggggggs [idbest].tier1+client.msggggggggs [idbest].tier2+client.msggggggggs [idbest].tier3+client.msggggggggs [idbest].tier4+client.msggggggggs [idbest].tier5+client.msggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Mirai.json",JSON.stringify(client.msggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
        let tttt=msg.embeds[0].description;
       tiiier=0;
      }
      if(tiiier===2)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);
         tiiier=0;
         client.msggggggggs [idbest].tier2++;
        fssr.writeFile ("./ZenBot/Mirai.json",JSON.stringify(client.msggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggggggggs [idbest].tier7=client.msggggggggs [idbest].tier1+client.msggggggggs [idbest].tier2+client.msggggggggs [idbest].tier3+client.msggggggggs [idbest].tier4+client.msggggggggs [idbest].tier5+ client.msggggggggs[idbest].tier6;
        fssr.writeFile ("./ZenBot/Mirai.json",JSON.stringify(client.msggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         //const User = Client.User(idbest);
        //console.log(User); 
      
        }
        if(tiiier===3)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);        
         tier=0;
         client.msggggggggs [idbest].tier3++;
        fssr.writeFile ("./ZenBot/Mirai.json",JSON.stringify(client.msggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggggggggs [idbest].tier7=client.msggggggggs [idbest].tier1+client.msggggggggs [idbest].tier2+client.msggggggggs [idbest].tier3+client.msggggggggs [idbest].tier4+client.msggggggggs [idbest].tier5+client.msggggggggs [idbest].tier6;
        fssr.writeFile ("./ZenBot/Mirai.json",JSON.stringify(client.msggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         
  
      
        }
        if(tiiier===4)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);     
         tiiier=0;
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
       
        client.msggggggggs [idbest].tier4++;
        fssr.writeFile ("./ZenBot/Mirai.json",JSON.stringify(client.msggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggggggggs [idbest].tier7=client.msggggggggs [idbest].tier1+client.msggggggggs [idbest].tier2+client.msggggggggs [idbest].tier3+client.msggggggggs [idbest].tier4+client.msggggggggs [idbest].tier5+client.msggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Mirai.json",JSON.stringify(client.msggggggggs, null, 4),err=>{
            if(err) throw err;
        });
      
        }
        if(tiiier===5)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);      
           tiiier=0;
         //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);  
         client.msggggggggs [idbest].tier5++;
         fssr.writeFile ("./ZenBot/Mirai.json",JSON.stringify(client.msggggggggs, null, 4),err=>{
             if(err) throw err;
         });
         client.msggggggggs [idbest].tier7=client.msggggggggs [idbest].tier1+client.msggggggggs [idbest].tier2+client.msggggggggs [idbest].tier3+client.msggggggggs [idbest].tier4+client.msggggggggs [idbest].tier5+client.msggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Mirai.json",JSON.stringify(client.msggggggggs, null, 4),err=>{
             if(err) throw err;
         });
       
        }
        if(tiiier===6)
        {
            const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);        
          //console.log(idbest);
           tiiier=0;
           client.msggggggggs [idbest].tier6++;
           fssr.writeFile ("./ZenBot/Mirai.json",JSON.stringify(client.msggggggggs, null, 4),err=>{
               if(err) throw err;
           });
           client.msggggggggs [idbest].tier7=client.msggggggggs [idbest].tier1+client.msggggggggs [idbest].tier2+client.msggggggggs [idbest].tier3+client.msggggggggs [idbest].tier4+client.msggggggggs [idbest].tier5+client.msggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Mirai.json",JSON.stringify(client.msggggggggs, null, 4),err=>{
               if(err) throw err;
           });
       
          }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    { tiiier=1;namess=msg.embeds[0].title;
    }
   if(msg.embeds[0].title.includes('Tier: 2'))
    { tiiier=2;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 3'))
     { tiiier=3;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 4'))
     {tiiier=4;namess=msg.embeds[0].title;
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {tiiier=5;namess=msg.embeds[0].title;
        console.log(`${msg.embeds[0].title} in server 1`)
    } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { tiiier=6;namess=msg.embeds[0].title;
      console.log(`${msg.embeds[0].title} in server 1`)
    }
      });
  }

     
    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
   { if(msg.content==="Zen!cards" || msg.contet==="Zen!cards")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .addField('<:t1:718765842891800646>``Tier : 1``',client.msggggggggs[t].tier1,true)
      .addField('<:t2:718765892019814470>``Tier : 2``',client.msggggggggs[t].tier2,true)
      .addField('<:t3:718765963448680448>``Tier : 3``',client.msggggggggs[t].tier3,true)
      .addField('<:t4:718766099583205398>``Tier : 4``',client.msggggggggs[t].tier4,true)
      .addField('<:t5:718766000824254486>``Tier : 5``',client.msggggggggs[t].tier5,true)
      .addField('<:t6:718766066070716426>``Tier : 6``',client.msggggggggs[t].tier6,true)
      
      .setDescription(`<@${t}> has claimed **${client.msggggggggs[msg.author.id].tier7}** cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0373fc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    .addField('<:t1:718765842891800646>``Tier : 1``',client.msggggggggs[t].tier1,true)
    .addField('<:t2:718765892019814470>``Tier : 2``',client.msggggggggs[t].tier2,true)
    .addField('<:t3:718765963448680448>``Tier : 3``',client.msggggggggs[t].tier3,true)
    .addField('<:t4:718766099583205398>``Tier : 4``',client.msggggggggs[t].tier4,true)
    .addField('<:t5:718766000824254486>``Tier : 5``',client.msggggggggs[t].tier5,true)
    .addField('<:t6:718766066070716426>``Tier : 6``',client.msggggggggs[t].tier6,true)
    
    .setDescription(`${tt} has claimed **${client.msggggggggs[t].tier7}** cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#0373fc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
   { if(msg.content==="Zen!showt1" || msg.contet==="Zen!showt1")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msggggggggs[msg.author.id].tier1}** Tier: 1 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cccccc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msggggggggs[t].tier1}** Tier: 1 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#cccccc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
   { if(msg.content==="Zen!showt2" || msg.contet==="Zen!showt2")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msggggggggs[msg.author.id].tier2}** Tier: 2  cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#7aff8d')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msggggggggs[t].tier2}** Tier: 2 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#7aff8d')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
    { if(msg.content==="Zen!showt3" || msg.contet==="Zen!showt3")
     {msg.delete();
     let t=msg.author.id;
         const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
       .setTimestamp()
       .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msggggggggs[msg.author.id].tier3}** Tier: 3 cards`)
       .setFooter(`Server name: ${msg.guild.name}`)
         .setColor('#58a0e3')
         //msg.channel.send(r);
         return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }  
 
     if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
     {msg.delete();
     let tt =msg.mentions.members.first()|| msg.author;
     let t=tt.id;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
     .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msggggggggs[t].tier3}** Tier: 3 cards`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#58a0e3')
       //msg.channel.send(r);
       await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }
     }
     if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt4" || msg.contet==="Zen!showt4")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msggggggggs[msg.author.id].tier4}** Tier: 4 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ad58e3')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msggggggggs[t].tier4}** Tier: 4 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ad58e3')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt5" || msg.contet==="Zen!showt5")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msggggggggs[msg.author.id].tier5}** Tier: 5 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#fff200')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt5")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msggggggggs[t].tier5}** Tier: 5 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#fff200')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
     { if(msg.content==="Zen!showt6" || msg.contet==="Zen!showt6")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msggggggggs[msg.author.id].tier6}** Tier: 6 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msggggggggs[t].tier6}** Tier: 6 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }

    if((msg.content==="Zen!lb")||(msg.content==="zen!lb"))
     {msg.delete();
         let board = Object.entries(client.msggggggggs)
              .map(([key, val]) => ({id: key, ...val}))
              .sort((a, b) => b.tier7 - a.tier7);
     client.msrrrrrrrrs=board;
        rssr.writeFile ("./ZenBot/Mirailb.json",JSON.stringify(client.msrrrrrrrrs, null, 4),err=>{
                if(err) throw err;
            });

            let _member1 = client.msrrrrrrrrs[0].id;
            let _member11 = client.msrrrrrrrrs[0].tier7;
            let _member2 = client.msrrrrrrrrs[1].id;
            let _member22 = client.msrrrrrrrrs[1].tier7;
            let _member3 = client.msrrrrrrrrs[2].id;
            let _member33 = client.msrrrrrrrrs[2].tier7;
            let _member4 = client.msrrrrrrrrs[3].id;
            let _member44 = client.msrrrrrrrrs[3].tier7;
            let _member5 = client.msrrrrrrrrs[4].id;
            let _member55 = client.msrrrrrrrrs[4].tier7;
            let _member6 = client.msrrrrrrrrs[5].id;
            let _member66 = client.msrrrrrrrrs[5].tier7;
            let _member7 = client.msrrrrrrrrs[6].id;
            let _member77 = client.msrrrrrrrrs[6].tier7;
            let _member8 = client.msrrrrrrrrs[7].id;
            let _member88 = client.msrrrrrrrrs[7].tier7;
            let _member9 = client.msrrrrrrrrs[8].id;
            let _member99 = client.msrrrrrrrrs[8].tier7;
            let _member10 = client.msrrrrrrrrs[9].id;
            let _member1010 = client.msrrrrrrrrs[9].tier7;

            
            const r= new MessageEmbed()
            .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
            .setTimestamp()
            .setTitle(`Leaderboard for ${msg.guild.name}`)
            //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
            .setDescription(`1)<@${_member1}> has claimed **${_member11}** cards \n 2)<@${_member2}> has claimed **${_member22}** cards \n 3)<@${_member3}> has claimed **${_member33}** cards \n 4)<@${_member4}> has claimed **${_member44}** cards \n 5)<@${_member5}> has claimed **${_member55}** cards \n 6)<@${_member6}> has claimed **${_member66}** cards \n 7)<@${_member7}> has claimed **${_member77}** cards \n 8)<@${_member8}> has claimed **${_member88}** cards \n 9)<@${_member9}> has claimed **${_member99}** cards \n 10)<@${_member10}> has claimed **${_member1010}** cards`)
            .setFooter(`Server name: ${msg.guild.name}`)
              .setColor('#0373fc')
              //msg.channel.send(r);
              await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))

    }
    if((msg.member.hasPermission("ADMINISTRATOR")) && (msg.content==="Zen!reset"))
        {  msg.reply("Done!");
            client.msggggggggs= {}
            fssr.writeFile ("./ZenBot/Mirai.json",JSON.stringify(client.msggggggggs, null, 4),err=>{
                if(err) throw err;
            });
        }
}

});



/////SERVER 9 Shadow Room 
//const fssr = require("fs");
client.msgggggggggs = require ("./Shadow.json");
//const rssr = require("fs");
client.msrrrrrrrrrs = require ("./Shadowlb.json");
//let tiiier=0;
client.on('message', async msg => {
    if(msg.channel.id==="705819528520794283")
    {   
        if(typeof client.msgggggggggs[msg.author.id]==="undefined")
    {
        client.msgggggggggs [msg.author.id]={
            tier1 : 0,
            tier2 : 0,
            tier3 : 0,
            tier4 : 0,
            tier5 : 0,
            tier6 : 0,
            tier7 : 0
        }
        fssr.writeFile ("./ZenBot/Shadow.json",JSON.stringify(client.msgggggggggs, null, 4),err=>{
            if(err) throw err;
        });
    }
   
    if((msg.channel.id==="705819528520794283") && (msg.author.id==="673362753489993749")){  
    msg.embeds.forEach((embed) => {
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tiiier===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);//ala care a luat      
        //const User = Client.User(idbest);
        //console.log(User); 
        client.msgggggggggs [idbest].tier1++;
        fssr.writeFile ("./ZenBot/Shadow.json",JSON.stringify(client.msgggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgggggggggs [idbest].tier7=client.msgggggggggs [idbest].tier1+client.msgggggggggs [idbest].tier2+client.msgggggggggs [idbest].tier3+client.msgggggggggs [idbest].tier4+client.msgggggggggs [idbest].tier5+client.msgggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Shadow.json",JSON.stringify(client.msgggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
        let tttt=msg.embeds[0].description;
       tiiier=0;
      }
      if(tiiier===2)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);
         tiiier=0;
         client.msgggggggggs [idbest].tier2++;
        fssr.writeFile ("./ZenBot/Shadow.json",JSON.stringify(client.msgggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgggggggggs [idbest].tier7=client.msgggggggggs [idbest].tier1+client.msgggggggggs [idbest].tier2+client.msgggggggggs [idbest].tier3+client.msgggggggggs [idbest].tier4+client.msgggggggggs [idbest].tier5+ client.msgggggggggs[idbest].tier6;
        fssr.writeFile ("./ZenBot/Shadow.json",JSON.stringify(client.msgggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         //const User = Client.User(idbest);
        //console.log(User); 
      
        }
        if(tiiier===3)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);        
         tier=0;
         client.msgggggggggs [idbest].tier3++;
        fssr.writeFile ("./ZenBot/Shadow.json",JSON.stringify(client.msgggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgggggggggs [idbest].tier7=client.msgggggggggs [idbest].tier1+client.msgggggggggs [idbest].tier2+client.msgggggggggs [idbest].tier3+client.msgggggggggs [idbest].tier4+client.msgggggggggs [idbest].tier5+client.msgggggggggs [idbest].tier6;
        fssr.writeFile ("./ZenBot/Shadow.json",JSON.stringify(client.msgggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         
  
      
        }
        if(tiiier===4)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);     
         tiiier=0;
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
       
        client.msgggggggggs [idbest].tier4++;
        fssr.writeFile ("./ZenBot/Shadow.json",JSON.stringify(client.msgggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgggggggggs [idbest].tier7=client.msgggggggggs [idbest].tier1+client.msgggggggggs [idbest].tier2+client.msgggggggggs [idbest].tier3+client.msgggggggggs [idbest].tier4+client.msgggggggggs [idbest].tier5+client.msgggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Shadow.json",JSON.stringify(client.msgggggggggs, null, 4),err=>{
            if(err) throw err;
        });
      
        }
        if(tiiier===5)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);      
           tiiier=0;
         //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);  
         client.msgggggggggs [idbest].tier5++;
         fssr.writeFile ("./ZenBot/Shadow.json",JSON.stringify(client.msgggggggggs, null, 4),err=>{
             if(err) throw err;
         });
         client.msgggggggggs [idbest].tier7=client.msgggggggggs [idbest].tier1+client.msgggggggggs [idbest].tier2+client.msgggggggggs [idbest].tier3+client.msgggggggggs [idbest].tier4+client.msgggggggggs [idbest].tier5+client.msgggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Shadow.json",JSON.stringify(client.msgggggggggs, null, 4),err=>{
             if(err) throw err;
         });
       
        }
        if(tiiier===6)
        {
            const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);        
          //console.log(idbest);
           tiiier=0;
           client.msgggggggggs [idbest].tier6++;
           fssr.writeFile ("./ZenBot/Shadow.json",JSON.stringify(client.msgggggggggs, null, 4),err=>{
               if(err) throw err;
           });
           client.msgggggggggs [idbest].tier7=client.msgggggggggs [idbest].tier1+client.msgggggggggs [idbest].tier2+client.msgggggggggs [idbest].tier3+client.msgggggggggs [idbest].tier4+client.msgggggggggs [idbest].tier5+client.msgggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Shadow.json",JSON.stringify(client.msgggggggggs, null, 4),err=>{
               if(err) throw err;
           });
       
          }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    { tiiier=1;namess=msg.embeds[0].title;
    }
   if(msg.embeds[0].title.includes('Tier: 2'))
    { tiiier=2;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 3'))
     { tiiier=3;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 4'))
     {tiiier=4;namess=msg.embeds[0].title;
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {tiiier=5;namess=msg.embeds[0].title;
        console.log(`${msg.embeds[0].title} in server 1`)
    } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { tiiier=6;namess=msg.embeds[0].title;
      console.log(`${msg.embeds[0].title} in server 1`)
    }
      });
  }

     
    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
   { if(msg.content==="Zen!cards" || msg.contet==="Zen!cards")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .addField('<:t1:718765842891800646>``Tier : 1``',client.msgggggggggs[t].tier1,true)
      .addField('<:t2:718765892019814470>``Tier : 2``',client.msgggggggggs[t].tier2,true)
      .addField('<:t3:718765963448680448>``Tier : 3``',client.msgggggggggs[t].tier3,true)
      .addField('<:t4:718766099583205398>``Tier : 4``',client.msgggggggggs[t].tier4,true)
      .addField('<:t5:718766000824254486>``Tier : 5``',client.msgggggggggs[t].tier5,true)
      .addField('<:t6:718766066070716426>``Tier : 6``',client.msgggggggggs[t].tier6,true)
      
      .setDescription(`<@${t}> has claimed **${client.msgggggggggs[msg.author.id].tier7}** cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0373fc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    .addField('<:t1:718765842891800646>``Tier : 1``',client.msgggggggggs[t].tier1,true)
    .addField('<:t2:718765892019814470>``Tier : 2``',client.msgggggggggs[t].tier2,true)
    .addField('<:t3:718765963448680448>``Tier : 3``',client.msgggggggggs[t].tier3,true)
    .addField('<:t4:718766099583205398>``Tier : 4``',client.msgggggggggs[t].tier4,true)
    .addField('<:t5:718766000824254486>``Tier : 5``',client.msgggggggggs[t].tier5,true)
    .addField('<:t6:718766066070716426>``Tier : 6``',client.msgggggggggs[t].tier6,true)
    
    .setDescription(`${tt} has claimed **${client.msgggggggggs[t].tier7}** cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#0373fc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
   { if(msg.content==="Zen!showt1" || msg.contet==="Zen!showt1")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msgggggggggs[msg.author.id].tier1}** Tier: 1 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cccccc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msgggggggggs[t].tier1}** Tier: 1 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#cccccc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
   { if(msg.content==="Zen!showt2" || msg.contet==="Zen!showt2")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msgggggggggs[msg.author.id].tier2}** Tier: 2  cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#7aff8d')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msgggggggggs[t].tier2}** Tier: 2 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#7aff8d')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
    { if(msg.content==="Zen!showt3" || msg.contet==="Zen!showt3")
     {msg.delete();
     let t=msg.author.id;
         const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
       .setTimestamp()
       .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msgggggggggs[msg.author.id].tier3}** Tier: 3 cards`)
       .setFooter(`Server name: ${msg.guild.name}`)
         .setColor('#58a0e3')
         //msg.channel.send(r);
         return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }  
 
     if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
     {msg.delete();
     let tt =msg.mentions.members.first()|| msg.author;
     let t=tt.id;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
     .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msgggggggggs[t].tier3}** Tier: 3 cards`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#58a0e3')
       //msg.channel.send(r);
       await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }
     }
     if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt4" || msg.contet==="Zen!showt4")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msgggggggggs[msg.author.id].tier4}** Tier: 4 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ad58e3')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msgggggggggs[t].tier4}** Tier: 4 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ad58e3')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt5" || msg.contet==="Zen!showt5")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msgggggggggs[msg.author.id].tier5}** Tier: 5 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#fff200')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt5")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msgggggggggs[t].tier5}** Tier: 5 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#fff200')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
     { if(msg.content==="Zen!showt6" || msg.contet==="Zen!showt6")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msgggggggggs[msg.author.id].tier6}** Tier: 6 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msgggggggggs[t].tier6}** Tier: 6 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }

    if((msg.content==="Zen!lb")||(msg.content==="zen!lb"))
     {msg.delete();
         let board = Object.entries(client.msgggggggggs)
              .map(([key, val]) => ({id: key, ...val}))
              .sort((a, b) => b.tier7 - a.tier7);
     client.msrrrrrrrrrs=board;
        rssr.writeFile ("./ZenBot/Shadowlb.json",JSON.stringify(client.msrrrrrrrrrs, null, 4),err=>{
                if(err) throw err;
            });

            let _member1 = client.msrrrrrrrrrs[0].id;
            let _member11 = client.msrrrrrrrrrs[0].tier7;
            let _member2 = client.msrrrrrrrrrs[1].id;
            let _member22 = client.msrrrrrrrrrs[1].tier7;
            let _member3 = client.msrrrrrrrrrs[2].id;
            let _member33 = client.msrrrrrrrrrs[2].tier7;
            let _member4 = client.msrrrrrrrrrs[3].id;
            let _member44 = client.msrrrrrrrrrs[3].tier7;
            let _member5 = client.msrrrrrrrrrs[4].id;
            let _member55 = client.msrrrrrrrrrs[4].tier7;
            let _member6 = client.msrrrrrrrrrs[5].id;
            let _member66 = client.msrrrrrrrrrs[5].tier7;
            let _member7 = client.msrrrrrrrrrs[6].id;
            let _member77 = client.msrrrrrrrrrs[6].tier7;
            let _member8 = client.msrrrrrrrrrs[7].id;
            let _member88 = client.msrrrrrrrrrs[7].tier7;
            let _member9 = client.msrrrrrrrrrs[8].id;
            let _member99 = client.msrrrrrrrrrs[8].tier7;
            let _member10 = client.msrrrrrrrrrs[9].id;
            let _member1010 = client.msrrrrrrrrrs[9].tier7;

            
            const r= new MessageEmbed()
            .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
            .setTimestamp()
            .setTitle(`Leaderboard for ${msg.guild.name}`)
            //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
            .setDescription(`1)<@${_member1}> has claimed **${_member11}** cards \n 2)<@${_member2}> has claimed **${_member22}** cards \n 3)<@${_member3}> has claimed **${_member33}** cards \n 4)<@${_member4}> has claimed **${_member44}** cards \n 5)<@${_member5}> has claimed **${_member55}** cards \n 6)<@${_member6}> has claimed **${_member66}** cards \n 7)<@${_member7}> has claimed **${_member77}** cards \n 8)<@${_member8}> has claimed **${_member88}** cards \n 9)<@${_member9}> has claimed **${_member99}** cards \n 10)<@${_member10}> has claimed **${_member1010}** cards`)
            .setFooter(`Server name: ${msg.guild.name}`)
              .setColor('#0373fc')
              //msg.channel.send(r);
              await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))

    }
    if((msg.member.hasPermission("ADMINISTRATOR")) && (msg.content==="Zen!reset"))
        {  msg.reply("Done!");
            client.msgggggggggs= {}
            fssr.writeFile ("./ZenBot/Shadow.json",JSON.stringify(client.msgggggggggs, null, 4),err=>{
                if(err) throw err;
            });
        }
}

});





/////SERVER ? The homies 
//const fssr = require("fs");
client.msggggggggggs = require ("./Thehomies.json");
//const rssr = require("fs");
client.msrrrrrrrrrrs = require ("./Thehomieslb.json");
//let tiiier=0;
client.on('message', async msg => {
    if(msg.channel.id==="708442817977909278")
    {   
        if(typeof client.msggggggggggs[msg.author.id]==="undefined")
    {
        client.msggggggggggs [msg.author.id]={
            tier1 : 0,
            tier2 : 0,
            tier3 : 0,
            tier4 : 0,
            tier5 : 0,
            tier6 : 0,
            tier7 : 0
        }
        fssr.writeFile ("./ZenBot/Thehomies.json",JSON.stringify(client.msggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
    }
   
    if((msg.channel.id==="708442817977909278") && (msg.author.id==="673362753489993749")){  
    msg.embeds.forEach((embed) => {
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tiiier===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);//ala care a luat      
        //const User = Client.User(idbest);
        //console.log(User); 
        client.msggggggggggs [idbest].tier1++;
        fssr.writeFile ("./ZenBot/Thehomies.json",JSON.stringify(client.msggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggggggggggs [idbest].tier7=client.msggggggggggs [idbest].tier1+client.msggggggggggs [idbest].tier2+client.msggggggggggs [idbest].tier3+client.msggggggggggs [idbest].tier4+client.msggggggggggs [idbest].tier5+client.msggggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Thehomies.json",JSON.stringify(client.msggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
        let tttt=msg.embeds[0].description;
       tiiier=0;
      }
      if(tiiier===2)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);
         tiiier=0;
         client.msggggggggggs [idbest].tier2++;
        fssr.writeFile ("./ZenBot/Thehomies.json",JSON.stringify(client.msggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggggggggggs [idbest].tier7=client.msggggggggggs [idbest].tier1+client.msggggggggggs [idbest].tier2+client.msggggggggggs [idbest].tier3+client.msggggggggggs [idbest].tier4+client.msggggggggggs [idbest].tier5+ client.msggggggggggs[idbest].tier6;
        fssr.writeFile ("./ZenBot/Thehomies.json",JSON.stringify(client.msggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         //const User = Client.User(idbest);
        //console.log(User); 
      
        }
        if(tiiier===3)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);        
         tier=0;
         client.msggggggggggs [idbest].tier3++;
        fssr.writeFile ("./ZenBot/Thehomies.json",JSON.stringify(client.msggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggggggggggs [idbest].tier7=client.msggggggggggs [idbest].tier1+client.msggggggggggs [idbest].tier2+client.msggggggggggs [idbest].tier3+client.msggggggggggs [idbest].tier4+client.msggggggggggs [idbest].tier5+client.msggggggggggs [idbest].tier6;
        fssr.writeFile ("./ZenBot/Thehomies.json",JSON.stringify(client.msggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         
  
      
        }
        if(tiiier===4)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);     
         tiiier=0;
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
       
        client.msggggggggggs [idbest].tier4++;
        fssr.writeFile ("./ZenBot/Thehomies.json",JSON.stringify(client.msggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggggggggggs [idbest].tier7=client.msggggggggggs [idbest].tier1+client.msggggggggggs [idbest].tier2+client.msggggggggggs [idbest].tier3+client.msggggggggggs [idbest].tier4+client.msggggggggggs [idbest].tier5+client.msggggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Thehomies.json",JSON.stringify(client.msggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
      
        }
        if(tiiier===5)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);      
           tiiier=0;
         //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);  
         client.msggggggggggs [idbest].tier5++;
         fssr.writeFile ("./ZenBot/Thehomies.json",JSON.stringify(client.msggggggggggs, null, 4),err=>{
             if(err) throw err;
         });
         client.msggggggggggs [idbest].tier7=client.msggggggggggs [idbest].tier1+client.msggggggggggs [idbest].tier2+client.msggggggggggs [idbest].tier3+client.msggggggggggs [idbest].tier4+client.msggggggggggs [idbest].tier5+client.msggggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Thehomies.json",JSON.stringify(client.msggggggggggs, null, 4),err=>{
             if(err) throw err;
         });
       
        }
        if(tiiier===6)
        {
            const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);        
          //console.log(idbest);
           tiiier=0;
           client.msggggggggggs [idbest].tier6++;
           fssr.writeFile ("./ZenBot/Thehomies.json",JSON.stringify(client.msggggggggggs, null, 4),err=>{
               if(err) throw err;
           });
           client.msggggggggggs [idbest].tier7=client.msggggggggggs [idbest].tier1+client.msggggggggggs [idbest].tier2+client.msggggggggggs [idbest].tier3+client.msggggggggggs [idbest].tier4+client.msggggggggggs [idbest].tier5+client.msggggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Thehomies.json",JSON.stringify(client.msggggggggggs, null, 4),err=>{
               if(err) throw err;
           });
       
          }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    { tiiier=1;namess=msg.embeds[0].title;
    }
   if(msg.embeds[0].title.includes('Tier: 2'))
    { tiiier=2;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 3'))
     { tiiier=3;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 4'))
     {tiiier=4;namess=msg.embeds[0].title;
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {tiiier=5;namess=msg.embeds[0].title;
        console.log(`${msg.embeds[0].title} in server 1`)
    } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { tiiier=6;namess=msg.embeds[0].title;
      console.log(`${msg.embeds[0].title} in server 1`)
    }
      });
  }

     
    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
   { if(msg.content==="Zen!cards" || msg.contet==="Zen!cards")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .addField('<:t1:718765842891800646>``Tier : 1``',client.msggggggggggs[t].tier1,true)
      .addField('<:t2:718765892019814470>``Tier : 2``',client.msggggggggggs[t].tier2,true)
      .addField('<:t3:718765963448680448>``Tier : 3``',client.msggggggggggs[t].tier3,true)
      .addField('<:t4:718766099583205398>``Tier : 4``',client.msggggggggggs[t].tier4,true)
      .addField('<:t5:718766000824254486>``Tier : 5``',client.msggggggggggs[t].tier5,true)
      .addField('<:t6:718766066070716426>``Tier : 6``',client.msggggggggggs[t].tier6,true)
      
      .setDescription(`<@${t}> has claimed **${client.msggggggggggs[msg.author.id].tier7}** cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0373fc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    .addField('<:t1:718765842891800646>``Tier : 1``',client.msggggggggggs[t].tier1,true)
    .addField('<:t2:718765892019814470>``Tier : 2``',client.msggggggggggs[t].tier2,true)
    .addField('<:t3:718765963448680448>``Tier : 3``',client.msggggggggggs[t].tier3,true)
    .addField('<:t4:718766099583205398>``Tier : 4``',client.msggggggggggs[t].tier4,true)
    .addField('<:t5:718766000824254486>``Tier : 5``',client.msggggggggggs[t].tier5,true)
    .addField('<:t6:718766066070716426>``Tier : 6``',client.msggggggggggs[t].tier6,true)
    
    .setDescription(`${tt} has claimed **${client.msggggggggggs[t].tier7}** cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#0373fc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
   { if(msg.content==="Zen!showt1" || msg.contet==="Zen!showt1")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msggggggggggs[msg.author.id].tier1}** Tier: 1 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cccccc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msggggggggggs[t].tier1}** Tier: 1 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#cccccc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
   { if(msg.content==="Zen!showt2" || msg.contet==="Zen!showt2")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msggggggggggs[msg.author.id].tier2}** Tier: 2  cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#7aff8d')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msggggggggggs[t].tier2}** Tier: 2 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#7aff8d')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
    { if(msg.content==="Zen!showt3" || msg.contet==="Zen!showt3")
     {msg.delete();
     let t=msg.author.id;
         const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
       .setTimestamp()
       .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msggggggggggs[msg.author.id].tier3}** Tier: 3 cards`)
       .setFooter(`Server name: ${msg.guild.name}`)
         .setColor('#58a0e3')
         //msg.channel.send(r);
         return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }  
 
     if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
     {msg.delete();
     let tt =msg.mentions.members.first()|| msg.author;
     let t=tt.id;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
     .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msggggggggggs[t].tier3}** Tier: 3 cards`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#58a0e3')
       //msg.channel.send(r);
       await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }
     }
     if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt4" || msg.contet==="Zen!showt4")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msggggggggggs[msg.author.id].tier4}** Tier: 4 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ad58e3')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msggggggggggs[t].tier4}** Tier: 4 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ad58e3')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt5" || msg.contet==="Zen!showt5")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msggggggggggs[msg.author.id].tier5}** Tier: 5 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#fff200')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt5")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msggggggggggs[t].tier5}** Tier: 5 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#fff200')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
     { if(msg.content==="Zen!showt6" || msg.contet==="Zen!showt6")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msggggggggggs[msg.author.id].tier6}** Tier: 6 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msggggggggggs[t].tier6}** Tier: 6 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }

    if((msg.content==="Zen!lb")||(msg.content==="zen!lb"))
     {msg.delete();
         let board = Object.entries(client.msggggggggggs)
              .map(([key, val]) => ({id: key, ...val}))
              .sort((a, b) => b.tier7 - a.tier7);
     client.msrrrrrrrrrrs=board;
        rssr.writeFile ("./ZenBot/Thehomieslb.json",JSON.stringify(client.msrrrrrrrrrrs, null, 4),err=>{
                if(err) throw err;
            });

            let _member1 = client.msrrrrrrrrrrs[0].id;
            let _member11 = client.msrrrrrrrrrrs[0].tier7;
            let _member2 = client.msrrrrrrrrrrs[1].id;
            let _member22 = client.msrrrrrrrrrrs[1].tier7;
            let _member3 = client.msrrrrrrrrrrs[2].id;
            let _member33 = client.msrrrrrrrrrrs[2].tier7;
            let _member4 = client.msrrrrrrrrrrs[3].id;
            let _member44 = client.msrrrrrrrrrrs[3].tier7;
            let _member5 = client.msrrrrrrrrrrs[4].id;
            let _member55 = client.msrrrrrrrrrrs[4].tier7;
            let _member6 = client.msrrrrrrrrrrs[5].id;
            let _member66 = client.msrrrrrrrrrrs[5].tier7;
            let _member7 = client.msrrrrrrrrrrs[6].id;
            let _member77 = client.msrrrrrrrrrrs[6].tier7;
            let _member8 = client.msrrrrrrrrrrs[7].id;
            let _member88 = client.msrrrrrrrrrrs[7].tier7;
            let _member9 = client.msrrrrrrrrrrs[8].id;
            let _member99 = client.msrrrrrrrrrrs[8].tier7;
            let _member10 = client.msrrrrrrrrrrs[9].id;
            let _member1010 = client.msrrrrrrrrrrs[9].tier7;

            
            const r= new MessageEmbed()
            .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
            .setTimestamp()
            .setTitle(`Leaderboard for ${msg.guild.name}`)
            //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
            .setDescription(`1)<@${_member1}> has claimed **${_member11}** cards \n 2)<@${_member2}> has claimed **${_member22}** cards \n 3)<@${_member3}> has claimed **${_member33}** cards \n 4)<@${_member4}> has claimed **${_member44}** cards \n 5)<@${_member5}> has claimed **${_member55}** cards \n 6)<@${_member6}> has claimed **${_member66}** cards \n 7)<@${_member7}> has claimed **${_member77}** cards \n 8)<@${_member8}> has claimed **${_member88}** cards \n 9)<@${_member9}> has claimed **${_member99}** cards \n 10)<@${_member10}> has claimed **${_member1010}** cards`)
            .setFooter(`Server name: ${msg.guild.name}`)
              .setColor('#0373fc')
              //msg.channel.send(r);
              await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))

    }
    if((msg.member.hasPermission("ADMINISTRATOR")) && (msg.content==="Zen!reset"))
        {  msg.reply("Done!");
            client.msggggggggggs= {}
            fssr.writeFile ("./ZenBot/Thehomies.json",JSON.stringify(client.msggggggggggs, null, 4),err=>{
                if(err) throw err;
            });
        }
}

});






/////SERVER ??? Ruina 
//const fssr = require("fs");
client.msgggggggggggs = require ("./Ruina.json");
//const rssr = require("fs");
client.msrrrrrrrrrrrs = require ("./Ruinalb.json");
let tiiiiiiier=0;
client.on('message', async msg => {
    if(msg.channel.id==="705735403143036968")
    {   
        if(typeof client.msgggggggggggs[msg.author.id]==="undefined")
    {
        client.msgggggggggggs [msg.author.id]={
            tier1 : 0,
            tier2 : 0,
            tier3 : 0,
            tier4 : 0,
            tier5 : 0,
            tier6 : 0,
            tier7 : 0
        }
        fssr.writeFile ("./ZenBot/Ruina.json",JSON.stringify(client.msgggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
    }
   
    if((msg.channel.id==="705735403143036968") && (msg.author.id==="673362753489993749")){  
    msg.embeds.forEach((embed) => {
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tiiiiiiier===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);//ala care a luat      
        //const User = Client.User(idbest);
        //console.log(User); 
        client.msgggggggggggs [idbest].tier1++;
        fssr.writeFile ("./ZenBot/Ruina.json",JSON.stringify(client.msgggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgggggggggggs [idbest].tier7=client.msgggggggggggs [idbest].tier1+client.msgggggggggggs [idbest].tier2+client.msgggggggggggs [idbest].tier3+client.msgggggggggggs [idbest].tier4+client.msgggggggggggs [idbest].tier5+client.msgggggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Ruina.json",JSON.stringify(client.msgggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
        let tttt=msg.embeds[0].description;
        tiiiiiiier=0;
      }
      if(tiiiiiiier===2)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);
        tiiiiiiier=0;
         client.msgggggggggggs [idbest].tier2++;
        fssr.writeFile ("./ZenBot/Ruina.json",JSON.stringify(client.msgggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgggggggggggs [idbest].tier7=client.msgggggggggggs [idbest].tier1+client.msgggggggggggs [idbest].tier2+client.msgggggggggggs [idbest].tier3+client.msgggggggggggs [idbest].tier4+client.msgggggggggggs [idbest].tier5+ client.msgggggggggggs[idbest].tier6;
        fssr.writeFile ("./ZenBot/Ruina.json",JSON.stringify(client.msgggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         //const User = Client.User(idbest);
        //console.log(User); 
      
        }
        if(tiiiiiiier===3)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);        
         tier=0;
         client.msgggggggggggs [idbest].tier3++;
        fssr.writeFile ("./ZenBot/Ruina.json",JSON.stringify(client.msgggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgggggggggggs [idbest].tier7=client.msgggggggggggs [idbest].tier1+client.msgggggggggggs [idbest].tier2+client.msgggggggggggs [idbest].tier3+client.msgggggggggggs [idbest].tier4+client.msgggggggggggs [idbest].tier5+client.msgggggggggggs [idbest].tier6;
        fssr.writeFile ("./ZenBot/Ruina.json",JSON.stringify(client.msgggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         
  
      
        }
        if(tiiiiiiier===4)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);     
        tiiiiiiier=0;
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
       
        client.msgggggggggggs [idbest].tier4++;
        fssr.writeFile ("./ZenBot/Ruina.json",JSON.stringify(client.msgggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgggggggggggs [idbest].tier7=client.msgggggggggggs [idbest].tier1+client.msgggggggggggs [idbest].tier2+client.msgggggggggggs [idbest].tier3+client.msgggggggggggs [idbest].tier4+client.msgggggggggggs [idbest].tier5+client.msgggggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Ruina.json",JSON.stringify(client.msgggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
      
        }
        if(tiiiiiiier===5)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);      
        tiiiiiiier=0;
         //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);  
         client.msgggggggggggs [idbest].tier5++;
         fssr.writeFile ("./ZenBot/Ruina.json",JSON.stringify(client.msgggggggggggs, null, 4),err=>{
             if(err) throw err;
         });
         client.msgggggggggggs [idbest].tier7=client.msgggggggggggs [idbest].tier1+client.msgggggggggggs [idbest].tier2+client.msgggggggggggs [idbest].tier3+client.msgggggggggggs [idbest].tier4+client.msgggggggggggs [idbest].tier5+client.msgggggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Ruina.json",JSON.stringify(client.msgggggggggggs, null, 4),err=>{
             if(err) throw err;
         });
       
        }
        if(tiiiiiiier===6)
        {
            const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);        
          //console.log(idbest);
          tiiiiiiier=0;
           client.msgggggggggggs [idbest].tier6++;
           fssr.writeFile ("./ZenBot/Ruina.json",JSON.stringify(client.msgggggggggggs, null, 4),err=>{
               if(err) throw err;
           });
           client.msgggggggggggs [idbest].tier7=client.msgggggggggggs [idbest].tier1+client.msgggggggggggs [idbest].tier2+client.msgggggggggggs [idbest].tier3+client.msgggggggggggs [idbest].tier4+client.msgggggggggggs [idbest].tier5+client.msgggggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Ruina.json",JSON.stringify(client.msgggggggggggs, null, 4),err=>{
               if(err) throw err;
           });
       
          }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    { tiiiiiiier=1;namess=msg.embeds[0].title;
    }
   if(msg.embeds[0].title.includes('Tier: 2'))
    { tiiiiiiier=2;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 3'))
     { tiiiiiiier=3;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 4'))
     {tiiiiiiier=4;namess=msg.embeds[0].title;
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {tiiiiiiier=5;namess=msg.embeds[0].title;
        console.log(`${msg.embeds[0].title} in server 1`)
    } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { tiiiiiiier=6;namess=msg.embeds[0].title;
      console.log(`${msg.embeds[0].title} in server 1`)
    }
      });
  }

     
    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
   { if(msg.content==="Zen!cards" || msg.contet==="Zen!cards")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .addField('<:t1:718765842891800646>``Tier : 1``',client.msgggggggggggs[t].tier1,true)
      .addField('<:t2:718765892019814470>``Tier : 2``',client.msgggggggggggs[t].tier2,true)
      .addField('<:t3:718765963448680448>``Tier : 3``',client.msgggggggggggs[t].tier3,true)
      .addField('<:t4:718766099583205398>``Tier : 4``',client.msgggggggggggs[t].tier4,true)
      .addField('<:t5:718766000824254486>``Tier : 5``',client.msgggggggggggs[t].tier5,true)
      .addField('<:t6:718766066070716426>``Tier : 6``',client.msgggggggggggs[t].tier6,true)
      
      .setDescription(`<@${t}> has claimed **${client.msgggggggggggs[msg.author.id].tier7}** cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0373fc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    .addField('<:t1:718765842891800646>``Tier : 1``',client.msgggggggggggs[t].tier1,true)
    .addField('<:t2:718765892019814470>``Tier : 2``',client.msgggggggggggs[t].tier2,true)
    .addField('<:t3:718765963448680448>``Tier : 3``',client.msgggggggggggs[t].tier3,true)
    .addField('<:t4:718766099583205398>``Tier : 4``',client.msgggggggggggs[t].tier4,true)
    .addField('<:t5:718766000824254486>``Tier : 5``',client.msgggggggggggs[t].tier5,true)
    .addField('<:t6:718766066070716426>``Tier : 6``',client.msgggggggggggs[t].tier6,true)
    
    .setDescription(`${tt} has claimed **${client.msgggggggggggs[t].tier7}** cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#0373fc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
   { if(msg.content==="Zen!showt1" || msg.contet==="Zen!showt1")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msgggggggggggs[msg.author.id].tier1}** Tier: 1 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cccccc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msgggggggggggs[t].tier1}** Tier: 1 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#cccccc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
   { if(msg.content==="Zen!showt2" || msg.contet==="Zen!showt2")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msgggggggggggs[msg.author.id].tier2}** Tier: 2  cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#7aff8d')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msgggggggggggs[t].tier2}** Tier: 2 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#7aff8d')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
    { if(msg.content==="Zen!showt3" || msg.contet==="Zen!showt3")
     {msg.delete();
     let t=msg.author.id;
         const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
       .setTimestamp()
       .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msgggggggggggs[msg.author.id].tier3}** Tier: 3 cards`)
       .setFooter(`Server name: ${msg.guild.name}`)
         .setColor('#58a0e3')
         //msg.channel.send(r);
         return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }  
 
     if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
     {msg.delete();
     let tt =msg.mentions.members.first()|| msg.author;
     let t=tt.id;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
     .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msgggggggggggs[t].tier3}** Tier: 3 cards`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#58a0e3')
       //msg.channel.send(r);
       await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }
     }
     if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt4" || msg.contet==="Zen!showt4")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msgggggggggggs[msg.author.id].tier4}** Tier: 4 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ad58e3')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msgggggggggggs[t].tier4}** Tier: 4 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ad58e3')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt5" || msg.contet==="Zen!showt5")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msgggggggggggs[msg.author.id].tier5}** Tier: 5 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#fff200')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt5")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msgggggggggggs[t].tier5}** Tier: 5 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#fff200')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
     { if(msg.content==="Zen!showt6" || msg.contet==="Zen!showt6")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msgggggggggggs[msg.author.id].tier6}** Tier: 6 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msgggggggggggs[t].tier6}** Tier: 6 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }

      if((msg.content==="Zen!lb")||(msg.content==="zen!lb"))
      {msg.delete();
          let board = Object.entries(client.msgggggggggggs)
               .map(([key, val]) => ({id: key, ...val}))
               .sort((a, b) => b.tier7 - a.tier7);
      client.msrrrrrrrrrrrs=board;
         rssr.writeFile ("./ZenBot/Ruinalb.json",JSON.stringify(client.msrrrrrrrrrrrs, null, 4),err=>{
                 if(err) throw err;
             });
 
             let _member1 = client.msrrrrrrrrrrrs[0].id;
             let _member11 = client.msrrrrrrrrrrrs[0].tier7;
             let _member2 = client.msrrrrrrrrrrrs[1].id;
             let _member22 = client.msrrrrrrrrrrrs[1].tier7;
             let _member3 = client.msrrrrrrrrrrrs[2].id;
             let _member33 = client.msrrrrrrrrrrrs[2].tier7;
             let _member4 = client.msrrrrrrrrrrrs[3].id;
             let _member44 = client.msrrrrrrrrrrrs[3].tier7;
             let _member5 = client.msrrrrrrrrrrrs[4].id;
             let _member55 = client.msrrrrrrrrrrrs[4].tier7;
             let _member6 = client.msrrrrrrrrrrrs[5].id;
             let _member66 = client.msrrrrrrrrrrrs[5].tier7;
             let _member7 = client.msrrrrrrrrrrrs[6].id;
             let _member77 = client.msrrrrrrrrrrrs[6].tier7;
             let _member8 = client.msrrrrrrrrrrrs[7].id;
             let _member88 = client.msrrrrrrrrrrrs[7].tier7;
             let _member9 = client.msrrrrrrrrrrrs[8].id;
             let _member99 = client.msrrrrrrrrrrrs[8].tier7;
             let _member10 = client.msrrrrrrrrrrrs[9].id;
             let _member1010 = client.msrrrrrrrrrrrs[9].tier7;
 
             
             const r= new MessageEmbed()
             .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
             .setTimestamp()
             .setTitle(`Leaderboard for ${msg.guild.name}`)
             //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
             .setDescription(`1)<@${_member1}> has claimed **${_member11}** cards \n 2)<@${_member2}> has claimed **${_member22}** cards \n 3)<@${_member3}> has claimed **${_member33}** cards \n 4)<@${_member4}> has claimed **${_member44}** cards \n 5)<@${_member5}> has claimed **${_member55}** cards \n 6)<@${_member6}> has claimed **${_member66}** cards \n 7)<@${_member7}> has claimed **${_member77}** cards \n 8)<@${_member8}> has claimed **${_member88}** cards \n 9)<@${_member9}> has claimed **${_member99}** cards \n 10)<@${_member10}> has claimed **${_member1010}** cards`)
             .setFooter(`Server name: ${msg.guild.name}`)
               .setColor('#0373fc')
               //msg.channel.send(r);
               await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
 
     }
    if((msg.member.hasPermission("ADMINISTRATOR")) && (msg.content==="Zen!reset"))
        {  msg.reply("Done!");
            client.msgggggggggggs= {}
            fssr.writeFile ("./ZenBot/Ruina.json",JSON.stringify(client.msgggggggggggs, null, 4),err=>{
                if(err) throw err;
            });
        }
}

});



/////SERVER ??? Game Hub 
//const fssr = require("fs");asdasdasd
client.msggggggggggggs = require ("./Hub.json");
//const rssr = require("fs");
client.msrrrrrrrrrrrrs = require ("./Hublb.json");
//let tiiier=0;
client.on('message', async msg => {
    if(msg.channel.id==="703283196720316457")
    {   
        if(typeof client.msggggggggggggs[msg.author.id]==="undefined")
    {
        client.msggggggggggggs [msg.author.id]={
            tier1 : 0,
            tier2 : 0,
            tier3 : 0,
            tier4 : 0,
            tier5 : 0,
            tier6 : 0,
            tier7 : 0
        }
        fssr.writeFile ("./ZenBot/Hub.json",JSON.stringify(client.msggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
    }
   
    if((msg.channel.id==="703283196720316457") && (msg.author.id==="673362753489993749")){  
    msg.embeds.forEach((embed) => {
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tiiier===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);//ala care a luat      
        //const User = Client.User(idbest);
        //console.log(User); 
        client.msggggggggggggs [idbest].tier1++;
        fssr.writeFile ("./ZenBot/Hub.json",JSON.stringify(client.msggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggggggggggggs [idbest].tier7=client.msggggggggggggs [idbest].tier1+client.msggggggggggggs [idbest].tier2+client.msggggggggggggs [idbest].tier3+client.msggggggggggggs [idbest].tier4+client.msggggggggggggs [idbest].tier5+client.msggggggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Hub.json",JSON.stringify(client.msggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
        let tttt=msg.embeds[0].description;
       tiiier=0;
      }
      if(tiiier===2)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);
         tiiier=0;
         client.msggggggggggggs [idbest].tier2++;
        fssr.writeFile ("./ZenBot/Hub.json",JSON.stringify(client.msggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggggggggggggs [idbest].tier7=client.msggggggggggggs [idbest].tier1+client.msggggggggggggs [idbest].tier2+client.msggggggggggggs [idbest].tier3+client.msggggggggggggs [idbest].tier4+client.msggggggggggggs [idbest].tier5+ client.msggggggggggggs[idbest].tier6;
        fssr.writeFile ("./ZenBot/Hub.json",JSON.stringify(client.msggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         //const User = Client.User(idbest);
        //console.log(User); 
      
        }
        if(tiiier===3)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);        
         tier=0;
         client.msggggggggggggs [idbest].tier3++;
        fssr.writeFile ("./ZenBot/Hub.json",JSON.stringify(client.msggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggggggggggggs [idbest].tier7=client.msggggggggggggs [idbest].tier1+client.msggggggggggggs [idbest].tier2+client.msggggggggggggs [idbest].tier3+client.msggggggggggggs [idbest].tier4+client.msggggggggggggs [idbest].tier5+client.msggggggggggggs [idbest].tier6;
        fssr.writeFile ("./ZenBot/Hub.json",JSON.stringify(client.msggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         
  
      
        }
        if(tiiier===4)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);     
         tiiier=0;
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
       
        client.msggggggggggggs [idbest].tier4++;
        fssr.writeFile ("./ZenBot/Hub.json",JSON.stringify(client.msggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggggggggggggs [idbest].tier7=client.msggggggggggggs [idbest].tier1+client.msggggggggggggs [idbest].tier2+client.msggggggggggggs [idbest].tier3+client.msggggggggggggs [idbest].tier4+client.msggggggggggggs [idbest].tier5+client.msggggggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Hub.json",JSON.stringify(client.msggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
      
        }
        if(tiiier===5)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);      
           tiiier=0;
         //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);  
         client.msggggggggggggs [idbest].tier5++;
         fssr.writeFile ("./ZenBot/Hub.json",JSON.stringify(client.msggggggggggggs, null, 4),err=>{
             if(err) throw err;
         });
         client.msggggggggggggs [idbest].tier7=client.msggggggggggggs [idbest].tier1+client.msggggggggggggs [idbest].tier2+client.msggggggggggggs [idbest].tier3+client.msggggggggggggs [idbest].tier4+client.msggggggggggggs [idbest].tier5+client.msggggggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Hub.json",JSON.stringify(client.msggggggggggggs, null, 4),err=>{
             if(err) throw err;
         });
       
        }
        if(tiiier===6)
        {
            const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);        
          //console.log(idbest);
           tiiier=0;
           client.msggggggggggggs [idbest].tier6++;
           fssr.writeFile ("./ZenBot/Hub.json",JSON.stringify(client.msggggggggggggs, null, 4),err=>{
               if(err) throw err;
           });
           client.msggggggggggggs [idbest].tier7=client.msggggggggggggs [idbest].tier1+client.msggggggggggggs [idbest].tier2+client.msggggggggggggs [idbest].tier3+client.msggggggggggggs [idbest].tier4+client.msggggggggggggs [idbest].tier5+client.msggggggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Hub.json",JSON.stringify(client.msggggggggggggs, null, 4),err=>{
               if(err) throw err;
           });
       
          }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    { tiiier=1;namess=msg.embeds[0].title;
    }
   if(msg.embeds[0].title.includes('Tier: 2'))
    { tiiier=2;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 3'))
     { tiiier=3;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 4'))
     {tiiier=4;namess=msg.embeds[0].title;
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {tiiier=5;namess=msg.embeds[0].title;
        console.log(`${msg.embeds[0].title} in server 1`)
    } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { tiiier=6;namess=msg.embeds[0].title;
      console.log(`${msg.embeds[0].title} in server 1`)
    }
      });
  }

     
    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
   { if(msg.content==="Zen!cards" || msg.contet==="Zen!cards")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .addField('<:t1:718765842891800646>``Tier : 1``',client.msggggggggggggs[t].tier1,true)
      .addField('<:t2:718765892019814470>``Tier : 2``',client.msggggggggggggs[t].tier2,true)
      .addField('<:t3:718765963448680448>``Tier : 3``',client.msggggggggggggs[t].tier3,true)
      .addField('<:t4:718766099583205398>``Tier : 4``',client.msggggggggggggs[t].tier4,true)
      .addField('<:t5:718766000824254486>``Tier : 5``',client.msggggggggggggs[t].tier5,true)
      .addField('<:t6:718766066070716426>``Tier : 6``',client.msggggggggggggs[t].tier6,true)
      
      .setDescription(`<@${t}> has claimed **${client.msggggggggggggs[msg.author.id].tier7}** cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0373fc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    .addField('<:t1:718765842891800646>``Tier : 1``',client.msggggggggggggs[t].tier1,true)
    .addField('<:t2:718765892019814470>``Tier : 2``',client.msggggggggggggs[t].tier2,true)
    .addField('<:t3:718765963448680448>``Tier : 3``',client.msggggggggggggs[t].tier3,true)
    .addField('<:t4:718766099583205398>``Tier : 4``',client.msggggggggggggs[t].tier4,true)
    .addField('<:t5:718766000824254486>``Tier : 5``',client.msggggggggggggs[t].tier5,true)
    .addField('<:t6:718766066070716426>``Tier : 6``',client.msggggggggggggs[t].tier6,true)
    
    .setDescription(`${tt} has claimed **${client.msggggggggggggs[t].tier7}** cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#0373fc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
   { if(msg.content==="Zen!showt1" || msg.contet==="Zen!showt1")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msggggggggggggs[msg.author.id].tier1}** Tier: 1 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cccccc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msggggggggggggs[t].tier1}** Tier: 1 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#cccccc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
   { if(msg.content==="Zen!showt2" || msg.contet==="Zen!showt2")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msggggggggggggs[msg.author.id].tier2}** Tier: 2  cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#7aff8d')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msggggggggggggs[t].tier2}** Tier: 2 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#7aff8d')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
    { if(msg.content==="Zen!showt3" || msg.contet==="Zen!showt3")
     {msg.delete();
     let t=msg.author.id;
         const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
       .setTimestamp()
       .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msggggggggggggs[msg.author.id].tier3}** Tier: 3 cards`)
       .setFooter(`Server name: ${msg.guild.name}`)
         .setColor('#58a0e3')
         //msg.channel.send(r);
         return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }  
 
     if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
     {msg.delete();
     let tt =msg.mentions.members.first()|| msg.author;
     let t=tt.id;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
     .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msggggggggggggs[t].tier3}** Tier: 3 cards`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#58a0e3')
       //msg.channel.send(r);
       await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }
     }
     if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt4" || msg.contet==="Zen!showt4")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msggggggggggggs[msg.author.id].tier4}** Tier: 4 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ad58e3')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msggggggggggggs[t].tier4}** Tier: 4 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ad58e3')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt5" || msg.contet==="Zen!showt5")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msggggggggggggs[msg.author.id].tier5}** Tier: 5 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#fff200')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt5")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msggggggggggggs[t].tier5}** Tier: 5 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#fff200')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
     { if(msg.content==="Zen!showt6" || msg.contet==="Zen!showt6")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msggggggggggggs[msg.author.id].tier6}** Tier: 6 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msggggggggggggs[t].tier6}** Tier: 6 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }

    if((msg.content==="Zen!lb")||(msg.content==="zen!lb"))
     {msg.delete();
         let board = Object.entries(client.msggggggggggggs)
              .map(([key, val]) => ({id: key, ...val}))
              .sort((a, b) => b.tier7 - a.tier7);
     client.msrrrrrrrrrrrrs=board;
        rssr.writeFile ("./ZenBot/Hublb.json",JSON.stringify(client.msrrrrrrrrrrrrs, null, 4),err=>{
                if(err) throw err;
            });

            let _member1 = client.msrrrrrrrrrrrrs[0].id;
            let _member11 = client.msrrrrrrrrrrrrs[0].tier7;
            let _member2 = client.msrrrrrrrrrrrrs[1].id;
            let _member22 = client.msrrrrrrrrrrrrs[1].tier7;
            let _member3 = client.msrrrrrrrrrrrrs[2].id;
            let _member33 = client.msrrrrrrrrrrrrs[2].tier7;
            let _member4 = client.msrrrrrrrrrrrrs[3].id;
            let _member44 = client.msrrrrrrrrrrrrs[3].tier7;
            let _member5 = client.msrrrrrrrrrrrrs[4].id;
            let _member55 = client.msrrrrrrrrrrrrs[4].tier7;
            

            
            const r= new MessageEmbed()
            .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
            .setTimestamp()
            .setTitle(`Leaderboard for ${msg.guild.name}`)
            //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
            .setDescription(`1)<@${_member1}> has claimed **${_member11}** cards \n 2)<@${_member2}> has claimed **${_member22}** cards \n 3)<@${_member3}> has claimed **${_member33}** cards \n 4)<@${_member4}> has claimed **${_member44}** cards \n 5)<@${_member5}> has claimed **${_member55}** cards`)
            .setFooter(`Server name: ${msg.guild.name}`)
              .setColor('#0373fc')
              //msg.channel.send(r);
              await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))

    }
    if((msg.member.hasPermission("ADMINISTRATOR")) && (msg.content==="Zen!reset"))
        {  msg.reply("Done!");
            client.msggggggggggggs= {}
            fssr.writeFile ("./ZenBot/Hub.json",JSON.stringify(client.msggggggggggggs, null, 4),err=>{
                if(err) throw err;
            });
        }
}

});












/////SERVER 19 AnimeMemesSekai
//const fssr = require("fs");
client.msgggggggggggggs = require ("./Sekai.json");
//const rssr = require("fs");
client.msrrrrrrrrrrrrrs = require ("./Sekailb.json");
let tiiiiiiiier=0;
client.on('message', async msg => {
    if(msg.channel.id==="708259848407744512")
    {   
        if(typeof client.msgggggggggggggs[msg.author.id]==="undefined")
    {
        client.msgggggggggggggs [msg.author.id]={
            tier1 : 0,
            tier2 : 0,
            tier3 : 0,
            tier4 : 0,
            tier5 : 0,
            tier6 : 0,
            tier7 : 0
        }
        fssr.writeFile ("./ZenBot/Sekai.json",JSON.stringify(client.msgggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
    }
   
    if((msg.channel.id==="708259848407744512") && (msg.author.id==="673362753489993749")){  
    msg.embeds.forEach((embed) => {
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tiiiiiiiier===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);//ala care a luat      
        //const User = Client.User(idbest);
        //console.log(User); 
        client.msgggggggggggggs [idbest].tier1++;
        fssr.writeFile ("./ZenBot/Sekai.json",JSON.stringify(client.msgggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgggggggggggggs [idbest].tier7=client.msgggggggggggggs [idbest].tier1+client.msgggggggggggggs [idbest].tier2+client.msgggggggggggggs [idbest].tier3+client.msgggggggggggggs [idbest].tier4+client.msgggggggggggggs [idbest].tier5+client.msgggggggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Sekai.json",JSON.stringify(client.msgggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
        let tttt=msg.embeds[0].description;
        tiiiiiiiier=0;
      }
      if(tiiiiiiiier===2)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);
        tiiiiiiiier=0;
         client.msgggggggggggggs [idbest].tier2++;
        fssr.writeFile ("./ZenBot/Sekai.json",JSON.stringify(client.msgggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgggggggggggggs [idbest].tier7=client.msgggggggggggggs [idbest].tier1+client.msgggggggggggggs [idbest].tier2+client.msgggggggggggggs [idbest].tier3+client.msgggggggggggggs [idbest].tier4+client.msgggggggggggggs [idbest].tier5+ client.msgggggggggggggs[idbest].tier6;
        fssr.writeFile ("./ZenBot/Sekai.json",JSON.stringify(client.msgggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         //const User = Client.User(idbest);
        //console.log(User); 
      
        }
        if(tiiiiiiiier===3)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);        
         tier=0;
         client.msgggggggggggggs [idbest].tier3++;
        fssr.writeFile ("./ZenBot/Sekai.json",JSON.stringify(client.msgggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgggggggggggggs [idbest].tier7=client.msgggggggggggggs [idbest].tier1+client.msgggggggggggggs [idbest].tier2+client.msgggggggggggggs [idbest].tier3+client.msgggggggggggggs [idbest].tier4+client.msgggggggggggggs [idbest].tier5+client.msgggggggggggggs [idbest].tier6;
        fssr.writeFile ("./ZenBot/Sekai.json",JSON.stringify(client.msgggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         
  
      
        }
        if(tiiiiiiiier===4)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);     
        tiiiiiiiier=0;
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
       
        client.msgggggggggggggs [idbest].tier4++;
        fssr.writeFile ("./ZenBot/Sekai.json",JSON.stringify(client.msgggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msgggggggggggggs [idbest].tier7=client.msgggggggggggggs [idbest].tier1+client.msgggggggggggggs [idbest].tier2+client.msgggggggggggggs [idbest].tier3+client.msgggggggggggggs [idbest].tier4+client.msgggggggggggggs [idbest].tier5+client.msgggggggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Sekai.json",JSON.stringify(client.msgggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
      
        }
        if(tiiiiiiiier===5)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);      
        tiiiiiiiier=0;
         //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);  
         client.msgggggggggggggs [idbest].tier5++;
         fssr.writeFile ("./ZenBot/Sekai.json",JSON.stringify(client.msgggggggggggggs, null, 4),err=>{
             if(err) throw err;
         });
         client.msgggggggggggggs [idbest].tier7=client.msgggggggggggggs [idbest].tier1+client.msgggggggggggggs [idbest].tier2+client.msgggggggggggggs [idbest].tier3+client.msgggggggggggggs [idbest].tier4+client.msgggggggggggggs [idbest].tier5+client.msgggggggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Sekai.json",JSON.stringify(client.msgggggggggggggs, null, 4),err=>{
             if(err) throw err;
         });
       
        }
        if(tiiiiiiiier===6)
        {
            const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);        
          //console.log(idbest);
          tiiiiiiiier=0;
           client.msgggggggggggggs [idbest].tier6++;
           fssr.writeFile ("./ZenBot/Sekai.json",JSON.stringify(client.msgggggggggggggs, null, 4),err=>{
               if(err) throw err;
           });
           client.msgggggggggggggs [idbest].tier7=client.msgggggggggggggs [idbest].tier1+client.msgggggggggggggs [idbest].tier2+client.msgggggggggggggs [idbest].tier3+client.msgggggggggggggs [idbest].tier4+client.msgggggggggggggs [idbest].tier5+client.msgggggggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Sekai.json",JSON.stringify(client.msgggggggggggggs, null, 4),err=>{
               if(err) throw err;
           });
       
          }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    { tiiiiiiiier=1;namess=msg.embeds[0].title;
    }
   if(msg.embeds[0].title.includes('Tier: 2'))
    { tiiiiiiiier=2;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 3'))
     { tiiiiiiiier=3;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 4'))
     {tiiiiiiiier=4;namess=msg.embeds[0].title;
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {tiiiiiiiier=5;namess=msg.embeds[0].title;
        console.log(`${msg.embeds[0].title} in server 1`)
    } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { tiiiiiiiier=6;namess=msg.embeds[0].title;
      console.log(`${msg.embeds[0].title} in server 1`)
    }
      });
  }

     
    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
   { if(msg.content==="Zen!cards" || msg.contet==="Zen!cards")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .addField('<:t1:718765842891800646>``Tier : 1``',client.msgggggggggggggs[t].tier1,true)
      .addField('<:t2:718765892019814470>``Tier : 2``',client.msgggggggggggggs[t].tier2,true)
      .addField('<:t3:718765963448680448>``Tier : 3``',client.msgggggggggggggs[t].tier3,true)
      .addField('<:t4:718766099583205398>``Tier : 4``',client.msgggggggggggggs[t].tier4,true)
      .addField('<:t5:718766000824254486>``Tier : 5``',client.msgggggggggggggs[t].tier5,true)
      .addField('<:t6:718766066070716426>``Tier : 6``',client.msgggggggggggggs[t].tier6,true)
      
      .setDescription(`<@${t}> has claimed **${client.msgggggggggggggs[msg.author.id].tier7}** cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0373fc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    .addField('<:t1:718765842891800646>``Tier : 1``',client.msgggggggggggggs[t].tier1,true)
    .addField('<:t2:718765892019814470>``Tier : 2``',client.msgggggggggggggs[t].tier2,true)
    .addField('<:t3:718765963448680448>``Tier : 3``',client.msgggggggggggggs[t].tier3,true)
    .addField('<:t4:718766099583205398>``Tier : 4``',client.msgggggggggggggs[t].tier4,true)
    .addField('<:t5:718766000824254486>``Tier : 5``',client.msgggggggggggggs[t].tier5,true)
    .addField('<:t6:718766066070716426>``Tier : 6``',client.msgggggggggggggs[t].tier6,true)
    
    .setDescription(`${tt} has claimed **${client.msgggggggggggggs[t].tier7}** cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#0373fc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
   { if(msg.content==="Zen!showt1" || msg.contet==="Zen!showt1")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msgggggggggggggs[msg.author.id].tier1}** Tier: 1 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cccccc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msgggggggggggggs[t].tier1}** Tier: 1 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#cccccc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
   { if(msg.content==="Zen!showt2" || msg.contet==="Zen!showt2")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msgggggggggggggs[msg.author.id].tier2}** Tier: 2  cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#7aff8d')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msgggggggggggggs[t].tier2}** Tier: 2 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#7aff8d')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
    { if(msg.content==="Zen!showt3" || msg.contet==="Zen!showt3")
     {msg.delete();
     let t=msg.author.id;
         const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
       .setTimestamp()
       .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msgggggggggggggs[msg.author.id].tier3}** Tier: 3 cards`)
       .setFooter(`Server name: ${msg.guild.name}`)
         .setColor('#58a0e3')
         //msg.channel.send(r);
         return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }  
 
     if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
     {msg.delete();
     let tt =msg.mentions.members.first()|| msg.author;
     let t=tt.id;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
     .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msgggggggggggggs[t].tier3}** Tier: 3 cards`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#58a0e3')
       //msg.channel.send(r);
       await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }
     }
     if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt4" || msg.contet==="Zen!showt4")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msgggggggggggggs[msg.author.id].tier4}** Tier: 4 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ad58e3')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msgggggggggggggs[t].tier4}** Tier: 4 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ad58e3')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt5" || msg.contet==="Zen!showt5")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msgggggggggggggs[msg.author.id].tier5}** Tier: 5 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#fff200')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt5")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msgggggggggggggs[t].tier5}** Tier: 5 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#fff200')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
     { if(msg.content==="Zen!showt6" || msg.contet==="Zen!showt6")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msgggggggggggggs[msg.author.id].tier6}** Tier: 6 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msgggggggggggggs[t].tier6}** Tier: 6 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }

      if((msg.content==="Zen!lb")||(msg.content==="zen!lb"))
      {msg.delete();
          let board = Object.entries(client.msgggggggggggggs)
               .map(([key, val]) => ({id: key, ...val}))
               .sort((a, b) => b.tier7 - a.tier7);
      client.msrrrrrrrrrrrrrs=board;
         rssr.writeFile ("./ZenBot/Sekailb.json",JSON.stringify(client.msrrrrrrrrrrrrrs, null, 4),err=>{
                 if(err) throw err;
             });
 
             let _member1 = client.msrrrrrrrrrrrrrs[0].id;
             let _member11 = client.msrrrrrrrrrrrrrs[0].tier7;
             let _member2 = client.msrrrrrrrrrrrrrs[1].id;
             let _member22 = client.msrrrrrrrrrrrrrs[1].tier7;
             let _member3 = client.msrrrrrrrrrrrrrs[2].id;
             let _member33 = client.msrrrrrrrrrrrrrs[2].tier7;
             let _member4 = client.msrrrrrrrrrrrrrs[3].id;
             let _member44 = client.msrrrrrrrrrrrrrs[3].tier7;
             let _member5 = client.msrrrrrrrrrrrrrs[4].id;
             let _member55 = client.msrrrrrrrrrrrrrs[4].tier7;
             let _member6 = client.msrrrrrrrrrrrrrs[5].id;
             let _member66 = client.msrrrrrrrrrrrrrs[5].tier7;
             let _member7 = client.msrrrrrrrrrrrrrs[6].id;
             let _member77 = client.msrrrrrrrrrrrrrs[6].tier7;
             let _member8 = client.msrrrrrrrrrrrrrs[7].id;
             let _member88 = client.msrrrrrrrrrrrrrs[7].tier7;
             let _member9 = client.msrrrrrrrrrrrrrs[8].id;
             let _member99 = client.msrrrrrrrrrrrrrs[8].tier7;
             let _member10 = client.msrrrrrrrrrrrrrs[9].id;
             let _member1010 = client.msrrrrrrrrrrrrrs[9].tier7;
 
             
             const r= new MessageEmbed()
             .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
             .setTimestamp()
             .setTitle(`Leaderboard for ${msg.guild.name}`)
             //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
             .setDescription(`1)<@${_member1}> has claimed **${_member11}** cards \n 2)<@${_member2}> has claimed **${_member22}** cards \n 3)<@${_member3}> has claimed **${_member33}** cards \n 4)<@${_member4}> has claimed **${_member44}** cards \n 5)<@${_member5}> has claimed **${_member55}** cards \n 6)<@${_member6}> has claimed **${_member66}** cards \n 7)<@${_member7}> has claimed **${_member77}** cards \n 8)<@${_member8}> has claimed **${_member88}** cards \n 9)<@${_member9}> has claimed **${_member99}** cards \n 10)<@${_member10}> has claimed **${_member1010}** cards`)
             .setFooter(`Server name: ${msg.guild.name}`)
               .setColor('#0373fc')
               //msg.channel.send(r);
               await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
 
     }
    if((msg.member.hasPermission("ADMINISTRATOR")) && (msg.content==="Zen!reset"))
        {  msg.reply("Done!");
            client.msgggggggggggggs= {}
            fssr.writeFile ("./ZenBot/Sekai.json",JSON.stringify(client.msgggggggggggggs, null, 4),err=>{
                if(err) throw err;
            });
        }
}

});


/////SERVER 20 Ways to Dye
//const fssr = require("fs");
client.msggggggggggggggs = require ("./Ways.json");
//const rssr = require("fs");
client.msrrrrrrrrrrrrrrs = require ("./Wayslb.json");
let tiiiiiiiiier=0;
client.on('message', async msg => {
    if(msg.channel.id==="716691973582618674")
    {   
        if(typeof client.msggggggggggggggs[msg.author.id]==="undefined")
    {
        client.msggggggggggggggs [msg.author.id]={
            tier1 : 0,
            tier2 : 0,
            tier3 : 0,
            tier4 : 0,
            tier5 : 0,
            tier6 : 0,
            tier7 : 0
        }
        fssr.writeFile ("./ZenBot/Ways.json",JSON.stringify(client.msggggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
    }
   
    if((msg.channel.id==="716691973582618674") && (msg.author.id==="673362753489993749")){  
    msg.embeds.forEach((embed) => {
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tiiiiiiiiier===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);//ala care a luat      
        //const User = Client.User(idbest);
        //console.log(User); 
        client.msggggggggggggggs [idbest].tier1++;
        fssr.writeFile ("./ZenBot/Ways.json",JSON.stringify(client.msggggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggggggggggggggs [idbest].tier7=client.msggggggggggggggs [idbest].tier1+client.msggggggggggggggs [idbest].tier2+client.msggggggggggggggs [idbest].tier3+client.msggggggggggggggs [idbest].tier4+client.msggggggggggggggs [idbest].tier5+client.msggggggggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Ways.json",JSON.stringify(client.msggggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
        let tttt=msg.embeds[0].description;
        tiiiiiiiiier=0;
      }
      if(tiiiiiiiiier===2)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);
        tiiiiiiiiier=0;
         client.msggggggggggggggs [idbest].tier2++;
        fssr.writeFile ("./ZenBot/Ways.json",JSON.stringify(client.msggggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggggggggggggggs [idbest].tier7=client.msggggggggggggggs [idbest].tier1+client.msggggggggggggggs [idbest].tier2+client.msggggggggggggggs [idbest].tier3+client.msggggggggggggggs [idbest].tier4+client.msggggggggggggggs [idbest].tier5+ client.msggggggggggggggs[idbest].tier6;
        fssr.writeFile ("./ZenBot/Ways.json",JSON.stringify(client.msggggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         //const User = Client.User(idbest);
        //console.log(User); 
      
        }
        if(tiiiiiiiiier===3)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);        
         tier=0;
         client.msggggggggggggggs [idbest].tier3++;
        fssr.writeFile ("./ZenBot/Ways.json",JSON.stringify(client.msggggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggggggggggggggs [idbest].tier7=client.msggggggggggggggs [idbest].tier1+client.msggggggggggggggs [idbest].tier2+client.msggggggggggggggs [idbest].tier3+client.msggggggggggggggs [idbest].tier4+client.msggggggggggggggs [idbest].tier5+client.msggggggggggggggs [idbest].tier6;
        fssr.writeFile ("./ZenBot/Ways.json",JSON.stringify(client.msggggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
         
  
      
        }
        if(tiiiiiiiiier===4)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);     
        tiiiiiiiiier=0;
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
       
        client.msggggggggggggggs [idbest].tier4++;
        fssr.writeFile ("./ZenBot/Ways.json",JSON.stringify(client.msggggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
        client.msggggggggggggggs [idbest].tier7=client.msggggggggggggggs [idbest].tier1+client.msggggggggggggggs [idbest].tier2+client.msggggggggggggggs [idbest].tier3+client.msggggggggggggggs [idbest].tier4+client.msggggggggggggggs [idbest].tier5+client.msggggggggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Ways.json",JSON.stringify(client.msggggggggggggggs, null, 4),err=>{
            if(err) throw err;
        });
      
        }
        if(tiiiiiiiiier===5)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);      
        tiiiiiiiiier=0;
         //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);  
         client.msggggggggggggggs [idbest].tier5++;
         fssr.writeFile ("./ZenBot/Ways.json",JSON.stringify(client.msggggggggggggggs, null, 4),err=>{
             if(err) throw err;
         });
         client.msggggggggggggggs [idbest].tier7=client.msggggggggggggggs [idbest].tier1+client.msggggggggggggggs [idbest].tier2+client.msggggggggggggggs [idbest].tier3+client.msggggggggggggggs [idbest].tier4+client.msggggggggggggggs [idbest].tier5+client.msggggggggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Ways.json",JSON.stringify(client.msggggggggggggggs, null, 4),err=>{
             if(err) throw err;
         });
       
        }
        if(tiiiiiiiiier===6)
        {
            const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);        
          //console.log(idbest);
          tiiiiiiiiier=0;
           client.msggggggggggggggs [idbest].tier6++;
           fssr.writeFile ("./ZenBot/Ways.json",JSON.stringify(client.msggggggggggggggs, null, 4),err=>{
               if(err) throw err;
           });
           client.msggggggggggggggs [idbest].tier7=client.msggggggggggggggs [idbest].tier1+client.msggggggggggggggs [idbest].tier2+client.msggggggggggggggs [idbest].tier3+client.msggggggggggggggs [idbest].tier4+client.msggggggggggggggs [idbest].tier5+client.msggggggggggggggs [idbest].tier6;
           fssr.writeFile ("./ZenBot/Ways.json",JSON.stringify(client.msggggggggggggggs, null, 4),err=>{
               if(err) throw err;
           });
       
          }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    { tiiiiiiiiier=1;namess=msg.embeds[0].title;
    }
   if(msg.embeds[0].title.includes('Tier: 2'))
    { tiiiiiiiiier=2;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 3'))
     { tiiiiiiiiier=3;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 4'))
     {tiiiiiiiiier=4;namess=msg.embeds[0].title;
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {tiiiiiiiiier=5;namess=msg.embeds[0].title;
        console.log(`${msg.embeds[0].title} in server 1`)
    } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { tiiiiiiiiier=6;namess=msg.embeds[0].title;
      console.log(`${msg.embeds[0].title} in server 1`)
    }
      });
  }

     
    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
   { if(msg.content==="Zen!cards" || msg.contet==="Zen!cards")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .addField('<:t1:718765842891800646>``Tier : 1``',client.msggggggggggggggs[t].tier1,true)
      .addField('<:t2:718765892019814470>``Tier : 2``',client.msggggggggggggggs[t].tier2,true)
      .addField('<:t3:718765963448680448>``Tier : 3``',client.msggggggggggggggs[t].tier3,true)
      .addField('<:t4:718766099583205398>``Tier : 4``',client.msggggggggggggggs[t].tier4,true)
      .addField('<:t5:718766000824254486>``Tier : 5``',client.msggggggggggggggs[t].tier5,true)
      .addField('<:t6:718766066070716426>``Tier : 6``',client.msggggggggggggggs[t].tier6,true)
      
      .setDescription(`<@${t}> has claimed **${client.msggggggggggggggs[msg.author.id].tier7}** cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0373fc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    .addField('<:t1:718765842891800646>``Tier : 1``',client.msggggggggggggggs[t].tier1,true)
    .addField('<:t2:718765892019814470>``Tier : 2``',client.msggggggggggggggs[t].tier2,true)
    .addField('<:t3:718765963448680448>``Tier : 3``',client.msggggggggggggggs[t].tier3,true)
    .addField('<:t4:718766099583205398>``Tier : 4``',client.msggggggggggggggs[t].tier4,true)
    .addField('<:t5:718766000824254486>``Tier : 5``',client.msggggggggggggggs[t].tier5,true)
    .addField('<:t6:718766066070716426>``Tier : 6``',client.msggggggggggggggs[t].tier6,true)
    
    .setDescription(`${tt} has claimed **${client.msggggggggggggggs[t].tier7}** cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#0373fc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
   { if(msg.content==="Zen!showt1" || msg.contet==="Zen!showt1")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msggggggggggggggs[msg.author.id].tier1}** Tier: 1 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cccccc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msggggggggggggggs[t].tier1}** Tier: 1 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#cccccc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
   { if(msg.content==="Zen!showt2" || msg.contet==="Zen!showt2")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msggggggggggggggs[msg.author.id].tier2}** Tier: 2  cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#7aff8d')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msggggggggggggggs[t].tier2}** Tier: 2 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#7aff8d')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
    { if(msg.content==="Zen!showt3" || msg.contet==="Zen!showt3")
     {msg.delete();
     let t=msg.author.id;
         const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
       .setTimestamp()
       .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msggggggggggggggs[msg.author.id].tier3}** Tier: 3 cards`)
       .setFooter(`Server name: ${msg.guild.name}`)
         .setColor('#58a0e3')
         //msg.channel.send(r);
         return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }  
 
     if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
     {msg.delete();
     let tt =msg.mentions.members.first()|| msg.author;
     let t=tt.id;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
     .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msggggggggggggggs[t].tier3}** Tier: 3 cards`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#58a0e3')
       //msg.channel.send(r);
       await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }
     }
     if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt4" || msg.contet==="Zen!showt4")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msggggggggggggggs[msg.author.id].tier4}** Tier: 4 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ad58e3')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msggggggggggggggs[t].tier4}** Tier: 4 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ad58e3')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt5" || msg.contet==="Zen!showt5")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msggggggggggggggs[msg.author.id].tier5}** Tier: 5 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#fff200')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt5")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msggggggggggggggs[t].tier5}** Tier: 5 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#fff200')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
     { if(msg.content==="Zen!showt6" || msg.contet==="Zen!showt6")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msggggggggggggggs[msg.author.id].tier6}** Tier: 6 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msggggggggggggggs[t].tier6}** Tier: 6 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }

      if((msg.content==="Zen!lb")||(msg.content==="zen!lb"))
      {msg.delete();
          let board = Object.entries(client.msggggggggggggggs)
               .map(([key, val]) => ({id: key, ...val}))
               .sort((a, b) => b.tier7 - a.tier7);
      client.msrrrrrrrrrrrrrrs=board;
         rssr.writeFile ("./ZenBot/Wayslb.json",JSON.stringify(client.msrrrrrrrrrrrrrrs, null, 4),err=>{
                 if(err) throw err;
             });
 
             let _member1 = client.msrrrrrrrrrrrrrrs[0].id;
             let _member11 = client.msrrrrrrrrrrrrrrs[0].tier7;
             let _member2 = client.msrrrrrrrrrrrrrrs[1].id;
             let _member22 = client.msrrrrrrrrrrrrrrs[1].tier7;
             let _member3 = client.msrrrrrrrrrrrrrrs[2].id;
             let _member33 = client.msrrrrrrrrrrrrrrs[2].tier7;
             let _member4 = client.msrrrrrrrrrrrrrrs[3].id;
             let _member44 = client.msrrrrrrrrrrrrrrs[3].tier7;
             let _member5 = client.msrrrrrrrrrrrrrrs[4].id;
             let _member55 = client.msrrrrrrrrrrrrrrs[4].tier7;
             let _member6 = client.msrrrrrrrrrrrrrrs[5].id;
             let _member66 = client.msrrrrrrrrrrrrrrs[5].tier7;
             let _member7 = client.msrrrrrrrrrrrrrrs[6].id;
             let _member77 = client.msrrrrrrrrrrrrrrs[6].tier7;
             let _member8 = client.msrrrrrrrrrrrrrrs[7].id;
             let _member88 = client.msrrrrrrrrrrrrrrs[7].tier7;
             let _member9 = client.msrrrrrrrrrrrrrrs[8].id;
             let _member99 = client.msrrrrrrrrrrrrrrs[8].tier7;
             let _member10 = client.msrrrrrrrrrrrrrrs[9].id;
             let _member1010 = client.msrrrrrrrrrrrrrrs[9].tier7;
 
             
             const r= new MessageEmbed()
             .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
             .setTimestamp()
             .setTitle(`Leaderboard for ${msg.guild.name}`)
             //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
             .setDescription(`1)<@${_member1}> has claimed **${_member11}** cards \n 2)<@${_member2}> has claimed **${_member22}** cards \n 3)<@${_member3}> has claimed **${_member33}** cards \n 4)<@${_member4}> has claimed **${_member44}** cards \n 5)<@${_member5}> has claimed **${_member55}** cards \n 6)<@${_member6}> has claimed **${_member66}** cards \n 7)<@${_member7}> has claimed **${_member77}** cards \n 8)<@${_member8}> has claimed **${_member88}** cards \n 9)<@${_member9}> has claimed **${_member99}** cards \n 10)<@${_member10}> has claimed **${_member1010}** cards`)
             .setFooter(`Server name: ${msg.guild.name}`)
               .setColor('#0373fc')
               //msg.channel.send(r);
               await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
 
     }
    if((msg.member.hasPermission("ADMINISTRATOR")) && (msg.content==="Zen!reset"))
        {  msg.reply("Done!");
            client.msggggggggggggggs= {}
            fssr.writeFile ("./ZenBot/Ways.json",JSON.stringify(client.msggggggggggggggs, null, 4),err=>{
                if(err) throw err;
            });
        }
}

});











/////Viper
//const fssr = require("fs");
client.viper = require ("./Viper.json");
//const rssr = require("fs");
client.viperlb=require ("./Viperlb.json");

client.on('message', async msg => {
    if(msg.channel.id==="481750600401289216")
    {   
        if(typeof client.viper[msg.author.id]==="undefined")
    {
        client.viper [msg.author.id]={
            tier7 : 0
        }
        fssr.writeFile ("./ZenBot/Viper.json",JSON.stringify(client.viper, null, 4),err=>{
            if(err) throw err;
        });
    }
  

//logs!!!
    if(msg.content.includes('+1') &&(msg.author.id==="573290240354156578"))
    { 
      let x=msg.mentions.users.first() || msg.author;
     let y=x.id;
     console.log(y);
     client.viper[y].tier7++;
      fssr.writeFile ("./ZenBot/Viper.json",JSON.stringify(client.viper, null, 4),err=>{
        if(err) throw err;
      });
    }
    if(msg.content.includes('-1') &&(msg.author.id==="573290240354156578"))
    { 
      let x=msg.mentions.users.first() || msg.author;
     let y=x.id;
     client.viper[y].tier7--;
      fssr.writeFile ("./ZenBot/Viper.json",JSON.stringify(client.viper, null, 4),err=>{
        if(err) throw err;
      });
    }
    

  
     


  

      if(((msg.content==="Zen!lb")||(msg.content==="zen!lb")) && (msg.author.id==="573290240354156578"))
      {msg.delete();
          let board = Object.entries(client.viper)
               .map(([key, val]) => ({id: key, ...val}))
               .sort((a, b) => b.tier7 - a.tier7);
      client.viperlb=board;
         rssr.writeFile ("./ZenBot/Viperlb.json",JSON.stringify(client.viperlb, null, 4),err=>{
                 if(err) throw err;
             });
 
             let _member1 = client.viperlb[0].id;
             let _member11 = client.viperlb[0].tier7;
             let _member2 = client.viperlb[1].id;
             let _member22 = client.viperlb[1].tier7;
             let _member3 = client.viperlb[2].id;
             let _member33 = client.viperlb[2].tier7;
             let _member4 = client.viperlb[3].id;
             let _member44 = client.viperlb[3].tier7;
             let _member5 = client.viperlb[4].id;
             let _member55 = client.viperlb[4].tier7;
         
 
             
             const r= new MessageEmbed()
             .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
             .setTimestamp()
             .setTitle(`Leaderboard for ${msg.guild.name}`)
             //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
             .setDescription(`1)<@${_member1}> has **${_member11}** points \n 2)<@${_member2}> has **${_member22}** points \n 3)<@${_member3}> has **${_member33}** points \n 4)<@${_member4}> has **${_member44}** points \n 5)<@${_member5}> has **${_member55}** points`)
             .setFooter(`Server name: ${msg.guild.name}`)
               .setColor('#0373fc')
               //msg.channel.send(r);
               await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))}
    
 
    }
 });





















//json.maxItemsComputed
 //TEST!!!!!!!!!!!!!!
//const fssr = require("fs");
client.ttest = require ('./trtr');
//const rssr = require("fs");
client.tteest=require ('./trtrlb.json');

client.on('message', async msg => {
    //if(msg.channel.id==="723220628433535006"){   
        if(typeof client.ttest[msg.guild.id]==="undefined")
    {
        client.ttest [msg.guild.id]={
            
        }
        fssr.writeFile ("./ZenBot/trtr.json",JSON.stringify(client.ttest, null, 4),err=>{
            if(err) throw err;
        });
    }

    if(typeof client.ttest[msg.guild.id][msg.author.id]==="undefined")
    {
        client.ttest [msg.guild.id][msg.author.id]={
          tier1 : 0,
          tier2 : 0,
          tier3 : 0,
          tier4 : 0,
          tier5 : 0,
          tier6 : 0,
          tier7 : 0
            
        }
        fssr.writeFile ("./ZenBot/trtr.json",JSON.stringify(client.ttest, null, 4),err=>{
            if(err) throw err;
        });
    }
    if((msg.content==="Zlb")||(msg.content==="zlb"))
      {msg.delete();
        client.tteest=client.ttest[msg.guild.id];
        rssr.writeFile ("./ZenBot/trtrlb.json",JSON.stringify(client.tteest, null, 4),err=>{
                 if(err) throw err;
             });
          let board = Object.entries(client.tteest)
               .map(([key, val]) => ({id: key, ...val}))
               .sort((a, b) => b.tier7 - a.tier7);
      client.tteest=board;
         rssr.writeFile ("./ZenBot/trtrlb.json",JSON.stringify(client.tteest, null, 4),err=>{
                 if(err) throw err;
             });
      }
//logs!!!
    if(msg.content.includes('+1') &&(msg.author.id==="701108556996411512"))
    { 
      let x=msg.mentions.users.first() || msg.author;
     let y=x.id;
     console.log(y);
     client.ttest[msg.guild.id][y].tier7++;
      fssr.writeFile (__dirname,"/trtr.json",JSON.stringify(client.ttest, null, 4),err=>{
        if(err) throw err;
      });
    }
    if(msg.content.includes('-1') &&(msg.author.id==="701108556996411512"))
    { 
      let x=msg.mentions.users.first() || msg.author;
     let y=x.id;
     client.ttest[msg.guild.id][y].tier7--;
      fssr.writeFile (__dirname,"/trtr.json",JSON.stringify(client.ttest, null, 4),err=>{
        if(err) throw err;
      });
    }
  
  //}
})
















client.on('message', (message) => {
if(message.content.startsWith("Zen!name"))
{ console.log(__dirname)
  let pre="Zen!name";
  let args = message.content.substring(pre.length).split(" ");
  let text = args.join(" ");
  message.guild.members.cache.get(client.user.id).setNickname(text);
  console.log(text);
}
/*if(message.content.startsWith("Zen!test1"))
{ let username = client.user.get(message.author.id).username;
  console.log(username);
  let id = client.user.find('name', 'name here').id;
  let pre="Zen!myname";
  let args = message.content.substring(pre.length).split(" ");
  let text = args.join(" ");
  message.guild.members.cache.get(message.author.id).setNickname(text);
  console.log(text);
}*/
});

config ({
  path: __dirname + "/.env"
});

client.login(process.env.token);    











































/////SERVER 1  Daddys Cave
client.msps = require ("./claims.json");
client.msws = require ("./claimslb.json");
let tierr=0;
client.on('message', async msg => {
  if(msg.content==="asdasdasd")
  console.log(client.msps[msg.guild.id][msg.author.id].tier7)
    if(msg.channel.id==="700363955213959178")
    {   
      if(typeof client.msps[msg.guild.id][msg.author.id]==="undefined")
      {
          client.msps[msg.guild.id][msg.author.id]={
            tier1 : 0,
            tier2 : 0,
            tier3 : 0,
            tier4 : 0,
            tier5 : 0,
            tier6 : 0,
            tier7 : 0
              
          }
          fssr.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
              if(err) throw err;
          });
      }
    if((msg.channel.id==="700363955213959178") && (msg.author.id==="673362753489993749")){  
    msg.embeds.forEach((embed) => {
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tierr===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);//ala care a luat      
        //const User = Client.User(idbest);
        //console.log(User); 
        client.msps [msg.guild.id][idbest].tier1++;
        fs.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
            if(err) throw err;
        });
        //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
        let tttt=msg.embeds[0].description;
       tierr=0;
       client.msps [msg.guild.id][idbest].tier7=client.msps [msg.guild.id][idbest].tier1+client.msps [msg.guild.id][idbest].tier2+client.msps [msg.guild.id][idbest].tier3+client.msps [msg.guild.id][idbest].tier4+client.msps[msg.guild.id] [idbest].tier5+client.msps[msg.guild.id] [idbest].tier6;
       fs.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
        if(err) throw err;
    });
      }
      if(tierr===2)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);
         tierr=0;
         client.msps [msg.guild.id][idbest].tier2++;
        fs.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
            if(err) throw err;
        });
        client.msps [msg.guild.id][idbest].tier7=client.msps [msg.guild.id][idbest].tier1+client.msps [msg.guild.id][idbest].tier2+client.msps [msg.guild.id][idbest].tier3+client.msps [msg.guild.id][idbest].tier4+client.msps[msg.guild.id] [idbest].tier5+client.msps[msg.guild.id] [idbest].tier6;
        fs.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
         if(err) throw err;
     });
        }
        if(tierr===3)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);        
         tierr=0;
         client.msps [msg.guild.id][idbest].tier3++;
        fs.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
            if(err) throw err;
        });
       
        client.msps [msg.guild.id][idbest].tier7=client.msps [msg.guild.id][idbest].tier1+client.msps [msg.guild.id][idbest].tier2+client.msps [msg.guild.id][idbest].tier3+client.msps [msg.guild.id][idbest].tier4+client.msps[msg.guild.id] [idbest].tier5+client.msps[msg.guild.id] [idbest].tier6;
        fs.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
         if(err) throw err;
     });
      
        }
        if(tierr===4)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);     
         tierr=0;
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
       
        client.msps [msg.guild.id][idbest].tier4++;
        fs.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
            if(err) throw err;
        });
        client.msps [msg.guild.id][idbest].tier7=client.msps [msg.guild.id][idbest].tier1+client.msps [msg.guild.id][idbest].tier2+client.msps [msg.guild.id][idbest].tier3+client.msps [msg.guild.id][idbest].tier4+client.msps[msg.guild.id] [idbest].tier5+client.msps[msg.guild.id] [idbest].tier6;
           fs.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
            if(err) throw err;
        });
        
        }
        if(tierr===5)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);      
           tierr=0;
         //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);  
         client.msps [msg.guild.id][idbest].tier5++;
         fs.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
             if(err) throw err;
         });
         client.msps [msg.guild.id][idbest].tier7=client.msps [msg.guild.id][idbest].tier1+client.msps [msg.guild.id][idbest].tier2+client.msps [msg.guild.id][idbest].tier3+client.msps [msg.guild.id][idbest].tier4+client.msps[msg.guild.id] [idbest].tier5+client.msps[msg.guild.id] [idbest].tier6;
           fs.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
            if(err) throw err;
        });
        
        }
        if(tierr===6)
        {
            const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);        
          //console.log(idbest);
           tierr=0;
           client.msps [msg.guild.id][idbest].tier6++;
           fs.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
               if(err) throw err;
           });
           client.msps [msg.guild.id][idbest].tier7=client.msps [msg.guild.id][idbest].tier1+client.msps [msg.guild.id][idbest].tier2+client.msps [msg.guild.id][idbest].tier3+client.msps [msg.guild.id][idbest].tier4+client.msps[msg.guild.id] [idbest].tier5+client.msps[msg.guild.id] [idbest].tier6;
           fs.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
            if(err) throw err;
        });
          }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    { tierr=1;namess=msg.embeds[0].title;
    }
   if(msg.embeds[0].title.includes('Tier: 2'))
    { tierr=2;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 3'))
     { tierr=3;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 4'))
     {tierr=4;namess=msg.embeds[0].title;
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {tierr=5;namess=msg.embeds[0].title;
        console.log(`${msg.embeds[0].title} in server 1`)
    } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { tierr=6;namess=msg.embeds[0].title;
      console.log(`${msg.embeds[0].title} in server 1`)
    }
      });
  }

     
    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
   { if(msg.content==="Zen!cards" || msg.contet==="Zen!cards")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .addField('<:t1:718765842891800646>``Tier : 1``',client.msps[msg.guild.id][t].tier1,true)
      .addField('<:t2:718765892019814470>``Tier : 2``',client.msps[msg.guild.id][t].tier2,true)
      .addField('<:t3:718765963448680448>``Tier : 3``',client.msps[msg.guild.id][t].tier3,true)
      .addField('<:t4:718766099583205398>``Tier : 4``',client.msps[msg.guild.id][t].tier4,true)
      .addField('<:t5:718766000824254486>``Tier : 5``',client.msps[msg.guild.id][t].tier5,true)
      .addField('<:t6:718766066070716426>``Tier : 6``',client.msps[msg.guild.id][t].tier6,true)
      
      .setDescription(`<@${t}> has claimed **${client.msps[msg.guild.id][msg.author.id].tier7}** cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0373fc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    .addField('<:t1:718765842891800646>``Tier : 1``',client.msps[msg.guild.id][t].tier1,true)
    .addField('<:t2:718765892019814470>``Tier : 2``',client.msps[msg.guild.id][t].tier2,true)
    .addField('<:t3:718765963448680448>``Tier : 3``',client.msps[msg.guild.id][t].tier3,true)
    .addField('<:t4:718766099583205398>``Tier : 4``',client.msps[msg.guild.id][t].tier4,true)
    .addField('<:t5:718766000824254486>``Tier : 5``',client.msps[msg.guild.id][t].tier5,true)
    .addField('<:t6:718766066070716426>``Tier : 6``',client.msps[msg.guild.id][t].tier6,true)
    
    .setDescription(`${tt} has claimed **${client.msps[msg.guild.id][t].tier7}** cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#0373fc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
   { if(msg.content==="Zen!showt1" || msg.contet==="Zen!showt1")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msps[msg.guild.id][msg.author.id].tier1}** Tier: 1 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cccccc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msps[msg.guild.id][t].tier1}** Tier: 1 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#cccccc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
   { if(msg.content==="Zen!showt2" || msg.contet==="Zen!showt2")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msps[msg.guild.id][msg.author.id].tier2}** Tier: 2  cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#7aff8d')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msps[msg.guild.id][t].tier2}** Tier: 2 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#7aff8d')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
    { if(msg.content==="Zen!showt3" || msg.contet==="Zen!showt3")
     {msg.delete();
     let t=msg.author.id;
         const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
       .setTimestamp()
       .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msps[msg.guild.id][msg.author.id].tier3}** Tier: 3 cards`)
       .setFooter(`Server name: ${msg.guild.name}`)
         .setColor('#58a0e3')
         //msg.channel.send(r);
         return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }  
 
     if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
     {msg.delete();
     let tt =msg.mentions.members.first()|| msg.author;
     let t=tt.id;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
     .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msps[msg.guild.id][t].tier3}** Tier: 3 cards`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#58a0e3')
       //msg.channel.send(r);
       await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }
     }
     if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt4" || msg.contet==="Zen!showt4")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msps[msg.guild.id][msg.author.id].tier4}** Tier: 4 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ad58e3')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msps[msg.guild.id][t].tier4}** Tier: 4 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ad58e3')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt5" || msg.contet==="Zen!showt5")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msps[msg.guild.id][msg.author.id].tier5}** Tier: 5 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#fff200')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt5")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msps[msg.guild.id][t].tier5}** Tier: 5 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#fff200')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
     { if(msg.content==="Zen!showt6" || msg.contet==="Zen!showt6")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msps[msg.guild.id][msg.author.id].tier6}** Tier: 6 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msps[msg.guild.id][t].tier6}** Tier: 6 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }

    if((msg.content==="Z!lb")||(msg.content==="z!lb")||(msg.content==="Zen!lb")||(msg.content==="zen!lb"))
     {msg.delete();
         let board = Object.entries(client.msps[msg.guild.id])
              .map(([key, val]) => ({id: key, ...val}))
              .sort((a, b) => b.tier7 - a.tier7);
     client.msws=board;
        rs.writeFile ("./ZenBot/claimslb.json",JSON.stringify(client.msws, null, 4),err=>{
                if(err) throw err;
            });

            let _member1 = client.msws[0].id;
            let _member11 = client.msws[0].tier7;
            let _member2 = client.msws[1].id;
            let _member22 = client.msws[1].tier7;
            let _member3 = client.msws[2].id;
            let _member33 = client.msws[2].tier7;
            let _member4 = client.msws[3].id;
            let _member44 = client.msws[3].tier7;
            let _member5 = client.msws[4].id;
            let _member55 = client.msws[4].tier7;
            let _member6 = client.msws[5].id;
            let _member66 = client.msws[5].tier7;
            let _member7 = client.msws[6].id;
            let _member77 = client.msws[6].tier7;
            let _member8 = client.msws[7].id;
            let _member88 = client.msws[7].tier7;
            let _member9 = client.msws[8].id;
            let _member99 = client.msws[8].tier7;
            let _member10 = client.msws[9].id;
            let _member1010 = client.msws[9].tier7;

            
            const r= new MessageEmbed()
            .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
            .setTimestamp()
            .setTitle(`Leaderboard for ${msg.guild.name}`)
            //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
            .setDescription(`1)<@${_member1}> has claimed **${_member11}** cards \n 2)<@${_member2}> has claimed **${_member22}** cards \n 3)<@${_member3}> has claimed **${_member33}** cards \n 4)<@${_member4}> has claimed **${_member44}** cards \n 5)<@${_member5}> has claimed **${_member55}** cards \n 6)<@${_member6}> has claimed **${_member66}** cards \n 7)<@${_member7}> has claimed **${_member77}** cards \n 8)<@${_member8}> has claimed **${_member88}** cards \n 9)<@${_member9}> has claimed **${_member99}** cards \n 10)<@${_member10}> has claimed **${_member1010}** cards`)
            .setFooter(`Server name: ${msg.guild.name}`)
              .setColor('#0373fc')
              //msg.channel.send(r);
              await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))

    }
    if(((msg.member.hasPermission("ADMINISTRATOR"))|| msg.author.id==="701108556996411512") && (msg.content==="Z!reset claims"))
        {  msg.reply("Done!");
            client.msps[msg.guild.id]= {}
            fs.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
                if(err) throw err;
            });
        }
}
});





/////SERVER 21 Akiri;-;
let tierrr=0;
client.on('message', async msg => {
  if(msg.content==="asdasdasd")
  console.log(client.msps[msg.guild.id][msg.author.id].tier7)
    if(msg.channel.id==="701433483746344981")
    {   
      if(typeof client.msps[msg.guild.id][msg.author.id]==="undefined")
      {
          client.msps[msg.guild.id][msg.author.id]={
            tier1 : 0,
            tier2 : 0,
            tier3 : 0,
            tier4 : 0,
            tier5 : 0,
            tier6 : 0,
            tier7 : 0
              
          }
          fssr.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
              if(err) throw err;
          });
      }
    if((msg.channel.id==="701433483746344981") && (msg.author.id==="673362753489993749")){  
    msg.embeds.forEach((embed) => {
    if(typeof msg.embeds[0].title==='undefined')
    { 
      if(msg.embeds[0].description.startsWith('<:green:678796543679004697>'))//msg.embeds[0].description.includes("got the card!") &&(tier===1))
      {
      if(tierrr===1)
      {const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);//ala care a luat      
        //const User = Client.User(idbest);
        //console.log(User); 
        client.msps [msg.guild.id][idbest].tier1++;
        fs.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
            if(err) throw err;
        });
        //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
        let tttt=msg.embeds[0].description;
       tierrr=0;
       client.msps [msg.guild.id][idbest].tier7=client.msps [msg.guild.id][idbest].tier1+client.msps [msg.guild.id][idbest].tier2+client.msps [msg.guild.id][idbest].tier3+client.msps [msg.guild.id][idbest].tier4+client.msps[msg.guild.id] [idbest].tier5+client.msps[msg.guild.id] [idbest].tier6;
       fs.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
        if(err) throw err;
    });
      }
      if(tierrr===2)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);
         tierrr=0;
         client.msps [msg.guild.id][idbest].tier2++;
        fs.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
            if(err) throw err;
        });
        client.msps [msg.guild.id][idbest].tier7=client.msps [msg.guild.id][idbest].tier1+client.msps [msg.guild.id][idbest].tier2+client.msps [msg.guild.id][idbest].tier3+client.msps [msg.guild.id][idbest].tier4+client.msps[msg.guild.id] [idbest].tier5+client.msps[msg.guild.id] [idbest].tier6;
        fs.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
         if(err) throw err;
     });
        }
        if(tierrr===3)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);        
         tierrr=0;
         client.msps [msg.guild.id][idbest].tier3++;
        fs.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
            if(err) throw err;
        });
       
        client.msps [msg.guild.id][idbest].tier7=client.msps [msg.guild.id][idbest].tier1+client.msps [msg.guild.id][idbest].tier2+client.msps [msg.guild.id][idbest].tier3+client.msps [msg.guild.id][idbest].tier4+client.msps[msg.guild.id] [idbest].tier5+client.msps[msg.guild.id] [idbest].tier6;
        fs.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
         if(err) throw err;
     });
      
        }
        if(tierrr===4)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);     
         tierrr=0;
        // client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);
       
        client.msps [msg.guild.id][idbest].tier4++;
        fs.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
            if(err) throw err;
        });
        client.msps [msg.guild.id][idbest].tier7=client.msps [msg.guild.id][idbest].tier1+client.msps [msg.guild.id][idbest].tier2+client.msps [msg.guild.id][idbest].tier3+client.msps [msg.guild.id][idbest].tier4+client.msps[msg.guild.id] [idbest].tier5+client.msps[msg.guild.id] [idbest].tier6;
           fs.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
            if(err) throw err;
        });
        
        }
        if(tierrr===5)
      {
          const stsr = msg.embeds[0].description;
        let idbest=stsr.substring(31, 49);        
        //console.log(idbest);      
           tierrr=0;
         //client.channels.cache.get(p).send(`<@${idbest}> has claimed ${namess}`);  
         client.msps [msg.guild.id][idbest].tier5++;
         fs.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
             if(err) throw err;
         });
         client.msps [msg.guild.id][idbest].tier7=client.msps [msg.guild.id][idbest].tier1+client.msps [msg.guild.id][idbest].tier2+client.msps [msg.guild.id][idbest].tier3+client.msps [msg.guild.id][idbest].tier4+client.msps[msg.guild.id] [idbest].tier5+client.msps[msg.guild.id] [idbest].tier6;
           fs.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
            if(err) throw err;
        });
        
        }
        if(tierrr===6)
        {
            const stsr = msg.embeds[0].description;
          let idbest=stsr.substring(31, 49);        
          //console.log(idbest);
           tierrr=0;
           client.msps [msg.guild.id][idbest].tier6++;
           fs.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
               if(err) throw err;
           });
           client.msps [msg.guild.id][idbest].tier7=client.msps [msg.guild.id][idbest].tier1+client.msps [msg.guild.id][idbest].tier2+client.msps [msg.guild.id][idbest].tier3+client.msps [msg.guild.id][idbest].tier4+client.msps[msg.guild.id] [idbest].tier5+client.msps[msg.guild.id] [idbest].tier6;
           fs.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
            if(err) throw err;
        });
          }
    } 
         return 
    }


//logs!!!
    if(msg.embeds[0].title.includes('Tier: 1'))
    { tierrr=1;namess=msg.embeds[0].title;
    }
   if(msg.embeds[0].title.includes('Tier: 2'))
    { tierrr=2;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 3'))
     { tierrr=3;namess=msg.embeds[0].title;
    }
     if(msg.embeds[0].title.includes('Tier: 4'))
     {tierrr=4;namess=msg.embeds[0].title;
      }
    if(msg.embeds[0].title.includes('Tier: 5'))
     {tierrr=5;namess=msg.embeds[0].title;
        console.log(`${msg.embeds[0].title} in server 1`)
    } 
    if(msg.embeds[0].title.includes('Tier: 6'))
    { tierrr=6;namess=msg.embeds[0].title;
      console.log(`${msg.embeds[0].title} in server 1`)
    }
      });
  }

     
    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
   { if(msg.content==="Zen!cards" || msg.contet==="Zen!cards")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .addField('<:t1:718765842891800646>``Tier : 1``',client.msps[msg.guild.id][t].tier1,true)
      .addField('<:t2:718765892019814470>``Tier : 2``',client.msps[msg.guild.id][t].tier2,true)
      .addField('<:t3:718765963448680448>``Tier : 3``',client.msps[msg.guild.id][t].tier3,true)
      .addField('<:t4:718766099583205398>``Tier : 4``',client.msps[msg.guild.id][t].tier4,true)
      .addField('<:t5:718766000824254486>``Tier : 5``',client.msps[msg.guild.id][t].tier5,true)
      .addField('<:t6:718766066070716426>``Tier : 6``',client.msps[msg.guild.id][t].tier6,true)
      
      .setDescription(`<@${t}> has claimed **${client.msps[msg.guild.id][msg.author.id].tier7}** cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#0373fc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!cards"))||(msg.content.startsWith("zen!cards")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    .addField('<:t1:718765842891800646>``Tier : 1``',client.msps[msg.guild.id][t].tier1,true)
    .addField('<:t2:718765892019814470>``Tier : 2``',client.msps[msg.guild.id][t].tier2,true)
    .addField('<:t3:718765963448680448>``Tier : 3``',client.msps[msg.guild.id][t].tier3,true)
    .addField('<:t4:718766099583205398>``Tier : 4``',client.msps[msg.guild.id][t].tier4,true)
    .addField('<:t5:718766000824254486>``Tier : 5``',client.msps[msg.guild.id][t].tier5,true)
    .addField('<:t6:718766066070716426>``Tier : 6``',client.msps[msg.guild.id][t].tier6,true)
    
    .setDescription(`${tt} has claimed **${client.msps[msg.guild.id][t].tier7}** cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#0373fc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
   { if(msg.content==="Zen!showt1" || msg.contet==="Zen!showt1")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msps[msg.guild.id][msg.author.id].tier1}** Tier: 1 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#cccccc')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt1"))||(msg.content.startsWith("zen!showt1")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t1:718765842891800646> <@${t}> has claimed **${client.msps[msg.guild.id][t].tier1}** Tier: 1 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#cccccc')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
   { if(msg.content==="Zen!showt2" || msg.contet==="Zen!showt2")
    {msg.delete();
    let t=msg.author.id;
        const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msps[msg.guild.id][msg.author.id].tier2}** Tier: 2  cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#7aff8d')
        //msg.channel.send(r);
        return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }  

    if((msg.content.startsWith("Zen!showt2"))||(msg.content.startsWith("zen!showt2")))
    {msg.delete();
    let tt =msg.mentions.members.first()|| msg.author;
    let t=tt.id;
    const r= new MessageEmbed()
    .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
    .setTimestamp()
    //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
    .setDescription(`<:t2:718765892019814470> <@${t}> has claimed **${client.msps[msg.guild.id][t].tier2}** Tier: 2 cards`)
    .setFooter(`Server name: ${msg.guild.name}`)
      .setColor('#7aff8d')
      //msg.channel.send(r);
      await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
    }
    }
    if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
    { if(msg.content==="Zen!showt3" || msg.contet==="Zen!showt3")
     {msg.delete();
     let t=msg.author.id;
         const r= new MessageEmbed()
       .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
       .setTimestamp()
       .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msps[msg.guild.id][msg.author.id].tier3}** Tier: 3 cards`)
       .setFooter(`Server name: ${msg.guild.name}`)
         .setColor('#58a0e3')
         //msg.channel.send(r);
         return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }  
 
     if((msg.content.startsWith("Zen!showt3"))||(msg.content.startsWith("zen!showt3")))
     {msg.delete();
     let tt =msg.mentions.members.first()|| msg.author;
     let t=tt.id;
     const r= new MessageEmbed()
     .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
     .setTimestamp()
     //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
     .setDescription(`<:t3:718765963448680448> <@${t}> has claimed **${client.msps[msg.guild.id][t].tier3}** Tier: 3 cards`)
     .setFooter(`Server name: ${msg.guild.name}`)
       .setColor('#58a0e3')
       //msg.channel.send(r);
       await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
     }
     }
     if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt4" || msg.contet==="Zen!showt4")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msps[msg.guild.id][msg.author.id].tier4}** Tier: 4 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ad58e3')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt4"))||(msg.content.startsWith("zen!showt4")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t4:718766099583205398> <@${t}> has claimed **${client.msps[msg.guild.id][t].tier4}** Tier: 4 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ad58e3')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt4")))
     { if(msg.content==="Zen!showt5" || msg.contet==="Zen!showt5")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msps[msg.guild.id][msg.author.id].tier5}** Tier: 5 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#fff200')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt5"))||(msg.content.startsWith("zen!showt5")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t5:718766000824254486> <@${t}> has claimed **${client.msps[msg.guild.id][t].tier5}** Tier: 5 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#fff200')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
     { if(msg.content==="Zen!showt6" || msg.contet==="Zen!showt6")
      {msg.delete();
      let t=msg.author.id;
          const r= new MessageEmbed()
        .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
        .setTimestamp()
        .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msps[msg.guild.id][msg.author.id].tier6}** Tier: 6 cards`)
        .setFooter(`Server name: ${msg.guild.name}`)
          .setColor('#ea2222')
          //msg.channel.send(r);
          return await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }  
  
      if((msg.content.startsWith("Zen!showt6"))||(msg.content.startsWith("zen!showt6")))
      {msg.delete();
      let tt =msg.mentions.members.first()|| msg.author;
      let t=tt.id;
      const r= new MessageEmbed()
      .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
      .setTimestamp()
      //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
      .setDescription(`<:t6:718766066070716426> <@${t}> has claimed **${client.msps[msg.guild.id][t].tier6}** Tier: 6 cards`)
      .setFooter(`Server name: ${msg.guild.name}`)
        .setColor('#ea2222')
        //msg.channel.send(r);
        await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))
      }
      }

    if((msg.content==="Z!lb")||(msg.content==="z!lb")||(msg.content==="Zen!lb")||(msg.content==="zen!lb"))
     {msg.delete();
         let board = Object.entries(client.msps[msg.guild.id])
              .map(([key, val]) => ({id: key, ...val}))
              .sort((a, b) => b.tier7 - a.tier7);
     client.msws=board;
        rs.writeFile ("./ZenBot/claimslb.json",JSON.stringify(client.msws, null, 4),err=>{
                if(err) throw err;
            });

            let _member1 = client.msws[0].id;
            let _member11 = client.msws[0].tier7;
            let _member2 = client.msws[1].id;
            let _member22 = client.msws[1].tier7;
            let _member3 = client.msws[2].id;
            let _member33 = client.msws[2].tier7;
            let _member4 = client.msws[3].id;
            let _member44 = client.msws[3].tier7;
            let _member5 = client.msws[4].id;
            let _member55 = client.msws[4].tier7;
            let _member6 = client.msws[5].id;
            let _member66 = client.msws[5].tier7;
            let _member7 = client.msws[6].id;
            let _member77 = client.msws[6].tier7;
            let _member8 = client.msws[7].id;
            let _member88 = client.msws[7].tier7;
            let _member9 = client.msws[8].id;
            let _member99 = client.msws[8].tier7;
            let _member10 = client.msws[9].id;
            let _member1010 = client.msws[9].tier7;

            
            const r= new MessageEmbed()
            .setAuthor(`${msg.author.username}`,msg.author.avatarURL())
            .setTimestamp()
            .setTitle(`Leaderboard for ${msg.guild.name}`)
            //.setDescription(`<:t1:718765842891800646><@${tt}> has claimed **${client.msgs[msg.author.id].tier1}** ``Tier : 1``cards`)
            .setDescription(`1)<@${_member1}> has claimed **${_member11}** cards \n 2)<@${_member2}> has claimed **${_member22}** cards \n 3)<@${_member3}> has claimed **${_member33}** cards \n 4)<@${_member4}> has claimed **${_member44}** cards \n 5)<@${_member5}> has claimed **${_member55}** cards \n 6)<@${_member6}> has claimed **${_member66}** cards \n 7)<@${_member7}> has claimed **${_member77}** cards \n 8)<@${_member8}> has claimed **${_member88}** cards \n 9)<@${_member9}> has claimed **${_member99}** cards \n 10)<@${_member10}> has claimed **${_member1010}** cards`)
            .setFooter(`Server name: ${msg.guild.name}`)
              .setColor('#0373fc')
              //msg.channel.send(r);
              await msg.channel.send(r).then(r => r.delete({ timeout: 9000 }))

    }
    if(((msg.member.hasPermission("ADMINISTRATOR"))|| msg.author.id==="701108556996411512") && (msg.content==="Z!reset claims"))
        {  msg.reply("Done!");
            client.msps[msg.guild.id]= {}
            fs.writeFile ("./ZenBot/claims.json",JSON.stringify(client.msps, null, 4),err=>{
                if(err) throw err;
            });
        }
}
});

