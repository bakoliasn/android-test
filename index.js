const express = require('express')
const Smooch = require('smooch-core')
const bodyParser = require('body-parser')
const config = require('./config.js')
const ngrok = require('ngrok')

const app=express()
const smooch = new Smooch({
	keyId: config.keyId,
	secret: config.secret,
	scope: 'app'
})
app.use(bodyParser.json())
app.post('/messages', function(req, res){
	console.log(JSON.stringify(req.body, null, 4))
	
	})
	
app.get("/", function(req, res){
    res.send("hello poo")
})

 app.listen(
   process.env.port ||
   8000, function(){
   console.log(
  'listening on: ' + (process.env.port || ' localhost: 8000')  )
})

async function expose(port){
	const url = await ngrok.connect(port)
	console.log(url)
	const webhook = smooch.webhooks.create(
		{
			target: url + "/messages",
			triggers:["message: appUser"]
		}
	)
	console.log(webhook)
}
expose(8000)


