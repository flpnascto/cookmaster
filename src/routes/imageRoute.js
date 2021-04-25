const router = require('express').Router();
const Image = require('../controllers/imageController');

router.route('/:id')
  .get(Image)
  .post()
  .put()
  .delete();

module.exports = router;