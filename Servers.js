const { Client, Collection, Discord,MessageEmbed, MessageAttachment,Attachment} = require('discord.js');
const client = new Client({
    disableEveryone: true
  });
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
        return ret= await client.channels.cache.get(x).send(r);
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
 client.login("NzEwNDQwMDIwNjc0MzQ3MTA5.Xr0e1A.neJGgYiJuJVTgUWfAkCypR9Lmh4");
