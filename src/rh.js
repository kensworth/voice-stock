var Robinhood = require('robinhood');
var env = require('node-env-file');
env('./.env');
var username = process.env.USERNAME;
var password = process.env.PASSWORD;

stock = 'GOOG';
Robinhood(null).quote_data(stock, function(error, response, body) {
    if (error) {
        console.error(error);
        process.exit(1);
    }
    console.log(body);
});

/* var rh = Robinhood({username:username, password:password}, function() {
    rh.positions(function(error, response, body) {
        console.log(error);
        console.log(response);
        console.log(body);
    });    
});*/
