const routes = require('express').Router();

const routeUsers = require('./usersRoute');

routes.use('/users', routeUsers);

module.exports = routes;