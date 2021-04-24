const { ObjectId } = require('bson');
const Recipes = require('../models/recipesModel');
const validateRecipe = require('./validations/validateRecipe');
const errorMessage = require('./validations/errorMessage');

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

const findAll = async () => {
  const recipes = await Recipes.findAll();

  return { code: 200, recipes };
};

const findById = async (id) => {
  if (!ObjectId.isValid(id)) return { code: 404, message: errorMessage.recipeInvalid };

  const recipe = await Recipes.findById(id);

  if (recipe === null) return { code: 404, message: errorMessage.recipeInvalid };

  return { code: 200, recipe };
};

const update = async (id, name, ingredients, preparation) => {
  if (!ObjectId.isValid(id)) return { code: 404, message: errorMessage.recipeInvalid };
  const { code, message } = validateRecipe(name, ingredients, preparation);
  if (message) return { code, message };
  const { matchedCount } = await Recipes.update(id, name, ingredients, preparation);
  if (matchedCount !== 1) return { code: 404, message: errorMessage.recipeInvalid };
  return findById(id);
};

module.exports = {
  create,
  findAll,
  findById,
  update,
};
