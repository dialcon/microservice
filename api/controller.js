'use strict';

let properties = require('../package.json');
let clients = require('../service/clients');


let controllers = {
    /**
     * Retorna el listado de clientes
     * @param {Object} req
     * @param {Object} res
     */
    list: function (req, res) {
        clients.list(req, res, function (err, resp) {
            if (err)
                res.send(err);
            res.json(resp);
        });
    },
    /**
     * Retorna un cliente en específico
     * @param {Object} req
     * @param {Object} res
     */
    get_client: function (req, res) {
        clients.find(req, res, function (err, client) {
            if (err)
                res.send(err);
            res.json(client);
        });
    },
    /**
     * Agrega un cliente
     * @param {Object} req
     * @param {Object} res
     */
    post_client: function (req, res) {
        let a = req.body;
        clients.insert(req, res, function (err, client) {
            if (err)
                res.send(err);
            res.json(client);
        });
    }
};

module.exports = controllers;