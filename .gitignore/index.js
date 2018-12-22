const Discord = require('discord.js')
const bot = new Discord.Client
var prefix = ("$")

bot.on('ready', function () {
    bot.user.setActivity("Détruire l'humanité")
    console.log("Bot connecté")
})

//return message.channel.send('Bienvenue, nouveau sujet '+member.displayName)

bot.on('guildMemberAdd', member => {
    let role = message.guild.roles.find(r => r.name === "Roi");

    // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
    let member = message.mentions.members.first();

    // or the person who made the command: let member = message.member;

    // Add the role!
    member.addRole(role).catch(console.error);
})
    //var role = member.guild.roles.find('name', 'Roi');
    /*var role = message.guild.roles.find(r => r.name === "Roi");
    member.addRole(role)
    message.channel.sendMessage('Bienvenue, nouveau sujet ' + member.displayName)
});*/

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
