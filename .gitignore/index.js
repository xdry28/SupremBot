const Discord = require('discord.js')
const bot = new Discord.Client
var prefix = ("$")

bot.on('ready', function () {
    bot.user.setActivity("Détruire l'humanité").catch(console.error)
    console.log("Bot connecté").catch(console.error)

})

//return message.channel.send('Bienvenue, nouveau sujet '+member.displayName)


bot.on('guildMemberAdd', function (member) {

    message.member.addRole('522902109902077973')
        .then(console.log)
        .catch(console.error);
    message.channel.send('Bienvenue, nouveau sujet ' + member.displayName)
})


bot.on('message', function (message) {
    if (message.content === '$work') {
        message.reply("1")
    }
    if (message.content === prefix + "help") {
        message.channel.send("**SupremBot** utilise le préfixe **$** pour fonctionner et permet entre autre d'aider l'Empereur Suprême dans sa gestion du serveur")
    }
    if (message.content === prefix + "die") {
        message.channel.send("Je meurs.")
    }
})

bot.login(process.env.TOKEN)
