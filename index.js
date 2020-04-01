const express = require('express')
const Smooch = require('smooch-core')
const bodyParser = require('body-parser')
const config = require('./config.js')

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
app.post("/messages", function(req, rea){
	
})
 app.listen(
   process.env.port ||
   8000, function(){
   console.log(
  'listening on: ' + process.env.port || ' localhost: 8000'
  )
})

