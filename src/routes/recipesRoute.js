const router = require('express').Router();
const multer = require('multer');
// const path = require('path');
const Auth = require('../controllers/authController');
const Recipes = require('../controllers/recipesController');

const upload = multer({
  storage: multer.diskStorage({
    destination: 'uploads/',
    filename(req, file, callback) {
      const { id } = req.params;
      // const fileName = id + path.extname(file.originalname);
      const fileName = `${id}.jpeg`;
      return callback(null, fileName);
    },
  }),
});

router.route('/')
  .get(Recipes.findAll)
  .post(Auth, Recipes.create)
  .put()
  .delete();

router.route('/:id')
  .get(Recipes.findById)
  .post()
  .put(Auth, Recipes.update)
  .delete(Auth, Recipes.remove);

router.route('/:id/image')
  .get()
  .post()
  .put(Auth, upload.single('image'), Recipes.updateImage)
  .delete();

module.exports = router;
