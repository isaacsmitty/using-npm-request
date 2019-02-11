var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err) {
    console.log('error: ', err);

  })

  .on('response', function(response) {
    console.log('Code: ', response.statusCode, 'Message: ', response.statusMessage, 'Type: ', response.headers['content-type']);
  })

  .pipe(fs.createWriteStream('./future.jpeg'));