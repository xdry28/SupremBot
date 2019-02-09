const Discord = require('discord.js')
const bot = new Discord.Client
var prefix = ("$")


bot.on('ready', function () {

    bot.user.setActivity("Détruire l'humanité")
    console.log("Bot connecté")
})


bot.on('guildMemberAdd', function (member) {

    message.member.addRole('522902109902077973')
        .then(console.log)
        .catch(console.error);
    message.channel.send('Bienvenue, nouveau sujet ' + member.displayName)
})


bot.on('message', function (message) {

    if (message.content === '$work') {
        message.reply("7")
    }
    if (message.content === prefix + "help") {
        message.channel.send("**SupremBot** utilise le préfixe **$** pour fonctionner et permet entre autre d'aider l'Empereur Suprême dans sa gestion du serveur")
    }
    if (message.content === prefix + "play") {
        let voiceChannel = message.guild.channels
        .filter(function (channel) {return channel.type === 'voice'})
        .first()
        voiceChannel 
        .join
        .then(function (connection) {
            connection.playFile('./Teleboubizes.wav')
        })
    }
})


bot.login(process.env.TOKEN)
