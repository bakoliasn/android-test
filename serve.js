const express = require('express')
const Smooch = require('smooch-core')
const bodyParser = require('body-parser')
const keyId = "app_5e6ea1044ac6fa000fe0c744"
const secret = "I_tQCYpXg9U3H1VwatDeMMJdYlV2XddeCzDbAbYomm913hC0MoQvKnbL28cB-sNJUJgtUNgRQiTJ7DItgjog0w"
const app=express()
const smooch = new Smooch({
	keyId,
	secret,
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
   8000, function(){
   console.log(
  'listening on localhott:8000'
  )
})
