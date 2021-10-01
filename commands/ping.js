exports.run = async (client,message,args) => {
    message.channel.send("pong!");
    console.log("Message send: pong!");
}

exports.help = {
    name: "ping"
}