const router = require('express').Router();
const Users = require('../controllers/usersController');
const Auth = require('../controllers/authController');

router.route('/')
  .get()
  .post(Users.create)
  .put()
  .delete();

router.route('/admin')
  .get()
  .post(Auth, Users.createAdmin)
  .put()
  .delete();

module.exports = router;
