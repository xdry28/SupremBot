const command = require('./command')

module.export = class Ping extends commands {

    static match(message) {
        return message.content.startsWith('$ping')
    }

    static action(message) {
        message.reply('pong')
    }
}