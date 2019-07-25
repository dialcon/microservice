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
    },
    find: function (req, res, next) {
        request('https://testbankapi.firebaseio.com/clients.json',
            function (error, response, body) {
                if (error && error.statusCode) {
                    return res.status(error.statusCode).send(err);
                } else if (error) {
                    return res.status(500).send([error, response.body]);
                }

                response = _.find(JSON.parse(body), {
                    identification: req.params.clientId
                });
                res.send({ 'results': response });
            });
    },
    insert: function (req, res, next) {
        request.post({
            url: `https://testbankapi.firebaseio.com/clients.json`,
            json: true,
            body: req.body
        }, function (error, response, body) {
            if (error || response.statusCode !== 200) {
                body.statusCode = response.statusCode;
                return res.status(500).send(error || body);
            }
            res.send({ 'results': body });
        });
    }
};

module.exports = clients;