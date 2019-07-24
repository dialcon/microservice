var express = require('express');
var app = express();
var port = process.env.PORT || 3020;

var routes = require('./api/routes');
routes(app);
app.listen(port, function () {
    console.log('started on port: ' + port);
});