const Discord = require('discord.js')
const bot = new Discord.Client
var prefix = ("$")

bot.on('ready', function () {
    bot.user.setActivity("Détruire l'humanité")
    console.log("Bot connecté")
})

bot.on('GuildMember', function (member) {
member.createDM().then(function (channel){
    return channel.send('Bienvenue, nouveau sujet '+member.displayName)
}).catch(console.error)
})

bot.on('message', function (message) {
    if (message.content === '$test') {
        message.reply("1")
    }
    if (message.content === prefix + "help"){
        message.channel.send("**SupremBot** utilise le préfixe **$** pour fonctionner et permet entre autre d'aider l'Empereur Suprême dans sa gestion du serveur")
        console.log("Commande help demandé")
    }
    if (message.content === prefix + "die"){
        message.channel.send("Je meurs.")
    }
    if (message.author === 'xdry28') {
        message.channel.send("**SupremBot**")
    }
})

bot.login(process.env.TOKEN)
