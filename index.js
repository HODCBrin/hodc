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
        message.channel.send("Hey" + new.displayName + "Follow our :twitch: twitch on twitch.tv/hodc") 
    } 
})
client.login(process.env.token);