const request = require('request');
const _ = require('lodash');



let clients = {
    list: function (req, res, next) {
        request(zipCodeURL + apiKey
            + '/distance.json/' + req.params.zipcode1 + '/'
            + req.params.zipcode2 + '/mile',
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    response = JSON.parse(body);
                    res.send(response);
                } else {
                    console.log(response.statusCode + response.body);
                    res.send({ distance: -1 });
                }
            });

    }
};

module.exports = clients;