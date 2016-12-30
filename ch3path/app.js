var express = require("express");
var app = express();
var path = require("path");

app.set('port', 3000);

app.get('/', function(req, res){
    console.log("home page requsted");
    res
    .status(200)
    .sendFile(path.join(__dirname, 'public', 'index.html'));
});



var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
    console.log("Magic on " + port);
});
console.log("Me first");