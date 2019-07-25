const express = require('express');
const app = express();
const port = process.env.PORT || 3020;
const bodyParser = require('body-parser');
const routes = require('./api/routes');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes(app);
app.listen(port, function () {
    console.log('started on port: ' + port);
});