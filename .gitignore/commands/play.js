const command = require('./command')

module.export = class Play extends commands {

    static match(message) {
        return message.content.startsWith('$play')
    }

    static action(message) {
        let voiceChannel = message.guild.channels
        .filter(function (channel) {return channel.type === 'voice'})
        .first()
        voiceChannel 
        .join
        .then(function (connection) {
            connection.playFile('./Teleboubizes.wav')
        })
    }
}