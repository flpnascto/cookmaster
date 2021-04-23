const router = require('express').Router();
const Auth = require('../controllers/authController');
const Recipes = require('../controllers/recipesController');

router.route('/')
  .get()
  .post(Auth, Recipes.create)
  .put()
  .delete();

router.route('/:id')
  .get()
  .post()
  .put()
  .delete();

router.route('/:id/image')
  .get()
  .post()
  .put()
  .delete();

module.exports = router;
