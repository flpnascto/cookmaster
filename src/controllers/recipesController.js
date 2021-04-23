const Recipes = require('../services/recipesService');

const create = async (req, res) => {
  const { name, ingredients, preparation } = req.body;
  // from: https://reactgo.com/express-pass-variables-middleware/
  const userId = res.locals.id;

  const { code, newRecipe, message } = await Recipes.create(name, ingredients, preparation, userId);
  if (message !== undefined) return res.status(code).json({ message });
  res.status(code).json({ recipe: newRecipe });
};

module.exports = {
  create,
};