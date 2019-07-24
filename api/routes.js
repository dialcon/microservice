'use strict';

var controller = require('./controller');
//creación de todos las rutas de los endpoints usados en el API
module.exports = function (app) {
    app.route('/clients')
        .get(controller.list);
    app.route('/clients/:clientId([-0-9a-fA-F]{20})')
        .get(controller.get_client);
    app.route('/clients')
        .post(controller.put_client);
};