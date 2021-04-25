const Recipe = require('../services/recipesService');

module.exports = async (req, res) => {
  const { id } = req.params;

  const { code, message } = await Recipe.findById(id);
  if (message !== undefined) return res.status(code).json({ message });

  const imagePath = `${__dirname}/uploads/${id}.jpeg`;

  res.status(200).sendFile(imagePath);
};
