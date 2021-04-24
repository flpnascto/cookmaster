const jwt = require('jsonwebtoken');
const Users = require('../models/usersModel');

const SECRET = 'secretkey';

const authController = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'missing auth token' });

  try {
    const payload = jwt.verify(token, SECRET);
    const { _id } = await Users.findByEmail(payload.username);

    // from: https://reactgo.com/express-pass-variables-middleware/
    res.locals.id = _id;
    res.locals.isAdmin = payload.admin;
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }

  next();
};

module.exports = authController;