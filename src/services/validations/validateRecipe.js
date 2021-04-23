const isRequired = require('./isRequired');
const errorMessage = require('./errorMessage');

const validateName = (name) => isRequired(name);
const validateIndredients = (ingredients) => isRequired(ingredients);
const validadePreparations = (preparation) => isRequired(preparation);

const validateRecipe = (name, ingredients, preparation) => {
  switch (true) {
    case validateName(name):
    case validateIndredients(ingredients):
    case validadePreparations(preparation):
      return { code: 400, message: errorMessage.invalid };
    default: return {};
  }
};

module.exports = validateRecipe;