exports.run = async (client,message,args) => { //Waits for a response from something thats happening right now
    output = "OUTPUT HERE!"
    message.channel.send(output);//COMMAND HERE
    console.log(output);//Console Log
}

exports.help = {
    name: "DEFAULT" //Command name here to call command via: /
}