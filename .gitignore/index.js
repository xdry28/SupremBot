const Discord = require('discord.js')
const bot = new Discord.Client
var prefix = ("$")

bot.on('ready', function () {
    bot.user.setActivity("Détruire l'humanité, $help")
    console.log("Bot connecté avec succès")
})
bot.login(process.env.TOKEN)

bot.on('message', function (message) {
    if (message.content === '$work') {
        message.reply("Seul l'Empereur peut m'utiliser comme il le souhaite")
    }
    if (message.content === prefix + "help"){
        message.channel.send("**SupremBot** utilise le préfixe **$** pour fonctionner et permet entre autre d'aider l'Empereur Suprême dans sa gestion du serveur")
        console.log("Commande help demandé")
    }
    if (message.content === prefix + "die"){
        message.channel.send("Je meurs.")
        console.log("Commande help demandé")
    }
    if (message.author === 'xdry28') {
        message.channel.send("**SupremBot**")
    }
})
