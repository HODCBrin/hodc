const Discord = require('discord.js');
const { prefix, token} = require('./config.json');
const client = new Discord.Client(); 

client.once('ready', () => {
    console.log('Ready!')
})

client.on('message', message => {
    if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {

    //console.log(message.content);
    if(message.content.startsWith(`${prefix}kick`)) {
        //message.channel.send("Kick")

        let member = message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(":wave:" + member.displayName + " has been kicked")
            })
        }
    } 
})
client.on('message', message => {

    if(message.content.startsWith(`${prefix}twitch`)) {
        message.channel.send("Hey " + message.author.username + ", follow <https://twitch.tv/hodc> for great streams!") 
    } 
})
client.on('message', message => {
    if(message.content.startsWith(`${prefix}group`))
    let membersWithRole = message.guild.members.filter(member => {
        return member.roles.find("HODC", roleName);
    }).map(member => {
        return member.user.username;
    })

    let embed = new Discord.RichEmbed({
        "title": `Our team`,
        "description": membersWithRole.join("HODC"),
        "color": 0xFFFF
    });
    return message.channel.send({embed});
} )
client.login(process.env.token);