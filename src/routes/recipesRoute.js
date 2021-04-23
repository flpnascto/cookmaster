const router = require('express').Router();
const Auth = require('../controllers/authController');
const Recipes = require('../controllers/recipesController');

router.route('/')
  .get(Recipes.findAll)
  .post(Auth, Recipes.create)
  .put()
  .delete();

router.route('/:id')
  .get(Recipes.findById)
  .post()
  .put()
  .delete();

router.route('/:id/image')
  .get()
  .post()
  .put()
  .delete();

module.exports = router;
