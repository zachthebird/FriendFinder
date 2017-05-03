var express = require('express');

var path = require('path');

var bodyParser = require('body-parser');

var port = process.env.PORT || 4444;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);




app.listen(port, function(req, res){
    console.log("Listening on port "+port);
});