var express = require('express');

var path = require('path');

var bodyParser = require('body-parser');

var port = 4444;

var app = express();


require('./app/routing/htmlRoutes.js')(app, path);
// require('./app/routing/apiRoutes.js')(app, path);
require('./app/routing/apiRoutes.js')(app, path);

app.listen(port, function(req, res){
    console.log("Listening on port "+port);
});