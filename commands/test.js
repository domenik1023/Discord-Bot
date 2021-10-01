const { Formatters } = require("discord.js");

exports.run = async (client,message,args) => { //Waits for a response from something thats happening right now
    //let output = Formatters.hyperlink("Test", "https://google.de")
    let output = Formatters.codeBlock("Hey!\n\nHey!")
    message.channel.send(output)
    console.log("Test");//Console Log
}

exports.help = {
    name: "test" //Command name here to call command via: /
}