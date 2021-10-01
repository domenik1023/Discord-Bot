const { Formatters } = require("discord.js");

exports.run = async (client,message,args) => {
    let member = message.mentions.members.first();
    if(!member){message.channel.send("Good morning :)");}
    else {
        let mentiond_member = Formatters.userMention(member.user.id) 
        message.channel.send(`Hello ${mentiond_member}`)
    }
    console.log("Message send: Good morning :)");
}

exports.help = {
    name: "hello"
}