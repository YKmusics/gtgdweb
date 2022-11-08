const express = require("express");
const app = express();
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const bodyParser = require("body-parser")
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]});
var toke = process.env.token
const pug = require("pug")
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
var formidable = require('formidable');
app.use(bodyParser.urlencoded({ extended: true }));
const rateLimit = require('express-rate-limit')
const Database = require("easy-json-database")
const db = new Database("./database.json")

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 50, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
app.use(limiter)
app.db = db

app.set("view engine", "pug")

require("./routes")(app, client)

app.post("/suggestionPost", async (req, res) => {
    var body = req.body
    if(!body.type || !body.title || !body.growid || !body.description) res.render("error", {navtitle:"Error", error: "Please fill out all required fields."})
    var channel = await client.channels.fetch("1039385048429903902")
    var embed = new EmbedBuilder()
    .setTitle("New suggestion!")
    .addFields({"name":"Suggestion type", value: body.type}, {name:"GrowID", value: body.growid}, {name: body.title, value: body.description})
    .setColor(0x00FF00)
    channel.send({embeds:[embed]})
    res.render("success", {navtitle:"Success", successmsg: "Suggestion was published successfully."})
})

app.post("/adminLoginPost", (req, res) => {
	var paneldata = app.db.get("paneldata")
	var username = process.env.panelusername
	var password = process.env.panelpassword
	var postUsername = req.body.username
	var postPassword = req.body.password
	if(!postUsername || !postPassword) return res.render("error", {navtitle:"Error", error: "Please fill all required fields."})
	if(postUsername !== username || postPassword !== password) return res.render("error", {navtitle: "Error", error: "Username/Password doesn't match."})
	res.render("panel", {navtitle: "Admin Panel", paneldata: paneldata})
})

app.listen(3000, () => {
  console.log("Express Ready")
})

	process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});
try {
client.login(token);
} catch(e) {
	const { exec } = require('child_process');
/*exec('kill 1', (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    return;
  }

  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});*/
}


