const jwt = require('jsonwebtoken');
const Users = require('../models/usersModel');

const SECRET = 'secretkey';

const authController = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Sem token' });

  const decode = jwt.decode(token);
  if (decode === null) return res.status(401).json({ message: 'jwt malformed' });

  const payload = jwt.verify(token, SECRET);

  const { _id } = await Users.findByEmail(payload.username);

  // from: https://reactgo.com/express-pass-variables-middleware/
  res.locals.id = _id;
  next();
};

module.exports = authController;