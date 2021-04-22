const Users = require('../services/usersService');

const create = async (req, res) => {
  const { name, email, password } = req.body;

  const { code, newUser, message } = await Users.create(name, email, password);
  if (message !== undefined) return res.status(code).json({ message });
  res.status(code).json({ user: newUser });
};

module.exports = {
  create,
};