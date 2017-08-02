var express = require("express");
var app = express();
var request = require("request");

//like the first example, call request
request({
	url: "https://ubiqpool.io/api/accounts/0xc6e9103d2faa3422dbc3016d9b85cf9617dfc4af",
	json: true
}, function(error, response, body) {
	ubqPayouts = body.paymentsTotal;

	console.log('error:', error); // Print the error if one occurred 
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    console.log('body:', body);
});


app.get("/", function(req, res) {
	res.send("Ubq miner payouts! " + ubqPayouts + " hell yeah");
});

app.listen(8084, function(){
	console.log("go");
});


//to send a html file instead of a string, just change send to sendfile
/*app.get("/workers", function(req, res) {
	res.sendfile("index.html");
}); 

/*if you wanna do other endpoints, just keepadding these app functions :)..
app.get("/block", function(req, res) {
	res.send("Current bitcoin blockheight " + btcBlocks);
}); */



