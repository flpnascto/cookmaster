const routes = require('express').Router();

const routeUsers = require('./usersRoute');
const routeLogin = require('./loginRoute');
const routeRecipes = require('./recipesRoute');
const routeImage = require('./imageRoute');

routes.use('/users', routeUsers);
routes.use('/login', routeLogin);
routes.use('/recipes', routeRecipes);
routes.use('/images', routeImage);

module.exports = routes;