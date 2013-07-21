var express = require('express');
var app = express();
app.use(express.logger());

var buff = fs.readFileSync("index.html");
buff.toString();

app.get('/', function(request, response) {
  response.send(buff);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
