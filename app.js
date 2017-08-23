var express = require("express"); //keep express, exposes localhost
var app = express();
/* var https = require("https"); //not needed*/
var rp = require("request-promise");

//for request-promise library it expects reqOptions
var reqOptions = {
	method: 'GET',
	url: 'https://ubiqpool.io/api/accounts/0xc6e9103d2faa3422dbc3016d9b85cf9617dfc4af',
	headers: {
    'user-agent': 'Request-Promise'
	},
	json: true
};

// exposes to postman, necessary
 app.get("/getpayments", function(req, res) {
	 //got rid of error from error,response,body
		rp(reqOptions).then(function (data) {
			//  	ubqPayouts = body.paymentsTotal;
			// 	activeMiners = body.workersTotal;

	 	/*console.log('error:', error); // Print the error if one occurred */
	    //  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	     console.log('data.payments:', data.payments);

			// Use res to send back the response as json of the data.payments object
			 res.send(data.payments);
	 	 }).catch(function(err) {
	     console.log('request failed : '+ err);
	   });
  })

app.listen(8080, function(){
	console.log("app.js running");
});
