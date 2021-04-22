const router = require('express').Router();
const Users = require('../controllers/usersController');

router.route('/')
  .get()
  .post(Users.create)
  .put()
  .delete();

router.route('/admin')
  .get()
  .post()
  .put()
  .delete();

module.exports = router;
