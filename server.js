// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api", function (req, res) {
  const date = new Date();
  const timestamp = getTimestampObject(date);
  res.json(timestamp);

})

// your first API endpoint... 
app.get("/api/:date", function (req, res) {
  
  const date = new Date(isNaN(req.params.date) ? req.params.date : Number(req.params.date));
  
  const timestamp = getTimestampObject(date);

  if(timestamp.unix == null || timestamp.utc == "Invalid Date") 
  {
    res.json({error: "Invalid Date"})
    return;
  }
  res.json(timestamp);
});

function getTimestampObject(date)
{
  const unix = Date.parse(date);
  const utc = date.toUTCString();
  const timestamp = {
    unix: unix,
    utc: utc
  }
  return timestamp;
}



// listen for requests :)
var listener = app.listen(listener.address(), function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
