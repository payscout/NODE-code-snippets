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
  processing_type: 'PRE_AUTHORIZATION',
  billing_first_name: 'John',
  billing_last_name: 'Doe',
  billing_phone_number: '2455464',
  billing_address_line_1: 'Innovation Street 1',
  billing_address_line_2: 'Brilliance Building, Apt. 22',
  billing_city: 'Palo Alto',
  billing_state: 'CA',
  billing_postal_code: '94024',
  billing_country: 'US',
  billing_email_address: 'demo@payscout.com',
  ip_address: '98.97.129.52',
  billing_date_of_birth: '19801229',
  billing_social_security_number: '000000000',
  expiration_month: '10',
  expiration_year: '2022',
  account_number: '{yourTestCardNumber}',
  cvv2: '123',
  currency: 'USD',
  initial_amount: '99.99',
  shipping_first_name: 'Amazing',
  shipping_last_name: 'Jane',
  shipping_email_address: 'demoshipping@payscout.com',
  shipping_cell_phone_number: '74477464',
  shipping_phone_number: '7447746400',
  shipping_address_line_1: 'Innovation Street 1',
  shipping_address_line_2: 'Brilliance Building, Apt. 22',
  shipping_city: 'Palo Alto',
  shipping_state: 'CA',
  shipping_postal_code: '94024',
  shipping_country: 'US',
  billing_invoice_number: '1999' }));
req.end();
