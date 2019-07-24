const request = require('request');
const _ = require('lodash');



let clients = {
    list: function (req, res, next) {
        request('https://testbankapi.firebaseio.com/clients.json',
            function (error, response, body) {
                if (error && error.statusCode) {
                    return res.status(error.statusCode).send(err);
                } else if (error) {
                    return res.status(500).send([error, response.body]);
                }
                response = JSON.parse(body);
                res.send({ 'results': response });
            });
    }
};

module.exports = clients;