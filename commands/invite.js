const { GuildMemberManager, GuildMember, DiscordAPIError } = require("discord.js");

const guildmember = new Discord.GuildMember

exports.run = async (client,message,args) => { //Waits for a response from something thats happening right now
    let user_mentiond = message.mentions.users.first();
    if(!user_mentiond){console.log("No User found!")}
    else{
        GuildMember.add()
    }
    
    console.log(user_mentiond);//Console Log
}

exports.help = {
    name: "invite" //Command name here to call command via: /
}