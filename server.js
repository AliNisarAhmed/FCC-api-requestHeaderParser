// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.get('/api/whoami', function (req, res) {
  console.log(req.ip);
  let ipaddress = req.headers['x-forwarded-for'].split(',')[0];
  let software = req.headers['user-agent'];
  let language = req.headers['accept-language'];
  res.json({ ipaddress, software, language });
});


// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
