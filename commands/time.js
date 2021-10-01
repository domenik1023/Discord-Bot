exports.run = async (client,message,args) => {
    let timeElapsed = Date.now();
    let today = new Date(timeElapsed);
    message.channel.send(today.toUTCString());
    console.log('Message send: ' + today.toUTCString());
}

exports.help = {
    name: "time"
}