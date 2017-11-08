var qs = require("querystring");
var http = require("https");

var options = {
  "method": "POST",
  "hostname": "gatewaystaging.payscout.com",
  "port": null,
  "path": "/api/process",
  "headers": {
    "content-type": "application/x-www-form-urlencoded",
    "cache-control": "no-cache"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(qs.stringify({ client_username: '{yourUsername}',
  client_password: '{yourPassword}',
  client_token: 'token',
  processing_type: 'REFUND',
  currency: 'USD',
  initial_amount: '99.99',
  original_transaction_id: 'A0001FFCDJ9' }));
req.end(); 
