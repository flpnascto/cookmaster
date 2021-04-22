const routes = require('express').Router();

const routeUsers = require('./usersRoute');
const routeLogin = require('./loginRoute');

routes.use('/users', routeUsers);
routes.use('/login', routeLogin);

module.exports = routes;