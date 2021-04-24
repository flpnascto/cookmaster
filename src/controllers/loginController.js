const jwt = require('jsonwebtoken');
const Users = require('../services/usersService');

const SECRET = 'secretkey';
const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

module.exports = async (req, res) => {
  const { email, password } = req.body;

  const { code, user, message } = await Users.findByEmailAndPassword(email, password);
  if (message) return res.status(code).json({ message });

  let admin = false;
  if (user.role === 'admin') admin = true;

  const payload = {
    username: user.email,
    admin,
  };

  const token = jwt.sign(payload, SECRET, jwtConfig);

  res.status(code).json({ token });
};
