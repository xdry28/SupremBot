const Discord = require('discord.js')
const bot = new Discord.Client
const Ping = require('./commands/ping')
const Play = require('./commands/play')
var prefix = ("$")


bot.on('ready', function () {
    bot.user.setActivity("Détruire l'humanité")
    console.log("Bot connecté")
})

//return message.channel.send('Bienvenue, nouveau sujet '+member.displayName)


bot.on('guildMemberAdd', function (member) {

    message.member.addRole('522902109902077973')
        .then(console.log)
        .catch(console.error);
    message.channel.send('Bienvenue, nouveau sujet ' + member.displayName)
})


bot.on('message', function (message) {
    let commandUser =
        Ping.parse(message)
    if (message.content === '$work') {
        message.reply("5")
    }
    if (message.content === prefix + "help") {
        message.channel.send("**SupremBot** utilise le préfixe **$** pour fonctionner et permet entre autre d'aider l'Empereur Suprême dans sa gestion du serveur")
    }
})

bot.login(process.env.TOKEN)
