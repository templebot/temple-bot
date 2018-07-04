const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDYzODQyODE4ODAxMjcwODA0.Dh2TXw.CA-R7mkOsQcSnD4eY8CQ23OIY8U';
const config = require("./config.json");

client.on("ready", () => {
 
  console.log(`Started with ${client.users.size} users, and ${client.guilds.size} guilds with ${client.channels.size} channels.`);
 
  client.user.setActivity(`t$`);




});

client.on("message", async message => {
 
  if(message.author.bot) return;
 
  if(message.content.indexOf(config.prefix) !== 0) return;
 
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
  if(command === 'hi') {
    message.channel.send('hey guyyyyyyys!');
  }

  

   if(command === "kick") {
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }

  if(command === "ban") {
    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }

if(command === "caboose") {
  var answers = [
    "https://cdn.discordapp.com/attachments/463800570549895198/463861787935375370/I_Hate_babies_by_Bobfleadip.jpg",
    "https://cdn.discordapp.com/attachments/463800570549895198/463861790091116554/tumblr_mo2a1vlQef1rhp124o1_400.gif",
    "https://cdn.discordapp.com/attachments/463800570549895198/463862065547837462/latest.png",
    "https://cdn.discordapp.com/attachments/463800570549895198/463862226059526150/538453.png",
    "https://cdn.discordapp.com/attachments/463800570549895198/463862565123129346/caboose_by_crosknight.png",
    "https://cdn.discordapp.com/attachments/463800570549895198/463862744672763904/source.png",
    "https://cdn.discordapp.com/attachments/463800570549895198/463862984322842665/caboose_quote_by_duchess_of_dismal-d5o6cag.png",
    "https://cdn.discordapp.com/attachments/463800570549895198/463863098873479170/4996c11b07a517a6956225fe8f5794bf_view.png",
    "https://cdn.discordapp.com/attachments/463800570549895198/463863308043157505/superthumb.png",
    "https://cdn.discordapp.com/attachments/463800570549895198/463800769875804171/0f678a5f-4b23-4e9d-b9a5-8b942f7e3a5f.png",
  ]
 
  var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
 
  message.channel.send(randomAnswer);
}


  if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
  }

  if(command === "gayscale") {
    var answers = [
    "gay",
    "a lesbian",
    "bisexual",
  ]
 var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    const sayMessage = args.join(" ");
    message.channel.send(sayMessage +" is " + randomAnswer);
  }

  if(command === "transscale") {
    var answers = [
    "a trans man",
    "a trans woman",
    "nonbinary",
    "**cis**",
  ]
 var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    const sayMessage = args.join(" ");
    message.channel.send(sayMessage +" is " + randomAnswer);
  }

  if(command === "freelancer") {
    var answers = [
    "a freelancer",
    "not a freelancer",
  ]
 var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    const sayMessage = args.join(" ");
    message.channel.send(sayMessage +" is " + randomAnswer);
  }

  if(command === "quote") {
  var answers = [
    "It's one of life's great mysteries, isn't it? Why are we here? I mean, are we the product of some... cosmic coincidence? Or is there really a God, watching everything, you know, with a plan for us and stuff. I don't know man, but it keeps me up at night.",
    " I just refuse to call him Private Donut.",
    "I am feeling much better now, and, I can fly. * Jumps off the cliff * (shouting) I am flying! *thump* Ow! The sky is very hard.",
    "I LOVE BLOOD AND VIOLENCE! I'VE GOT A BONER FOR MURDER!",
    "Oh yeah? Well there's no you either! So I guess if I'm not on the team and you're not on the team, then nobody's on the goddamn team. The team sucks!",
    "I can't believe I donated organs for this fucking war.",
    "It's not pink, it's lightish red!",
    "Son of Ben and Jerry, how am I going to eat all this ice cream?",
    "MY NAME IS MICHAEL J CABOOSE AND I HATE BABIES!",
    "No you have me confused with a doctor. Doctors help people, medics just make them more comfortable as they die.",
    "How do you even find chips in a desert temple!",
    "do you ever wonder why we're here?",
    "All of our zombie-survival plans involve Shooting Griff in the face",
    "You just got sarged!",
    
  ]
 
  var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
 
  message.channel.send(randomAnswer);
}

if(command === 'unsc') {
    message.channel.send('fuck you fuck you fuck you fuck you fuck you fuck you fuck you fuck you fuck you fuck you fuck you fuck you fuck you fuck you fuck you fuck you fuck you fuck you fuck you fuck you fuck you ');
  }


});

client.login('NDYzODQyODE4ODAxMjcwODA0.Dh2TXw.CA-R7mkOsQcSnD4eY8CQ23OIY8U');