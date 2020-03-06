const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const bot = new discord.Client();


bot.on("ready", async () => {

console.log(`${bot.user.username} is online!`)

bot.user.setActivity("Nieuw-HollandRP", {type: "PLAYING"});
});



bot.on ( "message", async message => {

// als de bot bericht stuurt stuur dan return
if (message.author.bot) return;

if(message.channel.type === "dm") return;

var prefix = botConfig.prefix;

var messageArray = message.content.split(" ");

var command = messageArray[0];

var arguments = messageArray.slice[1];

if( command === `${prefix}1231231`){

return message.channel.send("hooky heeft deze bot gedevelopt");
}

if( command === `${prefix}discord`){
    return message.channel.send("https://discord.gg/Pk5BmMS");
}

if(command === `${prefix}ip`){
return message.channel.send("ip komt er zo snel mogelijk aan ")

}

if(command === `${prefix}hulp`){

    return message.channel.send("1 maak een ticket aan, vraag iemand van het staffteam ")
}

if(command === `${prefix}OOF`){
return message.channel.send(`OOF`)

}
});






bot.login(process.env.token);