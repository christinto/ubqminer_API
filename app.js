var express = require("express"); //keep express, exposes localhost
var app = express();
/* var https = require("https"); //not needed*/
var rp = require("request-promise"); //?

//for request-promise library it expects reqOptions 
var reqOptions ={
	method: 'GET',
	uri: 'https://ubiqpool.io/api/accounts/0xc6e9103d2faa3422dbc3016d9b85cf9617dfc4af',
	headers: {
    'user-agent': 'node.js'},
  json: true
};

//got rid of error from error,response,body
rp(reqOptions)
  .then(function(response, body) {
  ubqPayouts = body.paymentsTotal;
	activeMiners = body.workersTotal; 

	/*console.log('error:', error); // Print the error if one occurred */
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    console.log('body:', body);
})
     .catch(function(err) {
    console.log('request failed : '+err);
  });

// exposes to postman, necessary
 app.get("/getpayments", function(req, res) {
  rp({
    uri: 'https://ubiqpool.io/api/accounts/0xc6e9103d2faa3422dbc3016d9b85cf9617dfc4af',
    json:true 
  })
    .then((function(response) {response.pipe(res);
    res.send("Ubq miner payouts! " + ubqPayouts + " hell yeah")
  })
    .catch((err) {
      console.log(err)
      res.send('error')
    })
  })
   
 
app.listen(8087, function(){
	console.log("go");
});

