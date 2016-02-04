var express = require('express');
var path = require('path');
var app = express();

//Serving static files
app.use("/bower_components",express.static(path.join(__dirname + '/bower_components')));
app.use("/src",express.static(path.join(__dirname + '/src')));
// This responds a POST request for the homepage
app.get('/largetraders', function (req, res) {
    console.log("Loading large-trader-home landing page");
    res.sendFile(__dirname+"/src/"+"large-trader-home.html");
})


var server = app.listen(8080, function () {
    var port = server.address().port
    console.log(__dirname + '/bower_components');
    console.log("Example app listening at http://localhost:%s", port)

})