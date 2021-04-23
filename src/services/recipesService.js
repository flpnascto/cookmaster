const Recipes = require('../models/recipesModel');
const validateRecipe = require('./validations/validateRecipe');

const create = async (name, ingredients, preparation, userId) => {
  const { code, message } = validateRecipe(name, ingredients, preparation);
  if (message) return { code, message };
  const { insertedId } = await Recipes.create(name, ingredients, preparation, userId);
  const newRecipe = {
    name,
    ingredients,
    preparation,
    userId,
    _id: insertedId,
  };

  return { code: 201, newRecipe };
};

module.exports = {
  create,
};
