const Users = require('../services/usersService');

const create = async (req, res) => {
  const { name, email, password } = req.body;

  const { code, newUser, message } = await Users.create(name, email, password);
  if (message !== undefined) return res.status(code).json({ message });
  res.status(code).json({ user: newUser });
};

const createAdmin = async (req, res) => {
  const { isAdmin } = res.locals;
  if (isAdmin) {
    const { name, email, password } = req.body;
    const role = 'admin';
    const { code, newUser, message } = await Users.create(name, email, password, role);
    if (message !== undefined) return res.status(code).json({ message });
    return res.status(code).json({ user: newUser });
  }
  res.status(403).json({ message: 'Only admins can register new admins' });
};

module.exports = {
  create,
  createAdmin,
};