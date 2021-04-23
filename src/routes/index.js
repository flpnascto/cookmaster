const routes = require('express').Router();

const routeUsers = require('./usersRoute');
const routeLogin = require('./loginRoute');
const routeRecipes = require('./recipesRoute');

routes.use('/users', routeUsers);
routes.use('/login', routeLogin);
routes.use('/recipes', routeRecipes);

module.exports = routes;