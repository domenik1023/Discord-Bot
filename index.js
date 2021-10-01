
const Discord = require('discord.js')
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const fs = require('fs')
const config = require('./config.json');
client.commands = new Discord.Collection();

client.on('ready', () => {
    console.log("Discord bot is Online")

    fs.readdir('./commands', (err, files) => {
        if(err) return console.log(err);
        let jsfile = files.filter(f => f.split(".").pop() == 'js');

        if (jsfile.length == 0) {return console.log("No commands found!")}
        jsfile.forEach(f => {
            let props = require(`./commands/${f}`)
            client.commands.set(props.help.name, props)
        })
    })
});

/*
 *      Simple Command Handler
 */
client.on('messageCreate', (message) => {
    if(message.author == client.user) return;
    if(message.channel.type !== 'GUILD_TEXT') return;
    console.log("Message Recieved")
    let prefix = '!';
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length);
    let args = MessageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;

    let commandfile = client.commands.get(cmd);
    if(commandfile) {commandfile.run(client,message,args)}
});

client.login(config.token)
 